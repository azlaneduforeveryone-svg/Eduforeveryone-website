// Cambridge Mathematics (O Level 4024 and IGCSE 0580) notes, original material
// written for EduForEveryone. Keyed by IGCSE 0580 topic number (see mathsSyllabus.ts).
// Independent material: not produced or endorsed by Cambridge University Press & Assessment.
//
// SERVER-ONLY: import this file only from server components (page.tsx files).
//
// Format: the Markdown subset rendered by components/courses/NotesContent.tsx.
// Rules: plain English for 13 to 14 year olds, real-life examples solved step by
// step, no em dashes, en dashes or arrows. Mark content that is not for every
// syllabus with a "> Extended and O Level only" or "> Extended only" rule box.
//
// GENERATED from one Markdown file per topic. Edit the text here directly if needed.

export const MATHS_NOTES: Record<string, string> = {
  "1.1": `## What you need to know

- The different **types of number**: natural numbers, integers, prime numbers, square numbers, cube numbers, rational and irrational numbers, and reciprocals.
- How to write a number in words and in figures, for example six billion is 6 000 000 000.
- How to write a number as a **product of prime factors**, for example 72 = 2³ × 3².
- How to find the **highest common factor (HCF)** and the **lowest common multiple (LCM)** of two numbers.

## Key words

| Word | Meaning |
|---|---|
| Natural number | A counting number: 1, 2, 3, 4, ... |
| Integer | A whole number. It can be positive, negative or zero: ..., -2, -1, 0, 1, 2, ... |
| Factor | A number that divides into another number exactly. 3 is a factor of 12. |
| Multiple | A number in another number's times table. 12 is a multiple of 3. |
| Prime number | A number with exactly two factors: 1 and itself. 2, 3, 5, 7, 11, ... |
| Square number | A number times itself. 25 = 5 × 5 |
| Cube number | A number times itself three times. 8 = 2 × 2 × 2 |
| Rational number | A number that can be written as a fraction of two integers, like 3/4 or 0.5 |
| Irrational number | A number that cannot be written as a fraction, like √2 or π |
| Reciprocal | 1 divided by the number. The reciprocal of 4 is 1/4. |

## Numbers you meet every day

Think about a normal school day.

- You count the students in your class: 32. That is a **natural number**.
- The temperature in Murree at night in winter is -3 °C. That is an **integer** (a negative one).
- You share 3/4 of a pizza. That is a **rational number** (a fraction).
- The distance around a round table uses π, which is **irrational**. Its decimal never ends and never repeats: 3.14159...

> Every natural number is an integer. Every integer is a rational number (5 = 5/1). But not every rational number is an integer (1/2 is not).

## Writing big numbers in words

Put the digits in groups of three from the right. Each group has a name.

| Figures | Words |
|---|---|
| 7 000 | seven thousand |
| 2 500 000 | two million, five hundred thousand |
| 6 000 000 000 | six billion |

### Real-life example: a country's population

**Problem:** A news report says the population of a country is "two hundred and forty million, five hundred thousand". Write this in figures.

1. Two hundred and forty million = 240 000 000
2. Five hundred thousand = 500 000
3. Add them: 240 000 000 + 500 000 = 240 500 000

**Answer:** 240 500 000

## Factors and multiples

- **Factors** of 12 are 1, 2, 3, 4, 6 and 12. They divide into 12 exactly.
- **Multiples** of 4 are 4, 8, 12, 16, 20, ... They are in the 4 times table.

Easy way to remember: **F**actors are **F**ew (they stop). **M**ultiples are **M**any (they go on forever).

## Prime numbers

A prime number has **exactly two** factors: 1 and itself.

The first primes are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.

- 2 is the only **even** prime.
- 1 is **not** prime. It has only one factor.

## Product of prime factors

Every whole number bigger than 1 can be built by multiplying primes. We find them with a **factor tree**: keep splitting until every branch ends in a prime.

### Real-life example: packing 72 cupcakes

**Problem:** A bakery packs 72 cupcakes. Write 72 as a product of its prime factors.

1. Split 72 into 8 × 9.
2. Split 8 into 2 × 4, then 4 into 2 × 2.
3. Split 9 into 3 × 3.
4. The primes at the ends of the branches are 2, 2, 2, 3, 3.
5. Write them with powers: 2 × 2 × 2 = 2³ and 3 × 3 = 3².

![Factor tree for 72](/images/maths/1-1-factor-tree.svg)

**Answer:** 72 = 2³ × 3²

Check: 8 × 9 = 72. Correct.

## Highest common factor (HCF)

The HCF is the **biggest** number that divides into both numbers.

### Real-life example: gift bags

**Problem:** Sara has 24 pencils and 36 erasers. She wants to make gift bags that are all the same, with nothing left over. What is the greatest number of bags she can make?

We need the biggest number that divides into 24 and 36. That is the HCF.

1. Prime factors: 24 = 2³ × 3 and 36 = 2² × 3².
2. Take each prime that is in **both**, with the **smaller** power: 2² and 3.
3. HCF = 2² × 3 = 4 × 3 = 12.

**Answer:** 12 bags. Each bag has 24 ÷ 12 = 2 pencils and 36 ÷ 12 = 3 erasers.

## Lowest common multiple (LCM)

The LCM is the **smallest** number that is in both times tables.

### Real-life example: two buses

**Problem:** Bus A leaves the station every 12 minutes. Bus B leaves every 18 minutes. They both leave at 8:00 a.m. When will they next leave together?

We need the first time that is in both the 12 and 18 times tables. That is the LCM.

1. Prime factors: 12 = 2² × 3 and 18 = 2 × 3².
2. Take every prime that appears, with the **bigger** power: 2² and 3².
3. LCM = 2² × 3² = 4 × 9 = 36.

**Answer:** after 36 minutes, at 8:36 a.m.

Check: 12 × 3 = 36 and 18 × 2 = 36. Correct.

> HCF: primes in both, **smaller** power. LCM: all the primes, **bigger** power.

## Square and cube numbers

| n | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| n² (square) | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 |
| n³ (cube) | 1 | 8 | 27 | 64 | 125 | | | | | 1000 |

A square floor tile that is 5 tiles long and 5 tiles wide uses 25 tiles. That is why 25 is called a "square" number.

## Rational and irrational numbers

- **Rational:** can be written as a fraction. Examples: 7, -3, 0.25 (= 1/4), 0.333... (= 1/3).
- **Irrational:** cannot be written as a fraction. Examples: √2, √3, π.

> The square root of a square number is rational (√49 = 7). The square root of a number that is **not** square is irrational (√50).

## Reciprocals

The reciprocal of a number is **1 divided by the number**. A number times its reciprocal is always 1.

| Number | Reciprocal | Check |
|---|---|---|
| 5 | 1/5 | 5 × 1/5 = 1 |
| 2/3 | 3/2 | flip the fraction |
| 0.25 | 4 | 0.25 = 1/4, so flip it |

## Common mistakes

- Saying 1 is a prime number. It is not.
- Mixing up HCF and LCM. The HCF is **small** (at most the smaller number). The LCM is **big** (at least the bigger number).
- Forgetting to use powers in a product of primes. Write 2³ × 3², not 2 × 2 × 2 × 3 × 3, unless the question allows it.
- Thinking 0.333... is irrational. It is rational because it equals 1/3.

## Exam tips

- After a factor tree, **multiply your primes back together** to check you get the starting number.
- In word problems, "greatest number of equal groups" means HCF. "When will they happen together again" means LCM.`,
  "1.2": `## What you need to know

- What a **set** is, and how to list its **elements** inside curly brackets { }.
- Set notation: n(A), A′, the universal set ℰ, union A ∪ B and intersection A ∩ B.
- How to draw and read **Venn diagrams** with two sets.
- Extended and O Level: Venn diagrams with **three** sets, and the symbols ∈, ∉, ∅, ⊆ and ⊈.

## Key words

| Word | Meaning |
|---|---|
| Set | A group of things, called elements. We list them in curly brackets: {2, 4, 6} |
| Element | One member of a set |
| Universal set ℰ | Everything we are talking about in the question |
| n(A) | The number of elements in set A |
| A ∪ B (union) | Everything in A **or** B **or** both. Think "U for Union, everything joined Up" |
| A ∩ B (intersection) | Only what is in A **and** B at the same time. The overlap |
| A′ (complement) | Everything in ℰ that is **not** in A |

## What is a set?

A set is just a list of things that belong together.

- Days of the weekend = {Saturday, Sunday}
- Even numbers less than 10 = {2, 4, 6, 8}

If A = {2, 4, 6, 8}, then n(A) = 4, because A has 4 elements.

## Venn diagrams

A Venn diagram shows sets as circles inside a rectangle. The rectangle is the universal set ℰ.

- The **overlap** of the circles is A ∩ B.
- Both circles together is A ∪ B.
- Everything **outside** circle A is A′.

### Real-life example: sports at school

**Problem:** A class has 30 students. 18 play cricket, 12 play football and 5 play both. How many play **neither**?

1. Start with the overlap: 5 play both. Put 5 in the middle.
2. Cricket only: 18 - 5 = 13.
3. Football only: 12 - 5 = 7.
4. Students in at least one circle: 13 + 5 + 7 = 25.
5. Neither: 30 - 25 = 5. Put 5 outside the circles.

**Answer:** 5 students play neither.

![Venn diagram: 13 cricket only, 5 both, 7 football only, 5 neither](/images/maths/1-2-venn-two-sets.svg)

> Always fill in the **overlap first**, then the "only" parts, then the outside.

### Reading the notation from this example

Let C = cricket and F = football.

- n(C ∩ F) = 5 (both)
- n(C ∪ F) = 25 (cricket or football or both)
- n(C′) = 30 - 18 = 12 (students who do not play cricket)

### Real-life example: finding a missing number

**Problem:** In a group of 40 people, 22 drink tea, 25 drink coffee and 3 drink neither. How many drink both?

1. People who drink at least one: 40 - 3 = 37.
2. If we add tea and coffee: 22 + 25 = 47. This counts the "both" people twice.
3. Both = 47 - 37 = 10.

**Answer:** 10 people drink both.

Check: tea only 12, both 10, coffee only 15, neither 3. Total 12 + 10 + 15 + 3 = 40. Correct.

## Extended and O Level: more set symbols

> **Extended and O Level only.** Core students do not need this section.

| Symbol | Meaning | Example |
|---|---|---|
| ∈ | "is an element of" | 4 ∈ {2, 4, 6} |
| ∉ | "is not an element of" | 5 ∉ {2, 4, 6} |
| ∅ | the empty set (nothing in it) | {odd numbers that divide by 2} = ∅ |
| ⊆ | "is a subset of" (every element of the first set is in the second) | {2, 4} ⊆ {2, 4, 6} |
| ⊈ | "is not a subset of" | {2, 5} ⊈ {2, 4, 6} |

You may also see a set described by a rule, like {x: 1 ⩽ x ⩽ 5}. Read it as "all x such that x is from 1 to 5".

## Extended and O Level: three-set Venn diagrams

> **Extended and O Level only.**

With three circles there are 8 regions (7 inside the circles and 1 outside). Fill them in this order:

1. The middle, where all three overlap.
2. The parts where exactly two circles overlap.
3. The parts for one circle only.
4. The outside.

### Real-life example: three school clubs

**Problem:** 50 students were asked about three clubs: Art (A), Music (M) and Science (S). 4 are in all three. 6 are in A and M only. 3 are in A and S only. 5 are in M and S only. 20 are in A altogether, 22 in M altogether and 18 in S altogether. How many are in none of the clubs?

1. Middle (all three): 4.
2. Two clubs only: A and M only = 6, A and S only = 3, M and S only = 5.
3. A only: 20 - 4 - 6 - 3 = 7.
4. M only: 22 - 4 - 6 - 5 = 7.
5. S only: 18 - 4 - 3 - 5 = 6.
6. In at least one club: 4 + 6 + 3 + 5 + 7 + 7 + 6 = 38.
7. None: 50 - 38 = 12.

**Answer:** 12 students are in none of the clubs.

![Three-set Venn diagram for Art, Music and Science](/images/maths/1-2-venn-three-sets.svg)

## Common mistakes

- Putting the "both" number into each circle as well as the middle. Subtract it first.
- Mixing up ∪ and ∩. ∩ is the small overlap. ∪ is everything in either set.
- Forgetting the people outside all the circles.

## Exam tips

- Always check that all the numbers in your Venn diagram add up to the total.
- Shade lightly with a pencil when asked to shade a region like A′ ∩ B. Shade A′ first, then keep only the part that is also in B.`,
  "1.3": `## What you need to know

- How to work out **squares**, **square roots**, **cubes** and **cube roots**, and other powers and roots.
- The squares from 1² to 15² and their square roots, **from memory**.
- The cubes of 1, 2, 3, 4, 5 and 10 and their cube roots, **from memory**.

## Key words

| Word | Meaning |
|---|---|
| Square | A number times itself: 7² = 7 × 7 = 49 |
| Square root √ | The number that was squared: √49 = 7 |
| Cube | A number times itself three times: 4³ = 4 × 4 × 4 = 64 |
| Cube root ∛ | The number that was cubed: ∛64 = 4 |
| Power | The small number that says how many times to multiply: in 2⁵ the power is 5 |

## Squares you must know

| n | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| n² | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 | 121 | 144 | 169 | 196 | 225 |

So √144 = 12, √196 = 14, √225 = 15.

## Cubes you must know

| n | 1 | 2 | 3 | 4 | 5 | 10 |
|---|---|---|---|---|---|---|
| n³ | 1 | 8 | 27 | 64 | 125 | 1000 |

So ∛125 = 5 and ∛1000 = 10.

## Why "square" and "cube"?

- A square garden that is 9 m on each side has an area of 9² = 81 m².
- A cube-shaped water tank that is 2 m on each side holds 2³ = 8 m³ of water.

### Real-life example: tiling a floor

**Problem:** Ali's square bedroom floor has an area of 16 m². How long is each side?

1. Area of a square = side × side = side².
2. So side² = 16.
3. Side = √16 = 4.

**Answer:** each side is 4 m.

### Real-life example: a storage box

**Problem:** A cube-shaped storage box holds 125 litres. 1 litre = 1000 cm³, so the box holds 125 000 cm³. How long is each edge?

1. Volume of a cube = edge³.
2. edge³ = 125 000.
3. edge = ∛125 000. Since 50 × 50 × 50 = 125 000, the edge is 50.

**Answer:** each edge is 50 cm.

## Other powers and roots

- 2⁵ = 2 × 2 × 2 × 2 × 2 = 32
- 3⁴ = 3 × 3 × 3 × 3 = 81
- The 4th root of 81 is 3, because 3⁴ = 81. We write ⁴√81 = 3.

### Real-life example: a message chain

**Problem:** You send a message to 3 friends. Each of them sends it to 3 more friends, and so on. How many people get the message in the 4th round?

1. Round 1: 3 people = 3¹.
2. Round 2: 3 × 3 = 3² = 9.
3. Round 3: 3³ = 27.
4. Round 4: 3⁴ = 81.

**Answer:** 81 people.

## Negative numbers

- (-5)² = (-5) × (-5) = 25. Two negatives make a positive.
- (-2)³ = (-2) × (-2) × (-2) = -8. An odd power of a negative number stays negative.
- √25 has two answers, 5 and -5, but the √ sign on its own means the **positive** one: √25 = 5.

## On a calculator

- Squares: the x² key.
- Square roots: the √ key.
- Other powers: the xʸ or ^ key. 2⁵ is 2 ^ 5 = 32.

## Common mistakes

- Thinking 5² = 10. It is 5 × 5 = 25, not 5 × 2.
- Typing -5² on a calculator. The calculator gives -25. Type (-5)² to get 25.
- Forgetting the squares from 11² to 15². Learn them: 121, 144, 169, 196, 225.

## Exam tips

- Learn the squares and cubes by heart. Half of the exam has no calculator.
- When a root does not come out exactly, use the squares you know to estimate. √50 is between √49 = 7 and √64 = 8, and very close to 7.`,
  "1.4": `## What you need to know

- The words **proper fraction**, **improper fraction** and **mixed number**.
- How to write a fraction in its **simplest form**.
- How to change between **fractions, decimals and percentages**.
- Extended and O Level: **recurring decimals**, the dot notation, and changing a recurring decimal into a fraction.

## Key words

| Word | Meaning |
|---|---|
| Numerator | The top number of a fraction |
| Denominator | The bottom number of a fraction |
| Proper fraction | The top is smaller than the bottom: 3/4 |
| Improper fraction | The top is bigger than the bottom: 7/4 |
| Mixed number | A whole number and a fraction: 1¾ |
| Equivalent fractions | Fractions that are the same size: 1/2 = 2/4 = 50/100 |
| Percentage | "Out of 100". 35% means 35/100 |
| Recurring decimal | A decimal where digits repeat for ever: 0.333... |

## Three ways to say the same amount

Half a pizza can be written as 1/2, 0.5 or 50%. They are all **equal**.

| Fraction | Decimal | Percentage |
|---|---|---|
| 1/2 | 0.5 | 50% |
| 1/4 | 0.25 | 25% |
| 3/4 | 0.75 | 75% |
| 1/5 | 0.2 | 20% |
| 1/10 | 0.1 | 10% |
| 1/3 | 0.333... | 33.3% (approximately) |

## Simplest form

Divide the top and bottom by the **same number** until you cannot divide any more. Use the HCF to do it in one step.

### Real-life example: test score

**Problem:** Ayesha got 36 out of 48 in a test. Write her score as a fraction in its simplest form.

1. Score as a fraction: 36/48.
2. The HCF of 36 and 48 is 12.
3. 36 ÷ 12 = 3 and 48 ÷ 12 = 4.

**Answer:** 3/4

## Changing between the three forms

### Fraction to decimal

Divide the top by the bottom. 3/8 = 3 ÷ 8 = 0.375.

### Decimal to percentage

Multiply by 100. 0.375 × 100 = 37.5%.

### Percentage to fraction

Write it over 100 and simplify. 45% = 45/100 = 9/20.

### Real-life example: which offer is better?

**Problem:** Shop A says "1/4 off". Shop B says "22% off". Which gives the bigger discount?

1. Change 1/4 to a percentage: 1 ÷ 4 = 0.25, and 0.25 × 100 = 25%.
2. Compare: 25% is more than 22%.

**Answer:** Shop A gives the bigger discount.

## Improper fractions and mixed numbers

### Real-life example: cake recipe

**Problem:** A recipe needs 7/4 cups of flour. Write this as a mixed number.

1. How many whole 4s go into 7? One, with 3 left over.
2. So 7/4 = 1 whole and 3/4.

**Answer:** 1¾ cups.

Going back: 1¾ = (1 × 4 + 3)/4 = 7/4.

## Extended and O Level: recurring decimals

> **Extended and O Level only.** Core students do not need recurring decimal notation.

Some fractions give decimals that repeat for ever. We put a **dot** over the repeating digit, or dots over the first and last digits of a repeating block.

- 1/3 = 0.333... is written 0.3̇
- 2/11 = 0.181818... is written 0.1̇8̇
- 1/7 = 0.142857142857... is written 0.1̇42857̇

### Changing a recurring decimal into a fraction

**Problem:** Write 0.4̇ (0.444...) as a fraction.

1. Let x = 0.444...
2. One digit repeats, so multiply by 10: 10x = 4.444...
3. Subtract: 10x - x = 4.444... - 0.444..., so 9x = 4.
4. Divide by 9: x = 4/9.

**Answer:** 0.4̇ = 4/9

**Problem:** Write 0.2̇7̇ (0.272727...) as a fraction.

1. Let x = 0.272727...
2. Two digits repeat, so multiply by 100: 100x = 27.272727...
3. Subtract: 99x = 27.
4. x = 27/99 = 3/11 (divide top and bottom by 9).

**Answer:** 3/11

**Problem:** Write 0.16̇ (0.1666...) as a fraction.

1. Let x = 0.1666...
2. Multiply by 10: 10x = 1.666...
3. Multiply by 100: 100x = 16.666...
4. Subtract: 100x - 10x = 16.666... - 1.666..., so 90x = 15.
5. x = 15/90 = 1/6.

**Answer:** 1/6

> Multiply by 10 if one digit repeats, by 100 if two digits repeat, by 1000 if three digits repeat. Then subtract so the repeating part cancels.

## Common mistakes

- Thinking 0.3 = 1/3. It does not: 0.3 = 3/10, but 1/3 = 0.333...
- Changing 0.5 to 5%. It is 0.5 × 100 = 50%.
- Not simplifying fractions at the end. Examiners want the simplest form.

## Exam tips

- Learn the table of common fractions, decimals and percentages. It saves time on the non-calculator paper.
- To compare fractions, change them all to decimals or percentages first.`,
  "1.5": `## What you need to know

- How to put numbers in order of size, including fractions, decimals, percentages and negative numbers.
- The symbols = (equal), ≠ (not equal), > (greater than), < (less than), ⩾ (greater than or equal to) and ⩽ (less than or equal to).

## Key words

| Symbol | Meaning | Example |
|---|---|---|
| = | is equal to | 0.5 = 1/2 |
| ≠ | is not equal to | 0.3 ≠ 1/3 |
| > | is greater than | 7 > 3 |
| < | is less than | -4 < -1 |
| ⩾ | is greater than or equal to | age ⩾ 18 to vote |
| ⩽ | is less than or equal to | bag weight ⩽ 7 kg |
| Ascending | smallest to largest | 2, 5, 9 |
| Descending | largest to smallest | 9, 5, 2 |

> Trick: the symbol is like a mouth. It always opens towards the **bigger** number. 9 > 2 and 2 < 9.

## Ordering decimals

Line up the decimal points. Fill gaps with zeros so every number has the same number of decimal places. Then compare.

### Real-life example: 100 m race times

**Problem:** Four runners finish in 12.5 s, 12.05 s, 12.45 s and 12.4 s. Put the times in order from fastest to slowest.

1. Write with two decimal places: 12.50, 12.05, 12.45, 12.40.
2. The fastest is the smallest time.
3. Order: 12.05, 12.40, 12.45, 12.50.

**Answer:** 12.05 s, 12.4 s, 12.45 s, 12.5 s

## Ordering fractions, decimals and percentages together

Change them all into the **same form**. Decimals are usually easiest.

### Real-life example: battery levels

**Problem:** Three phones show their battery as 3/5, 0.58 and 62%. Which has the most charge?

1. 3/5 = 3 ÷ 5 = 0.6
2. 0.58 stays as 0.58
3. 62% = 0.62
4. Order from biggest: 0.62, 0.6, 0.58.

**Answer:** the phone showing 62% has the most charge.

## Ordering negative numbers

Think of a thermometer. The further below zero, the **smaller** the number.

### Real-life example: winter temperatures

**Problem:** The night temperatures in four cities are 2 °C, -5 °C, -1 °C and 0 °C. Put them in ascending order.

1. Ascending means smallest first.
2. On a number line, -5 is furthest left, then -1, then 0, then 2.

**Answer:** -5 °C, -1 °C, 0 °C, 2 °C

> -5 is **less** than -1, even though 5 is bigger than 1.

## Using the symbols in real life

- A lift sign says "maximum 8 people". If p is the number of people, then p ⩽ 8.
- A film is for ages 12 and over. If a is age, then a ⩾ 12.
- "More than 30 students" means s > 30. 30 itself is **not** allowed.

## Common mistakes

- Thinking 0.45 is bigger than 0.5 because 45 is bigger than 5. Write 0.5 as 0.50 and compare.
- Thinking -8 is bigger than -3.
- Mixing up > and <. Remember the mouth opens to the bigger number.
- Mixing up "more than" (>) and "at least" (⩾).

## Exam tips

- Always write your final list using the numbers **as they were given** in the question, not your converted decimals.
- Read the question: does it want ascending or descending?`,
  "1.6": `## What you need to know

- How to add, subtract, multiply and divide **integers, fractions and decimals**.
- The correct **order of operations**, and how brackets change it.
- How to work with **negative numbers**, for example temperature changes.
- How to calculate with **improper fractions** and **mixed numbers**.

## Key words

| Word | Meaning |
|---|---|
| Operation | One of +, -, ×, ÷ |
| Order of operations | The order to do a calculation in: Brackets, Indices, Division and Multiplication, Addition and Subtraction (BIDMAS) |
| Integer | A whole number, positive, negative or zero |
| Mixed number | A whole number and a fraction, like 2½ |

## Order of operations: BIDMAS

| Letter | Means | Example |
|---|---|---|
| B | Brackets first | (2 + 3) × 4 = 5 × 4 = 20 |
| I | Indices (powers and roots) | 2 + 3² = 2 + 9 = 11 |
| D M | Divide and Multiply, left to right | 12 ÷ 3 × 2 = 4 × 2 = 8 |
| A S | Add and Subtract, left to right | 10 - 4 + 1 = 7 |

### Real-life example: buying snacks

**Problem:** You buy 3 juices at $2 each and 1 sandwich for $5. Someone writes the total as 5 + 3 × 2. What is the total?

1. Multiply first: 3 × 2 = 6.
2. Then add: 5 + 6 = 11.

**Answer:** $11. (If you add first you get 8 × 2 = 16, which is wrong.)

## Negative numbers

| Rule | Example |
|---|---|
| Adding a negative is the same as subtracting | 5 + (-3) = 2 |
| Subtracting a negative is the same as adding | 5 - (-3) = 8 |
| Same signs multiplied or divided give a positive | (-4) × (-3) = 12 |
| Different signs multiplied or divided give a negative | (-12) ÷ 3 = -4 |

### Real-life example: temperature change

**Problem:** In the morning it is -4 °C. By afternoon it is 7 °C. How much did the temperature rise?

1. Rise = afternoon - morning = 7 - (-4).
2. Subtracting a negative means adding: 7 + 4 = 11.

**Answer:** it rose by 11 °C.

### Real-life example: a bank balance

**Problem:** Omar's bank balance is -$20 (he owes $20). He pays in $45. What is his new balance?

1. -20 + 45 = 25.

**Answer:** $25

## Decimals

- **Add and subtract:** line up the decimal points.
- **Multiply:** ignore the points, multiply, then put back the same total number of decimal places.
- **Divide:** move the point in both numbers until you divide by a whole number.

### Real-life example: petrol cost

**Problem:** Petrol costs $1.35 per litre. How much do 4.2 litres cost? (No calculator.)

1. Ignore the points: 135 × 42 = 5670.
2. Count decimal places: 1.35 has 2, 4.2 has 1, so 3 in total.
3. Put back 3 decimal places: 5.670.

**Answer:** $5.67

### Real-life example: sharing a bill

**Problem:** A restaurant bill of $48.60 is shared equally by 4 friends. How much does each pay?

1. 48.60 ÷ 4 = 12.15.

**Answer:** $12.15 each.

## Fractions

### Adding and subtracting

Make the denominators the same first.

**Problem:** A pizza is cut into pieces. Hamza eats 1/3 of it and Zara eats 1/4. What fraction did they eat altogether?

1. The lowest common multiple of 3 and 4 is 12.
2. 1/3 = 4/12 and 1/4 = 3/12.
3. 4/12 + 3/12 = 7/12.

**Answer:** 7/12 of the pizza.

### Multiplying

Multiply the tops and multiply the bottoms. Simplify.

**Problem:** A bottle holds 3/4 litre of juice. You drink 2/3 of it. How much did you drink?

1. "of" means multiply: 2/3 × 3/4.
2. Tops: 2 × 3 = 6. Bottoms: 3 × 4 = 12.
3. 6/12 = 1/2.

**Answer:** 1/2 litre.

### Dividing

Keep the first fraction, change ÷ to ×, and flip the second fraction (use its reciprocal).

**Problem:** You have 3/4 kg of rice. Each meal uses 1/8 kg. How many meals can you make?

1. 3/4 ÷ 1/8 = 3/4 × 8/1.
2. = 24/4 = 6.

**Answer:** 6 meals.

### Mixed numbers

Change mixed numbers into improper fractions first.

**Problem:** A wooden plank is 2½ m long. A carpenter needs 1¾ m. How much is left?

1. 2½ = 5/2 = 10/4 and 1¾ = 7/4.
2. 10/4 - 7/4 = 3/4.

**Answer:** 3/4 m (75 cm) is left.

**Problem:** A small generator uses 1½ litres of fuel every hour. How much fuel does it use in 2⅔ hours?

1. 1½ = 3/2 and 2⅔ = 8/3.
2. 1½ × 2⅔ = 3/2 × 8/3 = 24/6 = 4.

**Answer:** 4 litres.

## Common mistakes

- Working from left to right and ignoring BIDMAS.
- Adding fractions by adding the bottoms: 1/3 + 1/4 is **not** 2/7.
- Multiplying mixed numbers without changing them to improper fractions first.
- Forgetting that 7 - (-4) is 7 + 4.

## Exam tips

- On the non-calculator paper, show every step so you can get method marks.
- Check your answer makes sense. If you share $48.60 between 4 people, each must get less than $48.60.`,
  "1.7": `## What you need to know

- What an **index** (power) is, including **zero** and **negative** indices.
- The three **rules of indices** for multiplying, dividing and raising a power to a power.
- Extended and O Level: **fractional** indices, like 8^(2/3).

## Key words

| Word | Meaning |
|---|---|
| Index (power) | The small raised number. In 5³ the index is 3 |
| Base | The number being multiplied. In 5³ the base is 5 |
| Indices | More than one index |

## What an index means

5³ means 5 × 5 × 5 = 125. The index tells you **how many times** the base is multiplied by itself.

### Real-life example: bacteria doubling

**Problem:** One bacterium splits into 2 every hour. How many are there after 6 hours?

1. After 1 hour: 2. After 2 hours: 2 × 2 = 2². After 6 hours: 2⁶.
2. 2⁶ = 2 × 2 × 2 × 2 × 2 × 2 = 64.

**Answer:** 64 bacteria.

## The three rules

| Rule | In words | Example |
|---|---|---|
| aᵐ × aⁿ = aᵐ⁺ⁿ | Multiplying: **add** the powers | 2³ × 2⁴ = 2⁷ |
| aᵐ ÷ aⁿ = aᵐ⁻ⁿ | Dividing: **subtract** the powers | 5⁶ ÷ 5² = 5⁴ |
| (aᵐ)ⁿ = aᵐˣⁿ | Power of a power: **multiply** the powers | (2³)² = 2⁶ |

> These rules only work when the **base is the same**. 2³ × 3⁴ cannot be simplified this way.

### Real-life example: storage on a phone

**Problem:** A phone stores 2¹⁰ photos per folder and has 2⁵ folders. How many photos can it store, as a power of 2?

1. Total = 2¹⁰ × 2⁵.
2. Multiplying: add the powers: 10 + 5 = 15.

**Answer:** 2¹⁵ photos (which is 32 768).

## Zero index

Any number (except 0) to the power 0 is **1**.

Why? 5³ ÷ 5³ = 1, and by the rule 5³ ÷ 5³ = 5⁰. So 5⁰ = 1.

## Negative indices

A negative index means **"1 over"** (the reciprocal).

| Expression | Meaning | Value |
|---|---|---|
| 7⁻² | 1/7² | 1/49 |
| 2⁻³ | 1/2³ | 1/8 |
| 10⁻¹ | 1/10 | 0.1 |

### Worked example: using the rules together

**Problem:** Find the value of 2⁻³ × 2⁴.

1. Same base, multiplying: add the powers: -3 + 4 = 1.
2. 2¹ = 2.

**Answer:** 2

**Problem:** Find the value of 2³ ÷ 2⁴.

1. Subtract the powers: 3 - 4 = -1.
2. 2⁻¹ = 1/2.

**Answer:** 1/2

## Extended and O Level: fractional indices

> **Extended and O Level only.** Core students do not need fractional indices.

| Index | Meaning | Example |
|---|---|---|
| a^(1/2) | square root | 25^(1/2) = √25 = 5 |
| a^(1/3) | cube root | 27^(1/3) = ∛27 = 3 |
| a^(m/n) | the n-th root, then the power m | 8^(2/3) = (∛8)² = 2² = 4 |

> The **bottom** of the fraction is the **root**. The **top** is the **power**. Do the root first: the numbers stay small.

**Problem:** Find the value of 16^(3/4).

1. Bottom is 4: take the 4th root of 16. 2⁴ = 16, so the 4th root is 2.
2. Top is 3: cube it: 2³ = 8.

**Answer:** 8

**Problem:** Find the value of 27^(-2/3).

1. The minus sign means "1 over": 1 / 27^(2/3).
2. Cube root of 27 is 3. Square it: 3² = 9.
3. So 27^(-2/3) = 1/9.

**Answer:** 1/9

## Common mistakes

- Thinking 5⁰ = 0. It is 1.
- Thinking a negative power gives a negative answer. 2⁻³ = 1/8, which is positive.
- Multiplying the powers when you multiply numbers: 2³ × 2⁴ is 2⁷, not 2¹².
- Multiplying the bases: 2³ × 2⁴ is not 4⁷.

## Exam tips

- On the non-calculator paper, write each step: rule used, new power, final value.
- With fractional powers, always do the root before the power.`,
  "1.8": `## What you need to know

- How to write numbers in **standard form**: A × 10ⁿ, where 1 ⩽ A < 10 and n is a whole number (positive or negative).
- How to change numbers into and out of standard form.
- How to calculate with numbers in standard form, with and without a calculator.

## Key words

| Word | Meaning |
|---|---|
| Standard form | A short way to write very big or very small numbers: A × 10ⁿ |
| A | A number from 1 up to (but not including) 10 |
| n | The power of 10. Positive for big numbers, negative for small numbers |

## Why scientists use standard form

- The distance from the Earth to the Sun is about 150 000 000 km. In standard form: 1.5 × 10⁸ km.
- A grain of sand is about 0.0006 m across. In standard form: 6 × 10⁻⁴ m.

Short, easy to read, and no counting zeros.

## Big numbers into standard form

1. Put the decimal point after the **first non-zero digit**. This gives A.
2. Count how many places the point moved. That is n.

### Real-life example: world population

**Problem:** The world population is about 8 100 000 000. Write it in standard form.

1. First digit is 8, so A = 8.1.
2. The point moves from the end of 8 100 000 000 to after the 8: that is 9 places.

**Answer:** 8.1 × 10⁹

## Small numbers into standard form

The power is **negative**.

### Real-life example: thickness of paper

**Problem:** A sheet of paper is 0.00011 m thick. Write this in standard form.

1. First non-zero digit is 1, so A = 1.1.
2. The point moves from 0.00011 to 1.1: that is 4 places to the right.
3. Small number, so the power is negative.

**Answer:** 1.1 × 10⁻⁴ m

## Out of standard form

- 3.2 × 10⁵: move the point 5 places to the **right**: 320 000.
- 7.05 × 10⁻³: move the point 3 places to the **left**: 0.00705.

## Calculating without a calculator

### Multiplying

Multiply the A parts. Add the powers.

**Problem:** (3 × 10⁴) × (2 × 10⁵)

1. 3 × 2 = 6.
2. 10⁴ × 10⁵ = 10⁹.

**Answer:** 6 × 10⁹

**Problem:** (4 × 10³) × (5 × 10²)

1. 4 × 5 = 20, and 10³ × 10² = 10⁵. So the result is 20 × 10⁵.
2. 20 is not between 1 and 10. Write 20 = 2 × 10¹.
3. 2 × 10¹ × 10⁵ = 2 × 10⁶.

**Answer:** 2 × 10⁶

### Dividing

Divide the A parts. Subtract the powers.

**Problem:** (8 × 10⁹) ÷ (2 × 10³)

1. 8 ÷ 2 = 4.
2. 10⁹ ÷ 10³ = 10⁶.

**Answer:** 4 × 10⁶

### Adding and subtracting

Change both numbers out of standard form, add, then change back.

**Problem:** 3.2 × 10⁴ + 5 × 10³

1. 32 000 + 5 000 = 37 000.
2. 37 000 = 3.7 × 10⁴.

**Answer:** 3.7 × 10⁴

## With a calculator

Use the ×10ˣ key (or EXP). To type 3.2 × 10⁴, press 3.2, then ×10ˣ, then 4.

### Real-life example: how long light takes to reach Earth

**Problem:** Light travels at 3 × 10⁸ m/s. The Sun is 1.5 × 10¹¹ m from the Earth. How many seconds does sunlight take to reach us?

1. Time = distance ÷ speed.
2. (1.5 × 10¹¹) ÷ (3 × 10⁸).
3. 1.5 ÷ 3 = 0.5 and 10¹¹ ÷ 10⁸ = 10³. So 0.5 × 10³ = 500.

**Answer:** 500 seconds (a little over 8 minutes).

## Common mistakes

- Writing 25 × 10⁴. The first part must be from 1 to less than 10: 2.5 × 10⁵.
- Using a positive power for a small number. 0.003 is 3 × 10⁻³, not 3 × 10³.
- Adding the A parts when multiplying. Multiply them and add the powers.

## Exam tips

- Check your answer: a number like 0.0004 must have a negative power. A big number must have a positive power.
- Core students: calculations with standard form only come on the calculator paper (Paper 3). Extended and O Level students can get them on both papers.`,
  "1.9": `## What you need to know

- How to **round** to the nearest 10, 100, 1000, to a number of **decimal places** (d.p.) and to a number of **significant figures** (s.f.).
- How to **estimate** an answer by rounding each number to 1 significant figure.
- How to give an answer to a **sensible** degree of accuracy for the situation.

## Key words

| Word | Meaning |
|---|---|
| Round | Write a number more simply, keeping it close to the real value |
| Decimal places (d.p.) | Digits after the decimal point |
| Significant figures (s.f.) | Digits counted from the first non-zero digit |
| Estimate | A quick, rough answer using rounded numbers |

## The rounding rule

Look at the **next digit** after the place you are rounding to.

- 5 or more: round **up**.
- 4 or less: round **down** (keep the digit the same).

### Real-life example: a crowd

**Problem:** 5764 people watched a match. Write this correct to the nearest thousand.

1. The thousands digit is 5. The next digit is 7.
2. 7 is 5 or more, so round up: 6000.

**Answer:** 6000 people.

## Decimal places

**Problem:** Round 3.14159 to 2 decimal places.

1. Keep 2 digits after the point: 3.14|159.
2. The next digit is 1, so do not round up.

**Answer:** 3.14

### Real-life example: money

**Problem:** $25 is shared between 3 friends. A calculator shows 8.333333. How much does each get?

1. Money needs 2 decimal places (cents).
2. 8.33|3333. The next digit is 3, so round down.

**Answer:** $8.33 each.

## Significant figures

Start counting at the **first non-zero digit**. Zeros at the front do not count.

| Number | 1 s.f. | 2 s.f. | 3 s.f. |
|---|---|---|---|
| 48 372 | 50 000 | 48 000 | 48 400 |
| 0.006 271 | 0.006 | 0.0063 | 0.00627 |
| 3.9781 | 4 | 4.0 | 3.98 |

> When rounding a big number, keep the zeros so the number stays the right size. 48 372 to 2 s.f. is 48 000, not 48.

## Estimating

Round every number to **1 significant figure**, then work it out in your head.

### Real-life example: school trip cost

**Problem:** A school trip costs $38.75 per student. 412 students go. Estimate the total cost.

1. Round: $38.75 is about $40. 412 is about 400.
2. Estimate: 40 × 400 = 16 000.

**Answer:** about $16 000. (The exact answer is $15 965, so the estimate is close.)

### Real-life example: checking a calculation

**Problem:** Estimate (6.12 × 49.8) ÷ 0.198.

1. Round each number to 1 s.f.: 6, 50 and 0.2.
2. 6 × 50 = 300.
3. 300 ÷ 0.2 = 1500 (dividing by 0.2 is the same as multiplying by 5).

**Answer:** about 1500.

## A sensible degree of accuracy

Match the accuracy to the real situation.

- Number of buses needed: round **up** to a whole number. You cannot hire 3.2 buses, you need 4.
- Number of boxes you can **fill**: round **down**. 7.8 full boxes means only 7 are full.
- Money: 2 decimal places.
- A length measured with a ruler: usually to the nearest millimetre.

### Real-life example: buses

**Problem:** 130 students go on a trip. Each bus holds 40. How many buses are needed?

1. 130 ÷ 40 = 3.25.
2. 3 buses carry only 120 students. You need one more.

**Answer:** 4 buses.

## Common mistakes

- Counting zeros at the front as significant figures. In 0.0063, the first significant figure is 6.
- Losing place value: 48 372 to 1 s.f. is 50 000, not 5.
- Rounding numbers in the middle of a calculation. Only round the final answer.
- Giving answers like 3.25 buses.

## Exam tips

- If the question says "estimate", you must show the rounded numbers you used. A calculator answer gets no marks.
- If a question does not say how to round, 3 significant figures is a good choice for non-exact answers (and 1 d.p. for angles).`,
  "1.10": `## What you need to know

- How to find the **upper bound** and **lower bound** of a measurement that has been rounded.
- Extended and O Level: how to find the bounds of the **result of a calculation** that uses rounded measurements (for example perimeter, area or speed).

## Key words

| Word | Meaning |
|---|---|
| Lower bound | The smallest value the real number could have been |
| Upper bound | The value the real number must be less than |
| Limits of accuracy | The lower and upper bounds together |

## Why bounds matter

A shop label says a bag of rice weighs 5 kg "to the nearest kg". The real weight could be a little more or a little less than 5 kg. Bounds tell us **how much** more or less.

## How to find the bounds

1. Find the rounding unit (for example "nearest 10", "nearest 0.1").
2. Halve it.
3. Lower bound = value - half. Upper bound = value + half.

### Real-life example: a measured length

**Problem:** A rope is 12 m long, correct to the nearest metre. Write down the lower and upper bounds.

1. Rounding unit: 1 m. Half of it: 0.5 m.
2. Lower bound: 12 - 0.5 = 11.5 m.
3. Upper bound: 12 + 0.5 = 12.5 m.

**Answer:** 11.5 m ⩽ length < 12.5 m

> The upper bound uses **<**, not ⩽. A rope of exactly 12.5 m would round to 13 m, not 12 m.

### Real-life example: a runner's time

**Problem:** Hira's 100 m time is 14.3 s, correct to 1 decimal place. Find the bounds.

1. Rounding unit: 0.1 s. Half: 0.05 s.
2. Lower bound: 14.3 - 0.05 = 14.25 s.
3. Upper bound: 14.3 + 0.05 = 14.35 s.

**Answer:** 14.25 s ⩽ time < 14.35 s

### Real-life example: a crowd

**Problem:** 3400 fans came to a concert, correct to the nearest 100. Find the bounds.

1. Half of 100 is 50.
2. Lower bound: 3350. Upper bound: 3450.

**Answer:** 3350 ⩽ fans < 3450

## Extended and O Level: bounds of a calculation

> **Extended and O Level only.** Core students do not need to find bounds of calculated results.

To make an answer as **big** or as **small** as possible, choose the bounds carefully.

| Calculation | For the largest answer | For the smallest answer |
|---|---|---|
| a + b | upper + upper | lower + lower |
| a × b | upper × upper | lower × lower |
| a - b | upper - lower | lower - upper |
| a ÷ b | upper ÷ lower | lower ÷ upper |

> For dividing, the biggest answer comes from a **big top** and a **small bottom**.

### Real-life example: area of a room

**Problem:** A rectangular room is 5 m by 4 m, each measured to the nearest metre. Find the upper bound of the area.

1. Bounds of 5 m: 4.5 m and 5.5 m. Bounds of 4 m: 3.5 m and 4.5 m.
2. Largest area: upper × upper = 5.5 × 4.5.
3. 5.5 × 4.5 = 24.75.

**Answer:** upper bound of the area = 24.75 m²

### Real-life example: perimeter of a garden

**Problem:** A garden is 8 m by 6 m, each to the nearest metre. Find the lower bound of the perimeter.

1. Lower bounds: 7.5 m and 5.5 m.
2. Perimeter = 2 × (7.5 + 5.5) = 2 × 13 = 26.

**Answer:** lower bound of the perimeter = 26 m

### Real-life example: speed of a car

**Problem:** A car travels 120 km, to the nearest 10 km, in 1.5 hours, to the nearest 0.1 hour. Find the lower bound of its average speed.

1. Speed = distance ÷ time.
2. Distance bounds: 115 km and 125 km. Time bounds: 1.45 h and 1.55 h.
3. Smallest speed: lower distance ÷ upper time = 115 ÷ 1.55.
4. 115 ÷ 1.55 = 74.193... km/h.

**Answer:** 74.2 km/h (to 3 significant figures)

## Common mistakes

- Using the full rounding unit instead of half of it.
- Writing the upper bound with ⩽. Use < for the upper bound.
- For subtraction and division, using upper with upper. Check the table above.
- Rounding the bounds before the final step.

## Exam tips

- Write down all the bounds first, then decide which ones to use.
- When the question asks for the bound of a calculation, keep full calculator accuracy and only round at the end.`,
  "1.11": `## What you need to know

- How to write a ratio in its **simplest form**.
- How to **share** an amount in a given ratio.
- How to use ratio and **proportion** in real life: recipes, map scales and finding the **best value**.

## Key words

| Word | Meaning |
|---|---|
| Ratio | Compares the sizes of two or more amounts, written with a colon: 2 : 3 |
| Simplest form | A ratio where the numbers cannot be divided by the same number any more |
| Proportion | When two amounts change together at the same rate |
| Unitary method | Find the value of **one** first, then multiply |
| Scale | A ratio comparing a map or drawing to real life, like 1 : 50 000 |

## What a ratio means

In a class there are 12 boys and 18 girls. The ratio of boys to girls is 12 : 18.

> Order matters. Boys to girls is 12 : 18. Girls to boys is 18 : 12.

## Simplest form

Divide every part by the same number (the HCF).

- 12 : 18 = 2 : 3 (divide by 6)
- 20 : 30 : 40 = 2 : 3 : 4 (divide by 10)

### Ratios with different units

Change to the **same unit** first.

**Problem:** Write 50 cm : 2 m in its simplest form.

1. 2 m = 200 cm.
2. 50 : 200 = 1 : 4 (divide by 50).

**Answer:** 1 : 4

## Sharing in a ratio

1. Add the parts to find the total number of shares.
2. Divide the amount by the total to find **one share**.
3. Multiply each part by one share.

### Real-life example: sharing prize money

**Problem:** Bilal and Danish win $350. They share it in the ratio 3 : 4. How much does each get?

1. Total shares: 3 + 4 = 7.
2. One share: 350 ÷ 7 = 50.
3. Bilal: 3 × 50 = $150. Danish: 4 × 50 = $200.

**Answer:** Bilal $150, Danish $200.

Check: 150 + 200 = 350. Correct.

### Real-life example: mixing paint

**Problem:** Green paint is made by mixing blue and yellow in the ratio 2 : 5. A painter uses 6 litres of blue. How much yellow does she need?

1. 2 parts = 6 litres, so 1 part = 3 litres.
2. Yellow = 5 parts = 5 × 3 = 15 litres.

**Answer:** 15 litres of yellow.

## Recipes (proportion)

### Real-life example: making biryani for more people

**Problem:** A recipe for 4 people needs 600 g of rice. How much rice for 10 people?

1. For 1 person: 600 ÷ 4 = 150 g.
2. For 10 people: 150 × 10 = 1500 g.

**Answer:** 1500 g (1.5 kg)

## Map scales

A scale of 1 : 50 000 means 1 cm on the map is 50 000 cm in real life.

### Real-life example: distance on a map

**Problem:** On a map with scale 1 : 50 000, two towns are 7 cm apart. How far apart are they in real life, in km?

1. Real distance = 7 × 50 000 = 350 000 cm.
2. Change to metres: 350 000 ÷ 100 = 3500 m.
3. Change to km: 3500 ÷ 1000 = 3.5 km.

**Answer:** 3.5 km

## Best value

Find the cost of **one unit** (one gram, one millilitre) for each, then compare.

### Real-life example: which shampoo is better value?

**Problem:** A 250 ml bottle costs $3.00. A 400 ml bottle costs $4.40. Which is better value?

1. Small: 300 cents ÷ 250 ml = 1.2 cents per ml.
2. Large: 440 cents ÷ 400 ml = 1.1 cents per ml.
3. The large bottle costs less per ml.

**Answer:** the 400 ml bottle is better value.

## Common mistakes

- Writing the ratio in the wrong order.
- Dividing the amount by one part instead of by the total number of parts.
- Forgetting to change units before simplifying.
- Forgetting the map scale gives centimetres. Change to metres or km.

## Exam tips

- Always check that your shares add back up to the total.
- For best value, show the price per unit for **both** items, then state which one is better.`,
  "1.12": `## What you need to know

- How to use common **rates**: pay per hour, exchange rates, fuel use, flow rates.
- Other rates such as **density**, **pressure** and **population density**. The formula is given in the question.
- How to solve **average speed** problems. You must **know** the formula for speed, distance and time.

## Key words

| Word | Meaning |
|---|---|
| Rate | How much of one thing per one unit of another, like $12 per hour |
| Average speed | Total distance ÷ total time |
| Density | Mass ÷ volume (units like g/cm³) |
| Pressure | Force ÷ area |
| Population density | Number of people ÷ area |

## Speed, distance and time

> **Speed = distance ÷ time**, **distance = speed × time**, **time = distance ÷ speed**

A triangle helps: D on top, S and T at the bottom. Cover the one you want.

| Want | Cover it, and you see |
|---|---|
| Distance | S × T |
| Speed | D ÷ T |
| Time | D ÷ S |

### Real-life example: a cyclist

**Problem:** A cyclist rides 45 km in 3 hours 45 minutes. Find her average speed in km/h.

1. Change the time into hours: 45 minutes = 45/60 = 0.75 hours. So the time is 3.75 hours.
2. Speed = 45 ÷ 3.75 = 12.

**Answer:** 12 km/h

> 3 hours 45 minutes is **not** 3.45 hours. Always divide the minutes by 60.

### Real-life example: a car journey

**Problem:** A car travels at 80 km/h for 2½ hours. How far does it go?

1. Distance = speed × time = 80 × 2.5 = 200.

**Answer:** 200 km

### Real-life example: how long will it take?

**Problem:** A train travels 270 km at an average speed of 90 km/h. How long does the journey take?

1. Time = distance ÷ speed = 270 ÷ 90 = 3.

**Answer:** 3 hours

## Pay rates

### Real-life example: part-time job

**Problem:** Zain earns $9.50 per hour. Last week he worked 18 hours. How much did he earn?

1. 9.50 × 18 = 171.

**Answer:** $171

## Exchange rates

### Real-life example: travelling abroad

**Problem:** The exchange rate is $1 = 278 rupees. How many rupees do you get for $150?

1. 150 × 278 = 41 700.

**Answer:** 41 700 rupees

## Fuel use

### Real-life example: a road trip

**Problem:** A car uses 7 litres of petrol for every 100 km. How much petrol is needed for a 350 km trip?

1. 350 km is 3.5 lots of 100 km.
2. 3.5 × 7 = 24.5.

**Answer:** 24.5 litres

## Density, pressure and population density

The formula will be given in the question. Just put the numbers in and watch the units.

### Real-life example: density of a metal block

**Problem:** A metal block has a mass of 540 g and a volume of 200 cm³. Density = mass ÷ volume. Find its density.

1. 540 ÷ 200 = 2.7.

**Answer:** 2.7 g/cm³

### Real-life example: population density

**Problem:** A town has 84 000 people living in an area of 12 km². Population density = population ÷ area. Find it.

1. 84 000 ÷ 12 = 7000.

**Answer:** 7000 people per km²

## Common mistakes

- Using 3.45 for 3 hours 45 minutes.
- Mixing units, like a speed in km/h with a time in minutes.
- Dividing the wrong way round. Look at the units: km/h means km ÷ h.

## Exam tips

- Write the formula first, then put the numbers in.
- Check your units in the answer: km/h, m/s, g/cm³, people per km².`,
  "1.13": `## What you need to know

- How to find a **percentage of** an amount.
- How to write one amount as a **percentage of** another.
- How to work out a **percentage increase or decrease**, including profit, loss and discounts.
- How to work out **simple interest** and **compound interest**. No formulas are given in the exam.
- Extended and O Level: **reverse percentages** (finding the original amount) and **repeated** percentage change.

## Key words

| Word | Meaning |
|---|---|
| Percent | Out of 100 |
| Discount | Money taken off a price |
| Profit | Selling price minus cost price (when you sell for more) |
| Loss | Cost price minus selling price (when you sell for less) |
| Interest | Extra money paid on savings or a loan |
| Simple interest | The same interest every year, worked out on the starting amount |
| Compound interest | Interest is added each year, and next year's interest is worked out on the new total |
| Multiplier | The number you multiply by to change an amount by a percentage |

## Percentage of an amount

### Without a calculator

Find 10% (divide by 10) and 1% (divide by 100), then build up.

**Problem:** A phone costs $240. Find 15% of $240.

1. 10% = 24. 5% = half of 10% = 12.
2. 15% = 24 + 12 = 36.

**Answer:** $36

### With a calculator

Change the percentage to a decimal and multiply. 15% of 240 = 0.15 × 240 = 36.

## One amount as a percentage of another

Make a fraction, then multiply by 100.

### Real-life example: test result

**Problem:** Maryam scored 42 out of 60. What percentage is this?

1. 42/60 × 100 = 70.

**Answer:** 70%

## Percentage increase and decrease using a multiplier

| Change | Multiplier |
|---|---|
| Increase by 20% | 1.20 |
| Decrease by 20% | 0.80 |
| Increase by 5% | 1.05 |
| Decrease by 15% | 0.85 |

### Real-life example: a sale

**Problem:** A jacket costs $80. In a sale it is 25% off. What is the sale price?

1. 25% off means you pay 75%. Multiplier = 0.75.
2. 80 × 0.75 = 60.

**Answer:** $60

### Real-life example: a pay rise

**Problem:** A worker earns $1200 a month. She gets a 4% pay rise. What is her new pay?

1. Multiplier = 1.04.
2. 1200 × 1.04 = 1248.

**Answer:** $1248 a month

## Percentage change

> **Percentage change = (change ÷ original) × 100**

### Real-life example: profit

**Problem:** A shopkeeper buys a bag for $40 and sells it for $52. Find the percentage profit.

1. Profit = 52 - 40 = 12.
2. Percentage profit = 12/40 × 100 = 30.

**Answer:** 30% profit

> Always divide by the **original** amount (the cost price), not the new one.

## Simple interest

Interest is the same every year.

### Real-life example: savings

**Problem:** Hassan saves $500 at 3% simple interest per year. How much interest does he get in 4 years?

1. Interest for 1 year: 3% of 500 = 15.
2. For 4 years: 15 × 4 = 60.

**Answer:** $60 interest (he has $560 in total)

## Compound interest

Interest is added each year, so the amount grows faster.

> **Amount = original × (multiplier)ⁿ**, where n is the number of years.

### Real-life example: the same savings with compound interest

**Problem:** Hassan saves $500 at 3% compound interest per year. How much does he have after 4 years?

1. Multiplier = 1.03.
2. 500 × 1.03⁴ = 500 × 1.12550881 = 562.75 (to 2 d.p.).

**Answer:** $562.75 (more than the $560 with simple interest)

## Extended and O Level: reverse percentages

> **Extended and O Level only.** Core students do not need reverse percentages.

Here you know the amount **after** the change and need the amount **before**. **Divide** by the multiplier.

### Real-life example: price before a sale

**Problem:** In a 20% off sale, a pair of shoes costs $48. What was the price before the sale?

1. After a 20% decrease, the price is 80% of the original. Multiplier = 0.8.
2. Original × 0.8 = 48, so original = 48 ÷ 0.8 = 60.

**Answer:** $60

### Real-life example: cost price

**Problem:** A shop sells a lamp for $69. This gives a profit of 15%. What did the shop pay for the lamp?

1. Selling price = cost × 1.15.
2. Cost = 69 ÷ 1.15 = 60.

**Answer:** $60

> A common trap: 20% of $48 is $9.60, but $48 + $9.60 = $57.60 is **wrong**. The 20% was taken off the **original** price, not the sale price. Always divide by the multiplier.

## Extended and O Level: repeated percentage change

### Real-life example: price changes two times

**Problem:** A TV costs $500. The price goes up by 10%, then down by 10%. What is the final price?

1. Up 10%: multiplier 1.1. Down 10%: multiplier 0.9.
2. 500 × 1.1 × 0.9 = 500 × 0.99 = 495.

**Answer:** $495. It does **not** go back to $500.

## Common mistakes

- Dividing by the new amount when finding a percentage change.
- Using simple interest when the question says compound.
- Finding a reverse percentage by taking the percentage of the new amount.

## Exam tips

- Write the multiplier first. It makes every type of percentage question quicker.
- For money, give answers to 2 decimal places.`,
  "1.14": `## What you need to know

- How to use a calculator **efficiently**: brackets, powers, roots, fractions and the memory.
- How to **enter** values correctly, for example times and negative numbers.
- How to **read** the display correctly, for example money and time.
- Do not round in the middle of a calculation. Only round the **final** answer.
- O Level students: this topic is only tested on Paper 2 (the calculator paper).

## Key words

| Word | Meaning |
|---|---|
| Display | The screen of the calculator |
| Brackets key ( ) | Makes the calculator work out part of the sum first |
| ANS key | Uses the answer from the last calculation |
| ×10ˣ (or EXP) key | Enters numbers in standard form |

## Use brackets for fractions with sums on top or bottom

### Real-life example: average of test scores

**Problem:** Work out (68 + 74 + 81) ÷ 3.

1. If you type 68 + 74 + 81 ÷ 3, the calculator divides only 81 by 3 and gives 169. Wrong.
2. Type (68 + 74 + 81) ÷ 3 = 74.333...

**Answer:** 74.3 (to 3 s.f.)

**Problem:** Work out (12.5 + 7.3) ÷ (4.1 - 1.9).

1. Type: ( 12.5 + 7.3 ) ÷ ( 4.1 - 1.9 ) =
2. The display shows 9.

**Answer:** 9

## Do not round too early

### Real-life example: price per item

**Problem:** A pack of 7 pens costs $8.50. How much do 3 pens cost?

1. One pen: 8.50 ÷ 7 = 1.2142857... Keep it on the screen (or use ANS).
2. Three pens: 1.2142857... × 3 = 3.6428...
3. Round only now: $3.64.

If you round to $1.21 first, you get 1.21 × 3 = $3.63, which is wrong by 1 cent.

**Answer:** $3.64

## Reading money on the display

The display does not show the last zero.

| Display | Means |
|---|---|
| 4.8 | $4.80 |
| 12.5 | $12.50 |
| 0.07 | 7 cents ($0.07) |

## Reading time on the display

Time does not work in tens. There are **60** minutes in an hour.

| Display (hours) | Means |
|---|---|
| 3.25 | 3 hours and 0.25 × 60 = 15 minutes |
| 1.5 | 1 hour 30 minutes |
| 2.1 | 2 hours and 0.1 × 60 = 6 minutes |

### Real-life example: journey time

**Problem:** A journey of 195 km at 60 km/h takes 195 ÷ 60 hours. Write the time in hours and minutes.

1. 195 ÷ 60 = 3.25.
2. 0.25 hours × 60 = 15 minutes.

**Answer:** 3 hours 15 minutes

Many calculators have a ° ' " key that changes 3.25 into 3°15'0" (3 hours 15 minutes).

## Negative numbers

Use the (-) key for a negative number, and use brackets for powers: type (-3)² to get 9.

## Common mistakes

- Missing brackets in fractions like (a + b) ÷ c.
- Writing 3.25 hours as 3 hours 25 minutes.
- Writing $4.8 instead of $4.80.
- Rounding in the middle and getting the final answer wrong.

## Exam tips

- Write down the full calculator display before you round. Then round. You can get a mark for the unrounded value.
- Do a quick estimate in your head to check the calculator answer is about the right size.`,
  "1.15": `## What you need to know

- How to calculate with units of time: seconds, minutes, hours, days, weeks, months and years.
- How to use the **12-hour clock** (a.m. and p.m.) and the **24-hour clock**.
- How to read clocks and **timetables**.
- How to work with **time zones** and time differences.

## Key words

| Word | Meaning |
|---|---|
| a.m. | From midnight to midday |
| p.m. | From midday to midnight |
| 24-hour clock | Uses four digits, from 0000 to 2359. 3.15 p.m. is 1515 |
| Time zone | A region of the world that uses the same clock time |

## Units of time

| Unit | Equals |
|---|---|
| 1 minute | 60 seconds |
| 1 hour | 60 minutes |
| 1 day | 24 hours |
| 1 week | 7 days |
| 1 year | 365 days (use this in the exam) |

## 12-hour and 24-hour clock

| 12-hour | 24-hour |
|---|---|
| 3.15 a.m. | 0315 |
| 12.00 noon | 1200 |
| 3.15 p.m. | 1515 |
| 11.40 p.m. | 2340 |
| 12.00 midnight | 0000 |

> For p.m. times (after 1 p.m.), **add 12** to the hour. For 24-hour times after 1300, **take away 12** and write p.m.

## Working out time differences

Count up in easy steps: to the next whole hour, then whole hours, then the minutes left.

### Real-life example: a flight

**Problem:** A flight leaves at 0845 and lands at 1320. How long is the flight?

1. 0845 to 0900 = 15 minutes.
2. 0900 to 1300 = 4 hours.
3. 1300 to 1320 = 20 minutes.
4. Total: 4 hours + 15 minutes + 20 minutes = 4 hours 35 minutes.

**Answer:** 4 hours 35 minutes

> Do not subtract times like normal numbers. 1320 - 0845 = 475, which is **not** 4 hours 75 minutes.

### Real-life example: cooking time

**Problem:** A chicken needs 1 hour 50 minutes in the oven. It goes in at 5.25 p.m. When will it be ready?

1. 5.25 p.m. + 1 hour = 6.25 p.m.
2. 6.25 p.m. + 50 minutes: 35 minutes takes you to 7.00 p.m., then 15 more minutes.
3. Ready at 7.15 p.m.

**Answer:** 7.15 p.m.

## Reading a timetable

| Station | Train A | Train B |
|---|---|---|
| Lahore | 0730 | 1015 |
| Gujranwala | 0820 | 1110 |
| Jhelum | 0945 | 1240 |
| Rawalpindi | 1110 | 1405 |

### Real-life example: catching a train

**Problem:** Using the timetable, how long does Train B take from Gujranwala to Rawalpindi?

1. Leaves Gujranwala at 1110, arrives Rawalpindi at 1405.
2. 1110 to 1400 = 2 hours 50 minutes. Then 5 more minutes.

**Answer:** 2 hours 55 minutes

## Time zones

When it is 12 noon in London, it is 4 p.m. in Dubai and 5 p.m. in Karachi. Karachi is 5 hours **ahead** of London (in winter).

### Real-life example: calling a friend abroad

**Problem:** Karachi is 5 hours ahead of London. You want to call a friend in London at 6 p.m. their time. What time is it in Karachi?

1. Karachi is ahead, so add 5 hours: 6 p.m. + 5 hours = 11 p.m.

**Answer:** 11 p.m. in Karachi

### Real-life example: a flight across time zones

**Problem:** A flight leaves Karachi at 0200 local time. It takes 8 hours. London is 5 hours behind Karachi. What is the local time in London when it lands?

1. Landing time in Karachi time: 0200 + 8 hours = 1000.
2. London is 5 hours behind: 1000 - 5 hours = 0500.

**Answer:** 0500 London time

## Common mistakes

- Treating time as decimals. 1 hour 30 minutes is 1.5 hours, not 1.3 hours.
- Subtracting clock times as normal numbers.
- Adding the time difference when you should subtract, or the other way round. "Ahead" means later, so add.

## Exam tips

- Use a number line to count up between times. Show your steps.
- Always write 24-hour times with four digits: 0845, not 845.`,
  "1.16": `## What you need to know

- How to **calculate with money**: totals, change, best buys and bills.
- How to **convert** from one currency to another using an exchange rate.

## Key words

| Word | Meaning |
|---|---|
| Currency | The type of money a country uses, like dollars, rupees or riyals |
| Exchange rate | How much of one currency you get for one unit of another |
| Change | Money given back when you pay too much |

## Money is always 2 decimal places

$7.5 should be written $7.50. 350 cents = $3.50.

## Shopping and change

### Real-life example: buying school supplies

**Problem:** Fatima buys 3 notebooks at $1.85 each and a pen for $0.95. She pays with a $10 note. How much change does she get?

1. Notebooks: 3 × 1.85 = 5.55.
2. Total: 5.55 + 0.95 = 6.50.
3. Change: 10.00 - 6.50 = 3.50.

**Answer:** $3.50

## Bills

### Real-life example: an electricity bill

**Problem:** Electricity costs $0.12 per unit. There is also a fixed charge of $8 per month. A family uses 450 units in one month. Find the bill.

1. Cost of units: 450 × 0.12 = 54.
2. Add the fixed charge: 54 + 8 = 62.

**Answer:** $62.00

## Converting currency

> Going **to** the other currency: **multiply** by the rate. Coming **back**: **divide** by the rate.

### Real-life example: holiday money

**Problem:** The exchange rate is 1 US dollar = 3.75 Saudi riyals. Ahmed changes $200 into riyals. How many riyals does he get?

1. 200 × 3.75 = 750.

**Answer:** 750 riyals

### Real-life example: changing back

**Problem:** At the end of the holiday, Ahmed has 90 riyals left. He changes them back to dollars at the same rate. How many dollars does he get?

1. 90 ÷ 3.75 = 24.

**Answer:** $24

> Check your answer makes sense. 1 dollar buys **more than** 1 riyal, so you should get **fewer** dollars than riyals.

### Real-life example: comparing prices in two countries

**Problem:** A pair of trainers costs $60 in the USA and 240 riyals in Saudi Arabia. The exchange rate is $1 = 3.75 riyals. Where are they cheaper?

1. Change 240 riyals into dollars: 240 ÷ 3.75 = 64.
2. $64 in Saudi Arabia is more than $60 in the USA.

**Answer:** they are cheaper in the USA, by $4.

## Common mistakes

- Writing $3.5 instead of $3.50.
- Multiplying when you should divide in a currency conversion.
- Forgetting a fixed charge in a bill.

## Exam tips

- Write the units ($, riyals, rupees) next to every number you work out.
- Do a quick check: does the answer have about the right size?`,
  "1.17": `## What you need to know

> **Extended and O Level only.** This topic is not in IGCSE Core.

- What **exponential growth** and **exponential decay** mean.
- How to use a **multiplier** and a **power** to find a value after a number of years (or hours, or days).
- Real-life uses: **depreciation** (things losing value), **population** change, and compound interest.

## Key words

| Word | Meaning |
|---|---|
| Exponential growth | An amount goes up by the same **percentage** each time period |
| Exponential decay | An amount goes down by the same **percentage** each time period |
| Depreciation | When something, like a car or phone, loses value over time |
| Multiplier | The number you multiply by each time period |

## Growth and decay in real life

- A town's population grows by 2% every year.
- A new car loses 15% of its value every year.
- Medicine in your blood drops by 20% every hour.

The amount changes by the same **percentage**, not the same **number**. That is why the changes get bigger (growth) or smaller (decay) over time.

## The formula

> **Final amount = starting amount × (multiplier)ⁿ**

- Growth by r%: multiplier = 1 + r/100. Growth by 2% gives 1.02.
- Decay by r%: multiplier = 1 - r/100. Decay by 15% gives 0.85.
- n is the number of time periods (years, hours, days).

## Exponential growth

### Real-life example: a growing town

**Problem:** A town has 20 000 people. The population grows by 3% each year. How many people will there be after 5 years?

1. Growth of 3%: multiplier = 1.03.
2. After 5 years: 20 000 × 1.03⁵.
3. 1.03⁵ = 1.1592740743, so 20 000 × 1.1592740743 = 23 185.48...
4. People must be a whole number: 23 185.

**Answer:** about 23 185 people

## Exponential decay

### Real-life example: a car losing value (depreciation)

**Problem:** A car costs $18 000. It loses 15% of its value each year. What is it worth after 3 years?

1. Decay of 15%: multiplier = 0.85.
2. 18 000 × 0.85³ = 18 000 × 0.614125 = 11 054.25.

**Answer:** $11 054.25

Check year by year: after 1 year $15 300, after 2 years $13 005, after 3 years $11 054.25. Correct.

### Real-life example: medicine in the body

**Problem:** A patient takes 400 mg of a medicine. Every hour, the amount in the blood drops by 20%. How much is left after 4 hours?

1. Multiplier = 0.8.
2. 400 × 0.8⁴ = 400 × 0.4096 = 163.84.

**Answer:** 163.84 mg (about 164 mg)

## How many years until...?

Try one year at a time with a calculator until you pass the target.

### Real-life example: doubling savings

**Problem:** $1000 is saved at 8% compound interest per year. After how many whole years will it first be more than $2000?

1. Multiplier = 1.08.
2. Try n = 9: 1000 × 1.08⁹ = 1999.00 (not quite).
3. Try n = 10: 1000 × 1.08¹⁰ = 2158.92 (more than 2000).

**Answer:** after 10 years

## Growth or decay? Linear or exponential?

| Change each year | Type |
|---|---|
| Goes up by $50 every year | Linear (same **amount**) |
| Goes up by 5% every year | Exponential growth (same **percentage**) |
| Goes down by 10% every year | Exponential decay |

## Common mistakes

- Using 0.15 as the multiplier for a 15% decrease. The multiplier is 0.85.
- Multiplying by the multiplier times n (0.85 × 3) instead of using the power (0.85³).
- Rounding each year. Keep the full number and round at the end.

## Exam tips

- Write "multiplier = ..." first. It shows the examiner your method.
- For a decay question, check that your answer is **smaller** than the starting amount.`,
  "1.18": `## What you need to know

> **Extended and O Level only.** This topic is not in IGCSE Core.

- What a **surd** is.
- How to **simplify** surds, like √20 = 2√5.
- How to add, subtract, multiply and divide surds.
- How to **rationalise the denominator**: remove a surd from the bottom of a fraction.

## Key words

| Word | Meaning |
|---|---|
| Surd | A square root that is not a whole number, like √2, √5, √12 |
| Simplify a surd | Write it with the smallest number possible inside the root |
| Rationalise the denominator | Change a fraction so there is no square root on the bottom |

## Why use surds?

√2 = 1.41421356... It never ends. Writing √2 is **exact**. Builders and engineers sometimes need exact values. For example, the diagonal of a square tile with sides of 1 m is exactly √2 m.

## The two key rules

> **√a × √b = √(ab)** and **√a ÷ √b = √(a/b)**

Examples:

- √3 × √5 = √15
- √2 × √8 = √16 = 4
- √50 ÷ √2 = √25 = 5

## Simplifying surds

Find the **biggest square number** that divides into the number.

Square numbers to look for: 4, 9, 16, 25, 36, 49, 64, 81, 100.

**Problem:** Simplify √20.

1. 20 = 4 × 5, and 4 is a square number.
2. √20 = √4 × √5 = 2√5.

**Answer:** 2√5

**Problem:** Simplify √72.

1. The biggest square number that divides 72 is 36: 72 = 36 × 2.
2. √72 = √36 × √2 = 6√2.

**Answer:** 6√2

### Real-life example: a square garden

**Problem:** A square garden has an area of 50 m². Write the exact length of one side as a simplified surd.

1. Side = √50.
2. 50 = 25 × 2, so √50 = 5√2.

**Answer:** 5√2 m (about 7.07 m)

## Adding and subtracting surds

You can only add or subtract **like** surds (the same number inside the root). Think of √2 like a letter: 3√2 + 4√2 = 7√2, just like 3x + 4x = 7x.

**Problem:** Simplify √200 - √32.

1. √200 = √100 × √2 = 10√2.
2. √32 = √16 × √2 = 4√2.
3. 10√2 - 4√2 = 6√2.

**Answer:** 6√2

## Multiplying out brackets with surds

**Problem:** Expand and simplify (3 + √2)(3 - √2).

1. 3 × 3 = 9.
2. 3 × (-√2) = -3√2 and √2 × 3 = 3√2. These cancel out.
3. √2 × (-√2) = -2.
4. 9 - 2 = 7.

**Answer:** 7

## Rationalising the denominator

Multiply the top and bottom by the surd on the bottom.

**Problem:** Rationalise 5/√10.

1. Multiply top and bottom by √10: (5 × √10) / (√10 × √10).
2. √10 × √10 = 10. So the fraction is 5√10/10.
3. Simplify: 5/10 = 1/2, so the answer is √10/2.

**Answer:** √10/2

**Problem:** Rationalise 6/√3.

1. (6 × √3) / (√3 × √3) = 6√3/3.
2. Simplify: 6 ÷ 3 = 2.

**Answer:** 2√3

## Common mistakes

- Thinking √a + √b = √(a + b). √9 + √16 = 3 + 4 = 7, but √25 = 5. They are not equal.
- Not using the **biggest** square factor. √72 = 2√18 is not fully simplified. Keep going: 6√2.
- Forgetting to multiply the **top** when rationalising.

## Exam tips

- Learn the square numbers up to 100. You need them for every surd question.
- "Exact value" or "in the form a√b" means leave the answer as a surd. Do not give a decimal.`,
  "2.1": `## What you need to know

- Letters can stand for numbers. This is called **algebra**.
- How to write simple expressions from words.
- How to **substitute**: put numbers in place of letters and work out the answer.

## Key words

| Word | Meaning |
|---|---|
| Variable | A letter that stands for a number that can change, like x or n |
| Term | One part of an expression, like 3x or 5 |
| Expression | Terms joined by + or -, like 3x + 5. It has no = sign |
| Equation | Two things that are equal, like 3x + 5 = 20 |
| Formula | A rule that connects two or more variables, like A = l × w |
| Coefficient | The number in front of a letter. In 7y the coefficient is 7 |
| Substitute | Replace a letter with a number |

## Why use letters?

A taxi charges $3 to start, plus $2 for every kilometre. You do not know how far every customer will travel. So you call the distance **d**.

> **Cost = 3 + 2d**

Now one short rule works for every trip.

## How we write algebra

| We write | It means |
|---|---|
| 5n | 5 × n |
| ab | a × b |
| n² | n × n |
| x/4 | x ÷ 4 |
| 3(x + 2) | 3 × (x + 2) |

We do not write the × sign, and we write the number first: **5n**, not n5.

## Writing expressions from words

**Problem:** Ali has n sweets. Write an expression for each person.

1. Sara has 4 more than Ali: **n + 4**
2. Bilal has 3 fewer than Ali: **n - 3**
3. Zain has twice as many as Ali: **2n**
4. Ali shares his sweets equally with a friend. Each gets: **n/2**

## Substitution

Write the expression again with the numbers in brackets, then use the order of operations (BIDMAS: Brackets, Indices, Divide and Multiply, Add and Subtract).

### Real-life example: taxi fare

**Problem:** A taxi costs C = 3 + 2d dollars, where d is the distance in km. Find the cost of a 12 km trip.

1. Write the formula: C = 3 + 2d.
2. Put 12 in place of d: C = 3 + 2(12).
3. Multiply first: 2 × 12 = 24.
4. Then add: 3 + 24 = 27.

**Answer:** $27

### Real-life example: phone plan

**Problem:** A phone plan costs P = 15 + 0.1m dollars a month, where m is the number of minutes over the free limit. Find P when m = 40.

1. P = 15 + 0.1(40).
2. 0.1 × 40 = 4.
3. 15 + 4 = 19.

**Answer:** $19

### Example with negative numbers

**Problem:** Find the value of 3a² - 2b when a = -4 and b = 5.

1. Put in the numbers with brackets: 3(-4)² - 2(5).
2. Indices first: (-4)² = 16. A negative times a negative is positive.
3. Multiply: 3 × 16 = 48 and 2 × 5 = 10.
4. Subtract: 48 - 10 = 38.

**Answer:** 38

> Always use brackets when you put in a negative number. 3(-4)² means 3 × 16 = 48. Without brackets your calculator may work out -4² = -16, which is wrong here.

### Real-life example: temperature

**Problem:** To change Celsius to Fahrenheit, use F = 1.8C + 32. It is 25°C in Jeddah in the morning. What is this in Fahrenheit?

1. F = 1.8(25) + 32.
2. 1.8 × 25 = 45.
3. 45 + 32 = 77.

**Answer:** 77°F

### Example with a fraction

**Problem:** Find the value of (v² - u²)/(2s) when v = 10, u = 6 and s = 4.

1. Top: 10² - 6² = 100 - 36 = 64.
2. Bottom: 2 × 4 = 8.
3. Divide: 64 ÷ 8 = 8.

**Answer:** 8

## Common mistakes

- Thinking 3x means 3 + x. It means 3 × x.
- Thinking x² means 2x. If x = 5, x² = 25 but 2x = 10.
- Forgetting brackets when you substitute a negative number.
- Working left to right instead of using BIDMAS.

## Exam tips

- Always write the line with the numbers put in. You can get a method mark even if your final answer is wrong.
- Check if the answer makes sense. A taxi fare of $2700 for 12 km is clearly wrong.`,
  "2.2": `## What you need to know

- How to **simplify** by collecting like terms.
- How to **expand** (multiply out) brackets, including two brackets like (x + 3)(x - 5).
- How to **factorise** by taking out common factors. Factorise means factorise **fully**.
- Extended and O Level: expanding three brackets, harder factorising (grouping, difference of two squares, quadratics) and **completing the square**.

## Key words

| Word | Meaning |
|---|---|
| Like terms | Terms with exactly the same letters and powers, like 3x and 7x |
| Simplify | Collect like terms so the expression is shorter |
| Expand | Multiply out the brackets |
| Factorise | Put brackets back in. It is the opposite of expanding |
| Common factor | A number or letter that divides into every term |
| Quadratic | An expression where the highest power is 2, like x² + 5x + 6 |

## Collecting like terms

Think of letters as objects. 3 apples + 5 apples = 8 apples. You cannot add apples and bananas together.

**Problem:** Simplify 2a + 3b + 5a - 9b.

1. Find the a terms: 2a + 5a = 7a.
2. Find the b terms: 3b - 9b = -6b.
3. Write them together.

**Answer:** 7a - 6b

> x and x² are **not** like terms. 3x + 2x² cannot be simplified.

## Expanding one bracket

Multiply **everything** inside the bracket by the term outside.

### Real-life example: buying lunch

**Problem:** Each lunch has a sandwich costing s dollars and a juice costing $2. Write and expand an expression for the cost of 4 lunches.

1. One lunch costs (s + 2).
2. Four lunches cost 4(s + 2).
3. Multiply each term by 4: 4 × s = 4s and 4 × 2 = 8.

**Answer:** 4s + 8

**Problem:** Expand and simplify 3(2x - 5) - 2(x - 4).

1. First bracket: 3 × 2x = 6x and 3 × (-5) = -15. So 6x - 15.
2. Second bracket: -2 × x = -2x and -2 × (-4) = +8. So -2x + 8.
3. Put together: 6x - 15 - 2x + 8.
4. Collect like terms: 6x - 2x = 4x and -15 + 8 = -7.

**Answer:** 4x - 7

> Watch the minus sign in front of a bracket. It changes the sign of **every** term inside.

## Expanding two brackets

Every term in the first bracket multiplies every term in the second bracket. Use a grid so you do not miss any.

**Problem:** Expand and simplify (x + 3)(x - 5).

| × | x | -5 |
|---|---|---|
| **x** | x² | -5x |
| **+3** | 3x | -15 |

1. Fill in the grid by multiplying the row by the column.
2. Add everything: x² - 5x + 3x - 15.
3. Collect the x terms: -5x + 3x = -2x.

**Answer:** x² - 2x - 15

### Real-life example: a bigger garden

**Problem:** A square garden has sides of x metres. The owner makes it 2 m longer and 3 m wider. Write the new area as an expression without brackets.

1. New length = x + 2. New width = x + 3.
2. Area = (x + 2)(x + 3).
3. Multiply out: x × x = x², x × 3 = 3x, 2 × x = 2x, 2 × 3 = 6.
4. Add: x² + 3x + 2x + 6 = x² + 5x + 6.

**Answer:** x² + 5x + 6 square metres

**Problem:** Expand (2x + 1)(x - 4).

1. 2x × x = 2x². 2x × (-4) = -8x.
2. 1 × x = x. 1 × (-4) = -4.
3. Add: 2x² - 8x + x - 4 = 2x² - 7x - 4.

**Answer:** 2x² - 7x - 4

> (x + 5)² means (x + 5)(x + 5) = x² + 10x + 25. It is **not** x² + 25.

## Factorising: taking out a common factor

Find the **biggest** number and letters that go into every term. Put them outside the bracket.

**Problem:** Factorise fully 9x² + 15xy.

1. Biggest number that divides 9 and 15: **3**.
2. Letter in both terms: **x** (y is not in the first term).
3. Common factor = 3x.
4. Divide each term by 3x: 9x² ÷ 3x = 3x and 15xy ÷ 3x = 5y.

**Answer:** 3x(3x + 5y)

> Check by expanding: 3x × 3x = 9x² and 3x × 5y = 15xy. Correct.

> 3(3x² + 5xy) is factorised, but **not fully**. You would lose a mark.

## Extended and O Level: three brackets

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

Expand two brackets first, then multiply the answer by the third bracket.

**Problem:** Expand (x - 2)(x + 3)(2x + 1).

1. First two brackets: (x - 2)(x + 3) = x² + 3x - 2x - 6 = x² + x - 6.
2. Now (x² + x - 6)(2x + 1).
3. x² × 2x = 2x³. x² × 1 = x².
4. x × 2x = 2x². x × 1 = x.
5. -6 × 2x = -12x. -6 × 1 = -6.
6. Add: 2x³ + x² + 2x² + x - 12x - 6 = 2x³ + 3x² - 11x - 6.

**Answer:** 2x³ + 3x² - 11x - 6

## Extended and O Level: factorising by grouping

Use this when there are four terms.

**Problem:** Factorise ax + bx + 3ay + 3by.

1. Group the first two and the last two: (ax + bx) + (3ay + 3by).
2. Factorise each group: x(a + b) + 3y(a + b).
3. (a + b) is in both parts, so take it out.

**Answer:** (a + b)(x + 3y)

## Extended and O Level: difference of two squares

> **a² - b² = (a + b)(a - b)**

**Problem:** Factorise 25x² - 9y².

1. 25x² = (5x)². 9y² = (3y)².
2. Use the rule with a = 5x and b = 3y.

**Answer:** (5x + 3y)(5x - 3y)

### Real-life example: mental maths trick

**Problem:** Work out 53² - 47² without a calculator.

1. This is a difference of two squares: (53 + 47)(53 - 47).
2. 53 + 47 = 100. 53 - 47 = 6.
3. 100 × 6 = 600.

**Answer:** 600

## Extended and O Level: factorising quadratics

### When the number in front of x² is 1

For x² + bx + c, find two numbers that **multiply** to make c and **add** to make b.

**Problem:** Factorise x² + 7x + 12.

1. Pairs that multiply to 12: 1 and 12, 2 and 6, 3 and 4.
2. Which pair adds to 7? 3 + 4 = 7.

**Answer:** (x + 3)(x + 4)

**Problem:** Factorise x² - 2x - 15.

1. Multiply to -15, add to -2.
2. Try 3 and -5: 3 × (-5) = -15 and 3 + (-5) = -2. Correct.

**Answer:** (x + 3)(x - 5)

### Perfect squares

**Problem:** Factorise x² + 10x + 25.

1. Multiply to 25, add to 10: 5 and 5.
2. (x + 5)(x + 5) can be written as a square.

**Answer:** (x + 5)²

### When the number in front of x² is not 1

For ax² + bx + c, multiply a × c. Find two numbers that multiply to a × c and add to b. Use them to split the middle term, then group.

**Problem:** Factorise 2x² - 7x - 4.

1. a × c = 2 × (-4) = -8.
2. Multiply to -8, add to -7: -8 and 1.
3. Split the middle: 2x² - 8x + x - 4.
4. Group: 2x(x - 4) + 1(x - 4).
5. Take out (x - 4).

**Answer:** (2x + 1)(x - 4)

### Taking out x first

**Problem:** Factorise x³ + 5x² + 6x.

1. Every term has x. Take it out: x(x² + 5x + 6).
2. Factorise the quadratic: multiply to 6, add to 5 gives 2 and 3.

**Answer:** x(x + 2)(x + 3)

## Extended and O Level: completing the square

We write x² + bx + c in the form **(x + p)² + q**. Half of b gives p.

**Problem:** Write x² + 6x + 2 in the form (x + p)² + q.

1. Half of 6 is 3. So start with (x + 3)².
2. (x + 3)² = x² + 6x + 9. That gives 9, but we only want 2.
3. So subtract 9 and add 2: (x + 3)² - 9 + 2.
4. -9 + 2 = -7.

**Answer:** (x + 3)² - 7

**Problem:** Write 2x² - 12x + 5 in the form a(x + p)² + q.

1. Take 2 out of the x terms: 2(x² - 6x) + 5.
2. Half of -6 is -3: x² - 6x = (x - 3)² - 9.
3. So 2[(x - 3)² - 9] + 5 = 2(x - 3)² - 18 + 5.
4. -18 + 5 = -13.

**Answer:** 2(x - 3)² - 13

> Completing the square is used to solve quadratics (topic 2.5) and to find the turning point of a curve (topic 2.11).

## Common mistakes

- Adding unlike terms, like 3x + 2y = 5xy.
- Only multiplying the first term inside a bracket: 3(x + 4) is 3x + 12, not 3x + 4.
- Writing (x + 5)² = x² + 25. You must expand it as two brackets.
- Not factorising fully.

## Exam tips

- After factorising, expand your answer in your head to check it.
- "Simplify" means collect like terms. "Expand" means remove brackets. "Factorise" means put brackets in.`,
  "2.3": `## What you need to know

> **Extended and O Level only.** This topic is not in IGCSE Core.

- An **algebraic fraction** is a fraction with letters in it, like 3/x or (x + 1)/(x - 2).
- How to **simplify** algebraic fractions by factorising and cancelling.
- How to add, subtract, multiply and divide algebraic fractions.

Everything works in the same way as number fractions. If you can do 2/3 + 1/4, you can do this topic.

## Key words

| Word | Meaning |
|---|---|
| Numerator | The top of a fraction |
| Denominator | The bottom of a fraction |
| Common denominator | A bottom that both fractions can share |
| Cancel | Divide the top and the bottom by the same factor |

## Simplifying

You can only cancel a **factor**: something that multiplies the whole top and the whole bottom. So **factorise first**.

**Problem:** Simplify (6x²)/(9x).

1. Numbers: 6/9 = 2/3.
2. Letters: x²/x = x.

**Answer:** 2x/3

**Problem:** Simplify (x² - 9)/(x² + 5x + 6).

1. Factorise the top (difference of two squares): (x + 3)(x - 3).
2. Factorise the bottom: (x + 2)(x + 3).
3. (x + 3) is on the top and the bottom. Cancel it.

**Answer:** (x - 3)/(x + 2)

> You **cannot** cancel the x in (x + 3)/x. The x on top is only part of the bracket, not a factor of the whole top. Test it: if x = 2, (2 + 3)/2 = 2.5, but cancelling would give 3. Wrong.

## Multiplying and dividing

- Multiply: top × top, bottom × bottom. Cancel first to keep it simple.
- Divide: flip the second fraction and multiply.

**Problem:** Simplify (4x/5) × (10/(x²)).

1. Top: 4x × 10 = 40x. Bottom: 5 × x² = 5x².
2. Numbers: 40/5 = 8. Letters: x/x² = 1/x.

**Answer:** 8/x

**Problem:** Simplify (x + 2)/3 ÷ (x + 2)/6.

1. Flip the second and multiply: (x + 2)/3 × 6/(x + 2).
2. (x + 2) cancels. 6/3 = 2.

**Answer:** 2

## Adding and subtracting

Make the denominators the same, then add or subtract the tops.

**Problem:** Write x/3 + x/4 as a single fraction.

1. Common denominator: 12.
2. x/3 = 4x/12 and x/4 = 3x/12.
3. Add the tops: 4x + 3x = 7x.

**Answer:** 7x/12

### Real-life example: a trip there and back

**Problem:** Omar cycles 12 km to school at x km/h, and comes home at (x - 2) km/h because he is tired. Write the total time as a single fraction.

1. Time = distance ÷ speed. Going: 12/x hours. Coming home: 12/(x - 2) hours.
2. Total = 12/x + 12/(x - 2).
3. Common denominator: x(x - 2).
4. First fraction: 12(x - 2)/[x(x - 2)]. Second: 12x/[x(x - 2)].
5. Add the tops: 12(x - 2) + 12x = 12x - 24 + 12x = 24x - 24.

**Answer:** (24x - 24)/[x(x - 2)] hours, which factorises to 24(x - 1)/[x(x - 2)]

> Check with a number. If x = 6: 12/6 + 12/4 = 2 + 3 = 5 hours. The answer gives 24 × 5 ÷ (6 × 4) = 120 ÷ 24 = 5. Correct.

**Problem:** Write 3/(x + 1) - 2/(x - 3) as a single fraction.

1. Common denominator: (x + 1)(x - 3).
2. Top: 3(x - 3) - 2(x + 1).
3. Expand: 3x - 9 - 2x - 2. Be careful: -2 × (+1) = -2.
4. Simplify: x - 11.

**Answer:** (x - 11)/[(x + 1)(x - 3)]

## Common mistakes

- Cancelling terms instead of factors, like (x + 6)/6 = x. Wrong.
- Forgetting to put brackets round the top when you subtract, so the sign of the second term is wrong.
- Adding the bottoms: 1/x + 1/y is **not** 2/(x + y).

## Exam tips

- Factorise everything you can before you cancel.
- Check your answer by putting in a simple number, like x = 2, into the question and your answer. Both should give the same value.`,
  "2.4": `## What you need to know

- How to use the **rules of indices** with letters, including zero and negative indices.
- Extended and O Level: **fractional** indices with letters, and solving equations where x is in the power, like 5^(x + 1) = 25^x.

This topic uses the same rules as Indices I (topic 1.7), but now with letters.

## Key words

| Word | Meaning |
|---|---|
| Index (power) | The small raised number. In x⁵ the index is 5 |
| Base | The number or letter being multiplied. In x⁵ the base is x |
| Coefficient | The number in front. In 6x⁷ the coefficient is 6 |

## The rules

| Rule | In words | Example |
|---|---|---|
| xᵃ × xᵇ = xᵃ⁺ᵇ | Multiplying: **add** the powers | x³ × x⁴ = x⁷ |
| xᵃ ÷ xᵇ = xᵃ⁻ᵇ | Dividing: **subtract** the powers | x⁹ ÷ x² = x⁷ |
| (xᵃ)ᵇ = xᵃᵇ | Power of a power: **multiply** the powers | (x³)² = x⁶ |
| x⁰ = 1 | Anything to the power 0 is 1 | y⁰ = 1 |
| x⁻ⁿ = 1/xⁿ | Negative power means "1 over" | x⁻² = 1/x² |

> The **numbers** in front are multiplied or divided as normal. Only the **powers** follow the rules.

## Multiplying

**Problem:** Simplify 6x⁷y⁴ × 5x⁻⁵y.

1. Numbers: 6 × 5 = 30.
2. x: x⁷ × x⁻⁵. Add the powers: 7 + (-5) = 2. So x².
3. y: y⁴ × y¹. Add the powers: 4 + 1 = 5. So y⁵. (y on its own means y¹.)

**Answer:** 30x²y⁵

## Dividing

**Problem:** Simplify 12a⁵ ÷ 3a⁻².

1. Numbers: 12 ÷ 3 = 4.
2. a: subtract the powers: 5 - (-2) = 5 + 2 = 7.

**Answer:** 4a⁷

## Power of a power

**Problem:** Simplify (5x³)².

1. Everything inside the bracket is squared: 5² × (x³)².
2. 5² = 25.
3. (x³)²: multiply the powers: 3 × 2 = 6.

**Answer:** 25x⁶

> A common mistake is (5x³)² = 5x⁶. The 5 must be squared too.

### Real-life example: area of a square tile

**Problem:** A square tile has sides of 3x² cm. Find its area.

1. Area = side × side = (3x²)².
2. 3² = 9 and (x²)² = x⁴.

**Answer:** 9x⁴ cm²

## Negative and zero powers

**Problem:** Write 4x⁻³ without a negative power.

1. x⁻³ = 1/x³.
2. So 4x⁻³ = 4 × 1/x³.

**Answer:** 4/x³

> Only the x has the negative power, not the 4. So the 4 stays on top.

**Problem:** Simplify (2a³b)⁰.

1. Anything (except 0) to the power 0 is 1.

**Answer:** 1

## Extended and O Level: fractional indices

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

| Power | Meaning | Example |
|---|---|---|
| x^(1/2) | Square root of x | 49^(1/2) = 7 |
| x^(1/3) | Cube root of x | 8^(1/3) = 2 |
| x^(m/n) | n-th root, then to the power m | 8^(2/3) = 2² = 4 |

**Problem:** Simplify (16x⁸)^(1/2).

1. Square root of 16 = 4.
2. (x⁸)^(1/2): multiply the powers: 8 × 1/2 = 4. So x⁴.

**Answer:** 4x⁴

**Problem:** Simplify (27x⁶)^(-2/3).

1. The negative means "1 over": 1/(27x⁶)^(2/3).
2. Cube root of 27 = 3, then square: 3² = 9.
3. (x⁶)^(2/3): 6 × 2/3 = 4. So x⁴.

**Answer:** 1/(9x⁴)

## Extended and O Level: x in the power

Make both sides have the **same base**. Then the powers must be equal.

**Problem:** Solve 5^(x + 1) = 25^x.

1. 25 = 5². So 25^x = (5²)^x = 5^(2x).
2. Now 5^(x + 1) = 5^(2x). The bases are the same, so the powers are equal.
3. x + 1 = 2x.
4. Subtract x from both sides: 1 = x.

**Answer:** x = 1

> Check: 5^(1 + 1) = 25 and 25¹ = 25. Correct.

**Problem:** Solve 2^x = 1/8.

1. 8 = 2³, so 1/8 = 2⁻³.
2. 2^x = 2⁻³.

**Answer:** x = -3

### Real-life example: doubling money

**Problem:** A savings scheme doubles your money every 5 years. After t years you have 100 × 2^(t/5) dollars. When do you have $800?

1. 100 × 2^(t/5) = 800.
2. Divide both sides by 100: 2^(t/5) = 8.
3. 8 = 2³, so 2^(t/5) = 2³.
4. The powers are equal: t/5 = 3.
5. Multiply both sides by 5: t = 15.

**Answer:** After 15 years

## Common mistakes

- Multiplying the powers when you should add them: x³ × x⁴ is x⁷, not x¹².
- Forgetting to apply the power to the number: (2x)³ = 8x³, not 2x³.
- Thinking a negative power gives a negative number: 2⁻¹ = 1/2, not -2.

## Exam tips

- Deal with the numbers first, then each letter one at a time.
- Write y as y¹ so you do not forget its power.`,
  "2.5": `## What you need to know

- How to write an equation from words, then **solve** it.
- How to solve **linear equations**, like 3x + 4 = 10 and 5 - 2x = 3(x + 7).
- How to solve **simultaneous equations**: two equations with two unknowns.
- How to **change the subject** of a formula.
- Extended and O Level: equations with fractions, **quadratic equations**, simultaneous equations where one is not a straight line, and harder changes of subject.

## Key words

| Word | Meaning |
|---|---|
| Solve | Find the value of the unknown letter |
| Linear equation | An equation where x has no power, like 2x + 5 = 11 |
| Inverse operation | The opposite operation. + and - are inverses. × and ÷ are inverses |
| Simultaneous equations | Two equations that are both true at the same time |
| Quadratic equation | An equation with x² in it, like x² - 5x + 6 = 0 |
| Subject | The letter on its own on one side of a formula. In A = lw, A is the subject |

## The balance idea

An equation is like a balanced scale. Whatever you do to one side, you **must do to the other side** too. Use inverse operations to get x on its own.

## Solving linear equations

**Problem:** Solve 3x + 4 = 10.

1. Subtract 4 from both sides: 3x = 6.
2. Divide both sides by 3: x = 2.

**Answer:** x = 2

> Check: 3 × 2 + 4 = 10. Correct. Always check by putting your answer back in.

### x on both sides, with a bracket

**Problem:** Solve 5 - 2x = 3(x + 7).

1. Expand the bracket: 5 - 2x = 3x + 21.
2. Add 2x to both sides (so the x terms are positive): 5 = 5x + 21.
3. Subtract 21 from both sides: -16 = 5x.
4. Divide both sides by 5: x = -16/5.

**Answer:** x = -3.2

### Real-life example: gym membership

**Problem:** A gym charges a $20 joining fee plus $15 a month. Layla paid $140 in total. How many months did she pay for?

1. Let m = number of months. Cost = 20 + 15m.
2. Equation: 20 + 15m = 140.
3. Subtract 20 from both sides: 15m = 120.
4. Divide both sides by 15: m = 8.

**Answer:** 8 months

## Writing equations from words

### Real-life example: a rectangle

**Problem:** A rectangle is 5 cm longer than it is wide. Its perimeter is 38 cm. Find its length.

1. Let the width = x. Then the length = x + 5.
2. Perimeter = all four sides: x + (x + 5) + x + (x + 5) = 4x + 10.
3. Equation: 4x + 10 = 38.
4. Subtract 10: 4x = 28. Divide by 4: x = 7.
5. Length = 7 + 5 = 12.

**Answer:** 12 cm

### Real-life example: ages

**Problem:** A father is 3 times as old as his son. In 12 years, he will be twice as old as his son. How old is the son now?

1. Let the son's age = x. The father's age = 3x.
2. In 12 years: son = x + 12, father = 3x + 12.
3. Father will be twice the son: 3x + 12 = 2(x + 12).
4. Expand: 3x + 12 = 2x + 24.
5. Subtract 2x from both sides: x + 12 = 24.
6. Subtract 12: x = 12.

**Answer:** The son is 12 (and the father is 36).

> Check: in 12 years the son is 24 and the father is 48. 48 is twice 24. Correct.

## Simultaneous equations: elimination

Make the number in front of one letter the same in both equations. Then add or subtract to get rid of that letter.

> **Same signs: subtract. Different signs: add.**

### Real-life example: cinema tickets

**Problem:** 2 adult tickets and 3 child tickets cost $34. 1 adult ticket and 2 child tickets cost $19. Find the cost of each ticket.

1. Let a = adult price and c = child price.
2. Equation (1): 2a + 3c = 34. Equation (2): a + 2c = 19.
3. Multiply (2) by 2 so both have 2a: 2a + 4c = 38. Call this (3).
4. Both have +2a (same sign), so subtract (1) from (3): (2a + 4c) - (2a + 3c) = 38 - 34.
5. This gives c = 4.
6. Put c = 4 into (2): a + 8 = 19, so a = 11.

**Answer:** Adult $11, child $4

> Check in (1): 2 × 11 + 3 × 4 = 22 + 12 = 34. Correct.

**Problem:** Solve 3x + 2y = 16 and 5x - 3y = 14.

1. Make the y numbers the same. Multiply the first equation by 3: 9x + 6y = 48.
2. Multiply the second equation by 2: 10x - 6y = 28.
3. +6y and -6y have different signs, so add: 19x = 76.
4. Divide by 19: x = 4.
5. Put x = 4 into the first equation: 12 + 2y = 16, so 2y = 4 and y = 2.

**Answer:** x = 4, y = 2

## Simultaneous equations: substitution

Use this when one equation already says "y = ...".

**Problem:** Solve y = 2x - 1 and 3x + y = 14.

1. Replace y in the second equation with (2x - 1): 3x + (2x - 1) = 14.
2. Simplify: 5x - 1 = 14.
3. Add 1: 5x = 15. Divide by 5: x = 3.
4. Find y: y = 2(3) - 1 = 5.

**Answer:** x = 3, y = 5

## Changing the subject

Use the same steps as solving an equation. You are getting a letter on its own instead of a number.

**Problem:** Make a the subject of v = u + at.

1. Subtract u from both sides: v - u = at.
2. Divide both sides by t: (v - u)/t = a.

**Answer:** a = (v - u)/t

### Real-life example: temperature

**Problem:** F = 1.8C + 32 changes Celsius to Fahrenheit. Make C the subject. Then change 95°F to Celsius.

1. Subtract 32 from both sides: F - 32 = 1.8C.
2. Divide both sides by 1.8: C = (F - 32)/1.8.
3. Put in F = 95: C = (95 - 32)/1.8 = 63/1.8 = 35.

**Answer:** C = (F - 32)/1.8, and 95°F = 35°C

## Extended and O Level: equations with fractions

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

Multiply both sides by the denominator (or by all the denominators) to get rid of the fractions.

**Problem:** Solve x/(2x + 1) = 4.

1. Multiply both sides by (2x + 1): x = 4(2x + 1).
2. Expand: x = 8x + 4.
3. Subtract 8x: -7x = 4.
4. Divide by -7: x = -4/7.

**Answer:** x = -4/7

**Problem:** Solve (x + 2)/3 + (x - 1)/2 = 4.

1. The denominators are 3 and 2. Multiply every term by 6.
2. 6 × (x + 2)/3 = 2(x + 2). 6 × (x - 1)/2 = 3(x - 1). 6 × 4 = 24.
3. So 2(x + 2) + 3(x - 1) = 24.
4. Expand: 2x + 4 + 3x - 3 = 24.
5. Simplify: 5x + 1 = 24. So 5x = 23.

**Answer:** x = 4.6

## Extended and O Level: quadratic equations

A quadratic usually has **two** answers. First make one side equal to 0.

### Method 1: factorising

If two things multiply to give 0, one of them must be 0.

**Problem:** Solve x² - 5x - 14 = 0.

1. Find two numbers that multiply to -14 and add to -5: -7 and 2.
2. Factorise: (x - 7)(x + 2) = 0.
3. Either x - 7 = 0, so x = 7. Or x + 2 = 0, so x = -2.

**Answer:** x = 7 or x = -2

### Real-life example: a garden

**Problem:** A rectangular garden is 3 m longer than it is wide. Its area is 40 m². Find its width and length.

1. Let the width = x. Length = x + 3.
2. Area: x(x + 3) = 40.
3. Expand and make one side 0: x² + 3x - 40 = 0.
4. Multiply to -40 and add to 3: 8 and -5. So (x + 8)(x - 5) = 0.
5. x = -8 or x = 5. A length cannot be negative, so x = 5.
6. Length = 5 + 3 = 8.

**Answer:** Width 5 m, length 8 m

> Always check if both answers make sense in real life. Reject a negative length or a negative time.

### Real-life example: throwing a ball

**Problem:** A ball is thrown upwards. Its height after t seconds is h = 20t - 5t² metres. When is the ball 15 m high?

1. 20t - 5t² = 15.
2. Move everything to one side: 5t² - 20t + 15 = 0.
3. Divide every term by 5: t² - 4t + 3 = 0.
4. Multiply to 3 and add to -4: -1 and -3. So (t - 1)(t - 3) = 0.
5. t = 1 or t = 3.

**Answer:** After 1 second (going up) and after 3 seconds (coming down). Both answers make sense here.

### Method 2: the quadratic formula

Use this when the quadratic does not factorise. The formula is given in the exam.

> For ax² + bx + c = 0: **x = (-b ± √(b² - 4ac)) / 2a**

**Problem:** Solve 2x² + 3x - 7 = 0. Give your answers to 2 decimal places.

1. Write down a = 2, b = 3, c = -7.
2. b² - 4ac = 3² - 4(2)(-7) = 9 + 56 = 65.
3. x = (-3 ± √65)/(2 × 2) = (-3 ± √65)/4.
4. √65 = 8.0623 (to 4 d.p.).
5. x = (-3 + 8.0623)/4 = 1.2656, or x = (-3 - 8.0623)/4 = -2.7656.

**Answer:** x = 1.27 or x = -2.77

> Put brackets round negative numbers. -4(2)(-7) is +56. This is where most mistakes happen.

### Method 3: completing the square

**Problem:** Solve x² + 6x + 2 = 0. Give your answer in surd form.

1. Complete the square (see topic 2.2): x² + 6x + 2 = (x + 3)² - 7.
2. So (x + 3)² - 7 = 0, which gives (x + 3)² = 7.
3. Square root both sides. Remember ±: x + 3 = ±√7.
4. Subtract 3: x = -3 ± √7.

**Answer:** x = -3 + √7 or x = -3 - √7

## Extended and O Level: one linear and one non-linear equation

Use substitution. You will get a quadratic.

**Problem:** Solve y = x + 1 and x² + y² = 13.

1. Replace y with (x + 1): x² + (x + 1)² = 13.
2. Expand: x² + x² + 2x + 1 = 13.
3. Simplify and make one side 0: 2x² + 2x - 12 = 0.
4. Divide by 2: x² + x - 6 = 0. So (x + 3)(x - 2) = 0.
5. x = -3 or x = 2.
6. Find y using y = x + 1. When x = -3, y = -2. When x = 2, y = 3.

**Answer:** x = 2, y = 3 or x = -3, y = -2

> Give your answers in pairs. The line crosses the circle at two points: (2, 3) and (-3, -2).

## Extended and O Level: harder changes of subject

### The subject appears twice

Get all the terms with the subject on one side, then factorise.

**Problem:** Make x the subject of ax + 3 = bx + 7.

1. Get the x terms on the left: ax - bx = 7 - 3.
2. Simplify: ax - bx = 4.
3. Factorise: x(a - b) = 4.
4. Divide by (a - b).

**Answer:** x = 4/(a - b)

### The subject has a power or a root

Undo the power with a root, and undo a root with a power.

**Problem:** Make r the subject of A = πr².

1. Divide by π: A/π = r².
2. Square root both sides: r = √(A/π).

**Answer:** r = √(A/π)

### Real-life example: a pendulum clock

**Problem:** The time for one swing of a pendulum is T = 2π√(l/g). Make l the subject.

1. Divide both sides by 2π: T/(2π) = √(l/g).
2. Square both sides: T²/(4π²) = l/g.
3. Multiply both sides by g.

**Answer:** l = gT²/(4π²)

## Common mistakes

- Doing something to one side only.
- Getting the sign wrong when you move a term: 5 = 5x + 21 gives 5x = 5 - 21 = -16, not 26.
- Giving only one answer to a quadratic.
- Dividing a quadratic by x. You lose the answer x = 0.

## Exam tips

- Check every answer by putting it back into the original equation.
- In word problems, say what your letter stands for and give the answer with units.
- If the question asks for 2 decimal places or surd form, the quadratic probably does not factorise. Use the formula or complete the square.`,
  "2.6": `## What you need to know

- What the inequality signs mean.
- How to show an inequality on a **number line**, and read one.
- How to list the whole numbers that fit an inequality.
- Extended and O Level: how to **solve** inequalities, and how to show inequalities in two letters as a **region** on a graph.

## Key words

| Sign | Meaning | Example |
|---|---|---|
| < | Less than | x < 4: x is smaller than 4 |
| > | Greater than | x > 2: x is bigger than 2 |
| ⩽ | Less than or equal to | x ⩽ 5: x is 5 or smaller |
| ⩾ | Greater than or equal to | x ⩾ -1: x is -1 or bigger |

| Word | Meaning |
|---|---|
| Inequality | A statement that one thing is bigger or smaller than another |
| Integer | A whole number: ..., -2, -1, 0, 1, 2, ... |
| Region | An area on a graph where all the points fit the inequalities |

> **Memory trick:** the sign is a mouth that eats the bigger number. In 3 < 7, the open side faces the 7.

## Inequalities in real life

| Situation | Inequality |
|---|---|
| You must be at least 120 cm tall to go on a ride | h ⩾ 120 |
| A lift can carry less than 8 people | p < 8 |
| Speed limit 80 km/h | s ⩽ 80 |
| Children aged 5 to 11 pay half price | 5 ⩽ a ⩽ 11 |

## Number lines

- **Open circle** ○ for < or >. The number is **not** included.
- **Closed circle** ● for ⩽ or ⩾. The number **is** included.

![Number lines for x > 2 and for -3 ⩽ x < 1](/images/maths/2-6-number-lines.svg)

**Problem:** Write down the inequality shown by the second number line.

1. The closed circle is at -3, so -3 is included: -3 ⩽ x.
2. The open circle is at 1, so 1 is not included: x < 1.
3. Join them together.

**Answer:** -3 ⩽ x < 1

## Listing integers

**Problem:** List the integers n such that -3 ⩽ n < 1.

1. -3 is included (⩽). Start at -3.
2. 1 is not included (<). Stop before 1.
3. List them: -3, -2, -1, 0.

**Answer:** -3, -2, -1, 0

> Do not forget 0. It is an integer.

## Extended and O Level: solving inequalities

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

Solve them just like equations, with **one extra rule**:

> If you **multiply or divide by a negative number**, you must **turn the sign round**.

Why? 2 < 5 is true. Multiply both sides by -1: -2 and -5. But -2 is bigger than -5, so now -2 > -5.

**Problem:** Solve 3x < 2x + 4.

1. Subtract 2x from both sides: x < 4.

**Answer:** x < 4

### Real-life example: a lift

**Problem:** A lift can carry at most 600 kg. Each person weighs about 75 kg. How many people can go in the lift?

1. Let p = number of people. 75p ⩽ 600.
2. Divide both sides by 75: p ⩽ 8.

**Answer:** At most 8 people

### Real-life example: phone credit

**Problem:** Noor has $25 of credit. Each minute of calls costs $0.20. She has already used $5. How many more minutes can she talk?

1. Let m = minutes. 5 + 0.2m ⩽ 25.
2. Subtract 5: 0.2m ⩽ 20.
3. Divide by 0.2: m ⩽ 100.

**Answer:** Up to 100 minutes

### Dividing by a negative

**Problem:** Solve 7 - 2x > 1.

1. Subtract 7 from both sides: -2x > -6.
2. Divide both sides by -2. This is negative, so turn the sign round: x < 3.

**Answer:** x < 3

> Check with a number. Try x = 0: 7 - 0 = 7, and 7 > 1 is true. 0 < 3, so it agrees.

### Double inequalities

Do the same thing to **all three parts**.

**Problem:** Solve -3 ⩽ 3x - 2 < 7 and list the integer values of x.

1. Add 2 to all three parts: -1 ⩽ 3x < 9.
2. Divide all three parts by 3: -1/3 ⩽ x < 3.
3. Integers from -1/3 up to (but not including) 3: 0, 1, 2.

**Answer:** -1/3 ⩽ x < 3. Integers: 0, 1, 2

## Extended and O Level: regions on a graph

1. Draw each line as if the sign were =.
2. Use a **solid line** for ⩽ or ⩾ (points on the line are included).
3. Use a **broken (dashed) line** for < or > (points on the line are not included).
4. **Shade the side you do not want**, unless the question tells you otherwise. The region left unshaded is the answer.

To decide which side, test a point that is not on the line, like (0, 0).

![Region R defined by y ⩾ 1, x + y ⩽ 6 and y < x](/images/maths/2-6-region.svg)

**Problem:** The unshaded region R in the diagram is defined by three inequalities. Write them down.

1. The horizontal line is y = 1. It is solid and R is above it: **y ⩾ 1**.
2. The line going down is x + y = 6. It is solid. Test (0, 0): 0 + 0 = 0, which is less than 6. (0, 0) is on the same side as R, so: **x + y ⩽ 6**.
3. The dashed line is y = x. R is below it, and the line is dashed: **y < x**.

**Answer:** y ⩾ 1, x + y ⩽ 6, y < x

**Problem:** List the points with integer coordinates in region R.

1. Points on the solid lines count. Points on the dashed line y = x do not.
2. y = 1: x can be 2, 3, 4, 5 (x = 1 is on the dashed line). Points (2, 1), (3, 1), (4, 1), (5, 1).
3. y = 2: x must be more than 2 and x + 2 ⩽ 6, so x = 3 or 4. Points (3, 2), (4, 2).
4. y = 3: x must be more than 3 and x ⩽ 3. No points.

**Answer:** (2, 1), (3, 1), (4, 1), (5, 1), (3, 2), (4, 2)

## Common mistakes

- Using a closed circle for < or >.
- Forgetting to turn the sign round when dividing by a negative.
- Writing the answer as x = 4 instead of x < 4.
- Shading the region you want when the question says shade the region you do not want.

## Exam tips

- Read the question: does it want integers, or all values?
- Test a number in your final answer to check the sign faces the right way.`,
  "2.7": `## What you need to know

- How to continue a sequence and describe its **term-to-term rule**.
- Special sequences: square, cube and triangle numbers.
- How to find and use the **nth term** of linear sequences, and simple quadratic and cubic ones like n² + 1 and n³.
- Extended and O Level: the nth term of any quadratic sequence, **exponential** sequences like 3, 6, 12, 24, and simple mixtures of these.

## Key words

| Word | Meaning |
|---|---|
| Sequence | A list of numbers that follows a rule |
| Term | One number in the sequence |
| Term-to-term rule | How to get from one term to the next, like "add 3" |
| nth term | A rule that gives any term from its position n |
| Difference | What you add to get from one term to the next |
| Linear sequence | The difference is always the same |

## Term-to-term rules

**Problem:** Find the next two terms and the rule for each sequence.

1. 7, 11, 15, 19, ... Add 4 each time. Next: **23, 27**.
2. 40, 34, 28, 22, ... Subtract 6 each time. Next: **16, 10**.
3. 2, 6, 18, 54, ... Multiply by 3 each time. Next: **162, 486**.
4. 1, 3, 6, 10, 15, ... Add 2, then 3, then 4, then 5. Next: add 6 and 7, so **21, 28**.

## Special sequences to learn

| Name | Sequence | nth term |
|---|---|---|
| Square numbers | 1, 4, 9, 16, 25, ... | n² |
| Cube numbers | 1, 8, 27, 64, 125, ... | n³ |
| Triangle numbers | 1, 3, 6, 10, 15, ... | n(n + 1)/2 |

## The nth term of a linear sequence

> nth term = **(difference) × n + (zero term)**

The zero term is the number that would come **before** the first term.

**Problem:** Find the nth term of 5, 8, 11, 14, ...

1. The difference is 3. So the rule starts **3n**.
2. Go back one step from the first term: 5 - 3 = **2**. This is the zero term.
3. Put them together: 3n + 2.

**Answer:** 3n + 2

> Check: when n = 1, 3(1) + 2 = 5. When n = 2, 3(2) + 2 = 8. Correct.

### Using the nth term

**Problem:** For the sequence 3n + 2, find the 50th term. Is 100 in the sequence?

1. 50th term: put n = 50. 3(50) + 2 = 152.
2. For 100: solve 3n + 2 = 100. Subtract 2: 3n = 98. Divide by 3: n = 32.67.
3. n must be a whole number, so 100 is not a term.

**Answer:** 152. No, 100 is not in the sequence.

### Real-life example: matchstick squares

A row of 1 square needs 4 matchsticks. A row of 2 squares needs 7. A row of 3 squares needs 10.

**Problem:** How many matchsticks are needed for a row of 20 squares?

1. Sequence: 4, 7, 10, ... The difference is 3, so the rule starts 3n.
2. Zero term: 4 - 3 = 1. nth term = 3n + 1.
3. Put n = 20: 3(20) + 1 = 61.

**Answer:** 61 matchsticks

### Real-life example: seats in a hall

**Problem:** Row 1 of a hall has 20 seats. Each row has 2 more seats than the row in front. How many seats are in row 15?

1. Sequence: 20, 22, 24, ... Difference 2, so the rule starts 2n.
2. Zero term: 20 - 2 = 18. nth term = 2n + 18.
3. Put n = 15: 2(15) + 18 = 48.

**Answer:** 48 seats

### A decreasing sequence

**Problem:** Find the nth term of 30, 26, 22, 18, ...

1. The difference is -4. So the rule starts **-4n**.
2. Zero term: 30 + 4 = 34.
3. nth term: -4n + 34, which is the same as 34 - 4n.

**Answer:** 34 - 4n

## Simple quadratic and cubic sequences

Compare the sequence with the square numbers or cube numbers.

**Problem:** Find the nth term of 2, 5, 10, 17, ...

| n | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Sequence | 2 | 5 | 10 | 17 |
| n² | 1 | 4 | 9 | 16 |

1. Write the square numbers under the sequence, as in the table.
2. Each term is 1 more than n².

**Answer:** n² + 1

**Problem:** Find the nth term of 2, 9, 28, 65, ...

1. The cube numbers are 1, 8, 27, 64.
2. Each term is 1 more than n³.

**Answer:** n³ + 1

## Extended and O Level: any quadratic sequence

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

If the **second differences** are the same, the sequence is quadratic: an² + bn + c.

> **a = second difference ÷ 2**

**Problem:** Find the nth term of 5, 12, 23, 38, 57, ...

| n | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Sequence | 5 | 12 | 23 | 38 | 57 |
| 2n² | 2 | 8 | 18 | 32 | 50 |
| What is left | 3 | 4 | 5 | 6 | 7 |

1. First differences: 7, 11, 15, 19.
2. Second differences: 4, 4, 4. So a = 4 ÷ 2 = 2. The rule starts **2n²**.
3. Take 2n² away from each term, as in the table.
4. What is left (3, 4, 5, 6, 7) is linear: difference 1, zero term 2. So n + 2.
5. Add the parts together.

**Answer:** 2n² + n + 2

### Real-life example: handshakes

When 2 people meet, there is 1 handshake. With 3 people there are 3. With 4 people there are 6. With 5 people there are 10.

**Problem:** Everyone in a group of n people shakes hands once with everyone else. Find a formula. How many handshakes for 30 people?

1. Start the sequence at n = 1 (one person, no handshakes): 0, 1, 3, 6, 10.
2. First differences: 1, 2, 3, 4. Second differences: 1, 1, 1. So a = 1/2. The rule starts n²/2.
3. Take n²/2 away from each term: 0 - 0.5 = -0.5, 1 - 2 = -1, 3 - 4.5 = -1.5, 6 - 8 = -2.
4. What is left (-0.5, -1, -1.5, -2) is linear: -n/2.
5. Formula: n²/2 - n/2 = n(n - 1)/2.
6. For 30 people: 30 × 29 ÷ 2 = 435.

**Answer:** n(n - 1)/2. For 30 people: 435 handshakes.

## Extended and O Level: exponential sequences

Here you **multiply** by the same number each time.

> nth term = **first term × (multiplier)ⁿ⁻¹**

**Problem:** Find the nth term of 3, 6, 12, 24, ...

1. Multiply by 2 each time.
2. First term 3.

**Answer:** 3 × 2ⁿ⁻¹

### Real-life example: a message spreads

**Problem:** On day 1, one person sends a message. Each day, every person who got it the day before sends it to 3 new people. How many new people get it on day 8?

1. Day 1: 1. Day 2: 3. Day 3: 9. Day 4: 27. Multiply by 3 each time.
2. nth term = 1 × 3ⁿ⁻¹ = 3ⁿ⁻¹.
3. Day 8: 3⁷ = 2187.

**Answer:** 2187 people

## Extended and O Level: mixtures

**Problem:** Find the nth term of 3, 6, 11, 20, 37, ...

1. The differences (3, 5, 9, 17) are not the same, and the second differences (2, 4, 8) are not the same either. They are doubling, which suggests powers of 2.
2. Compare with 2ⁿ: 2, 4, 8, 16, 32.
3. Sequence minus 2ⁿ: 1, 2, 3, 4, 5. This is n.

**Answer:** 2ⁿ + n

> You may see the nth term written as Tₙ. For example, Tₙ = 3n + 2 means the same as "nth term = 3n + 2", and T₅ is the 5th term.

## Common mistakes

- Writing n + 3 instead of 3n + 2 for 5, 8, 11. The difference goes **in front of n**.
- For a decreasing sequence, forgetting the minus sign in front of n.
- Saying 100 is a term when n is not a whole number.

## Exam tips

- Always check your nth term with the first two terms.
- If the first differences are not the same, find the second differences.`,
  "2.8": `## What you need to know

> **Extended and O Level only.** This topic is not in IGCSE Core.

- What **direct** and **inverse proportion** mean.
- How to write a proportion as a formula with a constant **k**.
- How to use the formula to find unknown values.
- Proportion to x, x², x³, √x and ∛x.
- The symbol **∝** means "is proportional to".

## Key words

| Word | Meaning |
|---|---|
| Direct proportion | When one goes up, the other goes up at the same rate. Double one and the other doubles |
| Inverse proportion | When one goes up, the other goes down. Double one and the other halves |
| Constant of proportionality (k) | The fixed number that links the two quantities |
| ∝ | "Is proportional to" |

## The four steps

Every proportion question uses the same steps.

1. Write the proportion with ∝.
2. Change ∝ to "= k ×".
3. Use the values you are given to find k.
4. Write the formula with the value of k, then use it.

## Direct proportion

| In words | With ∝ | Formula |
|---|---|---|
| y is proportional to x | y ∝ x | y = kx |
| y is proportional to the square of x | y ∝ x² | y = kx² |
| y is proportional to the cube of x | y ∝ x³ | y = kx³ |
| y is proportional to the square root of x | y ∝ √x | y = k√x |
| y is proportional to the cube root of x | y ∝ ∛x | y = k∛x |

### Real-life example: buying petrol

**Problem:** The cost, C dollars, of petrol is proportional to the number of litres, L. 40 litres cost $92. How much do 55 litres cost?

1. C ∝ L.
2. C = kL.
3. Put in C = 92 and L = 40: 92 = 40k. Divide by 40: k = 2.3.
4. Formula: C = 2.3L. Put in L = 55: C = 2.3 × 55 = 126.5.

**Answer:** $126.50

### Real-life example: stopping distance

**Problem:** The stopping distance, d metres, of a car is proportional to the square of its speed, v km/h. At 40 km/h the stopping distance is 16 m. Find the stopping distance at 100 km/h.

1. d ∝ v².
2. d = kv².
3. Put in d = 16 and v = 40: 16 = k × 40² = 1600k. So k = 16 ÷ 1600 = 0.01.
4. Formula: d = 0.01v². Put in v = 100: d = 0.01 × 100² = 0.01 × 10 000 = 100.

**Answer:** 100 m

> Notice: the speed is 2.5 times bigger, but the stopping distance is 2.5² = 6.25 times bigger. That is why driving fast is so dangerous.

### Real-life example: falling objects

**Problem:** The time, t seconds, for a stone to fall is proportional to the square root of the height, h metres. It takes 1.8 seconds to fall 16 m. How long does it take to fall 64 m?

1. t ∝ √h.
2. t = k√h.
3. Put in t = 1.8 and h = 16: 1.8 = k × √16 = 4k. So k = 0.45.
4. Formula: t = 0.45√h. Put in h = 64: t = 0.45 × √64 = 0.45 × 8 = 3.6.

**Answer:** 3.6 seconds

### Real-life example: metal balls

**Problem:** The mass, m grams, of a metal ball is proportional to the cube of its radius, r cm. A ball with radius 2 cm has a mass of 40 g. Find the mass of a ball with radius 3 cm.

1. m ∝ r³.
2. m = kr³.
3. Put in m = 40 and r = 2: 40 = k × 2³ = 8k. So k = 5.
4. Formula: m = 5r³. Put in r = 3: m = 5 × 27 = 135.

**Answer:** 135 g

## Inverse proportion

| In words | With ∝ | Formula |
|---|---|---|
| y is inversely proportional to x | y ∝ 1/x | y = k/x |
| y is inversely proportional to x² | y ∝ 1/x² | y = k/x² |
| y is inversely proportional to √x | y ∝ 1/√x | y = k/√x |

### Real-life example: building a wall

**Problem:** The time, t days, to build a wall is inversely proportional to the number of workers, w. 6 workers take 10 days. How long will 15 workers take?

1. t ∝ 1/w.
2. t = k/w.
3. Put in t = 10 and w = 6: 10 = k/6. Multiply by 6: k = 60.
4. Formula: t = 60/w. Put in w = 15: t = 60 ÷ 15 = 4.

**Answer:** 4 days

### Real-life example: brightness of a light

**Problem:** The brightness, B, of a lamp is inversely proportional to the square of the distance, d metres, from the lamp. At 2 m the brightness is 50. Find the brightness at 5 m.

1. B ∝ 1/d².
2. B = k/d².
3. Put in B = 50 and d = 2: 50 = k/4. So k = 200.
4. Formula: B = 200/d². Put in d = 5: B = 200 ÷ 25 = 8.

**Answer:** 8

### Finding the other quantity

**Problem:** Using B = 200/d², how far from the lamp is the brightness 2?

1. 2 = 200/d².
2. Multiply both sides by d²: 2d² = 200.
3. Divide by 2: d² = 100.
4. Square root: d = 10 (a distance cannot be negative).

**Answer:** 10 m

## What happens when one quantity changes

**Problem:** y is proportional to x². What happens to y when x is doubled?

1. y = kx².
2. Replace x with 2x: y = k(2x)² = 4kx².
3. So the new y is 4 times the old y.

**Answer:** y is multiplied by 4.

**Problem:** y is inversely proportional to x. What happens to y when x is multiplied by 3?

1. y = k/x. Replace x with 3x: y = k/(3x).
2. This is 1/3 of the old y.

**Answer:** y is divided by 3.

## Common mistakes

- Using y = kx when the question says "the square of x". Read every word.
- Forgetting to square or cube x when you find k.
- Using direct proportion when the question says "inversely".

## Exam tips

- Always write the formula with the value of k. The question often has two parts, and you need the formula for both.
- Check your answer makes sense: inverse proportion means more of one gives less of the other.`,
  "2.9": `## What you need to know

- How to read and draw **distance-time graphs** (travel graphs).
- How to read and draw **conversion graphs**.
- The **gradient** (steepness) of a straight line shows a **rate of change**, like speed.
- Extended and O Level: **speed-time graphs**, acceleration, the **area under** a speed-time graph, and estimating the gradient of a curve with a **tangent**.

## Key words

| Word | Meaning |
|---|---|
| Gradient | How steep a line is: up ÷ across |
| Rate of change | How fast one thing changes compared with another |
| Distance-time graph | Shows how far something has gone at each time |
| Speed-time graph | Shows how fast something is going at each time |
| Acceleration | How quickly speed increases |
| Deceleration | How quickly speed decreases |
| Tangent | A straight line that just touches a curve at one point |

## Gradient

> **Gradient = change up ÷ change across**

On a distance-time graph, **gradient = distance ÷ time = speed**.

- Steeper line: faster.
- Flat (horizontal) line: stopped.
- Line going down: coming back towards the start.

## Distance-time graphs

![Distance-time graph of Hamza's bike ride](/images/maths/2-9-travel-graph.svg)

### Real-life example: a bike ride

Hamza cycles from home to his friend's house, stays there, then cycles home. The graph shows his journey.

**Problem:** (a) How long did he stay at his friend's house? (b) Find his speed on the way there. (c) Find his speed on the way home.

1. (a) The flat part goes from 09:45 to 10:15. That is **30 minutes**.
2. (b) Going: 12 km in 45 minutes. 45 minutes = 0.75 hours. Speed = 12 ÷ 0.75 = **16 km/h**.
3. (c) Coming home: 12 km from 10:15 to 11:15, which is 1 hour. Speed = 12 ÷ 1 = **12 km/h**.

**Answer:** (a) 30 minutes (b) 16 km/h (c) 12 km/h

> Always change minutes to hours before you work out km/h. Divide the minutes by 60.

### Average speed for the whole journey

**Problem:** Find Hamza's average speed for the whole trip, from 09:00 to 11:15.

1. Total distance = 12 + 12 = 24 km.
2. Total time = 2 hours 15 minutes = 2.25 hours. Include the time he stopped.
3. Average speed = 24 ÷ 2.25 = 10.67 (to 2 d.p.).

**Answer:** 10.7 km/h (to 3 significant figures)

## Conversion graphs

A conversion graph changes one unit into another. It is a straight line, usually through (0, 0).

### Real-life example: Saudi riyals and US dollars

$1 = 3.75 riyals.

**Problem:** Make a table of values to draw a conversion graph from $0 to $100. Use it to change $60 to riyals, and 300 riyals to dollars.

| Dollars | 0 | 20 | 40 | 100 |
|---|---|---|---|---|
| Riyals | 0 | 75 | 150 | 375 |

1. Work out the table: multiply each dollar amount by 3.75.
2. Plot the points and join them with a straight line.
3. Go up from $60 to the line, then across: **225 riyals**. (Check: 60 × 3.75 = 225.)
4. Go across from 300 riyals to the line, then down: **$80**. (Check: 300 ÷ 3.75 = 80.)

**Answer:** $60 = 225 riyals, 300 riyals = $80

> The gradient of this line is 375 ÷ 100 = 3.75. That is the exchange rate: riyals per dollar.

## Extended and O Level: speed-time graphs

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

On a speed-time graph:

> **Gradient = acceleration**

> **Area under the graph = distance travelled**

- Line going up: speeding up (accelerating).
- Flat line: steady speed.
- Line going down: slowing down (decelerating).

![Speed-time graph of a car between two traffic lights](/images/maths/2-9-speed-time.svg)

### Real-life example: a car between traffic lights

A car starts at a traffic light, speeds up to 20 m/s in 10 seconds, travels at 20 m/s for 30 seconds, then slows down and stops in 15 seconds.

**Problem:** (a) Find the acceleration for the first 10 seconds. (b) Find the deceleration at the end. (c) Find the total distance travelled.

1. (a) Gradient = 20 ÷ 10 = **2 m/s²**.
2. (b) The speed falls by 20 m/s in 15 s. Deceleration = 20 ÷ 15 = **1.33 m/s²** (to 3 s.f.).
3. (c) Split the area under the graph into three shapes. Triangle A: ½ × 10 × 20 = 100 m.
4. Rectangle B: 30 × 20 = 600 m.
5. Triangle C: ½ × 15 × 20 = 150 m.
6. Total = 100 + 600 + 150 = 850 m.

**Answer:** (a) 2 m/s² (b) 1.33 m/s² (c) 850 m

> You can also find the area as one trapezium: ½ × (30 + 55) × 20 = 850. The parallel sides are the top (30 s) and the bottom (55 s).

> Units of acceleration: m/s² means "metres per second, every second". An acceleration of 2 m/s² means the speed goes up by 2 m/s every second.

## Extended and O Level: gradient of a curve

When a graph is curved, the gradient changes. To estimate the gradient at one point:

1. Draw a **tangent**: a straight line that just touches the curve at that point.
2. Pick two points on the tangent that are far apart.
3. Gradient = change up ÷ change across.

### Real-life example: a ball rolling down a slope

**Problem:** A distance-time graph for a rolling ball is a curve. A tangent is drawn at t = 3 seconds. It passes through (1, 2) and (5, 18). Estimate the speed of the ball at 3 seconds.

1. Change up: 18 - 2 = 16 m.
2. Change across: 5 - 1 = 4 s.
3. Gradient = 16 ÷ 4 = 4.

**Answer:** About 4 m/s

> Your answer is an **estimate**, because a hand-drawn tangent is never perfect. The exam accepts a range of answers.

## Common mistakes

- Forgetting to change minutes into hours.
- On a distance-time graph, thinking a flat line means moving at a steady speed. It means **stopped**.
- Mixing up the two graphs. On a speed-time graph a flat line means steady speed, not stopped.
- Using the wrong units: area of a speed-time graph in m/s × s gives metres.

## Exam tips

- Read the scales on both axes carefully. One small square is not always 1.
- For gradients, pick points where the line crosses grid corners. It makes reading easier.`,
  "2.10": `## What you need to know

- How to complete a **table of values** and draw a graph.
- The graphs of straight lines (y = ax + b), **quadratics** (y = ±x² + ax + b) and **reciprocals** (y = a/x).
- How to **solve equations using a graph**: read where the curve crosses the x-axis, or where it crosses a line.
- Extended and O Level: graphs of other powers of x (like x³ and 1/x²), sums of these, and **exponential** graphs like y = 800 × 0.8ˣ.

## Key words

| Word | Meaning |
|---|---|
| Table of values | A table of x values and the y values you work out from the equation |
| Quadratic graph | A U-shaped (or upside-down U) curve. It has x² in it |
| Reciprocal graph | A curve in two parts from y = a/x. It never touches the axes |
| Root | Where a graph crosses the x-axis. At a root, y = 0 |
| Line of symmetry | A line that cuts the curve into two mirror halves |
| Exponential graph | A curve that grows or shrinks by the same multiplier each step |

## Drawing a graph step by step

1. Complete the table of values. Use a calculator and brackets for negative numbers.
2. Plot each point with a small cross.
3. For a straight line, use a ruler. For a curve, join the points with **one smooth curve**. Do not join them with straight lines.
4. Do not draw the curve flat at the bottom. A quadratic has a rounded bottom.

## Quadratic graphs

**Problem:** Complete the table of values for y = x² - 2x - 3, for x from -2 to 4.

| x | -2 | -1 | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|---|---|
| y | 5 | 0 | -3 | -4 | -3 | 0 | 5 |

1. Example for x = -2: (-2)² - 2(-2) - 3 = 4 + 4 - 3 = 5.
2. Example for x = 1: 1² - 2(1) - 3 = 1 - 2 - 3 = -4.
3. Work out the others in the same way, then plot and join with a smooth curve.

![Graph of y = x² - 2x - 3 with the line y = 2](/images/maths/2-10-quadratic.svg)

### Reading the graph

**Problem:** Use the graph to solve x² - 2x - 3 = 0.

1. "= 0" means y = 0. That is the x-axis.
2. Read where the curve crosses the x-axis: x = -1 and x = 3.

**Answer:** x = -1 or x = 3

**Problem:** Use the graph to solve x² - 2x - 3 = 2.

1. Draw the line y = 2 across the graph.
2. Read the x values where the line crosses the curve: about x = -1.4 and x = 3.4.

**Answer:** x ≈ -1.4 or x ≈ 3.4

> These are estimates. The exact answers are 1 - √6 = -1.449... and 1 + √6 = 3.449...

### Using the graph to solve a different equation

**Problem:** Use the graph of y = x² - 2x - 3 to solve x² - 3x - 4 = 0. Find the line you need to draw.

1. Make the left side match the graph. x² - 3x - 4 = 0 can be written as x² - 2x - 3 - x - 1 = 0.
2. So x² - 2x - 3 = x + 1.
3. The left side is the graph. The right side is the line to draw: **y = x + 1**.
4. Draw y = x + 1 and read where it crosses the curve: x = -1 and x = 4.

**Answer:** Draw y = x + 1. Solutions x = -1 and x = 4.

### Line of symmetry and lowest point

The curve is symmetrical. The roots are -1 and 3, so the line of symmetry is halfway: x = (-1 + 3) ÷ 2 = **1**. The lowest point is at x = 1, where y = -4. So the lowest point is **(1, -4)**.

> If the x² term is **negative** (like y = -x² + 4), the curve is upside down: a hill with a highest point.

## Reciprocal graphs

### Real-life example: a road trip

**Problem:** A family drives 120 km. The time, t hours, depends on the average speed, v km/h: t = 120/v. Draw the graph for v from 20 to 120, and use it to find the speed needed to do the trip in 2.5 hours.

| v | 20 | 30 | 40 | 60 | 80 | 120 |
|---|---|---|---|---|---|---|
| t | 6 | 4 | 3 | 2 | 1.5 | 1 |

1. Work out each t: for example 120 ÷ 40 = 3.
2. Plot the points and join with a smooth curve.
3. Go across from t = 2.5 to the curve, then down to the v axis: about 48.

**Answer:** About 48 km/h (check: 120 ÷ 48 = 2.5)

![Graph of t = 120/v](/images/maths/2-10-reciprocal.svg)

> The faster you go, the less time it takes, but the curve never reaches 0. This is inverse proportion (topic 2.8).

The full graph of y = a/x has **two parts**, one on each side of the y-axis. You cannot put x = 0 into it, because you cannot divide by 0.

## Extended and O Level: other powers of x

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

You may be asked to draw graphs with terms like x³, 1/x, 1/x², √x and 1/√x, added together (up to three terms). The method is the same: table, plot, smooth curve.

**Problem:** Complete the table for y = x³ - 3x and use the graph to solve x³ - 3x = 1.

| x | -2 | -1.5 | -1 | -0.5 | 0 | 0.5 | 1 | 1.5 | 2 |
|---|---|---|---|---|---|---|---|---|---|
| y | -2 | 1.125 | 2 | 1.375 | 0 | -1.375 | -2 | -1.125 | 2 |

1. Example for x = -1.5: (-1.5)³ - 3(-1.5) = -3.375 + 4.5 = 1.125.
2. Plot and join with a smooth S-shaped curve.
3. Draw the line y = 1 and read where it crosses the curve.

**Answer:** x ≈ -1.5, x ≈ -0.3 and x ≈ 1.9

> A cubic can cross a line up to **three** times, so look for three answers.

## Extended and O Level: exponential graphs

These have x in the power, like y = 2ˣ or y = 800 × 0.8ˣ.

- If the number being powered is **more than 1**, the graph grows faster and faster (growth).
- If it is **between 0 and 1**, the graph falls and levels off (decay).

### Real-life example: value of a phone

**Problem:** A new phone costs $800. Its value falls by 20% each year, so after x years its value is y = 800 × 0.8ˣ dollars. Draw the graph for 0 to 5 years and find when the phone is worth half its price.

| x (years) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| y ($) | 800 | 640 | 512 | 410 | 328 | 262 |

1. Work out each value: for example 800 × 0.8² = 800 × 0.64 = 512. Round to the nearest dollar.
2. Plot and join with a smooth curve.
3. Half the price is $400. Go across from 400 to the curve, then down: about 3.1.

**Answer:** After about 3.1 years

![Graph of y = 800 × 0.8ˣ](/images/maths/2-10-exponential.svg)

## Common mistakes

- Getting the wrong sign when you square a negative number. (-3)² = 9, not -9.
- Joining the points with straight lines instead of a smooth curve.
- Joining the two parts of a reciprocal graph across x = 0.
- Reading the y value when the question asks for x.

## Exam tips

- Check your table: a quadratic table is symmetrical. If one value breaks the pattern, work it out again.
- When you solve with a graph, give answers to 1 decimal place, as accurately as you can read.`,
  "2.11": `## What you need to know

- How to recognise and **sketch** straight-line and quadratic graphs.
- A sketch shows the **shape** and the important points: where it crosses the axes (the **roots** and the y-intercept) and the line of symmetry.
- Extended and O Level: sketches of **cubic**, **reciprocal** and **exponential** graphs, **turning points** and **asymptotes**, and finding the turning point of a quadratic by completing the square.

A sketch is not an accurate drawing. You do not need graph paper or a table of values. You need the right shape and the right points labelled.

## Key words

| Word | Meaning |
|---|---|
| Sketch | A quick drawing that shows the shape and the key points |
| Root | Where the graph crosses the x-axis (y = 0) |
| y-intercept | Where the graph crosses the y-axis (x = 0) |
| Turning point | The lowest point (minimum) or highest point (maximum) of a curve |
| Asymptote | A line the graph gets closer and closer to but never touches |

## Shapes to recognise

![The shapes of the main graphs](/images/maths/2-11-curve-shapes.svg)

| Equation | Shape |
|---|---|
| y = ax + b | Straight line |
| y = x² + ... | U shape (a valley) |
| y = -x² + ... | Upside-down U (a hill) |
| y = x³ + ... | S shape: starts low on the left, ends high on the right |
| y = a/x | Two separate curves, never touching the axes |
| y = 2ˣ | Starts flat, then shoots up |

## Sketching a quadratic

1. Find the **y-intercept**: put x = 0.
2. Find the **roots**: put y = 0 and solve (usually by factorising).
3. Find the **line of symmetry**: halfway between the roots.
4. Draw the U shape (or upside-down U) through these points and label them.

**Problem:** Sketch y = x² - 6x + 5.

1. y-intercept: x = 0 gives y = 5. So the curve crosses the y-axis at (0, 5).
2. Roots: x² - 6x + 5 = 0. Factorise: (x - 1)(x - 5) = 0. So x = 1 or x = 5.
3. Line of symmetry: halfway between 1 and 5 is x = 3.
4. The x² is positive, so it is a U shape. Draw it through (0, 5), (1, 0) and (5, 0), symmetrical about x = 3.

**Answer:** A U-shaped curve crossing the y-axis at 5, crossing the x-axis at 1 and 5, with line of symmetry x = 3.

### Real-life example: an arch

**Problem:** The shape of an arch is y = 8x - x², where x and y are in metres and the ground is the x-axis. How wide is the arch at the bottom, and how high is it?

1. The x² is negative, so it is a hill shape.
2. Roots: 8x - x² = 0. Factorise: x(8 - x) = 0. So x = 0 or x = 8.
3. The arch is 8 - 0 = 8 m wide.
4. Line of symmetry: halfway, at x = 4. The top of the arch is here.
5. Height: put x = 4: y = 8(4) - 4² = 32 - 16 = 16.

**Answer:** 8 m wide and 16 m high

## Extended and O Level: turning points by completing the square

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

If y = (x + p)² + q, the turning point is **(-p, q)**.

Why? (x + p)² can never be negative. Its smallest value is 0, when x = -p. Then y = q.

**Problem:** Find the turning point of y = x² + 4x + 7. Does the curve cross the x-axis?

1. Half of 4 is 2. (x + 2)² = x² + 4x + 4.
2. We need +7, not +4, so add 3: y = (x + 2)² + 3.
3. Turning point: x = -2, y = 3. So (-2, 3). It is a minimum, because the x² is positive.
4. The lowest point is at y = 3, which is above the x-axis.

**Answer:** Minimum point (-2, 3). The curve does not cross the x-axis, so x² + 4x + 7 = 0 has no solutions.

## Extended and O Level: cubic graphs

**Problem:** Sketch y = x(x - 2)(x + 3).

1. Roots: each bracket = 0. x = 0, x = 2 or x = -3.
2. y-intercept: x = 0 gives y = 0. It passes through the origin.
3. Multiplying the x terms gives x³, which is positive. So it starts low on the left and ends high on the right.
4. Draw the S shape through (-3, 0), (0, 0) and (2, 0). It goes up through -3, turns, comes down through 0, turns again, and goes up through 2.

**Answer:** An S-shaped curve through (-3, 0), (0, 0) and (2, 0), with one maximum and one minimum.

> If the x³ term is negative, the shape is flipped: it starts high on the left and ends low on the right.

## Extended and O Level: asymptotes

### Reciprocal graphs

y = 1/x has two asymptotes: the x-axis (y = 0) and the y-axis (x = 0).

**Problem:** Write down the asymptotes of y = 1/x + 2.

1. You still cannot divide by 0, so x = 0 is an asymptote.
2. When x is very big, 1/x is almost 0, so y is almost 2. So y = 2 is an asymptote.

**Answer:** x = 0 and y = 2

### Exponential graphs

y = 2ˣ passes through (0, 1), because 2⁰ = 1. On the left it gets closer and closer to the x-axis but never touches it. So y = 0 is an asymptote.

**Problem:** Sketch y = 2ˣ + 1. Give the y-intercept and the asymptote.

1. y-intercept: x = 0 gives 2⁰ + 1 = 1 + 1 = 2.
2. The +1 moves the whole graph up by 1, so the asymptote moves from y = 0 to y = 1.
3. Draw the growth shape through (0, 2), getting closer to the line y = 1 on the left.

**Answer:** y-intercept (0, 2). Asymptote y = 1.

### Real-life example: a cup of tea

**Problem:** The temperature of a cup of tea after t minutes is T = 70 × 0.9ᵗ + 20 (in °C). What was its starting temperature, and what temperature does it cool towards?

1. Start: t = 0 gives 70 × 0.9⁰ + 20 = 70 × 1 + 20 = 90.
2. As t gets bigger, 0.9ᵗ gets closer to 0. So T gets closer to 0 + 20 = 20.
3. The asymptote is T = 20. This is the room temperature.

**Answer:** It starts at 90°C and cools towards 20°C, but never goes below it.

## Common mistakes

- Drawing a quadratic with a pointed V at the bottom instead of a smooth curve.
- Not labelling the points where the graph crosses the axes.
- Getting the sign of the turning point wrong: (x + 2)² + 3 has its turning point at x = **-2**, not 2.
- Letting a curve touch or cross its asymptote.

## Exam tips

- A sketch should be neat, but it does not need to be to scale. The labels earn the marks.
- Always check the sign of the highest power. It tells you which way the curve faces.`,
  "2.12": `## What you need to know

> **IGCSE Extended only.** This topic is not in O Level 4024 or IGCSE Core.

- The gradient of a curve changes from point to point. You can estimate it by drawing a **tangent** (see topic 2.9).
- **Differentiation** gives a formula for the gradient at any point. It is written **dy/dx**.
- How to differentiate axⁿ, and sums of up to three terms like x³ - 6x² + 5x.
- How to find the gradient at a point, and the **turning points** (stationary points) of a curve.
- How to tell if a turning point is a **maximum** or a **minimum**.

## Key words

| Word | Meaning |
|---|---|
| Differentiate | Find the formula for the gradient |
| dy/dx | The gradient function. Say "d y by d x" |
| Gradient function | A formula that gives the gradient for any value of x |
| Stationary point | A point where the gradient is 0. The curve is flat there for a moment |
| Maximum | A stationary point at the top of a hill |
| Minimum | A stationary point at the bottom of a valley |

## The rule

> If **y = axⁿ**, then **dy/dx = naxⁿ⁻¹**

In words: **multiply by the power, then take 1 off the power.**

| y | dy/dx | How |
|---|---|---|
| x³ | 3x² | Power 3 comes down, new power 2 |
| 5x² | 10x | 2 × 5 = 10, new power 1 |
| 3x⁴ | 12x³ | 4 × 3 = 12, new power 3 |
| 7x | 7 | 7x = 7x¹. 1 × 7 = 7, new power 0, and x⁰ = 1 |
| 9 | 0 | A number on its own has gradient 0 (a flat line) |

> Why is the answer 0 for a number? y = 9 is a horizontal line. A horizontal line has gradient 0.

## Differentiating sums

Differentiate each term on its own.

**Problem:** Find dy/dx when y = x³ - 6x² + 5x - 2.

1. x³ gives 3x².
2. -6x² gives 2 × (-6)x = -12x.
3. 5x gives 5.
4. -2 gives 0.

**Answer:** dy/dx = 3x² - 12x + 5

## Gradient at a point

Find dy/dx, then put in the value of x.

**Problem:** Find the gradient of y = x³ - 6x² + 5x - 2 at the point where x = 2.

1. dy/dx = 3x² - 12x + 5.
2. Put in x = 2: 3(2)² - 12(2) + 5 = 12 - 24 + 5 = -7.

**Answer:** The gradient is -7 (the curve is going down at that point).

## Stationary points

At the top of a hill or the bottom of a valley, the curve is flat for a moment. So **dy/dx = 0**.

1. Find dy/dx.
2. Make dy/dx = 0 and solve to find x.
3. Put each x into the **original** equation to find y.

**Problem:** Find the stationary points of y = x³ - 3x + 1.

1. dy/dx = 3x² - 3.
2. 3x² - 3 = 0. Add 3: 3x² = 3. Divide by 3: x² = 1. So x = 1 or x = -1.
3. When x = 1: y = 1 - 3 + 1 = -1. When x = -1: y = -1 + 3 + 1 = 3.

**Answer:** (1, -1) and (-1, 3)

## Maximum or minimum?

### Method 1: differentiate again

Differentiate dy/dx to get **d²y/dx²**.

- If d²y/dx² is **positive**, it is a **minimum**.
- If d²y/dx² is **negative**, it is a **maximum**.

**Problem:** For y = x³ - 3x + 1, decide which stationary point is a maximum and which is a minimum.

1. dy/dx = 3x² - 3. Differentiate again: d²y/dx² = 6x.
2. At x = 1: 6(1) = 6, which is positive. So (1, -1) is a **minimum**.
3. At x = -1: 6(-1) = -6, which is negative. So (-1, 3) is a **maximum**.

**Answer:** (-1, 3) is a maximum and (1, -1) is a minimum.

### Method 2: check the gradient on each side

Work out dy/dx a little to the left and a little to the right.

| Left | At the point | Right | Type |
|---|---|---|---|
| + (going up) | 0 | - (going down) | Maximum |
| - (going down) | 0 | + (going up) | Minimum |

For x = 1 above: at x = 0, dy/dx = -3 (down). At x = 2, dy/dx = 9 (up). Down then up: a minimum.

## Real-life examples

### Real-life example: the biggest field

**Problem:** A farmer has 40 m of fence. She makes a rectangular pen against a long wall, so she only needs fence on three sides. The two short sides are x m. Find the largest area she can make.

1. Two short sides use 2x m of fence. The long side is 40 - 2x.
2. Area: A = x(40 - 2x) = 40x - 2x².
3. Differentiate: dA/dx = 40 - 4x.
4. For the maximum, dA/dx = 0: 40 - 4x = 0, so x = 10.
5. Check it is a maximum: d²A/dx² = -4, which is negative. Yes.
6. Area: A = 40(10) - 2(10)² = 400 - 200 = 200.

**Answer:** 200 m² (short sides 10 m, long side 20 m)

### Real-life example: a ball thrown up

**Problem:** A ball's height after t seconds is h = 20t - 5t² metres. Find the greatest height.

1. dh/dt = 20 - 10t. (This is the ball's speed upwards.)
2. At the top, the ball stops for a moment: 20 - 10t = 0, so t = 2.
3. Height: h = 20(2) - 5(2)² = 40 - 20 = 20.

**Answer:** 20 m, after 2 seconds

> You can also find the top of a quadratic by completing the square (topic 2.11). Differentiation works for cubics too.

## Common mistakes

- Forgetting to take 1 off the power.
- Thinking a number on its own differentiates to itself. It differentiates to 0.
- Putting x into dy/dx instead of the original equation when finding the y-coordinate of a stationary point.

## Exam tips

- Write "dy/dx = 0" before you solve. It shows the examiner your method.
- Always say whether each stationary point is a maximum or a minimum, and show how you know.`,
  "2.13": `## What you need to know

> **Extended and O Level only.** This topic is not in IGCSE Core. (In O Level 4024 this topic is numbered 2.12.)

- A **function** is a rule that turns one number (the input) into another (the output).
- How to use **function notation**, like f(x) = 3x - 5 and f(4).
- What the **domain** and **range** of a function are.
- How to find an **inverse function**, f⁻¹(x).
- How to find a **composite function**, like gf(x).

## Key words

| Word | Meaning |
|---|---|
| Function | A rule that gives exactly one output for each input |
| f(x) | "f of x": the output of function f when the input is x |
| Domain | All the inputs (x values) you are allowed to use |
| Range | All the outputs the function can give |
| Inverse function, f⁻¹(x) | The function that undoes f. It takes the output back to the input |
| Composite function, gf(x) | Do f first, then do g to the answer |

## A function is a machine

Think of a function as a machine. A number goes in, the machine does something to it, and a number comes out.

f(x) = 3x - 5 means: **multiply by 3, then subtract 5.**

### Real-life example: a currency converter

At an exchange shop, $1 = 3.75 riyals. The rule for changing dollars into riyals is a function: **f(x) = 3.75x**, where x is the number of dollars.

f(20) means "how many riyals for $20?". f(20) = 3.75 × 20 = 75.

## Using function notation

**Problem:** f(x) = 3x - 5. Find (a) f(4) (b) f(-2) (c) the value of x when f(x) = 10.

1. (a) Replace x with 4: f(4) = 3(4) - 5 = 12 - 5 = **7**.
2. (b) Replace x with -2: f(-2) = 3(-2) - 5 = -6 - 5 = **-11**.
3. (c) Write an equation: 3x - 5 = 10. Add 5: 3x = 15. Divide by 3: x = **5**.

**Answer:** (a) 7 (b) -11 (c) x = 5

> f(4) means "put 4 in". It does **not** mean f × 4.

## Domain and range

**Problem:** Write down the domain or range of each function.

1. f(x) = x². Any number can go in, so the domain is all numbers. A square is never negative, so the range is **f(x) ⩾ 0**.
2. g(x) = 1/(x - 2). You cannot divide by 0, so x - 2 cannot be 0. The domain is **x ≠ 2**.
3. h(x) = √x. You cannot take the square root of a negative number (in this course). The domain is **x ⩾ 0**.

## Inverse functions

The inverse **undoes** the function. If f turns 4 into 7, then f⁻¹ turns 7 back into 4.

### Method

1. Write y = f(x).
2. Rearrange to make x the subject.
3. Swap: replace y with x, and write f⁻¹(x) = ...

**Problem:** f(x) = (2x + 1)/3. Find f⁻¹(x).

1. y = (2x + 1)/3.
2. Multiply both sides by 3: 3y = 2x + 1.
3. Subtract 1: 3y - 1 = 2x.
4. Divide by 2: x = (3y - 1)/2.
5. Write it with x: f⁻¹(x) = (3x - 1)/2.

**Answer:** f⁻¹(x) = (3x - 1)/2

> Check: f(4) = (8 + 1)/3 = 3. Then f⁻¹(3) = (9 - 1)/2 = 4. You get back to 4. Correct.

### Real-life example: changing riyals back to dollars

**Problem:** f(x) = 3.75x changes dollars into riyals. Find f⁻¹(x) and use it to change 300 riyals into dollars.

1. y = 3.75x.
2. Divide by 3.75: x = y/3.75.
3. f⁻¹(x) = x/3.75.
4. f⁻¹(300) = 300 ÷ 3.75 = 80.

**Answer:** f⁻¹(x) = x/3.75, and 300 riyals = $80

## Composite functions

**gf(x)** means: do **f first**, then put the answer into g. Work from the inside out, like g(f(x)).

> gf(x) = g(f(x)). The function **nearest to x** is done first.

**Problem:** f(x) = 2x + 3 and g(x) = x². Find (a) fg(3) (b) gf(3) (c) fg(x) (d) gf(x).

1. (a) fg(3): g first. g(3) = 3² = 9. Then f(9) = 2(9) + 3 = **21**.
2. (b) gf(3): f first. f(3) = 2(3) + 3 = 9. Then g(9) = 9² = **81**.
3. (c) fg(x): put g(x) = x² into f. f(x²) = 2x² + 3. So fg(x) = **2x² + 3**.
4. (d) gf(x): put f(x) = 2x + 3 into g. g(2x + 3) = **(2x + 3)²**.

**Answer:** (a) 21 (b) 81 (c) 2x² + 3 (d) (2x + 3)²

> fg and gf are usually **different**. The order matters.

### Real-life example: a discount and a delivery charge

An online shop takes 20% off, and charges $5 for delivery.

- f(x) = 0.8x takes 20% off the price x.
- g(x) = x + 5 adds the delivery charge.

**Problem:** A pair of shoes costs $50. Does the order matter?

1. gf(50): discount first. f(50) = 0.8 × 50 = 40. Then g(40) = 40 + 5 = **$45**.
2. fg(50): delivery first. g(50) = 50 + 5 = 55. Then f(55) = 0.8 × 55 = **$44**.

**Answer:** Yes. Adding delivery first and then taking 20% off everything is $1 cheaper. The shop will do the discount first.

### ff(x)

**Problem:** f(x) = 2x + 3. Find ff(x).

1. Put f(x) into f: f(2x + 3) = 2(2x + 3) + 3.
2. Expand: 4x + 6 + 3 = 4x + 9.

**Answer:** ff(x) = 4x + 9

## Common mistakes

- Doing the functions in the wrong order. In gf(x), f is done first.
- Thinking f⁻¹(x) means 1/f(x). It means the inverse, not "1 over".
- Forgetting to swap y back to x at the end of finding an inverse.

## Exam tips

- Check an inverse by putting a number through f and then through f⁻¹. You should get back where you started.
- For composite functions with algebra, use brackets: write f(2x + 3), then replace every x in f with (2x + 3).`,
  "3.1": `## What you need to know

- How to plot and read **coordinates** like (3, 2) on a grid.
- The grid has **four quadrants**, so coordinates can be negative.
- How to use coordinates to find missing corners of shapes.

## Key words

| Word | Meaning |
|---|---|
| Coordinates | A pair of numbers (x, y) that gives the position of a point |
| x-axis | The horizontal line across the grid |
| y-axis | The vertical line up the grid |
| Origin | The point (0, 0), where the two axes cross |
| Quadrant | One of the four parts the axes split the grid into |

## Reading coordinates

Coordinates are always written **(x, y)**: across first, then up or down.

> **Memory trick:** "Along the corridor, then up the stairs."

- x is positive to the right of the origin and negative to the left.
- y is positive above the origin and negative below.

![Points in all four quadrants](/images/maths/3-1-quadrants.svg)

**Problem:** Write down the coordinates of points A, B, C and D in the diagram.

1. A: go 3 right, then 2 up. **(3, 2)**
2. B: go 4 left, then 1 up. **(-4, 1)**
3. C: go 2 left, then 3 down. **(-2, -3)**
4. D: go 4 right, then 2 down. **(4, -2)**

**Answer:** A(3, 2), B(-4, 1), C(-2, -3), D(4, -2)

> (3, 2) and (2, 3) are different points. The order matters.

## Points on the axes

- A point on the x-axis has y = 0, like (5, 0).
- A point on the y-axis has x = 0, like (0, -4).

## Real-life example: a city map

Maps use a grid so people can find places. A delivery app shows the shop at (2, 1) and a customer at (2, 6). Each square is 1 km.

**Problem:** How far does the driver travel if he goes straight up the road from the shop to the customer?

1. The x values are the same (2 and 2), so the road goes straight up.
2. The distance is the difference in y: 6 - 1 = 5.

**Answer:** 5 km

**Problem:** A second customer is at (-3, 1). How far is she from the shop along the road?

1. The y values are the same (1 and 1), so the road goes straight across.
2. The distance is the difference in x: 2 - (-3) = 2 + 3 = 5.

**Answer:** 5 km

> Subtracting a negative is the same as adding: 2 - (-3) = 5.

## Finding a missing corner

**Problem:** Three corners of a rectangle are P(1, 1), Q(5, 1) and R(5, 4). Find the fourth corner, S.

1. P and Q are on the same horizontal line (y = 1). So S must be on the same horizontal line as R (y = 4).
2. R and Q are on the same vertical line (x = 5). So S must be on the same vertical line as P (x = 1).
3. S has x = 1 and y = 4.

**Answer:** S(1, 4)

> Sketch the points on a quick grid. You will usually see the answer straight away.

## Common mistakes

- Writing (y, x) instead of (x, y).
- Counting the lines wrong when the scale is not 1. Check what each square is worth.
- Forgetting the minus sign for points to the left of or below the origin.

## Exam tips

- Plot points with a small, neat cross (×), and label them.
- When you read a coordinate, put your pencil on the point and trace down or up to the x-axis first.`,
  "3.2": `## What you need to know

- How to draw a straight-line graph from its equation, like y = 2x - 1.
- How to use a **table of values** to get the points.
- The special lines x = a, y = b, y = x and y = -x.
- Extended and O Level: drawing lines written in other forms, like y = 7 - 4x and 3x + 2y = 12.

## Key words

| Word | Meaning |
|---|---|
| Linear | Makes a straight line |
| Table of values | A table of x values and the y values you work out |
| Plot | Mark a point on the grid |
| Equation of a line | A rule that every point on the line follows |

## Drawing a line with a table of values

1. Choose some x values (the question usually gives them).
2. Put each x into the equation to find y.
3. Plot the points.
4. Join them with a ruler. Draw the line right across the grid you are given.

**Problem:** Draw the graph of y = 2x - 1 for x from -1 to 3.

| x | -1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|
| y | -3 | -1 | 1 | 3 | 5 |

1. For x = -1: y = 2(-1) - 1 = -2 - 1 = -3.
2. For x = 0: y = 2(0) - 1 = -1.
3. For x = 3: y = 2(3) - 1 = 6 - 1 = 5.
4. Work out the rest in the same way, then plot the points and join them with a ruler.

![Graph of y = 2x - 1](/images/maths/3-2-line.svg)

> If one point is not in line with the others, you have made a mistake in the table. Work that y value out again.

> You only need two points to draw a straight line, but plot three. The third point checks the other two.

## Real-life example: a taxi fare

A taxi charges $3 to start, plus $2 for every kilometre. The cost is C = 2d + 3, where d is the distance in km.

**Problem:** Draw the graph for 0 to 10 km. Use it to find the cost of a 7 km trip.

| d (km) | 0 | 5 | 10 |
|---|---|---|---|
| C ($) | 3 | 13 | 23 |

1. For d = 0: C = 2(0) + 3 = 3. For d = 5: C = 2(5) + 3 = 13. For d = 10: C = 2(10) + 3 = 23.
2. Plot the three points with d across and C up, and join them with a ruler.
3. Go up from 7 km to the line, then across to the C axis: 17.

**Answer:** $17 (check: 2 × 7 + 3 = 17)

> The line starts at $3, not $0, because you pay $3 before the taxi moves.

## Special lines

![The lines x = -2, y = 3, y = x and y = -x](/images/maths/3-2-special-lines.svg)

| Equation | What the line looks like |
|---|---|
| x = a | Vertical line through a on the x-axis. Every point has x = a |
| y = b | Horizontal line through b on the y-axis. Every point has y = b |
| y = x | Diagonal line through the origin, going up to the right |
| y = -x | Diagonal line through the origin, going down to the right |

> **Memory trick:** y = 3 is a horizontal line, even though "y" makes you think of up. Every point on it is 3 **high**: (0, 3), (5, 3), (-2, 3).

**Problem:** Which of these points are on the line x = 4? (4, 1), (1, 4), (4, -7), (0, 4)

1. A point is on x = 4 only if its x value is 4.
2. (4, 1): x = 4. Yes. (1, 4): x = 1. No. (4, -7): x = 4. Yes. (0, 4): x = 0. No.

**Answer:** (4, 1) and (4, -7)

## Extended and O Level: other forms of equation

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

### y = 7 - 4x

This is the same kind of line. Work out the table in the same way.

**Problem:** Complete a table for y = 7 - 4x for x = -1, 0, 1, 2.

| x | -1 | 0 | 1 | 2 |
|---|---|---|---|---|
| y | 11 | 7 | 3 | -1 |

1. For x = -1: y = 7 - 4(-1) = 7 + 4 = 11.
2. For x = 2: y = 7 - 4(2) = 7 - 8 = -1.

### ax + by = c: the cover-up method

For an equation like 3x + 2y = 12, find where the line crosses each axis.

**Problem:** Draw the line 3x + 2y = 12.

1. Where it crosses the y-axis, x = 0. Cover up the 3x: 2y = 12, so y = 6. Point (0, 6).
2. Where it crosses the x-axis, y = 0. Cover up the 2y: 3x = 12, so x = 4. Point (4, 0).
3. Check with a third point. Try x = 2: 3(2) + 2y = 12, so 2y = 6 and y = 3. Point (2, 3).
4. Plot the three points and join them with a ruler.

**Answer:** A straight line through (0, 6), (2, 3) and (4, 0)

### Real-life example: buying snacks

Bilal has $12 to spend on drinks at $3 each and sandwiches at $2 each. If he spends it all, 3x + 2y = 12, where x is the number of drinks and y is the number of sandwiches.

**Problem:** Use the line to list all the ways he can spend exactly $12.

1. The line goes through (0, 6), (2, 3) and (4, 0).
2. He can only buy whole numbers of each, so look for points on the line where both x and y are whole numbers.
3. (0, 6): 0 drinks and 6 sandwiches. (2, 3): 2 drinks and 3 sandwiches. (4, 0): 4 drinks and 0 sandwiches.

**Answer:** 6 sandwiches, or 2 drinks and 3 sandwiches, or 4 drinks

## Common mistakes

- Working out 2 × (-1) as +2 instead of -2.
- Drawing the line only between the first and last points. Draw it across the whole grid.
- Thinking y = 3 is a vertical line.
- Joining points freehand instead of with a ruler.

## Exam tips

- Always use x = 0 in your table. It gives the point where the line crosses the y-axis.
- Label your line with its equation, especially if there is more than one line on the grid.`,
  "3.3": `## What you need to know

- The **gradient** of a line tells you how steep it is.
- How to find the gradient of a line drawn on a grid.
- Lines going up to the right have a **positive** gradient. Lines going down to the right have a **negative** gradient.
- Extended and O Level: how to work out the gradient from the coordinates of two points, without a grid.

## Key words

| Word | Meaning |
|---|---|
| Gradient | How steep a line is: how far it goes up for every 1 across |
| Rise | How far the line goes up (or down) |
| Run | How far the line goes across |

## The formula

> **Gradient = rise ÷ run = change in y ÷ change in x**

| Line | Gradient |
|---|---|
| Goes up to the right | Positive |
| Goes down to the right | Negative |
| Horizontal | 0 |
| Steeper line | Bigger number (ignoring the sign) |

## Finding the gradient from a grid

1. Pick two points on the line where it crosses grid corners exactly.
2. Draw a right-angled triangle under (or over) the line between them.
3. Count the squares up (rise) and across (run). Check the scale on each axis.
4. Gradient = rise ÷ run. If the line goes **down** to the right, the gradient is negative.

![Two lines with gradient triangles](/images/maths/3-3-gradient.svg)

**Problem:** Find the gradient of line A and line B in the diagram.

1. Line A goes from (0, 1) to (2, 5). Rise = 5 - 1 = 4. Run = 2 - 0 = 2.
2. Gradient of A = 4 ÷ 2 = 2. It goes up to the right, so it is positive: **2**.
3. Line B goes from (0, 4) to (4, 2). It goes down by 2 while going across 4.
4. Gradient of B = 2 ÷ 4 = 0.5. It goes down to the right, so it is negative: **-0.5** (or -1/2).

**Answer:** A: 2, B: -1/2

> A gradient of 2 means: for every 1 square across, the line goes 2 squares up.

## Real-life example: a wheelchair ramp

Building rules often say a wheelchair ramp should be no steeper than 1 in 12. That means a gradient of 1/12: 1 m up for every 12 m across.

**Problem:** A ramp rises 0.5 m over a horizontal distance of 6 m. Is it within the rule?

1. Gradient = rise ÷ run = 0.5 ÷ 6.
2. 0.5 ÷ 6 = 1/12 (because 6 ÷ 0.5 = 12).
3. 1/12 is exactly the limit, not steeper.

**Answer:** Yes. The gradient is 1/12, which is just within the rule.

## Real-life example: a road sign

A road sign shows a hill with a gradient of 10%.

**Problem:** How high does the road climb over 500 m measured across?

1. 10% = 10/100 = 0.1. So the road rises 0.1 m for every 1 m across.
2. Rise = 0.1 × 500 = 50.

**Answer:** 50 m

> Gradient is also a **rate**. On a distance-time graph, the gradient is the speed (topic 2.9).

## Extended and O Level: gradient from two points

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

For points (x₁, y₁) and (x₂, y₂):

> **Gradient = (y₂ - y₁) ÷ (x₂ - x₁)**

**Problem:** Find the gradient of the line through A(2, 3) and B(6, 11).

1. Change in y: 11 - 3 = 8.
2. Change in x: 6 - 2 = 4.
3. Gradient = 8 ÷ 4 = 2.

**Answer:** 2

**Problem:** Find the gradient of the line through C(-1, 4) and D(3, -2).

1. Change in y: -2 - 4 = -6.
2. Change in x: 3 - (-1) = 3 + 1 = 4.
3. Gradient = -6 ÷ 4 = -3/2.

**Answer:** -3/2 (or -1.5)

> Take the points in the **same order** on the top and bottom. If you start with D on top, start with D on the bottom too.

## Common mistakes

- Doing run ÷ rise instead of rise ÷ run.
- Forgetting the minus sign when the line goes down to the right.
- Counting squares when the scales on the two axes are different. Use the numbers on the axes.
- Mixing up the order of the points: (y₂ - y₁) ÷ (x₁ - x₂) gives the wrong sign.

## Exam tips

- Make your triangle as big as you can. It makes the gradient more accurate.
- Check the sign: look at the line. Up to the right means positive.`,
  "3.4": `## What you need to know

> **Extended and O Level only.** This topic is not in IGCSE Core.

- How to find the **length** of a line between two points, using Pythagoras' theorem.
- How to find the **midpoint** of a line: the point exactly halfway.
- How to find an end point when you know the midpoint and the other end.

## Key words

| Word | Meaning |
|---|---|
| Line segment | A straight line with two end points |
| Length | The distance from one end to the other |
| Midpoint | The point exactly halfway along the line |
| Pythagoras' theorem | In a right-angled triangle, a² + b² = c², where c is the longest side |

## Length of a line segment

Draw a right-angled triangle with the line as the longest side. The other two sides are the change in x and the change in y.

![Length and midpoint of AB](/images/maths/3-4-length-midpoint.svg)

> **Length = √[(change in x)² + (change in y)²]**

**Problem:** Find the length of the line from A(1, 2) to B(7, 10).

1. Change in x: 7 - 1 = 6.
2. Change in y: 10 - 2 = 8.
3. Square and add: 6² + 8² = 36 + 64 = 100.
4. Square root: √100 = 10.

**Answer:** 10 units

**Problem:** Find the length of the line from E(-2, 1) to F(3, 4). Give your answer to 3 significant figures.

1. Change in x: 3 - (-2) = 5.
2. Change in y: 4 - 1 = 3.
3. Square and add: 5² + 3² = 25 + 9 = 34.
4. Square root: √34 = 5.830...

**Answer:** 5.83 units

> A negative change does not matter, because squaring makes it positive: (-6)² = 36.

### Real-life example: a delivery drone

A drone flies in a straight line from its base at (0, 0) to a house at (12, 5) on a map grid. Each unit is 1 km.

**Problem:** How far does the drone fly?

1. Change in x: 12 - 0 = 12. Change in y: 5 - 0 = 5.
2. 12² + 5² = 144 + 25 = 169.
3. √169 = 13.

**Answer:** 13 km

> A car on the roads would travel 12 + 5 = 17 km if the roads only go across and up. The drone saves 4 km by flying straight.

## Midpoint

The midpoint is the **average** of the x values and the average of the y values.

> **Midpoint = ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2)**

**Problem:** Find the midpoint of A(1, 2) and B(7, 10).

1. x: (1 + 7) ÷ 2 = 8 ÷ 2 = 4.
2. y: (2 + 10) ÷ 2 = 12 ÷ 2 = 6.

**Answer:** (4, 6)

**Problem:** Find the midpoint of P(-3, 5) and Q(5, -1).

1. x: (-3 + 5) ÷ 2 = 2 ÷ 2 = 1.
2. y: (5 + (-1)) ÷ 2 = 4 ÷ 2 = 2.

**Answer:** (1, 2)

### Real-life example: meeting halfway

Ali's house is at (1, 7) and Sara's house is at (9, 3) on a map grid. They want to meet at the point halfway between their houses.

**Problem:** Where should they meet?

1. x: (1 + 9) ÷ 2 = 5.
2. y: (7 + 3) ÷ 2 = 5.

**Answer:** At (5, 5)

## Finding an end point

**Problem:** M(4, 6) is the midpoint of AB. A is (1, 2). Find B.

1. From A to M, x goes up by 4 - 1 = 3. From M to B it must go up by 3 again: 4 + 3 = 7.
2. From A to M, y goes up by 6 - 2 = 4. From M to B it must go up by 4 again: 6 + 4 = 10.

**Answer:** B(7, 10)

> Check: the midpoint of (1, 2) and (7, 10) is (4, 6). Correct.

## Common mistakes

- Forgetting to square root at the end of a length question.
- Subtracting the coordinates for a midpoint. You **add** them and halve.
- Adding the x change and y change for length (6 + 8 = 14). You must use Pythagoras.

## Exam tips

- Sketch the two points and draw the triangle. It stops sign mistakes.
- Leave the answer as an exact square root (like √34) if the question asks for an exact answer.`,
  "3.5": `## What you need to know

- Every straight line (except vertical ones) can be written as **y = mx + c**.
- **m** is the gradient. **c** is where the line crosses the y-axis (the **y-intercept**).
- How to read m and c from an equation, and how to find the equation of a line from its graph.
- Vertical lines have the equation **x = k**.
- Extended and O Level: equations like 5x + 4y = 8, and finding the equation of a line through two points.

## Key words

| Word | Meaning |
|---|---|
| Gradient (m) | How steep the line is |
| y-intercept (c) | Where the line crosses the y-axis. The point is (0, c) |
| Equation of a line | A rule linking x and y for every point on the line |
| Fully simplified | No brackets, no fractions that can be cancelled, terms collected |

## Reading m and c

> **y = mx + c**: the number in front of x is the gradient. The number on its own is the y-intercept.

**Problem:** Write down the gradient and y-intercept of each line.

1. y = 6x + 3: gradient **6**, y-intercept **3**.
2. y = x - 4: gradient **1** (x means 1x), y-intercept **-4**.
3. y = 5 - 2x: rewrite as y = -2x + 5. Gradient **-2**, y-intercept **5**.
4. y = 7: rewrite as y = 0x + 7. Gradient **0** (horizontal), y-intercept **7**.

> In y = 5 - 2x, the gradient is -2, not 5. Look for the number **with the x**.

## Finding the equation from a graph

1. Find c: read where the line crosses the y-axis.
2. Find m: draw a triangle and work out rise ÷ run (topic 3.3).
3. Write y = mx + c.

![Two lines with gradient triangles](/images/maths/3-3-gradient.svg)

**Problem:** Find the equations of lines A and B in the diagram.

1. Line A crosses the y-axis at 1, so c = 1. Its gradient is 2 (up 4, across 2). So y = 2x + 1.
2. Line B crosses the y-axis at 4, so c = 4. Its gradient is -1/2 (down 2, across 4). So y = -1/2 x + 4.

**Answer:** A: y = 2x + 1. B: y = -1/2 x + 4 (you can also write y = 4 - x/2)

## Finding the equation from a gradient and a point

**Problem:** A line has gradient 3 and passes through (2, 5). Find its equation.

1. Start with y = 3x + c.
2. The point (2, 5) is on the line, so put x = 2 and y = 5 in: 5 = 3(2) + c.
3. 5 = 6 + c. Subtract 6: c = -1.

**Answer:** y = 3x - 1

> Check: when x = 2, y = 3(2) - 1 = 5. Correct.

## Real-life example: a phone plan

A phone plan costs C = 0.1m + 15 dollars a month, where m is the number of minutes used.

**Problem:** What do 0.1 and 15 mean in real life?

1. 15 is the y-intercept. It is the cost when m = 0. So **$15 is the fixed monthly charge**, even if you make no calls.
2. 0.1 is the gradient. Every extra minute adds 0.1 to the cost. So **each minute costs $0.10**.

**Answer:** $15 a month fixed charge, plus 10 cents per minute

## Vertical lines

A vertical line has no y-intercept and its gradient cannot be worked out (the run is 0). Its equation is **x = k**, where k is the number where it crosses the x-axis.

**Problem:** A vertical line passes through (-3, 8). Write down its equation.

1. Every point on a vertical line has the same x value.
2. Here x = -3.

**Answer:** x = -3

## Extended and O Level: equations in the form ax + by = c

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

Rearrange into y = mx + c to find the gradient and y-intercept.

**Problem:** Find the gradient and y-intercept of 5x + 4y = 8.

1. Subtract 5x from both sides: 4y = -5x + 8.
2. Divide every term by 4: y = -5/4 x + 2.

**Answer:** Gradient -5/4, y-intercept 2

## Extended and O Level: line through two points

1. Find the gradient from the two points.
2. Put the gradient and one of the points into y = mx + c to find c.

**Problem:** Find the equation of the line through (2, 3) and (6, 11).

1. Gradient = (11 - 3) ÷ (6 - 2) = 8 ÷ 4 = 2.
2. y = 2x + c. Use (2, 3): 3 = 2(2) + c, so 3 = 4 + c and c = -1.

**Answer:** y = 2x - 1

> Check with the other point: 2(6) - 1 = 11. Correct.

### Real-life example: a plumber's charges

A plumber charges a fixed call-out fee plus an hourly rate. A 2-hour job costs $110. A 5-hour job costs $200.

**Problem:** Find the formula for the cost C of a job lasting h hours. What is the call-out fee?

1. The two points are (2, 110) and (5, 200).
2. Gradient = (200 - 110) ÷ (5 - 2) = 90 ÷ 3 = 30. This is $30 per hour.
3. C = 30h + c. Use (2, 110): 110 = 30(2) + c = 60 + c, so c = 50.

**Answer:** C = 30h + 50. The call-out fee is $50.

## Common mistakes

- Reading the gradient of y = 5 - 2x as 5.
- Forgetting the sign of c: y = 2x - 1 crosses the y-axis at -1, not 1.
- Writing a vertical line as y = k. A vertical line is x = k.
- Not simplifying: y = 6x/2 + 1 should be written y = 3x + 1.

## Exam tips

- Always check your equation with a point you know is on the line.
- Give the equation as "y = ...". Writing only "m = 2, c = 1" may not get full marks.`,
  "3.6": `## What you need to know

- **Parallel** lines go in the same direction and never meet.
- Parallel lines have the **same gradient**.
- How to tell if two lines are parallel from their equations.
- How to find the equation of a line parallel to another line, through a given point.

## Key words

| Word | Meaning |
|---|---|
| Parallel | Always the same distance apart, never meeting |
| Gradient (m) | The steepness of a line: m in y = mx + c |
| y-intercept (c) | Where the line crosses the y-axis |

## Same gradient, different intercept

![Three parallel lines with gradient 2](/images/maths/3-6-parallel.svg)

y = 2x + 3, y = 2x and y = 2x - 2 all have gradient 2. They are parallel. Only the y-intercept changes, so the lines are moved up or down.

> **Parallel lines: same m, different c.**

Railway tracks, the lines on lined paper and the lanes of a road are all parallel.

## Spotting parallel lines

**Problem:** Which of these lines are parallel to y = 3x + 2?

y = 2x + 3, y = 3x - 5, y = 5 + 3x, y = -3x + 2

1. The gradient of y = 3x + 2 is 3.
2. y = 2x + 3: gradient 2. Not parallel.
3. y = 3x - 5: gradient 3. Parallel.
4. y = 5 + 3x: this is y = 3x + 5. Gradient 3. Parallel.
5. y = -3x + 2: gradient -3. Not parallel (it slopes the other way).

**Answer:** y = 3x - 5 and y = 5 + 3x

## Finding the equation of a parallel line

1. Write down the gradient of the given line. The new line has the same gradient.
2. Put the point into y = mx + c and find c.
3. Write the equation.

**Problem:** Find the equation of the line parallel to y = 4x - 1 that passes through (1, -3).

1. The gradient of y = 4x - 1 is 4. So the new line is y = 4x + c.
2. Put in x = 1 and y = -3: -3 = 4(1) + c.
3. -3 = 4 + c. Subtract 4: c = -7.

**Answer:** y = 4x - 7

> Check: when x = 1, y = 4 - 7 = -3. Correct. And the gradient is 4, the same as y = 4x - 1.

### Real-life example: a new road

On a town plan, the main road follows the line y = 2x + 1. The council wants a new road parallel to it, passing through the new school at (3, 4).

**Problem:** Find the equation of the new road.

1. The main road has gradient 2. The new road must also have gradient 2: y = 2x + c.
2. Put in the school's point (3, 4): 4 = 2(3) + c = 6 + c.
3. c = 4 - 6 = -2.

**Answer:** y = 2x - 2

## Extended and O Level: equations in other forms

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

Rearrange each equation into y = mx + c first.

**Problem:** Show that 2y = 6x + 1 and 6x - 2y = 4 are parallel.

1. 2y = 6x + 1. Divide by 2: y = 3x + 0.5. Gradient 3.
2. 6x - 2y = 4. Subtract 6x: -2y = -6x + 4. Divide by -2: y = 3x - 2. Gradient 3.
3. Both gradients are 3, and the y-intercepts are different.

**Answer:** Both have gradient 3, so they are parallel.

**Problem:** Find the line parallel to 3x + y = 7 that passes through (2, 5).

1. Rearrange: y = -3x + 7. Gradient -3.
2. New line: y = -3x + c. Put in (2, 5): 5 = -3(2) + c = -6 + c.
3. Add 6: c = 11.

**Answer:** y = -3x + 11

> Check: -3(2) + 11 = 5. Correct.

## Common mistakes

- Changing the gradient. Parallel lines keep the **same** gradient.
- Reading the gradient of y = 5 + 3x as 5.
- Forgetting to rearrange 2y = 6x + 1 before reading the gradient. The gradient is 3, not 6.

## Exam tips

- After you find c, put the point back into your equation to check it.
- Give your final answer in the form the question asks for, usually y = mx + c.`,
  "3.7": `## What you need to know

> **Extended and O Level only.** This topic is not in IGCSE Core.

- **Perpendicular** lines meet at a right angle (90°).
- If two lines are perpendicular, their gradients **multiply to make -1**.
- How to find the gradient and equation of a line perpendicular to another line.
- How to find the **perpendicular bisector** of a line segment.

## Key words

| Word | Meaning |
|---|---|
| Perpendicular | At right angles (90°) |
| Negative reciprocal | Flip the fraction and change the sign. The negative reciprocal of 2 is -1/2 |
| Perpendicular bisector | A line that cuts another line in half at a right angle |

## The rule

> **m₁ × m₂ = -1**, so the perpendicular gradient is **-1 ÷ m**

In words: **flip it and change the sign**.

| Gradient | Perpendicular gradient | Check |
|---|---|---|
| 2 | -1/2 | 2 × (-1/2) = -1 |
| -3 | 1/3 | -3 × 1/3 = -1 |
| 3/4 | -4/3 | 3/4 × (-4/3) = -1 |
| -1/5 | 5 | -1/5 × 5 = -1 |

![The lines y = 2x + 1 and y = -½x + 5 meet at a right angle](/images/maths/3-7-perpendicular.svg)

> Horizontal and vertical lines are also perpendicular, but the rule does not work for them because a vertical line has no gradient.

## Finding a perpendicular gradient

**Problem:** Find the gradient of a line perpendicular to 2y = 3x + 1.

1. Rearrange first: divide by 2. y = 3/2 x + 1/2. The gradient is 3/2.
2. Flip it: 2/3. Change the sign: -2/3.

**Answer:** -2/3

## Are two lines perpendicular?

**Problem:** Are the lines y = 3x - 2 and x + 3y = 9 perpendicular?

1. First line: gradient 3.
2. Second line: 3y = -x + 9, so y = -1/3 x + 3. Gradient -1/3.
3. Multiply: 3 × (-1/3) = -1.

**Answer:** Yes, they are perpendicular.

## Equation of a perpendicular line

**Problem:** Find the equation of the line perpendicular to y = 2x + 1 that passes through (4, 3).

1. The gradient of y = 2x + 1 is 2. The perpendicular gradient is -1/2.
2. y = -1/2 x + c. Put in (4, 3): 3 = -1/2 × 4 + c = -2 + c.
3. c = 5.

**Answer:** y = -1/2 x + 5

## Real-life example: the shortest path to a road

The shortest way from a point to a straight road is the path that meets the road at a right angle.

On a map grid (1 unit = 1 km), a road follows the line y = x. A farmhouse is at (6, 0).

**Problem:** Find the equation of the shortest path, where it meets the road, and its length.

1. The road has gradient 1. The path is perpendicular, so its gradient is -1.
2. Path: y = -x + c. Put in (6, 0): 0 = -6 + c, so c = 6. The path is y = -x + 6.
3. Where it meets the road, both equations are true: x = -x + 6. So 2x = 6 and x = 3. Then y = 3. They meet at (3, 3).
4. Length from (6, 0) to (3, 3): change in x is 3, change in y is 3. √(3² + 3²) = √18 = 4.24.

**Answer:** Path y = -x + 6, meeting the road at (3, 3). It is 4.24 km long.

## Perpendicular bisector

The perpendicular bisector of AB passes through the **midpoint** of AB and is **perpendicular** to AB.

1. Find the midpoint of AB (topic 3.4).
2. Find the gradient of AB, then the perpendicular gradient.
3. Use the perpendicular gradient and the midpoint to find c.

**Problem:** Find the equation of the perpendicular bisector of the line joining (-3, 8) and (9, -2).

1. Midpoint: x = (-3 + 9) ÷ 2 = 3. y = (8 + (-2)) ÷ 2 = 3. Midpoint (3, 3).
2. Gradient of the line: (-2 - 8) ÷ (9 - (-3)) = -10 ÷ 12 = -5/6.
3. Perpendicular gradient: flip and change sign. 6/5.
4. y = 6/5 x + c. Put in (3, 3): 3 = 6/5 × 3 + c = 18/5 + c.
5. c = 3 - 18/5 = 15/5 - 18/5 = -3/5.
6. So y = 6/5 x - 3/5. Multiply every term by 5 to clear the fractions: 5y = 6x - 3.

**Answer:** y = 6/5 x - 3/5 (or 5y = 6x - 3)

> Every point on the perpendicular bisector is the same distance from both ends. Real use: if two towns want a new hospital the same distance from each, it should be built on the perpendicular bisector of the line between them.

## Common mistakes

- Only flipping, or only changing the sign. You must do **both**: the perpendicular gradient to 2 is -1/2, not 1/2 and not -2.
- Not rearranging first: 2y = 3x + 1 has gradient 3/2, not 3.
- Using the original gradient instead of the perpendicular one when finding c.
- Forgetting to use the midpoint for a perpendicular bisector.

## Exam tips

- Check your gradients multiply to -1.
- Fractions are fine in the answer, but the question may ask for a form like ax + by = c. Read it carefully.`,
  "4.1": `## What you need to know

- The names of angles, triangles, quadrilaterals, polygons and solids.
- The parts of a circle.
- What **similar** and **congruent** mean.
- Extended and O Level: also **plane**, **perpendicular bisector**, **hemisphere**, **frustum**, and **major** and **minor** arcs.

This topic is mostly words. Learn them well, because every other geometry topic uses them.

## Key words

| Word | Meaning |
|---|---|
| Point | An exact position. It has no size |
| Vertex (vertices) | A corner where lines or edges meet |
| Parallel | Lines that are always the same distance apart and never meet |
| Perpendicular | Lines that meet at a right angle (90°) |
| Bearing | A direction given as an angle measured clockwise from north |
| Congruent | Exactly the same shape and size |
| Similar | The same shape, but one is an enlargement of the other |
| Scale factor | How many times bigger one shape is than the other |

## Types of angle

![Acute, right, obtuse and reflex angles](/images/maths/4-1-angle-types.svg)

| Angle | Size |
|---|---|
| Acute | Less than 90° |
| Right angle | Exactly 90° |
| Obtuse | Between 90° and 180° |
| Straight line | Exactly 180° |
| Reflex | Between 180° and 360° |

### Real-life example: a clock

**Problem:** At 4 o'clock, what angle do the hands of a clock make? What type of angle is it?

1. A full turn is 360°. There are 12 hours on the clock, so each hour is 360 ÷ 12 = 30°.
2. At 4 o'clock the hands are 4 hours apart: 4 × 30 = 120°.
3. 120° is between 90° and 180°.

**Answer:** 120°, an obtuse angle. (The angle the other way round is 360 - 120 = 240°, a reflex angle.)

## Triangles

| Triangle | Sides | Angles |
|---|---|---|
| Equilateral | All 3 sides equal | All angles 60° |
| Isosceles | 2 sides equal | 2 angles equal |
| Scalene | No sides equal | No angles equal |
| Right-angled | Any | One angle is 90° |

## Special quadrilaterals

A quadrilateral has 4 sides.

![The six special quadrilaterals](/images/maths/4-1-quadrilaterals.svg)

| Shape | What makes it special |
|---|---|
| Square | 4 equal sides, 4 right angles |
| Rectangle | Opposite sides equal, 4 right angles |
| Rhombus | 4 equal sides, opposite sides parallel. Like a pushed-over square |
| Parallelogram | Opposite sides equal and parallel. Like a pushed-over rectangle |
| Kite | Two pairs of equal sides next to each other |
| Trapezium | One pair of parallel sides |

**Problem:** Name each shape.

1. A quadrilateral with exactly one pair of parallel sides: **trapezium**.
2. A quadrilateral with 4 equal sides and no right angles: **rhombus**.
3. A quadrilateral with two pairs of equal sides next to each other: **kite**.

## Polygons

A polygon is a flat shape with straight sides. A **regular** polygon has all sides equal and all angles equal. An **irregular** polygon does not.

| Sides | Name | Real-life example |
|---|---|---|
| 5 | Pentagon | The shape of a home plate in baseball, or a simple house drawing |
| 6 | Hexagon | A honeycomb cell, a nut for a bolt |
| 8 | Octagon | A STOP road sign |
| 10 | Decagon | Some coins |

## Solids

![Common solids](/images/maths/4-1-solids.svg)

| Solid | Faces | Edges | Vertices | Real-life example |
|---|---|---|---|---|
| Cube | 6 | 12 | 8 | A dice |
| Cuboid | 6 | 12 | 8 | A shoe box |
| Triangular prism | 5 | 9 | 6 | A tent |
| Square-based pyramid | 5 | 8 | 5 | The pyramids in Egypt |
| Cylinder | 3 surfaces (2 flat, 1 curved) | 2 | 0 | A tin of food |
| Cone | 2 surfaces (1 flat, 1 curved) | 1 | 1 | An ice cream cone |
| Sphere | 1 curved surface | 0 | 0 | A football |

A **prism** has the same shape all the way through. That shape is its **cross-section**.

A **net** is a flat shape that folds up to make a solid (see topic 4.2).

**Problem:** A solid has 5 faces, 8 edges and 5 vertices. One face is a square and the others are triangles. Name it.

1. The square is the base. The triangles meet at a point on top.

**Answer:** A square-based pyramid

## Parts of a circle

![The parts of a circle](/images/maths/4-1-circle-parts.svg)

| Part | Meaning |
|---|---|
| Centre | The point in the middle |
| Radius (radii) | A line from the centre to the edge |
| Diameter | A line across the circle through the centre. It is 2 × the radius |
| Circumference | The distance all the way round the edge |
| Chord | A straight line joining two points on the circle |
| Tangent | A straight line that touches the circle at one point only |
| Arc | Part of the circumference |
| Sector | A "pizza slice" between two radii and an arc |
| Segment | The part between a chord and an arc |
| Semicircle | Half a circle |

> **Memory trick:** a seg**ment** is cut off by a chord, like a piece of orange. A sec**tor** is a slice of pizza with a point at the centre.

## Similar and congruent

- **Congruent** shapes are identical: same shape, same size. They may be turned or flipped.
- **Similar** shapes are the same shape, but different sizes. All the angles are the same, and all the sides are multiplied by the same **scale factor**.

**Problem:** A photo is 10 cm by 15 cm. An enlargement is 20 cm by 30 cm. Are they similar? What is the scale factor?

1. 20 ÷ 10 = 2 and 30 ÷ 15 = 2.
2. Both sides are multiplied by the same number.

**Answer:** Yes, they are similar. The scale factor is 2.

## Extended and O Level: more words

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

| Word | Meaning |
|---|---|
| Plane | A flat surface that goes on forever, like a very large sheet of paper |
| Perpendicular bisector | A line that cuts another line exactly in half at 90° |
| Hemisphere | Half a sphere, like a bowl |
| Frustum | A cone (or pyramid) with the top cut off, like a lampshade or a bucket |
| Minor arc | The shorter arc between two points on a circle |
| Major arc | The longer arc between two points on a circle |

## Common mistakes

- Mixing up radius and diameter. The diameter is twice the radius.
- Mixing up chord and tangent. A tangent only touches the circle. A chord cuts across it.
- Calling a rhombus a "diamond". In the exam, use the correct word.
- Thinking similar means the same size. That is congruent.

## Exam tips

- Learn the quadrilateral table. Many questions start "ABCD is a parallelogram..." and expect you to know its properties.
- Use the correct words when you give reasons. "Angles in a triangle add up to 180°" earns the mark. "Because of the triangle" does not.`,
  "4.2": `## What you need to know

- How to measure and draw lines and angles accurately.
- How to **construct** a triangle when you know all three sides, using a ruler and compasses only.
- How to draw and use **nets** of solids, including using a net to find surface area and volume.

You need a sharp pencil, a ruler, a protractor and a pair of compasses.

## Key words

| Word | Meaning |
|---|---|
| Construct | Draw accurately using a ruler and compasses |
| Compasses | A tool for drawing circles and arcs |
| Arc | Part of a circle |
| Protractor | A tool for measuring and drawing angles |
| Net | A flat shape that folds up to make a solid |

## Measuring and drawing lines

- Measure from the **0** mark on the ruler, not from the end of the ruler.
- Give lengths in centimetres to 1 decimal place, or in millimetres.
- Use a sharp pencil. A thick line can be 1 mm out.

## Measuring and drawing angles

1. Put the centre of the protractor exactly on the vertex (the corner of the angle).
2. Line up the zero line of the protractor with one arm of the angle.
3. Count from **0** along the scale to the other arm. There are two scales: use the one that starts at 0 on your arm.
4. Check: is the angle acute (less than 90°) or obtuse (more than 90°)? Your answer should match.

> A common mistake is reading the wrong scale and getting 130° instead of 50°. The check in step 4 catches this.

To draw a reflex angle, such as 230°, draw 360 - 230 = 130° and mark the outside angle.

## Constructing a triangle from three sides

![Constructing a triangle with sides 7 cm, 5 cm and 6 cm](/images/maths/4-2-triangle-construction.svg)

**Problem:** Construct triangle ABC with AB = 7 cm, AC = 5 cm and BC = 6 cm.

1. Draw the longest side first. Use a ruler to draw AB = 7 cm, and label A and B.
2. Open the compasses to 5 cm (the length of AC). Put the point on A and draw an arc above the line.
3. Open the compasses to 6 cm (the length of BC). Put the point on B and draw an arc that crosses the first arc.
4. The point where the arcs cross is C.
5. Join A to C and B to C with a ruler.

**Answer:** Triangle ABC, with the construction arcs left showing.

> **Do not rub out the arcs.** They show the examiner you used compasses, and they are worth marks.

### Real-life example: planning a flower bed

A gardener wants a triangular flower bed with sides 7 m, 5 m and 6 m.

**Problem:** Draw it to a scale of 1 cm to 1 m. Then measure the largest angle.

1. With a scale of 1 cm to 1 m, the sides are 7 cm, 5 cm and 6 cm. This is the same triangle as above.
2. Construct it using the steps above.
3. The largest angle is opposite the longest side (AB = 7 cm), so it is at C.
4. Measure angle C with a protractor: about 78°.

**Answer:** About 78°

> Accurate drawing gives the gardener the angles to mark out on the ground, without any trigonometry.

### Can every three lengths make a triangle?

No. The two shorter sides must add up to **more** than the longest side.

**Problem:** Can you construct a triangle with sides 3 cm, 4 cm and 9 cm?

1. The two shorter sides: 3 + 4 = 7.
2. 7 is less than 9.
3. The arcs from each end would never meet.

**Answer:** No

## Constructing a rhombus

A rhombus has 4 equal sides. You can draw it as two triangles.

**Problem:** Construct a rhombus ABCD with sides of 5 cm and diagonal AC = 8 cm.

1. Draw AC = 8 cm.
2. Set the compasses to 5 cm. Draw arcs from A and from C, above the line. Where they cross is B.
3. Keep the compasses at 5 cm. Draw arcs from A and from C below the line. Where they cross is D.
4. Join A to B, B to C, C to D and D to A.

**Answer:** Rhombus ABCD with all sides 5 cm

## Nets

A net is the flat pattern you would cut out and fold to make a solid.

![Net of a cuboid 5 cm by 3 cm by 2 cm](/images/maths/4-2-cuboid-net.svg)

- A cube has 11 different nets. Each has 6 squares.
- A cuboid net has 6 rectangles, in 3 matching pairs.
- A triangular prism net has 2 triangles and 3 rectangles.
- A square-based pyramid net has 1 square and 4 triangles.

### Real-life example: a gift box

**Problem:** The net in the diagram folds into a cuboid gift box 5 cm long, 3 cm wide and 2 cm high. Find (a) how much card is needed (the surface area) and (b) the volume of the box.

1. (a) The net has three pairs of rectangles: top and bottom, front and back, and the two ends.
2. Top and bottom: 5 × 3 = 15 cm² each. Two of them: 30 cm².
3. Front and back: 5 × 2 = 10 cm² each. Two of them: 20 cm².
4. Ends: 3 × 2 = 6 cm² each. Two of them: 12 cm².
5. Total: 30 + 20 + 12 = 62 cm².
6. (b) Volume = length × width × height = 5 × 3 × 2 = 30 cm³.

**Answer:** (a) 62 cm² of card (b) 30 cm³

> A real box needs extra flaps to glue it together, so the box maker would use a bit more card.

**Problem:** Is a row of 4 squares with 1 square above and 1 square below the second square a net of a cube?

1. Fold the row of 4 into a loop: these make the 4 sides.
2. The square above folds down to make the top, and the square below folds up to make the bottom.

**Answer:** Yes, it is a net of a cube (the "cross" shape).

## Common mistakes

- Rubbing out the construction arcs.
- Reading the wrong scale on the protractor.
- Measuring from the end of the ruler instead of from 0.
- Drawing a net with two faces that would end up on top of each other.

## Exam tips

- Your lengths must be within 1 mm and your angles within 1° of the correct answer. Take care.
- Label every point (A, B, C) as you draw it.`,
  "4.3": `## What you need to know

- How to draw and read **scale drawings** and maps.
- How to use **three-figure bearings**, measured clockwise from north.
- How to find the bearing back the other way.
- The compass directions north, east, south and west.

## Key words

| Word | Meaning |
|---|---|
| Scale drawing | An accurate drawing where every length is made bigger or smaller by the same amount |
| Scale | How lengths on the drawing compare to real lengths, like 1 cm to 2 m |
| Bearing | A direction, as an angle measured clockwise from north |
| Three-figure bearing | A bearing always written with 3 digits, like 045° or 270° |
| Due east | Exactly east, on a bearing of 090° |

## Scales

A scale can be written in two ways:

- **In words:** 1 cm represents 2 m.
- **As a ratio:** 1 : 50 000. This means 1 cm on the map is 50 000 cm in real life.

> To go from the drawing to real life, **multiply** by the scale. To go from real life to the drawing, **divide**.

### Real-life example: a classroom plan

**Problem:** A classroom is 8 m long and 6 m wide. Make a scale drawing with a scale of 1 cm to 2 m. What size is the rectangle you draw?

1. Real life to drawing, so divide by 2.
2. Length: 8 ÷ 2 = 4 cm.
3. Width: 6 ÷ 2 = 3 cm.

**Answer:** A rectangle 4 cm by 3 cm

### Real-life example: reading a map

**Problem:** A map has a scale of 1 : 50 000. Two villages are 4 cm apart on the map. How far apart are they in real life? Give your answer in km.

1. Drawing to real life, so multiply: 4 × 50 000 = 200 000 cm.
2. Change to metres: 200 000 ÷ 100 = 2000 m.
3. Change to kilometres: 2000 ÷ 1000 = 2 km.

**Answer:** 2 km

> Remember: 100 cm = 1 m and 1000 m = 1 km. So 100 000 cm = 1 km.

**Problem:** On the same map, how long is a road that is 7.5 km long in real life?

1. Change 7.5 km to cm: 7.5 × 100 000 = 750 000 cm.
2. Real life to drawing, so divide: 750 000 ÷ 50 000 = 15 cm.

**Answer:** 15 cm

## Bearings

Bearings tell ships, planes and hikers which way to go.

**Three rules:**

1. Start at **north**.
2. Measure **clockwise**.
3. Always write **three figures**: 45° is written 045°.

| Direction | Bearing |
|---|---|
| North | 000° |
| East | 090° |
| South | 180° |
| West | 270° |

![Bearing of B from A, and of A from B](/images/maths/4-3-bearings.svg)

> "The bearing of B **from** A" means: stand at A, face north, and turn clockwise until you face B. Draw the north line at the point after the word "from".

## The bearing back

If you know the bearing of B from A, you can find the bearing of A from B.

> **Back bearing = bearing + 180°** (or **- 180°** if the bearing is more than 180°)

**Problem:** The bearing of B from A is 025°. Find the bearing of A from B.

1. 025° is less than 180°, so add 180°.
2. 25 + 180 = 205.

**Answer:** 205°

**Problem:** The bearing of Q from P is 300°. Find the bearing of P from Q.

1. 300° is more than 180°, so subtract 180°.
2. 300 - 180 = 120.

**Answer:** 120°

> The two north lines are parallel, so the angles at A and B are co-interior angles (topic 4.6). That is why the bearings always differ by 180°.

## Real-life example: a ship's journey

A ship leaves port P and sails 8 km on a bearing of 060° to a buoy B. Then it sails 6 km due south to a lighthouse L.

**Problem:** Make a scale drawing with 1 cm to 1 km. Use it to find how far the lighthouse is from the port, and its bearing from the port.

1. Mark P. Draw a north line up from P.
2. Measure 60° clockwise from north and draw a line 8 cm long. Mark the end B.
3. At B draw a new north line. Due south means straight down. Draw 6 cm down from B and mark L.
4. Measure PL with a ruler: about 7.2 cm, so about 7.2 km.
5. Measure the angle clockwise from the north line at P to the line PL: about 106°.

**Answer:** About 7.2 km, on a bearing of about 106°

> In topics 6.2 and 6.5 you will learn to work out these answers exactly with trigonometry. A scale drawing gives a quick check.

## Common mistakes

- Measuring anticlockwise, or from east instead of north.
- Writing 45° instead of 045°.
- Drawing the north line at the wrong point. Draw it at the point after "from".
- Forgetting to change units, for example leaving a map distance in cm when the question wants km.

## Exam tips

- Draw a north line at every point you need to measure from.
- Write the scale next to your drawing, and check your measurements make sense in real life.`,
  "4.4": `## What you need to know

- **Similar** shapes have equal angles, and their sides are all multiplied by the same **scale factor**.
- How to find a missing length in similar shapes.
- Extended and O Level: how **areas** and **volumes** of similar shapes are linked, and how to show that two triangles are similar.

## Key words

| Word | Meaning |
|---|---|
| Similar | Same shape, different size. One is an enlargement of the other |
| Scale factor (k) | The number every length is multiplied by |
| Corresponding sides | Sides in the same position in the two shapes |
| Enlargement | Making a shape bigger (or smaller) by a scale factor |

## Finding the scale factor

> **Scale factor = new length ÷ old length** (using a pair of corresponding sides)

1. Find a pair of corresponding sides where you know both lengths.
2. Divide to find the scale factor.
3. Multiply (to go to the bigger shape) or divide (to go to the smaller shape).

![Two similar triangles](/images/maths/4-4-similar-triangles.svg)

**Problem:** Triangles ABC and PQR are similar. AB = 4 cm, BC = 6 cm, AC = 5 cm and PQ = 10 cm. Find QR and PR.

1. AB and PQ are corresponding sides. Scale factor = 10 ÷ 4 = 2.5.
2. QR corresponds to BC: QR = 6 × 2.5 = 15 cm.
3. PR corresponds to AC: PR = 5 × 2.5 = 12.5 cm.

**Answer:** QR = 15 cm, PR = 12.5 cm

> Angles do **not** change in similar shapes. Only the lengths change.

### Real-life example: how tall is the tree?

At the same time of day, a 1.5 m stick casts a shadow 2 m long, and a tree casts a shadow 12 m long. The sun's rays make similar triangles.

![A stick and a tree with their shadows](/images/maths/4-4-shadow.svg)

**Problem:** How tall is the tree?

1. The shadows are corresponding sides. Scale factor = 12 ÷ 2 = 6.
2. The heights are also corresponding sides. Tree height = 1.5 × 6 = 9.

**Answer:** 9 m

### Real-life example: printing a photo

**Problem:** A photo is 10 cm wide and 15 cm tall. It is enlarged to 25 cm wide. How tall is the enlargement?

1. Scale factor = 25 ÷ 10 = 2.5.
2. Height = 15 × 2.5 = 37.5.

**Answer:** 37.5 cm

> If you only stretch the width, the photo is no longer similar and the faces look wide and flat.

### Going the other way

**Problem:** A model car is similar to the real car. The real car is 4.2 m long and the model is 14 cm long. The real car is 1.5 m tall. How tall is the model?

1. Use the same units: 4.2 m = 420 cm and 1.5 m = 150 cm.
2. Scale factor from real to model = 14 ÷ 420 = 1/30.
3. Model height = 150 × 1/30 = 5.

**Answer:** 5 cm

## Extended and O Level: areas and volumes

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

If the lengths are multiplied by k:

| | Multiplied by |
|---|---|
| Lengths | k |
| Areas (including surface areas) | k² |
| Volumes | k³ |

Why? A 1 cm square doubled becomes a 2 cm square: its area goes from 1 to 4, which is 2². A 1 cm cube doubled becomes a 2 cm cube: its volume goes from 1 to 8, which is 2³.

### Real-life example: which pizza is better value?

A small pizza is 25 cm across and costs $6. A large pizza is 35 cm across and costs $10. Both are circles, so they are similar.

**Problem:** Which is better value?

1. Length scale factor = 35 ÷ 25 = 1.4.
2. Area scale factor = 1.4² = 1.96. So the large pizza has 1.96 times as much pizza.
3. Price scale factor = 10 ÷ 6 = 1.67 (to 3 s.f.).
4. You get 1.96 times the pizza for only 1.67 times the price.

**Answer:** The large pizza is better value.

> Most people think the large pizza is only "a bit bigger". The area grows much faster than the width.

### Real-life example: two bottles

Two bottles are similar. The small one is 10 cm tall and the large one is 15 cm tall. The small bottle holds 400 ml and has a label of area 60 cm².

**Problem:** Find (a) the label area on the large bottle (b) how much the large bottle holds.

1. Length scale factor k = 15 ÷ 10 = 1.5.
2. (a) Area factor = 1.5² = 2.25. Label = 60 × 2.25 = **135 cm²**.
3. (b) Volume factor = 1.5³ = 3.375. Volume = 400 × 3.375 = **1350 ml**.

**Answer:** (a) 135 cm² (b) 1350 ml

### Working backwards from volumes

**Problem:** Two similar cones have volumes 16 cm³ and 54 cm³. The small cone is 6 cm tall. How tall is the large cone?

1. Volume factor = 54 ÷ 16 = 27/8.
2. Length factor = cube root of 27/8 = 3/2 = 1.5.
3. Height = 6 × 1.5 = 9.

**Answer:** 9 cm

> From areas, take the **square root** to get k. From volumes, take the **cube root**.

## Extended and O Level: showing triangles are similar

Two triangles are similar if their angles are equal. Give a reason for each angle.

![Lines AE and BD cross at C, with AB parallel to DE](/images/maths/4-4-bowtie.svg)

**Problem:** Lines AE and BD cross at C. AB is parallel to DE. Show that triangles ABC and EDC are similar. Then find DE if AB = 6 cm, AC = 4 cm and CE = 10 cm.

1. Angle ACB = angle ECD (vertically opposite angles are equal).
2. Angle BAC = angle DEC (alternate angles are equal, because AB is parallel to DE).
3. Two angles are equal, so the third angles must be equal too (angles in a triangle add to 180°). The triangles are similar.
4. AC and EC are corresponding sides. Scale factor = 10 ÷ 4 = 2.5.
5. DE corresponds to AB: DE = 6 × 2.5 = 15.

**Answer:** The triangles are similar (equal angles, reasons above), and DE = 15 cm.

## Common mistakes

- Adding instead of multiplying: if one side goes from 4 to 10 (add 6), the others do **not** add 6.
- Matching the wrong sides. Match sides that are opposite equal angles.
- Using k instead of k² for areas, or k instead of k³ for volumes.

## Exam tips

- Redraw the two shapes separately, the same way round, and label the matching sides.
- Write the scale factor clearly before you use it.`,
  "4.5": `## What you need to know

- How to find the **lines of symmetry** of a flat shape.
- How to find the **order of rotational symmetry** of a flat shape.
- The symmetry of triangles, quadrilaterals and regular polygons.
- Extended and O Level: **planes of symmetry** and **axes of symmetry** of solids.

## Key words

| Word | Meaning |
|---|---|
| Line of symmetry | A mirror line. One half is the reflection of the other |
| Rotational symmetry | The shape looks the same when you turn it less than a full turn |
| Order of rotational symmetry | How many times the shape looks the same in one full turn |
| Plane of symmetry | A flat cut that splits a solid into two mirror halves |
| Axis of symmetry | A line a solid can turn around and still look the same |

## Line symmetry

If you fold a shape along a line of symmetry, the two halves fit exactly on top of each other.

## Rotational symmetry

Turn the shape around its centre. Count how many times it looks exactly the same in one full turn (including the starting position).

- A shape that only looks the same after a full turn has order **1**. We say it has **no** rotational symmetry.

> **Tracing paper trick:** trace the shape, put your pencil on the centre, and turn the paper. Count how many times the tracing fits the shape.

![Lines of symmetry of some shapes](/images/maths/4-5-symmetry.svg)

## Symmetry of common shapes

| Shape | Lines of symmetry | Order of rotational symmetry |
|---|---|---|
| Equilateral triangle | 3 | 3 |
| Isosceles triangle | 1 | 1 |
| Scalene triangle | 0 | 1 |
| Square | 4 | 4 |
| Rectangle | 2 | 2 |
| Rhombus | 2 | 2 |
| Parallelogram | 0 | 2 |
| Kite | 1 | 1 |
| Isosceles trapezium | 1 | 1 |
| Regular polygon with n sides | n | n |
| Circle | Infinite | Infinite |

> A parallelogram has **no** lines of symmetry. Folding along a diagonal does not work. Try it with paper.

**Problem:** A regular hexagon. How many lines of symmetry? What order of rotational symmetry?

1. A regular polygon with n sides has n lines of symmetry and order n.
2. A hexagon has 6 sides.

**Answer:** 6 lines of symmetry, order 6

## Using symmetry to find missing facts

**Problem:** A kite ABCD has its line of symmetry along AC. Angle ABC = 110°. Find angle ADC.

1. The line of symmetry AC reflects B onto D.
2. So angle ADC is the mirror image of angle ABC.

**Answer:** 110°

## Real-life example: road signs and letters

**Problem:** Give the lines of symmetry and the order of rotational symmetry for (a) a STOP sign (a regular octagon) (b) the letter H (c) the letter S.

1. (a) Regular octagon, 8 sides: **8 lines, order 8**.
2. (b) H can be folded down the middle and across the middle: **2 lines**. It looks the same upside down: **order 2**.
3. (c) S cannot be folded to match: **0 lines**. It looks the same upside down: **order 2**.

**Answer:** (a) 8 lines, order 8 (b) 2 lines, order 2 (c) 0 lines, order 2

> Designers use symmetry in logos because the eye finds balanced shapes pleasing. A snowflake has 6 lines of symmetry and order 6.

## Extended and O Level: symmetry of solids

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

A **plane of symmetry** cuts a solid into two halves that are mirror images.

An **axis of symmetry** is a line through the solid. Turning the solid around it, it looks the same a number of times (the order).

| Solid | Planes of symmetry | Axes of symmetry |
|---|---|---|
| Cuboid (all sides different) | 3 | 3 axes, each of order 2 |
| Cube | 9 | 13 axes |
| Square-based pyramid (regular) | 4 | 1 axis of order 4 |
| Triangular prism (equilateral ends) | 4 | 1 axis of order 3 and 3 of order 2 |
| Cylinder | Infinite | 1 axis of infinite order, and infinitely many of order 2 |
| Cone | Infinite | 1 axis of infinite order |

**Problem:** How many planes of symmetry does a cuboid have if its length, width and height are all different? Describe them.

1. Cut it in half across its length, so the two ends match: **1**.
2. Cut it in half across its width: **2**.
3. Cut it in half across its height, through the middle: **3**.
4. A diagonal cut does not give mirror halves, because the faces are rectangles, not squares.

**Answer:** 3 planes of symmetry

**Problem:** A square-based pyramid has its point directly above the centre of the base. Describe its axis of symmetry and its order.

1. The axis goes from the point straight down to the centre of the square base.
2. Turning around this axis, the pyramid looks the same 4 times (like the square base).

**Answer:** One vertical axis through the top and the centre of the base, of order 4.

## Common mistakes

- Saying a parallelogram has 2 lines of symmetry. It has 0.
- Saying a rectangle has 4 lines of symmetry. The diagonals are **not** lines of symmetry.
- Giving order 0 for no rotational symmetry. The smallest order is 1.

## Exam tips

- Use tracing paper in the exam if you are allowed. It is the fastest way to check.
- Draw lines of symmetry with a ruler, as dashed lines, right across the shape.`,
  "4.6": `## What you need to know

- The basic angle facts: angles at a point, on a straight line, vertically opposite, in a triangle and in a quadrilateral.
- The angles made when a line crosses **parallel lines**: corresponding, alternate and co-interior.
- The interior and exterior angles of **regular polygons**.
- How to give a **reason** for each step, using the correct words.
- Extended and O Level: angles in **irregular** polygons too.

## Key words

| Word | Meaning |
|---|---|
| Angle ABC | The angle at B, between the lines BA and BC. The middle letter is the corner |
| Vertically opposite | The angles opposite each other where two lines cross |
| Transversal | A line that crosses two (or more) parallel lines |
| Interior angle | An angle inside a polygon, at a corner |
| Exterior angle | The angle between one side and the next side extended outwards |

## The basic angle facts

| Fact | Reason to write |
|---|---|
| Angles at a point add up to 360° | Angles at a point add up to 360° |
| Angles on a straight line add up to 180° | Angles on a straight line add up to 180° |
| Vertically opposite angles are equal | Vertically opposite angles are equal |
| Angles in a triangle add up to 180° | Angles in a triangle add up to 180° |
| Angles in a quadrilateral add up to 360° | Angles in a quadrilateral add up to 360° |
| Base angles of an isosceles triangle are equal | Base angles of an isosceles triangle are equal |

**Problem:** Two angles on a straight line are 125° and x. Find x.

1. Angles on a straight line add up to 180°.
2. x = 180 - 125 = 55.

**Answer:** x = 55°

**Problem:** An isosceles triangle has a top angle of 40°. Find each of the other two angles.

1. Angles in a triangle add up to 180°. The other two angles add up to 180 - 40 = 140°.
2. The base angles of an isosceles triangle are equal. Each one is 140 ÷ 2 = 70°.

**Answer:** 70° and 70°

### Real-life example: a ladder

A ladder leans against a vertical wall. It makes an angle of 70° with the flat ground.

**Problem:** What angle does the ladder make with the wall?

1. The wall and the ground meet at 90°.
2. The ladder, the wall and the ground make a triangle. Angles in a triangle add up to 180°.
3. Angle with the wall = 180 - 90 - 70 = 20.

**Answer:** 20°

## Angles in parallel lines

![Corresponding, alternate and co-interior angles](/images/maths/4-6-parallel-angles.svg)

| Pair | Shape to look for | Rule |
|---|---|---|
| Corresponding angles | F shape | Equal |
| Alternate angles | Z shape | Equal |
| Co-interior angles | C (or U) shape | Add up to 180° |

> The arrows on the lines in a diagram show that the lines are parallel.

**Problem:** A transversal crosses two parallel lines. One angle is 65°. Angle a is alternate to it, angle b is corresponding to it, and angle c is co-interior to it. Find a, b and c.

1. a = 65° (alternate angles are equal).
2. b = 65° (corresponding angles are equal).
3. c = 180 - 65 = 115° (co-interior angles add up to 180°).

**Answer:** a = 65°, b = 65°, c = 115°

> In the exam, write the reason in words after each step. "Alternate angles" on its own is not enough. Write "alternate angles are equal".

## Angles in regular polygons

> **Exterior angle = 360° ÷ n** (n = number of sides)

> **Interior angle = 180° - exterior angle**

> **Sum of interior angles = (n - 2) × 180°**

Why (n - 2) × 180? You can split any polygon into (n - 2) triangles from one corner, and each triangle has 180°.

**Problem:** Find the exterior angle, interior angle and sum of the interior angles of a regular hexagon.

1. n = 6. Exterior angle = 360 ÷ 6 = 60°.
2. Interior angle = 180 - 60 = 120°.
3. Sum = (6 - 2) × 180 = 4 × 180 = 720°. Check: 6 × 120 = 720.

**Answer:** Exterior 60°, interior 120°, sum 720°

**Problem:** Each interior angle of a regular polygon is 156°. How many sides does it have?

1. Exterior angle = 180 - 156 = 24°.
2. n = 360 ÷ 24 = 15.

**Answer:** 15 sides

### Real-life example: why bees use hexagons

Tiles fit together with no gaps only if the angles at each meeting point add up to exactly 360°.

**Problem:** Can regular hexagons cover a floor with no gaps? Can regular pentagons?

1. Hexagon interior angle = 120°. Three meet at a point: 3 × 120 = 360°. **No gaps.**
2. Pentagon: exterior = 360 ÷ 5 = 72°, so interior = 180 - 72 = 108°. Three meet: 3 × 108 = 324°, leaving a gap of 36°. Four would be 432°, which is too much. **They do not fit.**

**Answer:** Hexagons tile perfectly. Pentagons do not. This is why honeycomb cells are hexagons.

## Extended and O Level: irregular polygons

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

The angle sum (n - 2) × 180° works for **every** polygon, regular or not. The exterior angles of any polygon also add up to 360°.

**Problem:** A pentagon has angles 100°, 120°, 95°, 110° and x. Find x.

1. Sum of the angles in a pentagon = (5 - 2) × 180 = 540°.
2. Add the known angles: 100 + 120 + 95 + 110 = 425.
3. x = 540 - 425 = 115.

**Answer:** x = 115°

**Problem:** The exterior angles of a hexagon are x, 2x, 50°, 60°, 70° and 2x. Find x.

1. Exterior angles of any polygon add up to 360°.
2. x + 2x + 2x + 50 + 60 + 70 = 360, so 5x + 180 = 360.
3. 5x = 180, so x = 36.

**Answer:** x = 36°

## Common mistakes

- Reading angle ABC as the angle at A. It is the angle at **B**, the middle letter.
- Mixing up alternate (equal) and co-interior (add to 180°).
- Using 360 ÷ n for the **interior** angle. That gives the exterior angle.
- Forgetting to write reasons.

## Exam tips

- Write each angle you find on the diagram as you go.
- Give a reason for every step, in full words.`,
  "4.7": `## What you need to know

- **The angle in a semicircle is 90°.**
- **The angle between a tangent and a radius is 90°.**
- Extended and O Level: four more theorems: the angle at the centre, angles in the same segment, cyclic quadrilaterals and the alternate segment theorem.
- How to give reasons using these facts.

A **theorem** is a fact that has been proved to be always true. In the exam you must name the theorem you use.

## Key words

| Word | Meaning |
|---|---|
| Circumference | The edge of the circle |
| Diameter | A line across the circle through the centre |
| Tangent | A line that touches the circle at exactly one point |
| Subtended | An angle is subtended by a chord or arc when its arms go to the ends of that chord or arc |
| Cyclic quadrilateral | A quadrilateral with all 4 corners on a circle |

## Core theorems

![The angle in a semicircle and the tangent and radius](/images/maths/4-7-core-theorems.svg)

### 1. The angle in a semicircle is 90°

If AB is a diameter and C is any point on the circle, then angle ACB = 90°.

**Problem:** AB is a diameter of a circle. C is a point on the circle. Angle CAB = 35°. Find angle ABC.

1. Angle ACB = 90° (the angle in a semicircle is 90°).
2. Angles in a triangle add up to 180°. Angle ABC = 180 - 90 - 35 = 55°.

**Answer:** 55°

### Real-life example: finding the centre of a round table

A carpenter has a round table top and needs to find its exact centre.

1. Put the corner of a set square (a right angle) on the edge of the table.
2. Mark where the two arms cross the edge. Because the angle in a semicircle is 90°, these two marks are the ends of a **diameter**. Draw a line between them.
3. Do it again from a different place on the edge to get a second diameter.
4. The two diameters cross at the centre.

### 2. The angle between a tangent and a radius is 90°

A tangent at point T is perpendicular to the radius OT.

**Problem:** PT is a tangent to a circle with centre O. The tangent touches the circle at T. Angle TOP = 62°. Find angle OPT.

1. Angle OTP = 90° (the angle between a tangent and a radius is 90°).
2. Angle OPT = 180 - 90 - 62 = 28° (angles in a triangle add up to 180°).

**Answer:** 28°

**Problem:** A circle has centre O and radius 5 cm. P is a point 13 cm from O. A tangent from P touches the circle at T. Find the length PT.

1. Angle OTP = 90° (tangent and radius). So OTP is a right-angled triangle with longest side OP = 13.
2. Pythagoras: PT² = 13² - 5² = 169 - 25 = 144.
3. PT = √144 = 12.

**Answer:** 12 cm

> A bicycle wheel touches the flat road at one point. The road is a tangent, so the spoke going straight down to that point makes 90° with the road.

## Extended and O Level theorems

> **Extended and O Level only.** Core students can skip from here to Common mistakes.

![The angle at the centre, angles in the same segment, a cyclic quadrilateral and the alternate segment theorem](/images/maths/4-7-extended-theorems.svg)

### 3. The angle at the centre is twice the angle at the circumference

Both angles must stand on the **same arc**.

**Problem:** A, B and C are on a circle with centre O. Angle ACB = 40°. Find angle AOB.

1. Angle AOB is at the centre and angle ACB is at the circumference. Both stand on arc AB.
2. Angle AOB = 2 × 40 = 80° (the angle at the centre is twice the angle at the circumference).

**Answer:** 80°

**Problem:** Angle AOB at the centre is 130°. Find the angle ACB at the circumference standing on the same arc.

1. Angle at the circumference = half of the angle at the centre: 130 ÷ 2 = 65°.

**Answer:** 65°

### 4. Angles in the same segment are equal

Angles at the circumference standing on the **same chord**, on the same side of it, are equal.

**Problem:** A, B, C and D are on a circle. Angle ADB = 35°. C is on the same side of AB as D. Find angle ACB.

1. Angles ADB and ACB both stand on chord AB, in the same segment.
2. They are equal (angles in the same segment are equal).

**Answer:** 35°

### 5. Opposite angles of a cyclic quadrilateral add up to 180°

**Problem:** ABCD is a cyclic quadrilateral. Angle A = 85° and angle B = 110°. Find angles C and D.

1. C is opposite A: C = 180 - 85 = 95° (opposite angles of a cyclic quadrilateral add up to 180°).
2. D is opposite B: D = 180 - 110 = 70° (same reason).

**Answer:** C = 95°, D = 70°

> Check: 85 + 110 + 95 + 70 = 360°. Angles in a quadrilateral add up to 360°. Correct.

### 6. The alternate segment theorem

The angle between a tangent and a chord equals the angle in the **alternate** (opposite) segment.

**Problem:** A tangent touches a circle at A. AB is a chord. The angle between the tangent and AB is 70°. C is a point on the circle on the other side of AB. Find angle ACB.

1. The angle between the tangent and chord AB is 70°.
2. Angle ACB is in the alternate segment.
3. They are equal (alternate segment theorem).

**Answer:** 70°

## Extended and O Level: using several theorems

**Problem:** A, B, C and D lie on a circle, in that order. Angle BAD = 70° and angle ADB = 40°. Find (a) angle BCD (b) angle ACB (c) angle ABD.

1. (a) ABCD is a cyclic quadrilateral, and BCD is opposite BAD. Angle BCD = 180 - 70 = **110°** (opposite angles of a cyclic quadrilateral add up to 180°).
2. (b) Angles ACB and ADB both stand on chord AB, on the same side. Angle ACB = **40°** (angles in the same segment are equal).
3. (c) In triangle ABD: angle ABD = 180 - 70 - 40 = **70°** (angles in a triangle add up to 180°).

**Answer:** (a) 110° (b) 40° (c) 70°

## Common mistakes

- Using "angle in a semicircle" when the chord is not a diameter. The chord must go through the centre.
- Halving when you should double (or the other way round) for the angle at the centre. The angle at the centre is the **bigger** one.
- Using the cyclic quadrilateral rule on a quadrilateral that does not have all 4 corners on the circle.
- Writing the answer without the name of the theorem.

## Exam tips

- Mark every right angle on the diagram as soon as you see a diameter or a tangent.
- Write the theorem's name in full as the reason for each step.`,
  "4.8": `## What you need to know

> **Extended and O Level only.** This topic is not in IGCSE Core.

- **Equal chords are the same distance from the centre.**
- **The perpendicular bisector of a chord passes through the centre.** So a line from the centre at 90° to a chord cuts the chord in half.
- **Tangents from a point outside the circle are equal in length.**
- How to give reasons using these facts, often together with Pythagoras.

## Key words

| Word | Meaning |
|---|---|
| Chord | A straight line joining two points on a circle |
| Perpendicular bisector | A line that cuts another line in half at 90° |
| Equidistant | The same distance away |
| External point | A point outside the circle |

![Chord theorems and equal tangents](/images/maths/4-8-theorems.svg)

## 1. The perpendicular from the centre to a chord bisects the chord

A line from the centre at 90° to a chord cuts the chord exactly in half. This makes two right-angled triangles, so you can use Pythagoras.

**Problem:** A circle has centre O and radius 10 cm. Chord AB is 16 cm long. How far is the chord from the centre?

1. Draw OM from the centre at 90° to AB. M is the midpoint of AB (the perpendicular from the centre bisects the chord). So AM = 16 ÷ 2 = 8 cm.
2. OA is a radius, so OA = 10 cm.
3. Triangle OMA has a right angle at M. Pythagoras: OM² = 10² - 8² = 100 - 64 = 36.
4. OM = √36 = 6.

**Answer:** 6 cm

### Real-life example: a water pipe

A round pipe has an inside radius of 13 cm. The water surface across the pipe is 24 cm wide.

**Problem:** How far is the water surface from the centre of the pipe? If the water is below the centre, how deep is it?

1. The water surface is a chord of length 24 cm. Half of it is 12 cm (the perpendicular from the centre bisects the chord).
2. Distance from the centre: √(13² - 12²) = √(169 - 144) = √25 = 5 cm.
3. The water is below the centre. The bottom of the pipe is 13 cm below the centre, so the depth = 13 - 5 = 8 cm.

**Answer:** 5 cm from the centre, so the water is 8 cm deep.

## 2. The perpendicular bisector of a chord passes through the centre

### Real-life example: a broken plate

An archaeologist finds a piece of a round plate. She wants to know the size of the whole plate.

1. Draw two chords on the curved edge of the piece.
2. Construct the perpendicular bisector of each chord.
3. Both bisectors pass through the centre, so the point where they cross is the centre of the plate.
4. Measure from the centre to the edge to get the radius.

## 3. Equal chords are equidistant from the centre

If two chords are the same length, they are the same distance from the centre. It also works the other way: chords the same distance from the centre are the same length.

**Problem:** In a circle with centre O, chords AB and CD are both 16 cm long. The distance from O to AB is 6 cm. How far is CD from O?

1. AB and CD are equal chords.
2. Equal chords are equidistant from the centre.

**Answer:** 6 cm

## 4. Tangents from an external point are equal

From a point P outside a circle, you can draw two tangents, touching at A and B. Then **PA = PB**.

The shape OAPB is a **kite**: OA = OB (radii) and PA = PB (tangents). The angles at A and B are 90° (tangent and radius).

**Problem:** PA and PB are tangents from P to a circle with centre O. Angle APB = 50°. Find (a) angle AOB (b) angle PAB.

1. (a) Angles OAP and OBP are both 90° (tangent and radius). The angles in quadrilateral OAPB add up to 360°. Angle AOB = 360 - 90 - 90 - 50 = **130°**.
2. (b) PA = PB (tangents from an external point are equal). So triangle PAB is isosceles, and its base angles are equal. Angle PAB = (180 - 50) ÷ 2 = **65°**.

**Answer:** (a) 130° (b) 65°

**Problem:** Tangents from P touch the circle at A and B. PA = 7 cm. Find PB.

1. Tangents from an external point are equal in length.

**Answer:** 7 cm

> A belt around a wheel, or a rope pulled tight from a point to a round post, follows a tangent. That is why both sides of a belt from a point have the same length.

## Common mistakes

- Using the full chord length in Pythagoras. Use **half** the chord.
- Forgetting that OA and OB are radii, so they are equal.
- Thinking angle AOB equals angle APB. They add up to 180° in this kite.

## Exam tips

- Whenever a question has a chord and the centre, draw the perpendicular from the centre and look for a right-angled triangle.
- Whenever a question has two tangents from one point, mark the two equal lengths and the two right angles.`,
};

export function getMathsNotes(topic: string): string | undefined {
  return MATHS_NOTES[topic];
}
