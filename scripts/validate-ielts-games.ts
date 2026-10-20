import { WORD_UPGRADE_ITEMS } from "../lib/games/word-upgrade";
import { PHRASE_UPGRADE_ITEMS } from "../lib/games/phrase-upgrade";
import type { QuizQuestion } from "../types";
import type { WordUpgradeItem, PhraseUpgradeItem } from "../lib/games/types";

interface ValidationError {
  game: string;
  id: string;
  field: string;
  message: string;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function validateDataset(
  gameName: string,
  items: (WordUpgradeItem | PhraseUpgradeItem)[],
  requireNonEmpty: boolean = true
): { errors: ValidationError[]; positionCounts: number[] } {
  const errors: ValidationError[] = [];
  const idSet = new Set<string>();
  const basicWordAndAnswerSet = new Set<string>();
  const sentenceSet = new Set<string>();
  const positionCounts = [0, 0, 0, 0];

  if (items.length === 0) {
    if (requireNonEmpty) {
      errors.push({
        game: gameName,
        id: "dataset",
        field: "items",
        message: "Dataset is empty",
      });
    }
    return { errors, positionCounts };
  }

  for (let idx = 0; idx < items.length; idx++) {
    const item = items[idx];
    const itemId = item.id || `index-${idx}`;

    // 1. Unique ID
    if (!item.id || item.id.trim() === "") {
      errors.push({
        game: gameName,
        id: itemId,
        field: "id",
        message: "ID is missing or empty",
      });
    } else if (idSet.has(item.id)) {
      errors.push({
        game: gameName,
        id: item.id,
        field: "id",
        message: `Duplicate ID found: "${item.id}"`,
      });
    } else {
      idSet.add(item.id);
    }

    // 2. Options: exactly 4, all different (case-insensitive)
    if (!Array.isArray(item.options) || item.options.length !== 4) {
      errors.push({
        game: gameName,
        id: itemId,
        field: "options",
        message: `Must have exactly 4 options, found ${item.options?.length ?? 0}`,
      });
    } else {
      const lowerOptions = item.options.map((opt) => (opt ?? "").trim().toLowerCase());
      const uniqueOptions = new Set(lowerOptions);
      if (uniqueOptions.size !== 4) {
        errors.push({
          game: gameName,
          id: itemId,
          field: "options",
          message: `Options contain duplicates (case-insensitive): [${item.options.join(", ")}]`,
        });
      }
      for (const opt of item.options) {
        if (!opt || opt.trim() === "") {
          errors.push({
            game: gameName,
            id: itemId,
            field: "options",
            message: "Option contains empty or whitespace-only string",
          });
        }
      }
    }

    // 3. Correct index 0 to 3
    if (
      typeof item.correct !== "number" ||
      !Number.isInteger(item.correct) ||
      item.correct < 0 ||
      item.correct > 3
    ) {
      errors.push({
        game: gameName,
        id: itemId,
        field: "correct",
        message: `Correct index must be integer 0 to 3, got: ${item.correct}`,
      });
    } else {
      positionCounts[item.correct]++;
    }

    // 4. Marked blank: exactly one marked blank [ ... ]
    const questionText = item.question || "";
    const blankMatches = questionText.match(/\[[^\]]+\]/g);
    if (!blankMatches || blankMatches.length !== 1) {
      errors.push({
        game: gameName,
        id: itemId,
        field: "question",
        message: `Sentence must contain exactly one marked blank [...]. Found ${
          blankMatches ? blankMatches.length : 0
        }`,
      });
    }

    // Extract basic word from blank or target field
    let basicWord = "";
    if (blankMatches && blankMatches.length === 1) {
      basicWord = blankMatches[0].slice(1, -1).trim().toLowerCase();
    }

    // 5. Correct answer check
    const correctAnswer =
      Array.isArray(item.options) && item.options[item.correct]
        ? item.options[item.correct].trim()
        : "";

    if (correctAnswer) {
      // Correct answer must not already appear in the sentence
      const escapedAnswer = escapeRegex(correctAnswer);
      const answerRegex = new RegExp(`(^|[^a-zA-Z0-9])${escapedAnswer}([^a-zA-Z0-9]|$)`, "i");
      if (answerRegex.test(questionText)) {
        errors.push({
          game: gameName,
          id: itemId,
          field: "question",
          message: `Correct answer "${correctAnswer}" already appears in sentence: "${questionText}"`,
        });
      }

      // 6. No duplicate or near-duplicate sentences
      // "same basic word plus same correct answer counts as a duplicate"
      const pairKey = `${basicWord} -> ${correctAnswer.toLowerCase()}`;
      if (basicWordAndAnswerSet.has(pairKey)) {
        errors.push({
          game: gameName,
          id: itemId,
          field: "duplicate",
          message: `Duplicate item found (same basic word + correct answer): "${pairKey}"`,
        });
      } else {
        basicWordAndAnswerSet.add(pairKey);
      }

      // Normalized sentence duplicate check
      const normalizedSentence = questionText
        .toLowerCase()
        .replace(/\[[^\]]+\]/g, "___")
        .replace(/[^a-z0-9_]/g, "")
        .trim();
      if (sentenceSet.has(normalizedSentence)) {
        errors.push({
          game: gameName,
          id: itemId,
          field: "duplicate_sentence",
          message: `Duplicate sentence structure found: "${questionText}"`,
        });
      } else {
        sentenceSet.add(normalizedSentence);
      }
    }

