// Math Topics Data — 20 topics across all levels
// Structure: explanation → examples → exercises → quiz

export type Level = "Elementary" | "Middle School" | "High School" | "University" | "Professional";

export interface QuizQuestion {
  q: string;
  opts: string[];
  ans: number;
  explanation: string; // shown when wrong
}

export interface Exercise {
  problem: string;
  hint: string;
  answer: string;
  solution: string; // step by step
}

export interface Example {
  title: string;
  problem: string;
  steps: string[];
  answer: string;
}

export interface MathTopic {
  id: string;
  title: string;
  subtitle: string;
  level: Level;
  category: string;
  emoji: string;
  description: string;
  explanation: string[]; // paragraphs
  keyPoints: string[];
  examples: Example[];
  exercises: Exercise[];
  quiz: QuizQuestion[];
  relatedTopics: string[]; // topic ids
  tags: string[];
}

export const MATH_TOPICS: MathTopic[] = [

  // ── ELEMENTARY ──────────────────────────────────────────────────────────────

  {
    id: "counting-numbers",
    title: "Counting & Numbers",
    subtitle: "Understanding numbers from 1 to 1000",
    level: "Elementary",
    category: "Number System",
    emoji: "🔢",
    description: "Learn how to count, read and write numbers. The foundation of all mathematics.",
    explanation: [
      "Numbers are symbols we use to count, measure and label things. The digits 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9 are used to write all numbers.",
      "When counting objects, we assign one number to each object in order. The last number we say tells us how many objects there are in total.",
      "Place value is very important. In the number 345, the digit 3 is in the hundreds place (worth 300), 4 is in the tens place (worth 40), and 5 is in the ones place (worth 5).",
      "Numbers can be written in words: 1 = one, 2 = two, 10 = ten, 100 = one hundred, 1000 = one thousand.",
    ],
    keyPoints: [
      "Digits 0–9 are used to form all numbers",
      "Place value: ones, tens, hundreds, thousands",
      "Even numbers end in 0, 2, 4, 6, 8",
      "Odd numbers end in 1, 3, 5, 7, 9",
      "Zero is neither positive nor negative",
    ],
    examples: [
      {
        title: "Reading a 3-digit number",
        problem: "What is the value of each digit in 472?",
        steps: [
          "Look at the hundreds place: 4 → 4 × 100 = 400",
          "Look at the tens place: 7 → 7 × 10 = 70",
          "Look at the ones place: 2 → 2 × 1 = 2",
          "Add them: 400 + 70 + 2 = 472",
        ],
        answer: "4 = four hundreds, 7 = seven tens, 2 = two ones",
      },
      {
        title: "Writing numbers in words",
        problem: "Write 356 in words.",
        steps: [
          "Hundreds digit: 3 → three hundred",
          "Tens digit: 5 → fifty",
          "Ones digit: 6 → six",
          "Combine: three hundred and fifty-six",
        ],
        answer: "Three hundred and fifty-six",
      },
    ],
    exercises: [
      { problem: "What is the place value of 8 in 853?", hint: "Which position is 8 in?", answer: "800 (hundreds place)", solution: "8 is in the hundreds place, so its value is 8 × 100 = 800" },
      { problem: "Write 729 in words.", hint: "Break it into hundreds, tens and ones", answer: "Seven hundred and twenty-nine", solution: "700 = seven hundred, 20 = twenty, 9 = nine → Seven hundred and twenty-nine" },
      { problem: "What number comes after 999?", hint: "Think about place values carrying over", answer: "1000", solution: "999 + 1 = 1000. The ones become 0, carry to tens (0), carry to hundreds (0), add new thousands place = 1000" },
      { problem: "Is 246 even or odd?", hint: "Look at the last digit", answer: "Even", solution: "The last digit is 6, which is even, so 246 is an even number" },
      { problem: "Write in numerals: Four hundred and fifteen", hint: "4 hundreds, 1 ten, 5 ones", answer: "415", solution: "Four hundred = 400, fifteen = 15, so 400 + 15 = 415" },
    ],
    quiz: [
      { q: "What is the value of digit 5 in 562?", opts: ["5", "50", "500", "5000"], ans: 2, explanation: "5 is in the hundreds place, so its value is 5 × 100 = 500" },
      { q: "Which number is even?", opts: ["37", "53", "84", "91"], ans: 2, explanation: "84 ends in 4 which is even. Even numbers end in 0, 2, 4, 6, or 8." },
      { q: "How do you write 'two hundred and thirty-one' in numbers?", opts: ["213", "231", "321", "312"], ans: 1, explanation: "Two hundred = 200, thirty = 30, one = 1. So 200 + 30 + 1 = 231." },
      { q: "What comes before 400?", opts: ["399", "401", "300", "410"], ans: 0, explanation: "The number before 400 is 399 (400 minus 1)." },
      { q: "How many tens are in 570?", opts: ["5", "7", "57", "50"], ans: 2, explanation: "570 ÷ 10 = 57. There are 57 tens in 570." },
    ],
    relatedTopics: ["addition-subtraction", "multiplication-division"],
    tags: ["numbers", "counting", "place value", "elementary", "digits"],
  },

  {
    id: "addition-subtraction",
    title: "Addition & Subtraction",
    subtitle: "Adding and taking away numbers",
    level: "Elementary",
    category: "Arithmetic",
    emoji: "➕",
    description: "Master adding and subtracting numbers including carrying and borrowing.",
    explanation: [
      "Addition is combining two or more numbers to get a total. The symbol for addition is + and the result is called the sum.",
      "Subtraction is finding the difference between two numbers — how much is left after taking away. The symbol is − and the result is called the difference.",
      "When adding large numbers, we align the digits by place value (ones under ones, tens under tens) and add from right to left. If the sum exceeds 9, we carry over to the next column.",
      "When subtracting, if a digit is smaller than the one being subtracted, we borrow 10 from the next column to the left.",
    ],
    keyPoints: [
      "Addition: a + b = sum (order doesn't matter: 3+5 = 5+3)",
      "Subtraction: a − b = difference (order matters: 8−3 ≠ 3−8)",
      "Carry over when column sum > 9",
      "Borrow when top digit < bottom digit in subtraction",
      "Check subtraction by adding: if 10−3=7, then 7+3=10 ✓",
    ],
    examples: [
      {
        title: "Addition with carrying",
        problem: "Calculate 456 + 378",
        steps: [
          "Ones: 6 + 8 = 14. Write 4, carry 1",
          "Tens: 5 + 7 + 1(carry) = 13. Write 3, carry 1",
          "Hundreds: 4 + 3 + 1(carry) = 8. Write 8",
          "Answer: 834",
        ],
        answer: "834",
      },
      {
        title: "Subtraction with borrowing",
        problem: "Calculate 503 − 267",
        steps: [
          "Ones: 3 − 7 → can't do. Borrow from tens. But tens is 0, borrow from hundreds: 503 → 4 hundreds, 10 tens, 3 ones",
          "Borrow from tens: 10 tens → 9 tens, 13 ones",
          "Ones: 13 − 7 = 6",
          "Tens: 9 − 6 = 3",
          "Hundreds: 4 − 2 = 2",
          "Answer: 236",
        ],
        answer: "236",
      },
    ],
    exercises: [
      { problem: "Calculate 384 + 259", hint: "Add ones first, then tens, then hundreds", answer: "643", solution: "4+9=13(write 3 carry 1), 8+5+1=14(write 4 carry 1), 3+2+1=6 → 643" },
      { problem: "Calculate 700 − 345", hint: "You'll need to borrow across zeros", answer: "355", solution: "700−345: Borrow across zeros. 10−5=5, 9−4=5, 6−3=3 → 355" },
      { problem: "A shop had 523 items. They sold 178. How many left?", hint: "Subtract the sold from total", answer: "345", solution: "523 − 178 = 345 items remaining" },
      { problem: "What is 999 + 1?", hint: "What happens when all 9s carry over?", answer: "1000", solution: "9+1=10(write 0 carry 1), 9+0+1=10(write 0 carry 1), 9+0+1=10(write 0 carry 1) → 1000" },
      { problem: "Check: Is 652 − 317 = 335? Verify your answer.", hint: "Add the answer to the subtracted number", answer: "Yes, correct", solution: "335 + 317 = 652 ✓ The subtraction is correct." },
    ],
    quiz: [
      { q: "What is 347 + 286?", opts: ["623", "633", "533", "643"], ans: 1, explanation: "7+6=13(carry 1), 4+8+1=13(carry 1), 3+2+1=6 → 633" },
      { q: "What is 500 − 183?", opts: ["317", "383", "283", "327"], ans: 0, explanation: "500 − 183 = 317. Borrow across zeros: 10-3=7, 9-8=1, 4-1=3 → 317" },
      { q: "A farmer has 245 apples and picks 178 more. How many total?", opts: ["423", "433", "413", "443"], ans: 0, explanation: "245 + 178 = 423. (5+8=13, carry 1; 4+7+1=12, carry 1; 2+1+1=4) → 423" },
      { q: "Which is correct?", opts: ["5 + 3 = 3 + 5", "5 − 3 = 3 − 5", "Both", "Neither"], ans: 0, explanation: "Addition is commutative (order doesn't matter). But 5−3=2 while 3−5=−2, so subtraction is NOT commutative." },
      { q: "What is 1000 − 1?", opts: ["999", "9999", "100", "900"], ans: 0, explanation: "1000 − 1 = 999. One less than 1000 is 999." },
    ],
    relatedTopics: ["counting-numbers", "multiplication-division"],
    tags: ["addition", "subtraction", "arithmetic", "elementary", "carry", "borrow"],
  },

  {
    id: "multiplication-division",
    title: "Multiplication & Division",
    subtitle: "Times tables and sharing equally",
    level: "Elementary",
    category: "Arithmetic",
    emoji: "✖️",
    description: "Learn multiplication as repeated addition and division as equal sharing.",
    explanation: [
      "Multiplication is a quick way to do repeated addition. Instead of adding 5 + 5 + 5 + 5, we write 5 × 4 = 20. We call the numbers factors and the result the product.",
      "Division is splitting a number into equal groups. 20 ÷ 4 = 5 means '20 split into 4 equal groups gives 5 in each group'. The result is called the quotient.",
      "Multiplication and division are inverse operations — they undo each other. If 6 × 7 = 42, then 42 ÷ 7 = 6 and 42 ÷ 6 = 7.",
      "When dividing, if the number doesn't split equally, we get a remainder. 17 ÷ 5 = 3 remainder 2 (because 5×3=15, and 17−15=2).",
    ],
    keyPoints: [
      "Multiplication: repeated addition (3 × 4 = 3+3+3+3 = 12)",
      "Division: sharing equally or repeated subtraction",
      "Multiplication is commutative: 4 × 6 = 6 × 4",
      "Division is NOT commutative: 12 ÷ 4 ≠ 4 ÷ 12",
      "Any number × 0 = 0, Any number × 1 = itself",
    ],
    examples: [
      {
        title: "Long multiplication",
        problem: "Calculate 47 × 6",
        steps: [
          "Multiply ones: 7 × 6 = 42. Write 2, carry 4",
          "Multiply tens: 4 × 6 = 24, plus carry 4 = 28",
          "Write 28",
          "Answer: 282",
        ],
        answer: "282",
      },
      {
        title: "Division with remainder",
        problem: "Divide 85 ÷ 7",
        steps: [
          "How many times does 7 go into 8? Once (7×1=7). Remainder 8−7=1",
          "Bring down 5: makes 15",
          "How many times does 7 go into 15? Twice (7×2=14). Remainder 15−14=1",
          "Answer: 12 remainder 1",
        ],
        answer: "12 remainder 1",
      },
    ],
    exercises: [
      { problem: "What is 8 × 7?", hint: "Use times tables or repeated addition", answer: "56", solution: "8 × 7 = 56 (or 7+7+7+7+7+7+7+7 = 56)" },
      { problem: "Share 56 sweets equally among 8 children. How many each?", hint: "Divide 56 by 8", answer: "7", solution: "56 ÷ 8 = 7. Each child gets 7 sweets." },
      { problem: "What is 34 × 5?", hint: "Multiply 30×5 and 4×5 separately, then add", answer: "170", solution: "30×5=150, 4×5=20, 150+20=170" },
      { problem: "What is 100 ÷ 6? Give quotient and remainder.", hint: "6 × 16 = 96, what's left?", answer: "16 remainder 4", solution: "6 × 16 = 96. 100 − 96 = 4. So 100 ÷ 6 = 16 remainder 4" },
      { problem: "A box holds 12 eggs. How many boxes for 84 eggs?", hint: "Divide total by box size", answer: "7 boxes", solution: "84 ÷ 12 = 7. You need exactly 7 boxes." },
    ],
    quiz: [
      { q: "What is 9 × 8?", opts: ["63", "72", "81", "64"], ans: 1, explanation: "9 × 8 = 72. This is an important times table to remember!" },
      { q: "What is 96 ÷ 8?", opts: ["10", "11", "12", "13"], ans: 2, explanation: "96 ÷ 8 = 12. Check: 8 × 12 = 96 ✓" },
      { q: "Which property does 6 × 9 = 9 × 6 show?", opts: ["Associative", "Commutative", "Distributive", "Identity"], ans: 1, explanation: "The commutative property says the order of multiplication doesn't change the result." },
      { q: "What is the remainder when 50 is divided by 7?", opts: ["0", "1", "7", "8"], ans: 1, explanation: "7 × 7 = 49. 50 − 49 = 1. Remainder is 1." },
      { q: "If 5 × ? = 45, what is the missing number?", opts: ["7", "8", "9", "10"], ans: 2, explanation: "45 ÷ 5 = 9. So the missing number is 9." },
    ],
    relatedTopics: ["addition-subtraction", "fractions-basics"],
    tags: ["multiplication", "division", "times tables", "elementary", "factors"],
  },

  {
    id: "fractions-basics",
    title: "Fractions",
    subtitle: "Parts of a whole — numerator and denominator",
    level: "Elementary",
    category: "Number System",
    emoji: "½",
    description: "Understand fractions as parts of a whole and learn to add, subtract and compare them.",
    explanation: [
      "A fraction represents a part of a whole. It is written as two numbers separated by a line: the numerator (top) shows how many parts we have, and the denominator (bottom) shows how many equal parts the whole is divided into.",
      "For example, ¾ means the whole is divided into 4 equal parts and we have 3 of them.",
      "Equivalent fractions have the same value but different numbers. ½ = 2/4 = 3/6. You create equivalent fractions by multiplying or dividing both numerator and denominator by the same number.",
      "To add or subtract fractions, the denominators must be the same (common denominator). To compare fractions, convert them to the same denominator first.",
    ],
    keyPoints: [
      "Numerator = how many parts you have (top)",
      "Denominator = total equal parts (bottom)",
      "Proper fraction: numerator < denominator (e.g. ¾)",
      "Improper fraction: numerator > denominator (e.g. 5/3)",
      "Mixed number: whole + fraction (e.g. 1⅔)",
    ],
    examples: [
      {
        title: "Adding fractions with same denominator",
        problem: "Calculate 2/7 + 3/7",
        steps: [
          "Denominators are the same (both 7)",
          "Add the numerators: 2 + 3 = 5",
          "Keep the denominator: 5/7",
          "Check if it simplifies: 5/7 is already in simplest form",
        ],
        answer: "5/7",
      },
      {
        title: "Adding fractions with different denominators",
        problem: "Calculate 1/3 + 1/4",
        steps: [
          "Find LCD (Lowest Common Denominator): LCD of 3 and 4 = 12",
          "Convert: 1/3 = 4/12 (multiply top and bottom by 4)",
          "Convert: 1/4 = 3/12 (multiply top and bottom by 3)",
          "Add: 4/12 + 3/12 = 7/12",
        ],
        answer: "7/12",
      },
    ],
    exercises: [
      { problem: "Simplify 8/12", hint: "Find the GCF of 8 and 12", answer: "2/3", solution: "GCF of 8 and 12 is 4. 8÷4=2, 12÷4=3. So 8/12 = 2/3" },
      { problem: "Calculate 3/5 + 1/5", hint: "Same denominator — just add numerators", answer: "4/5", solution: "3/5 + 1/5 = (3+1)/5 = 4/5" },
      { problem: "Which is bigger: 2/3 or 3/4?", hint: "Convert to same denominator (12)", answer: "3/4", solution: "2/3 = 8/12, 3/4 = 9/12. Since 9 > 8, 3/4 is bigger." },
      { problem: "Convert 7/3 to a mixed number", hint: "Divide 7 by 3, remainder becomes the fraction", answer: "2⅓", solution: "7 ÷ 3 = 2 remainder 1. So 7/3 = 2 and 1/3 = 2⅓" },
      { problem: "Calculate 5/6 − 1/3", hint: "Convert to same denominator first", answer: "1/2", solution: "1/3 = 2/6. So 5/6 − 2/6 = 3/6 = 1/2" },
    ],
    quiz: [
      { q: "What is the numerator in 5/8?", opts: ["8", "5", "3", "13"], ans: 1, explanation: "The numerator is the top number. In 5/8, the numerator is 5." },
      { q: "What is 1/4 + 2/4?", opts: ["3/4", "3/8", "2/8", "1/2"], ans: 0, explanation: "Same denominator: 1/4 + 2/4 = 3/4. Add numerators, keep denominator." },
      { q: "Which fraction equals 1/2?", opts: ["2/3", "3/4", "4/8", "3/5"], ans: 2, explanation: "4/8: divide both by 4 → 1/2. So 4/8 is equivalent to 1/2." },
      { q: "What is 3/4 as a decimal?", opts: ["0.34", "0.75", "0.43", "0.3"], ans: 1, explanation: "3 ÷ 4 = 0.75. So 3/4 = 0.75." },
      { q: "Convert 2⅓ to an improper fraction", opts: ["5/3", "7/3", "6/3", "8/3"], ans: 1, explanation: "2×3 + 1 = 7. So 2⅓ = 7/3." },
    ],
    relatedTopics: ["decimals-percentages", "ratios-proportions"],
    tags: ["fractions", "numerator", "denominator", "elementary", "halves", "quarters"],
  },

  // ── MIDDLE SCHOOL ────────────────────────────────────────────────────────────

  {
    id: "decimals-percentages",
    title: "Decimals & Percentages",
    subtitle: "Working with decimal numbers and percentages",
    level: "Middle School",
    category: "Number System",
    emoji: "💯",
    description: "Master decimals and percentages — essential for real life calculations.",
    explanation: [
      "A decimal number has a whole number part and a fractional part separated by a decimal point. For example 3.75 = 3 + 7/10 + 5/100.",
      "The digits after the decimal point represent tenths, hundredths, thousandths etc. So 0.1 = 1/10, 0.01 = 1/100, 0.001 = 1/1000.",
      "A percentage is a fraction with denominator 100. The symbol % means 'per hundred'. So 45% = 45/100 = 0.45.",
      "To convert percentage to decimal: divide by 100. To convert decimal to percentage: multiply by 100. To find a percentage of a number: multiply by the percentage as a decimal.",
    ],
    keyPoints: [
      "Decimal point separates whole from fraction",
      "% means per hundred: 75% = 75/100 = 0.75",
      "To find X% of Y: (X/100) × Y",
      "Percentage increase/decrease: (change ÷ original) × 100",
      "Always convert % to decimal before calculating",
    ],
    examples: [
      {
        title: "Finding a percentage",
        problem: "What is 35% of 240?",
        steps: [
          "Convert 35% to decimal: 35 ÷ 100 = 0.35",
          "Multiply: 0.35 × 240",
          "0.35 × 240 = 84",
          "Answer: 84",
        ],
        answer: "84",
      },
      {
        title: "Percentage increase",
        problem: "A shirt costs £40. Its price increases by 15%. What is the new price?",
        steps: [
          "Find 15% of £40: 0.15 × 40 = £6",
          "Add to original price: £40 + £6 = £46",
          "Or use multiplier: 40 × 1.15 = £46",
        ],
        answer: "£46",
      },
    ],
    exercises: [
      { problem: "What is 20% of 350?", hint: "20% = 0.20. Multiply 0.20 × 350", answer: "70", solution: "0.20 × 350 = 70" },
      { problem: "Convert 0.625 to a percentage", hint: "Multiply by 100", answer: "62.5%", solution: "0.625 × 100 = 62.5%" },
      { problem: "A phone costs $800. There is a 25% discount. What is the sale price?", hint: "Find 25% of 800, then subtract", answer: "$600", solution: "25% of 800 = 200. 800 − 200 = $600" },
      { problem: "Express 3/8 as a decimal and percentage", hint: "Divide 3 by 8, then multiply by 100", answer: "0.375 = 37.5%", solution: "3 ÷ 8 = 0.375. 0.375 × 100 = 37.5%" },
      { problem: "A class has 30 students. 18 are girls. What percentage are girls?", hint: "(girls ÷ total) × 100", answer: "60%", solution: "(18 ÷ 30) × 100 = 0.6 × 100 = 60%" },
    ],
    quiz: [
      { q: "What is 0.07 as a percentage?", opts: ["7%", "70%", "0.7%", "0.07%"], ans: 0, explanation: "Multiply by 100: 0.07 × 100 = 7%" },
      { q: "What is 60% of 150?", opts: ["60", "90", "100", "120"], ans: 1, explanation: "60% = 0.6. 0.6 × 150 = 90" },
      { q: "A price rises from $200 to $250. What is the % increase?", opts: ["20%", "25%", "50%", "15%"], ans: 1, explanation: "Change = 50. (50 ÷ 200) × 100 = 25%" },
      { q: "Which is largest: 0.5, 45%, 4/9?", opts: ["0.5", "45%", "4/9", "All equal"], ans: 0, explanation: "0.5 = 50%, 45% = 0.45, 4/9 ≈ 0.444. So 0.5 is largest." },
      { q: "What is 100% of any number?", opts: ["0", "10 times the number", "The number itself", "100"], ans: 2, explanation: "100% means the whole thing. 100% of any number = the number itself." },
    ],
    relatedTopics: ["fractions-basics", "ratios-proportions"],
    tags: ["decimals", "percentages", "middle school", "discount", "interest"],
  },

  {
    id: "ratios-proportions",
    title: "Ratios & Proportions",
    subtitle: "Comparing quantities and scaling",
    level: "Middle School",
    category: "Number System",
    emoji: "⚖️",
    description: "Understand ratios for comparing quantities and proportions for scaling problems.",
    explanation: [
      "A ratio compares two or more quantities of the same kind. The ratio of 3 to 5 is written as 3:5 or 3/5. Ratios can be simplified just like fractions.",
      "A proportion states that two ratios are equal. If a/b = c/d, then ad = bc (cross multiplication). This is very useful for solving missing value problems.",
      "Direct proportion: as one quantity increases, the other increases at the same rate. Example: more workers, more work done.",
      "Inverse proportion: as one quantity increases, the other decreases. Example: more workers, less time needed.",
    ],
    keyPoints: [
      "Ratio a:b means for every a of one thing, there are b of another",
      "Simplify ratios by dividing by HCF",
      "Proportion: a/b = c/d → ad = bc",
      "Direct proportion: y = kx (k is constant)",
      "Inverse proportion: y = k/x",
    ],
    examples: [
      {
        title: "Dividing in a given ratio",
        problem: "Share £120 in the ratio 2:3:5",
        steps: [
          "Total parts: 2 + 3 + 5 = 10 parts",
          "Value of 1 part: £120 ÷ 10 = £12",
          "First share: 2 × £12 = £24",
          "Second share: 3 × £12 = £36",
          "Third share: 5 × £12 = £60",
          "Check: £24 + £36 + £60 = £120 ✓",
        ],
        answer: "£24 : £36 : £60",
      },
      {
        title: "Solving proportion",
        problem: "If 5 books cost $35, how much do 8 books cost?",
        steps: [
          "Set up proportion: 5/35 = 8/x",
          "Cross multiply: 5x = 35 × 8 = 280",
          "Solve: x = 280 ÷ 5 = 56",
        ],
        answer: "$56",
      },
    ],
    exercises: [
      { problem: "Simplify the ratio 24:36", hint: "Find HCF of 24 and 36", answer: "2:3", solution: "HCF of 24 and 36 is 12. 24÷12=2, 36÷12=3. Simplified: 2:3" },
      { problem: "If 3 pens cost $2.40, how much do 7 pens cost?", hint: "Find cost of 1 pen first", answer: "$5.60", solution: "1 pen = $2.40 ÷ 3 = $0.80. 7 pens = 7 × $0.80 = $5.60" },
      { problem: "A recipe needs flour and sugar in ratio 3:1. If you use 450g flour, how much sugar?", hint: "Find value of 1 part", answer: "150g", solution: "1 part = 450 ÷ 3 = 150g. Sugar = 1 × 150g = 150g" },
      { problem: "Share 200 in ratio 3:7", hint: "Total parts = 3+7=10", answer: "60 and 140", solution: "1 part = 200÷10 = 20. Shares: 3×20=60, 7×20=140" },
      { problem: "6 workers build a wall in 4 days. How many days for 8 workers? (inverse proportion)", hint: "More workers = fewer days", answer: "3 days", solution: "Total work = 6×4 = 24 worker-days. 24 ÷ 8 = 3 days." },
    ],
    quiz: [
      { q: "What is 15:20 simplified?", opts: ["3:5", "3:4", "5:4", "4:5"], ans: 1, explanation: "HCF of 15 and 20 is 5. 15÷5=3, 20÷5=4. Simplified: 3:4" },
      { q: "If 4 kg costs $10, what do 10 kg cost?", opts: ["$20", "$25", "$40", "$15"], ans: 1, explanation: "1 kg = $10÷4 = $2.50. 10 kg = 10 × $2.50 = $25" },
      { q: "The ratio of boys to girls is 3:5. If there are 24 boys, how many girls?", opts: ["30", "35", "40", "45"], ans: 2, explanation: "1 part = 24÷3 = 8. Girls = 5 × 8 = 40" },
      { q: "Which is equivalent to 2:5?", opts: ["4:8", "6:15", "4:12", "6:12"], ans: 1, explanation: "6:15 ÷ 3 = 2:5. Both are equivalent." },
      { q: "Is 4:6 = 6:9?", opts: ["Yes", "No", "Cannot determine", "Only sometimes"], ans: 0, explanation: "4:6 = 2:3 and 6:9 = 2:3. Yes they are equal." },
    ],
    relatedTopics: ["fractions-basics", "decimals-percentages", "algebra-basics"],
    tags: ["ratio", "proportion", "scaling", "middle school", "direct", "inverse"],
  },

  {
    id: "algebra-basics",
    title: "Introduction to Algebra",
    subtitle: "Variables, expressions and simple equations",
    level: "Middle School",
    category: "Algebra",
    emoji: "🔤",
    description: "Learn to use letters to represent unknown numbers and solve basic equations.",
    explanation: [
      "Algebra uses letters (variables) to represent unknown or changing numbers. For example, if x is a number and we know x + 5 = 12, we can find that x = 7.",
      "An expression is a mathematical phrase with numbers, variables and operations. Examples: 3x + 2, 5a − b, 2(x + 3). An expression does not have an equals sign.",
      "An equation has an equals sign and states that two expressions are equal. Solving an equation means finding the value of the variable that makes the equation true.",
      "Golden rule of algebra: whatever you do to one side of the equation, you must do to the other side. This keeps the equation balanced.",
    ],
    keyPoints: [
      "Variable: a letter representing an unknown number",
      "Expression: has no = sign (e.g. 3x + 2)",
      "Equation: has = sign (e.g. 3x + 2 = 14)",
      "Solve by doing inverse operations",
      "Like terms: same variable, same power (3x and 5x are like terms)",
    ],
    examples: [
      {
        title: "Solving a linear equation",
        problem: "Solve 3x + 7 = 22",
        steps: [
          "Subtract 7 from both sides: 3x + 7 − 7 = 22 − 7",
          "Simplify: 3x = 15",
          "Divide both sides by 3: 3x ÷ 3 = 15 ÷ 3",
          "Answer: x = 5",
          "Check: 3(5) + 7 = 15 + 7 = 22 ✓",
        ],
        answer: "x = 5",
      },
      {
        title: "Simplifying expressions",
        problem: "Simplify 4x + 3y − 2x + 5y",
        steps: [
          "Group like terms: (4x − 2x) + (3y + 5y)",
          "Simplify x terms: 4x − 2x = 2x",
          "Simplify y terms: 3y + 5y = 8y",
          "Answer: 2x + 8y",
        ],
        answer: "2x + 8y",
      },
    ],
    exercises: [
      { problem: "Solve: 5x − 3 = 17", hint: "Add 3 to both sides first", answer: "x = 4", solution: "5x = 20 → x = 4. Check: 5(4)−3 = 17 ✓" },
      { problem: "Simplify: 6a + 2b − 3a + b", hint: "Collect like terms", answer: "3a + 3b", solution: "(6a−3a) + (2b+b) = 3a + 3b" },
      { problem: "Solve: x/4 + 3 = 8", hint: "Subtract 3 first, then multiply by 4", answer: "x = 20", solution: "x/4 = 5 → x = 20. Check: 20/4 + 3 = 5+3 = 8 ✓" },
      { problem: "Write an expression: 'three more than double a number n'", hint: "Double = 2 times", answer: "2n + 3", solution: "Double n = 2n. Three more than that = 2n + 3" },
      { problem: "Solve: 2(x + 4) = 18", hint: "Expand brackets first or divide by 2 first", answer: "x = 5", solution: "2x + 8 = 18 → 2x = 10 → x = 5. Check: 2(5+4)=18 ✓" },
    ],
    quiz: [
      { q: "What is the value of x in: x + 9 = 21?", opts: ["11", "12", "13", "30"], ans: 1, explanation: "x = 21 − 9 = 12. Check: 12 + 9 = 21 ✓" },
      { q: "Simplify 8x − 3x", opts: ["5", "5x", "11x", "24x"], ans: 1, explanation: "8x − 3x = (8−3)x = 5x. Like terms are combined." },
      { q: "Solve 4x = 36", opts: ["x = 8", "x = 9", "x = 10", "x = 32"], ans: 1, explanation: "x = 36 ÷ 4 = 9. Check: 4 × 9 = 36 ✓" },
      { q: "Which is an expression (not an equation)?", opts: ["3x = 12", "x + 5 = 0", "2x + 7", "y = 4"], ans: 2, explanation: "2x + 7 has no equals sign — it is an expression. The others are equations." },
      { q: "Solve 2x − 5 = 11", opts: ["x = 3", "x = 6", "x = 8", "x = 13"], ans: 2, explanation: "2x = 16 → x = 8. Check: 2(8)−5 = 11 ✓" },
    ],
    relatedTopics: ["linear-equations", "ratios-proportions"],
    tags: ["algebra", "variables", "equations", "expressions", "middle school"],
  },

  {
    id: "geometry-basics",
    title: "Geometry: Shapes & Angles",
    subtitle: "2D shapes, angles and their properties",
    level: "Middle School",
    category: "Geometry",
    emoji: "📐",
    description: "Explore 2D shapes, types of angles, and the properties of triangles and polygons.",
    explanation: [
      "Geometry is the study of shapes, sizes and spaces. A point has no size. A line extends infinitely in both directions. A line segment has two endpoints.",
      "An angle is formed when two rays meet at a point (vertex). Angles are measured in degrees (°). A full rotation is 360°.",
      "Types of angles: Acute (less than 90°), Right (exactly 90°), Obtuse (between 90° and 180°), Straight (180°), Reflex (between 180° and 360°).",
      "In any triangle, the three angles always add up to 180°. In any quadrilateral, the angles add up to 360°. For any polygon with n sides, interior angles sum = (n−2) × 180°.",
    ],
    keyPoints: [
      "Acute < 90° < Right = 90° < Obtuse < 180°",
      "Angles on a straight line add to 180°",
      "Angles at a point add to 360°",
      "Triangle angles sum = 180°",
      "Quadrilateral angles sum = 360°",
    ],
    examples: [
      {
        title: "Finding a missing angle in a triangle",
        problem: "A triangle has angles 65° and 48°. Find the third angle.",
        steps: [
          "Sum of triangle angles = 180°",
          "Third angle = 180° − 65° − 48°",
          "Third angle = 180° − 113°",
          "Third angle = 67°",
        ],
        answer: "67°",
      },
      {
        title: "Angles on a straight line",
        problem: "Two angles on a straight line are 3x and x + 20°. Find x.",
        steps: [
          "Angles on a straight line add to 180°",
          "3x + x + 20 = 180",
          "4x + 20 = 180",
          "4x = 160",
          "x = 40°",
        ],
        answer: "x = 40°",
      },
    ],
    exercises: [
      { problem: "Find the missing angle: triangle with angles 55°, 75°, ?", hint: "Sum of triangle = 180°", answer: "50°", solution: "180 − 55 − 75 = 50°" },
      { problem: "What type of angle is 127°?", hint: "Is it between 90° and 180°?", answer: "Obtuse", solution: "127° is between 90° and 180°, so it is obtuse." },
      { problem: "A regular hexagon has how many degrees in total (interior angles)?", hint: "Formula: (n−2) × 180", answer: "720°", solution: "(6−2) × 180 = 4 × 180 = 720°" },
      { problem: "Two angles are supplementary. One is 73°. Find the other.", hint: "Supplementary angles add to 180°", answer: "107°", solution: "180° − 73° = 107°" },
      { problem: "Vertically opposite angles: one angle is 65°. What are all four angles?", hint: "Vertically opposite are equal, adjacent are supplementary", answer: "65°, 115°, 65°, 115°", solution: "Opposite angles are equal (65°,65°). Adjacent = 180°−65° = 115°" },
    ],
    quiz: [
      { q: "What do angles in a triangle add up to?", opts: ["90°", "180°", "270°", "360°"], ans: 1, explanation: "The interior angles of any triangle always sum to 180°." },
      { q: "What type of angle is exactly 90°?", opts: ["Acute", "Obtuse", "Right", "Straight"], ans: 2, explanation: "A right angle is exactly 90°. It looks like the corner of a square." },
      { q: "A triangle has two angles of 60° each. What is the third?", opts: ["30°", "60°", "90°", "120°"], ans: 1, explanation: "180° − 60° − 60° = 60°. This is an equilateral triangle!" },
      { q: "How many sides does a pentagon have?", opts: ["4", "5", "6", "7"], ans: 1, explanation: "Pentagon comes from Greek 'penta' meaning five. A pentagon has 5 sides." },
      { q: "Two supplementary angles are in ratio 2:3. Find the smaller angle.", opts: ["60°", "72°", "108°", "36°"], ans: 1, explanation: "Total = 180°. Parts = 5. 1 part = 36°. Smaller = 2×36 = 72°." },
    ],
    relatedTopics: ["area-perimeter", "trigonometry-basics"],
    tags: ["geometry", "angles", "shapes", "triangles", "middle school"],
  },

  {
    id: "area-perimeter",
    title: "Area & Perimeter",
    subtitle: "Measuring the boundary and space of shapes",
    level: "Middle School",
    category: "Geometry",
    emoji: "📏",
    description: "Calculate the perimeter (boundary) and area (space) of common 2D shapes.",
    explanation: [
      "Perimeter is the total length of the boundary around a shape. To find the perimeter, add all the side lengths together.",
      "Area is the amount of space inside a 2D shape. It is measured in square units (cm², m², km²).",
      "Key formulas: Rectangle — Area = length × width, Perimeter = 2(l + w). Triangle — Area = ½ × base × height. Circle — Area = πr², Circumference = 2πr.",
      "When solving area problems, always check the units. If dimensions are in cm, area is in cm².",
    ],
    keyPoints: [
      "Perimeter = sum of all sides (units: cm, m)",
      "Area = space inside shape (units: cm², m²)",
      "Rectangle: A = lw, P = 2(l+w)",
      "Triangle: A = ½bh",
      "Circle: A = πr², C = 2πr (π ≈ 3.14159)",
    ],
    examples: [
      {
        title: "Area of a composite shape",
        problem: "Find the area of an L-shaped room: 10m × 8m with a 4m × 3m corner removed.",
        steps: [
          "Area of full rectangle: 10 × 8 = 80 m²",
          "Area of removed corner: 4 × 3 = 12 m²",
          "Area of L-shape: 80 − 12 = 68 m²",
        ],
        answer: "68 m²",
      },
      {
        title: "Circle area and circumference",
        problem: "Find the area and circumference of a circle with radius 7 cm. (π = 22/7)",
        steps: [
          "Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm²",
          "Circumference = 2πr = 2 × (22/7) × 7 = 2 × 22 = 44 cm",
        ],
        answer: "Area = 154 cm², Circumference = 44 cm",
      },
    ],
    exercises: [
      { problem: "Find the area of a rectangle 12 cm × 5 cm", hint: "A = length × width", answer: "60 cm²", solution: "A = 12 × 5 = 60 cm²" },
      { problem: "Find the perimeter of a square with side 9 m", hint: "All 4 sides are equal", answer: "36 m", solution: "P = 4 × 9 = 36 m" },
      { problem: "A triangle has base 10 cm and height 6 cm. Find its area.", hint: "A = ½ × base × height", answer: "30 cm²", solution: "A = ½ × 10 × 6 = 30 cm²" },
      { problem: "Find the circumference of a circle with diameter 14 cm (π = 22/7)", hint: "Radius = diameter ÷ 2", answer: "44 cm", solution: "r = 7. C = 2πr = 2 × (22/7) × 7 = 44 cm" },
      { problem: "A rectangle has area 84 cm² and length 12 cm. Find the width.", hint: "Width = Area ÷ Length", answer: "7 cm", solution: "w = 84 ÷ 12 = 7 cm" },
    ],
    quiz: [
      { q: "What is the area of a rectangle 8m × 5m?", opts: ["26 m²", "40 m²", "13 m²", "80 m²"], ans: 1, explanation: "A = 8 × 5 = 40 m²" },
      { q: "What is the formula for area of a triangle?", opts: ["b × h", "½ × b × h", "2 × b × h", "b + h"], ans: 1, explanation: "Area of triangle = ½ × base × height" },
      { q: "A square has area 64 cm². What is its side length?", opts: ["6 cm", "7 cm", "8 cm", "9 cm"], ans: 2, explanation: "Side = √64 = 8 cm. Check: 8² = 64 ✓" },
      { q: "What is the perimeter of a rectangle 7cm × 4cm?", opts: ["11 cm", "22 cm", "28 cm", "44 cm"], ans: 1, explanation: "P = 2(7+4) = 2 × 11 = 22 cm" },
      { q: "Which has larger area: circle r=5 or square side=9?", opts: ["Circle", "Square", "Equal", "Cannot tell"], ans: 1, explanation: "Circle: π×25 ≈ 78.5 cm². Square: 9²=81 cm². Square is larger." },
    ],
    relatedTopics: ["geometry-basics", "trigonometry-basics"],
    tags: ["area", "perimeter", "circle", "rectangle", "triangle", "middle school"],
  },

  {
    id: "statistics-basics",
    title: "Statistics: Mean, Median & Mode",
    subtitle: "Analysing and summarising data",
    level: "Middle School",
    category: "Statistics",
    emoji: "📊",
    description: "Learn to find averages and understand what they tell us about data sets.",
    explanation: [
      "Statistics involves collecting, organising and analysing data. Measures of central tendency give us a 'typical' value for a data set.",
      "Mean (average): Add all values and divide by how many there are. The mean is sensitive to extreme values (outliers).",
      "Median: The middle value when data is arranged in order. If there are two middle values, the median is their average. The median is not affected by extreme values.",
      "Mode: The value that appears most often. A data set can have no mode, one mode, or multiple modes. Range = highest value − lowest value (measures spread).",
    ],
    keyPoints: [
      "Mean = sum of values ÷ number of values",
      "Median = middle value (arrange data first!)",
      "Mode = most frequent value",
      "Range = maximum − minimum",
      "Median is better for skewed data",
    ],
    examples: [
      {
        title: "Finding all averages",
        problem: "Data: 4, 7, 2, 9, 7, 5, 3. Find mean, median, mode and range.",
        steps: [
          "Sort data: 2, 3, 4, 5, 7, 7, 9",
          "Mean: (2+3+4+5+7+7+9) ÷ 7 = 37 ÷ 7 = 5.29",
          "Median: Middle value (4th of 7) = 5",
          "Mode: 7 (appears twice, most frequent)",
          "Range: 9 − 2 = 7",
        ],
        answer: "Mean≈5.29, Median=5, Mode=7, Range=7",
      },
    ],
    exercises: [
      { problem: "Find the mean of: 15, 22, 18, 30, 25", hint: "Add all, divide by 5", answer: "22", solution: "(15+22+18+30+25)÷5 = 110÷5 = 22" },
      { problem: "Find the median of: 8, 3, 12, 5, 9, 1, 6", hint: "Sort first, then find middle", answer: "6", solution: "Sorted: 1,3,5,6,8,9,12. Middle (4th) = 6" },
      { problem: "Find the mode of: 4, 6, 4, 9, 7, 4, 6, 3", hint: "Which number appears most?", answer: "4", solution: "4 appears 3 times — more than any other number. Mode = 4" },
      { problem: "The mean of 5 numbers is 12. Four of them are 10, 15, 8, 14. Find the 5th.", hint: "Total = mean × count = 60", answer: "13", solution: "Total = 12×5 = 60. Sum of 4 = 47. 5th number = 60−47 = 13" },
      { problem: "Find the range of: 45, 23, 67, 12, 89, 34", hint: "Max − Min", answer: "77", solution: "Max = 89, Min = 12. Range = 89 − 12 = 77" },
    ],
    quiz: [
      { q: "What is the mean of 6, 8, 10, 12, 4?", opts: ["7", "8", "9", "10"], ans: 1, explanation: "(6+8+10+12+4)÷5 = 40÷5 = 8" },
      { q: "Find the median of: 3, 7, 1, 9, 5", opts: ["5", "7", "3", "9"], ans: 0, explanation: "Sorted: 1, 3, 5, 7, 9. The middle value is 5." },
      { q: "Which average is most affected by extreme values?", opts: ["Mode", "Median", "Mean", "Range"], ans: 2, explanation: "The mean uses all values so one very large or small value changes it significantly." },
      { q: "Data: 2,2,3,3,3,4,5. What is the mode?", opts: ["2", "3", "4", "3.14"], ans: 1, explanation: "3 appears 3 times — more than any other value. Mode = 3." },
      { q: "A data set has range 20 and minimum value 15. What is the maximum?", opts: ["5", "25", "35", "20"], ans: 2, explanation: "Max = Min + Range = 15 + 20 = 35" },
    ],
    relatedTopics: ["probability", "statistics-advanced"],
    tags: ["statistics", "mean", "median", "mode", "range", "middle school"],
  },

  // ── HIGH SCHOOL ───────────────────────────────────────────────────────────────

  {
    id: "linear-equations",
    title: "Linear Equations & Graphs",
    subtitle: "Straight lines, gradients and y-intercepts",
    level: "High School",
    category: "Algebra",
    emoji: "📈",
    description: "Master linear equations in the form y = mx + c and draw straight line graphs.",
    explanation: [
      "A linear equation produces a straight line when graphed. The standard form is y = mx + c, where m is the gradient (slope) and c is the y-intercept (where the line crosses the y-axis).",
      "The gradient (m) measures the steepness of the line. m = rise/run = (y₂−y₁)/(x₂−x₁). Positive gradient goes up left to right; negative gradient goes down.",
      "Two lines are parallel if they have the same gradient. Two lines are perpendicular if their gradients multiply to −1 (m₁ × m₂ = −1).",
      "Simultaneous equations are two equations with two unknowns. We solve them by substitution or elimination to find values of x and y that satisfy both.",
    ],
    keyPoints: [
      "y = mx + c: m = gradient, c = y-intercept",
      "Gradient = (y₂−y₁)/(x₂−x₁)",
      "Parallel lines: same gradient",
      "Perpendicular lines: m₁ × m₂ = −1",
      "Simultaneous equations: solve by substitution or elimination",
    ],
    examples: [
      {
        title: "Finding gradient and y-intercept",
        problem: "Write the equation of a line with gradient 3 passing through (0, −2)",
        steps: [
          "Use y = mx + c",
          "m = 3, c = −2 (y-intercept is −2 when x=0)",
          "Equation: y = 3x − 2",
        ],
        answer: "y = 3x − 2",
      },
      {
        title: "Solving simultaneous equations",
        problem: "Solve: 2x + y = 8 and x − y = 1",
        steps: [
          "Add the equations: (2x+y) + (x−y) = 8+1",
          "3x = 9 → x = 3",
          "Substitute x=3 into x−y=1: 3−y=1 → y=2",
          "Check: 2(3)+2=8 ✓ and 3−2=1 ✓",
        ],
        answer: "x = 3, y = 2",
      },
    ],
    exercises: [
      { problem: "Find the gradient of the line through (2,5) and (6,13)", hint: "m = (y₂−y₁)/(x₂−x₁)", answer: "2", solution: "m = (13−5)/(6−2) = 8/4 = 2" },
      { problem: "What is the y-intercept of y = 4x − 7?", hint: "Set x = 0", answer: "−7", solution: "When x=0: y = 4(0)−7 = −7. Y-intercept = −7" },
      { problem: "Are y=3x+2 and y=3x−5 parallel?", hint: "Compare gradients", answer: "Yes, both have gradient 3", solution: "Both have m=3. Same gradient → parallel lines." },
      { problem: "Solve simultaneously: x+y=10 and x−y=4", hint: "Add the equations", answer: "x=7, y=3", solution: "Adding: 2x=14→x=7. Substituting: 7+y=10→y=3" },
      { problem: "What is the gradient of a line perpendicular to y=2x+1?", hint: "m₁ × m₂ = −1", answer: "−½", solution: "m₁=2. m₂ = −1/2 since 2 × (−1/2) = −1" },
    ],
    quiz: [
      { q: "In y = 5x − 3, what is the gradient?", opts: ["−3", "5", "3", "−5"], ans: 1, explanation: "In y = mx + c, m is the gradient. Here m = 5." },
      { q: "What is the y-intercept of y = −2x + 7?", opts: ["−2", "2", "7", "−7"], ans: 2, explanation: "The y-intercept c = 7. The line crosses the y-axis at (0, 7)." },
      { q: "A line has gradient −3. A perpendicular line has gradient:", opts: ["3", "−3", "1/3", "−1/3"], ans: 2, explanation: "m₁ × m₂ = −1. (−3) × m₂ = −1. m₂ = 1/3" },
      { q: "Solve: x + y = 5 and 2x − y = 1", opts: ["x=2,y=3", "x=3,y=2", "x=1,y=4", "x=4,y=1"], ans: 0, explanation: "Add: 3x=6→x=2. Substitute: 2+y=5→y=3" },
      { q: "Which equation gives a line with y-intercept 4?", opts: ["y=4x+1", "y=x+4", "y=4x", "y=4"], ans: 1, explanation: "y = x + 4 has c = 4. The line crosses y-axis at (0, 4)." },
    ],
    relatedTopics: ["algebra-basics", "quadratic-equations"],
    tags: ["linear", "gradient", "y-intercept", "simultaneous", "high school", "graphs"],
  },

  {
    id: "quadratic-equations",
    title: "Quadratic Equations",
    subtitle: "Equations with x² — factoring and the formula",
    level: "High School",
    category: "Algebra",
    emoji: "⬛",
    description: "Solve quadratic equations by factoring, completing the square and the quadratic formula.",
    explanation: [
      "A quadratic equation has the form ax² + bx + c = 0, where a ≠ 0. The highest power of x is 2. Solutions are called roots.",
      "Method 1 — Factoring: Rewrite as (x + p)(x + q) = 0. Then x = −p or x = −q. Works when the equation factors neatly.",
      "Method 2 — Quadratic Formula: x = (−b ± √(b²−4ac)) / 2a. Always works! The discriminant b²−4ac tells us: if positive → 2 real roots, if zero → 1 root, if negative → no real roots.",
      "Method 3 — Completing the Square: Rewrite as (x + p)² = q, then solve. Also used to find the vertex of a parabola.",
    ],
    keyPoints: [
      "Standard form: ax² + bx + c = 0",
      "Factoring: (x+p)(x+q) = 0 → x = −p or −q",
      "Quadratic formula: x = (−b ± √(b²−4ac)) / 2a",
      "Discriminant (b²−4ac): >0 two roots, =0 one root, <0 no real roots",
      "Parabola opens up if a>0, down if a<0",
    ],
    examples: [
      {
        title: "Solving by factoring",
        problem: "Solve x² + 5x + 6 = 0",
        steps: [
          "Find two numbers that multiply to 6 and add to 5: 2 and 3",
          "Factor: (x + 2)(x + 3) = 0",
          "Either x + 2 = 0 → x = −2",
          "Or x + 3 = 0 → x = −3",
        ],
        answer: "x = −2 or x = −3",
      },
      {
        title: "Using the quadratic formula",
        problem: "Solve 2x² − 5x − 3 = 0",
        steps: [
          "a=2, b=−5, c=−3",
          "Discriminant: (−5)² − 4(2)(−3) = 25 + 24 = 49",
          "x = (5 ± √49) / 4 = (5 ± 7) / 4",
          "x = (5+7)/4 = 3 or x = (5−7)/4 = −1/2",
        ],
        answer: "x = 3 or x = −½",
      },
    ],
    exercises: [
      { problem: "Solve: x² − 7x + 12 = 0", hint: "Find two numbers that multiply to 12 and add to −7", answer: "x = 3 or x = 4", solution: "(x−3)(x−4)=0. x=3 or x=4" },
      { problem: "Solve: x² − 9 = 0", hint: "Difference of two squares: a²−b²=(a+b)(a−b)", answer: "x = 3 or x = −3", solution: "(x+3)(x−3)=0. x=±3" },
      { problem: "Use the formula to solve: x² + 4x − 5 = 0", hint: "a=1, b=4, c=−5", answer: "x = 1 or x = −5", solution: "Discriminant = 16+20=36. x=(−4±6)/2. x=1 or x=−5" },
      { problem: "What is the discriminant of x² + 2x + 5 = 0? What does it tell you?", hint: "b²−4ac where a=1,b=2,c=5", answer: "−16 → no real roots", solution: "4 − 20 = −16. Negative discriminant means no real solutions." },
      { problem: "Solve by completing the square: x² + 6x + 5 = 0", hint: "Add and subtract (6/2)² = 9", answer: "x = −1 or x = −5", solution: "(x+3)²−9+5=0 → (x+3)²=4 → x+3=±2 → x=−1 or x=−5" },
    ],
    quiz: [
      { q: "What are the roots of x² − x − 6 = 0?", opts: ["2,3", "−2,3", "2,−3", "−2,−3"], ans: 1, explanation: "(x−3)(x+2)=0. x=3 or x=−2. Roots are −2 and 3." },
      { q: "The discriminant b²−4ac = 0 means:", opts: ["No real roots", "Two different real roots", "Exactly one real root", "Complex roots only"], ans: 2, explanation: "When discriminant=0, there is exactly one real root (a repeated root)." },
      { q: "In ax²+bx+c=0, if a>0 which way does the parabola open?", opts: ["Upward ∪", "Downward ∩", "Left", "Right"], ans: 0, explanation: "When a>0, the coefficient of x² is positive and the parabola opens upward (∪ shape)." },
      { q: "Solve x² = 16", opts: ["x=4", "x=−4", "x=±4", "x=8"], ans: 2, explanation: "√16 = ±4. Both 4² and (−4)² equal 16." },
      { q: "What is the sum of roots of x²−5x+6=0?", opts: ["5", "6", "−5", "−6"], ans: 0, explanation: "Sum of roots = −b/a = −(−5)/1 = 5. (Also 2+3=5 ✓)" },
    ],
    relatedTopics: ["linear-equations", "functions-graphs"],
    tags: ["quadratic", "factoring", "formula", "discriminant", "high school", "roots"],
  },

  {
    id: "trigonometry-basics",
    title: "Trigonometry",
    subtitle: "Sin, Cos, Tan and the Pythagorean Theorem",
    level: "High School",
    category: "Geometry",
    emoji: "🔺",
    description: "Use trigonometric ratios to find missing sides and angles in right-angled triangles.",
    explanation: [
      "Trigonometry studies relationships between angles and sides in triangles. In a right-angled triangle, we label sides relative to the angle θ: Opposite (across from θ), Adjacent (next to θ), Hypotenuse (longest side, opposite right angle).",
      "The three main ratios: Sin θ = Opposite/Hypotenuse, Cos θ = Adjacent/Hypotenuse, Tan θ = Opposite/Adjacent. Remember: SOH CAH TOA.",
      "Pythagoras' Theorem: In a right triangle, a² + b² = c² where c is the hypotenuse. Use this to find a missing side when you know two sides.",
      "To find an angle, use inverse functions: θ = sin⁻¹(O/H), θ = cos⁻¹(A/H), θ = tan⁻¹(O/A).",
    ],
    keyPoints: [
      "SOH: Sin = Opposite/Hypotenuse",
      "CAH: Cos = Adjacent/Hypotenuse",
      "TOA: Tan = Opposite/Adjacent",
      "Pythagoras: a² + b² = c²",
      "Use inverse trig to find angles",
    ],
    examples: [
      {
        title: "Finding a missing side",
        problem: "In a right triangle, angle θ = 35°, hypotenuse = 10 cm. Find the opposite side.",
        steps: [
          "We know: angle (35°) and hypotenuse (10 cm). Want: opposite.",
          "Use SOH: Sin θ = Opposite/Hypotenuse",
          "Sin 35° = Opposite/10",
          "Opposite = 10 × Sin 35° = 10 × 0.5736 = 5.74 cm",
        ],
        answer: "5.74 cm",
      },
      {
        title: "Pythagoras Theorem",
        problem: "Find the hypotenuse of a right triangle with legs 6 cm and 8 cm.",
        steps: [
          "Use a² + b² = c²",
          "6² + 8² = c²",
          "36 + 64 = c²",
          "c² = 100",
          "c = √100 = 10 cm",
        ],
        answer: "10 cm",
      },
    ],
    exercises: [
      { problem: "Find the hypotenuse when legs are 5 cm and 12 cm", hint: "a² + b² = c²", answer: "13 cm", solution: "25 + 144 = 169. √169 = 13 cm" },
      { problem: "In a right triangle, angle = 45°, adjacent = 8 m. Find the opposite.", hint: "TOA: Tan 45° = 1", answer: "8 m", solution: "Tan 45° = 1. Opposite = 8 × Tan 45° = 8 × 1 = 8 m" },
      { problem: "Find angle θ if opposite = 6, hypotenuse = 10", hint: "θ = sin⁻¹(6/10)", answer: "36.87°", solution: "Sin θ = 0.6. θ = sin⁻¹(0.6) ≈ 36.87°" },
      { problem: "Is a triangle with sides 8, 15, 17 a right triangle?", hint: "Check if 8² + 15² = 17²", answer: "Yes", solution: "64 + 225 = 289 = 17² ✓ It is a right triangle." },
      { problem: "A ladder 5m long leans against a wall at 60°. How high does it reach?", hint: "Use SOH: height = hypotenuse × sin 60°", answer: "4.33 m", solution: "Height = 5 × sin 60° = 5 × 0.866 = 4.33 m" },
    ],
    quiz: [
      { q: "What does SOH stand for?", opts: ["Sin=Opposite×Hypotenuse", "Sin=Opposite/Hypotenuse", "Sum of Hypotenuse", "Side over Height"], ans: 1, explanation: "SOH: Sin = Opposite/Hypotenuse. The O and H are the opposite and hypotenuse sides." },
      { q: "A right triangle has legs 3 and 4. What is the hypotenuse?", opts: ["5", "7", "6", "√7"], ans: 0, explanation: "3²+4²=9+16=25. √25=5. This is the famous 3-4-5 Pythagorean triple!" },
      { q: "What is tan(45°)?", opts: ["0", "0.5", "1", "√2"], ans: 2, explanation: "Tan 45° = 1. In a 45-45-90 triangle, opposite = adjacent, so their ratio = 1." },
      { q: "Which ratio uses Adjacent and Hypotenuse?", opts: ["Sin", "Cos", "Tan", "Cot"], ans: 1, explanation: "CAH: Cos = Adjacent/Hypotenuse." },
      { q: "Find the missing leg if hypotenuse=13 and one leg=5", opts:["8", "10", "12", "√194"], ans: 2, explanation: "5²+b²=13². 25+b²=169. b²=144. b=12." },
    ],
    relatedTopics: ["geometry-basics", "area-perimeter"],
    tags: ["trigonometry", "sin", "cos", "tan", "pythagoras", "high school"],
  },

  {
    id: "probability",
    title: "Probability",
    subtitle: "Measuring the chance of events",
    level: "High School",
    category: "Statistics",
    emoji: "🎲",
    description: "Calculate the probability of single and combined events using rules and diagrams.",
    explanation: [
      "Probability measures how likely an event is to occur. It is always between 0 (impossible) and 1 (certain). P(event) = Number of favourable outcomes / Total possible outcomes.",
      "For complementary events: P(A) + P(A') = 1. So P(not A) = 1 − P(A).",
      "For mutually exclusive events (can't both happen): P(A or B) = P(A) + P(B).",
      "For independent events (one doesn't affect the other): P(A and B) = P(A) × P(B). Use tree diagrams to organise combined events.",
    ],
    keyPoints: [
      "Probability: 0 ≤ P(A) ≤ 1",
      "P(event) = favourable / total outcomes",
      "P(not A) = 1 − P(A)",
      "P(A or B) = P(A) + P(B) for mutually exclusive",
      "P(A and B) = P(A) × P(B) for independent events",
    ],
    examples: [
      {
        title: "Basic probability",
        problem: "A bag has 4 red, 3 blue and 5 green balls. Find P(blue).",
        steps: [
          "Total balls = 4 + 3 + 5 = 12",
          "Favourable outcomes (blue) = 3",
          "P(blue) = 3/12 = 1/4",
        ],
        answer: "1/4 = 0.25 = 25%",
      },
      {
        title: "Combined probability",
        problem: "A coin is flipped and a die is rolled. Find P(heads and 6).",
        steps: [
          "P(heads) = 1/2 (independent events)",
          "P(rolling 6) = 1/6",
          "P(heads AND 6) = 1/2 × 1/6 = 1/12",
        ],
        answer: "1/12",
      },
    ],
    exercises: [
      { problem: "A card is drawn from a standard deck (52 cards). Find P(heart).", hint: "There are 13 hearts", answer: "1/4", solution: "P = 13/52 = 1/4" },
      { problem: "P(rain tomorrow) = 0.3. Find P(no rain).", hint: "P(not A) = 1 − P(A)", answer: "0.7", solution: "P(no rain) = 1 − 0.3 = 0.7" },
      { problem: "Roll two dice. Find P(both showing 4).", hint: "Independent events: multiply", answer: "1/36", solution: "P(4) × P(4) = 1/6 × 1/6 = 1/36" },
      { problem: "A bag has 5 red and 3 blue balls. Two drawn with replacement. Find P(both red).", hint: "With replacement: independent events", answer: "25/64", solution: "P(red) = 5/8. P(both red) = 5/8 × 5/8 = 25/64" },
      { problem: "P(A)=0.4, P(B)=0.3. They are mutually exclusive. Find P(A or B).", hint: "Add probabilities for mutually exclusive", answer: "0.7", solution: "P(A or B) = 0.4 + 0.3 = 0.7" },
    ],
    quiz: [
      { q: "What is the probability of rolling a number > 4 on a standard die?", opts: ["1/3", "1/2", "1/6", "2/3"], ans: 0, explanation: "Numbers > 4 are {5,6}: 2 outcomes. P = 2/6 = 1/3." },
      { q: "P(A) = 0.65. What is P(not A)?", opts: ["0.35", "0.65", "1.65", "−0.35"], ans: 0, explanation: "P(not A) = 1 − 0.65 = 0.35" },
      { q: "Two independent events have P(A)=0.5 and P(B)=0.4. What is P(A and B)?", opts: ["0.9", "0.1", "0.2", "0.45"], ans: 2, explanation: "P(A and B) = 0.5 × 0.4 = 0.2" },
      { q: "Which probability is impossible?", opts: ["0", "0.5", "1", "1.2"], ans: 3, explanation: "Probability must be between 0 and 1 inclusive. 1.2 > 1, which is impossible." },
      { q: "A fair coin is flipped 3 times. P(all heads)?", opts: ["1/2", "1/4", "1/8", "1/6"], ans: 2, explanation: "P = 1/2 × 1/2 × 1/2 = 1/8" },
    ],
    relatedTopics: ["statistics-basics", "statistics-advanced"],
    tags: ["probability", "chance", "events", "high school", "independent"],
  },

  // ── UNIVERSITY ────────────────────────────────────────────────────────────────

  {
    id: "differentiation",
    title: "Differentiation (Calculus)",
    subtitle: "Finding rates of change and gradients of curves",
    level: "University",
    category: "Calculus",
    emoji: "∂",
    description: "Learn differential calculus — finding derivatives to calculate rates of change and optimise functions.",
    explanation: [
      "Differentiation is the process of finding the derivative of a function. The derivative dy/dx (or f'(x)) represents the instantaneous rate of change of y with respect to x — the gradient of the curve at any point.",
      "Basic rule (Power Rule): If y = xⁿ, then dy/dx = nxⁿ⁻¹. Bring the power down and reduce the power by 1.",
      "Key derivatives: d/dx(sin x) = cos x, d/dx(cos x) = −sin x, d/dx(eˣ) = eˣ, d/dx(ln x) = 1/x.",
      "Chain Rule: If y = f(g(x)), then dy/dx = f'(g(x)) × g'(x). Product Rule: d/dx(uv) = u'v + uv'. Quotient Rule: d/dx(u/v) = (u'v − uv')/v².",
    ],
    keyPoints: [
      "Power rule: d/dx(xⁿ) = nxⁿ⁻¹",
      "Constant rule: d/dx(c) = 0",
      "d/dx(eˣ) = eˣ, d/dx(ln x) = 1/x",
      "Chain rule: dy/dx = dy/du × du/dx",
      "Set dy/dx = 0 to find stationary points",
    ],
    examples: [
      {
        title: "Basic differentiation",
        problem: "Differentiate y = 4x³ − 5x² + 3x − 7",
        steps: [
          "Apply power rule to each term:",
          "d/dx(4x³) = 12x²",
          "d/dx(−5x²) = −10x",
          "d/dx(3x) = 3",
          "d/dx(−7) = 0",
          "dy/dx = 12x² − 10x + 3",
        ],
        answer: "dy/dx = 12x² − 10x + 3",
      },
      {
        title: "Finding stationary points",
        problem: "Find and classify the stationary point of y = x² − 4x + 1",
        steps: [
          "dy/dx = 2x − 4",
          "Set dy/dx = 0: 2x − 4 = 0 → x = 2",
          "y = 4 − 8 + 1 = −3",
          "d²y/dx² = 2 > 0 → minimum",
          "Stationary point: (2, −3) minimum",
        ],
        answer: "(2, −3) is a minimum point",
      },
    ],
    exercises: [
      { problem: "Differentiate y = 6x⁴ − 3x² + x", hint: "Apply power rule to each term", answer: "24x³ − 6x + 1", solution: "d/dx: 24x³ − 6x + 1" },
      { problem: "Find the gradient of y = x³ − 2x at x = 3", hint: "Differentiate then substitute x=3", answer: "25", solution: "dy/dx = 3x²−2. At x=3: 27−2 = 25" },
      { problem: "Differentiate y = (2x+3)⁵ using chain rule", hint: "Let u = 2x+3, dy/dx = 5u⁴ × du/dx", answer: "10(2x+3)⁴", solution: "5(2x+3)⁴ × 2 = 10(2x+3)⁴" },
      { problem: "Find stationary points of y = 2x³ − 9x² + 12x", hint: "Set dy/dx = 0 and solve", answer: "x=1 (max) and x=2 (min)", solution: "dy/dx=6x²−18x+12=6(x−1)(x−2)=0. x=1,2. d²y/dx²=12x−18. At x=1: −6<0 max. At x=2: 6>0 min." },
      { problem: "Differentiate y = sin(3x)", hint: "Chain rule: cos(3x) × 3", answer: "3cos(3x)", solution: "d/dx(sin(3x)) = cos(3x) × 3 = 3cos(3x)" },
    ],
    quiz: [
      { q: "What is dy/dx when y = 7x⁴?", opts: ["7x³", "28x³", "28x⁴", "4x³"], ans: 1, explanation: "Power rule: bring down 4, reduce power: 4×7x³ = 28x³" },
      { q: "What is d/dx(5)?", opts: ["5", "5x", "1", "0"], ans: 3, explanation: "The derivative of any constant is 0." },
      { q: "If dy/dx = 0, the point is called a:", opts: ["Tangent", "Normal", "Stationary point", "Turning point only"], ans: 2, explanation: "When dy/dx = 0, the gradient is zero — this is a stationary point (could be max, min or inflection)." },
      { q: "What is d/dx(eˣ)?", opts: ["xeˣ⁻¹", "eˣ⁺¹", "eˣ", "1/eˣ"], ans: 2, explanation: "eˣ is special — its derivative is itself: d/dx(eˣ) = eˣ" },
      { q: "Differentiate y = x² + 3x. At x=2, gradient =?", opts: ["4", "7", "10", "14"], ans: 1, explanation: "dy/dx = 2x+3. At x=2: 4+3 = 7" },
    ],
    relatedTopics: ["integration", "functions-graphs"],
    tags: ["differentiation", "calculus", "derivative", "gradient", "university"],
  },

  {
    id: "integration",
    title: "Integration (Calculus)",
    subtitle: "Finding areas and reversing differentiation",
    level: "University",
    category: "Calculus",
    emoji: "∫",
    description: "Master integral calculus — finding areas under curves and solving differential equations.",
    explanation: [
      "Integration is the reverse of differentiation. The indefinite integral ∫f(x)dx gives a family of functions F(x) + C, where C is the constant of integration.",
      "Power Rule for Integration: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (for n ≠ −1). Increase the power by 1 and divide by the new power.",
      "Definite integrals ∫ₐᵇ f(x)dx calculate the exact area under a curve between x=a and x=b. The result is F(b) − F(a) (no constant C needed).",
      "Key integrals: ∫eˣ dx = eˣ + C, ∫(1/x)dx = ln|x| + C, ∫sin x dx = −cos x + C, ∫cos x dx = sin x + C.",
    ],
    keyPoints: [
      "∫xⁿ dx = xⁿ⁺¹/(n+1) + C",
      "Always add + C for indefinite integrals",
      "Definite integral: F(b) − F(a)",
      "∫eˣ dx = eˣ + C",
      "Area between curves: ∫[f(x)−g(x)]dx",
    ],
    examples: [
      {
        title: "Indefinite integration",
        problem: "Find ∫(3x² + 4x − 5)dx",
        steps: [
          "∫3x² dx = 3x³/3 = x³",
          "∫4x dx = 4x²/2 = 2x²",
          "∫−5 dx = −5x",
          "Add constant: + C",
          "Answer: x³ + 2x² − 5x + C",
        ],
        answer: "x³ + 2x² − 5x + C",
      },
      {
        title: "Definite integral (area)",
        problem: "Evaluate ∫₁³ (x² + 1)dx",
        steps: [
          "Integrate: F(x) = x³/3 + x",
          "F(3) = 27/3 + 3 = 9 + 3 = 12",
          "F(1) = 1/3 + 1 = 4/3",
          "Area = F(3) − F(1) = 12 − 4/3 = 32/3",
        ],
        answer: "32/3 ≈ 10.67",
      },
    ],
    exercises: [
      { problem: "Find ∫(5x⁴ − 2x + 3)dx", hint: "Apply power rule to each term, add C", answer: "x⁵ − x² + 3x + C", solution: "5x⁵/5 − 2x²/2 + 3x + C = x⁵ − x² + 3x + C" },
      { problem: "Evaluate ∫₀² (2x + 1)dx", hint: "Integrate, then F(2)−F(0)", answer: "6", solution: "F(x)=x²+x. F(2)=4+2=6. F(0)=0. Area=6−0=6" },
      { problem: "Find ∫eˣ dx", hint: "Special integral — eˣ integrates to itself", answer: "eˣ + C", solution: "∫eˣ dx = eˣ + C" },
      { problem: "Find ∫(1/x)dx", hint: "Special case: ln|x| + C", answer: "ln|x| + C", solution: "∫(1/x)dx = ln|x| + C" },
      { problem: "Find the area under y=x² from x=0 to x=3", hint: "∫₀³ x² dx", answer: "9", solution: "F(x)=x³/3. F(3)=9. F(0)=0. Area=9." },
    ],
    quiz: [
      { q: "What is ∫x³ dx?", opts: ["3x²+C", "x⁴+C", "x⁴/4+C", "4x⁴+C"], ans: 2, explanation: "Power rule: x³⁺¹/(3+1) + C = x⁴/4 + C" },
      { q: "Why do we add + C in indefinite integrals?", opts: ["For accuracy", "For any constant lost in differentiation", "To make it positive", "Convention only"], ans: 1, explanation: "When differentiating, constants disappear. Integration reverses this, so we add C to represent any constant that might have been there." },
      { q: "What is ∫cos x dx?", opts: ["−sin x+C", "sin x+C", "−cos x+C", "tan x+C"], ans: 1, explanation: "∫cos x dx = sin x + C. Check: d/dx(sin x) = cos x ✓" },
      { q: "Evaluate ∫₀¹ x dx", opts: ["0", "1/2", "1", "2"], ans: 1, explanation: "F(x)=x²/2. F(1)=1/2. F(0)=0. Definite integral = 1/2." },
      { q: "Integration is the reverse of:", opts: ["Addition", "Differentiation", "Multiplication", "Trigonometry"], ans: 1, explanation: "Integration reverses differentiation. If you differentiate the integral you get back the original function." },
    ],
    relatedTopics: ["differentiation", "functions-graphs"],
    tags: ["integration", "calculus", "area", "university", "integral"],
  },

  // ── PROFESSIONAL ──────────────────────────────────────────────────────────────

  {
    id: "statistics-advanced",
    title: "Advanced Statistics",
    subtitle: "Normal distribution, hypothesis testing and regression",
    level: "University",
    category: "Statistics",
    emoji: "📉",
    description: "University-level statistics including normal distribution, standard deviation and hypothesis testing.",
    explanation: [
      "Standard deviation (σ) measures how spread out data is from the mean. A small σ means data is clustered closely; large σ means widely spread. Variance = σ².",
      "The Normal Distribution is a symmetric bell-shaped curve. Mean, median and mode are equal. 68% of data lies within 1σ, 95% within 2σ, 99.7% within 3σ (Empirical Rule).",
      "Z-score measures how many standard deviations a value is from the mean: Z = (X − μ)/σ. Use Z-tables to find probabilities.",
      "Hypothesis Testing: Set up null hypothesis H₀ and alternative H₁. Calculate test statistic, find p-value. If p < significance level α, reject H₀.",
    ],
    keyPoints: [
      "σ = √(Σ(x−μ)²/n) for population",
      "Normal distribution: symmetric, μ=median=mode",
      "Z = (X − μ) / σ",
      "68-95-99.7 rule",
      "p < 0.05 → reject null hypothesis (usually)",
    ],
    examples: [
      {
        title: "Calculating Z-score",
        problem: "Heights are normally distributed: μ=170cm, σ=10cm. Find P(X < 185)",
        steps: [
          "Calculate Z: Z = (185−170)/10 = 1.5",
          "Look up Z=1.5 in standard normal table",
          "P(Z < 1.5) = 0.9332",
          "P(X < 185) = 93.32%",
        ],
        answer: "93.32%",
      },
    ],
    exercises: [
      { problem: "Data: 2, 4, 4, 4, 5, 5, 7, 9. Find mean and standard deviation.", hint: "Mean first, then σ = √(Σ(x−μ)²/n)", answer: "Mean=5, σ=2", solution: "Mean=40/8=5. Deviations²: 9,1,1,1,0,0,4,16. Avg=32/8=4. σ=√4=2" },
      { problem: "A student scores 75 on a test where μ=65, σ=10. What is their Z-score?", hint: "Z = (X−μ)/σ", answer: "Z = 1", solution: "Z = (75−65)/10 = 10/10 = 1. One standard deviation above mean." },
      { problem: "In a normal distribution, what % of data falls within 2 standard deviations?", hint: "Empirical rule", answer: "95%", solution: "The empirical rule: 95% of data falls within 2 standard deviations of the mean." },
    ],
    quiz: [
      { q: "What does a Z-score of 0 mean?", opts: ["The value is 0", "The value equals the mean", "Standard deviation is 0", "Probability is 0"], ans: 1, explanation: "Z=0 means (X−μ)/σ=0, so X=μ. The value is exactly at the mean." },
      { q: "What does a small standard deviation indicate?", opts: ["Data is spread out", "Data is clustered near mean", "Mean is small", "Large sample size"], ans: 1, explanation: "Small σ means most values are close to the mean — data is tightly clustered." },
      { q: "In hypothesis testing, if p=0.03 and α=0.05, we:", opts: ["Accept H₀", "Reject H₀", "Need more data", "Change α"], ans: 1, explanation: "p < α (0.03 < 0.05), so we reject the null hypothesis H₀." },
      { q: "The normal distribution is:", opts: ["Right-skewed", "Left-skewed", "Symmetric", "Uniform"], ans: 2, explanation: "The normal distribution is perfectly symmetric about its mean, forming a bell shape." },
      { q: "What percentage of data lies within 1 standard deviation in a normal distribution?", opts: ["50%", "68%", "95%", "99.7%"], ans: 1, explanation: "The empirical rule: 68% within 1σ, 95% within 2σ, 99.7% within 3σ." },
    ],
    relatedTopics: ["statistics-basics", "probability"],
    tags: ["statistics", "normal distribution", "z-score", "hypothesis", "university"],
  },

  {
    id: "financial-math",
    title: "Financial Mathematics",
    subtitle: "Interest, investments, loans and annuities",
    level: "Professional",
    category: "Applied Math",
    emoji: "💰",
    description: "Essential financial math for professionals — compound interest, NPV, IRR and loan calculations.",
    explanation: [
      "Simple Interest: I = PRT where P=principal, R=annual rate, T=time in years. Total = P + I. Used for short-term loans.",
      "Compound Interest: A = P(1 + r/n)ⁿᵗ where n=compounding frequency, t=years. Money grows faster than simple interest because interest earns interest.",
      "Net Present Value (NPV) determines if an investment is worthwhile. NPV = Σ[CF/(1+r)ᵗ] − Initial Investment. If NPV > 0, accept the investment.",
      "Time Value of Money: A dollar today is worth more than a dollar in the future due to inflation and investment potential. PV = FV/(1+r)ⁿ and FV = PV(1+r)ⁿ.",
    ],
    keyPoints: [
      "Simple Interest: I = PRT",
      "Compound Interest: A = P(1+r/n)ⁿᵗ",
      "PV = FV/(1+r)ⁿ",
      "NPV > 0 → accept investment",
      "IRR = rate where NPV = 0",
    ],
    examples: [
      {
        title: "Compound interest",
        problem: "Invest $5000 at 8% per year compounded quarterly for 3 years.",
        steps: [
          "P=5000, r=0.08, n=4, t=3",
          "A = 5000(1 + 0.08/4)^(4×3)",
          "A = 5000(1.02)^12",
          "A = 5000 × 1.2682 = $6,341",
        ],
        answer: "$6,341",
      },
      {
        title: "NPV calculation",
        problem: "Investment $10,000. Cash flows: Year 1=$4000, Year 2=$5000, Year 3=$4000. Rate=10%. Find NPV.",
        steps: [
          "PV₁ = 4000/1.1 = 3636",
          "PV₂ = 5000/1.1² = 4132",
          "PV₃ = 4000/1.1³ = 3005",
          "Total PV = 10773",
          "NPV = 10773 − 10000 = $773 > 0 → Accept",
        ],
        answer: "NPV = $773 — Accept the investment",
      },
    ],
    exercises: [
      { problem: "Calculate simple interest on $2000 at 5% for 3 years.", hint: "I = PRT", answer: "$300", solution: "I = 2000 × 0.05 × 3 = $300. Total = $2300" },
      { problem: "What is $1000 worth in 5 years at 6% compound interest (annually)?", hint: "A = P(1+r)ⁿ", answer: "$1,338.23", solution: "A = 1000(1.06)⁵ = 1000 × 1.3382 = $1,338.23" },
      { problem: "What is the present value of $5000 due in 4 years at 8%?", hint: "PV = FV/(1+r)ⁿ", answer: "$3,675.15", solution: "PV = 5000/(1.08)⁴ = 5000/1.3605 = $3,675.15" },
      { problem: "Investment returns $3000/year for 3 years. Discount rate=10%. Initial cost=$7000. Accept or reject?", hint: "Calculate NPV", answer: "Accept — NPV > 0", solution: "PV=3000/1.1+3000/1.21+3000/1.331=2727+2479+2254=7460. NPV=7460−7000=460>0. Accept." },
    ],
    quiz: [
      { q: "Simple interest on $1000 at 10% for 2 years?", opts: ["$100", "$200", "$210", "$220"], ans: 1, explanation: "I = PRT = 1000 × 0.1 × 2 = $200" },
      { q: "Which grows faster: simple or compound interest?", opts: ["Simple", "Compound", "Same", "Depends on rate"], ans: 1, explanation: "Compound interest grows faster because interest earns interest — exponential vs linear growth." },
      { q: "If NPV < 0, the investment should be:", opts:["Accepted", "Rejected", "Reconsidered", "Calculated again"], ans: 1, explanation: "NPV < 0 means the investment loses money in present value terms — reject it." },
      { q: "FV = PV(1+r)ⁿ. If PV=1000, r=5%, n=2, FV=?", opts: ["$1050", "$1100", "$1102.50", "$1105"], ans: 2, explanation: "FV = 1000(1.05)² = 1000 × 1.1025 = $1,102.50" },
      { q: "Time value of money says:", opts: ["Money loses value over time", "Money today > same money in future", "Interest rates are always positive", "Inflation doesn't matter"], ans: 1, explanation: "A dollar today is worth more than a dollar in the future — you can invest it and earn returns." },
    ],
    relatedTopics: ["ratios-proportions", "statistics-advanced"],
    tags: ["financial", "interest", "investment", "NPV", "professional", "compound"],
  },

  {
    id: "linear-algebra",
    title: "Linear Algebra",
    subtitle: "Matrices, vectors and systems of equations",
    level: "University",
    category: "Advanced Algebra",
    emoji: "🔲",
    description: "Introduction to matrices, matrix operations, determinants, and solving linear systems.",
    explanation: [
      "A matrix is a rectangular array of numbers arranged in rows and columns. A matrix with m rows and n columns is called an m×n matrix.",
      "Matrix Addition: Matrices of the same size are added element by element. Matrix Multiplication: (AB)ᵢⱼ = sum of row i of A × column j of B. Note: AB ≠ BA in general.",
      "The determinant of a 2×2 matrix [a b; c d] is det(A) = ad − bc. If det(A) = 0, the matrix is singular (no inverse).",
      "The inverse matrix A⁻¹ satisfies AA⁻¹ = I (identity matrix). For 2×2: A⁻¹ = (1/det(A))[d −b; −c a]. Used to solve systems AX = B → X = A⁻¹B.",
    ],
    keyPoints: [
      "Matrix: m×n array of numbers",
      "Matrix multiplication: rows × columns",
      "det(A) = ad − bc for 2×2",
      "A⁻¹ exists only when det(A) ≠ 0",
      "AX = B → X = A⁻¹B",
    ],
    examples: [
      {
        title: "Matrix multiplication",
        problem: "Multiply A=[1 2; 3 4] × B=[5 6; 7 8]",
        steps: [
          "(AB)₁₁ = 1×5 + 2×7 = 5+14 = 19",
          "(AB)₁₂ = 1×6 + 2×8 = 6+16 = 22",
          "(AB)₂₁ = 3×5 + 4×7 = 15+28 = 43",
          "(AB)₂₂ = 3×6 + 4×8 = 18+32 = 50",
          "AB = [19 22; 43 50]",
        ],
        answer: "AB = [19 22; 43 50]",
      },
      {
        title: "Finding the inverse",
        problem: "Find the inverse of A=[3 1; 5 2]",
        steps: [
          "det(A) = 3×2 − 1×5 = 6−5 = 1",
          "A⁻¹ = (1/1)[2 −1; −5 3]",
          "A⁻¹ = [2 −1; −5 3]",
          "Check: A×A⁻¹ = [1 0; 0 1] ✓",
        ],
        answer: "A⁻¹ = [2 −1; −5 3]",
      },
    ],
    exercises: [
      { problem: "Find det([4 2; 3 1])", hint: "det = ad − bc", answer: "−2", solution: "det = 4×1 − 2×3 = 4−6 = −2" },
      { problem: "Add matrices A=[1 3; 2 4] and B=[5 1; 0 3]", hint: "Add element by element", answer: "[6 4; 2 7]", solution: "[1+5, 3+1; 2+0, 4+3] = [6 4; 2 7]" },
      { problem: "Find the inverse of [2 1; 1 1]", hint: "det=1, swap a,d and negate b,c", answer: "[1 −1; −1 2]", solution: "det=2−1=1. A⁻¹=[1 −1; −1 2]" },
    ],
    quiz: [
      { q: "What is the determinant of [5 2; 3 1]?", opts: ["−1", "1", "5", "11"], ans: 0, explanation: "det = 5×1 − 2×3 = 5−6 = −1" },
      { q: "When does a matrix inverse NOT exist?", opts: ["When det=1", "When det=0", "When matrix is square", "When matrix is 2×2"], ans: 1, explanation: "A matrix is singular (no inverse) when its determinant equals 0." },
      { q: "Matrix multiplication AB = BA is:", opts: ["Always true", "Never true", "Not always true", "True for square matrices only"], ans: 2, explanation: "Matrix multiplication is generally not commutative. AB ≠ BA in most cases." },
      { q: "What is the identity matrix I for 2×2?", opts: ["[0 0; 0 0]", "[1 1; 1 1]", "[1 0; 0 1]", "[2 0; 0 2]"], ans: 2, explanation: "[1 0; 0 1] is the identity matrix. AI = IA = A for any matrix A." },
      { q: "To solve AX=B using matrices:", opts: ["X=AB", "X=A⁻¹B", "X=BA⁻¹", "X=B/A"], ans: 1, explanation: "Multiply both sides by A⁻¹: A⁻¹AX = A⁻¹B → IX = A⁻¹B → X = A⁻¹B" },
    ],
    relatedTopics: ["linear-equations", "differentiation"],
    tags: ["matrices", "linear algebra", "determinant", "inverse", "university"],
  },

  {
    id: "number-theory",
    title: "Number Theory",
    subtitle: "Primes, divisibility, GCF, LCM and modular arithmetic",
    level: "High School",
    category: "Number System",
    emoji: "🔍",
    description: "Explore the mathematical properties of integers — prime numbers, factors, multiples and modular arithmetic.",
    explanation: [
      "A prime number is a natural number greater than 1 with exactly two factors: 1 and itself. Examples: 2, 3, 5, 7, 11, 13... The fundamental theorem of arithmetic states every integer > 1 has a unique prime factorization.",
      "GCF (Greatest Common Factor): the largest number that divides both. Find using prime factorization or Euclidean algorithm. LCM (Least Common Multiple): the smallest number divisible by both. LCM × GCF = product of the two numbers.",
      "Divisibility rules: A number is divisible by 2 if it ends in an even digit; by 3 if digit sum is divisible by 3; by 5 if it ends in 0 or 5; by 9 if digit sum is divisible by 9.",
      "Modular arithmetic (clock arithmetic): a ≡ b (mod n) means a and b leave the same remainder when divided by n. Used in cryptography, computer science and competition maths.",
    ],
    keyPoints: [
      "Prime: exactly 2 factors (1 and itself)",
      "Every integer has unique prime factorization",
      "GCF: largest common factor",
      "LCM: smallest common multiple",
      "LCM × GCF = product of two numbers",
    ],
    examples: [
      {
        title: "Prime factorization and GCF/LCM",
        problem: "Find GCF and LCM of 36 and 48",
        steps: [
          "36 = 2² × 3²",
          "48 = 2⁴ × 3",
          "GCF: take minimum powers: 2² × 3 = 12",
          "LCM: take maximum powers: 2⁴ × 3² = 144",
          "Check: 36 × 48 = 1728 = 12 × 144 ✓",
        ],
        answer: "GCF = 12, LCM = 144",
      },
    ],
    exercises: [
      { problem: "List all prime numbers between 20 and 40", hint: "Check each number for divisibility", answer: "23, 29, 31, 37", solution: "23(prime), 29(prime), 31(prime), 37(prime). Others divisible by small primes." },
      { problem: "Find GCF(24, 36)", hint: "Use prime factorization or list factors", answer: "12", solution: "24=2³×3, 36=2²×3². GCF=2²×3=12" },
      { problem: "Find LCM(4, 6, 10)", hint: "LCM = product of highest prime powers", answer: "60", solution: "4=2², 6=2×3, 10=2×5. LCM=2²×3×5=60" },
      { problem: "Is 2024 divisible by 8?", hint: "Check last 3 digits", answer: "Yes", solution: "024 ÷ 8 = 3. So 2024 is divisible by 8." },
      { problem: "What is 17 mod 5?", hint: "Find remainder when 17 is divided by 5", answer: "2", solution: "17 = 3×5 + 2. So 17 mod 5 = 2." },
    ],
    quiz: [
      { q: "Which is a prime number?", opts: ["51", "57", "61", "91"], ans: 2, explanation: "61 is prime. 51=3×17, 57=3×19, 91=7×13." },
      { q: "What is GCF(18, 24)?", opts: ["3", "4", "6", "12"], ans: 2, explanation: "18=2×3², 24=2³×3. GCF=2×3=6" },
      { q: "What is LCM(4, 6)?", opts: ["2", "12", "24", "6"], ans: 1, explanation: "4=2², 6=2×3. LCM=2²×3=12" },
      { q: "Is 2 a prime number?", opts: ["No — it's even", "Yes — it's the only even prime", "No — too small", "Yes — all even numbers are prime"], ans: 1, explanation: "2 is the only even prime number. It has exactly two factors: 1 and 2." },
      { q: "What is 23 mod 7?", opts: ["2", "3", "4", "7"], ans: 0, explanation: "23 = 3×7 + 2. So 23 mod 7 = 2." },
    ],
    relatedTopics: ["algebra-basics", "fractions-basics"],
    tags: ["prime", "GCF", "LCM", "modular", "high school", "number theory"],
  },

];

// Helper functions
export function getTopicById(id: string): MathTopic | undefined {
  return MATH_TOPICS.find(t => t.id === id);
}

export function getTopicsByLevel(level: Level): MathTopic[] {
  return MATH_TOPICS.filter(t => t.level === level);
}

export function getTopicsByCategory(category: string): MathTopic[] {
  return MATH_TOPICS.filter(t => t.category === category);
}

export function searchTopics(query: string): MathTopic[] {
  const q = query.toLowerCase();
  return MATH_TOPICS.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.tags.some(tag => tag.includes(q)) ||
    t.category.toLowerCase().includes(q)
  );
}

export const LEVELS: Level[] = ["Elementary", "Middle School", "High School", "University", "Professional"];
export const CATEGORIES = [...new Set(MATH_TOPICS.map(t => t.category))];