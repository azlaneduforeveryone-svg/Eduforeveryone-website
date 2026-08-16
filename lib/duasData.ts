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
  { id: "rabbana", titleEn: "Rabbana Duas", titleUr: "ربنا دعائیں", titleAr: "أدعية ربنا", icon: "🤲" },
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
  },

  // EVENING AZKAR
  {
    id: "evening-amsayna-mulk",
    category: "evening",
    title: {
      en: "Evening Remembrance: We Have Entered the Evening",
      ur: "شام کا ذکر: ہم نے شام کی",
      ar: "ذكر المساء: أمسينا وأمسى الملك لله"
    },
    arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    transliteration: "Amsayna wa amsal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in Qadeer. Rabbi as'aluka khayra ma fi hadhihil-laylati wa khayra ma ba'daha, wa a'udhu bika min sharri ma fi hadhihil-laylati wa sharri ma ba'daha. Rabbi a'udhu bika minal-kasali wa soo'il-kibar. Rabbi a'udhu bika min 'adhabin fin-nari wa 'adhabin fil-qabr",
    repeatTarget: 1,
    source: "Sahih Muslim 2723",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih Muslim", number: "2723" }
    ],
    benefit: {
      en: "The Prophet ﷺ taught this as the opening remembrance of the evening. It hands the coming night over to Allah, asks for its good, and seeks refuge from laziness, frail old age, and punishment in the Fire and the grave.",
      ur: "نبی کریم ﷺ نے شام کے اذکار کی ابتدا اسی سے سکھائی۔ اس میں آنے والی رات کو اللہ کے سپرد کیا جاتا ہے، اس کی بھلائی مانگی جاتی ہے، اور سستی، بڑھاپے کی خرابی اور آگ و قبر کے عذاب سے پناہ طلب کی جاتی ہے۔"
    },
    translations: {
      en: "We have entered the evening and the dominion belongs to Allah, and all praise is for Allah. There is no god but Allah alone, with no partner. His is the dominion and His is the praise, and He has power over all things. My Lord, I ask You for the good of this night and the good of what follows it, and I seek refuge in You from the evil of this night and the evil of what follows it. My Lord, I seek refuge in You from laziness and the misery of old age. My Lord, I seek refuge in You from punishment in the Fire and punishment in the grave.",
      ur: "ہم نے شام کی اور تمام بادشاہی اللہ کی ہو گئی، اور سب تعریف اللہ ہی کے لیے ہے۔ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں۔ اسی کی بادشاہی ہے اور اسی کے لیے تعریف ہے، اور وہ ہر چیز پر قادر ہے۔ اے میرے رب! میں تجھ سے اس رات کی بھلائی اور اس کے بعد کی بھلائی مانگتا ہوں، اور اس رات کے شر اور اس کے بعد کے شر سے تیری پناہ چاہتا ہوں۔ اے میرے رب! میں سستی اور بڑھاپے کی خرابی سے تیری پناہ چاہتا ہوں۔ اے میرے رب! میں آگ کے عذاب اور قبر کے عذاب سے تیری پناہ چاہتا ہوں۔",
      hi: "हमने शाम की और सारी बादशाही अल्लाह की हो गई, और सारी तारीफ़ अल्लाह ही के लिए है। अल्लाह के सिवा कोई माबूद नहीं, वह अकेला है, उसका कोई शरीक नहीं। उसी की बादशाही है और उसी के लिए तारीफ़ है, और वह हर चीज़ पर क़ुदरत रखता है। ऐ मेरे रब! मैं तुझसे इस रात की भलाई और इसके बाद की भलाई माँगता हूँ, और इस रात के शर और इसके बाद के शर से तेरी पनाह चाहता हूँ। ऐ मेरे रब! मैं सुस्ती और बुढ़ापे की ख़राबी से तेरी पनाह चाहता हूँ। ऐ मेरे रब! मैं आग के अज़ाब और क़ब्र के अज़ाब से तेरी पनाह चाहता हूँ।",
      tr: "Akşama erdik ve mülk Allah'a ait olarak akşama erdi. Hamd Allah'a mahsustur. Allah'tan başka ilah yoktur, O tektir, ortağı yoktur. Mülk O'nundur, hamd O'nadır ve O her şeye kadirdir. Rabbim! Senden bu gecenin hayrını ve ondan sonrasının hayrını dilerim, bu gecenin şerrinden ve ondan sonrasının şerrinden Sana sığınırım. Rabbim! Tembellikten ve ihtiyarlığın kötülüğünden Sana sığınırım. Rabbim! Ateş azabından ve kabir azabından Sana sığınırım.",
      es: "Hemos llegado a la tarde y el dominio ha llegado a la tarde perteneciendo a Allah, y toda alabanza es para Allah. No hay dios sino Allah, solo, sin asociado. Suyo es el dominio y Suya es la alabanza, y Él tiene poder sobre todas las cosas. Señor mío, Te pido el bien de esta noche y el bien de lo que viene después, y me refugio en Ti del mal de esta noche y del mal de lo que viene después. Señor mío, me refugio en Ti de la pereza y de la miseria de la vejez. Señor mío, me refugio en Ti del castigo del Fuego y del castigo de la tumba.",
      fr: "Nous voici au soir et la royauté appartient à Allah, et toute louange est à Allah. Il n'y a de divinité qu'Allah, Seul, sans associé. À Lui la royauté et à Lui la louange, et Il est capable de toute chose. Seigneur, je Te demande le bien de cette nuit et le bien de ce qui la suit, et je cherche refuge auprès de Toi contre le mal de cette nuit et le mal de ce qui la suit. Seigneur, je cherche refuge auprès de Toi contre la paresse et la misère de la vieillesse. Seigneur, je cherche refuge auprès de Toi contre le châtiment du Feu et le châtiment de la tombe.",
      bn: "আমরা সন্ধ্যায় উপনীত হলাম এবং সমস্ত রাজত্ব আল্লাহর জন্য সন্ধ্যায় উপনীত হলো, আর সমস্ত প্রশংসা আল্লাহর। আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একক, তাঁর কোনো শরিক নেই। রাজত্ব তাঁরই এবং প্রশংসা তাঁরই, আর তিনি সর্ববিষয়ে ক্ষমতাবান। হে আমার রব! আমি আপনার কাছে এই রাতের কল্যাণ ও এর পরবর্তী কল্যাণ প্রার্থনা করি, এবং এই রাতের অনিষ্ট ও এর পরবর্তী অনিষ্ট থেকে আপনার আশ্রয় চাই। হে আমার রব! আমি অলসতা ও বার্ধক্যের মন্দ অবস্থা থেকে আপনার আশ্রয় চাই। হে আমার রব! আমি জাহান্নামের শাস্তি ও কবরের শাস্তি থেকে আপনার আশ্রয় চাই।",
      id: "Kami memasuki waktu sore dan kerajaan hanya milik Allah, dan segala puji bagi Allah. Tidak ada tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan bagi-Nya segala puji, dan Dia Mahakuasa atas segala sesuatu. Ya Tuhanku, aku memohon kepada-Mu kebaikan malam ini dan kebaikan sesudahnya, dan aku berlindung kepada-Mu dari keburukan malam ini dan keburukan sesudahnya. Ya Tuhanku, aku berlindung kepada-Mu dari kemalasan dan buruknya usia tua. Ya Tuhanku, aku berlindung kepada-Mu dari siksa neraka dan siksa kubur."
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
    id: "evening-bika-amsayna",
    category: "evening",
    title: {
      en: "By You We Enter the Evening",
      ur: "تیرے ہی نام سے ہم نے شام کی",
      ar: "اللهم بك أمسينا"
    },
    arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
    transliteration: "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namootu, wa ilaykal-maseer",
    repeatTarget: 1,
    source: "Sunan Abi Dawud 5068; Jami' at-Tirmidhi 3391",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sunan Abi Dawud", number: "5068" },
      { collection: "Jami' at-Tirmidhi", number: "3391" }
    ],
    benefit: {
      en: "A short evening remembrance affirming that every state of the servant, waking, living and dying, is by Allah's will, and that the final return is to Him alone.",
      ur: "شام کا مختصر ذکر جس میں اقرار ہے کہ بندے کی ہر حالت، صبح و شام، زندگی اور موت، اللہ ہی کے حکم سے ہے اور آخر لوٹنا اسی کی طرف ہے۔"
    },
    translations: {
      en: "O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the final return.",
      ur: "اے اللہ! تیرے ہی نام سے ہم نے شام کی اور تیرے ہی نام سے صبح کی، تیرے ہی حکم سے ہم جیتے ہیں اور تیرے ہی حکم سے مرتے ہیں، اور تیری ہی طرف لوٹ کر جانا ہے۔",
      hi: "ऐ अल्लाह! तेरे ही नाम से हमने शाम की और तेरे ही नाम से सुबह की, तेरे ही हुक्म से हम जीते हैं और तेरे ही हुक्म से मरते हैं, और तेरी ही तरफ़ लौटना है।",
      tr: "Allah'ım! Seninle akşama erdik, Seninle sabaha erdik, Seninle yaşar, Seninle ölürüz ve dönüş ancak Sanadır.",
      es: "Oh Allah, por Ti llegamos a la tarde y por Ti llegamos a la mañana, por Ti vivimos y por Ti morimos, y hacia Ti es el retorno final.",
      fr: "Ô Allah, c'est par Toi que nous atteignons le soir et par Toi que nous atteignons le matin, par Toi nous vivons et par Toi nous mourons, et c'est vers Toi qu'est le retour final.",
      bn: "হে আল্লাহ! আপনারই সাহায্যে আমরা সন্ধ্যায় উপনীত হলাম এবং আপনারই সাহায্যে সকালে উপনীত হই, আপনারই ইচ্ছায় আমরা বাঁচি ও মরি, আর আপনার দিকেই প্রত্যাবর্তন।",
      id: "Ya Allah, dengan-Mu kami memasuki waktu sore dan dengan-Mu kami memasuki waktu pagi, dengan-Mu kami hidup dan dengan-Mu kami mati, dan kepada-Mu tempat kembali."
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
    id: "evening-fitrah-islam",
    category: "evening",
    title: {
      en: "Entering Evening Upon the Fitrah of Islam",
      ur: "شام فطرتِ اسلام پر کرنا",
      ar: "أمسينا على فطرة الإسلام"
    },
    arabic: "أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
    transliteration: "Amsayna 'ala fitratil-Islam, wa 'ala kalimatil-ikhlas, wa 'ala deeni Nabiyyina Muhammadin sallallahu 'alayhi wa sallam, wa 'ala millati abeena Ibraheema haneefan Musliman wa ma kana minal-mushrikeen",
    repeatTarget: 1,
    source: "Musnad Ahmad 3/406-407",
    grading: "hasan",
    sourceRefs: [
      { collection: "Musnad Ahmad", number: "3/406-407" }
    ],
    benefit: {
      en: "A renewal of one's covenant with Allah at nightfall, reaffirming pure monotheism and the way of Ibrahim and Muhammad ﷺ before sleep.",
      ur: "شام کے وقت اللہ سے اپنے عہد کی تجدید، سونے سے پہلے خالص توحید اور ابراہیم و محمد ﷺ کے دین پر ثابت قدمی کا اعادہ۔"
    },
    translations: {
      en: "We have entered the evening upon the natural way of Islam, upon the word of sincere devotion, upon the religion of our Prophet Muhammad, may Allah's peace and blessings be upon him, and upon the creed of our father Ibrahim, who was upright, a Muslim, and was not among those who associate partners with Allah.",
      ur: "ہم نے شام کی فطرتِ اسلام پر، کلمۂ اخلاص پر، اپنے نبی محمد ﷺ کے دین پر، اور اپنے باپ ابراہیم کی ملت پر جو یکسو اور مسلم تھے اور مشرکوں میں سے نہ تھے۔",
      hi: "हमने शाम की फ़ितरत-ए-इस्लाम पर, कलिमा-ए-إخلاص पर, अपने नبی मुहम्मद ﷺ के दीन पर, और अपने बाप इब्राहीम की मिल्लत पर जो एकनिष्ठ और मुस्लिम थे और मुशरिकों में से न थे।",
      tr: "İslam fıtratı üzere, ihlas kelimesi üzere, Peygamberimiz Muhammed'in dini üzere ve babamız İbrahim'in dosdoğru, Müslüman ve müşriklerden olmayan milleti üzere akşama erdik.",
      es: "Hemos llegado a la tarde sobre la naturaleza primordial del Islam, sobre la palabra de sinceridad, sobre la religión de nuestro Profeta Muhammad, y sobre el credo de nuestro padre Ibrahim, que fue recto, musulmán, y no fue de los que asocian.",
      fr: "Nous voici au soir sur la nature originelle de l'Islam, sur la parole de sincérité, sur la religion de notre Prophète Muhammad, et sur la voie de notre père Ibrahim, qui était droit, soumis, et n'était pas du nombre des associateurs.",
      bn: "আমরা সন্ধ্যায় উপনীত হলাম ইসলামের ফিতরাতের উপর, ইখলাসের কালিমার উপর, আমাদের নবী মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের দ্বীনের উপর, এবং আমাদের পিতা ইবরাহীমের মিল্লাতের উপর, যিনি ছিলেন একনিষ্ঠ মুসলিম এবং মুশরিকদের অন্তর্ভুক্ত ছিলেন না।",
      id: "Kami memasuki waktu sore di atas fitrah Islam, di atas kalimat keikhlasan, di atas agama Nabi kami Muhammad shallallahu alaihi wa sallam, dan di atas millah bapak kami Ibrahim yang lurus lagi berserah diri, dan beliau bukanlah termasuk orang-orang musyrik."
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
    id: "evening-audhu-kalimat-3x",
    category: "evening",
    title: {
      en: "Refuge in the Perfect Words of Allah",
      ur: "اللہ کے مکمل کلمات کی پناہ",
      ar: "أعوذ بكلمات الله التامات"
    },
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'udhu bikalimatillahit-tammati min sharri ma khalaq",
    repeatTarget: 3,
    source: "Sahih Muslim 2709",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih Muslim", number: "2709" }
    ],
    benefit: {
      en: "Whoever says this three times in the evening will not be harmed by anything that stings or bites until morning, as reported from the Prophet ﷺ.",
      ur: "جو شخص شام کو تین بار یہ پڑھ لے، صبح تک اسے کوئی ڈسنے یا کاٹنے والی چیز نقصان نہیں پہنچا سکتی، جیسا کہ نبی ﷺ سے مروی ہے۔"
    },
    translations: {
      en: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
      ur: "میں اللہ کے مکمل کلمات کے ذریعے ہر اس چیز کے شر سے پناہ مانگتا ہوں جو اس نے پیدا کی۔",
      hi: "मैं अल्लाह के मुकम्मल कलिमात के ज़रिए हर उस चीज़ के शर से پناہ माँगता हूँ जो उसने पैदा की।",
      tr: "Yarattığı şeylerin şerrinden Allah'ın eksiksiz kelimelerine sığınırım.",
      es: "Me refugio en las palabras perfectas de Allah del mal de lo que Él ha creado.",
      fr: "Je cherche refuge dans les paroles parfaites d'Allah contre le mal de ce qu'Il a créé.",
      bn: "আমি আল্লাহর পরিপূর্ণ কালিমাসমূহের আশ্রয় চাই তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে।",
      id: "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari keburukan apa yang Dia ciptakan."
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

  // MORNING AZKAR
  {
    id: "morning-asbahna-mulk",
    category: "morning",
    title: {
      en: "Morning Remembrance: We Have Entered the Morning",
      ur: "صبح کا ذکر: ہم نے صبح کی",
      ar: "ذكر الصباح: أصبحنا وأصبح الملك لله"
    },
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    transliteration: "Asbahna wa asbahal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in Qadeer. Rabbi as'aluka khayra ma fi hadhal-yawmi wa khayra ma ba'dah, wa a'udhu bika min sharri ma fi hadhal-yawmi wa sharri ma ba'dah. Rabbi a'udhu bika minal-kasali wa soo'il-kibar. Rabbi a'udhu bika min 'adhabin fin-nari wa 'adhabin fil-qabr",
    repeatTarget: 1,
    source: "Sahih Muslim 2723",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih Muslim", number: "2723" }
    ],
    benefit: {
      en: "The opening remembrance of the day. It places the whole day under Allah's ownership, asks for its good, and seeks refuge from its evil and from punishment in the Fire and the grave.",
      ur: "دن کا ابتدائی ذکر۔ اس میں پورا دن اللہ کی ملکیت میں دیا جاتا ہے، اس کی بھلائی مانگی جاتی ہے، اور اس کے شر اور آگ و قبر کے عذاب سے پناہ طلب کی جاتی ہے۔"
    },
    translations: {
      en: "We have entered the morning and the dominion belongs to Allah, and all praise is for Allah. There is no god but Allah alone, with no partner. His is the dominion and His is the praise, and He has power over all things. My Lord, I ask You for the good of this day and the good of what follows it, and I seek refuge in You from the evil of this day and the evil of what follows it. My Lord, I seek refuge in You from laziness and the misery of old age. My Lord, I seek refuge in You from punishment in the Fire and punishment in the grave.",
      ur: "ہم نے صبح کی اور تمام بادشاہی اللہ کی ہو گئی، اور سب تعریف اللہ ہی کے لیے ہے۔ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں۔ اسی کی بادشاہی ہے اور اسی کے لیے تعریف ہے، اور وہ ہر چیز پر قادر ہے۔ اے میرے رب! میں تجھ سے اس دن کی بھلائی اور اس کے بعد کی بھلائی مانگتا ہوں، اور اس دن کے شر اور اس کے بعد کے شر سے تیری پناہ چاہتا ہوں۔ اے میرے رب! میں سستی اور بڑھاپے کی خرابی سے تیری پناہ چاہتا ہوں۔ اے میرے رب! میں آگ کے عذاب اور قبر کے عذاب سے تیری پناہ چاہتا ہوں۔",
      hi: "हमने सुबह की और सारी बादशाही अल्लाह की हो गई, और सारी तारीफ़ अल्लाह ही के लिए है। अल्लाह के सिवा कोई माबूद नहीं, वह अकेला है, उसका कोई शरीक नहीं। उसी की बादशाही है और उसी के लिए तारीफ़ है, और वह हर चीज़ पर क़ुदरत रखता है। ऐ मेरे रब! मैं तुझसे इस दिन की भलाई और इसके बाद की भलाई माँगता हूँ, और इस दिन के शर और इसके बाद के शर से तेरी पनाह चाहता हूँ। ऐ मेरे रब! मैं सुस्ती और बुढ़ापे की ख़राबी से तेरी पनाह चाहता हूँ। ऐ मेरे रब! मैं आग के अज़ाब और क़ब्र के अज़ाब से तेरी पनाह चाहता हूँ।",
      tr: "Sabaha erdik ve mülk Allah'a ait olarak sabaha erdi. Hamd Allah'a mahsustur. Allah'tan başka ilah yoktur, O tektir, ortağı yoktur. Mülk O'nundur, hamd O'nadır ve O her şeye kadirdir. Rabbim! Senden bu günün hayrını ve ondan sonrasının hayrını dilerim, bu günün şerrinden ve ondan sonrasının şerrinden Sana sığınırım. Rabbim! Tembellikten ve ihtiyarlığın kötülüğünden Sana sığınırım. Rabbim! Ateş azabından ve kabir azabından Sana sığınırım.",
      es: "Hemos amanecido y el dominio ha amanecido perteneciendo a Allah, y toda alabanza es para Allah. No hay dios sino Allah, solo, sin asociado. Suyo es el dominio y Suya es la alabanza, y Él tiene poder sobre todas las cosas. Señor mío, Te pido el bien de este día y el bien de lo que viene después, y me refugio en Ti del mal de este día y del mal de lo que viene después. Señor mío, me refugio en Ti de la pereza y de la miseria de la vejez. Señor mío, me refugio en Ti del castigo del Fuego y del castigo de la tumba.",
      fr: "Nous voici au matin et la royauté appartient à Allah, et toute louange est à Allah. Il n'y a de divinité qu'Allah, Seul, sans associé. À Lui la royauté et à Lui la louange, et Il est capable de toute chose. Seigneur, je Te demande le bien de ce jour et le bien de ce qui le suit, et je cherche refuge auprès de Toi contre le mal de ce jour et le mal de ce qui le suit. Seigneur, je cherche refuge auprès de Toi contre la paresse et la misère de la vieillesse. Seigneur, je cherche refuge auprès de Toi contre le châtiment du Feu et le châtiment de la tombe.",
      bn: "আমরা সকালে উপনীত হলাম এবং সমস্ত রাজত্ব আল্লাহর জন্য সকালে উপনীত হলো, আর সমস্ত প্রশংসা আল্লাহর। আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একক, তাঁর কোনো শরিক নেই। রাজত্ব তাঁরই এবং প্রশংসা তাঁরই, আর তিনি সর্ববিষয়ে ক্ষমতাবান। হে আমার রব! আমি আপনার কাছে এই দিনের কল্যাণ ও এর পরবর্তী কল্যাণ প্রার্থনা করি, এবং এই দিনের অনিষ্ট ও এর পরবর্তী অনিষ্ট থেকে আপনার আশ্রয় চাই। হে আমার রব! আমি অলসতা ও বার্ধক্যের মন্দ অবস্থা থেকে আপনার আশ্রয় চাই। হে আমার রব! আমি জাহান্নামের শাস্তি ও কবরের শাস্তি থেকে আপনার আশ্রয় চাই।",
      id: "Kami memasuki waktu pagi dan kerajaan hanya milik Allah, dan segala puji bagi Allah. Tidak ada tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan bagi-Nya segala puji, dan Dia Mahakuasa atas segala sesuatu. Ya Tuhanku, aku memohon kepada-Mu kebaikan hari ini dan kebaikan sesudahnya, dan aku berlindung kepada-Mu dari keburukan hari ini dan keburukan sesudahnya. Ya Tuhanku, aku berlindung kepada-Mu dari kemalasan dan buruknya usia tua. Ya Tuhanku, aku berlindung kepada-Mu dari siksa neraka dan siksa kubur."
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
    id: "morning-bika-asbahna",
    category: "morning",
    title: {
      en: "By You We Enter the Morning",
      ur: "تیرے ہی نام سے ہم نے صبح کی",
      ar: "اللهم بك أصبحنا"
    },
    arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
    transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namootu, wa ilaykan-nushoor",
    repeatTarget: 1,
    source: "Sunan Abi Dawud 5068; Jami' at-Tirmidhi 3391",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sunan Abi Dawud", number: "5068" },
      { collection: "Jami' at-Tirmidhi", number: "3391" }
    ],
    benefit: {
      en: "A brief morning acknowledgement that life, death and the resurrection all rest in Allah's hand, setting the tone for the day ahead.",
      ur: "صبح کا مختصر اقرار کہ زندگی، موت اور دوبارہ اٹھایا جانا سب اللہ کے ہاتھ میں ہے، جو پورے دن کا رخ متعین کر دیتا ہے۔"
    },
    translations: {
      en: "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection.",
      ur: "اے اللہ! تیرے ہی نام سے ہم نے صبح کی اور تیرے ہی نام سے شام کی، تیرے ہی حکم سے ہم جیتے ہیں اور تیرے ہی حکم سے مرتے ہیں، اور تیری ہی طرف دوبارہ اٹھایا جانا ہے۔",
      hi: "ऐ अल्लाह! तेरे ही नाम से हमने सुबह की और तेरे ही नाम से शाम की, तेरे ही हुक्म से हम जीते हैं और तेरे ही हुक्म से मरते हैं، और तेरी ही तरफ़ दोबारा उठाया जाना है।",
      tr: "Allah'ım! Seninle sabaha erdik, Seninle akşama erdik, Seninle yaşar, Seninle ölürüz ve diriliş ancak Sanadır.",
      es: "Oh Allah, por Ti llegamos a la mañana y por Ti llegamos a la tarde, por Ti vivimos y por Ti morimos, y hacia Ti es la resurrección.",
      fr: "Ô Allah, c'est par Toi que nous atteignons le matin et par Toi que nous atteignons le soir, par Toi nous vivons et par Toi nous mourons, et c'est vers Toi qu'est la résurrection.",
      bn: "হে আল্লাহ! আপনারই সাহায্যে আমরা সকালে উপনীত হলাম এবং আপনারই সাহায্যে সন্ধ্যায় উপনীত হই, আপনারই ইচ্ছায় আমরা বাঁচি ও মরি, আর আপনার দিকেই পুনরুত্থান।",
      id: "Ya Allah, dengan-Mu kami memasuki waktu pagi dan dengan-Mu kami memasuki waktu sore, dengan-Mu kami hidup dan dengan-Mu kami mati, dan kepada-Mu tempat kebangkitan."
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
    id: "morning-fitrah-islam",
    category: "morning",
    title: {
      en: "Entering Morning Upon the Fitrah of Islam",
      ur: "صبح فطرتِ اسلام پر کرنا",
      ar: "أصبحنا على فطرة الإسلام"
    },
    arabic: "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
    transliteration: "Asbahna 'ala fitratil-Islam, wa 'ala kalimatil-ikhlas, wa 'ala deeni Nabiyyina Muhammadin sallallahu 'alayhi wa sallam, wa 'ala millati abeena Ibraheema haneefan Musliman wa ma kana minal-mushrikeen",
    repeatTarget: 1,
    source: "Musnad Ahmad 3/406-407",
    grading: "hasan",
    sourceRefs: [
      { collection: "Musnad Ahmad", number: "3/406-407" }
    ],
    benefit: {
      en: "Begins the day by consciously renewing one's attachment to pure monotheism and the path of the Prophets, before the day's distractions take hold.",
      ur: "دن کا آغاز شعوری طور پر خالص توحید اور انبیاء کے راستے سے تعلق کی تجدید کے ساتھ، اس سے پہلے کہ دن کی مصروفیات غالب آ جائیں۔"
    },
    translations: {
      en: "We have entered the morning upon the natural way of Islam, upon the word of sincere devotion, upon the religion of our Prophet Muhammad, may Allah's peace and blessings be upon him, and upon the creed of our father Ibrahim, who was upright, a Muslim, and was not among those who associate partners with Allah.",
      ur: "ہم نے صبح کی فطرتِ اسلام پر، کلمۂ اخلاص پر، اپنے نبی محمد ﷺ کے دین پر، اور اپنے باپ ابراہیم کی ملت پر جو یکسو اور مسلم تھے اور مشرکوں میں سے نہ تھے۔",
      hi: "हमने सुबह की फ़ितरत-ए-इस्लाम पर, कलिमा-ए-إخلاص पर, अपने नबी मुहम्मद ﷺ के दीन पर, और अपने बाप इब्राहीम की मिल्लत पर जो एकनिष्ठ और मुस्लिम थे और मुशरिकों में से न थे।",
      tr: "İslam fıtratı üzere, ihlas kelimesi üzere, Peygamberimiz Muhammed'in dini üzere ve babamız İbrahim'in dosdoğru, Müslüman ve müşriklerden olmayan milleti üzere sabaha erdik.",
      es: "Hemos amanecido sobre la naturaleza primordial del Islam, sobre la palabra de sinceridad, sobre la religión de nuestro Profeta Muhammad, y sobre el credo de nuestro padre Ibrahim, que fue recto, musulmán, y no fue de los que asocian.",
      fr: "Nous voici au matin sur la nature originelle de l'Islam, sur la parole de sincérité, sur la religion de notre Prophète Muhammad, et sur la voie de notre père Ibrahim, qui était droit, soumis, et n'était pas du nombre des associateurs.",
      bn: "আমরা সকালে উপনীত হলাম ইসলামের ফিতরাতের উপর, ইখলাসের কালিমার উপর, আমাদের নবী মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের দ্বীনের উপর, এবং আমাদের পিতা ইবরাহীমের মিল্লাতের উপর, যিনি ছিলেন একনিষ্ঠ মুসলিম এবং মুশরিকদের অন্তর্ভুক্ত ছিলেন না।",
      id: "Kami memasuki waktu pagi di atas fitrah Islam, di atas kalimat keikhlasan, di atas agama Nabi kami Muhammad shallallahu alaihi wa sallam, dan di atas millah bapak kami Ibrahim yang lurus lagi berserah diri, dan beliau bukanlah termasuk orang-orang musyrik."
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
    id: "morning-radeetu-billah-3x",
    category: "morning",
    title: {
      en: "I Am Pleased With Allah as My Lord",
      ur: "میں اللہ کے رب ہونے پر راضی ہوں",
      ar: "رضيت بالله ربا"
    },
    arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
    transliteration: "Radeetu billahi Rabban, wa bil-Islami deenan, wa bi-Muhammadin sallallahu 'alayhi wa sallama nabiyya",
    repeatTarget: 3,
    source: "Sunan Abi Dawud 5072; Jami' at-Tirmidhi 3389",
    grading: "hasan",
    sourceRefs: [
      { collection: "Sunan Abi Dawud", number: "5072" },
      { collection: "Jami' at-Tirmidhi", number: "3389" }
    ],
    benefit: {
      en: "The Prophet ﷺ said that whoever says this three times in the morning and three times in the evening, it is a right upon Allah to please him on the Day of Resurrection.",
      ur: "نبی ﷺ نے فرمایا کہ جو شخص صبح تین بار اور شام تین بار یہ کہے، اللہ پر حق ہے کہ قیامت کے دن اسے راضی کر دے۔"
    },
    translations: {
      en: "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad, may Allah's peace and blessings be upon him, as my Prophet.",
      ur: "میں اللہ کے رب ہونے پر، اسلام کے دین ہونے پر، اور محمد ﷺ کے نبی ہونے پر راضی ہوں۔",
      hi: "मैं अल्लाह के रब होने पर, इस्लाम के दीन होने पर, और मुहम्मद ﷺ के नबी होने पर राज़ी हूँ।",
      tr: "Rab olarak Allah'tan, din olarak İslam'dan ve peygamber olarak Muhammed'den razı oldum.",
      es: "Estoy complacido con Allah como mi Señor, con el Islam como mi religión, y con Muhammad como mi Profeta.",
      fr: "Je suis satisfait d'Allah comme Seigneur, de l'Islam comme religion, et de Muhammad comme Prophète.",
      bn: "আমি আল্লাহকে রব হিসেবে, ইসলামকে দ্বীন হিসেবে এবং মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লামকে নবী হিসেবে পেয়ে সন্তুষ্ট।",
      id: "Aku rida Allah sebagai Tuhanku, Islam sebagai agamaku, dan Muhammad shallallahu alaihi wa sallam sebagai nabiku."
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

  // AFTER SALAH
  {
    id: "salah-astaghfirullah-3x",
    category: "salah",
    title: {
      en: "Seeking Forgiveness Immediately After Prayer",
      ur: "نماز کے فوراً بعد استغفار",
      ar: "الاستغفار بعد الصلاة"
    },
    arabic: "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ. اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    transliteration: "Astaghfirullah, Astaghfirullah, Astaghfirullah. Allahumma antas-Salamu wa minkas-salam, tabarakta ya Dhal-Jalali wal-Ikram",
    repeatTarget: 1,
    source: "Sahih Muslim 591",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih Muslim", number: "591" }
    ],
    benefit: {
      en: "The first thing the Prophet ﷺ said after concluding the prayer. It covers any shortcoming in the prayer just performed and praises Allah as the Source of all peace.",
      ur: "نبی ﷺ نماز سے فارغ ہو کر سب سے پہلے یہی پڑھتے تھے۔ اس میں ابھی ادا کی گئی نماز کی کوتاہیوں کا ازالہ اور اللہ کی سلامتی والی صفت کی تعریف ہے۔"
    },
    translations: {
      en: "I seek Allah's forgiveness, I seek Allah's forgiveness, I seek Allah's forgiveness. O Allah, You are Peace and from You comes peace. Blessed are You, O Possessor of Majesty and Honour.",
      ur: "میں اللہ سے بخشش مانگتا ہوں، میں اللہ سے بخشش مانگتا ہوں، میں اللہ سے بخشش مانگتا ہوں۔ اے اللہ! تو ہی سلامتی والا ہے اور تجھی سے سلامتی ہے، تو بابرکت ہے اے جلال اور بزرگی والے۔",
      hi: "मैं अल्लाह से माफ़ी माँगता हूँ, मैं अल्लाह से माफ़ी माँगता हूँ, मैं अल्लाह से माफ़ी माँगता हूँ। ऐ अल्लाह! तू ही सलामती वाला है और तुझी से सलामती है, तू बरकत वाला है ऐ जलाल और बुज़ुर्गी वाले।",
      tr: "Allah'tan bağışlanma dilerim, Allah'tan bağışlanma dilerim, Allah'tan bağışlanma dilerim. Allah'ım! Selam Sensin, selamet Sendendir. Ey celal ve ikram sahibi, Sen yücesin.",
      es: "Pido perdón a Allah, pido perdón a Allah, pido perdón a Allah. Oh Allah, Tú eres la Paz y de Ti proviene la paz. Bendito eres, oh Poseedor de Majestad y Honor.",
      fr: "Je demande pardon à Allah, je demande pardon à Allah, je demande pardon à Allah. Ô Allah, Tu es la Paix et de Toi vient la paix. Béni sois-Tu, ô Détenteur de la Majesté et de la Générosité.",
      bn: "আমি আল্লাহর কাছে ক্ষমা চাই, আমি আল্লাহর কাছে ক্ষমা চাই, আমি আল্লাহর কাছে ক্ষমা চাই। হে আল্লাহ! আপনিই শান্তি এবং আপনার কাছ থেকেই শান্তি আসে। আপনি বরকতময়, হে মহিমা ও সম্মানের অধিকারী।",
      id: "Aku memohon ampun kepada Allah, aku memohon ampun kepada Allah, aku memohon ampun kepada Allah. Ya Allah, Engkau Mahasejahtera dan dari-Mu kesejahteraan. Mahaberkah Engkau, wahai Pemilik Keagungan dan Kemuliaan."
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
    id: "salah-la-ilaha-illallah-wahdah",
    category: "salah",
    title: {
      en: "Tahleel After Every Obligatory Prayer",
      ur: "ہر فرض نماز کے بعد تہلیل",
      ar: "التهليل بعد كل صلاة مكتوبة"
    },
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
    transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in Qadeer. Allahumma la mani'a lima a'tayta, wa la mu'tiya lima mana'ta, wa la yanfa'u dhal-jaddi minkal-jadd",
    repeatTarget: 1,
    source: "Sahih al-Bukhari 844; Sahih Muslim 593",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih al-Bukhari", number: "844" },
      { collection: "Sahih Muslim", number: "593" }
    ],
    benefit: {
      en: "Recited after every obligatory prayer. It affirms Allah's sole ownership of giving and withholding, and reminds the worshipper that no wealth or status can benefit anyone against Allah's decree.",
      ur: "ہر فرض نماز کے بعد پڑھا جاتا ہے۔ اس میں اقرار ہے کہ دینا اور روکنا صرف اللہ کے اختیار میں ہے، اور اللہ کے مقابلے میں کسی کا مال و مرتبہ کام نہیں آ سکتا۔"
    },
    translations: {
      en: "There is no god but Allah alone, with no partner. His is the dominion and His is the praise, and He has power over all things. O Allah, none can withhold what You have given, and none can give what You have withheld, and no fortune can avail its possessor against You.",
      ur: "اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں۔ اسی کی بادشاہی ہے اور اسی کے لیے تعریف ہے، اور وہ ہر چیز پر قادر ہے۔ اے اللہ! جو تو دے اسے کوئی روکنے والا نہیں، اور جو تو روک لے اسے کوئی دینے والا نہیں، اور تیرے مقابلے میں کسی صاحبِ حیثیت کو اس کی حیثیت نفع نہیں دے سکتی۔",
      hi: "अल्लाह के सिवा कोई माबूद नहीं, वह अकेला है, उसका कोई शरीक नहीं। उसी की बादशाही है और उसी के लिए तारीफ़ है, और वह हर चीज़ पर क़ुदरत रखता है। ऐ अल्लाह! जो तू दे उसे कोई रोकने वाला नहीं, और जो तू रोक ले उसे कोई देने वाला नहीं، اور تیرے موقابلے میں کسی صاحب-اے-حیثیت کو اس کی حیثیت نفع نہیں دے سکتی۔",
      tr: "Allah'tan başka ilah yoktur, O tektir, ortağı yoktur. Mülk O'nundur, hamd O'nadır ve O her şeye kadirdir. Allah'ım! Senin verdiğine engel olacak, vermediğini de verecek yoktur. Servet sahibine, serveti Sana karşı fayda vermez.",
      es: "No hay dios sino Allah, solo, sin asociado. Suyo es el dominio y Suya es la alabanza, y Él tiene poder sobre todas las cosas. Oh Allah, nadie puede retener lo que Tú has concedido, ni conceder lo que Tú has retenido, y de nada sirve la fortuna de su poseedor frente a Ti.",
      fr: "Il n'y a de divinité qu'Allah, Seul, sans associé. À Lui la royauté et à Lui la louange, et Il est capable de toute chose. Ô Allah, nul ne peut retenir ce que Tu donnes, ni donner ce que Tu retiens, et la fortune de son détenteur ne lui sert à rien face à Toi.",
      bn: "আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একক, তাঁর কোনো শরিক নেই। রাজত্ব তাঁরই এবং প্রশংসা তাঁরই, আর তিনি সর্ববিষয়ে ক্ষমতাবান। হে আল্লাহ! আপনি যা দান করেন তা রোধ করার কেউ নেই, আর আপনি যা রোধ করেন তা দান করার কেউ নেই, এবং আপনার মোকাবিলায় কোনো সম্পদশালীর সম্পদ তার কোনো উপকারে আসে না।",
      id: "Tidak ada tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan bagi-Nya segala puji, dan Dia Mahakuasa atas segala sesuatu. Ya Allah, tidak ada yang dapat menahan apa yang Engkau berikan, dan tidak ada yang dapat memberi apa yang Engkau tahan, dan kekayaan seseorang tidak berguna baginya di hadapan-Mu."
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
    id: "salah-a-inni-ala-dhikrik",
    category: "salah",
    title: {
      en: "Help Me to Remember You and Worship You Well",
      ur: "اپنے ذکر، شکر اور عبادت پر مدد کی دعا",
      ar: "اللهم أعني على ذكرك وشكرك"
    },
    arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    transliteration: "Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik",
    repeatTarget: 1,
    source: "Sunan Abi Dawud 1522; Sunan an-Nasa'i 1303",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sunan Abi Dawud", number: "1522" },
      { collection: "Sunan an-Nasa'i", number: "1303" }
    ],
    benefit: {
      en: "The Prophet ﷺ instructed Mu'adh ibn Jabal never to omit this after any prayer, having first told him that he loved him. It asks for the ability to worship, not merely the intention.",
      ur: "نبی ﷺ نے معاذ بن جبل رضی اللہ عنہ سے فرمایا کہ وہ ہر نماز کے بعد اسے ہرگز نہ چھوڑیں، اور اس سے پہلے ان سے اپنی محبت کا اظہار فرمایا۔ اس میں عبادت کی توفیق مانگی جاتی ہے، محض ارادہ نہیں۔"
    },
    translations: {
      en: "O Allah, help me to remember You, to give thanks to You, and to worship You well.",
      ur: "اے اللہ! اپنے ذکر، اپنے شکر اور اپنی بہترین عبادت پر میری مدد فرما۔",
      hi: "ऐ अल्लाह! अपने ज़िक्र, अपने शुक्र और अपनी बेहतरीन इबादत पर मेरी मदद फ़रमा।",
      tr: "Allah'ım! Seni anmam, Sana şükretmem ve Sana güzelce ibadet etmem konusunda bana yardım et.",
      es: "Oh Allah, ayúdame a recordarte, a agradecerte y a adorarte bien.",
      fr: "Ô Allah, aide-moi à T'évoquer, à Te remercier et à T'adorer de la meilleure façon.",
      bn: "হে আল্লাহ! আপনার স্মরণ, আপনার শুকরিয়া এবং আপনার উত্তম ইবাদতে আমাকে সাহায্য করুন।",
      id: "Ya Allah, tolonglah aku untuk mengingat-Mu, bersyukur kepada-Mu, dan beribadah kepada-Mu dengan baik."
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

  // PROTECTION & HEALING
  {
    id: "protection-afwa-wal-afiyah",
    category: "protection",
    title: {
      en: "Asking for Pardon and Wellbeing",
      ur: "عفو و عافیت کی دعا",
      ar: "دعاء العفو والعافية"
    },
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ. اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي. اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي. اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي، وَعَنْ يَمِينِي وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
    transliteration: "Allahumma inni as'alukal-'afwa wal-'afiyata fid-dunya wal-akhirah. Allahumma inni as'alukal-'afwa wal-'afiyata fi deeni wa dunyaya wa ahli wa mali. Allahummastur 'awrati wa amin raw'ati. Allahummahfazni min bayni yadayya wa min khalfi, wa 'an yameeni wa 'an shimali, wa min fawqi, wa a'udhu bi'azamatika an ughtala min tahti",
    repeatTarget: 1,
    source: "Sunan Abi Dawud 5074; Sunan Ibn Majah 3871",
    grading: "hasan",
    sourceRefs: [
      { collection: "Sunan Abi Dawud", number: "5074" },
      { collection: "Sunan Ibn Majah", number: "3871" }
    ],
    benefit: {
      en: "The Prophet ﷺ never abandoned these words morning or evening. They ask for pardon and wellbeing in every dimension of life and for protection from every direction.",
      ur: "نبی ﷺ نے صبح و شام یہ کلمات کبھی نہیں چھوڑے۔ ان میں زندگی کے ہر پہلو میں عفو و عافیت اور ہر طرف سے حفاظت مانگی جاتی ہے۔"
    },
    translations: {
      en: "O Allah, I ask You for pardon and wellbeing in this world and the Hereafter. O Allah, I ask You for pardon and wellbeing in my religion, my worldly affairs, my family and my wealth. O Allah, conceal my faults and calm my fears. O Allah, guard me from before me and behind me, from my right and my left, and from above me, and I seek refuge in Your greatness from being taken unaware from beneath me.",
      ur: "اے اللہ! میں تجھ سے دنیا و آخرت میں عفو اور عافیت مانگتا ہوں۔ اے اللہ! میں تجھ سے اپنے دین، اپنی دنیا، اپنے اہل و عیال اور اپنے مال میں عفو اور عافیت مانگتا ہوں۔ اے اللہ! میری پردہ پوشی فرما اور میرے خوف کو امن میں بدل دے۔ اے اللہ! میری حفاظت فرما میرے آگے سے، میرے پیچھے سے، میرے دائیں سے، میرے بائیں سے اور میرے اوپر سے، اور میں تیری عظمت کی پناہ چاہتا ہوں کہ میں نیچے سے اچانک ہلاک کر دیا جاؤں۔",
      hi: "ऐ अल्लाह! मैं तुझसे दुनिया और आख़िरत में माफ़ी और आफ़ियत माँगता हूँ। ऐ अल्लाह! मैं तुझसे अपने دین, अपनी दुनिया, अपने घरवालों और अपने माल में माफ़ी और आफ़ियत माँगता हूँ। ऐ अल्लाह! मेरी पर्दापोशी फ़रमा और मेरे ख़ौफ़ को अमन में बदल दे। ऐ अल्लाह! मेरी हिफ़ाज़त फ़रमा मेरे आगे से، पीछे से, दाएँ से, बाएँ से और ऊपर से, और मैं तेरी अज़मत کی پناہ چاہتا हूँ کہ میں نیچے سے اچانک ہلاک کر دیا جاؤں۔",
      tr: "Allah'ım! Senden dünyada ve ahirette af ve afiyet dilerim. Allah'ım! Senden dinimde, dünyamda, ailemde ve malımda af ve afiyet dilerim. Allah'ım! Ayıplarımı ört ve korkularımı güvene çevir. Allah'ım! Beni önümden, arkamdan, sağımdan, solumdan ve üstümden koru. Altımdan ansızın helak edilmekten de azametine sığınırım.",
      es: "Oh Allah, Te pido perdón y bienestar en este mundo y en el Más Allá. Oh Allah, Te pido perdón y bienestar en mi religión, mis asuntos mundanos, mi familia y mis bienes. Oh Allah, cubre mis faltas y calma mis temores. Oh Allah, protégeme por delante y por detrás, por mi derecha y por mi izquierda, y por encima de mí, y me refugio en Tu grandeza de ser sorprendido desde abajo.",
      fr: "Ô Allah, je Te demande le pardon et la santé dans ce monde et dans l'au-delà. Ô Allah, je Te demande le pardon et la santé dans ma religion, mes affaires d'ici-bas, ma famille et mes biens. Ô Allah, couvre mes défauts et apaise mes craintes. Ô Allah, protège-moi de devant et de derrière, de ma droite et de ma gauche, et d'au-dessus de moi, et je cherche refuge dans Ta grandeur contre le fait d'être surpris par en dessous.",
      bn: "হে আল্লাহ! আমি আপনার কাছে দুনিয়া ও আখিরাতে ক্ষমা ও নিরাপত্তা প্রার্থনা করি। হে আল্লাহ! আমি আপনার কাছে আমার দ্বীন, দুনিয়া, পরিবার ও সম্পদে ক্ষমা ও নিরাপত্তা প্রার্থনা করি। হে আল্লাহ! আমার দোষ ঢেকে দিন এবং আমার ভয়কে নিরাপত্তায় পরিণত করুন। হে আল্লাহ! আমাকে হেফাজত করুন আমার সামনে থেকে, পেছন থেকে, ডান থেকে, বাম থেকে এবং উপর থেকে, আর আমি আপনার মহত্ত্বের আশ্রয় চাই নিচ থেকে আকস্মিকভাবে ধ্বংস হওয়া থেকে।",
      id: "Ya Allah, aku memohon kepada-Mu ampunan dan keselamatan di dunia dan akhirat. Ya Allah, aku memohon kepada-Mu ampunan dan keselamatan dalam agamaku, duniaku, keluargaku, dan hartaku. Ya Allah, tutupilah aibku dan tenteramkanlah ketakutanku. Ya Allah, jagalah aku dari depan, dari belakang, dari kananku, dari kiriku, dan dari atasku, dan aku berlindung dengan keagungan-Mu dari dibinasakan secara tiba-tiba dari bawahku."
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
    id: "protection-shifa-7x",
    category: "protection",
    title: {
      en: "Supplication for the Sick",
      ur: "بیمار کے لیے شفا کی دعا",
      ar: "دعاء عيادة المريض"
    },
    arabic: "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ",
    transliteration: "As'alullahal-'Azeema Rabbal-'Arshil-'Azeemi an yashfiyak",
    repeatTarget: 7,
    source: "Sunan Abi Dawud 3106; Jami' at-Tirmidhi 2083",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sunan Abi Dawud", number: "3106" },
      { collection: "Jami' at-Tirmidhi", number: "2083" }
    ],
    benefit: {
      en: "The Prophet ﷺ said that whoever visits a sick person whose time has not yet come and says this seven times, Allah will cure him of that illness.",
      ur: "نبی ﷺ نے فرمایا کہ جو کسی ایسے مریض کی عیادت کرے جس کی موت کا وقت نہ آیا ہو اور سات بار یہ کلمات کہے، اللہ اسے اس بیماری سے شفا عطا فرمائے گا۔"
    },
    translations: {
      en: "I ask Allah the Magnificent, Lord of the Magnificent Throne, to cure you.",
      ur: "میں اللہ عظیم، عرشِ عظیم کے رب سے سوال کرتا ہوں کہ وہ تجھے شفا عطا فرمائے۔",
      hi: "मैं अल्लाह अज़ीम, अर्श-ए-अज़ीम के रब से सवाल करता हूँ कि वह तुझे शिफ़ा अता फ़रमाए।",
      tr: "Yüce Arş'ın Rabbi olan Yüce Allah'tan sana şifa vermesini dilerim.",
      es: "Pido a Allah el Inmenso, Señor del Trono Inmenso, que te cure.",
      fr: "Je demande à Allah l'Immense, Seigneur du Trône Immense, qu'Il te guérisse.",
      bn: "আমি মহান আল্লাহ, মহান আরশের রবের কাছে প্রার্থনা করি যেন তিনি আপনাকে আরোগ্য দান করেন।",
      id: "Aku memohon kepada Allah Yang Mahaagung, Tuhan Arasy yang agung, agar menyembuhkanmu."
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
    id: "protection-hamm-wal-hazan",
    category: "protection",
    title: {
      en: "Refuge from Anxiety, Grief and Debt",
      ur: "غم، فکر اور قرض سے پناہ",
      ar: "الاستعاذة من الهم والحزن"
    },
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayni wa ghalabatir-rijal",
    repeatTarget: 1,
    source: "Sahih al-Bukhari 6369",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih al-Bukhari", number: "6369" }
    ],
    benefit: {
      en: "Anas ibn Malik reported that the Prophet ﷺ said this frequently. It names eight burdens, four inner and four outer, and seeks refuge from each by name.",
      ur: "انس بن مالک رضی اللہ عنہ سے مروی ہے کہ نبی ﷺ کثرت سے یہ دعا پڑھتے تھے۔ اس میں آٹھ بوجھ، چار باطنی اور چار ظاہری، نام لے کر ان سے پناہ مانگی گئی ہے۔"
    },
    translations: {
      en: "O Allah, I seek refuge in You from anxiety and grief, from incapacity and laziness, from miserliness and cowardice, from the burden of debt and from being overpowered by men.",
      ur: "اے اللہ! میں تیری پناہ چاہتا ہوں فکر اور غم سے، عاجزی اور سستی سے، بخل اور بزدلی سے، قرض کے بوجھ سے اور لوگوں کے غلبے سے۔",
      hi: "ऐ अल्लाह! मैं तेरी पनाह चाहता हूँ फ़िक्र और ग़म से, आजिज़ी और सुस्ती से, बुख़्ल और बुज़दिली से, क़र्ज़ के बोझ से और लोगों के ग़लबे से۔",
      tr: "Allah'ım! Kaygı ve üzüntüden, acizlik ve tembellikten, cimrilik ve korkaklıktan, borç yükünden ve insanların baskısından Sana sığınırım.",
      es: "Oh Allah, me refugio en Ti de la angustia y la tristeza, de la incapacidad y la pereza, de la avaricia y la cobardía, del peso de la deuda y de ser dominado por los hombres.",
      fr: "Ô Allah, je cherche refuge auprès de Toi contre l'angoisse et la tristesse, contre l'incapacité et la paresse, contre l'avarice et la lâcheté, contre le poids de la dette et contre la domination des hommes.",
      bn: "হে আল্লাহ! আমি আপনার আশ্রয় চাই দুশ্চিন্তা ও দুঃখ থেকে, অক্ষমতা ও অলসতা থেকে, কৃপণতা ও কাপুরুষতা থেকে, ঋণের বোঝা থেকে এবং মানুষের আধিপত্য থেকে।",
      id: "Ya Allah, aku berlindung kepada-Mu dari kegelisahan dan kesedihan, dari kelemahan dan kemalasan, dari kekikiran dan sifat pengecut, dari lilitan utang dan dari tekanan orang-orang."
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

  // SEEKING FORGIVENESS
  {
    id: "forgiveness-astaghfirullah-wa-atubu",
    category: "forgiveness",
    title: {
      en: "Seeking Forgiveness and Turning Back to Allah",
      ur: "استغفار اور توبہ",
      ar: "أستغفر الله وأتوب إليه"
    },
    arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    transliteration: "Astaghfirullaha wa atubu ilayh",
    repeatTarget: 100,
    source: "Sahih al-Bukhari 6307; Sahih Muslim 2702",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih al-Bukhari", number: "6307" },
      { collection: "Sahih Muslim", number: "2702" }
    ],
    benefit: {
      en: "The Prophet ﷺ said he sought Allah's forgiveness and repented to Him more than seventy times, and in another narration a hundred times, in a single day.",
      ur: "نبی ﷺ نے فرمایا کہ وہ ایک ہی دن میں ستر سے زیادہ بار، اور ایک روایت کے مطابق سو بار، اللہ سے بخشش مانگتے اور اس کی طرف رجوع کرتے تھے۔"
    },
    translations: {
      en: "I seek the forgiveness of Allah and I turn to Him in repentance.",
      ur: "میں اللہ سے بخشش مانگتا ہوں اور اسی کی طرف رجوع کرتا ہوں۔",
      hi: "मैं अल्लाह से माफ़ी माँगता हूँ और उसी की तरफ़ रुजू करता हूँ।",
      tr: "Allah'tan bağışlanma diler ve O'na tövbe ederim.",
      es: "Pido perdón a Allah y me vuelvo a Él en arrepentimiento.",
      fr: "Je demande pardon à Allah et je reviens à Lui en me repentant.",
      bn: "আমি আল্লাহর কাছে ক্ষমা প্রার্থনা করি এবং তাঁর দিকেই তাওবা করে ফিরে আসি।",
      id: "Aku memohon ampun kepada Allah dan aku bertobat kepada-Nya."
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
    id: "forgiveness-rabbighfir-li-wa-tub",
    category: "forgiveness",
    title: {
      en: "My Lord, Forgive Me and Accept My Repentance",
      ur: "اے میرے رب! مجھے بخش دے اور میری توبہ قبول فرما",
      ar: "رب اغفر لي وتب علي"
    },
    arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ، إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
    transliteration: "Rabbighfir li wa tub 'alayya, innaka Antat-Tawwabur-Raheem",
    repeatTarget: 100,
    source: "Sunan Abi Dawud 1516; Jami' at-Tirmidhi 3434",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sunan Abi Dawud", number: "1516" },
      { collection: "Jami' at-Tirmidhi", number: "3434" }
    ],
    benefit: {
      en: "Ibn 'Umar reported that in a single gathering the Companions would count the Prophet ﷺ saying this a hundred times. Short enough to keep on the tongue through the day.",
      ur: "ابن عمر رضی اللہ عنہما سے مروی ہے کہ ایک ہی مجلس میں صحابہ نبی ﷺ سے یہ سو بار شمار کرتے تھے۔ اتنی مختصر کہ سارا دن زبان پر رہ سکے۔"
    },
    translations: {
      en: "My Lord, forgive me and accept my repentance. Indeed You are the Ever Accepting of repentance, the Most Merciful.",
      ur: "اے ہمارے رب! مجھے بخش دے اور میری توبہ قبول فرما، بے شک تو ہی بہت توبہ قبول کرنے والا، نہایت رحم کرنے والا ہے۔",
      hi: "ऐ मेरे रब! मुझे बख़्श दे और मेरी तौबा क़ुबूल फ़रमा, बेशक तू ही बहुत तौबा क़ुबूल करने वाला, निहायत रहम करने वाला है।",
      tr: "Rabbim! Beni bağışla ve tövbemi kabul et. Şüphesiz Sen tövbeleri çokça kabul eden, çok merhametli olansın.",
      es: "Señor mío, perdóname y acepta mi arrepentimiento. En verdad, Tú eres el que acepta el arrepentimiento, el Misericordiosísimo.",
      fr: "Seigneur, pardonne-moi et accepte mon repentir. En vérité, Tu es Celui qui accueille le repentir, le Très Miséricordieux.",
      bn: "হে আমার রব! আমাকে ক্ষমা করুন এবং আমার তাওবা কবুল করুন। নিশ্চয়ই আপনি তাওবা কবুলকারী, পরম দয়ালু।",
      id: "Ya Tuhanku, ampunilah aku dan terimalah tobatku. Sesungguhnya Engkau Maha Penerima tobat lagi Maha Penyayang."
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
    id: "forgiveness-zalamtu-nafsi",
    category: "forgiveness",
    title: {
      en: "I Have Wronged Myself Greatly",
      ur: "میں نے اپنی جان پر بہت ظلم کیا",
      ar: "اللهم إني ظلمت نفسي ظلما كثيرا"
    },
    arabic: "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
    transliteration: "Allahumma inni zalamtu nafsi zulman katheeran, wa la yaghfirudh-dhunuba illa Anta, faghfir li maghfiratan min 'indika warhamni, innaka Antal-Ghafurur-Raheem",
    repeatTarget: 1,
    source: "Sahih al-Bukhari 834; Sahih Muslim 2705",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sahih al-Bukhari", number: "834" },
      { collection: "Sahih Muslim", number: "2705" }
    ],
    benefit: {
      en: "Abu Bakr as-Siddiq asked the Prophet ﷺ to teach him a supplication to say in his prayer, and he was taught these words. Traditionally recited before the closing salam.",
      ur: "ابوبکر صدیق رضی اللہ عنہ نے نبی ﷺ سے درخواست کی کہ انہیں نماز میں پڑھنے کے لیے کوئی دعا سکھائیں، تو یہ کلمات سکھائے گئے۔ عام طور پر سلام سے پہلے پڑھی جاتی ہے۔"
    },
    translations: {
      en: "O Allah, I have greatly wronged myself, and none forgives sins except You. So grant me forgiveness from Yourself and have mercy on me. Indeed You are the Most Forgiving, the Most Merciful.",
      ur: "اے اللہ! میں نے اپنی جان پر بہت ظلم کیا ہے، اور تیرے سوا کوئی گناہ نہیں بخش سکتا، پس تو مجھے اپنے پاس سے بخشش عطا فرما اور مجھ پر رحم فرما، بے شک تو ہی بخشنے والا، رحم کرنے والا ہے۔",
      hi: "ऐ अल्लाह! मैंने अपनी जान पर बहुत ज़ुल्म किया है, और तेरे सिवा कोई गुनाह नहीं बख़्श सकता, पस तू मुझे अपने पास से मग़फ़िरत अता फ़रमा और मुझ पर रहम फ़रमा، बेशक तू ही बख़्शने वाला, रहم کرنے والا ہے।",
      tr: "Allah'ım! Ben kendime çok zulmettim ve günahları Senden başka bağışlayacak yoktur. Öyleyse katından bir bağışlama ile beni bağışla ve bana merhamet et. Şüphesiz Sen çok bağışlayan, çok merhamet edensin.",
      es: "Oh Allah, me he perjudicado mucho a mí mismo, y nadie perdona los pecados salvo Tú. Concédeme, pues, un perdón procedente de Ti y ten misericordia de mí. En verdad, Tú eres el Indulgente, el Misericordiosísimo.",
      fr: "Ô Allah, je me suis fait grand tort à moi-même, et nul ne pardonne les péchés hormis Toi. Accorde-moi donc un pardon venant de Toi et fais-moi miséricorde. En vérité, Tu es le Pardonneur, le Très Miséricordieux.",
      bn: "হে আল্লাহ! আমি নিজের উপর অনেক জুলুম করেছি, আর আপনি ছাড়া কেউ গুনাহ ক্ষমা করতে পারে না। সুতরাং আপনার পক্ষ থেকে আমাকে ক্ষমা দান করুন এবং আমার প্রতি দয়া করুন। নিশ্চয়ই আপনি ক্ষমাশীল, পরম দয়ালু।",
      id: "Ya Allah, sesungguhnya aku telah banyak menzalimi diriku sendiri, dan tidak ada yang mengampuni dosa selain Engkau. Maka ampunilah aku dengan ampunan dari sisi-Mu dan rahmatilah aku. Sesungguhnya Engkau Maha Pengampun lagi Maha Penyayang."
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

  // RABBANA (QURANIC)
  {
    id: "rabbana-5",
    category: "rabbana",
    title: {
      en: "The Supplication of Adam: We Have Wronged Ourselves",
      ur: "دعائے آدم: ہم نے اپنی جانوں پر ظلم کیا",
      ar: "دعاء آدم: ربنا ظلمنا أنفسنا"
    },
    arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
    transliteration: "Rabbana zalamna anfusana wa il-lam taghfir lana wa tarhamna lanakunanna minal-khasireen",
    surahInfo: { surah: 7, ayah: 23 },
    repeatTarget: 1,
    source: "Surah Al-A'raf (7:23)",
    grading: "quran",
    sourceRefs: [
      { collection: "Surah Al-A'raf", number: "7:23" }
    ],
    benefit: {
      en: "The words with which Adam and Hawwa turned back to Allah. They model the complete admission of fault without excuse, which is why this is a foundational supplication of repentance.",
      ur: "وہ کلمات جن کے ذریعے آدم و حوا علیہما السلام نے اللہ کی طرف رجوع کیا۔ ان میں بغیر کسی عذر کے غلطی کا مکمل اعتراف ہے، اسی لیے یہ توبہ کی بنیادی دعا ہے۔"
    },
    translations: {
      en: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
      ur: "اے ہمارے رب! ہم نے اپنی جانوں پر ظلم کیا، اور اگر تو نے ہمیں نہ بخشا اور ہم پر رحم نہ کیا تو ہم یقیناً نقصان اٹھانے والوں میں سے ہو جائیں گے۔",
      hi: "ऐ हमारे रब! हमने अपनी जानों पर ज़ुल्म किया, और अगर तूने हमें न बख़्शा और हम पर रहम न किया तो हम यक़ीनन नुक़सान उठाने वालों में से हो जाएँगे।",
      tr: "Rabbimiz! Biz kendimize zulmettik. Eğer bizi bağışlamaz ve bize merhamet etmezsen, mutlaka hüsrana uğrayanlardan oluruz.",
      es: "¡Señor nuestro! Hemos sido injustos con nosotros mismos, y si no nos perdonas y tienes misericordia de nosotros, seremos de los perdedores.",
      fr: "Seigneur! Nous avons été injustes envers nous-mêmes, et si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons assurément du nombre des perdants.",
      bn: "হে আমাদের রব! আমরা নিজেদের উপর জুলুম করেছি, আর যদি আপনি আমাদের ক্ষমা না করেন এবং আমাদের প্রতি দয়া না করেন, তবে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব।",
      id: "Ya Tuhan kami, kami telah menzalimi diri kami sendiri, dan jika Engkau tidak mengampuni kami dan memberi rahmat kepada kami, niscaya kami termasuk orang-orang yang rugi."
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
    id: "rabbana-6",
    category: "rabbana",
    title: {
      en: "Do Not Hold Us Accountable If We Forget",
      ur: "اگر ہم بھول جائیں تو ہماری گرفت نہ فرما",
      ar: "ربنا لا تؤاخذنا إن نسينا أو أخطأنا"
    },
    arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا، رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا، رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ، وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا، أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration: "Rabbana la tu'akhidhna in naseena aw akhta'na, Rabbana wa la tahmil 'alayna isran kama hamaltahu 'alal-ladheena min qablina, Rabbana wa la tuhammilna ma la taqata lana bihi, wa'fu 'anna waghfir lana warhamna, Anta Mawlana fansurna 'alal-qawmil-kafireen",
    surahInfo: { surah: 2, ayah: 286 },
    repeatTarget: 1,
    source: "Surah Al-Baqarah (2:286)",
    grading: "quran",
    sourceRefs: [
      { collection: "Surah Al-Baqarah", number: "2:286" }
    ],
    benefit: {
      en: "The closing verse of Surah Al-Baqarah. It was reported that after each request Allah responded that it had been granted. Recited widely at the end of the night and after prayer.",
      ur: "سورۃ البقرہ کی آخری آیت۔ روایت میں ہے کہ ہر سوال کے بعد اللہ نے فرمایا کہ عطا کر دیا گیا۔ رات کے آخر اور نماز کے بعد کثرت سے پڑھی جاتی ہے۔"
    },
    translations: {
      en: "Our Lord, do not take us to task if we forget or fall into error. Our Lord, do not lay upon us a burden like that which You laid upon those before us. Our Lord, do not burden us with what we have no strength to bear. Pardon us, forgive us, and have mercy upon us. You are our Protector, so grant us victory over the disbelieving people.",
      ur: "اے ہمارے رب! اگر ہم بھول جائیں یا خطا کر بیٹھیں تو ہماری گرفت نہ فرما۔ اے ہمارے رب! ہم پر ایسا بوجھ نہ ڈال جیسا تو نے ہم سے پہلے لوگوں پر ڈالا تھا۔ اے ہمارے رب! ہم پر وہ بوجھ نہ ڈال جس کی ہم میں طاقت نہیں۔ ہمیں معاف فرما، ہمیں بخش دے، اور ہم پر رحم فرما۔ تو ہی ہمارا مولا ہے، پس کافروں کے مقابلے میں ہماری مدد فرما۔",
      hi: "ऐ हमारे रब! अगर हम भूल जाएँ या ख़ता कर बैठें तो हमारी पकड़ न फ़रमा। ऐ हमारे रब! हम पर ऐसा बोझ न डाल जैसा तूने हमसे पहले लोगों पर डाला था। ऐ हमारे रब! हम पर वह बोझ न डाल जिसकी हममें ताक़त नहीं। हमें माफ़ फ़रमा، ہمیں بخش دے، اور ہم پر رحم فرما۔ تو ہی ہمارا مولا ہے، پس کافروں کے مقابلے میں ہماری مدد فرما۔",
      tr: "Rabbimiz! Unutur veya hata edersek bizi sorumlu tutma. Rabbimiz! Bizden öncekilere yüklediğin gibi bize de ağır yük yükleme. Rabbimiz! Gücümüzün yetmeyeceği şeyi bize yükleme. Bizi affet, bizi bağışla ve bize merhamet et. Sen bizim Mevlamızsın, kâfirler topluluğuna karşı bize yardım et.",
      es: "¡Señor nuestro! No nos tomes en cuenta si olvidamos o erramos. ¡Señor nuestro! No nos impongas una carga como la que impusiste a quienes nos precedieron. ¡Señor nuestro! No nos hagas cargar con lo que no podemos soportar. Perdónanos, absuélvenos y ten misericordia de nosotros. Tú eres nuestro Protector, así que auxílianos frente al pueblo incrédulo.",
      fr: "Seigneur! Ne nous tiens pas rigueur si nous oublions ou commettons une erreur. Seigneur! Ne nous charge pas d'un fardeau comme celui dont Tu as charged ceux qui nous ont précédés. Seigneur! Ne nous impose pas ce que nous ne pouvons supporter. Efface nos fautes, pardonne-nous et fais-nous miséricorde. Tu es notre Maître, accorde-nous donc la victoire sur le peuple mécréant.",
      bn: "হে আমাদের রব! আমরা যদি ভুলে যাই বা ভুল করি তবে আমাদের পাকড়াও করবেন না। হে আমাদের রব! আমাদের উপর এমন বোঝা চাপাবেন না যেমন আমাদের পূর্ববর্তীদের উপর চাপিয়েছিলেন। হে আমাদের রব! আমাদের উপর এমন বোঝা চাপাবেন না যা বহনের শক্তি আমাদের নেই। আমাদের মার্জনা করুন, আমাদের ক্ষমা করুন এবং আমাদের প্রতি দয়া করুন। আপনিই আমাদের অভিভাবক, সুতরাং কাফের সম্প্রদায়ের বিরুদ্ধে আমাদের সাহায্য করুন।",
      id: "Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami bersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Maafkanlah kami, ampunilah kami, dan rahmatilah kami. Engkaulah Pelindung kami, maka tolonglah kami terhadap kaum yang kafir."
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
    id: "rabbana-7",
    category: "rabbana",
    title: {
      en: "Pour Patience Upon Us and Make Our Feet Firm",
      ur: "ہم پر صبر انڈیل دے اور ہمارے قدم جما دے",
      ar: "ربنا أفرغ علينا صبرا"
    },
    arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration: "Rabbana afrigh 'alayna sabran wa thabbit aqdamana wansurna 'alal-qawmil-kafireen",
    surahInfo: { surah: 2, ayah: 250 },
    repeatTarget: 1,
    source: "Surah Al-Baqarah (2:250)",
    grading: "quran",
    sourceRefs: [
      { collection: "Surah Al-Baqarah", number: "2:250" }
    ],
    benefit: {
      en: "The words of Talut's small band of believers as they faced Jalut's army. Recited when facing a trial that is larger than one's own strength.",
      ur: "طالوت کے ساتھ ایمان والوں کی چھوٹی جماعت کے وہ کلمات جو انہوں نے جالوت کے لشکر کے سامنے کہے۔ ایسی آزمائش کے وقت پڑھی جاتی ہے جو اپنی طاقت سے بڑی ہو۔"
    },
    translations: {
      en: "Our Lord, pour patience upon us, make our feet firm, and grant us victory over the disbelieving people.",
      ur: "اے ہمارے رب! ہم پر صبر انڈیل دے، ہمارے قدم جما دے، اور کافروں کے مقابلے میں ہماری مدد فرما۔",
      hi: "ऐ ہمارے رب! ہم پر سببر انڈیل دے، ہمارے قدم جما دے، اور کافروں کے مقابلے میں ہماری مدد فرما۔",
      tr: "Rabbimiz! Üzerimize sabır yağdır, ayaklarımızı sabit kıl ve kâfirler topluluğuna karşı bize yardım et.",
      es: "¡Señor nuestro! Derrama sobre nosotros paciencia, afianza nuestros pies y auxílianos frente al pueblo incrédulo.",
      fr: "Seigneur! Déverse sur nous la patience, affermis nos pas et accorde-nous la victoire sur le peuple mécréant.",
      bn: "হে আমাদের রব! আমাদের উপর ধৈর্য ঢেলে দিন, আমাদের পা সুদৃঢ় করুন এবং কাফের সম্প্রদায়ের বিরুদ্ধে আমাদের সাহায্য করুন।",
      id: "Ya Tuhan kami, limpahkanlah kesabaran atas kami, kokohkanlah langkah kami, dan tolonglah kami terhadap kaum yang kafir."
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
    id: "rabbana-8",
    category: "rabbana",
    title: {
      en: "You Did Not Create This in Vain",
      ur: "تو نے یہ سب بے مقصد پیدا نہیں کیا",
      ar: "ربنا ما خلقت هذا باطلا"
    },
    arabic: "رَبَّنَا مَا خَلَقْتَ هَذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbana ma khalaqta hadha batilan subhanaka faqina 'adhaban-nar",
    surahInfo: { surah: 3, ayah: 191 },
    repeatTarget: 1,
    source: "Surah Ali 'Imran (3:191)",
    grading: "quran",
    sourceRefs: [
      { collection: "Surah Ali 'Imran", number: "3:191" }
    ],
    benefit: {
      en: "Part of the closing verses of Surah Ali 'Imran that the Prophet ﷺ would recite on waking at night. It joins reflection on creation with a plea for safety from the Fire.",
      ur: "سورۃ آل عمران کی ان آخری آیات کا حصہ جو نبی ﷺ رات کو بیدار ہو کر پڑھتے تھے۔ اس میں تخلیق پر غور اور آگ سے نجات کی درخواست دونوں جمع ہیں۔"
    },
    translations: {
      en: "Our Lord, You did not create this in vain. Glory be to You, so protect us from the punishment of the Fire.",
      ur: "اے ہمارے رب! تو نے یہ سب بے مقصد پیدا نہیں کیا، تو پاک ہے، پس ہمیں آگ کے عذاب سے بچا۔",
      hi: "ऐ ہمارے رب! तूने यह सब बेमक़्सद पैदा नहीं किया، तू پاک ہے، पस हमें آگ کے عذاب سے بچا۔",
      tr: "Rabbimiz! Sen bunu boşuna yaratmadın. Seni tenzih ederiz, bizi ateş azabından koru.",
      es: "¡Señor nuestro! No has creado esto en vano. ¡Glorificado seas! Presérvanos del castigo del Fuego.",
      fr: "Seigneur! Tu n'as pas créé cela en vain. Gloire à Toi! Préserve-nous du châtiment du Feu.",
      bn: "হে আমাদের রব! আপনি এসব অনর্থক সৃষ্টি করেননি। আপনি পবিত্র, সুতরাং আমাদের জাহান্নামের শাস্তি থেকে রক্ষা করুন।",
      id: "Ya Tuhan kami, tiadalah Engkau menciptakan ini dengan sia-sia. Mahasuci Engkau, maka peliharalah kami dari siksa neraka."
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

  // DAILY LIFE
  {
    id: "daily-leaving-home",
    category: "daily",
    title: {
      en: "Supplication When Leaving the Home",
      ur: "گھر سے نکلنے کی دعا",
      ar: "دعاء الخروج من المنزل"
    },
    arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration: "Bismillah, tawakkaltu 'alallah, wa la hawla wa la quwwata illa billah",
    repeatTarget: 1,
    source: "Sunan Abi Dawud 5095; Jami' at-Tirmidhi 3426",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sunan Abi Dawud", number: "5095" },
      { collection: "Jami' at-Tirmidhi", number: "3426" }
    ],
    benefit: {
      en: "The Prophet ﷺ said that whoever says this on leaving home is told: you are guided, sufficed and protected, and Shaytan turns away from him.",
      ur: "نبی ﷺ نے فرمایا کہ جو گھر سے نکلتے وقت یہ کہے، اس سے کہا جاتا ہے: تجھے ہدایت دی گئی، تیری کفایت کی گئی اور تیری حفاظت کی گئی، اور شیطان اس سے دور ہٹ جاتا ہے۔"
    },
    translations: {
      en: "In the name of Allah. I place my trust in Allah. There is no power and no strength except with Allah.",
      ur: "اللہ کے نام سے، میں نے اللہ پر بھروسہ کیا، اور نہ کوئی طاقت ہے اور نہ قوت مگر اللہ کی توفیق سے۔",
      hi: "अल्लाह के नाम से, मैंने अल्लाह पर भरोसा किया, और न कोई ताक़त है और न क़ुव्वत मगर अल्लाह की तौफ़ीक़ से۔",
      tr: "Allah'ın adıyla. Allah'a tevekkül ettim. Güç ve kuvvet ancak Allah'tandır.",
      es: "En el nombre de Allah. Deposito mi confianza en Allah. No hay poder ni fuerza salvo con Allah.",
      fr: "Au nom d'Allah. Je place ma confiance en Allah. Il n'y a de puissance ni de force qu'en Allah.",
      bn: "আল্লাহর নামে, আমি আল্লাহর উপর ভরসা করলাম, আর আল্লাহর সাহায্য ছাড়া কোনো শক্তি ও ক্ষমতা নেই।",
      id: "Dengan nama Allah, aku bertawakal kepada Allah, dan tidak ada daya dan kekuatan kecuali dengan pertolongan Allah."
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
    id: "daily-entering-masjid",
    category: "daily",
    title: {
      en: "Supplication Upon Entering the Mosque",
      ur: "مسجد میں داخل ہونے کی دعا",
      ar: "دعاء دخول المسجد"
    },
    arabic: "بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Bismillah, was-salatu was-salamu 'ala Rasulillah, Allahummaftah li abwaba rahmatik",
    repeatTarget: 1,
    source: "Sahih Muslim 713; Sunan Ibn Majah 771",
    grading: "hasan",
    sourceRefs: [
      { collection: "Sahih Muslim", number: "713" },
      { collection: "Sunan Ibn Majah", number: "771" }
    ],
    benefit: {
      en: "Entering the mosque with the name of Allah and salutations upon the Prophet ﷺ, then asking for the gates of mercy to be opened, sets the heart before the body arrives at prayer.",
      ur: "اللہ کے نام اور نبی ﷺ پر درود کے ساتھ مسجد میں داخل ہونا اور پھر رحمت کے دروازے کھلنے کی دعا کرنا، جسم کے نماز تک پہنچنے سے پہلے دل کو تیار کر دیتا ہے۔"
    },
    translations: {
      en: "In the name of Allah, and peace and blessings be upon the Messenger of Allah. O Allah, open for me the gates of Your mercy.",
      ur: "اللہ کے نام سے، اور اللہ کے رسول پر درود و سلام ہو۔ اے اللہ! میرے لیے اپنی رحمت کے دروازے کھول دے۔",
      hi: "अल्लाह के नाम से, और अल्लाह के रसूल पर दुरूद और सलाम हो। ऐ अल्लाह! मेरे लिए अपनी रहमत के दरवाज़े खोल दे۔",
      tr: "Allah'ın adıyla, salat ve selam Allah'ın Resulü üzerine olsun. Allah'ım! Bana rahmet kapılarını aç.",
      es: "En el nombre de Allah, y que la paz y las bendiciones sean sobre el Mensajero de Allah. Oh Allah, ábreme las puertas de Tu misericordia.",
      fr: "Au nom d'Allah, que la prière et le salut soient sur le Messager d'Allah. Ô Allah, ouvre-moi les portes de Ta miséricorde.",
      bn: "আল্লাহর নামে, আর আল্লাহর রাসূলের উপর সালাত ও সালাম। হে আল্লাহ! আমার জন্য আপনার রহমতের দরজাসমূহ খুলে দিন।",
      id: "Dengan nama Allah, dan salawat serta salam atas Rasulullah. Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu."
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
    id: "daily-bismillah-food",
    category: "daily",
    title: {
      en: "Supplication Before Eating",
      ur: "کھانے سے پہلے کی دعا",
      ar: "دعاء الطعام"
    },
    arabic: "بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ",
    transliteration: "Bismillahi awwalahu wa akhirah",
    repeatTarget: 1,
    source: "Sunan Abi Dawud 3767; Jami' at-Tirmidhi 1858",
    grading: "sahih",
    sourceRefs: [
      { collection: "Sunan Abi Dawud", number: "3767" },
      { collection: "Jami' at-Tirmidhi", number: "1858" }
    ],
    benefit: {
      en: "One says Bismillah at the start of a meal. If it is forgotten, these words are said when remembered, and they cover the beginning and the end of the meal together.",
      ur: "کھانے کے آغاز میں بسم اللہ کہی جاتی ہے۔ اگر بھول جائے تو یاد آنے پر یہ کلمات کہے جاتے ہیں، جو کھانے کے شروع اور آخر دونوں کو شامل کر لیتے ہیں۔"
    },
    translations: {
      en: "In the name of Allah, at its beginning and at its end.",
      ur: "اللہ کے نام سے، اس کے شروع میں بھی اور اس کے آخر میں بھی۔",
      hi: "अल्लाह के नाम से, इसके शुरू में भी और इसके आख़िर में भी۔",
      tr: "Başında da sonunda da Allah'ın adıyla.",
      es: "En el nombre de Allah, al principio y al final.",
      fr: "Au nom d'Allah, au début et à la fin.",
      bn: "আল্লাহর নামে, এর শুরুতে এবং এর শেষে।",
      id: "Dengan nama Allah, pada awalnya dan pada akhirnya."
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
