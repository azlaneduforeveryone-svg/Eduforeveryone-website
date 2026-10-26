export interface EfeRuleDetail {
  title: { en: string; ur: string; hi: string };
  desc: { en: string; ur: string; hi: string };
  category: 'waqf' | 'tajweed';
  colorClass: string;
}

export const EFE_QURAN_RULES: Record<string, EfeRuleDetail> = {
  lazim: {
    category: 'waqf',
    colorClass: 'efe-waqf-sign',
    title: {
      en: "Waqf Lāzim (مـ) - Mandatory Stop",
      ur: "وقف لازم (مـ) - لازمی وقف",
      hi: "वक्फ लाज़िम (مـ) - अनिवार्य ठहराव"
    },
    desc: {
      en: "You must stop here. Continuing past this sign without pausing can alter or distort the theological meaning of the verse.",
      ur: "یہاں رکنا فرض یا ضروری ہے۔ اس کے بغیر پڑھے آگے نکل جانے سے آیت کا مفہوم یا معنی غلط ہو سکتا ہے۔",
      hi: "यहाँ रुकना आवश्यक है। इसके बिना आगे बढ़ने से आयत का अर्थ बदल सकता है।"
    }
  },
  jaiz: {
    category: 'waqf',
    colorClass: 'efe-waqf-sign',
    title: {
      en: "Waqf Jāʾiz (ج) - Permissible Stop",
      ur: "وقف جائز (ج) - جائز وقف",
      hi: "वक्फ जाइज़ (ج) - अनुमेय ठहराव"
    },
    desc: {
      en: "Stopping or continuing are equally permissible. You can choose based on your breath control and natural phrasing.",
      ur: "یہاں رکنا یا آگے بڑھنا دونوں برابر جائز ہیں۔ آپ سانس یا جملے کے لحاظ سے فیصلہ کر سکتے ہیں۔",
      hi: "यहाँ रुकना या आगे बढ़ना दोनों अनुमेय हैं। आप अपनी सांस और वाक्य के प्रवाह के अनुसार चुन सकते हैं।"
    }
  },
  madd: {
    category: 'tajweed',
    colorClass: 'efe-tajweed-madd',
    title: {
      en: "Madd (Elongation Rule)",
      ur: "مد (کھینچ کر پڑھنا)",
      hi: "मद (लंबा खींचना)"
    },
    desc: {
      en: "Prolonging the sound of the vowel letter (Alif, Waw, or Ya) beyond the standard count due to a following Hamza or Sukun.",
      ur: "حروف مدہ (الف، و، ی) کو حمزہ یا سکون کی وجہ سے معمول سے زیادہ لمبا کر کے (طویل آواز کے ساتھ) پڑھنا۔",
      hi: "हुरूफ़-ए-मद्दह (अलिफ, वाव, या) की आवाज़ को आगे आने वाले हम्ज़ा या सुकूँ की वजह से लंबा खींचकर पढ़ना।"
    }
  },
  ikhfa: {
    category: 'tajweed',
    colorClass: 'efe-tajweed-ikhfa',
    title: {
      en: "Ikhfāʾ (Hidden Nasal Sound)",
      ur: "اخفاء (چھپا کر گنا کے ساتھ پڑھنا)",
      hi: "इख्फ़ा (छिपाकर पढ़ना)"
    },
    desc: {
      en: "Pronouncing a Noon Sakinah or Tanween with a hidden, nasal sound (Ghunnah) when followed by specific Ikhfa letters.",
      ur: "نون ساکنہ یا تنوین کے بعد حروفِ اخفاء آنے پر آواز کو ناک میں چھپا کر غنہ کے ساتھ ادا کرنا۔",
      hi: "नूने साकिन या तन्वीन के बाद इख्फा के हर्फ आने पर आवाज़ को नाक में छुपाकर (गुन्ना के साथ) पढ़ना।"
    }
  }
};
