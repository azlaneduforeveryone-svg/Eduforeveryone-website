"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import ShareScore from "@/components/ShareScore";

type Lang = "en" | "ur" | "hi";
type Cat = "all" | "quran" | "hadith" | "fiqh" | "seerah" | "history" | "pillars" | "names" | "tajweed" | "arabic" | "stories" | "tafseer";
type Diff = "easy" | "medium" | "hard" | "expert";

interface LangData { q: string; opts: string[]; ans: number; }
interface Question { cat: string; diff: Diff; pts: number; en: LangData; ur: LangData; hi: LangData; arabicAyah?: string; reference?: string; }

const UI = {
  en: { title:"Islamic Quiz", sub:"Test your Islamic knowledge", start:"Start Quiz",
        next:"Next →", results:"See Results", again:"Play Again",
        timesUp:"Time's up!", answer:"Answer:", correct:"Correct",
        genius:"Subhanallah! Perfect! 🌟", excellent:"MashaAllah! Excellent! ✨",
        good:"JazakAllah! Good effort! 👍", keep:"Keep learning, InshaaAllah! 📖",
        score:"Score", streak:"Streak", q:"Q", of:"of",
        cats:{all:"All",quran:"Quran & Tafseer",hadith:"Hadith",fiqh:"Fiqh",seerah:"Seerah",history:"History",pillars:"Pillars",names:"99 Names",tajweed:"Tajweed",arabic:"Arabic Words",stories:"Quran Stories",tafseer:"Tafseer"} },
  ur: { title:"اسلامی کوئز", sub:"اپنی اسلامی معلومات کو جانچیں", start:"کوئز شروع کریں",
        next:"اگلا →", results:"نتائج", again:"دوبارہ کھیلیں",
        timesUp:"وقت ختم!", answer:"جواب:", correct:"درست",
        genius:"سبحان اللہ! مکمل! 🌟", excellent:"ماشاءاللہ! بہترین! ✨",
        good:"جزاک اللہ! اچھی کوشش! 👍", keep:"سیکھتے رہیں، ان شاءاللہ! 📖",
        score:"اسکور", streak:"سلسلہ", q:"سوال", of:"از",
        cats:{all:"سب",quran:"قرآن و تفسیر",hadith:"حدیث",fiqh:"فقہ",seerah:"سیرت",history:"تاریخ",pillars:"ارکان اسلام",names:"99 نام",tajweed:"تجوید",arabic:"عربی الفاظ",stories:"قرآنی قصص",tafseer:"تفسیر"} },
  hi: { title:"इस्लामी क्विज़", sub:"अपनी इस्लामी जानकारी परखें", start:"क्विज़ शुरू करें",
        next:"अगला →", results:"परिणाम", again:"फिर खेलें",
        timesUp:"समय समाप्त!", answer:"उत्तर:", correct:"सही",
        genius:"सुभानअल्लाह! पूर्ण! 🌟", excellent:"माशाअल्लाह! उत्कृष्ट! ✨",
        good:"जज़ाकअल्लाह! अच्छा प्रयास! 👍", keep:"सीखते रहें, इन्शाअल्लाह! 📖",
        score:"स्कोर", streak:"स्ट्रीक", q:"प्र", of:"में से",
        cats:{all:"सभी",quran:"क़ुरआन",hadith:"हदीस",fiqh:"फ़िक़्ह",seerah:"सीरत",history:"इतिहास",pillars:"स्तंभ",names:"99 नाम",tajweed:"तजवीद",arabic:"अरबी शब्द",stories:"क़ुरआनी क़िस्से",tafseer:"तफ़सीर"} },
};

