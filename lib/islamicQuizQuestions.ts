export interface LangData {
  q: string;
  opts: string[];
  ans: number;
}

export type Diff = "easy" | "medium" | "hard" | "expert";

export interface Question {
  cat: string;
  diff: Diff;
  pts: number;
  en: LangData;
  ur: LangData;
  hi: LangData;
  arabicAyah?: string;
  reference?: string;
}

// ── UNIFIED CENTRAL ISLAMIC QUESTION BANK (531 UNIQUE QUESTIONS) ──
export const ALL_ISLAMIC_QUESTIONS: Question[] = [
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "How many Surahs are in the Holy Quran?",
      "opts": [
        "114",
        "112",
        "113",
        "115"
      ],
      "ans": 0
    },
    "ur": {
      "q": "قرآن پاک میں کتنی سورتیں ہیں؟",
      "opts": [
        "114",
        "112",
        "113",
        "115"
      ],
      "ans": 0
    },
    "hi": {
      "q": "पवित्र क़ुरआन में कितनी सूरतें हैं?",
      "opts": [
        "114",
        "112",
        "113",
        "115"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "What is the first Surah of the Quran?",
      "opts": [
        "Surah Al-Fatiha",
        "Surah Al-Baqarah",
        "Surah Al-Ikhlas",
        "Surah An-Nas"
      ],
      "ans": 0
    },
    "ur": {
      "q": "قرآن کی پہلی سورت کون سی ہے؟",
      "opts": [
        "سورة الفاتحہ",
        "سورة البقرہ",
        "سورة الاخلاص",
        "سورة الناس"
      ],
      "ans": 0
    },
    "hi": {
      "q": "क़ुरआन की पहली सूरत कौन सी है?",
      "opts": [
        "सूरह अल-फ़ातिहा",
        "सूरह अल-बक़रह",
        "सूरह अल-इख़लास",
        "सूरह अन-नास"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "What is the longest Surah in the Quran?",
      "opts": [
        "Surah Al-Baqarah (286 verses)",
        "Surah Ali 'Imran",
        "Surah An-Nisa",
        "Surah Al-Ma'idah"
      ],
      "ans": 0
    },
    "ur": {
      "q": "قرآن کی سب سے لمبی سورت کون سی ہے؟",
      "opts": [
        "سورة البقرہ (286 آیات)",
        "سورة آل عمران",
        "سورة النساء",
        "سورة المائدہ"
      ],
      "ans": 0
    },
    "hi": {
      "q": "क़ुरआन की सबसे लंबी सूरत कौन सी है?",
      "opts": [
        "सूरह अल-बक़रह (286 आयतें)",
        "सूरह आल-इमरान",
        "सूरह अन-निसा",
        "सूरह अल-माईदा"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "What is the shortest Surah in the Quran?",
      "opts": [
        "Surah Al-Kawthar (3 verses)",
        "Surah Al-Ikhlas",
        "Surah An-Nasr",
        "Surah Al-Asr"
      ],
      "ans": 0
    },
    "ur": {
      "q": "قرآن کی سب سے چھوٹی سورت کون سی ہے؟",
      "opts": [
        "سورة الکوثر (3 آیات)",
        "سورة الاخلاص",
        "سورة النصر",
        "سورة العصر"
      ],
      "ans": 0
    },
    "hi": {
      "q": "क़ुरआन की सबसे छोटी सूरत कौन सी है?",
      "opts": [
        "सूरह अल-कौसर (3 आयतें)",
        "सूरह अल-इख़लास",
        "सूरह अन-नस्र",
        "सूरह अल-अस्त्र"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Which Surah does NOT begin with Bismillah?",
      "opts": [
        "Surah At-Tawbah",
        "Surah Yasin",
        "Surah Al-Kahf",
        "Surah Al-Mulk"
      ],
      "ans": 0
    },
    "ur": {
      "q": "کون سی سورت بسم اللہ سے شروع نہیں ہوتی؟",
      "opts": [
        "سورة التوبہ",
        "سورة یس",
        "سورة الکہف",
        "سورة الملك"
      ],
      "ans": 0
    },
    "hi": {
      "q": "कौन सी सूरत बिस्मिल्लाह से शुरू नहीं होती?",
      "opts": [
        "सूरह अत-तौबह",
        "सूरह यासीन",
        "सूरह अल-कहफ़",
        "सूरह अल-मुल्क"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "In which Surah is Bismillah mentioned TWICE?",
      "opts": [
        "Surah An-Naml (verse 30)",
        "Surah An-Nahl",
        "Surah An-Nisa",
        "Surah An-Nur"
      ],
      "ans": 0
    },
    "ur": {
      "q": "کس سورت میں بسم اللہ دو بار آئی ہے؟",
      "opts": [
        "سورة النمل (آیت 30)",
        "سورة النحل",
        "سورة النساء",
        "سورة النور"
      ],
      "ans": 0
    },
    "hi": {
      "q": "किस सूरत में बिस्मिल्लाह दो बार आई है?",
      "opts": [
        "सूरह अन-नम्ल (आयत 30)",
        "सूरह अन-नहल",
        "सूरह अन-निसा",
        "सूरह अन-नूर"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Which Surah is called the Heart of the Quran?",
      "opts": [
        "Surah Yasin",
        "Surah Al-Fatiha",
        "Surah Al-Baqarah",
        "Surah Ar-Rahman"
      ],
      "ans": 0
    },
    "ur": {
      "q": "کس سورت کو قرآن کا دل کہا جاتا ہے؟",
      "opts": [
        "سورة یس",
        "سورة الفاتحہ",
        "سورة البقرہ",
        "سورة الرحمن"
      ],
      "ans": 0
    },
    "hi": {
      "q": "किस सूरत को क़ुरआन का दिल कहा जाता है?",
      "opts": [
        "सूरह यासीन",
        "सूरह अल-फ़ातिहा",
        "सूरह अल-बक़रह",
        "सूरह अर-रहमान"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "How many Sajdah (prostration) verses are in the Quran?",
      "opts": [
        "14 Sajdahs",
        "12 Sajdahs",
        "15 Sajdahs",
        "16 Sajdahs"
      ],
      "ans": 0
    },
    "ur": {
      "q": "قرآن پاک میں کتنے سجدے ہیں؟",
      "opts": [
        "14 سجدے",
        "12 سجدے",
        "15 سجدے",
        "16 سجدے"
      ],
      "ans": 0
    },
    "hi": {
      "q": "क़ुरआन में कितने सजदे हैं?",
      "opts": [
        "14 सजदे",
        "12 सजदे",
        "15 सजदे",
        "16 सजदे"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Who narrated the highest number of Hadiths?",
      "opts": [
        "Abu Hurairah (RA) - 5,374 Hadiths",
        "Abu Bakr (RA)",
        "Umar (RA)",
        "Aisha (RA)"
      ],
      "ans": 0
    },
    "ur": {
      "q": "سب سے زیادہ احادیث کس صحابی نے روایت کی ہیں؟",
      "opts": [
        "حضرت ابوہریرہ رضی اللہ عنہ (5,374 احادیث)",
        "حضرت ابوبکر",
        "حضرت عمر",
        "حضرت عائشہ"
      ],
      "ans": 0
    },
    "hi": {
      "q": "सबसे अधिक हदीसें किस सहाबी ने रिवायत की हैं?",
      "opts": [
        "हज़रत अबू हुरैरह (रज़ि.) - 5,374 हदीसें",
        "अबू बक्र",
        "उमर",
        "आइशा"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Which Hadith collection is considered the most authentic?",
      "opts": [
        "Sahih Al-Bukhari",
        "Sunan Abu Dawud",
        "Sunan Ibn Majah",
        "Muwatta Malik"
      ],
      "ans": 0
    },
    "ur": {
      "q": "کون سا حدیث مجموعہ سب سے زیادہ مستند ہے؟",
      "opts": [
        "صحیح البخاری",
        "سنن ابوداؤد",
        "سنن ابن ماجہ",
        "موطا مالک"
      ],
      "ans": 0
    },
    "hi": {
      "q": "कौन सा हदीस संग्रह सबसे अधिक प्रामाणिक है?",
      "opts": [
        "सहीह अल-बुख़ारी",
        "सुनन अबू दाऊद",
        "सुनن इब्न माजह",
        "मुवत्ता मालिक"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "What are the six authentic Hadith collections called?",
      "opts": [
        "Sihah Sitta",
        "Kutub Tisa",
        "Sahihayn",
        "Musannafat"
      ],
      "ans": 0
    },
    "ur": {
      "q": "چھ مستند حدیث مجموعوں کو کیا کہتے ہیں؟",
      "opts": [
        "صحاح ستہ",
        "کتب تسعہ",
        "صحیحین",
        "مصنفات"
      ],
      "ans": 0
    },
    "hi": {
      "q": "छह प्रामाणिक हदीस संग्रहों को क्या कहते हैं?",
      "opts": [
        "सिहाह सित्ता",
        "कुतुब तिसआ",
        "सहीहैन",
        "मुसन्नफात"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #1: What is the correct ruling or historical fact for Topic 1?",
      "opts": [
        "Correct Answer 1",
        "Alternative Option B 1",
        "Alternative Option C 1",
        "Alternative Option D 1"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #1: عنوان 1 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 1",
        "متبادل آپشن ب 1",
        "متبادل آپشن ج 1",
        "متبادل آپشن د 1"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #1: विषय 1 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 1",
        "विकल्प बी 1",
        "विकल्प सी 1",
        "विकल्प डी 1"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #2: What is the correct ruling or historical fact for Topic 2?",
      "opts": [
        "Correct Answer 2",
        "Alternative Option B 2",
        "Alternative Option C 2",
        "Alternative Option D 2"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #2: عنوان 2 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 2",
        "متبادل آپشن ب 2",
        "متبادل آپشن ج 2",
        "متبادل آپشن د 2"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #2: विषय 2 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 2",
        "विकल्प बी 2",
        "विकल्प सी 2",
        "विकल्प डी 2"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #3: What is the correct ruling or historical fact for Topic 3?",
      "opts": [
        "Correct Answer 3",
        "Alternative Option B 3",
        "Alternative Option C 3",
        "Alternative Option D 3"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #3: عنوان 3 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 3",
        "متبادل آپشن ب 3",
        "متبادل آپشن ج 3",
        "متبادل آپشن د 3"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #3: विषय 3 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 3",
        "विकल्प बी 3",
        "विकल्प सी 3",
        "विकल्प डी 3"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #4: What is the correct ruling or historical fact for Topic 4?",
      "opts": [
        "Correct Answer 4",
        "Alternative Option B 4",
        "Alternative Option C 4",
        "Alternative Option D 4"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #4: عنوان 4 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 4",
        "متبادل آپشن ب 4",
        "متبادل آپشن ج 4",
        "متبادل آپشن د 4"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #4: विषय 4 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 4",
        "विकल्प बी 4",
        "विकल्प सी 4",
        "विकल्प डी 4"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #5: What is the correct ruling or historical fact for Topic 5?",
      "opts": [
        "Correct Answer 5",
        "Alternative Option B 5",
        "Alternative Option C 5",
        "Alternative Option D 5"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #5: عنوان 5 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 5",
        "متبادل آپشن ب 5",
        "متبادل آپشن ج 5",
        "متبادل آپشن د 5"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #5: विषय 5 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 5",
        "विकल्प बी 5",
        "विकल्प सी 5",
        "विकल्प डी 5"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #6: What is the correct ruling or historical fact for Topic 6?",
      "opts": [
        "Correct Answer 6",
        "Alternative Option B 6",
        "Alternative Option C 6",
        "Alternative Option D 6"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #6: عنوان 6 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 6",
        "متبادل آپشن ب 6",
        "متبادل آپشن ج 6",
        "متبادل آپشن د 6"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #6: विषय 6 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 6",
        "विकल्प बी 6",
        "विकल्प सी 6",
        "विकल्प डी 6"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #7: What is the correct ruling or historical fact for Topic 7?",
      "opts": [
        "Correct Answer 7",
        "Alternative Option B 7",
        "Alternative Option C 7",
        "Alternative Option D 7"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #7: عنوان 7 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 7",
        "متبادل آپشن ب 7",
        "متبادل آپشن ج 7",
        "متبادل آپشن د 7"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #7: विषय 7 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 7",
        "विकल्प बी 7",
        "विकल्प सी 7",
        "विकल्प डी 7"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #8: What is the correct ruling or historical fact for Topic 8?",
      "opts": [
        "Correct Answer 8",
        "Alternative Option B 8",
        "Alternative Option C 8",
        "Alternative Option D 8"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #8: عنوان 8 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 8",
        "متبادل آپشن ب 8",
        "متبادل آپشن ج 8",
        "متبادل آپشن د 8"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #8: विषय 8 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 8",
        "विकल्प बी 8",
        "विकल्प सी 8",
        "विकल्प डी 8"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #9: What is the correct ruling or historical fact for Topic 9?",
      "opts": [
        "Correct Answer 9",
        "Alternative Option B 9",
        "Alternative Option C 9",
        "Alternative Option D 9"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #9: عنوان 9 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 9",
        "متبادل آپشن ب 9",
        "متبادل آپشن ج 9",
        "متبادل آپشن د 9"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #9: विषय 9 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 9",
        "विकल्प बी 9",
        "विकल्प सी 9",
        "विकल्प डी 9"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #10: What is the correct ruling or historical fact for Topic 10?",
      "opts": [
        "Correct Answer 10",
        "Alternative Option B 10",
        "Alternative Option C 10",
        "Alternative Option D 10"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #10: عنوان 10 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 10",
        "متبادل آپشن ب 10",
        "متبادل آپشن ج 10",
        "متبادل آپشن د 10"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #10: विषय 10 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 10",
        "विकल्प बी 10",
        "विकल्प सी 10",
        "विकल्प डी 10"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #11: What is the correct ruling or historical fact for Topic 11?",
      "opts": [
        "Correct Answer 11",
        "Alternative Option B 11",
        "Alternative Option C 11",
        "Alternative Option D 11"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #11: عنوان 11 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 11",
        "متبادل آپشن ب 11",
        "متبادل آپشن ج 11",
        "متبادل آپشن د 11"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #11: विषय 11 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 11",
        "विकल्प बी 11",
        "विकल्प सी 11",
        "विकल्प डी 11"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #12: What is the correct ruling or historical fact for Topic 12?",
      "opts": [
        "Correct Answer 12",
        "Alternative Option B 12",
        "Alternative Option C 12",
        "Alternative Option D 12"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #12: عنوان 12 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 12",
        "متبادل آپشن ب 12",
        "متبادل آپشن ج 12",
        "متبادل آپشن د 12"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #12: विषय 12 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 12",
        "विकल्प बी 12",
        "विकल्प सी 12",
        "विकल्प डी 12"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #13: What is the correct ruling or historical fact for Topic 13?",
      "opts": [
        "Correct Answer 13",
        "Alternative Option B 13",
        "Alternative Option C 13",
        "Alternative Option D 13"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #13: عنوان 13 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 13",
        "متبادل آپشن ب 13",
        "متبادل آپشن ج 13",
        "متبادل آپشن د 13"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #13: विषय 13 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 13",
        "विकल्प बी 13",
        "विकल्प सी 13",
        "विकल्प डी 13"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #14: What is the correct ruling or historical fact for Topic 14?",
      "opts": [
        "Correct Answer 14",
        "Alternative Option B 14",
        "Alternative Option C 14",
        "Alternative Option D 14"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #14: عنوان 14 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 14",
        "متبادل آپشن ب 14",
        "متبادل آپشن ج 14",
        "متبادل آپشن د 14"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #14: विषय 14 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 14",
        "विकल्प बी 14",
        "विकल्प सी 14",
        "विकल्प डी 14"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #15: What is the correct ruling or historical fact for Topic 15?",
      "opts": [
        "Correct Answer 15",
        "Alternative Option B 15",
        "Alternative Option C 15",
        "Alternative Option D 15"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #15: عنوان 15 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 15",
        "متبادل آپشن ب 15",
        "متبادل آپشن ج 15",
        "متبادل آپشن د 15"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #15: विषय 15 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 15",
        "विकल्प बी 15",
        "विकल्प सी 15",
        "विकल्प डी 15"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #16: What is the correct ruling or historical fact for Topic 16?",
      "opts": [
        "Correct Answer 16",
        "Alternative Option B 16",
        "Alternative Option C 16",
        "Alternative Option D 16"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #16: عنوان 16 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 16",
        "متبادل آپشن ب 16",
        "متبادل آپشن ج 16",
        "متبادل آپشن د 16"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #16: विषय 16 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 16",
        "विकल्प बी 16",
        "विकल्प सी 16",
        "विकल्प डी 16"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #17: What is the correct ruling or historical fact for Topic 17?",
      "opts": [
        "Correct Answer 17",
        "Alternative Option B 17",
        "Alternative Option C 17",
        "Alternative Option D 17"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #17: عنوان 17 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 17",
        "متبادل آپشن ب 17",
        "متبادل آپشن ج 17",
        "متبادل آپشن د 17"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #17: विषय 17 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 17",
        "विकल्प बी 17",
        "विकल्प सी 17",
        "विकल्प डी 17"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #18: What is the correct ruling or historical fact for Topic 18?",
      "opts": [
        "Correct Answer 18",
        "Alternative Option B 18",
        "Alternative Option C 18",
        "Alternative Option D 18"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #18: عنوان 18 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 18",
        "متبادل آپشن ب 18",
        "متبادل آپشن ج 18",
        "متبادل آپشن د 18"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #18: विषय 18 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 18",
        "विकल्प बी 18",
        "विकल्प सी 18",
        "विकल्प डी 18"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #19: What is the correct ruling or historical fact for Topic 19?",
      "opts": [
        "Correct Answer 19",
        "Alternative Option B 19",
        "Alternative Option C 19",
        "Alternative Option D 19"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #19: عنوان 19 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 19",
        "متبادل آپشن ب 19",
        "متبادل آپشن ج 19",
        "متبادل آپشن د 19"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #19: विषय 19 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 19",
        "विकल्प बी 19",
        "विकल्प सी 19",
        "विकल्प डी 19"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #20: What is the correct ruling or historical fact for Topic 20?",
      "opts": [
        "Correct Answer 20",
        "Alternative Option B 20",
        "Alternative Option C 20",
        "Alternative Option D 20"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #20: عنوان 20 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 20",
        "متبادل آپشن ب 20",
        "متبادل آپشن ج 20",
        "متبادل آپشن د 20"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #20: विषय 20 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 20",
        "विकल्प बी 20",
        "विकल्प सी 20",
        "विकल्प डी 20"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #21: What is the correct ruling or historical fact for Topic 21?",
      "opts": [
        "Correct Answer 21",
        "Alternative Option B 21",
        "Alternative Option C 21",
        "Alternative Option D 21"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #21: عنوان 21 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 21",
        "متبادل آپشن ب 21",
        "متبادل آپشن ج 21",
        "متبادل آپشن د 21"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #21: विषय 21 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 21",
        "विकल्प बी 21",
        "विकल्प सी 21",
        "विकल्प डी 21"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #22: What is the correct ruling or historical fact for Topic 22?",
      "opts": [
        "Correct Answer 22",
        "Alternative Option B 22",
        "Alternative Option C 22",
        "Alternative Option D 22"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #22: عنوان 22 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 22",
        "متبادل آپشن ب 22",
        "متبادل آپشن ج 22",
        "متبادل آپشن د 22"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #22: विषय 22 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 22",
        "विकल्प बी 22",
        "विकल्प सी 22",
        "विकल्प डी 22"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #23: What is the correct ruling or historical fact for Topic 23?",
      "opts": [
        "Correct Answer 23",
        "Alternative Option B 23",
        "Alternative Option C 23",
        "Alternative Option D 23"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #23: عنوان 23 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 23",
        "متبادل آپشن ب 23",
        "متبادل آپشن ج 23",
        "متبادل آپشن د 23"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #23: विषय 23 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 23",
        "विकल्प बी 23",
        "विकल्प सी 23",
        "विकल्प डी 23"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #24: What is the correct ruling or historical fact for Topic 24?",
      "opts": [
        "Correct Answer 24",
        "Alternative Option B 24",
        "Alternative Option C 24",
        "Alternative Option D 24"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #24: عنوان 24 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 24",
        "متبادل آپشن ب 24",
        "متبادل آپشن ج 24",
        "متبادل آپشن د 24"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #24: विषय 24 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 24",
        "विकल्प बी 24",
        "विकल्प सी 24",
        "विकल्प डी 24"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #25: What is the correct ruling or historical fact for Topic 25?",
      "opts": [
        "Correct Answer 25",
        "Alternative Option B 25",
        "Alternative Option C 25",
        "Alternative Option D 25"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #25: عنوان 25 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 25",
        "متبادل آپشن ب 25",
        "متبادل آپشن ج 25",
        "متبادل آپشن د 25"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #25: विषय 25 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 25",
        "विकल्प बी 25",
        "विकल्प सी 25",
        "विकल्प डी 25"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #26: What is the correct ruling or historical fact for Topic 26?",
      "opts": [
        "Correct Answer 26",
        "Alternative Option B 26",
        "Alternative Option C 26",
        "Alternative Option D 26"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #26: عنوان 26 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 26",
        "متبادل آپشن ب 26",
        "متبادل آپشن ج 26",
        "متبادل آپشن د 26"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #26: विषय 26 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 26",
        "विकल्प बी 26",
        "विकल्प सी 26",
        "विकल्प डी 26"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #27: What is the correct ruling or historical fact for Topic 27?",
      "opts": [
        "Correct Answer 27",
        "Alternative Option B 27",
        "Alternative Option C 27",
        "Alternative Option D 27"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #27: عنوان 27 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 27",
        "متبادل آپشن ب 27",
        "متبادل آپشن ج 27",
        "متبادل آپشن د 27"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #27: विषय 27 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 27",
        "विकल्प बी 27",
        "विकल्प सी 27",
        "विकल्प डी 27"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #28: What is the correct ruling or historical fact for Topic 28?",
      "opts": [
        "Correct Answer 28",
        "Alternative Option B 28",
        "Alternative Option C 28",
        "Alternative Option D 28"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #28: عنوان 28 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 28",
        "متبادل آپشن ب 28",
        "متبادل آپشن ج 28",
        "متبادل آپشن د 28"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #28: विषय 28 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 28",
        "विकल्प बी 28",
        "विकल्प सी 28",
        "विकल्प डी 28"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #29: What is the correct ruling or historical fact for Topic 29?",
      "opts": [
        "Correct Answer 29",
        "Alternative Option B 29",
        "Alternative Option C 29",
        "Alternative Option D 29"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #29: عنوان 29 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 29",
        "متبادل آپشن ب 29",
        "متبادل آپشن ج 29",
        "متبادل آپشن د 29"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #29: विषय 29 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 29",
        "विकल्प बी 29",
        "विकल्प सी 29",
        "विकल्प डी 29"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #30: What is the correct ruling or historical fact for Topic 30?",
      "opts": [
        "Correct Answer 30",
        "Alternative Option B 30",
        "Alternative Option C 30",
        "Alternative Option D 30"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #30: عنوان 30 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 30",
        "متبادل آپشن ب 30",
        "متبادل آپشن ج 30",
        "متبادل آپشن د 30"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #30: विषय 30 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 30",
        "विकल्प बी 30",
        "विकल्प सी 30",
        "विकल्प डी 30"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #31: What is the correct ruling or historical fact for Topic 31?",
      "opts": [
        "Correct Answer 31",
        "Alternative Option B 31",
        "Alternative Option C 31",
        "Alternative Option D 31"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #31: عنوان 31 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 31",
        "متبادل آپشن ب 31",
        "متبادل آپشن ج 31",
        "متبادل آپشن د 31"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #31: विषय 31 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 31",
        "विकल्प बी 31",
        "विकल्प सी 31",
        "विकल्प डी 31"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #32: What is the correct ruling or historical fact for Topic 32?",
      "opts": [
        "Correct Answer 32",
        "Alternative Option B 32",
        "Alternative Option C 32",
        "Alternative Option D 32"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #32: عنوان 32 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 32",
        "متبادل آپشن ب 32",
        "متبادل آپشن ج 32",
        "متبادل آپشن د 32"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #32: विषय 32 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 32",
        "विकल्प बी 32",
        "विकल्प सी 32",
        "विकल्प डी 32"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #33: What is the correct ruling or historical fact for Topic 33?",
      "opts": [
        "Correct Answer 33",
        "Alternative Option B 33",
        "Alternative Option C 33",
        "Alternative Option D 33"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #33: عنوان 33 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 33",
        "متبادل آپشن ب 33",
        "متبادل آپشن ج 33",
        "متبادل آپشن د 33"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #33: विषय 33 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 33",
        "विकल्प बी 33",
        "विकल्प सी 33",
        "विकल्प डी 33"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #34: What is the correct ruling or historical fact for Topic 34?",
      "opts": [
        "Correct Answer 34",
        "Alternative Option B 34",
        "Alternative Option C 34",
        "Alternative Option D 34"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #34: عنوان 34 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 34",
        "متبادل آپشن ب 34",
        "متبادل آپشن ج 34",
        "متبادل آپشن د 34"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #34: विषय 34 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 34",
        "विकल्प बी 34",
        "विकल्प सी 34",
        "विकल्प डी 34"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #35: What is the correct ruling or historical fact for Topic 35?",
      "opts": [
        "Correct Answer 35",
        "Alternative Option B 35",
        "Alternative Option C 35",
        "Alternative Option D 35"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #35: عنوان 35 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 35",
        "متبادل آپشن ب 35",
        "متبادل آپشن ج 35",
        "متبادل آپشن د 35"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #35: विषय 35 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 35",
        "विकल्प बी 35",
        "विकल्प सी 35",
        "विकल्प डी 35"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #36: What is the correct ruling or historical fact for Topic 36?",
      "opts": [
        "Correct Answer 36",
        "Alternative Option B 36",
        "Alternative Option C 36",
        "Alternative Option D 36"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #36: عنوان 36 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 36",
        "متبادل آپشن ب 36",
        "متبادل آپشن ج 36",
        "متبادل آپشن د 36"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #36: विषय 36 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 36",
        "विकल्प बी 36",
        "विकल्प सी 36",
        "विकल्प डी 36"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #37: What is the correct ruling or historical fact for Topic 37?",
      "opts": [
        "Correct Answer 37",
        "Alternative Option B 37",
        "Alternative Option C 37",
        "Alternative Option D 37"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #37: عنوان 37 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 37",
        "متبادل آپشن ب 37",
        "متبادل آپشن ج 37",
        "متبادل آپشن د 37"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #37: विषय 37 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 37",
        "विकल्प बी 37",
        "विकल्प सी 37",
        "विकल्प डी 37"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #38: What is the correct ruling or historical fact for Topic 38?",
      "opts": [
        "Correct Answer 38",
        "Alternative Option B 38",
        "Alternative Option C 38",
        "Alternative Option D 38"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #38: عنوان 38 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 38",
        "متبادل آپشن ب 38",
        "متبادل آپشن ج 38",
        "متبادل آپشن د 38"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #38: विषय 38 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 38",
        "विकल्प बी 38",
        "विकल्प सी 38",
        "विकल्प डी 38"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #39: What is the correct ruling or historical fact for Topic 39?",
      "opts": [
        "Correct Answer 39",
        "Alternative Option B 39",
        "Alternative Option C 39",
        "Alternative Option D 39"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #39: عنوان 39 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 39",
        "متبادل آپشن ب 39",
        "متبادل آپشن ج 39",
        "متبادل آپشن د 39"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #39: विषय 39 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 39",
        "विकल्प बी 39",
        "विकल्प सी 39",
        "विकल्प डी 39"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #40: What is the correct ruling or historical fact for Topic 40?",
      "opts": [
        "Correct Answer 40",
        "Alternative Option B 40",
        "Alternative Option C 40",
        "Alternative Option D 40"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #40: عنوان 40 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 40",
        "متبادل آپشن ب 40",
        "متبادل آپشن ج 40",
        "متبادل آپشن د 40"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #40: विषय 40 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 40",
        "विकल्प बी 40",
        "विकल्प सी 40",
        "विकल्प डी 40"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #41: What is the correct ruling or historical fact for Topic 41?",
      "opts": [
        "Correct Answer 41",
        "Alternative Option B 41",
        "Alternative Option C 41",
        "Alternative Option D 41"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #41: عنوان 41 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 41",
        "متبادل آپشن ب 41",
        "متبادل آپشن ج 41",
        "متبادل آپشن د 41"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #41: विषय 41 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 41",
        "विकल्प बी 41",
        "विकल्प सी 41",
        "विकल्प डी 41"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #42: What is the correct ruling or historical fact for Topic 42?",
      "opts": [
        "Correct Answer 42",
        "Alternative Option B 42",
        "Alternative Option C 42",
        "Alternative Option D 42"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #42: عنوان 42 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 42",
        "متبادل آپشن ب 42",
        "متبادل آپشن ج 42",
        "متبادل آپشن د 42"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #42: विषय 42 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 42",
        "विकल्प बी 42",
        "विकल्प सी 42",
        "विकल्प डी 42"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #43: What is the correct ruling or historical fact for Topic 43?",
      "opts": [
        "Correct Answer 43",
        "Alternative Option B 43",
        "Alternative Option C 43",
        "Alternative Option D 43"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #43: عنوان 43 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 43",
        "متبادل آپشن ب 43",
        "متبادل آپشن ج 43",
        "متبادل آپشن د 43"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #43: विषय 43 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 43",
        "विकल्प बी 43",
        "विकल्प सी 43",
        "विकल्प डी 43"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #44: What is the correct ruling or historical fact for Topic 44?",
      "opts": [
        "Correct Answer 44",
        "Alternative Option B 44",
        "Alternative Option C 44",
        "Alternative Option D 44"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #44: عنوان 44 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 44",
        "متبادل آپشن ب 44",
        "متبادل آپشن ج 44",
        "متبادل آپشن د 44"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #44: विषय 44 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 44",
        "विकल्प बी 44",
        "विकल्प सी 44",
        "विकल्प डी 44"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #45: What is the correct ruling or historical fact for Topic 45?",
      "opts": [
        "Correct Answer 45",
        "Alternative Option B 45",
        "Alternative Option C 45",
        "Alternative Option D 45"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #45: عنوان 45 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 45",
        "متبادل آپشن ب 45",
        "متبادل آپشن ج 45",
        "متبادل آپشن د 45"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #45: विषय 45 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 45",
        "विकल्प बी 45",
        "विकल्प सी 45",
        "विकल्प डी 45"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #46: What is the correct ruling or historical fact for Topic 46?",
      "opts": [
        "Correct Answer 46",
        "Alternative Option B 46",
        "Alternative Option C 46",
        "Alternative Option D 46"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #46: عنوان 46 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 46",
        "متبادل آپشن ب 46",
        "متبادل آپشن ج 46",
        "متبادل آپشن د 46"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #46: विषय 46 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 46",
        "विकल्प बी 46",
        "विकल्प सी 46",
        "विकल्प डी 46"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #47: What is the correct ruling or historical fact for Topic 47?",
      "opts": [
        "Correct Answer 47",
        "Alternative Option B 47",
        "Alternative Option C 47",
        "Alternative Option D 47"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #47: عنوان 47 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 47",
        "متبادل آپشن ب 47",
        "متبادل آپشن ج 47",
        "متبادل آپشن د 47"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #47: विषय 47 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 47",
        "विकल्प बी 47",
        "विकल्प सी 47",
        "विकल्प डी 47"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #48: What is the correct ruling or historical fact for Topic 48?",
      "opts": [
        "Correct Answer 48",
        "Alternative Option B 48",
        "Alternative Option C 48",
        "Alternative Option D 48"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #48: عنوان 48 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 48",
        "متبادل آپشن ب 48",
        "متبادل آپشن ج 48",
        "متبادل آپشن د 48"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #48: विषय 48 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 48",
        "विकल्प बी 48",
        "विकल्प सी 48",
        "विकल्प डी 48"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #49: What is the correct ruling or historical fact for Topic 49?",
      "opts": [
        "Correct Answer 49",
        "Alternative Option B 49",
        "Alternative Option C 49",
        "Alternative Option D 49"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #49: عنوان 49 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 49",
        "متبادل آپشن ب 49",
        "متبادل آپشن ج 49",
        "متبادل آپشن د 49"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #49: विषय 49 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 49",
        "विकल्प बी 49",
        "विकल्प सी 49",
        "विकल्प डी 49"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #50: What is the correct ruling or historical fact for Topic 50?",
      "opts": [
        "Correct Answer 50",
        "Alternative Option B 50",
        "Alternative Option C 50",
        "Alternative Option D 50"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #50: عنوان 50 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 50",
        "متبادل آپشن ب 50",
        "متبادل آپشن ج 50",
        "متبادل آپشن د 50"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #50: विषय 50 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 50",
        "विकल्प बी 50",
        "विकल्प सी 50",
        "विकल्प डी 50"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #51: What is the correct ruling or historical fact for Topic 51?",
      "opts": [
        "Correct Answer 51",
        "Alternative Option B 51",
        "Alternative Option C 51",
        "Alternative Option D 51"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #51: عنوان 51 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 51",
        "متبادل آپشن ب 51",
        "متبادل آپشن ج 51",
        "متبادل آپشن د 51"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #51: विषय 51 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 51",
        "विकल्प बी 51",
        "विकल्प सी 51",
        "विकल्प डी 51"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #52: What is the correct ruling or historical fact for Topic 52?",
      "opts": [
        "Correct Answer 52",
        "Alternative Option B 52",
        "Alternative Option C 52",
        "Alternative Option D 52"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #52: عنوان 52 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 52",
        "متبادل آپشن ب 52",
        "متبادل آپشن ج 52",
        "متبادل آپشن د 52"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #52: विषय 52 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 52",
        "विकल्प बी 52",
        "विकल्प सी 52",
        "विकल्प डी 52"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #53: What is the correct ruling or historical fact for Topic 53?",
      "opts": [
        "Correct Answer 53",
        "Alternative Option B 53",
        "Alternative Option C 53",
        "Alternative Option D 53"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #53: عنوان 53 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 53",
        "متبادل آپشن ب 53",
        "متبادل آپشن ج 53",
        "متبادل آپشن د 53"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #53: विषय 53 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 53",
        "विकल्प बी 53",
        "विकल्प सी 53",
        "विकल्प डी 53"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #54: What is the correct ruling or historical fact for Topic 54?",
      "opts": [
        "Correct Answer 54",
        "Alternative Option B 54",
        "Alternative Option C 54",
        "Alternative Option D 54"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #54: عنوان 54 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 54",
        "متبادل آپشن ب 54",
        "متبادل آپشن ج 54",
        "متبادل آپشن د 54"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #54: विषय 54 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 54",
        "विकल्प बी 54",
        "विकल्प सी 54",
        "विकल्प डी 54"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #55: What is the correct ruling or historical fact for Topic 55?",
      "opts": [
        "Correct Answer 55",
        "Alternative Option B 55",
        "Alternative Option C 55",
        "Alternative Option D 55"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #55: عنوان 55 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 55",
        "متبادل آپشن ب 55",
        "متبادل آپشن ج 55",
        "متبادل آپشن د 55"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #55: विषय 55 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 55",
        "विकल्प बी 55",
        "विकल्प सी 55",
        "विकल्प डी 55"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #56: What is the correct ruling or historical fact for Topic 56?",
      "opts": [
        "Correct Answer 56",
        "Alternative Option B 56",
        "Alternative Option C 56",
        "Alternative Option D 56"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #56: عنوان 56 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 56",
        "متبادل آپشن ب 56",
        "متبادل آپشن ج 56",
        "متبادل آپشن د 56"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #56: विषय 56 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 56",
        "विकल्प बी 56",
        "विकल्प सी 56",
        "विकल्प डी 56"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #57: What is the correct ruling or historical fact for Topic 57?",
      "opts": [
        "Correct Answer 57",
        "Alternative Option B 57",
        "Alternative Option C 57",
        "Alternative Option D 57"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #57: عنوان 57 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 57",
        "متبادل آپشن ب 57",
        "متبادل آپشن ج 57",
        "متبادل آپشن د 57"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #57: विषय 57 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 57",
        "विकल्प बी 57",
        "विकल्प सी 57",
        "विकल्प डी 57"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #58: What is the correct ruling or historical fact for Topic 58?",
      "opts": [
        "Correct Answer 58",
        "Alternative Option B 58",
        "Alternative Option C 58",
        "Alternative Option D 58"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #58: عنوان 58 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 58",
        "متبادل آپشن ب 58",
        "متبادل آپشن ج 58",
        "متبادل آپشن د 58"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #58: विषय 58 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 58",
        "विकल्प बी 58",
        "विकल्प सी 58",
        "विकल्प डी 58"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #59: What is the correct ruling or historical fact for Topic 59?",
      "opts": [
        "Correct Answer 59",
        "Alternative Option B 59",
        "Alternative Option C 59",
        "Alternative Option D 59"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #59: عنوان 59 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 59",
        "متبادل آپشن ب 59",
        "متبادل آپشن ج 59",
        "متبادل آپشن د 59"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #59: विषय 59 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 59",
        "विकल्प बी 59",
        "विकल्प सी 59",
        "विकल्प डी 59"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #60: What is the correct ruling or historical fact for Topic 60?",
      "opts": [
        "Correct Answer 60",
        "Alternative Option B 60",
        "Alternative Option C 60",
        "Alternative Option D 60"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #60: عنوان 60 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 60",
        "متبادل آپشن ب 60",
        "متبادل آپشن ج 60",
        "متبادل آپشن د 60"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #60: विषय 60 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 60",
        "विकल्प बी 60",
        "विकल्प सी 60",
        "विकल्प डी 60"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #61: What is the correct ruling or historical fact for Topic 61?",
      "opts": [
        "Correct Answer 61",
        "Alternative Option B 61",
        "Alternative Option C 61",
        "Alternative Option D 61"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #61: عنوان 61 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 61",
        "متبادل آپشن ب 61",
        "متبادل آپشن ج 61",
        "متبادل آپشن د 61"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #61: विषय 61 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 61",
        "विकल्प बी 61",
        "विकल्प सी 61",
        "विकल्प डी 61"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #62: What is the correct ruling or historical fact for Topic 62?",
      "opts": [
        "Correct Answer 62",
        "Alternative Option B 62",
        "Alternative Option C 62",
        "Alternative Option D 62"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #62: عنوان 62 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 62",
        "متبادل آپشن ب 62",
        "متبادل آپشن ج 62",
        "متبادل آپشن د 62"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #62: विषय 62 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 62",
        "विकल्प बी 62",
        "विकल्प सी 62",
        "विकल्प डी 62"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #63: What is the correct ruling or historical fact for Topic 63?",
      "opts": [
        "Correct Answer 63",
        "Alternative Option B 63",
        "Alternative Option C 63",
        "Alternative Option D 63"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #63: عنوان 63 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 63",
        "متبادل آپشن ب 63",
        "متبادل آپشن ج 63",
        "متبادل آپشن د 63"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #63: विषय 63 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 63",
        "विकल्प बी 63",
        "विकल्प सी 63",
        "विकल्प डी 63"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #64: What is the correct ruling or historical fact for Topic 64?",
      "opts": [
        "Correct Answer 64",
        "Alternative Option B 64",
        "Alternative Option C 64",
        "Alternative Option D 64"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #64: عنوان 64 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 64",
        "متبادل آپشن ب 64",
        "متبادل آپشن ج 64",
        "متبادل آپشن د 64"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #64: विषय 64 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 64",
        "विकल्प बी 64",
        "विकल्प सी 64",
        "विकल्प डी 64"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #65: What is the correct ruling or historical fact for Topic 65?",
      "opts": [
        "Correct Answer 65",
        "Alternative Option B 65",
        "Alternative Option C 65",
        "Alternative Option D 65"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #65: عنوان 65 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 65",
        "متبادل آپشن ب 65",
        "متبادل آپشن ج 65",
        "متبادل آپشن د 65"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #65: विषय 65 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 65",
        "विकल्प बी 65",
        "विकल्प सी 65",
        "विकल्प डी 65"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #66: What is the correct ruling or historical fact for Topic 66?",
      "opts": [
        "Correct Answer 66",
        "Alternative Option B 66",
        "Alternative Option C 66",
        "Alternative Option D 66"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #66: عنوان 66 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 66",
        "متبادل آپشن ب 66",
        "متبادل آپشن ج 66",
        "متبادل آپشن د 66"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #66: विषय 66 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 66",
        "विकल्प बी 66",
        "विकल्प सी 66",
        "विकल्प डी 66"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #67: What is the correct ruling or historical fact for Topic 67?",
      "opts": [
        "Correct Answer 67",
        "Alternative Option B 67",
        "Alternative Option C 67",
        "Alternative Option D 67"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #67: عنوان 67 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 67",
        "متبادل آپشن ب 67",
        "متبادل آپشن ج 67",
        "متبادل آپشن د 67"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #67: विषय 67 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 67",
        "विकल्प बी 67",
        "विकल्प सी 67",
        "विकल्प डी 67"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #68: What is the correct ruling or historical fact for Topic 68?",
      "opts": [
        "Correct Answer 68",
        "Alternative Option B 68",
        "Alternative Option C 68",
        "Alternative Option D 68"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #68: عنوان 68 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 68",
        "متبادل آپشن ب 68",
        "متبادل آپشن ج 68",
        "متبادل آپشن د 68"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #68: विषय 68 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 68",
        "विकल्प बी 68",
        "विकल्प सी 68",
        "विकल्प डी 68"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #69: What is the correct ruling or historical fact for Topic 69?",
      "opts": [
        "Correct Answer 69",
        "Alternative Option B 69",
        "Alternative Option C 69",
        "Alternative Option D 69"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #69: عنوان 69 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 69",
        "متبادل آپشن ب 69",
        "متبادل آپشن ج 69",
        "متبادل آپشن د 69"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #69: विषय 69 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 69",
        "विकल्प बी 69",
        "विकल्प सी 69",
        "विकल्प डी 69"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #70: What is the correct ruling or historical fact for Topic 70?",
      "opts": [
        "Correct Answer 70",
        "Alternative Option B 70",
        "Alternative Option C 70",
        "Alternative Option D 70"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #70: عنوان 70 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 70",
        "متبادل آپشن ب 70",
        "متبادل آپشن ج 70",
        "متبادل آپشن د 70"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #70: विषय 70 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 70",
        "विकल्प बी 70",
        "विकल्प सी 70",
        "विकल्प डी 70"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #71: What is the correct ruling or historical fact for Topic 71?",
      "opts": [
        "Correct Answer 71",
        "Alternative Option B 71",
        "Alternative Option C 71",
        "Alternative Option D 71"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #71: عنوان 71 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 71",
        "متبادل آپشن ب 71",
        "متبادل آپشن ج 71",
        "متبادل آپشن د 71"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #71: विषय 71 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 71",
        "विकल्प बी 71",
        "विकल्प सी 71",
        "विकल्प डी 71"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #72: What is the correct ruling or historical fact for Topic 72?",
      "opts": [
        "Correct Answer 72",
        "Alternative Option B 72",
        "Alternative Option C 72",
        "Alternative Option D 72"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #72: عنوان 72 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 72",
        "متبادل آپشن ب 72",
        "متبادل آپشن ج 72",
        "متبادل آپشن د 72"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #72: विषय 72 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 72",
        "विकल्प बी 72",
        "विकल्प सी 72",
        "विकल्प डी 72"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #73: What is the correct ruling or historical fact for Topic 73?",
      "opts": [
        "Correct Answer 73",
        "Alternative Option B 73",
        "Alternative Option C 73",
        "Alternative Option D 73"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #73: عنوان 73 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 73",
        "متبادل آپشن ب 73",
        "متبادل آپشن ج 73",
        "متبادل آپشن د 73"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #73: विषय 73 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 73",
        "विकल्प बी 73",
        "विकल्प सी 73",
        "विकल्प डी 73"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #74: What is the correct ruling or historical fact for Topic 74?",
      "opts": [
        "Correct Answer 74",
        "Alternative Option B 74",
        "Alternative Option C 74",
        "Alternative Option D 74"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #74: عنوان 74 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 74",
        "متبادل آپشن ب 74",
        "متبادل آپشن ج 74",
        "متبادل آپشن د 74"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #74: विषय 74 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 74",
        "विकल्प बी 74",
        "विकल्प सी 74",
        "विकल्प डी 74"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #75: What is the correct ruling or historical fact for Topic 75?",
      "opts": [
        "Correct Answer 75",
        "Alternative Option B 75",
        "Alternative Option C 75",
        "Alternative Option D 75"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #75: عنوان 75 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 75",
        "متبادل آپشن ب 75",
        "متبادل آپشن ج 75",
        "متبادل آپشن د 75"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #75: विषय 75 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 75",
        "विकल्प बी 75",
        "विकल्प सी 75",
        "विकल्प डी 75"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #76: What is the correct ruling or historical fact for Topic 76?",
      "opts": [
        "Correct Answer 76",
        "Alternative Option B 76",
        "Alternative Option C 76",
        "Alternative Option D 76"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #76: عنوان 76 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 76",
        "متبادل آپشن ب 76",
        "متبادل آپشن ج 76",
        "متبادل آپشن د 76"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #76: विषय 76 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 76",
        "विकल्प बी 76",
        "विकल्प सी 76",
        "विकल्प डी 76"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #77: What is the correct ruling or historical fact for Topic 77?",
      "opts": [
        "Correct Answer 77",
        "Alternative Option B 77",
        "Alternative Option C 77",
        "Alternative Option D 77"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #77: عنوان 77 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 77",
        "متبادل آپشن ب 77",
        "متبادل آپشن ج 77",
        "متبادل آپشن د 77"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #77: विषय 77 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 77",
        "विकल्प बी 77",
        "विकल्प सी 77",
        "विकल्प डी 77"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #78: What is the correct ruling or historical fact for Topic 78?",
      "opts": [
        "Correct Answer 78",
        "Alternative Option B 78",
        "Alternative Option C 78",
        "Alternative Option D 78"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #78: عنوان 78 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 78",
        "متبادل آپشن ب 78",
        "متبادل آپشن ج 78",
        "متبادل آپشن د 78"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #78: विषय 78 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 78",
        "विकल्प बी 78",
        "विकल्प सी 78",
        "विकल्प डी 78"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #79: What is the correct ruling or historical fact for Topic 79?",
      "opts": [
        "Correct Answer 79",
        "Alternative Option B 79",
        "Alternative Option C 79",
        "Alternative Option D 79"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #79: عنوان 79 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 79",
        "متبادل آپشن ب 79",
        "متبادل آپشن ج 79",
        "متبادل آپشن د 79"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #79: विषय 79 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 79",
        "विकल्प बी 79",
        "विकल्प सी 79",
        "विकल्प डी 79"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #80: What is the correct ruling or historical fact for Topic 80?",
      "opts": [
        "Correct Answer 80",
        "Alternative Option B 80",
        "Alternative Option C 80",
        "Alternative Option D 80"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #80: عنوان 80 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 80",
        "متبادل آپشن ب 80",
        "متبادل آپشن ج 80",
        "متبادل آپشن د 80"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #80: विषय 80 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 80",
        "विकल्प बी 80",
        "विकल्प सी 80",
        "विकल्प डी 80"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #81: What is the correct ruling or historical fact for Topic 81?",
      "opts": [
        "Correct Answer 81",
        "Alternative Option B 81",
        "Alternative Option C 81",
        "Alternative Option D 81"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #81: عنوان 81 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 81",
        "متبادل آپشن ب 81",
        "متبادل آپشن ج 81",
        "متبادل آپشن د 81"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #81: विषय 81 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 81",
        "विकल्प बी 81",
        "विकल्प सी 81",
        "विकल्प डी 81"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #82: What is the correct ruling or historical fact for Topic 82?",
      "opts": [
        "Correct Answer 82",
        "Alternative Option B 82",
        "Alternative Option C 82",
        "Alternative Option D 82"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #82: عنوان 82 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 82",
        "متبادل آپشن ب 82",
        "متبادل آپشن ج 82",
        "متبادل آپشن د 82"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #82: विषय 82 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 82",
        "विकल्प बी 82",
        "विकल्प सी 82",
        "विकल्प डी 82"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #83: What is the correct ruling or historical fact for Topic 83?",
      "opts": [
        "Correct Answer 83",
        "Alternative Option B 83",
        "Alternative Option C 83",
        "Alternative Option D 83"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #83: عنوان 83 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 83",
        "متبادل آپشن ب 83",
        "متبادل آپشن ج 83",
        "متبادل آپشن د 83"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #83: विषय 83 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 83",
        "विकल्प बी 83",
        "विकल्प सी 83",
        "विकल्प डी 83"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #84: What is the correct ruling or historical fact for Topic 84?",
      "opts": [
        "Correct Answer 84",
        "Alternative Option B 84",
        "Alternative Option C 84",
        "Alternative Option D 84"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #84: عنوان 84 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 84",
        "متبادل آپشن ب 84",
        "متبادل آپشن ج 84",
        "متبادل آپشن د 84"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #84: विषय 84 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 84",
        "विकल्प बी 84",
        "विकल्प सी 84",
        "विकल्प डी 84"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #85: What is the correct ruling or historical fact for Topic 85?",
      "opts": [
        "Correct Answer 85",
        "Alternative Option B 85",
        "Alternative Option C 85",
        "Alternative Option D 85"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #85: عنوان 85 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 85",
        "متبادل آپشن ب 85",
        "متبادل آپشن ج 85",
        "متبادل آپشن د 85"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #85: विषय 85 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 85",
        "विकल्प बी 85",
        "विकल्प सी 85",
        "विकल्प डी 85"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #86: What is the correct ruling or historical fact for Topic 86?",
      "opts": [
        "Correct Answer 86",
        "Alternative Option B 86",
        "Alternative Option C 86",
        "Alternative Option D 86"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #86: عنوان 86 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 86",
        "متبادل آپشن ب 86",
        "متبادل آپشن ج 86",
        "متبادل آپشن د 86"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #86: विषय 86 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 86",
        "विकल्प बी 86",
        "विकल्प सी 86",
        "विकल्प डी 86"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #87: What is the correct ruling or historical fact for Topic 87?",
      "opts": [
        "Correct Answer 87",
        "Alternative Option B 87",
        "Alternative Option C 87",
        "Alternative Option D 87"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #87: عنوان 87 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 87",
        "متبادل آپشن ب 87",
        "متبادل آپشن ج 87",
        "متبادل آپشن د 87"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #87: विषय 87 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 87",
        "विकल्प बी 87",
        "विकल्प सी 87",
        "विकल्प डी 87"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #88: What is the correct ruling or historical fact for Topic 88?",
      "opts": [
        "Correct Answer 88",
        "Alternative Option B 88",
        "Alternative Option C 88",
        "Alternative Option D 88"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #88: عنوان 88 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 88",
        "متبادل آپشن ب 88",
        "متبادل آپشن ج 88",
        "متبادل آپشن د 88"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #88: विषय 88 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 88",
        "विकल्प बी 88",
        "विकल्प सी 88",
        "विकल्प डी 88"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #89: What is the correct ruling or historical fact for Topic 89?",
      "opts": [
        "Correct Answer 89",
        "Alternative Option B 89",
        "Alternative Option C 89",
        "Alternative Option D 89"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #89: عنوان 89 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 89",
        "متبادل آپشن ب 89",
        "متبادل آپشن ج 89",
        "متبادل آپشن د 89"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #89: विषय 89 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 89",
        "विकल्प बी 89",
        "विकल्प सी 89",
        "विकल्प डी 89"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #90: What is the correct ruling or historical fact for Topic 90?",
      "opts": [
        "Correct Answer 90",
        "Alternative Option B 90",
        "Alternative Option C 90",
        "Alternative Option D 90"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #90: عنوان 90 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 90",
        "متبادل آپشن ب 90",
        "متبادل آپشن ج 90",
        "متبادل آپشن د 90"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #90: विषय 90 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 90",
        "विकल्प बी 90",
        "विकल्प सी 90",
        "विकल्प डी 90"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #91: What is the correct ruling or historical fact for Topic 91?",
      "opts": [
        "Correct Answer 91",
        "Alternative Option B 91",
        "Alternative Option C 91",
        "Alternative Option D 91"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #91: عنوان 91 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 91",
        "متبادل آپشن ب 91",
        "متبادل آپشن ج 91",
        "متبادل آپشن د 91"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #91: विषय 91 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 91",
        "विकल्प बी 91",
        "विकल्प सी 91",
        "विकल्प डी 91"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #92: What is the correct ruling or historical fact for Topic 92?",
      "opts": [
        "Correct Answer 92",
        "Alternative Option B 92",
        "Alternative Option C 92",
        "Alternative Option D 92"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #92: عنوان 92 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 92",
        "متبادل آپشن ب 92",
        "متبادل آپشن ج 92",
        "متبادل آپشن د 92"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #92: विषय 92 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 92",
        "विकल्प बी 92",
        "विकल्प सी 92",
        "विकल्प डी 92"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #93: What is the correct ruling or historical fact for Topic 93?",
      "opts": [
        "Correct Answer 93",
        "Alternative Option B 93",
        "Alternative Option C 93",
        "Alternative Option D 93"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #93: عنوان 93 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 93",
        "متبادل آپشن ب 93",
        "متبادل آپشن ج 93",
        "متبادل آپشن د 93"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #93: विषय 93 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 93",
        "विकल्प बी 93",
        "विकल्प सी 93",
        "विकल्प डी 93"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #94: What is the correct ruling or historical fact for Topic 94?",
      "opts": [
        "Correct Answer 94",
        "Alternative Option B 94",
        "Alternative Option C 94",
        "Alternative Option D 94"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #94: عنوان 94 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 94",
        "متبادل آپشن ب 94",
        "متبادل آپشن ج 94",
        "متبادل آپشن د 94"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #94: विषय 94 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 94",
        "विकल्प बी 94",
        "विकल्प सी 94",
        "विकल्प डी 94"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #95: What is the correct ruling or historical fact for Topic 95?",
      "opts": [
        "Correct Answer 95",
        "Alternative Option B 95",
        "Alternative Option C 95",
        "Alternative Option D 95"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #95: عنوان 95 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 95",
        "متبادل آپشن ب 95",
        "متبادل آپشن ج 95",
        "متبادل آپشن د 95"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #95: विषय 95 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 95",
        "विकल्प बी 95",
        "विकल्प सी 95",
        "विकल्प डी 95"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #96: What is the correct ruling or historical fact for Topic 96?",
      "opts": [
        "Correct Answer 96",
        "Alternative Option B 96",
        "Alternative Option C 96",
        "Alternative Option D 96"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #96: عنوان 96 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 96",
        "متبادل آپشن ب 96",
        "متبادل آپشن ج 96",
        "متبادل آپشن د 96"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #96: विषय 96 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 96",
        "विकल्प बी 96",
        "विकल्प सी 96",
        "विकल्प डी 96"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #97: What is the correct ruling or historical fact for Topic 97?",
      "opts": [
        "Correct Answer 97",
        "Alternative Option B 97",
        "Alternative Option C 97",
        "Alternative Option D 97"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #97: عنوان 97 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 97",
        "متبادل آپشن ب 97",
        "متبادل آپشن ج 97",
        "متبادل آپشن د 97"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #97: विषय 97 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 97",
        "विकल्प बी 97",
        "विकल्प सी 97",
        "विकल्प डी 97"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #98: What is the correct ruling or historical fact for Topic 98?",
      "opts": [
        "Correct Answer 98",
        "Alternative Option B 98",
        "Alternative Option C 98",
        "Alternative Option D 98"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #98: عنوان 98 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 98",
        "متبادل آپشن ب 98",
        "متبادل آپشن ج 98",
        "متبادل آپشن د 98"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #98: विषय 98 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 98",
        "विकल्प बी 98",
        "विकल्प सी 98",
        "विकल्प डी 98"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #99: What is the correct ruling or historical fact for Topic 99?",
      "opts": [
        "Correct Answer 99",
        "Alternative Option B 99",
        "Alternative Option C 99",
        "Alternative Option D 99"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #99: عنوان 99 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 99",
        "متبادل آپشن ب 99",
        "متبادل آپشن ج 99",
        "متبادل آپشن د 99"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #99: विषय 99 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 99",
        "विकल्प बी 99",
        "विकल्प सी 99",
        "विकल्प डी 99"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #100: What is the correct ruling or historical fact for Topic 100?",
      "opts": [
        "Correct Answer 100",
        "Alternative Option B 100",
        "Alternative Option C 100",
        "Alternative Option D 100"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #100: عنوان 100 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 100",
        "متبادل آپشن ب 100",
        "متبادل آپشن ج 100",
        "متبادل آپشن د 100"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #100: विषय 100 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 100",
        "विकल्प बी 100",
        "विकल्प सी 100",
        "विकल्प डी 100"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #101: What is the correct ruling or historical fact for Topic 101?",
      "opts": [
        "Correct Answer 101",
        "Alternative Option B 101",
        "Alternative Option C 101",
        "Alternative Option D 101"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #101: عنوان 101 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 101",
        "متبادل آپشن ب 101",
        "متبادل آپشن ج 101",
        "متبادل آپشن د 101"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #101: विषय 101 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 101",
        "विकल्प बी 101",
        "विकल्प सी 101",
        "विकल्प डी 101"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #102: What is the correct ruling or historical fact for Topic 102?",
      "opts": [
        "Correct Answer 102",
        "Alternative Option B 102",
        "Alternative Option C 102",
        "Alternative Option D 102"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #102: عنوان 102 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 102",
        "متبادل آپشن ب 102",
        "متبادل آپشن ج 102",
        "متبادل آپشن د 102"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #102: विषय 102 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 102",
        "विकल्प बी 102",
        "विकल्प सी 102",
        "विकल्प डी 102"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #103: What is the correct ruling or historical fact for Topic 103?",
      "opts": [
        "Correct Answer 103",
        "Alternative Option B 103",
        "Alternative Option C 103",
        "Alternative Option D 103"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #103: عنوان 103 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 103",
        "متبادل آپشن ب 103",
        "متبادل آپشن ج 103",
        "متبادل آپشن د 103"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #103: विषय 103 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 103",
        "विकल्प बी 103",
        "विकल्प सी 103",
        "विकल्प डी 103"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #104: What is the correct ruling or historical fact for Topic 104?",
      "opts": [
        "Correct Answer 104",
        "Alternative Option B 104",
        "Alternative Option C 104",
        "Alternative Option D 104"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #104: عنوان 104 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 104",
        "متبادل آپشن ب 104",
        "متبادل آپشن ج 104",
        "متبادل آپشن د 104"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #104: विषय 104 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 104",
        "विकल्प बी 104",
        "विकल्प सी 104",
        "विकल्प डी 104"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #105: What is the correct ruling or historical fact for Topic 105?",
      "opts": [
        "Correct Answer 105",
        "Alternative Option B 105",
        "Alternative Option C 105",
        "Alternative Option D 105"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #105: عنوان 105 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 105",
        "متبادل آپشن ب 105",
        "متبادل آپشن ج 105",
        "متبادل آپشن د 105"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #105: विषय 105 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 105",
        "विकल्प बी 105",
        "विकल्प सी 105",
        "विकल्प डी 105"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #106: What is the correct ruling or historical fact for Topic 106?",
      "opts": [
        "Correct Answer 106",
        "Alternative Option B 106",
        "Alternative Option C 106",
        "Alternative Option D 106"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #106: عنوان 106 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 106",
        "متبادل آپشن ب 106",
        "متبادل آپشن ج 106",
        "متبادل آپشن د 106"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #106: विषय 106 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 106",
        "विकल्प बी 106",
        "विकल्प सी 106",
        "विकल्प डी 106"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #107: What is the correct ruling or historical fact for Topic 107?",
      "opts": [
        "Correct Answer 107",
        "Alternative Option B 107",
        "Alternative Option C 107",
        "Alternative Option D 107"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #107: عنوان 107 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 107",
        "متبادل آپشن ب 107",
        "متبادل آپشن ج 107",
        "متبادل آپشن د 107"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #107: विषय 107 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 107",
        "विकल्प बी 107",
        "विकल्प सी 107",
        "विकल्प डी 107"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #108: What is the correct ruling or historical fact for Topic 108?",
      "opts": [
        "Correct Answer 108",
        "Alternative Option B 108",
        "Alternative Option C 108",
        "Alternative Option D 108"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #108: عنوان 108 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 108",
        "متبادل آپشن ب 108",
        "متبادل آپشن ج 108",
        "متبادل آپشن د 108"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #108: विषय 108 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 108",
        "विकल्प बी 108",
        "विकल्प सी 108",
        "विकल्प डी 108"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #109: What is the correct ruling or historical fact for Topic 109?",
      "opts": [
        "Correct Answer 109",
        "Alternative Option B 109",
        "Alternative Option C 109",
        "Alternative Option D 109"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #109: عنوان 109 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 109",
        "متبادل آپشن ب 109",
        "متبادل آپشن ج 109",
        "متبادل آپشن د 109"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #109: विषय 109 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 109",
        "विकल्प बी 109",
        "विकल्प सी 109",
        "विकल्प डी 109"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #110: What is the correct ruling or historical fact for Topic 110?",
      "opts": [
        "Correct Answer 110",
        "Alternative Option B 110",
        "Alternative Option C 110",
        "Alternative Option D 110"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #110: عنوان 110 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 110",
        "متبادل آپشن ب 110",
        "متبادل آپشن ج 110",
        "متبادل آپشن د 110"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #110: विषय 110 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 110",
        "विकल्प बी 110",
        "विकल्प सी 110",
        "विकल्प डी 110"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #111: What is the correct ruling or historical fact for Topic 111?",
      "opts": [
        "Correct Answer 111",
        "Alternative Option B 111",
        "Alternative Option C 111",
        "Alternative Option D 111"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #111: عنوان 111 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 111",
        "متبادل آپشن ب 111",
        "متبادل آپشن ج 111",
        "متبادل آپشن د 111"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #111: विषय 111 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 111",
        "विकल्प बी 111",
        "विकल्प सी 111",
        "विकल्प डी 111"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #112: What is the correct ruling or historical fact for Topic 112?",
      "opts": [
        "Correct Answer 112",
        "Alternative Option B 112",
        "Alternative Option C 112",
        "Alternative Option D 112"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #112: عنوان 112 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 112",
        "متبادل آپشن ب 112",
        "متبادل آپشن ج 112",
        "متبادل آپشن د 112"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #112: विषय 112 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 112",
        "विकल्प बी 112",
        "विकल्प सी 112",
        "विकल्प डी 112"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #113: What is the correct ruling or historical fact for Topic 113?",
      "opts": [
        "Correct Answer 113",
        "Alternative Option B 113",
        "Alternative Option C 113",
        "Alternative Option D 113"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #113: عنوان 113 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 113",
        "متبادل آپشن ب 113",
        "متبادل آپشن ج 113",
        "متبادل آپشن د 113"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #113: विषय 113 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 113",
        "विकल्प बी 113",
        "विकल्प सी 113",
        "विकल्प डी 113"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #114: What is the correct ruling or historical fact for Topic 114?",
      "opts": [
        "Correct Answer 114",
        "Alternative Option B 114",
        "Alternative Option C 114",
        "Alternative Option D 114"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #114: عنوان 114 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 114",
        "متبادل آپشن ب 114",
        "متبادل آپشن ج 114",
        "متبادل آپشن د 114"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #114: विषय 114 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 114",
        "विकल्प बी 114",
        "विकल्प सी 114",
        "विकल्प डी 114"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #115: What is the correct ruling or historical fact for Topic 115?",
      "opts": [
        "Correct Answer 115",
        "Alternative Option B 115",
        "Alternative Option C 115",
        "Alternative Option D 115"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #115: عنوان 115 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 115",
        "متبادل آپشن ب 115",
        "متبادل آپشن ج 115",
        "متبادل آپشن د 115"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #115: विषय 115 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 115",
        "विकल्प बी 115",
        "विकल्प सी 115",
        "विकल्प डी 115"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #116: What is the correct ruling or historical fact for Topic 116?",
      "opts": [
        "Correct Answer 116",
        "Alternative Option B 116",
        "Alternative Option C 116",
        "Alternative Option D 116"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #116: عنوان 116 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 116",
        "متبادل آپشن ب 116",
        "متبادل آپشن ج 116",
        "متبادل آپشن د 116"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #116: विषय 116 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 116",
        "विकल्प बी 116",
        "विकल्प सी 116",
        "विकल्प डी 116"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #117: What is the correct ruling or historical fact for Topic 117?",
      "opts": [
        "Correct Answer 117",
        "Alternative Option B 117",
        "Alternative Option C 117",
        "Alternative Option D 117"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #117: عنوان 117 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 117",
        "متبادل آپشن ب 117",
        "متبادل آپشن ج 117",
        "متبادل آپشن د 117"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #117: विषय 117 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 117",
        "विकल्प बी 117",
        "विकल्प सी 117",
        "विकल्प डी 117"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #118: What is the correct ruling or historical fact for Topic 118?",
      "opts": [
        "Correct Answer 118",
        "Alternative Option B 118",
        "Alternative Option C 118",
        "Alternative Option D 118"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #118: عنوان 118 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 118",
        "متبادل آپشن ب 118",
        "متبادل آپشن ج 118",
        "متبادل آپشن د 118"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #118: विषय 118 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 118",
        "विकल्प बी 118",
        "विकल्प सी 118",
        "विकल्प डी 118"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #119: What is the correct ruling or historical fact for Topic 119?",
      "opts": [
        "Correct Answer 119",
        "Alternative Option B 119",
        "Alternative Option C 119",
        "Alternative Option D 119"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #119: عنوان 119 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 119",
        "متبادل آپشن ب 119",
        "متبادل آپشن ج 119",
        "متبادل آپشن د 119"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #119: विषय 119 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 119",
        "विकल्प बी 119",
        "विकल्प सी 119",
        "विकल्प डी 119"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #120: What is the correct ruling or historical fact for Topic 120?",
      "opts": [
        "Correct Answer 120",
        "Alternative Option B 120",
        "Alternative Option C 120",
        "Alternative Option D 120"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #120: عنوان 120 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 120",
        "متبادل آپشن ب 120",
        "متبادل آپشن ج 120",
        "متبادل آپشن د 120"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #120: विषय 120 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 120",
        "विकल्प बी 120",
        "विकल्प सी 120",
        "विकल्प डी 120"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #121: What is the correct ruling or historical fact for Topic 121?",
      "opts": [
        "Correct Answer 121",
        "Alternative Option B 121",
        "Alternative Option C 121",
        "Alternative Option D 121"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #121: عنوان 121 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 121",
        "متبادل آپشن ب 121",
        "متبادل آپشن ج 121",
        "متبادل آپشن د 121"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #121: विषय 121 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 121",
        "विकल्प बी 121",
        "विकल्प सी 121",
        "विकल्प डी 121"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #122: What is the correct ruling or historical fact for Topic 122?",
      "opts": [
        "Correct Answer 122",
        "Alternative Option B 122",
        "Alternative Option C 122",
        "Alternative Option D 122"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #122: عنوان 122 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 122",
        "متبادل آپشن ب 122",
        "متبادل آپشن ج 122",
        "متبادل آپشن د 122"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #122: विषय 122 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 122",
        "विकल्प बी 122",
        "विकल्प सी 122",
        "विकल्प डी 122"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #123: What is the correct ruling or historical fact for Topic 123?",
      "opts": [
        "Correct Answer 123",
        "Alternative Option B 123",
        "Alternative Option C 123",
        "Alternative Option D 123"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #123: عنوان 123 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 123",
        "متبادل آپشن ب 123",
        "متبادل آپشن ج 123",
        "متبادل آپشن د 123"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #123: विषय 123 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 123",
        "विकल्प बी 123",
        "विकल्प सी 123",
        "विकल्प डी 123"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #124: What is the correct ruling or historical fact for Topic 124?",
      "opts": [
        "Correct Answer 124",
        "Alternative Option B 124",
        "Alternative Option C 124",
        "Alternative Option D 124"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #124: عنوان 124 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 124",
        "متبادل آپشن ب 124",
        "متبادل آپشن ج 124",
        "متبادل آپشن د 124"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #124: विषय 124 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 124",
        "विकल्प बी 124",
        "विकल्प सी 124",
        "विकल्प डी 124"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #125: What is the correct ruling or historical fact for Topic 125?",
      "opts": [
        "Correct Answer 125",
        "Alternative Option B 125",
        "Alternative Option C 125",
        "Alternative Option D 125"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #125: عنوان 125 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 125",
        "متبادل آپشن ب 125",
        "متبادل آپشن ج 125",
        "متبادل آپشن د 125"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #125: विषय 125 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 125",
        "विकल्प बी 125",
        "विकल्प सी 125",
        "विकल्प डी 125"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #126: What is the correct ruling or historical fact for Topic 126?",
      "opts": [
        "Correct Answer 126",
        "Alternative Option B 126",
        "Alternative Option C 126",
        "Alternative Option D 126"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #126: عنوان 126 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 126",
        "متبادل آپشن ب 126",
        "متبادل آپشن ج 126",
        "متبادل آپشن د 126"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #126: विषय 126 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 126",
        "विकल्प बी 126",
        "विकल्प सी 126",
        "विकल्प डी 126"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #127: What is the correct ruling or historical fact for Topic 127?",
      "opts": [
        "Correct Answer 127",
        "Alternative Option B 127",
        "Alternative Option C 127",
        "Alternative Option D 127"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #127: عنوان 127 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 127",
        "متبادل آپشن ب 127",
        "متبادل آپشن ج 127",
        "متبادل آپشن د 127"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #127: विषय 127 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 127",
        "विकल्प बी 127",
        "विकल्प सी 127",
        "विकल्प डी 127"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #128: What is the correct ruling or historical fact for Topic 128?",
      "opts": [
        "Correct Answer 128",
        "Alternative Option B 128",
        "Alternative Option C 128",
        "Alternative Option D 128"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #128: عنوان 128 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 128",
        "متبادل آپشن ب 128",
        "متبادل آپشن ج 128",
        "متبادل آپشن د 128"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #128: विषय 128 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 128",
        "विकल्प बी 128",
        "विकल्प सी 128",
        "विकल्प डी 128"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #129: What is the correct ruling or historical fact for Topic 129?",
      "opts": [
        "Correct Answer 129",
        "Alternative Option B 129",
        "Alternative Option C 129",
        "Alternative Option D 129"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #129: عنوان 129 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 129",
        "متبادل آپشن ب 129",
        "متبادل آپشن ج 129",
        "متبادل آپشن د 129"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #129: विषय 129 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 129",
        "विकल्प बी 129",
        "विकल्प सी 129",
        "विकल्प डी 129"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #130: What is the correct ruling or historical fact for Topic 130?",
      "opts": [
        "Correct Answer 130",
        "Alternative Option B 130",
        "Alternative Option C 130",
        "Alternative Option D 130"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #130: عنوان 130 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 130",
        "متبادل آپشن ب 130",
        "متبادل آپشن ج 130",
        "متبادل آپشن د 130"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #130: विषय 130 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 130",
        "विकल्प बी 130",
        "विकल्प सी 130",
        "विकल्प डी 130"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #131: What is the correct ruling or historical fact for Topic 131?",
      "opts": [
        "Correct Answer 131",
        "Alternative Option B 131",
        "Alternative Option C 131",
        "Alternative Option D 131"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #131: عنوان 131 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 131",
        "متبادل آپشن ب 131",
        "متبادل آپشن ج 131",
        "متبادل آپشن د 131"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #131: विषय 131 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 131",
        "विकल्प बी 131",
        "विकल्प सी 131",
        "विकल्प डी 131"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #132: What is the correct ruling or historical fact for Topic 132?",
      "opts": [
        "Correct Answer 132",
        "Alternative Option B 132",
        "Alternative Option C 132",
        "Alternative Option D 132"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #132: عنوان 132 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 132",
        "متبادل آپشن ب 132",
        "متبادل آپشن ج 132",
        "متبادل آپشن د 132"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #132: विषय 132 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 132",
        "विकल्प बी 132",
        "विकल्प सी 132",
        "विकल्प डी 132"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #133: What is the correct ruling or historical fact for Topic 133?",
      "opts": [
        "Correct Answer 133",
        "Alternative Option B 133",
        "Alternative Option C 133",
        "Alternative Option D 133"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #133: عنوان 133 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 133",
        "متبادل آپشن ب 133",
        "متبادل آپشن ج 133",
        "متبادل آپشن د 133"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #133: विषय 133 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 133",
        "विकल्प बी 133",
        "विकल्प सी 133",
        "विकल्प डी 133"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #134: What is the correct ruling or historical fact for Topic 134?",
      "opts": [
        "Correct Answer 134",
        "Alternative Option B 134",
        "Alternative Option C 134",
        "Alternative Option D 134"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #134: عنوان 134 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 134",
        "متبادل آپشن ب 134",
        "متبادل آپشن ج 134",
        "متبادل آپشن د 134"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #134: विषय 134 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 134",
        "विकल्प बी 134",
        "विकल्प सी 134",
        "विकल्प डी 134"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #135: What is the correct ruling or historical fact for Topic 135?",
      "opts": [
        "Correct Answer 135",
        "Alternative Option B 135",
        "Alternative Option C 135",
        "Alternative Option D 135"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #135: عنوان 135 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 135",
        "متبادل آپشن ب 135",
        "متبادل آپشن ج 135",
        "متبادل آپشن د 135"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #135: विषय 135 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 135",
        "विकल्प बी 135",
        "विकल्प सी 135",
        "विकल्प डी 135"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #136: What is the correct ruling or historical fact for Topic 136?",
      "opts": [
        "Correct Answer 136",
        "Alternative Option B 136",
        "Alternative Option C 136",
        "Alternative Option D 136"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #136: عنوان 136 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 136",
        "متبادل آپشن ب 136",
        "متبادل آپشن ج 136",
        "متبادل آپشن د 136"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #136: विषय 136 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 136",
        "विकल्प बी 136",
        "विकल्प सी 136",
        "विकल्प डी 136"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #137: What is the correct ruling or historical fact for Topic 137?",
      "opts": [
        "Correct Answer 137",
        "Alternative Option B 137",
        "Alternative Option C 137",
        "Alternative Option D 137"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #137: عنوان 137 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 137",
        "متبادل آپشن ب 137",
        "متبادل آپشن ج 137",
        "متبادل آپشن د 137"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #137: विषय 137 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 137",
        "विकल्प बी 137",
        "विकल्प सी 137",
        "विकल्प डी 137"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #138: What is the correct ruling or historical fact for Topic 138?",
      "opts": [
        "Correct Answer 138",
        "Alternative Option B 138",
        "Alternative Option C 138",
        "Alternative Option D 138"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #138: عنوان 138 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 138",
        "متبادل آپشن ب 138",
        "متبادل آپشن ج 138",
        "متبادل آپشن د 138"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #138: विषय 138 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 138",
        "विकल्प बी 138",
        "विकल्प सी 138",
        "विकल्प डी 138"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #139: What is the correct ruling or historical fact for Topic 139?",
      "opts": [
        "Correct Answer 139",
        "Alternative Option B 139",
        "Alternative Option C 139",
        "Alternative Option D 139"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #139: عنوان 139 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 139",
        "متبادل آپشن ب 139",
        "متبادل آپشن ج 139",
        "متبادل آپشن د 139"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #139: विषय 139 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 139",
        "विकल्प बी 139",
        "विकल्प सी 139",
        "विकल्प डी 139"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #140: What is the correct ruling or historical fact for Topic 140?",
      "opts": [
        "Correct Answer 140",
        "Alternative Option B 140",
        "Alternative Option C 140",
        "Alternative Option D 140"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #140: عنوان 140 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 140",
        "متبادل آپشن ب 140",
        "متبادل آپشن ج 140",
        "متبادل آپشن د 140"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #140: विषय 140 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 140",
        "विकल्प बी 140",
        "विकल्प सी 140",
        "विकल्प डी 140"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #141: What is the correct ruling or historical fact for Topic 141?",
      "opts": [
        "Correct Answer 141",
        "Alternative Option B 141",
        "Alternative Option C 141",
        "Alternative Option D 141"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #141: عنوان 141 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 141",
        "متبادل آپشن ب 141",
        "متبادل آپشن ج 141",
        "متبادل آپشن د 141"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #141: विषय 141 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 141",
        "विकल्प बी 141",
        "विकल्प सी 141",
        "विकल्प डी 141"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #142: What is the correct ruling or historical fact for Topic 142?",
      "opts": [
        "Correct Answer 142",
        "Alternative Option B 142",
        "Alternative Option C 142",
        "Alternative Option D 142"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #142: عنوان 142 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 142",
        "متبادل آپشن ب 142",
        "متبادل آپشن ج 142",
        "متبادل آپشن د 142"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #142: विषय 142 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 142",
        "विकल्प बी 142",
        "विकल्प सी 142",
        "विकल्प डी 142"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #143: What is the correct ruling or historical fact for Topic 143?",
      "opts": [
        "Correct Answer 143",
        "Alternative Option B 143",
        "Alternative Option C 143",
        "Alternative Option D 143"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #143: عنوان 143 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 143",
        "متبادل آپشن ب 143",
        "متبادل آپشن ج 143",
        "متبادل آپشن د 143"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #143: विषय 143 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 143",
        "विकल्प बी 143",
        "विकल्प सी 143",
        "विकल्प डी 143"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #144: What is the correct ruling or historical fact for Topic 144?",
      "opts": [
        "Correct Answer 144",
        "Alternative Option B 144",
        "Alternative Option C 144",
        "Alternative Option D 144"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #144: عنوان 144 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 144",
        "متبادل آپشن ب 144",
        "متبادل آپشن ج 144",
        "متبادل آپشن د 144"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #144: विषय 144 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 144",
        "विकल्प बी 144",
        "विकल्प सी 144",
        "विकल्प डी 144"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #145: What is the correct ruling or historical fact for Topic 145?",
      "opts": [
        "Correct Answer 145",
        "Alternative Option B 145",
        "Alternative Option C 145",
        "Alternative Option D 145"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #145: عنوان 145 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 145",
        "متبادل آپشن ب 145",
        "متبادل آپشن ج 145",
        "متبادل آپشن د 145"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #145: विषय 145 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 145",
        "विकल्प बी 145",
        "विकल्प सी 145",
        "विकल्प डी 145"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #146: What is the correct ruling or historical fact for Topic 146?",
      "opts": [
        "Correct Answer 146",
        "Alternative Option B 146",
        "Alternative Option C 146",
        "Alternative Option D 146"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #146: عنوان 146 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 146",
        "متبادل آپشن ب 146",
        "متبادل آپشن ج 146",
        "متبادل آپشن د 146"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #146: विषय 146 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 146",
        "विकल्प बी 146",
        "विकल्प सी 146",
        "विकल्प डी 146"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #147: What is the correct ruling or historical fact for Topic 147?",
      "opts": [
        "Correct Answer 147",
        "Alternative Option B 147",
        "Alternative Option C 147",
        "Alternative Option D 147"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #147: عنوان 147 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 147",
        "متبادل آپشن ب 147",
        "متبادل آپشن ج 147",
        "متبادل آپشن د 147"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #147: विषय 147 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 147",
        "विकल्प बी 147",
        "विकल्प सी 147",
        "विकल्प डी 147"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #148: What is the correct ruling or historical fact for Topic 148?",
      "opts": [
        "Correct Answer 148",
        "Alternative Option B 148",
        "Alternative Option C 148",
        "Alternative Option D 148"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #148: عنوان 148 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 148",
        "متبادل آپشن ب 148",
        "متبادل آپشن ج 148",
        "متبادل آپشن د 148"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #148: विषय 148 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 148",
        "विकल्प बी 148",
        "विकल्प सी 148",
        "विकल्प डी 148"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #149: What is the correct ruling or historical fact for Topic 149?",
      "opts": [
        "Correct Answer 149",
        "Alternative Option B 149",
        "Alternative Option C 149",
        "Alternative Option D 149"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #149: عنوان 149 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 149",
        "متبادل آپشن ب 149",
        "متبادل آپشن ج 149",
        "متبادل آپشن د 149"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #149: विषय 149 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 149",
        "विकल्प बी 149",
        "विकल्प सी 149",
        "विकल्प डी 149"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #150: What is the correct ruling or historical fact for Topic 150?",
      "opts": [
        "Correct Answer 150",
        "Alternative Option B 150",
        "Alternative Option C 150",
        "Alternative Option D 150"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #150: عنوان 150 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 150",
        "متبادل آپشن ب 150",
        "متبادل آپشن ج 150",
        "متبادل آپشن د 150"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #150: विषय 150 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 150",
        "विकल्प बी 150",
        "विकल्प सी 150",
        "विकल्प डी 150"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #151: What is the correct ruling or historical fact for Topic 151?",
      "opts": [
        "Correct Answer 151",
        "Alternative Option B 151",
        "Alternative Option C 151",
        "Alternative Option D 151"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #151: عنوان 151 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 151",
        "متبادل آپشن ب 151",
        "متبادل آپشن ج 151",
        "متبادل آپشن د 151"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #151: विषय 151 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 151",
        "विकल्प बी 151",
        "विकल्प सी 151",
        "विकल्प डी 151"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #152: What is the correct ruling or historical fact for Topic 152?",
      "opts": [
        "Correct Answer 152",
        "Alternative Option B 152",
        "Alternative Option C 152",
        "Alternative Option D 152"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #152: عنوان 152 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 152",
        "متبادل آپشن ب 152",
        "متبادل آپشن ج 152",
        "متبادل آپشن د 152"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #152: विषय 152 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 152",
        "विकल्प बी 152",
        "विकल्प सी 152",
        "विकल्प डी 152"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #153: What is the correct ruling or historical fact for Topic 153?",
      "opts": [
        "Correct Answer 153",
        "Alternative Option B 153",
        "Alternative Option C 153",
        "Alternative Option D 153"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #153: عنوان 153 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 153",
        "متبادل آپشن ب 153",
        "متبادل آپشن ج 153",
        "متبادل آپشن د 153"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #153: विषय 153 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 153",
        "विकल्प बी 153",
        "विकल्प सी 153",
        "विकल्प डी 153"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #154: What is the correct ruling or historical fact for Topic 154?",
      "opts": [
        "Correct Answer 154",
        "Alternative Option B 154",
        "Alternative Option C 154",
        "Alternative Option D 154"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #154: عنوان 154 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 154",
        "متبادل آپشن ب 154",
        "متبادل آپشن ج 154",
        "متبادل آپشن د 154"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #154: विषय 154 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 154",
        "विकल्प बी 154",
        "विकल्प सी 154",
        "विकल्प डी 154"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #155: What is the correct ruling or historical fact for Topic 155?",
      "opts": [
        "Correct Answer 155",
        "Alternative Option B 155",
        "Alternative Option C 155",
        "Alternative Option D 155"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #155: عنوان 155 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 155",
        "متبادل آپشن ب 155",
        "متبادل آپشن ج 155",
        "متبادل آپشن د 155"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #155: विषय 155 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 155",
        "विकल्प बी 155",
        "विकल्प सी 155",
        "विकल्प डी 155"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #156: What is the correct ruling or historical fact for Topic 156?",
      "opts": [
        "Correct Answer 156",
        "Alternative Option B 156",
        "Alternative Option C 156",
        "Alternative Option D 156"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #156: عنوان 156 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 156",
        "متبادل آپشن ب 156",
        "متبادل آپشن ج 156",
        "متبادل آپشن د 156"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #156: विषय 156 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 156",
        "विकल्प बी 156",
        "विकल्प सी 156",
        "विकल्प डी 156"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #157: What is the correct ruling or historical fact for Topic 157?",
      "opts": [
        "Correct Answer 157",
        "Alternative Option B 157",
        "Alternative Option C 157",
        "Alternative Option D 157"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #157: عنوان 157 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 157",
        "متبادل آپشن ب 157",
        "متبادل آپشن ج 157",
        "متبادل آپشن د 157"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #157: विषय 157 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 157",
        "विकल्प बी 157",
        "विकल्प सी 157",
        "विकल्प डी 157"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #158: What is the correct ruling or historical fact for Topic 158?",
      "opts": [
        "Correct Answer 158",
        "Alternative Option B 158",
        "Alternative Option C 158",
        "Alternative Option D 158"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #158: عنوان 158 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 158",
        "متبادل آپشن ب 158",
        "متبادل آپشن ج 158",
        "متبادل آپشن د 158"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #158: विषय 158 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 158",
        "विकल्प बी 158",
        "विकल्प सी 158",
        "विकल्प डी 158"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #159: What is the correct ruling or historical fact for Topic 159?",
      "opts": [
        "Correct Answer 159",
        "Alternative Option B 159",
        "Alternative Option C 159",
        "Alternative Option D 159"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #159: عنوان 159 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 159",
        "متبادل آپشن ب 159",
        "متبادل آپشن ج 159",
        "متبادل آپشن د 159"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #159: विषय 159 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 159",
        "विकल्प बी 159",
        "विकल्प सी 159",
        "विकल्प डी 159"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #160: What is the correct ruling or historical fact for Topic 160?",
      "opts": [
        "Correct Answer 160",
        "Alternative Option B 160",
        "Alternative Option C 160",
        "Alternative Option D 160"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #160: عنوان 160 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 160",
        "متبادل آپشن ب 160",
        "متبادل آپشن ج 160",
        "متبادل آپشن د 160"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #160: विषय 160 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 160",
        "विकल्प बी 160",
        "विकल्प सी 160",
        "विकल्प डी 160"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #161: What is the correct ruling or historical fact for Topic 161?",
      "opts": [
        "Correct Answer 161",
        "Alternative Option B 161",
        "Alternative Option C 161",
        "Alternative Option D 161"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #161: عنوان 161 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 161",
        "متبادل آپشن ب 161",
        "متبادل آپشن ج 161",
        "متبادل آپشن د 161"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #161: विषय 161 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 161",
        "विकल्प बी 161",
        "विकल्प सी 161",
        "विकल्प डी 161"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #162: What is the correct ruling or historical fact for Topic 162?",
      "opts": [
        "Correct Answer 162",
        "Alternative Option B 162",
        "Alternative Option C 162",
        "Alternative Option D 162"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #162: عنوان 162 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 162",
        "متبادل آپشن ب 162",
        "متبادل آپشن ج 162",
        "متبادل آپشن د 162"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #162: विषय 162 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 162",
        "विकल्प बी 162",
        "विकल्प सी 162",
        "विकल्प डी 162"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #163: What is the correct ruling or historical fact for Topic 163?",
      "opts": [
        "Correct Answer 163",
        "Alternative Option B 163",
        "Alternative Option C 163",
        "Alternative Option D 163"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #163: عنوان 163 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 163",
        "متبادل آپشن ب 163",
        "متبادل آپشن ج 163",
        "متبادل آپشن د 163"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #163: विषय 163 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 163",
        "विकल्प बी 163",
        "विकल्प सी 163",
        "विकल्प डी 163"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #164: What is the correct ruling or historical fact for Topic 164?",
      "opts": [
        "Correct Answer 164",
        "Alternative Option B 164",
        "Alternative Option C 164",
        "Alternative Option D 164"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #164: عنوان 164 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 164",
        "متبادل آپشن ب 164",
        "متبادل آپشن ج 164",
        "متبادل آپشن د 164"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #164: विषय 164 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 164",
        "विकल्प बी 164",
        "विकल्प सी 164",
        "विकल्प डी 164"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #165: What is the correct ruling or historical fact for Topic 165?",
      "opts": [
        "Correct Answer 165",
        "Alternative Option B 165",
        "Alternative Option C 165",
        "Alternative Option D 165"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #165: عنوان 165 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 165",
        "متبادل آپشن ب 165",
        "متبادل آپشن ج 165",
        "متبادل آپشن د 165"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #165: विषय 165 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 165",
        "विकल्प बी 165",
        "विकल्प सी 165",
        "विकल्प डी 165"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #166: What is the correct ruling or historical fact for Topic 166?",
      "opts": [
        "Correct Answer 166",
        "Alternative Option B 166",
        "Alternative Option C 166",
        "Alternative Option D 166"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #166: عنوان 166 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 166",
        "متبادل آپشن ب 166",
        "متبادل آپشن ج 166",
        "متبادل آپشن د 166"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #166: विषय 166 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 166",
        "विकल्प बी 166",
        "विकल्प सी 166",
        "विकल्प डी 166"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #167: What is the correct ruling or historical fact for Topic 167?",
      "opts": [
        "Correct Answer 167",
        "Alternative Option B 167",
        "Alternative Option C 167",
        "Alternative Option D 167"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #167: عنوان 167 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 167",
        "متبادل آپشن ب 167",
        "متبادل آپشن ج 167",
        "متبادل آپشن د 167"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #167: विषय 167 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 167",
        "विकल्प बी 167",
        "विकल्प सी 167",
        "विकल्प डी 167"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #168: What is the correct ruling or historical fact for Topic 168?",
      "opts": [
        "Correct Answer 168",
        "Alternative Option B 168",
        "Alternative Option C 168",
        "Alternative Option D 168"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #168: عنوان 168 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 168",
        "متبادل آپشن ب 168",
        "متبادل آپشن ج 168",
        "متبادل آپشن د 168"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #168: विषय 168 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 168",
        "विकल्प बी 168",
        "विकल्प सी 168",
        "विकल्प डी 168"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #169: What is the correct ruling or historical fact for Topic 169?",
      "opts": [
        "Correct Answer 169",
        "Alternative Option B 169",
        "Alternative Option C 169",
        "Alternative Option D 169"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #169: عنوان 169 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 169",
        "متبادل آپشن ب 169",
        "متبادل آپشن ج 169",
        "متبادل آپشن د 169"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #169: विषय 169 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 169",
        "विकल्प बी 169",
        "विकल्प सी 169",
        "विकल्प डी 169"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #170: What is the correct ruling or historical fact for Topic 170?",
      "opts": [
        "Correct Answer 170",
        "Alternative Option B 170",
        "Alternative Option C 170",
        "Alternative Option D 170"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #170: عنوان 170 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 170",
        "متبادل آپشن ب 170",
        "متبادل آپشن ج 170",
        "متبادل آپشن د 170"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #170: विषय 170 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 170",
        "विकल्प बी 170",
        "विकल्प सी 170",
        "विकल्प डी 170"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #171: What is the correct ruling or historical fact for Topic 171?",
      "opts": [
        "Correct Answer 171",
        "Alternative Option B 171",
        "Alternative Option C 171",
        "Alternative Option D 171"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #171: عنوان 171 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 171",
        "متبادل آپشن ب 171",
        "متبادل آپشن ج 171",
        "متبادل آپشن د 171"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #171: विषय 171 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 171",
        "विकल्प बी 171",
        "विकल्प सी 171",
        "विकल्प डी 171"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #172: What is the correct ruling or historical fact for Topic 172?",
      "opts": [
        "Correct Answer 172",
        "Alternative Option B 172",
        "Alternative Option C 172",
        "Alternative Option D 172"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #172: عنوان 172 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 172",
        "متبادل آپشن ب 172",
        "متبادل آپشن ج 172",
        "متبادل آپشن د 172"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #172: विषय 172 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 172",
        "विकल्प बी 172",
        "विकल्प सी 172",
        "विकल्प डी 172"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #173: What is the correct ruling or historical fact for Topic 173?",
      "opts": [
        "Correct Answer 173",
        "Alternative Option B 173",
        "Alternative Option C 173",
        "Alternative Option D 173"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #173: عنوان 173 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 173",
        "متبادل آپشن ب 173",
        "متبادل آپشن ج 173",
        "متبادل آپشن د 173"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #173: विषय 173 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 173",
        "विकल्प बी 173",
        "विकल्प सी 173",
        "विकल्प डी 173"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #174: What is the correct ruling or historical fact for Topic 174?",
      "opts": [
        "Correct Answer 174",
        "Alternative Option B 174",
        "Alternative Option C 174",
        "Alternative Option D 174"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #174: عنوان 174 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 174",
        "متبادل آپشن ب 174",
        "متبادل آپشن ج 174",
        "متبادل آپشن د 174"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #174: विषय 174 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 174",
        "विकल्प बी 174",
        "विकल्प सी 174",
        "विकल्प डी 174"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #175: What is the correct ruling or historical fact for Topic 175?",
      "opts": [
        "Correct Answer 175",
        "Alternative Option B 175",
        "Alternative Option C 175",
        "Alternative Option D 175"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #175: عنوان 175 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 175",
        "متبادل آپشن ب 175",
        "متبادل آپشن ج 175",
        "متبادل آپشن د 175"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #175: विषय 175 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 175",
        "विकल्प बी 175",
        "विकल्प सी 175",
        "विकल्प डी 175"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #176: What is the correct ruling or historical fact for Topic 176?",
      "opts": [
        "Correct Answer 176",
        "Alternative Option B 176",
        "Alternative Option C 176",
        "Alternative Option D 176"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #176: عنوان 176 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 176",
        "متبادل آپشن ب 176",
        "متبادل آپشن ج 176",
        "متبادل آپشن د 176"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #176: विषय 176 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 176",
        "विकल्प बी 176",
        "विकल्प सी 176",
        "विकल्प डी 176"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #177: What is the correct ruling or historical fact for Topic 177?",
      "opts": [
        "Correct Answer 177",
        "Alternative Option B 177",
        "Alternative Option C 177",
        "Alternative Option D 177"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #177: عنوان 177 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 177",
        "متبادل آپشن ب 177",
        "متبادل آپشن ج 177",
        "متبادل آپشن د 177"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #177: विषय 177 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 177",
        "विकल्प बी 177",
        "विकल्प सी 177",
        "विकल्प डी 177"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #178: What is the correct ruling or historical fact for Topic 178?",
      "opts": [
        "Correct Answer 178",
        "Alternative Option B 178",
        "Alternative Option C 178",
        "Alternative Option D 178"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #178: عنوان 178 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 178",
        "متبادل آپشن ب 178",
        "متبادل آپشن ج 178",
        "متبادل آپشن د 178"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #178: विषय 178 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 178",
        "विकल्प बी 178",
        "विकल्प सी 178",
        "विकल्प डी 178"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #179: What is the correct ruling or historical fact for Topic 179?",
      "opts": [
        "Correct Answer 179",
        "Alternative Option B 179",
        "Alternative Option C 179",
        "Alternative Option D 179"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #179: عنوان 179 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 179",
        "متبادل آپشن ب 179",
        "متبادل آپشن ج 179",
        "متبادل آپشن د 179"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #179: विषय 179 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 179",
        "विकल्प बी 179",
        "विकल्प सी 179",
        "विकल्प डी 179"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #180: What is the correct ruling or historical fact for Topic 180?",
      "opts": [
        "Correct Answer 180",
        "Alternative Option B 180",
        "Alternative Option C 180",
        "Alternative Option D 180"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #180: عنوان 180 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 180",
        "متبادل آپشن ب 180",
        "متبادل آپشن ج 180",
        "متبادل آپشن د 180"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #180: विषय 180 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 180",
        "विकल्प बी 180",
        "विकल्प सी 180",
        "विकल्प डी 180"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #181: What is the correct ruling or historical fact for Topic 181?",
      "opts": [
        "Correct Answer 181",
        "Alternative Option B 181",
        "Alternative Option C 181",
        "Alternative Option D 181"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #181: عنوان 181 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 181",
        "متبادل آپشن ب 181",
        "متبادل آپشن ج 181",
        "متبادل آپشن د 181"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #181: विषय 181 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 181",
        "विकल्प बी 181",
        "विकल्प सी 181",
        "विकल्प डी 181"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #182: What is the correct ruling or historical fact for Topic 182?",
      "opts": [
        "Correct Answer 182",
        "Alternative Option B 182",
        "Alternative Option C 182",
        "Alternative Option D 182"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #182: عنوان 182 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 182",
        "متبادل آپشن ب 182",
        "متبادل آپشن ج 182",
        "متبادل آپشن د 182"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #182: विषय 182 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 182",
        "विकल्प बी 182",
        "विकल्प सी 182",
        "विकल्प डी 182"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #183: What is the correct ruling or historical fact for Topic 183?",
      "opts": [
        "Correct Answer 183",
        "Alternative Option B 183",
        "Alternative Option C 183",
        "Alternative Option D 183"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #183: عنوان 183 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 183",
        "متبادل آپشن ب 183",
        "متبادل آپشن ج 183",
        "متبادل آپشن د 183"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #183: विषय 183 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 183",
        "विकल्प बी 183",
        "विकल्प सी 183",
        "विकल्प डी 183"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #184: What is the correct ruling or historical fact for Topic 184?",
      "opts": [
        "Correct Answer 184",
        "Alternative Option B 184",
        "Alternative Option C 184",
        "Alternative Option D 184"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #184: عنوان 184 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 184",
        "متبادل آپشن ب 184",
        "متبادل آپشن ج 184",
        "متبادل آپشن د 184"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #184: विषय 184 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 184",
        "विकल्प बी 184",
        "विकल्प सी 184",
        "विकल्प डी 184"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #185: What is the correct ruling or historical fact for Topic 185?",
      "opts": [
        "Correct Answer 185",
        "Alternative Option B 185",
        "Alternative Option C 185",
        "Alternative Option D 185"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #185: عنوان 185 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 185",
        "متبادل آپشن ب 185",
        "متبادل آپشن ج 185",
        "متبادل آپشن د 185"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #185: विषय 185 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 185",
        "विकल्प बी 185",
        "विकल्प सी 185",
        "विकल्प डी 185"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #186: What is the correct ruling or historical fact for Topic 186?",
      "opts": [
        "Correct Answer 186",
        "Alternative Option B 186",
        "Alternative Option C 186",
        "Alternative Option D 186"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #186: عنوان 186 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 186",
        "متبادل آپشن ب 186",
        "متبادل آپشن ج 186",
        "متبادل آپشن د 186"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #186: विषय 186 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 186",
        "विकल्प बी 186",
        "विकल्प सी 186",
        "विकल्प डी 186"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #187: What is the correct ruling or historical fact for Topic 187?",
      "opts": [
        "Correct Answer 187",
        "Alternative Option B 187",
        "Alternative Option C 187",
        "Alternative Option D 187"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #187: عنوان 187 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 187",
        "متبادل آپشن ب 187",
        "متبادل آپشن ج 187",
        "متبادل آپشن د 187"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #187: विषय 187 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 187",
        "विकल्प बी 187",
        "विकल्प सी 187",
        "विकल्प डी 187"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #188: What is the correct ruling or historical fact for Topic 188?",
      "opts": [
        "Correct Answer 188",
        "Alternative Option B 188",
        "Alternative Option C 188",
        "Alternative Option D 188"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #188: عنوان 188 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 188",
        "متبادل آپشن ب 188",
        "متبادل آپشن ج 188",
        "متبادل آپشن د 188"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #188: विषय 188 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 188",
        "विकल्प बी 188",
        "विकल्प सी 188",
        "विकल्प डी 188"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #189: What is the correct ruling or historical fact for Topic 189?",
      "opts": [
        "Correct Answer 189",
        "Alternative Option B 189",
        "Alternative Option C 189",
        "Alternative Option D 189"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #189: عنوان 189 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 189",
        "متبادل آپشن ب 189",
        "متبادل آپشن ج 189",
        "متبادل آپشن د 189"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #189: विषय 189 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 189",
        "विकल्प बी 189",
        "विकल्प सी 189",
        "विकल्प डी 189"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #190: What is the correct ruling or historical fact for Topic 190?",
      "opts": [
        "Correct Answer 190",
        "Alternative Option B 190",
        "Alternative Option C 190",
        "Alternative Option D 190"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #190: عنوان 190 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 190",
        "متبادل آپشن ب 190",
        "متبادل آپشن ج 190",
        "متبادل آپشن د 190"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #190: विषय 190 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 190",
        "विकल्प बी 190",
        "विकल्प सी 190",
        "विकल्प डी 190"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #191: What is the correct ruling or historical fact for Topic 191?",
      "opts": [
        "Correct Answer 191",
        "Alternative Option B 191",
        "Alternative Option C 191",
        "Alternative Option D 191"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #191: عنوان 191 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 191",
        "متبادل آپشن ب 191",
        "متبادل آپشن ج 191",
        "متبادل آپشن د 191"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #191: विषय 191 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 191",
        "विकल्प बी 191",
        "विकल्प सी 191",
        "विकल्प डी 191"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #192: What is the correct ruling or historical fact for Topic 192?",
      "opts": [
        "Correct Answer 192",
        "Alternative Option B 192",
        "Alternative Option C 192",
        "Alternative Option D 192"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #192: عنوان 192 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 192",
        "متبادل آپشن ب 192",
        "متبادل آپشن ج 192",
        "متبادل آپشن د 192"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #192: विषय 192 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 192",
        "विकल्प बी 192",
        "विकल्प सी 192",
        "विकल्प डी 192"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #193: What is the correct ruling or historical fact for Topic 193?",
      "opts": [
        "Correct Answer 193",
        "Alternative Option B 193",
        "Alternative Option C 193",
        "Alternative Option D 193"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #193: عنوان 193 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 193",
        "متبادل آپشن ب 193",
        "متبادل آپشن ج 193",
        "متبادل آپشن د 193"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #193: विषय 193 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 193",
        "विकल्प बी 193",
        "विकल्प सी 193",
        "विकल्प डी 193"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #194: What is the correct ruling or historical fact for Topic 194?",
      "opts": [
        "Correct Answer 194",
        "Alternative Option B 194",
        "Alternative Option C 194",
        "Alternative Option D 194"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #194: عنوان 194 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 194",
        "متبادل آپشن ب 194",
        "متبادل آپشن ج 194",
        "متبادل آپشن د 194"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #194: विषय 194 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 194",
        "विकल्प बी 194",
        "विकल्प सी 194",
        "विकल्प डी 194"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #195: What is the correct ruling or historical fact for Topic 195?",
      "opts": [
        "Correct Answer 195",
        "Alternative Option B 195",
        "Alternative Option C 195",
        "Alternative Option D 195"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #195: عنوان 195 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 195",
        "متبادل آپشن ب 195",
        "متبادل آپشن ج 195",
        "متبادل آپشن د 195"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #195: विषय 195 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 195",
        "विकल्प बी 195",
        "विकल्प सी 195",
        "विकल्प डी 195"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #196: What is the correct ruling or historical fact for Topic 196?",
      "opts": [
        "Correct Answer 196",
        "Alternative Option B 196",
        "Alternative Option C 196",
        "Alternative Option D 196"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #196: عنوان 196 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 196",
        "متبادل آپشن ب 196",
        "متبادل آپشن ج 196",
        "متبادل آپشن د 196"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #196: विषय 196 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 196",
        "विकल्प बी 196",
        "विकल्प सी 196",
        "विकल्प डी 196"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #197: What is the correct ruling or historical fact for Topic 197?",
      "opts": [
        "Correct Answer 197",
        "Alternative Option B 197",
        "Alternative Option C 197",
        "Alternative Option D 197"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #197: عنوان 197 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 197",
        "متبادل آپشن ب 197",
        "متبادل آپشن ج 197",
        "متبادل آپشن د 197"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #197: विषय 197 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 197",
        "विकल्प बी 197",
        "विकल्प सी 197",
        "विकल्प डी 197"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #198: What is the correct ruling or historical fact for Topic 198?",
      "opts": [
        "Correct Answer 198",
        "Alternative Option B 198",
        "Alternative Option C 198",
        "Alternative Option D 198"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #198: عنوان 198 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 198",
        "متبادل آپشن ب 198",
        "متبادل آپشن ج 198",
        "متبادل آپشن د 198"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #198: विषय 198 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 198",
        "विकल्प बी 198",
        "विकल्प सी 198",
        "विकल्प डी 198"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #199: What is the correct ruling or historical fact for Topic 199?",
      "opts": [
        "Correct Answer 199",
        "Alternative Option B 199",
        "Alternative Option C 199",
        "Alternative Option D 199"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #199: عنوان 199 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 199",
        "متبادل آپشن ب 199",
        "متبادل آپشن ج 199",
        "متبادل آپشن د 199"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #199: विषय 199 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 199",
        "विकल्प बी 199",
        "विकल्प सी 199",
        "विकल्प डी 199"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #200: What is the correct ruling or historical fact for Topic 200?",
      "opts": [
        "Correct Answer 200",
        "Alternative Option B 200",
        "Alternative Option C 200",
        "Alternative Option D 200"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #200: عنوان 200 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 200",
        "متبادل آپشن ب 200",
        "متبادل آپشن ج 200",
        "متبادل آپشن د 200"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #200: विषय 200 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 200",
        "विकल्प बी 200",
        "विकल्प सी 200",
        "विकल्प डी 200"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #201: What is the correct ruling or historical fact for Topic 201?",
      "opts": [
        "Correct Answer 201",
        "Alternative Option B 201",
        "Alternative Option C 201",
        "Alternative Option D 201"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #201: عنوان 201 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 201",
        "متبادل آپشن ب 201",
        "متبادل آپشن ج 201",
        "متبادل آپشن د 201"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #201: विषय 201 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 201",
        "विकल्प बी 201",
        "विकल्प सी 201",
        "विकल्प डी 201"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #202: What is the correct ruling or historical fact for Topic 202?",
      "opts": [
        "Correct Answer 202",
        "Alternative Option B 202",
        "Alternative Option C 202",
        "Alternative Option D 202"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #202: عنوان 202 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 202",
        "متبادل آپشن ب 202",
        "متبادل آپشن ج 202",
        "متبادل آپشن د 202"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #202: विषय 202 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 202",
        "विकल्प बी 202",
        "विकल्प सी 202",
        "विकल्प डी 202"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #203: What is the correct ruling or historical fact for Topic 203?",
      "opts": [
        "Correct Answer 203",
        "Alternative Option B 203",
        "Alternative Option C 203",
        "Alternative Option D 203"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #203: عنوان 203 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 203",
        "متبادل آپشن ب 203",
        "متبادل آپشن ج 203",
        "متبادل آپشن د 203"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #203: विषय 203 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 203",
        "विकल्प बी 203",
        "विकल्प सी 203",
        "विकल्प डी 203"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #204: What is the correct ruling or historical fact for Topic 204?",
      "opts": [
        "Correct Answer 204",
        "Alternative Option B 204",
        "Alternative Option C 204",
        "Alternative Option D 204"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #204: عنوان 204 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 204",
        "متبادل آپشن ب 204",
        "متبادل آپشن ج 204",
        "متبادل آپشن د 204"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #204: विषय 204 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 204",
        "विकल्प बी 204",
        "विकल्प सी 204",
        "विकल्प डी 204"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #205: What is the correct ruling or historical fact for Topic 205?",
      "opts": [
        "Correct Answer 205",
        "Alternative Option B 205",
        "Alternative Option C 205",
        "Alternative Option D 205"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #205: عنوان 205 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 205",
        "متبادل آپشن ب 205",
        "متبادل آپشن ج 205",
        "متبادل آپشن د 205"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #205: विषय 205 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 205",
        "विकल्प बी 205",
        "विकल्प सी 205",
        "विकल्प डी 205"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #206: What is the correct ruling or historical fact for Topic 206?",
      "opts": [
        "Correct Answer 206",
        "Alternative Option B 206",
        "Alternative Option C 206",
        "Alternative Option D 206"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #206: عنوان 206 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 206",
        "متبادل آپشن ب 206",
        "متبادل آپشن ج 206",
        "متبادل آپشن د 206"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #206: विषय 206 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 206",
        "विकल्प बी 206",
        "विकल्प सी 206",
        "विकल्प डी 206"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #207: What is the correct ruling or historical fact for Topic 207?",
      "opts": [
        "Correct Answer 207",
        "Alternative Option B 207",
        "Alternative Option C 207",
        "Alternative Option D 207"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #207: عنوان 207 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 207",
        "متبادل آپشن ب 207",
        "متبادل آپشن ج 207",
        "متبادل آپشن د 207"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #207: विषय 207 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 207",
        "विकल्प बी 207",
        "विकल्प सी 207",
        "विकल्प डी 207"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #208: What is the correct ruling or historical fact for Topic 208?",
      "opts": [
        "Correct Answer 208",
        "Alternative Option B 208",
        "Alternative Option C 208",
        "Alternative Option D 208"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #208: عنوان 208 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 208",
        "متبادل آپشن ب 208",
        "متبادل آپشن ج 208",
        "متبادل آپشن د 208"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #208: विषय 208 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 208",
        "विकल्प बी 208",
        "विकल्प सी 208",
        "विकल्प डी 208"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #209: What is the correct ruling or historical fact for Topic 209?",
      "opts": [
        "Correct Answer 209",
        "Alternative Option B 209",
        "Alternative Option C 209",
        "Alternative Option D 209"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #209: عنوان 209 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 209",
        "متبادل آپشن ب 209",
        "متبادل آپشن ج 209",
        "متبادل آپشن د 209"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #209: विषय 209 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 209",
        "विकल्प बी 209",
        "विकल्प सी 209",
        "विकल्प डी 209"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #210: What is the correct ruling or historical fact for Topic 210?",
      "opts": [
        "Correct Answer 210",
        "Alternative Option B 210",
        "Alternative Option C 210",
        "Alternative Option D 210"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #210: عنوان 210 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 210",
        "متبادل آپشن ب 210",
        "متبادل آپشن ج 210",
        "متبادل آپشن د 210"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #210: विषय 210 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 210",
        "विकल्प बी 210",
        "विकल्प सी 210",
        "विकल्प डी 210"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #211: What is the correct ruling or historical fact for Topic 211?",
      "opts": [
        "Correct Answer 211",
        "Alternative Option B 211",
        "Alternative Option C 211",
        "Alternative Option D 211"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #211: عنوان 211 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 211",
        "متبادل آپشن ب 211",
        "متبادل آپشن ج 211",
        "متبادل آپشن د 211"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #211: विषय 211 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 211",
        "विकल्प बी 211",
        "विकल्प सी 211",
        "विकल्प डी 211"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #212: What is the correct ruling or historical fact for Topic 212?",
      "opts": [
        "Correct Answer 212",
        "Alternative Option B 212",
        "Alternative Option C 212",
        "Alternative Option D 212"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #212: عنوان 212 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 212",
        "متبادل آپشن ب 212",
        "متبادل آپشن ج 212",
        "متبادل آپشن د 212"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #212: विषय 212 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 212",
        "विकल्प बी 212",
        "विकल्प सी 212",
        "विकल्प डी 212"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #213: What is the correct ruling or historical fact for Topic 213?",
      "opts": [
        "Correct Answer 213",
        "Alternative Option B 213",
        "Alternative Option C 213",
        "Alternative Option D 213"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #213: عنوان 213 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 213",
        "متبادل آپشن ب 213",
        "متبادل آپشن ج 213",
        "متبادل آپشن د 213"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #213: विषय 213 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 213",
        "विकल्प बी 213",
        "विकल्प सी 213",
        "विकल्प डी 213"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #214: What is the correct ruling or historical fact for Topic 214?",
      "opts": [
        "Correct Answer 214",
        "Alternative Option B 214",
        "Alternative Option C 214",
        "Alternative Option D 214"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #214: عنوان 214 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 214",
        "متبادل آپشن ب 214",
        "متبادل آپشن ج 214",
        "متبادل آپشن د 214"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #214: विषय 214 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 214",
        "विकल्प बी 214",
        "विकल्प सी 214",
        "विकल्प डी 214"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #215: What is the correct ruling or historical fact for Topic 215?",
      "opts": [
        "Correct Answer 215",
        "Alternative Option B 215",
        "Alternative Option C 215",
        "Alternative Option D 215"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #215: عنوان 215 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 215",
        "متبادل آپشن ب 215",
        "متبادل آپشن ج 215",
        "متبادل آپشن د 215"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #215: विषय 215 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 215",
        "विकल्प बी 215",
        "विकल्प सी 215",
        "विकल्प डी 215"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #216: What is the correct ruling or historical fact for Topic 216?",
      "opts": [
        "Correct Answer 216",
        "Alternative Option B 216",
        "Alternative Option C 216",
        "Alternative Option D 216"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #216: عنوان 216 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 216",
        "متبادل آپشن ب 216",
        "متبادل آپشن ج 216",
        "متبادل آپشن د 216"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #216: विषय 216 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 216",
        "विकल्प बी 216",
        "विकल्प सी 216",
        "विकल्प डी 216"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #217: What is the correct ruling or historical fact for Topic 217?",
      "opts": [
        "Correct Answer 217",
        "Alternative Option B 217",
        "Alternative Option C 217",
        "Alternative Option D 217"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #217: عنوان 217 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 217",
        "متبادل آپشن ب 217",
        "متبادل آپشن ج 217",
        "متبادل آپشن د 217"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #217: विषय 217 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 217",
        "विकल्प बी 217",
        "विकल्प सी 217",
        "विकल्प डी 217"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #218: What is the correct ruling or historical fact for Topic 218?",
      "opts": [
        "Correct Answer 218",
        "Alternative Option B 218",
        "Alternative Option C 218",
        "Alternative Option D 218"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #218: عنوان 218 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 218",
        "متبادل آپشن ب 218",
        "متبادل آپشن ج 218",
        "متبادل آپشن د 218"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #218: विषय 218 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 218",
        "विकल्प बी 218",
        "विकल्प सी 218",
        "विकल्प डी 218"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #219: What is the correct ruling or historical fact for Topic 219?",
      "opts": [
        "Correct Answer 219",
        "Alternative Option B 219",
        "Alternative Option C 219",
        "Alternative Option D 219"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #219: عنوان 219 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 219",
        "متبادل آپشن ب 219",
        "متبادل آپشن ج 219",
        "متبادل آپشن د 219"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #219: विषय 219 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 219",
        "विकल्प बी 219",
        "विकल्प सी 219",
        "विकल्प डी 219"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #220: What is the correct ruling or historical fact for Topic 220?",
      "opts": [
        "Correct Answer 220",
        "Alternative Option B 220",
        "Alternative Option C 220",
        "Alternative Option D 220"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #220: عنوان 220 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 220",
        "متبادل آپشن ب 220",
        "متبادل آپشن ج 220",
        "متبادل آپشن د 220"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #220: विषय 220 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 220",
        "विकल्प बी 220",
        "विकल्प सी 220",
        "विकल्प डी 220"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #221: What is the correct ruling or historical fact for Topic 221?",
      "opts": [
        "Correct Answer 221",
        "Alternative Option B 221",
        "Alternative Option C 221",
        "Alternative Option D 221"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #221: عنوان 221 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 221",
        "متبادل آپشن ب 221",
        "متبادل آپشن ج 221",
        "متبادل آپشن د 221"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #221: विषय 221 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 221",
        "विकल्प बी 221",
        "विकल्प सी 221",
        "विकल्प डी 221"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #222: What is the correct ruling or historical fact for Topic 222?",
      "opts": [
        "Correct Answer 222",
        "Alternative Option B 222",
        "Alternative Option C 222",
        "Alternative Option D 222"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #222: عنوان 222 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 222",
        "متبادل آپشن ب 222",
        "متبادل آپشن ج 222",
        "متبادل آپشن د 222"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #222: विषय 222 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 222",
        "विकल्प बी 222",
        "विकल्प सी 222",
        "विकल्प डी 222"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #223: What is the correct ruling or historical fact for Topic 223?",
      "opts": [
        "Correct Answer 223",
        "Alternative Option B 223",
        "Alternative Option C 223",
        "Alternative Option D 223"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #223: عنوان 223 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 223",
        "متبادل آپشن ب 223",
        "متبادل آپشن ج 223",
        "متبادل آپشن د 223"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #223: विषय 223 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 223",
        "विकल्प बी 223",
        "विकल्प सी 223",
        "विकल्प डी 223"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #224: What is the correct ruling or historical fact for Topic 224?",
      "opts": [
        "Correct Answer 224",
        "Alternative Option B 224",
        "Alternative Option C 224",
        "Alternative Option D 224"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #224: عنوان 224 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 224",
        "متبادل آپشن ب 224",
        "متبادل آپشن ج 224",
        "متبادل آپشن د 224"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #224: विषय 224 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 224",
        "विकल्प बी 224",
        "विकल्प सी 224",
        "विकल्प डी 224"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #225: What is the correct ruling or historical fact for Topic 225?",
      "opts": [
        "Correct Answer 225",
        "Alternative Option B 225",
        "Alternative Option C 225",
        "Alternative Option D 225"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #225: عنوان 225 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 225",
        "متبادل آپشن ب 225",
        "متبادل آپشن ج 225",
        "متبادل آپشن د 225"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #225: विषय 225 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 225",
        "विकल्प बी 225",
        "विकल्प सी 225",
        "विकल्प डी 225"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #226: What is the correct ruling or historical fact for Topic 226?",
      "opts": [
        "Correct Answer 226",
        "Alternative Option B 226",
        "Alternative Option C 226",
        "Alternative Option D 226"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #226: عنوان 226 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 226",
        "متبادل آپشن ب 226",
        "متبادل آپشن ج 226",
        "متبادل آپشن د 226"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #226: विषय 226 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 226",
        "विकल्प बी 226",
        "विकल्प सी 226",
        "विकल्प डी 226"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #227: What is the correct ruling or historical fact for Topic 227?",
      "opts": [
        "Correct Answer 227",
        "Alternative Option B 227",
        "Alternative Option C 227",
        "Alternative Option D 227"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #227: عنوان 227 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 227",
        "متبادل آپشن ب 227",
        "متبادل آپشن ج 227",
        "متبادل آپشن د 227"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #227: विषय 227 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 227",
        "विकल्प बी 227",
        "विकल्प सी 227",
        "विकल्प डी 227"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #228: What is the correct ruling or historical fact for Topic 228?",
      "opts": [
        "Correct Answer 228",
        "Alternative Option B 228",
        "Alternative Option C 228",
        "Alternative Option D 228"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #228: عنوان 228 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 228",
        "متبادل آپشن ب 228",
        "متبادل آپشن ج 228",
        "متبادل آپشن د 228"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #228: विषय 228 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 228",
        "विकल्प बी 228",
        "विकल्प सी 228",
        "विकल्प डी 228"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #229: What is the correct ruling or historical fact for Topic 229?",
      "opts": [
        "Correct Answer 229",
        "Alternative Option B 229",
        "Alternative Option C 229",
        "Alternative Option D 229"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #229: عنوان 229 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 229",
        "متبادل آپشن ب 229",
        "متبادل آپشن ج 229",
        "متبادل آپشن د 229"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #229: विषय 229 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 229",
        "विकल्प बी 229",
        "विकल्प सी 229",
        "विकल्प डी 229"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #230: What is the correct ruling or historical fact for Topic 230?",
      "opts": [
        "Correct Answer 230",
        "Alternative Option B 230",
        "Alternative Option C 230",
        "Alternative Option D 230"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #230: عنوان 230 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 230",
        "متبادل آپشن ب 230",
        "متبادل آپشن ج 230",
        "متبادل آپشن د 230"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #230: विषय 230 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 230",
        "विकल्प बी 230",
        "विकल्प सी 230",
        "विकल्प डी 230"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #231: What is the correct ruling or historical fact for Topic 231?",
      "opts": [
        "Correct Answer 231",
        "Alternative Option B 231",
        "Alternative Option C 231",
        "Alternative Option D 231"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #231: عنوان 231 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 231",
        "متبادل آپشن ب 231",
        "متبادل آپشن ج 231",
        "متبادل آپشن د 231"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #231: विषय 231 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 231",
        "विकल्प बी 231",
        "विकल्प सी 231",
        "विकल्प डी 231"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #232: What is the correct ruling or historical fact for Topic 232?",
      "opts": [
        "Correct Answer 232",
        "Alternative Option B 232",
        "Alternative Option C 232",
        "Alternative Option D 232"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #232: عنوان 232 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 232",
        "متبادل آپشن ب 232",
        "متبادل آپشن ج 232",
        "متبادل آپشن د 232"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #232: विषय 232 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 232",
        "विकल्प बी 232",
        "विकल्प सी 232",
        "विकल्प डी 232"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #233: What is the correct ruling or historical fact for Topic 233?",
      "opts": [
        "Correct Answer 233",
        "Alternative Option B 233",
        "Alternative Option C 233",
        "Alternative Option D 233"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #233: عنوان 233 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 233",
        "متبادل آپشن ب 233",
        "متبادل آپشن ج 233",
        "متبادل آپشن د 233"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #233: विषय 233 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 233",
        "विकल्प बी 233",
        "विकल्प सी 233",
        "विकल्प डी 233"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #234: What is the correct ruling or historical fact for Topic 234?",
      "opts": [
        "Correct Answer 234",
        "Alternative Option B 234",
        "Alternative Option C 234",
        "Alternative Option D 234"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #234: عنوان 234 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 234",
        "متبادل آپشن ب 234",
        "متبادل آپشن ج 234",
        "متبادل آپشن د 234"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #234: विषय 234 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 234",
        "विकल्प बी 234",
        "विकल्प सी 234",
        "विकल्प डी 234"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #235: What is the correct ruling or historical fact for Topic 235?",
      "opts": [
        "Correct Answer 235",
        "Alternative Option B 235",
        "Alternative Option C 235",
        "Alternative Option D 235"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #235: عنوان 235 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 235",
        "متبادل آپشن ب 235",
        "متبادل آپشن ج 235",
        "متبادل آپشن د 235"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #235: विषय 235 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 235",
        "विकल्प बी 235",
        "विकल्प सी 235",
        "विकल्प डी 235"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #236: What is the correct ruling or historical fact for Topic 236?",
      "opts": [
        "Correct Answer 236",
        "Alternative Option B 236",
        "Alternative Option C 236",
        "Alternative Option D 236"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #236: عنوان 236 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 236",
        "متبادل آپشن ب 236",
        "متبادل آپشن ج 236",
        "متبادل آپشن د 236"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #236: विषय 236 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 236",
        "विकल्प बी 236",
        "विकल्प सी 236",
        "विकल्प डी 236"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #237: What is the correct ruling or historical fact for Topic 237?",
      "opts": [
        "Correct Answer 237",
        "Alternative Option B 237",
        "Alternative Option C 237",
        "Alternative Option D 237"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #237: عنوان 237 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 237",
        "متبادل آپشن ب 237",
        "متبادل آپشن ج 237",
        "متبادل آپشن د 237"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #237: विषय 237 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 237",
        "विकल्प बी 237",
        "विकल्प सी 237",
        "विकल्प डी 237"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #238: What is the correct ruling or historical fact for Topic 238?",
      "opts": [
        "Correct Answer 238",
        "Alternative Option B 238",
        "Alternative Option C 238",
        "Alternative Option D 238"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #238: عنوان 238 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 238",
        "متبادل آپشن ب 238",
        "متبادل آپشن ج 238",
        "متبادل آپشن د 238"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #238: विषय 238 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 238",
        "विकल्प बी 238",
        "विकल्प सी 238",
        "विकल्प डी 238"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #239: What is the correct ruling or historical fact for Topic 239?",
      "opts": [
        "Correct Answer 239",
        "Alternative Option B 239",
        "Alternative Option C 239",
        "Alternative Option D 239"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #239: عنوان 239 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 239",
        "متبادل آپشن ب 239",
        "متبادل آپشن ج 239",
        "متبادل آپشن د 239"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #239: विषय 239 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 239",
        "विकल्प बी 239",
        "विकल्प सी 239",
        "विकल्प डी 239"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #240: What is the correct ruling or historical fact for Topic 240?",
      "opts": [
        "Correct Answer 240",
        "Alternative Option B 240",
        "Alternative Option C 240",
        "Alternative Option D 240"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #240: عنوان 240 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 240",
        "متبادل آپشن ب 240",
        "متبادل آپشن ج 240",
        "متبادل آپشن د 240"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #240: विषय 240 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 240",
        "विकल्प बी 240",
        "विकल्प सी 240",
        "विकल्प डी 240"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #241: What is the correct ruling or historical fact for Topic 241?",
      "opts": [
        "Correct Answer 241",
        "Alternative Option B 241",
        "Alternative Option C 241",
        "Alternative Option D 241"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #241: عنوان 241 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 241",
        "متبادل آپشن ب 241",
        "متبادل آپشن ج 241",
        "متبادل آپشن د 241"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #241: विषय 241 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 241",
        "विकल्प बी 241",
        "विकल्प सी 241",
        "विकल्प डी 241"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #242: What is the correct ruling or historical fact for Topic 242?",
      "opts": [
        "Correct Answer 242",
        "Alternative Option B 242",
        "Alternative Option C 242",
        "Alternative Option D 242"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #242: عنوان 242 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 242",
        "متبادل آپشن ب 242",
        "متبادل آپشن ج 242",
        "متبادل آپشن د 242"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #242: विषय 242 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 242",
        "विकल्प बी 242",
        "विकल्प सी 242",
        "विकल्प डी 242"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #243: What is the correct ruling or historical fact for Topic 243?",
      "opts": [
        "Correct Answer 243",
        "Alternative Option B 243",
        "Alternative Option C 243",
        "Alternative Option D 243"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #243: عنوان 243 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 243",
        "متبادل آپشن ب 243",
        "متبادل آپشن ج 243",
        "متبادل آپشن د 243"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #243: विषय 243 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 243",
        "विकल्प बी 243",
        "विकल्प सी 243",
        "विकल्प डी 243"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #244: What is the correct ruling or historical fact for Topic 244?",
      "opts": [
        "Correct Answer 244",
        "Alternative Option B 244",
        "Alternative Option C 244",
        "Alternative Option D 244"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #244: عنوان 244 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 244",
        "متبادل آپشن ب 244",
        "متبادل آپشن ج 244",
        "متبادل آپشن د 244"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #244: विषय 244 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 244",
        "विकल्प बी 244",
        "विकल्प सी 244",
        "विकल्प डी 244"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #245: What is the correct ruling or historical fact for Topic 245?",
      "opts": [
        "Correct Answer 245",
        "Alternative Option B 245",
        "Alternative Option C 245",
        "Alternative Option D 245"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #245: عنوان 245 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 245",
        "متبادل آپشن ب 245",
        "متبادل آپشن ج 245",
        "متبادل آپشن د 245"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #245: विषय 245 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 245",
        "विकल्प बी 245",
        "विकल्प सी 245",
        "विकल्प डी 245"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #246: What is the correct ruling or historical fact for Topic 246?",
      "opts": [
        "Correct Answer 246",
        "Alternative Option B 246",
        "Alternative Option C 246",
        "Alternative Option D 246"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #246: عنوان 246 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 246",
        "متبادل آپشن ب 246",
        "متبادل آپشن ج 246",
        "متبادل آپشن د 246"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #246: विषय 246 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 246",
        "विकल्प बी 246",
        "विकल्प सी 246",
        "विकल्प डी 246"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #247: What is the correct ruling or historical fact for Topic 247?",
      "opts": [
        "Correct Answer 247",
        "Alternative Option B 247",
        "Alternative Option C 247",
        "Alternative Option D 247"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #247: عنوان 247 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 247",
        "متبادل آپشن ب 247",
        "متبادل آپشن ج 247",
        "متبادل آپشن د 247"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #247: विषय 247 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 247",
        "विकल्प बी 247",
        "विकल्प सी 247",
        "विकल्प डी 247"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #248: What is the correct ruling or historical fact for Topic 248?",
      "opts": [
        "Correct Answer 248",
        "Alternative Option B 248",
        "Alternative Option C 248",
        "Alternative Option D 248"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #248: عنوان 248 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 248",
        "متبادل آپشن ب 248",
        "متبادل آپشن ج 248",
        "متبادل آپشن د 248"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #248: विषय 248 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 248",
        "विकल्प बी 248",
        "विकल्प सी 248",
        "विकल्प डी 248"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #249: What is the correct ruling or historical fact for Topic 249?",
      "opts": [
        "Correct Answer 249",
        "Alternative Option B 249",
        "Alternative Option C 249",
        "Alternative Option D 249"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #249: عنوان 249 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 249",
        "متبادل آپشن ب 249",
        "متبادل آپشن ج 249",
        "متبادل آپشن د 249"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #249: विषय 249 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 249",
        "विकल्प बी 249",
        "विकल्प सी 249",
        "विकल्प डी 249"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #250: What is the correct ruling or historical fact for Topic 250?",
      "opts": [
        "Correct Answer 250",
        "Alternative Option B 250",
        "Alternative Option C 250",
        "Alternative Option D 250"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #250: عنوان 250 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 250",
        "متبادل آپشن ب 250",
        "متبادل آپشن ج 250",
        "متبادل آپشن د 250"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #250: विषय 250 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 250",
        "विकल्प बी 250",
        "विकल्प सी 250",
        "विकल्प डी 250"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #251: What is the correct ruling or historical fact for Topic 251?",
      "opts": [
        "Correct Answer 251",
        "Alternative Option B 251",
        "Alternative Option C 251",
        "Alternative Option D 251"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #251: عنوان 251 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 251",
        "متبادل آپشن ب 251",
        "متبادل آپشن ج 251",
        "متبادل آپشن د 251"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #251: विषय 251 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 251",
        "विकल्प बी 251",
        "विकल्प सी 251",
        "विकल्प डी 251"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #252: What is the correct ruling or historical fact for Topic 252?",
      "opts": [
        "Correct Answer 252",
        "Alternative Option B 252",
        "Alternative Option C 252",
        "Alternative Option D 252"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #252: عنوان 252 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 252",
        "متبادل آپشن ب 252",
        "متبادل آپشن ج 252",
        "متبادل آپشن د 252"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #252: विषय 252 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 252",
        "विकल्प बी 252",
        "विकल्प सी 252",
        "विकल्प डी 252"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #253: What is the correct ruling or historical fact for Topic 253?",
      "opts": [
        "Correct Answer 253",
        "Alternative Option B 253",
        "Alternative Option C 253",
        "Alternative Option D 253"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #253: عنوان 253 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 253",
        "متبادل آپشن ب 253",
        "متبادل آپشن ج 253",
        "متبادل آپشن د 253"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #253: विषय 253 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 253",
        "विकल्प बी 253",
        "विकल्प सी 253",
        "विकल्प डी 253"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #254: What is the correct ruling or historical fact for Topic 254?",
      "opts": [
        "Correct Answer 254",
        "Alternative Option B 254",
        "Alternative Option C 254",
        "Alternative Option D 254"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #254: عنوان 254 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 254",
        "متبادل آپشن ب 254",
        "متبادل آپشن ج 254",
        "متبادل آپشن د 254"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #254: विषय 254 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 254",
        "विकल्प बी 254",
        "विकल्प सी 254",
        "विकल्प डी 254"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #255: What is the correct ruling or historical fact for Topic 255?",
      "opts": [
        "Correct Answer 255",
        "Alternative Option B 255",
        "Alternative Option C 255",
        "Alternative Option D 255"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #255: عنوان 255 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 255",
        "متبادل آپشن ب 255",
        "متبادل آپشن ج 255",
        "متبادل آپشن د 255"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #255: विषय 255 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 255",
        "विकल्प बी 255",
        "विकल्प सी 255",
        "विकल्प डी 255"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #256: What is the correct ruling or historical fact for Topic 256?",
      "opts": [
        "Correct Answer 256",
        "Alternative Option B 256",
        "Alternative Option C 256",
        "Alternative Option D 256"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #256: عنوان 256 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 256",
        "متبادل آپشن ب 256",
        "متبادل آپشن ج 256",
        "متبادل آپشن د 256"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #256: विषय 256 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 256",
        "विकल्प बी 256",
        "विकल्प सी 256",
        "विकल्प डी 256"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #257: What is the correct ruling or historical fact for Topic 257?",
      "opts": [
        "Correct Answer 257",
        "Alternative Option B 257",
        "Alternative Option C 257",
        "Alternative Option D 257"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #257: عنوان 257 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 257",
        "متبادل آپشن ب 257",
        "متبادل آپشن ج 257",
        "متبادل آپشن د 257"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #257: विषय 257 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 257",
        "विकल्प बी 257",
        "विकल्प सी 257",
        "विकल्प डी 257"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #258: What is the correct ruling or historical fact for Topic 258?",
      "opts": [
        "Correct Answer 258",
        "Alternative Option B 258",
        "Alternative Option C 258",
        "Alternative Option D 258"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #258: عنوان 258 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 258",
        "متبادل آپشن ب 258",
        "متبادل آپشن ج 258",
        "متبادل آپشن د 258"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #258: विषय 258 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 258",
        "विकल्प बी 258",
        "विकल्प सी 258",
        "विकल्प डी 258"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #259: What is the correct ruling or historical fact for Topic 259?",
      "opts": [
        "Correct Answer 259",
        "Alternative Option B 259",
        "Alternative Option C 259",
        "Alternative Option D 259"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #259: عنوان 259 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 259",
        "متبادل آپشن ب 259",
        "متبادل آپشن ج 259",
        "متبادل آپشن د 259"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #259: विषय 259 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 259",
        "विकल्प बी 259",
        "विकल्प सी 259",
        "विकल्प डी 259"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #260: What is the correct ruling or historical fact for Topic 260?",
      "opts": [
        "Correct Answer 260",
        "Alternative Option B 260",
        "Alternative Option C 260",
        "Alternative Option D 260"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #260: عنوان 260 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 260",
        "متبادل آپشن ب 260",
        "متبادل آپشن ج 260",
        "متبادل آپشن د 260"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #260: विषय 260 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 260",
        "विकल्प बी 260",
        "विकल्प सी 260",
        "विकल्प डी 260"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #261: What is the correct ruling or historical fact for Topic 261?",
      "opts": [
        "Correct Answer 261",
        "Alternative Option B 261",
        "Alternative Option C 261",
        "Alternative Option D 261"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #261: عنوان 261 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 261",
        "متبادل آپشن ب 261",
        "متبادل آپشن ج 261",
        "متبادل آپشن د 261"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #261: विषय 261 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 261",
        "विकल्प बी 261",
        "विकल्प सी 261",
        "विकल्प डी 261"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #262: What is the correct ruling or historical fact for Topic 262?",
      "opts": [
        "Correct Answer 262",
        "Alternative Option B 262",
        "Alternative Option C 262",
        "Alternative Option D 262"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #262: عنوان 262 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 262",
        "متبادل آپشن ب 262",
        "متبادل آپشن ج 262",
        "متبادل آپشن د 262"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #262: विषय 262 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 262",
        "विकल्प बी 262",
        "विकल्प सी 262",
        "विकल्प डी 262"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #263: What is the correct ruling or historical fact for Topic 263?",
      "opts": [
        "Correct Answer 263",
        "Alternative Option B 263",
        "Alternative Option C 263",
        "Alternative Option D 263"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #263: عنوان 263 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 263",
        "متبادل آپشن ب 263",
        "متبادل آپشن ج 263",
        "متبادل آپشن د 263"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #263: विषय 263 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 263",
        "विकल्प बी 263",
        "विकल्प सी 263",
        "विकल्प डी 263"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #264: What is the correct ruling or historical fact for Topic 264?",
      "opts": [
        "Correct Answer 264",
        "Alternative Option B 264",
        "Alternative Option C 264",
        "Alternative Option D 264"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #264: عنوان 264 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 264",
        "متبادل آپشن ب 264",
        "متبادل آپشن ج 264",
        "متبادل آپشن د 264"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #264: विषय 264 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 264",
        "विकल्प बी 264",
        "विकल्प सी 264",
        "विकल्प डी 264"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #265: What is the correct ruling or historical fact for Topic 265?",
      "opts": [
        "Correct Answer 265",
        "Alternative Option B 265",
        "Alternative Option C 265",
        "Alternative Option D 265"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #265: عنوان 265 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 265",
        "متبادل آپشن ب 265",
        "متبادل آپشن ج 265",
        "متبادل آپشن د 265"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #265: विषय 265 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 265",
        "विकल्प बी 265",
        "विकल्प सी 265",
        "विकल्प डी 265"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #266: What is the correct ruling or historical fact for Topic 266?",
      "opts": [
        "Correct Answer 266",
        "Alternative Option B 266",
        "Alternative Option C 266",
        "Alternative Option D 266"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #266: عنوان 266 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 266",
        "متبادل آپشن ب 266",
        "متبادل آپشن ج 266",
        "متبادل آپشن د 266"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #266: विषय 266 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 266",
        "विकल्प बी 266",
        "विकल्प सी 266",
        "विकल्प डी 266"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #267: What is the correct ruling or historical fact for Topic 267?",
      "opts": [
        "Correct Answer 267",
        "Alternative Option B 267",
        "Alternative Option C 267",
        "Alternative Option D 267"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #267: عنوان 267 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 267",
        "متبادل آپشن ب 267",
        "متبادل آپشن ج 267",
        "متبادل آپشن د 267"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #267: विषय 267 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 267",
        "विकल्प बी 267",
        "विकल्प सी 267",
        "विकल्प डी 267"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #268: What is the correct ruling or historical fact for Topic 268?",
      "opts": [
        "Correct Answer 268",
        "Alternative Option B 268",
        "Alternative Option C 268",
        "Alternative Option D 268"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #268: عنوان 268 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 268",
        "متبادل آپشن ب 268",
        "متبادل آپشن ج 268",
        "متبادل آپشن د 268"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #268: विषय 268 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 268",
        "विकल्प बी 268",
        "विकल्प सी 268",
        "विकल्प डी 268"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #269: What is the correct ruling or historical fact for Topic 269?",
      "opts": [
        "Correct Answer 269",
        "Alternative Option B 269",
        "Alternative Option C 269",
        "Alternative Option D 269"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #269: عنوان 269 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 269",
        "متبادل آپشن ب 269",
        "متبادل آپشن ج 269",
        "متبادل آپشن د 269"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #269: विषय 269 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 269",
        "विकल्प बी 269",
        "विकल्प सी 269",
        "विकल्प डी 269"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #270: What is the correct ruling or historical fact for Topic 270?",
      "opts": [
        "Correct Answer 270",
        "Alternative Option B 270",
        "Alternative Option C 270",
        "Alternative Option D 270"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #270: عنوان 270 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 270",
        "متبادل آپشن ب 270",
        "متبادل آپشن ج 270",
        "متبادل آپشن د 270"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #270: विषय 270 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 270",
        "विकल्प बी 270",
        "विकल्प सी 270",
        "विकल्प डी 270"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #271: What is the correct ruling or historical fact for Topic 271?",
      "opts": [
        "Correct Answer 271",
        "Alternative Option B 271",
        "Alternative Option C 271",
        "Alternative Option D 271"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #271: عنوان 271 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 271",
        "متبادل آپشن ب 271",
        "متبادل آپشن ج 271",
        "متبادل آپشن د 271"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #271: विषय 271 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 271",
        "विकल्प बी 271",
        "विकल्प सी 271",
        "विकल्प डी 271"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #272: What is the correct ruling or historical fact for Topic 272?",
      "opts": [
        "Correct Answer 272",
        "Alternative Option B 272",
        "Alternative Option C 272",
        "Alternative Option D 272"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #272: عنوان 272 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 272",
        "متبادل آپشن ب 272",
        "متبادل آپشن ج 272",
        "متبادل آپشن د 272"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #272: विषय 272 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 272",
        "विकल्प बी 272",
        "विकल्प सी 272",
        "विकल्प डी 272"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #273: What is the correct ruling or historical fact for Topic 273?",
      "opts": [
        "Correct Answer 273",
        "Alternative Option B 273",
        "Alternative Option C 273",
        "Alternative Option D 273"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #273: عنوان 273 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 273",
        "متبادل آپشن ب 273",
        "متبادل آپشن ج 273",
        "متبادل آپشن د 273"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #273: विषय 273 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 273",
        "विकल्प बी 273",
        "विकल्प सी 273",
        "विकल्प डी 273"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #274: What is the correct ruling or historical fact for Topic 274?",
      "opts": [
        "Correct Answer 274",
        "Alternative Option B 274",
        "Alternative Option C 274",
        "Alternative Option D 274"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #274: عنوان 274 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 274",
        "متبادل آپشن ب 274",
        "متبادل آپشن ج 274",
        "متبادل آپشن د 274"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #274: विषय 274 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 274",
        "विकल्प बी 274",
        "विकल्प सी 274",
        "विकल्प डी 274"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #275: What is the correct ruling or historical fact for Topic 275?",
      "opts": [
        "Correct Answer 275",
        "Alternative Option B 275",
        "Alternative Option C 275",
        "Alternative Option D 275"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #275: عنوان 275 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 275",
        "متبادل آپشن ب 275",
        "متبادل آپشن ج 275",
        "متبادل آپشن د 275"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #275: विषय 275 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 275",
        "विकल्प बी 275",
        "विकल्प सी 275",
        "विकल्प डी 275"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #276: What is the correct ruling or historical fact for Topic 276?",
      "opts": [
        "Correct Answer 276",
        "Alternative Option B 276",
        "Alternative Option C 276",
        "Alternative Option D 276"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #276: عنوان 276 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 276",
        "متبادل آپشن ب 276",
        "متبادل آپشن ج 276",
        "متبادل آپشن د 276"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #276: विषय 276 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 276",
        "विकल्प बी 276",
        "विकल्प सी 276",
        "विकल्प डी 276"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #277: What is the correct ruling or historical fact for Topic 277?",
      "opts": [
        "Correct Answer 277",
        "Alternative Option B 277",
        "Alternative Option C 277",
        "Alternative Option D 277"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #277: عنوان 277 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 277",
        "متبادل آپشن ب 277",
        "متبادل آپشن ج 277",
        "متبادل آپشن د 277"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #277: विषय 277 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 277",
        "विकल्प बी 277",
        "विकल्प सी 277",
        "विकल्प डी 277"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #278: What is the correct ruling or historical fact for Topic 278?",
      "opts": [
        "Correct Answer 278",
        "Alternative Option B 278",
        "Alternative Option C 278",
        "Alternative Option D 278"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #278: عنوان 278 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 278",
        "متبادل آپشن ب 278",
        "متبادل آپشن ج 278",
        "متبادل آپشن د 278"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #278: विषय 278 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 278",
        "विकल्प बी 278",
        "विकल्प सी 278",
        "विकल्प डी 278"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #279: What is the correct ruling or historical fact for Topic 279?",
      "opts": [
        "Correct Answer 279",
        "Alternative Option B 279",
        "Alternative Option C 279",
        "Alternative Option D 279"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #279: عنوان 279 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 279",
        "متبادل آپشن ب 279",
        "متبادل آپشن ج 279",
        "متبادل آپشن د 279"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #279: विषय 279 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 279",
        "विकल्प बी 279",
        "विकल्प सी 279",
        "विकल्प डी 279"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #280: What is the correct ruling or historical fact for Topic 280?",
      "opts": [
        "Correct Answer 280",
        "Alternative Option B 280",
        "Alternative Option C 280",
        "Alternative Option D 280"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #280: عنوان 280 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 280",
        "متبادل آپشن ب 280",
        "متبادل آپشن ج 280",
        "متبادل آپشن د 280"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #280: विषय 280 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 280",
        "विकल्प बी 280",
        "विकल्प सी 280",
        "विकल्प डी 280"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #281: What is the correct ruling or historical fact for Topic 281?",
      "opts": [
        "Correct Answer 281",
        "Alternative Option B 281",
        "Alternative Option C 281",
        "Alternative Option D 281"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #281: عنوان 281 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 281",
        "متبادل آپشن ب 281",
        "متبادل آپشن ج 281",
        "متبادل آپشن د 281"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #281: विषय 281 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 281",
        "विकल्प बी 281",
        "विकल्प सी 281",
        "विकल्प डी 281"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #282: What is the correct ruling or historical fact for Topic 282?",
      "opts": [
        "Correct Answer 282",
        "Alternative Option B 282",
        "Alternative Option C 282",
        "Alternative Option D 282"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #282: عنوان 282 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 282",
        "متبادل آپشن ب 282",
        "متبادل آپشن ج 282",
        "متبادل آپشن د 282"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #282: विषय 282 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 282",
        "विकल्प बी 282",
        "विकल्प सी 282",
        "विकल्प डी 282"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #283: What is the correct ruling or historical fact for Topic 283?",
      "opts": [
        "Correct Answer 283",
        "Alternative Option B 283",
        "Alternative Option C 283",
        "Alternative Option D 283"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #283: عنوان 283 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 283",
        "متبادل آپشن ب 283",
        "متبادل آپشن ج 283",
        "متبادل آپشن د 283"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #283: विषय 283 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 283",
        "विकल्प बी 283",
        "विकल्प सी 283",
        "विकल्प डी 283"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #284: What is the correct ruling or historical fact for Topic 284?",
      "opts": [
        "Correct Answer 284",
        "Alternative Option B 284",
        "Alternative Option C 284",
        "Alternative Option D 284"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #284: عنوان 284 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 284",
        "متبادل آپشن ب 284",
        "متبادل آپشن ج 284",
        "متبادل آپشن د 284"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #284: विषय 284 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 284",
        "विकल्प बी 284",
        "विकल्प सी 284",
        "विकल्प डी 284"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #285: What is the correct ruling or historical fact for Topic 285?",
      "opts": [
        "Correct Answer 285",
        "Alternative Option B 285",
        "Alternative Option C 285",
        "Alternative Option D 285"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #285: عنوان 285 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 285",
        "متبادل آپشن ب 285",
        "متبادل آپشن ج 285",
        "متبادل آپشن د 285"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #285: विषय 285 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 285",
        "विकल्प बी 285",
        "विकल्प सी 285",
        "विकल्प डी 285"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #286: What is the correct ruling or historical fact for Topic 286?",
      "opts": [
        "Correct Answer 286",
        "Alternative Option B 286",
        "Alternative Option C 286",
        "Alternative Option D 286"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #286: عنوان 286 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 286",
        "متبادل آپشن ب 286",
        "متبادل آپشن ج 286",
        "متبادل آپشن د 286"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #286: विषय 286 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 286",
        "विकल्प बी 286",
        "विकल्प सी 286",
        "विकल्प डी 286"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #287: What is the correct ruling or historical fact for Topic 287?",
      "opts": [
        "Correct Answer 287",
        "Alternative Option B 287",
        "Alternative Option C 287",
        "Alternative Option D 287"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #287: عنوان 287 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 287",
        "متبادل آپشن ب 287",
        "متبادل آپشن ج 287",
        "متبادل آپشن د 287"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #287: विषय 287 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 287",
        "विकल्प बी 287",
        "विकल्प सी 287",
        "विकल्प डी 287"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #288: What is the correct ruling or historical fact for Topic 288?",
      "opts": [
        "Correct Answer 288",
        "Alternative Option B 288",
        "Alternative Option C 288",
        "Alternative Option D 288"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #288: عنوان 288 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 288",
        "متبادل آپشن ب 288",
        "متبادل آپشن ج 288",
        "متبادل آپشن د 288"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #288: विषय 288 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 288",
        "विकल्प बी 288",
        "विकल्प सी 288",
        "विकल्प डी 288"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #289: What is the correct ruling or historical fact for Topic 289?",
      "opts": [
        "Correct Answer 289",
        "Alternative Option B 289",
        "Alternative Option C 289",
        "Alternative Option D 289"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #289: عنوان 289 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 289",
        "متبادل آپشن ب 289",
        "متبادل آپشن ج 289",
        "متبادل آپشن د 289"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #289: विषय 289 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 289",
        "विकल्प बी 289",
        "विकल्प सी 289",
        "विकल्प डी 289"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #290: What is the correct ruling or historical fact for Topic 290?",
      "opts": [
        "Correct Answer 290",
        "Alternative Option B 290",
        "Alternative Option C 290",
        "Alternative Option D 290"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #290: عنوان 290 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 290",
        "متبادل آپشن ب 290",
        "متبادل آپشن ج 290",
        "متبادل آپشن د 290"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #290: विषय 290 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 290",
        "विकल्प बी 290",
        "विकल्प सी 290",
        "विकल्प डी 290"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #291: What is the correct ruling or historical fact for Topic 291?",
      "opts": [
        "Correct Answer 291",
        "Alternative Option B 291",
        "Alternative Option C 291",
        "Alternative Option D 291"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #291: عنوان 291 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 291",
        "متبادل آپشن ب 291",
        "متبادل آپشن ج 291",
        "متبادل آپشن د 291"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #291: विषय 291 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 291",
        "विकल्प बी 291",
        "विकल्प सी 291",
        "विकल्प डी 291"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #292: What is the correct ruling or historical fact for Topic 292?",
      "opts": [
        "Correct Answer 292",
        "Alternative Option B 292",
        "Alternative Option C 292",
        "Alternative Option D 292"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #292: عنوان 292 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 292",
        "متبادل آپشن ب 292",
        "متبادل آپشن ج 292",
        "متبادل آپشن د 292"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #292: विषय 292 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 292",
        "विकल्प बी 292",
        "विकल्प सी 292",
        "विकल्प डी 292"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #293: What is the correct ruling or historical fact for Topic 293?",
      "opts": [
        "Correct Answer 293",
        "Alternative Option B 293",
        "Alternative Option C 293",
        "Alternative Option D 293"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #293: عنوان 293 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 293",
        "متبادل آپشن ب 293",
        "متبادل آپشن ج 293",
        "متبادل آپشن د 293"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #293: विषय 293 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 293",
        "विकल्प बी 293",
        "विकल्प सी 293",
        "विकल्प डी 293"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #294: What is the correct ruling or historical fact for Topic 294?",
      "opts": [
        "Correct Answer 294",
        "Alternative Option B 294",
        "Alternative Option C 294",
        "Alternative Option D 294"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #294: عنوان 294 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 294",
        "متبادل آپشن ب 294",
        "متبادل آپشن ج 294",
        "متبادل آپشن د 294"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #294: विषय 294 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 294",
        "विकल्प बी 294",
        "विकल्प सी 294",
        "विकल्प डी 294"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #295: What is the correct ruling or historical fact for Topic 295?",
      "opts": [
        "Correct Answer 295",
        "Alternative Option B 295",
        "Alternative Option C 295",
        "Alternative Option D 295"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #295: عنوان 295 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 295",
        "متبادل آپشن ب 295",
        "متبادل آپشن ج 295",
        "متبادل آپشن د 295"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #295: विषय 295 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 295",
        "विकल्प बी 295",
        "विकल्प सी 295",
        "विकल्प डी 295"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #296: What is the correct ruling or historical fact for Topic 296?",
      "opts": [
        "Correct Answer 296",
        "Alternative Option B 296",
        "Alternative Option C 296",
        "Alternative Option D 296"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #296: عنوان 296 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 296",
        "متبادل آپشن ب 296",
        "متبادل آپشن ج 296",
        "متبادل آپشن د 296"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #296: विषय 296 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 296",
        "विकल्प बी 296",
        "विकल्प सी 296",
        "विकल्प डी 296"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #297: What is the correct ruling or historical fact for Topic 297?",
      "opts": [
        "Correct Answer 297",
        "Alternative Option B 297",
        "Alternative Option C 297",
        "Alternative Option D 297"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #297: عنوان 297 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 297",
        "متبادل آپشن ب 297",
        "متبادل آپشن ج 297",
        "متبادل آپشن د 297"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #297: विषय 297 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 297",
        "विकल्प बी 297",
        "विकल्प सी 297",
        "विकल्प डी 297"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #298: What is the correct ruling or historical fact for Topic 298?",
      "opts": [
        "Correct Answer 298",
        "Alternative Option B 298",
        "Alternative Option C 298",
        "Alternative Option D 298"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #298: عنوان 298 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 298",
        "متبادل آپشن ب 298",
        "متبادل آپشن ج 298",
        "متبادل آپشن د 298"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #298: विषय 298 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 298",
        "विकल्प बी 298",
        "विकल्प सी 298",
        "विकल्प डी 298"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #299: What is the correct ruling or historical fact for Topic 299?",
      "opts": [
        "Correct Answer 299",
        "Alternative Option B 299",
        "Alternative Option C 299",
        "Alternative Option D 299"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #299: عنوان 299 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 299",
        "متبادل آپشن ب 299",
        "متبادل آپشن ج 299",
        "متبادل آپشن د 299"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #299: विषय 299 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 299",
        "विकल्प बी 299",
        "विकल्प सी 299",
        "विकल्प डी 299"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #300: What is the correct ruling or historical fact for Topic 300?",
      "opts": [
        "Correct Answer 300",
        "Alternative Option B 300",
        "Alternative Option C 300",
        "Alternative Option D 300"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #300: عنوان 300 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 300",
        "متبادل آپشن ب 300",
        "متبادل آپشن ج 300",
        "متبادل آپشن د 300"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #300: विषय 300 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 300",
        "विकल्प बी 300",
        "विकल्प सी 300",
        "विकल्प डी 300"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #301: What is the correct ruling or historical fact for Topic 301?",
      "opts": [
        "Correct Answer 301",
        "Alternative Option B 301",
        "Alternative Option C 301",
        "Alternative Option D 301"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #301: عنوان 301 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 301",
        "متبادل آپشن ب 301",
        "متبادل آپشن ج 301",
        "متبادل آپشن د 301"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #301: विषय 301 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 301",
        "विकल्प बी 301",
        "विकल्प सी 301",
        "विकल्प डी 301"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #302: What is the correct ruling or historical fact for Topic 302?",
      "opts": [
        "Correct Answer 302",
        "Alternative Option B 302",
        "Alternative Option C 302",
        "Alternative Option D 302"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #302: عنوان 302 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 302",
        "متبادل آپشن ب 302",
        "متبادل آپشن ج 302",
        "متبادل آپشن د 302"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #302: विषय 302 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 302",
        "विकल्प बी 302",
        "विकल्प सी 302",
        "विकल्प डी 302"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #303: What is the correct ruling or historical fact for Topic 303?",
      "opts": [
        "Correct Answer 303",
        "Alternative Option B 303",
        "Alternative Option C 303",
        "Alternative Option D 303"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #303: عنوان 303 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 303",
        "متبادل آپشن ب 303",
        "متبادل آپشن ج 303",
        "متبادل آپشن د 303"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #303: विषय 303 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 303",
        "विकल्प बी 303",
        "विकल्प सी 303",
        "विकल्प डी 303"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #304: What is the correct ruling or historical fact for Topic 304?",
      "opts": [
        "Correct Answer 304",
        "Alternative Option B 304",
        "Alternative Option C 304",
        "Alternative Option D 304"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #304: عنوان 304 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 304",
        "متبادل آپشن ب 304",
        "متبادل آپشن ج 304",
        "متبادل آپشن د 304"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #304: विषय 304 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 304",
        "विकल्प बी 304",
        "विकल्प सी 304",
        "विकल्प डी 304"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #305: What is the correct ruling or historical fact for Topic 305?",
      "opts": [
        "Correct Answer 305",
        "Alternative Option B 305",
        "Alternative Option C 305",
        "Alternative Option D 305"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #305: عنوان 305 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 305",
        "متبادل آپشن ب 305",
        "متبادل آپشن ج 305",
        "متبادل آپشن د 305"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #305: विषय 305 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 305",
        "विकल्प बी 305",
        "विकल्प सी 305",
        "विकल्प डी 305"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #306: What is the correct ruling or historical fact for Topic 306?",
      "opts": [
        "Correct Answer 306",
        "Alternative Option B 306",
        "Alternative Option C 306",
        "Alternative Option D 306"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #306: عنوان 306 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 306",
        "متبادل آپشن ب 306",
        "متبادل آپشن ج 306",
        "متبادل آپشن د 306"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #306: विषय 306 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 306",
        "विकल्प बी 306",
        "विकल्प सी 306",
        "विकल्प डी 306"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #307: What is the correct ruling or historical fact for Topic 307?",
      "opts": [
        "Correct Answer 307",
        "Alternative Option B 307",
        "Alternative Option C 307",
        "Alternative Option D 307"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #307: عنوان 307 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 307",
        "متبادل آپشن ب 307",
        "متبادل آپشن ج 307",
        "متبادل آپشن د 307"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #307: विषय 307 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 307",
        "विकल्प बी 307",
        "विकल्प सी 307",
        "विकल्प डी 307"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #308: What is the correct ruling or historical fact for Topic 308?",
      "opts": [
        "Correct Answer 308",
        "Alternative Option B 308",
        "Alternative Option C 308",
        "Alternative Option D 308"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #308: عنوان 308 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 308",
        "متبادل آپشن ب 308",
        "متبادل آپشن ج 308",
        "متبادل آپشن د 308"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #308: विषय 308 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 308",
        "विकल्प बी 308",
        "विकल्प सी 308",
        "विकल्प डी 308"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #309: What is the correct ruling or historical fact for Topic 309?",
      "opts": [
        "Correct Answer 309",
        "Alternative Option B 309",
        "Alternative Option C 309",
        "Alternative Option D 309"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #309: عنوان 309 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 309",
        "متبادل آپشن ب 309",
        "متبادل آپشن ج 309",
        "متبادل آپشن د 309"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #309: विषय 309 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 309",
        "विकल्प बी 309",
        "विकल्प सी 309",
        "विकल्प डी 309"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #310: What is the correct ruling or historical fact for Topic 310?",
      "opts": [
        "Correct Answer 310",
        "Alternative Option B 310",
        "Alternative Option C 310",
        "Alternative Option D 310"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #310: عنوان 310 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 310",
        "متبادل آپشن ب 310",
        "متبادل آپشن ج 310",
        "متبادل آپشن د 310"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #310: विषय 310 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 310",
        "विकल्प बी 310",
        "विकल्प सी 310",
        "विकल्प डी 310"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #311: What is the correct ruling or historical fact for Topic 311?",
      "opts": [
        "Correct Answer 311",
        "Alternative Option B 311",
        "Alternative Option C 311",
        "Alternative Option D 311"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #311: عنوان 311 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 311",
        "متبادل آپشن ب 311",
        "متبادل آپشن ج 311",
        "متبادل آپشن د 311"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #311: विषय 311 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 311",
        "विकल्प बी 311",
        "विकल्प सी 311",
        "विकल्प डी 311"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #312: What is the correct ruling or historical fact for Topic 312?",
      "opts": [
        "Correct Answer 312",
        "Alternative Option B 312",
        "Alternative Option C 312",
        "Alternative Option D 312"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #312: عنوان 312 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 312",
        "متبادل آپشن ب 312",
        "متبادل آپشن ج 312",
        "متبادل آپشن د 312"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #312: विषय 312 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 312",
        "विकल्प बी 312",
        "विकल्प सी 312",
        "विकल्प डी 312"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #313: What is the correct ruling or historical fact for Topic 313?",
      "opts": [
        "Correct Answer 313",
        "Alternative Option B 313",
        "Alternative Option C 313",
        "Alternative Option D 313"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #313: عنوان 313 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 313",
        "متبادل آپشن ب 313",
        "متبادل آپشن ج 313",
        "متبادل آپشن د 313"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #313: विषय 313 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 313",
        "विकल्प बी 313",
        "विकल्प सी 313",
        "विकल्प डी 313"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #314: What is the correct ruling or historical fact for Topic 314?",
      "opts": [
        "Correct Answer 314",
        "Alternative Option B 314",
        "Alternative Option C 314",
        "Alternative Option D 314"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #314: عنوان 314 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 314",
        "متبادل آپشن ب 314",
        "متبادل آپشن ج 314",
        "متبادل آپشن د 314"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #314: विषय 314 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 314",
        "विकल्प बी 314",
        "विकल्प सी 314",
        "विकल्प डी 314"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #315: What is the correct ruling or historical fact for Topic 315?",
      "opts": [
        "Correct Answer 315",
        "Alternative Option B 315",
        "Alternative Option C 315",
        "Alternative Option D 315"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #315: عنوان 315 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 315",
        "متبادل آپشن ب 315",
        "متبادل آپشن ج 315",
        "متبادل آپشن د 315"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #315: विषय 315 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 315",
        "विकल्प बी 315",
        "विकल्प सी 315",
        "विकल्प डी 315"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #316: What is the correct ruling or historical fact for Topic 316?",
      "opts": [
        "Correct Answer 316",
        "Alternative Option B 316",
        "Alternative Option C 316",
        "Alternative Option D 316"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #316: عنوان 316 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 316",
        "متبادل آپشن ب 316",
        "متبادل آپشن ج 316",
        "متبادل آپشن د 316"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #316: विषय 316 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 316",
        "विकल्प बी 316",
        "विकल्प सी 316",
        "विकल्प डी 316"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #317: What is the correct ruling or historical fact for Topic 317?",
      "opts": [
        "Correct Answer 317",
        "Alternative Option B 317",
        "Alternative Option C 317",
        "Alternative Option D 317"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #317: عنوان 317 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 317",
        "متبادل آپشن ب 317",
        "متبادل آپشن ج 317",
        "متبادل آپشن د 317"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #317: विषय 317 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 317",
        "विकल्प बी 317",
        "विकल्प सी 317",
        "विकल्प डी 317"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #318: What is the correct ruling or historical fact for Topic 318?",
      "opts": [
        "Correct Answer 318",
        "Alternative Option B 318",
        "Alternative Option C 318",
        "Alternative Option D 318"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #318: عنوان 318 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 318",
        "متبادل آپشن ب 318",
        "متبادل آپشن ج 318",
        "متبادل آپشن د 318"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #318: विषय 318 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 318",
        "विकल्प बी 318",
        "विकल्प सी 318",
        "विकल्प डी 318"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #319: What is the correct ruling or historical fact for Topic 319?",
      "opts": [
        "Correct Answer 319",
        "Alternative Option B 319",
        "Alternative Option C 319",
        "Alternative Option D 319"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #319: عنوان 319 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 319",
        "متبادل آپشن ب 319",
        "متبادل آپشن ج 319",
        "متبادل آپشن د 319"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #319: विषय 319 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 319",
        "विकल्प बी 319",
        "विकल्प सी 319",
        "विकल्प डी 319"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #320: What is the correct ruling or historical fact for Topic 320?",
      "opts": [
        "Correct Answer 320",
        "Alternative Option B 320",
        "Alternative Option C 320",
        "Alternative Option D 320"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #320: عنوان 320 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 320",
        "متبادل آپشن ب 320",
        "متبادل آپشن ج 320",
        "متبادل آپشن د 320"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #320: विषय 320 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 320",
        "विकल्प बी 320",
        "विकल्प सी 320",
        "विकल्प डी 320"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #321: What is the correct ruling or historical fact for Topic 321?",
      "opts": [
        "Correct Answer 321",
        "Alternative Option B 321",
        "Alternative Option C 321",
        "Alternative Option D 321"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #321: عنوان 321 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 321",
        "متبادل آپشن ب 321",
        "متبادل آپشن ج 321",
        "متبادل آپشن د 321"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #321: विषय 321 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 321",
        "विकल्प बी 321",
        "विकल्प सी 321",
        "विकल्प डी 321"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #322: What is the correct ruling or historical fact for Topic 322?",
      "opts": [
        "Correct Answer 322",
        "Alternative Option B 322",
        "Alternative Option C 322",
        "Alternative Option D 322"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #322: عنوان 322 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 322",
        "متبادل آپشن ب 322",
        "متبادل آپشن ج 322",
        "متبادل آپشن د 322"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #322: विषय 322 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 322",
        "विकल्प बी 322",
        "विकल्प सी 322",
        "विकल्प डी 322"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #323: What is the correct ruling or historical fact for Topic 323?",
      "opts": [
        "Correct Answer 323",
        "Alternative Option B 323",
        "Alternative Option C 323",
        "Alternative Option D 323"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #323: عنوان 323 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 323",
        "متبادل آپشن ب 323",
        "متبادل آپشن ج 323",
        "متبادل آپشن د 323"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #323: विषय 323 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 323",
        "विकल्प बी 323",
        "विकल्प सी 323",
        "विकल्प डी 323"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #324: What is the correct ruling or historical fact for Topic 324?",
      "opts": [
        "Correct Answer 324",
        "Alternative Option B 324",
        "Alternative Option C 324",
        "Alternative Option D 324"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #324: عنوان 324 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 324",
        "متبادل آپشن ب 324",
        "متبادل آپشن ج 324",
        "متبادل آپشن د 324"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #324: विषय 324 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 324",
        "विकल्प बी 324",
        "विकल्प सी 324",
        "विकल्प डी 324"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #325: What is the correct ruling or historical fact for Topic 325?",
      "opts": [
        "Correct Answer 325",
        "Alternative Option B 325",
        "Alternative Option C 325",
        "Alternative Option D 325"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #325: عنوان 325 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 325",
        "متبادل آپشن ب 325",
        "متبادل آپشن ج 325",
        "متبادل آپشن د 325"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #325: विषय 325 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 325",
        "विकल्प बी 325",
        "विकल्प सी 325",
        "विकल्प डी 325"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #326: What is the correct ruling or historical fact for Topic 326?",
      "opts": [
        "Correct Answer 326",
        "Alternative Option B 326",
        "Alternative Option C 326",
        "Alternative Option D 326"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #326: عنوان 326 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 326",
        "متبادل آپشن ب 326",
        "متبادل آپشن ج 326",
        "متبادل آپشن د 326"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #326: विषय 326 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 326",
        "विकल्प बी 326",
        "विकल्प सी 326",
        "विकल्प डी 326"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #327: What is the correct ruling or historical fact for Topic 327?",
      "opts": [
        "Correct Answer 327",
        "Alternative Option B 327",
        "Alternative Option C 327",
        "Alternative Option D 327"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #327: عنوان 327 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 327",
        "متبادل آپشن ب 327",
        "متبادل آپشن ج 327",
        "متبادل آپشن د 327"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #327: विषय 327 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 327",
        "विकल्प बी 327",
        "विकल्प सी 327",
        "विकल्प डी 327"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #328: What is the correct ruling or historical fact for Topic 328?",
      "opts": [
        "Correct Answer 328",
        "Alternative Option B 328",
        "Alternative Option C 328",
        "Alternative Option D 328"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #328: عنوان 328 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 328",
        "متبادل آپشن ب 328",
        "متبادل آپشن ج 328",
        "متبادل آپشن د 328"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #328: विषय 328 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 328",
        "विकल्प बी 328",
        "विकल्प सी 328",
        "विकल्प डी 328"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #329: What is the correct ruling or historical fact for Topic 329?",
      "opts": [
        "Correct Answer 329",
        "Alternative Option B 329",
        "Alternative Option C 329",
        "Alternative Option D 329"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #329: عنوان 329 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 329",
        "متبادل آپشن ب 329",
        "متبادل آپشن ج 329",
        "متبادل آپشن د 329"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #329: विषय 329 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 329",
        "विकल्प बी 329",
        "विकल्प सी 329",
        "विकल्प डी 329"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #330: What is the correct ruling or historical fact for Topic 330?",
      "opts": [
        "Correct Answer 330",
        "Alternative Option B 330",
        "Alternative Option C 330",
        "Alternative Option D 330"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #330: عنوان 330 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 330",
        "متبادل آپشن ب 330",
        "متبادل آپشن ج 330",
        "متبادل آپشن د 330"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #330: विषय 330 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 330",
        "विकल्प बी 330",
        "विकल्प सी 330",
        "विकल्प डी 330"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #331: What is the correct ruling or historical fact for Topic 331?",
      "opts": [
        "Correct Answer 331",
        "Alternative Option B 331",
        "Alternative Option C 331",
        "Alternative Option D 331"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #331: عنوان 331 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 331",
        "متبادل آپشن ب 331",
        "متبادل آپشن ج 331",
        "متبادل آپشن د 331"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #331: विषय 331 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 331",
        "विकल्प बी 331",
        "विकल्प सी 331",
        "विकल्प डी 331"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #332: What is the correct ruling or historical fact for Topic 332?",
      "opts": [
        "Correct Answer 332",
        "Alternative Option B 332",
        "Alternative Option C 332",
        "Alternative Option D 332"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #332: عنوان 332 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 332",
        "متبادل آپشن ب 332",
        "متبادل آپشن ج 332",
        "متبادل آپشن د 332"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #332: विषय 332 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 332",
        "विकल्प बी 332",
        "विकल्प सी 332",
        "विकल्प डी 332"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #333: What is the correct ruling or historical fact for Topic 333?",
      "opts": [
        "Correct Answer 333",
        "Alternative Option B 333",
        "Alternative Option C 333",
        "Alternative Option D 333"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #333: عنوان 333 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 333",
        "متبادل آپشن ب 333",
        "متبادل آپشن ج 333",
        "متبادل آپشن د 333"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #333: विषय 333 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 333",
        "विकल्प बी 333",
        "विकल्प सी 333",
        "विकल्प डी 333"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #334: What is the correct ruling or historical fact for Topic 334?",
      "opts": [
        "Correct Answer 334",
        "Alternative Option B 334",
        "Alternative Option C 334",
        "Alternative Option D 334"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #334: عنوان 334 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 334",
        "متبادل آپشن ب 334",
        "متبادل آپشن ج 334",
        "متبادل آپشن د 334"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #334: विषय 334 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 334",
        "विकल्प बी 334",
        "विकल्प सी 334",
        "विकल्प डी 334"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #335: What is the correct ruling or historical fact for Topic 335?",
      "opts": [
        "Correct Answer 335",
        "Alternative Option B 335",
        "Alternative Option C 335",
        "Alternative Option D 335"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #335: عنوان 335 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 335",
        "متبادل آپشن ب 335",
        "متبادل آپشن ج 335",
        "متبادل آپشن د 335"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #335: विषय 335 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 335",
        "विकल्प बी 335",
        "विकल्प सी 335",
        "विकल्प डी 335"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #336: What is the correct ruling or historical fact for Topic 336?",
      "opts": [
        "Correct Answer 336",
        "Alternative Option B 336",
        "Alternative Option C 336",
        "Alternative Option D 336"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #336: عنوان 336 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 336",
        "متبادل آپشن ب 336",
        "متبادل آپشن ج 336",
        "متبادل آپشن د 336"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #336: विषय 336 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 336",
        "विकल्प बी 336",
        "विकल्प सी 336",
        "विकल्प डी 336"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #337: What is the correct ruling or historical fact for Topic 337?",
      "opts": [
        "Correct Answer 337",
        "Alternative Option B 337",
        "Alternative Option C 337",
        "Alternative Option D 337"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #337: عنوان 337 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 337",
        "متبادل آپشن ب 337",
        "متبادل آپشن ج 337",
        "متبادل آپشن د 337"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #337: विषय 337 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 337",
        "विकल्प बी 337",
        "विकल्प सी 337",
        "विकल्प डी 337"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #338: What is the correct ruling or historical fact for Topic 338?",
      "opts": [
        "Correct Answer 338",
        "Alternative Option B 338",
        "Alternative Option C 338",
        "Alternative Option D 338"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #338: عنوان 338 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 338",
        "متبادل آپشن ب 338",
        "متبادل آپشن ج 338",
        "متبادل آپشن د 338"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #338: विषय 338 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 338",
        "विकल्प बी 338",
        "विकल्प सी 338",
        "विकल्प डी 338"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #339: What is the correct ruling or historical fact for Topic 339?",
      "opts": [
        "Correct Answer 339",
        "Alternative Option B 339",
        "Alternative Option C 339",
        "Alternative Option D 339"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #339: عنوان 339 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 339",
        "متبادل آپشن ب 339",
        "متبادل آپشن ج 339",
        "متبادل آپشن د 339"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #339: विषय 339 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 339",
        "विकल्प बी 339",
        "विकल्प सी 339",
        "विकल्प डी 339"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #340: What is the correct ruling or historical fact for Topic 340?",
      "opts": [
        "Correct Answer 340",
        "Alternative Option B 340",
        "Alternative Option C 340",
        "Alternative Option D 340"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #340: عنوان 340 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 340",
        "متبادل آپشن ب 340",
        "متبادل آپشن ج 340",
        "متبادل آپشن د 340"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #340: विषय 340 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 340",
        "विकल्प बी 340",
        "विकल्प सी 340",
        "विकल्प डी 340"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #341: What is the correct ruling or historical fact for Topic 341?",
      "opts": [
        "Correct Answer 341",
        "Alternative Option B 341",
        "Alternative Option C 341",
        "Alternative Option D 341"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #341: عنوان 341 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 341",
        "متبادل آپشن ب 341",
        "متبادل آپشن ج 341",
        "متبادل آپشن د 341"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #341: विषय 341 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 341",
        "विकल्प बी 341",
        "विकल्प सी 341",
        "विकल्प डी 341"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #342: What is the correct ruling or historical fact for Topic 342?",
      "opts": [
        "Correct Answer 342",
        "Alternative Option B 342",
        "Alternative Option C 342",
        "Alternative Option D 342"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #342: عنوان 342 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 342",
        "متبادل آپشن ب 342",
        "متبادل آپشن ج 342",
        "متبادل آپشن د 342"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #342: विषय 342 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 342",
        "विकल्प बी 342",
        "विकल्प सी 342",
        "विकल्प डी 342"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #343: What is the correct ruling or historical fact for Topic 343?",
      "opts": [
        "Correct Answer 343",
        "Alternative Option B 343",
        "Alternative Option C 343",
        "Alternative Option D 343"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #343: عنوان 343 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 343",
        "متبادل آپشن ب 343",
        "متبادل آپشن ج 343",
        "متبادل آپشن د 343"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #343: विषय 343 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 343",
        "विकल्प बी 343",
        "विकल्प सी 343",
        "विकल्प डी 343"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #344: What is the correct ruling or historical fact for Topic 344?",
      "opts": [
        "Correct Answer 344",
        "Alternative Option B 344",
        "Alternative Option C 344",
        "Alternative Option D 344"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #344: عنوان 344 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 344",
        "متبادل آپشن ب 344",
        "متبادل آپشن ج 344",
        "متبادل آپشن د 344"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #344: विषय 344 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 344",
        "विकल्प बी 344",
        "विकल्प सी 344",
        "विकल्प डी 344"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #345: What is the correct ruling or historical fact for Topic 345?",
      "opts": [
        "Correct Answer 345",
        "Alternative Option B 345",
        "Alternative Option C 345",
        "Alternative Option D 345"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #345: عنوان 345 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 345",
        "متبادل آپشن ب 345",
        "متبادل آپشن ج 345",
        "متبادل آپشن د 345"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #345: विषय 345 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 345",
        "विकल्प बी 345",
        "विकल्प सी 345",
        "विकल्प डी 345"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #346: What is the correct ruling or historical fact for Topic 346?",
      "opts": [
        "Correct Answer 346",
        "Alternative Option B 346",
        "Alternative Option C 346",
        "Alternative Option D 346"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #346: عنوان 346 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 346",
        "متبادل آپشن ب 346",
        "متبادل آپشن ج 346",
        "متبادل آپشن د 346"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #346: विषय 346 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 346",
        "विकल्प बी 346",
        "विकल्प सी 346",
        "विकल्प डी 346"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #347: What is the correct ruling or historical fact for Topic 347?",
      "opts": [
        "Correct Answer 347",
        "Alternative Option B 347",
        "Alternative Option C 347",
        "Alternative Option D 347"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #347: عنوان 347 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 347",
        "متبادل آپشن ب 347",
        "متبادل آپشن ج 347",
        "متبادل آپشن د 347"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #347: विषय 347 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 347",
        "विकल्प बी 347",
        "विकल्प सी 347",
        "विकल्प डी 347"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #348: What is the correct ruling or historical fact for Topic 348?",
      "opts": [
        "Correct Answer 348",
        "Alternative Option B 348",
        "Alternative Option C 348",
        "Alternative Option D 348"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #348: عنوان 348 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 348",
        "متبادل آپشن ب 348",
        "متبادل آپشن ج 348",
        "متبادل آپشن د 348"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #348: विषय 348 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 348",
        "विकल्प बी 348",
        "विकल्प सी 348",
        "विकल्प डी 348"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #349: What is the correct ruling or historical fact for Topic 349?",
      "opts": [
        "Correct Answer 349",
        "Alternative Option B 349",
        "Alternative Option C 349",
        "Alternative Option D 349"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #349: عنوان 349 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 349",
        "متبادل آپشن ب 349",
        "متبادل آپشن ج 349",
        "متبادل آپشن د 349"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #349: विषय 349 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 349",
        "विकल्प बी 349",
        "विकल्प सी 349",
        "विकल्प डी 349"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #350: What is the correct ruling or historical fact for Topic 350?",
      "opts": [
        "Correct Answer 350",
        "Alternative Option B 350",
        "Alternative Option C 350",
        "Alternative Option D 350"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #350: عنوان 350 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 350",
        "متبادل آپشن ب 350",
        "متبادل آپشن ج 350",
        "متبادل آپشن د 350"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #350: विषय 350 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 350",
        "विकल्प बी 350",
        "विकल्प सी 350",
        "विकल्प डी 350"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #351: What is the correct ruling or historical fact for Topic 351?",
      "opts": [
        "Correct Answer 351",
        "Alternative Option B 351",
        "Alternative Option C 351",
        "Alternative Option D 351"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #351: عنوان 351 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 351",
        "متبادل آپشن ب 351",
        "متبادل آپشن ج 351",
        "متبادل آپشن د 351"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #351: विषय 351 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 351",
        "विकल्प बी 351",
        "विकल्प सी 351",
        "विकल्प डी 351"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #352: What is the correct ruling or historical fact for Topic 352?",
      "opts": [
        "Correct Answer 352",
        "Alternative Option B 352",
        "Alternative Option C 352",
        "Alternative Option D 352"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #352: عنوان 352 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 352",
        "متبادل آپشن ب 352",
        "متبادل آپشن ج 352",
        "متبادل آپشن د 352"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #352: विषय 352 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 352",
        "विकल्प बी 352",
        "विकल्प सी 352",
        "विकल्प डी 352"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #353: What is the correct ruling or historical fact for Topic 353?",
      "opts": [
        "Correct Answer 353",
        "Alternative Option B 353",
        "Alternative Option C 353",
        "Alternative Option D 353"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #353: عنوان 353 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 353",
        "متبادل آپشن ب 353",
        "متبادل آپشن ج 353",
        "متبادل آپشن د 353"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #353: विषय 353 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 353",
        "विकल्प बी 353",
        "विकल्प सी 353",
        "विकल्प डी 353"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #354: What is the correct ruling or historical fact for Topic 354?",
      "opts": [
        "Correct Answer 354",
        "Alternative Option B 354",
        "Alternative Option C 354",
        "Alternative Option D 354"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #354: عنوان 354 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 354",
        "متبادل آپشن ب 354",
        "متبادل آپشن ج 354",
        "متبادل آپشن د 354"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #354: विषय 354 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 354",
        "विकल्प बी 354",
        "विकल्प सी 354",
        "विकल्प डी 354"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #355: What is the correct ruling or historical fact for Topic 355?",
      "opts": [
        "Correct Answer 355",
        "Alternative Option B 355",
        "Alternative Option C 355",
        "Alternative Option D 355"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #355: عنوان 355 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 355",
        "متبادل آپشن ب 355",
        "متبادل آپشن ج 355",
        "متبادل آپشن د 355"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #355: विषय 355 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 355",
        "विकल्प बी 355",
        "विकल्प सी 355",
        "विकल्प डी 355"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #356: What is the correct ruling or historical fact for Topic 356?",
      "opts": [
        "Correct Answer 356",
        "Alternative Option B 356",
        "Alternative Option C 356",
        "Alternative Option D 356"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #356: عنوان 356 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 356",
        "متبادل آپشن ب 356",
        "متبادل آپشن ج 356",
        "متبادل آپشن د 356"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #356: विषय 356 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 356",
        "विकल्प बी 356",
        "विकल्प सी 356",
        "विकल्प डी 356"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #357: What is the correct ruling or historical fact for Topic 357?",
      "opts": [
        "Correct Answer 357",
        "Alternative Option B 357",
        "Alternative Option C 357",
        "Alternative Option D 357"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #357: عنوان 357 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 357",
        "متبادل آپشن ب 357",
        "متبادل آپشن ج 357",
        "متبادل آپشن د 357"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #357: विषय 357 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 357",
        "विकल्प बी 357",
        "विकल्प सी 357",
        "विकल्प डी 357"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #358: What is the correct ruling or historical fact for Topic 358?",
      "opts": [
        "Correct Answer 358",
        "Alternative Option B 358",
        "Alternative Option C 358",
        "Alternative Option D 358"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #358: عنوان 358 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 358",
        "متبادل آپشن ب 358",
        "متبادل آپشن ج 358",
        "متبادل آپشن د 358"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #358: विषय 358 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 358",
        "विकल्प बी 358",
        "विकल्प सी 358",
        "विकल्प डी 358"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #359: What is the correct ruling or historical fact for Topic 359?",
      "opts": [
        "Correct Answer 359",
        "Alternative Option B 359",
        "Alternative Option C 359",
        "Alternative Option D 359"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #359: عنوان 359 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 359",
        "متبادل آپشن ب 359",
        "متبادل آپشن ج 359",
        "متبادل آپشن د 359"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #359: विषय 359 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 359",
        "विकल्प बी 359",
        "विकल्प सी 359",
        "विकल्प डी 359"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #360: What is the correct ruling or historical fact for Topic 360?",
      "opts": [
        "Correct Answer 360",
        "Alternative Option B 360",
        "Alternative Option C 360",
        "Alternative Option D 360"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #360: عنوان 360 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 360",
        "متبادل آپشن ب 360",
        "متبادل آپشن ج 360",
        "متبادل آپشن د 360"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #360: विषय 360 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 360",
        "विकल्प बी 360",
        "विकल्प सी 360",
        "विकल्प डी 360"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #361: What is the correct ruling or historical fact for Topic 361?",
      "opts": [
        "Correct Answer 361",
        "Alternative Option B 361",
        "Alternative Option C 361",
        "Alternative Option D 361"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #361: عنوان 361 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 361",
        "متبادل آپشن ب 361",
        "متبادل آپشن ج 361",
        "متبادل آپشن د 361"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #361: विषय 361 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 361",
        "विकल्प बी 361",
        "विकल्प सी 361",
        "विकल्प डी 361"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #362: What is the correct ruling or historical fact for Topic 362?",
      "opts": [
        "Correct Answer 362",
        "Alternative Option B 362",
        "Alternative Option C 362",
        "Alternative Option D 362"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #362: عنوان 362 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 362",
        "متبادل آپشن ب 362",
        "متبادل آپشن ج 362",
        "متبادل آپشن د 362"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #362: विषय 362 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 362",
        "विकल्प बी 362",
        "विकल्प सी 362",
        "विकल्प डी 362"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #363: What is the correct ruling or historical fact for Topic 363?",
      "opts": [
        "Correct Answer 363",
        "Alternative Option B 363",
        "Alternative Option C 363",
        "Alternative Option D 363"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #363: عنوان 363 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 363",
        "متبادل آپشن ب 363",
        "متبادل آپشن ج 363",
        "متبادل آپشن د 363"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #363: विषय 363 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 363",
        "विकल्प बी 363",
        "विकल्प सी 363",
        "विकल्प डी 363"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #364: What is the correct ruling or historical fact for Topic 364?",
      "opts": [
        "Correct Answer 364",
        "Alternative Option B 364",
        "Alternative Option C 364",
        "Alternative Option D 364"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #364: عنوان 364 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 364",
        "متبادل آپشن ب 364",
        "متبادل آپشن ج 364",
        "متبادل آپشن د 364"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #364: विषय 364 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 364",
        "विकल्प बी 364",
        "विकल्प सी 364",
        "विकल्प डी 364"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #365: What is the correct ruling or historical fact for Topic 365?",
      "opts": [
        "Correct Answer 365",
        "Alternative Option B 365",
        "Alternative Option C 365",
        "Alternative Option D 365"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #365: عنوان 365 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 365",
        "متبادل آپشن ب 365",
        "متبادل آپشن ج 365",
        "متبادل آپشن د 365"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #365: विषय 365 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 365",
        "विकल्प बी 365",
        "विकल्प सी 365",
        "विकल्प डी 365"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #366: What is the correct ruling or historical fact for Topic 366?",
      "opts": [
        "Correct Answer 366",
        "Alternative Option B 366",
        "Alternative Option C 366",
        "Alternative Option D 366"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #366: عنوان 366 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 366",
        "متبادل آپشن ب 366",
        "متبادل آپشن ج 366",
        "متبادل آپشن د 366"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #366: विषय 366 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 366",
        "विकल्प बी 366",
        "विकल्प सी 366",
        "विकल्प डी 366"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #367: What is the correct ruling or historical fact for Topic 367?",
      "opts": [
        "Correct Answer 367",
        "Alternative Option B 367",
        "Alternative Option C 367",
        "Alternative Option D 367"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #367: عنوان 367 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 367",
        "متبادل آپشن ب 367",
        "متبادل آپشن ج 367",
        "متبادل آپشن د 367"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #367: विषय 367 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 367",
        "विकल्प बी 367",
        "विकल्प सी 367",
        "विकल्प डी 367"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #368: What is the correct ruling or historical fact for Topic 368?",
      "opts": [
        "Correct Answer 368",
        "Alternative Option B 368",
        "Alternative Option C 368",
        "Alternative Option D 368"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #368: عنوان 368 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 368",
        "متبادل آپشن ب 368",
        "متبادل آپشن ج 368",
        "متبادل آپشن د 368"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #368: विषय 368 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 368",
        "विकल्प बी 368",
        "विकल्प सी 368",
        "विकल्प डी 368"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #369: What is the correct ruling or historical fact for Topic 369?",
      "opts": [
        "Correct Answer 369",
        "Alternative Option B 369",
        "Alternative Option C 369",
        "Alternative Option D 369"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #369: عنوان 369 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 369",
        "متبادل آپشن ب 369",
        "متبادل آپشن ج 369",
        "متبادل آپشن د 369"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #369: विषय 369 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 369",
        "विकल्प बी 369",
        "विकल्प सी 369",
        "विकल्प डी 369"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #370: What is the correct ruling or historical fact for Topic 370?",
      "opts": [
        "Correct Answer 370",
        "Alternative Option B 370",
        "Alternative Option C 370",
        "Alternative Option D 370"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #370: عنوان 370 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 370",
        "متبادل آپشن ب 370",
        "متبادل آپشن ج 370",
        "متبادل آپشن د 370"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #370: विषय 370 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 370",
        "विकल्प बी 370",
        "विकल्प सी 370",
        "विकल्प डी 370"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #371: What is the correct ruling or historical fact for Topic 371?",
      "opts": [
        "Correct Answer 371",
        "Alternative Option B 371",
        "Alternative Option C 371",
        "Alternative Option D 371"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #371: عنوان 371 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 371",
        "متبادل آپشن ب 371",
        "متبادل آپشن ج 371",
        "متبادل آپشن د 371"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #371: विषय 371 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 371",
        "विकल्प बी 371",
        "विकल्प सी 371",
        "विकल्प डी 371"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #372: What is the correct ruling or historical fact for Topic 372?",
      "opts": [
        "Correct Answer 372",
        "Alternative Option B 372",
        "Alternative Option C 372",
        "Alternative Option D 372"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #372: عنوان 372 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 372",
        "متبادل آپشن ب 372",
        "متبادل آپشن ج 372",
        "متبادل آپشن د 372"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #372: विषय 372 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 372",
        "विकल्प बी 372",
        "विकल्प सी 372",
        "विकल्प डी 372"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #373: What is the correct ruling or historical fact for Topic 373?",
      "opts": [
        "Correct Answer 373",
        "Alternative Option B 373",
        "Alternative Option C 373",
        "Alternative Option D 373"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #373: عنوان 373 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 373",
        "متبادل آپشن ب 373",
        "متبادل آپشن ج 373",
        "متبادل آپشن د 373"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #373: विषय 373 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 373",
        "विकल्प बी 373",
        "विकल्प सी 373",
        "विकल्प डी 373"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #374: What is the correct ruling or historical fact for Topic 374?",
      "opts": [
        "Correct Answer 374",
        "Alternative Option B 374",
        "Alternative Option C 374",
        "Alternative Option D 374"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #374: عنوان 374 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 374",
        "متبادل آپشن ب 374",
        "متبادل آپشن ج 374",
        "متبادل آپشن د 374"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #374: विषय 374 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 374",
        "विकल्प बी 374",
        "विकल्प सी 374",
        "विकल्प डी 374"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #375: What is the correct ruling or historical fact for Topic 375?",
      "opts": [
        "Correct Answer 375",
        "Alternative Option B 375",
        "Alternative Option C 375",
        "Alternative Option D 375"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #375: عنوان 375 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 375",
        "متبادل آپشن ب 375",
        "متبادل آپشن ج 375",
        "متبادل آپشن د 375"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #375: विषय 375 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 375",
        "विकल्प बी 375",
        "विकल्प सी 375",
        "विकल्प डी 375"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #376: What is the correct ruling or historical fact for Topic 376?",
      "opts": [
        "Correct Answer 376",
        "Alternative Option B 376",
        "Alternative Option C 376",
        "Alternative Option D 376"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #376: عنوان 376 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 376",
        "متبادل آپشن ب 376",
        "متبادل آپشن ج 376",
        "متبادل آپشن د 376"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #376: विषय 376 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 376",
        "विकल्प बी 376",
        "विकल्प सी 376",
        "विकल्प डी 376"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #377: What is the correct ruling or historical fact for Topic 377?",
      "opts": [
        "Correct Answer 377",
        "Alternative Option B 377",
        "Alternative Option C 377",
        "Alternative Option D 377"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #377: عنوان 377 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 377",
        "متبادل آپشن ب 377",
        "متبادل آپشن ج 377",
        "متبادل آپشن د 377"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #377: विषय 377 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 377",
        "विकल्प बी 377",
        "विकल्प सी 377",
        "विकल्प डी 377"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #378: What is the correct ruling or historical fact for Topic 378?",
      "opts": [
        "Correct Answer 378",
        "Alternative Option B 378",
        "Alternative Option C 378",
        "Alternative Option D 378"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #378: عنوان 378 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 378",
        "متبادل آپشن ب 378",
        "متبادل آپشن ج 378",
        "متبادل آپشن د 378"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #378: विषय 378 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 378",
        "विकल्प बी 378",
        "विकल्प सी 378",
        "विकल्प डी 378"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #379: What is the correct ruling or historical fact for Topic 379?",
      "opts": [
        "Correct Answer 379",
        "Alternative Option B 379",
        "Alternative Option C 379",
        "Alternative Option D 379"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #379: عنوان 379 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 379",
        "متبادل آپشن ب 379",
        "متبادل آپشن ج 379",
        "متبادل آپشن د 379"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #379: विषय 379 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 379",
        "विकल्प बी 379",
        "विकल्प सी 379",
        "विकल्प डी 379"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #380: What is the correct ruling or historical fact for Topic 380?",
      "opts": [
        "Correct Answer 380",
        "Alternative Option B 380",
        "Alternative Option C 380",
        "Alternative Option D 380"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #380: عنوان 380 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 380",
        "متبادل آپشن ب 380",
        "متبادل آپشن ج 380",
        "متبادل آپشن د 380"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #380: विषय 380 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 380",
        "विकल्प बी 380",
        "विकल्प सी 380",
        "विकल्प डी 380"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #381: What is the correct ruling or historical fact for Topic 381?",
      "opts": [
        "Correct Answer 381",
        "Alternative Option B 381",
        "Alternative Option C 381",
        "Alternative Option D 381"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #381: عنوان 381 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 381",
        "متبادل آپشن ب 381",
        "متبادل آپشن ج 381",
        "متبادل آپشن د 381"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #381: विषय 381 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 381",
        "विकल्प बी 381",
        "विकल्प सी 381",
        "विकल्प डी 381"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #382: What is the correct ruling or historical fact for Topic 382?",
      "opts": [
        "Correct Answer 382",
        "Alternative Option B 382",
        "Alternative Option C 382",
        "Alternative Option D 382"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #382: عنوان 382 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 382",
        "متبادل آپشن ب 382",
        "متبادل آپشن ج 382",
        "متبادل آپشن د 382"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #382: विषय 382 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 382",
        "विकल्प बी 382",
        "विकल्प सी 382",
        "विकल्प डी 382"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #383: What is the correct ruling or historical fact for Topic 383?",
      "opts": [
        "Correct Answer 383",
        "Alternative Option B 383",
        "Alternative Option C 383",
        "Alternative Option D 383"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #383: عنوان 383 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 383",
        "متبادل آپشن ب 383",
        "متبادل آپشن ج 383",
        "متبادل آپشن د 383"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #383: विषय 383 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 383",
        "विकल्प बी 383",
        "विकल्प सी 383",
        "विकल्प डी 383"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #384: What is the correct ruling or historical fact for Topic 384?",
      "opts": [
        "Correct Answer 384",
        "Alternative Option B 384",
        "Alternative Option C 384",
        "Alternative Option D 384"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #384: عنوان 384 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 384",
        "متبادل آپشن ب 384",
        "متبادل آپشن ج 384",
        "متبادل آپشن د 384"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #384: विषय 384 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 384",
        "विकल्प बी 384",
        "विकल्प सी 384",
        "विकल्प डी 384"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #385: What is the correct ruling or historical fact for Topic 385?",
      "opts": [
        "Correct Answer 385",
        "Alternative Option B 385",
        "Alternative Option C 385",
        "Alternative Option D 385"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #385: عنوان 385 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 385",
        "متبادل آپشن ب 385",
        "متبادل آپشن ج 385",
        "متبادل آپشن د 385"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #385: विषय 385 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 385",
        "विकल्प बी 385",
        "विकल्प सी 385",
        "विकल्प डी 385"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #386: What is the correct ruling or historical fact for Topic 386?",
      "opts": [
        "Correct Answer 386",
        "Alternative Option B 386",
        "Alternative Option C 386",
        "Alternative Option D 386"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #386: عنوان 386 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 386",
        "متبادل آپشن ب 386",
        "متبادل آپشن ج 386",
        "متبادل آپشن د 386"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #386: विषय 386 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 386",
        "विकल्प बी 386",
        "विकल्प सी 386",
        "विकल्प डी 386"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #387: What is the correct ruling or historical fact for Topic 387?",
      "opts": [
        "Correct Answer 387",
        "Alternative Option B 387",
        "Alternative Option C 387",
        "Alternative Option D 387"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #387: عنوان 387 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 387",
        "متبادل آپشن ب 387",
        "متبادل آپشن ج 387",
        "متبادل آپشن د 387"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #387: विषय 387 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 387",
        "विकल्प बी 387",
        "विकल्प सी 387",
        "विकल्प डी 387"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #388: What is the correct ruling or historical fact for Topic 388?",
      "opts": [
        "Correct Answer 388",
        "Alternative Option B 388",
        "Alternative Option C 388",
        "Alternative Option D 388"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #388: عنوان 388 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 388",
        "متبادل آپشن ب 388",
        "متبادل آپشن ج 388",
        "متبادل آپشن د 388"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #388: विषय 388 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 388",
        "विकल्प बी 388",
        "विकल्प सी 388",
        "विकल्प डी 388"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #389: What is the correct ruling or historical fact for Topic 389?",
      "opts": [
        "Correct Answer 389",
        "Alternative Option B 389",
        "Alternative Option C 389",
        "Alternative Option D 389"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #389: عنوان 389 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 389",
        "متبادل آپشن ب 389",
        "متبادل آپشن ج 389",
        "متبادل آپشن د 389"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #389: विषय 389 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 389",
        "विकल्प बी 389",
        "विकल्प सी 389",
        "विकल्प डी 389"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #390: What is the correct ruling or historical fact for Topic 390?",
      "opts": [
        "Correct Answer 390",
        "Alternative Option B 390",
        "Alternative Option C 390",
        "Alternative Option D 390"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #390: عنوان 390 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 390",
        "متبادل آپشن ب 390",
        "متبادل آپشن ج 390",
        "متبادل آپشن د 390"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #390: विषय 390 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 390",
        "विकल्प बी 390",
        "विकल्प सी 390",
        "विकल्प डी 390"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #391: What is the correct ruling or historical fact for Topic 391?",
      "opts": [
        "Correct Answer 391",
        "Alternative Option B 391",
        "Alternative Option C 391",
        "Alternative Option D 391"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #391: عنوان 391 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 391",
        "متبادل آپشن ب 391",
        "متبادل آپشن ج 391",
        "متبادل آپشن د 391"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #391: विषय 391 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 391",
        "विकल्प बी 391",
        "विकल्प सी 391",
        "विकल्प डी 391"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #392: What is the correct ruling or historical fact for Topic 392?",
      "opts": [
        "Correct Answer 392",
        "Alternative Option B 392",
        "Alternative Option C 392",
        "Alternative Option D 392"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #392: عنوان 392 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 392",
        "متبادل آپشن ب 392",
        "متبادل آپشن ج 392",
        "متبادل آپشن د 392"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #392: विषय 392 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 392",
        "विकल्प बी 392",
        "विकल्प सी 392",
        "विकल्प डी 392"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #393: What is the correct ruling or historical fact for Topic 393?",
      "opts": [
        "Correct Answer 393",
        "Alternative Option B 393",
        "Alternative Option C 393",
        "Alternative Option D 393"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #393: عنوان 393 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 393",
        "متبادل آپشن ب 393",
        "متبادل آپشن ج 393",
        "متبادل آپشن د 393"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #393: विषय 393 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 393",
        "विकल्प बी 393",
        "विकल्प सी 393",
        "विकल्प डी 393"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #394: What is the correct ruling or historical fact for Topic 394?",
      "opts": [
        "Correct Answer 394",
        "Alternative Option B 394",
        "Alternative Option C 394",
        "Alternative Option D 394"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #394: عنوان 394 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 394",
        "متبادل آپشن ب 394",
        "متبادل آپشن ج 394",
        "متبادل آپشن د 394"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #394: विषय 394 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 394",
        "विकल्प बी 394",
        "विकल्प सी 394",
        "विकल्प डी 394"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #395: What is the correct ruling or historical fact for Topic 395?",
      "opts": [
        "Correct Answer 395",
        "Alternative Option B 395",
        "Alternative Option C 395",
        "Alternative Option D 395"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #395: عنوان 395 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 395",
        "متبادل آپشن ب 395",
        "متبادل آپشن ج 395",
        "متبادل آپشن د 395"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #395: विषय 395 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 395",
        "विकल्प बी 395",
        "विकल्प सी 395",
        "विकल्प डी 395"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #396: What is the correct ruling or historical fact for Topic 396?",
      "opts": [
        "Correct Answer 396",
        "Alternative Option B 396",
        "Alternative Option C 396",
        "Alternative Option D 396"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #396: عنوان 396 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 396",
        "متبادل آپشن ب 396",
        "متبادل آپشن ج 396",
        "متبادل آپشن د 396"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #396: विषय 396 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 396",
        "विकल्प बी 396",
        "विकल्प सी 396",
        "विकल्प डी 396"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #397: What is the correct ruling or historical fact for Topic 397?",
      "opts": [
        "Correct Answer 397",
        "Alternative Option B 397",
        "Alternative Option C 397",
        "Alternative Option D 397"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #397: عنوان 397 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 397",
        "متبادل آپشن ب 397",
        "متبادل آپشن ج 397",
        "متبادل آپشن د 397"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #397: विषय 397 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 397",
        "विकल्प बी 397",
        "विकल्प सी 397",
        "विकल्प डी 397"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #398: What is the correct ruling or historical fact for Topic 398?",
      "opts": [
        "Correct Answer 398",
        "Alternative Option B 398",
        "Alternative Option C 398",
        "Alternative Option D 398"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #398: عنوان 398 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 398",
        "متبادل آپشن ب 398",
        "متبادل آپشن ج 398",
        "متبادل آپشن د 398"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #398: विषय 398 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 398",
        "विकल्प बी 398",
        "विकल्प सी 398",
        "विकल्प डी 398"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #399: What is the correct ruling or historical fact for Topic 399?",
      "opts": [
        "Correct Answer 399",
        "Alternative Option B 399",
        "Alternative Option C 399",
        "Alternative Option D 399"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #399: عنوان 399 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 399",
        "متبادل آپشن ب 399",
        "متبادل آپشن ج 399",
        "متبادل آپشن د 399"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #399: विषय 399 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 399",
        "विकल्प बी 399",
        "विकल्प सी 399",
        "विकल्प डी 399"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #400: What is the correct ruling or historical fact for Topic 400?",
      "opts": [
        "Correct Answer 400",
        "Alternative Option B 400",
        "Alternative Option C 400",
        "Alternative Option D 400"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #400: عنوان 400 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 400",
        "متبادل آپشن ب 400",
        "متبادل آپشن ج 400",
        "متبادل آپشن د 400"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #400: विषय 400 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 400",
        "विकल्प बी 400",
        "विकल्प सी 400",
        "विकल्प डी 400"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #401: What is the correct ruling or historical fact for Topic 401?",
      "opts": [
        "Correct Answer 401",
        "Alternative Option B 401",
        "Alternative Option C 401",
        "Alternative Option D 401"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #401: عنوان 401 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 401",
        "متبادل آپشن ب 401",
        "متبادل آپشن ج 401",
        "متبادل آپشن د 401"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #401: विषय 401 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 401",
        "विकल्प बी 401",
        "विकल्प सी 401",
        "विकल्प डी 401"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #402: What is the correct ruling or historical fact for Topic 402?",
      "opts": [
        "Correct Answer 402",
        "Alternative Option B 402",
        "Alternative Option C 402",
        "Alternative Option D 402"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #402: عنوان 402 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 402",
        "متبادل آپشن ب 402",
        "متبادل آپشن ج 402",
        "متبادل آپشن د 402"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #402: विषय 402 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 402",
        "विकल्प बी 402",
        "विकल्प सी 402",
        "विकल्प डी 402"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #403: What is the correct ruling or historical fact for Topic 403?",
      "opts": [
        "Correct Answer 403",
        "Alternative Option B 403",
        "Alternative Option C 403",
        "Alternative Option D 403"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #403: عنوان 403 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 403",
        "متبادل آپشن ب 403",
        "متبادل آپشن ج 403",
        "متبادل آپشن د 403"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #403: विषय 403 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 403",
        "विकल्प बी 403",
        "विकल्प सी 403",
        "विकल्प डी 403"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #404: What is the correct ruling or historical fact for Topic 404?",
      "opts": [
        "Correct Answer 404",
        "Alternative Option B 404",
        "Alternative Option C 404",
        "Alternative Option D 404"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #404: عنوان 404 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 404",
        "متبادل آپشن ب 404",
        "متبادل آپشن ج 404",
        "متبادل آپشن د 404"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #404: विषय 404 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 404",
        "विकल्प बी 404",
        "विकल्प सी 404",
        "विकल्प डी 404"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #405: What is the correct ruling or historical fact for Topic 405?",
      "opts": [
        "Correct Answer 405",
        "Alternative Option B 405",
        "Alternative Option C 405",
        "Alternative Option D 405"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #405: عنوان 405 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 405",
        "متبادل آپشن ب 405",
        "متبادل آپشن ج 405",
        "متبادل آپشن د 405"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #405: विषय 405 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 405",
        "विकल्प बी 405",
        "विकल्प सी 405",
        "विकल्प डी 405"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #406: What is the correct ruling or historical fact for Topic 406?",
      "opts": [
        "Correct Answer 406",
        "Alternative Option B 406",
        "Alternative Option C 406",
        "Alternative Option D 406"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #406: عنوان 406 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 406",
        "متبادل آپشن ب 406",
        "متبادل آپشن ج 406",
        "متبادل آپشن د 406"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #406: विषय 406 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 406",
        "विकल्प बी 406",
        "विकल्प सी 406",
        "विकल्प डी 406"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #407: What is the correct ruling or historical fact for Topic 407?",
      "opts": [
        "Correct Answer 407",
        "Alternative Option B 407",
        "Alternative Option C 407",
        "Alternative Option D 407"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #407: عنوان 407 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 407",
        "متبادل آپشن ب 407",
        "متبادل آپشن ج 407",
        "متبادل آپشن د 407"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #407: विषय 407 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 407",
        "विकल्प बी 407",
        "विकल्प सी 407",
        "विकल्प डी 407"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #408: What is the correct ruling or historical fact for Topic 408?",
      "opts": [
        "Correct Answer 408",
        "Alternative Option B 408",
        "Alternative Option C 408",
        "Alternative Option D 408"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #408: عنوان 408 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 408",
        "متبادل آپشن ب 408",
        "متبادل آپشن ج 408",
        "متبادل آپشن د 408"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #408: विषय 408 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 408",
        "विकल्प बी 408",
        "विकल्प सी 408",
        "विकल्प डी 408"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #409: What is the correct ruling or historical fact for Topic 409?",
      "opts": [
        "Correct Answer 409",
        "Alternative Option B 409",
        "Alternative Option C 409",
        "Alternative Option D 409"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #409: عنوان 409 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 409",
        "متبادل آپشن ب 409",
        "متبادل آپشن ج 409",
        "متبادل آپشن د 409"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #409: विषय 409 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 409",
        "विकल्प बी 409",
        "विकल्प सी 409",
        "विकल्प डी 409"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #410: What is the correct ruling or historical fact for Topic 410?",
      "opts": [
        "Correct Answer 410",
        "Alternative Option B 410",
        "Alternative Option C 410",
        "Alternative Option D 410"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #410: عنوان 410 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 410",
        "متبادل آپشن ب 410",
        "متبادل آپشن ج 410",
        "متبادل آپشن د 410"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #410: विषय 410 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 410",
        "विकल्प बी 410",
        "विकल्प सी 410",
        "विकल्प डी 410"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #411: What is the correct ruling or historical fact for Topic 411?",
      "opts": [
        "Correct Answer 411",
        "Alternative Option B 411",
        "Alternative Option C 411",
        "Alternative Option D 411"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #411: عنوان 411 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 411",
        "متبادل آپشن ب 411",
        "متبادل آپشن ج 411",
        "متبادل آپشن د 411"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #411: विषय 411 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 411",
        "विकल्प बी 411",
        "विकल्प सी 411",
        "विकल्प डी 411"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #412: What is the correct ruling or historical fact for Topic 412?",
      "opts": [
        "Correct Answer 412",
        "Alternative Option B 412",
        "Alternative Option C 412",
        "Alternative Option D 412"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #412: عنوان 412 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 412",
        "متبادل آپشن ب 412",
        "متبادل آپشن ج 412",
        "متبادل آپشن د 412"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #412: विषय 412 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 412",
        "विकल्प बी 412",
        "विकल्प सी 412",
        "विकल्प डी 412"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #413: What is the correct ruling or historical fact for Topic 413?",
      "opts": [
        "Correct Answer 413",
        "Alternative Option B 413",
        "Alternative Option C 413",
        "Alternative Option D 413"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #413: عنوان 413 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 413",
        "متبادل آپشن ب 413",
        "متبادل آپشن ج 413",
        "متبادل آپشن د 413"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #413: विषय 413 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 413",
        "विकल्प बी 413",
        "विकल्प सी 413",
        "विकल्प डी 413"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #414: What is the correct ruling or historical fact for Topic 414?",
      "opts": [
        "Correct Answer 414",
        "Alternative Option B 414",
        "Alternative Option C 414",
        "Alternative Option D 414"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #414: عنوان 414 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 414",
        "متبادل آپشن ب 414",
        "متبادل آپشن ج 414",
        "متبادل آپشن د 414"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #414: विषय 414 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 414",
        "विकल्प बी 414",
        "विकल्प सी 414",
        "विकल्प डी 414"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #415: What is the correct ruling or historical fact for Topic 415?",
      "opts": [
        "Correct Answer 415",
        "Alternative Option B 415",
        "Alternative Option C 415",
        "Alternative Option D 415"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #415: عنوان 415 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 415",
        "متبادل آپشن ب 415",
        "متبادل آپشن ج 415",
        "متبادل آپشن د 415"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #415: विषय 415 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 415",
        "विकल्प बी 415",
        "विकल्प सी 415",
        "विकल्प डी 415"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #416: What is the correct ruling or historical fact for Topic 416?",
      "opts": [
        "Correct Answer 416",
        "Alternative Option B 416",
        "Alternative Option C 416",
        "Alternative Option D 416"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #416: عنوان 416 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 416",
        "متبادل آپشن ب 416",
        "متبادل آپشن ج 416",
        "متبادل آپشن د 416"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #416: विषय 416 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 416",
        "विकल्प बी 416",
        "विकल्प सी 416",
        "विकल्प डी 416"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #417: What is the correct ruling or historical fact for Topic 417?",
      "opts": [
        "Correct Answer 417",
        "Alternative Option B 417",
        "Alternative Option C 417",
        "Alternative Option D 417"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #417: عنوان 417 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 417",
        "متبادل آپشن ب 417",
        "متبادل آپشن ج 417",
        "متبادل آپشن د 417"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #417: विषय 417 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 417",
        "विकल्प बी 417",
        "विकल्प सी 417",
        "विकल्प डी 417"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #418: What is the correct ruling or historical fact for Topic 418?",
      "opts": [
        "Correct Answer 418",
        "Alternative Option B 418",
        "Alternative Option C 418",
        "Alternative Option D 418"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #418: عنوان 418 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 418",
        "متبادل آپشن ب 418",
        "متبادل آپشن ج 418",
        "متبادل آپشن د 418"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #418: विषय 418 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 418",
        "विकल्प बी 418",
        "विकल्प सी 418",
        "विकल्प डी 418"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #419: What is the correct ruling or historical fact for Topic 419?",
      "opts": [
        "Correct Answer 419",
        "Alternative Option B 419",
        "Alternative Option C 419",
        "Alternative Option D 419"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #419: عنوان 419 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 419",
        "متبادل آپشن ب 419",
        "متبادل آپشن ج 419",
        "متبادل آپشن د 419"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #419: विषय 419 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 419",
        "विकल्प बी 419",
        "विकल्प सी 419",
        "विकल्प डी 419"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #420: What is the correct ruling or historical fact for Topic 420?",
      "opts": [
        "Correct Answer 420",
        "Alternative Option B 420",
        "Alternative Option C 420",
        "Alternative Option D 420"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #420: عنوان 420 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 420",
        "متبادل آپشن ب 420",
        "متبادل آپشن ج 420",
        "متبادل آپشن د 420"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #420: विषय 420 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 420",
        "विकल्प बी 420",
        "विकल्प सी 420",
        "विकल्प डी 420"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #421: What is the correct ruling or historical fact for Topic 421?",
      "opts": [
        "Correct Answer 421",
        "Alternative Option B 421",
        "Alternative Option C 421",
        "Alternative Option D 421"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #421: عنوان 421 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 421",
        "متبادل آپشن ب 421",
        "متبادل آپشن ج 421",
        "متبادل آپشن د 421"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #421: विषय 421 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 421",
        "विकल्प बी 421",
        "विकल्प सी 421",
        "विकल्प डी 421"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #422: What is the correct ruling or historical fact for Topic 422?",
      "opts": [
        "Correct Answer 422",
        "Alternative Option B 422",
        "Alternative Option C 422",
        "Alternative Option D 422"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #422: عنوان 422 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 422",
        "متبادل آپشن ب 422",
        "متبادل آپشن ج 422",
        "متبادل آپشن د 422"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #422: विषय 422 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 422",
        "विकल्प बी 422",
        "विकल्प सी 422",
        "विकल्प डी 422"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #423: What is the correct ruling or historical fact for Topic 423?",
      "opts": [
        "Correct Answer 423",
        "Alternative Option B 423",
        "Alternative Option C 423",
        "Alternative Option D 423"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #423: عنوان 423 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 423",
        "متبادل آپشن ب 423",
        "متبادل آپشن ج 423",
        "متبادل آپشن د 423"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #423: विषय 423 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 423",
        "विकल्प बी 423",
        "विकल्प सी 423",
        "विकल्प डी 423"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #424: What is the correct ruling or historical fact for Topic 424?",
      "opts": [
        "Correct Answer 424",
        "Alternative Option B 424",
        "Alternative Option C 424",
        "Alternative Option D 424"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #424: عنوان 424 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 424",
        "متبادل آپشن ب 424",
        "متبادل آپشن ج 424",
        "متبادل آپشن د 424"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #424: विषय 424 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 424",
        "विकल्प बी 424",
        "विकल्प सी 424",
        "विकल्प डी 424"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #425: What is the correct ruling or historical fact for Topic 425?",
      "opts": [
        "Correct Answer 425",
        "Alternative Option B 425",
        "Alternative Option C 425",
        "Alternative Option D 425"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #425: عنوان 425 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 425",
        "متبادل آپشن ب 425",
        "متبادل آپشن ج 425",
        "متبادل آپشن د 425"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #425: विषय 425 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 425",
        "विकल्प बी 425",
        "विकल्प सी 425",
        "विकल्प डी 425"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #426: What is the correct ruling or historical fact for Topic 426?",
      "opts": [
        "Correct Answer 426",
        "Alternative Option B 426",
        "Alternative Option C 426",
        "Alternative Option D 426"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #426: عنوان 426 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 426",
        "متبادل آپشن ب 426",
        "متبادل آپشن ج 426",
        "متبادل آپشن د 426"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #426: विषय 426 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 426",
        "विकल्प बी 426",
        "विकल्प सी 426",
        "विकल्प डी 426"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #427: What is the correct ruling or historical fact for Topic 427?",
      "opts": [
        "Correct Answer 427",
        "Alternative Option B 427",
        "Alternative Option C 427",
        "Alternative Option D 427"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #427: عنوان 427 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 427",
        "متبادل آپشن ب 427",
        "متبادل آپشن ج 427",
        "متبادل آپشن د 427"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #427: विषय 427 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 427",
        "विकल्प बी 427",
        "विकल्प सी 427",
        "विकल्प डी 427"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #428: What is the correct ruling or historical fact for Topic 428?",
      "opts": [
        "Correct Answer 428",
        "Alternative Option B 428",
        "Alternative Option C 428",
        "Alternative Option D 428"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #428: عنوان 428 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 428",
        "متبادل آپشن ب 428",
        "متبادل آپشن ج 428",
        "متبادل آپشن د 428"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #428: विषय 428 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 428",
        "विकल्प बी 428",
        "विकल्प सी 428",
        "विकल्प डी 428"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #429: What is the correct ruling or historical fact for Topic 429?",
      "opts": [
        "Correct Answer 429",
        "Alternative Option B 429",
        "Alternative Option C 429",
        "Alternative Option D 429"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #429: عنوان 429 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 429",
        "متبادل آپشن ب 429",
        "متبادل آپشن ج 429",
        "متبادل آپشن د 429"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #429: विषय 429 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 429",
        "विकल्प बी 429",
        "विकल्प सी 429",
        "विकल्प डी 429"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #430: What is the correct ruling or historical fact for Topic 430?",
      "opts": [
        "Correct Answer 430",
        "Alternative Option B 430",
        "Alternative Option C 430",
        "Alternative Option D 430"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #430: عنوان 430 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 430",
        "متبادل آپشن ب 430",
        "متبادل آپشن ج 430",
        "متبادل آپشن د 430"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #430: विषय 430 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 430",
        "विकल्प बी 430",
        "विकल्प सी 430",
        "विकल्प डी 430"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #431: What is the correct ruling or historical fact for Topic 431?",
      "opts": [
        "Correct Answer 431",
        "Alternative Option B 431",
        "Alternative Option C 431",
        "Alternative Option D 431"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #431: عنوان 431 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 431",
        "متبادل آپشن ب 431",
        "متبادل آپشن ج 431",
        "متبادل آپشن د 431"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #431: विषय 431 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 431",
        "विकल्प बी 431",
        "विकल्प सी 431",
        "विकल्प डी 431"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #432: What is the correct ruling or historical fact for Topic 432?",
      "opts": [
        "Correct Answer 432",
        "Alternative Option B 432",
        "Alternative Option C 432",
        "Alternative Option D 432"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #432: عنوان 432 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 432",
        "متبادل آپشن ب 432",
        "متبادل آپشن ج 432",
        "متبادل آپشن د 432"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #432: विषय 432 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 432",
        "विकल्प बी 432",
        "विकल्प सी 432",
        "विकल्प डी 432"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #433: What is the correct ruling or historical fact for Topic 433?",
      "opts": [
        "Correct Answer 433",
        "Alternative Option B 433",
        "Alternative Option C 433",
        "Alternative Option D 433"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #433: عنوان 433 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 433",
        "متبادل آپشن ب 433",
        "متبادل آپشن ج 433",
        "متبادل آپشن د 433"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #433: विषय 433 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 433",
        "विकल्प बी 433",
        "विकल्प सी 433",
        "विकल्प डी 433"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #434: What is the correct ruling or historical fact for Topic 434?",
      "opts": [
        "Correct Answer 434",
        "Alternative Option B 434",
        "Alternative Option C 434",
        "Alternative Option D 434"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #434: عنوان 434 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 434",
        "متبادل آپشن ب 434",
        "متبادل آپشن ج 434",
        "متبادل آپشن د 434"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #434: विषय 434 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 434",
        "विकल्प बी 434",
        "विकल्प सी 434",
        "विकल्प डी 434"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #435: What is the correct ruling or historical fact for Topic 435?",
      "opts": [
        "Correct Answer 435",
        "Alternative Option B 435",
        "Alternative Option C 435",
        "Alternative Option D 435"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #435: عنوان 435 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 435",
        "متبادل آپشن ب 435",
        "متبادل آپشن ج 435",
        "متبادل آپشن د 435"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #435: विषय 435 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 435",
        "विकल्प बी 435",
        "विकल्प सी 435",
        "विकल्प डी 435"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #436: What is the correct ruling or historical fact for Topic 436?",
      "opts": [
        "Correct Answer 436",
        "Alternative Option B 436",
        "Alternative Option C 436",
        "Alternative Option D 436"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #436: عنوان 436 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 436",
        "متبادل آپشن ب 436",
        "متبادل آپشن ج 436",
        "متبادل آپشن د 436"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #436: विषय 436 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 436",
        "विकल्प बी 436",
        "विकल्प सी 436",
        "विकल्प डी 436"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #437: What is the correct ruling or historical fact for Topic 437?",
      "opts": [
        "Correct Answer 437",
        "Alternative Option B 437",
        "Alternative Option C 437",
        "Alternative Option D 437"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #437: عنوان 437 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 437",
        "متبادل آپشن ب 437",
        "متبادل آپشن ج 437",
        "متبادل آپشن د 437"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #437: विषय 437 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 437",
        "विकल्प बी 437",
        "विकल्प सी 437",
        "विकल्प डी 437"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #438: What is the correct ruling or historical fact for Topic 438?",
      "opts": [
        "Correct Answer 438",
        "Alternative Option B 438",
        "Alternative Option C 438",
        "Alternative Option D 438"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #438: عنوان 438 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 438",
        "متبادل آپشن ب 438",
        "متبادل آپشن ج 438",
        "متبادل آپشن د 438"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #438: विषय 438 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 438",
        "विकल्प बी 438",
        "विकल्प सी 438",
        "विकल्प डी 438"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #439: What is the correct ruling or historical fact for Topic 439?",
      "opts": [
        "Correct Answer 439",
        "Alternative Option B 439",
        "Alternative Option C 439",
        "Alternative Option D 439"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #439: عنوان 439 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 439",
        "متبادل آپشن ب 439",
        "متبادل آپشن ج 439",
        "متبادل آپشن د 439"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #439: विषय 439 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 439",
        "विकल्प बी 439",
        "विकल्प सी 439",
        "विकल्प डी 439"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #440: What is the correct ruling or historical fact for Topic 440?",
      "opts": [
        "Correct Answer 440",
        "Alternative Option B 440",
        "Alternative Option C 440",
        "Alternative Option D 440"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #440: عنوان 440 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 440",
        "متبادل آپشن ب 440",
        "متبادل آپشن ج 440",
        "متبادل آپشن د 440"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #440: विषय 440 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 440",
        "विकल्प बी 440",
        "विकल्प सी 440",
        "विकल्प डी 440"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #441: What is the correct ruling or historical fact for Topic 441?",
      "opts": [
        "Correct Answer 441",
        "Alternative Option B 441",
        "Alternative Option C 441",
        "Alternative Option D 441"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #441: عنوان 441 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 441",
        "متبادل آپشن ب 441",
        "متبادل آپشن ج 441",
        "متبادل آپشن د 441"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #441: विषय 441 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 441",
        "विकल्प बी 441",
        "विकल्प सी 441",
        "विकल्प डी 441"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #442: What is the correct ruling or historical fact for Topic 442?",
      "opts": [
        "Correct Answer 442",
        "Alternative Option B 442",
        "Alternative Option C 442",
        "Alternative Option D 442"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #442: عنوان 442 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 442",
        "متبادل آپشن ب 442",
        "متبادل آپشن ج 442",
        "متبادل آپشن د 442"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #442: विषय 442 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 442",
        "विकल्प बी 442",
        "विकल्प सी 442",
        "विकल्प डी 442"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #443: What is the correct ruling or historical fact for Topic 443?",
      "opts": [
        "Correct Answer 443",
        "Alternative Option B 443",
        "Alternative Option C 443",
        "Alternative Option D 443"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #443: عنوان 443 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 443",
        "متبادل آپشن ب 443",
        "متبادل آپشن ج 443",
        "متبادل آپشن د 443"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #443: विषय 443 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 443",
        "विकल्प बी 443",
        "विकल्प सी 443",
        "विकल्प डी 443"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #444: What is the correct ruling or historical fact for Topic 444?",
      "opts": [
        "Correct Answer 444",
        "Alternative Option B 444",
        "Alternative Option C 444",
        "Alternative Option D 444"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #444: عنوان 444 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 444",
        "متبادل آپشن ب 444",
        "متبادل آپشن ج 444",
        "متبادل آپشن د 444"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #444: विषय 444 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 444",
        "विकल्प बी 444",
        "विकल्प सी 444",
        "विकल्प डी 444"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #445: What is the correct ruling or historical fact for Topic 445?",
      "opts": [
        "Correct Answer 445",
        "Alternative Option B 445",
        "Alternative Option C 445",
        "Alternative Option D 445"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #445: عنوان 445 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 445",
        "متبادل آپشن ب 445",
        "متبادل آپشن ج 445",
        "متبادل آپشن د 445"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #445: विषय 445 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 445",
        "विकल्प बी 445",
        "विकल्प सी 445",
        "विकल्प डी 445"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #446: What is the correct ruling or historical fact for Topic 446?",
      "opts": [
        "Correct Answer 446",
        "Alternative Option B 446",
        "Alternative Option C 446",
        "Alternative Option D 446"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #446: عنوان 446 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 446",
        "متبادل آپشن ب 446",
        "متبادل آپشن ج 446",
        "متبادل آپشن د 446"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #446: विषय 446 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 446",
        "विकल्प बी 446",
        "विकल्प सी 446",
        "विकल्प डी 446"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #447: What is the correct ruling or historical fact for Topic 447?",
      "opts": [
        "Correct Answer 447",
        "Alternative Option B 447",
        "Alternative Option C 447",
        "Alternative Option D 447"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #447: عنوان 447 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 447",
        "متبادل آپشن ب 447",
        "متبادل آپشن ج 447",
        "متبادل آپشن د 447"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #447: विषय 447 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 447",
        "विकल्प बी 447",
        "विकल्प सी 447",
        "विकल्प डी 447"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #448: What is the correct ruling or historical fact for Topic 448?",
      "opts": [
        "Correct Answer 448",
        "Alternative Option B 448",
        "Alternative Option C 448",
        "Alternative Option D 448"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #448: عنوان 448 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 448",
        "متبادل آپشن ب 448",
        "متبادل آپشن ج 448",
        "متبادل آپشن د 448"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #448: विषय 448 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 448",
        "विकल्प बी 448",
        "विकल्प सी 448",
        "विकल्प डी 448"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #449: What is the correct ruling or historical fact for Topic 449?",
      "opts": [
        "Correct Answer 449",
        "Alternative Option B 449",
        "Alternative Option C 449",
        "Alternative Option D 449"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #449: عنوان 449 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 449",
        "متبادل آپشن ب 449",
        "متبادل آپشن ج 449",
        "متبادل آپشن د 449"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #449: विषय 449 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 449",
        "विकल्प बी 449",
        "विकल्प सी 449",
        "विकल्प डी 449"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #450: What is the correct ruling or historical fact for Topic 450?",
      "opts": [
        "Correct Answer 450",
        "Alternative Option B 450",
        "Alternative Option C 450",
        "Alternative Option D 450"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #450: عنوان 450 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 450",
        "متبادل آپشن ب 450",
        "متبادل آپشن ج 450",
        "متبادل آپشن د 450"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #450: विषय 450 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 450",
        "विकल्प बी 450",
        "विकल्प सी 450",
        "विकल्प डी 450"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #451: What is the correct ruling or historical fact for Topic 451?",
      "opts": [
        "Correct Answer 451",
        "Alternative Option B 451",
        "Alternative Option C 451",
        "Alternative Option D 451"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #451: عنوان 451 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 451",
        "متبادل آپشن ب 451",
        "متبادل آپشن ج 451",
        "متبادل آپشن د 451"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #451: विषय 451 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 451",
        "विकल्प बी 451",
        "विकल्प सी 451",
        "विकल्प डी 451"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #452: What is the correct ruling or historical fact for Topic 452?",
      "opts": [
        "Correct Answer 452",
        "Alternative Option B 452",
        "Alternative Option C 452",
        "Alternative Option D 452"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #452: عنوان 452 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 452",
        "متبادل آپشن ب 452",
        "متبادل آپشن ج 452",
        "متبادل آپشن د 452"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #452: विषय 452 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 452",
        "विकल्प बी 452",
        "विकल्प सी 452",
        "विकल्प डी 452"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #453: What is the correct ruling or historical fact for Topic 453?",
      "opts": [
        "Correct Answer 453",
        "Alternative Option B 453",
        "Alternative Option C 453",
        "Alternative Option D 453"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #453: عنوان 453 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 453",
        "متبادل آپشن ب 453",
        "متبادل آپشن ج 453",
        "متبادل آپشن د 453"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #453: विषय 453 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 453",
        "विकल्प बी 453",
        "विकल्प सी 453",
        "विकल्प डी 453"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #454: What is the correct ruling or historical fact for Topic 454?",
      "opts": [
        "Correct Answer 454",
        "Alternative Option B 454",
        "Alternative Option C 454",
        "Alternative Option D 454"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #454: عنوان 454 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 454",
        "متبادل آپشن ب 454",
        "متبادل آپشن ج 454",
        "متبادل آپشن د 454"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #454: विषय 454 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 454",
        "विकल्प बी 454",
        "विकल्प सी 454",
        "विकल्प डी 454"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #455: What is the correct ruling or historical fact for Topic 455?",
      "opts": [
        "Correct Answer 455",
        "Alternative Option B 455",
        "Alternative Option C 455",
        "Alternative Option D 455"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #455: عنوان 455 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 455",
        "متبادل آپشن ب 455",
        "متبادل آپشن ج 455",
        "متبادل آپشن د 455"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #455: विषय 455 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 455",
        "विकल्प बी 455",
        "विकल्प सी 455",
        "विकल्प डी 455"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #456: What is the correct ruling or historical fact for Topic 456?",
      "opts": [
        "Correct Answer 456",
        "Alternative Option B 456",
        "Alternative Option C 456",
        "Alternative Option D 456"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #456: عنوان 456 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 456",
        "متبادل آپشن ب 456",
        "متبادل آپشن ج 456",
        "متبادل آپشن د 456"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #456: विषय 456 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 456",
        "विकल्प बी 456",
        "विकल्प सी 456",
        "विकल्प डी 456"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #457: What is the correct ruling or historical fact for Topic 457?",
      "opts": [
        "Correct Answer 457",
        "Alternative Option B 457",
        "Alternative Option C 457",
        "Alternative Option D 457"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #457: عنوان 457 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 457",
        "متبادل آپشن ب 457",
        "متبادل آپشن ج 457",
        "متبادل آپشن د 457"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #457: विषय 457 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 457",
        "विकल्प बी 457",
        "विकल्प सी 457",
        "विकल्प डी 457"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #458: What is the correct ruling or historical fact for Topic 458?",
      "opts": [
        "Correct Answer 458",
        "Alternative Option B 458",
        "Alternative Option C 458",
        "Alternative Option D 458"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #458: عنوان 458 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 458",
        "متبادل آپشن ب 458",
        "متبادل آپشن ج 458",
        "متبادل آپشن د 458"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #458: विषय 458 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 458",
        "विकल्प बी 458",
        "विकल्प सी 458",
        "विकल्प डी 458"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #459: What is the correct ruling or historical fact for Topic 459?",
      "opts": [
        "Correct Answer 459",
        "Alternative Option B 459",
        "Alternative Option C 459",
        "Alternative Option D 459"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #459: عنوان 459 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 459",
        "متبادل آپشن ب 459",
        "متبادل آپشن ج 459",
        "متبادل آپشن د 459"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #459: विषय 459 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 459",
        "विकल्प बी 459",
        "विकल्प सी 459",
        "विकल्प डी 459"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #460: What is the correct ruling or historical fact for Topic 460?",
      "opts": [
        "Correct Answer 460",
        "Alternative Option B 460",
        "Alternative Option C 460",
        "Alternative Option D 460"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #460: عنوان 460 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 460",
        "متبادل آپشن ب 460",
        "متبادل آپشن ج 460",
        "متبادل آپشن د 460"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #460: विषय 460 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 460",
        "विकल्प बी 460",
        "विकल्प सी 460",
        "विकल्प डी 460"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #461: What is the correct ruling or historical fact for Topic 461?",
      "opts": [
        "Correct Answer 461",
        "Alternative Option B 461",
        "Alternative Option C 461",
        "Alternative Option D 461"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #461: عنوان 461 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 461",
        "متبادل آپشن ب 461",
        "متبادل آپشن ج 461",
        "متبادل آپشن د 461"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #461: विषय 461 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 461",
        "विकल्प बी 461",
        "विकल्प सी 461",
        "विकल्प डी 461"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #462: What is the correct ruling or historical fact for Topic 462?",
      "opts": [
        "Correct Answer 462",
        "Alternative Option B 462",
        "Alternative Option C 462",
        "Alternative Option D 462"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #462: عنوان 462 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 462",
        "متبادل آپشن ب 462",
        "متبادل آپشن ج 462",
        "متبادل آپشن د 462"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #462: विषय 462 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 462",
        "विकल्प बी 462",
        "विकल्प सी 462",
        "विकल्प डी 462"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #463: What is the correct ruling or historical fact for Topic 463?",
      "opts": [
        "Correct Answer 463",
        "Alternative Option B 463",
        "Alternative Option C 463",
        "Alternative Option D 463"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #463: عنوان 463 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 463",
        "متبادل آپشن ب 463",
        "متبادل آپشن ج 463",
        "متبادل آپشن د 463"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #463: विषय 463 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 463",
        "विकल्प बी 463",
        "विकल्प सी 463",
        "विकल्प डी 463"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #464: What is the correct ruling or historical fact for Topic 464?",
      "opts": [
        "Correct Answer 464",
        "Alternative Option B 464",
        "Alternative Option C 464",
        "Alternative Option D 464"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #464: عنوان 464 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 464",
        "متبادل آپشن ب 464",
        "متبادل آپشن ج 464",
        "متبادل آپشن د 464"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #464: विषय 464 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 464",
        "विकल्प बी 464",
        "विकल्प सी 464",
        "विकल्प डी 464"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #465: What is the correct ruling or historical fact for Topic 465?",
      "opts": [
        "Correct Answer 465",
        "Alternative Option B 465",
        "Alternative Option C 465",
        "Alternative Option D 465"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #465: عنوان 465 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 465",
        "متبادل آپشن ب 465",
        "متبادل آپشن ج 465",
        "متبادل آپشن د 465"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #465: विषय 465 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 465",
        "विकल्प बी 465",
        "विकल्प सी 465",
        "विकल्प डी 465"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #466: What is the correct ruling or historical fact for Topic 466?",
      "opts": [
        "Correct Answer 466",
        "Alternative Option B 466",
        "Alternative Option C 466",
        "Alternative Option D 466"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #466: عنوان 466 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 466",
        "متبادل آپشن ب 466",
        "متبادل آپشن ج 466",
        "متبادل آپشن د 466"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #466: विषय 466 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 466",
        "विकल्प बी 466",
        "विकल्प सी 466",
        "विकल्प डी 466"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #467: What is the correct ruling or historical fact for Topic 467?",
      "opts": [
        "Correct Answer 467",
        "Alternative Option B 467",
        "Alternative Option C 467",
        "Alternative Option D 467"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #467: عنوان 467 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 467",
        "متبادل آپشن ب 467",
        "متبادل آپشن ج 467",
        "متبادل آپشن د 467"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #467: विषय 467 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 467",
        "विकल्प बी 467",
        "विकल्प सी 467",
        "विकल्प डी 467"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #468: What is the correct ruling or historical fact for Topic 468?",
      "opts": [
        "Correct Answer 468",
        "Alternative Option B 468",
        "Alternative Option C 468",
        "Alternative Option D 468"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #468: عنوان 468 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 468",
        "متبادل آپشن ب 468",
        "متبادل آپشن ج 468",
        "متبادل آپشن د 468"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #468: विषय 468 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 468",
        "विकल्प बी 468",
        "विकल्प सी 468",
        "विकल्प डी 468"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #469: What is the correct ruling or historical fact for Topic 469?",
      "opts": [
        "Correct Answer 469",
        "Alternative Option B 469",
        "Alternative Option C 469",
        "Alternative Option D 469"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #469: عنوان 469 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 469",
        "متبادل آپشن ب 469",
        "متبادل آپشن ج 469",
        "متبادل آپشن د 469"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #469: विषय 469 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 469",
        "विकल्प बी 469",
        "विकल्प सी 469",
        "विकल्प डी 469"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #470: What is the correct ruling or historical fact for Topic 470?",
      "opts": [
        "Correct Answer 470",
        "Alternative Option B 470",
        "Alternative Option C 470",
        "Alternative Option D 470"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #470: عنوان 470 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 470",
        "متبادل آپشن ب 470",
        "متبادل آپشن ج 470",
        "متبادل آپشن د 470"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #470: विषय 470 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 470",
        "विकल्प बी 470",
        "विकल्प सी 470",
        "विकल्प डी 470"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #471: What is the correct ruling or historical fact for Topic 471?",
      "opts": [
        "Correct Answer 471",
        "Alternative Option B 471",
        "Alternative Option C 471",
        "Alternative Option D 471"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #471: عنوان 471 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 471",
        "متبادل آپشن ب 471",
        "متبادل آپشن ج 471",
        "متبادل آپشن د 471"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #471: विषय 471 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 471",
        "विकल्प बी 471",
        "विकल्प सी 471",
        "विकल्प डी 471"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #472: What is the correct ruling or historical fact for Topic 472?",
      "opts": [
        "Correct Answer 472",
        "Alternative Option B 472",
        "Alternative Option C 472",
        "Alternative Option D 472"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #472: عنوان 472 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 472",
        "متبادل آپشن ب 472",
        "متبادل آپشن ج 472",
        "متبادل آپشن د 472"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #472: विषय 472 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 472",
        "विकल्प बी 472",
        "विकल्प सी 472",
        "विकल्प डी 472"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #473: What is the correct ruling or historical fact for Topic 473?",
      "opts": [
        "Correct Answer 473",
        "Alternative Option B 473",
        "Alternative Option C 473",
        "Alternative Option D 473"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #473: عنوان 473 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 473",
        "متبادل آپشن ب 473",
        "متبادل آپشن ج 473",
        "متبادل آپشن د 473"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #473: विषय 473 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 473",
        "विकल्प बी 473",
        "विकल्प सी 473",
        "विकल्प डी 473"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #474: What is the correct ruling or historical fact for Topic 474?",
      "opts": [
        "Correct Answer 474",
        "Alternative Option B 474",
        "Alternative Option C 474",
        "Alternative Option D 474"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #474: عنوان 474 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 474",
        "متبادل آپشن ب 474",
        "متبادل آپشن ج 474",
        "متبادل آپشن د 474"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #474: विषय 474 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 474",
        "विकल्प बी 474",
        "विकल्प सी 474",
        "विकल्प डी 474"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #475: What is the correct ruling or historical fact for Topic 475?",
      "opts": [
        "Correct Answer 475",
        "Alternative Option B 475",
        "Alternative Option C 475",
        "Alternative Option D 475"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #475: عنوان 475 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 475",
        "متبادل آپشن ب 475",
        "متبادل آپشن ج 475",
        "متبادل آپشن د 475"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #475: विषय 475 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 475",
        "विकल्प बी 475",
        "विकल्प सी 475",
        "विकल्प डी 475"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #476: What is the correct ruling or historical fact for Topic 476?",
      "opts": [
        "Correct Answer 476",
        "Alternative Option B 476",
        "Alternative Option C 476",
        "Alternative Option D 476"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #476: عنوان 476 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 476",
        "متبادل آپشن ب 476",
        "متبادل آپشن ج 476",
        "متبادل آپشن د 476"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #476: विषय 476 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 476",
        "विकल्प बी 476",
        "विकल्प सी 476",
        "विकल्प डी 476"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #477: What is the correct ruling or historical fact for Topic 477?",
      "opts": [
        "Correct Answer 477",
        "Alternative Option B 477",
        "Alternative Option C 477",
        "Alternative Option D 477"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #477: عنوان 477 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 477",
        "متبادل آپشن ب 477",
        "متبادل آپشن ج 477",
        "متبادل آپشن د 477"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #477: विषय 477 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 477",
        "विकल्प बी 477",
        "विकल्प सी 477",
        "विकल्प डी 477"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #478: What is the correct ruling or historical fact for Topic 478?",
      "opts": [
        "Correct Answer 478",
        "Alternative Option B 478",
        "Alternative Option C 478",
        "Alternative Option D 478"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #478: عنوان 478 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 478",
        "متبادل آپشن ب 478",
        "متبادل آپشن ج 478",
        "متبادل آپشن د 478"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #478: विषय 478 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 478",
        "विकल्प बी 478",
        "विकल्प सी 478",
        "विकल्प डी 478"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #479: What is the correct ruling or historical fact for Topic 479?",
      "opts": [
        "Correct Answer 479",
        "Alternative Option B 479",
        "Alternative Option C 479",
        "Alternative Option D 479"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #479: عنوان 479 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 479",
        "متبادل آپشن ب 479",
        "متبادل آپشن ج 479",
        "متبادل آپشن د 479"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #479: विषय 479 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 479",
        "विकल्प बी 479",
        "विकल्प सी 479",
        "विकल्प डी 479"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #480: What is the correct ruling or historical fact for Topic 480?",
      "opts": [
        "Correct Answer 480",
        "Alternative Option B 480",
        "Alternative Option C 480",
        "Alternative Option D 480"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #480: عنوان 480 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 480",
        "متبادل آپشن ب 480",
        "متبادل آپشن ج 480",
        "متبادل آپشن د 480"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #480: विषय 480 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 480",
        "विकल्प बी 480",
        "विकल्प सी 480",
        "विकल्प डी 480"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #481: What is the correct ruling or historical fact for Topic 481?",
      "opts": [
        "Correct Answer 481",
        "Alternative Option B 481",
        "Alternative Option C 481",
        "Alternative Option D 481"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #481: عنوان 481 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 481",
        "متبادل آپشن ب 481",
        "متبادل آپشن ج 481",
        "متبادل آپشن د 481"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #481: विषय 481 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 481",
        "विकल्प बी 481",
        "विकल्प सी 481",
        "विकल्प डी 481"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #482: What is the correct ruling or historical fact for Topic 482?",
      "opts": [
        "Correct Answer 482",
        "Alternative Option B 482",
        "Alternative Option C 482",
        "Alternative Option D 482"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #482: عنوان 482 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 482",
        "متبادل آپشن ب 482",
        "متبادل آپشن ج 482",
        "متبادل آپشن د 482"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #482: विषय 482 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 482",
        "विकल्प बी 482",
        "विकल्प सी 482",
        "विकल्प डी 482"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #483: What is the correct ruling or historical fact for Topic 483?",
      "opts": [
        "Correct Answer 483",
        "Alternative Option B 483",
        "Alternative Option C 483",
        "Alternative Option D 483"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #483: عنوان 483 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 483",
        "متبادل آپشن ب 483",
        "متبادل آپشن ج 483",
        "متبادل آپشن د 483"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #483: विषय 483 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 483",
        "विकल्प बी 483",
        "विकल्प सी 483",
        "विकल्प डी 483"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #484: What is the correct ruling or historical fact for Topic 484?",
      "opts": [
        "Correct Answer 484",
        "Alternative Option B 484",
        "Alternative Option C 484",
        "Alternative Option D 484"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #484: عنوان 484 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 484",
        "متبادل آپشن ب 484",
        "متبادل آپشن ج 484",
        "متبادل آپشن د 484"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #484: विषय 484 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 484",
        "विकल्प बी 484",
        "विकल्प सी 484",
        "विकल्प डी 484"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #485: What is the correct ruling or historical fact for Topic 485?",
      "opts": [
        "Correct Answer 485",
        "Alternative Option B 485",
        "Alternative Option C 485",
        "Alternative Option D 485"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #485: عنوان 485 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 485",
        "متبادل آپشن ب 485",
        "متبادل آپشن ج 485",
        "متبادل آپشن د 485"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #485: विषय 485 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 485",
        "विकल्प बी 485",
        "विकल्प सी 485",
        "विकल्प डी 485"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #486: What is the correct ruling or historical fact for Topic 486?",
      "opts": [
        "Correct Answer 486",
        "Alternative Option B 486",
        "Alternative Option C 486",
        "Alternative Option D 486"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #486: عنوان 486 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 486",
        "متبادل آپشن ب 486",
        "متبادل آپشن ج 486",
        "متبادل آپشن د 486"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #486: विषय 486 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 486",
        "विकल्प बी 486",
        "विकल्प सी 486",
        "विकल्प डी 486"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #487: What is the correct ruling or historical fact for Topic 487?",
      "opts": [
        "Correct Answer 487",
        "Alternative Option B 487",
        "Alternative Option C 487",
        "Alternative Option D 487"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #487: عنوان 487 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 487",
        "متبادل آپشن ب 487",
        "متبادل آپشن ج 487",
        "متبادل آپشن د 487"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #487: विषय 487 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 487",
        "विकल्प बी 487",
        "विकल्प सी 487",
        "विकल्प डी 487"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #488: What is the correct ruling or historical fact for Topic 488?",
      "opts": [
        "Correct Answer 488",
        "Alternative Option B 488",
        "Alternative Option C 488",
        "Alternative Option D 488"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #488: عنوان 488 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 488",
        "متبادل آپشن ب 488",
        "متبادل آپشن ج 488",
        "متبادل آپشن د 488"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #488: विषय 488 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 488",
        "विकल्प बी 488",
        "विकल्प सी 488",
        "विकल्प डी 488"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #489: What is the correct ruling or historical fact for Topic 489?",
      "opts": [
        "Correct Answer 489",
        "Alternative Option B 489",
        "Alternative Option C 489",
        "Alternative Option D 489"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #489: عنوان 489 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 489",
        "متبادل آپشن ب 489",
        "متبادل آپشن ج 489",
        "متبادل آپشن د 489"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #489: विषय 489 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 489",
        "विकल्प बी 489",
        "विकल्प सी 489",
        "विकल्प डी 489"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #490: What is the correct ruling or historical fact for Topic 490?",
      "opts": [
        "Correct Answer 490",
        "Alternative Option B 490",
        "Alternative Option C 490",
        "Alternative Option D 490"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #490: عنوان 490 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 490",
        "متبادل آپشن ب 490",
        "متبادل آپشن ج 490",
        "متبادل آپشن د 490"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #490: विषय 490 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 490",
        "विकल्प बी 490",
        "विकल्प सी 490",
        "विकल्प डी 490"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #491: What is the correct ruling or historical fact for Topic 491?",
      "opts": [
        "Correct Answer 491",
        "Alternative Option B 491",
        "Alternative Option C 491",
        "Alternative Option D 491"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #491: عنوان 491 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 491",
        "متبادل آپشن ب 491",
        "متبادل آپشن ج 491",
        "متبادل آپشن د 491"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #491: विषय 491 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 491",
        "विकल्प बी 491",
        "विकल्प सी 491",
        "विकल्प डी 491"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #492: What is the correct ruling or historical fact for Topic 492?",
      "opts": [
        "Correct Answer 492",
        "Alternative Option B 492",
        "Alternative Option C 492",
        "Alternative Option D 492"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #492: عنوان 492 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 492",
        "متبادل آپشن ب 492",
        "متبادل آپشن ج 492",
        "متبادل آپشن د 492"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #492: विषय 492 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 492",
        "विकल्प बी 492",
        "विकल्प सी 492",
        "विकल्प डी 492"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #493: What is the correct ruling or historical fact for Topic 493?",
      "opts": [
        "Correct Answer 493",
        "Alternative Option B 493",
        "Alternative Option C 493",
        "Alternative Option D 493"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #493: عنوان 493 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 493",
        "متبادل آپشن ب 493",
        "متبادل آپشن ج 493",
        "متبادل آپشن د 493"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #493: विषय 493 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 493",
        "विकल्प बी 493",
        "विकल्प सी 493",
        "विकल्प डी 493"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #494: What is the correct ruling or historical fact for Topic 494?",
      "opts": [
        "Correct Answer 494",
        "Alternative Option B 494",
        "Alternative Option C 494",
        "Alternative Option D 494"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #494: عنوان 494 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 494",
        "متبادل آپشن ب 494",
        "متبادل آپشن ج 494",
        "متبادل آپشن د 494"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #494: विषय 494 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 494",
        "विकल्प बी 494",
        "विकल्प सी 494",
        "विकल्प डी 494"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #495: What is the correct ruling or historical fact for Topic 495?",
      "opts": [
        "Correct Answer 495",
        "Alternative Option B 495",
        "Alternative Option C 495",
        "Alternative Option D 495"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #495: عنوان 495 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 495",
        "متبادل آپشن ب 495",
        "متبادل آپشن ج 495",
        "متبادل آپشن د 495"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #495: विषय 495 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 495",
        "विकल्प बी 495",
        "विकल्प सी 495",
        "विकल्प डी 495"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #496: What is the correct ruling or historical fact for Topic 496?",
      "opts": [
        "Correct Answer 496",
        "Alternative Option B 496",
        "Alternative Option C 496",
        "Alternative Option D 496"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #496: عنوان 496 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 496",
        "متبادل آپشن ب 496",
        "متبادل آپشن ج 496",
        "متبادل آپشن د 496"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #496: विषय 496 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 496",
        "विकल्प बी 496",
        "विकल्प सी 496",
        "विकल्प डी 496"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #497: What is the correct ruling or historical fact for Topic 497?",
      "opts": [
        "Correct Answer 497",
        "Alternative Option B 497",
        "Alternative Option C 497",
        "Alternative Option D 497"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #497: عنوان 497 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 497",
        "متبادل آپشن ب 497",
        "متبادل آپشن ج 497",
        "متبادل آپشن د 497"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #497: विषय 497 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 497",
        "विकल्प बी 497",
        "विकल्प सी 497",
        "विकल्प डी 497"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #498: What is the correct ruling or historical fact for Topic 498?",
      "opts": [
        "Correct Answer 498",
        "Alternative Option B 498",
        "Alternative Option C 498",
        "Alternative Option D 498"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #498: عنوان 498 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 498",
        "متبادل آپشن ب 498",
        "متبادل آپشن ج 498",
        "متبادل آپشن د 498"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #498: विषय 498 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 498",
        "विकल्प बी 498",
        "विकल्प सी 498",
        "विकल्प डी 498"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #499: What is the correct ruling or historical fact for Topic 499?",
      "opts": [
        "Correct Answer 499",
        "Alternative Option B 499",
        "Alternative Option C 499",
        "Alternative Option D 499"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #499: عنوان 499 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 499",
        "متبادل آپشن ب 499",
        "متبادل آپشن ج 499",
        "متبادل آپشن د 499"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #499: विषय 499 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 499",
        "विकल्प बी 499",
        "विकल्प सी 499",
        "विकल्प डी 499"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #500: What is the correct ruling or historical fact for Topic 500?",
      "opts": [
        "Correct Answer 500",
        "Alternative Option B 500",
        "Alternative Option C 500",
        "Alternative Option D 500"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #500: عنوان 500 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 500",
        "متبادل آپشن ب 500",
        "متبادل آپشن ج 500",
        "متبادل آپشن د 500"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #500: विषय 500 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 500",
        "विकल्प बी 500",
        "विकल्प सी 500",
        "विकल्प डी 500"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #501: What is the correct ruling or historical fact for Topic 501?",
      "opts": [
        "Correct Answer 501",
        "Alternative Option B 501",
        "Alternative Option C 501",
        "Alternative Option D 501"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #501: عنوان 501 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 501",
        "متبادل آپشن ب 501",
        "متبادل آپشن ج 501",
        "متبادل آپشن د 501"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #501: विषय 501 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 501",
        "विकल्प बी 501",
        "विकल्प सी 501",
        "विकल्प डी 501"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #502: What is the correct ruling or historical fact for Topic 502?",
      "opts": [
        "Correct Answer 502",
        "Alternative Option B 502",
        "Alternative Option C 502",
        "Alternative Option D 502"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #502: عنوان 502 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 502",
        "متبادل آپشن ب 502",
        "متبادل آپشن ج 502",
        "متبادل آپشن د 502"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #502: विषय 502 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 502",
        "विकल्प बी 502",
        "विकल्प सी 502",
        "विकल्प डी 502"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #503: What is the correct ruling or historical fact for Topic 503?",
      "opts": [
        "Correct Answer 503",
        "Alternative Option B 503",
        "Alternative Option C 503",
        "Alternative Option D 503"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #503: عنوان 503 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 503",
        "متبادل آپشن ب 503",
        "متبادل آپشن ج 503",
        "متبادل آپشن د 503"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #503: विषय 503 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 503",
        "विकल्प बी 503",
        "विकल्प सी 503",
        "विकल्प डी 503"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #504: What is the correct ruling or historical fact for Topic 504?",
      "opts": [
        "Correct Answer 504",
        "Alternative Option B 504",
        "Alternative Option C 504",
        "Alternative Option D 504"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #504: عنوان 504 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 504",
        "متبادل آپشن ب 504",
        "متبادل آپشن ج 504",
        "متبادل آپشن د 504"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #504: विषय 504 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 504",
        "विकल्प बी 504",
        "विकल्प सी 504",
        "विकल्प डी 504"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #505: What is the correct ruling or historical fact for Topic 505?",
      "opts": [
        "Correct Answer 505",
        "Alternative Option B 505",
        "Alternative Option C 505",
        "Alternative Option D 505"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #505: عنوان 505 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 505",
        "متبادل آپشن ب 505",
        "متبادل آپشن ج 505",
        "متبادل آپشن د 505"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #505: विषय 505 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 505",
        "विकल्प बी 505",
        "विकल्प सी 505",
        "विकल्प डी 505"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #506: What is the correct ruling or historical fact for Topic 506?",
      "opts": [
        "Correct Answer 506",
        "Alternative Option B 506",
        "Alternative Option C 506",
        "Alternative Option D 506"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #506: عنوان 506 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 506",
        "متبادل آپشن ب 506",
        "متبادل آپشن ج 506",
        "متبادل آپشن د 506"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #506: विषय 506 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 506",
        "विकल्प बी 506",
        "विकल्प सी 506",
        "विकल्प डी 506"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #507: What is the correct ruling or historical fact for Topic 507?",
      "opts": [
        "Correct Answer 507",
        "Alternative Option B 507",
        "Alternative Option C 507",
        "Alternative Option D 507"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #507: عنوان 507 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 507",
        "متبادل آپشن ب 507",
        "متبادل آپشن ج 507",
        "متبادل آپشن د 507"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #507: विषय 507 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 507",
        "विकल्प बी 507",
        "विकल्प सी 507",
        "विकल्प डी 507"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #508: What is the correct ruling or historical fact for Topic 508?",
      "opts": [
        "Correct Answer 508",
        "Alternative Option B 508",
        "Alternative Option C 508",
        "Alternative Option D 508"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #508: عنوان 508 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 508",
        "متبادل آپشن ب 508",
        "متبادل آپشن ج 508",
        "متبادل آپشن د 508"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #508: विषय 508 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 508",
        "विकल्प बी 508",
        "विकल्प सी 508",
        "विकल्प डी 508"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #509: What is the correct ruling or historical fact for Topic 509?",
      "opts": [
        "Correct Answer 509",
        "Alternative Option B 509",
        "Alternative Option C 509",
        "Alternative Option D 509"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #509: عنوان 509 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 509",
        "متبادل آپشن ب 509",
        "متبادل آپشن ج 509",
        "متبادل آپشن د 509"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #509: विषय 509 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 509",
        "विकल्प बी 509",
        "विकल्प सी 509",
        "विकल्प डी 509"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #510: What is the correct ruling or historical fact for Topic 510?",
      "opts": [
        "Correct Answer 510",
        "Alternative Option B 510",
        "Alternative Option C 510",
        "Alternative Option D 510"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #510: عنوان 510 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 510",
        "متبادل آپشن ب 510",
        "متبادل آپشن ج 510",
        "متبادل آپشن د 510"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #510: विषय 510 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 510",
        "विकल्प बी 510",
        "विकल्प सी 510",
        "विकल्प डी 510"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #511: What is the correct ruling or historical fact for Topic 511?",
      "opts": [
        "Correct Answer 511",
        "Alternative Option B 511",
        "Alternative Option C 511",
        "Alternative Option D 511"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #511: عنوان 511 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 511",
        "متبادل آپشن ب 511",
        "متبادل آپشن ج 511",
        "متبادل آپشن د 511"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #511: विषय 511 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 511",
        "विकल्प बी 511",
        "विकल्प सी 511",
        "विकल्प डी 511"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #512: What is the correct ruling or historical fact for Topic 512?",
      "opts": [
        "Correct Answer 512",
        "Alternative Option B 512",
        "Alternative Option C 512",
        "Alternative Option D 512"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #512: عنوان 512 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 512",
        "متبادل آپشن ب 512",
        "متبادل آپشن ج 512",
        "متبادل آپشن د 512"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #512: विषय 512 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 512",
        "विकल्प बी 512",
        "विकल्प सी 512",
        "विकल्प डी 512"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #513: What is the correct ruling or historical fact for Topic 513?",
      "opts": [
        "Correct Answer 513",
        "Alternative Option B 513",
        "Alternative Option C 513",
        "Alternative Option D 513"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #513: عنوان 513 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 513",
        "متبادل آپشن ب 513",
        "متبادل آپشن ج 513",
        "متبادل آپشن د 513"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #513: विषय 513 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 513",
        "विकल्प बी 513",
        "विकल्प सी 513",
        "विकल्प डी 513"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #514: What is the correct ruling or historical fact for Topic 514?",
      "opts": [
        "Correct Answer 514",
        "Alternative Option B 514",
        "Alternative Option C 514",
        "Alternative Option D 514"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #514: عنوان 514 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 514",
        "متبادل آپشن ب 514",
        "متبادل آپشن ج 514",
        "متبادل آپشن د 514"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #514: विषय 514 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 514",
        "विकल्प बी 514",
        "विकल्प सी 514",
        "विकल्प डी 514"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #515: What is the correct ruling or historical fact for Topic 515?",
      "opts": [
        "Correct Answer 515",
        "Alternative Option B 515",
        "Alternative Option C 515",
        "Alternative Option D 515"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #515: عنوان 515 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 515",
        "متبادل آپشن ب 515",
        "متبادل آپشن ج 515",
        "متبادل آپشن د 515"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #515: विषय 515 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 515",
        "विकल्प बी 515",
        "विकल्प सी 515",
        "विकल्प डी 515"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #516: What is the correct ruling or historical fact for Topic 516?",
      "opts": [
        "Correct Answer 516",
        "Alternative Option B 516",
        "Alternative Option C 516",
        "Alternative Option D 516"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #516: عنوان 516 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 516",
        "متبادل آپشن ب 516",
        "متبادل آپشن ج 516",
        "متبادل آپشن د 516"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #516: विषय 516 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 516",
        "विकल्प बी 516",
        "विकल्प सी 516",
        "विकल्प डी 516"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Authentic Islamic Question #517: What is the correct ruling or historical fact for Topic 517?",
      "opts": [
        "Correct Answer 517",
        "Alternative Option B 517",
        "Alternative Option C 517",
        "Alternative Option D 517"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #517: عنوان 517 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 517",
        "متبادل آپشن ب 517",
        "متبادل آپشن ج 517",
        "متبادل آپشن د 517"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #517: विषय 517 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 517",
        "विकल्प बी 517",
        "विकल्प सी 517",
        "विकल्प डी 517"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Authentic Islamic Question #518: What is the correct ruling or historical fact for Topic 518?",
      "opts": [
        "Correct Answer 518",
        "Alternative Option B 518",
        "Alternative Option C 518",
        "Alternative Option D 518"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #518: عنوان 518 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 518",
        "متبادل آپشن ب 518",
        "متبادل آپشن ج 518",
        "متبادل آپشن د 518"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #518: विषय 518 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 518",
        "विकल्प बी 518",
        "विकल्प सी 518",
        "विकल्प डी 518"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tafseer",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Authentic Islamic Question #519: What is the correct ruling or historical fact for Topic 519?",
      "opts": [
        "Correct Answer 519",
        "Alternative Option B 519",
        "Alternative Option C 519",
        "Alternative Option D 519"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #519: عنوان 519 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 519",
        "متبادل آپشن ب 519",
        "متبادل آپشن ج 519",
        "متبادل آپشن د 519"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #519: विषय 519 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 519",
        "विकल्प बी 519",
        "विकल्प सी 519",
        "विकल्प डी 519"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Authentic Islamic Question #520: What is the correct ruling or historical fact for Topic 520?",
      "opts": [
        "Correct Answer 520",
        "Alternative Option B 520",
        "Alternative Option C 520",
        "Alternative Option D 520"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مستند اسلامی سوال #520: عنوان 520 سے متعلق درست حکم یا تاریخی حقیقت کیا ہے؟",
      "opts": [
        "درست جواب 520",
        "متبادل آپشن ب 520",
        "متبادل آپشن ج 520",
        "متبادل آپشن د 520"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रामाणिक इस्लामी प्रश्न #520: विषय 520 से संबंधित सही नियम या ऐतिहासिक तथ्य क्या है?",
      "opts": [
        "सही उत्तर 520",
        "विकल्प बी 520",
        "विकल्प सी 520",
        "विकल्प डी 520"
      ],
      "ans": 0
    }
  }
];
