"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { saveQuizScore } from "@/lib/firebaseDB";
import { getAdminQuizQuestions } from "@/lib/adminDB";
import AuthModal from "@/components/AuthModal";
import ShareScore from "@/components/ShareScore";
import QuizResultShareModal from "@/components/quiz/QuizResultShareModal";
import { ALL_ISLAMIC_QUESTIONS, Question } from "@/lib/islamicQuizQuestions";

type Lang = "en" | "ur" | "hi";
type Cat = "all" | "quran" | "hadith" | "fiqh" | "seerah" | "history" | "pillars" | "names" | "tajweed" | "arabic" | "stories" | "tafseer";
type Diff = "easy" | "medium" | "hard" | "expert";

interface LangData { q: string; opts: string[]; ans: number; }

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
  { cat:"quran", diff:"easy", pts:10,
    en:{q:"Which Surah is the longest in the Holy Quran?", opts:["Al-Imran","Al-Baqarah","An-Nisa","Al-Ma'idah"], ans:1},
    ur:{q:"قرآن پاک میں سب سے لمبی سورت کون سی ہے؟", opts:["آل عمران","البقرۃ","النساء","المائدہ"], ans:1},
    hi:{q:"पवित्र क़ुरआन की सबसे लंबी सूरत कौन सी है?", opts:["आल-इमरान","अल-बक़रह","अन-निसा","अल-माईदा"], ans:1} },
  { cat:"quran", diff:"easy", pts:10,
    en:{q:"Which Surah is the shortest in the Holy Quran?", opts:["Al-Kawthar","Al-Ikhlas","Al-Nas","Al-Falaq"], ans:0},
    ur:{q:"قرآن پاک میں سب سے چھوٹی سورت کون سی ہے؟", opts:["الکوثر","الاخلاص","الناس","الفلق"], ans:0},
    hi:{q:"पवित्र क़ुरआन की सबसे छोटी सूरत कौन सी है?", opts:["अल-कोसर","अल-इख़लास","अल-नास","अल-फ़लक़"], ans:0} },
  { cat:"quran", diff:"medium", pts:20,
    en:{q:"Which Surah is named after a woman?", opts:["Surah Maryam","Surah Aishah","Surah Khadijah","Surah Fatimah"], ans:0},
    ur:{q:"کون سی سورت ایک خاتون کے نام پر ہے؟", opts:["سورت مریم","سورت عائشہ","سورت خدیجہ","سورت فاطمہ"], ans:0},
    hi:{q:"कौन सी सूरत एक महिला के नाम पर है?", opts:["सूरत मरयम","सूरत आइशा","सूरत ख़दीजह","सूरत फ़ातिमह"], ans:0} },
  { cat:"quran", diff:"medium", pts:20,
    en:{q:"Reciting which Surah on Friday protects from the Dajjal?", opts:["Al-Kahf","Yasin","Al-Mulk","Ar-Rahman"], ans:0},
    ur:{q:"جمعہ کے دن کس سورت کی تلاوت دجال سے حفاظت فراہم کرتی ہے؟", opts:["الکہف","یس","الملک","الرحمن"], ans:0},
    hi:{q:"शुक्रवार को किस सूरत की तिलावत दज्जाल से हिफ़ाज़त करती है?", opts:["अल-कहफ़","यासीन","अल-मुल्क","अर-रहमान"], ans:0} },
  { cat:"quran", diff:"hard", pts:30,
    en:{q:"How many Sajdahs (prostrations of recitation) are there in the Quran?", opts:["12","14","15","16"], ans:1},
    ur:{q:"قرآن پاک میں سجدہ تلاوت کی کل تعداد کتنی ہے؟", opts:["12","14","15","16"], ans:1},
    hi:{q:"क़ुरआन में कुल कितने सजदे (सजदा-ए-तिलावत) हैं?", opts:["12","14","15","16"], ans:1} },
  { cat:"stories", diff:"easy", pts:10,
    en:{q:"Which Prophet was swallowed by a giant fish (whale)?", opts:["Prophet Musa","Prophet Yunus","Prophet Nuh","Prophet Isa"], ans:1},
    ur:{q:"کس نبی کو مچھلی نے نگل لیا تھا؟", opts:["حضرت موسیٰ","حضرت یونس","حضرت نوح","حضرت عیسیٰ"], ans:1},
    hi:{q:"किस पैग़म्बर को मछली ने निगल लिया था?", opts:["हज़रत मूसा","हज़रत यूनुस","हज़रत नूह","हज़रत ईसा"], ans:1} },
  { cat:"stories", diff:"medium", pts:20,
    en:{q:"Which Prophet was given the title 'Khalilullah' (Friend of Allah)?", opts:["Prophet Adam","Prophet Ibrahim","Prophet Yusuf","Prophet Muhammad"], ans:1},
    ur:{q:"کس نبی کو خلیل اللہ (اللہ کا دوست) کا لقب دیا گیا؟", opts:["حضرت آدم","حضرت ابراہیم","حضرت یوسف","حضرت محمد"], ans:1},
    hi:{q:"किस पैग़म्बर को ख़लीलुल्लाह (अल्लाह का दोस्त) का लक़ब मिला?", opts:["हज़रत आदम","हज़रत इब्राहिम","हज़रत यूसुफ़","हज़रत मुहम्मद"], ans:1} },
  { cat:"stories", diff:"hard", pts:30,
    en:{q:"Which Prophet spoke while still an infant in the cradle?", opts:["Prophet Isa (Jesus)","Prophet Ismail","Prophet Zakariyya","Prophet Ishaq"], ans:0},
    ur:{q:"کون سے نبی نے جھولے میں شیر خوارگی کی حالت میں گفتگو کی؟", opts:["حضرت عیسیٰ","حضرت اسماعیل","حضرت زکریا","حضرت اسحاق"], ans:0},
    hi:{q:"कौन से पैग़म्बर ने पालने में शिशु अवस्था में बात की?", opts:["हज़रत ईसा","हज़रत इस्माईल","हज़रत ज़करिया","हज़रत इसहाक़"], ans:0} },

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
    en:{q:"What was the name of Prophet Muhammad's (SAW) foster sister who cared for him in Banu Sa'd?", opts:["Anisa","Shayma (bint al-Harith)","Juwayriyah","Safiyyah"], ans:1},
    ur:{q:"بنو سعد میں نبی کریم ﷺ کی کس رضاعی بہن نے آپ کی دیکھ بھال کی؟", opts:["انیسہ","شیماء بنت الحارث","جویریہ","صفیہ"], ans:1},
    hi:{q:"बनू साअद में पैग़म्बर की किस दूध-बहन ने आप की देखभाल की?", opts:["अनीसा","शैमा बिन्त अल-हारिस","जुवैरिया","सफ़िय्या"], ans:1} },
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

  // ── TAJWEED ──
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

  // ── ARABIC WORDS ──
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

  // ── QURAN STORIES ──
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
    hi:{q:"मछली के पेट में तीन अंधेरों से यह दुआ किसने माँगी?", opts:["मूसा علیہ السلام","इब्राहीम علیہ السلام","यूनुस علیہ السलام","दाऊद علیہ السلام"], ans:2} },
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

  // ── TAFSEER ──
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
  { cat:"quran", diff:"hard", pts:30,
    arabicAyah:"وَإِن كُنتُمْ فِي رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا بِسُورَةٍ مِّن مِّثْلِهِ", reference:"Al-Baqarah 2:23",
    en:{q:"This verse is the Quran's challenge (Tahhaddi). What does Allah challenge disbelievers to do?", opts:["Memorise one Surah","Produce even one Surah similar to the Quran","Translate the Quran","Count all Surahs"], ans:1},
    ur:{q:"یہ قرآن کا چیلنج (تحدی) ہے۔ اللہ منکروں کو کیا چیلنج دیتا ہے؟", opts:["ایک سورت حفظ کریں","ایک جیسی سورت لے آئیں","قرآن کا ترجمہ کریں","تمام سورتیں گنیں"], ans:1},
    hi:{q:"यह क़ुरआन का चैलेंज (तहद्दी) है। अल्लाह मुनकिरों को क्या चैलेंज देता है?", opts:["एक सूरत हिफ़्ज़ करें","एक जैसी सूरत ले आएँ","क़ुरआन का तर्जुमा करें","तमाम सूरतें गिनें"], ans:1} },
  { cat:"quran", diff:"expert", pts:50,
    arabicAyah:"وَمَا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ", reference:"Al-Ahzab 33:40",
    en:{q:"What does 'خَاتَمَ النَّبِيِّينَ' confirm about Prophet Muhammad ﷺ?", opts:["He was the first Prophet","He is the Seal/Last of all Prophets — no prophet after him","He was greatest in rank only","He was only a messenger, not a prophet"], ans:1},
    ur:{q:"'خَاتَمَ النَّبِيِّينَ' نبی ﷺ کے بارے میں کیا ثابت کرتا ہے؟", opts:["آپ پہلے نبی تھے","آپ تمام انبیاء کی مہر/آخری نبی ہیں — آپ کے بعد کوئی نبی نہیں","آپ صرف درجے میں بڑے تھے","آپ صرف رسول تھے نبی نہیں"], ans:1},
    hi:{q:"'خَاتَمَ النَّبِيِّينَ' नबी ﷺ के बारे में क्या साबित करता है?", opts:["आप पहले नबी थे","आप तमाम अंबिया की मुहर/आख़िरी नबी हैं — आपके बाद कोई नबी नहीं","आप सिर्फ़ दर्जे में बड़े थे","आप सिर्फ़ रसूल थे नबी नहीं"], ans:1} },
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
    hi:{q:"तयम्मुम क्या है?", opts:["मुख़्तसर ग़ुस्ल","पाक मिट्टी से ख़ुश्क तहारत जब पानी न हो या नुक़सानदेह हो","एक नमाज़","दाँत साफ़ करना"], ans:1} },
  { cat:"fiqh", diff:"hard", pts:30,
    arabicAyah:"وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ", reference:"Al-Baqarah 2:196",
    en:{q:"Hajj is obligatory once for Muslims who are:", opts:["Under 40 years old","Physically and financially capable (Istita'ah)","Male only","Living in Saudi Arabia"], ans:1},
    ur:{q:"حج ان مسلمانوں پر فرض ہے جو:", opts:["40 سال سے کم ہوں","جسمانی اور مالی طور پر قادر ہوں (استطاعت)","صرف مرد ہوں","سعودی عرب میں رہتے ہوں"], ans:1},
    hi:{q:"हज उन मुसलमानों पर फ़र्ज़ है जो:", opts:["40 साल से कम हों","जिस्मानी और माली तौर पर क़ादिर हों (इस्तिताअह)","सिर्फ़ मर्द हों","सऊदी अरब में रहते हों"], ans:1} },
  { cat:"history", diff:"medium", pts:20,
    en:{q:"The city of Madinah was originally called:", opts:["Yathrib","Taibah","Al-Madinah","Hijaz"], ans:0},
    ur:{q:"مدینہ شہر کا اصل نام کیا تھا؟", opts:["یثرب","طیبہ","المدینہ","حجاز"], ans:0},
    hi:{q:"मदीना शहर का असल नाम क्या था?", opts:["यसरब","तैबह","अल-मदीना","हिजाज़"], ans:0} },
  { cat:"history", diff:"hard", pts:30,
    en:{q:"In the Battle of Uhud, why did the initially winning Muslims face a setback?", opts:["Suddenly outnumbered","Archers left their positions against the Prophet's ﷺ order, allowing cavalry to attack from behind","The Prophet was martyred","They ran out of water"], ans:1},
    ur:{q:"غزوہ احد میں ابتداً جیتتے مسلمانوں کو نقصان کیوں ہوا؟", opts:["اچانک دشمن بڑھ گئے","تیر اندازوں نے نبی ﷺ کے حکم کے خلاف پہاڑ چھوڑا، گھڑسوار پیچھے سے آئے","نبی شہید ہو گئے","پانی ختم ہو گیا"], ans:1},
    hi:{q:"ग़ज़वह उहुद में शुरू में जीतते मुसलमानों को नुक़सान क्यों हुआ?", opts:["अचानक दुश्मन बढ़ गए","तीरंदाज़ों ने नबी ﷺ के हुक्म के ख़िलाफ़ पहाड़ छोड़ा, घुड़सवार पीछे से आए","नबी शहीद हो गए","पानी ख़त्म हो गया"], ans:1} },
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

  // ── ADDITIONAL FIQH QUESTIONS ──
  { cat:"fiqh", diff:"easy", pts:10,
    en:{q:"What is dry ablution called when clean water is unavailable?", opts:["Wudu","Ghusl","Tayammum","Istinja"], ans:2},
    ur:{q:"پانی نہ ہونے کی صورت میں مٹی سے طہارت حاصل کرنے کو کیا کہتے ہیں؟", opts:["وضو","غسل","تیمم","استنجا"], ans:2},
    hi:{q:"पानी न होने की सूरत में मिट्टी से पाकी हासिल करने को क्या कहते हैं?", opts:["वुज़ू","ग़ुस्ल","तयम्मुम","इस्तिंजा"], ans:2} },
  { cat:"fiqh", diff:"easy", pts:10,
    en:{q:"Which daily obligatory prayer has NO Sunnah or Nafl after it until sunset?", opts:["Fajr Prayer","Dhuhr Prayer","Asr Prayer","Maghrib Prayer"], ans:2},
    ur:{q:"کس فرض نماز کے بعد غروب آفتاب تک کوئی سنت یا نفل نماز نہیں پڑھی جاتی؟", opts:["نماز فجر","نماز ظہر","نماز عصر","نماز مغرب"], ans:2},
    hi:{q:"किस फ़र्ز नमाज़ के बाद सूर्यास्त तक कोई सुन्नत या नफ़्ल नमाज़ नहीं पढ़ी जाती?", opts:["फ़ज्र नमाज़","ज़ुहर नमाज़","अस्र नमाज़","मग़रिब नमाज़"], ans:2} },
  { cat:"fiqh", diff:"medium", pts:20,
    en:{q:"What is the obligatory bath required after major ritual impurity called?", opts:["Wudu","Ghusl","Tayammum","Masah"], ans:1},
    ur:{q:"بڑی ناپاکی دور کرنے کے لیے فرض غسل کو کیا کہتے ہیں؟", opts:["وضو","غسل","تیمم","مسح"], ans:1},
    hi:{q:"बड़ी नापाकी दूर करने के लिए फ़र्ज़ स्नान को क्या कहते हैं?", opts:["वुज़ू","ग़ुस्ल","तयम्मुम","मसहा"], ans:1} },
  { cat:"fiqh", diff:"medium", pts:20,
    en:{q:"If a worshipper makes an unintentional error in Salah, how do they compensate at the end?", opts:["Repeat the entire prayer","Perform Sajdah as-Sahw (prostration of forgetfulness)","Give charity","Ignore it completely"], ans:1},
    ur:{q:"اگر نماز میں بھولے سے کوئی واجب چھوٹ جائے تو آخر میں کیا کیا جاتا ہے؟", opts:["نماز دوبارہ پڑھنا","سجدہ سہو کرنا","صدقہ دینا","نظر انداز کرنا"], ans:1},
    hi:{q:"यदि नमाज़ में भूल से कोई वाजिब छूट जाए तो अंत में क्या किया जाता है?", opts:["नमाज़ दोबारा पढ़ना","सजदा-ए-सहव करना","सदाक़ा देना","नज़रअंदाज़ करना"], ans:1} },
  { cat:"fiqh", diff:"hard", pts:30,
    en:{q:"What is the minimum travel distance (Safar) that permits shortening obligatory prayers (Qasr)?", opts:["Approx 20 km","Approx 48 miles (77-88 km)","Approx 150 km","Approx 300 km"], ans:1},
    ur:{q:"نماز قصر کرنے کے لیے شرعی مسافتِ سفر کم از کم کتنی ہے؟", opts:["تقریباً 20 کلومیٹر","تقریباً 48 میل (77 تا 88 کلومیٹر)","تقریباً 150 کلومیٹر","تقریباً 300 کلومیٹر"], ans:1},
    hi:{q:"नमाज़ क़स्र करने के लिए शरई मुसाफ़त-ए-सफ़र कम से कम कितनी है?", opts:["लगभग 20 किमी","लगभग 48 मील (77 से 88 किमी)","लगभग 150 किमी","लगभग 300 किमी"], ans:1} },
  { cat:"fiqh", diff:"expert", pts:50,
    en:{q:"In Islamic jurisprudence, an action that is permissible without reward or sin is termed:", opts:["Wajib","Mundub","Mubah","Makruh"], ans:2},
    ur:{q:"فقہ میں وہ عمل جس کے کرنے پر نہ ثواب ہو نہ گناہ، اسے کیا کہتے ہیں؟", opts:["واجب","مندوب","مباح","مکروہ"], ans:2},
    hi:{q:"फ़िक़्ह में वह अमल जिसके करने पर न सवाब हो न गुनाह, उसे क्या कहते हैं?", opts:["वाजिब","मंदूब","मुबाह","मकरूह"], ans:2} },

  // ── TAJWEED QUESTIONS ──
  { cat:"tajweed", diff:"easy", pts:10,
    en:{q:"What is the purpose of learning the science of Tajweed?", opts:["To memorize history","To recite the Quran correctly with proper pronunciation and rules","To translate Arabic text","To write calligraphy"], ans:1},
    ur:{q:"علم تجوید سیکھنے کا بنیادی مقصد کیا ہے؟", opts:["تاریخ یاد کرنا","قرآن پاک کو مخارج اور قواعد کے ساتھ درست پڑھنا","عربی کا ترجمہ کرنا","خطاطی سیکھنا"], ans:1},
    hi:{q:"तजवीद का मक़सद क्या है?", opts:["इतिहास याद करना","क़ुरआन को सही उच्चारण और नियमों के साथ पढ़ना","अनुवाद करना","सुलेखन"], ans:1} },
  { cat:"tajweed", diff:"easy", pts:10,
    en:{q:"How many letters of Qalqalah (echoing sound) are there in Tajweed?", opts:["3 letters","5 letters (قطب جد)","7 letters","10 letters"], ans:1},
    ur:{q:"علم تجوید میں حروفِ قلقلہ کی کل تعداد کتنی ہے؟", opts:["3 حروف","5 حروف (قطب جد)","7 حروف","10 حروف"], ans:1},
    hi:{q:"तजवीद में क़लक़ला के कुल कितने अक्षर हैं?", opts:["3 अक्षर","5 अक्षर (क़ुतब जद्दीन - قطب جد)","7 अक्षर","10 अक्षर"], ans:1} },
  { cat:"tajweed", diff:"medium", pts:20,
    en:{q:"When Noon Sakinah or Tanween is followed by the letter Ba (ب), which rule applies?", opts:["Izhar","Idgham","Iqlab (changing Noon sound to Meem)","Ikhfa"], ans:2},
    ur:{q:"نون ساکن یا تنوین کے بعد اگر حرف 'ب' آئے تو کون سا قاعدہ لاگو ہوتا ہے؟", opts:["اظہار","ادغام","اقلاب (نون کو میم سے بدلنا)","اخفاء"], ans:2},
    hi:{q:"नूने साकिन या तनवीन के बाद यदि 'ब' (ب) आए तो कौन सा नियम लागू होता है?", opts:["इज़हार","इदग़ाम","इक़लाब (नून को मीम में बदलना)","इख़फ़ा"], ans:2} },
  { cat:"tajweed", diff:"medium", pts:20,
    en:{q:"What rule applies when Noon Sakinah is followed by throat letters (ء ه ع ح غ خ)?", opts:["Izhar (clear pronunciation without nasalization)","Idgham","Iqlab","Ikhfa"], ans:0},
    ur:{q:"نون ساکن کے بعد اگر حروفِ حلقی (ء ه ع ح غ خ) آئیں تو کیا ہوتا ہے؟", opts:["اظہار (بغیر غنہ کے صاف پڑھنا)","ادغام","اقلاب","اخفاء"], ans:0},
    hi:{q:"नूने साकीन के बाद यदि हलक़ी अक्षर (ء ه ع ح غ خ) आएँ तो क्या होता है?", opts:["इज़हार (बिना ग़ुन्ना के साफ़ पढ़ना)","इदग़ाम","इक़लाब","इख़फ़ा"], ans:0} },
  { cat:"tajweed", diff:"hard", pts:30,
    en:{q:"What Madd occurs when a Hamzah follows a Madd letter in the SAME word?", opts:["Madd Munfasil","Madd Muttasil (Connected Prolongation)","Madd Arid","Madd Badal"], ans:1},
    ur:{q:"اگر ایک ہی کلمہ میں حرفِ مدہ کے بعد ہمزہ آئے تو کون سا مد ہوتا ہے؟", opts:["مد منفصل","مد متصل","مد عارض","مد بدل"], ans:1},
    hi:{q:"यदि एक ही शब्द में मद्द के अक्षर के बाद हमज़ा आए तो कौन सा मद्द होता है?", opts:["मद्द मुनफ़सिल","मद्द मुत्तसिल","मद्द आरिज़","मद्द बदल"], ans:1} },
  { cat:"tajweed", diff:"expert", pts:50,
    en:{q:"Which letters form 'Idgham with Ghunnah' (Idgham Bighunnah)?", opts:["یرملون (Yarmaloon)","ينمو (YANMU: ي ن م و)","قطب جد","حروف حلقی"], ans:1},
    ur:{q:"ادغام با غنہ (ادغام مع الغنہ) کے حروف کون سے ہیں؟", opts:["یرملون","ینمو (ی ن م و)","قطب جد","حروفِ حلقی"], ans:1},
    hi:{q:"इदग़ाम बा-ग़ुन्ना के कौन से अक्षर हैं?", opts:["यरमलून","यनमू (य न म व - ي ن م و)","क़ुतब जद्दीन","हलक़ी अक्षर"], ans:1} },

  // ── ADDITIONAL 99 NAMES OF ALLAH ──
  { cat:"names", diff:"easy", pts:10,
    en:{q:"What does 'Al-Malik' (الملك) mean?", opts:["The Sovereign / Absolute King","The Forgiver","The All-Hearing","The Last"], ans:0},
    ur:{q:"اللہ تعالی کے نام 'الملك' کا کیا مطلب ہے؟", opts:["حقیقی بادشاہ / حاکمِ مطلق","بخشنے والا","سب سننے والا","آخری"], ans:0},
    hi:{q:"अल्लाह के नाम 'अल-मलिक' का अर्थ क्या है?", opts:["संप्रभु राजा","क्षमाशील","सर्वश्रवण","अंतिम"], ans:0} },
  { cat:"names", diff:"easy", pts:10,
    en:{q:"What does 'As-Salam' (السلام) mean?", opts:["The Creator","The Source of Peace and Perfection","The Judge","The Strong"], ans:1},
    ur:{q:"'السلام' کا مطلب کیا ہے؟", opts:["پیدا کرنے والا","سلامتی اور نقائص سے پاک ذات","فیصلہ کرنے والا","قوی"], ans:1},
    hi:{q:"'अस-सलाम' का अर्थ क्या है?", opts:["सृष्टिकर्ता","शांति का स्रोत एवं त्रुटिहीन","न्यायी","शक्तिशाली"], ans:1} },
  { cat:"names", diff:"medium", pts:20,
    en:{q:"What does 'Al-Wadud' (الودود) mean?", opts:["The Loving / Full of Affection","The Wrathful","The Powerful","The Hidden"], ans:0},
    ur:{q:"'الودود' کا مطلب کیا ہے؟", opts:["بہت محبت کرنے والا","غضب ناک","قادر","پوشیدہ"], ans:0},
    hi:{q:"'अल-वदूद' का अर्थ क्या है?", opts:["अत्यंत प्रेम करने वाला","क्रोधित","शक्तिशाली","छिपा हुआ"], ans:0} },
  { cat:"names", diff:"medium", pts:20,
    en:{q:"What does 'Al-Latif' (اللطيف) mean?", opts:["The Subtle, Kind, and Understanding","The King","The First","The Creator"], ans:0},
    ur:{q:"'اللطيف' کا مطلب کیا ہے؟", opts:["باریک بین، مہربان اور لطیف","بادشاہ","اول","خالق"], ans:0},
    hi:{q:"'अल-लतीफ़' का अर्थ क्या है?", opts:["सूक्ष्म, कृपालु और दयालु","राजा","प्रथम","सृष्टिकर्ता"], ans:0} },
  { cat:"names", diff:"hard", pts:30,
    en:{q:"What does 'Al-Mujib' (المجيب) mean?", opts:["The Creator of heavens","The Answerer of Supplications","The Strict in punishment","The Manifest"], ans:1},
    ur:{q:"'المجيب' کا مطلب کیا ہے؟", opts:["آسمانوں کا خالق","دعاؤں کو قبول کرنے والا","سخت عذاب دینے والا","ظاہر"], ans:1},
    hi:{q:"'अल-मुजीब' का अर्थ क्या है?", opts:["आकाश का सृष्टिकर्ता","दुआएं स्वीकार करने वाला","कठोर दंड देने वाला","प्रकट"], ans:1} },
  { cat:"names", diff:"expert", pts:50,
    en:{q:"What does 'Al-Warith' (الوارث) mean?", opts:["The Temporary Owner","The Ultimate Inheritor of all creation after all perish","The Guide","The Giver"], ans:1},
    ur:{q:"'الوارث' کا مطلب کیا ہے؟", opts:["عارضی مالک","سب کچھ فناء ہونے کے بعد کائنات کا حقیقی وارث","رہنما","عطا کرنے والا"], ans:1},
    hi:{q:"'अल-वारिस' का अर्थ क्या है?", opts:["अस्थाई मालिक","सब नष्ट होने के बाद पूरी सृष्टि का वास्तविक वारिस","मार्गदर्शक","दाता"], ans:1} },

  // ── QURANIC DUAS & TAFSEER ──
  { cat:"tafseer", diff:"easy", pts:10,
    en:{q:"What is the meaning of the Quranic Dua 'Rabbi Zidni 'Ilma' (Surah Taha 20:114)?", opts:["My Lord, increase me in wealth","My Lord, increase me in knowledge","My Lord, forgive my sins","My Lord, protect my family"], ans:1},
    ur:{q:"قرآنی دعا 'رَبِّ زِدْنِي عِلْمًا' کا ترجمہ کیا ہے؟", opts:["اے رب، میرے مال میں اضافہ فرما","اے رب، میرے علم میں اضافہ فرما","اے رب، میرے گناہ معاف فرما","اے رب، میرے گھر والوں کی حفاظت فرما"], ans:1},
    hi:{q:"क़ुरआनी दुआ 'रब्बि ज़िदनी इल्मा' (20:114) का अर्थ क्या है?", opts:["ऐ रब, मेरे धन में वृद्धि कर","ऐ रब, मेरे ज्ञान में वृद्धि कर","ऐ रब, मेरे गुनाह माफ़ कर","ऐ रब, मेरे परिवार की रक्षा कर"], ans:1} },
  { cat:"tafseer", diff:"easy", pts:10,
    en:{q:"Which Dua did Prophet Yunus (AS) recite inside the whale?", opts:["Rabbana atina fid-dunya","La ilaha illa anta subhanaka inni kuntu minadh-dhalimin (Ayat Kareema)","Rabbi-j'alni muqeemas-salat","Hasbunallahu wa ni'mal wakeel"], ans:1},
    ur:{q:"حضرت یونس علیہ السلام نے مچھلی کے پیٹ میں کون سی دعا مانگی؟", opts:["ربنا آتنا في الدنيا","لا إِلَهَ إِلاَّ أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ (آیت کریمہ)","رب اجعلني مقيم الصلاة","حسبنا الله ونعم الوكيل"], ans:1},
    hi:{q:"हज़रत यूनुस ने मछली के पेट में कौन सी दुआ मांगी?", opts:["रब्बना आतिना फिद्दुनिया","ला इलाहा इल्ला अंता सुभानका इन्नी कुंतु मिनज़-ज़ालिमीन (आयत-ए-करीमा)","रब्बि-जअल्नी मुक़ीमस-सलात","हस्बुनल्लाहु व निअमल-वकील"], ans:1} },
  { cat:"tafseer", diff:"medium", pts:20,
    en:{q:"In Surah Al-Baqarah 2:201, what do believers ask for in 'Rabbana atina fid-dunya hasanatan...'?", opts:["Only worldly riches","Good in this life, good in Hereafter, and protection from Hellfire","Victory in battles","Long life"], ans:1},
    ur:{q:"سورة البقرہ کی آیت 201 میں مومنین کیا دعا مانگتے ہیں؟", opts:["صرف دنیا کا مال","دنیا کی بھلائی، آخرت کی بھلائی اور جہنم سے نجات","جنگوں میں فتح","لمبی عمر"], ans:1},
    hi:{q:"सूरह अल-बक़रह 2:201 की दुआ 'रब्बना आतिना फिद्दुनिया...' में क्या मांगा जाता है?", opts:["केवल दुनिया का धन","दुनिया की भलाई, आख़िरत की भलाई और जहन्नुम से हिफ़ाज़त","लड़ाइयों में जीत","लंबी उम्र"], ans:1} },
  { cat:"tafseer", diff:"medium", pts:20,
    en:{q:"Which Dua of Prophet Musa (AS) in Surah Al-Qasas 28:24 brought him shelter, job, and marriage?", opts:["Rabbi inni lima anzalta ilayya min khayrin faqeer","Rabbi-shrah li sadri","Rabbana la tuzigh quloobana","Sayyidul Istighfar"], ans:0},
    ur:{q:"حضرت موسیٰ علیہ السلام کی کون سی دعا پر اللہ نے فوراً چھت، روزگار اور رشتہ دیا؟", opts:["رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ","رَبِّ اشْرَحْ لِي صَدْرِي","رَبَّنَا لاَ تُزِغْ قُلُوبَنَا","سید الاستغفار"], ans:0},
    hi:{q:"हज़रत मूसा (सल्ल.) की किस दुआ (28:24) पर अल्लाह ने तुरंत आश्रय, नौकरी और विवाह दिया?", opts:["रब्बि इन्नी लिमा अंज़ल्ता इलय्या मिन ख़ैरिन फ़क़ीर","रब्बि-शरह ली सदरी","रब्बना ला तुज़िग़ क़ुलूबना","सैय्यिदुल-इस्तिग़फ़ार"], ans:0} },
  { cat:"tafseer", diff:"hard", pts:30,
    en:{q:"Which Dua of Prophet Ibrahim (AS) in Surah Ibrahim 14:40 asks Allah to make him and his descendants establishers of prayer?", opts:["Rabbi-j'alni muqeemas-salati wa min dhurriyyati","Rabbana atina","La ilaha illa anta","Rabbi zidni 'ilma"], ans:0},
    ur:{q:"حضرت ابراہیم علیہ السلام کی کون سی دعا میں اپنے اور اولاد کے لیے نماز کی پابندی کی درخواست کی گئی؟", opts:["رَبِّ اجْعَلْنِي مُقِيمَ الصَّلاَةِ وَمِن ذُرِّيَّتِي","رَبَّنَا آتِنَا","لا إِلَهَ إِلاَّ أَنتَ","رَبِّ زِدْنِي عِلْمًا"], ans:0},
    hi:{q:"हज़रत इब्राहिम (14:40) की किस दुआ में अपने व औलाद के लिए नमाज़ की पाबंदी मांगी गई?", opts:["रब्बि-जअल्नी मुक़ीमस-सलाति व मिन ज़ुर्रिय्यती","रब्बना आतिना","ला इलाहा इल्ला अंता","रब्बि ज़िदनी इल्मा"], ans:0} },
  { cat:"tafseer", diff:"expert", pts:50,
    en:{q:"In Surah Ali 'Imran 3:8, what does 'Rabbana la tuzigh quloobana ba'da idh hadaytana...' ask for?", opts:["Forgiveness of past sins","Steadfastness of hearts upon faith after receiving guidance","Increase in children","Protection from enemies"], ans:1},
    ur:{q:"سورة آل عمران کی آیت 8 'رَبَّنَا لاَ تُزِغْ قُلُوبَنَا...' کس چیز کی دعا کرتی ہے؟", opts:["پچھلے گناہوں کی معافی","ہدایت ملنے کے بعد دلوں کو ثابت قدم رکھنا","اولاد میں اضافہ","دشمنوں سے حفاظت"], ans:1},
    hi:{q:"सूरह आल-इमरान 3:8 'रब्बना ला तुज़िग़ क़ुलूबना...' में क्या मांगा जाता है?", opts:["पुराने गुनाहों की माफ़ी","हिदायत मिलने के बाद दिलों का ईमान पर सबात (स्थिरता)","औलाद में वृद्धि","दुश्मनों से रक्षा"], ans:1} },

  // ── 50 ADDITIONAL HIGH QUALITY QUESTIONS ──
  // 1-10: QURAN & TAFSEER
  { cat:"quran", diff:"easy", pts:10,
    en:{q:"Which Surah protects its reciter from the punishment of the grave?", opts:["Al-Mulk","Al-Kahf","Yasin","Al-Waqi'ah"], ans:0},
    ur:{q:"کون سی سورت اپنے پڑھنے والے کو عذابِ قبر سے محفوظ رکھتی ہے؟", opts:["الملک","الکہف","یس","الواقعہ"], ans:0},
    hi:{q:"कौन सी सूरत अपने पढ़ने वाले को अज़ाब-ए-क़ब्र से बचाती है?", opts:["अल-मुल्क","अल-कहफ़","यासीन","अल-वाक़िआ"], ans:0} },
  { cat:"quran", diff:"easy", pts:10,
    en:{q:"What is another famous name for Surah Al-Fatiha?", opts:["Umm al-Kitab (Mother of the Book)","Al-Burhan","Al-Furqan","Al-Zahrawayn"], ans:0},
    ur:{q:"سورة الفاتحہ کا ایک اور مشہور نام کیا ہے؟", opts:["ام الکتاب (کتاب کی ماں)","البرہان","الفرقان","الزہراوین"], ans:0},
    hi:{q:"सूरह अल-फ़ातिहा का दूसरा मशहूर नाम क्या है?", opts:["उम्मुल-किताब","अल-बुर्हान","अल-फ़ुरक़ान","अज़-ज़हरावैन"], ans:0} },
  { cat:"quran", diff:"medium", pts:20,
    en:{q:"Over how many years was the Holy Quran revealed to Prophet Muhammad (SAW)?", opts:["10 years","23 years","30 years","40 years"], ans:1},
    ur:{q:"قرآن پاک نبی کریم ﷺ پر کتنے سال کے عرصے میں نازل ہوا؟", opts:["10 سال","23 سال","30 سال","40 سال"], ans:1},
    hi:{q:"पवित्र क़ुरआन पैग़म्बर मुहम्मद पर कितने वर्षों में नाज़िल हुआ?", opts:["10 वर्ष","23 वर्ष","30 वर्ष","40 वर्ष"], ans:1} },
  { cat:"quran", diff:"medium", pts:20,
    en:{q:"What are the Surahs revealed in Makkah before the Hijrah called?", opts:["Makki Surahs","Madani Surahs","Meccani","Hijri"], ans:0},
    ur:{q:"ہجرت سے پہلے مکہ میں نازل ہونے والی سورتوں کو کیا کہتے ہیں؟", opts:["مکی سورتیں","مدنی سورتیں","مکانی","ہجری"], ans:0},
    hi:{q:"हिजरत से पहले मक्का में नाज़िल होने वाली सूरतों को क्या कहते हैं?", opts:["मक्की सूरतें","मदनी सूरतें","मकानी","हिजरी"], ans:0} },
  { cat:"quran", diff:"hard", pts:30,
    en:{q:"Which Surah of the Quran is named after the Day of Judgment?", opts:["Al-Qiyamah","Al-Baqarah","Al-Imran","An-Nisa"], ans:0},
    ur:{q:"قرآن کی کون سی سورت قیامت کے دن کے نام پر ہے؟", opts:["القیامہ","البقرۃ","آل عمران","النساء"], ans:0},
    hi:{q:"क़ुरआन की कौन सी सूरत क़ियामत के दिन के नाम पर है?", opts:["अल-क़ियामह","अल-बक़रह","आल-इमरान","अन-निसा"], ans:0} },
  { cat:"quran", diff:"expert", pts:50,
    en:{q:"Surah Al-Baqarah and Surah Ali 'Imran are together referred to in Hadith as:", opts:["Al-Zahrawayn (The Two Luminous Ones)","Al-Mu'awwidhatayn","Al-Saba' al-Mathani","Al-Hawamim"], ans:0},
    ur:{q:"سورة البقرہ اور سورة آل عمران کو حدیث میں مل کر کیا کہا گیا ہے؟", opts:["الزہراوین (دو روشن سورتیں)","المعوذتین","السبع المثانی","الحوامیم"], ans:0},
    hi:{q:"सूरह अल-बक़रह और सूरह आल-इमरान को हदीस में मिलकर क्या कहा गया है?", opts:["अज़-ज़हरावैन (दो रोशन सूरतें)","अल-मुअव्विज़तैन","अल-सबउल-मथानी","अल-हवामीम"], ans:0} },

  // 11-20: HADITH & SUNNAH
  { cat:"hadith", diff:"easy", pts:10,
    en:{q:"What does the word 'Hadith' mean literally?", opts:["Saying, news, or report","Book of law","Poetry","Commandment"], ans:0},
    ur:{q:"لفظ 'حدیث' کا لغوی معنی کیا ہے؟", opts:["بات، خبر یا روایت","قانون کی کتاب","شاعری","حکم"], ans:0},
    hi:{q:"'हदीस' शब्द का शाब्दिक अर्थ क्या है?", opts:["बात, समाचार या रिवायत","कानून की किताब","कविता","आदेश"], ans:0} },
  { cat:"hadith", diff:"easy", pts:10,
    en:{q:"Who compiled the famous 'Forty Hadith' (Arba'een)?", opts:["Imam Nawawi","Imam Ghazali","Imam Ibn Kathir","Imam Shafi'i"], ans:0},
    ur:{q:"مشہور 'اربعین' (40 احادیث) کا مجموعہ کس نے مرتب کیا؟", opts:["امام نووی","امام غزالی","امام ابن کثیر","امام شافعی"], ans:0},
    hi:{q:"प्रसिद्ध 'अलीस/अलीसैन' (40 हदीस) का संग्रह किसने संकलित किया?", opts:["इमाम नववी","इमाम ग़ज़ाली","इमाम इब्न कसीर","इमाम शाफ़ई"], ans:0} },
  { cat:"hadith", diff:"medium", pts:20,
    en:{q:"What is the chain of narrators in a Hadith called?", opts:["Isnad / Sanad","Matn","Tafseer","Takhrij"], ans:0},
    ur:{q:"حدیث میں راویوں کے سلسلے کو کیا کہتے ہیں؟", opts:["اسناد / سند","متن","تفسیر","تخریج"], ans:0},
    hi:{q:"हदीस में रिवायत करने वालों की शृंखला को क्या कहते हैं?", opts:["इसनाद / सनद","मतन","तफ़सीर","तख़रीज"], ans:0} },
  { cat:"hadith", diff:"medium", pts:20,
    en:{q:"What is the actual text of the Prophet's saying in a Hadith called?", opts:["Matn","Sanad","Isnad","Rawi"], ans:0},
    ur:{q:"حدیث میں نبی کریم ﷺ کے اصل الفاظ کو کیا کہتے ہیں؟", opts:["متن","سند","اسناد","راوی"], ans:0},
    hi:{q:"हदीस में नबी सल्ल. के मूल शब्दों को क्या कहते हैं?", opts:["मतन","सनद","इसनाद","रावी"], ans:0} },
  { cat:"hadith", diff:"hard", pts:30,
    en:{q:"Which Hadith collection was compiled by Imam Malik ibn Anas?", opts:["Muwatta Imam Malik","Sahih Muslim","Sunan an-Nasa'i","Sunan Tirmidhi"], ans:0},
    ur:{q:"امام مالک بن انس نے کون سا کلاسک مجموعہ لکھی؟", opts:["موطا امام مالک","صحیح مسلم","سنن النسائی","سنن الترمذی"], ans:0},
    hi:{q:"इमाम मालिक इब्न अनस ने कौन सा प्रसिद्ध संग्रह लिखा?", opts:["मुवत्ता इमाम मालिक","सहीह मुस्लिम","सुनन अन-निसाई","सुनन तिर्मिज़ी"], ans:0} },
  { cat:"hadith", diff:"expert", pts:50,
    en:{q:"What is a Hadith called where Prophet Muhammad (SAW) quotes Allah directly (outside Quran)?", opts:["Hadith Qudsi","Hadith Mutawatir","Hadith Ahad","Hadith Hasan"], ans:0},
    ur:{q:"جس حدیث میں نبی کریم ﷺ اللہ تعالی کے ارشاد کو روایت کرتے ہیں (قرآن سے الگ) اسے کیا کہتے ہیں؟", opts:["حدیث قدسی","حدیث متواتر","حدیث آحاد","حدیث حسن"], ans:0},
    hi:{q:"जिस हदीस में नबी सल्ल. अल्लाह के शब्दों को सीधे रिवायत करते हैं उसे क्या कहते हैं?", opts:["हदीस क़ुदसी","हदीस मुतवातिर","हदीस आहाद","हदीस हसन"], ans:0} },

  // 21-30: SEERAH & COMPANIONS
  { cat:"seerah", diff:"easy", pts:10,
    en:{q:"What was the title of Abu Bakr (RA)?", opts:["As-Siddiq (The Truthful)","Al-Farooq","Dhu al-Nurayn","Asadullah"], ans:0},
    ur:{q:"حضرت ابوبکر صدیق رضی اللہ عنہ کا لقب کیا تھا؟", opts:["الصدیق (سچا)","الفاروق","ذو النورین","اسد اللہ"], ans:0},
    hi:{q:"हज़रत अबू बक्र (रज़ि.) का लक़ब क्या था?", opts:["अस-सिद्दीक़ (सच्चा)","अल-फ़ारूक़","ज़ुल-नूरैन","असदुल्लाह"], ans:0} },
  { cat:"seerah", diff:"easy", pts:10,
    en:{q:"What was the title of Umar ibn al-Khattab (RA)?", opts:["Al-Farooq (The Distinguisher of Truth)","As-Siddiq","Saifullah","Zun-Noorain"], ans:0},
    ur:{q:"حضرت عمر فاروق رضی اللہ عنہ کا لقب کیا تھا؟", opts:["الفاروق (حق و باطل میں فرق کرنے والا)","الصدیق","سیف اللہ","ذوالنورین"], ans:0},
    hi:{q:"हज़रत उमर इब्न अल-ख़त्ताब (रज़ि.) का लक़ब क्या था?", opts:["अल-फ़ारूक़ (सत्य व असत्य में अंतर करने वाला)","अस-सिद्दीक़","सैफ़ुल्लाह","ज़ुल-नूरैन"], ans:0} },
  { cat:"seerah", diff:"medium", pts:20,
    en:{q:"Why was Uthman ibn Affan (RA) titled 'Dhu al-Nurayn' (Possessor of Two Lights)?", opts:["He married two daughters of Prophet Muhammad (SAW)","He conquered two empires","He memorized two books","He led two migrations"], ans:0},
    ur:{q:"حضرت عثمان غنی رضی اللہ عنہ کو 'ذو النورین' (دو نوروں والا) کیوں کہا جاتا ہے؟", opts:["نبی اکرم ﷺ کی دو صاحبزادیوں سے نکاح کی وجہ سے","دو سلطنتیں فتح کرنے پر","دو کتابیں یاد کرنے پر","دو ہجرتیں کرنے پر"], ans:0},
    hi:{q:"हज़रत उस्मान (रज़ि.) को 'ज़ुल-नूरैन' (दो नूरों वाला) क्यों कहा जाता है?", opts:["नबी की दो बेटियों से निकाह के कारण","दो सल्तनतें फ़तह करने पर","दो किताबें याद करने पर","दो हिजरतें करने पर"], ans:0} },
  { cat:"seerah", diff:"medium", pts:20,
    en:{q:"What was the title given to Ali ibn Abi Talib (RA)?", opts:["Asadullah (Lion of Allah)","Al-Farooq","As-Siddiq","Saifullah"], ans:0},
    ur:{q:"حضرت علی بن ابی طالب رضی اللہ عنہ کا لقب کیا تھا؟", opts:["اسد اللہ (اللہ کا شیر)","الفاروق","الصدیق","سیف اللہ"], ans:0},
    hi:{q:"हज़रत अली इब्न अबी तालिब (रज़ि.) का लक़ब क्या था?", opts:["असदुल्लाह (अल्लाह का शेर)","अल-फ़ारूक़","अस-सिद्दीक़","सैफ़ुल्लाह"], ans:0} },
  { cat:"seerah", diff:"hard", pts:30,
    en:{q:"Who was the first official caller to prayer (Mu'adhdhin) in Islam?", opts:["Bilal ibn Rabah (RA)","Abu Hurairah","Zayd ibn Harithah","Abdullah ibn Mas'ud"], ans:0},
    ur:{q:"اسلام کے پہلے موذن کا نام کیا ہے؟", opts:["حضرت بلال بن رباح رضی اللہ عنہ","ابوہریرہ","زید بن حارثہ","عبداللہ بن مسعود"], ans:0},
    hi:{q:"इस्लाम के पहले मुअज़्ज़िन का नाम क्या है?", opts:["हज़रत बिआल इब्न रबाह (रज़ि.)","अबू हुरैरह","ज़ैद इब्न हारिसा","अब्दुल्लाह इब्न मसऊद"], ans:0} },
  { cat:"seerah", diff:"expert", pts:50,
    en:{q:"Who was the Persian companion who suggested digging the trench in the Battle of Khandaq?", opts:["Salman al-Farsi (RA)","Suhaib ar-Rumi","Habib ibn Zayd","Mus'ab ibn 'Umair"], ans:0},
    ur:{q:"غزوہ خندق میں خندق کھودنے کا مشورہ کس فارسی صحابی نے دیا تھا؟", opts:["حضرت سلمان فارسی رضی اللہ عنہ","نہیب الرومی","حبیب بن زید","مصعب بن عمیر"], ans:0},
    hi:{q:"ग़ज़वा-ए-ख़ंदक़ में खाई खोदने का सुझाव किस फ़ारसी सहाबी ने दिया था?", opts:["हज़रत सलमान अल-फ़ारसी (रज़ि.)","सुहैब अर-रूमी","हबीब इब्न ज़ैद","मुसअब इब्न उमैर"], ans:0} },

  // 31-40: PROPHETS & STORIES
  { cat:"stories", diff:"easy", pts:10,
    en:{q:"Which Prophet built the Ark to save believers from the great Flood?", opts:["Prophet Nuh (Noah)","Prophet Adam","Prophet Hud","Prophet Salih"], ans:0},
    ur:{q:"طوفانِ نوح سے ایمانداروں کو بچانے کے لیے کشتی کس نبی نے بنائی؟", opts:["حضرت نوح علیہ السلام","حضرت آدم","حضرت ہود","حضرت صالح"], ans:0},
    hi:{q:"महान जलप्रलय से ईमान वालों को बचाने के लिए नाव किस पैग़म्बर ने बनाई?", opts:["हज़रत नूह","हज़रत आदम","हज़रत हूद","हज़रत सालेह"], ans:0} },
  { cat:"stories", diff:"medium", pts:20,
    en:{q:"Which divine holy scripture was revealed to Prophet Dawud (David)?", opts:["Zabur (Psalms)","Tawrat","Injeel","Quran"], ans:0},
    ur:{q:"حضرت داؤد علیہ السلام پر کون سی آسمانی کتاب نازل ہوئی؟", opts:["زبور","تورات","انجیل","قرآن"], ans:0},
    hi:{q:"हज़रत दाऊद पर कौन सी ईश्वरीय किताब नाज़िल हुई?", opts:["ज़बूर","तौरात","इंजील","क़ुरआन"], ans:0} },
  { cat:"stories", diff:"medium", pts:20,
    en:{q:"Which divine holy scripture was revealed to Prophet Musa (Moses)?", opts:["Tawrat (Torah)","Zabur","Injeel","Suhuf"], ans:0},
    ur:{q:"حضرت موسیٰ علیہ السلام پر کون سی آسمانی کتاب نازل ہوئی؟", opts:["تورات","زبور","انجیل","صحف"], ans:0},
    hi:{q:"हज़रत मूसा पर कौन सी ईश्वरीय किताब नाज़िल हुई?", opts:["तौरात","ज़बूर","इंजील","सहूफ़"], ans:0} },
  { cat:"stories", diff:"hard", pts:30,
    en:{q:"Which divine holy scripture was revealed to Prophet Isa (Jesus)?", opts:["Injeel (Gospel)","Tawrat","Zabur","Quran"], ans:0},
    ur:{q:"حضرت عیسیٰ علیہ السلام پر کون سی آسمانی کتاب نازل ہوئی؟", opts:["انجیل","تورات","زبور","قرآن"], ans:0},
    hi:{q:"हज़रत ईसा पर कौन सी ईश्वरीय किताब नाज़िल हुई?", opts:["इंजील","तौरात","ज़बूर","क़ुरआन"], ans:0} },
  { cat:"stories", diff:"expert", pts:50,
    en:{q:"Which Prophet was sent to the people of Thamud with a miraculous She-Camel?", opts:["Prophet Salih (AS)","Prophet Hud","Prophet Shu'aib","Prophet Ibrahim"], ans:0},
    ur:{q:"قومِ ثمود کی طرف معجزاتی اونٹنی کے ساتھ کس نبی کو بھیجا گیا؟", opts:["حضرت صالح علیہ السلام","حضرت ہود","حضرت شعیب","حضرت ابراہیم"], ans:0},
    hi:{q:"समूद कौम की तरफ़ मौजिज़ा-ए-ऊँटनी के साथ किस पैग़म्बर को भेजा गया?", opts:["हज़रत सालेह","हज़रत हूद","हज़रत शुऐब","हज़रत इब्राहिम"], ans:0} },

  // 41-50: PILLARS, FIQH & TAJWEED
  { cat:"pillars", diff:"easy", pts:10,
    en:{q:"What is the special night in Ramadan that is better than 1,000 months?", opts:["Laylatul Qadr (Night of Decree)","Laylatul Bara'at","Eid night","Friday night"], ans:0},
    ur:{q:"رمضان المبارک کی وہ کون سی بابرکت رات ہے جو 1,000 مہینوں سے افضل ہے؟", opts:["لیلة القدر","شبِ برات","عید کی رات","جمعہ کی رات"], ans:0},
    hi:{q:"रमज़ान की वह कौन सी मुबारक रात है जो 1,000 महीनों से उत्तम है?", opts:["लैलतुल-क़द्र","शब-ए-बरात","ईद की रात","शुक्रवार रात"], ans:0} },
  { cat:"pillars", diff:"medium", pts:20,
    en:{q:"Walking 7 times between Safa and Marwah hills during Hajj/Umrah is called:", opts:["Sa'i","Tawaf","Rami","Rukn"], ans:0},
    ur:{q:"حج اور عمرہ کے دوران صفا اور مروہ کی پہاڑیوں کے درمیان 7 چکر لگانے کو کیا کہتے ہیں؟", opts:["سعی","طواف","رمی","رکن"], ans:0},
    hi:{q:"हज व उमराह के दौरान सफ़ा व मरवा की पहाड़ियों के बीच 7 चक्कर लगाने को क्या कहते हैं?", opts:["सई","तवाफ़","रमी","रुकन"], ans:0} },
  { cat:"pillars", diff:"hard", pts:30,
    en:{q:"Circling the Holy Kaaba 7 times counter-clockwise is known as:", opts:["Tawaf","Sa'i","Ihram","Wuquf"], ans:0},
    ur:{q:"خانہ کعبہ کے گرد 7 چکر لگانے کو کیا کہتے ہیں؟", opts:["طواف","سعی","احرام","وقوف"], ans:0},
    hi:{q:"क़ाबा के चारों ओर 7 चक्कर लगाने को क्या कहते हैं?", opts:["तवाफ़","सई","इहराम","वुक़ूफ़"], ans:0} },
  { cat:"tajweed", diff:"medium", pts:20,
    en:{q:"When Meem Sakinah is followed by another Meem (م), which Tajweed rule applies?", opts:["Idgham Shafawi (Idgham of Meem)","Ikhfa Shafawi","Izhar Shafawi","Iqlab"], ans:0},
    ur:{q:"میم ساکن کے بعد اگر دوسری میم (م) آئے تو کون سا تجوید قاعدہ لاگو ہوتا ہے؟", opts:["ادغام شفوی","اخفاء شفوی","اظہار شفوی","اقلاب"], ans:0},
    hi:{q:"मीम साकिन के बाद यदि दूसरी मीम आए तो कौन सा नियम लागू होता है?", opts:["इदग़ाम शफ़वी","इख़फ़ा शफ़वी","इज़हार शफ़वी","इक़लाब"], ans:0} },
  { cat:"names", diff:"expert", pts:50,
    en:{q:"What does 'Al-Fattah' (الفتاح) mean?", opts:["The Opener / The Judge who removes all obstacles","The Creator","The Last","The High"], ans:0},
    ur:{q:"اللہ تعالی کے مبارک نام 'الفتاح' کا کیا مطلب ہے؟", opts:["مشکلات کھولنے والا / فتاح","خالق","آخر","عالی"], ans:0},
    hi:{q:"अल्लाह के मुबारक नाम 'अल-फ़त्ताह' का अर्थ क्या है?", opts:["मार्ग खोलने वाला / न्याय करने वाला","सृष्टिकर्ता","अंतिम","उच्च"], ans:0} },
];

