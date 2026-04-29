"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import ShareScore from "@/components/ShareScore";

type Lang = "en" | "ur" | "hi";
type Cat = "all" | "quran" | "hadith" | "fiqh" | "seerah" | "history" | "pillars" | "names";
type Diff = "easy" | "medium" | "hard" | "expert";

interface LangData { q: string; opts: string[]; ans: number; }
interface Question { cat: string; diff: Diff; pts: number; en: LangData; ur: LangData; hi: LangData; }

const UI = {
  en: { title:"Islamic Quiz", sub:"Test your Islamic knowledge", start:"Start Quiz",
        next:"Next →", results:"See Results", again:"Play Again",
        timesUp:"Time's up!", answer:"Answer:", correct:"Correct",
        genius:"Subhanallah! Perfect! 🌟", excellent:"MashaAllah! Excellent! ✨",
        good:"JazakAllah! Good effort! 👍", keep:"Keep learning, InshaaAllah! 📖",
        score:"Score", streak:"Streak", q:"Q", of:"of",
        cats:{all:"All",quran:"Quran & Tafseer",hadith:"Hadith",fiqh:"Fiqh",seerah:"Seerah",history:"History",pillars:"Pillars",names:"99 Names"} },
  ur: { title:"اسلامی کوئز", sub:"اپنی اسلامی معلومات کو جانچیں", start:"کوئز شروع کریں",
        next:"اگلا →", results:"نتائج", again:"دوبارہ کھیلیں",
        timesUp:"وقت ختم!", answer:"جواب:", correct:"درست",
        genius:"سبحان اللہ! مکمل! 🌟", excellent:"ماشاءاللہ! بہترین! ✨",
        good:"جزاک اللہ! اچھی کوشش! 👍", keep:"سیکھتے رہیں، ان شاءاللہ! 📖",
        score:"اسکور", streak:"سلسلہ", q:"سوال", of:"از",
        cats:{all:"سب",quran:"قرآن و تفسیر",hadith:"حدیث",fiqh:"فقہ",seerah:"سیرت",history:"تاریخ",pillars:"ارکان اسلام",names:"99 نام"} },
  hi: { title:"इस्लामी क्विज़", sub:"अपनी इस्लामी जानकारी परखें", start:"क्विज़ शुरू करें",
        next:"अगला →", results:"परिणाम", again:"फिर खेलें",
        timesUp:"समय समाप्त!", answer:"उत्तर:", correct:"सही",
        genius:"सुभानअल्लाह! पूर्ण! 🌟", excellent:"माशाअल्लाह! उत्कृष्ट! ✨",
        good:"जज़ाकअल्लाह! अच्छा प्रयास! 👍", keep:"सीखते रहें, इन्शाअल्लाह! 📖",
        score:"स्कोर", streak:"स्ट्रीक", q:"प्र", of:"में से",
        cats:{all:"सभी",quran:"क़ुरआन",hadith:"हदीस",fiqh:"फ़िक़्ह",seerah:"सीरत",history:"इतिहास",pillars:"स्तंभ",names:"99 नाम"} },
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
  const timerRef = useRef<ReturnType<typeof setInterval>|null>(null);
  const totalTimeRef = useRef(0);
  const u = UI[lang];

  const clearTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };

  const getPool = useCallback((c: Set<Cat>, d: Diff) => {
    let pool = QB.filter(q => q.diff === d);
    if (!c.has("all")) pool = pool.filter(q => c.has(q.cat as Cat));
    if (pool.length === 0) pool = QB.filter(q => q.diff === d);
    return pool;
  }, []);

  const loadQ = useCallback((list: Question[], idx: number) => {
    if (idx >= list.length) { setGameOver(true); clearTimer(); return; }
    const q = list[idx];
    setCurQ(q); setAnswered(false); setSelected(null); setFeedback(null);
    const t = DIFF_TIME[diff];
    totalTimeRef.current = t; setTimeLeft(t);
    clearTimer();
    timerRef.current = setInterval(() => setTimeLeft(v => Math.max(0, parseFloat((v-0.1).toFixed(1)))), 100);
  }, [diff]);

  useEffect(() => {
    if (timeLeft === 0 && curQ && !answered && started && !gameOver) {
      clearTimer(); setAnswered(true);
      setFeedback({ text:`${u.timesUp} ${u.answer} ${curQ[lang].opts[curQ[lang].ans]}`, ok:false });
      setStreak(0); setHistory(h => [...h, false]);
    }
  }, [timeLeft, curQ, answered, started, gameOver, lang, u]);

  const startGame = useCallback(() => {
    const pool = shuffle(getPool(selectedCats, diff)).slice(0, TOTAL);
    setQList(pool); setQIdx(0); setScore(0); setCorrect(0); setStreak(0);
    setHistory([]); setGameOver(false); setStarted(true);
    loadQ(pool, 0);
  }, [selectedCats, diff, getPool, loadQ]);

  const handleAnswer = useCallback((idx: number) => {
    if (answered || !curQ) return;
    setAnswered(true); setSelected(idx); clearTimer();
    const isRight = idx === curQ[lang].ans;
    if (isRight) {
      const tb = Math.round(timeLeft * 2);
      const earned = curQ.pts + tb;
      setScore(s => s + earned); setCorrect(c => c + 1); setStreak(s => s + 1);
      setFeedback({ text:`✅ +${earned} pts${streak >= 2 ? ` 🔥${streak+1}` : ""}`, ok:true });
      setHistory(h => [...h, true]);
    } else {
      setStreak(0);
      setFeedback({ text:`❌ ${u.answer} ${curQ[lang].opts[curQ[lang].ans]}`, ok:false });
      setHistory(h => [...h, false]);
    }
  }, [answered, curQ, lang, timeLeft, streak, u]);

  const next = () => {
    const ni = qIdx + 1;
    setQIdx(ni);
    loadQ(qList, ni);
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
            {curQ[lang].opts.map((opt, i) => {
              let cls = "bg-white border-gray-200 text-gray-900";
              if (answered) {
                if (i === curQ[lang].ans) cls = "bg-teal-600 border-teal-700 text-white";
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