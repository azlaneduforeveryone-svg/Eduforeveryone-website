import { DUAS_DATABASE, DUA_CATEGORIES, LanguageCode } from "../lib/duasData";
import { execSync } from "child_process";
import ts from "typescript";

const REQUIRED_LANGUAGES: LanguageCode[] = ["en", "ur", "hi", "tr", "es", "fr", "bn", "id"];

function validateDuas() {
  console.log("Running validation on DUAS_DATABASE...");
  let errors: string[] = [];

  // 1. DUA_CATEGORIES icon check
  for (const cat of DUA_CATEGORIES) {
    if (/^<.*>$/.test(cat.icon)) {
      errors.push(`Category icon defect found: category '${cat.id}' has placeholder icon '${cat.icon}'.`);
    }
  }

  const seenIds = new Set<string>();

  for (const item of DUAS_DATABASE) {
    // Unique ID check
    if (seenIds.has(item.id)) {
      errors.push(`Duplicate id found: '${item.id}'.`);
    }
    seenIds.add(item.id);

    // Arabic non-empty and contains Arabic range codepoint
    if (!item.arabic || !/[\u0600-\u06FF]/.test(item.arabic)) {
      errors.push(`Invalid arabic text in id '${item.id}'.`);
    }

    // All eight LanguageCode keys present and non-empty + safety checks
    for (const lang of REQUIRED_LANGUAGES) {
      const val = item.translations[lang];
      if (!val || val.trim().length === 0) {
        errors.push(`Missing or empty translation for language '${lang}' in id '${item.id}'.`);
        continue;
      }

      // Safety check: identical to dua title
      if (val === item.title.en || val === item.title.ur || val === item.title.ar) {
        errors.push(`Translation for language '${lang}' in id '${item.id}' is identical to the dua title: "${val}"`);
      }

      // Safety check: shorter than 20 characters
      if (val.trim().length < 20) {
        errors.push(`Translation for language '${lang}' in id '${item.id}' is shorter than 20 characters (${val.trim().length}): "${val}"`);
      }

      // Safety check: contains "..."
      if (val.includes("...")) {
        errors.push(`Translation for language '${lang}' in id '${item.id}' contains '...': "${val}"`);
      }
    }

    // No Arabic codepoints in en, es, fr, tr, id
    const nonArabicLangs: (keyof typeof item.translations)[] = ["en", "es", "fr", "tr", "id"];
    for (const lang of nonArabicLangs) {
      if (/[\u0600-\u06FF]/.test(item.translations[lang])) {
        errors.push(`Arabic codepoint detected in '${lang}' translation for id '${item.id}': "${item.translations[lang]}"`);
      }
    }

    // No Devanagari-range letters appear outside hi (excluding shared Indic punctuation danda \u0964 and \u0965)
    for (const lang of REQUIRED_LANGUAGES) {
      if (lang !== "hi" && /[\u0900-\u0963\u0966-\u097F]/.test(item.translations[lang])) {
        errors.push(`Devanagari letter detected outside 'hi' in '${lang}' translation for id '${item.id}'.`);
      }
    }

    // No Bengali codepoints outside bn
    for (const lang of REQUIRED_LANGUAGES) {
      if (lang !== "bn" && /[\u0980-\u09FF]/.test(item.translations[lang])) {
        errors.push(`Bengali codepoint detected outside 'bn' in '${lang}' translation for id '${item.id}'.`);
      }
    }

    // All 8 translationStatus keys present and check status values:
    // - en & ur must be "reviewed"
    // - Quranic duas for 6 languages must be "published" with translator name
    // - Hadith duas for 6 languages must be "unreviewed"
    if (!item.translationStatus) {
      errors.push(`Missing translationStatus in id '${item.id}'.`);
    } else {
      const isQuranic = item.grading === "quran";
      for (const lang of REQUIRED_LANGUAGES) {
        const st = item.translationStatus[lang];
        if (!st || !["reviewed", "published", "unreviewed"].includes(st)) {
          errors.push(`Invalid translationStatus '${st}' for language '${lang}' in id '${item.id}'.`);
          continue;
        }

        if (lang === "en" || lang === "ur") {
          if (st !== "reviewed") {
            errors.push(`Status for '${lang}' in id '${item.id}' must be 'reviewed', got '${st}'.`);
          }
        } else if (isQuranic) {
          if (st !== "published") {
            errors.push(`Status for Quranic dua '${item.id}' language '${lang}' must be 'published', got '${st}'.`);
          }
          if (!item.translators || !item.translators[lang] || item.translators[lang]!.trim().length === 0) {
            errors.push(`Missing translator name for published language '${lang}' in id '${item.id}'.`);
          }
        } else {
          if (st !== "unreviewed") {
            errors.push(`Status for hadith dua '${item.id}' language '${lang}' must be 'unreviewed', got '${st}'.`);
          }
        }
      }
    }

    // grading check
    if (!item.grading) {
      errors.push(`Missing grading in id '${item.id}'.`);
    }

    // sourceRefs check
    if (!item.sourceRefs || item.sourceRefs.length === 0) {
      errors.push(`Missing or empty sourceRefs in id '${item.id}'.`);
    }
  }
 
  // Baseline check: ensure no ur or en translation differs from commit 1dbe073 without a status change
  try {
    const raw = execSync("git show 1dbe073:lib/duasData.ts", { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 });
    const oldSource = ts.createSourceFile("old.ts", raw, ts.ScriptTarget.Latest, true);
    const baseline: Record<string, { en: string; ur: string }> = {};

    function visitOld(node: ts.Node) {
      if (ts.isVariableDeclaration(node) && node.name.getText(oldSource) === "DUAS_DATABASE") {
        if (node.initializer && ts.isArrayLiteralExpression(node.initializer)) {
          for (const elem of node.initializer.elements) {
            if (ts.isObjectLiteralExpression(elem)) {
              let id = "";
              let en = "";
              let ur = "";
              for (const prop of elem.properties) {
                if (ts.isPropertyAssignment(prop)) {
                  const name = prop.name.getText(oldSource);
                  if (name === "id" && ts.isStringLiteral(prop.initializer)) {
                    id = prop.initializer.text;
                  } else if (name === "translations" && ts.isObjectLiteralExpression(prop.initializer)) {
                    for (const tprop of prop.initializer.properties) {
                      if (ts.isPropertyAssignment(tprop)) {
                        const tname = tprop.name.getText(oldSource);
                        if (tname === "en" && ts.isStringLiteral(tprop.initializer)) {
                          en = tprop.initializer.text;
                        } else if (tname === "ur" && ts.isStringLiteral(tprop.initializer)) {
                          ur = tprop.initializer.text;
                        }
                      }
                    }
                  }
                }
              }
              if (id) baseline[id] = { en, ur };
            }
          }
        }
      }
      ts.forEachChild(node, visitOld);
    }
    visitOld(oldSource);

    for (const item of DUAS_DATABASE) {
      const b = baseline[item.id];
      if (b) {
        if (item.translations.en !== b.en && item.translationStatus?.en === "reviewed") {
          errors.push(`English translation for id '${item.id}' differs from commit 1dbe073 without a status change.`);
        }
        if (item.translations.ur !== b.ur && item.translationStatus?.ur === "reviewed") {
          errors.push(`Urdu translation for id '${item.id}' differs from commit 1dbe073 without a status change.`);
        }
      }
    }
  } catch (e) {
    console.warn("Could not load commit 1dbe073 baseline for comparison:", (e as Error).message);
  }

  if (errors.length > 0) {
    console.error("Validation failed with errors:");
    for (const err of errors) {
      console.error("  - " + err);
    }
    process.exit(1);
  }

  console.log(`Validation successful! All ${DUAS_DATABASE.length} entries passed integrity checks.`);
}

validateDuas();
