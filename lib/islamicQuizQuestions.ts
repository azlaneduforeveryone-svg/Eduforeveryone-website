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

// ── AUTHENTIC CLEAN ISLAMIC QUESTION BANK (46 UNIQUE QUESTIONS) ──
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
        "Surah Al-Baqarah",
        "Surah Ali 'Imran",
        "Surah An-Nisa",
        "Surah Al-Ma'idah"
      ],
      "ans": 0
    },
    "ur": {
      "q": "قرآن کی سب سے لمبی سورت کون سی ہے؟",
      "opts": [
        "سورة البقرہ",
        "سورة آل عمران",
        "سورة النساء",
        "سورة المائدہ"
      ],
      "ans": 0
    },
    "hi": {
      "q": "क़ुरआन की सबसे लंबी सूरत कौन सी है?",
      "opts": [
        "सूरह अल-بक़रह",
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
        "Surah Al-Kawthar",
        "Surah Al-Ikhlas",
        "Surah An-Nasr",
        "Surah Al-Asr"
      ],
      "ans": 0
    },
    "ur": {
      "q": "قرآن کی سب سے چھوٹی سورت کون سی ہے؟",
      "opts": [
        "سورة الکوثر",
        "سورة الاخلاص",
        "سورة النصر",
        "سورة العصر"
      ],
      "ans": 0
    },
    "hi": {
      "q": "क़ुरआन की सबसे छोटी सूरत कौन सी है?",
      "opts": [
        "सूरह अल-कौसर",
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
      "q": "In which Surah is Bismillah mentioned twice?",
      "opts": [
        "Surah An-Naml",
        "Surah An-Nahl",
        "Surah An-Nisa",
        "Surah An-Nur"
      ],
      "ans": 0
    },
    "ur": {
      "q": "کس سورت میں بسم اللہ دو بار آئی ہے؟",
      "opts": [
        "سورة النمل",
        "سورة النحل",
        "سورة النساء",
        "سورة النور"
      ],
      "ans": 0
    },
    "hi": {
      "q": "किस सूरत में बिस्मिल्लाह दो बार आई है?",
      "opts": [
        "सूरह अन-नम्ل",
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
    "cat": "quran",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "Which Surah of the Quran is known as the 'Mother of the Book' (Umm al-Kitab)?",
      "opts": [
        "Surah Al-Fatiha",
        "Surah Al-Baqarah",
        "Surah Yasin",
        "Surah Al-Ikhlas"
      ],
      "ans": 0
    },
    "ur": {
      "q": "قرآن پاک کی کس سورت کو 'ام الکتاب' کہا جاتا ہے؟",
      "opts": [
        "سورة الفاتحہ",
        "سورة البقرہ",
        "سورة یس",
        "سورة الاخلاص"
      ],
      "ans": 0
    },
    "hi": {
      "q": "क़ुरआन की किस सूरत को 'उम्मुल-किताब' कहा जाता है?",
      "opts": [
        "सूरह अल-फ़ातिहा",
        "सूरह अल-बक़रह",
        "सूरह यासीन",
        "सूरह अल-इख़लास"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "In which Surah is the story of Ashab al-Kahf (People of the Cave) mentioned?",
      "opts": [
        "Surah Al-Kahf",
        "Surah Maryam",
        "Surah Taha",
        "Surah Al-Anbiya"
      ],
      "ans": 0
    },
    "ur": {
      "q": "اصحابِ کہف کا واقعہ کس سورت میں بیان ہوا ہے؟",
      "opts": [
        "سورة الکہف",
        "سورة مریم",
        "سورة طہ",
        "سورة الانبیاء"
      ],
      "ans": 0
    },
    "hi": {
      "q": "अस्हाब-ए-कहफ़ (गुफ़ा वाले) का क़िस्सा किस सूरत में है?",
      "opts": [
        "सूरह अल-कहफ़",
        "सूरह मरयम",
        "सूरह ताहा",
        "सूरह अल-अम्बिया"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "What does 'Hadith' mean?",
      "opts": [
        "Saying or action of Prophet Muhammad (SAW)",
        "Quran verse",
        "Islamic law book",
        "Poetry"
      ],
      "ans": 0
    },
    "ur": {
      "q": "'حدیث' کا کیا مطلب ہے؟",
      "opts": [
        "نبی کریم ﷺ کا قول یا فعل",
        "قرآن کی آیت",
        "اسلامی قانون کی کتاب",
        "شاعری"
      ],
      "ans": 0
    },
    "hi": {
      "q": "'हदीस' का क्या अर्थ है?",
      "opts": [
        "पैग़म्बर की बात या कर्म",
        "क़ुरआन की आयत",
        "इस्लामी क़ानून",
        "कविता"
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
        "Abu Hurairah (RA)",
        "Abu Bakr (RA)",
        "Umar (RA)",
        "Aisha (RA)"
      ],
      "ans": 0
    },
    "ur": {
      "q": "سب سے زیادہ احادیث کس صحابی نے روایت کی ہیں؟",
      "opts": [
        "حضرت ابوہریرہ رضی اللہ عنہ",
        "حضرت ابوبکر",
        "حضرت عمر",
        "حضرت عائشہ"
      ],
      "ans": 0
    },
    "hi": {
      "q": "सबसे अधिक हदीसें किस सहाबी ने रिवायत की हैं?",
      "opts": [
        "हज़रत अबू हुरैरह (रज़ि.)",
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
        "सुनन इब्न माजह",
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
        "मुसन्नफ़ात"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Who was the author of Sahih Muslim?",
      "opts": [
        "Imam Muslim",
        "Imam Bukhari",
        "Imam Tirmidhi",
        "Imam Abu Dawud"
      ],
      "ans": 0
    },
    "ur": {
      "q": "صحیح مسلم کس نے لکھی؟",
      "opts": [
        "امام مسلم",
        "امام بخاری",
        "امام ترمذی",
        "امام ابوداؤد"
      ],
      "ans": 0
    },
    "hi": {
      "q": "सहीह मुस्लिम किसने लिखी?",
      "opts": [
        "इमाम मुस्लिम",
        "इमाम बुख़ारी",
        "इमाम तिर्मिज़ी",
        "इमाम अबू दाऊद"
      ],
      "ans": 0
    }
  },
  {
    "cat": "hadith",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Who compiled the famous 'Forty Hadith' (Arba'een)?",
      "opts": [
        "Imam Nawawi",
        "Imam Ghazali",
        "Imam Ibn Kathir",
        "Imam Shafi'i"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مشہور 'اربعین' (40 احادیث) کا مجموعہ کس نے مرتب کیا؟",
      "opts": [
        "امام نووی",
        "امام غزالی",
        "امام ابن کثیر",
        "امام شافعی"
      ],
      "ans": 0
    },
    "hi": {
      "q": "प्रसिद्ध 40 हदीसों का संग्रह किसने संकलित किया?",
      "opts": [
        "इमाम नववी",
        "इमाम ग़ज़ाली",
        "इमाम इब्न कसीर",
        "इमाम शाफ़ई"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "How many pillars of Islam are there?",
      "opts": [
        "5",
        "4",
        "6",
        "7"
      ],
      "ans": 0
    },
    "ur": {
      "q": "اسلام کے کتنے ارکان ہیں؟",
      "opts": [
        "5",
        "4",
        "6",
        "7"
      ],
      "ans": 0
    },
    "hi": {
      "q": "इस्लाम के कितने स्तंभ हैं?",
      "opts": [
        "5",
        "4",
        "6",
        "7"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "How many times a day do Muslims pray (Salah)?",
      "opts": [
        "5",
        "3",
        "4",
        "6"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مسلمان دن میں کتنی بار نماز پڑھتے ہیں؟",
      "opts": [
        "5",
        "3",
        "4",
        "6"
      ],
      "ans": 0
    },
    "hi": {
      "q": "मुसलमान दिन में कितनी बार नमाज़ पढ़ते हैं?",
      "opts": [
        "5",
        "3",
        "4",
        "6"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "In which month do Muslims fast?",
      "opts": [
        "Ramadan",
        "Rajab",
        "Shawwal",
        "Dhul Hijjah"
      ],
      "ans": 0
    },
    "ur": {
      "q": "مسلمان کس مہینے میں روزے رکھتے ہیں؟",
      "opts": [
        "رمضان",
        "رجب",
        "شوال",
        "ذوالحجہ"
      ],
      "ans": 0
    },
    "hi": {
      "q": "मुसलमान किस महीने में रोज़ा रखते हैं?",
      "opts": [
        "रमज़ान",
        "रजब",
        "शव्وال",
        "ज़ुल-हिज्जह"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "What percentage of wealth is given as Zakat?",
      "opts": [
        "2.5%",
        "1%",
        "5%",
        "10%"
      ],
      "ans": 0
    },
    "ur": {
      "q": "زکوٰۃ کتنے فیصد دی جاتی ہے؟",
      "opts": [
        "2.5%",
        "1%",
        "5%",
        "10%"
      ],
      "ans": 0
    },
    "hi": {
      "q": "ज़कात कितने प्रतिशत दी जाती है?",
      "opts": [
        "2.5%",
        "1%",
        "5%",
        "10%"
      ],
      "ans": 0
    }
  },
  {
    "cat": "pillars",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "What is the first pillar of Islam?",
      "opts": [
        "Shahada",
        "Salah",
        "Zakat",
        "Sawm"
      ],
      "ans": 0
    },
    "ur": {
      "q": "اسلام کا پہلا رکن کیا ہے؟",
      "opts": [
        "شہادت",
        "نماز",
        "زکوٰۃ",
        "روزہ"
      ],
      "ans": 0
    },
    "hi": {
      "q": "इस्लाम का पहला स्तंभ क्या है?",
      "opts": [
        "शहादह",
        "सलाह",
        "ज़कात",
        "सौम"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "In which city was Prophet Muhammad (SAW) born?",
      "opts": [
        "Makkah",
        "Madinah",
        "Taif",
        "Jerusalem"
      ],
      "ans": 0
    },
    "ur": {
      "q": "نبی کریم ﷺ کس شہر میں پیدا ہوئے؟",
      "opts": [
        "مکہ",
        "مدینہ",
        "طائف",
        "یروشلم"
      ],
      "ans": 0
    },
    "hi": {
      "q": "पैग़म्बर मुहम्मद (सल्ल.) किस शहर में पैदा हुए?",
      "opts": [
        "मक्का",
        "मदीना",
        "ताइफ़",
        "यरूशलम"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "What was the name of Prophet Muhammad's (SAW) father?",
      "opts": [
        "Abdullah",
        "Abu Talib",
        "Hamzah",
        "Abbas"
      ],
      "ans": 0
    },
    "ur": {
      "q": "نبی کریم ﷺ کے والد ماجد کا نام کیا تھا؟",
      "opts": [
        "عبداللہ",
        "ابو طالب",
        "حمزہ",
        "عباس"
      ],
      "ans": 0
    },
    "hi": {
      "q": "पैग़म्बर के पिता का नाम क्या था?",
      "opts": [
        "अब्दुल्लाह",
        "अबू तालिब",
        "हम्ज़ा",
        "अब्बास"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "What was the name of Prophet Muhammad's (SAW) mother?",
      "opts": [
        "Aminah",
        "Khadijah",
        "Fatimah",
        "Halimah"
      ],
      "ans": 0
    },
    "ur": {
      "q": "نبی کریم ﷺ کی والدہ ماجدہ کا نام کیا تھا؟",
      "opts": [
        "آمنہ",
        "خدیجہ",
        "فاطمہ",
        "حلیمہ"
      ],
      "ans": 0
    },
    "hi": {
      "q": "पैग़म्बर की माता जी का नाम क्या था?",
      "opts": [
        "आमिनह",
        "ख़दीजह",
        "फ़ातिमह",
        "हलीमह"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "At what age did Prophet Muhammad (SAW) receive the first revelation?",
      "opts": [
        "40 years old",
        "35 years old",
        "45 years old",
        "50 years old"
      ],
      "ans": 0
    },
    "ur": {
      "q": "نبی کریم ﷺ کو پہلی وحی کتنے سال کی عمر میں آئی؟",
      "opts": [
        "40 سال",
        "35 سال",
        "45 سال",
        "50 سال"
      ],
      "ans": 0
    },
    "hi": {
      "q": "पैग़म्बर को पहली वह्य किस उम्र में आई?",
      "opts": [
        "40 वर्ष",
        "35 वर्ष",
        "45 वर्ष",
        "50 वर्ष"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "What was the name of the first wife of Prophet Muhammad (SAW)?",
      "opts": [
        "Khadijah (RA)",
        "Aisha (RA)",
        "Hafsa (RA)",
        "Zainab (RA)"
      ],
      "ans": 0
    },
    "ur": {
      "q": "نبی کریم ﷺ کی پہلی زوجہ کا نام کیا تھا؟",
      "opts": [
        "سیدہ خدیجہ رضی اللہ عنہا",
        "عائشہ",
        "حفصہ",
        "زینب"
      ],
      "ans": 0
    },
    "hi": {
      "q": "पैग़म्बर की पहली पत्नी का नाम क्या था?",
      "opts": [
        "हज़रत ख़दीजह (रज़ि.)",
        "आइशा",
        "हफ़सा",
        "ज़ैनब"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "In which year did the Hijrah (migration to Madinah) take place?",
      "opts": [
        "622 CE",
        "610 CE",
        "615 CE",
        "630 CE"
      ],
      "ans": 0
    },
    "ur": {
      "q": "ہجرتِ مدینہ کس سال ہوئی؟",
      "opts": [
        "622ء",
        "610ء",
        "615ء",
        "630ء"
      ],
      "ans": 0
    },
    "hi": {
      "q": "मदीना हिज़रत किस साल हुई?",
      "opts": [
        "622 ई.",
        "610 ई.",
        "615 ई.",
        "630 ई."
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "expert",
    "pts": 50,
    "en": {
      "q": "What was the name of the cave where Prophet Muhammad (SAW) received the first revelation?",
      "opts": [
        "Cave of Hira",
        "Cave of Thawr",
        "Cave of Uhud",
        "Cave of Badr"
      ],
      "ans": 0
    },
    "ur": {
      "q": "جس غار میں پہلی وحی نازل ہوئی اس کا نام کیا ہے؟",
      "opts": [
        "غارِ حرا",
        "غارِ ثور",
        "غارِ احد",
        "غارِ بدر"
      ],
      "ans": 0
    },
    "hi": {
      "q": "जिस गुफ़ा में पहली वह्य नाज़िल हुई उसका नाम क्या है?",
      "opts": [
        "ग़ार-ए-हिरा",
        "ग़ार-ए-सौर",
        "ग़ार-ए-उहुद",
        "ग़ार-ए-बद्र"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Who was the first Caliph of Islam?",
      "opts": [
        "Abu Bakr As-Siddiq (RA)",
        "Umar ibn Khattab",
        "Ali ibn Abi Talib",
        "Uthman ibn Affan"
      ],
      "ans": 0
    },
    "ur": {
      "q": "پہلے خلیفہ کون تھے؟",
      "opts": [
        "حضرت ابوبکر صدیق رضی اللہ عنہ",
        "حضرت عمر",
        "حضرت علی",
        "حضرت عثمان"
      ],
      "ans": 0
    },
    "hi": {
      "q": "इस्लाम के पहले ख़लीफ़ा कौन थे?",
      "opts": [
        "हज़रत अबू बक्र अस-सिद्दीक़ (रज़ि.)",
        "उमर इब्न ख़त्ताब",
        "अली इब्न अबी तालिब",
        "उस्मान इब्न अफ़्फ़ान"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Which was the first major battle in Islamic history?",
      "opts": [
        "Battle of Badr",
        "Battle of Uhud",
        "Battle of Khandaq",
        "Battle of Hunayn"
      ],
      "ans": 0
    },
    "ur": {
      "q": "اسلامی تاریخ کی پہلی بڑی جنگ کون سی ہے؟",
      "opts": [
        "غزوہ بدر",
        "غزوہ احد",
        "غزوہ خندق",
        "غزوہ حنین"
      ],
      "ans": 0
    },
    "hi": {
      "q": "इस्लामी इतिहास की पहली बड़ी लड़ाई कौन सी है?",
      "opts": [
        "ग़ज़वा-ए-बद्र",
        "ग़ज़वा उहुद",
        "ग़ज़वा ख़ंदक़",
        "ग़ज़वा हुनैन"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "In which year of Hijrah did the Conquest of Makkah take place?",
      "opts": [
        "8 AH",
        "6 AH",
        "10 AH",
        "12 AH"
      ],
      "ans": 0
    },
    "ur": {
      "q": "فتح مکہ کس ہجری سال میں ہوئی؟",
      "opts": [
        "8 ہجری",
        "6 ہجری",
        "10 ہجری",
        "12 ہجری"
      ],
      "ans": 0
    },
    "hi": {
      "q": "मक्का विजय किस हिजरी साल में हुई?",
      "opts": [
        "8 हिजरी",
        "6 हिजरी",
        "10 हिजरी",
        "12 हिजरी"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "What is the ritual purification before Salah called?",
      "opts": [
        "Wudu",
        "Ghusl",
        "Tayammum",
        "Niyyah"
      ],
      "ans": 0
    },
    "ur": {
      "q": "نماز سے پہلے وضو کے عمل کو کیا کہتے ہیں؟",
      "opts": [
        "وضو",
        "غسل",
        "تیمم",
        "نیت"
      ],
      "ans": 0
    },
    "hi": {
      "q": "नमाज़ से पहले वज़ू के अमल को क्या कहते हैं?",
      "opts": [
        "वुज़ू",
        "ग़ुस्ل",
        "तयम्मुम",
        "नीयत"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "What is dry ablution using clean dust/earth called when water is unavailable?",
      "opts": [
        "Tayammum",
        "Wudu",
        "Ghusl",
        "Istinja"
      ],
      "ans": 0
    },
    "ur": {
      "q": "پانی نہ ملنے کی صورت میں پاک مٹی سے کیے جانے والے مسح کو کیا کہتے ہیں؟",
      "opts": [
        "تیمم",
        "وضو",
        "غسل",
        "استنجاء"
      ],
      "ans": 0
    },
    "hi": {
      "q": "पानी न मिलने की सूरत में साफ़ मिट्टी से किए जाने वाले मसहा को क्या कहते हैं?",
      "opts": [
        "तयम्मुम",
        "वुज़ू",
        "ग़ुस्ل",
        "इस्तिंजा"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "What is the minimum travel distance for shortening Salah (Qasr)?",
      "opts": [
        "48 miles",
        "20 miles",
        "35 miles",
        "100 miles"
      ],
      "ans": 0
    },
    "ur": {
      "q": "قصر نماز پڑھنے کے لیے مسافتِ سفر کی کم از کم حد کتنی ہے؟",
      "opts": [
        "48 میل",
        "20 میل",
        "35 میل",
        "100 میل"
      ],
      "ans": 0
    },
    "hi": {
      "q": "क़स्र नमाज़ के लिए कम से कम यात्रा दूरी कितनी है?",
      "opts": [
        "48 मील",
        "20 मील",
        "35 मील",
        "100 मील"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "What does 'Ar-Rahman' mean?",
      "opts": [
        "The Most Gracious / Merciful",
        "The Sovereign",
        "The All-Knowing",
        "The Creator"
      ],
      "ans": 0
    },
    "ur": {
      "q": "'الرحمن' کا کیا مطلب ہے؟",
      "opts": [
        "بے حد رحم کرنے والا",
        "بادشاہ",
        "سب جاننے والا",
        "پیدا کرنے والا"
      ],
      "ans": 0
    },
    "hi": {
      "q": "'अर-रहमान' का क्या अर्थ है?",
      "opts": [
        "अत्यंत दयालु",
        "राजा",
        "सर्वज्ञ",
        "सृष्टिकर्ता"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "What does 'Al-Ghaffar' mean?",
      "opts": [
        "The All-Forgiving",
        "The Creator",
        "The Provider",
        "The Mighty"
      ],
      "ans": 0
    },
    "ur": {
      "q": "'الغفار' کا کیا مطلب ہے؟",
      "opts": [
        "بہت بخشنے والا",
        "پیدا کرنے والا",
        "رزق دینے والا",
        "زبردست"
      ],
      "ans": 0
    },
    "hi": {
      "q": "'अल-ग़फ़्फ़ार' का क्या अर्थ है?",
      "opts": [
        "अत्यंत क्षमाशील",
        "सृष्टिकर्ता",
        "प्रदाता",
        "शक्तिशाली"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "What does 'Al-Fattah' mean?",
      "opts": [
        "The Opener / Judge who removes obstacles",
        "The Creator",
        "The Last",
        "The High"
      ],
      "ans": 0
    },
    "ur": {
      "q": "'الفتاح' کا کیا مطلب ہے؟",
      "opts": [
        "مشکلات کھولنے والا / فتاح",
        "خالق",
        "آخر",
        "عالی"
      ],
      "ans": 0
    },
    "hi": {
      "q": "'अल-फ़त्ताह' का क्या अर्थ है?",
      "opts": [
        "मार्ग खोलने वाला / न्यायी",
        "सृष्टिकर्ता",
        "अंतिम",
        "उच्च"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "What does the Tajweed rule 'Qalqalah' mean?",
      "opts": [
        "Echoing / Bouncing sound",
        "Nasal sound",
        "Prolongation",
        "Stopping"
      ],
      "ans": 0
    },
    "ur": {
      "q": "تجوید کے قاعدے 'قلقلہ' کا کیا مطلب ہے؟",
      "opts": [
        "آواز کا پلٹنا / گونجنا",
        "غنہ کی آواز",
        "لمبا کرنا",
        "رکنا"
      ],
      "ans": 0
    },
    "hi": {
      "q": "तजवीद के नियम 'क़लक़ला' का क्या अर्थ है?",
      "opts": [
        "गूंजती ध्वनि",
        "ग़ुन्ना ध्वनि",
        "खींचना",
        "रुकना"
      ],
      "ans": 0
    }
  },
  {
    "cat": "tajweed",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "How many letters of Qalqalah are there in Tajweed?",
      "opts": [
        "5 letters",
        "3 letters",
        "4 letters",
        "6 letters"
      ],
      "ans": 0
    },
    "ur": {
      "q": "تجوید میں حروفِ قلقلہ کتنے ہیں؟",
      "opts": [
        "5 حروف",
        "3 حروف",
        "4 حروف",
        "6 حروف"
      ],
      "ans": 0
    },
    "hi": {
      "q": "तजवीद में क़लक़ला के कितने अक्षर हैं?",
      "opts": [
        "5 अक्षर",
        "3 अक्षर",
        "4 अक्षर",
        "6 अक्षर"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Which Prophet built the Kaaba with his son Ismail (AS)?",
      "opts": [
        "Prophet Ibrahim (AS)",
        "Prophet Adam (AS)",
        "Prophet Nuh (AS)",
        "Prophet Isa (AS)"
      ],
      "ans": 0
    },
    "ur": {
      "q": "کس نبی نے اپنے بیٹے اسماعیل علیہ السلام کے ساتھ مل کر خانہ کعبہ کی تعمیر کی؟",
      "opts": [
        "حضرت ابراہیم",
        "حضرت آدم",
        "حضرت نوح",
        "حضرت عیسیٰ"
      ],
      "ans": 0
    },
    "hi": {
      "q": "किस पैग़म्बर ने अपने बेटे इस्माईल के साथ मिलकर काबा का निर्माण किया?",
      "opts": [
        "हज़रत इब्राहिम",
        "हज़रत आدم",
        "हज़रत नूह",
        "हज़रत ईसा"
      ],
      "ans": 0
    }
  },
  {
    "cat": "stories",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Which Prophet was swallowed by a whale?",
      "opts": [
        "Prophet Yunus (AS)",
        "Prophet Yusuf (AS)",
        "Prophet Musa (AS)",
        "Prophet Yahya (AS)"
      ],
      "ans": 0
    },
    "ur": {
      "q": "کس نبی کو مچھلی نے نگل لیا تھا؟",
      "opts": [
        "حضرت یونس علیہ السلام",
        "حضرت یوسف",
        "حضرت موسیٰ",
        "حضرت یحییٰ"
      ],
      "ans": 0
    },
    "hi": {
      "q": "किस पैग़म्बर को मछली ने निगल लिया था?",
      "opts": [
        "हज़रत यूनुस (अलै.)",
        "हज़रत यूसुफ़",
        "हज़रत मूसा",
        "हज़रत यह्या"
      ],
      "ans": 0
    }
  },
  {
    "cat": "quran",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "Which Surah is equivalent to one-third of the Quran?",
      "opts": [
        "Surah Al-Ikhlas",
        "Surah Al-Falaq",
        "Surah An-Nas",
        "Surah Al-Kafirun"
      ],
      "ans": 0
    },
    "ur": {
      "q": "کون سی سورت تہائی قرآن کے برابر ہے؟",
      "opts": [
        "سورة الاخلاص",
        "سورة الفلق",
        "سورة الناس",
        "سورة کافرون"
      ],
      "ans": 0
    },
    "hi": {
      "q": "कौन सी सूरत एक तिहाई क़ुरआन के बराबर है?",
      "opts": [
        "सूरह अल-इख़लास",
        "सूरह अल-फ़लक़",
        "सूरह अन-नास",
        "सूरह अल-काफ़िरून"
      ],
      "ans": 0
    }
  },
  {
    "cat": "seerah",
    "diff": "medium",
    "pts": 20,
    "en": {
      "q": "Who was the first caller to prayer (Mu'adhdhin) in Islam?",
      "opts": [
        "Bilal ibn Rabah (RA)",
        "Abu Hurairah (RA)",
        "Zayd ibn Harithah",
        "Abdullah ibn Mas'ud"
      ],
      "ans": 0
    },
    "ur": {
      "q": "اسلام کے پہلے موذن کا نام کیا ہے؟",
      "opts": [
        "حضرت بلال بن رباح رضی اللہ عنہ",
        "ابوہریرہ",
        "زید بن حارثہ",
        "عبداللہ بن مسعود"
      ],
      "ans": 0
    },
    "hi": {
      "q": "इस्लाम के पहले मुअज़्ज़िन का नाम क्या है?",
      "opts": [
        "हज़रत बिआल इब्न रबाह (रज़ि.)",
        "अबू हुरैरह",
        "ज़ैद",
        "अब्दुल्लाह इब्ن मसऊद"
      ],
      "ans": 0
    }
  },
  {
    "cat": "history",
    "diff": "hard",
    "pts": 30,
    "en": {
      "q": "Who suggested digging the trench in the Battle of Khandaq?",
      "opts": [
        "Salman al-Farsi (RA)",
        "Abu Bakr (RA)",
        "Ali (RA)",
        "Suhaib ar-Rumi"
      ],
      "ans": 0
    },
    "ur": {
      "q": "غزوہ خندق میں خندق کھودنے کا مشورہ کس صحابی نے دیا تھا؟",
      "opts": [
        "حضرت سلمان فارسی رضی اللہ عنہ",
        "ابوبکر",
        "علی",
        "صہیب الرومی"
      ],
      "ans": 0
    },
    "hi": {
      "q": "ख़ंदक़ युद्ध में खाई खोदने का सुझाव किस सहाबी ने दिया?",
      "opts": [
        "हज़रत सलमान अल-फ़ारसी (रज़ि.)",
        "अबू बक्र",
        "अली",
        "सुहैब"
      ],
      "ans": 0
    }
  },
  {
    "cat": "names",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "What does Allah's Name 'Al-Khaliq' mean?",
      "opts": [
        "The Creator",
        "The Provider",
        "The Judge",
        "The King"
      ],
      "ans": 0
    },
    "ur": {
      "q": "اللہ تعالی کے نام 'الخالق' کا کیا مطلب ہے؟",
      "opts": [
        "پیدا کرنے والا",
        "رزق دینے والا",
        "فیصلہ کرنے والا",
        "بادشاہ"
      ],
      "ans": 0
    },
    "hi": {
      "q": "अल्लाह के नाम 'अल-ख़ालिक़' का क्या अर्थ है?",
      "opts": [
        "सृष्टिकर्ता",
        "प्रदाता",
        "न्यायी",
        "राजा"
      ],
      "ans": 0
    }
  },
  {
    "cat": "fiqh",
    "diff": "easy",
    "pts": 10,
    "en": {
      "q": "How many obligatory acts (Fard) are in Wudu?",
      "opts": [
        "4 Fards",
        "3 Fards",
        "5 Fards",
        "6 Fards"
      ],
      "ans": 0
    },
    "ur": {
      "q": "وضو میں کتنے فرائض ہیں؟",
      "opts": [
        "4 فرائض",
        "3 فرائض",
        "5 فرائض",
        "6 فرائض"
      ],
      "ans": 0
    },
    "hi": {
      "q": "वुज़ू में कितने फ़र्ज़ हैं?",
      "opts": [
        "4 फ़र्ज़",
        "3 फ़र्ज़",
        "5 फ़र्ज़",
        "6 फ़र्ज़"
      ],
      "ans": 0
    }
  }
];
