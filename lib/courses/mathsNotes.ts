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
};

export function getMathsNotes(topic: string): string | undefined {
  return MATHS_NOTES[topic];
}