    // 7. Non-empty explanation
    if (!item.explanation || item.explanation.trim() === "") {
      errors.push({
        game: gameName,
        id: itemId,
        field: "explanation",
        message: "Explanation is missing or empty",
      });
    }

    // 8. Topic or Category check
    if ("domain" in item) {
      const wuItem = item as WordUpgradeItem;
      if (!wuItem.domain || wuItem.domain.trim() === "") {
        errors.push({
          game: gameName,
          id: itemId,
          field: "domain",
          message: "Domain (topic) is missing or empty",
        });
      }
    } else if ("category" in item) {
      const puItem = item as PhraseUpgradeItem;
      if (!puItem.category || puItem.category.trim() === "") {
        errors.push({
          game: gameName,
          id: itemId,
          field: "category",
          message: "Category is missing or empty",
        });
      } else if (
        !["writing-task-1", "writing-task-2", "speaking"].includes(puItem.category)
      ) {
        errors.push({
          game: gameName,
          id: itemId,
          field: "category",
          message: `Invalid category "${puItem.category}". Must be writing-task-1, writing-task-2, or speaking`,
        });
      }
    }
  }

  // 9. Correct answers spread across positions in data (not all at index 0)
  if (items.length > 0) {
    const isAllSame = positionCounts.some((count) => count === items.length);
    if (isAllSame) {
      errors.push({
        game: gameName,
        id: "spread",
        field: "correct_distribution",
        message: `All correct answers are at the same position! Counts: [0: ${positionCounts[0]}, 1: ${positionCounts[1]}, 2: ${positionCounts[2]}, 3: ${positionCounts[3]}]`,
      });
    }

    // For datasets with >= 20 items, require each index to have at least 15% representation
    if (items.length >= 20) {
      const minRequired = Math.floor(items.length * 0.15);
      for (let pos = 0; pos < 4; pos++) {
        if (positionCounts[pos] < minRequired) {
          errors.push({
            game: gameName,
            id: "spread",
            field: "correct_distribution",
            message: `Position ${pos} has only ${positionCounts[pos]} items (expected at least ${minRequired} for ${items.length} items)`,
          });
        }
      }
    }
  }

  return { errors, positionCounts };
}

function runValidation() {
  console.log("=================================================");
  console.log("  IELTS Games Data Validation (Word & Phrase)    ");
  console.log("=================================================\n");

  const wuResult = validateDataset(
    "Word Upgrade (lib/games/word-upgrade.ts)",
    WORD_UPGRADE_ITEMS,
    true
  );

  // If Phrase Upgrade items haven't been added yet (Part 1 initial run), don't fail for empty, but validate if present
  const puRequireNonEmpty = PHRASE_UPGRADE_ITEMS.length > 0;
  const puResult = validateDataset(
    "Phrase Upgrade (lib/games/phrase-upgrade.ts)",
    PHRASE_UPGRADE_ITEMS,
    puRequireNonEmpty
  );

  console.log("--- Word Upgrade Summary ---");
  console.log(`Total items: ${WORD_UPGRADE_ITEMS.length}`);
  console.log(
    `Answer position distribution: [0: ${wuResult.positionCounts[0]}, 1: ${wuResult.positionCounts[1]}, 2: ${wuResult.positionCounts[2]}, 3: ${wuResult.positionCounts[3]}]`
  );
  console.log(`Errors found: ${wuResult.errors.length}\n`);

  console.log("--- Phrase Upgrade Summary ---");
  console.log(`Total items: ${PHRASE_UPGRADE_ITEMS.length}`);
  console.log(
    `Answer position distribution: [0: ${puResult.positionCounts[0]}, 1: ${puResult.positionCounts[1]}, 2: ${puResult.positionCounts[2]}, 3: ${puResult.positionCounts[3]}]`
  );
  console.log(`Errors found: ${puResult.errors.length}\n`);

  const allErrors = [...wuResult.errors, ...puResult.errors];

  if (allErrors.length > 0) {
    console.error("❌ VALIDATION FAILED! The following errors were found:\n");
    for (const err of allErrors) {
      console.error(`[${err.game}] [${err.id}] [${err.field}]: ${err.message}`);
    }
    console.log(`\nTotal failures: ${allErrors.length}`);
    process.exit(1);
  } else {
    console.log("✅ ALL CHECKS PASSED! Data is valid and balanced.");
    process.exit(0);
  }
}

runValidation();
