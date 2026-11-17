// Cambridge Mathematics flashcards and mind maps (O Level 4024 and IGCSE 0580).
// SERVER-ONLY. Keyed by IGCSE 0580 topic number.
import type { TopicRevision } from "./oLevelAccountingRevisionTypes";

export const MATHS_REVISION: Record<string, TopicRevision> = {
  "1.1": {
    "mindMap": {
      "centre": "Types of number",
      "branches": [
        {
          "label": "Kinds of number",
          "items": [
            "Natural: 1, 2, 3, ...",
            "Integer: whole numbers, also negative and 0",
            "Rational: can be a fraction, like 3/4",
            "Irrational: cannot be a fraction, like √2 or π"
          ]
        },
        {
          "label": "Primes",
          "items": [
            "Prime: exactly two factors",
            "2 is the only even prime",
            "1 is not prime"
          ]
        },
        {
          "label": "Factors and multiples",
          "items": [
            "Factor: divides in exactly",
            "Multiple: in the times table",
            "HCF: primes in both, smaller power",
            "LCM: all primes, bigger power"
          ]
        },
        {
          "label": "Squares, cubes, reciprocals",
          "items": [
            "Square: n × n",
            "Cube: n × n × n",
            "Reciprocal: 1 ÷ the number"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a prime number?",
        "back": "A number with exactly two factors: 1 and itself. Example: 7."
      },
      {
        "front": "Is 1 a prime number?",
        "back": "No. It has only one factor."
      },
      {
        "front": "Write 72 as a product of prime factors.",
        "back": "72 = 2³ × 3²"
      },
      {
        "front": "Find the HCF of 24 and 36.",
        "back": "12"
      },
      {
        "front": "Find the LCM of 12 and 18.",
        "back": "36"
      },
      {
        "front": "Two buses leave together every 12 and 18 minutes. When do they next leave together?",
        "back": "After 36 minutes (the LCM)."
      },
      {
        "front": "What is the reciprocal of 2/3?",
        "back": "3/2"
      },
      {
        "front": "Is 0.333... rational or irrational?",
        "back": "Rational. It equals 1/3."
      },
      {
        "front": "Write six billion in figures.",
        "back": "6 000 000 000"
      }
    ]
  },
  "1.2": {
    "mindMap": {
      "centre": "Sets",
      "branches": [
        {
          "label": "Notation",
          "items": [
            "{ } lists the elements",
            "n(A): number of elements in A",
            "ℰ: the universal set",
            "A′: everything not in A"
          ]
        },
        {
          "label": "Union and intersection",
          "items": [
            "A ∪ B: in A or B or both",
            "A ∩ B: in both A and B (the overlap)"
          ]
        },
        {
          "label": "Venn diagrams",
          "items": [
            "Fill the overlap first",
            "Then the 'only' parts",
            "Then the outside",
            "Check the total"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "∈ is an element of, ∉ is not",
            "∅ empty set",
            "⊆ subset, ⊈ not a subset",
            "Three-set Venn diagrams"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What does A ∩ B mean?",
        "back": "Elements in both A and B: the overlap."
      },
      {
        "front": "What does A ∪ B mean?",
        "back": "Elements in A or B or both."
      },
      {
        "front": "What does A′ mean?",
        "back": "Everything in the universal set that is not in A."
      },
      {
        "front": "30 students: 18 cricket, 12 football, 5 both. How many neither?",
        "back": "5"
      },
      {
        "front": "In a Venn diagram, which region do you fill first?",
        "back": "The overlap (the middle)."
      },
      {
        "front": "What does n(A) = 4 mean?",
        "back": "Set A has 4 elements."
      },
      {
        "front": "(Extended and O Level) What does ∅ mean?",
        "back": "The empty set: a set with nothing in it."
      },
      {
        "front": "(Extended and O Level) Is {2, 4} ⊆ {2, 4, 6}?",
        "back": "Yes. Every element of {2, 4} is in {2, 4, 6}."
      }
    ]
  },
  "1.3": {
    "mindMap": {
      "centre": "Powers and roots",
      "branches": [
        {
          "label": "Squares to learn",
          "items": [
            "1² to 15²",
            "121, 144, 169, 196, 225",
            "√225 = 15"
          ]
        },
        {
          "label": "Cubes to learn",
          "items": [
            "1, 8, 27, 64, 125, 1000",
            "∛125 = 5",
            "∛1000 = 10"
          ]
        },
        {
          "label": "Other powers",
          "items": [
            "2⁵ = 32",
            "3⁴ = 81",
            "⁴√81 = 3"
          ]
        },
        {
          "label": "Negative numbers",
          "items": [
            "(-5)² = 25",
            "(-2)³ = -8",
            "Type (-5)² on a calculator"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is 13²?",
        "back": "169"
      },
      {
        "front": "What is √196?",
        "back": "14"
      },
      {
        "front": "What is 4³?",
        "back": "64"
      },
      {
        "front": "What is ∛125?",
        "back": "5"
      },
      {
        "front": "A square floor has area 16 m². How long is each side?",
        "back": "4 m"
      },
      {
        "front": "What is (-3)²?",
        "back": "9"
      },
      {
        "front": "What is (-2)³?",
        "back": "-8"
      },
      {
        "front": "Between which two whole numbers is √50?",
        "back": "7 and 8 (very close to 7)."
      },
      {
        "front": "What is 2⁵?",
        "back": "32"
      }
    ]
  },
  "1.4": {
    "mindMap": {
      "centre": "Fractions, decimals, percentages",
      "branches": [
        {
          "label": "Fraction words",
          "items": [
            "Proper: 3/4",
            "Improper: 7/4",
            "Mixed number: 1¾",
            "Simplest form: divide by the HCF"
          ]
        },
        {
          "label": "Converting",
          "items": [
            "Fraction to decimal: top ÷ bottom",
            "Decimal to %: × 100",
            "% to fraction: over 100, simplify"
          ]
        },
        {
          "label": "Facts to learn",
          "items": [
            "1/2 = 0.5 = 50%",
            "1/4 = 0.25 = 25%",
            "1/5 = 0.2 = 20%",
            "1/3 = 0.333..."
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Recurring decimal dot notation",
            "0.4̇ = 4/9",
            "Multiply by 10, 100 or 1000, then subtract"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Write 36/48 in its simplest form.",
        "back": "3/4"
      },
      {
        "front": "Write 3/8 as a decimal.",
        "back": "0.375"
      },
      {
        "front": "Write 45% as a fraction in its simplest form.",
        "back": "9/20"
      },
      {
        "front": "Which is bigger: 1/4 or 22%?",
        "back": "1/4 (it is 25%)."
      },
      {
        "front": "Write 7/4 as a mixed number.",
        "back": "1¾"
      },
      {
        "front": "Is 0.3 equal to 1/3?",
        "back": "No. 0.3 = 3/10 and 1/3 = 0.333..."
      },
      {
        "front": "(Extended and O Level) Write 0.4̇ as a fraction.",
        "back": "4/9"
      },
      {
        "front": "(Extended and O Level) Write 0.2̇7̇ as a fraction.",
        "back": "3/11"
      },
      {
        "front": "Write 0.5 as a percentage.",
        "back": "50%"
      }
    ]
  },
  "1.5": {
    "mindMap": {
      "centre": "Ordering",
      "branches": [
        {
          "label": "Symbols",
          "items": [
            "= equal, ≠ not equal",
            "> greater than, < less than",
            "⩾ at least, ⩽ at most",
            "The mouth opens to the bigger number"
          ]
        },
        {
          "label": "Decimals",
          "items": [
            "Line up the points",
            "Add zeros to match",
            "0.5 = 0.50 > 0.45"
          ]
        },
        {
          "label": "Mixed forms",
          "items": [
            "Change all to decimals first",
            "Answer with the numbers as given"
          ]
        },
        {
          "label": "Negatives",
          "items": [
            "Further below 0 is smaller",
            "-5 < -1"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Which is bigger: 0.45 or 0.5?",
        "back": "0.5"
      },
      {
        "front": "Put in ascending order: 2, -5, -1, 0",
        "back": "-5, -1, 0, 2"
      },
      {
        "front": "What does ⩽ mean?",
        "back": "Less than or equal to."
      },
      {
        "front": "A lift holds a maximum of 8 people. Write this using p.",
        "back": "p ⩽ 8"
      },
      {
        "front": "Which is the most: 3/5, 0.58 or 62%?",
        "back": "62%"
      },
      {
        "front": "What does ascending mean?",
        "back": "Smallest to largest."
      },
      {
        "front": "Is -8 bigger than -3?",
        "back": "No. -8 is smaller."
      }
    ]
  },
  "1.6": {
    "mindMap": {
      "centre": "The four operations",
      "branches": [
        {
          "label": "BIDMAS",
          "items": [
            "Brackets",
            "Indices",
            "Divide and Multiply, left to right",
            "Add and Subtract, left to right"
          ]
        },
        {
          "label": "Negative numbers",
          "items": [
            "+(-) means subtract",
            "-(-) means add",
            "Same signs × or ÷: positive",
            "Different signs: negative"
          ]
        },
        {
          "label": "Decimals",
          "items": [
            "Line up points to add",
            "Multiply, then count decimal places",
            "Divide by a whole number"
          ]
        },
        {
          "label": "Fractions",
          "items": [
            "Add or subtract: same bottom first",
            "Multiply: tops × tops, bottoms × bottoms",
            "Divide: flip the second, multiply",
            "Mixed numbers: make improper first"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Work out 5 + 3 × 2.",
        "back": "11"
      },
      {
        "front": "Work out 7 - (-4).",
        "back": "11"
      },
      {
        "front": "Work out (-4) × (-3).",
        "back": "12"
      },
      {
        "front": "Work out 1/3 + 1/4.",
        "back": "7/12"
      },
      {
        "front": "Work out 2/3 × 3/4.",
        "back": "1/2"
      },
      {
        "front": "Work out 3/4 ÷ 1/8.",
        "back": "6"
      },
      {
        "front": "Work out 1.35 × 4.2.",
        "back": "5.67"
      },
      {
        "front": "Work out 2½ - 1¾.",
        "back": "3/4"
      },
      {
        "front": "The temperature goes from -4 °C to 7 °C. How much did it rise?",
        "back": "11 °C"
      }
    ]
  },
  "1.7": {
    "mindMap": {
      "centre": "Indices",
      "branches": [
        {
          "label": "Rules (same base)",
          "items": [
            "Multiply: add the powers",
            "Divide: subtract the powers",
            "Power of a power: multiply"
          ]
        },
        {
          "label": "Zero and negative",
          "items": [
            "a⁰ = 1",
            "a⁻ⁿ = 1/aⁿ",
            "2⁻³ = 1/8"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "a^(1/2) = √a",
            "a^(1/3) = ∛a",
            "a^(m/n): root first, then power",
            "8^(2/3) = 4"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Simplify 2³ × 2⁴.",
        "back": "2⁷"
      },
      {
        "front": "Simplify 5⁶ ÷ 5².",
        "back": "5⁴"
      },
      {
        "front": "Simplify (2³)².",
        "back": "2⁶"
      },
      {
        "front": "What is 7⁰?",
        "back": "1"
      },
      {
        "front": "What is 7⁻²?",
        "back": "1/49"
      },
      {
        "front": "Find the value of 2⁻³ × 2⁴.",
        "back": "2"
      },
      {
        "front": "(Extended and O Level) Find 16^(3/4).",
        "back": "8"
      },
      {
        "front": "(Extended and O Level) Find 27^(-2/3).",
        "back": "1/9"
      },
      {
        "front": "Does a negative power give a negative answer?",
        "back": "No. 2⁻³ = 1/8, which is positive."
      }
    ]
  },
  "1.8": {
    "mindMap": {
      "centre": "Standard form",
      "branches": [
        {
          "label": "The form",
          "items": [
            "A × 10ⁿ",
            "1 ⩽ A < 10",
            "Big numbers: n positive",
            "Small numbers: n negative"
          ]
        },
        {
          "label": "Converting",
          "items": [
            "Point after the first non-zero digit",
            "Count the places moved"
          ]
        },
        {
          "label": "Calculating",
          "items": [
            "Multiply: multiply A, add powers",
            "Divide: divide A, subtract powers",
            "Add or subtract: change to ordinary numbers first",
            "Fix A if it is 10 or more"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Write 8 100 000 000 in standard form.",
        "back": "8.1 × 10⁹"
      },
      {
        "front": "Write 0.00011 in standard form.",
        "back": "1.1 × 10⁻⁴"
      },
      {
        "front": "Write 3.2 × 10⁵ as an ordinary number.",
        "back": "320 000"
      },
      {
        "front": "Work out (3 × 10⁴) × (2 × 10⁵).",
        "back": "6 × 10⁹"
      },
      {
        "front": "Work out (4 × 10³) × (5 × 10²).",
        "back": "2 × 10⁶"
      },
      {
        "front": "Work out (8 × 10⁹) ÷ (2 × 10³).",
        "back": "4 × 10⁶"
      },
      {
        "front": "Is 25 × 10⁴ in standard form?",
        "back": "No. It should be 2.5 × 10⁵."
      },
      {
        "front": "Write 7.05 × 10⁻³ as an ordinary number.",
        "back": "0.00705"
      }
    ]
  },
  "1.9": {
    "mindMap": {
      "centre": "Estimation and rounding",
      "branches": [
        {
          "label": "Rounding rule",
          "items": [
            "5 or more: round up",
            "4 or less: round down",
            "Keep zeros for place value"
          ]
        },
        {
          "label": "Accuracy",
          "items": [
            "Decimal places: after the point",
            "Significant figures: from the first non-zero digit"
          ]
        },
        {
          "label": "Estimating",
          "items": [
            "Round each number to 1 s.f.",
            "Show the rounded numbers"
          ]
        },
        {
          "label": "Sensible answers",
          "items": [
            "Buses needed: round up",
            "Full boxes: round down",
            "Money: 2 d.p."
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Round 5764 to the nearest thousand.",
        "back": "6000"
      },
      {
        "front": "Round 3.14159 to 2 d.p.",
        "back": "3.14"
      },
      {
        "front": "Round 48 372 to 2 s.f.",
        "back": "48 000"
      },
      {
        "front": "Round 0.006271 to 2 s.f.",
        "back": "0.0063"
      },
      {
        "front": "Estimate 38.75 × 412.",
        "back": "40 × 400 = 16 000"
      },
      {
        "front": "130 students, 40 per bus. How many buses?",
        "back": "4"
      },
      {
        "front": "Estimate (6.12 × 49.8) ÷ 0.198.",
        "back": "6 × 50 ÷ 0.2 = 1500"
      },
      {
        "front": "How many s.f. does 0.0063 have?",
        "back": "2"
      }
    ]
  },
  "1.10": {
    "mindMap": {
      "centre": "Limits of accuracy",
      "branches": [
        {
          "label": "Finding bounds",
          "items": [
            "Halve the rounding unit",
            "Lower = value - half",
            "Upper = value + half",
            "Write lower ⩽ x < upper"
          ]
        },
        {
          "label": "Examples",
          "items": [
            "12 m to nearest m: 11.5 to 12.5",
            "14.3 s to 1 d.p.: 14.25 to 14.35",
            "3400 to nearest 100: 3350 to 3450"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Largest a + b: upper + upper",
            "Largest a - b: upper - lower",
            "Largest a ÷ b: upper ÷ lower",
            "Smallest a ÷ b: lower ÷ upper"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "A rope is 12 m to the nearest metre. Give the bounds.",
        "back": "11.5 m ⩽ length < 12.5 m"
      },
      {
        "front": "14.3 s to 1 d.p. What is the lower bound?",
        "back": "14.25 s"
      },
      {
        "front": "3400 to the nearest 100. What is the upper bound?",
        "back": "3450"
      },
      {
        "front": "Why does the upper bound use < and not ⩽?",
        "back": "The upper bound value itself would round up to the next value."
      },
      {
        "front": "(Extended and O Level) Largest value of a ÷ b?",
        "back": "Upper bound of a ÷ lower bound of b."
      },
      {
        "front": "(Extended and O Level) 5 m by 4 m, nearest m. Upper bound of area?",
        "back": "5.5 × 4.5 = 24.75 m²"
      },
      {
        "front": "(Extended and O Level) Smallest value of a - b?",
        "back": "Lower bound of a - upper bound of b."
      }
    ]
  },
  "1.11": {
    "mindMap": {
      "centre": "Ratio and proportion",
      "branches": [
        {
          "label": "Ratio",
          "items": [
            "Order matters: boys : girls",
            "Simplify: divide by the HCF",
            "Same units first"
          ]
        },
        {
          "label": "Sharing",
          "items": [
            "Add the parts",
            "Amount ÷ total parts = one share",
            "Multiply each part"
          ]
        },
        {
          "label": "Proportion",
          "items": [
            "Unitary method: find one first",
            "Recipes: scale up or down",
            "Map scale 1 : 50 000"
          ]
        },
        {
          "label": "Best value",
          "items": [
            "Price per gram or ml",
            "Compare both",
            "Smaller cost per unit is better"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Simplify 20 : 30 : 40.",
        "back": "2 : 3 : 4"
      },
      {
        "front": "Share $350 in the ratio 3 : 4.",
        "back": "$150 and $200"
      },
      {
        "front": "Simplify 50 cm : 2 m.",
        "back": "1 : 4"
      },
      {
        "front": "Blue : yellow = 2 : 5. 6 litres of blue. How much yellow?",
        "back": "15 litres"
      },
      {
        "front": "600 g of rice feeds 4. How much for 10?",
        "back": "1500 g"
      },
      {
        "front": "Map scale 1 : 50 000. 7 cm on the map is how far?",
        "back": "3.5 km"
      },
      {
        "front": "250 ml for $3.00 or 400 ml for $4.40. Which is better value?",
        "back": "400 ml (1.1 cents per ml)"
      }
    ]
  },
  "1.12": {
    "mindMap": {
      "centre": "Rates",
      "branches": [
        {
          "label": "Speed",
          "items": [
            "Speed = distance ÷ time",
            "Distance = speed × time",
            "Time = distance ÷ speed",
            "45 minutes = 0.75 hours"
          ]
        },
        {
          "label": "Everyday rates",
          "items": [
            "Pay per hour",
            "Exchange rate",
            "Fuel per 100 km"
          ]
        },
        {
          "label": "Formula given in exam",
          "items": [
            "Density = mass ÷ volume",
            "Pressure = force ÷ area",
            "Population density = people ÷ area"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Write the formula for speed.",
        "back": "Speed = distance ÷ time"
      },
      {
        "front": "45 km in 3 hours 45 minutes. Average speed?",
        "back": "12 km/h"
      },
      {
        "front": "80 km/h for 2½ hours. Distance?",
        "back": "200 km"
      },
      {
        "front": "Is 3 hours 45 minutes equal to 3.45 hours?",
        "back": "No. It is 3.75 hours."
      },
      {
        "front": "$9.50 per hour for 18 hours. Pay?",
        "back": "$171"
      },
      {
        "front": "Mass 540 g, volume 200 cm³. Density?",
        "back": "2.7 g/cm³"
      },
      {
        "front": "7 litres per 100 km. Petrol for 350 km?",
        "back": "24.5 litres"
      }
    ]
  },
  "1.13": {
    "mindMap": {
      "centre": "Percentages",
      "branches": [
        {
          "label": "Basics",
          "items": [
            "% of: decimal × amount",
            "As a %: fraction × 100",
            "10% = divide by 10"
          ]
        },
        {
          "label": "Multipliers",
          "items": [
            "Up 20%: × 1.2",
            "Down 15%: × 0.85",
            "Change ÷ original × 100"
          ]
        },
        {
          "label": "Interest",
          "items": [
            "Simple: same each year",
            "Compound: × multiplierⁿ",
            "No formulas given"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Reverse %: divide by the multiplier",
            "Repeated change: multiply the multipliers",
            "Up 10% then down 10% is not the same"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Find 15% of $240.",
        "back": "$36"
      },
      {
        "front": "42 out of 60 as a percentage.",
        "back": "70%"
      },
      {
        "front": "Multiplier for a 25% decrease?",
        "back": "0.75"
      },
      {
        "front": "Bought $40, sold $52. Percentage profit?",
        "back": "30%"
      },
      {
        "front": "$500 at 3% simple interest for 4 years. Interest?",
        "back": "$60"
      },
      {
        "front": "$500 at 3% compound interest for 4 years. Amount?",
        "back": "$562.75"
      },
      {
        "front": "(Extended and O Level) After 20% off a price is $48. Original price?",
        "back": "$60"
      },
      {
        "front": "(Extended and O Level) $500 up 10% then down 10%. Final price?",
        "back": "$495"
      }
    ]
  },
  "1.14": {
    "mindMap": {
      "centre": "Using a calculator",
      "branches": [
        {
          "label": "Brackets",
          "items": [
            "(a + b) ÷ c needs brackets",
            "Bracket the top and the bottom"
          ]
        },
        {
          "label": "Accuracy",
          "items": [
            "Do not round in the middle",
            "Use the ANS key",
            "Round only the final answer"
          ]
        },
        {
          "label": "Reading the display",
          "items": [
            "4.8 means $4.80",
            "3.25 hours = 3 hours 15 minutes",
            "Minutes = decimal × 60"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "How do you type (68 + 74 + 81) ÷ 3?",
        "back": "With brackets around 68 + 74 + 81."
      },
      {
        "front": "Display 4.8 in a money question means?",
        "back": "$4.80"
      },
      {
        "front": "Display 3.25 hours means?",
        "back": "3 hours 15 minutes"
      },
      {
        "front": "2.1 hours in hours and minutes?",
        "back": "2 hours 6 minutes"
      },
      {
        "front": "When should you round?",
        "back": "Only at the end of the calculation."
      },
      {
        "front": "How do you square -5 on a calculator?",
        "back": "Type (-5)², which gives 25."
      }
    ]
  },
  "1.15": {
    "mindMap": {
      "centre": "Time",
      "branches": [
        {
          "label": "Units",
          "items": [
            "60 s = 1 min",
            "60 min = 1 h",
            "24 h = 1 day",
            "1 year = 365 days"
          ]
        },
        {
          "label": "Clocks",
          "items": [
            "24-hour: four digits",
            "p.m.: add 12 to the hour",
            "1515 = 3.15 p.m."
          ]
        },
        {
          "label": "Time differences",
          "items": [
            "Count up to the next hour",
            "Then whole hours",
            "Then the minutes left"
          ]
        },
        {
          "label": "Time zones",
          "items": [
            "Ahead: add hours",
            "Behind: subtract hours"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Write 3.15 p.m. in the 24-hour clock.",
        "back": "1515"
      },
      {
        "front": "Write 2340 in the 12-hour clock.",
        "back": "11.40 p.m."
      },
      {
        "front": "Flight 0845 to 1320. How long?",
        "back": "4 hours 35 minutes"
      },
      {
        "front": "In 5.25 p.m., 1 hour 50 minutes. Ready at?",
        "back": "7.15 p.m."
      },
      {
        "front": "Karachi is 5 hours ahead of London. 6 p.m. in London is what time in Karachi?",
        "back": "11 p.m."
      },
      {
        "front": "Why is 1320 - 0845 = 475 wrong?",
        "back": "Time is in 60 minutes per hour, not 100."
      },
      {
        "front": "How many days in a year (for the exam)?",
        "back": "365"
      }
    ]
  },
  "1.16": {
    "mindMap": {
      "centre": "Money",
      "branches": [
        {
          "label": "Writing money",
          "items": [
            "Always 2 decimal places",
            "$7.50, not $7.5",
            "100 cents = $1"
          ]
        },
        {
          "label": "Shopping",
          "items": [
            "Add the costs",
            "Change = paid - total"
          ]
        },
        {
          "label": "Bills",
          "items": [
            "Units × price per unit",
            "Add any fixed charge"
          ]
        },
        {
          "label": "Currency",
          "items": [
            "To the other currency: multiply",
            "Back again: divide",
            "Check the size makes sense"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "3 notebooks at $1.85 and a pen at $0.95. Change from $10?",
        "back": "$3.50"
      },
      {
        "front": "450 units at $0.12 plus $8 fixed. Bill?",
        "back": "$62.00"
      },
      {
        "front": "$1 = 3.75 riyals. $200 in riyals?",
        "back": "750 riyals"
      },
      {
        "front": "$1 = 3.75 riyals. 90 riyals in dollars?",
        "back": "$24"
      },
      {
        "front": "How do you write $7.5 correctly?",
        "back": "$7.50"
      },
      {
        "front": "Changing riyals back into dollars: multiply or divide?",
        "back": "Divide by the rate."
      }
    ]
  },
  "1.17": {
    "mindMap": {
      "centre": "Exponential growth and decay",
      "branches": [
        {
          "label": "Formula",
          "items": [
            "Amount × multiplierⁿ",
            "n = number of time periods"
          ]
        },
        {
          "label": "Growth",
          "items": [
            "Up r%: 1 + r/100",
            "3% growth: 1.03",
            "Population, compound interest"
          ]
        },
        {
          "label": "Decay",
          "items": [
            "Down r%: 1 - r/100",
            "15% loss: 0.85",
            "Depreciation, medicine"
          ]
        },
        {
          "label": "Watch out",
          "items": [
            "Use a power, not × n",
            "Same %, not same amount",
            "Round at the end"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Multiplier for 3% growth?",
        "back": "1.03"
      },
      {
        "front": "Multiplier for 15% decay?",
        "back": "0.85"
      },
      {
        "front": "$18 000 car, loses 15% a year. Value after 3 years?",
        "back": "$11 054.25"
      },
      {
        "front": "20 000 people, grows 3% a year. After 5 years?",
        "back": "About 23 185"
      },
      {
        "front": "400 mg, drops 20% an hour. After 4 hours?",
        "back": "163.84 mg"
      },
      {
        "front": "What is depreciation?",
        "back": "When something loses value over time."
      },
      {
        "front": "Going up $50 every year: linear or exponential?",
        "back": "Linear (same amount each year)."
      }
    ]
  },
  "1.18": {
    "mindMap": {
      "centre": "Surds",
      "branches": [
        {
          "label": "Rules",
          "items": [
            "√a × √b = √(ab)",
            "√a ÷ √b = √(a/b)",
            "√a × √a = a"
          ]
        },
        {
          "label": "Simplifying",
          "items": [
            "Find the biggest square factor",
            "√20 = 2√5",
            "√72 = 6√2"
          ]
        },
        {
          "label": "Adding",
          "items": [
            "Only like surds",
            "10√2 - 4√2 = 6√2",
            "√a + √b is not √(a + b)"
          ]
        },
        {
          "label": "Rationalising",
          "items": [
            "Multiply top and bottom by the surd",
            "5/√10 = √10/2",
            "6/√3 = 2√3"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Simplify √20.",
        "back": "2√5"
      },
      {
        "front": "Simplify √72.",
        "back": "6√2"
      },
      {
        "front": "Simplify √200 - √32.",
        "back": "6√2"
      },
      {
        "front": "Work out √2 × √8.",
        "back": "4"
      },
      {
        "front": "Rationalise 5/√10.",
        "back": "√10/2"
      },
      {
        "front": "Rationalise 6/√3.",
        "back": "2√3"
      },
      {
        "front": "Expand (3 + √2)(3 - √2).",
        "back": "7"
      },
      {
        "front": "Is √9 + √16 equal to √25?",
        "back": "No. 3 + 4 = 7, but √25 = 5."
      }
    ]
  }
};

export function getMathsRevision(topic: string): TopicRevision | null {
  return MATHS_REVISION[topic] ?? null;
}
