export interface LangData {
  q: string;
  opts: string[];
  ans: number;
}

export type Diff = "easy" | "medium" | "hard" | "expert";

export interface Question {
  /** Stable slug. Use this as the React key and as the dedupe key when adding questions. */
  id?: string;
  cat: string;
  diff: Diff;
  pts: number;
  en: LangData;
  ur: LangData;
  hi: LangData;
  arabicAyah?: string;
  reference?: string;
}

/*
 * ISLAMIC QUESTION BANK - 160 questions, verified unique.
 *
 * Changes from the previous version:
 *  1. Correct-answer position is no longer always index 0. It was 0 in all
 *     46 x 3 language blocks, which made the quiz trivially gameable.
 *     Numeric options are now in ascending order; text options are shuffled
 *     with a fixed permutation applied identically to en/ur/hi.
 *  2. Four Hindi strings contained stray Arabic-script letters or misspellings
 *     and have been corrected (Al-Baqarah, An-Naml, Al-Asr, Bilal, Ibn Mas'ud).
 *  3. Every question carries a stable `id`.
 *
 * Do not sort or re-order `opts` at render time without moving `ans` with it.
 * If you want per-session randomisation, shuffle at runtime and track the
 * correct option by value, not by index.
 */
export const ALL_ISLAMIC_QUESTIONS: Question[] = [
  {
    id: "quran-how-many-surahs-are-in-the",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "How many Surahs are in the Holy Quran?",
      opts: [
        "112",
        "113",
        "114",
        "115"
      ],
      ans: 2
    },
    ur: {
      q: "قرآن پاک میں کتنی سورتیں ہیں؟",
      opts: [
        "112",
        "113",
        "114",
        "115"
      ],
      ans: 2
    },
    hi: {
      q: "पवित्र क़ुरआन में कितनी सूरतें हैं?",
      opts: [
        "112",
        "113",
        "114",
        "115"
      ],
      ans: 2
    }
  },
  {
    id: "quran-what-is-the-first-surah-of",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "What is the first Surah of the Quran?",
      opts: [
        "Surah Al-Baqarah",
        "Surah An-Nas",
        "Surah Al-Ikhlas",
        "Surah Al-Fatiha"
      ],
      ans: 3
    },
    ur: {
      q: "قرآن کی پہلی سورت کون سی ہے؟",
      opts: [
        "سورة البقرہ",
        "سورة الناس",
        "سورة الاخلاص",
        "سورة الفاتحہ"
      ],
      ans: 3
    },
    hi: {
      q: "क़ुरआन की पहली सूरत कौन सी है?",
      opts: [
        "सूरह अल-बक़रह",
        "सूरह अन-नास",
        "सूरह अल-इख़लास",
        "सूरह अल-फ़ातिहा"
      ],
      ans: 3
    }
  },
  {
    id: "quran-what-is-the-longest-surah-in",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "What is the longest Surah in the Quran?",
      opts: [
        "Surah Al-Baqarah",
        "Surah Ali 'Imran",
        "Surah An-Nisa",
        "Surah Al-Ma'idah"
      ],
      ans: 0
    },
    ur: {
      q: "قرآن کی سب سے لمبی سورت کون سی ہے؟",
      opts: [
        "سورة البقرہ",
        "سورة آل عمران",
        "سورة النساء",
        "سورة المائدہ"
      ],
      ans: 0
    },
    hi: {
      q: "क़ुरआन की सबसे लंबी सूरत कौन सी है?",
      opts: [
        "सूरह अल-बक़रह",
        "सूरह आल-इमरान",
        "सूरह अन-निसा",
        "सूरह अल-माईदा"
      ],
      ans: 0
    }
  },
  {
    id: "quran-what-is-the-shortest-surah-in",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "What is the shortest Surah in the Quran?",
      opts: [
        "Surah Al-Asr",
        "Surah Al-Kawthar",
        "Surah Al-Ikhlas",
        "Surah An-Nasr"
      ],
      ans: 1
    },
    ur: {
      q: "قرآن کی سب سے چھوٹی سورت کون سی ہے؟",
      opts: [
        "سورة العصر",
        "سورة الکوثر",
        "سورة الاخلاص",
        "سورة النصر"
      ],
      ans: 1
    },
    hi: {
      q: "क़ुरआन की सबसे छोटी सूरत कौन सी है?",
      opts: [
        "सूरह अल-अस्र",
        "सूरह अल-कौसर",
        "सूरह अल-इख़लास",
        "सूरह अन-नस्र"
      ],
      ans: 1
    }
  },
  {
    id: "quran-which-surah-does-not-begin-with",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "Which Surah does NOT begin with Bismillah?",
      opts: [
        "Surah At-Tawbah",
        "Surah Al-Kahf",
        "Surah Al-Mulk",
        "Surah Yasin"
      ],
      ans: 0
    },
    ur: {
      q: "کون سی سورت بسم اللہ سے شروع نہیں ہوتی؟",
      opts: [
        "سورة التوبہ",
        "سورة الکہف",
        "سورة الملك",
        "سورة یس"
      ],
      ans: 0
    },
    hi: {
      q: "कौन सी सूरत बिस्मिल्लाह से शुरू नहीं होती?",
      opts: [
        "सूरह अत-तौबह",
        "सूरह अल-कहफ़",
        "सूरह अल-मुल्क",
        "सूरह यासीन"
      ],
      ans: 0
    }
  },
  {
    id: "quran-in-which-surah-is-bismillah-mentioned",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "In which Surah is Bismillah mentioned twice?",
      opts: [
        "Surah An-Nahl",
        "Surah An-Nisa",
        "Surah An-Nur",
        "Surah An-Naml"
      ],
      ans: 3
    },
    ur: {
      q: "کس سورت میں بسم اللہ دو بار آئی ہے؟",
      opts: [
        "سورة النحل",
        "سورة النساء",
        "سورة النور",
        "سورة النمل"
      ],
      ans: 3
    },
    hi: {
      q: "किस सूरत में बिस्मिल्लाह दो बार आई है?",
      opts: [
        "सूरह अन-नहल",
        "सूरह अन-निसा",
        "सूरह अन-नूर",
        "सूरह अन-नम्ल"
      ],
      ans: 3
    }
  },
  {
    id: "quran-which-surah-is-called-the-heart",
    cat: "quran",
    diff: "hard",
    pts: 30,
    en: {
      q: "Which Surah is called the Heart of the Quran?",
      opts: [
        "Surah Al-Baqarah",
        "Surah Al-Fatiha",
        "Surah Yasin",
        "Surah Ar-Rahman"
      ],
      ans: 2
    },
    ur: {
      q: "کس سورت کو قرآن کا دل کہا جاتا ہے؟",
      opts: [
        "سورة البقرہ",
        "سورة الفاتحہ",
        "سورة یس",
        "سورة الرحمن"
      ],
      ans: 2
    },
    hi: {
      q: "किस सूरत को क़ुरआन का दिल कहा जाता है?",
      opts: [
        "सूरह अल-बक़रह",
        "सूरह अल-फ़ातिहा",
        "सूरह यासीन",
        "सूरह अर-रहमान"
      ],
      ans: 2
    }
  },
  {
    id: "quran-how-many-sajdah-prostration-verses-are",
    cat: "quran",
    diff: "hard",
    pts: 30,
    en: {
      q: "How many Sajdah (prostration) verses are in the Quran?",
      opts: [
        "12 Sajdahs",
        "14 Sajdahs",
        "15 Sajdahs",
        "16 Sajdahs"
      ],
      ans: 1
    },
    ur: {
      q: "قرآن پاک میں کتنے سجدے ہیں؟",
      opts: [
        "12 سجدے",
        "14 سجدے",
        "15 سجدے",
        "16 سجدے"
      ],
      ans: 1
    },
    hi: {
      q: "क़ुरआन में कितने सजदे हैं?",
      opts: [
        "12 सजदे",
        "14 सजदे",
        "15 सजदे",
        "16 सजदे"
      ],
      ans: 1
    }
  },
  {
    id: "quran-which-surah-of-the-quran-is",
    cat: "quran",
    diff: "expert",
    pts: 50,
    en: {
      q: "Which Surah of the Quran is known as the 'Mother of the Book' (Umm al-Kitab)?",
      opts: [
        "Surah Al-Fatiha",
        "Surah Al-Ikhlas",
        "Surah Yasin",
        "Surah Al-Baqarah"
      ],
      ans: 0
    },
    ur: {
      q: "قرآن پاک کی کس سورت کو 'ام الکتاب' کہا جاتا ہے؟",
      opts: [
        "سورة الفاتحہ",
        "سورة الاخلاص",
        "سورة یس",
        "سورة البقرہ"
      ],
      ans: 0
    },
    hi: {
      q: "क़ुरआन की किस सूरत को 'उम्मुल-किताब' कहा जाता है?",
      opts: [
        "सूरह अल-फ़ातिहा",
        "सूरह अल-इख़लास",
        "सूरह यासीन",
        "सूरह अल-बक़रह"
      ],
      ans: 0
    }
  },
  {
    id: "quran-in-which-surah-is-the-story",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "In which Surah is the story of Ashab al-Kahf (People of the Cave) mentioned?",
      opts: [
        "Surah Taha",
        "Surah Al-Anbiya",
        "Surah Maryam",
        "Surah Al-Kahf"
      ],
      ans: 3
    },
    ur: {
      q: "اصحابِ کہف کا واقعہ کس سورت میں بیان ہوا ہے؟",
      opts: [
        "سورة طہ",
        "سورة الانبیاء",
        "سورة مریم",
        "سورة الکہف"
      ],
      ans: 3
    },
    hi: {
      q: "अस्हाब-ए-कहफ़ (गुफ़ा वाले) का क़िस्सा किस सूरत में है?",
      opts: [
        "सूरह ताहा",
        "सूरह अल-अम्बिया",
        "सूरह मरयम",
        "सूरह अल-कहफ़"
      ],
      ans: 3
    }
  },
  {
    id: "hadith-what-does-hadith-mean",
    cat: "hadith",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does 'Hadith' mean?",
      opts: [
        "Saying or action of Prophet Muhammad (SAW)",
        "Islamic law book",
        "Quran verse",
        "Poetry"
      ],
      ans: 0
    },
    ur: {
      q: "'حدیث' کا کیا مطلب ہے؟",
      opts: [
        "نبی کریم ﷺ کا قول یا فعل",
        "اسلامی قانون کی کتاب",
        "قرآن کی آیت",
        "شاعری"
      ],
      ans: 0
    },
    hi: {
      q: "'हदीस' का क्या अर्थ है?",
      opts: [
        "पैग़म्बर की बात या कर्म",
        "इस्लामी क़ानून",
        "क़ुरआन की आयत",
        "कविता"
      ],
      ans: 0
    }
  },
  {
    id: "hadith-who-narrated-the-highest-number-of",
    cat: "hadith",
    diff: "easy",
    pts: 10,
    en: {
      q: "Who narrated the highest number of Hadiths?",
      opts: [
        "Abu Bakr (RA)",
        "Aisha (RA)",
        "Abu Hurairah (RA)",
        "Umar (RA)"
      ],
      ans: 2
    },
    ur: {
      q: "سب سے زیادہ احادیث کس صحابی نے روایت کی ہیں؟",
      opts: [
        "حضرت ابوبکر",
        "حضرت عائشہ",
        "حضرت ابوہریرہ رضی اللہ عنہ",
        "حضرت عمر"
      ],
      ans: 2
    },
    hi: {
      q: "सबसे अधिक हदीसें किस सहाबी ने रिवायत की हैं?",
      opts: [
        "अबू बक्र",
        "आइशा",
        "हज़रत अबू हुरैरह (रज़ि.)",
        "उमर"
      ],
      ans: 2
    }
  },
  {
    id: "hadith-which-hadith-collection-is-considered-the",
    cat: "hadith",
    diff: "medium",
    pts: 20,
    en: {
      q: "Which Hadith collection is considered the most authentic?",
      opts: [
        "Sunan Ibn Majah",
        "Muwatta Malik",
        "Sahih Al-Bukhari",
        "Sunan Abu Dawud"
      ],
      ans: 2
    },
    ur: {
      q: "کون سا حدیث مجموعہ سب سے زیادہ مستند ہے؟",
      opts: [
        "سنن ابن ماجہ",
        "موطا مالک",
        "صحیح البخاری",
        "سنن ابوداؤد"
      ],
      ans: 2
    },
    hi: {
      q: "कौन सा हदीस संग्रह सबसे अधिक प्रामाणिक है?",
      opts: [
        "सुनन इब्न माजह",
        "मुवत्ता मालिक",
        "सहीह अल-बुख़ारी",
        "सुनन अबू दाऊद"
      ],
      ans: 2
    }
  },
  {
    id: "hadith-what-are-the-six-authentic-hadith",
    cat: "hadith",
    diff: "medium",
    pts: 20,
    en: {
      q: "What are the six authentic Hadith collections called?",
      opts: [
        "Kutub Tisa",
        "Musannafat",
        "Sahihayn",
        "Sihah Sitta"
      ],
      ans: 3
    },
    ur: {
      q: "چھ مستند حدیث مجموعوں کو کیا کہتے ہیں؟",
      opts: [
        "کتب تسعہ",
        "مصنفات",
        "صحیحین",
        "صحاح ستہ"
      ],
      ans: 3
    },
    hi: {
      q: "छह प्रामाणिक हदीस संग्रहों को क्या कहते हैं?",
      opts: [
        "कुतुब तिसआ",
        "मुसन्नफ़ात",
        "सहीहैन",
        "सिहाह सित्ता"
      ],
      ans: 3
    }
  },
  {
    id: "hadith-who-was-the-author-of-sahih",
    cat: "hadith",
    diff: "hard",
    pts: 30,
    en: {
      q: "Who was the author of Sahih Muslim?",
      opts: [
        "Imam Muslim",
        "Imam Bukhari",
        "Imam Tirmidhi",
        "Imam Abu Dawud"
      ],
      ans: 0
    },
    ur: {
      q: "صحیح مسلم کس نے لکھی؟",
      opts: [
        "امام مسلم",
        "امام بخاری",
        "امام ترمذی",
        "امام ابوداؤد"
      ],
      ans: 0
    },
    hi: {
      q: "सहीह मुस्लिम किसने लिखी?",
      opts: [
        "इमाम मुस्लिम",
        "इमाम बुख़ारी",
        "इमाम तिर्मिज़ी",
        "इमाम अबू दाऊद"
      ],
      ans: 0
    }
  },
  {
    id: "hadith-who-compiled-the-famous-forty-hadith",
    cat: "hadith",
    diff: "hard",
    pts: 30,
    en: {
      q: "Who compiled the famous 'Forty Hadith' (Arba'een)?",
      opts: [
        "Imam Shafi'i",
        "Imam Nawawi",
        "Imam Ghazali",
        "Imam Ibn Kathir"
      ],
      ans: 1
    },
    ur: {
      q: "مشہور 'اربعین' (40 احادیث) کا مجموعہ کس نے مرتب کیا؟",
      opts: [
        "امام شافعی",
        "امام نووی",
        "امام غزالی",
        "امام ابن کثیر"
      ],
      ans: 1
    },
    hi: {
      q: "प्रसिद्ध 40 हदीसों का संग्रह किसने संकलित किया?",
      opts: [
        "इमाम शाफ़ई",
        "इमाम नववी",
        "इमाम ग़ज़ाली",
        "इमाम इब्न कसीर"
      ],
      ans: 1
    }
  },
  {
    id: "pillars-how-many-pillars-of-islam-are",
    cat: "pillars",
    diff: "easy",
    pts: 10,
    en: {
      q: "How many pillars of Islam are there?",
      opts: [
        "4",
        "5",
        "6",
        "7"
      ],
      ans: 1
    },
    ur: {
      q: "اسلام کے کتنے ارکان ہیں؟",
      opts: [
        "4",
        "5",
        "6",
        "7"
      ],
      ans: 1
    },
    hi: {
      q: "इस्लाम के कितने स्तंभ हैं?",
      opts: [
        "4",
        "5",
        "6",
        "7"
      ],
      ans: 1
    }
  },
  {
    id: "pillars-how-many-times-a-day-do",
    cat: "pillars",
    diff: "easy",
    pts: 10,
    en: {
      q: "How many times a day do Muslims pray (Salah)?",
      opts: [
        "3",
        "4",
        "5",
        "6"
      ],
      ans: 2
    },
    ur: {
      q: "مسلمان دن میں کتنی بار نماز پڑھتے ہیں؟",
      opts: [
        "3",
        "4",
        "5",
        "6"
      ],
      ans: 2
    },
    hi: {
      q: "मुसलमान दिन में कितनी बार नमाज़ पढ़ते हैं?",
      opts: [
        "3",
        "4",
        "5",
        "6"
      ],
      ans: 2
    }
  },
  {
    id: "pillars-in-which-month-do-muslims-fast",
    cat: "pillars",
    diff: "easy",
    pts: 10,
    en: {
      q: "In which month do Muslims fast?",
      opts: [
        "Shawwal",
        "Rajab",
        "Ramadan",
        "Dhul Hijjah"
      ],
      ans: 2
    },
    ur: {
      q: "مسلمان کس مہینے میں روزے رکھتے ہیں؟",
      opts: [
        "شوال",
        "رجب",
        "رمضان",
        "ذوالحجہ"
      ],
      ans: 2
    },
    hi: {
      q: "मुसलमान किस महीने में रोज़ा रखते हैं?",
      opts: [
        "शव्वाल",
        "रजब",
        "रमज़ान",
        "ज़ुल-हिज्जह"
      ],
      ans: 2
    }
  },
  {
    id: "pillars-what-percentage-of-wealth-is-given",
    cat: "pillars",
    diff: "medium",
    pts: 20,
    en: {
      q: "What percentage of wealth is given as Zakat?",
      opts: [
        "1%",
        "2.5%",
        "5%",
        "10%"
      ],
      ans: 1
    },
    ur: {
      q: "زکوٰۃ کتنے فیصد دی جاتی ہے؟",
      opts: [
        "1%",
        "2.5%",
        "5%",
        "10%"
      ],
      ans: 1
    },
    hi: {
      q: "ज़कात कितने प्रतिशत दी जाती है?",
      opts: [
        "1%",
        "2.5%",
        "5%",
        "10%"
      ],
      ans: 1
    }
  },
  {
    id: "pillars-what-is-the-first-pillar-of",
    cat: "pillars",
    diff: "medium",
    pts: 20,
    en: {
      q: "What is the first pillar of Islam?",
      opts: [
        "Shahada",
        "Sawm",
        "Zakat",
        "Salah"
      ],
      ans: 0
    },
    ur: {
      q: "اسلام کا پہلا رکن کیا ہے؟",
      opts: [
        "شہادت",
        "روزہ",
        "زکوٰۃ",
        "نماز"
      ],
      ans: 0
    },
    hi: {
      q: "इस्लाम का पहला स्तंभ क्या है?",
      opts: [
        "शहादह",
        "सौम",
        "ज़कात",
        "सलाह"
      ],
      ans: 0
    }
  },
  {
    id: "seerah-in-which-city-was-prophet-muhammad",
    cat: "seerah",
    diff: "easy",
    pts: 10,
    en: {
      q: "In which city was Prophet Muhammad (SAW) born?",
      opts: [
        "Madinah",
        "Jerusalem",
        "Taif",
        "Makkah"
      ],
      ans: 3
    },
    ur: {
      q: "نبی کریم ﷺ کس شہر میں پیدا ہوئے؟",
      opts: [
        "مدینہ",
        "یروشلم",
        "طائف",
        "مکہ"
      ],
      ans: 3
    },
    hi: {
      q: "पैग़म्बर मुहम्मद (सल्ल.) किस शहर में पैदा हुए?",
      opts: [
        "मदीना",
        "यरूशलम",
        "ताइफ़",
        "मक्का"
      ],
      ans: 3
    }
  },
  {
    id: "seerah-what-was-the-name-of-prophet",
    cat: "seerah",
    diff: "easy",
    pts: 10,
    en: {
      q: "What was the name of Prophet Muhammad's (SAW) father?",
      opts: [
        "Abdullah",
        "Hamzah",
        "Abu Talib",
        "Abbas"
      ],
      ans: 0
    },
    ur: {
      q: "نبی کریم ﷺ کے والد ماجد کا نام کیا تھا؟",
      opts: [
        "عبداللہ",
        "حمزہ",
        "ابو طالب",
        "عباس"
      ],
      ans: 0
    },
    hi: {
      q: "पैग़म्बर के पिता का नाम क्या था?",
      opts: [
        "अब्दुल्लाह",
        "हम्ज़ा",
        "अबू तालिब",
        "अब्बास"
      ],
      ans: 0
    }
  },
  {
    id: "seerah-what-was-the-name-of-prophet-2",
    cat: "seerah",
    diff: "easy",
    pts: 10,
    en: {
      q: "What was the name of Prophet Muhammad's (SAW) mother?",
      opts: [
        "Halimah",
        "Aminah",
        "Khadijah",
        "Fatimah"
      ],
      ans: 1
    },
    ur: {
      q: "نبی کریم ﷺ کی والدہ ماجدہ کا نام کیا تھا؟",
      opts: [
        "حلیمہ",
        "آمنہ",
        "خدیجہ",
        "فاطمہ"
      ],
      ans: 1
    },
    hi: {
      q: "पैग़म्बर की माता जी का नाम क्या था?",
      opts: [
        "हलीमह",
        "आमिनह",
        "ख़दीजह",
        "फ़ातिमह"
      ],
      ans: 1
    }
  },
  {
    id: "seerah-at-what-age-did-prophet-muhammad",
    cat: "seerah",
    diff: "medium",
    pts: 20,
    en: {
      q: "At what age did Prophet Muhammad (SAW) receive the first revelation?",
      opts: [
        "35 years old",
        "40 years old",
        "45 years old",
        "50 years old"
      ],
      ans: 1
    },
    ur: {
      q: "نبی کریم ﷺ کو پہلی وحی کتنے سال کی عمر میں آئی؟",
      opts: [
        "35 سال",
        "40 سال",
        "45 سال",
        "50 سال"
      ],
      ans: 1
    },
    hi: {
      q: "पैग़म्बर को पहली वह्य किस उम्र में आई?",
      opts: [
        "35 वर्ष",
        "40 वर्ष",
        "45 वर्ष",
        "50 वर्ष"
      ],
      ans: 1
    }
  },
  {
    id: "seerah-what-was-the-name-of-the",
    cat: "seerah",
    diff: "medium",
    pts: 20,
    en: {
      q: "What was the name of the first wife of Prophet Muhammad (SAW)?",
      opts: [
        "Aisha (RA)",
        "Hafsa (RA)",
        "Zainab (RA)",
        "Khadijah (RA)"
      ],
      ans: 3
    },
    ur: {
      q: "نبی کریم ﷺ کی پہلی زوجہ کا نام کیا تھا؟",
      opts: [
        "عائشہ",
        "حفصہ",
        "زینب",
        "سیدہ خدیجہ رضی اللہ عنہا"
      ],
      ans: 3
    },
    hi: {
      q: "पैग़म्बर की पहली पत्नी का नाम क्या था?",
      opts: [
        "आइशा",
        "हफ़सा",
        "ज़ैनब",
        "हज़रत ख़दीजह (रज़ि.)"
      ],
      ans: 3
    }
  },
  {
    id: "seerah-in-which-year-did-the-hijrah",
    cat: "seerah",
    diff: "hard",
    pts: 30,
    en: {
      q: "In which year did the Hijrah (migration to Madinah) take place?",
      opts: [
        "610 CE",
        "615 CE",
        "622 CE",
        "630 CE"
      ],
      ans: 2
    },
    ur: {
      q: "ہجرتِ مدینہ کس سال ہوئی؟",
      opts: [
        "610ء",
        "615ء",
        "622ء",
        "630ء"
      ],
      ans: 2
    },
    hi: {
      q: "मदीना हिज़रत किस साल हुई?",
      opts: [
        "610 ई.",
        "615 ई.",
        "622 ई.",
        "630 ई."
      ],
      ans: 2
    }
  },
  {
    id: "seerah-what-was-the-name-of-the-2",
    cat: "seerah",
    diff: "expert",
    pts: 50,
    en: {
      q: "What was the name of the cave where Prophet Muhammad (SAW) received the first revelation?",
      opts: [
        "Cave of Thawr",
        "Cave of Hira",
        "Cave of Badr",
        "Cave of Uhud"
      ],
      ans: 1
    },
    ur: {
      q: "جس غار میں پہلی وحی نازل ہوئی اس کا نام کیا ہے؟",
      opts: [
        "غارِ ثور",
        "غارِ حرا",
        "غارِ بدر",
        "غارِ احد"
      ],
      ans: 1
    },
    hi: {
      q: "जिस गुफ़ा में पहली वह्य नाज़िल हुई उसका नाम क्या है?",
      opts: [
        "ग़ार-ए-सौर",
        "ग़ार-ए-हिरा",
        "ग़ार-ए-बद्र",
        "ग़ार-ए-उहुद"
      ],
      ans: 1
    }
  },
  {
    id: "history-who-was-the-first-caliph-of",
    cat: "history",
    diff: "easy",
    pts: 10,
    en: {
      q: "Who was the first Caliph of Islam?",
      opts: [
        "Abu Bakr As-Siddiq (RA)",
        "Ali ibn Abi Talib",
        "Uthman ibn Affan",
        "Umar ibn Khattab"
      ],
      ans: 0
    },
    ur: {
      q: "پہلے خلیفہ کون تھے؟",
      opts: [
        "حضرت ابوبکر صدیق رضی اللہ عنہ",
        "حضرت علی",
        "حضرت عثمان",
        "حضرت عمر"
      ],
      ans: 0
    },
    hi: {
      q: "इस्लाम के पहले ख़लीफ़ा कौन थे?",
      opts: [
        "हज़रत अबू बक्र अस-सिद्दीक़ (रज़ि.)",
        "अली इब्न अबी तालिब",
        "उस्मान इब्न अफ़्फ़ान",
        "उमर इब्न ख़त्ताब"
      ],
      ans: 0
    }
  },
  {
    id: "history-which-was-the-first-major-battle",
    cat: "history",
    diff: "medium",
    pts: 20,
    en: {
      q: "Which was the first major battle in Islamic history?",
      opts: [
        "Battle of Khandaq",
        "Battle of Hunayn",
        "Battle of Uhud",
        "Battle of Badr"
      ],
      ans: 3
    },
    ur: {
      q: "اسلامی تاریخ کی پہلی بڑی جنگ کون سی ہے؟",
      opts: [
        "غزوہ خندق",
        "غزوہ حنین",
        "غزوہ احد",
        "غزوہ بدر"
      ],
      ans: 3
    },
    hi: {
      q: "इस्लामी इतिहास की पहली बड़ी लड़ाई कौन सी है?",
      opts: [
        "ग़ज़वा ख़ंदक़",
        "ग़ज़वा हुनैन",
        "ग़ज़वा उहुद",
        "ग़ज़वा-ए-बद्र"
      ],
      ans: 3
    }
  },
  {
    id: "history-in-which-year-of-hijrah-did",
    cat: "history",
    diff: "hard",
    pts: 30,
    en: {
      q: "In which year of Hijrah did the Conquest of Makkah take place?",
      opts: [
        "6 AH",
        "8 AH",
        "10 AH",
        "12 AH"
      ],
      ans: 1
    },
    ur: {
      q: "فتح مکہ کس ہجری سال میں ہوئی؟",
      opts: [
        "6 ہجری",
        "8 ہجری",
        "10 ہجری",
        "12 ہجری"
      ],
      ans: 1
    },
    hi: {
      q: "मक्का विजय किस हिजरी साल में हुई?",
      opts: [
        "6 हिजरी",
        "8 हिजरी",
        "10 हिजरी",
        "12 हिजरी"
      ],
      ans: 1
    }
  },
  {
    id: "fiqh-what-is-the-ritual-purification-before",
    cat: "fiqh",
    diff: "easy",
    pts: 10,
    en: {
      q: "What is the ritual purification before Salah called?",
      opts: [
        "Ghusl",
        "Niyyah",
        "Wudu",
        "Tayammum"
      ],
      ans: 2
    },
    ur: {
      q: "نماز سے پہلے وضو کے عمل کو کیا کہتے ہیں؟",
      opts: [
        "غسل",
        "نیت",
        "وضو",
        "تیمم"
      ],
      ans: 2
    },
    hi: {
      q: "नमाज़ से पहले वज़ू के अमल को क्या कहते हैं?",
      opts: [
        "ग़ुस्ल",
        "नीयत",
        "वुज़ू",
        "तयम्मुम"
      ],
      ans: 2
    }
  },
  {
    id: "fiqh-what-is-dry-ablution-using-clean",
    cat: "fiqh",
    diff: "medium",
    pts: 20,
    en: {
      q: "What is dry ablution using clean dust/earth called when water is unavailable?",
      opts: [
        "Tayammum",
        "Istinja",
        "Ghusl",
        "Wudu"
      ],
      ans: 0
    },
    ur: {
      q: "پانی نہ ملنے کی صورت میں پاک مٹی سے کیے جانے والے مسح کو کیا کہتے ہیں؟",
      opts: [
        "تیمم",
        "استنجاء",
        "غسل",
        "وضو"
      ],
      ans: 0
    },
    hi: {
      q: "पानी न मिलने की सूरत में साफ़ मिट्टी से किए जाने वाले मसहा को क्या कहते हैं?",
      opts: [
        "तयम्मुम",
        "इस्तिंजा",
        "ग़ुस्ल",
        "वुज़ू"
      ],
      ans: 0
    }
  },
  {
    id: "fiqh-what-is-the-minimum-travel-distance",
    cat: "fiqh",
    diff: "hard",
    pts: 30,
    en: {
      q: "What is the minimum travel distance for shortening Salah (Qasr)?",
      opts: [
        "20 miles",
        "35 miles",
        "48 miles",
        "100 miles"
      ],
      ans: 2
    },
    ur: {
      q: "قصر نماز پڑھنے کے لیے مسافتِ سفر کی کم از کم حد کتنی ہے؟",
      opts: [
        "20 میل",
        "35 میل",
        "48 میل",
        "100 میل"
      ],
      ans: 2
    },
    hi: {
      q: "क़स्र नमाज़ के लिए कम से कम यात्रा दूरी कितनी है?",
      opts: [
        "20 मील",
        "35 मील",
        "48 मील",
        "100 मील"
      ],
      ans: 2
    }
  },
  {
    id: "names-what-does-ar-rahman-mean",
    cat: "names",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does 'Ar-Rahman' mean?",
      opts: [
        "The Most Gracious / Merciful",
        "The All-Knowing",
        "The Sovereign",
        "The Creator"
      ],
      ans: 0
    },
    ur: {
      q: "'الرحمن' کا کیا مطلب ہے؟",
      opts: [
        "بے حد رحم کرنے والا",
        "سب جاننے والا",
        "بادشاہ",
        "پیدا کرنے والا"
      ],
      ans: 0
    },
    hi: {
      q: "'अर-रहमान' का क्या अर्थ है?",
      opts: [
        "अत्यंत दयालु",
        "सर्वज्ञ",
        "राजा",
        "सृष्टिकर्ता"
      ],
      ans: 0
    }
  },
  {
    id: "names-what-does-al-ghaffar-mean",
    cat: "names",
    diff: "medium",
    pts: 20,
    en: {
      q: "What does 'Al-Ghaffar' mean?",
      opts: [
        "The Mighty",
        "The All-Forgiving",
        "The Creator",
        "The Provider"
      ],
      ans: 1
    },
    ur: {
      q: "'الغفار' کا کیا مطلب ہے؟",
      opts: [
        "زبردست",
        "بہت بخشنے والا",
        "پیدا کرنے والا",
        "رزق دینے والا"
      ],
      ans: 1
    },
    hi: {
      q: "'अल-ग़फ़्फ़ार' का क्या अर्थ है?",
      opts: [
        "शक्तिशाली",
        "अत्यंत क्षमाशील",
        "सृष्टिकर्ता",
        "प्रदाता"
      ],
      ans: 1
    }
  },
  {
    id: "names-what-does-al-fattah-mean",
    cat: "names",
    diff: "hard",
    pts: 30,
    en: {
      q: "What does 'Al-Fattah' mean?",
      opts: [
        "The Opener / Judge who removes obstacles",
        "The Last",
        "The High",
        "The Creator"
      ],
      ans: 0
    },
    ur: {
      q: "'الفتاح' کا کیا مطلب ہے؟",
      opts: [
        "مشکلات کھولنے والا / فتاح",
        "آخر",
        "عالی",
        "خالق"
      ],
      ans: 0
    },
    hi: {
      q: "'अल-फ़त्ताह' का क्या अर्थ है?",
      opts: [
        "मार्ग खोलने वाला / न्यायी",
        "अंतिम",
        "उच्च",
        "सृष्टिकर्ता"
      ],
      ans: 0
    }
  },
  {
    id: "tajweed-what-does-the-tajweed-rule-qalqalah",
    cat: "tajweed",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does the Tajweed rule 'Qalqalah' mean?",
      opts: [
        "Nasal sound",
        "Prolongation",
        "Stopping",
        "Echoing / Bouncing sound"
      ],
      ans: 3
    },
    ur: {
      q: "تجوید کے قاعدے 'قلقلہ' کا کیا مطلب ہے؟",
      opts: [
        "غنہ کی آواز",
        "لمبا کرنا",
        "رکنا",
        "آواز کا پلٹنا / گونجنا"
      ],
      ans: 3
    },
    hi: {
      q: "तजवीद के नियम 'क़लक़ला' का क्या अर्थ है?",
      opts: [
        "ग़ुन्ना ध्वनि",
        "खींचना",
        "रुकना",
        "गूंजती ध्वनि"
      ],
      ans: 3
    }
  },
  {
    id: "tajweed-how-many-letters-of-qalqalah-are",
    cat: "tajweed",
    diff: "medium",
    pts: 20,
    en: {
      q: "How many letters of Qalqalah are there in Tajweed?",
      opts: [
        "3 letters",
        "4 letters",
        "5 letters",
        "6 letters"
      ],
      ans: 2
    },
    ur: {
      q: "تجوید میں حروفِ قلقلہ کتنے ہیں؟",
      opts: [
        "3 حروف",
        "4 حروف",
        "5 حروف",
        "6 حروف"
      ],
      ans: 2
    },
    hi: {
      q: "तजवीद में क़लक़ला के कितने अक्षर हैं?",
      opts: [
        "3 अक्षर",
        "4 अक्षर",
        "5 अक्षर",
        "6 अक्षर"
      ],
      ans: 2
    }
  },
  {
    id: "stories-which-prophet-built-the-kaaba-with",
    cat: "stories",
    diff: "easy",
    pts: 10,
    en: {
      q: "Which Prophet built the Kaaba with his son Ismail (AS)?",
      opts: [
        "Prophet Adam (AS)",
        "Prophet Ibrahim (AS)",
        "Prophet Isa (AS)",
        "Prophet Nuh (AS)"
      ],
      ans: 1
    },
    ur: {
      q: "کس نبی نے اپنے بیٹے اسماعیل علیہ السلام کے ساتھ مل کر خانہ کعبہ کی تعمیر کی؟",
      opts: [
        "حضرت آدم",
        "حضرت ابراہیم",
        "حضرت عیسیٰ",
        "حضرت نوح"
      ],
      ans: 1
    },
    hi: {
      q: "किस पैग़म्बर ने अपने बेटे इस्माईल के साथ मिलकर काबा का निर्माण किया?",
      opts: [
        "हज़रत आदम",
        "हज़रत इब्राहिम",
        "हज़रत ईसा",
        "हज़रत नूह"
      ],
      ans: 1
    }
  },
  {
    id: "stories-which-prophet-was-swallowed-by-a",
    cat: "stories",
    diff: "medium",
    pts: 20,
    en: {
      q: "Which Prophet was swallowed by a whale?",
      opts: [
        "Prophet Yunus (AS)",
        "Prophet Yahya (AS)",
        "Prophet Musa (AS)",
        "Prophet Yusuf (AS)"
      ],
      ans: 0
    },
    ur: {
      q: "کس نبی کو مچھلی نے نگل لیا تھا؟",
      opts: [
        "حضرت یونس علیہ السلام",
        "حضرت یحییٰ",
        "حضرت موسیٰ",
        "حضرت یوسف"
      ],
      ans: 0
    },
    hi: {
      q: "किस पैग़म्बर को मछली ने निगल लिया था?",
      opts: [
        "हज़रत यूनुस (अलै.)",
        "हज़रत यह्या",
        "हज़रत मूसा",
        "हज़रत यूसुफ़"
      ],
      ans: 0
    }
  },
  {
    id: "quran-which-surah-is-equivalent-to-one",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "Which Surah is equivalent to one-third of the Quran?",
      opts: [
        "Surah An-Nas",
        "Surah Al-Kafirun",
        "Surah Al-Falaq",
        "Surah Al-Ikhlas"
      ],
      ans: 3
    },
    ur: {
      q: "کون سی سورت تہائی قرآن کے برابر ہے؟",
      opts: [
        "سورة الناس",
        "سورة کافرون",
        "سورة الفلق",
        "سورة الاخلاص"
      ],
      ans: 3
    },
    hi: {
      q: "कौन सी सूरत एक तिहाई क़ुरआन के बराबर है?",
      opts: [
        "सूरह अन-नास",
        "सूरह अल-काफ़िरून",
        "सूरह अल-फ़लक़",
        "सूरह अल-इख़लास"
      ],
      ans: 3
    }
  },
  {
    id: "seerah-who-was-the-first-caller-to",
    cat: "seerah",
    diff: "medium",
    pts: 20,
    en: {
      q: "Who was the first caller to prayer (Mu'adhdhin) in Islam?",
      opts: [
        "Bilal ibn Rabah (RA)",
        "Zayd ibn Harithah",
        "Abu Hurairah (RA)",
        "Abdullah ibn Mas'ud"
      ],
      ans: 0
    },
    ur: {
      q: "اسلام کے پہلے موذن کا نام کیا ہے؟",
      opts: [
        "حضرت بلال بن رباح رضی اللہ عنہ",
        "زید بن حارثہ",
        "ابوہریرہ",
        "عبداللہ بن مسعود"
      ],
      ans: 0
    },
    hi: {
      q: "इस्लाम के पहले मुअज़्ज़िन का नाम क्या है?",
      opts: [
        "हज़रत बिलाल इब्न रबाह (रज़ि.)",
        "ज़ैद",
        "अबू हुरैरह",
        "अब्दुल्लाह इब्न मसऊद"
      ],
      ans: 0
    }
  },
  {
    id: "history-who-suggested-digging-the-trench-in",
    cat: "history",
    diff: "hard",
    pts: 30,
    en: {
      q: "Who suggested digging the trench in the Battle of Khandaq?",
      opts: [
        "Abu Bakr (RA)",
        "Suhaib ar-Rumi",
        "Salman al-Farsi (RA)",
        "Ali (RA)"
      ],
      ans: 2
    },
    ur: {
      q: "غزوہ خندق میں خندق کھودنے کا مشورہ کس صحابی نے دیا تھا؟",
      opts: [
        "ابوبکر",
        "صہیب الرومی",
        "حضرت سلمان فارسی رضی اللہ عنہ",
        "علی"
      ],
      ans: 2
    },
    hi: {
      q: "ख़ंदक़ युद्ध में खाई खोदने का सुझाव किस सहाबी ने दिया?",
      opts: [
        "अबू बक्र",
        "सुहैब",
        "हज़रत सलमान अल-फ़ारसी (रज़ि.)",
        "अली"
      ],
      ans: 2
    }
  },
  {
    id: "names-what-does-allah-s-name-al",
    cat: "names",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does Allah's Name 'Al-Khaliq' mean?",
      opts: [
        "The Judge",
        "The King",
        "The Creator",
        "The Provider"
      ],
      ans: 2
    },
    ur: {
      q: "اللہ تعالی کے نام 'الخالق' کا کیا مطلب ہے؟",
      opts: [
        "فیصلہ کرنے والا",
        "بادشاہ",
        "پیدا کرنے والا",
        "رزق دینے والا"
      ],
      ans: 2
    },
    hi: {
      q: "अल्लाह के नाम 'अल-ख़ालिक़' का क्या अर्थ है?",
      opts: [
        "न्यायी",
        "राजा",
        "सृष्टिकर्ता",
        "प्रदाता"
      ],
      ans: 2
    }
  },
    {
    id: "fiqh-how-many-obligatory-acts-fard-are",
    cat: "fiqh",
    diff: "easy",
    pts: 10,
    en: {
      q: "How many obligatory acts (Fard) are in Wudu?",
      opts: [
        "3 Fards",
        "4 Fards",
        "5 Fards",
        "6 Fards"
      ],
      ans: 1
    },
    ur: {
      q: "وضو میں کتنے فرائض ہیں؟",
      opts: [
        "3 فرائض",
        "4 فرائض",
        "5 فرائض",
        "6 فرائض"
      ],
      ans: 1
    },
    hi: {
      q: "वुज़ू में कितने फ़र्ज़ हैं?",
      opts: [
        "3 फ़र्ज़",
        "4 फ़र्ज़",
        "5 फ़र्ज़",
        "6 फ़र्ज़"
      ],
      ans: 1
    }
  },
  {
    id: "quran-how-many-juz-parts-is-the",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "How many Juz (parts) is the Quran divided into?",
      opts: [
        "30",
        "25",
        "40",
        "20"
      ],
      ans: 0
    },
    ur: {
      q: "قرآن کتنے پاروں میں تقسیم ہے؟",
      opts: [
        "30",
        "25",
        "40",
        "20"
      ],
      ans: 0
    },
    hi: {
      q: "क़ुरआन कितने पारों में विभाजित है?",
      opts: [
        "30",
        "25",
        "40",
        "20"
      ],
      ans: 0
    }
  },
  {
    id: "quran-how-many-times-is-the-word",
    cat: "quran",
    diff: "expert",
    pts: 50,
    en: {
      q: "How many times is the word Quran mentioned in the Quran itself?",
      opts: [
        "85",
        "70",
        "50",
        "58"
      ],
      ans: 3
    },
    ur: {
      q: "قرآن میں لفظ قرآن کتنی بار آیا ہے؟",
      opts: [
        "85",
        "70",
        "50",
        "58"
      ],
      ans: 3
    },
    hi: {
      q: "क़ुरआन में 'क़ुरआन' शब्द कितनी बार आया है?",
      opts: [
        "85",
        "70",
        "50",
        "58"
      ],
      ans: 3
    }
  },
  {
    id: "quran-which-surah-is-named-after-a",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "Which Surah is named after a woman?",
      opts: [
        "Surah Aishah",
        "Surah Fatimah",
        "Surah Khadijah",
        "Surah Maryam"
      ],
      ans: 3
    },
    ur: {
      q: "کون سی سورت ایک خاتون کے نام پر ہے؟",
      opts: [
        "سورت عائشہ",
        "سورت فاطمہ",
        "سورت خدیجہ",
        "سورت مریم"
      ],
      ans: 3
    },
    hi: {
      q: "कौन सी सूरत एक महिला के नाम पर है?",
      opts: [
        "सूरत आइशा",
        "सूरत फ़ातिमह",
        "सूरत ख़दीजह",
        "सूरत मरयम"
      ],
      ans: 3
    }
  },
  {
    id: "quran-reciting-which-surah-on-friday-protects",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "Reciting which Surah on Friday protects from the Dajjal?",
      opts: [
        "Yasin",
        "Al-Mulk",
        "Al-Kahf",
        "Ar-Rahman"
      ],
      ans: 2
    },
    ur: {
      q: "جمعہ کے دن کس سورت کی تلاوت دجال سے حفاظت فراہم کرتی ہے؟",
      opts: [
        "یس",
        "الملک",
        "الکہف",
        "الرحمن"
      ],
      ans: 2
    },
    hi: {
      q: "शुक्रवार को किस सूरत की तिलावत दज्जाल से हिफ़ाज़त करती है?",
      opts: [
        "यासीन",
        "अल-मुल्क",
        "अल-कहफ़",
        "अर-रहमान"
      ],
      ans: 2
    }
  },
  {
    id: "stories-which-prophet-was-given-the-title",
    cat: "stories",
    diff: "medium",
    pts: 20,
    en: {
      q: "Which Prophet was given the title 'Khalilullah' (Friend of Allah)?",
      opts: [
        "Prophet Ibrahim",
        "Prophet Yusuf",
        "Prophet Muhammad",
        "Prophet Adam"
      ],
      ans: 0
    },
    ur: {
      q: "کس نبی کو خلیل اللہ (اللہ کا دوست) کا لقب دیا گیا؟",
      opts: [
        "حضرت ابراہیم",
        "حضرت یوسف",
        "حضرت محمد",
        "حضرت آدم"
      ],
      ans: 0
    },
    hi: {
      q: "किस पैग़म्बर को ख़लीलुल्लाह (अल्लाह का दोस्त) का लक़ब मिला?",
      opts: [
        "हज़रत इब्राहिम",
        "हज़रत यूसुफ़",
        "हज़रत मुहम्मद",
        "हज़रत आदम"
      ],
      ans: 0
    }
  },
  {
    id: "stories-which-prophet-spoke-while-still-an",
    cat: "stories",
    diff: "hard",
    pts: 30,
    en: {
      q: "Which Prophet spoke while still an infant in the cradle?",
      opts: [
        "Prophet Ismail",
        "Prophet Ishaq",
        "Prophet Zakariyya",
        "Prophet Isa (Jesus)"
      ],
      ans: 3
    },
    ur: {
      q: "کون سے نبی نے جھولے میں شیر خوارگی کی حالت میں گفتگو کی؟",
      opts: [
        "حضرت اسماعیل",
        "حضرت اسحاق",
        "حضرت زکریا",
        "حضرت عیسیٰ"
      ],
      ans: 3
    },
    hi: {
      q: "कौन से पैग़म्बर ने पालने में शिशु अवस्था में बात की?",
      opts: [
        "हज़रत इस्माईल",
        "हज़रत इसहाक़",
        "हज़रत ज़करिया",
        "हज़रत ईसा"
      ],
      ans: 3
    }
  },
  {
    id: "seerah-what-was-the-name-of-prophet",
    cat: "seerah",
    diff: "easy",
    pts: 10,
    en: {
      q: "What was the name of Prophet Muhammad's (SAW) foster sister who cared for him in Banu Sa'd?",
      opts: [
        "Juwayriyah",
        "Shayma (bint al-Harith)",
        "Anisa",
        "Safiyyah"
      ],
      ans: 1
    },
    ur: {
      q: "بنو سعد میں نبی کریم ﷺ کی کس رضاعی بہن نے آپ کی دیکھ بھال کی؟",
      opts: [
        "جویریہ",
        "شیماء بنت الحارث",
        "انیسہ",
        "صفیہ"
      ],
      ans: 1
    },
    hi: {
      q: "बनू साअद में पैग़म्बर की किस दूध-बहन ने आप की देखभाल की?",
      opts: [
        "जुवैरिया",
        "शैमा बिन्त अल-हारिस",
        "अनीसा",
        "सफ़िय्या"
      ],
      ans: 1
    }
  },
  {
    id: "history-during-whose-caliphate-was-the-quran",
    cat: "history",
    diff: "hard",
    pts: 30,
    en: {
      q: "During whose caliphate was the Quran compiled into a single Mushaf?",
      opts: [
        "Abu Bakr",
        "Uthman",
        "Prophet Muhammad SAW",
        "Umar"
      ],
      ans: 0
    },
    ur: {
      q: "قرآن کو کتابی شکل میں کس کے دور میں جمع کیا گیا؟",
      opts: [
        "ابوبکر",
        "عثمان",
        "نبی ﷺ",
        "عمر"
      ],
      ans: 0
    },
    hi: {
      q: "क़ुरआन को किताबी रूप में किसके दौर में संकलित किया गया?",
      opts: [
        "अबू बक्र",
        "उस्मान",
        "नबी सल्ल.",
        "उमर"
      ],
      ans: 0
    }
  },
  {
    id: "history-which-islamic-empire-lasted-the-longest",
    cat: "history",
    diff: "expert",
    pts: 50,
    en: {
      q: "Which Islamic empire lasted the longest in history?",
      opts: [
        "Umayyad Caliphate",
        "Ottoman Empire",
        "Abbasid Caliphate",
        "Mughal Empire"
      ],
      ans: 1
    },
    ur: {
      q: "تاریخ کی سب سے طویل اسلامی سلطنت کون سی ہے؟",
      opts: [
        "سلطنت امویہ",
        "سلطنت عثمانیہ",
        "سلطنت عباسیہ",
        "سلطنت مغلیہ"
      ],
      ans: 1
    },
    hi: {
      q: "इतिहास की सबसे लंबी इस्लामी सल्तनत कौन सी है?",
      opts: [
        "उमवी सल्तनत",
        "उस्मानी सल्तनत",
        "अब्बासी सल्तनत",
        "मुग़ल सल्तनत"
      ],
      ans: 1
    }
  },
  {
    id: "fiqh-which-of-the-following-invalidates-the",
    cat: "fiqh",
    diff: "medium",
    pts: 20,
    en: {
      q: "Which of the following invalidates the fast?",
      opts: [
        "Intentional eating",
        "Smelling perfume",
        "Using Miswak",
        "Eating forgetfully"
      ],
      ans: 0
    },
    ur: {
      q: "درج ذیل میں سے کون روزہ توڑ دیتا ہے؟",
      opts: [
        "جان بوجھ کر کھانا",
        "خوشبو سونگھنا",
        "مسواک کرنا",
        "بھول کر کھانا"
      ],
      ans: 0
    },
    hi: {
      q: "निम्नलिखित में से क्या रोज़ा तोड़ देता है?",
      opts: [
        "जान-बूझकर खाना",
        "इत्र सूंघना",
        "मिस्वाक करना",
        "भूल से खाना"
      ],
      ans: 0
    }
  },
  {
    id: "fiqh-how-many-takbeers-are-said-in",
    cat: "fiqh",
    diff: "hard",
    pts: 30,
    en: {
      q: "How many Takbeers are said in the Eid prayer in total?",
      opts: [
        "12",
        "7",
        "9",
        "6"
      ],
      ans: 0
    },
    ur: {
      q: "نماز عید میں کل کتنی تکبیریں ہوتی ہیں؟",
      opts: [
        "12",
        "7",
        "9",
        "6"
      ],
      ans: 0
    },
    hi: {
      q: "ईद की नमाज़ में कुल कितनी तकबीरें होती हैं?",
      opts: [
        "12",
        "7",
        "9",
        "6"
      ],
      ans: 0
    }
  },
  {
    id: "fiqh-what-is-the-minimum-nisab-in",
    cat: "fiqh",
    diff: "expert",
    pts: 50,
    en: {
      q: "What is the minimum nisab in gold for Zakat to be obligatory?",
      opts: [
        "100g",
        "85g",
        "75g",
        "50g"
      ],
      ans: 1
    },
    ur: {
      q: "زکوٰۃ کے لیے سونے کا نصاب کتنا ہے؟",
      opts: [
        "100 گرام",
        "85 گرام",
        "75 گرام",
        "50 گرام"
      ],
      ans: 1
    },
    hi: {
      q: "ज़कात के लिए सोने का निसाब कितना है?",
      opts: [
        "100 ग्राम",
        "85 ग्राम",
        "75 ग्राम",
        "50 ग्राम"
      ],
      ans: 1
    }
  },
  {
    id: "names-what-does-al-khaliq-mean",
    cat: "names",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does 'Al-Khaliq' mean?",
      opts: [
        "The Guide",
        "The Creator",
        "The Forgiving",
        "The Sustainer"
      ],
      ans: 1
    },
    ur: {
      q: "'الخالق' کا مطلب کیا ہے؟",
      opts: [
        "رہنمائی دینے والا",
        "پیدا کرنے والا",
        "بخشنے والا",
        "رزق دینے والا"
      ],
      ans: 1
    },
    hi: {
      q: "'अल-ख़ालिक़' का अर्थ क्या है?",
      opts: [
        "मार्गदर्शक",
        "सृष्टिकर्ता",
        "क्षमाशील",
        "पालनकर्ता"
      ],
      ans: 1
    }
  },
  {
    id: "names-what-does-al-hafiz-mean",
    cat: "names",
    diff: "medium",
    pts: 20,
    en: {
      q: "What does 'Al-Hafiz' mean?",
      opts: [
        "The Just",
        "The Subtle",
        "The Preserver",
        "The All-Seeing"
      ],
      ans: 2
    },
    ur: {
      q: "'الحفیظ' کا مطلب کیا ہے؟",
      opts: [
        "عادل",
        "لطیف",
        "محافظ",
        "سب دیکھنے والا"
      ],
      ans: 2
    },
    hi: {
      q: "'अल-हफ़ीज़' का अर्थ क्या है?",
      opts: [
        "न्यायी",
        "सूक्ष्म",
        "संरक्षक",
        "सर्वदर्शी"
      ],
      ans: 2
    }
  },
  {
    id: "names-what-does-ar-razzaq-mean",
    cat: "names",
    diff: "medium",
    pts: 20,
    en: {
      q: "What does 'Ar-Razzaq' mean?",
      opts: [
        "The Eternal",
        "The Provider",
        "The First",
        "The Guide"
      ],
      ans: 1
    },
    ur: {
      q: "'الرزاق' کا مطلب کیا ہے؟",
      opts: [
        "ہمیشہ رہنے والا",
        "رزق دینے والا",
        "اول",
        "رہنمائی دینے والا"
      ],
      ans: 1
    },
    hi: {
      q: "'अर-रज्ज़ाक़' का अर्थ क्या है?",
      opts: [
        "शाश्वत",
        "प्रदाता",
        "प्रथम",
        "मार्गदर्शक"
      ],
      ans: 1
    }
  },
  {
    id: "names-what-does-al-muqsit-mean",
    cat: "names",
    diff: "hard",
    pts: 30,
    en: {
      q: "What does 'Al-Muqsit' mean?",
      opts: [
        "The Eternal",
        "The All-Aware",
        "The Majestic",
        "The Equitable"
      ],
      ans: 3
    },
    ur: {
      q: "'المقسط' کا مطلب کیا ہے؟",
      opts: [
        "دائمی",
        "خبردار",
        "عظیم",
        "انصاف کرنے والا"
      ],
      ans: 3
    },
    hi: {
      q: "'अल-मुक़्सित' का अर्थ क्या है?",
      opts: [
        "शाश्वत",
        "सर्वज्ञ",
        "महिमामय",
        "न्यायसंगत"
      ],
      ans: 3
    }
  },
  {
    id: "names-what-does-al-batin-mean",
    cat: "names",
    diff: "expert",
    pts: 50,
    en: {
      q: "What does 'Al-Batin' mean?",
      opts: [
        "The Hidden/Inner",
        "The Last",
        "The First",
        "The Manifest"
      ],
      ans: 0
    },
    ur: {
      q: "'الباطن' کا مطلب کیا ہے؟",
      opts: [
        "پوشیدہ/باطن",
        "آخر",
        "اول",
        "ظاہر"
      ],
      ans: 0
    },
    hi: {
      q: "'अल-बातिन' का अर्थ क्या है?",
      opts: [
        "छिपा हुआ",
        "अंतिम",
        "प्रथम",
        "प्रकट"
      ],
      ans: 0
    }
  },
  {
    id: "quran-what-does-tajweed-mean",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does Tajweed mean?",
      opts: [
        "Beautification — making recitation excellent",
        "Memorisation",
        "Speed in recitation",
        "Silence"
      ],
      ans: 0
    },
    ur: {
      q: "تجوید کا معنی کیا ہے؟",
      opts: [
        "خوبصورتی — تلاوت کو عمدہ بنانا",
        "حفظ",
        "تلاوت میں تیزی",
        "خاموشی"
      ],
      ans: 0
    },
    hi: {
      q: "तजवीद का अर्थ क्या है?",
      opts: [
        "सुंदरता — पाठ को उत्कृष्ट बनाना",
        "हिफ़्ज़",
        "तेज़ पाठ",
        "मौन"
      ],
      ans: 0
    },
    arabicAyah: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
    reference: "Al-Muzzammil 73:4"
  },
  {
    id: "quran-how-many-counts-does-madd-asli",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "How many counts does Madd Asli (Natural Madd) last?",
      opts: [
        "6",
        "4",
        "2",
        "1"
      ],
      ans: 2
    },
    ur: {
      q: "مد اصلی (طبیعی مد) کتنے الف کا ہوتا ہے؟",
      opts: [
        "چھ",
        "چار",
        "دو",
        "ایک"
      ],
      ans: 2
    },
    hi: {
      q: "मद अस्ली (तबई मद) कितनी मात्राएँ होती है?",
      opts: [
        "6",
        "4",
        "2",
        "1"
      ],
      ans: 2
    }
  },
  {
    id: "quran-what-are-the-three-madd-letters",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "What are the three Madd letters?",
      opts: [
        "ب ت ث",
        "ا و ي",
        "ق ك ل",
        "م ن و"
      ],
      ans: 1
    },
    ur: {
      q: "مد کے تین حروف کون سے ہیں؟",
      opts: [
        "ب ت ث",
        "ا و ي",
        "ق ك ل",
        "م ن و"
      ],
      ans: 1
    },
    hi: {
      q: "मद के तीन हर्फ़ कौन से हैं?",
      opts: [
        "",
        "",
        "",
        ""
      ],
      ans: 1
    }
  },
  {
    id: "quran-how-many-qalqala-letters-are-there",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "How many Qalqala letters are there?",
      opts: [
        "3",
        "5",
        "6",
        "4"
      ],
      ans: 1
    },
    ur: {
      q: "قلقلہ کے کتنے حروف ہیں؟",
      opts: [
        "تین",
        "پانچ",
        "چھ",
        "چار"
      ],
      ans: 1
    },
    hi: {
      q: "क़लक़ला के कितने हर्फ़ हैं?",
      opts: [
        "3",
        "5",
        "6",
        "4"
      ],
      ans: 1
    }
  },
  {
    id: "quran-in-noon-sakin-before-ba-what",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "In 'مِن بَعْدِ' — Noon Sakin before Ba — what Tajweed rule applies?",
      opts: [
        "Izhar",
        "Ikhfa",
        "Iqlab — Noon becomes Meem",
        "Idghaam"
      ],
      ans: 2
    },
    ur: {
      q: "'مِن بَعْدِ' میں نون ساکن با سے پہلے — کیا تجویدی حکم ہے؟",
      opts: [
        "اظہار",
        "اخفاء",
        "اقلاب — نون میم بنتی ہے",
        "ادغام"
      ],
      ans: 2
    },
    hi: {
      q: "' ' में नून साकिन '' से पहले — क्या तजवीद का हुक्म है?",
      opts: [
        "इज़हार",
        "इख़फ़ा",
        "इक़लाब — नून मीम बनती है",
        "इदग़ाम"
      ],
      ans: 2
    },
    arabicAyah: "مِن بَعْدِ مِيثَاقِهِ",
    reference: "Al-Baqarah 2:27"
  },
  {
    id: "quran-in-the-alif-before-shaddah-lam",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "In 'الضَّالِّينَ' — the Alif before Shaddah-Lam — what Madd is this?",
      opts: [
        "Madd Arid — 2/4/6 counts",
        "Madd Muttasil — 4-5 counts",
        "Madd Lazim — exactly 6 counts",
        "Madd Asli — 2 counts"
      ],
      ans: 2
    },
    ur: {
      q: "'الضَّالِّينَ' میں شدہ لام سے پہلے الف — کون سا مد ہے؟",
      opts: [
        "مد عارض — دو/چار/چھ",
        "مد متصل — چار پانچ",
        "مد لازم — ٹھیک چھ",
        "مد اصلی — دو"
      ],
      ans: 2
    },
    hi: {
      q: "'' में शद्दे लाम से पहले अलिफ़ — कौन सा मद है?",
      opts: [
        "मद आरिज़ — 2/4/6",
        "मद मुत्तसिल — 4-5",
        "मद लाज़िम — ठीक 6",
        "मद अस्ली — 2"
      ],
      ans: 2
    },
    arabicAyah: "وَلَا الضَّالِّينَ",
    reference: "Al-Fatiha 1:7"
  },
  {
    id: "quran-which-letters-cause-idghaam-without-ghunna",
    cat: "quran",
    diff: "hard",
    pts: 30,
    en: {
      q: "Which letters cause Idghaam WITHOUT Ghunna after Noon Sakin?",
      opts: [
        "ب only",
        "ء ه ع غ ح خ",
        "ي ن م و",
        "ل ر only"
      ],
      ans: 3
    },
    ur: {
      q: "نون ساکن کے بعد کون سے حروف بلا غنہ ادغام کراتے ہیں؟",
      opts: [
        "صرف ب",
        "ء ه ع غ ح خ",
        "ي ن م و",
        "صرف ل ر"
      ],
      ans: 3
    },
    hi: {
      q: "के बाद कौन से हर्फ़ बिला ग़ुन्ना इदग़ाम कराते हैं?",
      opts: [
        "सिर्फ़",
        "",
        "",
        "सिर्फ़"
      ],
      ans: 3
    }
  },
  {
    id: "quran-madd-lazim-always-lasts-exactly-how",
    cat: "quran",
    diff: "expert",
    pts: 50,
    en: {
      q: "Madd Lazim always lasts exactly how many counts?",
      opts: [
        "5",
        "2",
        "4",
        "6"
      ],
      ans: 3
    },
    ur: {
      q: "مد لازم ہمیشہ ٹھیک کتنے الف ہوتا ہے؟",
      opts: [
        "پانچ",
        "دو",
        "چار",
        "چھ"
      ],
      ans: 3
    },
    hi: {
      q: "मद लाज़िम हमेशा ठीक कितनी मात्राएँ होता है?",
      opts: [
        "5",
        "2",
        "4",
        "6"
      ],
      ans: 3
    }
  },
  {
    id: "quran-what-does-al-alameen-mean",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does 'الْعَالَمِينَ' (Al-Alameen) mean?",
      opts: [
        "All the worlds/universes",
        "The prophets",
        "The Muslims",
        "The Arabs"
      ],
      ans: 0
    },
    ur: {
      q: "'الْعَالَمِينَ' کا معنی کیا ہے؟",
      opts: [
        "تمام جہان",
        "انبیاء",
        "مسلمان",
        "عرب"
      ],
      ans: 0
    },
    hi: {
      q: "'अल-आलमीन' का अर्थ क्या है?",
      opts: [
        "तमाम जहान",
        "अंबिया",
        "मुसलमान",
        "अरब"
      ],
      ans: 0
    },
    arabicAyah: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    reference: "Al-Fatiha 1:2"
  },
  {
    id: "quran-what-does-mean-in",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does 'الدِّينِ' mean in 'يَوْمِ الدِّينِ'?",
      opts: [
        "The faith",
        "The prayer",
        "Judgment/Recompense",
        "The religion"
      ],
      ans: 2
    },
    ur: {
      q: "'يَوْمِ الدِّينِ' میں 'الدِّينِ' کا معنی کیا ہے؟",
      opts: [
        "ایمان",
        "نماز",
        "جزا/انصاف",
        "دین"
      ],
      ans: 2
    },
    hi: {
      q: "' अद्-दी' में 'अद्-दी' का अर्थ क्या है?",
      opts: [
        "ईमान",
        "नमाज़",
        "जज़ा/इंसाफ़",
        "दीन"
      ],
      ans: 2
    },
    arabicAyah: "مَالِكِ يَوْمِ الدِّينِ",
    reference: "Al-Fatiha 1:4"
  },
  {
    id: "quran-what-does-mean",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "What does 'نَسْتَعِينُ' mean?",
      opts: [
        "We praise",
        "We love",
        "We worship",
        "We seek help from"
      ],
      ans: 3
    },
    ur: {
      q: "'نَسْتَعِينُ' کا معنی کیا ہے؟",
      opts: [
        "ہم تعریف کرتے ہیں",
        "ہم محبت کرتے ہیں",
        "ہم عبادت کرتے ہیں",
        "ہم مدد چاہتے ہیں"
      ],
      ans: 3
    },
    hi: {
      q: "'नस्तईन ()' का अर्थ क्या है?",
      opts: [
        "हम तारीफ़ करते हैं",
        "हम मुहब्बत करते हैं",
        "हम इबादत करते हैं",
        "हम मदद चाहते हैं"
      ],
      ans: 3
    },
    arabicAyah: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    reference: "Al-Fatiha 1:5"
  },
  {
    id: "quran-what-does-taqwa-mean",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "What does 'تَقْوَى' (Taqwa) mean?",
      opts: [
        "Speed in worship",
        "God-consciousness and piety",
        "Courage",
        "Knowledge only"
      ],
      ans: 1
    },
    ur: {
      q: "'تَقْوَى' کا معنی کیا ہے؟",
      opts: [
        "عبادت میں تیزی",
        "اللہ کا خوف اور پرہیزگاری",
        "ہمت",
        "صرف علم"
      ],
      ans: 1
    },
    hi: {
      q: "'तक़्वा ()' का अर्थ क्या है?",
      opts: [
        "इबादत में तेज़ी",
        "अल्लाह का ख़ौफ़ और परहेज़गारी",
        "हिम्मत",
        "सिर्फ़ इल्म"
      ],
      ans: 1
    }
  },
  {
    id: "quran-what-do-and-mean",
    cat: "quran",
    diff: "hard",
    pts: 30,
    en: {
      q: "What do 'تُسِرُّونَ' and 'تُعْلِنُونَ' mean?",
      opts: [
        "What you hear and see",
        "What you conceal and what you reveal",
        "What you eat and drink",
        "What you say and write"
      ],
      ans: 1
    },
    ur: {
      q: "'تُسِرُّونَ' اور 'تُعْلِنُونَ' کا معنی کیا ہے؟",
      opts: [
        "جو سنتے دیکھتے ہو",
        "جو چھپاتے اور ظاہر کرتے ہو",
        "جو کھاتے پیتے ہو",
        "جو کہتے لکھتے ہو"
      ],
      ans: 1
    },
    hi: {
      q: "'तुसिर्रूना' और 'तुअ्लिनूना' का अर्थ क्या है?",
      opts: [
        "जो सुनते देखते हो",
        "जो छुपाते और ज़ाहिर करते हो",
        "जो खाते पीते हो",
        "जो कहते लिखते हो"
      ],
      ans: 1
    },
    arabicAyah: "وَمَا تُسِرُّونَ وَمَا تُعْلِنُونَ",
    reference: "An-Nahl 16:19"
  },
  {
    id: "quran-who-was-saved-when-allah-commanded",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "Who was saved when Allah commanded 'يَا نَارُ كُونِي بَرْدًا وَسَلَامًا'?",
      opts: [
        "Ibrahim عليه السلام",
        "Musa عليه السلام",
        "Ismail عليه السلام",
        "Yunus عليه السلام"
      ],
      ans: 0
    },
    ur: {
      q: "جب اللہ نے آگ کو 'يَا نَارُ كُونِي بَرْدًا وَسَلَامًا' کہا تو کسے بچایا؟",
      opts: [
        "ابراہیم علیہ السلام",
        "موسیٰ علیہ السلام",
        "اسماعیل علیہ السلام",
        "یونس علیہ السلام"
      ],
      ans: 0
    },
    hi: {
      q: "जब अल्लाह ने आग को 'या नारू कूनी बर्दन व-सलामन' कहा तो किसे बचाया?",
      opts: [
        "इब्राहीम",
        "मूसा",
        "इस्माईल",
        "यूनुस"
      ],
      ans: 0
    },
    arabicAyah: "يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ",
    reference: "Al-Anbiya 21:69"
  },
  {
    id: "quran-how-many-years-did-nuh-preach",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "How many years did Nuh عليه السلام preach to his people?",
      opts: [
        "500 years",
        "1000 years exactly",
        "950 years",
        "750 years"
      ],
      ans: 2
    },
    ur: {
      q: "نوح علیہ السلام نے اپنی قوم میں کتنے سال تبلیغ کی؟",
      opts: [
        "500 سال",
        "ٹھیک 1000 سال",
        "950 سال",
        "750 سال"
      ],
      ans: 2
    },
    hi: {
      q: "नूह ने अपनी क़ौम में कितने साल तबलीग़ की?",
      opts: [
        "500 साल",
        "बिल्कुल 1000 साल",
        "950 साल",
        "750 साल"
      ],
      ans: 2
    },
    arabicAyah: "وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا",
    reference: "Al-Ankabut 29:14"
  },
  {
    id: "quran-who-made-this-supplication-from-inside",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "Who made this supplication from inside the whale in three darknesses?",
      opts: [
        "Musa عليه السلام",
        "Ibrahim عليه السلام",
        "Yunus عليه السلام",
        "Dawud عليه السلام"
      ],
      ans: 2
    },
    ur: {
      q: "مچھلی کے پیٹ میں تین اندھیروں سے یہ دعا کس نے مانگی؟",
      opts: [
        "موسیٰ علیہ السلام",
        "ابراہیم علیہ السلام",
        "یونس علیہ السلام",
        "داؤد علیہ السلام"
      ],
      ans: 2
    },
    hi: {
      q: "मछली के पेट में तीन अंधेरों से यह दुआ किसने माँगी?",
      opts: [
        "मूसा",
        "इब्राहीम",
        "यूनुस ल",
        "दाऊद"
      ],
      ans: 2
    },
    arabicAyah: "فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    reference: "Al-Anbiya 21:87"
  },
  {
    id: "quran-when-musa-struck-the-rock-how",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "When Musa عليه السلام struck the rock, how many springs gushed forth?",
      opts: [
        "10",
        "70",
        "7",
        "12"
      ],
      ans: 3
    },
    ur: {
      q: "جب موسیٰ علیہ السلام نے پتھر مارا تو کتنے چشمے نکلے؟",
      opts: [
        "دس",
        "ستر",
        "سات",
        "بارہ"
      ],
      ans: 3
    },
    hi: {
      q: "जब मूसा ने पत्थर मारा तो कितने चश्मे निकले?",
      opts: [
        "10",
        "70",
        "7",
        "12"
      ],
      ans: 3
    },
    arabicAyah: "فَقُلْنَا اضْرِب بِّعَصَاكَ الْحَجَرَ ۖ فَانفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا",
    reference: "Al-Baqarah 2:60"
  },
  {
    id: "quran-the-quran-calls-the-story-of",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "The Quran calls the story of which Prophet 'Ahsan Al-Qasas' (best of stories)?",
      opts: [
        "Ibrahim عليه السلام",
        "Yusuf عليه السلام",
        "Musa عليه السلام",
        "Nuh عليه السلام"
      ],
      ans: 1
    },
    ur: {
      q: "قرآن کس نبی کے قصے کو 'احسن القصص' کہتا ہے؟",
      opts: [
        "ابراہیم",
        "یوسف",
        "موسیٰ",
        "نوح"
      ],
      ans: 1
    },
    hi: {
      q: "क़ुरआन किस नबी के क़िस्से को 'अहसन अल-क़सस' कहता है?",
      opts: [
        "इब्राहीम",
        "यूसुफ़",
        "मूसा",
        "नूह"
      ],
      ans: 1
    }
  },
  {
    id: "quran-people-of-ad-prophet-hud-s",
    cat: "quran",
    diff: "hard",
    pts: 30,
    en: {
      q: "People of 'Ad (Prophet Hud's people) were destroyed by:",
      opts: [
        "Earthquake",
        "Furious wind for 7 nights and 8 days",
        "Fire from sky",
        "Great flood"
      ],
      ans: 1
    },
    ur: {
      q: "قوم عاد کو کس چیز سے ہلاک کیا گیا؟",
      opts: [
        "زلزلہ",
        "سات رات آٹھ دن تباہ کن آندھی",
        "آسمانی آگ",
        "عظیم سیلاب"
      ],
      ans: 1
    },
    hi: {
      q: "क़ौम आद को किस चीज़ से हलाक किया गया?",
      opts: [
        "ज़लज़ला",
        "सात रात आठ दिन की तबाहकुन आँधी",
        "आसमानी आग",
        "बड़ा सैलाब"
      ],
      ans: 1
    }
  },
  {
    id: "quran-when-allah-told-angels-about-creating",
    cat: "quran",
    diff: "expert",
    pts: 50,
    en: {
      q: "When Allah told angels about creating a Khalifah on earth, what did they say?",
      opts: [
        "Will You place one who causes corruption while we glorify You?",
        "We hear and obey",
        "We don't know who that is",
        "We are more worthy"
      ],
      ans: 0
    },
    ur: {
      q: "جب اللہ نے زمین میں خلیفہ بنانے کا بتایا تو فرشتوں نے کیا کہا؟",
      opts: [
        "کیا آپ وہ مخلوق رکھیں گے جو فساد پھیلائے؟",
        "سمعنا وأطعنا",
        "ہم نہیں جانتے",
        "ہم زیادہ لائق ہیں"
      ],
      ans: 0
    },
    hi: {
      q: "जब अल्लाह ने ज़मीन में ख़लीफ़ा बनाने का बताया तो फ़रिश्तों ने क्या कहा?",
      opts: [
        "क्या आप वह मख़लूक़ रखेंगे जो फ़साद फैलाए?",
        "सुना और माना",
        "हम नहीं जानते",
        "हम ज़्यादा लाइक़ हैं"
      ],
      ans: 0
    },
    arabicAyah: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",
    reference: "Al-Baqarah 2:30"
  },
  {
    id: "quran-what-is-the-greatest-ayah-of",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "What is the greatest Ayah of the Quran according to the Prophet ﷺ?",
      opts: [
        "Al-Fatiha 1:1",
        "Al-Baqarah 2:286",
        "Ayat Al-Kursi 2:255",
        "Al-Ikhlas 112:1"
      ],
      ans: 2
    },
    ur: {
      q: "نبی ﷺ کے مطابق قرآن کی سب سے عظیم آیت کون سی ہے؟",
      opts: [
        "الفاتحہ 1:1",
        "البقرۃ 2:286",
        "آیت الکرسی 2:255",
        "الاخلاص 112:1"
      ],
      ans: 2
    },
    hi: {
      q: "(सल्ल.) के मुताबिक़ क़ुरआन की सबसे अज़ीम आयत कौन सी है?",
      opts: [
        "अल-फ़ातिहा 1:1",
        "अल-बक़रह 2:286",
        "आयत अल-कुर्सी 2:255",
        "अल-इख़लास 112:1"
      ],
      ans: 2
    },
    arabicAyah: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    reference: "Al-Baqarah 2:255 — Sahih Muslim"
  },
  {
    id: "quran-is-repeated-how-many-times-in",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ' is repeated how many times in Surah Ar-Rahman?",
      opts: [
        "25",
        "21",
        "40",
        "31"
      ],
      ans: 3
    },
    ur: {
      q: "'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ' سورۃ الرحمن میں کتنی بار ہے؟",
      opts: [
        "25 بار",
        "21 بار",
        "40 بار",
        "31 بار"
      ],
      ans: 3
    },
    hi: {
      q: "'फ़बिएय्यि आला-इ रब्बिकु तुकज़्ज़िबान' सूरह अर-रहमान में कितनी बार है?",
      opts: [
        "25 बार",
        "21 बार",
        "40 बार",
        "31 बार"
      ],
      ans: 3
    },
    arabicAyah: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    reference: "Ar-Rahman 55:13"
  },
  {
    id: "quran-according-to-this-verse-why-did",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "According to this verse, why did Allah create Jinn and Humans?",
      opts: [
        "To test who is strongest",
        "Only to worship Him",
        "To serve the angels",
        "To populate the earth"
      ],
      ans: 1
    },
    ur: {
      q: "اس آیت کے مطابق اللہ نے جن اور انسان کیوں پیدا کیے؟",
      opts: [
        "جانچنے کو",
        "صرف اپنی عبادت کے لیے",
        "فرشتوں کی خدمت کو",
        "زمین آباد کرنے کو"
      ],
      ans: 1
    },
    hi: {
      q: "इस आयत के मुताबिक़ अल्लाह ने जिन्न और इंसान को क्यों पैदा किया?",
      opts: [
        "जाँचने को",
        "सिर्फ़ अपनी इबादत के लिए",
        "फ़रिश्तों की ख़िदमत को",
        "ज़मीन आद करने को"
      ],
      ans: 1
    },
    arabicAyah: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
    reference: "Adh-Dhariyat 51:56"
  },
  {
    id: "quran-is-definite-is-indefinite-in-94",
    cat: "quran",
    diff: "hard",
    pts: 30,
    en: {
      q: "'الْعُسْرِ' is definite, 'يُسْرًا' is indefinite in 94:5-6. What do scholars conclude?",
      opts: [
        "Equal hardship and ease",
        "One specific hardship comes with multiple different eases",
        "One hardship and one ease",
        "Many hardships and one ease"
      ],
      ans: 1
    },
    ur: {
      q: "آیت 94:5-6 میں 'الْعُسْرِ' معرفہ اور 'يُسْرًا' نکرہ — علماء کا نتیجہ؟",
      opts: [
        "برابر مشکل آسانی",
        "ایک مخصوص مشکل کے ساتھ متعدد مختلف آسانیاں",
        "ایک مشکل ایک آسانی",
        "بہت مشکلیں ایک آسانی"
      ],
      ans: 1
    },
    hi: {
      q: "आयत 94:5-6 में 'अल-उस्र ()' मारिफ़ह और 'युस्रन ()' नकिरह — उलमा का नतीजा?",
      opts: [
        "बराबर",
        "एक ख़ास मुश्किल के साथ मुख़्तलिफ़ आसानियाँ",
        "एक मुश्किल एक आसानी",
        "बहुत मुश्किलें एक आसानी"
      ],
      ans: 1
    },
    arabicAyah: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    reference: "Ash-Sharh 94:6"
  },
  {
    id: "quran-scholars-say-this-verse-means",
    cat: "quran",
    diff: "expert",
    pts: 50,
    en: {
      q: "'لَا إِكْرَاهَ فِي الدِّينِ' — scholars say this verse means:",
      opts: [
        "Non-Muslims have no rights in Islam",
        "Faith must come from free will — forcing someone to accept Islam is forbidden",
        "All religions are equal",
        "This verse was abrogated"
      ],
      ans: 1
    },
    ur: {
      q: "'لَا إِكْرَاهَ فِي الدِّينِ' — علماء کہتے ہیں اس آیت کا مطلب ہے:",
      opts: [
        "غیر مسلموں کا کوئی حق نہیں",
        "ایمان آزادی سے آنا چاہیے — زبردستی حرام ہے",
        "تمام مذاہب برابر ہیں",
        "یہ آیت منسوخ ہے"
      ],
      ans: 1
    },
    hi: {
      q: "'ला इकराह फ़िद-दीन' — उलमा कहते हैं इस आयत का मतलब है:",
      opts: [
        "ग़ैर-मुस्लिमों का कोई हक़ नहीं",
        "ईमान आज़ादी से आना चाहिए — ज़बरदस्ती हराम है",
        "तमाम मज़ाहिब बराबर हैं",
        "यह आयत मन्सूख़ है"
      ],
      ans: 1
    },
    arabicAyah: "لَا إِكْرَاهَ فِي الدِّينِ ۖ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ",
    reference: "Al-Baqarah 2:256"
  },
  {
    id: "quran-in-which-month-was-the-quran",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "In which month was the Quran revealed?",
      opts: [
        "Dhul Hijjah",
        "Sha'ban",
        "Ramadan",
        "Muharram"
      ],
      ans: 2
    },
    ur: {
      q: "قرآن کس مہینے میں نازل ہوا؟",
      opts: [
        "ذوالحجہ",
        "شعبان",
        "رمضان",
        "محرم"
      ],
      ans: 2
    },
    hi: {
      q: "क़ुरआन किस महीने में नाज़िल हुआ?",
      opts: [
        "ज़िलहज्ज",
        "शाबान",
        "रमज़ान",
        "मुहर्रम"
      ],
      ans: 2
    },
    arabicAyah: "شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ",
    reference: "Al-Baqarah 2:185"
  },
  {
    id: "quran-who-guarantees-the-preservation-of-the",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "Who guarantees the preservation of the Quran according to this verse?",
      opts: [
        "The angels",
        "The Companions",
        "Allah Himself",
        "The scholars"
      ],
      ans: 2
    },
    ur: {
      q: "اس آیت کے مطابق قرآن کی حفاظت کا ذمہ کس نے لیا ہے؟",
      opts: [
        "فرشتوں نے",
        "صحابہ کرام",
        "اللہ نے خود",
        "علماء"
      ],
      ans: 2
    },
    hi: {
      q: "इस आयत के मुताबिक़ क़ुरआन की हिफ़ाज़त का ज़िम्मा किसने लिया है?",
      opts: [
        "फ़रिश्तों ने",
        "सहाबा कराम",
        "अल्लाह ने ख़ुद",
        "उलमा"
      ],
      ans: 2
    },
    arabicAyah: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
    reference: "Al-Hijr 15:9"
  },
  {
    id: "quran-is-repeated-how-many-times-in-1",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ' is repeated how many times in Surah Al-Qamar?",
      opts: [
        "3",
        "2",
        "5",
        "4"
      ],
      ans: 3
    },
    ur: {
      q: "'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ' سورۃ القمر میں کتنی بار آئی ہے؟",
      opts: [
        "3 بار",
        "2 بار",
        "5 بار",
        "4 بار"
      ],
      ans: 3
    },
    hi: {
      q: "'व-लक़द यस्सर्नाल-क़ुरआना लिज़्-ज़िक्र' सूरह अल-क़मर में कितनी बार आई है?",
      opts: [
        "3 बार",
        "2 बार",
        "5 बार",
        "4 बार"
      ],
      ans: 3
    },
    arabicAyah: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
    reference: "Al-Qamar 54:17"
  },
  {
    id: "quran-what-does-mean-1",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "What does 'كُتِبَ عَلَيْكُمُ الصِّيَامُ' mean?",
      opts: [
        "Fasting is voluntary",
        "Fasting is recommended for you",
        "Fasting is cancelled",
        "Fasting is prescribed upon you"
      ],
      ans: 3
    },
    ur: {
      q: "'كُتِبَ عَلَيْكُمُ الصِّيَامُ' کا مطلب کیا ہے؟",
      opts: [
        "تم پر روزہ نفل ہے",
        "تم پر روزہ مستحب ہے",
        "تم سے روزہ ہٹا دیا",
        "تم پر روزہ فرض کیا گیا"
      ],
      ans: 3
    },
    hi: {
      q: "'कुतिबा अलैकुमुस-सियाम' का मतलब क्या है?",
      opts: [
        "तुम पर रोज़ा नफ़्ल है",
        "तुम पर रोज़ा मुस्तहब है",
        "तुम से रोज़ा हटा दिया",
        "तुम पर रोज़ा फ़र्ज़ किया गया"
      ],
      ans: 3
    },
    arabicAyah: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ",
    reference: "Al-Baqarah 2:183"
  },
  {
    id: "quran-this-verse-is-the-quran-s",
    cat: "quran",
    diff: "hard",
    pts: 30,
    en: {
      q: "This verse is the Quran's challenge (Tahhaddi). What does Allah challenge disbelievers to do?",
      opts: [
        "Count all Surahs",
        "Produce even one Surah similar to the Quran",
        "Translate the Quran",
        "Memorise one Surah"
      ],
      ans: 1
    },
    ur: {
      q: "یہ قرآن کا چیلنج (تحدی) ہے۔ اللہ منکروں کو کیا چیلنج دیتا ہے؟",
      opts: [
        "تمام سورتیں گنیں",
        "ایک جیسی سورت لے آئیں",
        "قرآن کا ترجمہ کریں",
        "ایک سورت حفظ کریں"
      ],
      ans: 1
    },
    hi: {
      q: "यह क़ुरआन का चैलेंज (तहद्दी) है। अल्लाह मुनकिरों को क्या चैलेंज देता है?",
      opts: [
        "तमाम सूरतें गिनें",
        "एक जैसी सूरत ले आएँ",
        "क़ुरआन का तर्जुमा करें",
        "एक सूरत हिफ़्ज़ करें"
      ],
      ans: 1
    },
    arabicAyah: "وَإِن كُنتُمْ فِي رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا بِسُورَةٍ مِّن مِّثْلِهِ",
    reference: "Al-Baqarah 2:23"
  },
  {
    id: "quran-what-does-confirm-about-prophet-muhammad",
    cat: "quran",
    diff: "expert",
    pts: 50,
    en: {
      q: "What does 'خَاتَمَ النَّبِيِّينَ' confirm about Prophet Muhammad ﷺ?",
      opts: [
        "He is the Seal/Last of all Prophets — no prophet after him",
        "He was greatest in rank only",
        "He was the first Prophet",
        "He was only a messenger, not a prophet"
      ],
      ans: 0
    },
    ur: {
      q: "'خَاتَمَ النَّبِيِّينَ' نبی ﷺ کے بارے میں کیا ثابت کرتا ہے؟",
      opts: [
        "آپ تمام انبیاء کی مہر/آخری نبی ہیں — آپ کے بعد کوئی نبی نہیں",
        "آپ صرف درجے میں بڑے تھے",
        "آپ پہلے نبی تھے",
        "آپ صرف رسول تھے نبی نہیں"
      ],
      ans: 0
    },
    hi: {
      q: "'ख़ातम उन-नबिय्यीन' नबी (सल्ल.) के बारे में क्या साबित करता है?",
      opts: [
        "आप तमाम अंबिया की मुहर/आख़िरी नबी हैं — आपके बाद कोई नबी नहीं",
        "आप सिर्फ़ दर्जे में बड़े थे",
        "आप पहले नबी थे",
        "आप सिर्फ़ रसूल थे नबी नहीं"
      ],
      ans: 0
    },
    arabicAyah: "وَمَا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ",
    reference: "Al-Ahzab 33:40"
  },
  {
    id: "quran-which-surah-contains-the-first-verses",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "Which Surah contains the first verses revealed to the Prophet ﷺ?",
      opts: [
        "Al-Muddaththir",
        "Al-Fatiha",
        "Al-Baqarah",
        "Al-Alaq"
      ],
      ans: 3
    },
    ur: {
      q: "نبی ﷺ پر سب سے پہلے نازل ہونے والی آیات کس سورت میں ہیں؟",
      opts: [
        "المدثر",
        "الفاتحہ",
        "البقرۃ",
        "العلق"
      ],
      ans: 3
    },
    hi: {
      q: "नबी (सल्ल.) पर सबसे पहले नाज़िल होने वाली आयात किस सूरत में हैं?",
      opts: [
        "अल-मुद्दस्सिर",
        "अल-फ़ातिहा",
        "अल-बक़रह",
        "अल-अलक़"
      ],
      ans: 3
    },
    arabicAyah: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
    reference: "Al-Alaq 96:1"
  },
  {
    id: "hadith-the-prophet-said-the-best-of",
    cat: "hadith",
    diff: "easy",
    pts: 10,
    en: {
      q: "The Prophet ﷺ said: 'The best of you are those who learn the Quran and ___.'",
      opts: [
        "teach it to others",
        "recite it daily",
        "recite it slowly",
        "memorise it"
      ],
      ans: 0
    },
    ur: {
      q: "نبی ﷺ نے فرمایا: 'تم میں سے بہترین وہ ہے جو قرآن سیکھے اور ___'",
      opts: [
        "دوسروں کو سکھائے",
        "روزانہ پڑھے",
        "آہستہ پڑھے",
        "حفظ کرے"
      ],
      ans: 0
    },
    hi: {
      q: "नबी (सल्ल.) ने फ़रमाया: 'तुममें सबसे बेहतर वह है जो क़ुरआन सीखे और ___'",
      opts: [
        "दूसरों को सिखाए",
        "रोज़ाना पढ़े",
        "आहिस्ता पढ़े",
        "हिफ़्ज़ करे"
      ],
      ans: 0
    }
  },
  {
    id: "hadith-the-prophet-said-actions-are-judged",
    cat: "hadith",
    diff: "easy",
    pts: 10,
    en: {
      q: "The Prophet ﷺ said: 'Actions are judged by ___.'",
      opts: [
        "wealth",
        "intentions (Niyyah)",
        "companions",
        "results"
      ],
      ans: 1
    },
    ur: {
      q: "نبی ﷺ نے فرمایا: 'اعمال کا دارومدار ___ پر ہے۔'",
      opts: [
        "مال پر",
        "نیتوں پر",
        "ساتھیوں",
        "نتائج"
      ],
      ans: 1
    },
    hi: {
      q: "नबी (सल्ल.) ने फ़रमाया: 'अमल का दारोमदार ___ पर है।'",
      opts: [
        "माल पर",
        "नीयतों पर",
        "साथियों",
        "नतीजों"
      ],
      ans: 1
    }
  },
  {
    id: "hadith-the-prophet-said-none-of-you",
    cat: "hadith",
    diff: "medium",
    pts: 20,
    en: {
      q: "The Prophet ﷺ said: 'None of you truly believes until he loves for his brother what he ___.'",
      opts: [
        "loves for himself",
        "has himself",
        "prays for himself",
        "earns himself"
      ],
      ans: 0
    },
    ur: {
      q: "نبی ﷺ نے فرمایا: 'تم میں سے کوئی مومن نہیں جب تک اپنے بھائی کے لیے وہی نہ چاہے جو اپنے لیے ___'",
      opts: [
        "پسند کرتا ہے",
        "رکھتا ہے",
        "دعا کرتا ہے",
        "کماتا ہے"
      ],
      ans: 0
    },
    hi: {
      q: "नबी (सल्ल.) ने फ़रमाया: 'तुममें से कोई मोमिन नहीं जब तक अपने भाई के लिए वही न चाहे जो अपने लिए ___'",
      opts: [
        "पसंद करता है",
        "रखता है",
        "दुआ करता है",
        "कमाता है"
      ],
      ans: 0
    }
  },
  {
    id: "hadith-the-prophet-said-seeking-knowledge-is",
    cat: "hadith",
    diff: "medium",
    pts: 20,
    en: {
      q: "The Prophet ﷺ said: 'Seeking knowledge is an obligation upon every ___.'",
      opts: [
        "male Muslim",
        "free person",
        "scholar",
        "Muslim (male and female)"
      ],
      ans: 3
    },
    ur: {
      q: "نبی ﷺ نے فرمایا: 'علم حاصل کرنا ہر ___ پر فرض ہے۔'",
      opts: [
        "مسلمان مرد",
        "آزاد شخص",
        "عالم",
        "مسلمان (مرد و عورت)"
      ],
      ans: 3
    },
    hi: {
      q: "नबी (सल्ल.) ने फ़रमाया: 'इल्म हासिल करना हर ___ पर फ़र्ज़ है।'",
      opts: [
        "मुसलमान मर्द",
        "आज़ाद शख़्स",
        "आलिम",
        "मुसलमान (मर्द व औरत)"
      ],
      ans: 3
    }
  },
  {
    id: "hadith-according-to-hadith-which-deed-continues",
    cat: "hadith",
    diff: "medium",
    pts: 20,
    en: {
      q: "According to Hadith, which deed continues to benefit a person even after death?",
      opts: [
        "Daily prayers",
        "Hajj only",
        "Fasting in Ramadan",
        "Sadaqah Jariyah, beneficial knowledge, or righteous child who prays"
      ],
      ans: 3
    },
    ur: {
      q: "حدیث کے مطابق کون سا عمل موت کے بعد بھی فائدہ دیتا رہتا ہے؟",
      opts: [
        "روزانہ نمازیں",
        "صرف حج",
        "رمضان کے روزے",
        "صدقہ جاریہ، نافع علم، یا نیک اولاد"
      ],
      ans: 3
    },
    hi: {
      q: "हदीस के मुताबिक़ कौन सा अमल मौत के बाद भी फ़ायदा देता रहता है?",
      opts: [
        "रोज़ाना नमाज़ें",
        "सिर्फ़ हज",
        "रमज़ान के रोज़े",
        "सदक़ह जारिया, नाफ़े इल्म, या नेक औलाद"
      ],
      ans: 3
    }
  },
  {
    id: "hadith-the-prophet-said-the-strong-person",
    cat: "hadith",
    diff: "hard",
    pts: 30,
    en: {
      q: "The Prophet ﷺ said: 'The strong person is one who controls ___ when angry.'",
      opts: [
        "his wealth",
        "his tongue",
        "his hands",
        "himself (his nafs)"
      ],
      ans: 3
    },
    ur: {
      q: "نبی ﷺ نے فرمایا: 'پہلوان وہ ہے جو غصے میں ___ کو قابو میں رکھے۔'",
      opts: [
        "مال کو",
        "زبان",
        "ہاتھوں",
        "اپنے آپ (نفس) کو"
      ],
      ans: 3
    },
    hi: {
      q: "नबी (सल्ल.) ने फ़रमाया: 'पहलवान वह है जो ग़ुस्से में ___ को क़ाबू में रखे।'",
      opts: [
        "माल को",
        "ज़बान",
        "हाथों",
        "अपने आप (नफ़्स) को"
      ],
      ans: 3
    }
  },
  {
    id: "hadith-the-prophet-said-whoever-reads-ayat",
    cat: "hadith",
    diff: "expert",
    pts: 50,
    en: {
      q: "The Prophet ﷺ said: whoever reads Ayat Al-Kursi after every obligatory prayer, nothing prevents him from entering Paradise except ___.",
      opts: [
        "Major sins",
        "Lack of Hajj",
        "Death",
        "Missing one prayer"
      ],
      ans: 2
    },
    ur: {
      q: "نبی ﷺ نے فرمایا: جو ہر فرض نماز کے بعد آیت الکرسی پڑھے اسے جنت سے ___ کے علاوہ کچھ نہیں روکتا۔",
      opts: [
        "کبیرہ گناہ",
        "حج نہ کرنا",
        "موت",
        "ایک نماز چھوڑنا"
      ],
      ans: 2
    },
    hi: {
      q: "नबी (सल्ल.) ने फ़रमाया: जो हर फ़र्ज़ नमाज़ के बाद आयत अल-कुर्सी पढ़े उसे जन्नत से ___ के सिवा कुछ नहीं रोकता।",
      opts: [
        "कबीरा गुनाह",
        "हज न करना",
        "मौत",
        "एक नमाज़ छोड़ना"
      ],
      ans: 2
    }
  },
  {
    id: "seerah-in-the-battle-of-badr-how",
    cat: "seerah",
    diff: "medium",
    pts: 20,
    en: {
      q: "In the Battle of Badr, how many Muslims fought against approximately 1000 Quraysh?",
      opts: [
        "100",
        "200",
        "313",
        "500"
      ],
      ans: 2
    },
    ur: {
      q: "غزوہ بدر میں تقریباً 1000 قریش کے خلاف کتنے مسلمان لڑے؟",
      opts: [
        "100",
        "200",
        "313",
        "500"
      ],
      ans: 2
    },
    hi: {
      q: "ग़ज़वह बद्र में तक़रीबन 1000 क़ुरैश के ख़िलाफ़ कितने मुसलमान लड़े?",
      opts: [
        "100",
        "200",
        "313",
        "500"
      ],
      ans: 2
    }
  },
  {
    id: "seerah-what-was-the-first-female-martyr",
    cat: "seerah",
    diff: "medium",
    pts: 20,
    en: {
      q: "What was the first female martyr of Islam?",
      opts: [
        "Aisha رضي الله عنها",
        "Fatimah رضي الله عنها",
        "Khadijah رضي الله عنها",
        "Sumayyah رضي الله عنها"
      ],
      ans: 3
    },
    ur: {
      q: "اسلام کی پہلی خاتون شہید کون تھیں؟",
      opts: [
        "عائشہ رضی اللہ عنہا",
        "فاطمہ رضی اللہ عنہا",
        "خدیجہ رضی اللہ عنہا",
        "سمیہ رضی اللہ عنہا"
      ],
      ans: 3
    },
    hi: {
      q: "इस्लाम की पहली ख़ातून शहीद कौन थीं?",
      opts: [
        "आइशा (रज़ि.)",
        "फ़ातिमा (रज़ि.)",
        "ख़दीजा (रज़ि.)",
        "सुमय्या (रज़ि.)"
      ],
      ans: 3
    }
  },
  {
    id: "seerah-what-was-the-prophet-s-title",
    cat: "seerah",
    diff: "hard",
    pts: 30,
    en: {
      q: "What was the Prophet's ﷺ title 'Al-Ameen' given before prophethood mean?",
      opts: [
        "The Scholar",
        "The Leader",
        "The Trustworthy",
        "The Brave"
      ],
      ans: 2
    },
    ur: {
      q: "نبوت سے پہلے دیا گیا لقب 'الامین' کا مطلب کیا ہے؟",
      opts: [
        "عالم",
        "قائد",
        "امانتدار",
        "بہادر"
      ],
      ans: 2
    },
    hi: {
      q: "नबुव्वत से पहले दिया गया लक़ब 'अल-अमीन' का मतलब क्या है?",
      opts: [
        "आलिम",
        "क़ाइद",
        "अमानतदार",
        "बहादुर"
      ],
      ans: 2
    }
  },
  {
    id: "seerah-the-prophet-passed-away-on-which",
    cat: "seerah",
    diff: "expert",
    pts: 50,
    en: {
      q: "The Prophet ﷺ passed away on which date?",
      opts: [
        "27 Ramadan 11 AH",
        "12 Rabi Al-Awwal 11 AH",
        "12 Rajab 9 AH",
        "10 Muharram 10 AH"
      ],
      ans: 1
    },
    ur: {
      q: "نبی ﷺ کی وفات کس تاریخ کو ہوئی؟",
      opts: [
        "27 رمضان 11 ہجری",
        "12 ربیع الاول 11 ہجری",
        "12 رجب 9 ہجری",
        "10 محرم 10 ہجری"
      ],
      ans: 1
    },
    hi: {
      q: "नबी (सल्ल.) की वफ़ात किस तारीख़ को हुई?",
      opts: [
        "27 रमज़ान 11 हिजरी",
        "12 रबीउल अव्वल 11 हिजरी",
        "12 रजब 9 हिजरी",
        "10 मुहर्रम 10 हिजरी"
      ],
      ans: 1
    }
  },
  {
    id: "fiqh-hajj-is-obligatory-once-for-muslims",
    cat: "fiqh",
    diff: "hard",
    pts: 30,
    en: {
      q: "Hajj is obligatory once for Muslims who are:",
      opts: [
        "Physically and financially capable (Istita'ah)",
        "Male only",
        "Living in Saudi Arabia",
        "Under 40 years old"
      ],
      ans: 0
    },
    ur: {
      q: "حج ان مسلمانوں پر فرض ہے جو:",
      opts: [
        "جسمانی اور مالی طور پر قادر ہوں (استطاعت)",
        "صرف مرد ہوں",
        "سعودی عرب میں رہتے ہوں",
        "40 سال سے کم ہوں"
      ],
      ans: 0
    },
    hi: {
      q: "हज उन मुसलमानों पर फ़र्ज़ है जो:",
      opts: [
        "जिस्मानी और माली तौर पर क़ादिर हों (इस्तिताअह)",
        "सिर्फ़ मर्द हों",
        "सऊदी अरब में रहते हों",
        "40 साल से कम हों"
      ],
      ans: 0
    },
    arabicAyah: "وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ",
    reference: "Al-Baqarah 2:196"
  },
  {
    id: "history-the-city-of-madinah-was-originally",
    cat: "history",
    diff: "medium",
    pts: 20,
    en: {
      q: "The city of Madinah was originally called:",
      opts: [
        "Hijaz",
        "Al-Madinah",
        "Yathrib",
        "Taibah"
      ],
      ans: 2
    },
    ur: {
      q: "مدینہ شہر کا اصل نام کیا تھا؟",
      opts: [
        "حجاز",
        "المدینہ",
        "یثرب",
        "طیبہ"
      ],
      ans: 2
    },
    hi: {
      q: "मदीना शहर का असल नाम क्या था?",
      opts: [
        "हिजाज़",
        "अल-मदीना",
        "यसरब",
        "तैबह"
      ],
      ans: 2
    }
  },
  {
    id: "history-in-the-battle-of-uhud-why",
    cat: "history",
    diff: "hard",
    pts: 30,
    en: {
      q: "In the Battle of Uhud, why did the initially winning Muslims face a setback?",
      opts: [
        "Archers left their positions against the Prophet's ﷺ order, allowing cavalry to attack from behind",
        "They ran out of water",
        "Suddenly outnumbered",
        "The Prophet was martyred"
      ],
      ans: 0
    },
    ur: {
      q: "غزوہ احد میں ابتداً جیتتے مسلمانوں کو نقصان کیوں ہوا؟",
      opts: [
        "تیر اندازوں نے نبی ﷺ کے حکم کے خلاف پہاڑ چھوڑا، گھڑسوار پیچھے سے آئے",
        "پانی ختم ہو گیا",
        "اچانک دشمن بڑھ گئے",
        "نبی شہید ہو گئے"
      ],
      ans: 0
    },
    hi: {
      q: "ग़ज़वह उहुद में शुरू में जीतते मुसलमानों को नुक़सान क्यों हुआ?",
      opts: [
        "तीरंदाज़ों ने नबी (सल्ल.) के हुक्म के ख़िलाफ़ पहाड़ छोड़ा, घुड़सवार पीछे से आए",
        "पानी ख़त्म हो गया",
        "अचानक दुश्मन बढ़ गए",
        "नबी शहीद हो गए"
      ],
      ans: 0
    }
  },
  {
    id: "pillars-during-hajj-missing-wuquf-arafat-standing",
    cat: "pillars",
    diff: "hard",
    pts: 30,
    en: {
      q: "During Hajj, missing Wuquf Arafat (standing at Arafat) means:",
      opts: [
        "Hajj is incomplete but valid",
        "The Hajj is INVALID — must be repeated next year",
        "It is optional anyway",
        "Only a penalty applies"
      ],
      ans: 1
    },
    ur: {
      q: "حج میں وقوف عرفات (عرفات میں کھڑے ہونا) چھوڑ دینے سے:",
      opts: [
        "حج نامکمل لیکن درست ہے",
        "حج باطل ہو جاتا ہے — اگلے سال دوبارہ کرنا ہوگا",
        "یہ اختیاری ہے",
        "صرف دم دینا ہوگا"
      ],
      ans: 1
    },
    hi: {
      q: "हज में वुक़ूफ़ अरफ़ात (अरफ़ात में खड़े होना) छोड़ देने से:",
      opts: [
        "हज नामुकम्मल लेकिन दुरुस्त है",
        "हज बातिल हो जाता है — अगले साल दोबारा करना होगा",
        "यह इख़्तियारी है",
        "सिर्फ़ दम देना होगा"
      ],
      ans: 1
    }
  },
  {
    id: "names-what-does-al-ghafoor-mean",
    cat: "names",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does 'Al-Ghafoor' (الغفور) mean?",
      opts: [
        "The Creator",
        "The All-Knowing",
        "The Provider",
        "The Most Forgiving"
      ],
      ans: 3
    },
    ur: {
      q: "'الغفور' کا مطلب کیا ہے؟",
      opts: [
        "پیدا کرنے والا",
        "سب کچھ جاننے والا",
        "رزق دینے والا",
        "بہت زیادہ بخشنے والا"
      ],
      ans: 3
    },
    hi: {
      q: "'अल-ग़फ़ूर' का मतलब क्या है?",
      opts: [
        "पैदा करने वाला",
        "सब कुछ जानने वाला",
        "रिज़्क़ देने वाला",
        "बहुत ज़्यादा बख़्शने वाला"
      ],
      ans: 3
    }
  },
  {
    id: "names-what-does-al-wahhab-mean",
    cat: "names",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does 'Al-Wahhab' (الوهاب) mean?",
      opts: [
        "The Guardian",
        "The Judge",
        "The Generous Bestower",
        "The First"
      ],
      ans: 2
    },
    ur: {
      q: "'الوهاب' کا مطلب کیا ہے؟",
      opts: [
        "محافظ",
        "فیصلہ کرنے والا",
        "بے حساب عطا کرنے والا",
        "اول"
      ],
      ans: 2
    },
    hi: {
      q: "'अल-वह्हाब' का मतलब क्या है?",
      opts: [
        "मुहाफ़िज़",
        "फ़ैसला करने वाला",
        "बेहिसाब अता करने वाला",
        "अव्वल"
      ],
      ans: 2
    }
  },
  {
    id: "names-al-hayy-al-qayyum-together-mean",
    cat: "names",
    diff: "medium",
    pts: 20,
    en: {
      q: "'Al-Hayy Al-Qayyum' together mean:",
      opts: [
        "The Ever-Living, the Self-Sustaining — He lives forever and all depend on Him",
        "The First, the Last",
        "The Knowing, the Wise",
        "The Gracious, the Merciful"
      ],
      ans: 0
    },
    ur: {
      q: "'الحي القيوم' مل کر کیا مطلب دیتے ہیں؟",
      opts: [
        "ہمیشہ زندہ، ہر چیز کو قائم رکھنے والا",
        "اول، آخر",
        "جاننے والا، حکیم",
        "رحمان، رحیم"
      ],
      ans: 0
    },
    hi: {
      q: "'अल-हय्य अल-क़य्यूम' मिल कर क्या मतलब देते हैं?",
      opts: [
        "हमेशा ज़िंदा, हर चीज़ को क़ायम रखने वाला",
        "अव्वल, आख़िर",
        "जानने वाला, हकीम",
        "रहमान, रहीम"
      ],
      ans: 0
    }
  },
  {
    id: "names-what-does-al-muqaddim-al-mu",
    cat: "names",
    diff: "hard",
    pts: 30,
    en: {
      q: "What does 'Al-Muqaddim Al-Mu'akhkhir' mean?",
      opts: [
        "All-Hearing and All-Seeing",
        "The One who brings forward and delays — He controls timing of all things",
        "The Apparent and the Hidden",
        "The First and the Last"
      ],
      ans: 1
    },
    ur: {
      q: "'المقدم المؤخر' کا مطلب کیا ہے؟",
      opts: [
        "سب سننے اور دیکھنے والا",
        "آگے کرنے اور پیچھے کرنے والا — تمام چیزوں کے وقت کا کنٹرول",
        "ظاہر اور باطن",
        "اول و آخر"
      ],
      ans: 1
    },
    hi: {
      q: "'अल-मुक़द्दिम अल-मुअख़्ख़िर' का मतलब क्या है?",
      opts: [
        "सब सुनने और देखने वाला",
        "आगे करने और पीछे करने वाला — तमाम चीज़ों के वक़्त का कंट्रोल",
        "ज़ाहिर और बातिन",
        "अव्वल व आख़िर"
      ],
      ans: 1
    }
  },
  {
    id: "names-what-is-the-difference-between-al",
    cat: "names",
    diff: "expert",
    pts: 50,
    en: {
      q: "What is the difference between 'Al-Hakam' (الحكم) and 'Al-Hakim' (الحكيم)?",
      opts: [
        "Identical",
        "Al-Hakam is stronger",
        "Al-Hakam = The Judge (who rules); Al-Hakim = The All-Wise (possessing wisdom in all things)",
        "Al-Hakim is for dunya; Al-Hakam for akhirah"
      ],
      ans: 2
    },
    ur: {
      q: "'الحكم' اور 'الحكيم' میں کیا فرق ہے؟",
      opts: [
        "دونوں ایک ہیں",
        "الحكم زیادہ قوی",
        "الحكم = فیصلہ کرنے والا؛ الحكيم = تمام چیزوں میں حکمت والا",
        "الحكيم دنیا، الحكم آخرت"
      ],
      ans: 2
    },
    hi: {
      q: "'अल-हकम' और 'अल-हकीम' में क्या फ़र्क़ है?",
      opts: [
        "दोनों एक हैं",
        "अल-हकम ज़्यादा क़वी",
        "अल-हकम = फ़ैसला करने वाला; अल-हकीम = तमाम चीज़ों में हिकमत वाला",
        "अल-हकीम दुनिया, अल-हकम आख़िरत"
      ],
      ans: 2
    }
  },
  {
    id: "fiqh-which-daily-obligatory-prayer-has-no",
    cat: "fiqh",
    diff: "easy",
    pts: 10,
    en: {
      q: "Which daily obligatory prayer has NO Sunnah or Nafl after it until sunset?",
      opts: [
        "Dhuhr Prayer",
        "Fajr Prayer",
        "Asr Prayer",
        "Maghrib Prayer"
      ],
      ans: 2
    },
    ur: {
      q: "کس فرض نماز کے بعد غروب آفتاب تک کوئی سنت یا نفل نماز نہیں پڑھی جاتی؟",
      opts: [
        "نماز ظہر",
        "نماز فجر",
        "نماز عصر",
        "نماز مغرب"
      ],
      ans: 2
    },
    hi: {
      q: "किस फ़र् नमाज़ के बाद सूर्यास्त तक कोई सुन्नत या नफ़्ल नमाज़ नहीं पढ़ी जाती?",
      opts: [
        "ज़ुहर नमाज़",
        "फ़ज्र नमाज़",
        "अस्र नमाज़",
        "मग़रिब नमाज़"
      ],
      ans: 2
    }
  },
  {
    id: "fiqh-what-is-the-obligatory-bath-required",
    cat: "fiqh",
    diff: "medium",
    pts: 20,
    en: {
      q: "What is the obligatory bath required after major ritual impurity called?",
      opts: [
        "Tayammum",
        "Ghusl",
        "Masah",
        "Wudu"
      ],
      ans: 1
    },
    ur: {
      q: "بڑی ناپاکی دور کرنے کے لیے فرض غسل کو کیا کہتے ہیں؟",
      opts: [
        "تیمم",
        "غسل",
        "مسح",
        "وضو"
      ],
      ans: 1
    },
    hi: {
      q: "बड़ी नापाकी दूर करने के लिए फ़र्ज़ स्नान को क्या कहते हैं?",
      opts: [
        "तयम्मुम",
        "ग़ुस्ल",
        "मसहा",
        "वुज़ू"
      ],
      ans: 1
    }
  },
  {
    id: "fiqh-if-a-worshipper-makes-an-unintentional",
    cat: "fiqh",
    diff: "medium",
    pts: 20,
    en: {
      q: "If a worshipper makes an unintentional error in Salah, how do they compensate at the end?",
      opts: [
        "Perform Sajdah as-Sahw (prostration of forgetfulness)",
        "Ignore it completely",
        "Repeat the entire prayer",
        "Give charity"
      ],
      ans: 0
    },
    ur: {
      q: "اگر نماز میں بھولے سے کوئی واجب چھوٹ جائے تو آخر میں کیا کیا جاتا ہے؟",
      opts: [
        "سجدہ سہو کرنا",
        "نظر انداز کرنا",
        "نماز دوبارہ پڑھنا",
        "صدقہ دینا"
      ],
      ans: 0
    },
    hi: {
      q: "यदि नमाज़ में भूल से कोई वाजिब छूट जाए तो अंत में क्या किया जाता है?",
      opts: [
        "सजदा-ए-सहव करना",
        "नज़रअंदाज़ करना",
        "नमाज़ दोबारा पढ़ना",
        "सदाक़ा देना"
      ],
      ans: 0
    }
  },
  {
    id: "fiqh-in-islamic-jurisprudence-an-action-that",
    cat: "fiqh",
    diff: "expert",
    pts: 50,
    en: {
      q: "In Islamic jurisprudence, an action that is permissible without reward or sin is termed:",
      opts: [
        "Mubah",
        "Makruh",
        "Wajib",
        "Mundub"
      ],
      ans: 0
    },
    ur: {
      q: "فقہ میں وہ عمل جس کے کرنے پر نہ ثواب ہو نہ گناہ، اسے کیا کہتے ہیں؟",
      opts: [
        "مباح",
        "مکروہ",
        "واجب",
        "مندوب"
      ],
      ans: 0
    },
    hi: {
      q: "फ़िक़्ह में वह अमल जिसके करने पर न सवाब हो न गुनाह, उसे क्या कहते हैं?",
      opts: [
        "मुबाह",
        "मकरूह",
        "वाजिब",
        "मंदूब"
      ],
      ans: 0
    }
  },
  {
    id: "tajweed-what-is-the-purpose-of-learning",
    cat: "tajweed",
    diff: "easy",
    pts: 10,
    en: {
      q: "What is the purpose of learning the science of Tajweed?",
      opts: [
        "To translate Arabic text",
        "To memorize history",
        "To write calligraphy",
        "To recite the Quran correctly with proper pronunciation and rules"
      ],
      ans: 3
    },
    ur: {
      q: "علم تجوید سیکھنے کا بنیادی مقصد کیا ہے؟",
      opts: [
        "عربی کا ترجمہ کرنا",
        "تاریخ یاد کرنا",
        "خطاطی سیکھنا",
        "قرآن پاک کو مخارج اور قواعد کے ساتھ درست پڑھنا"
      ],
      ans: 3
    },
    hi: {
      q: "तजवीद का मक़सद क्या है?",
      opts: [
        "अनुवाद करना",
        "इतिहास याद करना",
        "सुलेखन",
        "क़ुरआन को सही उच्चारण और नियमों के साथ पढ़ना"
      ],
      ans: 3
    }
  },
  {
    id: "tajweed-what-rule-applies-when-noon-sakinah",
    cat: "tajweed",
    diff: "medium",
    pts: 20,
    en: {
      q: "What rule applies when Noon Sakinah is followed by throat letters (ء ه ع ح غ خ)?",
      opts: [
        "Ikhfa",
        "Izhar (clear pronunciation without nasalization)",
        "Idgham",
        "Iqlab"
      ],
      ans: 1
    },
    ur: {
      q: "نون ساکن کے بعد اگر حروفِ حلقی (ء ه ع ح غ خ) آئیں تو کیا ہوتا ہے؟",
      opts: [
        "اخفاء",
        "اظہار (بغیر غنہ کے صاف پڑھنا)",
        "ادغام",
        "اقلاب"
      ],
      ans: 1
    },
    hi: {
      q: "नूने साकीन के बाद यदि हलक़ी अक्षर ( ) आएँ तो क्या होता है?",
      opts: [
        "इख़फ़ा",
        "इज़हार (बिना ग़ुन्ना के साफ़ पढ़ना)",
        "इदग़ाम",
        "इक़लाब"
      ],
      ans: 1
    }
  },
  {
    id: "tajweed-what-madd-occurs-when-a-hamzah",
    cat: "tajweed",
    diff: "hard",
    pts: 30,
    en: {
      q: "What Madd occurs when a Hamzah follows a Madd letter in the SAME word?",
      opts: [
        "Madd Arid",
        "Madd Badal",
        "Madd Muttasil (Connected Prolongation)",
        "Madd Munfasil"
      ],
      ans: 2
    },
    ur: {
      q: "اگر ایک ہی کلمہ میں حرفِ مدہ کے بعد ہمزہ آئے تو کون سا مد ہوتا ہے؟",
      opts: [
        "مد عارض",
        "مد بدل",
        "مد متصل",
        "مد منفصل"
      ],
      ans: 2
    },
    hi: {
      q: "यदि एक ही शब्द में मद्द के अक्षर के बाद हमज़ा आए तो कौन सा मद्द होता है?",
      opts: [
        "मद्द आरिज़",
        "मद्द बदल",
        "मद्द मुत्तसिल",
        "मद्द मुनफ़सिल"
      ],
      ans: 2
    }
  },
  {
    id: "tajweed-which-letters-form-idgham-with-ghunnah",
    cat: "tajweed",
    diff: "expert",
    pts: 50,
    en: {
      q: "Which letters form 'Idgham with Ghunnah' (Idgham Bighunnah)?",
      opts: [
        "ينمو (YANMU: ي ن م و)",
        "حروف حلقی",
        "قطب جد",
        "یرملون (Yarmaloon)"
      ],
      ans: 0
    },
    ur: {
      q: "ادغام با غنہ (ادغام مع الغنہ) کے حروف کون سے ہیں؟",
      opts: [
        "ینمو (ی ن م و)",
        "حروفِ حلقی",
        "قطب جد",
        "یرملون"
      ],
      ans: 0
    },
    hi: {
      q: "इदग़ाम बा-ग़ुन्ना के कौन से अक्षर हैं?",
      opts: [
        "यनमू (य न म व - )",
        "हलक़ी अक्षर",
        "क़ुतब जद्दीन",
        "यरमलून"
      ],
      ans: 0
    }
  },
  {
    id: "names-what-does-al-malik-mean",
    cat: "names",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does 'Al-Malik' (الملك) mean?",
      opts: [
        "The Forgiver",
        "The All-Hearing",
        "The Last",
        "The Sovereign / Absolute King"
      ],
      ans: 3
    },
    ur: {
      q: "اللہ تعالی کے نام 'الملك' کا کیا مطلب ہے؟",
      opts: [
        "بخشنے والا",
        "سب سننے والا",
        "آخری",
        "حقیقی بادشاہ / حاکمِ مطلق"
      ],
      ans: 3
    },
    hi: {
      q: "अल्लाह के नाम 'अल-मलिक' का अर्थ क्या है?",
      opts: [
        "क्षमाशील",
        "सर्वश्रवण",
        "अंतिम",
        "संप्रभु राजा"
      ],
      ans: 3
    }
  },
  {
    id: "names-what-does-as-salam-mean",
    cat: "names",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does 'As-Salam' (السلام) mean?",
      opts: [
        "The Creator",
        "The Judge",
        "The Source of Peace and Perfection",
        "The Strong"
      ],
      ans: 2
    },
    ur: {
      q: "'السلام' کا مطلب کیا ہے؟",
      opts: [
        "پیدا کرنے والا",
        "فیصلہ کرنے والا",
        "سلامتی اور نقائص سے پاک ذات",
        "قوی"
      ],
      ans: 2
    },
    hi: {
      q: "'अस-सलाम' का अर्थ क्या है?",
      opts: [
        "सृष्टिकर्ता",
        "न्यायी",
        "शांति का स्रोत एवं त्रुटिहीन",
        "शक्तिशाली"
      ],
      ans: 2
    }
  },
  {
    id: "names-what-does-al-wadud-mean",
    cat: "names",
    diff: "medium",
    pts: 20,
    en: {
      q: "What does 'Al-Wadud' (الودود) mean?",
      opts: [
        "The Powerful",
        "The Loving / Full of Affection",
        "The Hidden",
        "The Wrathful"
      ],
      ans: 1
    },
    ur: {
      q: "'الودود' کا مطلب کیا ہے؟",
      opts: [
        "قادر",
        "بہت محبت کرنے والا",
        "پوشیدہ",
        "غضب ناک"
      ],
      ans: 1
    },
    hi: {
      q: "'अल-वदूद' का अर्थ क्या है?",
      opts: [
        "शक्तिशाली",
        "अत्यंत प्रेम करने वाला",
        "छिपा हुआ",
        "क्रोधित"
      ],
      ans: 1
    }
  },
  {
    id: "names-what-does-al-latif-mean",
    cat: "names",
    diff: "medium",
    pts: 20,
    en: {
      q: "What does 'Al-Latif' (اللطيف) mean?",
      opts: [
        "The First",
        "The Subtle, Kind, and Understanding",
        "The Creator",
        "The King"
      ],
      ans: 1
    },
    ur: {
      q: "'اللطيف' کا مطلب کیا ہے؟",
      opts: [
        "اول",
        "باریک بین، مہربان اور لطیف",
        "خالق",
        "بادشاہ"
      ],
      ans: 1
    },
    hi: {
      q: "'अल-लतीफ़' का अर्थ क्या है?",
      opts: [
        "प्रथम",
        "सूक्ष्म, कृपालु और दयालु",
        "सृष्टिकर्ता",
        "राजा"
      ],
      ans: 1
    }
  },
  {
    id: "names-what-does-al-mujib-mean",
    cat: "names",
    diff: "hard",
    pts: 30,
    en: {
      q: "What does 'Al-Mujib' (المجيب) mean?",
      opts: [
        "The Creator of heavens",
        "The Strict in punishment",
        "The Answerer of Supplications",
        "The Manifest"
      ],
      ans: 2
    },
    ur: {
      q: "'المجيب' کا مطلب کیا ہے؟",
      opts: [
        "آسمانوں کا خالق",
        "سخت عذاب دینے والا",
        "دعاؤں کو قبول کرنے والا",
        "ظاہر"
      ],
      ans: 2
    },
    hi: {
      q: "'अल-मुजीब' का अर्थ क्या है?",
      opts: [
        "आकाश का सृष्टिकर्ता",
        "कठोर दंड देने वाला",
        "दुआएं स्वीकार करने वाला",
        "प्रकट"
      ],
      ans: 2
    }
  },
  {
    id: "names-what-does-al-warith-mean",
    cat: "names",
    diff: "expert",
    pts: 50,
    en: {
      q: "What does 'Al-Warith' (الوارث) mean?",
      opts: [
        "The Temporary Owner",
        "The Giver",
        "The Ultimate Inheritor of all creation after all perish",
        "The Guide"
      ],
      ans: 2
    },
    ur: {
      q: "'الوارث' کا مطلب کیا ہے؟",
      opts: [
        "عارضی مالک",
        "عطا کرنے والا",
        "سب کچھ فناء ہونے کے بعد کائنات کا حقیقی وارث",
        "رہنما"
      ],
      ans: 2
    },
    hi: {
      q: "'अल-वारिस' का अर्थ क्या है?",
      opts: [
        "अस्थाई मालिक",
        "दाता",
        "सब नष्ट होने के बाद पूरी सृष्टि का वास्तविक वारिस",
        "मार्गदर्शक"
      ],
      ans: 2
    }
  },
  {
    id: "tafseer-what-is-the-meaning-of-the",
    cat: "tafseer",
    diff: "easy",
    pts: 10,
    en: {
      q: "What is the meaning of the Quranic Dua 'Rabbi Zidni 'Ilma' (Surah Taha 20:114)?",
      opts: [
        "My Lord, forgive my sins",
        "My Lord, protect my family",
        "My Lord, increase me in wealth",
        "My Lord, increase me in knowledge"
      ],
      ans: 3
    },
    ur: {
      q: "قرآنی دعا 'رَبِّ زِدْنِي عِلْمًا' کا ترجمہ کیا ہے؟",
      opts: [
        "اے رب، میرے گناہ معاف فرما",
        "اے رب، میرے گھر والوں کی حفاظت فرما",
        "اے رب، میرے مال میں اضافہ فرما",
        "اے رب، میرے علم میں اضافہ فرما"
      ],
      ans: 3
    },
    hi: {
      q: "क़ुरआनी दुआ 'रब्बि ज़िदनी इल्मा' (20:114) का अर्थ क्या है?",
      opts: [
        "ऐ रब, मेरे गुनाह माफ़ कर",
        "ऐ रब, मेरे परिवार की रक्षा कर",
        "ऐ रब, मेरे धन में वृद्धि कर",
        "ऐ रब, मेरे ज्ञान में वृद्धि कर"
      ],
      ans: 3
    }
  },
  {
    id: "tafseer-which-dua-did-prophet-yunus-as",
    cat: "tafseer",
    diff: "easy",
    pts: 10,
    en: {
      q: "Which Dua did Prophet Yunus (AS) recite inside the whale?",
      opts: [
        "Hasbunallahu wa ni'mal wakeel",
        "Rabbi-j'alni muqeemas-salat",
        "Rabbana atina fid-dunya",
        "La ilaha illa anta subhanaka inni kuntu minadh-dhalimin (Ayat Kareema)"
      ],
      ans: 3
    },
    ur: {
      q: "حضرت یونس علیہ السلام نے مچھلی کے پیٹ میں کون سی دعا مانگی؟",
      opts: [
        "حسبنا الله ونعم الوكيل",
        "رب اجعلني مقيم الصلاة",
        "ربنا آتنا في الدنيا",
        "لا إِلَهَ إِلاَّ أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ (آیت کریمہ)"
      ],
      ans: 3
    },
    hi: {
      q: "हज़रत यूनुस ने मछली के पेट में कौन सी दुआ मांगी?",
      opts: [
        "हस्बुनल्लाहु व निअमल-वकील",
        "रब्बि-जअल्नी मुक़ीमस-सलात",
        "रब्बना आतिना फिद्दुनिया",
        "ला इलाहा इल्ला अंता सुभानका इन्नी कुंतु मिनज़-ज़ालिमीन (आयत-ए-करीमा)"
      ],
      ans: 3
    }
  },
  {
    id: "tafseer-in-surah-al-baqarah-2-201",
    cat: "tafseer",
    diff: "medium",
    pts: 20,
    en: {
      q: "In Surah Al-Baqarah 2:201, what do believers ask for in 'Rabbana atina fid-dunya hasanatan...'?",
      opts: [
        "Good in this life, good in Hereafter, and protection from Hellfire",
        "Long life",
        "Only worldly riches",
        "Victory in battles"
      ],
      ans: 0
    },
    ur: {
      q: "سورة البقرہ کی آیت 201 میں مومنین کیا دعا مانگتے ہیں؟",
      opts: [
        "دنیا کی بھلائی، آخرت کی بھلائی اور جہنم سے نجات",
        "لمبی عمر",
        "صرف دنیا کا مال",
        "جنگوں میں فتح"
      ],
      ans: 0
    },
    hi: {
      q: "सूरह अल-बक़रह 2:201 की दुआ 'रब्बना आतिना फिद्दुनिया...' में क्या मांगा जाता है?",
      opts: [
        "दुनिया की भलाई, आख़िरत की भलाई और जहन्नुम से हिफ़ाज़त",
        "लंबी उम्र",
        "केवल दुनिया का धन",
        "लड़ाइयों में जीत"
      ],
      ans: 0
    }
  },
  {
    id: "tafseer-which-dua-of-prophet-musa-as",
    cat: "tafseer",
    diff: "medium",
    pts: 20,
    en: {
      q: "Which Dua of Prophet Musa (AS) in Surah Al-Qasas 28:24 brought him shelter, job, and marriage?",
      opts: [
        "Rabbi-shrah li sadri",
        "Rabbi inni lima anzalta ilayya min khayrin faqeer",
        "Rabbana la tuzigh quloobana",
        "Sayyidul Istighfar"
      ],
      ans: 1
    },
    ur: {
      q: "حضرت موسیٰ علیہ السلام کی کون سی دعا پر اللہ نے فوراً چھت، روزگار اور رشتہ دیا؟",
      opts: [
        "رَبِّ اشْرَحْ لِي صَدْرِي",
        "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
        "رَبَّنَا لاَ تُزِغْ قُلُوبَنَا",
        "سید الاستغفار"
      ],
      ans: 1
    },
    hi: {
      q: "हज़रत मूसा (सल्ल.) की किस दुआ (28:24) पर अल्लाह ने तुरंत आश्रय, नौकरी और विवाह दिया?",
      opts: [
        "रब्बि-शरह ली सदरी",
        "रब्बि इन्नी लिमा अंज़ल्ता इलय्या मिन ख़ैरिन फ़क़ीर",
        "रब्बना ला तुज़िग़ क़ुलूबना",
        "सैय्यिदुल-इस्तिग़फ़ार"
      ],
      ans: 1
    }
  },
  {
    id: "tafseer-which-dua-of-prophet-ibrahim-as",
    cat: "tafseer",
    diff: "hard",
    pts: 30,
    en: {
      q: "Which Dua of Prophet Ibrahim (AS) in Surah Ibrahim 14:40 asks Allah to make him and his descendants establishers of prayer?",
      opts: [
        "Rabbana atina",
        "Rabbi zidni 'ilma",
        "La ilaha illa anta",
        "Rabbi-j'alni muqeemas-salati wa min dhurriyyati"
      ],
      ans: 3
    },
    ur: {
      q: "حضرت ابراہیم علیہ السلام کی کون سی دعا میں اپنے اور اولاد کے لیے نماز کی پابندی کی درخواست کی گئی؟",
      opts: [
        "رَبَّنَا آتِنَا",
        "رَبِّ زِدْنِي عِلْمًا",
        "لا إِلَهَ إِلاَّ أَنتَ",
        "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلاَةِ وَمِن ذُرِّيَّتِي"
      ],
      ans: 3
    },
    hi: {
      q: "हज़रत इब्राहिम (14:40) की किस दुआ में अपने व औलाद के लिए नमाज़ की पाबंदी मांगी गई?",
      opts: [
        "रब्बना आतिना",
        "रब्बि ज़िदनी इल्मा",
        "ला इलाहा इल्ला अंता",
        "रब्बि-जअल्नी मुक़ीमस-सलाति व मिन ज़ुर्रिय्यती"
      ],
      ans: 3
    }
  },
  {
    id: "tafseer-in-surah-ali-imran-3-8",
    cat: "tafseer",
    diff: "expert",
    pts: 50,
    en: {
      q: "In Surah Ali 'Imran 3:8, what does 'Rabbana la tuzigh quloobana ba'da idh hadaytana...' ask for?",
      opts: [
        "Protection from enemies",
        "Increase in children",
        "Forgiveness of past sins",
        "Steadfastness of hearts upon faith after receiving guidance"
      ],
      ans: 3
    },
    ur: {
      q: "سورة آل عمران کی آیت 8 'رَبَّنَا لاَ تُزِغْ قُلُوبَنَا...' کس چیز کی دعا کرتی ہے؟",
      opts: [
        "دشمنوں سے حفاظت",
        "اولاد میں اضافہ",
        "پچھلے گناہوں کی معافی",
        "ہدایت ملنے کے بعد دلوں کو ثابت قدم رکھنا"
      ],
      ans: 3
    },
    hi: {
      q: "सूरह आल-इमरान 3:8 'रब्बना ला तुज़िग़ क़ुलूबना...' में क्या मांगा जाता है?",
      opts: [
        "दुश्मनों से रक्षा",
        "औलाद में वृद्धि",
        "पुराने गुनाहों की माफ़ी",
        "हिदायत मिलने के बाद दिलों का ईमान पर सबात (स्थिरता)"
      ],
      ans: 3
    }
  },
  {
    id: "quran-which-surah-protects-its-reciter-from",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "Which Surah protects its reciter from the punishment of the grave?",
      opts: [
        "Yasin",
        "Al-Mulk",
        "Al-Waqi'ah",
        "Al-Kahf"
      ],
      ans: 1
    },
    ur: {
      q: "کون سی سورت اپنے پڑھنے والے کو عذابِ قبر سے محفوظ رکھتی ہے؟",
      opts: [
        "یس",
        "الملک",
        "الواقعہ",
        "الکہف"
      ],
      ans: 1
    },
    hi: {
      q: "कौन सी सूरत अपने पढ़ने वाले को अज़ाब-ए-क़ब्र से बचाती है?",
      opts: [
        "यासीन",
        "अल-मुल्क",
        "अल-वाक़िआ",
        "अल-कहफ़"
      ],
      ans: 1
    }
  },
  {
    id: "quran-what-is-another-famous-name-for",
    cat: "quran",
    diff: "easy",
    pts: 10,
    en: {
      q: "What is another famous name for Surah Al-Fatiha?",
      opts: [
        "Al-Zahrawayn",
        "Umm al-Kitab (Mother of the Book)",
        "Al-Furqan",
        "Al-Burhan"
      ],
      ans: 1
    },
    ur: {
      q: "سورة الفاتحہ کا ایک اور مشہور نام کیا ہے؟",
      opts: [
        "الزہراوین",
        "ام الکتاب (کتاب کی ماں)",
        "الفرقان",
        "البرہان"
      ],
      ans: 1
    },
    hi: {
      q: "सूरह अल-फ़ातिहा का दूसरा मशहूर नाम क्या है?",
      opts: [
        "अज़-ज़हरावैन",
        "उम्मुल-किताब",
        "अल-फ़ुरक़ान",
        "अल-बुर्हान"
      ],
      ans: 1
    }
  },
  {
    id: "quran-over-how-many-years-was-the",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "Over how many years was the Holy Quran revealed to Prophet Muhammad (SAW)?",
      opts: [
        "40 years",
        "30 years",
        "23 years",
        "10 years"
      ],
      ans: 2
    },
    ur: {
      q: "قرآن پاک نبی کریم ﷺ پر کتنے سال کے عرصے میں نازل ہوا؟",
      opts: [
        "40 سال",
        "30 سال",
        "23 سال",
        "10 سال"
      ],
      ans: 2
    },
    hi: {
      q: "पवित्र क़ुरआन पैग़म्बर मुहम्मद पर कितने वर्षों में नाज़िल हुआ?",
      opts: [
        "40 वर्ष",
        "30 वर्ष",
        "23 वर्ष",
        "10 वर्ष"
      ],
      ans: 2
    }
  },
  {
    id: "quran-what-are-the-surahs-revealed-in",
    cat: "quran",
    diff: "medium",
    pts: 20,
    en: {
      q: "What are the Surahs revealed in Makkah before the Hijrah called?",
      opts: [
        "Hijri",
        "Madani Surahs",
        "Makki Surahs",
        "Meccani"
      ],
      ans: 2
    },
    ur: {
      q: "ہجرت سے پہلے مکہ میں نازل ہونے والی سورتوں کو کیا کہتے ہیں؟",
      opts: [
        "ہجری",
        "مدنی سورتیں",
        "مکی سورتیں",
        "مکانی"
      ],
      ans: 2
    },
    hi: {
      q: "हिजरत से पहले मक्का में नाज़िल होने वाली सूरतों को क्या कहते हैं?",
      opts: [
        "हिजरी",
        "मदनी सूरतें",
        "मक्की सूरतें",
        "मकानी"
      ],
      ans: 2
    }
  },
  {
    id: "quran-which-surah-of-the-quran-is",
    cat: "quran",
    diff: "hard",
    pts: 30,
    en: {
      q: "Which Surah of the Quran is named after the Day of Judgment?",
      opts: [
        "Al-Qiyamah",
        "Al-Imran",
        "An-Nisa",
        "Al-Baqarah"
      ],
      ans: 0
    },
    ur: {
      q: "قرآن کی کون سی سورت قیامت کے دن کے نام پر ہے؟",
      opts: [
        "القیامہ",
        "آل عمران",
        "النساء",
        "البقرۃ"
      ],
      ans: 0
    },
    hi: {
      q: "क़ुरआन की कौन सी सूरत क़ियामत के दिन के नाम पर है?",
      opts: [
        "अल-क़ियामह",
        "आल-इमरान",
        "अन-निसा",
        "अल-बक़रह"
      ],
      ans: 0
    }
  },
  {
    id: "quran-surah-al-baqarah-and-surah-ali",
    cat: "quran",
    diff: "expert",
    pts: 50,
    en: {
      q: "Surah Al-Baqarah and Surah Ali 'Imran are together referred to in Hadith as:",
      opts: [
        "Al-Zahrawayn (The Two Luminous Ones)",
        "Al-Hawamim",
        "Al-Saba' al-Mathani",
        "Al-Mu'awwidhatayn"
      ],
      ans: 0
    },
    ur: {
      q: "سورة البقرہ اور سورة آل عمران کو حدیث میں مل کر کیا کہا گیا ہے؟",
      opts: [
        "الزہراوین (دو روشن سورتیں)",
        "الحوامیم",
        "السبع المثانی",
        "المعوذتین"
      ],
      ans: 0
    },
    hi: {
      q: "सूरह अल-बक़रह और सूरह आल-इमरान को हदीस में मिलकर क्या कहा गया है?",
      opts: [
        "अज़-ज़हरावैन (दो रोशन सूरतें)",
        "अल-हवामीम",
        "अल-सबउल-मथानी",
        "अल-मुअव्विज़तैन"
      ],
      ans: 0
    }
  },
  {
    id: "hadith-what-does-the-word-hadith-mean",
    cat: "hadith",
    diff: "easy",
    pts: 10,
    en: {
      q: "What does the word 'Hadith' mean literally?",
      opts: [
        "Poetry",
        "Saying, news, or report",
        "Book of law",
        "Commandment"
      ],
      ans: 1
    },
    ur: {
      q: "لفظ 'حدیث' کا لغوی معنی کیا ہے؟",
      opts: [
        "شاعری",
        "بات، خبر یا روایت",
        "قانون کی کتاب",
        "حکم"
      ],
      ans: 1
    },
    hi: {
      q: "'हदीस' शब्द का शाब्दिक अर्थ क्या है?",
      opts: [
        "कविता",
        "बात, समाचार या रिवायत",
        "कानून की किताब",
        "आदेश"
      ],
      ans: 1
    }
  },
  {
    id: "hadith-what-is-the-chain-of-narrators",
    cat: "hadith",
    diff: "medium",
    pts: 20,
    en: {
      q: "What is the chain of narrators in a Hadith called?",
      opts: [
        "Tafseer",
        "Takhrij",
        "Matn",
        "Isnad / Sanad"
      ],
      ans: 3
    },
    ur: {
      q: "حدیث میں راویوں کے سلسلے کو کیا کہتے ہیں؟",
      opts: [
        "تفسیر",
        "تخریج",
        "متن",
        "اسناد / سند"
      ],
      ans: 3
    },
    hi: {
      q: "हदीस में रिवायत करने वालों की शृंखला को क्या कहते हैं?",
      opts: [
        "तफ़सीर",
        "तख़रीज",
        "मतन",
        "इसनाद / सनद"
      ],
      ans: 3
    }
  },
  {
    id: "hadith-what-is-the-actual-text-of",
    cat: "hadith",
    diff: "medium",
    pts: 20,
    en: {
      q: "What is the actual text of the Prophet's saying in a Hadith called?",
      opts: [
        "Sanad",
        "Rawi",
        "Isnad",
        "Matn"
      ],
      ans: 3
    },
    ur: {
      q: "حدیث میں نبی کریم ﷺ کے اصل الفاظ کو کیا کہتے ہیں؟",
      opts: [
        "سند",
        "راوی",
        "اسناد",
        "متن"
      ],
      ans: 3
    },
    hi: {
      q: "हदीस में नबी सल्ल. के मूल शब्दों को क्या कहते हैं?",
      opts: [
        "सनद",
        "रावी",
        "इसनाद",
        "मतन"
      ],
      ans: 3
    }
  },
  {
    id: "hadith-which-hadith-collection-was-compiled-by",
    cat: "hadith",
    diff: "hard",
    pts: 30,
    en: {
      q: "Which Hadith collection was compiled by Imam Malik ibn Anas?",
      opts: [
        "Sunan Tirmidhi",
        "Sahih Muslim",
        "Muwatta Imam Malik",
        "Sunan an-Nasa'i"
      ],
      ans: 2
    },
    ur: {
      q: "امام مالک بن انس نے کون سا کلاسک مجموعہ لکھی؟",
      opts: [
        "سنن الترمذی",
        "صحیح مسلم",
        "موطا امام مالک",
        "سنن النسائی"
      ],
      ans: 2
    },
    hi: {
      q: "इमाम मालिक इब्न अनस ने कौन सा प्रसिद्ध संग्रह लिखा?",
      opts: [
        "सुनन तिर्मिज़ी",
        "सहीह मुस्लिम",
        "मुवत्ता इमाम मालिक",
        "सुनन अन-निसाई"
      ],
      ans: 2
    }
  },
  {
    id: "hadith-what-is-a-hadith-called-where",
    cat: "hadith",
    diff: "expert",
    pts: 50,
    en: {
      q: "What is a Hadith called where Prophet Muhammad (SAW) quotes Allah directly (outside Quran)?",
      opts: [
        "Hadith Ahad",
        "Hadith Mutawatir",
        "Hadith Hasan",
        "Hadith Qudsi"
      ],
      ans: 3
    },
    ur: {
      q: "جس حدیث میں نبی کریم ﷺ اللہ تعالی کے ارشاد کو روایت کرتے ہیں (قرآن سے الگ) اسے کیا کہتے ہیں؟",
      opts: [
        "حدیث آحاد",
        "حدیث متواتر",
        "حدیث حسن",
        "حدیث قدسی"
      ],
      ans: 3
    },
    hi: {
      q: "जिस हदीस में नबी सल्ल. अल्लाह के शब्दों को सीधे रिवायत करते हैं उसे क्या कहते हैं?",
      opts: [
        "हदीस आहाद",
        "हदीस मुतवातिर",
        "हदीस हसन",
        "हदीस क़ुदसी"
      ],
      ans: 3
    }
  },
  {
    id: "seerah-what-was-the-title-of-abu",
    cat: "seerah",
    diff: "easy",
    pts: 10,
    en: {
      q: "What was the title of Abu Bakr (RA)?",
      opts: [
        "Asadullah",
        "Al-Farooq",
        "As-Siddiq (The Truthful)",
        "Dhu al-Nurayn"
      ],
      ans: 2
    },
    ur: {
      q: "حضرت ابوبکر صدیق رضی اللہ عنہ کا لقب کیا تھا؟",
      opts: [
        "اسد اللہ",
        "الفاروق",
        "الصدیق (سچا)",
        "ذو النورین"
      ],
      ans: 2
    },
    hi: {
      q: "हज़रत अबू बक्र (रज़ि.) का लक़ब क्या था?",
      opts: [
        "असदुल्लाह",
        "अल-फ़ारूक़",
        "अस-सिद्दीक़ (सच्चा)",
        "ज़ुल-नूरैन"
      ],
      ans: 2
    }
  },
  {
    id: "seerah-what-was-the-title-of-umar",
    cat: "seerah",
    diff: "easy",
    pts: 10,
    en: {
      q: "What was the title of Umar ibn al-Khattab (RA)?",
      opts: [
        "As-Siddiq",
        "Al-Farooq (The Distinguisher of Truth)",
        "Zun-Noorain",
        "Saifullah"
      ],
      ans: 1
    },
    ur: {
      q: "حضرت عمر فاروق رضی اللہ عنہ کا لقب کیا تھا؟",
      opts: [
        "الصدیق",
        "الفاروق (حق و باطل میں فرق کرنے والا)",
        "ذوالنورین",
        "سیف اللہ"
      ],
      ans: 1
    },
    hi: {
      q: "हज़रत उमर इब्न अल-ख़त्ताब (रज़ि.) का लक़ब क्या था?",
      opts: [
        "अस-सिद्दीक़",
        "अल-फ़ारूक़ (सत्य व असत्य में अंतर करने वाला)",
        "ज़ुल-नूरैन",
        "सैफ़ुल्लाह"
      ],
      ans: 1
    }
  },
  {
    id: "seerah-why-was-uthman-ibn-affan-ra",
    cat: "seerah",
    diff: "medium",
    pts: 20,
    en: {
      q: "Why was Uthman ibn Affan (RA) titled 'Dhu al-Nurayn' (Possessor of Two Lights)?",
      opts: [
        "He conquered two empires",
        "He married two daughters of Prophet Muhammad (SAW)",
        "He led two migrations",
        "He memorized two books"
      ],
      ans: 1
    },
    ur: {
      q: "حضرت عثمان غنی رضی اللہ عنہ کو 'ذو النورین' (دو نوروں والا) کیوں کہا جاتا ہے؟",
      opts: [
        "دو سلطنتیں فتح کرنے پر",
        "نبی اکرم ﷺ کی دو صاحبزادیوں سے نکاح کی وجہ سے",
        "دو ہجرتیں کرنے پر",
        "دو کتابیں یاد کرنے پر"
      ],
      ans: 1
    },
    hi: {
      q: "हज़रत उस्मान (रज़ि.) को 'ज़ुल-नूरैन' (दो नूरों वाला) क्यों कहा जाता है?",
      opts: [
        "दो सल्तनतें फ़तह करने पर",
        "नबी की दो बेटियों से निकाह के कारण",
        "दो हिजरतें करने पर",
        "दो किताबें याद करने पर"
      ],
      ans: 1
    }
  },
  {
    id: "seerah-what-was-the-title-given-to",
    cat: "seerah",
    diff: "medium",
    pts: 20,
    en: {
      q: "What was the title given to Ali ibn Abi Talib (RA)?",
      opts: [
        "As-Siddiq",
        "Asadullah (Lion of Allah)",
        "Saifullah",
        "Al-Farooq"
      ],
      ans: 1
    },
    ur: {
      q: "حضرت علی بن ابی طالب رضی اللہ عنہ کا لقب کیا تھا؟",
      opts: [
        "الصدیق",
        "اسد اللہ (اللہ کا شیر)",
        "سیف اللہ",
        "الفاروق"
      ],
      ans: 1
    },
    hi: {
      q: "हज़रत अली इब्न अबी तालिब (रज़ि.) का लक़ब क्या था?",
      opts: [
        "अस-सिद्दीक़",
        "असदुल्लाह (अल्लाह का शेर)",
        "सैफ़ुल्लाह",
        "अल-फ़ारूक़"
      ],
      ans: 1
    }
  },
  {
    id: "stories-which-prophet-built-the-ark-to",
    cat: "stories",
    diff: "easy",
    pts: 10,
    en: {
      q: "Which Prophet built the Ark to save believers from the great Flood?",
      opts: [
        "Prophet Adam",
        "Prophet Salih",
        "Prophet Hud",
        "Prophet Nuh (Noah)"
      ],
      ans: 3
    },
    ur: {
      q: "طوفانِ نوح سے ایمانداروں کو بچانے کے لیے کشتی کس نبی نے بنائی؟",
      opts: [
        "حضرت آدم",
        "حضرت صالح",
        "حضرت ہود",
        "حضرت نوح علیہ السلام"
      ],
      ans: 3
    },
    hi: {
      q: "महान जलप्रलय से ईमान वालों को बचाने के लिए नाव किस पैग़म्बर ने बनाई?",
      opts: [
        "हज़रत आदम",
        "हज़रत सालेह",
        "हज़रत हूद",
        "हज़रत नूह"
      ],
      ans: 3
    }
  },
  {
    id: "stories-which-divine-holy-scripture-was-revealed",
    cat: "stories",
    diff: "medium",
    pts: 20,
    en: {
      q: "Which divine holy scripture was revealed to Prophet Dawud (David)?",
      opts: [
        "Quran",
        "Zabur (Psalms)",
        "Tawrat",
        "Injeel"
      ],
      ans: 1
    },
    ur: {
      q: "حضرت داؤد علیہ السلام پر کون سی آسمانی کتاب نازل ہوئی؟",
      opts: [
        "قرآن",
        "زبور",
        "تورات",
        "انجیل"
      ],
      ans: 1
    },
    hi: {
      q: "हज़रत दाऊद पर कौन सी ईश्वरीय किताब नाज़िल हुई?",
      opts: [
        "क़ुरआन",
        "ज़बूर",
        "तौरात",
        "इंजील"
      ],
      ans: 1
    }
  },
  {
    id: "stories-which-divine-holy-scripture-was-revealed-1",
    cat: "stories",
    diff: "medium",
    pts: 20,
    en: {
      q: "Which divine holy scripture was revealed to Prophet Musa (Moses)?",
      opts: [
        "Suhuf",
        "Zabur",
        "Tawrat (Torah)",
        "Injeel"
      ],
      ans: 2
    },
    ur: {
      q: "حضرت موسیٰ علیہ السلام پر کون سی آسمانی کتاب نازل ہوئی؟",
      opts: [
        "صحف",
        "زبور",
        "تورات",
        "انجیل"
      ],
      ans: 2
    },
    hi: {
      q: "हज़रत मूसा पर कौन सी ईश्वरीय किताब नाज़िल हुई?",
      opts: [
        "सहूफ़",
        "ज़बूर",
        "तौरात",
        "इंजील"
      ],
      ans: 2
    }
  },
  {
    id: "stories-which-divine-holy-scripture-was-revealed-2",
    cat: "stories",
    diff: "hard",
    pts: 30,
    en: {
      q: "Which divine holy scripture was revealed to Prophet Isa (Jesus)?",
      opts: [
        "Zabur",
        "Injeel (Gospel)",
        "Tawrat",
        "Quran"
      ],
      ans: 1
    },
    ur: {
      q: "حضرت عیسیٰ علیہ السلام پر کون سی آسمانی کتاب نازل ہوئی؟",
      opts: [
        "زبور",
        "انجیل",
        "تورات",
        "قرآن"
      ],
      ans: 1
    },
    hi: {
      q: "हज़रत ईसा पर कौन सी ईश्वरीय किताब नाज़िल हुई?",
      opts: [
        "ज़बूर",
        "इंजील",
        "तौरात",
        "क़ुरआन"
      ],
      ans: 1
    }
  },
  {
    id: "stories-which-prophet-was-sent-to-the",
    cat: "stories",
    diff: "expert",
    pts: 50,
    en: {
      q: "Which Prophet was sent to the people of Thamud with a miraculous She-Camel?",
      opts: [
        "Prophet Ibrahim",
        "Prophet Hud",
        "Prophet Shu'aib",
        "Prophet Salih (AS)"
      ],
      ans: 3
    },
    ur: {
      q: "قومِ ثمود کی طرف معجزاتی اونٹنی کے ساتھ کس نبی کو بھیجا گیا؟",
      opts: [
        "حضرت ابراہیم",
        "حضرت ہود",
        "حضرت شعیب",
        "حضرت صالح علیہ السلام"
      ],
      ans: 3
    },
    hi: {
      q: "समूद कौम की तरफ़ मौजिज़ा-ए-ऊँटनी के साथ किस पैग़म्बर को भेजा गया?",
      opts: [
        "हज़रत इब्राहिम",
        "हज़रत हूद",
        "हज़रत शुऐब",
        "हज़रत सालेह"
      ],
      ans: 3
    }
  },
  {
    id: "pillars-what-is-the-special-night-in",
    cat: "pillars",
    diff: "easy",
    pts: 10,
    en: {
      q: "What is the special night in Ramadan that is better than 1,000 months?",
      opts: [
        "Laylatul Bara'at",
        "Friday night",
        "Laylatul Qadr (Night of Decree)",
        "Eid night"
      ],
      ans: 2
    },
    ur: {
      q: "رمضان المبارک کی وہ کون سی بابرکت رات ہے جو 1,000 مہینوں سے افضل ہے؟",
      opts: [
        "شبِ برات",
        "جمعہ کی رات",
        "لیلة القدر",
        "عید کی رات"
      ],
      ans: 2
    },
    hi: {
      q: "रमज़ान की वह कौन सी मुबारक रात है जो 1,000 महीनों से उत्तम है?",
      opts: [
        "शब-ए-बरात",
        "शुक्रवार रात",
        "लैलतुल-क़द्र",
        "ईद की रात"
      ],
      ans: 2
    }
  },
  {
    id: "pillars-walking-7-times-between-safa-and",
    cat: "pillars",
    diff: "medium",
    pts: 20,
    en: {
      q: "Walking 7 times between Safa and Marwah hills during Hajj/Umrah is called:",
      opts: [
        "Rukn",
        "Tawaf",
        "Sa'i",
        "Rami"
      ],
      ans: 2
    },
    ur: {
      q: "حج اور عمرہ کے دوران صفا اور مروہ کی پہاڑیوں کے درمیان 7 چکر لگانے کو کیا کہتے ہیں؟",
      opts: [
        "رکن",
        "طواف",
        "سعی",
        "رمی"
      ],
      ans: 2
    },
    hi: {
      q: "हज व उमराह के दौरान सफ़ा व मरवा की पहाड़ियों के बीच 7 चक्कर लगाने को क्या कहते हैं?",
      opts: [
        "रुकन",
        "तवाफ़",
        "सई",
        "रमी"
      ],
      ans: 2
    }
  },
  {
    id: "pillars-circling-the-holy-kaaba-7-times",
    cat: "pillars",
    diff: "hard",
    pts: 30,
    en: {
      q: "Circling the Holy Kaaba 7 times counter-clockwise is known as:",
      opts: [
        "Tawaf",
        "Wuquf",
        "Ihram",
        "Sa'i"
      ],
      ans: 0
    },
    ur: {
      q: "خانہ کعبہ کے گرد 7 چکر لگانے کو کیا کہتے ہیں؟",
      opts: [
        "طواف",
        "وقوف",
        "احرام",
        "سعی"
      ],
      ans: 0
    },
    hi: {
      q: "क़ाबा के चारों ओर 7 चक्कर लगाने को क्या कहते हैं?",
      opts: [
        "तवाफ़",
        "वुक़ूफ़",
        "इहराम",
        "सई"
      ],
      ans: 0
    }
  },
  {
    id: "tajweed-when-meem-sakinah-is-followed-by",
    cat: "tajweed",
    diff: "medium",
    pts: 20,
    en: {
      q: "When Meem Sakinah is followed by another Meem (م), which Tajweed rule applies?",
      opts: [
        "Ikhfa Shafawi",
        "Idgham Shafawi (Idgham of Meem)",
        "Izhar Shafawi",
        "Iqlab"
      ],
      ans: 1
    },
    ur: {
      q: "میم ساکن کے بعد اگر دوسری میم (م) آئے تو کون سا تجوید قاعدہ لاگو ہوتا ہے؟",
      opts: [
        "اخفاء شفوی",
        "ادغام شفوی",
        "اظہار شفوی",
        "اقلاب"
      ],
      ans: 1
    },
    hi: {
      q: "मीम साकिन के बाद यदि दूसरी मीम आए तो कौन सा नियम लागू होता है?",
      opts: [
        "इख़फ़ा शफ़वी",
        "इदग़ाम शफ़वी",
        "इज़हार शफ़वी",
        "इक़लाब"
      ],
      ans: 1
    }
  },
  {
    id: "names-what-does-al-fattah-mean",
    cat: "names",
    diff: "expert",
    pts: 50,
    en: {
      q: "What does 'Al-Fattah' (الفتاح) mean?",
      opts: [
        "The Creator",
        "The Last",
        "The High",
        "The Opener / The Judge who removes all obstacles"
      ],
      ans: 3
    },
    ur: {
      q: "اللہ تعالی کے مبارک نام 'الفتاح' کا کیا مطلب ہے؟",
      opts: [
        "خالق",
        "آخر",
        "عالی",
        "مشکلات کھولنے والا / فتاح"
      ],
      ans: 3
    },
    hi: {
      q: "अल्लाह के मुबारक नाम 'अल-फ़त्ताह' का अर्थ क्या है?",
      opts: [
        "सृष्टिकर्ता",
        "अंतिम",
        "उच्च",
        "मार्ग खोलने वाला / न्याय करने वाला"
      ],
      ans: 3
    }
  }
];
