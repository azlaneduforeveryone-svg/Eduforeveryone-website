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
  },
  "2.1": {
    "mindMap": {
      "centre": "Introduction to algebra",
      "branches": [
        {
          "label": "Words",
          "items": [
            "Variable: a letter for a number",
            "Term: 3x or 5",
            "Expression: no = sign",
            "Equation: has an = sign",
            "Formula: links variables"
          ]
        },
        {
          "label": "How we write it",
          "items": [
            "5n means 5 × n",
            "n² means n × n",
            "x/4 means x ÷ 4",
            "Number first: 5n, not n5"
          ]
        },
        {
          "label": "Substitution",
          "items": [
            "Put numbers in brackets",
            "Use BIDMAS",
            "(-4)² = 16"
          ]
        },
        {
          "label": "Real life",
          "items": [
            "Taxi: C = 3 + 2d",
            "Temperature: F = 1.8C + 32"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What does 3x mean?",
        "back": "3 × x"
      },
      {
        "front": "Ali has n sweets. Sara has 4 more. Write an expression for Sara.",
        "back": "n + 4"
      },
      {
        "front": "Find 2a + 5 when a = 6.",
        "back": "17"
      },
      {
        "front": "Find x² when x = -3.",
        "back": "9"
      },
      {
        "front": "Find 3a² - 2b when a = -4 and b = 5.",
        "back": "38"
      },
      {
        "front": "A taxi costs C = 3 + 2d. Find C when d = 12.",
        "back": "$27"
      },
      {
        "front": "Is 3x + 5 an expression or an equation?",
        "back": "An expression. It has no = sign."
      },
      {
        "front": "Change 25°C to °F using F = 1.8C + 32.",
        "back": "77°F"
      }
    ]
  },
  "2.2": {
    "mindMap": {
      "centre": "Algebraic manipulation",
      "branches": [
        {
          "label": "Simplify",
          "items": [
            "Collect like terms",
            "x and x² are not like terms"
          ]
        },
        {
          "label": "Expand",
          "items": [
            "Multiply every term in the bracket",
            "Two brackets: use a grid",
            "(x + 5)² = x² + 10x + 25"
          ]
        },
        {
          "label": "Factorise",
          "items": [
            "Take out the biggest common factor",
            "Factorise fully",
            "Check by expanding"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Three brackets",
            "Grouping",
            "a² - b² = (a + b)(a - b)",
            "Quadratics: multiply to c, add to b",
            "Completing the square"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Simplify 2a + 3b + 5a - 9b.",
        "back": "7a - 6b"
      },
      {
        "front": "Expand 4(s + 2).",
        "back": "4s + 8"
      },
      {
        "front": "Expand and simplify 3(2x - 5) - 2(x - 4).",
        "back": "4x - 7"
      },
      {
        "front": "Expand (x + 3)(x - 5).",
        "back": "x² - 2x - 15"
      },
      {
        "front": "Expand (x + 5)².",
        "back": "x² + 10x + 25"
      },
      {
        "front": "Factorise fully 9x² + 15xy.",
        "back": "3x(3x + 5y)"
      },
      {
        "front": "(Extended and O Level) Factorise x² + 7x + 12.",
        "back": "(x + 3)(x + 4)"
      },
      {
        "front": "(Extended and O Level) Factorise 25x² - 9y².",
        "back": "(5x + 3y)(5x - 3y)"
      },
      {
        "front": "(Extended and O Level) Factorise 2x² - 7x - 4.",
        "back": "(2x + 1)(x - 4)"
      },
      {
        "front": "(Extended and O Level) Write x² + 6x + 2 in the form (x + p)² + q.",
        "back": "(x + 3)² - 7"
      }
    ]
  },
  "2.3": {
    "mindMap": {
      "centre": "Algebraic fractions",
      "branches": [
        {
          "label": "Simplify",
          "items": [
            "Factorise first",
            "Cancel factors, not terms"
          ]
        },
        {
          "label": "Multiply and divide",
          "items": [
            "Top × top, bottom × bottom",
            "Divide: flip the second, then multiply"
          ]
        },
        {
          "label": "Add and subtract",
          "items": [
            "Find a common denominator",
            "Brackets round the tops",
            "Then simplify the top"
          ]
        },
        {
          "label": "Check",
          "items": [
            "Put in a number like x = 2",
            "Both versions give the same value"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Simplify 6x²/(9x).",
        "back": "2x/3"
      },
      {
        "front": "Simplify (x² - 9)/(x² + 5x + 6).",
        "back": "(x - 3)/(x + 2)"
      },
      {
        "front": "Can you cancel the x in (x + 3)/x?",
        "back": "No. x is not a factor of the whole top."
      },
      {
        "front": "Write x/3 + x/4 as a single fraction.",
        "back": "7x/12"
      },
      {
        "front": "Simplify (4x/5) × (10/x²).",
        "back": "8/x"
      },
      {
        "front": "Write 3/(x + 1) - 2/(x - 3) as a single fraction.",
        "back": "(x - 11)/[(x + 1)(x - 3)]"
      },
      {
        "front": "How do you divide by a fraction?",
        "back": "Flip the second fraction and multiply."
      }
    ]
  },
  "2.4": {
    "mindMap": {
      "centre": "Indices II",
      "branches": [
        {
          "label": "Rules",
          "items": [
            "Multiply: add the powers",
            "Divide: subtract the powers",
            "Power of a power: multiply the powers"
          ]
        },
        {
          "label": "Special powers",
          "items": [
            "x⁰ = 1",
            "x⁻ⁿ = 1/xⁿ",
            "Numbers in front are multiplied as normal"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "x^(1/2) = √x",
            "x^(1/3) = ∛x",
            "x^(m/n): root, then power"
          ]
        },
        {
          "label": "x in the power",
          "items": [
            "Make the bases the same",
            "Then the powers are equal"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Simplify 6x⁷y⁴ × 5x⁻⁵y.",
        "back": "30x²y⁵"
      },
      {
        "front": "Simplify 12a⁵ ÷ 3a⁻².",
        "back": "4a⁷"
      },
      {
        "front": "Simplify (5x³)².",
        "back": "25x⁶"
      },
      {
        "front": "Write 4x⁻³ without a negative power.",
        "back": "4/x³"
      },
      {
        "front": "What is (2a³b)⁰?",
        "back": "1"
      },
      {
        "front": "(Extended and O Level) Simplify (16x⁸)^(1/2).",
        "back": "4x⁴"
      },
      {
        "front": "(Extended and O Level) Simplify (27x⁶)^(-2/3).",
        "back": "1/(9x⁴)"
      },
      {
        "front": "(Extended and O Level) Solve 5^(x + 1) = 25^x.",
        "back": "x = 1"
      },
      {
        "front": "(Extended and O Level) Solve 2^x = 1/8.",
        "back": "x = -3"
      }
    ]
  },
  "2.5": {
    "mindMap": {
      "centre": "Equations",
      "branches": [
        {
          "label": "Linear",
          "items": [
            "Do the same to both sides",
            "Expand brackets first",
            "Check by putting the answer back"
          ]
        },
        {
          "label": "Simultaneous",
          "items": [
            "Elimination: same signs subtract, different signs add",
            "Substitution: when y = ... is given",
            "Two answers: x and y"
          ]
        },
        {
          "label": "Change the subject",
          "items": [
            "Same steps as solving",
            "Extended and O Level: subject twice, factorise",
            "Undo powers with roots"
          ]
        },
        {
          "label": "Extended and O Level: quadratics",
          "items": [
            "Make one side 0",
            "Factorise, formula or complete the square",
            "Usually two answers",
            "Reject answers that make no sense"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Solve 3x + 4 = 10.",
        "back": "x = 2"
      },
      {
        "front": "Solve 5 - 2x = 3(x + 7).",
        "back": "x = -3.2"
      },
      {
        "front": "A gym costs $20 plus $15 a month. Layla paid $140. How many months?",
        "back": "8 months"
      },
      {
        "front": "Solve 2a + 3c = 34 and a + 2c = 19.",
        "back": "a = 11, c = 4"
      },
      {
        "front": "Solve y = 2x - 1 and 3x + y = 14.",
        "back": "x = 3, y = 5"
      },
      {
        "front": "Make a the subject of v = u + at.",
        "back": "a = (v - u)/t"
      },
      {
        "front": "(Extended and O Level) Solve x² - 5x - 14 = 0.",
        "back": "x = 7 or x = -2"
      },
      {
        "front": "(Extended and O Level) Solve 2x² + 3x - 7 = 0 to 2 d.p.",
        "back": "x = 1.27 or x = -2.77"
      },
      {
        "front": "(Extended and O Level) Solve x² + 6x + 2 = 0 in surd form.",
        "back": "x = -3 ± √7"
      },
      {
        "front": "(Extended and O Level) Make r the subject of A = πr².",
        "back": "r = √(A/π)"
      }
    ]
  },
  "2.6": {
    "mindMap": {
      "centre": "Inequalities",
      "branches": [
        {
          "label": "Signs",
          "items": [
            "< less than",
            "> greater than",
            "⩽ less than or equal to",
            "⩾ greater than or equal to"
          ]
        },
        {
          "label": "Number lines",
          "items": [
            "Open circle: < or >",
            "Closed circle: ⩽ or ⩾"
          ]
        },
        {
          "label": "Extended and O Level: solving",
          "items": [
            "Like an equation",
            "Multiply or divide by a negative: turn the sign round",
            "Double inequalities: do all three parts"
          ]
        },
        {
          "label": "Extended and O Level: regions",
          "items": [
            "Solid line: ⩽ or ⩾",
            "Broken line: < or >",
            "Shade what you do not want",
            "Test the point (0, 0)"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Does a closed circle mean the number is included?",
        "back": "Yes. It is used for ⩽ and ⩾."
      },
      {
        "front": "List the integers n with -3 ⩽ n < 1.",
        "back": "-3, -2, -1, 0"
      },
      {
        "front": "You must be at least 120 cm tall. Write this as an inequality.",
        "back": "h ⩾ 120"
      },
      {
        "front": "(Extended and O Level) Solve 3x < 2x + 4.",
        "back": "x < 4"
      },
      {
        "front": "(Extended and O Level) Solve 7 - 2x > 1.",
        "back": "x < 3"
      },
      {
        "front": "(Extended and O Level) When do you turn the sign round?",
        "back": "When you multiply or divide by a negative number."
      },
      {
        "front": "(Extended and O Level) Solve -3 ⩽ 3x - 2 < 7.",
        "back": "-1/3 ⩽ x < 3"
      },
      {
        "front": "(Extended and O Level) Which line do you use for y < x?",
        "back": "A broken (dashed) line."
      }
    ]
  },
  "2.7": {
    "mindMap": {
      "centre": "Sequences",
      "branches": [
        {
          "label": "Rules",
          "items": [
            "Term-to-term: add 3, times 2",
            "nth term: from the position n"
          ]
        },
        {
          "label": "Special sequences",
          "items": [
            "Square: n²",
            "Cube: n³",
            "Triangle: n(n + 1)/2"
          ]
        },
        {
          "label": "Linear nth term",
          "items": [
            "Difference × n",
            "Plus the zero term",
            "Check with n = 1 and n = 2"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Quadratic: same second differences, a = half of it",
            "Exponential: first term × rⁿ⁻¹",
            "Mixtures like 2ⁿ + n"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Find the nth term of 5, 8, 11, 14, ...",
        "back": "3n + 2"
      },
      {
        "front": "Find the 50th term of 3n + 2.",
        "back": "152"
      },
      {
        "front": "Is 100 in the sequence 3n + 2?",
        "back": "No. n would be 32.67, not a whole number."
      },
      {
        "front": "Find the nth term of 30, 26, 22, 18, ...",
        "back": "34 - 4n"
      },
      {
        "front": "Find the nth term of 2, 5, 10, 17, ...",
        "back": "n² + 1"
      },
      {
        "front": "What are the triangle numbers?",
        "back": "1, 3, 6, 10, 15, ..."
      },
      {
        "front": "(Extended and O Level) Find the nth term of 5, 12, 23, 38, 57, ...",
        "back": "2n² + n + 2"
      },
      {
        "front": "(Extended and O Level) Find the nth term of 3, 6, 12, 24, ...",
        "back": "3 × 2ⁿ⁻¹"
      },
      {
        "front": "(Extended and O Level) How many handshakes for 30 people?",
        "back": "435"
      }
    ]
  },
  "2.8": {
    "mindMap": {
      "centre": "Proportion",
      "branches": [
        {
          "label": "Direct",
          "items": [
            "y = kx",
            "y = kx², y = kx³",
            "y = k√x, y = k∛x"
          ]
        },
        {
          "label": "Inverse",
          "items": [
            "y = k/x",
            "y = k/x²",
            "More of one, less of the other"
          ]
        },
        {
          "label": "Four steps",
          "items": [
            "Write with ∝",
            "Change to = k",
            "Find k",
            "Use the formula"
          ]
        },
        {
          "label": "Changes",
          "items": [
            "y ∝ x²: double x, y × 4",
            "y ∝ 1/x: triple x, y ÷ 3"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "40 litres of petrol cost $92. C ∝ L. Find the cost of 55 litres.",
        "back": "$126.50"
      },
      {
        "front": "d ∝ v². d = 16 when v = 40. Find d when v = 100.",
        "back": "100"
      },
      {
        "front": "t ∝ 1/w. t = 10 when w = 6. Find t when w = 15.",
        "back": "4"
      },
      {
        "front": "B ∝ 1/d². B = 50 when d = 2. Find k.",
        "back": "k = 200"
      },
      {
        "front": "m ∝ r³. m = 40 when r = 2. Find m when r = 3.",
        "back": "135"
      },
      {
        "front": "y ∝ x². What happens to y when x is doubled?",
        "back": "y is multiplied by 4."
      },
      {
        "front": "What does ∝ mean?",
        "back": "Is proportional to."
      }
    ]
  },
  "2.9": {
    "mindMap": {
      "centre": "Graphs in practical situations",
      "branches": [
        {
          "label": "Distance-time",
          "items": [
            "Gradient = speed",
            "Flat line: stopped",
            "Going down: coming back"
          ]
        },
        {
          "label": "Conversion graphs",
          "items": [
            "Straight line through (0, 0)",
            "Read up, then across"
          ]
        },
        {
          "label": "Extended and O Level: speed-time",
          "items": [
            "Gradient = acceleration",
            "Area = distance",
            "Flat line: steady speed"
          ]
        },
        {
          "label": "Extended and O Level: curves",
          "items": [
            "Draw a tangent",
            "Gradient = up ÷ across",
            "It is an estimate"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What does a flat line on a distance-time graph mean?",
        "back": "Stopped (not moving)."
      },
      {
        "front": "12 km in 45 minutes. What is the speed?",
        "back": "16 km/h"
      },
      {
        "front": "What does the gradient of a distance-time graph give?",
        "back": "The speed."
      },
      {
        "front": "$1 = 3.75 riyals. Change $60 to riyals.",
        "back": "225 riyals"
      },
      {
        "front": "(Extended and O Level) What does the area under a speed-time graph give?",
        "back": "The distance travelled."
      },
      {
        "front": "(Extended and O Level) 0 to 20 m/s in 10 s. Find the acceleration.",
        "back": "2 m/s²"
      },
      {
        "front": "(Extended and O Level) What does a flat line on a speed-time graph mean?",
        "back": "Moving at a steady speed."
      },
      {
        "front": "(Extended and O Level) A tangent passes through (1, 2) and (5, 18). Find its gradient.",
        "back": "4"
      }
    ]
  },
  "2.10": {
    "mindMap": {
      "centre": "Graphs of functions",
      "branches": [
        {
          "label": "Drawing",
          "items": [
            "Table of values",
            "Brackets for negatives",
            "One smooth curve"
          ]
        },
        {
          "label": "Shapes",
          "items": [
            "Linear: straight line",
            "Quadratic: U or hill",
            "Reciprocal: two parts, no x = 0"
          ]
        },
        {
          "label": "Solving with a graph",
          "items": [
            "= 0: read the x-axis crossings",
            "= k: draw the line y = k",
            "Answers to 1 d.p."
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Cubics and other powers",
            "Exponential growth and decay",
            "A cubic can have three answers"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "For y = x² - 2x - 3, find y when x = -2.",
        "back": "5"
      },
      {
        "front": "How do you solve x² - 2x - 3 = 0 from its graph?",
        "back": "Read where the curve crosses the x-axis: x = -1 and x = 3."
      },
      {
        "front": "How do you solve x² - 2x - 3 = 2 from the graph?",
        "back": "Draw y = 2 and read the x values where it crosses the curve."
      },
      {
        "front": "Using y = x² - 2x - 3, which line solves x² - 3x - 4 = 0?",
        "back": "y = x + 1"
      },
      {
        "front": "Can x be 0 in y = 12/x?",
        "back": "No. You cannot divide by 0."
      },
      {
        "front": "Should you join plotted points of a curve with a ruler?",
        "back": "No. Use one smooth curve."
      },
      {
        "front": "(Extended and O Level) Find y = 800 × 0.8ˣ when x = 2.",
        "back": "512"
      },
      {
        "front": "(Extended and O Level) Is y = 3 × 2ˣ growth or decay?",
        "back": "Growth (2 is more than 1)."
      }
    ]
  },
  "2.11": {
    "mindMap": {
      "centre": "Sketching curves",
      "branches": [
        {
          "label": "Quadratic sketch",
          "items": [
            "y-intercept: x = 0",
            "Roots: y = 0",
            "Symmetry: halfway between roots"
          ]
        },
        {
          "label": "Shapes",
          "items": [
            "+x²: U",
            "-x²: hill",
            "x³: S shape",
            "1/x: two parts",
            "2ˣ: growth"
          ]
        },
        {
          "label": "Extended and O Level: turning points",
          "items": [
            "(x + p)² + q gives (-p, q)",
            "Minimum if x² is positive"
          ]
        },
        {
          "label": "Extended and O Level: asymptotes",
          "items": [
            "Never touched",
            "1/x: x = 0 and y = 0",
            "2ˣ + 1: y = 1"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Where does y = x² - 6x + 5 cross the axes?",
        "back": "y-axis at 5, x-axis at 1 and 5."
      },
      {
        "front": "What is the line of symmetry of y = x² - 6x + 5?",
        "back": "x = 3"
      },
      {
        "front": "Which way does y = -x² + 4 face?",
        "back": "Upside down (a hill)."
      },
      {
        "front": "An arch is y = 8x - x². How wide is it?",
        "back": "8 m"
      },
      {
        "front": "(Extended and O Level) Find the turning point of y = x² + 4x + 7.",
        "back": "(-2, 3), a minimum"
      },
      {
        "front": "(Extended and O Level) What is an asymptote?",
        "back": "A line the graph gets closer to but never touches."
      },
      {
        "front": "(Extended and O Level) Give the asymptotes of y = 1/x + 2.",
        "back": "x = 0 and y = 2"
      },
      {
        "front": "(Extended and O Level) Where does y = 2ˣ cross the y-axis?",
        "back": "(0, 1)"
      }
    ]
  },
  "2.12": {
    "mindMap": {
      "centre": "Differentiation",
      "branches": [
        {
          "label": "The rule",
          "items": [
            "y = axⁿ gives dy/dx = naxⁿ⁻¹",
            "Multiply by the power, take 1 off",
            "A number on its own gives 0"
          ]
        },
        {
          "label": "Gradient at a point",
          "items": [
            "Find dy/dx",
            "Put in x"
          ]
        },
        {
          "label": "Stationary points",
          "items": [
            "dy/dx = 0",
            "Solve for x",
            "Put x into the original equation"
          ]
        },
        {
          "label": "Max or min",
          "items": [
            "d²y/dx² positive: minimum",
            "d²y/dx² negative: maximum"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Differentiate y = 3x⁴.",
        "back": "dy/dx = 12x³"
      },
      {
        "front": "Differentiate y = 7x.",
        "back": "dy/dx = 7"
      },
      {
        "front": "Differentiate y = 9.",
        "back": "dy/dx = 0"
      },
      {
        "front": "Differentiate y = x³ - 6x² + 5x - 2.",
        "back": "dy/dx = 3x² - 12x + 5"
      },
      {
        "front": "Find the gradient of y = x³ - 6x² + 5x - 2 at x = 2.",
        "back": "-7"
      },
      {
        "front": "What is dy/dx at a stationary point?",
        "back": "0"
      },
      {
        "front": "Find the stationary points of y = x³ - 3x + 1.",
        "back": "(1, -1) minimum and (-1, 3) maximum"
      },
      {
        "front": "If d²y/dx² is negative, what type of point is it?",
        "back": "A maximum."
      }
    ]
  },
  "2.13": {
    "mindMap": {
      "centre": "Functions",
      "branches": [
        {
          "label": "Notation",
          "items": [
            "f(x) = 3x - 5",
            "f(4): put 4 in",
            "Domain: inputs",
            "Range: outputs"
          ]
        },
        {
          "label": "Inverse f⁻¹(x)",
          "items": [
            "y = f(x)",
            "Make x the subject",
            "Swap back to x",
            "It undoes f"
          ]
        },
        {
          "label": "Composite gf(x)",
          "items": [
            "f first, then g",
            "fg and gf are usually different",
            "ff(x): f twice"
          ]
        },
        {
          "label": "Real life",
          "items": [
            "Currency converter",
            "Discount then delivery"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "f(x) = 3x - 5. Find f(4).",
        "back": "7"
      },
      {
        "front": "f(x) = 3x - 5. Find x when f(x) = 10.",
        "back": "x = 5"
      },
      {
        "front": "What is the range of f(x) = x²?",
        "back": "f(x) ⩾ 0"
      },
      {
        "front": "What is the domain of g(x) = 1/(x - 2)?",
        "back": "x ≠ 2"
      },
      {
        "front": "f(x) = (2x + 1)/3. Find f⁻¹(x).",
        "back": "f⁻¹(x) = (3x - 1)/2"
      },
      {
        "front": "f(x) = 2x + 3, g(x) = x². Find fg(3).",
        "back": "21"
      },
      {
        "front": "f(x) = 2x + 3, g(x) = x². Find gf(x).",
        "back": "(2x + 3)²"
      },
      {
        "front": "f(x) = 2x + 3. Find ff(x).",
        "back": "4x + 9"
      },
      {
        "front": "In gf(x), which function is done first?",
        "back": "f"
      }
    ]
  },
  "3.1": {
    "mindMap": {
      "centre": "Coordinates",
      "branches": [
        {
          "label": "Writing them",
          "items": [
            "(x, y): across, then up",
            "Along the corridor, up the stairs",
            "(3, 2) is not (2, 3)"
          ]
        },
        {
          "label": "Four quadrants",
          "items": [
            "Left of origin: x negative",
            "Below origin: y negative",
            "Origin is (0, 0)"
          ]
        },
        {
          "label": "On the axes",
          "items": [
            "On the x-axis: y = 0",
            "On the y-axis: x = 0"
          ]
        },
        {
          "label": "Using them",
          "items": [
            "Same x: straight up or down",
            "Same y: straight across",
            "Find missing corners of shapes"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Which number comes first in (x, y)?",
        "back": "x, the number across."
      },
      {
        "front": "What are the coordinates of the origin?",
        "back": "(0, 0)"
      },
      {
        "front": "A point is 4 left and 1 up from the origin. Write its coordinates.",
        "back": "(-4, 1)"
      },
      {
        "front": "Which quadrant is (-2, -3) in?",
        "back": "The 3rd quadrant (bottom left)."
      },
      {
        "front": "What is the y value of any point on the x-axis?",
        "back": "0"
      },
      {
        "front": "How far is (2, 1) from (2, 6)?",
        "back": "5 units"
      },
      {
        "front": "How far is (2, 1) from (-3, 1)?",
        "back": "5 units"
      },
      {
        "front": "Three corners of a rectangle are (1, 1), (5, 1), (5, 4). Find the fourth.",
        "back": "(1, 4)"
      }
    ]
  },
  "3.2": {
    "mindMap": {
      "centre": "Drawing linear graphs",
      "branches": [
        {
          "label": "Table of values",
          "items": [
            "Choose x values",
            "Work out each y",
            "Use brackets for negatives"
          ]
        },
        {
          "label": "Drawing",
          "items": [
            "Plot at least 3 points",
            "Join with a ruler",
            "Draw across the whole grid"
          ]
        },
        {
          "label": "Special lines",
          "items": [
            "x = a: vertical",
            "y = b: horizontal",
            "y = x and y = -x: diagonal"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "y = 7 - 4x",
            "ax + by = c: cover-up method",
            "Find where it crosses each axis"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "For y = 2x - 1, find y when x = -1.",
        "back": "-3"
      },
      {
        "front": "For y = 2x - 1, find y when x = 3.",
        "back": "5"
      },
      {
        "front": "Is y = 3 a horizontal or a vertical line?",
        "back": "Horizontal."
      },
      {
        "front": "Is x = -2 a horizontal or a vertical line?",
        "back": "Vertical."
      },
      {
        "front": "Which points are on x = 4: (4, 1), (1, 4), (4, -7)?",
        "back": "(4, 1) and (4, -7)"
      },
      {
        "front": "Taxi: C = 2d + 3. Find C when d = 7.",
        "back": "$17"
      },
      {
        "front": "Why plot three points for a straight line?",
        "back": "The third point checks the other two."
      },
      {
        "front": "(Extended and O Level) Where does 3x + 2y = 12 cross the axes?",
        "back": "(0, 6) and (4, 0)"
      }
    ]
  },
  "3.3": {
    "mindMap": {
      "centre": "Gradient of linear graphs",
      "branches": [
        {
          "label": "Formula",
          "items": [
            "Gradient = rise ÷ run",
            "Change in y ÷ change in x"
          ]
        },
        {
          "label": "Sign",
          "items": [
            "Up to the right: positive",
            "Down to the right: negative",
            "Horizontal: 0"
          ]
        },
        {
          "label": "From a grid",
          "items": [
            "Pick points on grid corners",
            "Draw a big triangle",
            "Check the scales"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "(y₂ - y₁) ÷ (x₂ - x₁)",
            "Same order top and bottom"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is the formula for gradient?",
        "back": "Rise ÷ run (change in y ÷ change in x)."
      },
      {
        "front": "A line goes from (0, 1) to (2, 5). Find its gradient.",
        "back": "2"
      },
      {
        "front": "A line goes down 2 while going across 4. Find its gradient.",
        "back": "-1/2"
      },
      {
        "front": "What is the gradient of a horizontal line?",
        "back": "0"
      },
      {
        "front": "A ramp rises 0.5 m over 6 m across. Find its gradient.",
        "back": "1/12"
      },
      {
        "front": "A road has a 10% gradient. How much does it rise over 500 m across?",
        "back": "50 m"
      },
      {
        "front": "(Extended and O Level) Find the gradient through (2, 3) and (6, 11).",
        "back": "2"
      },
      {
        "front": "(Extended and O Level) Find the gradient through (-1, 4) and (3, -2).",
        "back": "-3/2"
      }
    ]
  },
  "3.4": {
    "mindMap": {
      "centre": "Length and midpoint",
      "branches": [
        {
          "label": "Length",
          "items": [
            "Change in x and change in y",
            "Square, add, square root",
            "It is Pythagoras"
          ]
        },
        {
          "label": "Midpoint",
          "items": [
            "Add the x values, halve",
            "Add the y values, halve",
            "It is the average"
          ]
        },
        {
          "label": "End point",
          "items": [
            "Same step from A to M",
            "Repeat it from M to B"
          ]
        },
        {
          "label": "Real life",
          "items": [
            "Drone flight distance",
            "Meeting halfway"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Find the length from (1, 2) to (7, 10).",
        "back": "10"
      },
      {
        "front": "Find the length from (-2, 1) to (3, 4) to 3 s.f.",
        "back": "5.83"
      },
      {
        "front": "Find the midpoint of (1, 2) and (7, 10).",
        "back": "(4, 6)"
      },
      {
        "front": "Find the midpoint of (-3, 5) and (5, -1).",
        "back": "(1, 2)"
      },
      {
        "front": "A drone flies from (0, 0) to (12, 5). How far, in units?",
        "back": "13"
      },
      {
        "front": "M(4, 6) is the midpoint of AB and A is (1, 2). Find B.",
        "back": "(7, 10)"
      },
      {
        "front": "Do you add or subtract coordinates to find a midpoint?",
        "back": "Add them, then halve."
      }
    ]
  },
  "3.5": {
    "mindMap": {
      "centre": "Equations of linear graphs",
      "branches": [
        {
          "label": "y = mx + c",
          "items": [
            "m: gradient",
            "c: y-intercept",
            "Point (0, c)"
          ]
        },
        {
          "label": "From a graph",
          "items": [
            "Read c on the y-axis",
            "Find m with a triangle",
            "Write y = mx + c"
          ]
        },
        {
          "label": "From a point",
          "items": [
            "Put the point in",
            "Solve for c",
            "x = k for vertical lines"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "ax + by = c: rearrange",
            "Two points: gradient, then c"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Gradient and y-intercept of y = 6x + 3?",
        "back": "Gradient 6, y-intercept 3"
      },
      {
        "front": "Gradient of y = 5 - 2x?",
        "back": "-2"
      },
      {
        "front": "A line has gradient 3 and passes through (2, 5). Find its equation.",
        "back": "y = 3x - 1"
      },
      {
        "front": "Equation of the vertical line through (-3, 8)?",
        "back": "x = -3"
      },
      {
        "front": "C = 0.1m + 15. What does 15 mean?",
        "back": "The fixed monthly charge of $15."
      },
      {
        "front": "(Extended and O Level) Gradient and y-intercept of 5x + 4y = 8?",
        "back": "Gradient -5/4, y-intercept 2"
      },
      {
        "front": "(Extended and O Level) Equation of the line through (2, 3) and (6, 11)?",
        "back": "y = 2x - 1"
      },
      {
        "front": "(Extended and O Level) 2 hours costs $110, 5 hours costs $200. Find the formula.",
        "back": "C = 30h + 50"
      }
    ]
  },
  "3.6": {
    "mindMap": {
      "centre": "Parallel lines",
      "branches": [
        {
          "label": "Rule",
          "items": [
            "Same gradient",
            "Different y-intercept",
            "Never meet"
          ]
        },
        {
          "label": "Spotting them",
          "items": [
            "Compare the m values",
            "y = 5 + 3x has m = 3"
          ]
        },
        {
          "label": "Equation through a point",
          "items": [
            "Keep the gradient",
            "Put in the point",
            "Find c"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Rearrange to y = mx + c first",
            "2y = 6x + 1 has m = 3"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What do parallel lines have in common?",
        "back": "The same gradient."
      },
      {
        "front": "Is y = 5 + 3x parallel to y = 3x + 2?",
        "back": "Yes, both have gradient 3."
      },
      {
        "front": "Is y = -3x + 2 parallel to y = 3x + 2?",
        "back": "No. The gradients are -3 and 3."
      },
      {
        "front": "Find the line parallel to y = 4x - 1 through (1, -3).",
        "back": "y = 4x - 7"
      },
      {
        "front": "Find the line parallel to y = 2x + 1 through (3, 4).",
        "back": "y = 2x - 2"
      },
      {
        "front": "(Extended and O Level) Gradient of 2y = 6x + 1?",
        "back": "3"
      },
      {
        "front": "(Extended and O Level) Find the line parallel to 3x + y = 7 through (2, 5).",
        "back": "y = -3x + 11"
      }
    ]
  },
  "3.7": {
    "mindMap": {
      "centre": "Perpendicular lines",
      "branches": [
        {
          "label": "Rule",
          "items": [
            "Meet at 90°",
            "m₁ × m₂ = -1",
            "Flip it and change the sign"
          ]
        },
        {
          "label": "Equation",
          "items": [
            "Find the perpendicular gradient",
            "Put in the point",
            "Find c"
          ]
        },
        {
          "label": "Perpendicular bisector",
          "items": [
            "Through the midpoint",
            "Perpendicular gradient",
            "Same distance from both ends"
          ]
        },
        {
          "label": "Real life",
          "items": [
            "Shortest path to a road",
            "Fair place for a hospital"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Perpendicular gradient to 2?",
        "back": "-1/2"
      },
      {
        "front": "Perpendicular gradient to -3?",
        "back": "1/3"
      },
      {
        "front": "Perpendicular gradient to 3/4?",
        "back": "-4/3"
      },
      {
        "front": "Gradient perpendicular to 2y = 3x + 1?",
        "back": "-2/3"
      },
      {
        "front": "Are y = 3x - 2 and x + 3y = 9 perpendicular?",
        "back": "Yes. 3 × (-1/3) = -1."
      },
      {
        "front": "Find the line perpendicular to y = 2x + 1 through (4, 3).",
        "back": "y = -1/2 x + 5"
      },
      {
        "front": "Perpendicular bisector of (-3, 8) and (9, -2)?",
        "back": "y = 6/5 x - 3/5 (or 5y = 6x - 3)"
      },
      {
        "front": "What do the gradients of perpendicular lines multiply to?",
        "back": "-1"
      }
    ]
  },
  "4.1": {
    "mindMap": {
      "centre": "Geometrical terms",
      "branches": [
        {
          "label": "Angles",
          "items": [
            "Acute: less than 90°",
            "Right: 90°",
            "Obtuse: 90° to 180°",
            "Reflex: more than 180°"
          ]
        },
        {
          "label": "Shapes",
          "items": [
            "Triangles: equilateral, isosceles, scalene",
            "Square, rectangle, rhombus, parallelogram, kite, trapezium",
            "Pentagon, hexagon, octagon, decagon"
          ]
        },
        {
          "label": "Solids",
          "items": [
            "Faces, edges, vertices",
            "Prism: same cross-section",
            "Extended: hemisphere, frustum"
          ]
        },
        {
          "label": "Circles",
          "items": [
            "Radius, diameter, circumference",
            "Chord, tangent, arc",
            "Sector, segment"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a reflex angle?",
        "back": "An angle between 180° and 360°."
      },
      {
        "front": "What angle do clock hands make at 4 o'clock?",
        "back": "120°"
      },
      {
        "front": "A quadrilateral with exactly one pair of parallel sides?",
        "back": "A trapezium."
      },
      {
        "front": "A quadrilateral with 4 equal sides and no right angles?",
        "back": "A rhombus."
      },
      {
        "front": "How many faces, edges and vertices does a cuboid have?",
        "back": "6 faces, 12 edges, 8 vertices"
      },
      {
        "front": "What is the difference between a chord and a tangent?",
        "back": "A chord joins two points on the circle. A tangent only touches it at one point."
      },
      {
        "front": "What is the difference between a sector and a segment?",
        "back": "A sector is a slice between two radii. A segment is cut off by a chord."
      },
      {
        "front": "What is the difference between similar and congruent?",
        "back": "Congruent: same shape and size. Similar: same shape, different size."
      },
      {
        "front": "(Extended and O Level) What is a frustum?",
        "back": "A cone or pyramid with the top cut off."
      }
    ]
  },
  "4.2": {
    "mindMap": {
      "centre": "Geometrical constructions",
      "branches": [
        {
          "label": "Measuring",
          "items": [
            "Ruler from 0",
            "Protractor centre on the vertex",
            "Check acute or obtuse"
          ]
        },
        {
          "label": "Triangle from 3 sides",
          "items": [
            "Draw the longest side",
            "Arcs from each end",
            "Join to the crossing point",
            "Leave the arcs"
          ]
        },
        {
          "label": "Will it work?",
          "items": [
            "Two shorter sides must add to more than the longest"
          ]
        },
        {
          "label": "Nets",
          "items": [
            "Cube: 6 squares, 11 nets",
            "Use the net for surface area",
            "Then find the volume"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Which side do you draw first when constructing a triangle?",
        "back": "The longest side."
      },
      {
        "front": "Should you rub out the construction arcs?",
        "back": "No. Leave them showing."
      },
      {
        "front": "Can you make a triangle with sides 3 cm, 4 cm and 9 cm?",
        "back": "No. 3 + 4 is less than 9."
      },
      {
        "front": "How many squares are in the net of a cube?",
        "back": "6"
      },
      {
        "front": "A cuboid is 5 cm by 3 cm by 2 cm. Find its surface area.",
        "back": "62 cm²"
      },
      {
        "front": "A cuboid is 5 cm by 3 cm by 2 cm. Find its volume.",
        "back": "30 cm³"
      },
      {
        "front": "How do you draw a reflex angle of 230°?",
        "back": "Draw 360 - 230 = 130° and mark the outside angle."
      }
    ]
  },
  "4.3": {
    "mindMap": {
      "centre": "Scale drawings and bearings",
      "branches": [
        {
          "label": "Scales",
          "items": [
            "1 cm to 2 m",
            "1 : 50 000",
            "Drawing to real: multiply",
            "Real to drawing: divide"
          ]
        },
        {
          "label": "Bearings",
          "items": [
            "Start at north",
            "Measure clockwise",
            "Three figures: 045°"
          ]
        },
        {
          "label": "Back bearings",
          "items": [
            "Add 180° if less than 180°",
            "Subtract 180° if more"
          ]
        },
        {
          "label": "Directions",
          "items": [
            "North 000°",
            "East 090°",
            "South 180°",
            "West 270°"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "A room is 8 m long. Scale 1 cm to 2 m. How long on the drawing?",
        "back": "4 cm"
      },
      {
        "front": "Scale 1 : 50 000. 4 cm on the map is how far in real life?",
        "back": "2 km"
      },
      {
        "front": "Scale 1 : 50 000. How long on the map is 7.5 km?",
        "back": "15 cm"
      },
      {
        "front": "What is the bearing of due west?",
        "back": "270°"
      },
      {
        "front": "How do you write a bearing of 45°?",
        "back": "045°"
      },
      {
        "front": "The bearing of B from A is 025°. Find the bearing of A from B.",
        "back": "205°"
      },
      {
        "front": "The bearing of Q from P is 300°. Find the bearing of P from Q.",
        "back": "120°"
      },
      {
        "front": "Which way do you measure a bearing?",
        "back": "Clockwise from north."
      }
    ]
  },
  "4.4": {
    "mindMap": {
      "centre": "Similarity",
      "branches": [
        {
          "label": "Similar shapes",
          "items": [
            "Same angles",
            "Lengths × scale factor",
            "Match corresponding sides"
          ]
        },
        {
          "label": "Scale factor",
          "items": [
            "New ÷ old",
            "Multiply to enlarge",
            "Divide to shrink"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Areas × k²",
            "Volumes × k³",
            "Area back to k: square root",
            "Volume back to k: cube root"
          ]
        },
        {
          "label": "Real life",
          "items": [
            "Tree shadows",
            "Photo enlargements",
            "Pizza value"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "AB = 4, PQ = 10 in similar triangles. Find the scale factor.",
        "back": "2.5"
      },
      {
        "front": "Scale factor 2.5. BC = 6 cm. Find the matching side QR.",
        "back": "15 cm"
      },
      {
        "front": "A 1.5 m stick has a 2 m shadow. A tree has a 12 m shadow. How tall is the tree?",
        "back": "9 m"
      },
      {
        "front": "A 10 cm by 15 cm photo is enlarged to 25 cm wide. How tall is it?",
        "back": "37.5 cm"
      },
      {
        "front": "Do angles change in similar shapes?",
        "back": "No. Only lengths change."
      },
      {
        "front": "(Extended and O Level) Lengths × 1.5. Area 60 cm². New area?",
        "back": "135 cm²"
      },
      {
        "front": "(Extended and O Level) Lengths × 1.5. Volume 400 ml. New volume?",
        "back": "1350 ml"
      },
      {
        "front": "(Extended and O Level) Similar cones, volumes 16 and 54. Small height 6 cm. Large height?",
        "back": "9 cm"
      }
    ]
  },
  "4.5": {
    "mindMap": {
      "centre": "Symmetry",
      "branches": [
        {
          "label": "Line symmetry",
          "items": [
            "A mirror line",
            "Fold to check"
          ]
        },
        {
          "label": "Rotational symmetry",
          "items": [
            "Order: times it fits in a full turn",
            "Smallest order is 1",
            "Use tracing paper"
          ]
        },
        {
          "label": "Shapes",
          "items": [
            "Regular n-gon: n lines, order n",
            "Rectangle: 2, order 2",
            "Parallelogram: 0, order 2"
          ]
        },
        {
          "label": "Extended and O Level: solids",
          "items": [
            "Planes of symmetry",
            "Axes of symmetry",
            "Cuboid: 3 planes"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Lines of symmetry and order of a square?",
        "back": "4 lines, order 4"
      },
      {
        "front": "Lines of symmetry and order of a rectangle?",
        "back": "2 lines, order 2"
      },
      {
        "front": "Lines of symmetry and order of a parallelogram?",
        "back": "0 lines, order 2"
      },
      {
        "front": "Lines of symmetry and order of a regular hexagon?",
        "back": "6 lines, order 6"
      },
      {
        "front": "Lines of symmetry and order of a kite?",
        "back": "1 line, order 1"
      },
      {
        "front": "Lines of symmetry and order of the letter S?",
        "back": "0 lines, order 2"
      },
      {
        "front": "(Extended and O Level) Planes of symmetry of a cuboid with all sides different?",
        "back": "3"
      },
      {
        "front": "(Extended and O Level) Order of the axis of a regular square-based pyramid?",
        "back": "4"
      }
    ]
  },
  "4.6": {
    "mindMap": {
      "centre": "Angles",
      "branches": [
        {
          "label": "Basic facts",
          "items": [
            "At a point: 360°",
            "Straight line: 180°",
            "Vertically opposite: equal",
            "Triangle 180°, quadrilateral 360°"
          ]
        },
        {
          "label": "Parallel lines",
          "items": [
            "Corresponding: equal (F)",
            "Alternate: equal (Z)",
            "Co-interior: add to 180° (C)"
          ]
        },
        {
          "label": "Polygons",
          "items": [
            "Exterior = 360 ÷ n",
            "Interior = 180 - exterior",
            "Sum = (n - 2) × 180"
          ]
        },
        {
          "label": "Reasons",
          "items": [
            "Write the rule in words",
            "Angle ABC is the angle at B"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Angles on a straight line are 125° and x. Find x.",
        "back": "55°"
      },
      {
        "front": "An isosceles triangle has a top angle of 40°. Find each base angle.",
        "back": "70°"
      },
      {
        "front": "A ladder makes 70° with the ground. What angle does it make with the wall?",
        "back": "20°"
      },
      {
        "front": "Alternate angles are...",
        "back": "Equal."
      },
      {
        "front": "Co-interior angles add up to...",
        "back": "180°"
      },
      {
        "front": "Find the interior angle of a regular hexagon.",
        "back": "120°"
      },
      {
        "front": "Each interior angle of a regular polygon is 156°. How many sides?",
        "back": "15"
      },
      {
        "front": "Sum of the interior angles of a pentagon?",
        "back": "540°"
      },
      {
        "front": "(Extended and O Level) A pentagon has angles 100°, 120°, 95°, 110° and x. Find x.",
        "back": "115°"
      }
    ]
  },
  "4.7": {
    "mindMap": {
      "centre": "Circle theorems I",
      "branches": [
        {
          "label": "Core",
          "items": [
            "Angle in a semicircle = 90°",
            "Tangent and radius = 90°"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Angle at centre = 2 × circumference",
            "Same segment: equal",
            "Cyclic quadrilateral: opposite add to 180°",
            "Alternate segment theorem"
          ]
        },
        {
          "label": "Reasons",
          "items": [
            "Name the theorem every time"
          ]
        },
        {
          "label": "Real life",
          "items": [
            "Find a table's centre with a set square",
            "Wheel on a road"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is the angle in a semicircle?",
        "back": "90°"
      },
      {
        "front": "What angle does a tangent make with a radius?",
        "back": "90°"
      },
      {
        "front": "AB is a diameter, angle CAB = 35°. Find angle ABC.",
        "back": "55°"
      },
      {
        "front": "Radius 5 cm, P is 13 cm from the centre. Find the tangent length.",
        "back": "12 cm"
      },
      {
        "front": "(Extended and O Level) Angle at circumference 40°. Angle at centre on the same arc?",
        "back": "80°"
      },
      {
        "front": "(Extended and O Level) Angle at centre 130°. Angle at circumference on the same arc?",
        "back": "65°"
      },
      {
        "front": "(Extended and O Level) Cyclic quadrilateral: angle A = 85°. Find angle C.",
        "back": "95°"
      },
      {
        "front": "(Extended and O Level) Tangent-chord angle 70°. Angle in the alternate segment?",
        "back": "70°"
      }
    ]
  },
  "4.8": {
    "mindMap": {
      "centre": "Circle theorems II",
      "branches": [
        {
          "label": "Chords",
          "items": [
            "Perpendicular from centre bisects a chord",
            "Perpendicular bisector passes through centre",
            "Equal chords: same distance from centre"
          ]
        },
        {
          "label": "Tangents",
          "items": [
            "From one point: equal lengths",
            "OAPB is a kite",
            "Right angles at A and B"
          ]
        },
        {
          "label": "Use with",
          "items": [
            "Pythagoras with half the chord",
            "Isosceles triangles"
          ]
        },
        {
          "label": "Real life",
          "items": [
            "Water in a pipe",
            "Centre of a broken plate"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "A line from the centre at 90° to a chord does what to the chord?",
        "back": "Cuts it in half."
      },
      {
        "front": "Radius 10 cm, chord 16 cm. Distance from the centre?",
        "back": "6 cm"
      },
      {
        "front": "Pipe radius 13 cm, water surface 24 cm wide. Distance from the centre?",
        "back": "5 cm"
      },
      {
        "front": "Two chords are equal. What do you know about their distances from the centre?",
        "back": "They are equal."
      },
      {
        "front": "Tangents from P touch at A and B. PA = 7 cm. Find PB.",
        "back": "7 cm"
      },
      {
        "front": "Tangents from P, angle APB = 50°. Find angle AOB.",
        "back": "130°"
      },
      {
        "front": "Tangents from P, angle APB = 50°. Find angle PAB.",
        "back": "65°"
      },
      {
        "front": "When using Pythagoras with a chord, which length do you use?",
        "back": "Half the chord."
      }
    ]
  },
  "5.1": {
    "mindMap": {
      "centre": "Units of measure",
      "branches": [
        {
          "label": "Length",
          "items": [
            "10 mm = 1 cm",
            "100 cm = 1 m",
            "1000 m = 1 km"
          ]
        },
        {
          "label": "Mass and capacity",
          "items": [
            "1000 g = 1 kg",
            "1000 kg = 1 tonne",
            "1000 ml = 1 litre"
          ]
        },
        {
          "label": "Area",
          "items": [
            "1 cm² = 100 mm²",
            "1 m² = 10 000 cm²",
            "Square the length change"
          ]
        },
        {
          "label": "Volume",
          "items": [
            "1 m³ = 1 000 000 cm³",
            "1 cm³ = 1 ml",
            "1000 cm³ = 1 litre",
            "1 m³ = 1000 litres"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Change 3.5 km to metres.",
        "back": "3500 m"
      },
      {
        "front": "Change 2300 g to kg.",
        "back": "2.3 kg"
      },
      {
        "front": "Big unit to small unit: multiply or divide?",
        "back": "Multiply. You need more of the small units."
      },
      {
        "front": "How many cm² are in 1 m²?",
        "back": "10 000 cm²"
      },
      {
        "front": "How many cm³ are in 1 m³?",
        "back": "1 000 000 cm³"
      },
      {
        "front": "How many ml is 1 cm³?",
        "back": "1 ml"
      },
      {
        "front": "How many litres does a 1 m³ tank hold?",
        "back": "1000 litres"
      },
      {
        "front": "A tank is 60 cm by 30 cm by 40 cm. How many litres does it hold?",
        "back": "72 litres"
      },
      {
        "front": "Add 750 g and 1.2 kg.",
        "back": "1.95 kg"
      }
    ]
  },
  "5.2": {
    "mindMap": {
      "centre": "Area and perimeter",
      "branches": [
        {
          "label": "Perimeter",
          "items": [
            "Distance round the edge",
            "Units: cm, m"
          ]
        },
        {
          "label": "Formulas",
          "items": [
            "Rectangle: l × w",
            "Triangle: ½ × b × h",
            "Parallelogram: b × h",
            "Trapezium: ½(a + b)h"
          ]
        },
        {
          "label": "Height",
          "items": [
            "Perpendicular height",
            "At 90° to the base",
            "Never the sloping side"
          ]
        },
        {
          "label": "Real life",
          "items": [
            "Paint, carpet, seed: area",
            "Fence, frame: perimeter",
            "Round up to buy enough"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is perimeter?",
        "back": "The total distance round the edge of a shape."
      },
      {
        "front": "Area of a triangle?",
        "back": "½ × base × perpendicular height"
      },
      {
        "front": "Area of a parallelogram?",
        "back": "base × perpendicular height"
      },
      {
        "front": "Area of a trapezium?",
        "back": "½ × (a + b) × h, where a and b are the parallel sides"
      },
      {
        "front": "Which area formula is given in the exam?",
        "back": "Only the triangle formula."
      },
      {
        "front": "A triangle has base 10 cm and height 7 cm. Find its area.",
        "back": "35 cm²"
      },
      {
        "front": "A trapezium has parallel sides 6 cm and 10 cm, 4 cm apart. Find its area.",
        "back": "32 cm²"
      },
      {
        "front": "A triangle has area 24 cm² and base 8 cm. Find its height.",
        "back": "6 cm"
      },
      {
        "front": "You need 2.08 tins of paint. How many do you buy?",
        "back": "3 tins. Round up."
      }
    ]
  },
  "5.3": {
    "mindMap": {
      "centre": "Circles, arcs and sectors",
      "branches": [
        {
          "label": "Circle",
          "items": [
            "C = πd = 2πr",
            "A = πr²",
            "d = 2r"
          ]
        },
        {
          "label": "Sector",
          "items": [
            "Fraction θ/360",
            "Arc = θ/360 × 2πr",
            "Area = θ/360 × πr²"
          ]
        },
        {
          "label": "Perimeter of sector",
          "items": [
            "Arc + 2r"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Any angle",
            "Major sector: 360 - θ",
            "Find θ from area or arc"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Circumference of a circle?",
        "back": "C = πd or C = 2πr"
      },
      {
        "front": "Area of a circle?",
        "back": "A = πr²"
      },
      {
        "front": "Radius 6 cm. Area in terms of π?",
        "back": "36π cm²"
      },
      {
        "front": "A wheel has diameter 70 cm. How far does it go in one turn?",
        "back": "219.9 cm"
      },
      {
        "front": "What fraction of a circle is a 45° sector?",
        "back": "1/8"
      },
      {
        "front": "Arc length of a sector?",
        "back": "θ/360 × 2πr"
      },
      {
        "front": "Area of a sector?",
        "back": "θ/360 × πr²"
      },
      {
        "front": "Perimeter of a sector?",
        "back": "Arc length + 2 × radius"
      },
      {
        "front": "A quarter circle has radius 10 cm. Find its area.",
        "back": "25π = 78.5 cm²"
      },
      {
        "front": "(Extended and O Level) The minor sector is 75°. What is the angle of the major sector?",
        "back": "285°"
      }
    ]
  },
  "5.4": {
    "mindMap": {
      "centre": "Surface area and volume",
      "branches": [
        {
          "label": "Prisms",
          "items": [
            "V = cross-section × length",
            "Cuboid V = lwh",
            "Cylinder V = πr²h"
          ]
        },
        {
          "label": "Pointed solids",
          "items": [
            "Cone V = ⅓πr²h",
            "Pyramid V = ⅓ × base × h",
            "Cone curved = πrl"
          ]
        },
        {
          "label": "Sphere",
          "items": [
            "V = (4/3)πr³",
            "SA = 4πr²"
          ]
        },
        {
          "label": "Surface area",
          "items": [
            "Add all faces",
            "Cylinder curved = 2πrh",
            "Total: add the ends"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a prism?",
        "back": "A solid with the same cross-section all the way through."
      },
      {
        "front": "Volume of a prism?",
        "back": "Area of cross-section × length"
      },
      {
        "front": "Volume of a cylinder?",
        "back": "πr²h"
      },
      {
        "front": "Volume of a cone?",
        "back": "⅓πr²h"
      },
      {
        "front": "Curved surface area of a cone?",
        "back": "πrl, where l is the slant height"
      },
      {
        "front": "Volume of a sphere?",
        "back": "(4/3)πr³"
      },
      {
        "front": "Surface area of a sphere?",
        "back": "4πr²"
      },
      {
        "front": "A cuboid is 5 cm by 4 cm by 3 cm. Find its surface area.",
        "back": "94 cm²"
      },
      {
        "front": "A pyramid has a 6 cm square base and height 4 cm. Find its volume.",
        "back": "48 cm³"
      },
      {
        "front": "Which formula is not given in the exam?",
        "back": "The cuboid. Volume = l × w × h, surface area = 2(lw + lh + wh)."
      }
    ]
  },
  "5.5": {
    "mindMap": {
      "centre": "Compound shapes and parts of shapes",
      "branches": [
        {
          "label": "Compound shapes",
          "items": [
            "Split and add",
            "Or subtract from a big shape",
            "Find missing edges first"
          ]
        },
        {
          "label": "Perimeter",
          "items": [
            "Outside edges only",
            "No inside lines"
          ]
        },
        {
          "label": "Hemisphere",
          "items": [
            "V = (2/3)πr³",
            "Curved = 2πr²",
            "Solid total = 3πr²"
          ]
        },
        {
          "label": "Extended and O Level: frustum",
          "items": [
            "Big cone - small cone",
            "Use Pythagoras for slant heights"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Two ways to find the area of a compound shape?",
        "back": "Split it and add, or subtract the missing part from a bigger shape."
      },
      {
        "front": "A square of side 10 cm has a circle of radius 5 cm inside. Find the area outside the circle.",
        "back": "100 - 25π = 21.46 cm²"
      },
      {
        "front": "Volume of a hemisphere?",
        "back": "(2/3)πr³"
      },
      {
        "front": "Total surface area of a solid hemisphere?",
        "back": "3πr² (curved 2πr² plus the flat circle πr²)"
      },
      {
        "front": "A track has two 100 m straights and semicircular ends of diameter 60 m. Find one lap.",
        "back": "388.5 m"
      },
      {
        "front": "Do you include inside lines in a perimeter?",
        "back": "No. Only the outside edges."
      },
      {
        "front": "(Extended and O Level) What is a frustum?",
        "back": "A cone or pyramid with the top cut off."
      },
      {
        "front": "(Extended and O Level) How do you find the volume of a frustum?",
        "back": "Volume of the big cone minus volume of the small cone."
      }
    ]
  },
  "6.1": {
    "mindMap": {
      "centre": "Pythagoras' theorem",
      "branches": [
        {
          "label": "The rule",
          "items": [
            "a² + b² = c²",
            "c is the hypotenuse",
            "Only in right-angled triangles"
          ]
        },
        {
          "label": "Longest side",
          "items": [
            "Square, add, square root"
          ]
        },
        {
          "label": "Shorter side",
          "items": [
            "Square, subtract, square root"
          ]
        },
        {
          "label": "Uses",
          "items": [
            "Diagonals: TV, park, ladder",
            "Check a right angle: 3, 4, 5"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is the hypotenuse?",
        "back": "The longest side, opposite the right angle."
      },
      {
        "front": "Write Pythagoras' theorem.",
        "back": "a² + b² = c², where c is the hypotenuse."
      },
      {
        "front": "Shorter sides 6 cm and 8 cm. Find the hypotenuse.",
        "back": "10 cm"
      },
      {
        "front": "Hypotenuse 13 cm, one side 5 cm. Find the other side.",
        "back": "12 cm"
      },
      {
        "front": "Finding a shorter side: add or subtract?",
        "back": "Subtract."
      },
      {
        "front": "Is a triangle with sides 7, 24, 25 right-angled?",
        "back": "Yes. 49 + 576 = 625 = 25²"
      },
      {
        "front": "Is a triangle with sides 6, 8, 11 right-angled?",
        "back": "No. 36 + 64 = 100, but 11² = 121"
      },
      {
        "front": "A 5 m ladder has its foot 1.5 m from a wall. How high does it reach?",
        "back": "4.77 m"
      },
      {
        "front": "Is Pythagoras on the formula page?",
        "back": "No. You must learn it."
      }
    ]
  },
  "6.2": {
    "mindMap": {
      "centre": "Right-angled triangles",
      "branches": [
        {
          "label": "Label",
          "items": [
            "H: opposite the right angle",
            "O: opposite the angle",
            "A: next to the angle"
          ]
        },
        {
          "label": "SOH CAH TOA",
          "items": [
            "sin = O/H",
            "cos = A/H",
            "tan = O/A"
          ]
        },
        {
          "label": "Angles",
          "items": [
            "Use sin⁻¹, cos⁻¹, tan⁻¹",
            "Give to 1 d.p.",
            "Calculator in degrees"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Elevation: look up",
            "Depression: look down",
            "Both from the horizontal",
            "Shortest distance: perpendicular"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What does SOH CAH TOA stand for?",
        "back": "sin = O/H, cos = A/H, tan = O/A"
      },
      {
        "front": "Angle 35°, hypotenuse 10 cm. Find the opposite side.",
        "back": "10 × sin 35° = 5.74 cm"
      },
      {
        "front": "Angle 40°, adjacent 8 cm. Find the hypotenuse.",
        "back": "8 ÷ cos 40° = 10.4 cm"
      },
      {
        "front": "Opposite 3 cm, adjacent 4 cm. Find the angle.",
        "back": "tan⁻¹(0.75) = 36.9°"
      },
      {
        "front": "When do you divide instead of multiply?",
        "back": "When the missing side is on the bottom of the fraction."
      },
      {
        "front": "Which button finds an angle from a ratio?",
        "back": "The inverse: sin⁻¹, cos⁻¹ or tan⁻¹."
      },
      {
        "front": "A ship sails 20 km on a bearing of 060°. How far east?",
        "back": "20 × sin 60° = 17.3 km"
      },
      {
        "front": "(Extended and O Level) What is an angle of elevation?",
        "back": "The angle you look up from the horizontal."
      },
      {
        "front": "(Extended and O Level) What is the shortest distance from a point to a line?",
        "back": "The perpendicular distance, at 90° to the line."
      }
    ]
  },
  "6.3": {
    "mindMap": {
      "centre": "Exact trigonometric values",
      "branches": [
        {
          "label": "sin",
          "items": [
            "0, 1/2, √2/2, √3/2, 1",
            "for 0°, 30°, 45°, 60°, 90°"
          ]
        },
        {
          "label": "cos",
          "items": [
            "Same as sin, backwards",
            "1, √3/2, √2/2, 1/2, 0"
          ]
        },
        {
          "label": "tan",
          "items": [
            "0, √3/3, 1, √3",
            "tan 90° not defined"
          ]
        },
        {
          "label": "Triangles",
          "items": [
            "Half equilateral: 1, √3, 2",
            "Half square: 1, 1, √2"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "sin 30°?",
        "back": "1/2"
      },
      {
        "front": "cos 30°?",
        "back": "√3/2"
      },
      {
        "front": "sin 45°?",
        "back": "√2/2 (or 1/√2)"
      },
      {
        "front": "tan 45°?",
        "back": "1"
      },
      {
        "front": "tan 60°?",
        "back": "√3"
      },
      {
        "front": "cos 60°?",
        "back": "1/2"
      },
      {
        "front": "tan 30°?",
        "back": "√3/3 (or 1/√3)"
      },
      {
        "front": "Hypotenuse 10, angle 30°. Exact adjacent side?",
        "back": "5√3"
      },
      {
        "front": "Which triangle gives the 30° and 60° values?",
        "back": "Half an equilateral triangle: sides 1, √3, 2."
      }
    ]
  },
  "6.4": {
    "mindMap": {
      "centre": "Trigonometric functions",
      "branches": [
        {
          "label": "y = sin x",
          "items": [
            "Starts at 0",
            "Max 1 at 90°, min -1 at 270°",
            "Period 360°"
          ]
        },
        {
          "label": "y = cos x",
          "items": [
            "Starts at 1",
            "Min -1 at 180°",
            "Period 360°"
          ]
        },
        {
          "label": "y = tan x",
          "items": [
            "Period 180°",
            "Asymptotes at 90° and 270°"
          ]
        },
        {
          "label": "Second answer",
          "items": [
            "sin: 180° - x",
            "cos: 360° - x",
            "tan: x + 180°"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is the greatest value of sin x?",
        "back": "1, at x = 90°"
      },
      {
        "front": "What is cos 180°?",
        "back": "-1"
      },
      {
        "front": "How often does the tan graph repeat?",
        "back": "Every 180°"
      },
      {
        "front": "Where does y = tan x have asymptotes (0° to 360°)?",
        "back": "At x = 90° and x = 270°"
      },
      {
        "front": "Solve sin x = 0.5 for 0° ≤ x ≤ 360°.",
        "back": "30° or 150°"
      },
      {
        "front": "Solve cos x = 0.3 for 0° ≤ x ≤ 360°.",
        "back": "72.5° or 287.5°"
      },
      {
        "front": "Solve tan x = 2 for 0° ≤ x ≤ 360°.",
        "back": "63.4° or 243.4°"
      },
      {
        "front": "Solve sin x = -0.6 for 0° ≤ x ≤ 360°.",
        "back": "216.9° or 323.1°"
      },
      {
        "front": "If sin x = k, what is the second answer?",
        "back": "180° - x"
      }
    ]
  },
  "6.5": {
    "mindMap": {
      "centre": "Non-right-angled triangles",
      "branches": [
        {
          "label": "Sine rule",
          "items": [
            "a/sin A = b/sin B",
            "Need a side and its opposite angle"
          ]
        },
        {
          "label": "Cosine rule",
          "items": [
            "a² = b² + c² - 2bc cos A",
            "Two sides and the angle between",
            "Or all three sides"
          ]
        },
        {
          "label": "Area",
          "items": [
            "½ab sin C",
            "C is between a and b"
          ]
        },
        {
          "label": "Watch out",
          "items": [
            "Negative cos: obtuse angle",
            "Ambiguous case: 180° - x"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Write the sine rule.",
        "back": "a/sin A = b/sin B = c/sin C"
      },
      {
        "front": "Write the cosine rule for a side.",
        "back": "a² = b² + c² - 2bc cos A"
      },
      {
        "front": "Write the area formula for any triangle.",
        "back": "Area = ½ab sin C"
      },
      {
        "front": "When do you use the cosine rule?",
        "back": "Two sides and the angle between them, or all three sides."
      },
      {
        "front": "When do you use the sine rule?",
        "back": "When you know a side and its opposite angle."
      },
      {
        "front": "b = 5, c = 7, A = 60°. Find a.",
        "back": "√39 = 6.24"
      },
      {
        "front": "cos C is negative. What does that tell you?",
        "back": "C is obtuse (between 90° and 180°)."
      },
      {
        "front": "Sides 6 cm and 9 cm, angle 50° between. Find the area.",
        "back": "20.7 cm²"
      },
      {
        "front": "What is the ambiguous case?",
        "back": "The sine rule gives two possible angles, x and 180° - x."
      }
    ]
  },
  "6.6": {
    "mindMap": {
      "centre": "Pythagoras and trigonometry in 3D",
      "branches": [
        {
          "label": "Method",
          "items": [
            "Find a right-angled triangle",
            "Draw it flat",
            "Label lengths"
          ]
        },
        {
          "label": "Cuboid",
          "items": [
            "Base diagonal first",
            "Space diagonal = √(l² + w² + h²)"
          ]
        },
        {
          "label": "Line and plane",
          "items": [
            "Drop straight down",
            "Angle with the projection"
          ]
        },
        {
          "label": "Pyramid",
          "items": [
            "Half the base diagonal",
            "Height is vertical"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Space diagonal of an l × w × h cuboid?",
        "back": "√(l² + w² + h²)"
      },
      {
        "front": "Cuboid 4 cm by 3 cm by 12 cm. Find the space diagonal.",
        "back": "13 cm"
      },
      {
        "front": "What is the projection of a line on a plane?",
        "back": "Its shadow on the plane if light shines straight down."
      },
      {
        "front": "How do you find the angle between a line and a plane?",
        "back": "Use the right-angled triangle made by the line, its projection and the vertical drop."
      },
      {
        "front": "Cuboid 4 by 3 by 12. Angle between the space diagonal and the base?",
        "back": "tan⁻¹(12/5) = 67.4°"
      },
      {
        "front": "Will a 1 m pole fit in a box 60 cm by 40 cm by 50 cm?",
        "back": "No. The space diagonal is only 87.7 cm."
      },
      {
        "front": "In a square-based pyramid, what length do you need from the base?",
        "back": "Half the diagonal of the base."
      }
    ]
  },
  "7.1": {
    "mindMap": {
      "centre": "Transformations",
      "branches": [
        {
          "label": "Reflection",
          "items": [
            "Give the mirror line",
            "x = 2 is vertical",
            "Extended: y = x, y = -x"
          ]
        },
        {
          "label": "Rotation",
          "items": [
            "Angle",
            "Direction",
            "Centre"
          ]
        },
        {
          "label": "Enlargement",
          "items": [
            "Scale factor",
            "Centre",
            "Fraction: smaller",
            "Extended: negative"
          ]
        },
        {
          "label": "Translation",
          "items": [
            "Column vector",
            "Top: across",
            "Bottom: up"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What must you give to describe a rotation?",
        "back": "The angle, the direction and the centre."
      },
      {
        "front": "What must you give to describe an enlargement?",
        "back": "The scale factor and the centre."
      },
      {
        "front": "How do you describe a translation?",
        "back": "With a column vector."
      },
      {
        "front": "Translate (1, 1) by the vector (4, -3).",
        "back": "(5, -2)"
      },
      {
        "front": "Reflect (1, 2) in the line x = 4.",
        "back": "(7, 2)"
      },
      {
        "front": "Rotate (2, 1) through 90° clockwise about the origin.",
        "back": "(1, -2)"
      },
      {
        "front": "Enlarge (2, 3) by scale factor 3, centre (1, 1).",
        "back": "(4, 7)"
      },
      {
        "front": "What does a scale factor of ½ do?",
        "back": "Makes the shape half the size."
      },
      {
        "front": "How do you find the centre of an enlargement?",
        "back": "Draw lines through matching corners. The centre is where they cross."
      },
      {
        "front": "(Extended and O Level) Reflect (5, 2) in the line y = x.",
        "back": "(2, 5)"
      },
      {
        "front": "(Extended and O Level) What does a negative scale factor do?",
        "back": "Puts the image on the other side of the centre, upside down."
      }
    ]
  },
  "7.2": {
    "mindMap": {
      "centre": "Vectors in two dimensions",
      "branches": [
        {
          "label": "Writing",
          "items": [
            "Column: across on top",
            "AB with an arrow",
            "Bold a, or underlined"
          ]
        },
        {
          "label": "Signs",
          "items": [
            "Negative across: left",
            "Negative up: down"
          ]
        },
        {
          "label": "Add and subtract",
          "items": [
            "Top with top",
            "Bottom with bottom",
            "Resultant: start to finish"
          ]
        },
        {
          "label": "Scalar",
          "items": [
            "Multiply both numbers",
            "Gives a parallel vector",
            "-a: opposite direction"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What does the vector (-4, 1) mean?",
        "back": "4 left and 1 up."
      },
      {
        "front": "a = (2, 3), b = (4, -1). Find a + b.",
        "back": "(6, 2)"
      },
      {
        "front": "a = (2, 3), b = (4, -1). Find a - b.",
        "back": "(-2, 4)"
      },
      {
        "front": "a = (2, 3). Find 3a.",
        "back": "(6, 9)"
      },
      {
        "front": "How is -a different from a?",
        "back": "Same length, opposite direction."
      },
      {
        "front": "What is a scalar?",
        "back": "An ordinary number, such as 3 or -2."
      },
      {
        "front": "What is a resultant vector?",
        "back": "One vector that does the same as two or more vectors one after the other."
      },
      {
        "front": "(3, k) + (m, -2) = (7, 5). Find k and m.",
        "back": "k = 7, m = 4"
      }
    ]
  },
  "7.3": {
    "mindMap": {
      "centre": "Magnitude of a vector",
      "branches": [
        {
          "label": "Meaning",
          "items": [
            "Length of the vector",
            "Never negative",
            "Written |a|"
          ]
        },
        {
          "label": "Formula",
          "items": [
            "√(x² + y²)",
            "Pythagoras"
          ]
        },
        {
          "label": "Watch out",
          "items": [
            "Square negatives: positive",
            "Add vectors first, then find the length"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is the magnitude of a vector?",
        "back": "Its length."
      },
      {
        "front": "Formula for the magnitude of (x, y)?",
        "back": "√(x² + y²)"
      },
      {
        "front": "Find |(3, 4)|.",
        "back": "5"
      },
      {
        "front": "Find |(-5, 12)|.",
        "back": "13"
      },
      {
        "front": "Find |(2, -6)| to 3 s.f.",
        "back": "6.32"
      },
      {
        "front": "A boat moves with velocity (5, 12) km/h. What is its speed?",
        "back": "13 km/h"
      },
      {
        "front": "(k, 8) has magnitude 10 and k > 0. Find k.",
        "back": "6"
      },
      {
        "front": "Is |a + b| the same as |a| + |b|?",
        "back": "Usually not. Add the vectors first, then find the magnitude."
      }
    ]
  },
  "7.4": {
    "mindMap": {
      "centre": "Vector geometry",
      "branches": [
        {
          "label": "Routes",
          "items": [
            "Any route with known vectors",
            "Backwards: negative",
            "AB = b - a"
          ]
        },
        {
          "label": "Midpoint",
          "items": [
            "OM = ½(a + b)",
            "Ratio m : n: m/(m + n) of the way"
          ]
        },
        {
          "label": "Parallel",
          "items": [
            "One is a multiple of the other",
            "Look for a common factor"
          ]
        },
        {
          "label": "Collinear",
          "items": [
            "Parallel",
            "And a shared point"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "OA = a and OB = b. Find AB.",
        "back": "b - a"
      },
      {
        "front": "What is a position vector?",
        "back": "The vector from the origin O to a point."
      },
      {
        "front": "M is the midpoint of AB. Find OM in terms of a and b.",
        "back": "½(a + b)"
      },
      {
        "front": "P is on AB with AP : PB = 1 : 2. Find OP.",
        "back": "⅔a + ⅓b"
      },
      {
        "front": "How do you show two vectors are parallel?",
        "back": "Show one is a number times the other."
      },
      {
        "front": "Are 2a - 4b and a - 2b parallel?",
        "back": "Yes. 2a - 4b = 2(a - 2b)."
      },
      {
        "front": "How do you show A, B and C are collinear?",
        "back": "Show AB and AC (or BC) are parallel and say they share a point."
      },
      {
        "front": "If OA = a, what is AO?",
        "back": "-a"
      }
    ]
  },
  "8.1": {
    "mindMap": {
      "centre": "Introduction to probability",
      "branches": [
        {
          "label": "Scale",
          "items": [
            "0: impossible",
            "0.5: even chance",
            "1: certain"
          ]
        },
        {
          "label": "Single event",
          "items": [
            "Ways ÷ total",
            "Equally likely outcomes"
          ]
        },
        {
          "label": "Not happening",
          "items": [
            "1 - probability",
            "All outcomes add to 1"
          ]
        },
        {
          "label": "Venn diagrams",
          "items": [
            "Overlap first",
            "Then each circle",
            "Then outside"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "P(A)",
            "P(A′) = 1 - P(A)"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What does a probability of 0 mean?",
        "back": "The event is impossible."
      },
      {
        "front": "What does a probability of 1 mean?",
        "back": "The event is certain."
      },
      {
        "front": "A fair dice is rolled. P(even number)?",
        "back": "3/6 = 1/2"
      },
      {
        "front": "3 red, 5 blue, 2 green sweets. P(not green)?",
        "back": "8/10 = 4/5"
      },
      {
        "front": "P(rain) = 0.35. P(no rain)?",
        "back": "0.65"
      },
      {
        "front": "Probabilities 0.3, 0.25, 0.15 and x cover every outcome. Find x.",
        "back": "0.3"
      },
      {
        "front": "In a Venn diagram, which part do you fill first?",
        "back": "The overlap."
      },
      {
        "front": "30 students: 18 football, 12 tennis, 5 both. How many play neither?",
        "back": "5"
      },
      {
        "front": "(Extended and O Level) P(B) = 0.8. Find P(B′).",
        "back": "0.2"
      }
    ]
  },
  "8.2": {
    "mindMap": {
      "centre": "Relative and expected frequencies",
      "branches": [
        {
          "label": "Relative frequency",
          "items": [
            "Frequency ÷ trials",
            "An estimate",
            "More trials: better"
          ]
        },
        {
          "label": "Expected frequency",
          "items": [
            "Probability × trials",
            "An average, not exact"
          ]
        },
        {
          "label": "Words",
          "items": [
            "Fair: all equally likely",
            "Biased: not fair",
            "Random: same chance"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Formula for relative frequency?",
        "back": "Number of times it happened ÷ total number of trials"
      },
      {
        "front": "A spinner lands on red 42 times in 200 spins. Estimate P(red).",
        "back": "0.21"
      },
      {
        "front": "How can you make a relative frequency more reliable?",
        "back": "Do more trials."
      },
      {
        "front": "Formula for expected frequency?",
        "back": "Probability × number of trials"
      },
      {
        "front": "A fair dice is rolled 120 times. Expected number of sixes?",
        "back": "20"
      },
      {
        "front": "A coin gives 70 heads in 100 throws. Is it fair?",
        "back": "Probably biased. A fair coin would give about 50."
      },
      {
        "front": "60 of 200 students walk. Estimate the number in a school of 1200.",
        "back": "360"
      },
      {
        "front": "What does biased mean?",
        "back": "Some outcomes are more likely than they should be."
      }
    ]
  },
  "8.3": {
    "mindMap": {
      "centre": "Probability of combined events",
      "branches": [
        {
          "label": "Diagrams",
          "items": [
            "Sample space grid",
            "Venn diagram",
            "Tree diagram"
          ]
        },
        {
          "label": "Rules",
          "items": [
            "AND: multiply",
            "OR: add",
            "At least one: 1 - P(none)"
          ]
        },
        {
          "label": "Tree diagrams",
          "items": [
            "Multiply along",
            "Add the routes",
            "Branches add to 1"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Without replacement: totals drop by 1",
            "∩: and, ∪: or"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Two dice are rolled. How many outcomes are there?",
        "back": "36"
      },
      {
        "front": "Two dice: P(total of 7)?",
        "back": "6/36 = 1/6"
      },
      {
        "front": "On a tree diagram, what do you do along the branches?",
        "back": "Multiply."
      },
      {
        "front": "How do you find P(at least one)?",
        "back": "1 - P(none)"
      },
      {
        "front": "P(red light) is 0.4 and 0.3 at two independent lights. P(both red)?",
        "back": "0.12"
      },
      {
        "front": "3 red, 2 blue, with replacement. P(two reds)?",
        "back": "9/25"
      },
      {
        "front": "3 red, 2 blue, with replacement. P(one of each)?",
        "back": "12/25"
      },
      {
        "front": "(Extended and O Level) 3 red, 2 blue, without replacement. P(two reds)?",
        "back": "3/5 × 2/4 = 3/10"
      },
      {
        "front": "(Extended and O Level) What does A ∩ B mean?",
        "back": "A and B: the overlap of the circles."
      }
    ]
  },
  "8.4": {
    "mindMap": {
      "centre": "Conditional probability",
      "branches": [
        {
          "label": "Idea",
          "items": [
            "Given that: shrink the total",
            "Only count inside the group"
          ]
        },
        {
          "label": "Venn",
          "items": [
            "Given circle A: total is all of A"
          ]
        },
        {
          "label": "Two-way table",
          "items": [
            "Given a row: use the row total",
            "Given a column: use the column total"
          ]
        },
        {
          "label": "Tree",
          "items": [
            "Add all routes for the given event",
            "Divide"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What does 'given that' do to the total?",
        "back": "It shrinks it to the group you are told about."
      },
      {
        "front": "Venn: 18 play football, 5 of them also play tennis. P(tennis given football)?",
        "back": "5/18"
      },
      {
        "front": "60 girls, 25 walk. P(walks given girl)?",
        "back": "25/60 = 5/12"
      },
      {
        "front": "45 walkers, 25 are girls. P(girl given walks)?",
        "back": "25/45 = 5/9"
      },
      {
        "front": "3 red, 2 blue without replacement. Second is red. P(first was red)?",
        "back": "1/2"
      },
      {
        "front": "Is P(A given B) the same as P(B given A)?",
        "back": "Usually not. The totals are different groups."
      }
    ]
  },
  "9.1": {
    "mindMap": {
      "centre": "Classifying statistical data",
      "branches": [
        {
          "label": "Types",
          "items": [
            "Categorical: words",
            "Discrete: counted",
            "Continuous: measured"
          ]
        },
        {
          "label": "Tally charts",
          "items": [
            "Groups of five",
            "Check the total"
          ]
        },
        {
          "label": "Grouped tables",
          "items": [
            "10 < h ≤ 20",
            "Includes 20, not 10"
          ]
        },
        {
          "label": "Two-way tables",
          "items": [
            "Rows and columns",
            "Fill single gaps first",
            "Check the grand total"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Is the number of brothers discrete or continuous?",
        "back": "Discrete. You count it."
      },
      {
        "front": "Is the time to run 100 m discrete or continuous?",
        "back": "Continuous. You measure it."
      },
      {
        "front": "Is favourite colour numerical or categorical?",
        "back": "Categorical."
      },
      {
        "front": "Which class does 20 cm go in: 10 < h ≤ 20 or 20 < h ≤ 30?",
        "back": "10 < h ≤ 20"
      },
      {
        "front": "Why do you draw tally marks in fives?",
        "back": "So they are quick to count."
      },
      {
        "front": "40 boys: 20 walk, 15 bus. How many boys go by car?",
        "back": "5"
      },
      {
        "front": "How do you check a two-way table?",
        "back": "The rows and the columns must both add up to the grand total."
      }
    ]
  },
  "9.2": {
    "mindMap": {
      "centre": "Interpreting statistical data",
      "branches": [
        {
          "label": "Compare",
          "items": [
            "One average",
            "One measure of spread",
            "Say what it means"
          ]
        },
        {
          "label": "Spread",
          "items": [
            "Smaller range: more consistent"
          ]
        },
        {
          "label": "Limits",
          "items": [
            "Small sample",
            "Biased sample",
            "Correlation is not cause"
          ]
        },
        {
          "label": "Misleading graphs",
          "items": [
            "Axis not starting at 0",
            "Uneven scale"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What two things should you compare for two data sets?",
        "back": "An average and a measure of spread."
      },
      {
        "front": "Class A range 30, Class B range 15. Which is more consistent?",
        "back": "Class B."
      },
      {
        "front": "Mean 62 for A, 58 for B. What does that tell you?",
        "back": "Class A did better on average."
      },
      {
        "front": "Why might '3 out of 4 people prefer it' be unreliable?",
        "back": "The sample could be very small, such as only 4 people."
      },
      {
        "front": "Why can a bar chart with the axis starting at 90 be misleading?",
        "back": "Small differences look much bigger than they are."
      },
      {
        "front": "Does strong correlation prove one thing causes the other?",
        "back": "No. Something else may cause both."
      }
    ]
  },
  "9.3": {
    "mindMap": {
      "centre": "Averages and measures of spread",
      "branches": [
        {
          "label": "Averages",
          "items": [
            "Mean: total ÷ number",
            "Median: middle in order",
            "Mode: most common"
          ]
        },
        {
          "label": "Spread",
          "items": [
            "Range: largest - smallest"
          ]
        },
        {
          "label": "Which average",
          "items": [
            "Outliers: median",
            "Categories: mode",
            "Use all values: mean"
          ]
        },
        {
          "label": "Extended and O Level",
          "items": [
            "Grouped: use midpoints",
            "Estimated mean",
            "Modal class"
          ]
        },
        {
          "label": "IGCSE Extended",
          "items": [
            "LQ: (n + 1)/4th",
            "UQ: 3(n + 1)/4th",
            "IQR = UQ - LQ"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Find the mean of 2, 3, 4, 5, 7, 7, 7, 9.",
        "back": "5.5"
      },
      {
        "front": "Find the median of 2, 3, 4, 5, 7, 7, 7, 9.",
        "back": "6"
      },
      {
        "front": "What is the range?",
        "back": "Largest value minus smallest value."
      },
      {
        "front": "Which average is best when there is an outlier?",
        "back": "The median."
      },
      {
        "front": "Which average can you use for categorical data?",
        "back": "The mode."
      },
      {
        "front": "Mean of 5 numbers is 8. Four are 6, 7, 9, 10. Find the fifth.",
        "back": "8"
      },
      {
        "front": "Goals table: 33 goals in 20 matches. Find the mean.",
        "back": "1.65"
      },
      {
        "front": "(Extended and O Level) Why is the mean of grouped data only an estimate?",
        "back": "We use midpoints, not the real values."
      },
      {
        "front": "(IGCSE Extended) LQ 6 and UQ 15. Find the IQR.",
        "back": "9"
      }
    ]
  },
  "9.4": {
    "mindMap": {
      "centre": "Statistical charts and diagrams",
      "branches": [
        {
          "label": "Bar charts",
          "items": [
            "Equal widths",
            "Start at 0",
            "Dual: side by side",
            "Composite: stacked"
          ]
        },
        {
          "label": "Pie charts",
          "items": [
            "Angle = f ÷ total × 360",
            "Angles add to 360°",
            "Shows proportions"
          ]
        },
        {
          "label": "Pictograms",
          "items": [
            "Key for one picture",
            "Parts of a picture"
          ]
        },
        {
          "label": "IGCSE: stem and leaf",
          "items": [
            "Leaves in order",
            "Always a key"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Formula for a pie chart angle?",
        "back": "Frequency ÷ total × 360°"
      },
      {
        "front": "60 students, 20 chose apple. What angle?",
        "back": "120°"
      },
      {
        "front": "Survey of 250 people. A sector is 72°. How many people?",
        "back": "50"
      },
      {
        "front": "What must the angles in a pie chart add up to?",
        "back": "360°"
      },
      {
        "front": "In a composite bar chart, what does the total height show?",
        "back": "The total frequency for that bar."
      },
      {
        "front": "One face = 4 students. How many is 3½ faces?",
        "back": "14"
      },
      {
        "front": "(IGCSE) What does a stem-and-leaf diagram need?",
        "back": "A key, and leaves in order."
      },
      {
        "front": "(IGCSE) Stem 5, leaves 1 3 3 8, key 4 | 2 = 42. List the values.",
        "back": "51, 53, 53, 58"
      }
    ]
  },
  "9.5": {
    "mindMap": {
      "centre": "Scatter diagrams",
      "branches": [
        {
          "label": "Correlation",
          "items": [
            "Positive: both go up",
            "Negative: one up, one down",
            "Zero: no link"
          ]
        },
        {
          "label": "Line of best fit",
          "items": [
            "Ruled, by eye",
            "Through the middle",
            "Through the mean point"
          ]
        },
        {
          "label": "Estimates",
          "items": [
            "Inside the data: reliable",
            "Outside: not reliable"
          ]
        },
        {
          "label": "Remember",
          "items": [
            "Correlation is not cause",
            "Ignore outliers"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is positive correlation?",
        "back": "As one value goes up, the other goes up."
      },
      {
        "front": "Give an example of negative correlation.",
        "back": "The age of a car and its value."
      },
      {
        "front": "What does zero correlation mean?",
        "back": "There is no link."
      },
      {
        "front": "Does the line of best fit have to go through (0, 0)?",
        "back": "No."
      },
      {
        "front": "Which point does the line of best fit go through?",
        "back": "The mean point."
      },
      {
        "front": "Why is an estimate far outside the data unreliable?",
        "back": "The pattern may not continue."
      },
      {
        "front": "Ice cream sales and sunburn are correlated. Does ice cream cause sunburn?",
        "back": "No. Hot sunny weather causes both."
      }
    ]
  },
  "9.6": {
    "mindMap": {
      "centre": "Cumulative frequency diagrams",
      "branches": [
        {
          "label": "Table",
          "items": [
            "Running total",
            "Last value = total"
          ]
        },
        {
          "label": "Graph",
          "items": [
            "Plot at upper boundary",
            "Start at (0, 0)",
            "Smooth S-curve"
          ]
        },
        {
          "label": "Readings",
          "items": [
            "Median: n/2",
            "LQ: n/4",
            "UQ: 3n/4",
            "IQR = UQ - LQ"
          ]
        },
        {
          "label": "More than",
          "items": [
            "Read the curve",
            "Subtract from total"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is cumulative frequency?",
        "back": "A running total of the frequencies."
      },
      {
        "front": "Where do you plot cumulative frequency?",
        "back": "At the upper class boundary."
      },
      {
        "front": "Total 80. Where do you read the median?",
        "back": "At a cumulative frequency of 40."
      },
      {
        "front": "Total 80. Where do you read the upper quartile?",
        "back": "At 60."
      },
      {
        "front": "LQ 16.5 and UQ 32. Find the IQR.",
        "back": "15.5"
      },
      {
        "front": "The curve reads 65 at 35 minutes. Total 80. How many took more than 35 minutes?",
        "back": "15"
      },
      {
        "front": "What is the 90th percentile?",
        "back": "The value with 90% of the data below it."
      }
    ]
  },
  "9.7": {
    "mindMap": {
      "centre": "Histograms",
      "branches": [
        {
          "label": "Axis",
          "items": [
            "Frequency density",
            "Not frequency"
          ]
        },
        {
          "label": "Formulas",
          "items": [
            "FD = f ÷ width",
            "f = FD × width"
          ]
        },
        {
          "label": "Bars",
          "items": [
            "No gaps",
            "Area shows frequency",
            "Widths can differ"
          ]
        },
        {
          "label": "Part of a class",
          "items": [
            "Assume spread evenly",
            "Take a fraction of the bar"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What goes on the vertical axis of a histogram?",
        "back": "Frequency density."
      },
      {
        "front": "Formula for frequency density?",
        "back": "Frequency ÷ class width"
      },
      {
        "front": "A class has width 5 and frequency 25. Find the frequency density.",
        "back": "5"
      },
      {
        "front": "A bar from 40 to 60 has frequency density 2.5. Find the frequency.",
        "back": "50"
      },
      {
        "front": "In a histogram, what shows the frequency?",
        "back": "The area of the bar."
      },
      {
        "front": "Are there gaps between the bars of a histogram?",
        "back": "No."
      },
      {
        "front": "A class 30 < a ≤ 50 has 20 people. Estimate how many are aged 30 to 40.",
        "back": "10"
      }
    ]
  }
};

export function getMathsRevision(topic: string): TopicRevision | null {
  return MATHS_REVISION[topic] ?? null;
}