const QB: Question[] = [
  // ── QURAN ──
  { cat:"quran", diff:"easy", pts:10,
    en:{q:"How many Surahs are in the Holy Quran?", opts:["112","113","114","115"], ans:2},
    ur:{q:"قرآن پاک میں کتنی سورتیں ہیں؟", opts:["112","113","114","115"], ans:2},
    hi:{q:"पवित्र क़ुरआन में कितनी सूरतें हैं?", opts:["112","113","114","115"], ans:2} },
  { cat:"quran", diff:"easy", pts:10,
    en:{q:"What is the first Surah of the Quran?", opts:["Al-Baqarah","Al-Fatiha","Al-Ikhlas","Al-Nas"], ans:1},
    ur:{q:"قرآن کی پہلی سورت کون سی ہے؟", opts:["البقرۃ","الفاتحہ","الاخلاص","الناس"], ans:1},
    hi:{q:"क़ुरआन की पहली सूरत कौन सी है?", opts:["अल-बक़रह","अल-फ़ातिहा","अल-इख़लास","अल-नास"], ans:1} },
  { cat:"quran", diff:"easy", pts:10,
    en:{q:"Which is the longest Surah in the Quran?", opts:["Al-Imran","Al-Baqarah","An-Nisa","Al-Maidah"], ans:1},
    ur:{q:"قرآن کی سب سے لمبی سورت کون سی ہے؟", opts:["آل عمران","البقرۃ","النساء","المائدۃ"], ans:1},
    hi:{q:"क़ुरआन की सबसे लंबी सूरत कौन सी है?", opts:["आल-इमरान","अल-बक़रह","अन-निसा","अल-माइदह"], ans:1} },
  { cat:"quran", diff:"easy", pts:10,
    en:{q:"Which Surah is known as the Heart of the Quran?", opts:["Al-Kahf","Yasin","Al-Mulk","Ar-Rahman"], ans:1},
    ur:{q:"کون سی سورت قرآن کا دل کہلاتی ہے؟", opts:["الکہف","یس","الملک","الرحمن"], ans:1},
    hi:{q:"कौन सी सूरत को क़ुरआन का दिल कहा जाता है?", opts:["अल-कहफ़","यासीन","अल-मुल्क","अर-रहमान"], ans:1} },
  { cat:"quran", diff:"medium", pts:20,
    en:{q:"How many Juz (parts) is the Quran divided into?", opts:["20","25","30","40"], ans:2},
    ur:{q:"قرآن کتنے پاروں میں تقسیم ہے؟", opts:["20","25","30","40"], ans:2},
    hi:{q:"क़ुरआन कितने पारों में विभाजित है?", opts:["20","25","30","40"], ans:2} },
  { cat:"quran", diff:"medium", pts:20,
    en:{q:"Which Surah does NOT begin with Bismillah?", opts:["Al-Baqarah","Al-Fatiha","At-Tawbah","Al-Imran"], ans:2},
    ur:{q:"کون سی سورت بسم اللہ سے شروع نہیں ہوتی؟", opts:["البقرۃ","الفاتحہ","التوبہ","آل عمران"], ans:2},
    hi:{q:"कौन सी सूरत बिस्मिल्लाह से शुरू नहीं होती?", opts:["अल-बक़रह","अल-फ़ातिहा","अत-तौबह","आल-इमरान"], ans:2} },
  { cat:"quran", diff:"hard", pts:30,
    en:{q:"Which Surah has Bismillah written twice?", opts:["Al-Fatiha","An-Naml","Al-Baqarah","At-Tawbah"], ans:1},
    ur:{q:"کس سورت میں بسم اللہ دو بار آتی ہے؟", opts:["الفاتحہ","النمل","البقرۃ","التوبہ"], ans:1},
    hi:{q:"किस सूरत में बिस्मिल्लाह दो बार आती है?", opts:["अल-फ़ातिहा","अन-नम्ल","अल-बक़रह","अत-तौबह"], ans:1} },
  { cat:"quran", diff:"expert", pts:50,
    en:{q:"How many times is the word Quran mentioned in the Quran itself?", opts:["50","58","70","85"], ans:1},
    ur:{q:"قرآن میں لفظ قرآن کتنی بار آیا ہے؟", opts:["50","58","70","85"], ans:1},
    hi:{q:"क़ुरआन में 'क़ुरआन' शब्द कितनी बार आया है?", opts:["50","58","70","85"], ans:1} },

  // ── HADITH ──
  { cat:"hadith", diff:"easy", pts:10,
    en:{q:"Which companion narrated the most Hadiths?", opts:["Umar","Abu Bakr","Abu Hurairah","Ali"], ans:2},
    ur:{q:"کس صحابی نے سب سے زیادہ حدیثیں روایت کیں؟", opts:["عمر","ابوبکر","ابوہریرہ","علی"], ans:2},
    hi:{q:"किस सहाबी ने सबसे अधिक हदीसें रिवायत कीं?", opts:["उमर","अबू बक्र","अबू हुरैरह","अली"], ans:2} },
  { cat:"hadith", diff:"medium", pts:20,
    en:{q:"Which Hadith collection is considered the most authentic?", opts:["Sunan Abu Dawud","Sahih Al-Bukhari","Sunan Ibn Majah","Muwatta Malik"], ans:1},
    ur:{q:"کون سا حدیث مجموعہ سب سے زیادہ مستند ہے؟", opts:["سنن ابوداؤد","صحیح البخاری","سنن ابن ماجہ","موطا مالک"], ans:1},
    hi:{q:"कौन सा हदीस संग्रह सबसे अधिक प्रामाणिक है?", opts:["सुनन अबू दाऊद","सहीह अल-बुख़ारी","सुनन इब्न माजह","मुवत्ता मालिक"], ans:1} },
  { cat:"hadith", diff:"medium", pts:20,
    en:{q:"What are the six authentic Hadith collections called?", opts:["Sihah Sitta","Kutub Tisa","Sahihayn","Musannafat"], ans:0},
    ur:{q:"چھ مستند حدیث مجموعوں کو کیا کہتے ہیں؟", opts:["صحاح ستہ","کتب تسعہ","صحیحین","مصنفات"], ans:0},
    hi:{q:"छह प्रामाणिक हदीस संग्रहों को क्या कहते हैं?", opts:["सिहाह सित्ता","कुतुब तिसआ","सहीहैन","मुसन्नफात"], ans:0} },
  { cat:"hadith", diff:"hard", pts:30,
    en:{q:"Who was the author of Sahih Muslim?", opts:["Imam Bukhari","Imam Muslim","Imam Tirmidhi","Imam Abu Dawud"], ans:1},
    ur:{q:"صحیح مسلم کس نے لکھی؟", opts:["امام بخاری","امام مسلم","امام ترمذی","امام ابوداؤد"], ans:1},
    hi:{q:"सहीह मुस्लिम किसने लिखी?", opts:["इमाम बुख़ारी","इमाम मुस्लिम","इमाम तिर्मिज़ी","इमाम अबू दाऊद"], ans:1} },

  // ── PILLARS ──
  { cat:"pillars", diff:"easy", pts:10,
    en:{q:"How many pillars of Islam are there?", opts:["4","5","6","7"], ans:1},
    ur:{q:"اسلام کے کتنے ارکان ہیں؟", opts:["4","5","6","7"], ans:1},
    hi:{q:"इस्लाम के कितने स्तंभ हैं?", opts:["4","5","6","7"], ans:1} },
  { cat:"pillars", diff:"easy", pts:10,
    en:{q:"How many times a day do Muslims pray (Salah)?", opts:["3","4","5","6"], ans:2},
    ur:{q:"مسلمان دن میں کتنی بار نماز پڑھتے ہیں؟", opts:["3","4","5","6"], ans:2},
    hi:{q:"मुसलमान दिन में कितनी बार नमाज़ पढ़ते हैं?", opts:["3","4","5","6"], ans:2} },
  { cat:"pillars", diff:"easy", pts:10,
    en:{q:"In which month do Muslims fast?", opts:["Rajab","Shawwal","Ramadan","Dhul Hijjah"], ans:2},
    ur:{q:"مسلمان کس مہینے میں روزے رکھتے ہیں؟", opts:["رجب","شوال","رمضان","ذوالحجہ"], ans:2},
    hi:{q:"मुसलमान किस महीने में रोज़ा रखते हैं?", opts:["रजब","शव्वाल","रमज़ान","ज़ुल-हिज्जह"], ans:2} },
  { cat:"pillars", diff:"medium", pts:20,
    en:{q:"What percentage of wealth is given as Zakat?", opts:["1%","2.5%","5%","10%"], ans:1},
    ur:{q:"زکوٰۃ کتنے فیصد دی جاتی ہے؟", opts:["1%","2.5%","5%","10%"], ans:1},
    hi:{q:"ज़कात कितने प्रतिशत दी जाती है?", opts:["1%","2.5%","5%","10%"], ans:1} },
  { cat:"pillars", diff:"medium", pts:20,
    en:{q:"What is the first pillar of Islam?", opts:["Salah","Zakat","Shahada","Sawm"], ans:2},
    ur:{q:"اسلام کا پہلا رکن کیا ہے؟", opts:["نماز","زکوٰۃ","شہادت","روزہ"], ans:2},
    hi:{q:"इस्लाम का पहला स्तंभ क्या है?", opts:["सलाह","ज़कात","शहादह","सौम"], ans:2} },

  // ── SEERAH ──
  { cat:"seerah", diff:"easy", pts:10,
    en:{q:"In which city was Prophet Muhammad (SAW) born?", opts:["Madinah","Taif","Makkah","Jerusalem"], ans:2},
    ur:{q:"نبی کریم ﷺ کس شہر میں پیدا ہوئے؟", opts:["مدینہ","طائف","مکہ","یروشلم"], ans:2},
    hi:{q:"पैग़म्बर मुहम्मद (सल्ल.) किस शहर में पैदा हुए?", opts:["मदीना","ताइफ़","मक्का","यरूशलम"], ans:2} },
  { cat:"seerah", diff:"easy", pts:10,
    en:{q:"What was the name of Prophet Muhammad's (SAW) mother?", opts:["Khadijah","Aminah","Fatimah","Maryam"], ans:1},
    ur:{q:"نبی کریم ﷺ کی والدہ کا نام کیا تھا؟", opts:["خدیجہ","آمنہ","فاطمہ","مریم"], ans:1},
    hi:{q:"पैग़म्बर मुहम्मद की माँ का नाम क्या था?", opts:["ख़दीजह","आमिनह","फ़ातिमह","मरयम"], ans:1} },
  { cat:"seerah", diff:"medium", pts:20,
    en:{q:"At what age did Prophet Muhammad (SAW) receive the first revelation?", opts:["35","40","45","50"], ans:1},
    ur:{q:"نبی کریم ﷺ کو پہلی وحی کتنے سال کی عمر میں آئی؟", opts:["35","40","45","50"], ans:1},
    hi:{q:"पैग़म्बर को पहली वह्य किस उम्र में आई?", opts:["35","40","45","50"], ans:1} },
  { cat:"seerah", diff:"medium", pts:20,
    en:{q:"What was the name of the first wife of Prophet Muhammad (SAW)?", opts:["Aisha","Hafsa","Khadijah","Zainab"], ans:2},
    ur:{q:"نبی کریم ﷺ کی پہلی زوجہ کا نام کیا تھا؟", opts:["عائشہ","حفصہ","خدیجہ","زینب"], ans:2},
    hi:{q:"पैग़म्बर की पहली पत्नी का नाम क्या था?", opts:["आइशा","हफ़सा","ख़दीजह","ज़ैनब"], ans:2} },
  { cat:"seerah", diff:"hard", pts:30,
    en:{q:"In which year did the Hijra (migration to Madinah) take place?", opts:["610 CE","615 CE","622 CE","630 CE"], ans:2},
    ur:{q:"ہجرت مدینہ کس سال ہوئی؟", opts:["610ء","615ء","622ء","630ء"], ans:2},
    hi:{q:"मदीना हिजरत किस साल हुई?", opts:["610 ई.","615 ई.","622 ई.","630 ई."], ans:2} },
  { cat:"seerah", diff:"expert", pts:50,
    en:{q:"What was the name of the cave where Prophet Muhammad (SAW) received the first revelation?", opts:["Cave of Thawr","Cave of Hira","Cave of Uhud","Cave of Badr"], ans:1},
    ur:{q:"جس غار میں پہلی وحی نازل ہوئی اس کا نام کیا ہے؟", opts:["غار ثور","غار حرا","غار احد","غار بدر"], ans:1},
    hi:{q:"जिस गुफ़ा में पहली वह्य नाज़िल हुई उसका नाम क्या है?", opts:["ग़ार-ए-सौर","ग़ार-ए-हिरा","ग़ार-ए-उहुद","ग़ार-ए-बद्र"], ans:1} },

  // ── ISLAMIC HISTORY ──
  { cat:"history", diff:"easy", pts:10,
    en:{q:"Who was the first Caliph of Islam?", opts:["Umar ibn Khattab","Ali ibn Abi Talib","Abu Bakr As-Siddiq","Uthman ibn Affan"], ans:2},
    ur:{q:"پہلے خلیفہ کون تھے؟", opts:["حضرت عمر","حضرت علی","حضرت ابوبکر صدیق","حضرت عثمان"], ans:2},
    hi:{q:"इस्लाम के पहले ख़लीफ़ा कौन थे?", opts:["उमर इब्न ख़त्ताब","अली इब्न अबी तालिब","अबू बक्र अस-सिद्दीक़","उस्मान इब्न अफ़्फ़ान"], ans:2} },
  { cat:"history", diff:"medium", pts:20,
    en:{q:"Which was the first major battle in Islamic history?", opts:["Battle of Uhud","Battle of Badr","Battle of Khandaq","Battle of Hunayn"], ans:1},
    ur:{q:"اسلامی تاریخ کی پہلی بڑی جنگ کون سی ہے؟", opts:["غزوہ احد","غزوہ بدر","غزوہ خندق","غزوہ حنین"], ans:1},
    hi:{q:"इस्लामी इतिहास की पहली बड़ी लड़ाई कौन सी है?", opts:["ग़ज़वा उहुद","ग़ज़वा बद्र","ग़ज़वा ख़ंदक़","ग़ज़वा हुनैन"], ans:1} },
  { cat:"history", diff:"hard", pts:30,
    en:{q:"During whose caliphate was the Quran compiled into a single Mushaf?", opts:["Prophet Muhammad SAW","Abu Bakr","Umar","Uthman"], ans:1},
    ur:{q:"قرآن کو کتابی شکل میں کس کے دور میں جمع کیا گیا؟", opts:["نبی ﷺ","ابوبکر","عمر","عثمان"], ans:1},
    hi:{q:"क़ुरआन को किताबी रूप में किसके दौर में संकलित किया गया?", opts:["नबी सल्ल.","अबू बक्र","उमर","उस्मान"], ans:1} },
  { cat:"history", diff:"expert", pts:50,
    en:{q:"Which Islamic empire lasted the longest in history?", opts:["Umayyad Caliphate","Abbasid Caliphate","Ottoman Empire","Mughal Empire"], ans:2},
    ur:{q:"تاریخ کی سب سے طویل اسلامی سلطنت کون سی ہے؟", opts:["سلطنت امویہ","سلطنت عباسیہ","سلطنت عثمانیہ","سلطنت مغلیہ"], ans:2},
    hi:{q:"इतिहास की सबसे लंबी इस्लामी सल्तनत कौन सी है?", opts:["उमवी सल्तनत","अब्बासी सल्तनत","उस्मानी सल्तनत","मुग़ल सल्तनत"], ans:2} },

  // ── FIQH ──
  { cat:"fiqh", diff:"easy", pts:10,
    en:{q:"How many Fard acts are in Wudu (ablution)?", opts:["3","4","6","7"], ans:1},
    ur:{q:"وضو میں کتنے فرائض ہیں؟", opts:["3","4","6","7"], ans:1},
    hi:{q:"वुज़ू में कितने फ़र्ज़ हैं?", opts:["3","4","6","7"], ans:1} },
  { cat:"fiqh", diff:"medium", pts:20,
    en:{q:"Which of the following invalidates the fast?", opts:["Using Miswak","Eating forgetfully","Intentional eating","Smelling perfume"], ans:2},
    ur:{q:"درج ذیل میں سے کون روزہ توڑ دیتا ہے؟", opts:["مسواک کرنا","بھول کر کھانا","جان بوجھ کر کھانا","خوشبو سونگھنا"], ans:2},
    hi:{q:"निम्नलिखित में से क्या रोज़ा तोड़ देता है?", opts:["मिस्वाक करना","भूल से खाना","जान-बूझकर खाना","इत्र सूंघना"], ans:2} },
  { cat:"fiqh", diff:"hard", pts:30,
    en:{q:"How many Takbeers are said in the Eid prayer in total?", opts:["6","7","12","9"], ans:2},
    ur:{q:"نماز عید میں کل کتنی تکبیریں ہوتی ہیں؟", opts:["6","7","12","9"], ans:2},
    hi:{q:"ईद की नमाज़ में कुल कितनी तकबीरें होती हैं?", opts:["6","7","12","9"], ans:2} },
  { cat:"fiqh", diff:"expert", pts:50,
    en:{q:"What is the minimum nisab in gold for Zakat to be obligatory?", opts:["50g","75g","85g","100g"], ans:2},
    ur:{q:"زکوٰۃ کے لیے سونے کا نصاب کتنا ہے؟", opts:["50 گرام","75 گرام","85 گرام","100 گرام"], ans:2},
    hi:{q:"ज़कात के लिए सोने का निसाब कितना है?", opts:["50 ग्राम","75 ग्राम","85 ग्राम","100 ग्राम"], ans:2} },

  // ── 99 NAMES ──
  { cat:"names", diff:"easy", pts:10,
    en:{q:"What does 'Ar-Rahman' mean?", opts:["The Powerful","The Most Merciful","The All-Knowing","The Creator"], ans:1},
    ur:{q:"'الرحمن' کا مطلب کیا ہے؟", opts:["قادر","نہایت مہربان","علیم","خالق"], ans:1},
    hi:{q:"'अर-रहमान' का अर्थ क्या है?", opts:["शक्तिशाली","अत्यंत दयालु","सर्वज्ञ","सृष्टिकर्ता"], ans:1} },
  { cat:"names", diff:"easy", pts:10,
    en:{q:"What does 'Al-Khaliq' mean?", opts:["The Forgiving","The Creator","The Sustainer","The Guide"], ans:1},
    ur:{q:"'الخالق' کا مطلب کیا ہے؟", opts:["بخشنے والا","پیدا کرنے والا","رزق دینے والا","رہنمائی دینے والا"], ans:1},
    hi:{q:"'अल-ख़ालिक़' का अर्थ क्या है?", opts:["क्षमाशील","सृष्टिकर्ता","पालनकर्ता","मार्गदर्शक"], ans:1} },
  { cat:"names", diff:"medium", pts:20,
    en:{q:"What does 'Al-Hafiz' mean?", opts:["The All-Seeing","The Preserver","The Just","The Subtle"], ans:1},
    ur:{q:"'الحفیظ' کا مطلب کیا ہے؟", opts:["سب دیکھنے والا","محافظ","عادل","لطیف"], ans:1},
    hi:{q:"'अल-हफ़ीज़' का अर्थ क्या है?", opts:["सर्वदर्शी","संरक्षक","न्यायी","सूक्ष्म"], ans:1} },
  { cat:"names", diff:"medium", pts:20,
    en:{q:"What does 'Ar-Razzaq' mean?", opts:["The Eternal","The Provider","The Guide","The First"], ans:1},
    ur:{q:"'الرزاق' کا مطلب کیا ہے؟", opts:["ہمیشہ رہنے والا","رزق دینے والا","رہنمائی دینے والا","اول"], ans:1},
    hi:{q:"'अर-रज्ज़ाक़' का अर्थ क्या है?", opts:["शाश्वत","प्रदाता","मार्गदर्शक","प्रथम"], ans:1} },
  { cat:"names", diff:"hard", pts:30,
    en:{q:"What does 'Al-Muqsit' mean?", opts:["The All-Aware","The Equitable","The Majestic","The Eternal"], ans:1},
    ur:{q:"'المقسط' کا مطلب کیا ہے؟", opts:["خبردار","انصاف کرنے والا","عظیم","دائمی"], ans:1},
    hi:{q:"'अल-मुक़्सित' का अर्थ क्या है?", opts:["सर्वज्ञ","न्यायसंगत","महिमामय","शाश्वत"], ans:1} },
  { cat:"names", diff:"expert", pts:50,
    en:{q:"What does 'Al-Batin' mean?", opts:["The Manifest","The Hidden/Inner","The First","The Last"], ans:1},
    ur:{q:"'الباطن' کا مطلب کیا ہے؟", opts:["ظاہر","پوشیدہ/باطن","اول","آخر"], ans:1},
    hi:{q:"'अल-बातिन' का अर्थ क्या है?", opts:["प्रकट","छिपा हुआ","प्रथम","अंतिम"], ans:1} },

  // ── TAJWEED (added to quran category) ──
  { cat:"quran", diff:"easy", pts:10,
    arabicAyah:"وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا", reference:"Al-Muzzammil 73:4",
    en:{q:"What does Tajweed mean?", opts:["Speed in recitation","Beautification — making recitation excellent","Silence","Memorisation"], ans:1},
    ur:{q:"تجوید کا معنی کیا ہے؟", opts:["تلاوت میں تیزی","خوبصورتی — تلاوت کو عمدہ بنانا","خاموشی","حفظ"], ans:1},
    hi:{q:"तजवीद का अर्थ क्या है?", opts:["तेज़ पाठ","सुंदरता — पाठ को उत्कृष्ट बनाना","मौन","हिफ़्ज़"], ans:1} },

  { cat:"quran", diff:"easy", pts:10,
    en:{q:"How many counts does Madd Asli (Natural Madd) last?", opts:["1","2","4","6"], ans:1},
    ur:{q:"مد اصلی (طبیعی مد) کتنے الف کا ہوتا ہے؟", opts:["ایک","دو","چار","چھ"], ans:1},
    hi:{q:"मद अस्ली (तबई मद) कितनी मात्राएँ होती है?", opts:["1","2","4","6"], ans:1} },

  { cat:"quran", diff:"easy", pts:10,
    en:{q:"What are the three Madd letters?", opts:["ب ت ث","ا و ي","ق ك ل","م ن و"], ans:1},
    ur:{q:"مد کے تین حروف کون سے ہیں؟", opts:["ب ت ث","ا و ي","ق ك ل","م ن و"], ans:1},
    hi:{q:"मद के तीन हर्फ़ कौन से हैं?", opts:["ب ت ث","ا و ي","ق ك ل","م ن و"], ans:1} },

  { cat:"quran", diff:"easy", pts:10,
    en:{q:"How many Qalqala letters are there?", opts:["3","4","5","6"], ans:2},
    ur:{q:"قلقلہ کے کتنے حروف ہیں؟", opts:["تین","چار","پانچ","چھ"], ans:2},
    hi:{q:"क़लक़ला के कितने हर्फ़ हैं?", opts:["3","4","5","6"], ans:2} },

  { cat:"quran", diff:"medium", pts:20,
    arabicAyah:"مِن بَعْدِ مِيثَاقِهِ", reference:"Al-Baqarah 2:27",
    en:{q:"In 'مِن بَعْدِ' — Noon Sakin before Ba — what Tajweed rule applies?", opts:["Izhar","Idghaam","Iqlab — Noon becomes Meem","Ikhfa"], ans:2},
    ur:{q:"'مِن بَعْدِ' میں نون ساکن با سے پہلے — کیا تجویدی حکم ہے؟", opts:["اظہار","ادغام","اقلاب — نون میم بنتی ہے","اخفاء"], ans:2},
    hi:{q:"'مِن بَعْدِ' में नून साकिन 'ب' से पहले — क्या तजवीद का हुक्म है?", opts:["इज़हार","इदग़ाम","इक़लाब — नून मीम बनती है","इख़फ़ा"], ans:2} },

  { cat:"quran", diff:"medium", pts:20,
    arabicAyah:"وَلَا الضَّالِّينَ", reference:"Al-Fatiha 1:7",
    en:{q:"In 'الضَّالِّينَ' — the Alif before Shaddah-Lam — what Madd is this?", opts:["Madd Asli — 2 counts","Madd Arid — 2/4/6 counts","Madd Lazim — exactly 6 counts","Madd Muttasil — 4-5 counts"], ans:2},
    ur:{q:"'الضَّالِّينَ' میں شدہ لام سے پہلے الف — کون سا مد ہے؟", opts:["مد اصلی — دو","مد عارض — دو/چار/چھ","مد لازم — ٹھیک چھ","مد متصل — چار پانچ"], ans:2},
    hi:{q:"'الضَّالِّينَ' में शद्दे लाम से पहले अलिफ़ — कौन सा मद है?", opts:["मद अस्ली — 2","मद आरिज़ — 2/4/6","मद लाज़िम — ठीक 6","मद मुत्तसिल — 4-5"], ans:2} },

  { cat:"quran", diff:"hard", pts:30,
    en:{q:"Which letters cause Idghaam WITHOUT Ghunna after Noon Sakin?", opts:["ي ن م و","ل ر only","ب only","ء ه ع غ ح خ"], ans:1},
    ur:{q:"نون ساکن کے بعد کون سے حروف بلا غنہ ادغام کراتے ہیں؟", opts:["ي ن م و","صرف ل ر","صرف ب","ء ه ع غ ح خ"], ans:1},
    hi:{q:"نون ساکن के बाद कौन से हर्फ़ बिला ग़ुन्ना इदग़ाम कराते हैं?", opts:["ي ن م و","सिर्फ़ ل ر","सिर्फ़ ب","ء ه ع غ ح خ"], ans:1} },

  { cat:"quran", diff:"expert", pts:50,
    en:{q:"Madd Lazim always lasts exactly how many counts?", opts:["2","4","5","6"], ans:3},
    ur:{q:"مد لازم ہمیشہ ٹھیک کتنے الف ہوتا ہے؟", opts:["دو","چار","پانچ","چھ"], ans:3},
    hi:{q:"मद लाज़िम हमेशा ठीक कितनी मात्राएँ होता है?", opts:["2","4","5","6"], ans:3} },

  // ── ARABIC WORDS (added to quran category) ──
  { cat:"quran", diff:"easy", pts:10,
    arabicAyah:"الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", reference:"Al-Fatiha 1:2",
    en:{q:"What does 'الْعَالَمِينَ' (Al-Alameen) mean?", opts:["The Muslims","All the worlds/universes","The Arabs","The prophets"], ans:1},
    ur:{q:"'الْعَالَمِينَ' کا معنی کیا ہے؟", opts:["مسلمان","تمام جہان","عرب","انبیاء"], ans:1},
    hi:{q:"'الْعَالَمِينَ' का अर्थ क्या है?", opts:["मुसलमान","तमाम जहान","अरब","अंबिया"], ans:1} },

  { cat:"quran", diff:"easy", pts:10,
    arabicAyah:"مَالِكِ يَوْمِ الدِّينِ", reference:"Al-Fatiha 1:4",
    en:{q:"What does 'الدِّينِ' mean in 'يَوْمِ الدِّينِ'?", opts:["The religion","Judgment/Recompense","The prayer","The faith"], ans:1},
    ur:{q:"'يَوْمِ الدِّينِ' میں 'الدِّينِ' کا معنی کیا ہے؟", opts:["دین","جزا/انصاف","نماز","ایمان"], ans:1},
    hi:{q:"'يَوْمِ الدِّينِ' में 'الدِّينِ' का अर्थ क्या है?", opts:["दीन","जज़ा/इंसाफ़","नमाज़","ईमान"], ans:1} },

  { cat:"quran", diff:"medium", pts:20,
    arabicAyah:"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", reference:"Al-Fatiha 1:5",
    en:{q:"What does 'نَسْتَعِينُ' mean?", opts:["We worship","We praise","We seek help from","We love"], ans:2},
    ur:{q:"'نَسْتَعِينُ' کا معنی کیا ہے؟", opts:["ہم عبادت کرتے ہیں","ہم تعریف کرتے ہیں","ہم مدد چاہتے ہیں","ہم محبت کرتے ہیں"], ans:2},
    hi:{q:"'نَسْتَعِينُ' का अर्थ क्या है?", opts:["हम इबादत करते हैं","हम तारीफ़ करते हैं","हम मदद चाहते हैं","हम मुहब्बत करते हैं"], ans:2} },

  { cat:"quran", diff:"medium", pts:20,
    en:{q:"What does 'تَقْوَى' (Taqwa) mean?", opts:["Courage","God-consciousness and piety","Knowledge only","Speed in worship"], ans:1},
    ur:{q:"'تَقْوَى' کا معنی کیا ہے؟", opts:["ہمت","اللہ کا خوف اور پرہیزگاری","صرف علم","عبادت میں تیزی"], ans:1},
    hi:{q:"'تَقْوَى' का अर्थ क्या है?", opts:["हिम्मत","अल्लाह का ख़ौफ़ और परहेज़गारी","सिर्फ़ इल्म","इबादत में तेज़ी"], ans:1} },

  { cat:"quran", diff:"hard", pts:30,
    arabicAyah:"وَمَا تُسِرُّونَ وَمَا تُعْلِنُونَ", reference:"An-Nahl 16:19",
    en:{q:"What do 'تُسِرُّونَ' and 'تُعْلِنُونَ' mean?", opts:["What you hear and see","What you conceal and what you reveal","What you eat and drink","What you say and write"], ans:1},
    ur:{q:"'تُسِرُّونَ' اور 'تُعْلِنُونَ' کا معنی کیا ہے؟", opts:["جو سنتے دیکھتے ہو","جو چھپاتے اور ظاہر کرتے ہو","جو کھاتے پیتے ہو","جو کہتے لکھتے ہو"], ans:1},
    hi:{q:"'تُسِرُّونَ' और 'تُعْلِنُونَ' का अर्थ क्या है?", opts:["जो सुनते देखते हो","जो छुपाते और ज़ाहिर करते हो","जो खाते पीते हो","जो कहते लिखते हो"], ans:1} },

  // ── QURAN STORIES (added to quran category) ──
  { cat:"quran", diff:"easy", pts:10,
    arabicAyah:"يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ", reference:"Al-Anbiya 21:69",
    en:{q:"Who was saved when Allah commanded 'يَا نَارُ كُونِي بَرْدًا وَسَلَامًا'?", opts:["Musa عليه السلام","Yunus عليه السلام","Ibrahim عليه السلام","Ismail عليه السلام"], ans:2},
    ur:{q:"جب اللہ نے آگ کو 'يَا نَارُ كُونِي بَرْدًا وَسَلَامًا' کہا تو کسے بچایا؟", opts:["موسیٰ علیہ السلام","یونس علیہ السلام","ابراہیم علیہ السلام","اسماعیل علیہ السلام"], ans:2},
    hi:{q:"जब अल्लाह ने आग को 'يَا نَارُ كُونِي بَرْدًا وَسَلَامًا' कहा तो किसे बचाया?", opts:["मूसा علیہ السلام","यूनुस علیہ السلام","इब्राहीम علیہ السلام","इस्माईल علیہ السلام"], ans:2} },

  { cat:"quran", diff:"easy", pts:10,
    arabicAyah:"وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا", reference:"Al-Ankabut 29:14",
    en:{q:"How many years did Nuh عليه السلام preach to his people?", opts:["500 years","750 years","950 years","1000 years exactly"], ans:2},
    ur:{q:"نوح علیہ السلام نے اپنی قوم میں کتنے سال تبلیغ کی؟", opts:["500 سال","750 سال","950 سال","ٹھیک 1000 سال"], ans:2},
    hi:{q:"नूह علیہ السلام ने अपनी क़ौम में कितने साल तबलीग़ की?", opts:["500 साल","750 साल","950 साल","बिल्कुल 1000 साल"], ans:2} },

  { cat:"quran", diff:"easy", pts:10,
    arabicAyah:"فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ", reference:"Al-Anbiya 21:87",
    en:{q:"Who made this supplication from inside the whale in three darknesses?", opts:["Musa عليه السلام","Ibrahim عليه السلام","Yunus عليه السلام","Dawud عليه السلام"], ans:2},
    ur:{q:"مچھلی کے پیٹ میں تین اندھیروں سے یہ دعا کس نے مانگی؟", opts:["موسیٰ علیہ السلام","ابراہیم علیہ السلام","یونس علیہ السلام","داؤد علیہ السلام"], ans:2},
    hi:{q:"मछली के पेट में तीन अंधेरों से यह दुआ किसने माँगी?", opts:["मूसा علیہ السلام","इब्राहीम علیہ السلام","यूनुस علیہ السلام","दाऊद علیہ السلام"], ans:2} },

  { cat:"quran", diff:"medium", pts:20,
    arabicAyah:"فَقُلْنَا اضْرِب بِّعَصَاكَ الْحَجَرَ ۖ فَانفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا", reference:"Al-Baqarah 2:60",
    en:{q:"When Musa عليه السلام struck the rock, how many springs gushed forth?", opts:["7","10","12","70"], ans:2},
    ur:{q:"جب موسیٰ علیہ السلام نے پتھر مارا تو کتنے چشمے نکلے؟", opts:["سات","دس","بارہ","ستر"], ans:2},
    hi:{q:"जब मूसा علیہ السلام ने पत्थर मारा तो कितने चश्मे निकले?", opts:["7","10","12","70"], ans:2} },

  { cat:"quran", diff:"medium", pts:20,
    en:{q:"The Quran calls the story of which Prophet 'Ahsan Al-Qasas' (best of stories)?", opts:["Musa عليه السلام","Ibrahim عليه السلام","Yusuf عليه السلام","Nuh عليه السلام"], ans:2},
    ur:{q:"قرآن کس نبی کے قصے کو 'احسن القصص' کہتا ہے؟", opts:["موسیٰ","ابراہیم","یوسف","نوح"], ans:2},
    hi:{q:"क़ुरआन किस नबी के क़िस्से को 'अहसन अल-क़सस' कहता है?", opts:["मूसा","इब्राहीम","यूसुफ़","नूह"], ans:2} },

  { cat:"quran", diff:"hard", pts:30,
    en:{q:"People of 'Ad (Prophet Hud's people) were destroyed by:", opts:["Great flood","Earthquake","Furious wind for 7 nights and 8 days","Fire from sky"], ans:2},
    ur:{q:"قوم عاد کو کس چیز سے ہلاک کیا گیا؟", opts:["عظیم سیلاب","زلزلہ","سات رات آٹھ دن تباہ کن آندھی","آسمانی آگ"], ans:2},
    hi:{q:"क़ौम आद को किस चीज़ से हलाक किया गया?", opts:["बड़ा सैलाब","ज़लज़ला","सात रात आठ दिन की तबाहकुन आँधी","आसमानी आग"], ans:2} },

  { cat:"quran", diff:"expert", pts:50,
    arabicAyah:"وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً", reference:"Al-Baqarah 2:30",
    en:{q:"When Allah told angels about creating a Khalifah on earth, what did they say?", opts:["We hear and obey","Will You place one who causes corruption while we glorify You?","We don't know who that is","We are more worthy"], ans:1},
    ur:{q:"جب اللہ نے زمین میں خلیفہ بنانے کا بتایا تو فرشتوں نے کیا کہا؟", opts:["سمعنا وأطعنا","کیا آپ وہ مخلوق رکھیں گے جو فساد پھیلائے؟","ہم نہیں جانتے","ہم زیادہ لائق ہیں"], ans:1},
    hi:{q:"जब अल्लाह ने ज़मीन में ख़लीफ़ा बनाने का बताया तो फ़रिश्तों ने क्या कहा?", opts:["सुना और माना","क्या आप वह मख़लूक़ रखेंगे जो फ़साद फैलाए?","हम नहीं जानते","हम ज़्यादा लाइक़ हैं"], ans:1} },

  // ── TAFSEER (added to quran category) ──
  { cat:"quran", diff:"easy", pts:10,
    arabicAyah:"قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ", reference:"Al-Ikhlas 112:1-2 — Sahih Bukhari",
    en:{q:"The Prophet ﷺ said Surah Al-Ikhlas equals what portion of the Quran in reward?", opts:["One quarter","One third","Half","Two thirds"], ans:1},
    ur:{q:"نبی ﷺ نے فرمایا سورۃ الاخلاص قرآن کے کتنے حصے کے برابر ہے؟", opts:["ایک چوتھائی","ایک تہائی","آدھا","دو تہائی"], ans:1},
    hi:{q:"نبی ﷺ ने फ़रमाया सूरह अल-इख़लास क़ुरआन के कितने हिस्से के बराबर है?", opts:["एक चौथाई","एक तिहाई","आधा","दो तिहाई"], ans:1} },

  { cat:"quran", diff:"easy", pts:10,
    arabicAyah:"اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", reference:"Al-Baqarah 2:255 — Sahih Muslim",
    en:{q:"What is the greatest Ayah of the Quran according to the Prophet ﷺ?", opts:["Al-Fatiha 1:1","Ayat Al-Kursi 2:255","Al-Baqarah 2:286","Al-Ikhlas 112:1"], ans:1},
    ur:{q:"نبی ﷺ کے مطابق قرآن کی سب سے عظیم آیت کون سی ہے؟", opts:["الفاتحہ 1:1","آیت الکرسی 2:255","البقرۃ 2:286","الاخلاص 112:1"], ans:1},
    hi:{q:"نبی ﷺ के मुताबिक़ क़ुरआन की सबसे अज़ीम आयत कौन सी है?", opts:["अल-फ़ातिहा 1:1","आयत अल-कुर्सी 2:255","अल-बक़रह 2:286","अल-इख़लास 112:1"], ans:1} },

  { cat:"quran", diff:"medium", pts:20,
    arabicAyah:"فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ", reference:"Ar-Rahman 55:13",
    en:{q:"'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ' is repeated how many times in Surah Ar-Rahman?", opts:["21","25","31","40"], ans:2},
    ur:{q:"'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ' سورۃ الرحمن میں کتنی بار ہے؟", opts:["21 بار","25 بار","31 بار","40 بار"], ans:2},
    hi:{q:"'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ' सूरह अर-रहमान में कितनी बार है?", opts:["21 बार","25 बार","31 बार","40 बार"], ans:2} },

  { cat:"quran", diff:"medium", pts:20,
    arabicAyah:"وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ", reference:"Adh-Dhariyat 51:56",
    en:{q:"According to this verse, why did Allah create Jinn and Humans?", opts:["To populate the earth","Only to worship Him","To serve the angels","To test who is strongest"], ans:1},
    ur:{q:"اس آیت کے مطابق اللہ نے جن اور انسان کیوں پیدا کیے؟", opts:["زمین آباد کرنے کو","صرف اپنی عبادت کے لیے","فرشتوں کی خدمت کو","جانچنے کو"], ans:1},
    hi:{q:"इस आयत के मुताबिक़ अल्लाह ने जिन्न और इंसान को क्यों पैदा किया?", opts:["ज़मीन आباद करने को","सिर्फ़ अपनी इबादत के लिए","फ़रिश्तों की ख़िदमत को","जाँचने को"], ans:1} },

  { cat:"quran", diff:"hard", pts:30,
    arabicAyah:"إِنَّ مَعَ الْعُسْرِ يُسْرًا", reference:"Ash-Sharh 94:6",
    en:{q:"'الْعُسْرِ' is definite, 'يُسْرًا' is indefinite in 94:5-6. What do scholars conclude?", opts:["One hardship and one ease","One specific hardship comes with multiple different eases","Many hardships and one ease","Equal hardship and ease"], ans:1},
    ur:{q:"آیت 94:5-6 میں 'الْعُسْرِ' معرفہ اور 'يُسْرًا' نکرہ — علماء کا نتیجہ؟", opts:["ایک مشکل ایک آسانی","ایک مخصوص مشکل کے ساتھ متعدد مختلف آسانیاں","بہت مشکلیں ایک آسانی","برابر مشکل آسانی"], ans:1},
    hi:{q:"آیت 94:5-6 में 'الْعُسْرِ' मारिफ़ह और 'يُسْرًا' नकिरह — उलमा का नतीजा?", opts:["एक मुश्किल एक आसानी","एक ख़ास मुश्किल के साथ मुख़्तलिफ़ आसानियाँ","बहुत मुश्किलें एक आसानी","बराबर"], ans:1} },

  { cat:"quran", diff:"expert", pts:50,
    arabicAyah:"لَا إِكْرَاهَ فِي الدِّينِ ۖ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ", reference:"Al-Baqarah 2:256",
    en:{q:"'لَا إِكْرَاهَ فِي الدِّينِ' — scholars say this verse means:", opts:["All religions are equal","Faith must come from free will — forcing someone to accept Islam is forbidden","Non-Muslims have no rights in Islam","This verse was abrogated"], ans:1},
    ur:{q:"'لَا إِكْرَاهَ فِي الدِّينِ' — علماء کہتے ہیں اس آیت کا مطلب ہے:", opts:["تمام مذاہب برابر ہیں","ایمان آزادی سے آنا چاہیے — زبردستی حرام ہے","غیر مسلموں کا کوئی حق نہیں","یہ آیت منسوخ ہے"], ans:1},
    hi:{q:"'لَا إِكْرَاهَ فِي الدِّينِ' — उलमा कहते हैं इस आयत का मतलब है:", opts:["तमाम मज़ाहिब बराबर हैं","ईमान आज़ादी से आना चाहिए — ज़बरदस्ती हराम है","ग़ैर-मुस्लिमों का कोई हक़ नहीं","यह आयत मन्सूख़ है"], ans:1} },

  // ── 50 NEW QUESTIONS ──
  { cat:"quran", diff:"easy", pts:10,
    arabicAyah:"شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ", reference:"Al-Baqarah 2:185",
    en:{q:"In which month was the Quran revealed?", opts:["Muharram","Sha'ban","Ramadan","Dhul Hijjah"], ans:2},
    ur:{q:"قرآن کس مہینے میں نازل ہوا؟", opts:["محرم","شعبان","رمضان","ذوالحجہ"], ans:2},
    hi:{q:"क़ुरआन किस महीने में नाज़िल हुआ?", opts:["मुहर्रम","शाबान","रमज़ान","ज़िलहज्ज"], ans:2} },

  { cat:"quran", diff:"easy", pts:10,
    arabicAyah:"إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ", reference:"Al-Hijr 15:9",
    en:{q:"Who guarantees the preservation of the Quran according to this verse?", opts:["The Companions","The scholars","Allah Himself","The angels"], ans:2},
    ur:{q:"اس آیت کے مطابق قرآن کی حفاظت کا ذمہ کس نے لیا ہے؟", opts:["صحابہ کرام","علماء","اللہ نے خود","فرشتوں نے"], ans:2},
    hi:{q:"इस आयत के मुताबिक़ क़ुरआन की हिफ़ाज़त का ज़िम्मा किसने लिया है?", opts:["सहाबा कराम","उलमा","अल्लाह ने ख़ुद","फ़रिश्तों ने"], ans:2} },

  { cat:"quran", diff:"easy", pts:10,
    en:{q:"Which is the longest Surah in the Quran?", opts:["Al-Imran","Al-Baqarah","An-Nisa","Al-Maidah"], ans:1},
    ur:{q:"قرآن کی سب سے لمبی سورت کون سی ہے؟", opts:["آل عمران","البقرۃ","النساء","المائدہ"], ans:1},
    hi:{q:"क़ुरआन की सबसे लंबी सूरत कौन सी है?", opts:["आल इमरान","अल-बक़रह","अन-निसा","अल-माइदह"], ans:1} },

  { cat:"quran", diff:"easy", pts:10,
    en:{q:"Which is the shortest Surah in the Quran?", opts:["Al-Falaq","Al-Asr","Al-Kawthar","Al-Ikhlas"], ans:2},
    ur:{q:"قرآن کی سب سے چھوٹی سورت کون سی ہے؟", opts:["الفلق","العصر","الکوثر","الاخلاص"], ans:2},
    hi:{q:"क़ुरआन की सबसे छोटी सूरत कौन सी है?", opts:["अल-फ़लक़","अल-अस्र","अल-कौसर","अल-इख़लास"], ans:2} },

  { cat:"quran", diff:"medium", pts:20,
    arabicAyah:"وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ", reference:"Al-Qamar 54:17",
    en:{q:"'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ' is repeated how many times in Surah Al-Qamar?", opts:["2","3","4","5"], ans:2},
    ur:{q:"'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ' سورۃ القمر میں کتنی بار آئی ہے؟", opts:["2 بار","3 بار","4 بار","5 بار"], ans:2},
    hi:{q:"'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ' सूरह अल-क़मर में कितनी बार आई है?", opts:["2 बार","3 बार","4 बार","5 बार"], ans:2} },

  { cat:"quran", diff:"medium", pts:20,
    arabicAyah:"يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ", reference:"Al-Baqarah 2:183",
    en:{q:"What does 'كُتِبَ عَلَيْكُمُ الصِّيَامُ' mean?", opts:["Fasting is recommended for you","Fasting is prescribed upon you","Fasting is voluntary","Fasting is cancelled"], ans:1},
    ur:{q:"'كُتِبَ عَلَيْكُمُ الصِّيَامُ' کا مطلب کیا ہے؟", opts:["تم پر روزہ مستحب ہے","تم پر روزہ فرض کیا گیا","تم پر روزہ نفل ہے","تم سے روزہ ہٹا دیا"], ans:1},
    hi:{q:"'كُتِبَ عَلَيْكُمُ الصِّيَامُ' का मतलब क्या है?", opts:["तुम पर रोज़ा मुस्तहब है","तुम पर रोज़ा फ़र्ज़ किया गया","तुम पर रोज़ा नफ़्ल है","तुम से रोज़ा हटा दिया"], ans:1} },

  { cat:"quran", diff:"medium", pts:20,
    arabicAyah:"وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ", reference:"Al-Baqarah 2:43",
    en:{q:"What does 'أَقِيمُوا' mean in 'وَأَقِيمُوا الصَّلَاةَ'?", opts:["Perform sometimes","Establish/uphold properly","Learn about","Remember"], ans:1},
    ur:{q:"'وَأَقِيمُوا الصَّلَاةَ' میں 'أَقِيمُوا' کا معنی کیا ہے؟", opts:["کبھی کبھی ادا کرو","قائم کرو/صحیح طریقے سے ادا کرو","سیکھو","یاد کرو"], ans:1},
    hi:{q:"'وَأَقِيمُوا الصَّلَاةَ' में 'أَقِيمُوا' का अर्थ क्या है?", opts:["कभी कभी अदा करो","क़ायम करो/सही तरीक़े से अदा करो","सीखो","याद करो"], ans:1} },

  { cat:"quran", diff:"hard", pts:30,
    arabicAyah:"وَإِن كُنتُمْ فِي رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا بِسُورَةٍ مِّن مِّثْلِهِ", reference:"Al-Baqarah 2:23",
    en:{q:"This verse is the Quran's challenge (Tahhaddi). What does Allah challenge disbelievers to do?", opts:["Memorise one Surah","Produce even one Surah similar to the Quran","Translate the Quran","Count all Surahs"], ans:1},
    ur:{q:"یہ قرآن کا چیلنج (تحدی) ہے۔ اللہ منکروں کو کیا چیلنج دیتا ہے؟", opts:["ایک سورت حفظ کریں","ایک جیسی سورت لے آئیں","قرآن کا ترجمہ کریں","تمام سورتیں گنیں"], ans:1},
    hi:{q:"यह क़ुरआन का चैलेंज (तहद्दी) है। अल्लाह मुनकिरों को क्या चैलेंज देता है?", opts:["एक सूरत हिफ़्ज़ करें","एक जैसी सूरत ले आएँ","क़ुरआन का तर्जुमा करें","तमाम सूरतें गिनें"], ans:1} },

  { cat:"quran", diff:"hard", pts:30,
    arabicAyah:"إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا", reference:"An-Nisa 4:103",
    en:{q:"'كِتَابًا مَّوْقُوتًا' means prayer is:", opts:["Optional at any time","Obligatory at fixed/appointed times","Only on Fridays","Only in congregation"], ans:1},
    ur:{q:"'كِتَابًا مَّوْقُوتًا' کا مطلب ہے نماز:", opts:["کسی بھی وقت اختیاری","مقررہ اوقات پر فرض","صرف جمعہ کو","صرف جماعت میں"], ans:1},
    hi:{q:"'كِتَابًا مَّوْقُوتًا' का मतलब है नमाज़:", opts:["किसी भी वक़्त इख़्तियारी","मुक़र्ररा औक़ात पर फ़र्ज़","सिर्फ़ जुमे को","सिर्फ़ जमाअत में"], ans:1} },

  { cat:"quran", diff:"expert", pts:50,
    arabicAyah:"وَمَا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ", reference:"Al-Ahzab 33:40",
    en:{q:"What does 'خَاتَمَ النَّبِيِّينَ' confirm about Prophet Muhammad ﷺ?", opts:["He was the first Prophet","He is the Seal/Last of all Prophets — no prophet after him","He was greatest in rank only","He was only a messenger, not a prophet"], ans:1},
    ur:{q:"'خَاتَمَ النَّبِيِّينَ' نبی ﷺ کے بارے میں کیا ثابت کرتا ہے؟", opts:["آپ پہلے نبی تھے","آپ تمام انبیاء کی مہر/آخری نبی ہیں — آپ کے بعد کوئی نبی نہیں","آپ صرف درجے میں بڑے تھے","آپ صرف رسول تھے نبی نہیں"], ans:1},
    hi:{q:"'خَاتَمَ النَّبِيِّينَ' नबी ﷺ के बारे में क्या साबित करता है?", opts:["आप पहले नबी थे","आप तमाम अंबिया की मुहर/आख़िरी नबी हैं — आपके बाद कोई नबी नहीं","आप सिर्फ़ दर्जे में बड़े थे","आप सिर्फ़ रसूल थे नबी नहीं"], ans:1} },

  { cat:"quran", diff:"expert", pts:50,
    en:{q:"Which Surah has no Bismillah at its beginning?", opts:["Al-Fatiha","Al-Baqarah","At-Tawbah","Al-Kahf"], ans:2},
    ur:{q:"کس سورت کے شروع میں بسم اللہ نہیں ہے؟", opts:["الفاتحہ","البقرۃ","التوبہ","الکہف"], ans:2},
    hi:{q:"किस सूरत के शुरू में बिस्मिल्लाह नहीं है?", opts:["अल-फ़ातिहा","अल-बक़रह","अत-तौबह","अल-कहफ़"], ans:2} },

  { cat:"quran", diff:"easy", pts:10,
    en:{q:"How many Juz (parts) is the Quran divided into?", opts:["15","20","30","40"], ans:2},
    ur:{q:"قرآن کتنے پاروں میں تقسیم ہے؟", opts:["15","20","30","40"], ans:2},
    hi:{q:"क़ुरआन कितने पारों में बँटा हुआ है?", opts:["15","20","30","40"], ans:2} },

  { cat:"quran", diff:"medium", pts:20,
    arabicAyah:"اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ", reference:"Al-Alaq 96:1",
    en:{q:"Which Surah contains the first verses revealed to the Prophet ﷺ?", opts:["Al-Fatiha","Al-Baqarah","Al-Alaq","Al-Muddaththir"], ans:2},
    ur:{q:"نبی ﷺ پر سب سے پہلے نازل ہونے والی آیات کس سورت میں ہیں؟", opts:["الفاتحہ","البقرۃ","العلق","المدثر"], ans:2},
    hi:{q:"नबी ﷺ पर सबसे पहले नाज़िल होने वाली आयात किस सूरत में हैं?", opts:["अल-फ़ातिहा","अल-बक़रह","अल-अलक़","अल-मुद्दस्सिर"], ans:2} },

  { cat:"hadith", diff:"easy", pts:10,
    en:{q:"The Prophet ﷺ said: 'The best of you are those who learn the Quran and ___.'", opts:["memorise it","teach it to others","recite it daily","recite it slowly"], ans:1},
    ur:{q:"نبی ﷺ نے فرمایا: 'تم میں سے بہترین وہ ہے جو قرآن سیکھے اور ___'", opts:["حفظ کرے","دوسروں کو سکھائے","روزانہ پڑھے","آہستہ پڑھے"], ans:1},
    hi:{q:"नबी ﷺ ने फ़रमाया: 'तुममें सबसे बेहतर वह है जो क़ुरआन सीखे और ___'", opts:["हिफ़्ज़ करे","दूसरों को सिखाए","रोज़ाना पढ़े","आहिस्ता पढ़े"], ans:1} },

  { cat:"hadith", diff:"easy", pts:10,
    en:{q:"The Prophet ﷺ said: 'Actions are judged by ___.'", opts:["results","intentions (Niyyah)","companions","wealth"], ans:1},
    ur:{q:"نبی ﷺ نے فرمایا: 'اعمال کا دارومدار ___ پر ہے۔'", opts:["نتائج","نیتوں پر","ساتھیوں","مال پر"], ans:1},
    hi:{q:"नबी ﷺ ने फ़रमाया: 'अमल का दारोमदार ___ पर है।'", opts:["नतीजों","नीयतों पर","साथियों","माल पर"], ans:1} },

  { cat:"hadith", diff:"medium", pts:20,
    en:{q:"The Prophet ﷺ said: 'None of you truly believes until he loves for his brother what he ___.'", opts:["earns himself","loves for himself","prays for himself","has himself"], ans:1},
    ur:{q:"نبی ﷺ نے فرمایا: 'تم میں سے کوئی مومن نہیں جب تک اپنے بھائی کے لیے وہی نہ چاہے جو اپنے لیے ___'", opts:["کماتا ہے","پسند کرتا ہے","دعا کرتا ہے","رکھتا ہے"], ans:1},
    hi:{q:"नबी ﷺ ने फ़रमाया: 'तुममें से कोई मोमिन नहीं जब तक अपने भाई के लिए वही न चाहे जो अपने लिए ___'", opts:["कमाता है","पसंद करता है","दुआ करता है","रखता है"], ans:1} },

  { cat:"hadith", diff:"medium", pts:20,
    en:{q:"The Prophet ﷺ said: 'Seeking knowledge is an obligation upon every ___.'", opts:["male Muslim","Muslim (male and female)","scholar","free person"], ans:1},
    ur:{q:"نبی ﷺ نے فرمایا: 'علم حاصل کرنا ہر ___ پر فرض ہے۔'", opts:["مسلمان مرد","مسلمان (مرد و عورت)","عالم","آزاد شخص"], ans:1},
    hi:{q:"नबी ﷺ ने फ़रमाया: 'इल्म हासिल करना हर ___ पर फ़र्ज़ है।'", opts:["मुसलमान मर्द","मुसलमान (मर्द व औरत)","आलिम","आज़ाद शख़्स"], ans:1} },

  { cat:"hadith", diff:"medium", pts:20,
    en:{q:"According to Hadith, which deed continues to benefit a person even after death?", opts:["Daily prayers","Sadaqah Jariyah, beneficial knowledge, or righteous child who prays","Hajj only","Fasting in Ramadan"], ans:1},
    ur:{q:"حدیث کے مطابق کون سا عمل موت کے بعد بھی فائدہ دیتا رہتا ہے؟", opts:["روزانہ نمازیں","صدقہ جاریہ، نافع علم، یا نیک اولاد","صرف حج","رمضان کے روزے"], ans:1},
    hi:{q:"हदीस के मुताबिक़ कौन सा अमल मौत के बाद भी फ़ायदा देता रहता है?", opts:["रोज़ाना नमाज़ें","सदक़ह जारिया, नाफ़े इल्म, या नेक औलाद","सिर्फ़ हज","रमज़ान के रोज़े"], ans:1} },

  { cat:"hadith", diff:"hard", pts:30,
    en:{q:"The Prophet ﷺ said: 'The strong person is one who controls ___ when angry.'", opts:["his tongue","himself (his nafs)","his hands","his wealth"], ans:1},
    ur:{q:"نبی ﷺ نے فرمایا: 'پہلوان وہ ہے جو غصے میں ___ کو قابو میں رکھے۔'", opts:["زبان","اپنے آپ (نفس) کو","ہاتھوں","مال کو"], ans:1},
    hi:{q:"नबी ﷺ ने फ़रमाया: 'पहलवान वह है जो ग़ुस्से में ___ को क़ाबू में रखे।'", opts:["ज़बान","अपने आप (नफ़्स) को","हाथों","माल को"], ans:1} },

  { cat:"hadith", diff:"expert", pts:50,
    en:{q:"The Prophet ﷺ said: whoever reads Ayat Al-Kursi after every obligatory prayer, nothing prevents him from entering Paradise except ___.", opts:["Major sins","Death","Missing one prayer","Lack of Hajj"], ans:1},
    ur:{q:"نبی ﷺ نے فرمایا: جو ہر فرض نماز کے بعد آیت الکرسی پڑھے اسے جنت سے ___ کے علاوہ کچھ نہیں روکتا۔", opts:["کبیرہ گناہ","موت","ایک نماز چھوڑنا","حج نہ کرنا"], ans:1},
    hi:{q:"नबी ﷺ ने फ़रमाया: जो हर फ़र्ज़ नमाज़ के बाद आयत अल-कुर्सी पढ़े उसे जन्नत से ___ के सिवा कुछ नहीं रोकता।", opts:["कबीरा गुनाह","मौत","एक नमाज़ छोड़ना","हज न करना"], ans:1} },

  { cat:"seerah", diff:"easy", pts:10,
    en:{q:"In which city was Prophet Muhammad ﷺ born?", opts:["Madinah","Taif","Jerusalem","Makkah"], ans:3},
    ur:{q:"نبی محمد ﷺ کس شہر میں پیدا ہوئے؟", opts:["مدینہ","طائف","بیت المقدس","مکہ"], ans:3},
    hi:{q:"नबी मुहम्मद ﷺ किस शहर में पैदा हुए?", opts:["मदीना","ताइफ़","बैतुल मक़्दिस","मक्का"], ans:3} },

  { cat:"seerah", diff:"easy", pts:10,
    en:{q:"What was the name of the Prophet's ﷺ first wife who was first to accept Islam?", opts:["Aisha رضي الله عنها","Fatimah رضي الله عنها","Khadijah رضي الله عنها","Hafsa رضي الله عنها"], ans:2},
    ur:{q:"نبی ﷺ کی پہلی ایمان لانے والی بیوی کا نام کیا تھا؟", opts:["عائشہ رضی اللہ عنہا","فاطمہ رضی اللہ عنہا","خدیجہ رضی اللہ عنہا","حفصہ رضی اللہ عنہا"], ans:2},
    hi:{q:"नबी ﷺ की पहली ईमान लाने वाली बीवी का नाम क्या था?", opts:["आइशा رضی اللہ عنہا","फ़ातिमा رضی اللہ عنہا","ख़दीजा رضی اللہ عنہا","हफ़सा رضی اللہ عنہا"], ans:2} },

  { cat:"seerah", diff:"medium", pts:20,
    en:{q:"The Hijrah (migration) from Makkah to Madinah took place in which year CE?", opts:["610","620","622","630"], ans:2},
    ur:{q:"مکہ سے مدینہ ہجرت کس سال عیسوی میں ہوئی؟", opts:["610","620","622","630"], ans:2},
    hi:{q:"मक्का से मदीना हिजरत किस साल ईस्वी में हुई?", opts:["610","620","622","630"], ans:2} },

  { cat:"seerah", diff:"medium", pts:20,
    en:{q:"In the Battle of Badr, how many Muslims fought against approximately 1000 Quraysh?", opts:["100","200","313","500"], ans:2},
    ur:{q:"غزوہ بدر میں تقریباً 1000 قریش کے خلاف کتنے مسلمان لڑے؟", opts:["100","200","313","500"], ans:2},
    hi:{q:"ग़ज़वह बद्र में तक़रीबन 1000 क़ुरैश के ख़िलाफ़ कितने मुसलमान लड़े?", opts:["100","200","313","500"], ans:2} },

  { cat:"seerah", diff:"medium", pts:20,
    en:{q:"What was the first female martyr of Islam?", opts:["Sumayyah رضي الله عنها","Aisha رضي الله عنها","Fatimah رضي الله عنها","Khadijah رضي الله عنها"], ans:0},
    ur:{q:"اسلام کی پہلی خاتون شہید کون تھیں؟", opts:["سمیہ رضی اللہ عنہا","عائشہ رضی اللہ عنہا","فاطمہ رضی اللہ عنہا","خدیجہ رضی اللہ عنہا"], ans:0},
    hi:{q:"इस्लाम की पहली ख़ातून शहीद कौन थीं?", opts:["सुमय्या رضی اللہ عنہا","आइशा رضی اللہ عنہا","फ़ातिमा رضی اللہ عنہا","ख़दीजा رضی اللہ عنہا"], ans:0} },

  { cat:"seerah", diff:"hard", pts:30,
    en:{q:"What was the Prophet's ﷺ title 'Al-Ameen' given before prophethood mean?", opts:["The Brave","The Trustworthy","The Scholar","The Leader"], ans:1},
    ur:{q:"نبوت سے پہلے دیا گیا لقب 'الامین' کا مطلب کیا ہے؟", opts:["بہادر","امانتدار","عالم","قائد"], ans:1},
    hi:{q:"नबुव्वत से पहले दिया गया लक़ब 'अल-अमीन' का मतलब क्या है?", opts:["बहादुर","अमानतदार","आलिम","क़ाइद"], ans:1} },

  { cat:"seerah", diff:"expert", pts:50,
    en:{q:"The Prophet ﷺ passed away on which date?", opts:["12 Rabi Al-Awwal 11 AH","10 Muharram 10 AH","12 Rajab 9 AH","27 Ramadan 11 AH"], ans:0},
    ur:{q:"نبی ﷺ کی وفات کس تاریخ کو ہوئی؟", opts:["12 ربیع الاول 11 ہجری","10 محرم 10 ہجری","12 رجب 9 ہجری","27 رمضان 11 ہجری"], ans:0},
    hi:{q:"नबी ﷺ की वफ़ात किस तारीख़ को हुई?", opts:["12 रबीउल अव्वल 11 हिजरी","10 मुहर्रम 10 हिजरी","12 रजब 9 हिजरी","27 रमज़ान 11 हिजरी"], ans:0} },

  { cat:"fiqh", diff:"easy", pts:10,
    en:{q:"How many Fard (obligatory) acts are in Wudu (ablution)?", opts:["3","4","5","6"], ans:1},
    ur:{q:"وضو میں کتنے فرض ہیں؟", opts:["3","4","5","6"], ans:1},
    hi:{q:"वुज़ू में कितने फ़र्ज़ हैं?", opts:["3","4","5","6"], ans:1} },

  { cat:"fiqh", diff:"medium", pts:20,
    en:{q:"What percentage of eligible wealth must be given as Zakat?", opts:["1%","2%","2.5%","5%"], ans:2},
    ur:{q:"اہل مال پر زکوٰۃ کتنے فیصد فرض ہے؟", opts:["1%","2%","2.5%","5%"], ans:2},
    hi:{q:"अहल माल पर ज़कात कितने फ़ीसद फ़र्ज़ है?", opts:["1%","2%","2.5%","5%"], ans:2} },

  { cat:"fiqh", diff:"medium", pts:20,
    en:{q:"What is Tayammum?", opts:["A shorter Ghusl","Dry ablution with clean earth when water is unavailable or harmful","A type of prayer","Cleaning the teeth"], ans:1},
    ur:{q:"تیمم کیا ہے؟", opts:["مختصر غسل","پاک مٹی سے خشک طہارت جب پانی نہ ہو یا نقصاندہ ہو","ایک نماز","دانت صاف کرنا"], ans:1},
    hi:{q:"तयम्मुम क्या है?", opts:["मुख़्तसर ग़ुस्ल","पाک मिट्टी से ख़ुश्क तहारत जब पानी न हो या नुक़सानदेह हो","एक नमाज़","दाँत साफ़ करना"], ans:1} },

  { cat:"fiqh", diff:"hard", pts:30,
    arabicAyah:"وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ", reference:"Al-Baqarah 2:196",
    en:{q:"Hajj is obligatory once for Muslims who are:", opts:["Under 40 years old","Physically and financially capable (Istita'ah)","Male only","Living in Saudi Arabia"], ans:1},
    ur:{q:"حج ان مسلمانوں پر فرض ہے جو:", opts:["40 سال سے کم ہوں","جسمانی اور مالی طور پر قادر ہوں (استطاعت)","صرف مرد ہوں","سعودی عرب میں رہتے ہوں"], ans:1},
    hi:{q:"हज उन मुसलमानों पर फ़र्ज़ है जो:", opts:["40 साल से कम हों","जिस्मानी और माली तौर पर क़ादिर हों (इस्तिताअह)","सिर्फ़ मर्द हों","सऊदी अरब में रहते हों"], ans:1} },

  { cat:"history", diff:"easy", pts:10,
    en:{q:"Who was the first Caliph after the Prophet ﷺ?", opts:["Umar ibn Al-Khattab","Ali ibn Abi Talib","Abu Bakr As-Siddiq","Uthman ibn Affan"], ans:2},
    ur:{q:"نبی ﷺ کے بعد پہلے خلیفہ کون تھے؟", opts:["عمر بن الخطاب","علی بن ابی طالب","ابو بکر صدیق","عثمان بن عفان"], ans:2},
    hi:{q:"नबी ﷺ के बाद पहले ख़लीफ़ा कौन थे?", opts:["उमर इब्न अल-ख़त्ताब","अली इब्न अबी तालिब","अबू बकर अस-सिद्दीक़","उस्मान इब्न अफ़्फ़ान"], ans:2} },

  { cat:"history", diff:"medium", pts:20,
    en:{q:"During whose Caliphate was the Quran first compiled into one book (Mushaf)?", opts:["Abu Bakr رضي الله عنه","Umar رضي الله عنه","Uthman رضي الله عنه","Ali رضي الله عنه"], ans:0},
    ur:{q:"کس خلیفہ کے دور میں قرآن کو پہلی بار ایک کتاب (مصحف) میں جمع کیا گیا؟", opts:["ابوبکر رضی اللہ عنہ","عمر رضی اللہ عنہ","عثمان رضی اللہ عنہ","علی رضی اللہ عنہ"], ans:0},
    hi:{q:"किस ख़लीफ़ा के दौर में क़ुरआन को पहली बार एक किताब (मुसहफ़) में जमा किया गया?", opts:["अबू बकर رضی اللہ عنہ","उमर رضی اللہ عنہ","उस्मान رضی اللہ عنہ","अली رضی اللہ عنہ"], ans:0} },

  { cat:"history", diff:"medium", pts:20,
    en:{q:"The city of Madinah was originally called:", opts:["Yathrib","Taibah","Al-Madinah","Hijaz"], ans:0},
    ur:{q:"مدینہ شہر کا اصل نام کیا تھا؟", opts:["یثرب","طیبہ","المدینہ","حجاز"], ans:0},
    hi:{q:"मदीना शहर का असल नाम क्या था?", opts:["यसरब","तैबह","अल-मदीना","हिजाज़"], ans:0} },

  { cat:"history", diff:"hard", pts:30,
    en:{q:"In the Battle of Uhud, why did the initially winning Muslims face a setback?", opts:["Suddenly outnumbered","Archers left their positions against the Prophet's ﷺ order, allowing cavalry to attack from behind","The Prophet was martyred","They ran out of water"], ans:1},
    ur:{q:"غزوہ احد میں ابتداً جیتتے مسلمانوں کو نقصان کیوں ہوا؟", opts:["اچانک دشمن بڑھ گئے","تیر اندازوں نے نبی ﷺ کے حکم کے خلاف پہاڑ چھوڑا، گھڑسوار پیچھے سے آئے","نبی شہید ہو گئے","پانی ختم ہو گیا"], ans:1},
    hi:{q:"ग़ज़वह उहुद में शुरू में जीतते मुसलमानों को नुक़सान क्यों हुआ?", opts:["अचानक दुश्मन बढ़ गए","तीरंदाज़ों ने नबी ﷺ के हुक्म के ख़िलाफ़ पहाड़ छोड़ा, घुड़सवार पीछे से आए","नबी शहीद हो गए","पानी ख़त्म हो गया"], ans:1} },

  { cat:"pillars", diff:"easy", pts:10,
    en:{q:"What is the first pillar of Islam?", opts:["Salah","Zakat","Shahada (Testimony of Faith)","Sawm"], ans:2},
    ur:{q:"اسلام کا پہلا رکن کیا ہے؟", opts:["صلاح","زکوٰۃ","شہادت (کلمہ)","صوم"], ans:2},
    hi:{q:"इस्लाम का पहला रुक्न क्या है?", opts:["सलाह","ज़कात","शहादत (कलिमा)","सौम"], ans:2} },

  { cat:"pillars", diff:"easy", pts:10,
    en:{q:"How many times a day is the Adhan (call to prayer) called?", opts:["3","4","5","6"], ans:2},
    ur:{q:"دن میں کتنی بار اذان دی جاتی ہے؟", opts:["3","4","5","6"], ans:2},
    hi:{q:"दिन में कितनी बार अज़ान दी जाती है?", opts:["3","4","5","6"], ans:2} },

  { cat:"pillars", diff:"medium", pts:20,
    en:{q:"Hajj is obligatory for financially and physically capable Muslims how many times in a lifetime?", opts:["Every year","Once","Twice","Three times"], ans:1},
    ur:{q:"مستطیع مسلمانوں پر حج زندگی میں کتنی بار فرض ہے؟", opts:["ہر سال","ایک بار","دو بار","تین بار"], ans:1},
    hi:{q:"मुस्तताअ मुसलमानों पर हज ज़िंदगी में कितनी बार फ़र्ज़ है?", opts:["हर साल","एक बार","दो बार","तीन बार"], ans:1} },

  { cat:"pillars", diff:"hard", pts:30,
    en:{q:"During Hajj, missing Wuquf Arafat (standing at Arafat) means:", opts:["Hajj is incomplete but valid","The Hajj is INVALID — must be repeated next year","Only a penalty applies","It is optional anyway"], ans:1},
    ur:{q:"حج میں وقوف عرفات (عرفات میں کھڑے ہونا) چھوڑ دینے سے:", opts:["حج نامکمل لیکن درست ہے","حج باطل ہو جاتا ہے — اگلے سال دوبارہ کرنا ہوگا","صرف دم دینا ہوگا","یہ اختیاری ہے"], ans:1},
    hi:{q:"हज में वुक़ूफ़ अरफ़ात (अरफ़ात में खड़े होना) छोड़ देने से:", opts:["हज नामुकम्मल लेकिन दुरुस्त है","हज बातिल हो जाता है — अगले साल दोबारा करना होगा","सिर्फ़ दम देना होगा","यह इख़्तियारी है"], ans:1} },

  { cat:"names", diff:"easy", pts:10,
    en:{q:"What does 'Al-Ghafoor' (الغفور) mean?", opts:["The All-Knowing","The Most Forgiving","The Provider","The Creator"], ans:1},
    ur:{q:"'الغفور' کا مطلب کیا ہے؟", opts:["سب کچھ جاننے والا","بہت زیادہ بخشنے والا","رزق دینے والا","پیدا کرنے والا"], ans:1},
    hi:{q:"'अल-ग़फ़ूर' का मतलब क्या है?", opts:["सब कुछ जानने वाला","बहुत ज़्यादा बख़्शने वाला","रिज़्क़ देने वाला","पैदा करने वाला"], ans:1} },

  { cat:"names", diff:"easy", pts:10,
    en:{q:"What does 'Al-Wahhab' (الوهاب) mean?", opts:["The Generous Bestower","The Judge","The Guardian","The First"], ans:0},
    ur:{q:"'الوهاب' کا مطلب کیا ہے؟", opts:["بے حساب عطا کرنے والا","فیصلہ کرنے والا","محافظ","اول"], ans:0},
    hi:{q:"'अल-वह्हाब' का मतलब क्या है?", opts:["बेहिसाब अता करने वाला","फ़ैसला करने वाला","मुहाफ़िज़","अव्वल"], ans:0} },

  { cat:"names", diff:"medium", pts:20,
    en:{q:"'Al-Hayy Al-Qayyum' together mean:", opts:["The Knowing, the Wise","The Ever-Living, the Self-Sustaining — He lives forever and all depend on Him","The First, the Last","The Gracious, the Merciful"], ans:1},
    ur:{q:"'الحي القيوم' مل کر کیا مطلب دیتے ہیں؟", opts:["جاننے والا، حکیم","ہمیشہ زندہ، ہر چیز کو قائم رکھنے والا","اول، آخر","رحمان، رحیم"], ans:1},
    hi:{q:"'अल-हय्य अल-क़य्यूम' मिल कर क्या मतलब देते हैं?", opts:["जानने वाला, हकीम","हमेशा ज़िंदा, हर चीज़ को क़ायम रखने वाला","अव्वल, आख़िर","रहमान, रहीम"], ans:1} },

  { cat:"names", diff:"hard", pts:30,
    en:{q:"What does 'Al-Muqaddim Al-Mu'akhkhir' mean?", opts:["The First and the Last","The One who brings forward and delays — He controls timing of all things","The Apparent and the Hidden","All-Hearing and All-Seeing"], ans:1},
    ur:{q:"'المقدم المؤخر' کا مطلب کیا ہے؟", opts:["اول و آخر","آگے کرنے اور پیچھے کرنے والا — تمام چیزوں کے وقت کا کنٹرول","ظاہر اور باطن","سب سننے اور دیکھنے والا"], ans:1},
    hi:{q:"'अल-मुक़द्दिम अल-मुअख़्ख़िर' का मतलब क्या है?", opts:["अव्वल व आख़िर","आगे करने और पीछे करने वाला — तमाम चीज़ों के वक़्त का कंट्रोल","ज़ाहिर और बातिन","सब सुनने और देखने वाला"], ans:1} },

  { cat:"names", diff:"expert", pts:50,
    en:{q:"What is the difference between 'Al-Hakam' (الحكم) and 'Al-Hakim' (الحكيم)?", opts:["Identical","Al-Hakam = The Judge (who rules); Al-Hakim = The All-Wise (possessing wisdom in all things)","Al-Hakim is for dunya; Al-Hakam for akhirah","Al-Hakam is stronger"], ans:1},
    ur:{q:"'الحكم' اور 'الحكيم' میں کیا فرق ہے؟", opts:["دونوں ایک ہیں","الحكم = فیصلہ کرنے والا؛ الحكيم = تمام چیزوں میں حکمت والا","الحكيم دنیا، الحكم آخرت","الحكم زیادہ قوی"], ans:1},
    hi:{q:"'अल-हकम' और 'अल-हकीम' में क्या फ़र्क़ है?", opts:["दोनों एक हैं","अल-हकम = फ़ैसला करने वाला; अल-हकीम = तमाम चीज़ों में हिकमत वाला","अल-हकीम दुनिया, अल-हकम आख़िरत","अल-हकम ज़्यादा क़वी"], ans:1} },
];

