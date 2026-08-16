export type LanguageCode = "ur" | "en" | "hi" | "tr" | "es" | "fr" | "bn" | "id";

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "ur", name: "Urdu", nativeName: "اردو", flag: "🇵🇰" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी", flag: "🇮🇳" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇧🇩" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flag: "🇮🇩" },
];

export type DuaCategory = "all" | "rabbana" | "morning" | "evening" | "daily" | "salah" | "forgiveness" | "protection" | "favorites" | "pdf";

export interface CategoryInfo {
  id: DuaCategory;
  titleEn: string;
  titleUr: string;
  titleAr: string;
  icon: string;
}

export const DUA_CATEGORIES: CategoryInfo[] = [
  { id: "all", titleEn: "All Duas", titleUr: "تمام ادعیہ", titleAr: "جميع الأدعية", icon: "✨" },
  { id: "rabbana", titleEn: "40 Rabbana Duas", titleUr: "40 ربنا دعائیں", titleAr: "٤٠ دعاء ربنا", icon: "🤲" },
  { id: "morning", titleEn: "Morning Azkar", titleUr: "صبح کے اذكار", titleAr: "أذكار الصباح", icon: "🌅" },
  { id: "evening", titleEn: "Evening Azkar", titleUr: "شام کے اذكار", titleAr: "أذكار المساء", icon: "🌙" },
  { id: "daily", titleEn: "Daily Life Duas", titleUr: "روزمرہ کی دعائیں", titleAr: "أدعية الحياة اليومية", icon: "☀️" },
  { id: "salah", titleEn: "After Salah Azkar", titleUr: "نماز کے بعد اذكار", titleAr: "أذكار بعد الصلاة", icon: "🕌" },
  { id: "forgiveness", titleEn: "Seeking Forgiveness", titleUr: "استغفار و توبہ", titleAr: "الاستغفار والتوبة", icon: "🌿" },
  { id: "protection", titleEn: "Protection & Healing", titleUr: "حفاظت اور شفا", titleAr: "الحماية والشفاء", icon: "🛡️" },
  { id: "favorites", titleEn: "My Favorites", titleUr: "میری پسندیدہ", titleAr: "المفضلة", icon: "⭐" },
  { id: "pdf", titleEn: "Upload / View PDF", titleUr: "پی ڈی ایف دیکھیں", titleAr: "عرض PDF", icon: "📄" },
];

export interface MultiLangTranslation {
  en: string;
  ur: string;
  hi: string;
  tr: string;
  es: string;
  fr: string;
  bn: string;
  id: string;
}

export type HadithGrading = "quran" | "sahih" | "hasan";

export type TranslationStatus = "reviewed" | "unreviewed";

export interface SourceRef {
  collection: string;
  number: string;
}

export interface DuaItem {
  id: string;
  category: "rabbana" | "morning" | "evening" | "daily" | "salah" | "forgiveness" | "protection";
  title: { en: string; ur: string; ar: string };
  arabic: string;
  transliteration: string;
  surahInfo?: { surah: number; ayah: number };
  audioStartTime?: number;
  audioEndTime?: number;
  customAudioUrl?: string;
  repeatTarget: number;
  benefit: { en: string; ur: string };
  source: string;
  translations: MultiLangTranslation;
  grading?: HadithGrading;
  sourceRefs?: SourceRef[];
  translationStatus?: Partial<Record<LanguageCode, TranslationStatus>>;
}