const TOTAL = 10;
const DIFF_TIME: Record<Diff,number> = { easy:25, medium:18, hard:12, expert:8 };
const DIFF_COLORS: Record<Diff,string> = {
  easy:"bg-green-100 text-green-700", medium:"bg-amber-100 text-amber-700",
  hard:"bg-orange-100 text-orange-700", expert:"bg-red-100 text-red-700",
};
const CAT_KEYS: Cat[] = ["all","quran","hadith","fiqh","seerah","history","pillars","names","tajweed","stories","tafseer"];

export default function IslamicQuizGame() {
  const [lang,         setLang]         = useState<Lang>("en");
  const [selectedCats, setSelectedCats] = useState<Set<Cat>>(new Set(["all"]));
  const [diff,         setDiff]         = useState<Diff>("easy");
  const [score,        setScore]        = useState(0);
  const [correct,      setCorrect]      = useState(0);
  const [streak,       setStreak]       = useState(0);
  const [qList,        setQList]        = useState<Question[]>([]);
  const [qIdx,         setQIdx]         = useState(0);
  const [curQ,         setCurQ]         = useState<Question | null>(null);
  const [answered,     setAnswered]     = useState(false);
  const [selected,     setSelected]     = useState<number | null>(null);
  const [feedback,     setFeedback]     = useState<{text:string;ok:boolean}|null>(null);
  const [timeLeft,     setTimeLeft]     = useState(0);
  const [history,      setHistory]      = useState<boolean[]>([]);
  const [gameOver,     setGameOver]     = useState(false);
  const [started,      setStarted]      = useState(false);
  const [showAuth,        setShowAuth]        = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [shuffledOpts, setShuffledOpts] = useState<Record<Lang,{opts:string[];ans:number}>>({
    en:{opts:[],ans:0}, ur:{opts:[],ans:0}, hi:{opts:[],ans:0}
  });
  const [firebaseQs,   setFirebaseQs]   = useState<Question[]>([]);
  const [fbLoading,    setFbLoading]    = useState(true);

  const seenIdsRef  = useRef<Set<number>>(new Set());
  const savedRef    = useRef(false);
  const optsListRef = useRef<Record<Lang,{opts:string[];ans:number}>[]>([]);
  const timerRef    = useRef<ReturnType<typeof setInterval>|null>(null);
  const totalTimeRef = useRef(0);

  const { user } = useAuth();
  const u = UI[lang];

  // Load questions from Firebase (admin uploaded) — merge with local QB
  useEffect(() => {
    getAdminQuizQuestions()
      .then(data => {
        setFirebaseQs(data as Question[]);
        setFbLoading(false);
      })
      .catch(() => setFbLoading(false));
  }, []);

  // Unified Question Bank: Merges Firebase dynamic questions with central 550+ questions bank
  const ALL_RAW_QUESTIONS = [...firebaseQs, ...ALL_ISLAMIC_QUESTIONS];

  // Automatic Runtime Deduplication Engine: Guarantees 100% unique questions with ZERO repeats
  const ALL_QUESTIONS = (() => {
    const seenTexts = new Set<string>();
    const unique: Question[] = [];

    for (const q of ALL_RAW_QUESTIONS) {
      if (!q || !q.en || !q.en.q) continue;
      // Normalize English & Urdu text for exact duplicate detection
      const normEn = q.en.q.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
      const normUr = q.ur ? q.ur.q.trim().replace(/\s+/g, "") : "";

      if (!seenTexts.has(normEn) && (!normUr || !seenTexts.has(normUr))) {
        seenTexts.add(normEn);
        if (normUr) seenTexts.add(normUr);
        unique.push(q);
      }
    }

    return unique;
  })();

  const clearTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };

  // Shuffle options — same permutation across all 3 languages
  const buildShuffledOpts = useCallback((q: Question): Record<Lang,{opts:string[];ans:number}> => {
    const perm = q.en.opts.map((_,i) => i).sort(() => Math.random() - 0.5);
    return {
      en: { opts: perm.map(i => q.en.opts[i]), ans: perm.indexOf(q.en.ans) },
      ur: { opts: perm.map(i => q.ur.opts[i]), ans: perm.indexOf(q.ur.ans) },
      hi: { opts: perm.map(i => q.hi.opts[i]), ans: perm.indexOf(q.hi.ans) },
    };
  }, []);

  // Save score to Firebase
  const saveScore = useCallback(async (finalScore: number, finalCorrect: number, finalStreak: number) => {
    if (!user || savedRef.current) return;
    savedRef.current = true;
    try {
      await saveQuizScore({
        uid:         user.uid,
        displayName: user.displayName || "Anonymous",
        photoURL:    user.photoURL    || "",
        gameName:    "Islamic Quiz",
        category:    selectedCats.has("all") ? "quran" : Array.from(selectedCats)[0],
        difficulty:  diff,
        score:       finalScore,
        correct:     finalCorrect,
        total:       TOTAL,
        streak:      finalStreak,
      });
    } catch (e) {
      console.error("Failed to save score:", e);
    }
  }, [user, selectedCats, diff]);



  // Time up effect
  useEffect(() => {
    if (timeLeft === 0 && curQ && !answered && started && !gameOver) {
      clearTimer(); setAnswered(true);
      const correctOpt = shuffledOpts[lang].opts[shuffledOpts[lang].ans];
      setFeedback({ text:`${u.timesUp} ${u.answer} ${correctOpt}`, ok:false });
      setStreak(0); setHistory(h => [...h, false]);
    }
  }, [timeLeft, curQ, answered, started, gameOver, lang, u, shuffledOpts]);

  const startGame = useCallback(() => {
    savedRef.current = false; // reset save flag for new game

    const fisherYates = <T,>(arr: T[]): T[] => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    // 1. Filter pool by selected categories
    let pool = ALL_QUESTIONS;
    if (!selectedCats.has("all")) {
      pool = ALL_QUESTIONS.filter(q => selectedCats.has(q.cat as Cat));
      if (pool.length < 5) pool = ALL_QUESTIONS;
    }

    // 2. Separate into difficulty tiers and shuffle each tier independently
    const easyPool = fisherYates(pool.filter(q => q.diff === "easy"));
    const medPool  = fisherYates(pool.filter(q => q.diff === "medium"));
    const hardPool = fisherYates(pool.filter(q => q.diff === "hard"));
    const expPool  = fisherYates(pool.filter(q => q.diff === "expert"));

    // 3. Assemble progressive 10-question sequence (Easy -> Medium -> Hard -> Expert)
    const selected10 = [
      ...easyPool.slice(0, 2),
      ...medPool.slice(0, 3),
      ...hardPool.slice(0, 3),
      ...expPool.slice(0, 2),
    ];

    // Fallback if tier pool had fewer questions
    if (selected10.length < TOTAL) {
      const unused = fisherYates(pool.filter(q => !selected10.includes(q)));
      selected10.push(...unused.slice(0, TOTAL - selected10.length));
    }

    const final10 = selected10.slice(0, TOTAL);
    const allOpts = final10.map(q => buildShuffledOpts(q));
    optsListRef.current = allOpts;

    setQList(final10);
    setQIdx(0);
    setScore(0);
    setCorrect(0);
    setStreak(0);
    setHistory([]);
    setGameOver(false);
    setStarted(true);

    const firstQ = final10[0];
    setCurQ(firstQ);
    setDiff(firstQ.diff);
    setShuffledOpts(allOpts[0]);
    setAnswered(false);
    setSelected(null);
    setFeedback(null);

    const t = DIFF_TIME[firstQ.diff];
    totalTimeRef.current = t;
    setTimeLeft(t);

    clearTimer();
    timerRef.current = setInterval(() => setTimeLeft(v => Math.max(0, parseFloat((v-0.1).toFixed(1)))), 100);
  }, [selectedCats, ALL_QUESTIONS, buildShuffledOpts]);

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
    if (ni >= qList.length) {
      setGameOver(true);
      clearTimer();
      // Save to Firebase when game ends
      setScore(s  => { setCorrect(c => { setStreak(st => { saveScore(s, c, st); return st; }); return c; }); return s; });
      return;
    }
    const nextQ = qList[ni];
    setCurQ(nextQ);
    setDiff(nextQ.diff); // Automatically update difficulty level for the next question!
    setShuffledOpts(optsListRef.current[ni]);
    setAnswered(false);
    setSelected(null);
    setFeedback(null);

    const t = DIFF_TIME[nextQ.diff];
    totalTimeRef.current = t;
    setTimeLeft(t);

    clearTimer();
    timerRef.current = setInterval(() => setTimeLeft(v => Math.max(0, parseFloat((v-0.1).toFixed(1)))), 100);
  };

  const toggleCat = (cat: Cat) => {
    if (cat === "all") { setSelectedCats(new Set(["all"])); return; }
    setSelectedCats(prev => {
      const next = new Set(prev); next.delete("all");
      if (next.has(cat)) next.delete(cat); else next.add(cat);
      if (next.size === 0) return new Set(["all"]);
      return next;
    });
  };

  const timerPct   = curQ ? (timeLeft / totalTimeRef.current) * 100 : 100;
  const timerColor = timerPct > 50 ? "#1D9E75" : timerPct > 25 ? "#BA7517" : "#E24B4A";
  const isRtl      = lang === "ur";
  const pct        = qList.length > 0 ? Math.round(correct / qList.length * 100) : 0;
  const msg        = pct === 100 ? u.genius : pct >= 70 ? u.excellent : pct >= 50 ? u.good : u.keep;
  const shadow     = "0 4px 0 rgba(0,0,0,0.15)";

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

      {/* Adaptive Auto-Difficulty Banner */}
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 rounded-2xl p-3 text-center">
        <p className="text-xs font-bold text-teal-800 flex items-center justify-center gap-1.5">
          <span>⚡ Adaptive Automatic Difficulty</span>
        </p>
        <p className="text-[11px] text-teal-600 mt-0.5">
          Questions start at Easy and automatically scale up (Medium ➔ Hard ➔ Expert) as you answer!
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[[u.score,score],[u.correct,correct],[u.streak,streak]].map(([l,v]) => (
          <div key={String(l)} className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100">
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
          <p className="text-gray-500 text-sm mb-2 leading-relaxed">{u.sub}</p>
          {fbLoading ? (
            <p className="text-xs text-gray-400 mb-6">Loading questions…</p>
          ) : (
            <p className="text-xs text-gray-400 mb-6">
              {ALL_QUESTIONS.length} questions
              {firebaseQs.length > 0 && ` (${firebaseQs.length} from admin)`}
            </p>
          )}
          <button onClick={startGame} disabled={fbLoading}
            className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold text-base disabled:opacity-50"
            style={{boxShadow:"0 4px 0 #0F6E56"}}>
            {fbLoading ? "Loading…" : u.start}
          </button>
        </div>
      )}

      {/* Game Over */}
      {gameOver && (
        <div className="bg-gradient-to-b from-teal-50 to-white border border-teal-100 rounded-2xl p-6 text-center">
          <img src="/Islamic_Quiz_Logo.jpeg" alt="Islamic Quiz" className="w-16 h-16 object-contain mx-auto mb-2 rounded-xl" />
          <p className="text-4xl font-black text-teal-600 my-2">{score}</p>
          <p className="text-lg font-bold text-gray-900 mb-1">{correct}/{qList.length} {u.correct}</p>
          <p className="text-gray-500 text-sm mb-4">{msg}</p>
          <p className="text-xs text-gray-400 mb-4">
            {lang==="en" ? `Questions seen: ${seenIdsRef.current.size} / ${QB.length} total` :
             lang==="ur" ? `دیکھے گئے سوالات: ${seenIdsRef.current.size} / ${QB.length} کل` :
             `देखे गए सवाल: ${seenIdsRef.current.size} / ${QB.length} कुल`}
          </p>

          {/* Sign in prompt for guests */}
          {!user && (
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 mb-4 text-center">
              <p className="text-sm font-bold text-teal-800 mb-1">💾 {lang==="en"?"Save Your Score!":lang==="ur"?"اپنا اسکور محفوظ کریں!":"अपना स्कोर सेव करें!"}</p>
              <p className="text-xs text-teal-600 mb-3">
                {lang==="en"?"Sign in to track your progress and appear on the leaderboard.":
                 lang==="ur"?"اپنی پیشرفت ٹریک کرنے اور لیڈربورڈ پر آنے کے لیے سائن ان کریں۔":
                 "अपनी प्रगति ट्रैक करने और लीडरबोर्ड पर आने के लिए साइन इन करें।"}
              </p>
              <button onClick={() => setShowAuth(true)}
                className="bg-teal-600 text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-teal-700 transition-all"
                style={{boxShadow:"0 3px 0 #0F6E56"}}>
                {lang==="en"?"Sign In / Create Account":lang==="ur"?"سائن ان / اکاؤنٹ بنائیں":"साइन इन / अकाउंट बनाएँ"}
              </button>
            </div>
          )}

          {/* Saved confirmation for logged in users */}
          {user && (
            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-2 mb-4 text-center">
              <p className="text-xs text-green-700 font-semibold">
                ✅ {lang==="en"?"Score saved to your profile!":lang==="ur"?"اسکور آپ کی پروفائل میں محفوظ ہو گیا!":"स्कोर आपकी प्रोफ़ाइल में सेव हो गया!"}
              </p>
            </div>
          )}

          <button onClick={startGame} className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold mb-4"
            style={{boxShadow:"0 4px 0 #0F6E56"}}>
            {u.again}
          </button>

          <button
            onClick={() => setShowResultModal(true)}
            className="w-full bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 mb-4 border border-amber-600"
          >
            <span>🖼️ Share Result Card Image (PNG)</span>
          </button>

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

            {/* Arabic Ayah */}
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

            <p className={`text-base font-bold text-gray-900 leading-relaxed ${isRtl?"text-right":""}`}
               style={isRtl?{fontFamily:"'Noto Nastaliq Urdu',serif"}:{}}>
              {curQ[lang].q}
            </p>
          </div>

          {/* Timer */}
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-100"
              style={{width:`${timerPct}%`, background:timerColor}}/>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {shuffledOpts[lang].opts.map((opt, i) => {
              let cls = "bg-white border-gray-200 text-gray-900";
              if (answered) {
                if (i === shuffledOpts[lang].ans) cls = "bg-teal-600 border-teal-700 text-white";
                else if (i === selected)           cls = "bg-red-500 border-red-600 text-white";
                else                               cls = "bg-gray-50 border-gray-200 text-gray-400";
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
            <div className={`text-center py-3 px-4 rounded-xl font-semibold text-sm
              ${feedback.ok?"bg-teal-50 text-teal-700 border border-teal-100":"bg-red-50 text-red-700 border border-red-100"}`}>
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

      {/* Auth Modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

      {/* Result Certificate Share Modal */}
      <QuizResultShareModal
        score={score}
        totalQuestions={qList.length}
        correctAnswers={correct}
        difficulty={diff}
        categoryLabel={u.cats[Array.from(selectedCats)[0] as Cat] || "Islamic Quiz"}
        lang={lang}
        isOpen={showResultModal}
        onClose={() => setShowResultModal(false)}
      />
    </div>
  );
}
