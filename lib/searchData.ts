// Search index — all content on EduForEveryone
export interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  emoji: string;
  tags: string[];
}

export const SEARCH_DATA: SearchItem[] = [
  // ── Courses ───────────────────────────────────────────────────────────────
  { title:"Algebra Basics",       description:"Master variables, equations and functions. Learn algebra from scratch.",        href:"/courses/math-algebra-basics",   category:"Course",   emoji:"🧮", tags:["math","algebra","variables","equations","beginner"] },
  { title:"Cell Biology",         description:"Explore cell structure, function and division. Biology fundamentals.",          href:"/courses/science-biology-cells", category:"Course",   emoji:"🔬", tags:["science","biology","cells","structure","division"] },
  { title:"World War II",         description:"Causes, key events and lasting impact of World War 2.",                        href:"/courses/history-world-war-2",   category:"Course",   emoji:"🌍", tags:["history","ww2","world war","war","europe"] },

  // ── Notes ─────────────────────────────────────────────────────────────────
  { title:"Algebra Cheat Sheet",  description:"Quick reference for algebra formulas, rules and equations.",                   href:"/notes/algebra-cheatsheet",      category:"Notes",    emoji:"📝", tags:["math","algebra","formula","cheat sheet","reference"] },
  { title:"Cell Biology Notes",   description:"Key concepts in cell biology — organelles, mitosis, photosynthesis.",          href:"/notes/cell-biology-notes",      category:"Notes",    emoji:"🔬", tags:["science","biology","cells","organelles","mitosis"] },
  { title:"Essay Writing Guide",  description:"Step by step guide to writing perfect essays with examples.",                  href:"/notes/essay-writing-guide",     category:"Notes",    emoji:"📝", tags:["english","essay","writing","guide","grammar"] },

  // ── Quizzes ───────────────────────────────────────────────────────────────
  { title:"Algebra Quiz",         description:"Test your algebra knowledge — variables, equations and functions.",            href:"/quiz/algebra-quiz",             category:"Quiz",     emoji:"🧠", tags:["math","algebra","quiz","test","equations"] },
  { title:"Cell Biology Quiz",    description:"Quiz on cell structure, organelles and biological processes.",                 href:"/quiz/cell-biology-quiz",        category:"Quiz",     emoji:"🔬", tags:["science","biology","quiz","cells","test"] },
  { title:"World War II Quiz",    description:"Test your knowledge of WWII causes, events and outcomes.",                    href:"/quiz/wwii-quiz",                category:"Quiz",     emoji:"🌍", tags:["history","ww2","world war","quiz","test"] },
  { title:"Islamic Quiz",         description:"Test Islamic knowledge in English, Urdu and Hindi. 7 categories.",            href:"/quiz/islamic-quiz",             category:"Quiz",     emoji:"☪️", tags:["islam","quran","hadith","seerah","pillars","fiqh","urdu","hindi"] },

  // ── Games ─────────────────────────────────────────────────────────────────
  { title:"Math Puzzle",          description:"Solve arithmetic, algebra and sequences against the clock. 4 levels.",        href:"/games/math-puzzle",             category:"Game",     emoji:"🧮", tags:["math","game","puzzle","arithmetic","algebra","fun"] },
  { title:"WordWise",             description:"Guess hidden education words in 6 tries. 1682 words, 4 difficulty levels.",   href:"/games/word-puzzle",             category:"Game",     emoji:"🔤", tags:["english","word","puzzle","vocabulary","game","wordle"] },
  { title:"Quiz Battle",          description:"Answer 10 questions with 3 lives and powerups. All subjects.",               href:"/games/quiz-battle",             category:"Game",     emoji:"🧠", tags:["quiz","game","battle","trivia","all subjects","fun"] },

  // ── Tools ─────────────────────────────────────────────────────────────────
  { title:"Simple Calculator",    description:"Basic arithmetic calculator — add, subtract, multiply, divide.",              href:"/tools/simple-calculator",       category:"Tool",     emoji:"🔢", tags:["calculator","math","arithmetic","basic","free"] },
  { title:"Scientific Calculator",description:"Full scientific calculator with DEG/RAD, trigonometry, logarithms.",         href:"/tools/scientific-calculator",   category:"Tool",     emoji:"🔬", tags:["calculator","scientific","sin","cos","tan","log","math"] },
  { title:"Financial Calculator", description:"TVM, NPV, IRR and Bond Pricing calculator. Physical and form modes.",        href:"/tools/cfa-calculator",          category:"Tool",     emoji:"📊", tags:["calculator","finance","tvm","npv","irr","bond","investment"] },
  { title:"Number to Words",      description:"Convert numbers to words in 8 languages including Arabic and Urdu.",         href:"/tools/number-to-words",         category:"Tool",     emoji:"🔡", tags:["number","words","convert","arabic","urdu","english","tafqeet"] },

  // ── Islamic Studies ───────────────────────────────────────────────────────
  { title:"Holy Quran",           description:"Read all 114 Surahs with 40+ translations, audio recitation and dark mode.", href:"/quran",                         category:"Islamic",  emoji:"📖", tags:["quran","islam","arabic","translation","surah","urdu","hindi","audio"] },
  { title:"Islamic Studies",      description:"Quran, Islamic Quiz and more Islamic educational resources.",               href:"/islamic-studies",               category:"Islamic",  emoji:"☪️", tags:["islamic","studies","quran","quiz","hadith","seerah"] },

  // ── Pages ─────────────────────────────────────────────────────────────────
  { title:"All Courses",          description:"Browse all free courses — Math, Science, English and History.",             href:"/courses",                       category:"Page",     emoji:"📚", tags:["courses","learn","free","education"] },
  { title:"All Games",            description:"Play free educational games — Math Puzzle, WordWise, Quiz Battle.",         href:"/games",                         category:"Page",     emoji:"🎮", tags:["games","fun","learn","free","educational"] },
  { title:"All Tools",            description:"Free calculators and educational tools for students and professionals.",    href:"/tools",                         category:"Page",     emoji:"🔧", tags:["tools","calculator","free","students"] },
  { title:"Study Notes",          description:"Free study notes and cheat sheets for all subjects.",                      href:"/notes",                         category:"Page",     emoji:"📝", tags:["notes","study","cheat sheet","free"] },
  { title:"About EduForEveryone", description:"Our mission — free, high quality education for every student worldwide.",  href:"/about",                         category:"Page",     emoji:"👋", tags:["about","mission","free","education"] },
];

export function searchContent(query: string): SearchItem[] {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const results = SEARCH_DATA.filter(item => {
    const inTitle       = item.title.toLowerCase().includes(q);
    const inDesc        = item.description.toLowerCase().includes(q);
    const inCategory    = item.category.toLowerCase().includes(q);
    const inTags        = item.tags.some(t => t.includes(q));
    return inTitle || inDesc || inCategory || inTags;
  });
  // Sort: title matches first, then tags, then description
  return results.sort((a, b) => {
    const aTitle = a.title.toLowerCase().includes(q) ? 0 : 1;
    const bTitle = b.title.toLowerCase().includes(q) ? 0 : 1;
    return aTitle - bTitle;
  }).slice(0, 12);
}