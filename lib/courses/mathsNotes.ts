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
};

export function getMathsNotes(topic: string): string | undefined {
  return MATHS_NOTES[topic];
}
