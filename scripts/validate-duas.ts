import { DUAS_DATABASE, DUA_CATEGORIES, LanguageCode } from "../lib/duasData";

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

    // All eight LanguageCode keys present and non-empty
    for (const lang of REQUIRED_LANGUAGES) {
      const val = item.translations[lang];
      if (!val || val.trim().length === 0) {
        errors.push(`Missing or empty translation for language '${lang}' in id '${item.id}'.`);
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

    // All 8 translationStatus keys present and equal to "unreviewed"
    if (!item.translationStatus) {
      errors.push(`Missing translationStatus in id '${item.id}'.`);
    } else {
      for (const lang of REQUIRED_LANGUAGES) {
        const st = item.translationStatus[lang];
        if (st !== "unreviewed") {
          errors.push(`Invalid translationStatus '${st}' for language '${lang}' in id '${item.id}'. Must be 'unreviewed'.`);
        }
      }
    }
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
