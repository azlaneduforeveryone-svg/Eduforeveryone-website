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
  }
};

export function getMathsRevision(topic: string): TopicRevision | null {
  return MATHS_REVISION[topic] ?? null;
}