const TOTAL = 10;
const DIFF_TIME: Record<Diff,number> = { easy:25, medium:18, hard:12, expert:8 };
const DIFF_COLORS: Record<Diff,string> = {
  easy:"bg-green-100 text-green-700",
  medium:"bg-amber-100 text-amber-700",
  hard:"bg-orange-100 text-orange-700",
  expert:"bg-red-100 text-red-700",
};
const CAT_KEYS: Cat[] = ["all","quran","hadith","fiqh","seerah","history","pillars","names"];
function shuffle<T>(arr: T[]): T[] { return [...arr].sort(() => Math.random() - 0.5); }

export default function IslamicQuizGame() {
  const [lang, setLang] = useState<Lang>("en");
  const [selectedCats, setSelectedCats] = useState<Set<Cat>>(new Set(["all"]));
  const [diff, setDiff] = useState<Diff>("easy");
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [qList, setQList] = useState<Question[]>([]);
  const [qIdx, setQIdx] = useState(0);
  const [curQ, setCurQ] = useState<Question | null>(null);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{text:string;ok:boolean}|null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [history, setHistory] = useState<boolean[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  // Shuffled options: {opts, correctIdx} per language
  const [shuffledOpts, setShuffledOpts] = useState<Record<Lang,{opts:string[];ans:number}>>({
    en:{opts:[],ans:0}, ur:{opts:[],ans:0}, hi:{opts:[],ans:0}
  });
  const seenIdsRef = useRef<Set<number>>(new Set());  // tracks seen questions across games
  const timerRef = useRef<ReturnType<typeof setInterval>|null>(null);
  const totalTimeRef = useRef(0);
  const u = UI[lang];

  // Helper: shuffle options for all 3 languages using same permutation
  const buildShuffledOpts = (q: Question): Record<Lang,{opts:string[];ans:number}> => {
    const perm = q.en.opts.map((_,i) => i).sort(() => Math.random() - 0.5);
    return {
      en: { opts: perm.map(i => q.en.opts[i]), ans: perm.indexOf(q.en.ans) },
      ur: { opts: perm.map(i => q.ur.opts[i]), ans: perm.indexOf(q.ur.ans) },
      hi: { opts: perm.map(i => q.hi.opts[i]), ans: perm.indexOf(q.hi.ans) },
    };
  };

  const clearTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };

  const getPool = useCallback((c: Set<Cat>, d: Diff) => {
    let pool = QB.filter(q => q.diff === d);
    if (!c.has("all")) pool = pool.filter(q => c.has(q.cat as Cat));
    if (pool.length === 0) pool = QB.filter(q => q.diff === d);
    return pool;
  }, []);

  const loadQ = useCallback((list: Question[], idx: number, opts: Record<Lang,{opts:string[];ans:number}>[]) => {
    if (idx >= list.length) { setGameOver(true); clearTimer(); return; }
    const q = list[idx];
    setCurQ(q);
    setShuffledOpts(opts[idx]);
    setAnswered(false); setSelected(null); setFeedback(null);
    const t = DIFF_TIME[diff];
    totalTimeRef.current = t; setTimeLeft(t);
    clearTimer();
    timerRef.current = setInterval(() => setTimeLeft(v => Math.max(0, parseFloat((v-0.1).toFixed(1)))), 100);
  }, [diff]);

  useEffect(() => {
    if (timeLeft === 0 && curQ && !answered && started && !gameOver) {
      clearTimer(); setAnswered(true);
      const correctOpt = shuffledOpts[lang].opts[shuffledOpts[lang].ans];
      setFeedback({ text:`${u.timesUp} ${u.answer} ${correctOpt}`, ok:false });
      setStreak(0); setHistory(h => [...h, false]);
    }
  }, [timeLeft, curQ, answered, started, gameOver, lang, u, shuffledOpts]);

  const startGame = useCallback(() => {
    let pool = getPool(selectedCats, diff);

    // Fisher-Yates shuffle for true randomness
    const fisherYates = <T,>(arr: T[]): T[] => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    // Filter out already-seen questions
    let unseen = pool.filter(q => !seenIdsRef.current.has((q as any).id ?? QB.indexOf(q)));
    // If all questions seen — reset the seen list and start fresh
    if (unseen.length < TOTAL) {
      seenIdsRef.current = new Set();
      unseen = fisherYates(pool);
    } else {
      unseen = fisherYates(unseen);
    }

    const selected10 = unseen.slice(0, TOTAL);
    // Mark these as seen
    selected10.forEach(q => seenIdsRef.current.add((q as any).id ?? QB.indexOf(q)));

    // Pre-build shuffled options for all 10 questions
    const allOpts = selected10.map(q => buildShuffledOpts(q));

    setQList(selected10); setQIdx(0); setScore(0); setCorrect(0); setStreak(0);
    setHistory([]); setGameOver(false); setStarted(true);
    setShuffledOpts(allOpts[0]);
    setCurQ(selected10[0]);
    setAnswered(false); setSelected(null); setFeedback(null);
    const t = DIFF_TIME[diff];
    totalTimeRef.current = t; setTimeLeft(t);
    clearTimer();
    timerRef.current = setInterval(() => setTimeLeft(v => Math.max(0, parseFloat((v-0.1).toFixed(1)))), 100);

    // store opts in ref for use in next()
    optsListRef.current = allOpts;
  }, [selectedCats, diff, getPool, buildShuffledOpts]);

  const optsListRef = useRef<Record<Lang,{opts:string[];ans:number}>[]>([]);

  const handleAnswer = useCallback((idx: number) => {
    if (answered || !curQ) return;
    setAnswered(true); setSelected(idx); clearTimer();
    const isRight = idx === shuffledOpts[lang].ans;
    if (isRight) {
      const tb = Math.round(timeLeft * 2);
      const earned = curQ.pts + tb;
      setScore(s => s + earned); setCorrect(c => c + 1); setStreak(s => s + 1);
      setFeedback({ text:`✅ +${earned} pts${streak >= 2 ? ` 🔥${streak+1}` : ""}`, ok:true });
      setHistory(h => [...h, true]);
    } else {
      setStreak(0);
      const correctOpt = shuffledOpts[lang].opts[shuffledOpts[lang].ans];
      setFeedback({ text:`❌ ${u.answer} ${correctOpt}`, ok:false });
      setHistory(h => [...h, false]);
    }
  }, [answered, curQ, lang, timeLeft, streak, u, shuffledOpts]);

  const next = () => {
    const ni = qIdx + 1;
    setQIdx(ni);
    if (ni >= qList.length) { setGameOver(true); clearTimer(); return; }
    const nextQ = qList[ni];
    const nextOpts = optsListRef.current[ni];
    setCurQ(nextQ);
    setShuffledOpts(nextOpts);
    setAnswered(false); setSelected(null); setFeedback(null);
    const t = DIFF_TIME[diff];
    totalTimeRef.current = t; setTimeLeft(t);
    clearTimer();
    timerRef.current = setInterval(() => setTimeLeft(v => Math.max(0, parseFloat((v-0.1).toFixed(1)))), 100);
  };

  const toggleCat = (cat: Cat) => {
    if (cat === "all") { setSelectedCats(new Set(["all"])); return; }
    setSelectedCats(prev => {
      const next = new Set(prev);
      next.delete("all");
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      if (next.size === 0) return new Set(["all"]);
      return next;
    });
  };

  const timerPct = curQ ? (timeLeft / totalTimeRef.current) * 100 : 100;
  const timerColor = timerPct > 50 ? "#1D9E75" : timerPct > 25 ? "#BA7517" : "#E24B4A";
  const isRtl = lang === "ur";
  const pct = qList.length > 0 ? Math.round(correct / qList.length * 100) : 0;
  const msg = pct === 100 ? u.genius : pct >= 70 ? u.excellent : pct >= 50 ? u.good : u.keep;

  const shadow = "0 4px 0 rgba(0,0,0,0.15)";

  return (
    <div className="space-y-3" dir={isRtl ? "rtl" : "ltr"}>

      {/* Language selector */}
      <div className="grid grid-cols-3 gap-2">
        {(["en","ur","hi"] as Lang[]).map(l => (
          <button key={l} onClick={() => setLang(l)}
            className={`py-2 rounded-xl text-sm font-bold border transition-all ${lang===l?"bg-teal-600 text-white border-teal-700":"bg-white text-gray-500 border-gray-200 hover:border-teal-300"}`}
            style={{boxShadow:lang===l?"0 3px 0 #0F6E56":"0 3px 0 rgba(0,0,0,0.1)"}}>
            {l==="en"?"English":l==="ur"?"اردو":"हिन्दी"}
          </button>
        ))}
      </div>

      {/* Category selector */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {CAT_KEYS.map(cat => (
          <button key={cat} onClick={() => toggleCat(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border whitespace-nowrap transition-all flex-shrink-0
              ${selectedCats.has(cat)?"bg-teal-600 text-white border-teal-700":"border-gray-200 text-gray-500 hover:border-teal-300"}`}>
            {u.cats[cat]}
          </button>
        ))}
      </div>

      {/* Difficulty selector */}
      <div className="grid grid-cols-4 gap-2">
        {(["easy","medium","hard","expert"] as Diff[]).map(d => (
          <button key={d} onClick={() => setDiff(d)}
            className={`py-2 rounded-xl text-xs font-bold border transition-all capitalize
              ${diff===d?"bg-gray-800 text-white border-gray-900":"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`}
            style={{boxShadow:diff===d?"0 3px 0 #111":"0 3px 0 rgba(0,0,0,0.1)"}}>
            {d}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[[u.score,score],[u.correct,correct],[u.streak,streak]].map(([l,v]) => (
          <div key={l} className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100">
            <p className="text-xl font-bold text-gray-900">{v}</p>
            <p className="text-xs text-gray-500">{l}</p>
          </div>
        ))}
      </div>

      {/* Start screen */}
      {!started && (
        <div className="text-center py-10">
          <p className="text-5xl mb-4">☪️</p>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{u.title}</h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">{u.sub}</p>
          <button onClick={startGame} className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold text-base"
            style={{boxShadow:"0 4px 0 #0F6E56"}}>
            {u.start}
          </button>
        </div>
      )}

      {/* Game Over */}
      {gameOver && (
        <div className="bg-gradient-to-b from-teal-50 to-white border border-teal-100 rounded-2xl p-6 text-center">
          <img src="/Islamic_Quiz_Logo.jpeg" alt="Islamic Quiz" className="w-16 h-16 object-contain mx-auto mb-2 rounded-xl" />
          <p className="text-4xl font-black text-teal-600 my-2">{score}</p>
          <p className="text-lg font-bold text-gray-900 mb-1">{correct}/{qList.length} {u.correct}</p>
          <p className="text-gray-500 text-sm mb-5">{msg}</p>
          <p className="text-xs text-gray-400 mb-4">
            {lang==="en" ? `Questions seen: ${seenIdsRef.current.size} / ${QB.length} total` :
             lang==="ur" ? `دیکھے گئے سوالات: ${seenIdsRef.current.size} / ${QB.length} کل` :
             `देखे गए सवाल: ${seenIdsRef.current.size} / ${QB.length} कुल`}
          </p>
          <button onClick={startGame} className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold mb-5"
            style={{boxShadow:"0 4px 0 #0F6E56"}}>
            {u.again}
          </button>

          {/* Share Score */}
          <ShareScore
            score={score}
            gameName="Islamic Quiz"
            gameEmoji="☪️"
            detail={`${correct}/${qList.length} correct · ${diff.charAt(0).toUpperCase()+diff.slice(1)} level`}
            gameUrl="/quiz/islamic-quiz"
          />

          <div className="mt-5 space-y-1.5 text-left max-h-48 overflow-y-auto" dir={isRtl?"rtl":"ltr"}>
            {history.map((h, i) => (
              <div key={i} className={`flex justify-between text-xs rounded-lg px-3 py-2 ${h?"bg-teal-50 text-teal-700":"bg-red-50 text-red-700"}`}>
                <span className="truncate flex-1 mr-2">{i+1}. {qList[i]?.[lang]?.q?.slice(0,45)}...</span>
                <span>{h?"✅":"❌"}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Active game */}
      {started && !gameOver && curQ && (
        <>
          {/* Progress dots */}
          <div className="flex gap-1.5 justify-center flex-wrap">
            {Array(qList.length).fill(0).map((_,i) => (
              <div key={i} className={`rounded-full transition-all ${
                i<history.length?(history[i]?"bg-teal-500 w-2 h-2":"bg-red-400 w-2 h-2"):
                i===qIdx?"bg-indigo-600 w-3 h-3":"bg-gray-200 w-2 h-2"}`}/>
            ))}
          </div>

          {/* Question card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${DIFF_COLORS[diff]}`}>
                {u.cats[curQ.cat as Cat]}
              </span>
              <span className="text-xs text-gray-400">{u.q}{qIdx+1} {u.of} {qList.length}</span>
            </div>

            {/* Arabic Ayah display */}
            {curQ.arabicAyah && (
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-3 mb-3 text-center">
                <p className="text-xl leading-loose text-teal-900 mb-1"
                  style={{fontFamily:"'Amiri','Noto Naskh Arabic',serif", direction:"rtl"}}>
                  {curQ.arabicAyah}
                </p>
                {curQ.reference && (
                  <p className="text-xs text-teal-600 font-semibold">— {curQ.reference}</p>
                )}
              </div>
            )}

            <p className={`text-base font-bold text-gray-900 leading-relaxed ${isRtl?"text-right":""}`} style={isRtl?{fontFamily:"'Noto Nastaliq Urdu',serif"}:{}}>
              {curQ[lang].q}
            </p>
          </div>

          {/* Timer */}
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-100" style={{width:`${timerPct}%`,background:timerColor}}/>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {shuffledOpts[lang].opts.map((opt, i) => {
              let cls = "bg-white border-gray-200 text-gray-900";
              if (answered) {
                if (i === shuffledOpts[lang].ans) cls = "bg-teal-600 border-teal-700 text-white";
                else if (i === selected) cls = "bg-red-500 border-red-600 text-white";
                else cls = "bg-gray-50 border-gray-200 text-gray-400";
              }
              return (
                <button key={i} onClick={() => handleAnswer(i)} disabled={answered}
                  className={`w-full ${cls} border rounded-xl py-3 px-4 text-sm font-semibold text-left transition-all active:translate-y-0.5 ${isRtl?"text-right":""}`}
                  style={{boxShadow:shadow, ...(isRtl?{fontFamily:"'Noto Nastaliq Urdu',serif"}:{})}}>
                  <span className="font-bold mr-2">{String.fromCharCode(65+i)}.</span>{opt}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {feedback && (
            <div className={`text-center py-3 px-4 rounded-xl font-semibold text-sm ${feedback.ok?"bg-teal-50 text-teal-700 border border-teal-100":"bg-red-50 text-red-700 border border-red-100"}`}>
              {feedback.text}
            </div>
          )}

          {/* Next button */}
          {answered && (
            <button onClick={next} className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-base"
              style={{boxShadow:"0 4px 0 #0F6E56"}}>
              {qIdx + 1 >= qList.length ? u.results : u.next}
            </button>
          )}
        </>
      )}
    </div>
  );
}