export const DUAS_DATABASE: DuaItem[] = [
  {
    id: "rabbana-1",
    category: "rabbana",
    title: {
      en: "Dua for Good in This Life and Hereafter",
      ur: "دنیا و آخرت کی بھلائی کی دعا",
      ar: "دعاء حسنة الدنيا والآخرة"
    },
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
    surahInfo: { surah: 2, ayah: 201 },
    repeatTarget: 1,
    source: "Surah Al-Baqarah (2:201)",
    grading: "quran",
    sourceRefs: [
      { collection: "Surah Al-Baqarah", number: "2:201" }
    ],
    benefit: {
      en: "One of the most comprehensive supplications recited by Prophet Muhammad ﷺ for goodness in this world and protection from hellfire.",
      ur: "نبی کریم ﷺ کی سب سے زیادہ مانگی جانے والی جامع دعا جو دنیا کی تمام برکات اور آخرت کی نجات کو شامل ہے۔"
    },
    translations: {
      en: "Our Lord! Give us in this world that which is good and in the Hereafter that which is good, and save us from the torment of the Fire.",
      ur: "اے ہمارے پروردگار! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی دے اور ہمیں آگ کے عذاب سے بچا۔",
      hi: "ऐ हमारे रब! हमें दुनिया में भी भलाई दे और आख़िरत में भी भलाई दे और हमें आग के अज़ाब से बचा।",
      tr: "Rabbimiz! Bize dünyada da iyilik ver, ahirette de iyilik ver ve bizi ateş azabından koru.",
      es: "¡Señor nuestro! Danos en este mundo lo que es bueno y en el Más Allá lo que es bueno, y líbranos del castigo del Fuego.",
      fr: "Seigneur! Accorde-nous belle part ici-bas et belle part dans l'au-delà, et protège-nous du châtiment du Feu.",
      bn: "হে আমাদের প্রতিপালক! আমাদের দুনিয়াতেও কল্যাণ দিন এবং আখেরাতেও কল্যাণ দিন এবং আমাদের জাহান্নামের আজাব থেকে রক্ষা করুন।",
      id: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat dan peliharalah kami dari siksa neraka."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "rabbana-2",
    category: "rabbana",
    title: {
      en: "Dua for Firmness in Faith & Mercy",
      ur: "ہدایت پر قائم رہنے اور رحمت کی دعا",
      ar: "دعاء الثبات على الهداية والرحمة"
    },
    arabic: "رَبَّنَا لاَ تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
    transliteration: "Rabbana la tuzigh quloobana ba'da idh hadaytana wa hab lana milladunka rahmatan innaka antal-Wahhab",
    surahInfo: { surah: 3, ayah: 8 },
    repeatTarget: 1,
    source: "Surah Ali 'Imran (3:8)",
    grading: "quran",
    sourceRefs: [
      { collection: "Surah Ali 'Imran", number: "3:8" }
    ],
    benefit: {
      en: "Essential Dua for asking Allah to keep our hearts steadfast upon guidance and bestow His divine mercy.",
      ur: "دلوں کو ہدایت پر ثابت قدم رکھنے اور اللہ تعالی کی خصوصی رحمت حاصل کرنے کی بہترین دعا۔"
    },
    translations: {
      en: "Our Lord! Let not our hearts swerve after Thou hast guided us, and bestow upon us mercy from Thy presence; for Thou art the Bestower.",
      ur: "اے ہمارے رب! ہدایت دینے کے بعد ہمارے دلوں کو ٹیڑھا نہ کر، اور ہمیں اپنے پاس سے رحمت عطا فرما، بے شک تو ہی سب کچھ عطا کرنے والا ہے۔",
      hi: "ऐ हमारे रब! हिदायत देने के बाद हमारे दिलों को टेढ़ा न कर, और हमें अपने पास से रहमत अता फरमा।",
      tr: "Rabbimiz! Bizi doğru yola ilettikten sonra kalplerimizi eğriltme. Bize katından bir rahmet bağışla. Şüphesiz sen çok bağışlayansın.",
      es: "¡Señor nuestro! No hagas que nuestros corazones se desvíen después de habernos guiado, y concédenos tu misericordia. Verdaderamente Tú eres el Otorgante.",
      fr: "Seigneur! Ne fais pas dévier nos cœurs après que Tu nous as guidés et accorde-nous Ta miséricorde. C'est Toi le Grand Dispensateur.",
      bn: "হে আমাদের প্রতিপালক! সরল পথ দেখানোর পর আমাদের অন্তরকে সত্যচ্যুত করবেন না এবং আপনার নিকট থেকে আমাদের ওপর রহমত বর্ষণ করুন।",
      id: "Ya Tuhan kami, janganlah Engkau jadikan hati kami condong kepada kesesatan sesudah Engkau beri petunjuk kepada kami, dan karuniakanlah kepada kami rahmat dari sisi-Mu."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "rabbana-3",
    category: "rabbana",
    title: {
      en: "Dua for Righteous Family & Offspring",
      ur: "نیک بیوی اور اولاد کی دعا",
      ar: "دعاء الصلاح في الزوجة والذرية"
    },
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    transliteration: "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqeena imama",
    surahInfo: { surah: 25, ayah: 74 },
    repeatTarget: 1,
    source: "Surah Al-Furqan (25:74)",
    grading: "quran",
    sourceRefs: [
      { collection: "Surah Al-Furqan", number: "25:74" }
    ],
    benefit: {
      en: "Recited for peace in marriage, pious children, and becoming a role model for the righteous.",
      ur: "گھریلو سکون، نیک اولاد کی تربیت اور پرہیزگاروں کا رہنما بننے کی بابرکت دعا۔"
    },
    translations: {
      en: "Our Lord! Grant unto us wives and offspring who will be the comfort of our eyes, and give us (the grace) to lead the righteous.",
      ur: "اے ہمارے پروردگار! ہمیں ہماری بیویوں اور ہماری اولاد کی طرف سے آنکھوں کی ٹھنڈک عطا فرما اور ہمیں پرہیزگاروں کا پیشوا بنا۔",
      hi: "ऐ हमारे रब! हमें हमारी बीवियों और औलाद से आंखों की ठंडक अता फरमा और हमें परहेज़गारों का इमाम बना।",
      tr: "Rabbimiz! Bize eşlerimizden ve soyumuzdan göz aydınlığı olacak nesiller bağışla ve bizi takva sahiplerine önder kıl.",
      es: "¡Señor nuestro! Concédenos en nuestras esposas y descendientes la alegría de nuestros ojos, e haz que seamos un modelo para los piadosos.",
      fr: "Seigneur! Accorde-nous en nos épouses et nos descendants la joie des yeux, et fais de nous un guide pour les pieux.",
      bn: "হে আমাদের প্রতিপালক! আমাদের স্ত্রী ও সন্তানদের আমাদের জন্য নয়নপ্রীতি কর এবং আমাদের মুত্তাকিদের জন্য অনুসরণযোগ্য কর।",
      id: "Ya Tuhan kami, anugerahkanlah kepada kami istri-istri kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami imam bagi orang-orang yang bertakwa."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "rabbana-4",
    category: "rabbana",
    title: {
      en: "Dua for Parents and All Believers",
      ur: "والدین اور تمام مومنین کے لیے مغفرت کی دعا",
      ar: "دعاء للمغفرة للوالدين وللمؤمنين"
    },
    arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    transliteration: "Rabbana ghfir li wa li-walidayya wa lil-mu'mineena yawma yaqoomul-hisab",
    surahInfo: { surah: 14, ayah: 41 },
    repeatTarget: 1,
    source: "Surah Ibrahim (14:41)",
    grading: "quran",
    sourceRefs: [
      { collection: "Surah Ibrahim", number: "14:41" }
    ],
    benefit: {
      en: "Supplication of Prophet Ibrahim (AS) asking forgiveness for oneself, parents, and all believers on the Day of Judgment.",
      ur: "حضرت ابراہیم علیہ السلام کی دعا جو اپنے لیے، والدین کے لیے اور قیامت کے دن تمام ایمانداروں کے لیے مغفرت طلب کرتی ہے۔"
    },
    translations: {
      en: "Our Lord! Forgive me and my parents, and the believers on the Day when the account is established.",
      ur: "اے ہمارے پروردگار! مجھے، میرے والدین کو اور تمام مومنوں کو اس دن بخش دے جس دن حساب قائم ہوگا۔",
      hi: "ऐ हमारे रब! मुझे, मेरे माता-पिता को और तमाम मोमिनों को उस दिन बख्श दे जिस दिन हिसाब कायम होगा।",
      tr: "Rabbimiz! Hesabın görüleceği gün beni, anne-babamı ve müminleri bağışla.",
      es: "¡Señor nuestro! Perdóname a mí, a mis padres y a los creyentes el Día en que se establezca la rendición de cuentas.",
      fr: "Seigneur! Pardonne-moi, ainsi qu'à mes parents et aux croyants, le jour où le compte sera établi.",
      bn: "হে আমাদের প্রতিপালক! যেদিন হিসাব অনুষ্ঠিত হবে, সেদিন আমাকে, আমার পিতামাতাকে এবং সকল মুমিনকে ক্ষমা করুন।",
      id: "Ya Tuhan kami, ampunilah aku, kedua orang tuaku, dan sekalian orang-orang mukmin pada hari terjadinya hisab."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "sayyidul-istighfar",
    category: "forgiveness",
    title: {
      en: "Sayyidul Istighfar (The Master Supplication for Forgiveness)",
      ur: "سید الاستغفار (استغفار کا سردار)",
      ar: "سيد الاستغفار"
    },
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ",
    transliteration: "Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, aboo'u laka bini'matika 'alayya, wa aboo'u bidhanbi faghfir li fa-innahu la yaghfirudh-dhunooba illa anta",
    repeatTarget: 1,
    source: "Sahih al-Bukhari",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih al-Bukhari", number: "6306" }
    ],
    benefit: {
      en: "Prophet Muhammad ﷺ said: Whoever recites this in the morning or evening with firm faith and dies that day will enter Paradise.",
      ur: "نبی اکرم ﷺ نے فرمایا: جو شخص یقین کے ساتھ صبح یا شام یہ دعا پڑھے اور اسی دن فوت ہو جائے تو وہ جنتی ہے۔"
    },
    translations: {
      en: "O Allah, You are my Lord, there is no god but You. You created me and I am Your servant, and I adhere to Your covenant and promise as best as I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin. So forgive me, for none forgives sins except You.",
      ur: "اے اللہ! تو ہی میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے ہی مجھے پیدا کیا اور میں تیرا بندہ ہوں اور اپنی طاقت کے مطابق تیرے عہد اور وعدے پر قائم ہوں۔ میں اپنے کیے کے شر سے تیری پناہ مانگتا ہوں، میں اپنے اوپر تیری نعمت کا اعتراف کرتا ہوں اور اپنے گناہ کا بھی اعتراف کرتا ہوں، پس مجھے بخش دے کیونکہ تیرے سوا کوئی گناہوں کو نہیں بخش سکتا۔",
      hi: "ऐ अल्लाह! तू ही मेरा रब है, तेरे सिवा कोई माबूद नहीं। तूने मुझे पैदा किया और मैं तेरा बंदा हूं। अपनी ताकत के मुताबिक तेरे वादे पर कायम हूं। अपने गुनाहों की माफी मांगता हूं, मुझे माफ फरमा दे।",
      tr: "Allah'ım! Sen benim Rabbimsin. Senden başka ilah yoktur. Beni sen yarattın ve ben senin kulunum. Gücüm yettiğince sana verdiğim söz ve vaad üzerindeyim. Yaptıklarımın şerrinden sana sığınırım. Üzerimdeki nimetini ve günahımı kabul ediyorum. Beni bağışla, çünkü günahları senden başkası bağışlayamaz.",
      es: "¡Oh Allah! Tú eres mi Señor, no hay más dios que Tú. Me creaste y soy Tu siervo, y mantengo Tu pacto y promesa en la medida de mis posibilidades. Me refugio en Ti del mal que he cometido. Reconozco Tu favor sobre mí y reconozco mi pecado. Así que perdóname, pues nadie perdona los pecados sino Tú.",
      fr: "Ô Allah! Tu es mon Seigneur, il n'y a de divinité que Toi. C'est Toi qui m'as créé et je suis Ton serviteur. Je suis fidèle à Ton engagement et à Ta promesse autant que je le puis. Je cherche protection auprès de Toi contre le mal de ce que j'ai fait. Je reconnais Tes bienfaits sur moi et je reconnais mon péché. Pardonne-moi donc, car nul autre que Toi ne pardonne les péchés.",
      bn: "হে আল্লাহ! আপনি আমার প্রতিপালক, আপনি ছাড়া অন্য কোনো উপাস্য নেই। আপনি আমাকে সৃষ্টি করেছেন এবং আমি আপনার বান্দা। আমি সাধ্যমতো আপনার অঙ্গীকার ও প্রতিশ্রুতির ওপর কায়েম আছি। আমি আমার কৃতকর্মের অনিষ্ট থেকে আপনার কাছে আশ্রয় চাই। আমার ওপর আপনার নিয়ামত স্বীকার করছি এবং আমার গুনাহের স্বীকৃতি দিচ্ছি। অতএব আমাকে ক্ষমা করুন, কারণ আপনি ছাড়া গুনাহ ক্ষমা করার কেউ নেই।",
      id: "Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan selain Engkau. Engkau yang menciptakan aku dan aku adalah hamba-Mu. Aku memegang teguh janji-Mu sesuai kemampuanku. Aku berlindung kepada-Mu dari kejahatan perbuatanku. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku, maka ampunilah aku. Sesungguhnya tidak ada yang mengampuni dosa selain Engkau."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "yunus-dua",
    category: "forgiveness",
    title: {
      en: "Dua of Prophet Yunus (Ayat Kareema)",
      ur: "آیت کریمہ (حضرت یونس علیہ السلام کی دعا)",
      ar: "دعاء سيدنا يونس عليه السلام (آية كريمة)"
    },
    arabic: "لاَّ إِلَـهَ إِلاَّ أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    transliteration: "La ilaha illa anta subhanaka inni kuntu minadh-dhalimeen",
    surahInfo: { surah: 21, ayah: 87 },
    repeatTarget: 1,
    source: "Surah Al-Anbiya (21:87)",
    grading: "quran",
    sourceRefs: [
      { collection: "Surah Al-Anbiya", number: "21:87" }
    ],
    benefit: {
      en: "Prophet Muhammad ﷺ said: No Muslim supplicates with this Dua during distress except that Allah relieves their hardship.",
      ur: "نبی اکرم ﷺ نے فرمایا: کوئی بھی مسلمان کسی مشکل میں یہ دعا مانگے تو اللہ تعالی اس کی تکلیف دور فرما دیتا ہے۔"
    },
    translations: {
      en: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
      ur: "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی ظالموں (زیادتی کرنے والوں) میں سے تھا۔",
      hi: "तेरे इलावा कोई माबूद नहीं, तू पाक है, बेशक मैं ही ज़ालिमों में से था।",
      tr: "Senden başka ilah yoktur. Seni tenzih ederim. Şüphesiz ben haksızlık edenlerden oldum.",
      es: "No hay más dios que Tú, ¡Glorificado seas! Ciertamente he sido de los injustos.",
      fr: "Il n'y a pas de divinité à part Toi! Pureté à Toi! J'ai été vraiment du nombre des injustes.",
      bn: "আপনি ব্যতীত কোন ইলাহ নেই; আপনি পবিত্র! নিশ্চয়ই আমি অপরাধীদের অন্তর্ভুক্ত ছিলাম।",
      id: "Tidak ada Tuhan selain Engkau. Maha Suci Engkau, sesungguhnya aku adalah termasuk orang-orang yang zalim."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "musa-dua",
    category: "daily",
    title: {
      en: "Dua of Prophet Musa for Need & Sustenance",
      ur: "حضرت موسیٰ علیہ السلام کی محتاجی اور رزق کی دعا",
      ar: "دعاء سيدنا موسى للرزق والحاجة"
    },
    arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    transliteration: "Rabbi inni lima anzalta ilayya min khayrin faqeer",
    surahInfo: { surah: 28, ayah: 24 },
    repeatTarget: 1,
    source: "Surah Al-Qasas (28:24)",
    grading: "quran",
    sourceRefs: [
      { collection: "Surah Al-Qasas", number: "28:24" }
    ],
    benefit: {
      en: "Prophet Musa (AS) recited this when destitute. Allah immediately provided him shelter, employment, and marriage.",
      ur: "حضرت موسیٰ علیہ السلام نے انتہائی لاچاری کی حالت میں یہ دعا مانگی اور اللہ نے فوراً چھت، روزگار اور رشتہ کا انتظام فرمایا۔"
    },
    translations: {
      en: "My Lord, indeed I am, for whatever good You would send down to me, in need.",
      ur: "اے میرے پروردگار! تو جو بھی بھلائی میری طرف نازل فرمائے، میں اس کا محتاج ہوں۔",
      hi: "ऐ मेरे रब! तू जो भी भलाई मेरी तरफ नाजिल फरमाए, मैं उसका मोहताज हूं।",
      tr: "Rabbim! Doğrusu bana indireceğin her hayra muhtacım.",
      es: "¡Señor mío! Verdaderamente estoy necesitado de cualquier bien que me envíes.",
      fr: "Seigneur, j'ai grand besoin de n'importe quel bien que Tu feras descendre vers moi.",
      bn: "হে আমার প্রতিপালক! আপনি আমার প্রতি যে কল্যাণই অবতীর্ণ করবেন, আমি তার মুখাপেক্ষী।",
      id: "Ya Tuhanku sesungguhnya aku sangat memerlukan sesuatu kebaikan yang Engkau turunkan kepadaku."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "rabbi-zidni-ilma",
    category: "daily",
    title: {
      en: "Dua for Knowledge and Understanding",
      ur: "علم میں اضافے کی دعا",
      ar: "دعاء طلب العلم والزيادة فيه"
    },
    arabic: "رَّبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidnee 'ilma",
    surahInfo: { surah: 20, ayah: 114 },
    audioStartTime: 12.0, // Clip specifically starting at "Rabbi zidni 'ilma"
    audioEndTime: 16.5,   // Stop right after "ilma"
    repeatTarget: 3,
    source: "Surah Ta-Ha (20:114)",
    grading: "quran",
    sourceRefs: [
      { collection: "Surah Ta-Ha", number: "20:114" }
    ],
    benefit: {
      en: "Direct command from Allah to Prophet Muhammad ﷺ to pray for increase in beneficial knowledge.",
      ur: "اللہ تعالیٰ کا اپنے نبی ﷺ کو دیا گیا حکم کہ علم میں اضافے کی دعا مانگیں۔ طلباء کے لیے بہترین دعا۔"
    },
    translations: {
      en: "My Lord, increase me in knowledge.",
      ur: "اے میرے پروردگار! میرے علم میں اضافہ فرما۔",
      hi: "ऐ मेरे रब! मेरे इल्म में इज़ाफा फरमा।",
      tr: "Rabbim! İlmimi artır.",
      es: "¡Señor mío! Aumenta mi conocimiento.",
      fr: "Seigneur! Accrois mes connaissances.",
      bn: "হে আমার প্রতিপালক! আমার জ্ঞান বৃদ্ধি করে দিন।",
      id: "Ya Tuhanku, tambahkanlah kepadaku ilmu pengetahuan."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "ayat-alkursi",
    category: "morning",
    title: {
      en: "Ayat al-Kursi (Verse of the Throne)",
      ur: "آیۃ الکرسی (حفاظت و برکت کی آیت)",
      ar: "آية الكرسي"
    },
    arabic: "اللَّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyoom. La ta'khudhuhu sinatuw-wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydeehim wa ma khalfahum, wa la yuheetoona bi-shay'im-min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-ard, wa la ya'ooduhu hifdhuhuma, wa Huwal-'Aliyyul-'Adheem.",
    surahInfo: { surah: 2, ayah: 255 },
    repeatTarget: 1,
    source: "Surah Al-Baqarah (2:255)",
    grading: "quran",
    sourceRefs: [
      { collection: "Surah Al-Baqarah", number: "2:255" }
    ],
    benefit: {
      en: "The greatest verse in the Quran. Reciting it in the morning protects from Satan until evening, and after obligatory prayer guarantees Paradise.",
      ur: "قرآن پاک کی سب سے عظمیٰ آیت۔ صبح پڑھنے سے شام تک شیطان سے حفاظت اور فرض نماز کے بعد پڑھنے سے جنت کی بشارت ملتی ہے۔"
    },
    translations: {
      en: "Allah! There is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep...",
      ur: "اللہ! اس کے سوا کوئی معبود نہیں۔ وہ زندہ اور سب کو قائم رکھنے والا ہے۔ نہ اس کو اونگھ آتی ہے نہ نیند...",
      hi: "अल्लाह! उसके सिवा कोई माबूद नहीं, वह जिंदा और सब को संभालने वाला है। न उसे ऊंघ आती है न नींद...",
      tr: "Allah, O'ndan başka ilah yoktur. O, diridir, her şeyi var eden ve yönetendir...",
      es: "¡Allah! No hay más dios que Él, el Viviente, el Sustentador de toda la creación...",
      fr: "Allah! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même...",
      bn: "আল্লাহ্‌! তিনি ছাড়া অন্য কোন ইলাহ নেই, তিনি চিরঞ্জীব, সবকিছুর ধারক...",
      id: "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya)..."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "subhanallah-100",
    category: "morning",
    title: {
      en: "SubhanAllahi wa Bihamdihi (100 Times)",
      ur: "سبحان الله وبحمده (100 مرتبہ)",
      ar: "سبحان الله وبحمده (١٠٠ مرة)"
    },
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "Subhan-Allahi wa bihamdihi",
    repeatTarget: 100,
    source: "Sahih Muslim & Sahih al-Bukhari",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih al-Bukhari", number: "6405" },
      { collection: "Sahih Muslim", number: "2691" }
    ],
    benefit: {
      en: "Reciting 100 times daily wipes away sins even if they were like the foam of the sea.",
      ur: "روزانہ 100 بار پڑھنے سے تمام گناہ معاف کر دیے جاتے ہیں خواہ سمندر کی جھاگ کے برابر ہی کیوں نہ ہوں۔"
    },
    translations: {
      en: "Glory be to Allah and His is the praise.",
      ur: "اللہ پاک ہے اور تمام تعریفیں اسی کے لیے ہیں۔",
      hi: "अल्लाह पाक है और तमाम तारीफें उसी के लिए हैं।",
      tr: "Allah'ı hamd ile tesbih ederim.",
      es: "Glorificado sea Allah y para Él es la alabanza.",
      fr: "Gloire et louange à Allah.",
      bn: "আল্লাহর পবিত্রতা ঘোষণা করছি এবং তাঁর প্রশংসাগান করছি।",
      id: "Maha Suci Allah dan segala puji bagi-Nya."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "protection-dua-3x",
    category: "protection",
    title: {
      en: "Dua for Complete Protection (3 Times)",
      ur: "ہر قسم کی آفت سے حفاظت کی دعا (3 مرتبہ)",
      ar: "دعاء الحماية من كل شر (٣ مرات)"
    },
    arabic: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "Bismillahi alladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Aleem",
    repeatTarget: 3,
    source: "Sunan Abi Dawud & Jami` at-Tirmidhi",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sunan Abi Dawud", number: "5088" },
      { collection: "Jami' at-Tirmidhi", number: "3388" }
    ],
    benefit: {
      en: "Recited 3 times in morning and evening; no sudden affliction or harm will touch the reciter.",
      ur: "صبح و شام 3، 3 بار پڑھنے سے زمین و آسمان کی کوئی چیز نقصان نہیں پہنچا سکتی۔"
    },
    translations: {
      en: "In the Name of Allah with Whose Name nothing can cause harm in the earth nor in the heaven, and He is the All-Hearing, the All-Knowing.",
      ur: "اللہ کے نام سے جس کے نام کی برکت سے زمین اور آسمان کی کوئی چیز نقصان نہیں پہنچا سکتی اور وہ خوب سننے والا، سب کچھ جاننے والا ہے۔",
      hi: "अल्लाह के नाम से जिसके नाम की बरकत से ज़मीन और आसमान की कोई चीज़ नुकसान नहीं पहुंचा सकती।",
      tr: "İsmiyle yerde ve gökte hiçbir şeyin zarar veremeyeceği Allah'ın adıyla. O, hakkıyla işiten ve bilendir.",
      es: "En el nombre de Allah, con Cuyo nombre nada en la tierra ni en los cielos puede causar daño. Él es el Omnioyente, el Omnisciente.",
      fr: "Au nom d'Allah, avec le nom duquel rien ne peut nuire sur la terre ni dans le ciel, et Il est l'Audient, l'Omniscient.",
      bn: "আল্লাহর নামে, যাঁর নামের বরকতে আসমান ও যমীনের কোনো কিছুই ক্ষতি করতে পারে না, আর তিনি সর্বশ্রোতা, সর্বজ্ঞ।",
      id: "Dengan nama Allah yang bila disebut, segala sesuatu di bumi dan di langit tidak akan berbahaya, Dialah Yang Maha Mendengar lagi Maha Mengetahui."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "tasbeeh-fatima",
    category: "salah",
    title: {
      en: "Tasbeeh of Fatimah (After Every Salah)",
      ur: "تسبیح فاطمی (ہر نماز کے بعد)",
      ar: "تسبيح فاطمة الزهراء (بعد كل صلاة)"
    },
    arabic: "سُبْحَانَ اللَّهِ (٣٣) ، اَلْحَمْدُ لِلَّهِ (٣٣) ، اَللَّهُ أَكْبَرُ (٣٤)",
    transliteration: "SubhanAllah (33x), Alhamdulillah (33x), Allahu Akbar (34x)",
    repeatTarget: 100,
    source: "Sahih al-Bukhari & Sahih Muslim",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih Muslim", number: "595" }
    ],
    benefit: {
      en: "Gifted by Prophet Muhammad ﷺ to Lady Fatimah (RA) for strength, spiritual peace, and forgiveness.",
      ur: "نبی کریم ﷺ کا سیدہ فاطمہ رضی اللہ عنہا کو تحفہ، جو تھکاوٹ دور کرتا ہے اور گناہوں کی معافی کا ذریعہ ہے۔"
    },
    translations: {
      en: "Glory be to Allah (33x), Praise be to Allah (33x), Allah is the Greatest (34x). Total: 100.",
      ur: "سبحان اللہ (33 بار)، الحمد للہ (33 بار)، اللہ اکبر (34 بار)۔ کل 100 مرتبہ۔",
      hi: "सुभानअल्लाह (33 बार), अल्हम्दुलिल्लाह (33 बार), अल्लाहू अकबर (34 بار)। कुल 100 बार।",
      tr: "Allah Sübhandır (33), Hamd Allah'adır (33), Allah en büyüktür (34). Total: 100.",
      es: "Glorificado sea Allah (33x), Alabado sea Allah (33x), Allah es el Más Grande (34x). Total: 100.",
      fr: "Gloire à Allah (33x), Louange à Allah (33x), Allah est le Plus Grand (34x). Total: 100.",
      bn: "আল্লাহ পবিত্র (৩৩ বার), সকল প্রশংসা আল্লাহর (৩৩ বার), আল্লাহ সর্বশ্রেষ্ঠ (৩৪ বার)। মোট ১০০ বার।",
      id: "Maha Suci Allah (33x), Segala puji bagi Allah (33x), Allah Maha Besar (34x). Total: 100."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "before-sleep",
    category: "daily",
    title: {
      en: "Dua Before Sleeping",
      ur: "سونے کی دعا",
      ar: "دعاء النوم"
    },
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amootu wa ahya",
    repeatTarget: 1,
    source: "Sahih al-Bukhari",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih al-Bukhari", number: "6324" }
    ],
    benefit: {
      en: "Entrusting your soul and life to Allah before sleeping.",
      ur: "سونے سے پہلے اپنی روح اور زندگی کو اللہ کے سپرد کرنے کی دعا۔"
    },
    translations: {
      en: "In Your name, O Allah, I die and I live.",
      ur: "اے اللہ! میں تیرے نام کے ساتھ ہی مرتا (سوتا) ہوں اور جیتا (جاگتا) ہوں۔",
      hi: "ऐ अल्लाह! मैं तेरे नाम के साथ ही मरता (सोता) हूं और जीता (जागता) हूं।",
      tr: "Allah'ım! Senin isminle ölür ve senin isminle dirilirim (uyur ve uyanırım).",
      es: "En Tu nombre, oh Allah, muero y vivo.",
      fr: "En Ton nom, ô Allah, je meurs et je vis.",
      bn: "হে আল্লাহ! আপনার নাম নিয়ে আমি মৃত্যুবরণ করছি (ঘুমাচ্ছি) এবং জীবিত হচ্ছি (জাগ্রত হচ্ছি)।",
      id: "Dengan nama-Mu ya Allah, aku mati dan aku hidup."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  },
  {
    id: "waking-up",
    category: "daily",
    title: {
      en: "Dua Upon Waking Up",
      ur: "بیدار ہونے کی دعا",
      ar: "دعاء الاستيقاظ من النوم"
    },
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilaihin-nushoor",
    repeatTarget: 1,
    source: "Sahih al-Bukhari",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih al-Bukhari", number: "6312" }
    ],
    benefit: {
      en: "Expressing gratitude to Allah for returning our soul after sleep.",
      ur: "نیند کے بعد نئی زندگی عطا کرنے پر اللہ تعالیٰ کا شکر ادا کرنا۔"
    },
    translations: {
      en: "All praise is due to Allah Who gave us life after giving us death, and unto Him is the resurrection.",
      ur: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں مارنے کے بعد زندہ کیا اور اسی کی طرف لوٹ کر جانا ہے۔",
      hi: "तमाम तारीफें अल्लाह के लिए हैं जिसने हमें सुलाने के बाद जगाया और उसी की तरफ लौट कर जाना है।",
      tr: "Bizi öldürdükten sonra dirilten Allah'a hamdolsun. Dönüş ancak O'nadır.",
      es: "Alabado sea Allah, Quien nos dio la vida después de habernos hecho morir, y a Él es la resurrección.",
      fr: "Louange à Allah qui nous a rendus à la vie après nous avoir fait mourir, et c'est vers Lui qu'est la résurrection.",
      bn: "সমস্ত প্রশংসা আল্লাহর জন্য, যিনি আমাদের মৃত্যুর (ঘুমের) পর জীবিত করলেন এবং তাঁর দিকেই আমাদের ফিরে যেতে হবে।",
      id: "Segala puji bagi Allah yang telah menghidupkan kami sesudah mematikan kami dan hanya kepada-Nya kami dikembalikan."
    },
    translationStatus: {
      en: "unreviewed",
      ur: "unreviewed",
      hi: "unreviewed",
      tr: "unreviewed",
      es: "unreviewed",
      fr: "unreviewed",
      bn: "unreviewed",
      id: "unreviewed"
    }
  }
];
