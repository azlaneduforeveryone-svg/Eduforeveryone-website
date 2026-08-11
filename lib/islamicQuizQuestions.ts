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
 * ISLAMIC QUESTION BANK - 46 questions, verified unique.
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
  }
];