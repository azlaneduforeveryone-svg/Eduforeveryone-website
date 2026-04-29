"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import ShareScore from "@/components/ShareScore";

type Category = "all" | "math" | "science" | "english";
type CellState = "correct" | "present" | "absent" | "revealed";
type KeyState  = "correct" | "present" | "absent" | "unused";
type Difficulty = "beginner" | "easy" | "medium" | "expert";

interface WordEntry {
  w: string; h: string; meaning: string; sentence: string; cat: string;
}
interface GuessRow { letters: string[]; results: CellState[]; }

// ── Word Bank (3–15 letters · 1682 words) ──────────────────────────────────────────
const WORDS: Record<string, WordEntry[]> = {
  math: [
  { w:"SUM", h:"Result of addition", meaning:"The total obtained by adding numbers.", sentence:"The sum of 5 and 7 is 12.", cat:"Math" },
  { w:"DIFF", h:"Result of subtraction", meaning:"The amount by which one number exceeds another.", sentence:"The difference between 10 and 3 is 7.", cat:"Math" },
  { w:"RATIO", h:"Comparison of two quantities", meaning:"A relationship showing relative sizes.", sentence:"The ratio of boys to girls was 2 to 1.", cat:"Math" },
  { w:"ANGLE", h:"Space between two intersecting lines", meaning:"Figure formed by two rays sharing an endpoint.", sentence:"Measure the angle with a protractor.", cat:"Math" },
  { w:"PRIME", h:"Number divisible by 1 and itself", meaning:"A natural number greater than 1 with no positive divisors other than 1 and itself.", sentence:"Seven is a prime number.", cat:"Math" },
  { w:"SOLVE", h:"Find the value of variable", meaning:"To determine the solution to an equation.", sentence:"Solve for x in the equation 2x = 10.", cat:"Math" },
  { w:"GRAPH", h:"Visual data display", meaning:"Diagram showing relationship between variables.", sentence:"Plot the points on a graph.", cat:"Math" },
  { w:"SLOPE", h:"Steepness of a line", meaning:"Rate of change of y relative to x.", sentence:"The slope of this line is 2.", cat:"Math" },
  { w:"CUBIC", h:"Raised to third power", meaning:"Involving the cube of a variable.", sentence:"The cubic equation had three solutions.", cat:"Math" },
  { w:"AXIS", h:"Reference line for graph", meaning:"Fixed line used for measurement or orientation.", sentence:"Plot the point on the x-axis.", cat:"Math" },
  { w:"MODE", h:"Most frequent value", meaning:"Value that appears most often in a dataset.", sentence:"The mode of [2,3,3,4] is 3.", cat:"Math" },
  { w:"MEDIAN", h:"Middle value", meaning:"Middle number in sorted data.", sentence:"The median of [1,3,5] is 3.", cat:"Math" },
  { w:"MEAN", h:"Average value", meaning:"Sum divided by count of numbers.", sentence:"The mean of 2,4,6 is 4.", cat:"Math" },
  { w:"RADIAN", h:"Angle measure alternative", meaning:"Angle subtended at circle center by arc equal to radius.", sentence:"Convert 180 degrees to pi radians.", cat:"Math" },
  { w:"SINE", h:"Trigonometric ratio", meaning:"Opposite over hypotenuse in right triangle.", sentence:"The sine of 30 degrees is 0.5.", cat:"Math" },
  { w:"COSINE", h:"Adjacent over hypotenuse", meaning:"Trigonometric function of an angle.", sentence:"Cosine of zero is one.", cat:"Math" },
  { w:"TANGENT", h:"Opposite over adjacent", meaning:"Trigonometric ratio in right triangles.", sentence:"Tangent of 45 degrees equals 1.", cat:"Math" },
  { w:"LOG", h:"Exponent inverse", meaning:"Power to which base must be raised.", sentence:"The log base 10 of 100 is 2.", cat:"Math" },
  { w:"EXPO", h:"Power notation", meaning:"Mathematical operation of raising to a power.", sentence:"The expo function grows quickly.", cat:"Math" },
  { w:"MOD", h:"Remainder after division", meaning:"Operation giving remainder when dividing two integers.", sentence:"7 mod 3 equals 1.", cat:"Math" },
  { w:"FACT", h:"Factorial operation", meaning:"Product of all positive integers up to n.", sentence:"The fact of 4 is 24.", cat:"Math" },
  { w:"ROOT", h:"Inverse of power", meaning:"Number that produces given number when multiplied by itself.", sentence:"The square root of 16 is 4.", cat:"Math" },
  { w:"ARRAY", h:"Ordered set of numbers", meaning:"Arrangement of values in rows and columns.", sentence:"The array had three rows and four columns.", cat:"Math" },
  { w:"SCALAR", h:"Single number quantity", meaning:"Quantity described by magnitude only.", sentence:"Speed is a scalar, velocity is a vector.", cat:"Math" },
  { w:"VECTOR", h:"Quantity with direction", meaning:"Mathematical object having magnitude and direction.", sentence:"The vector pointed northeast.", cat:"Math" },
  { w:"MATRIX", h:"Rectangular number grid", meaning:"Array used for linear transformations.", sentence:"Multiply the matrix by the vector.", cat:"Math" },
  { w:"TENSOR", h:"Multi-dimensional array", meaning:"Generalization of vectors and matrices.", sentence:"Stress in materials uses tensor math.", cat:"Math" },
  { w:"FRACT", h:"Part of whole", meaning:"Expression representing division of quantities.", sentence:"Three quarters is a fraction.", cat:"Math" },
  { w:"DECI", h:"Tenth part", meaning:"Prefix meaning one tenth.", sentence:"One deci meter is 0.1 meter.", cat:"Math" },
  { w:"CENT", h:"Hundredth part", meaning:"Prefix meaning one hundredth.", sentence:"There are 100 cents in a dollar.", cat:"Math" },
  { w:"MILLI", h:"Thousandth part", meaning:"Unit prefix meaning 0.001.", sentence:"One milli liter is 0.001 liters.", cat:"Math" },
  { w:"KILO", h:"Thousand times", meaning:"Unit prefix meaning 1000.", sentence:"One kilo gram is 1000 grams.", cat:"Math" },
  { w:"MICRO", h:"Millionth part", meaning:"Unit prefix meaning 0.000001.", sentence:"Micro seconds measure fast processes.", cat:"Math" },
  { w:"NANO", h:"Billionth part", meaning:"Unit prefix meaning 1e-9.", sentence:"Nano technology works at tiny scales.", cat:"Math" },
  { w:"PICO", h:"Trillionth part", meaning:"Unit prefix meaning 1e-12.", sentence:"Pico meters measure atomic distances.", cat:"Math" },
  { w:"FERMI", h:"Very small length", meaning:"Unit equal to one femtometer.", sentence:"Nuclear sizes are measured in fermi.", cat:"Math" },
  { w:"ANG", h:"Atomic distance unit", meaning:"Angstrom equals 0.1 nanometers.", sentence:"Bond lengths are given in ang units.", cat:"Math" },
  { w:"MOLE", h:"Amount of substance", meaning:"SI unit for quantity of particles.", sentence:"One mole contains Avogadro's number.", cat:"Math" },
  { w:"CAND", h:"Light intensity unit", meaning:"Candela measures luminous intensity.", sentence:"The candle emits one cand of light.", cat:"Math" },
  { w:"KELVIN", h:"Temperature absolute unit", meaning:"SI base unit for thermodynamic temperature.", sentence:"Water freezes at 273 kelvin.", cat:"Math" },
  { w:"OHM", h:"Resistance electrical unit", meaning:"Unit measuring opposition to current.", sentence:"The resistor has 10 ohms resistance.", cat:"Math" },
  { w:"VOLT", h:"Electrical potential unit", meaning:"Unit measuring potential difference.", sentence:"A standard battery provides 1.5 volts.", cat:"Math" },
  { w:"AMP", h:"Current unit", meaning:"Ampere measures electric current.", sentence:"The circuit draws 2 amps.", cat:"Math" },
  { w:"WATT", h:"Power unit", meaning:"Joule per second measures energy rate.", sentence:"A 60 watt bulb uses 60 joules per second.", cat:"Math" },
  { w:"JOULE", h:"Energy unit", meaning:"Work done when force moves one meter.", sentence:"Lifting an apple needs one joule.", cat:"Math" },
  { w:"NEWTON", h:"Force unit", meaning:"Force accelerating one kg by one meter per second squared.", sentence:"One newton is a small force.", cat:"Math" },
  { w:"PASCAL", h:"Pressure unit", meaning:"Newton per square meter.", sentence:"Air pressure is 101,000 pascals.", cat:"Math" },
  { w:"HERTZ", h:"Frequency unit", meaning:"Cycles per second.", sentence:"The tone has 440 hertz.", cat:"Math" },
  { w:"WEBER", h:"Magnetic flux unit", meaning:"SI derived unit for magnetism.", sentence:"The weber measures magnetic fields.", cat:"Math" },
  { w:"TESLA", h:"Magnetic field unit", meaning:"One weber per square meter.", sentence:"MRI machines use tesla strength.", cat:"Math" },
  { w:"HENRY", h:"Inductance unit", meaning:"Unit for electromagnetic induction.", sentence:"The coil has 5 henry inductance.", cat:"Math" },
  { w:"FARAD", h:"Capacitance unit", meaning:"Unit storing electrical charge.", sentence:"The capacitor is 1 farad.", cat:"Math" },
  { w:"SIEMENS", h:"Conductance unit", meaning:"Reciprocal of ohm.", sentence:"The material has high siemens value.", cat:"Math" },
  { w:"LUX", h:"Illuminance unit", meaning:"Lumen per square meter.", sentence:"Office lighting needs 500 lux.", cat:"Math" },
  { w:"LUMEN", h:"Luminous flux unit", meaning:"Measures visible light emitted.", sentence:"A candle emits about 12 lumens.", cat:"Math" },
  { w:"GRAY", h:"Absorbed radiation dose", meaning:"Joule per kilogram of tissue.", sentence:"Medical Xrays deliver grays.", cat:"Math" },
  { w:"SIEVERT", h:"Radiation health effect", meaning:"Equivalent dose accounting for tissue damage.", sentence:"Radiation workers track sieverts.", cat:"Math" },
  { w:"BECQ", h:"Radioactivity unit", meaning:"Becquerel equals one decay per second.", sentence:"The sample emitted 100 becq.", cat:"Math" },
  { w:"CURIE", h:"Old radioactivity unit", meaning:"One curie equals 37 billion becquerels.", sentence:"Marie Curie namesake unit.", cat:"Math" },
  { w:"RUTH", h:"Atom nucleus model", meaning:"Ernest Rutherford's planetary model.", sentence:"The ruth model has electrons orbiting.", cat:"Math" },
  { w:"PLANCK", h:"Quantum constant", meaning:"Fundamental constant of quantum mechanics.", sentence:"Planck's constant is very small.", cat:"Math" },
  { w:"DIRAC", h:"Quantum physicist", meaning:"Paul Dirac's equation for electrons.", sentence:"Dirac predicted antimatter.", cat:"Math" },
  { w:"EULER", h:"Mathematical genius", meaning:"Leonhard Euler's formula e^(iπ)+1=0.", sentence:"Euler's identity is beautiful.", cat:"Math" },
  { w:"GAUSS", h:"Number theory genius", meaning:"Carl Friedrich Gauss contributed to statistics.", sentence:"Gauss curve is normal distribution.", cat:"Math" },
  { w:"RIEMANN", h:"Prime function hypothesis", meaning:"Bernhard Riemann's zeta function.", sentence:"Riemann hypothesis remains unproven.", cat:"Math" },
  { w:"HILBERT", h:"Mathematical problems", meaning:"David Hilbert's 23 unsolved problems.", sentence:"Hilbert space is infinite dimensional.", cat:"Math" },
  { w:"NOETHER", h:"Symmetry theorem", meaning:"Emmy Noether linked symmetry and conservation.", sentence:"Noether's theorem is fundamental.", cat:"Math" },
  { w:"TURING", h:"Computation pioneer", meaning:"Alan Turing cracked Enigma and defined computing.", sentence:"Turing machine is theoretical computer.", cat:"Math" },
  { w:"BOOLE", h:"Logic algebra", meaning:"George Boole created Boolean logic.", sentence:"Boole operators are AND OR NOT.", cat:"Math" },
  { w:"GALOIS", h:"Group theory founder", meaning:"Évariste Galois invented group theory.", sentence:"Galois theory solves polynomial equations.", cat:"Math" },
  { w:"FIB", h:"Sequence 1 1 2 3 5 8", meaning:"Fibonacci numbers appear in nature.", sentence:"The fib ratio is golden.", cat:"Math" },
  { w:"GOLDEN", h:"Divine proportion", meaning:"Ratio of about 1.618.", sentence:"Golden rectangle is aesthetically pleasing.", cat:"Math" },
  { w:"CHAOS", h:"Sensitive dependence", meaning:"Small changes cause large effects.", sentence:"Chaos theory explains weather unpredictability.", cat:"Math" },
  { w:"FRACTAL", h:"Self similar pattern", meaning:"Geometric shape repeating at scales.", sentence:"Fractal coastlines have infinite length.", cat:"Math" },
  { w:"MANDELBROT", h:"Famous fractal set", meaning:"Complex plane set defined by iteration.", sentence:"Mandelbrot set is infinitely detailed.", cat:"Math" },
  { w:"JULIA", h:"Fractal type", meaning:"Related to Mandelbrot set.", sentence:"Julia sets vary by parameter.", cat:"Math" },
  { w:"SIERPINSKI", h:"Triangle fractal", meaning:"Self similar triangle of holes.", sentence:"Sierpinski triangle has zero area.", cat:"Math" },
  { w:"CANTO", h:"Set fractal dust", meaning:"Cantor set is uncountable but measure zero.", sentence:"Canto dust is removed middle thirds.", cat:"Math" },
  { w:"KOCH", h:"Snowflake curve", meaning:"Infinite perimeter finite area.", sentence:"Koch curve is continuous nowhere differentiable.", cat:"Math" },
  { w:"BIFUR", h:"Split into two branches", meaning:"Sudden change in dynamical system.", sentence:"Bifur point transitions to chaos.", cat:"Math" },
  { w:"ATTRACTOR", h:"Stable chaotic state", meaning:"Set toward which system evolves.", sentence:"Lorenz attractor looks like butterfly.", cat:"Math" },
  { w:"LORENTZ", h:"Butterfly attractor", meaning:"Edward Lorenz's weather chaos model.", sentence:"Lorentz system has three equations.", cat:"Math" },
  { w:"LYAPUNOV", h:"Exponent of chaos", meaning:"Measures sensitivity to initial conditions.", sentence:"Lyapunov exponent positive means chaos.", cat:"Math" },
  { w:"ERGOD", h:"Time equals average property", meaning:"System explores all states equally.", sentence:"Ergod hypothesis enables statistical mechanics.", cat:"Math" },
  { w:"MARKOV", h:"Memoryless process", meaning:"Future depends only on present.", sentence:"Markov chain models random walks.", cat:"Math" },
  { w:"POISSON", h:"Rare event distribution", meaning:"Probability of low probability events.", sentence:"Poisson distribution models radioactive decay.", cat:"Math" },
  { w:"BAYES", h:"Conditional probability", meaning:"P(A|B) = P(B|A)P(A)/P(B).", sentence:"Bayes theorem updates beliefs with evidence.", cat:"Math" },
  { w:"FREQ", h:"Occurrence count", meaning:"Number of times value appears.", sentence:"The freq of 5 was highest.", cat:"Math" },
  { w:"SIGMA", h:"Summation symbol", meaning:"Greek letter meaning sum over terms.", sentence:"Sigma notation simplifies long sums.", cat:"Math" },
  { w:"DELTA", h:"Change symbol", meaning:"Greek letter indicating difference.", sentence:"Delta x means change in x.", cat:"Math" },
  { w:"THETA", h:"Angle variable", meaning:"Greek letter often used for unknown angle.", sentence:"Solve for theta in radians.", cat:"Math" },
  { w:"ALPHA", h:"First Greek letter", meaning:"Used as constant or significance level.", sentence:"Alpha equals 0.05 in statistics.", cat:"Math" },
  { w:"BETA", h:"Second Greek letter", meaning:"Type II error probability.", sentence:"Beta measures test power.", cat:"Math" },
  { w:"GAMMA", h:"Third Greek letter", meaning:"Gamma function extends factorial.", sentence:"Gamma of n equals n minus one factorial.", cat:"Math" },
  { w:"RHO", h:"Correlation symbol", meaning:"Greek rho measures linear association.", sentence:"Rho close to 1 means strong correlation.", cat:"Math" },
  { w:"TAU", h:"Circle constant alternative", meaning:"Tau equals 2 pi radians.", sentence:"Tau day celebrates 6.283185.", cat:"Math" },
  { w:"PHI", h:"Golden ratio symbol", meaning:"Phi equals approximately 1.618033.", sentence:"Phi appears in pentagrams.", cat:"Math" },
  { w:"CHI", h:"Statistical test", meaning:"Chi squared goodness of fit test.", sentence:"Chi test checks independence.", cat:"Math" },
  { w:"PSI", h:"Wave function symbol", meaning:"Psi represents quantum state.", sentence:"Psi squared gives probability density.", cat:"Math" },
  { w:"OMEGA", h:"Last Greek letter", meaning:"Omega represents ohms or angular frequency.", sentence:"Omega equals 2 pi f.", cat:"Math" },
  { w:"LIT", h:"Resolution of equation", meaning:"Literal coefficient in algebra.", sentence:"Solve the lit equation for x.", cat:"Math" },
  { w:"VAR", h:"Unknown quantity", meaning:"Symbol representing changeable value.", sentence:"Let var x equal the unknown.", cat:"Math" },
  { w:"FUNC", h:"Mathematical rule", meaning:"Relation mapping input to output.", sentence:"The func f(x) = x squared.", cat:"Math" },
  { w:"DOM", h:"All possible inputs", meaning:"Set of values for independent variable.", sentence:"The dom of square root is nonnegative.", cat:"Math" },
  { w:"RANGE", h:"All possible outputs", meaning:"Set of resulting dependent values.", sentence:"The range of sine is -1 to 1.", cat:"Math" },
  { w:"INVAR", h:"Unchanging under transformation", meaning:"Property that remains constant.", sentence:"The invar of rotation is distance.", cat:"Math" },
  { w:"TRANS", h:"Shape movement operation", meaning:"Geometric change of position.", sentence:"The trans slid the triangle right.", cat:"Math" },
  { w:"ROTATE", h:"Turn around center", meaning:"Circular movement preserving distance.", sentence:"Rotate the shape by 90 degrees.", cat:"Math" },
  { w:"REFLECT", h:"Mirror over axis", meaning:"Flip across a line.", sentence:"Reflect the point over the y-axis.", cat:"Math" },
  { w:"DILATE", h:"Change size proportionally", meaning:"Scale factor expansion or contraction.", sentence:"Dilate the square by factor 2.", cat:"Math" },
  { w:"SHEAR", h:"Slant shape transformation", meaning:"Slide parallel to an axis.", sentence:"Shear turns rectangle into parallelogram.", cat:"Math" },
  { w:"PROJ", h:"Shadow onto line", meaning:"Mapping onto lower dimension.", sentence:"The proj of vector onto axis is component.", cat:"Math" },
  { w:"NORM", h:"Length of vector", meaning:"Square root of sum of squares.", sentence:"The norm of (3,4) is 5.", cat:"Math" },
  { w:"CROSS", h:"Vector perpendicular product", meaning:"Magnitude of parallelogram area.", sentence:"The cross of i and j is k.", cat:"Math" },
  { w:"DET", h:"Scaling factor of matrix", meaning:"Determinant measures volume change.", sentence:"The det of identity matrix is 1.", cat:"Math" },
  { w:"TRACE", h:"Sum of diagonal entries", meaning:"Invariant under similarity.", sentence:"The trace equals sum of eigenvalues.", cat:"Math" },
  { w:"EIGEN", h:"Characteristic vector", meaning:"Vector scaling under transformation.", sentence:"The eigen values satisfy Av = λv.", cat:"Math" },
  { w:"RANK", h:"Dimension of image", meaning:"Number of linearly independent columns.", sentence:"The rank of invertible matrix equals size.", cat:"Math" },
  { w:"NULL", h:"Solution to Ax=0", meaning:"Kernel of linear transformation.", sentence:"The null space contains zero vector.", cat:"Math" },
  { w:"SPAN", h:"All linear combinations", meaning:"Set of all vectors reachable.", sentence:"The two vectors span the plane.", cat:"Math" },
  { w:"BASIS", h:"Minimal spanning set", meaning:"Linearly independent set generating space.", sentence:"The basis for R2 is i and j.", cat:"Math" },
  { w:"DIM", h:"Number of basis vectors", meaning:"Dimension of vector space.", sentence:"The dim of plane is 2.", cat:"Math" },
  { w:"DUAL", h:"Space of linear functionals", meaning:"Maps vectors to scalars.", sentence:"The dual basis pairs with original.", cat:"Math" },
  { w:"TENS", h:"Product of spaces", meaning:"Multidimensional array generalization.", sentence:"The tens of vectors is multilinear.", cat:"Math" },
  { w:"SYM", h:"Invariant under swapping", meaning:"Symmetric matrix equals its transpose.", sentence:"The sym property is A^T = A.", cat:"Math" },
  { w:"SKEW", h:"Antisymmetric matrix", meaning:"Matrix satisfying A^T = -A.", sentence:"Skew diagonal entries are zero.", cat:"Math" },
  { w:"ORTH", h:"Perpendicular vectors", meaning:"Orthogonal matrix satisfies Q^T Q = I.", sentence:"Orth columns are unit length.", cat:"Math" },
  { w:"UNIT", h:"Length equals one", meaning:"Vector with norm 1.", sentence:"The unit vector points direction.", cat:"Math" },
  { w:"POSDEF", h:"Positive eigenvalues", meaning:"Quadratic form positive for nonzero vectors.", sentence:"Posdef matrices are invertible.", cat:"Math" },
  { w:"NEGDEF", h:"Negative eigenvalues", meaning:"All eigenvalues negative.", sentence:"Negdef quadratic forms are concave.", cat:"Math" },
  { w:"INDEF", h:"Both signs eigenvalues", meaning:"Indefinite can be positive or negative.", sentence:"Indef matrix has saddle point.", cat:"Math" },
  { w:"DIAG", h:"Nonzero only on diagonal", meaning:"Diagonal matrix is simple to invert.", sentence:"Diag entries are eigenvalues.", cat:"Math" },
  { w:"TRI", h:"Zeros above or below", meaning:"Triangular matrix easy determinant.", sentence:"Tri matrices have diagonal product determinant.", cat:"Math" },
  { w:"PERM", h:"Rearrangement matrix", meaning:"Identity rows shuffled.", sentence:"Perm matrix is orthogonal.", cat:"Math" },
  { w:"UNITAR", h:"Complex orthogonal", meaning:"U*U = I for complex entries.", sentence:"Unitar preserves complex inner product.", cat:"Math" },
  { w:"HERM", h:"Equal to conjugate transpose", meaning:"Hermitian matrices have real eigenvalues.", sentence:"The herm property is A* = A.", cat:"Math" },
  { w:"REAL", h:"Not imaginary", meaning:"Real numbers have no i component.", sentence:"The solution is a real number.", cat:"Math" },
  { w:"IMAG", h:"Multiple of square root of -1", meaning:"Imaginary unit i squared equals -1.", sentence:"The imag part of 3+4i is 4.", cat:"Math" },
  { w:"COMP", h:"Has real and imaginary parts", meaning:"Complex number z = a + bi.", sentence:"The comp plane is two dimensional.", cat:"Math" },
  { w:"CONJ", h:"Flip sign of imag", meaning:"Complex conjugate of a+bi is a-bi.", sentence:"The conj of i is -i.", cat:"Math" },
  { w:"MODU", h:"Distance from origin", meaning:"Absolute value of complex number.", sentence:"The modu of 3+4i is 5.", cat:"Math" },
  { w:"ARG", h:"Direction angle of complex", meaning:"Argument measured in radians.", sentence:"The arg of 1 is 0.", cat:"Math" },
  { w:"POLY", h:"Multiple term expression", meaning:"Polynomial has sum of powers.", sentence:"Poly of degree 2 is quadratic.", cat:"Math" },
  { w:"QUAD", h:"Degree 2 polynomial", meaning:"Equation ax^2 + bx + c = 0.", sentence:"Quad formula is x = [-b ± sqrt(b^2-4ac)]/(2a).", cat:"Math" },
  { w:"QUART", h:"Degree 4 polynomial", meaning:"Quartic equation can have 4 roots.", sentence:"Quart solved by Ferrari method.", cat:"Math" },
  { w:"QUINT", h:"Degree 5 polynomial", meaning:"Quintic generally not solvable by radicals.", sentence:"Quint equation proved impossible by Abel.", cat:"Math" },
  { w:"COEFF", h:"Multiplier of variable", meaning:"Constant factor in polynomial term.", sentence:"The coeff of x^2 is 3.", cat:"Math" },
  { w:"CONST", h:"Fixed term not multiplied", meaning:"Constant term does not vary.", sentence:"The const of x+5 is 5.", cat:"Math" },
  { w:"LEAD", h:"Highest degree coefficient", meaning:"Leading term dominates large x.", sentence:"Lead coeff of 4x^3+2x is 4.", cat:"Math" },
  { w:"MONIC", h:"Leading coefficient 1", meaning:"Mononomial polynomial factor.", sentence:"The monic polynomial is easier to factor.", cat:"Math" },
  { w:"ZERO", h:"Where function vanishes", meaning:"X-intercept of graph.", sentence:"The zero of sine occurs at 0 and π.", cat:"Math" },
  { w:"MULT", h:"Root repeated count", meaning:"Multiplicity describes how many times root appears.", sentence:"The mult of (x-1)^2 is 2.", cat:"Math" },
  { w:"DIVIS", h:"Even division without remainder", meaning:"One polynomial divides another.", sentence:"The divis of x^2-1 by x-1 is x+1.", cat:"Math" },
  { w:"REM", h:"Leftover after division", meaning:"Remainder theorem value at point.", sentence:"The rem when dividing by x-c is f(c).", cat:"Math" },
  { w:"SYNT", h:"Shortcut division method", meaning:"Synthetic division uses coefficients only.", sentence:"Synt division is faster than long.", cat:"Math" },
  { w:"RAT", h:"Ratio of polynomials", meaning:"Rational function has numerator and denominator.", sentence:"The rat expression has vertical asymptotes.", cat:"Math" },
  { w:"DENOM", h:"Bottom of fraction", meaning:"Divisor in rational expression.", sentence:"The denom cannot be zero.", cat:"Math" },
  { w:"NUMER", h:"Top of fraction", meaning:"Numerator in rational expression.", sentence:"The numer of 3/4 is 3.", cat:"Math" },
  { w:"ASYMP", h:"Line curve approaches", meaning:"Asymptote graphical behavior near infinity.", sentence:"The asymp of 1/x is y=0.", cat:"Math" },
  { w:"HOLE", h:"Missing point in graph", meaning:"Removable discontinuity.", sentence:"The hole appears where factor cancels.", cat:"Math" },
  { w:"CONT", h:"Unbroken graph", meaning:"Continuous function has no jumps.", sentence:"The cont of a polynomial is everywhere.", cat:"Math" },
  { w:"DISC", h:"Hole or jump or vertical asymptote", meaning:"Discontinuity interrupts graph.", sentence:"The disc of 1/x is at x=0.", cat:"Math" },
  { w:"LIMIT", h:"Value function approaches", meaning:"Limiting behavior near point.", sentence:"The limit of 1/x as x→∞ is 0.", cat:"Math" },
  { w:"DERIV", h:"Instantaneous rate of change", meaning:"Derivative is slope of tangent line.", sentence:"The deriv of x^2 is 2x.", cat:"Math" },
  { w:"INTEG", h:"Area under curve", meaning:"Integral accumulates quantity.", sentence:"The integ of velocity is position.", cat:"Math" },
  { w:"DIFFE", h:"Derivative operation", meaning:"Differential calculus studies rates.", sentence:"Diff equation relates function to deriv.", cat:"Math" },
  { w:"PARTI", h:"Derivative with respect to one variable", meaning:"Partial derivative holds other vars constant.", sentence:"The parti of f(x,y) with respect to x is ∂f/∂x.", cat:"Math" },
  { w:"GRAD", h:"Vector of partial derivatives", meaning:"Gradient points steepest ascent.", sentence:"The grad of f is ∇f.", cat:"Math" },
  { w:"CURL", h:"Rotation of vector field", meaning:"Curl measures vorticity.", sentence:"The curl of gradient is zero.", cat:"Math" },
  { w:"DIV", h:"Convergence of vector field", meaning:"Divergence measures source strength.", sentence:"The div of curl is zero.", cat:"Math" },
  { w:"LAPL", h:"Sum of second partials", meaning:"Laplacian appears in heat equation.", sentence:"The lapl of u is ∇²u.", cat:"Math" },
  { w:"SEQ", h:"Ordered list of numbers", meaning:"Sequence indexed by integers.", sentence:"The seq 1, 1/2, 1/3 converges.", cat:"Math" },
  { w:"SERI", h:"Sum of sequence terms", meaning:"Series can converge or diverge.", sentence:"The seri 1 + 1/2 + 1/4 + ... equals 2.", cat:"Math" },
  { w:"CONV", h:"Tends to finite limit", meaning:"Convergent series has finite sum.", sentence:"The conv of 1/n^2 is π^2/6.", cat:"Math" },
  { w:"DIVERG", h:"Grows without bound", meaning:"Divergent series does not have finite sum.", sentence:"The diverg of 1/n is harmonic.", cat:"Math" },
  { w:"GEOM", h:"Ratio between terms", meaning:"Geometric sequence multiplies by constant.", sentence:"The geom series a + ar + ar^2 + ...", cat:"Math" },
  { w:"ARTH", h:"Arithmetic sequence constant difference", meaning:"Arithmetic progression adds constant.", sentence:"The arth seq 2,5,8,11.", cat:"Math" },
  { w:"TAIL", h:"End of series after N terms", meaning:"Tail determines convergence.", sentence:"The tail of a convergent series is small.", cat:"Math" },
  { w:"PART", h:"Sum of first N terms", meaning:"Partial sum approximates infinite series.", sentence:"The part of harmonic series grows slowly.", cat:"Math" },
  { w:"TELESCOP", h:"Canceling series", meaning:"Terms collapse leaving first minus last.", sentence:"Telescoping sum simplifies dramatically.", cat:"Math" },
  { w:"POWER", h:"Sum of a_n x^n", meaning:"Power series defines analytic function.", sentence:"The power series for e^x converges everywhere.", cat:"Math" },
  { w:"RADIU", h:"Convergence interval radius", meaning:"Radius of convergence of power series.", sentence:"The radiu of 1/(1-x) is 1.", cat:"Math" },
  { w:"TAYLO", h:"Polynomial approximation", meaning:"Taylor series expands around point.", sentence:"The taylo series of sin x has odd powers.", cat:"Math" },
  { w:"MACLA", h:"Taylor at zero", meaning:"Maclaurin series simplifies computations.", sentence:"The macla of cos x is 1 - x^2/2 + ...", cat:"Math" },
  { w:"FOURI", h:"Trigonometric series", meaning:"Fourier series represents periodic functions.", sentence:"The fouri expansion has sine and cosine terms.", cat:"Math" },
  { w:"HARMO", h:"Frequency multiples", meaning:"Harmonic analysis decomposes signals.", sentence:"The harmo of a square wave are odd.", cat:"Math" },
  { w:"BANDW", h:"Range of frequencies", meaning:"Bandwidth limits signal resolution.", sentence:"The bandw theorem relates time and frequency.", cat:"Math" },
  { w:"SAMPL", h:"Discrete time measurement", meaning:"Sampling reconstructs continuous signal.", sentence:"The sampl rate must exceed Nyquist.", cat:"Math" },
  { w:"NYQUI", h:"Twice max frequency", meaning:"Nyquist rate avoids aliasing.", sentence:"The nyqui criterion prevents distortion.", cat:"Math" },
  { w:"ALIAS", h:"Wrong frequency appearance", meaning:"Aliasing occurs when under sampled.", sentence:"The alias looks like low frequency.", cat:"Math" },
  { w:"FFT", h:"Fast Fourier transform", meaning:"Algorithm computing discrete Fourier transform.", sentence:"The fft speeds up spectral analysis.", cat:"Math" },
  { w:"CONVO", h:"Blending of functions", meaning:"Convolution integral f * g.", sentence:"The convo of two Gaussians is Gaussian.", cat:"Math" },
  { w:"CORRE", h:"Similarity measure", meaning:"Cross correlation compares signals.", sentence:"The corre function peaks at lag.", cat:"Math" },
  { w:"AUTO", h:"Correlation with itself", meaning:"Autocorrelation reveals periodicity.", sentence:"The auto of white noise is delta.", cat:"Math" },
  { w:"NOISE", h:"Random fluctuations", meaning:"Noise obscures signal.", sentence:"The noise is assumed Gaussian.", cat:"Math" },
  { w:"ERROR", h:"Difference from true value", meaning:"Error measurement inaccuracies.", sentence:"The error is squared in loss function.", cat:"Math" },
  { w:"RESID", h:"Observed minus predicted", meaning:"Residual analysis checks model fit.", sentence:"The resid plot should be random.", cat:"Math" },
  { w:"FIT", h:"Model agreement with data", meaning:"Goodness of fit measures.", sentence:"The fit of linear regression uses R-squared.", cat:"Math" },
  { w:"REGRE", h:"Statistical modeling", meaning:"Regression predicts from variables.", sentence:"The regre line minimizes squared error.", cat:"Math" },
  { w:"CORR", h:"Linear association strength", meaning:"Correlation coefficient between -1 and 1.", sentence:"The corr of height and weight is positive.", cat:"Math" },
  { w:"COV", h:"Joint variability", meaning:"Covariance indicates direction of relation.", sentence:"The cov of independent variables is zero.", cat:"Math" },
  { w:"VARIAN", h:"Spread around mean", meaning:"Variance is average squared deviation.", sentence:"The varian of constant is zero.", cat:"Math" },
  { w:"STD", h:"Dev square root of variance", meaning:"Standard deviation in same units.", sentence:"The std of normal distribution is sigma.", cat:"Math" },
  { w:"KURT", h:"Tailedness measure", meaning:"Kurtosis describes outlier propensity.", sentence:"The kurt of normal distribution is 3.", cat:"Math" },
  { w:"MOM", h:"Expectation of power", meaning:"Moments characterize distribution.", sentence:"The first mom is mean, second is variance.", cat:"Math" },
  { w:"QUANT", h:"Specified proportion below", meaning:"Quantile divides probability.", sentence:"The median is 0.5 quantile.", cat:"Math" },
  { w:"PERC", h:"Percentile rank", meaning:"Percentage of data below value.", sentence:"The perc of 50 is median.", cat:"Math" },
  { w:"BOX", h:"Picture of quantiles", meaning:"Box plot shows median and IQR.", sentence:"The box has whiskers for outliers.", cat:"Math" },
  { w:"OUTL", h:"Extreme value far from rest", meaning:"Outlier may be measurement error.", sentence:"The outl skews the mean.", cat:"Math" },
  { w:"ZSCORE", h:"Standardized deviation", meaning:"Z = (x - μ)/σ.", sentence:"The zscore of mean is 0.", cat:"Math" },
  { w:"PVALUE", h:"Probability under null", meaning:"P value tests significance.", sentence:"The pvalue below 0.05 is significant.", cat:"Math" },
  { w:"TEST", h:"Statistical hypothesis check", meaning:"Test decides between null and alternative.", sentence:"The test compares sample to population.", cat:"Math" },
  { w:"TTEST", h:"Means comparison test", meaning:"Student's t test for small sample.", sentence:"The ttest requires normality assumption.", cat:"Math" },
  { w:"ANOVA", h:"Multiple means comparison", meaning:"Analysis of variance partitions total variance.", sentence:"The anova F test compares groups.", cat:"Math" },
  { w:"CHISQ", h:"Goodness of fit", meaning:"Chi squared test for categorical data.", sentence:"The chisq checks independence in contingency table.", cat:"Math" },
  { w:"PRIOR", h:"Knowledge before data", meaning:"Prior distribution represents initial belief.", sentence:"The prior is updated to posterior.", cat:"Math" },
  { w:"POST", h:"Updated after data", meaning:"Posterior distribution combines prior and likelihood.", sentence:"The post mean is weighted average.", cat:"Math" },
  { w:"LIKE", h:"Probability of data given parameter", meaning:"Likelihood function measures plausibility.", sentence:"The like of parameter is maximized by MLE.", cat:"Math" },
  { w:"MLE", h:"Parameter maximizing likelihood", meaning:"Maximum likelihood estimator is consistent.", sentence:"The mle of mean is sample average.", cat:"Math" },
  { w:"BOOT", h:"Resampling technique", meaning:"Bootstrap estimates uncertainty.", sentence:"The boot draws many samples with replacement.", cat:"Math" },
  { w:"JACK", h:"Leave one out resampling", meaning:"Jackknife reduces bias.", sentence:"The jack replicates delete one observation each time.", cat:"Math" },
  { w:"MARKO", h:"Simulation method", meaning:"Markov chain Monte Carlo samples posterior.", sentence:"The marko algorithm explores parameter space.", cat:"Math" },
  { w:"METRO", h:"MCMC algorithm", meaning:"Metropolis Hastings accepts or rejects proposals.", sentence:"The metro step uses ratio of likelihoods.", cat:"Math" },
  { w:"GIBBS", h:"Conditional sampling", meaning:"Gibbs sampler updates one variable at a time.", sentence:"The gibbs algorithm cycles through parameters.", cat:"Math" },
  { w:"ENTR", h:"Uncertainty measure", meaning:"Shannon entropy of distribution.", sentence:"The entr is maximal for uniform.", cat:"Math" },
  { w:"INFO", h:"Reduction in entropy", meaning:"Mutual information between variables.", sentence:"The info gain is used in decision trees.", cat:"Math" },
  { w:"BIAS", h:"Systematic error", meaning:"Bias shifts average away from truth.", sentence:"The bias variance tradeoff is key.", cat:"Math" },
  { w:"TRADE", h:"Off bias versus variance", meaning:"Increasing complexity reduces bias but increases variance.", sentence:"The trade off chooses optimal model complexity.", cat:"Math" },
  { w:"OVER", h:"Fit noise not signal", meaning:"Overfitting reduces generalization.", sentence:"The over model has low training error high test error.", cat:"Math" },
  { w:"UNDER", h:"Fails to capture pattern", meaning:"Underfitting has high bias.", sentence:"The under model is too simple.", cat:"Math" },
  { w:"REGUL", h:"Penalize complexity", meaning:"Regularization adds penalty to loss.", sentence:"Ridge regul shrinks coefficients.", cat:"Math" },
  { w:"LASSO", h:"L1 regularization", meaning:"Lasso yields sparse coefficients.", sentence:"The lasso selects important features.", cat:"Math" },
  { w:"RIDGE", h:"L2 regularization", meaning:"Ridge shrinks coefficients toward zero.", sentence:"The ridge solution is always unique.", cat:"Math" },
  { w:"ELASTIC", h:"Net hybrid penalty", meaning:"Combines L1 and L2.", sentence:"The elastic net works for correlated predictors.", cat:"Math" },
  { w:"CROSSVAL", h:"Validation splitting", meaning:"Cross validation estimates test error.", sentence:"The crossval divides data into folds.", cat:"Math" },
  { w:"TRAIN", h:"Data for fitting", meaning:"Training set learns parameters.", sentence:"The train error is optimistic.", cat:"Math" },
  { w:"VALID", h:"Tuning set for hyperparameters", meaning:"Validation set selects model.", sentence:"The valid performance guides choices.", cat:"Math" },
  { w:"FOLD", h:"Partition for crossval", meaning:"K fold splits data k times.", sentence:"Each fold acts as validation once.", cat:"Math" },
  { w:"BOOTS", h:"Sample with replacement", meaning:"Bootstrap resamples from data.", sentence:"The boots replicates many datasets.", cat:"Math" },
  { w:"AUC", h:"Area under curve", meaning:"ROC AUC measures classifier.", sentence:"The auc of random classifier is 0.5.", cat:"Math" },
  { w:"ROC", h:"Receiver operating characteristic", meaning:"ROC plots TPR vs FPR.", sentence:"The roc curve shows tradeoff.", cat:"Math" },
  { w:"PREC", h:"Positive predictive value", meaning:"Precision = TP/(TP+FP).", sentence:"The prec is high when false positives low.", cat:"Math" },
  { w:"RECALL", h:"Sensitivity or TPR", meaning:"Recall = TP/(TP+FN).", sentence:"The recall is high when false negatives low.", cat:"Math" },
  { w:"ACCU", h:"Correct predictions total", meaning:"Accuracy = (TP+TN)/total.", sentence:"The accu can mislead for imbalanced classes.", cat:"Math" },
  { w:"MATH", h:"Complete category", meaning:"This row finishes math section.", sentence:"End of math vocabulary.", cat:"Math" },
  { w:"STAT", h:"Statistic or data point", meaning:"Numerical summary of data.", sentence:"The stat was the mean of the sample.", cat:"Math" },
  { w:"RANDOM", h:"Governed by chance", meaning:"No predictable pattern.", sentence:"Choose a random number between 1 and 10.", cat:"Math" },
  { w:"SAMPLE", h:"Subset of population", meaning:"Representative group for study.", sentence:"The sample size was 500 people.", cat:"Math" },
  { w:"POPUL", h:"Entire group of interest", meaning:"Complete set of individuals.", sentence:"The population mean is denoted by mu.", cat:"Math" },
  { w:"PARAM", h:"Characteristic of population", meaning:"Numerical descriptor like mean or variance.", sentence:"The parameter is fixed but unknown.", cat:"Math" },
  { w:"ESTIM", h:"Approximation from sample", meaning:"Sample statistic estimating parameter.", sentence:"The estimate was close to the true value.", cat:"Math" },
  { w:"PRECIS", h:"Closeness of repeated measurements", meaning:"Low variability among estimates.", sentence:"High precision means small standard error.", cat:"Math" },
  { w:"ACCURA", h:"Closeness to true value", meaning:"Combination of bias and precision.", sentence:"Accuracy requires both low bias and high precision.", cat:"Math" },
  { w:"MARGIN", h:"Error half confidence interval", meaning:"Range around estimate.", sentence:"The margin of error was plus or minus 3 percent.", cat:"Math" },
  { w:"CONFID", h:"Interval plausible range", meaning:"Interval containing parameter with confidence level.", sentence:"The 95 percent confidence interval was narrow.", cat:"Math" },
  { w:"LEVEL", h:"Confidence probability", meaning:"Long run coverage frequency.", sentence:"Use a 99 percent level for more certainty.", cat:"Math" },
  { w:"PVAL", h:"Probability under null", meaning:"Strength of evidence against null.", sentence:"The pval was less than 0.05.", cat:"Math" },
  { w:"EFFECT", h:"Magnitude of difference", meaning:"Practical significance measure.", sentence:"The effect size was Cohen's d of 0.5.", cat:"Math" },
  { w:"COHEN", h:"D standardized difference", meaning:"Mean difference divided by standard deviation.", sentence:"Cohen's d of 0.2 is small.", cat:"Math" },
  { w:"ODDS", h:"Ratio of probabilities", meaning:"Probability of event over non event.", sentence:"The odds of winning were 1 to 10.", cat:"Math" },
  { w:"LOGIT", h:"Log of odds", meaning:"Used in logistic regression.", sentence:"The logit links probability to linear predictors.", cat:"Math" },
  { w:"LOGISTIC", h:"Regression for binary outcome", meaning:"Models probability of event.", sentence:"Logistic curve is S shaped.", cat:"Math" },
  { w:"LINEAR", h:"Regression for continuous outcome", meaning:"Models mean of response.", sentence:"Linear regression assumes constant variance.", cat:"Math" },
  { w:"LEVERAGE", h:"Extreme predictor value", meaning:"Influential observation potential.", sentence:"High leverage points can distort regression.", cat:"Math" },
  { w:"INFLUEN", h:"Observation changing coefficients", meaning:"Cook's distance measures influence.", sentence:"Delete influential point to check robustness.", cat:"Math" },
  { w:"MULTICO", h:"Correlated predictors", meaning:"Collinearity inflates variance.", sentence:"Multicollinearity makes coefficient estimates unstable.", cat:"Math" },
  { w:"VIF", h:"Variance inflation factor", meaning:"Detects multicollinearity.", sentence:"VIF above 10 indicates problem.", cat:"Math" },
  { w:"PENALTY", h:"Added to loss function", meaning:"Discourages complex models.", sentence:"Penalty term reduces overfitting.", cat:"Math" },
  { w:"LAMBDA", h:"Tuning parameter for penalty", meaning:"Controls strength of regularization.", sentence:"Lambda chosen by cross validation.", cat:"Math" },
  { w:"KFOLD", h:"Number of partitions in CV", meaning:"Typically 5 or 10.", sentence:"Kfold reduces variance of estimate.", cat:"Math" },
  { w:"LOOCV", h:"Leave one out cross validation", meaning:"Each observation is test set.", sentence:"LOOCV is computationally intensive.", cat:"Math" },
  { w:"BOOTSTRAP", h:"Resampling with replacement", meaning:"Estimates sampling distribution.", sentence:"Bootstrap percentile confidence intervals.", cat:"Math" },
  { w:"BAGGING", h:"Bootstrap aggregating", meaning:"Reduces variance of unstable estimators.", sentence:"Bagging improves decision trees.", cat:"Math" },
  { w:"BOOST", h:"Iterative weak learner combination", meaning:"Sequentially fits residuals.", sentence:"Boosting reduces bias.", cat:"Math" },
  { w:"TREE", h:"Decision tree model", meaning:"Splits feature space recursively.", sentence:"Tree is easy to interpret.", cat:"Math" },
  { w:"SPLIT", h:"Partition of data at node", meaning:"Choose best feature threshold.", sentence:"Split minimizes impurity.", cat:"Math" },
  { w:"IMPURITY", h:"Mixedness of classes", meaning:"Gini entropy misclassification.", sentence:"Lower impurity better split.", cat:"Math" },
  { w:"GINI", h:"Measure of impurity", meaning:"Probability of misclassification.", sentence:"Gini of 0 means pure node.", cat:"Math" },
  { w:"ENTROPY", h:"Information based impurity", meaning:"Sum p log p.", sentence:"Entropy zero for pure node.", cat:"Math" },
  { w:"PRUNE", h:"Reduce tree size after growth", meaning:"Remove weak branches.", sentence:"Pruning prevents overfitting.", cat:"Math" },
  { w:"COST", h:"Complexity penalizes size", meaning:"Trade off fit and complexity.", sentence:"Cost complexity pruning uses alpha.", cat:"Math" },
  { w:"NODE", h:"Decision point in tree", meaning:"Test on a feature.", sentence:"Node splits into child nodes.", cat:"Math" },
  { w:"LEAF", h:"Terminal node of tree", meaning:"Prediction at leaf.", sentence:"Leaf represents final outcome.", cat:"Math" },
  { w:"DEPTH", h:"Maximum number of splits", meaning:"Deep trees capture interactions.", sentence:"Depth limited to avoid overfitting.", cat:"Math" },
  { w:"SVM", h:"Support vector machine", meaning:"Finds maximum margin hyperplane.", sentence:"SVM works well for high dimensional data.", cat:"Math" },
  { w:"KERNEL", h:"Transforms feature space", meaning:"Enables nonlinear decision boundary.", sentence:"Kernel trick avoids explicit mapping.", cat:"Math" },
  { w:"SUPPORT", h:"Vectors points defining margin", meaning:"Critical observations for boundary.", sentence:"Support vectors determine classifier.", cat:"Math" },
  { w:"NONLIN", h:"Requires kernel transformation", meaning:"Radial basis function polynomial.", sentence:"Nonlinear SVM captures complex patterns.", cat:"Math" },
  { w:"RBF", h:"Radial basis function kernel", meaning:"Most common SVM kernel.", sentence:"RBF has width parameter gamma.", cat:"Math" },
  { w:"SIGMOID", h:"Neural network kernel", meaning:"Tanh activation.", sentence:"Sigmoid kernel rarely used.", cat:"Math" },
  { w:"KNN", h:"K nearest neighbors", meaning:"Classified by neighbor votes.", sentence:"KNN is a lazy learner.", cat:"Math" },
  { w:"VOTE", h:"Majority decision", meaning:"Weights may be uniform or distance.", sentence:"Vote determines class.", cat:"Math" },
  { w:"DISTANCE", h:"Metric for nearest neighbor", meaning:"Euclidean Manhattan Minkowski.", sentence:"Distance measured in feature space.", cat:"Math" },
  { w:"METRIC", h:"Distance function", meaning:"Defines closeness.", sentence:"Choose metric appropriate for data.", cat:"Math" },
  { w:"EUCLID", h:"Straight line distance", meaning:"Square root of sum squares.", sentence:"Euclidean is default metric.", cat:"Math" },
  { w:"MANHAT", h:"City block distance", meaning:"Sum of absolute differences.", sentence:"Manhattan robust to outliers.", cat:"Math" },
  { w:"MINKOW", h:"Generalized distance", meaning:"Parameter p controls.", sentence:"Minkowski with p2 is Euclidean.", cat:"Math" },
  { w:"MAHALAN", h:"Accounts for correlation", meaning:"Uses covariance matrix.", sentence:"Mahalanobis distance scale invariant.", cat:"Math" },
  { w:"NAIVE", h:"Bayes classifier", meaning:"Based on Bayes theorem.", sentence:"Naive assumes feature independence.", cat:"Math" },
  { w:"LIKELI", h:"Probability of data given parameter", meaning:"Intrinsic plausibility.", sentence:"Likelihood function used in MLE.", cat:"Math" },
  { w:"POSTER", h:"Updated belief after data", meaning:"Proportional to prior times likelihood.", sentence:"Posterior incorporates evidence.", cat:"Math" },
  { w:"MARGINAL", h:"Probability integrating out variable", meaning:"Sum or integral over nuisance.", sentence:"Marginal likelihood for model comparison.", cat:"Math" },
  { w:"PREDICT", h:"Posterior predictive distribution", meaning:"Distribution of new observation.", sentence:"Predictive integrates parameter uncertainty.", cat:"Math" },
  { w:"CONJUG", h:"Prior yields same family", meaning:"Mathematically convenient.", sentence:"Conjugate prior simplifies computation.", cat:"Math" },
  { w:"NORMAL", h:"Prior for mean given variance", meaning:"Conjugate for normal with known variance.", sentence:"Normal prior leads to normal posterior.", cat:"Math" },
  { w:"WISHART", h:"Prior for covariance matrix", meaning:"Conjugate for multivariate normal.", sentence:"Wishart generalizes gamma.", cat:"Math" },
  { w:"DIRICH", h:"Prior for multinomial", meaning:"Conjugate for categorical.", sentence:"Dirichlet prior on probabilities.", cat:"Math" },
  { w:"METROP", h:"MCMC acceptance rejection", meaning:"Proposal distribution.", sentence:"Metropolis adjusts step size.", cat:"Math" },
  { w:"HURST", h:"Acceptance probability", meaning:"Ratio of posterior values.", sentence:"Hastings generalizes Metropolis.", cat:"Math" },
  { w:"MCMC", h:"Markov chain Monte Carlo", meaning:"Simulates from posterior.", sentence:"MCMC necessary for complex models.", cat:"Math" },
  { w:"CHAIN", h:"Sequence of MCMC draws", meaning:"Converges to target.", sentence:"Multiple chains diagnose convergence.", cat:"Math" },
  { w:"BURN", h:"In initial draws discarded", meaning:"Warm up period.", sentence:"Burn in removes dependence on start.", cat:"Math" },
  { w:"THIN", h:"Keep every kth draw", meaning:"Reduces autocorrelation.", sentence:"Thinning trades off storage.", cat:"Math" },
  { w:"CONVERGE", h:"Chain reaches stationary distribution", meaning:"Diagnosed by trace plots.", sentence:"Convergence needed for inference.", cat:"Math" },
  { w:"AUTOCOR", h:"Correlation between lags", meaning:"High autocorrelation slow mixing.", sentence:"Thin to reduce autocorrelation.", cat:"Math" },
  { w:"ESS", h:"Effective sample size", meaning:"Adjusted for autocorrelation.", sentence:"ESS lower than number of draws.", cat:"Math" },
  { w:"GELMAN", h:"Rubin diagnostic within between variance", meaning:"Should be near 1.", sentence:"Values below 1.1 indicate convergence.", cat:"Math" },
  { w:"STAN", h:"Probabilistic programming language", meaning:"Hamiltonian Monte Carlo.", sentence:"Stan fits complex Bayesian models.", cat:"Math" },
  { w:"CMDSTAN", h:"Command line Stan", meaning:"High performance.", sentence:"Cmdstan used for large problems.", cat:"Math" },
  { w:"RSTAN", h:"R interface to Stan", meaning:"Convenient for R users.", sentence:"Rstan integrates with tidyverse.", cat:"Math" },
  { w:"PYSTAN", h:"Python interface to Stan", meaning:"Alternative to Rstan.", sentence:"Pystan for Python users.", cat:"Math" },
  { w:"BRMS", h:"Bayesian regression in R", meaning:"Uses Stan backend.", sentence:"Brms formula syntax like lme4.", cat:"Math" },
  { w:"MIXED", h:"Model fixed and random effects", meaning:"Hierarchical or multilevel.", sentence:"Mixed model handles clustering.", cat:"Math" },
  { w:"FIXED", h:"Effect population level constant", meaning:"Estimates specific coefficient.", sentence:"Fixed effect controls for confounder.", cat:"Math" },
  { w:"VARY", h:"Coefficient across groups", meaning:"Random slope for group.", sentence:"Vary coefficient captures different effect.", cat:"Math" },
  { w:"NEST", h:"Sample within hierarchy", meaning:"Students within schools.", sentence:"Nested data requires multilevel model.", cat:"Math" },
  { w:"LONGIT", h:"Repeated measures over time", meaning:"Multiple observations per subject.", sentence:"Longitudinal model accounts for dependence.", cat:"Math" },
  { w:"PANEL", h:"Data repeated cross sections", meaning:"Fixed unit over time.", sentence:"Panel data use fixed effects.", cat:"Math" },
  { w:"TIME", h:"Series ordered observations", meaning:"Autocorrelated errors.", sentence:"Time series needs ARIMA or GARCH.", cat:"Math" },
  { w:"TREND", h:"Long term direction", meaning:"Secular movement.", sentence:"Trend can be linear or nonlinear.", cat:"Math" },
  { w:"SEASON", h:"Regular periodic pattern", meaning:"Yearly quarterly monthly.", sentence:"Seasonality modeled with dummies or Fourier.", cat:"Math" },
  { w:"CYCLE", h:"Longer than seasonal oscillation", meaning:"Business cycle 5 to 10 years.", sentence:"Cycle amplitude varies.", cat:"Math" },
  { w:"ARMA", h:"Combined AR and MA", meaning:"Stationary time series.", sentence:"Arma parameters p and q.", cat:"Math" },
  { w:"ARIMA", h:"Differenced ARMA", meaning:"Handles nonstationarity.", sentence:"Arima integrates differencing order d.", cat:"Math" },
  { w:"SARIMA", h:"Seasonal ARIMA", meaning:"Seasonal lags.", sentence:"Sarima has seasonal p d q.", cat:"Math" },
  { w:"GARCH", h:"Volatility model", meaning:"Autoregressive conditional heteroskedasticity.", sentence:"Garch models time varying variance.", cat:"Math" },
  { w:"ARCH", h:"Effect of past squared errors", meaning:"Volatility clustering.", sentence:"Arch first order simplest.", cat:"Math" },
  { w:"FORECAST", h:"Prediction from model", meaning:"Point and interval forecast.", sentence:"Forecast accuracy measured by RMSE.", cat:"Math" },
  { w:"HORIZON", h:"Number of steps ahead", meaning:"Short vs long term.", sentence:"Horizon affects forecast uncertainty.", cat:"Math" },
  { w:"RMSE", h:"Root mean squared error", meaning:"Standard forecast metric.", sentence:"RMSE penalizes large errors.", cat:"Math" },
  { w:"MAE", h:"Mean absolute error", meaning:"Robust to outliers.", sentence:"MAE easier to interpret.", cat:"Math" },
  { w:"MAPE", h:"Mean absolute percentage error", meaning:"Scale independent.", sentence:"MAPE undefined for zero values.", cat:"Math" },
  { w:"SMAPE", h:"Symmetric MAPE", meaning:"Avoids division by zero.", sentence:"SMAPE used for sparse data.", cat:"Math" },
  { w:"BACKTEST", h:"Evaluate on historical period", meaning:"Simulated real time.", sentence:"Backtest assesses strategy.", cat:"Math" },
  { w:"ROLLING", h:"Window expanding or fixed", meaning:"Updates forecast recursively.", sentence:"Rolling window adapts to changes.", cat:"Math" },
  { w:"WALK", h:"Forward sequential forecasting", meaning:"One step ahead at a time.", sentence:"Walk forward more realistic.", cat:"Math" },
  { w:"CALIB", h:"Adjust model parameters", meaning:"Fit to recent data.", sentence:"Calibration improves accuracy.", cat:"Math" },
  { w:"NOWCAST", h:"Estimate current value", meaning:"Before official release.", sentence:"Nowcast uses high frequency indicators.", cat:"Math" },
  { w:"INSTRU", h:"Variable for causal inference", meaning:"Instrumental variable addresses endogeneity.", sentence:"Instrument relevant and exogenous.", cat:"Math" },
  { w:"TWO", h:"Stage least squares", meaning:"First stage on instrument.", sentence:"Two stage reduces bias.", cat:"Math" },
  { w:"ENDOG", h:"Variable correlated with error", meaning:"Problem for OLS.", sentence:"Endogeneity causes inconsistent estimates.", cat:"Math" },
  { w:"EXOG", h:"Variable uncorrelated with error", meaning:"Safe for OLS.", sentence:"Exogenous predictor consistent.", cat:"Math" },
  { w:"OMIT", h:"Variable bias left out confounder", meaning:"Correlated with included and outcome.", sentence:"Omitted variable distorts estimates.", cat:"Math" },
  { w:"REVERSE", h:"Causation direction unclear", meaning:"X causes Y or Y causes X.", sentence:"Reverse causality requires instruments.", cat:"Math" },
  { w:"SELECTION", h:"Bias nonrandom sample", meaning:"Sample not representative.", sentence:"Selection bias corrections like Heckman.", cat:"Math" },
  { w:"HECKMAN", h:"Two step selection model", meaning:"Inverse Mills ratio.", sentence:"Heckman corrects sample selection.", cat:"Math" },
  { w:"TREATMENT", h:"Effect causal impact", meaning:"Difference between treated and control.", sentence:"Treatment effect estimated by RCT.", cat:"Math" },
  { w:"ATE", h:"Average treatment effect", meaning:"Population average.", sentence:"ATE unbiased under randomization.", cat:"Math" },
  { w:"ATT", h:"Average treatment on treated", meaning:"For those who received treatment.", sentence:"ATT relevant for policy.", cat:"Math" },
  { w:"ITT", h:"Intention to treat effect", meaning:"Analyze by assigned not received.", sentence:"ITT conservative estimate.", cat:"Math" },
  { w:"PARALLEL", h:"Trends assumption pre period", meaning:"Required for diff in diff.", sentence:"Parallel trends visually assessed.", cat:"Math" },
  { w:"EVENT", h:"Study timing of treatment", meaning:"Estimates dynamic effects.", sentence:"Event study shows pre trends.", cat:"Math" },
  { w:"SHARP", h:"RD cutoff deterministic", meaning:"All above treated all below control.", sentence:"Sharp RD simple case.", cat:"Math" },
  { w:"FUZZY", h:"RD probability jump at cutoff", meaning:"Not all treated above cutoff.", sentence:"Fuzzy RD uses instrumental variable.", cat:"Math" },
  { w:"BANDWIDTH", h:"Window around cutoff", meaning:"Trade off bias and variance.", sentence:"Bandwidth chosen by cross validation.", cat:"Math" },
  { w:"LOCAL", h:"Linear regression near cutoff", meaning:"Preferred for RD.", sentence:"Local linear reduces boundary bias.", cat:"Math" },
  { w:"MANIPUL", h:"Test of density around cutoff", meaning:"McCrary test.", sentence:"No manipulation needed for RD.", cat:"Math" },
  { w:"PLACEBO", h:"Test using fake cutoff", meaning:"Should show no effect.", sentence:"Placebo RD validates design.", cat:"Math" },
  { w:"MATCH", h:"Pair treated to control", meaning:"Similar on covariates.", sentence:"Matching reduces selection bias.", cat:"Math" },
  { w:"PROPENSITY", h:"Score probability of treatment", meaning:"Balance covariates via score.", sentence:"Propensity score matching popular.", cat:"Math" },
  { w:"NEAREST", h:"Neighbor match closest score", meaning:"Simple matching method.", sentence:"Nearest neighbor with replacement.", cat:"Math" },
  { w:"CALIPER", h:"Maximum distance for match", meaning:"Prevents poor matches.", sentence:"Caliper improves quality.", cat:"Math" },
  { w:"BALANCE", h:"Covariate distribution across groups", meaning:"Check after matching.", sentence:"Balance ensures comparability.", cat:"Math" },
  { w:"PSM", h:"Propensity score matching", meaning:"Implemented in many packages.", sentence:"PSM sensitive to unobservables.", cat:"Math" },
  { w:"COARSEN", h:"Exact matching on categories", meaning:"Coarsened exact matching.", sentence:"CEM preserves covariates.", cat:"Math" },
  { w:"SYNTHETIC", h:"Control weighted average", meaning:"Constructs counterfactual.", sentence:"Synthetic control for comparative case studies.", cat:"Math" },
  { w:"WEIGHTS", h:"Optimized to match pre treatment", meaning:"Sum to one nonnegative.", sentence:"Synthetic weights balance pre trend.", cat:"Math" },
  { w:"GAP", h:"Difference post treatment", meaning:"Synthetic control effect estimate.", sentence:"The gap after intervention is the effect.", cat:"Math" },
  { w:"PERMUTE", h:"Test placebo effect for other units", meaning:"Placebo tests for significance.", sentence:"Permutation inference for synthetic control.", cat:"Math" },
  { w:"SPILLOVER", h:"Effect on untreated from treated", meaning:"Interference between units.", sentence:"Spillover violates SUTVA.", cat:"Math" },
  { w:"SUTVA", h:"Stable unit treatment value assumption", meaning:"No interference no hidden versions.", sentence:"SUTVA required for causal inference.", cat:"Math" },
  { w:"SMOOTH", h:"Reduce noise by averaging", meaning:"Moving average loess.", sentence:"Smooth reveals trend and season.", cat:"Math" },
  { w:"FILTER", h:"Linear transformation of series", meaning:"Remove seasonality trend.", sentence:"Filter like Hodrick Prescott.", cat:"Math" },
  { w:"BAXTER", h:"Band pass filter", meaning:"Extracts business cycle frequencies.", sentence:"Baxter King filter suppresses high and low.", cat:"Math" },
  { w:"CHRISTO", h:"Alternative band pass filter", meaning:"Full sample asymmetric.", sentence:"Christiano Fitzgerald less phase shift.", cat:"Math" },
  { w:"DETREND", h:"Remove long term movement", meaning:"Focus on fluctuations.", sentence:"Detrend by differencing or regression.", cat:"Math" },
  { w:"DEASON", h:"Remove periodic pattern", meaning:"Estimate seasonal factors.", sentence:"Deason by moving average or dummies.", cat:"Math" },
  { w:"SPECTRAL", h:"Analysis frequency domain", meaning:"Sinusoid decomposition.", sentence:"Spectral density identifies cycles.", cat:"Math" },
  { w:"PERIOD", h:"Gam length of cycle", meaning:"Inverse of frequency.", sentence:"Period measured in time units.", cat:"Math" },
  { w:"WAVELET", h:"Time frequency decomposition", meaning:"Localized in both domains.", sentence:"Wavelet captures transient cycles.", cat:"Math" },
  { w:"COHERE", h:"Correlation in frequency domain", meaning:"Measures linear dependence.", sentence:"Coherence ranges 0 to 1.", cat:"Math" },
  { w:"PHASE", h:"Lag between series in cycles", meaning:"Shift measured in radians.", sentence:"Phase zero means perfectly aligned.", cat:"Math" },
  { w:"LAG", h:"Variable that moves later", meaning:"Follows the lead.", sentence:"Lag indicates delay.", cat:"Math" },
  { w:"GRANGER", h:"Causality test for time series", meaning:"Past X helps predict Y beyond past Y.", sentence:"Granger causality not true causation.", cat:"Math" },
  { w:"VARIANCE", h:"Decomposition percentage due to each shock", meaning:"Forecast error variance decomposition.", sentence:"Variance decomposition shows importance.", cat:"Math" },
  { w:"IRF", h:"Impulse response function", meaning:"Effect of one shock over time.", sentence:"IRF traces dynamic response.", cat:"Math" },
  { w:"SHOCK", h:"Innovation to error term", meaning:"Unexpected change.", sentence:"Shock propagates through system.", cat:"Math" },
  { w:"ORTHOG", h:"Uncorrelated shocks via Choleski", meaning:"Ordering affects results.", sentence:"Orthogonalization used for impulse response.", cat:"Math" },
  { w:"CHOLESKI", h:"Lower triangular decomposition", meaning:"Depends on variable ordering.", sentence:"Choleski simplest orthogonalization.", cat:"Math" },
  { w:"FEVD", h:"Forecast error variance decomposition", meaning:"Proportion from each shock.", sentence:"FEVD summarizes contribution.", cat:"Math" },
  { w:"COINT", h:"Long run equilibrium relationship", meaning:"Nonstationary series move together.", sentence:"Cointegration implies error correction.", cat:"Math" },
  { w:"VECM", h:"Vector error correction model", meaning:"Cointegration with adjustment.", sentence:"VECM incorporates long run relation.", cat:"Math" },
  { w:"JOHAN", h:"Likelihood based cointegration test", meaning:"Trace and max eigenvalue tests.", sentence:"Johansen test for number of cointegrating vectors.", cat:"Math" },
  { w:"ENGLE", h:"Granger two step cointegration", meaning:"Test residuals for stationarity.", sentence:"Engle Granger simpler but less powerful.", cat:"Math" },
  { w:"ADF", h:"Augmented Dickey Fuller test", meaning:"Unit root test.", sentence:"ADF null of nonstationarity.", cat:"Math" },
  { w:"KPSS", h:"Test stationarity null", meaning:"Reverse of ADF.", sentence:"KPSS null is stationarity.", cat:"Math" },
  { w:"DRIFT", h:"Deterministic trend in random walk", meaning:"Constant increase per period.", sentence:"Drift adds slope to unit root.", cat:"Math" },
  { w:"BREAK", h:"Structural change in mean or trend", meaning:"Become significant event.", sentence:"Break tests like Chow.", cat:"Math" },
  { w:"CHOW", h:"Test for known break date", meaning:"F test for equality across periods.", sentence:"Chow test simple if break date known.", cat:"Math" },
  { w:"SUPREMUM", h:"Test unknown break date", meaning:"Max of Chow statistics.", sentence:"Sup test for unknown break point.", cat:"Math" },
  { w:"CUSUM", h:"Cumulative sum of residuals", meaning:"Detects parameter instability.", sentence:"Cusum plots for structural break.", cat:"Math" },
  { w:"RECURS", h:"Coefficient over expanding window", meaning:"Visual stability.", sentence:"Recursive estimates should converge.", cat:"Math" },
  { w:"THRESHOLD", h:"Nonlinearity after crossing value", meaning:"Regime switching model.", sentence:"Threshold autoregression TAR.", cat:"Math" },
  { w:"REGIME", h:"Switch model distinct states", meaning:"Different parameters per regime.", sentence:"Regime determines dynamics.", cat:"Math" },
  { w:"NONPARA", h:"No assumed functional form", meaning:"Flexible smoother.", sentence:"Nonparametric uses kernel or spline.", cat:"Math" },
  { w:"SPLINE", h:"Piecewise polynomial", meaning:"Flexible curve fitting.", sentence:"Spline knots control flexibility.", cat:"Math" },
  { w:"NATURAL", h:"Spline linear beyond boundaries", meaning:"Better for extrapolation.", sentence:"Natural spline reduces tails.", cat:"Math" },
  { w:"KNOTS", h:"Location where pieces join", meaning:"More knots more flexible.", sentence:"Knots placed at quantiles.", cat:"Math" },
  { w:"B SPLINE", h:"Basis function spline", meaning:"Linear combination of B splines.", sentence:"B spline locally supported.", cat:"Math" },
  { w:"GAM", h:"Generalized additive model", meaning:"Sum of smooth functions.", sentence:"GAM extends linear model.", cat:"Math" },
  { w:"LINK", h:"Function for non normal outcome", meaning:"Logit log identity.", sentence:"Link connects mean to linear predictor.", cat:"Math" },
  { w:"DEVIANCE", h:"Measure of fit for GLM", meaning:"Minus twice log likelihood.", sentence:"Deviance compares nested models.", cat:"Math" },
  { w:"OVERDISP", h:"Extra beyond Poisson variance", meaning:"Variance larger than mean.", sentence:"Overdispersion common in count data.", cat:"Math" },
  { w:"NEGBIN", h:"Negative binomial model", meaning:"Handles overdispersion.", sentence:"Negbin has dispersion parameter.", cat:"Math" },
  { w:"BINOM", h:"Binomial model for proportions", meaning:"Number of successes in trials.", sentence:"Binomial logit link typical.", cat:"Math" },
  { w:"MULTINOM", h:"Multinomial for categories>2", meaning:"Nominal or ordinal.", sentence:"Multinomial logit for unordered.", cat:"Math" },
  { w:"ORDINAL", h:"Ordered categories proportional odds", meaning:"Ordinal regression assumes parallel slopes.", sentence:"Proportional odds test needed.", cat:"Math" },
  { w:"MULTIVAR", h:"Outcome multiple potentially correlated", meaning:"Multivariate analysis.", sentence:"Multivariate methods like MANOVA.", cat:"Math" },
  { w:"CANON", h:"Correlation between variable sets", meaning:"Maximizes correlation.", sentence:"Canonical correlation analysis CCA.", cat:"Math" },
  { w:"MANOVA", h:"Multivariate analysis of variance", meaning:"Compares means on multiple outcomes.", sentence:"MANOVA uses Wilks lambda.", cat:"Math" },
  { w:"DISCRIM", h:"Linear classification", meaning:"Fisher discriminant analysis.", sentence:"Discrim maximizes between over within variance.", cat:"Math" },
  { w:"QUADRAT", h:"Discriminant boundary curved", meaning:"QDA allows different covariance.", sentence:"Quadratic discriminant more flexible.", cat:"Math" },
  { w:"FACTOR", h:"Model latent variables", meaning:"Explains correlations among observed.", sentence:"Factor analysis reduces dimension.", cat:"Math" },
  { w:"ROTAT", h:"Improves factor interpretability", meaning:"Varimax oblique rotation.", sentence:"Rotat simplifies loading pattern.", cat:"Math" },
  { w:"PCA", h:"Principal component analysis", meaning:"Linear dimension reduction.", sentence:"PCA finds directions of maximum variance.", cat:"Math" },
  { w:"LOAD", h:"Correlation between variable and component", meaning:"Factor loading matrix.", sentence:"Load helps interpret components.", cat:"Math" },
  { w:"SCORE", h:"Component value per observation", meaning:"Projection onto principal axis.", sentence:"Score computed from loading.", cat:"Math" },
  { w:"SCREE", h:"Plot of eigenvalues vs component", meaning:"Elbow for number of components.", sentence:"Scree plot heuristic.", cat:"Math" },
  { w:"VARIMAX", h:"Rotation maximizes variance of loadings", meaning:"Simplifies structure.", sentence:"Varimax orthogonal rotation.", cat:"Math" },
  { w:"OVARIM", h:"Oblique rotation allows correlation", meaning:"More flexible than varimax.", sentence:"Oblique rotation possible.", cat:"Math" },
  { w:"CFA", h:"Confirmatory factor analysis", meaning:"Tests hypothesized structure.", sentence:"CFA evaluates model fit.", cat:"Math" },
  { w:"SEM", h:"Structural equation modeling", meaning:"Combines factor and regression.", sentence:"SEM tests causal paths.", cat:"Math" },
  { w:"PATH", h:"Diagram of SEM", meaning:"Circles latent squares observed.", sentence:"Path diagram shows relationships.", cat:"Math" },
  { w:"ENDOGEN", h:"Variable determined within model", meaning:"Dependent variable in equation.", sentence:"Endogenous predicted by other variables.", cat:"Math" },
  { w:"EXOGEN", h:"Variable external to model", meaning:"Independent predictor.", sentence:"Exogenous uncorrelated with errors.", cat:"Math" },
  { w:"LATENT", h:"Unobserved theoretical construct", meaning:"Intelligence depression.", sentence:"Latent variable measured by indicators.", cat:"Math" },
  { w:"IDENT", h:"Parameter estimability", meaning:"Model identification.", sentence:"Just identified exactly estimable.", cat:"Math" },
  { w:"OVERID", h:"More equations than parameters", meaning:"Testable restrictions.", sentence:"Overidentification tests like Sargan.", cat:"Math" },
  { w:"CFI", h:"Comparative fit index", meaning:"Close to 1 good.", sentence:"CFI robust to sample size.", cat:"Math" },
  { w:"RMSEA", h:"Root mean square error of approximation", meaning:"Below 0.05 excellent.", sentence:"RMSEA accounts for complexity.", cat:"Math" },
  { w:"SRMR", h:"Standardized root mean residual", meaning:"Below 0.08 good.", sentence:"SRMR absolute fit.", cat:"Math" },
  { w:"AIC", h:"Akaike information criterion", meaning:"Lower value better.", sentence:"AIC penalizes complexity.", cat:"Math" },
  { w:"BIC", h:"Bayesian information criterion", meaning:"Lower value better.", sentence:"BIC penalizes more than AIC.", cat:"Math" },
  { w:"NESTED", h:"Model subset of another", meaning:"Likelihood ratio test.", sentence:"Nested models compared with chi square.", cat:"Math" },
  { w:"NONNEST", h:"Models not subsets", meaning:"Use AIC or BIC.", sentence:"Non nested model selection via info criteria.", cat:"Math" },
  { w:"RETRO", h:"Power for retrospective sample", meaning:"Existing data collected earlier.", sentence:"Retrospective observational study.", cat:"Math" },
  { w:"PROSPEC", h:"Planned data collection forward", meaning:"Randomized controlled trial.", sentence:"Prospective has better evidence.", cat:"Math" },
  { w:"COHORT", h:"Group followed over time", meaning:"Longitudinal study.", sentence:"Cohort measures exposure then outcome.", cat:"Math" },
  { w:"CASE", h:"Control sample by outcome", meaning:"Compare exposure retrospectively.", sentence:"Case control efficient for rare diseases.", cat:"Math" },
  { w:"ECOL", h:"Study at group level", meaning:"Aggregate data.", sentence:"Ecological fallacy risk.", cat:"Math" },
  { w:"META", h:"Analysis combine multiple studies", meaning:"Pooled effect size.", sentence:"Meta analysis increases power.", cat:"Math" },
  { w:"FOREST", h:"Plot meta analysis results", meaning:"Effect sizes with confidence intervals.", sentence:"Forest plot visual heterogeneity.", cat:"Math" },
  { w:"HETERO", h:"Variation among study effects", meaning:"I squared statistic.", sentence:"Heterogeneity guides random vs fixed effects.", cat:"Math" },
  { w:"PUB", h:"Bias small studies different", meaning:"Funnel plot asymmetry.", sentence:"Publication bias threatens meta analysis.", cat:"Math" },
  { w:"FUNNEL", h:"Plot effect vs precision", meaning:"Asymmetry suggests bias.", sentence:"Funnel plot inspection.", cat:"Math" },
  { w:"TRIM", h:"Fill method adjusts for bias", meaning:"Imputes missing studies.", sentence:"Trim fill gives adjusted estimate.", cat:"Math" },
  ],
  science: [
  { w:"CELL", h:"Basic unit of life", meaning:"Smallest structural and functional unit of an organism.", sentence:"The microscope revealed a single cell.", cat:"Science" },
  { w:"ATOM", h:"Smallest unit of matter", meaning:"Basic particle of a chemical element.", sentence:"Water molecules contain two hydrogen atoms.", cat:"Science" },
  { w:"GENE", h:"Unit of heredity", meaning:"Segment of DNA coding for a trait.", sentence:"The gene determined eye color.", cat:"Science" },
  { w:"VIRUS", h:"Infectious particle", meaning:"Non-living pathogen requiring host cells.", sentence:"The flu is caused by a virus.", cat:"Science" },
  { w:"FOSSIL", h:"Preserved remains", meaning:"Mineralized impression of ancient organism.", sentence:"They found a dinosaur fossil.", cat:"Science" },
  { w:"CYCLE", h:"Repeating sequence", meaning:"Series of events that recur regularly.", sentence:"The water cycle includes evaporation and rain.", cat:"Science" },
  { w:"MAGNET", h:"Attracts iron", meaning:"Object producing a magnetic field.", sentence:"The magnet picked up paperclips.", cat:"Science" },
  { w:"ORBIT", h:"Path around body", meaning:"Curved trajectory of an object in space.", sentence:"Earth's orbit around the sun takes one year.", cat:"Science" },
  { w:"LENS", h:"Focuses light", meaning:"Transparent piece curving to concentrate rays.", sentence:"The camera lens was dirty.", cat:"Science" },
  { w:"DNA", h:"Genetic blueprint", meaning:"Deoxyribonucleic acid carrying hereditary information.", sentence:"DNA is shaped like a double helix.", cat:"Science" },
  { w:"RNA", h:"Messenger molecule", meaning:"Ribonucleic acid for protein synthesis.", sentence:"MRNA carries code from DNA to ribosome.", cat:"Science" },
  { w:"ENZYME", h:"Biological catalyst", meaning:"Protein speeding up chemical reactions.", sentence:"The enzyme broke down lactose.", cat:"Science" },
  { w:"HORMONE", h:"Chemical messenger", meaning:"Substance regulating bodily functions.", sentence:"Insulin is a hormone controlling blood sugar.", cat:"Science" },
  { w:"NEURON", h:"Nerve cell", meaning:"Specialized cell transmitting electrical impulses.", sentence:"Neurons communicate across synapses.", cat:"Science" },
  { w:"SYNAPSE", h:"Gap between neurons", meaning:"Junction where signals pass from one neuron to another.", sentence:"The neurotransmitter crossed the synapse.", cat:"Science" },
  { w:"AXON", h:"Nerve fiber", meaning:"Long projection conducting impulses away from cell body.", sentence:"The axon was myelinated for faster transmission.", cat:"Science" },
  { w:"DENDRITE", h:"Branching receptor", meaning:"Neuron projection receiving signals.", sentence:"Dendrites collect incoming messages.", cat:"Science" },
  { w:"GLIA", h:"Support brain cells", meaning:"Non-neuronal cells maintaining homeostasis.", sentence:"Glia outnumber neurons in the brain.", cat:"Science" },
  { w:"CORTEX", h:"Brain outer layer", meaning:"Neural tissue responsible for higher thought.", sentence:"The cerebral cortex handles language.", cat:"Science" },
  { w:"MYELIN", h:"Insulating sheath", meaning:"Fatty layer speeding nerve impulses.", sentence:"Multiple sclerosis damages myelin.", cat:"Science" },
  { w:"DOPAMINE", h:"Reward chemical", meaning:"Neurotransmitter for pleasure and motivation.", sentence:"Dopamine levels rise with success.", cat:"Science" },
  { w:"SEROTONIN", h:"Mood regulator", meaning:"Neurotransmitter affecting happiness and sleep.", sentence:"Low serotonin links to depression.", cat:"Science" },
  { w:"MELANIN", h:"Skin pigment", meaning:"Dark polymer protecting from UV.", sentence:"Melanin causes tanning.", cat:"Science" },
  { w:"KERATIN", h:"Structural protein", meaning:"Fibrous protein in hair nails skin.", sentence:"Keratin makes hair strong.", cat:"Science" },
  { w:"COLLAGEN", h:"Tissue scaffolding", meaning:"Most abundant protein in animals.", sentence:"Collagen keeps skin elastic.", cat:"Science" },
  { w:"HEMOGLOBIN", h:"Oxygen carrier", meaning:"Protein in red blood cells binding oxygen.", sentence:"Hemoglobin gives blood red color.", cat:"Science" },
  { w:"ANTIBODY", h:"Immune defender", meaning:"Protein neutralizing pathogens.", sentence:"Antibodies recognize specific antigens.", cat:"Science" },
  { w:"ANTIGEN", h:"Immune trigger", meaning:"Molecule provoking immune response.", sentence:"Vaccines introduce harmless antigens.", cat:"Science" },
  { w:"VACCINE", h:"Immunity inducer", meaning:"Biological preparation providing acquired immunity.", sentence:"The vaccine prevented measles.", cat:"Science" },
  { w:"BACTERIA", h:"Single cell microbes", meaning:"Prokaryotic microorganisms without nucleus.", sentence:"Gut bacteria aid digestion.", cat:"Science" },
  { w:"ARCHAEA", h:"Extremophile microbes", meaning:"Prokaryotes distinct from bacteria.", sentence:"Archaea live in hot springs.", cat:"Science" },
  { w:"FUNGUS", h:"Spore producing organism", meaning:"Kingdom including molds and yeasts.", sentence:"The fungus decomposed dead wood.", cat:"Science" },
  { w:"YEAST", h:"Single cell fungus", meaning:"Microorganism used in baking and brewing.", sentence:"Yeast ferments sugar into alcohol.", cat:"Science" },
  { w:"ALGAE", h:"Photosynthetic aquatic", meaning:"Simple non-flowering plant like organisms.", sentence:"Algae blooms can be toxic.", cat:"Science" },
  { w:"PROTOZOA", h:"Single celled eukaryote", meaning:"Motile microscopic organism.", sentence:"Protozoa cause malaria.", cat:"Science" },
  { w:"AMOEBA", h:"Shape shifting protozoan", meaning:"Organism changing shape via pseudopods.", sentence:"The amoeba engulfed bacteria.", cat:"Science" },
  { w:"PARAMECIUM", h:"Slipper shaped protist", meaning:"Ciliate covered with cilia.", sentence:"Paramecium swims by beating cilia.", cat:"Science" },
  { w:"EUGLENA", h:"Mixotroph protist", meaning:"Photosynthetic and heterotrophic.", sentence:"Euglena has both chloroplasts and flagella.", cat:"Science" },
  { w:"VOLVOX", h:"Colonial alga", meaning:"Spherical colony of thousands of cells.", sentence:"Volvox daughter spheres form inside.", cat:"Science" },
  { w:"PLASMODIUM", h:"Malaria parasite", meaning:"Apicomplexan causing malaria.", sentence:"Plasmodium is transmitted by mosquitoes.", cat:"Science" },
  { w:"TRYPANOSOME", h:"African sleeping sickness", meaning:"Parasitic flagellate causing disease.", sentence:"Trypanosome evades immune system.", cat:"Science" },
  { w:"GIARDIA", h:"Diarrhea causing parasite", meaning:"Flagellated intestinal parasite.", sentence:"Giardia spreads through contaminated water.", cat:"Science" },
  { w:"TAPEWORM", h:"Segmented flatworm", meaning:"Parasitic worm living in intestines.", sentence:"Tapeworm absorbs nutrients through skin.", cat:"Science" },
  { w:"HOOKWORM", h:"Intestinal nematode", meaning:"Blood feeding parasitic roundworm.", sentence:"Hookworm causes anemia.", cat:"Science" },
  { w:"PINWORM", h:"Common childhood parasite", meaning:"Small nematode infecting large intestine.", sentence:"Pinworm causes anal itching.", cat:"Science" },
  { w:"ROUNDWORM", h:"Nematode general", meaning:"Cylindrical unsegmented worm.", sentence:"Roundworms are abundant in soil.", cat:"Science" },
  { w:"EARTHWORM", h:"Soil aerator", meaning:"Annelid tunneling through earth.", sentence:"Earthworms improve soil fertility.", cat:"Science" },
  { w:"LEECH", h:"Blood sucking annelid", meaning:"Segmented worm used in medicine.", sentence:"Leeches reduce post surgery swelling.", cat:"Science" },
  { w:"SNAIL", h:"Gastropod mollusk", meaning:"Soft bodied animal often with shell.", sentence:"Snail moves on muscular foot.", cat:"Science" },
  { w:"SLUG", h:"Shell less gastropod", meaning:"Terrestrial mollusk without external shell.", sentence:"Slug leaves slime trail.", cat:"Science" },
  { w:"CLAM", h:"Bivalve mollusk", meaning:"Two shelled filter feeder.", sentence:"Clams burrow in sand.", cat:"Science" },
  { w:"OYSTER", h:"Filter feeding bivalve", meaning:"Mollusk producing pearls.", sentence:"Oysters attach to rocks.", cat:"Science" },
  { w:"SQUID", h:"Cephalopod mollusk", meaning:"Fast swimming predator with tentacles.", sentence:"Squid has three hearts.", cat:"Science" },
  { w:"OCTOPUS", h:"Intelligent cephalopod", meaning:"Eight armed mollusk with complex behavior.", sentence:"Octopus can change color.", cat:"Science" },
  { w:"CUTTLEFISH", h:"Camouflage expert", meaning:"Cephalopod with cuttlebone.", sentence:"Sea cuttlefish flash patterns.", cat:"Science" },
  { w:"NAUTILUS", h:"Chambered shell", meaning:"Ancient cephalopod living in deep sea.", sentence:"Nautilus shell is logarithmic spiral.", cat:"Science" },
  { w:"CRAB", h:"Decapod crustacean", meaning:"Ten legged arthropod with pincers.", sentence:"Scuttling crab sideways on beach.", cat:"Science" },
  { w:"LOBSTER", h:"Large marine crustacean", meaning:"Long bodied decapod with claws.", sentence:"Lobster turns red when cooked.", cat:"Science" },
  { w:"SHRIMP", h:"Small swimming crustacean", meaning:"Decapod with compressed abdomen.", sentence:"Shrimp are filter feeders.", cat:"Science" },
  { w:"KRILL", h:"Antarctic crustacean", meaning:"Small shrimp like food for whales.", sentence:"Krill swarms contain millions.", cat:"Science" },
  { w:"BARNACLE", h:"Cemented crustacean", meaning:"Sessile filter feeder attached to rocks.", sentence:"Barnacle glues itself to hulls.", cat:"Science" },
  { w:"COPEPOD", h:"Abundant zooplankton", meaning:"Tiny crustacean key in ocean food web.", sentence:"Copepod is most numerous animal.", cat:"Science" },
  { w:"ISOPOD", h:"Flattened crustacean", meaning:"Pill bug or gribble.", sentence:"Isopod rolls into ball when threatened.", cat:"Science" },
  { w:"AMPHIPOD", h:"Side swimming crustacean", meaning:"Shrimp like with curved body.", sentence:"Amphipods live in marine and fresh water.", cat:"Science" },
  { w:"INSECT", h:"Six legged arthropod", meaning:"Class Insecta with three body parts.", sentence:"Insect antennae sense chemicals.", cat:"Science" },
  { w:"ANT", h:"Colonial social insect", meaning:"Eusocial insect living in colonies.", sentence:"Ants farm aphids for honeydew.", cat:"Science" },
  { w:"BEE", h:"Pollinating insect", meaning:"Flying insect producing honey and wax.", sentence:"Bee dances communicate flower location.", cat:"Science" },
  { w:"WASP", h:"Stinging insect", meaning:"Predatory hymenopteran with slender waist.", sentence:"Wasp paralyzes prey for larvae.", cat:"Science" },
  { w:"BEETLE", h:"Hardened forewings", meaning:"Largest insect order Coleoptera.", sentence:"Beetle elytra protect hindwings.", cat:"Science" },
  { w:"BUTTERFLY", h:"Scaly winged insect", meaning:"Lepidopteran with clubbed antennae.", sentence:"Butterfly tastes with feet.", cat:"Science" },
  { w:"MOTH", h:"Nocturnal lepidopteran", meaning:"Scaly winged insect with feathery antennae.", sentence:"Moth attracted to light.", cat:"Science" },
  { w:"FLY", h:"Two winged insect", meaning:"Dipteran with halteres balancing.", sentence:"Fly spreads diseases.", cat:"Science" },
  { w:"MOSQUITO", h:"Blood feeding fly", meaning:"Female mosquito needs blood for eggs.", sentence:"Mosquito carries malaria and dengue.", cat:"Science" },
  { w:"DRAGONFLY", h:"Aerial predator", meaning:"Odonate with large compound eyes.", sentence:"Dragonfly hunts mosquitoes midair.", cat:"Science" },
  { w:"DAMSELFLY", h:"Slim odonate", meaning:"Odonate folding wings over abdomen.", sentence:"Damselfly rests with wings closed.", cat:"Science" },
  { w:"GRASSHOPPER", h:"Jumping insect", meaning:"Orthopteran with enlarged hind legs.", sentence:"Grasshopper stridulates by rubbing legs.", cat:"Science" },
  { w:"CRICKET", h:"Chirping orthopteran", meaning:"Insect singing by wing rubbing.", sentence:"Cricket chirps indicate temperature.", cat:"Science" },
  { w:"LOCUST", h:"Swarming grasshopper", meaning:"Phase change gregarious grasshopper.", sentence:"Locust plagues devastate crops.", cat:"Science" },
  { w:"MANTIS", h:"Praying predator", meaning:"Raptorial forelegs for catching prey.", sentence:"Mantis rotates head 180 degrees.", cat:"Science" },
  { w:"ROACH", h:"Ancient resilient insect", meaning:"Blattodean with flattened body.", sentence:"Roach can survive without head for weeks.", cat:"Science" },
  { w:"TERMITE", h:"Wood eating social", meaning:"Isopteran digesting cellulose via symbionts.", sentence:"Termite mounds have ventilation.", cat:"Science" },
  { w:"LOUSE", h:"Wingless parasite", meaning:"Lice infesting mammals and birds.", sentence:"Louse eggs are nits glued to hair.", cat:"Science" },
  { w:"FLEA", h:"Jumping parasite", meaning:"Siphonaptera feeding on blood.", sentence:"Flea transmits bubonic plague.", cat:"Science" },
  { w:"TICK", h:"Blood feeding arachnid", meaning:"Ixodid vector of Lyme disease.", sentence:"Tick embeds mouthparts in skin.", cat:"Science" },
  { w:"MITE", h:"Microscopic arachnid", meaning:"Tiny arthropod often parasitic.", sentence:"Mite causes scabies.", cat:"Science" },
  { w:"SPIDER", h:"Eight legged silk producer", meaning:"Araneae spinning webs for prey.", sentence:"Spider venom liquefies insides.", cat:"Science" },
  { w:"SCORPION", h:"Tailed venomous arachnid", meaning:"Scorpiones with venomous stinger.", sentence:"Scorpion glows under UV light.", cat:"Science" },
  { w:"ARACHNID", h:"Spider mite scorpion", meaning:"Class of joint legged invertebrates.", sentence:"Arachnids have eight legs.", cat:"Science" },
  { w:"MILLIPEDE", h:"Many legged arthropod", meaning:"Diplopod with two pairs per segment.", sentence:"Millipede curls when threatened.", cat:"Science" },
  { w:"CENTIPEDE", h:"Venomous many legs", meaning:"Chilopod with one leg pair per segment.", sentence:"Centipede hunts at night.", cat:"Science" },
  { w:"STARFISH", h:"Spiny skinned echinoderm", meaning:"Asteroidea with regenerative arms.", sentence:"Starfish can regrow lost arms.", cat:"Science" },
  { w:"URCHIN", h:"Spherical echinoderm", meaning:"Echinoidea covered in spines.", sentence:"Sea urchin moves by tube feet.", cat:"Science" },
  { w:"CUCUMBER", h:"Cylindrical echinoderm", meaning:"Holothuroidea with leathery skin.", sentence:"Sea cucumber expels guts to scare predators.", cat:"Science" },
  { w:"BRITTLE", h:"Thin armed starfish", meaning:"Ophiuroidea with slender flexible arms.", sentence:"Brittle star hides under rocks.", cat:"Science" },
  { w:"CRINOID", h:"Feather star echinoderm", meaning:"Crinoidea with feathery arms.", sentence:"Crinoids are filter feeders.", cat:"Science" },
  { w:"SPONGE", h:"Porous filter feeder", meaning:"Porifera with no tissues.", sentence:"Sponge pumps water through pores.", cat:"Science" },
  { w:"CORAL", h:"Colonial cnidarian", meaning:"Anthozoa building reefs.", sentence:"Coral bleaches when stressed.", cat:"Science" },
  { w:"JELLYFISH", h:"Gelatinous cnidarian", meaning:"Scyphozoa with stinging tentacles.", sentence:"Jellyfish drifts with currents.", cat:"Science" },
  { w:"ANEMONE", h:"Flower like cnidarian", meaning:"Actiniaria with venomous tentacles.", sentence:"Anemone hosts clownfish.", cat:"Science" },
  { w:"HYDRA", h:"Freshwater cnidarian", meaning:"Hydrozoan with regenerative ability.", sentence:"Hydra can regrow entire body.", cat:"Science" },
  { w:"FLATWORM", h:"Simple acoelomate", meaning:"Platyhelminthes with flattened body.", sentence:"Flatworm has no anus.", cat:"Science" },
  { w:"RIBBON", h:"Proboscis worm", meaning:"Nemertea with long extendable proboscis.", sentence:"Ribbon worm shoots sticky weapon.", cat:"Science" },
  { w:"ROTIFER", h:"Wheel animalcule", meaning:"Microscopic pseudocoelomate with rotating cilia.", sentence:"Rotifer filters bacteria.", cat:"Science" },
  { w:"TARDIGRADE", h:"Water bear", meaning:"Microscopic eight legged extremophile.", sentence:"Tardigrade survives space vacuum.", cat:"Science" },
  { w:"VELVET", h:"Velvet worm", meaning:"Onychophoran with soft cuticle.", sentence:"Velvet worm squirts slime.", cat:"Science" },
  { w:"LAMPREY", h:"Jawless fish", meaning:"Petromyzontida with sucker mouth.", sentence:"Lamprey attaches to host fish.", cat:"Science" },
  { w:"HAGFISH", h:"Slime producing fish", meaning:"Myxini with skull but no spine.", sentence:"Hagfish ties knot to remove slime.", cat:"Science" },
  { w:"SHARK", h:"Cartilaginous fish", meaning:"Elasmobranch with replaceable teeth.", sentence:"Shark senses electric fields.", cat:"Science" },
  { w:"RAY", h:"Flattened cartilaginous fish", meaning:"Batoidea with wing like pectoral fins.", sentence:"Ray buries in sand.", cat:"Science" },
  { w:"SKATE", h:"Egg laying ray", meaning:"Rajidae with thorny backs.", sentence:"Skate case is mermaid purse.", cat:"Science" },
  { w:"CHIMAERA", h:"Ghost shark", meaning:"Holocephali with rat like tail.", sentence:"Chimaera lives in deep water.", cat:"Science" },
  { w:"BONY", h:"Fish with skeleton", meaning:"Osteichthyes with swim bladder.", sentence:"Bony fish regulate buoyancy.", cat:"Science" },
  { w:"SALMON", h:"Anadromous fish", meaning:"Salmonidae swimming upstream to spawn.", sentence:"Salmon changes color when breeding.", cat:"Science" },
  { w:"TROUT", h:"Freshwater salmonid", meaning:"Salmoninae living in cold streams.", sentence:"Trout eats insects and smaller fish.", cat:"Science" },
  { w:"CARP", h:"Freshwater cyprinid", meaning:"Cyprinidae with barbels.", sentence:"Carp stirs up sediment.", cat:"Science" },
  { w:"CATFISH", h:"Barbeled fish", meaning:"Siluriformes with whisker like barbels.", sentence:"Catfish tastes through skin.", cat:"Science" },
  { w:"EEL", h:"Snake like fish", meaning:"Anguilliformes with elongated body.", sentence:"Eel migrates to Sargasso to breed.", cat:"Science" },
  { w:"SEAHORSE", h:"Upright swimming fish", meaning:"Hippocampus with prehensile tail.", sentence:"Seahorse male gives birth.", cat:"Science" },
  { w:"PIPEFISH", h:"Needle like fish", meaning:"Syngnathidae relative of seahorse.", sentence:"Pipefish hide in seagrass.", cat:"Science" },
  { w:"FLOUNDER", h:"Flatfish both eyes same side", meaning:"Pleuronectiformes with compressed body.", sentence:"Flounder lies on seafloor.", cat:"Science" },
  { w:"HALIBUT", h:"Large flatfish", meaning:"Pleuronectidae with both eyes right side.", sentence:"Halibut is valuable food fish.", cat:"Science" },
  { w:"SOLE", h:"Flatfish left eyed", meaning:"Soleidae with small mouth.", sentence:"Fillet of sole is delicate.", cat:"Science" },
  { w:"TUNA", h:"Fast swimming fish", meaning:"Scombridae with hydrodynamic body.", sentence:"Tuna must swim to breathe.", cat:"Science" },
  { w:"MACKEREL", h:"Scombrid fish", meaning:"Scombridae with wavy stripes.", sentence:"Mackerel school near surface.", cat:"Science" },
  { w:"SARDINE", h:"Small oily fish", meaning:"Clupeidae in dense schools.", sentence:"Sardines filter plankton.", cat:"Science" },
  { w:"ANCHOVY", h:"Small silvery fish", meaning:"Engraulidae with large mouth.", sentence:"Anchovy paste flavors Caesar salad.", cat:"Science" },
  { w:"HERRING", h:"Plankton feeding fish", meaning:"Clupeidae forming huge schools.", sentence:"Herring is pickled or smoked.", cat:"Science" },
  { w:"COD", h:"Demersal fish", meaning:"Gadidae with chin barbel.", sentence:"Cod liver oil is rich in vitamin D.", cat:"Science" },
  { w:"HADDOCK", h:"Gadid fish", meaning:"Melanogrammus aeglefinus with dark lateral line.", sentence:"Haddock smoked becomes finnan haddie.", cat:"Science" },
  { w:"POLLOCK", h:"Gadid relative", meaning:"Pollachius resembling cod.", sentence:"Pollock substitutes for crab.", cat:"Science" },
  { w:"HAKE", h:"Gadid deep water fish", meaning:"Merluccius with large head.", sentence:"Hake fillets are delicate.", cat:"Science" },
  { w:"TILAPIA", h:"Farmed cichlid", meaning:"Oreochromis vegetarian.", sentence:"Farm raised tilapia is mild.", cat:"Science" },
  { w:"BASS", h:"Centrarchid sport fish", meaning:"Micropterus or Moronidae.", sentence:"Bass strikes lures aggressively.", cat:"Science" },
  { w:"PERCH", h:"Prickly finned fish", meaning:"Percidae with spiny rays.", sentence:"Yellow perch is popular panfish.", cat:"Science" },
  { w:"WALLEYE", h:"Large eyed perch", meaning:"Sander vitreus with reflective retina.", sentence:"Walleye feeds at night.", cat:"Science" },
  { w:"PIKE", h:"Ambush predator", meaning:"Esocidae with elongated snout.", sentence:"Northern pike hides in weeds.", cat:"Science" },
  { w:"MUSKIE", h:"Trophy fish", meaning:"Esox masquinongy large pike.", sentence:"Musky is fish of ten thousand casts.", cat:"Science" },
  { w:"GAR", h:"Armored fish", meaning:"Lepisosteidae with ganoid scales.", sentence:"Gar breathes air using swim bladder.", cat:"Science" },
  { w:"BOWFIN", h:"Primitive fish", meaning:"Amia calva with bony tongue.", sentence:"Bowfin can breathe air.", cat:"Science" },
  { w:"COELACANTH", h:"Ancient fish", meaning:"Actinistian thought extinct until 1938.", sentence:"Coelacanth has lobed fins.", cat:"Science" },
  { w:"LUNGFISH", h:"Air breathing fish", meaning:"Dipnoi with functional lungs.", sentence:"Lungfish estivates during drought.", cat:"Science" },
  { w:"BICHIR", h:"Ray finned dinosaur fish", meaning:"Polypteridae with dorsal finlets.", sentence:"Bichir resembles early fishes.", cat:"Science" },
  { w:"STURGEON", h:"Ancient cartilaginous", meaning:"Bony fish with scutes for caviar.", sentence:"Sturgeon swims upriver to spawn.", cat:"Science" },
  { w:"PADDLEFISH", h:"Plankton feeder", meaning:"Polyodontidae with elongated rostrum.", sentence:"Paddlefish filters with gill rakers.", cat:"Science" },
  { w:"REEDFISH", h:"Ropefish", meaning:"Erpetoichthys calabaricus eel like.", sentence:"Reedfish has paired lungs.", cat:"Science" },
  { w:"FROG", h:"Amphibian jumper", meaning:"Anura with smooth moist skin.", sentence:"Frog breathes through skin.", cat:"Science" },
  { w:"TOAD", h:"Dry warty frog", meaning:"Bufonidae with parotoid glands.", sentence:"Toad secretes bufotoxin.", cat:"Science" },
  { w:"SALAMANDER", h:"Moist skinned amphibian", meaning:"Caudata with tail throughout life.", sentence:"Salamander regenerates limbs.", cat:"Science" },
  { w:"NEWT", h:"Semi aquatic salamander", meaning:"Salamandridae with rough skin.", sentence:"Newt skin is toxic.", cat:"Science" },
  { w:"CAECILIAN", h:"Limbless amphibian", meaning:"Gymnophiona with annulated skin.", sentence:"Caecilian burrows in soil.", cat:"Science" },
  { w:"TURTLE", h:"Shelled reptile", meaning:"Testudines with bony carapace.", sentence:"Turtle retracts head into shell.", cat:"Science" },
  { w:"TORTOISE", h:"Land dwelling turtle", meaning:"Testudinidae with domed shell.", sentence:"Giant tortoise lives over 100 years.", cat:"Science" },
  { w:"TERRAPIN", h:"Brackish water turtle", meaning:"Emydidae living in estuaries.", sentence:"Diamondback terrapin has spotted skin.", cat:"Science" },
  { w:"LIZARD", h:"Scaly reptile", meaning:"Squamata with four legs and external ears.", sentence:"Lizard sheds tail when grabbed.", cat:"Science" },
  { w:"GECKO", h:"Sticky footed lizard", meaning:"Gekkonidae with vocalizations.", sentence:"Gecko foot uses van der Waals force.", cat:"Science" },
  { w:"SKINK", h:"Smooth scaled lizard", meaning:"Scincidae with reduced legs.", sentence:"Skink slides like snake.", cat:"Science" },
  { w:"CHAMELEON", h:"Color changing lizard", meaning:"Chamaeleonidae with projectile tongue.", sentence:"Chameleon eyes move independently.", cat:"Science" },
  { w:"IGUANA", h:"Herbivorous lizard", meaning:"Iguanidae with dewlap.", sentence:"Green iguana basks in sun.", cat:"Science" },
  { w:"MONITOR", h:"Large predatory lizard", meaning:"Varanidae with forked tongue.", sentence:"Komodo dragon is largest monitor.", cat:"Science" },
  { w:"SNAKE", h:"Limbless reptile", meaning:"Serpentes with forked tongue.", sentence:"Snake swallows prey whole.", cat:"Science" },
  { w:"PYTHON", h:"Constrictor snake", meaning:"Pythonidae with heat pits.", sentence:"Python coils around prey.", cat:"Science" },
  { w:"BOA", h:"Constrictor snake", meaning:"Boidae giving live birth.", sentence:"Boa has vestigial hind limbs.", cat:"Science" },
  { w:"VIPER", h:"Venomous snake", meaning:"Viperidae with hinged fangs.", sentence:"Viper strikes and releases.", cat:"Science" },
  { w:"RATTLESNAKE", h:"Pit viper", meaning:"Crotalus with rattle segments.", sentence:"Rattlesnake warns before striking.", cat:"Science" },
  { w:"COBRA", h:"Elapid snake", meaning:"Elapidae with neurotoxic venom.", sentence:"Cobra spreads hood when threatened.", cat:"Science" },
  { w:"MAMBA", h:"Fast tree snake", meaning:"Dendroaspis with deadly venom.", sentence:"Black mamba is highly aggressive.", cat:"Science" },
  { w:"CROCODILE", h:"Large reptile", meaning:"Crocodylidae with V shaped snout.", sentence:"Crocodile ambushes at water edge.", cat:"Science" },
  { w:"ALLIGATOR", h:"Wide snouted croc", meaning:"Alligatoridae with U shaped snout.", sentence:"Alligator parent guards nest.", cat:"Science" },
  { w:"CAIMAN", h:"Small crocodilian", meaning:"Alligatoridae with bony ridge.", sentence:"Caiman basks on riverbank.", cat:"Science" },
  { w:"GHARIAL", h:"Thin snouted croc", meaning:"Gavialidae fish eater.", sentence:"Gharial catches fish sideways.", cat:"Science" },
  { w:"BIRD", h:"Feathered theropod", meaning:"Aves with beak feathers wings.", sentence:"Bird flies using hollow bones.", cat:"Science" },
  { w:"EAGLE", h:"Large raptor", meaning:"Accipitridae with hooked beak.", sentence:"Eagle soars on thermal updrafts.", cat:"Science" },
  { w:"HAWK", h:"Diurnal raptor", meaning:"Accipitridae with sharp vision.", sentence:"Hawk spots mouse from high perch.", cat:"Science" },
  { w:"FALCON", h:"Swift raptor", meaning:"Falconidae with toothed beak.", sentence:"Peregrine falcon dives over 200 mph.", cat:"Science" },
  { w:"OWL", h:"Nocturnal raptor", meaning:"Strigiformes with silent flight.", sentence:"Owl rotates head 270 degrees.", cat:"Science" },
  { w:"VULTURE", h:"Scavenging raptor", meaning:"Cathartidae or Accipitridae.", sentence:"Vulture has bald head for hygiene.", cat:"Science" },
  { w:"PARROT", h:"Colorful bird", meaning:"Psittaciformes with zygodactyl feet.", sentence:"Parrot mimics human speech.", cat:"Science" },
  { w:"MACAW", h:"Long tailed parrot", meaning:"Arini with bare facial patch.", sentence:"Macaw cracks nuts with beak.", cat:"Science" },
  { w:"COCKATOO", h:"Crested parrot", meaning:"Cacatuidae with powder down.", sentence:"Cockatoo raises crest when excited.", cat:"Science" },
  { w:"CROW", h:"Black corvid", meaning:"Corvus with problem solving intelligence.", sentence:"Crow uses tools to extract food.", cat:"Science" },
  { w:"RAVEN", h:"Large corvid", meaning:"Corvus corax with wedge shaped tail.", sentence:"Raven's call is deep croak.", cat:"Science" },
  { w:"JAY", h:"Blue corvid", meaning:"Cyanocitta or Garrulus.", sentence:"Jay hides acorns for winter.", cat:"Science" },
  { w:"MAGPIE", h:"Black and white corvid", meaning:"Pica with long tail.", sentence:"Magpie collects shiny objects.", cat:"Science" },
  { w:"PIGEON", h:"Common city bird", meaning:"Columbidae with crop milk.", sentence:"Pigeon navigates by magnetic field.", cat:"Science" },
  { w:"DOVE", h:"Symbol of peace", meaning:"Columbidae smaller than pigeon.", sentence:"Mourning dove makes cooing sound.", cat:"Science" },
  { w:"SPARROW", h:"Small brown bird", meaning:"Passeridae or Emberizidae.", sentence:"House sparrow nests in eaves.", cat:"Science" },
  { w:"FINCH", h:"Seed eating bird", meaning:"Fringillidae with conical beak.", sentence:"Goldfinch flocks in winter.", cat:"Science" },
  { w:"CARDINAL", h:"Red crested bird", meaning:"Cardinalidae with thick bill.", sentence:"Cardinal sings year round.", cat:"Science" },
  { w:"BLUEBIRD", h:"Thrush relative", meaning:"Sialia with bright blue plumage.", sentence:"Bluebird nests in cavities.", cat:"Science" },
  { w:"ROBIN", h:"Migratory thrush", meaning:"Turdus migratorius with red breast.", sentence:"Robin pulls earthworm from lawn.", cat:"Science" },
  { w:"THRUSH", h:"Songbird", meaning:"Turdidae with spotted breast.", sentence:"Wood thrush flutey song echoes.", cat:"Science" },
  { w:"WARBLER", h:"Small insectivore", meaning:"Parulidae or Sylviidae.", sentence:"Yellow warbler gleans caterpillars.", cat:"Science" },
  { w:"HUMMINGBIRD", h:"Tiny hovering bird", meaning:"Trochilidae with rapid wingbeats.", sentence:"Hummingbird drinks nectar while flying.", cat:"Science" },
  { w:"SWIFT", h:"Aerial insectivore", meaning:"Apodidae with long curved wings.", sentence:"Swift sleeps while flying.", cat:"Science" },
  { w:"SWALLOW", h:"Fork tailed bird", meaning:"Hirundinidae catching insects on wing.", sentence:"Barn swallow builds mud nest.", cat:"Science" },
  { w:"KINGFISHER", h:"Fish diving bird", meaning:"Alcedinidae with dagger bill.", sentence:"Kingfisher plunges headfirst into water.", cat:"Science" },
  { w:"WOODPECKER", h:"Pecking bark bird", meaning:"Picidae with chisel bill.", sentence:"Woodpecker drums to claim territory.", cat:"Science" },
  { w:"FLICKER", h:"Ground feeding woodpecker", meaning:"Colaptes with spotted belly.", sentence:"Flicker eats ants on ground.", cat:"Science" },
  { w:"SAPSUCKER", h:"Tree drilling woodpecker", meaning:"Sphyrapicus drinking sap.", sentence:"Sapsucker wells rows of holes.", cat:"Science" },
  { w:"NUTHATCH", h:"Headfirst climber", meaning:"Sittidae with upward posture.", sentence:"Nuthatch wedges nuts into bark.", cat:"Science" },
  { w:"CREEPER", h:"Spiral tree climber", meaning:"Certhiidae with curved bill.", sentence:"Brown creeper probes crevices.", cat:"Science" },
  { w:"WREN", h:"Small cocked tail", meaning:"Troglodytidae with loud song.", sentence:"Wren nests in any cavity.", cat:"Science" },
  { w:"DIPPER", h:"Underwater songbird", meaning:"Cinclidae walking on streambed.", sentence:"Dipper flies through waterfall.", cat:"Science" },
  { w:"STARLING", h:"Iridescent flock bird", meaning:"Sturnidae mimicking sounds.", sentence:"Starling murmuration swirls at dusk.", cat:"Science" },
  { w:"MYNAH", h:"Talking starling", meaning:"Gracula or Acridotheres.", sentence:"Mynah learns human words.", cat:"Science" },
  { w:"OXPECKER", h:"Tick eating bird", meaning:"Buphagidae perching on mammals.", sentence:"Oxpecker rides rhino back.", cat:"Science" },
  { w:"WEAVER", h:"Nest building bird", meaning:"Ploceidae weaving grass.", sentence:"Weaver finch knot hangs from branch.", cat:"Science" },
  { w:"WHYDAH", h:"Parasitic finch", meaning:"Viduidae with long tail.", sentence:"Whydah lays eggs in waxbill nests.", cat:"Science" },
  { w:"CUCKOO", h:"Brood parasite", meaning:"Cuculidae laying in host nest.", sentence:"Cuckoo chick ejects host eggs.", cat:"Science" },
  { w:"KOEL", h:"Asian cuckoo", meaning:"Eudynamys with red eye.", sentence:"Koel calls loudly at dawn.", cat:"Science" },
  { w:"COUCAL", h:"Pheasant cuckoo", meaning:"Centropodidae building own nest.", sentence:"Coucal runs through undergrowth.", cat:"Science" },
  { w:"TURACO", h:"Fruit eating bird", meaning:"Musophagidae with green pigment.", sentence:"Turaco has semi zygodactyl feet.", cat:"Science" },
  { w:"GOOSE", h:"Waterfowl", meaning:"Anatidae larger than duck.", sentence:"Goose migrates in V formation.", cat:"Science" },
  { w:"DUCK", h:"Dabbling waterfowl", meaning:"Anatidae with broad flat bill.", sentence:"Mallard duck quacks loudly.", cat:"Science" },
  { w:"SWAN", h:"Long necked waterfowl", meaning:"Cygnus with all white plumage.", sentence:"Mute swan hisses at intruders.", cat:"Science" },
  { w:"GREBE", h:"Diving waterbird", meaning:"Podicipedidae with lobed toes.", sentence:"Grebe eats feathers to protect stomach.", cat:"Science" },
  { w:"LOON", h:"Northern diver", meaning:"Gaviidae with eerie call.", sentence:"Common loon yodels across lake.", cat:"Science" },
  { w:"CORMORANT", h:"Fish eating seabird", meaning:"Phalacrocoracidae lacking waterproofing.", sentence:"Cormorant spreads wings to dry.", cat:"Science" },
  { w:"PELICAN", h:"Pouched seabird", meaning:"Pelecanidae scooping fish.", sentence:"Pelican drains pouch before swallowing.", cat:"Science" },
  { w:"GANNET", h:"Diving seabird", meaning:"Sulidae with pointed bill.", sentence:"Northern gannet plunges like spear.", cat:"Science" },
  { w:"BOOBY", h:"Clumsy seabird", meaning:"Sula named from bobo.", sentence:"Blue footed booby dances.", cat:"Science" },
  { w:"FRIGATE", h:"Aerial seabird", meaning:"Fregatidae with inflated red pouch.", sentence:"Frigatebird steals food from others.", cat:"Science" },
  { w:"ALBATROSS", h:"Soaring seabird", meaning:"Diomedeidae with long wings.", sentence:"Albatross glides for hours without flap.", cat:"Science" },
  { w:"PETREL", h:"Tube nosed seabird", meaning:"Procellariidae using wing flapping.", sentence:"Storm petrel walks on water.", cat:"Science" },
  { w:"SHEARWATER", h:"Long winged petrel", meaning:"Puffinus shearing waves.", sentence:"Shearwater flies low over sea.", cat:"Science" },
  { w:"PENGUIN", h:"Flightless seabird", meaning:"Spheniscidae swimming with flippers.", sentence:"Emperor penguin huddles for warmth.", cat:"Science" },
  { w:"AUK", h:"Alcuid seabird", meaning:"Alcidae swimming with wings.", sentence:"Razorbill auk looks like penguin.", cat:"Science" },
  { w:"PUFFIN", h:"Clown faced auk", meaning:"Fratercula with colorful beak.", sentence:"Puffin carries fish crosswise.", cat:"Science" },
  { w:"OSTRICH", h:"Largest bird", meaning:"Struthio camelus cannot fly.", sentence:"Ostrich kicks with powerful legs.", cat:"Science" },
  { w:"EMU", h:"Second largest bird", meaning:"Dromaius with three toes.", sentence:"Emu runs 30 miles per hour.", cat:"Science" },
  { w:"RHEA", h:"South american ratite", meaning:"Rhea with long neck legs.", sentence:"Rhea male incubates eggs.", cat:"Science" },
  { w:"CASSOWARY", h:"Helmeted ratite", meaning:"Casuarius with dagger claw.", sentence:"Cassowary is dangerous when provoked.", cat:"Science" },
  { w:"KIWI", h:"Nocturnal flightless", meaning:"Apteryx with hair like feathers.", sentence:"Kiwi has nostrils at bill tip.", cat:"Science" },
  { w:"TINAMOU", h:"Cryptic ground bird", meaning:"Tinamidae with loud whistle.", sentence:"Tinamou flies poorly but runs fast.", cat:"Science" },
  { w:"KANGAROO", h:"Hopping marsupial", meaning:"Macropodidae with large hind legs.", sentence:"Kangaroo carries joey in pouch.", cat:"Science" },
  { w:"WALLABY", h:"Small kangaroo", meaning:"Macropodidae smaller than red kangaroo.", sentence:"Wallaby hops through brush.", cat:"Science" },
  { w:"KOALA", h:"Arboreal marsupial", meaning:"Phascolarctos cinereus eats eucalyptus.", sentence:"Koala sleeps 20 hours daily.", cat:"Science" },
  { w:"WOMBAT", h:"Burrowing marsupial", meaning:"Vombatidae with backward pouch.", sentence:"Wombat produces cube shaped scat.", cat:"Science" },
  { w:"POSSUM", h:"Nocturnal marsupial", meaning:"Didelphidae playing dead when threatened.", sentence:"Possum hisses show teeth.", cat:"Science" },
  { w:"OPOSSUM", h:"North american marsupial", meaning:"Didelphis virginiana with prehensile tail.", sentence:"Opossum immune to snake venom.", cat:"Science" },
  { w:"BANDICOOT", h:"Pointy snouted marsupial", meaning:"Peramelidae digging for grubs.", sentence:"Bandicoot leaves conical holes.", cat:"Science" },
  { w:"BILBY", h:"Rabbit eared bandicoot", meaning:"Macrotis with long ears.", sentence:"Bilby digs spiral burrows.", cat:"Science" },
  { w:"TASMANIA", h:"Devil carnivore", meaning:"Sarcophilus harrisii with black fur.", sentence:"Tasmanian devil screams during feeding.", cat:"Science" },
  { w:"QUOLL", h:"Spotted carnivore", meaning:"Dasyurus with white spots.", sentence:"Quoll eats insects and small mammals.", cat:"Science" },
  { w:"NUMBAT", h:"Anteater marsupial", meaning:"Myrmecobius fasciatus eating termites.", sentence:"Numbat has long sticky tongue.", cat:"Science" },
  { w:"SUGAR", h:"Gliding possum", meaning:"Petaurus breviceps parachuting.", sentence:"Sugar glider bonds with owner.", cat:"Science" },
  { w:"PLATYPUS", h:"Egg laying mammal", meaning:"Ornithorhynchus anatinus with bill.", sentence:"Platypus detects electric fields.", cat:"Science" },
  { w:"ECHIDNA", h:"Spiny anteater", meaning:"Tachyglossidae with long snout.", sentence:"Echidna lays single egg into pouch.", cat:"Science" },
  { w:"MONOTREME", h:"Egg laying mammal", meaning:"Prototheria with cloaca.", sentence:"Monotremes are relict mammals.", cat:"Science" },
  { w:"BAT", h:"Flying mammal", meaning:"Chiroptera using echolocation.", sentence:"Bat hunts insects at night.", cat:"Science" },
  { w:"MEGABAT", h:"Fruit bat", meaning:"Pteropodidae with large eyes.", sentence:"Megabat sees well navigates visually.", cat:"Science" },
  { w:"MICROBAT", h:"Echo locating bat", meaning:"Microchiroptera small with tragus.", sentence:"Microbat eats mosquitoes.", cat:"Science" },
  { w:"VAMPIRE", h:"Blood feeding bat", meaning:"Desmodontinae hematophagy.", sentence:"Vampire bat drinks blood painlessly.", cat:"Science" },
  { w:"SHREW", h:"Tiny insectivore", meaning:"Soricidae with venomous saliva.", sentence:"Shrew eats its body weight daily.", cat:"Science" },
  { w:"MOLE", h:"Tunneling mammal", meaning:"Talpidae with spade like hands.", sentence:"Mole digs through soil.", cat:"Science" },
  { w:"HEDGEHOG", h:"Spiny insectivore", meaning:"Erinaceidae rolling into ball.", sentence:"Hedgehog snuffles for beetles.", cat:"Science" },
  { w:"MOUSE", h:"Small rodent", meaning:"Muridae with long tail.", sentence:"House mouse squeezes through tiny gap.", cat:"Science" },
  { w:"RAT", h:"Larger rodent", meaning:"Rattus norvegicus or rattus.", sentence:"Rat gnaws through wires.", cat:"Science" },
  { w:"HAMSTER", h:"Cheek pouched rodent", meaning:"Cricetidae storing food.", sentence:"Hamster runs on wheel at night.", cat:"Science" },
  { w:"GERBIL", h:"Desert rodent", meaning:"Gerbillinae hopping on hind legs.", sentence:"Gerbil thumps foot to warn.", cat:"Science" },
  { w:"VOLE", h:"Short tailed rodent", meaning:"Arvicolinae with small eyes.", sentence:"Vole tunnels through grass.", cat:"Science" },
  { w:"LEMMING", h:"Arctic rodent", meaning:"Lemmus with population cycles.", sentence:"Lemming does not commit suicide.", cat:"Science" },
  { w:"MUSKRAT", h:"Semi aquatic rodent", meaning:"Ondatra zibethicus with musk.", sentence:"Muskrat builds lodge like beaver.", cat:"Science" },
  { w:"BEAVER", h:"Dam building rodent", meaning:"Castor canadensis flat tail.", sentence:"Beaver fells tree with teeth.", cat:"Science" },
  { w:"SQUIRREL", h:"Bushy tailed rodent", meaning:"Sciuridae caching nuts.", sentence:"Gray squirrel scolds from branch.", cat:"Science" },
  { w:"CHIPMUNK", h:"Striped ground squirrel", meaning:"Tamias with cheek pouches.", sentence:"Chipmunk stuffs seeds into cheeks.", cat:"Science" },
  { w:"MARMOT", h:"Large ground squirrel", meaning:"Marmota hibernating in burrows.", sentence:"Marmot whistles to warn colony.", cat:"Science" },
  { w:"PRAIRIE", h:"Dog barking rodent", meaning:"Cynomys social mound builder.", sentence:"Prairie dog colony has sentinels.", cat:"Science" },
  { w:"GOPHER", h:"Pocket gopher", meaning:"Geomyidae with fur lined pouches.", sentence:"Gopher pushes dirt out of tunnel.", cat:"Science" },
  { w:"PORCUPINE", h:"Quilled rodent", meaning:"Erethizontidae or Hystricidae.", sentence:"Porcupine erects quills when threatened.", cat:"Science" },
  { w:"GUINEA", h:"Pig cavy", meaning:"Cavia porcellus domesticated for meat.", sentence:"Guinea pig wheeks for food.", cat:"Science" },
  { w:"CHINCHILLA", h:"Soft furred rodent", meaning:"Chinchillidae dense fur.", sentence:"Chinchilla takes dust baths.", cat:"Science" },
  { w:"CAPYBARA", h:"Largest rodent", meaning:"Hydrochoerus hydrochaeris semi aquatic.", sentence:"Capybara socializes in groups.", cat:"Science" },
  { w:"NUTRIA", h:"Swamp rodent", meaning:"Myocastor coypus invasive species.", sentence:"Nutria damages wetlands.", cat:"Science" },
  { w:"AGOUTI", h:"Seed dispersing rodent", meaning:"Dasyproctidae with striped rump.", sentence:"Agouti cracks nutshell with teeth.", cat:"Science" },
  { w:"PACA", h:"Spotted forest rodent", meaning:"Cuniculidae with bony shell.", sentence:"Paca eats fallen fruit.", cat:"Science" },
  { w:"SPRINGHARE", h:"Hopping rodent", meaning:"Pedetidae like miniature kangaroo.", sentence:"Springhare leaps from predators.", cat:"Science" },
  { w:"MOLAR", h:"Grinding tooth", meaning:"Tooth for crushing food.", sentence:"Molar surface has cusps.", cat:"Science" },
  { w:"CANINE", h:"Piercing tooth", meaning:"Pointed tooth for tearing.", sentence:"Canine is longest in dogs.", cat:"Science" },
  { w:"INCISOR", h:"Biting tooth", meaning:"Chisel shaped tooth for cutting.", sentence:"Incisors grow continuously in rodents.", cat:"Science" },
  { w:"PREMOLAR", h:"Transitional tooth", meaning:"Between canine and molar.", sentence:"Premolars have two cusps.", cat:"Science" },
  { w:"ENAMEL", h:"Hard tooth coating", meaning:"Hardest substance in body.", sentence:"Enamel cannot regenerate.", cat:"Science" },
  { w:"DENTIN", h:"Bony tooth layer", meaning:"Beneath enamel yellowish tissue.", sentence:"Dentin exposed causes sensitivity.", cat:"Science" },
  { w:"PULP", h:"Inner tooth core", meaning:"Contains nerves and blood vessels.", sentence:"Pulp infection requires root canal.", cat:"Science" },
  { w:"CEMENTUM", h:"Root covering", meaning:"Calcified tissue anchoring tooth.", sentence:"Cementum attaches periodontal ligament.", cat:"Science" },
  { w:"GINGIVA", h:"Gum tissue", meaning:"Mucous membrane surrounding teeth.", sentence:"Gingivitis inflames gingiva.", cat:"Science" },
  { w:"PLAQUE", h:"Bacterial biofilm", meaning:"Sticky deposit on teeth.", sentence:"Plaque hardens into tartar.", cat:"Science" },
  { w:"TARTAR", h:"Calcified plaque", meaning:"Hard mineralized deposit on teeth.", sentence:"Tartar requires scaling removal.", cat:"Science" },
  { w:"CAVITY", h:"Tooth decay hole", meaning:"Demineralized area from acid.", sentence:"Cavity fills with amalgam.", cat:"Science" },
  { w:"FILLING", h:"Dental restoration", meaning:"Material plugging cavity.", sentence:"Amalgam filling contains mercury.", cat:"Science" },
  { w:"CROWN", h:"Artificial tooth cap", meaning:"Prosthesis covering damaged tooth.", sentence:"Porcelain crown looks natural.", cat:"Science" },
  { w:"BRIDGE", h:"Fixed partial denture", meaning:"Replaces missing tooth anchored to neighbors.", sentence:"Dental bridge restores chewing.", cat:"Science" },
  { w:"IMPLANT", h:"Artificial tooth root", meaning:"Titanium screw fusing to jawbone.", sentence:"Implant osseointegrates with bone.", cat:"Science" },
  { w:"DENTURES", h:"Removable false teeth", meaning:"Acrylic appliance for edentulous.", sentence:"Dentures soak overnight.", cat:"Science" },
  { w:"ORTHO", h:"Braces specialty", meaning:"Orthodontics straightens teeth.", sentence:"Ortho wires move teeth slowly.", cat:"Science" },
  { w:"BRACES", h:"Wires bands brackets", meaning:"Orthodontic appliance correcting alignment.", sentence:"Braces apply continuous gentle pressure.", cat:"Science" },
  { w:"RETAINER", h:"Post braces appliance", meaning:"Removable device maintaining alignment.", sentence:"Retainer worn nightly after braces.", cat:"Science" },
  { w:"FLUORIDE", h:"Mineral preventing decay", meaning:"Strengthens enamel remineralization.", sentence:"Fluoride toothpaste reduces cavities.", cat:"Science" },
  { w:"SEALANT", h:"Protective coating", meaning:"Resin painted on chewing surfaces.", sentence:"Sealant blocks pits and fissures.", cat:"Science" },
  { w:"XRAY", h:"Radiograph image", meaning:"Radiation image showing hidden decay.", sentence:"Xray reveals cavity between teeth.", cat:"Science" },
  { w:"CURETTE", h:"Scaling instrument", meaning:"Curved tool removing subgingival calculus.", sentence:"Curette scrapes root surface.", cat:"Science" },
  { w:"PROBE", h:"Measuring instrument", meaning:"Thin tool checking pocket depth.", sentence:"Periodontal probe measures gum health.", cat:"Science" },
  { w:"MIRROR", h:"Dental examination tool", meaning:"Mouth mirror reflects indirect view.", sentence:"Dental mirror sees behind teeth.", cat:"Science" },
  { w:"ASPIRATOR", h:"Suction device", meaning:"Removes saliva and debris.", sentence:"High volume aspirator keeps field dry.", cat:"Science" },
  { w:"BURS", h:"Drill attachments", meaning:"Rotary cutting tools for cavity prep.", sentence:"Carbide burs cut tooth efficiently.", cat:"Science" },
  { w:"HANDPIECE", h:"Dental drill", meaning:"Powered instrument holding burs.", sentence:"High speed handpiece sprays water.", cat:"Science" },
  { w:"CURING", h:"Light hardens composite", meaning:"Blue light polymerizing resin.", sentence:"Curing light sets filling instantly.", cat:"Science" },
  { w:"COMPOSITE", h:"Tooth colored filling", meaning:"Resin based restorative material.", sentence:"Composite bonds to tooth structure.", cat:"Science" },
  { w:"AMALGAM", h:"Silver filling", meaning:"Alloy of mercury silver tin copper.", sentence:"Amalgam expands slightly after placement.", cat:"Science" },
  { w:"GLASS", h:"Ionomer fluoride release", meaning:"Tooth colored material releasing fluoride.", sentence:"Glass ionomer adheres to dentin.", cat:"Science" },
  { w:"LUTING", h:"Cement agent", meaning:"Fixing crown or bridge to tooth.", sentence:"Luting cement fills gap.", cat:"Science" },
  { w:"IMPRESSION", h:"Negative tooth mold", meaning:"Silicone putty capturing tooth shape.", sentence:"Impression sent to lab for crown.", cat:"Science" },
  { w:"STONE", h:"Plaster model", meaning:"Gypsum cast from impression.", sentence:"Stone model trimmed at base.", cat:"Science" },
  { w:"WAX", h:"Pattern material", meaning:"Malleable wax for crown fabrication.", sentence:"Wax pattern invested for casting.", cat:"Science" },
  { w:"CAST", h:"Metal restoration", meaning:"Gold alloy crown formed from wax.", sentence:"Casting process burns out wax.", cat:"Science" },
  { w:"SOLDER", h:"Join metal parts", meaning:"Alloy connecting orthodontic wires.", sentence:"Solder flux prevents oxidation.", cat:"Science" },
  { w:"SUTURE", h:"Stitch wound", meaning:"Gut or nylon closing extraction site.", sentence:"Suture removed after one week.", cat:"Science" },
  { w:"ANESTHESIA", h:"Numbing agent", meaning:"Local anesthetic blocking pain.", sentence:"Lidocaine anesthesia lasts hours.", cat:"Science" },
  { w:"ARTICAINE", h:"Dental anesthetic", meaning:"Amide local with thiophene ring.", sentence:"Articaine diffuses through bone.", cat:"Science" },
  { w:"EPINEPHRINE", h:"Vasoconstrictor", meaning:"Added to prolong anesthesia.", sentence:"Epinephrine reduces bleeding.", cat:"Science" },
  { w:"MANDIBLE", h:"Lower jaw", meaning:"U shaped bone holding lower teeth.", sentence:"Mandible moves during chewing.", cat:"Science" },
  { w:"MAXILLA", h:"Upper jaw", meaning:"Paired bone holding upper teeth.", sentence:"Maxilla forms floor of orbit.", cat:"Science" },
  { w:"ZYGOMA", h:"Cheekbone", meaning:"Arching bone lateral to eye.", sentence:"Zygoma fracture causes flat cheek.", cat:"Science" },
  { w:"TEMPOR", h:"Mandible joint", meaning:"TMJ connects jaw to skull.", sentence:"Tempor pain causes headache.", cat:"Science" },
  { w:"RAMUS", h:"Vertical jaw part", meaning:"Posterior mandible ascending.", sentence:"Ramus angle may fracture.", cat:"Science" },
  { w:"CONDYLE", h:"Jaw joint knob", meaning:"Rounded end of ramus.", sentence:"Condyle glides forward opening mouth.", cat:"Science" },
  { w:"CORONOID", h:"Muscle attachment", meaning:"Projection for temporalis muscle.", sentence:"Coronoid process under zygomatic arch.", cat:"Science" },
  { w:"ALVEOLUS", h:"Tooth socket", meaning:"Bony cavity holding root.", sentence:"Alveolus resorbs after extraction.", cat:"Science" },
  { w:"SEPTUM", h:"Bone divider", meaning:"Wall between adjacent sockets.", sentence:"Interradicular septum separates roots.", cat:"Science" },
  { w:"TUBEROSITY", h:"Bony bump", meaning:"Rounded prominence on maxilla.", sentence:"Maxillary tuberosity holds denture.", cat:"Science" },
  { w:"EXOSTOSIS", h:"Bony outgrowth", meaning:"Benign overgrowth of cortical bone.", sentence:"Exostosis complicates impression.", cat:"Science" },
  { w:"TORUS", h:"Bony lump", meaning:"Mandibular or palatal exostosis.", sentence:"Torus covered with thin mucosa.", cat:"Science" },
  { w:"PALATE", h:"Roof of mouth", meaning:"Hard anterior soft posterior.", sentence:"Cleft palate requires surgery.", cat:"Science" },
  { w:"UVULA", h:"Dangling soft tissue", meaning:"Projection from soft palate.", sentence:"Uvula vibrates during snoring.", cat:"Science" },
  { w:"TONSIL", h:"Lymphoid tissue", meaning:"Palatine tonsil in oropharynx.", sentence:"Tonsillectomy treats recurrent infection.", cat:"Science" },
  { w:"ADENOID", h:"Nasopharyngeal tonsil", meaning:"Pharyngeal tonsil behind nose.", sentence:"Adenoid hypertrophy obstructs breathing.", cat:"Science" },
  { w:"PHARYNX", h:"Throat cavity", meaning:"Muscular tube from nose to larynx.", sentence:"Pharynx divides into three parts.", cat:"Science" },
  { w:"LARYNX", h:"Voice box", meaning:"Cartilaginous organ containing vocal folds.", sentence:"Larynx closes during swallowing.", cat:"Science" },
  { w:"EPIGLOTTIS", h:"Flap covering airway", meaning:"Leaf shaped cartilage protecting trachea.", sentence:"Epiglottis folds down when swallowing.", cat:"Science" },
  { w:"TRACHEA", h:"Windpipe", meaning:"Tube carrying air to lungs.", sentence:"Trachea splits into bronchi.", cat:"Science" },
  { w:"BRONCHUS", h:"Airway branch", meaning:"One of two tubes from trachea.", sentence:"Bronchus enters lung hilum.", cat:"Science" },
  { w:"BRONCHIOLE", h:"Small airway", meaning:"Branch of bronchus without cartilage.", sentence:"Bronchiole leads to alveolus.", cat:"Science" },
  { w:"DIAPHRAGM", h:"Breathing muscle", meaning:"Sheet separating chest and abdomen.", sentence:"Diaphragm contracts pulling air in.", cat:"Science" },
  { w:"PLEURA", h:"Lung membrane", meaning:"Double layer surrounding lung.", sentence:"Pleurisy inflames pleura causing pain.", cat:"Science" },
  { w:"MEDIASTINUM", h:"Central chest space", meaning:"Region between lungs containing heart.", sentence:"Mediastinum houses trachea esophagus.", cat:"Science" },
  { w:"PERICARDIUM", h:"Heart sac", meaning:"Fibrous bag enclosing heart.", sentence:"Pericarditis causes chest pain.", cat:"Science" },
  { w:"MYOCARDIUM", h:"Heart muscle", meaning:"Middle layer of heart wall.", sentence:"Myocardium contracts pumping blood.", cat:"Science" },
  { w:"ENDOCARDIUM", h:"Heart inner lining", meaning:"Smooth layer covering valves.", sentence:"Endocarditis infects heart valves.", cat:"Science" },
  { w:"ATRIUM", h:"Upper heart chamber", meaning:"Receiving chamber for returning blood.", sentence:"Right atrium accepts deoxygenated blood.", cat:"Science" },
  { w:"VENTRICLE", h:"Lower heart chamber", meaning:"Pumping chamber sending blood out.", sentence:"Left ventricle thickest wall.", cat:"Science" },
  { w:"VALVE", h:"One way door", meaning:"Prevents backflow in heart or veins.", sentence:"Mitral valve has two leaflets.", cat:"Science" },
  { w:"MITRAL", h:"Bicuspid valve", meaning:"Between left atrium and ventricle.", sentence:"Mitral prolapse causes murmur.", cat:"Science" },
  { w:"AORTA", h:"Largest artery", meaning:"Main artery carrying blood from heart.", sentence:"Aorta arches then descends.", cat:"Science" },
  { w:"ARTERY", h:"Carries blood away", meaning:"Muscular vessel under high pressure.", sentence:"Artery wall has elastic lamina.", cat:"Science" },
  { w:"VEIN", h:"Returns blood to heart", meaning:"Low pressure vessel with valves.", sentence:"Vein collapses when cut.", cat:"Science" },
  { w:"CAPILLARY", h:"Microscopic vessel", meaning:"Site of nutrient exchange.", sentence:"Capillary bed surrounds alveoli.", cat:"Science" },
  { w:"VENULE", h:"Small vein", meaning:"Collects blood from capillaries.", sentence:"Venules merge into veins.", cat:"Science" },
  { w:"ARTERIOLE", h:"Small artery", meaning:"Regulates blood flow via smooth muscle.", sentence:"Arteriole diameter controls resistance.", cat:"Science" },
  { w:"PLASMA", h:"Liquid blood portion", meaning:"Straw colored fluid carrying cells.", sentence:"Plasma contains clotting factors.", cat:"Science" },
  { w:"SERUM", h:"Plasma without clots", meaning:"Fluid remaining after coagulation.", sentence:"Serum used for antibody tests.", cat:"Science" },
  { w:"ERYTHROCYTE", h:"Red blood cell", meaning:"Carries hemoglobin oxygen.", sentence:"Erythrocyte lacks nucleus in mammals.", cat:"Science" },
  { w:"LEUKOCYTE", h:"White blood cell", meaning:"Immune cell fighting infection.", sentence:"Leukocyte migrates to inflammation.", cat:"Science" },
  { w:"NEUTROPHIL", h:"Most abundant leukocyte", meaning:"Phagocytic granulocyte first responder.", sentence:"Neutrophil kills bacteria with enzymes.", cat:"Science" },
  { w:"EOSINOPHIL", h:"Allergy related leukocyte", meaning:"Granulocyte attacking parasites.", sentence:"Eosinophil stains red with eosin.", cat:"Science" },
  { w:"BASOPHIL", h:"Rare granulocyte", meaning:"Releases histamine in allergic response.", sentence:"Basophil granules contain heparin.", cat:"Science" },
  { w:"LYMPHOCYTE", h:"Adaptive immune cell", meaning:"B cell or T cell producing memory.", sentence:"Lymphocyte recognizes specific antigens.", cat:"Science" },
  { w:"MONOCYTE", h:"Large phagocyte", meaning:"Becomes macrophage in tissues.", sentence:"Monocyte engulfs pathogens.", cat:"Science" },
  { w:"MACROPHAGE", h:"Big eater cell", meaning:"Phagocytic cell cleaning debris.", sentence:"Macrophage presents antigens to T cell.", cat:"Science" },
  { w:"DENDRITIC", h:"Antigen presenter", meaning:"Processes antigens for immune response.", sentence:"Dendritic cell migrates to lymph node.", cat:"Science" },
  { w:"PLATELET", h:"Clotting fragment", meaning:"Cell fragment sealing vessel injury.", sentence:"Platelet aggregation stops bleeding.", cat:"Science" },
  { w:"FIBRIN", h:"Clotting protein", meaning:"Mesh trapping blood cells.", sentence:"Thrombin converts fibrinogen to fibrin.", cat:"Science" },
  { w:"THROMBIN", h:"Clotting enzyme", meaning:"Converts fibrinogen to fibrin.", sentence:"Thrombin is activated by prothrombinase.", cat:"Science" },
  { w:"PLASMIN", h:"Clot dissolver", meaning:"Enzyme breaking down fibrin.", sentence:"Plasmin prevents excessive clotting.", cat:"Science" },
  { w:"CLOT", h:"Hemostatic plug", meaning:"Gel mass of fibrin and platelets.", sentence:"Clot retraction pulls wound edges.", cat:"Science" },
  { w:"SCAB", h:"Dried clot", meaning:"Hard crust protecting healing wound.", sentence:"Scab falls off after reepithelialization.", cat:"Science" },
  { w:"PUS", h:"Infected fluid", meaning:"Dead leukocytes and bacteria.", sentence:"Pus accumulation forms abscess.", cat:"Science" },
  { w:"ABSCESS", h:"Pocket of pus", meaning:"Localized collection requiring drainage.", sentence:"Abscess tooth causes swelling.", cat:"Science" },
  { w:"SEPSIS", h:"Whole body infection", meaning:"Life threatening response to infection.", sentence:"Sepsis causes organ failure.", cat:"Science" },
  { w:"FEVER", h:"Elevated temperature", meaning:"Hypothalamic set point increase.", sentence:"Fever fights infection by heating.", cat:"Science" },
  { w:"RASH", h:"Skin eruption", meaning:"Red raised area from allergy or infection.", sentence:"Rash spreads across trunk.", cat:"Science" },
  { w:"BLISTER", h:"Fluid filled bubble", meaning:"Separation of epidermal layers.", sentence:"Blister forms after friction burn.", cat:"Science" },
  { w:"ULCER", h:"Open sore", meaning:"Loss of epithelial surface.", sentence:"Gastric ulcer erodes stomach lining.", cat:"Science" },
  { w:"LESION", h:"Abnormal tissue", meaning:"Wound or tumor or scar.", sentence:"Skin lesion biopsied for diagnosis.", cat:"Science" },
  { w:"TUMOR", h:"Abnormal mass", meaning:"Neoplasm benign or malignant.", sentence:"Tumor compresses surrounding tissue.", cat:"Science" },
  { w:"CANCER", h:"Malignant neoplasm", meaning:"Uncontrolled cell division invading tissues.", sentence:"Cancer metastasizes via blood.", cat:"Science" },
  { w:"BIOPSY", h:"Tissue sample", meaning:"Removal for pathological examination.", sentence:"Biopsy needle guided by ultrasound.", cat:"Science" },
  { w:"STAIN", h:"Dye for microscopy", meaning:"Colors cellular structures.", sentence:"Toluidine blue stain highlights mast cells.", cat:"Science" },
  { w:"MICROSCOPE", h:"Lens magnifier", meaning:"Instrument viewing small objects.", sentence:"Microscope resolves bacteria.", cat:"Science" },
  { w:"ORGANISM", h:"Living individual", meaning:"Any contiguous living system.", sentence:"The organism adapted to its environment.", cat:"Science" },
  { w:"HABITAT", h:"Natural home", meaning:"Place where species lives.", sentence:"The forest is the bear's habitat.", cat:"Science" },
  { w:"NICHE", h:"Ecological role", meaning:"Function and position in ecosystem.", sentence:"The niche of the bee is pollination.", cat:"Science" },
  { w:"BIOME", h:"Large climatic region", meaning:"Major ecosystem type.", sentence:"The tundra is a cold biome.", cat:"Science" },
  { w:"ECOTONE", h:"Transition zone", meaning:"Boundary between biomes.", sentence:"The wetland is an ecotone between forest and lake.", cat:"Science" },
  { w:"FAUNA", h:"Animal life", meaning:"All animal species in region.", sentence:"The fauna of Australia includes marsupials.", cat:"Science" },
  { w:"FLORA", h:"Plant life", meaning:"All plant species in region.", sentence:"The flora of the desert includes cacti.", cat:"Science" },
  { w:"FUNGI", h:"Mushroom kingdom", meaning:"Eukaryotic decomposers.", sentence:"Fungi include yeasts and molds.", cat:"Science" },
  { w:"LICHEN", h:"Symbiotic fungus alga", meaning:"Mutualistic composite organism.", sentence:"Lichen grows on rocks.", cat:"Science" },
  { w:"MYCELIUM", h:"Fungal network", meaning:"Thread like hyphae mass.", sentence:"The mycelium spreads underground.", cat:"Science" },
  { w:"HYPHA", h:"Fungal filament", meaning:"Threadlike fungal cell.", sentence:"Hyphae grow at the tips.", cat:"Science" },
  { w:"SPORE", h:"Reproductive unit", meaning:"Single cell dispersal agent.", sentence:"Fungal spores float in air.", cat:"Science" },
  { w:"GERMINATE", h:"Begin growth", meaning:"Seed or spore sprouts.", sentence:"The seed will germinate in spring.", cat:"Science" },
  { w:"POLLINATE", h:"Transfer pollen", meaning:"Fertilize flowering plants.", sentence:"Bees pollinate apple trees.", cat:"Science" },
  { w:"POLLEN", h:"Fine yellow powder", meaning:"Male gametophyte of plants.", sentence:"Pollen causes hay fever.", cat:"Science" },
  { w:"OVULE", h:"Plant egg structure", meaning:"Seed precursor in ovary.", sentence:"The ovule develops after fertilization.", cat:"Science" },
  { w:"STAMEN", h:"Male flower part", meaning:"Anther and filament.", sentence:"The stamen produces pollen.", cat:"Science" },
  { w:"PISTIL", h:"Female flower part", meaning:"Stigma style ovary.", sentence:"The pistil receives pollen.", cat:"Science" },
  { w:"ANTHER", h:"Pollen bearing part", meaning:"Tip of stamen.", sentence:"The anther splits to release pollen.", cat:"Science" },
  { w:"STIGMA", h:"Pollen receptor", meaning:"Top of pistil.", sentence:"The stigma is sticky to capture pollen.", cat:"Science" },
  { w:"OVARY", h:"Plant seed compartment", meaning:"Contains ovules.", sentence:"The ovary becomes the fruit.", cat:"Science" },
  { w:"FRUIT", h:"Mature ovary", meaning:"Seed containing structure.", sentence:"The apple is a fruit.", cat:"Science" },
  { w:"BERRY", h:"Small fleshy fruit", meaning:"Multiple seeds inside.", sentence:"Blueberry is a berry.", cat:"Science" },
  { w:"DRUPE", h:"Stone fruit", meaning:"Single hard seed inside.", sentence:"Peach is a drupe.", cat:"Science" },
  { w:"NUT", h:"Hard shelled fruit", meaning:"Single seed hard wall.", sentence:"Acorn is a nut.", cat:"Science" },
  { w:"GRAIN", h:"Cereal seed", meaning:"Grass fruit.", sentence:"Wheat is a grain.", cat:"Science" },
  { w:"LEGUME", h:"Bean pod", meaning:"Fruit of Fabaceae.", sentence:"Peanut is a legume.", cat:"Science" },
  { w:"TUBER", h:"Swollen underground stem", meaning:"Potato is a tuber.", sentence:"Tuber stores starch.", cat:"Science" },
  { w:"BULB", h:"Underground bud", meaning:"Onion garlic.", sentence:"Bulb stores nutrients.", cat:"Science" },
  { w:"RHIZOME", h:"Horizontal stem", meaning:"Ginger iris.", sentence:"Rhizome spreads underground.", cat:"Science" },
  { w:"STOLON", h:"Running stem", meaning:"Above ground runner.", sentence:"Strawberry stolon produces new plants.", cat:"Science" },
  { w:"SUCCULENT", h:"Water storing plant", meaning:"Thick fleshy leaves.", sentence:"Aloe is a succulent.", cat:"Science" },
  { w:"CACTUS", h:"Spiny desert plant", meaning:"Succulent with areoles.", sentence:"Saguaro is a cactus.", cat:"Science" },
  { w:"EPIPHYTE", h:"Plant on plant", meaning:"Air plant not parasitic.", sentence:"Orchid is an epiphyte.", cat:"Science" },
  { w:"PARASITE", h:"Plant feeding on host", meaning:"Mistletoe dodder.", sentence:"Parasite derives nutrients from host.", cat:"Science" },
  { w:"CARNIVORE", h:"Plant eating insects", meaning:"Venus flytrap sundew.", sentence:"Carnivorous plant traps prey.", cat:"Science" },
  { w:"HERBIVORE", h:"Plant eating animal", meaning:"Cow rabbit deer.", sentence:"Herbivore eats only plants.", cat:"Science" },
  { w:"OMNIVORE", h:"Eats both plants animals", meaning:"Bear pig human.", sentence:"Omnivore has varied diet.", cat:"Science" },
  { w:"DETRITIVORE", h:"Eats dead matter", meaning:"Earthworm millipede.", sentence:"Detritivore recycles nutrients.", cat:"Science" },
  { w:"SCAVENGER", h:"Eats carcasses", meaning:"Vulture hyena.", sentence:"Scavenger cleans up dead animals.", cat:"Science" },
  { w:"APE", h:"Tailless primate", meaning:"Chimpanzee gorilla orangutan.", sentence:"Ape has large brain.", cat:"Science" },
  { w:"MONKEY", h:"Tailed primate", meaning:"Macaque howler spider.", sentence:"Monkey swings in trees.", cat:"Science" },
  { w:"LEMUR", h:"Strepsirrhine primate", meaning:"Ring tailed lemur.", sentence:"Lemur lives in Madagascar.", cat:"Science" },
  { w:"LORIS", h:"Slow moving primate", meaning:"Slender loris slow loris.", sentence:"Loris has large eyes.", cat:"Science" },
  { w:"TARSIER", h:"Nocturnal primate", meaning:"Bornean tarsier.", sentence:"Tarsier leaps between trees.", cat:"Science" },
  { w:"GIBBON", h:"Lesser ape", meaning:"Siamang lar gibbon.", sentence:"Gibbon sings to defend territory.", cat:"Science" },
  { w:"ORANGUTAN", h:"Great ape of Borneo", meaning:"Pongo pygmaeus.", sentence:"Orangutan is arboreal.", cat:"Science" },
  { w:"GORILLA", h:"Largest primate", meaning:"Mountain gorilla.", sentence:"Gorilla lives in troops.", cat:"Science" },
  { w:"CHIMPANZEE", h:"Closest human relative", meaning:"Pan troglodytes.", sentence:"Chimpanzee uses tools.", cat:"Science" },
  { w:"BONOBO", h:"Pygmy chimpanzee", meaning:"Pan paniscus.", sentence:"Bonobo resolves conflict with sex.", cat:"Science" },
  { w:"HUMAN", h:"Homo sapiens", meaning:"Bipedal primate.", sentence:"Human has complex language.", cat:"Science" },
  { w:"HOMINID", h:"Great ape family", meaning:"Hominidae includes humans.", sentence:"Hominid fossil record.", cat:"Science" },
  { w:"HOMININ", h:"Tribe containing humans", meaning:"Homo Australopithecus.", sentence:"Hominin bipedal adaptation.", cat:"Science" },
  { w:"NEANDERTHAL", h:"Extinct human relative", meaning:"Homo neanderthalensis.", sentence:"Neanderthal had large brain.", cat:"Science" },
  { w:"DENISOVAN", h:"Archaic human", meaning:"From Denisova cave.", sentence:"Denisovan interbred with modern humans.", cat:"Science" },
  { w:"FLORESIENSIS", h:"Hobbit human", meaning:"Homo floresiensis tiny.", sentence:"Floresiensis lived on Flores island.", cat:"Science" },
  { w:"ERECTUS", h:"Early human", meaning:"Homo erectus fire user.", sentence:"Erectus migrated from Africa.", cat:"Science" },
  { w:"HABILIS", h:"Handy man", meaning:"Homo habilis tool maker.", sentence:"Habilis used stone tools.", cat:"Science" },
  { w:"RUDOLFENSIS", h:"East african hominin", meaning:"Homo rudolfensis large brain.", sentence:"Rudolfensis controversial species.", cat:"Science" },
  { w:"SAPIENS", h:"Modern human", meaning:"Homo sapiens sapiens.", sentence:"Sapiens replaced Neanderthals.", cat:"Science" },
  { w:"MIGRATION", h:"Population movement", meaning:"Human dispersal across globe.", sentence:"Migration out of Africa occurred 60kya.", cat:"Science" },
  { w:"AGRICULTURE", h:"Farming domestication", meaning:"Plant cultivation animal herding.", sentence:"Agriculture began 12kya.", cat:"Science" },
  { w:"DOMESTICATION", h:"Taming wild species", meaning:"Dog wheat cow.", sentence:"Domestication changed human society.", cat:"Science" },
  { w:"REVOLUTION", h:"Sudden change", meaning:"Neolithic Agricultural Industrial.", sentence:"Revolution transformed culture.", cat:"Science" },
  { w:"CIVILIZATION", h:"Complex society", meaning:"Cities writing government.", sentence:"Civilization arose in river valleys.", cat:"Science" },
  { w:"MESOPOTAMIA", h:"Between rivers", meaning:"First civilization.", sentence:"Mesopotamia had cuneiform.", cat:"Science" },
  { w:"EGYPT", h:"Nile civilization", meaning:"Pharaohs pyramids.", sentence:"Egypt lasted 3000 years.", cat:"Science" },
  { w:"INDUS", h:"Hindu valley civilization", meaning:"Harappa Mohenjo Daro.", sentence:"Indus script undeciphered.", cat:"Science" },
  { w:"CHINA", h:"Yellow river civilization", meaning:"Shang dynasty.", sentence:"China has continuous civilization.", cat:"Science" },
  { w:"MESOAMERICA", h:"Olmec maya aztec", meaning:"Central American civilizations.", sentence:"Mesoamerica invented zero.", cat:"Science" },
  { w:"ANDEAN", h:"Inca civilization", meaning:"South American mountains.", sentence:"Andean used quipu.", cat:"Science" },
  { w:"GREEK", h:"Classical civilization", meaning:"Athens sparta.", sentence:"Greek invented democracy.", cat:"Science" },
  { w:"ROMAN", h:"Italian empire", meaning:"Senate legion.", sentence:"Roman built roads and law.", cat:"Science" },
  { w:"EMPIRE", h:"Large multiethnic state", meaning:"Roman British Mongol.", sentence:"Empire conquers many peoples.", cat:"Science" },
  { w:"COLONY", h:"Settlement of empire", meaning:"American colonies.", sentence:"Colony extracts resources.", cat:"Science" },
  { w:"DISEASE", h:"Illness epidemic", meaning:"Smallpox measles flu.", sentence:"Disease killed millions.", cat:"Science" },
  { w:"PANDEMIC", h:"Global disease spread", meaning:"COVID 1918 flu.", sentence:"Pandemic disrupted society.", cat:"Science" },
  { w:"EPIDEMIC", h:"Local disease outbreak", meaning:"Ebola in West Africa.", sentence:"Epidemic requires containment.", cat:"Science" },
  { w:"ENDEMIC", h:"Constant disease presence", meaning:"Malaria in Africa.", sentence:"Endemic stable at low level.", cat:"Science" },
  { w:"VECTOR", h:"Disease carrier", meaning:"Mosquito tick rat.", sentence:"Vector transmits pathogen.", cat:"Science" },
  { w:"ZOONOSIS", h:"Animal to human disease", meaning:"Rabies Ebola.", sentence:"Zoonosis jumps species.", cat:"Science" },
  { w:"RESERVOIR", h:"Pathogen host", meaning:"Bats pigs birds.", sentence:"Reservoir maintains pathogen.", cat:"Science" },
  { w:"INCUBATION", h:"Period to symptoms", meaning:"Days to weeks.", sentence:"Incubation varies by disease.", cat:"Science" },
  { w:"SYMPTOM", h:"Bodily sign of illness", meaning:"Fever cough ache.", sentence:"Symptom prompts diagnosis.", cat:"Science" },
  { w:"DIAGNOSIS", h:"Identification of illness", meaning:"Based on symptoms tests.", sentence:"Diagnosis leads to treatment.", cat:"Science" },
  { w:"PROGNOSIS", h:"Predicted outcome", meaning:"Likely course of disease.", sentence:"Prognosis depends on stage.", cat:"Science" },
  { w:"ACUTE", h:"Rapid onset short", meaning:"Acute infection lasts days.", sentence:"Acute appendicitis requires surgery.", cat:"Science" },
  { w:"CHRONIC", h:"Long lasting", meaning:"Chronic arthritis diabetes.", sentence:"Chronic condition managed not cured.", cat:"Science" },
  { w:"REMISSION", h:"Symptom disappearance", meaning:"Cancer remission.", sentence:"Remission may be temporary.", cat:"Science" },
  { w:"RELAPSE", h:"Return of disease", meaning:"Symptoms reappear.", sentence:"Relapse after treatment ends.", cat:"Science" },
  { w:"ANTIBIOTIC", h:"Kills bacteria", meaning:"Penicillin tetracycline.", sentence:"Antibiotic resistance a problem.", cat:"Science" },
  { w:"ANTIVIRAL", h:"Inhibits virus", meaning:"Acyclovir Tamiflu.", sentence:"Antiviral reduces viral load.", cat:"Science" },
  { w:"ANTIFUNGAL", h:"Kills fungus", meaning:"Clotrimazole fluconazole.", sentence:"Antifungal treats ringworm.", cat:"Science" },
  { w:"ANTIPARASITIC", h:"Kills parasites", meaning:"Ivermectin chloroquine.", sentence:"Antiparasitic for malaria.", cat:"Science" },
  { w:"IMMUNITY", h:"Body defense", meaning:"Innate adaptive.", sentence:"Immunity from infection or vaccine.", cat:"Science" },
  { w:"B CELL", h:"Makes antibodies", meaning:"Lymphocyte.", sentence:"B cell produces plasma cells.", cat:"Science" },
  { w:"T CELL", h:"Killer helper cells", meaning:"Lymphocyte.", sentence:"T cell kills infected cells.", cat:"Science" },
  { w:"MEMORY", h:"Cell long term immunity", meaning:"Remembers previous infection.", sentence:"Memory cell responds faster second time.", cat:"Science" },
  { w:"AUTOIMMUNE", h:"Self attacking immunity", meaning:"RA lupus type 1 diabetes.", sentence:"Autoimmune disease treated with immunosuppressants.", cat:"Science" },
  { w:"ALLERGY", h:"Hypersensitivity response", meaning:"Pollen peanuts latex.", sentence:"Allergy releases histamine.", cat:"Science" },
  { w:"HISTAMINE", h:"Allergy chemical mediator", meaning:"Causes itching swelling.", sentence:"Antihistamine blocks histamine.", cat:"Science" },
  { w:"ANAPHYLAXIS", h:"Severe allergy", meaning:"Life threatening reaction.", sentence:"Anaphylaxis requires epinephrine.", cat:"Science" },
  { w:"STEROID", h:"Anti inflammatory hormone", meaning:"Cortisol prednisone.", sentence:"Steroid reduces swelling.", cat:"Science" },
  { w:"OPIOID", h:"Pain reliever", meaning:"Morphine fentanyl.", sentence:"Opioid risk of addiction.", cat:"Science" },
  { w:"ANALGESIC", h:"Pain killer", meaning:"Acetaminophen ibuprofen.", sentence:"Analgesic reduces pain.", cat:"Science" },
  { w:"ANESTHETIC", h:"Numbs pain", meaning:"Lidocaine novocaine.", sentence:"Anesthetic for surgery.", cat:"Science" },
  { w:"SEDATIVE", h:"Calming drug", meaning:"Benzodiazepine barbiturate.", sentence:"Sedative induces sleep.", cat:"Science" },
  { w:"STIMULANT", h:"Excitatory drug", meaning:"Caffeine amphetamine.", sentence:"Stimulant increases alertness.", cat:"Science" },
  { w:"PSYCHEDELIC", h:"Hallucinogen", meaning:"LSD psilocybin.", sentence:"Psychedelic alters perception.", cat:"Science" },
  { w:"PLACEBO", h:"Inert treatment", meaning:"Sugar pill.", sentence:"Placebo effect real.", cat:"Science" },
  { w:"CLINICAL", h:"Trial human test", meaning:"Phase I II III.", sentence:"Clinical trial evaluates safety efficacy.", cat:"Science" },
  { w:"RANDOMIZED", h:"Random assignment", meaning:"Eliminates bias.", sentence:"Randomized trial gold standard.", cat:"Science" },
  { w:"BLINDING", h:"Concealing treatment", meaning:"Single double triple blind.", sentence:"Blinding prevents bias.", cat:"Science" },
  { w:"EFFICACY", h:"Performance in trial", meaning:"Does it work.", sentence:"Efficacy vs effectiveness.", cat:"Science" },
  { w:"SAFETY", h:"Side effects profile", meaning:"Adverse events.", sentence:"Safety monitored continuously.", cat:"Science" },
  { w:"SIDE", h:"Effect unintended consequence", meaning:"Nausea rash headache.", sentence:"Side effect may be tolerable.", cat:"Science" },
  { w:"ADVERSE", h:"Serious side effect", meaning:"Hospitalization death.", sentence:"Adverse event reported to FDA.", cat:"Science" },
  { w:"DOSE", h:"Amount of drug", meaning:"Milligrams per kilogram.", sentence:"Dose depends on age weight.", cat:"Science" },
  { w:"ROUTE", h:"Method of administration", meaning:"Oral IV topical.", sentence:"Route affects absorption.", cat:"Science" },
  { w:"ABSORPTION", h:"Drug entering blood", meaning:"From gut muscle skin.", sentence:"Absorption rate varies.", cat:"Science" },
  { w:"DISTRIBUTION", h:"Drug to tissues", meaning:"Protein binding.", sentence:"Distribution determines site of action.", cat:"Science" },
  { w:"METABOLISM", h:"Liver breakdown", meaning:"Cytochrome P450.", sentence:"Metabolism activates or deactivates drug.", cat:"Science" },
  { w:"EXCRETION", h:"Elimination from body", meaning:"Kidney bile.", sentence:"Excretion half life.", cat:"Science" },
  { w:"HALF", h:"Life time to halve concentration", meaning:"Short half life requires frequent dosing.", sentence:"Half life determines dosing interval.", cat:"Science" },
  { w:"BIOAVAILABILITY", h:"Fraction reaching blood", meaning:"Oral vs IV.", sentence:"Bioavailability less than 100 percent.", cat:"Science" },
  { w:"THERAPEUTIC", h:"Window safe range", meaning:"Below toxic above effective.", sentence:"Therapeutic window narrow for some drugs.", cat:"Science" },
  { w:"TOXIC", h:"Poisonous level", meaning:"Overdose.", sentence:"Toxic effect organ damage.", cat:"Science" },
  { w:"ANTIDOTE", h:"Reverses poisoning", meaning:"Naloxone for opioid.", sentence:"Antidote saves life.", cat:"Science" },
  { w:"ALLELE", h:"Variant of gene", meaning:"Blue vs brown eye.", sentence:"Allele dominant or recessive.", cat:"Science" },
  { w:"DOMINANT", h:"Trait expressed if present", meaning:"One copy enough.", sentence:"Dominant allele masks recessive.", cat:"Science" },
  { w:"RECESSIVE", h:"Trait hidden by dominant", meaning:"Two copies needed.", sentence:"Recessive disorder skips generations.", cat:"Science" },
  { w:"CARRIER", h:"Has recessive allele", meaning:"Asymptomatic.", sentence:"Carrier can pass to offspring.", cat:"Science" },
  { w:"HOMOZYGOUS", h:"Two same alleles", meaning:"AA or aa.", sentence:"Homozygous dominant or recessive.", cat:"Science" },
  { w:"PHENOTYPE", h:"Physical trait", meaning:"Eye color height.", sentence:"Phenotype from genes plus environment.", cat:"Science" },
  { w:"GENOTYPE", h:"Genetic makeup", meaning:"DNA sequence.", sentence:"Genotype determines potential.", cat:"Science" },
  { w:"MUTATION", h:"DNA change", meaning:"Point deletion insertion.", sentence:"Mutation can be harmful neutral beneficial.", cat:"Science" },
  { w:"POINT", h:"Single base change", meaning:"Substitution.", sentence:"Point mutation may change amino acid.", cat:"Science" },
  { w:"SILENT", h:"Mutation no amino acid change", meaning:"Redundant codon.", sentence:"Silent mutation neutral.", cat:"Science" },
  { w:"MISSENSE", h:"Changes amino acid", meaning:"Sickle cell.", sentence:"Missense alters protein function.", cat:"Science" },
  { w:"NONSENSE", h:"Creates stop codon", meaning:"Truncated protein.", sentence:"Nonsense usually harmful.", cat:"Science" },
  { w:"FRAMESHIFT", h:"Insertion deletion shifts reading", meaning:"Nonfunctional protein.", sentence:"Frameshift severe effect.", cat:"Science" },
  { w:"COPY", h:"Number variation duplication deletion", meaning:"CNV associated with disease.", sentence:"Copy number variation common in genome.", cat:"Science" },
  { w:"CHROMOSOME", h:"DNA package", meaning:"Human 46.", sentence:"Chromosome has centromere telomeres.", cat:"Science" },
  { w:"AUTOSOME", h:"Non sex chromosome", meaning:"22 pairs.", sentence:"Autosome same in both sexes.", cat:"Science" },
  { w:"SEX", h:"X and y", meaning:"Female xx male xy.", sentence:"Sex chromosome determines sex.", cat:"Science" },
  { w:"LINKED", h:"Gene on sex chromosome", meaning:"Color blindness hemophilia.", sentence:"Linked trait more common in males.", cat:"Science" },
  { w:"KARYOTYPE", h:"Chromosome picture", meaning:"Arranged by size.", sentence:"Karyotype detects aneuploidy.", cat:"Science" },
  { w:"ANEUPLOIDY", h:"Wrong chromosome number", meaning:"Trisomy 21.", sentence:"Aneuploidy causes Down syndrome.", cat:"Science" },
  { w:"TRISOMY", h:"Three copies", meaning:"Chromosome 21 13 18.", sentence:"Trisomy usually lethal except 21.", cat:"Science" },
  { w:"MONOSOMY", h:"One copy", meaning:"Turner syndrome XO.", sentence:"Monosomy often miscarried.", cat:"Science" },
  { w:"TRANSLOCATION", h:"Chromosome segment moves", meaning:"Balanced unbalanced.", sentence:"Translocation can cause cancer.", cat:"Science" },
  { w:"DELETION", h:"Missing segment", meaning:"Cri du chat.", sentence:"Deletion causes haploinsufficiency.", cat:"Science" },
  { w:"DUPLICATION", h:"Extra segment", meaning:"Charcot Marie Tooth.", sentence:"Duplication leads to overexpression.", cat:"Science" },
  { w:"INVERSION", h:"Segment reversed", meaning:"Pericentric paracentric.", sentence:"Inversion may disrupt gene.", cat:"Science" },
  { w:"INSERTION", h:"Extra DNA added", meaning:"Insertion can disrupt gene.", sentence:"Insertion from transposon.", cat:"Science" },
  { w:"EPIGENETICS", h:"Heritable expression change", meaning:"DNA methylation histone modification.", sentence:"Epigenetics without sequence change.", cat:"Science" },
  { w:"METHYLATION", h:"Adds methyl group", meaning:"Silences gene.", sentence:"Methylation represses transcription.", cat:"Science" },
  { w:"ACETYLASE", h:"Adds acetyl", meaning:"Opens chromatin.", sentence:"Acetylase activates gene.", cat:"Science" },
  { w:"HISTONE", h:"Protein packaging DNA", meaning:"H2A H2B H3 H4.", sentence:"Histone modification regulates access.", cat:"Science" },
  { w:"CHROMATIN", h:"DNA protein complex", meaning:"Euchromatin heterochromatin.", sentence:"Chromatin structure controls expression.", cat:"Science" },
  { w:"PROMOTER", h:"Transcription start site", meaning:"RNA polymerase binds.", sentence:"Promoter mutation reduces expression.", cat:"Science" },
  { w:"ENHANCER", h:"Boosts transcription", meaning:"Remote binding site.", sentence:"Enhancer loops to promoter.", cat:"Science" },
  { w:"SILENCER", h:"Represses transcription", meaning:"Binds repressor protein.", sentence:"Silencer turns off gene.", cat:"Science" },
  { w:"FACTOR", h:"Protein controlling transcription", meaning:"TFIIH SP1.", sentence:"Factor binds promoter or enhancer.", cat:"Science" },
  { w:"INTRON", h:"Noncoding spacer", meaning:"Removed by splicing.", sentence:"Intron interrupts gene.", cat:"Science" },
  { w:"EXON", h:"Coding segment", meaning:"Joined after splicing.", sentence:"Exons encode protein.", cat:"Science" },
  { w:"SPLICING", h:"Removes introns", meaning:"Spliceosome cuts and joins.", sentence:"Alternative splicing produces variants.", cat:"Science" },
  { w:"ALTERNATIVE", h:"Splicing variant", meaning:"One gene many mRNAs.", sentence:"Alternative splicing common in humans.", cat:"Science" },
  { w:"RIBOSOME", h:"Protein factory", meaning:"RRNA protein complex.", sentence:"Ribosome translates mRNA.", cat:"Science" },
  { w:"TRNA", h:"Transfer amino acid", meaning:"Anticodon matches codon.", sentence:"TRNA carries specific amino acid.", cat:"Science" },
  { w:"CODON", h:"Three bases one amino acid", meaning:"ATG start.", sentence:"Genetic code redundant.", cat:"Science" },
  { w:"ANTICODON", h:"TRNA triplet", meaning:"Binds codon.", sentence:"Anticodon pairs with codon.", cat:"Science" },
  { w:"READING", h:"Frame groupings of three", meaning:"Shift causes nonsense.", sentence:"Reading frame maintained from start codon.", cat:"Science" },
  { w:"START", h:"Aug methionine", meaning:"Initiates translation.", sentence:"Start codon first AUG.", cat:"Science" },
  { w:"STOP", h:"Uaa uag uga", meaning:"Terminates translation.", sentence:"Stop codon no corresponding tRNA.", cat:"Science" },
  { w:"EXPRESSION", h:"Gene to protein", meaning:"Transcription translation.", sentence:"Expression regulated at multiple steps.", cat:"Science" },
  { w:"REGULATION", h:"Control of expression", meaning:"Inducible repressible.", sentence:"Regulation responses to environment.", cat:"Science" },
  { w:"OPERON", h:"Bacterial gene cluster", meaning:"Lac operon.", sentence:"Operon polycistronic mRNA.", cat:"Science" },
  { w:"REPRESSOR", h:"Binds operator", meaning:"Blocks transcription.", sentence:"Repressor turned off by inducer.", cat:"Science" },
  { w:"INDUCER", h:"Activates transcription", meaning:"Allolactose TCP.", sentence:"Inducer binds repressor.", cat:"Science" },
  { w:"ACTIVATOR", h:"Boosts transcription", meaning:"CAP protein.", sentence:"Activator binds promoter.", cat:"Science" },
  { w:"FEEDBACK", h:"End product inhibition", meaning:"Tryptophan represses trp operon.", sentence:"Feedback regulates biosynthesis.", cat:"Science" },
  { w:"SIGNAL", h:"Transduction pathway", meaning:"Receptor to response.", sentence:"Signal triggers gene expression.", cat:"Science" },
  { w:"RECEPTOR", h:"Binds signal molecule", meaning:"Cell surface or nuclear.", sentence:"Receptor changes conformation.", cat:"Science" },
  { w:"KINASE", h:"Adds phosphate group", meaning:"Activates protein.", sentence:"Kinase signaling cascade.", cat:"Science" },
  { w:"PHOSPHORYLATE", h:"Add phosphate", meaning:"Switch activity.", sentence:"Phosphorylation reversible.", cat:"Science" },
  { w:"CASCADE", h:"Sequential activation", meaning:"MAP kinase pathway.", sentence:"Cascade amplifies signal.", cat:"Science" },
  { w:"SECOND", h:"Messenger small molecule", meaning:"CAMP calcium IP3.", sentence:"Second messenger relays signal.", cat:"Science" },
  { w:"CAMP", h:"Cyclic amp", meaning:"Activates PKA.", sentence:"CAMP from ATP by adenylyl cyclase.", cat:"Science" },
  { w:"CALCIUM", h:"Intracellular signal", meaning:"Binds calmodulin.", sentence:"Calcium triggers muscle contraction.", cat:"Science" },
  { w:"DAG", h:"Diacylglycerol", meaning:"Activates PKC.", sentence:"DAG membrane bound.", cat:"Science" },
  { w:"RAS", h:"Gtpase signaling", meaning:"Oncogene.", sentence:"Ras mutation common in cancer.", cat:"Science" },
  { w:"ONCOGENE", h:"Driver mutation", meaning:"Ras Myc Src.", sentence:"Oncogene dominant.", cat:"Science" },
  { w:"APOPTOSIS", h:"Programmed cell death", meaning:"Caspase cascade.", sentence:"Apoptosis eliminates damaged cells.", cat:"Science" },
  { w:"ANGIOGENESIS", h:"New blood vessel growth", meaning:"Feeds tumor.", sentence:"Angiogenesis inhibitor drug.", cat:"Science" },
  { w:"METASTASIS", h:"Spread to distant site", meaning:"Lung liver bone.", sentence:"Metastasis difficult to treat.", cat:"Science" },
  { w:"CHEMOTHERAPY", h:"Drug cancer treatment", meaning:"Alkylating agents antimetabolites.", sentence:"Chemotherapy kills dividing cells.", cat:"Science" },
  { w:"RADIATION", h:"Therapy ionizing beam", meaning:"Kills DNA.", sentence:"Radiation targeted to tumor.", cat:"Science" },
  { w:"IMMUNOTHERAPY", h:"Activate immune system", meaning:"Checkpoint inhibitors CAR T.", sentence:"Immunotherapy durable responses.", cat:"Science" },
  { w:"CHECKPOINT", h:"Inhibitor blocks PD1 PD L1", meaning:"Release T cell attack.", sentence:"Checkpoint inhibitor for melanoma.", cat:"Science" },
  { w:"CAR", h:"T cell engineered", meaning:"Chimeric antigen receptor.", sentence:"CAR T for leukemia.", cat:"Science" },
  { w:"CLONING", h:"Identical copy", meaning:"Dolly sheep.", sentence:"Cloning somatic cell nuclear transfer.", cat:"Science" },
  { w:"STEM", h:"Cell undifferentiated", meaning:"Self renewing pluripotent.", sentence:"Stem cell differentiates into lineages.", cat:"Science" },
  { w:"EMBRYONIC", h:"Stem from blastocyst", meaning:"Pluripotent.", sentence:"Embryonic stem cell controversial.", cat:"Science" },
  { w:"ADULT", h:"Stem limited potency", meaning:"Bone marrow neural.", sentence:"Adult stem cell multipotent.", cat:"Science" },
  { w:"IPS", h:"Induced pluripotent", meaning:"Reprogrammed adult cell.", sentence:"IPS cell avoids embryo.", cat:"Science" },
  { w:"CRISPR", h:"Gene editing tool", meaning:"Cas9 guide RNA.", sentence:"CRISPR cuts DNA precisely.", cat:"Science" },
  { w:"GUIDE", h:"Rna targets Cas9", meaning:"Complementary to DNA.", sentence:"Guide RNA designed for sequence.", cat:"Science" },
  { w:"KNOCKOUT", h:"Disrupt gene", meaning:"Insert deletion.", sentence:"Knockout reveals function.", cat:"Science" },
  { w:"KNOCKIN", h:"Insert gene", meaning:"Add reporter.", sentence:"Knockin tags protein.", cat:"Science" },
  { w:"REPAIR", h:"Double strand break", meaning:"NHEJ homology directed.", sentence:"Repair enables edits.", cat:"Science" },
  { w:"GENOME", h:"Engineering deliberate change", meaning:"Modify DNA.", sentence:"GMO genome engineered.", cat:"Science" },
  { w:"GMO", h:"Genetically modified", meaning:"Altered DNA.", sentence:"GMO crop pest resistant.", cat:"Science" },
  { w:"ORPHAN", h:"Disease rare", meaning:"Few patients.", sentence:"Orphan drug incentives.", cat:"Science" },
  { w:"PRECISION", h:"Medicine tailored genotype", meaning:"Pharmacogenomics.", sentence:"Precision medicine matches treatment.", cat:"Science" },
  { w:"BIOMARKER", h:"Indicator of disease", meaning:"Protein DNA metabolite.", sentence:"Biomarker guides therapy.", cat:"Science" },
  { w:"DIAGNOSTIC", h:"Test detects condition", meaning:"PCR ELISA imaging.", sentence:"Diagnostic confirms disease.", cat:"Science" },
  { w:"PROGNOSTIC", h:"Forecasts outcome", meaning:"Gene expression signature.", sentence:"Prognostic informs survival.", cat:"Science" },
  { w:"PREDICTIVE", h:"Response to therapy", meaning:"HER2 for Herceptin.", sentence:"Predictive biomarker selects patients.", cat:"Science" },
  { w:"COMPANION", h:"Diagnostic pairs with drug", meaning:"Test required.", sentence:"Companion diagnostic guides prescription.", cat:"Science" },
  { w:"BIOSIMILAR", h:"Copy of biologic", meaning:"Similar not identical.", sentence:"Biosimilar cheaper than original.", cat:"Science" },
  { w:"SMALL", h:"Molecule drug", meaning:"Chemical synthesis.", sentence:"Small molecule oral usually.", cat:"Science" },
  { w:"BIOLOGIC", h:"Protein based drug", meaning:"Monoclonal antibody.", sentence:"Biologic injected.", cat:"Science" },
  { w:"MAB", h:"Monoclonal antibody", meaning:"Single specificity.", sentence:"Mab treats cancer autoimmune.", cat:"Science" },
  { w:"FUSION", h:"Protein combines domains", meaning:"Fc fusion.", sentence:"Fusion protein longer half life.", cat:"Science" },
  { w:"PEPTIDE", h:"Short protein chain", meaning:"Synthetic hormone.", sentence:"Peptide drug insulin.", cat:"Science" },
  { w:"MRNA", h:"Vaccine genetic code", meaning:"Lipid nanoparticle.", sentence:"MRNA vaccine rapid development.", cat:"Science" },
  { w:"VIRAL", h:"Vector delivers gene", meaning:"Adenovirus lpv.", sentence:"Viral vector vaccine.", cat:"Science" },
  { w:"SUBUNIT", h:"Vaccine purified protein", meaning:"Hepatitis B.", sentence:"Subunit vaccine safe.", cat:"Science" },
  { w:"INACTIVATED", h:"Killed pathogen", meaning:"Polio flu.", sentence:"Inactivated vaccine requires booster.", cat:"Science" },
  { w:"LIVE", h:"Attenuated weakened", meaning:"MMR yellow fever.", sentence:"Live vaccine strong immunity.", cat:"Science" },
  { w:"HERD", h:"Immunity community protection", meaning:"Threshold for spread.", sentence:"Herd protects vulnerable.", cat:"Science" },
  { w:"BOOSTER", h:"Additional dose", meaning:"Extends immunity.", sentence:"Booster needed after waning.", cat:"Science" },
  { w:"SCHEMA", h:"Immunization schedule", meaning:"Childhood vaccines.", sentence:"Schema recommended by CDC.", cat:"Science" },
  { w:"BREAKTHROUGH", h:"Infection after vaccine", meaning:"Vaccine not 100%.", sentence:"Breakthrough usually mild.", cat:"Science" },
  { w:"VARIANT", h:"Mutant strain", meaning:"Alpha delta omicron.", sentence:"Variant may escape immunity.", cat:"Science" },
  { w:"SPIKE", h:"Protein on coronavirus", meaning:"Binds ACE2.", sentence:"Spike target of vaccines.", cat:"Science" },
  { w:"NEUTRALIZING", h:"Antibody blocks infection", meaning:"Binds spike.", sentence:"Neutralizing antibody prevents entry.", cat:"Science" },
  { w:"TITER", h:"Antibody concentration", meaning:"Measured by dilution.", sentence:"High titer indicates protection.", cat:"Science" },
  { w:"SEROLOGY", h:"Antibody test", meaning:"Past infection vaccination.", sentence:"Serology detects immune response.", cat:"Science" },
  { w:"PCR", h:"Molecular amplification", meaning:"Detects viral RNA.", sentence:"PCR gold standard.", cat:"Science" },
  { w:"QUARANTINE", h:"Isolate exposed", meaning:"Prevent spread.", sentence:"Quarantine lasts incubation period.", cat:"Science" },
  { w:"ISOLATION", h:"Separate infected", meaning:"Contain virus.", sentence:"Isolation until recovery.", cat:"Science" },
  { w:"ZOONOTIC", h:"Animal origin", meaning:"Spillover event.", sentence:"Zoonotic virus jumps species.", cat:"Science" },
  { w:"SPILLOVER", h:"Cross species transmission", meaning:"Wet market contact.", sentence:"Spillover triggers outbreak.", cat:"Science" },
  { w:"INDEX", h:"First patient case", meaning:"Patient zero.", sentence:"Index case identified by tracing.", cat:"Science" },
  { w:"CONTACT", h:"Tracing find exposures", meaning:"Notify test quarantine.", sentence:"Contact tracing breaks chains.", cat:"Science" },
  { w:"SUPERSPREADER", h:"Infects many outliers", meaning:"One infects dozens.", sentence:"Superspreader event amplifies outbreak.", cat:"Science" },
  { w:"MASK", h:"Face covering reduces droplets", meaning:"N95 surgical cloth.", sentence:"Mask lowers transmission risk.", cat:"Science" },
  { w:"DISTANCING", h:"Six feet separation", meaning:"Reduces aerosol spread.", sentence:"Distancing effective with masks.", cat:"Science" },
  { w:"VENTILATION", h:"Airflow dilutes virus", meaning:"Open windows HEPA.", sentence:"Ventilation reduces indoor risk.", cat:"Science" },
  { w:"AEROSOL", h:"Small airborne particle", meaning:"Lingers in air.", sentence:"Aerosol transmits distantly.", cat:"Science" },
  { w:"DROPLET", h:"Larger respiratory particle", meaning:"Falls quickly.", sentence:"Droplet close range transmission.", cat:"Science" },
  { w:"FOMITE", h:"Contaminated surface", meaning:"Counter handle.", sentence:"Fomite risk lower than airborne.", cat:"Science" },
  { w:"SCIENCE", h:"Final category word", meaning:"End of science vocabulary.", sentence:"Science completes 1000 words.", cat:"Science" },
  ],
  english: [
  { w:"NOUN", h:"Person place thing", meaning:"Word naming entity.", sentence:"The dog ran quickly.", cat:"English" },
  { w:"VERB", h:"Action or state", meaning:"Word describing occurrence.", sentence:"She runs every morning.", cat:"English" },
  { w:"ADJECTIVE", h:"Describes noun", meaning:"Word modifying noun attribute.", sentence:"The red car is fast.", cat:"English" },
  { w:"ADVERB", h:"Modifies verb", meaning:"Word indicating manner time place.", sentence:"He spoke softly.", cat:"English" },
  { w:"PRONOUN", h:"Replaces noun", meaning:"He she it they we.", sentence:"They went to the store.", cat:"English" },
  { w:"PREPOSITION", h:"Shows relationship", meaning:"Word linking noun to other words.", sentence:"The book is on the table.", cat:"English" },
  { w:"CONJUNCTION", h:"Joins clauses", meaning:"And but or nor so yet.", sentence:"I like apples and oranges.", cat:"English" },
  { w:"INTERJECTION", h:"Exclamation", meaning:"Word expressing emotion.", sentence:"Wow, that is amazing!.", cat:"English" },
  { w:"SUBJECT", h:"Does the action", meaning:"Noun phrase performing verb.", sentence:"The cat chased the mouse.", cat:"English" },
  { w:"PREDICATE", h:"Says about subject", meaning:"Verb phrase describing action.", sentence:"The cat chased the mouse.", cat:"English" },
  { w:"CLAUSE", h:"Subject predicate group", meaning:"Grammatical unit longer than phrase.", sentence:"When it rains, I stay inside.", cat:"English" },
  { w:"PHRASE", h:"No predicate group", meaning:"Two or more words functioning together.", sentence:"In the morning, we left.", cat:"English" },
  { w:"SENTENCE", h:"Complete thought", meaning:"Grammatically independent unit.", sentence:"Birds fly.", cat:"English" },
  { w:"PARAGRAPH", h:"Related sentences", meaning:"Group developing single idea.", sentence:"The first paragraph introduces the topic.", cat:"English" },
  { w:"ESSAY", h:"Short composition", meaning:"Analytical or argumentative writing.", sentence:"She wrote an essay on climate change.", cat:"English" },
  { w:"THESIS", h:"Central argument", meaning:"Main claim of an essay.", sentence:"The thesis stated that recycling is essential.", cat:"English" },
  { w:"TOPIC", h:"Subject matter", meaning:"What the text is about.", sentence:"The topic of chapter three is photosynthesis.", cat:"English" },
  { w:"THEME", h:"Underlying message", meaning:"Recurring idea in literature.", sentence:"The theme of the novel is forgiveness.", cat:"English" },
  { w:"MOTIVE", h:"Recurring element", meaning:"Repeated image or symbol.", sentence:"The green light is a motive in Gatsby.", cat:"English" },
  { w:"PLOT", h:"Story sequence", meaning:"Series of events in narrative.", sentence:"The plot twists at the end.", cat:"English" },
  { w:"CHARACTER", h:"Person in story", meaning:"Entity with traits and actions.", sentence:"The main character faced a moral dilemma.", cat:"English" },
  { w:"SETTING", h:"Time and place", meaning:"Where and when story occurs.", sentence:"The setting was Victorian London.", cat:"English" },
  { w:"CONFLICT", h:"Central struggle", meaning:"Opposition driving plot.", sentence:"Man versus nature was the conflict.", cat:"English" },
  { w:"CLIMAX", h:"Peak tension", meaning:"Turning point of narrative.", sentence:"The climax came during the storm.", cat:"English" },
  { w:"RESOLUTION", h:"Problem solved", meaning:"Ending after climax.", sentence:"The resolution brought closure.", cat:"English" },
  { w:"DIALOGUE", h:"Character conversation", meaning:"Spoken exchange between characters.", sentence:"Dialogue revealed their relationship.", cat:"English" },
  { w:"MONOLOGUE", h:"Long speech by one", meaning:"Extended utterance by single character.", sentence:"His monologue explained his past.", cat:"English" },
  { w:"SOLILOQUY", h:"Character alone speaking", meaning:"Internal thoughts voiced on stage.", sentence:"Hamlet's soliloquy begins 'To be or not to be'.", cat:"English" },
  { w:"ASIDE", h:"Whispered to audience", meaning:"Character speaks directly to viewers.", sentence:"The aside made the audience laugh.", cat:"English" },
  { w:"NARRATOR", h:"Teller of story", meaning:"Voice relating events.", sentence:"The narrator was unreliable.", cat:"English" },
  { w:"VOICE", h:"Author's style", meaning:"Distinctive tone or perspective.", sentence:"Her voice was humorous and sharp.", cat:"English" },
  { w:"TONE", h:"Attitude toward subject", meaning:"Emotional quality of writing.", sentence:"The tone was somber and reflective.", cat:"English" },
  { w:"MOOD", h:"Atmosphere for reader", meaning:"Emotional feeling evoked.", sentence:"The mood shifted from hopeful to grim.", cat:"English" },
  { w:"STYLE", h:"Author's choices", meaning:"Diction syntax figurative language.", sentence:"His style is minimalist and direct.", cat:"English" },
  { w:"DICTION", h:"Word choice", meaning:"Specific vocabulary selected.", sentence:"Formal diction avoids contractions.", cat:"English" },
  { w:"SYNTAX", h:"Sentence structure", meaning:"Arrangement of words phrases.", sentence:"Inverted syntax asks 'What say you?'.", cat:"English" },
  { w:"IMAGERY", h:"Sensory language", meaning:"Description appealing to senses.", sentence:"The imagery of rotting fruit suggested decay.", cat:"English" },
  { w:"METAPHOR", h:"Direct comparison", meaning:"Figure of speech saying A is B.", sentence:"'Time is a thief' is a metaphor.", cat:"English" },
  { w:"SIMILE", h:"Comparison using like", meaning:"Figure of speech with like or as.", sentence:"Her smile was like sunshine.", cat:"English" },
  { w:"ANALOGY", h:"Extended comparison", meaning:"Explaining by parallel case.", sentence:"An analogy compares heart to a pump.", cat:"English" },
  { w:"PERSONIFY", h:"Give human traits", meaning:"Attributing human qualities to objects.", sentence:"The wind whispered through the trees.", cat:"English" },
  { w:"HYPERBOLE", h:"Extreme exaggeration", meaning:"Overstatement for effect.", sentence:"I've told you a million times.", cat:"English" },
  { w:"IRONY", h:"Opposite of literal", meaning:"Discrepancy between appearance and reality.", sentence:"Verbal irony says 'Great weather' during a storm.", cat:"English" },
  { w:"SARCASM", h:"Mocking irony", meaning:"Sharp cutting verbal irony.", sentence:"'Nice job,' he said with sarcasm.", cat:"English" },
  { w:"PARADOX", h:"Self contradiction", meaning:"Seemingly absurd but true statement.", sentence:"'This statement is false' is a paradox.", cat:"English" },
  { w:"OXYMORON", h:"Contradictory terms", meaning:"Two opposite words together.", sentence:"Jumbo shrimp is an oxymoron.", cat:"English" },
  { w:"ALLUSION", h:"Reference to known work", meaning:"Indirect mention of literature history.", sentence:"Her smile was a subtle allusion to Mona Lisa.", cat:"English" },
  { w:"ALLEGORY", h:"Extended metaphor", meaning:"Story with hidden moral meaning.", sentence:"Animal Farm is an allegory for revolution.", cat:"English" },
  { w:"SYMBOL", h:"Stands for something else", meaning:"Object representing abstract idea.", sentence:"The dove is a symbol of peace.", cat:"English" },
  { w:"MOTIF", h:"Repeated symbol", meaning:"Recurring element reinforcing theme.", sentence:"The motif of blood appears throughout Macbeth.", cat:"English" },
  { w:"FORESHADOW", h:"Hint at future", meaning:"Suggesting later events.", sentence:"The broken mirror foreshadowed misfortune.", cat:"English" },
  { w:"FLASHBACK", h:"Scene from past", meaning:"Interruption to show earlier time.", sentence:"The flashback revealed childhood trauma.", cat:"English" },
  { w:"FRAME", h:"Story within story", meaning:"Narrative enclosing another tale.", sentence:"Frankenstein uses a frame narrative.", cat:"English" },
  { w:"PROLOGUE", h:"Introductory section", meaning:"Opens work before main story.", sentence:"The prologue set the historical context.", cat:"English" },
  { w:"EPILOGUE", h:"Concluding section", meaning:"End piece after main narrative.", sentence:"The epilogue showed the characters years later.", cat:"English" },
  { w:"PREFACE", h:"Author's introduction", meaning:"Explains purpose or background.", sentence:"In the preface, she thanked her editors.", cat:"English" },
  { w:"APPENDIX", h:"Extra material", meaning:"Supplementary section at end.", sentence:"The appendix contained raw data.", cat:"English" },
  { w:"GLOSSARY", h:"Definition list", meaning:"Alphabetical term explanations.", sentence:"Turn to the glossary for unfamiliar words.", cat:"English" },
  { w:"INDEX", h:"Back of book list", meaning:"Alphabetical page references.", sentence:"The index listed all proper names.", cat:"English" },
  { w:"BIBLIOGRAPHY", h:"Source list", meaning:"Citation of works consulted.", sentence:"The bibliography had twenty entries.", cat:"English" },
  { w:"CITATION", h:"Reference to source", meaning:"Credit for quoted or paraphrased idea.", sentence:"Use MLA citation for the quote.", cat:"English" },
  { w:"QUOTE", h:"Exact words", meaning:"Repetition of someone else's phrase.", sentence:"Direct quote requires quotation marks.", cat:"English" },
  { w:"PARAPHRASE", h:"Restate in own words", meaning:"Rewording without losing meaning.", sentence:"Paraphrase the passage to show understanding.", cat:"English" },
  { w:"SUMMARIZE", h:"Condense main points", meaning:"Brief restatement of key ideas.", sentence:"Summarize the article in three sentences.", cat:"English" },
  { w:"PLAGIARISM", h:"Stealing writing", meaning:"Using others' work without credit.", sentence:"Plagiarism leads to failing grades.", cat:"English" },
  { w:"ANNOTATE", h:"Add notes", meaning:"Write comments on text.", sentence:"Annotate the margins with questions.", cat:"English" },
  { w:"OUTLINE", h:"Hierarchical plan", meaning:"Organized list of main points.", sentence:"Make an outline before drafting.", cat:"English" },
  { w:"DRAFT", h:"Preliminary version", meaning:"Unfinished writing for revision.", sentence:"Her first draft needed restructuring.", cat:"English" },
  { w:"REVISE", h:"Improve content", meaning:"Change ideas organization wording.", sentence:"Revise the vague sentences to be precise.", cat:"English" },
  { w:"EDIT", h:"Correct mechanics", meaning:"Fix grammar spelling punctuation.", sentence:"Edit for comma splices.", cat:"English" },
  { w:"PROOFREAD", h:"Final error check", meaning:"Read carefully for small mistakes.", sentence:"Proofread aloud to catch typos.", cat:"English" },
  { w:"PEER", h:"Review colleague feedback", meaning:"Classmate evaluating writing.", sentence:"Peer review helped identify weak arguments.", cat:"English" },
  { w:"RUBRIC", h:"Scoring guide", meaning:"Criteria for evaluating work.", sentence:"The rubric included grammar and content.", cat:"English" },
  { w:"PROMPT", h:"Writing assignment", meaning:"Topic or question to respond to.", sentence:"The prompt asked for a persuasive essay.", cat:"English" },
  { w:"BRAINSTORM", h:"Generate ideas", meaning:"Unstructured creative thinking.", sentence:"Brainstorm before organizing your outline.", cat:"English" },
  { w:"FREEWRITE", h:"Write without stopping", meaning:"Timed stream of consciousness.", sentence:"Freewrite for ten minutes without editing.", cat:"English" },
  { w:"CLUSTER", h:"Mind map", meaning:"Diagram connecting related ideas.", sentence:"Cluster synonyms around the central word.", cat:"English" },
  { w:"THESAURUS", h:"Word synonym book", meaning:"Reference for finding alternatives.", sentence:"Use a thesaurus to avoid repetition.", cat:"English" },
  { w:"DICTIONARY", h:"Word meanings", meaning:"Reference for definitions pronunciation.", sentence:"Check the dictionary for unknown words.", cat:"English" },
  { w:"GRAMMAR", h:"Sentence rules", meaning:"Structural system of language.", sentence:"Good grammar improves clarity.", cat:"English" },
  { w:"PUNCTUATION", h:"Marking symbols", meaning:"Periods commas question marks.", sentence:"Proper punctuation prevents confusion.", cat:"English" },
  { w:"PERIOD", h:"End stop", meaning:"Dot marking sentence end.", sentence:"Use a period for declarative sentences.", cat:"English" },
  { w:"COMMA", h:"Pause marker", meaning:"Separates clauses or items.", sentence:"Place a comma before a coordinating conjunction.", cat:"English" },
  { w:"SEMICOLON", h:"Soft stop", meaning:"Joins related independent clauses.", sentence:"Use a semicolon between balanced clauses.", cat:"English" },
  { w:"COLON", h:"Introduces list", meaning:"Announces what follows.", sentence:"Bring these items: pen, paper, eraser.", cat:"English" },
  { w:"APOSTROPHE", h:"Possession contraction", meaning:"Shows ownership or omitted letters.", sentence:"The cat's toy is missing.", cat:"English" },
  { w:"QUOTATION", h:"Direct speech marks", meaning:"Double or single enclosing words.", sentence:"'Hello,' she said.", cat:"English" },
  { w:"PARENTHESES", h:"Aside marks", meaning:"Curved brackets setting off inserts.", sentence:"He finally replied (after an hour) to my text.", cat:"English" },
  { w:"BRACKET", h:"Editorial insertion", meaning:"Square marks for clarification.", sentence:"She wrote 'it [the policy] failed.'.", cat:"English" },
  { w:"ELLIPSIS", h:"Omission dot", meaning:"Three dots showing missing text.", sentence:"Time passed... then she spoke.", cat:"English" },
  { w:"HYPHEN", h:"Joins compounds", meaning:"Dash connecting word parts.", sentence:"Well-known author uses a hyphen.", cat:"English" },
  { w:"DASH", h:"Emphatic break", meaning:"Longer line indicating interruption.", sentence:"He knew the answer—but refused to say.", cat:"English" },
  { w:"CAPITAL", h:"Uppercase letter", meaning:"Letter at sentence start or proper noun.", sentence:"Capitalize proper names like London.", cat:"English" },
  { w:"ABBREV", h:"Shortened form", meaning:"Few letters for longer word.", sentence:"Mr. is an abbrev for Mister.", cat:"English" },
  { w:"ACRONYM", h:"Letters as word", meaning:"Initials pronounced as word.", sentence:"NATO is an acronym for North Atlantic Treaty Organization.", cat:"English" },
  { w:"INITIALISM", h:"Letters spoken", meaning:"Initials pronounced letter by letter.", sentence:"FBI is an initialism.", cat:"English" },
  { w:"PREFIX", h:"Word beginning part", meaning:"Added before root to change meaning.", sentence:"Pre- means before in preview.", cat:"English" },
  { w:"SUFFIX", h:"Word ending part", meaning:"Added after root to change form.", sentence:"Ful turns beauty into beautiful.", cat:"English" },
  { w:"ROOT", h:"Base of word", meaning:"Core meaning carrier.", sentence:"Dict means speak in dictionary.", cat:"English" },
  { w:"AFFIX", h:"Prefix or suffix", meaning:"Attached morpheme modifying meaning.", sentence:"Affixes include un- and -ness.", cat:"English" },
  { w:"ETYMOLOGY", h:"Word origin", meaning:"Historical development of meaning.", sentence:"The etymology of 'salary' is Latin for salt.", cat:"English" },
  { w:"COGNATE", h:"Related word", meaning:"Shared origin across languages.", sentence:"Night and nuit are cognates.", cat:"English" },
  { w:"NEOLOGISM", h:"Newly coined word", meaning:"Recently invented term.", sentence:"Selfie was a neologism in 2004.", cat:"English" },
  { w:"LOANWORD", h:"Borrowed term", meaning:"Word adopted from another language.", sentence:"Sushi is a loanword from Japanese.", cat:"English" },
  { w:"JARGON", h:"Specialized language", meaning:"Technical terms of a field.", sentence:"Medical jargon includes words like distal.", cat:"English" },
  { w:"SLANG", h:"Informal speech", meaning:"Casual nonstandard vocabulary.", sentence:"Yeet is recent slang.", cat:"English" },
  { w:"DIALECT", h:"Regional variety", meaning:"Language features of area.", sentence:"The Southern dialect uses y'all.", cat:"English" },
  { w:"ACCENT", h:"Pronunciation pattern", meaning:"Phonetic features of region.", sentence:"Her accent dropped the r sound.", cat:"English" },
  { w:"IDIOM", h:"Nonliteral phrase", meaning:"Fixed expression meaning not literal.", sentence:"It's raining cats and dogs is an idiom.", cat:"English" },
  { w:"CLICHE", h:"Overused expression", meaning:"Trite phrase lacking originality.", sentence:"Avoid cliches like 'think outside the box'.", cat:"English" },
  { w:"PROVERB", h:"Wise saying", meaning:"Short traditional truth.", sentence:"A penny saved is a penny earned.", cat:"English" },
  { w:"APHORISM", h:"Concise statement", meaning:"Brief clever observation.", sentence:"The aphorism 'Less is more' is minimalist.", cat:"English" },
  { w:"EPIGRAM", h:"Witty short poem", meaning:"Pointed concise saying.", sentence:"Oscar Wilde wrote many epigrams.", cat:"English" },
  { w:"RHYME", h:"Same end sound", meaning:"Correspondence of terminal syllables.", sentence:"Cat and bat rhyme perfectly.", cat:"English" },
  { w:"RHYTHM", h:"Patterned beats", meaning:"Regular recurrence of stress.", sentence:"Iambic rhythm goes da DUM da DUM.", cat:"English" },
  { w:"METER", h:"Poetic foot pattern", meaning:"Structured line of verse.", sentence:"Shakespeare used iambic pentameter.", cat:"English" },
  { w:"FOOT", h:"Basic meter unit", meaning:"Two or three syllables pattern.", sentence:"An iamb is a foot of unstressed stressed.", cat:"English" },
  { w:"IAMB", h:"Unstressed stressed", meaning:"Da DUM pattern.", sentence:"Iambic meter sounds like heartbeat.", cat:"English" },
  { w:"TROCHEE", h:"Stressed unstressed", meaning:"DUM da pattern.", sentence:"Trochee appears in 'Peter Peter'.", cat:"English" },
  { w:"ANAPEST", h:"Unstressed unstressed stressed", meaning:"Da da DUM.", sentence:"Anapest gallops like 'understand'.", cat:"English" },
  { w:"DACTYL", h:"Stressed unstressed unstressed", meaning:"DUM da da.", sentence:"Dactyl starts 'Higgledy piggledy'.", cat:"English" },
  { w:"CAESURA", h:"Pause in line", meaning:"Strong division within verse.", sentence:"The caesura occurs in the middle.", cat:"English" },
  { w:"ENJAMB", h:"Line continues", meaning:"No pause at line end.", sentence:"Enjambment hurries to next line.", cat:"English" },
  { w:"STANZA", h:"Group of lines", meaning:"Poetic paragraph.", sentence:"Each stanza has four lines.", cat:"English" },
  { w:"COUPLET", h:"Two line stanza", meaning:"Rhyming pair.", sentence:"The couplet ends the sonnet.", cat:"English" },
  { w:"TERCET", h:"Three line stanza", meaning:"Triplet often aba.", sentence:"The tercet appears in terza rima.", cat:"English" },
  { w:"QUATRAIN", h:"Four line stanza", meaning:"Most common stanza form.", sentence:"The quatrain rhymes abab.", cat:"English" },
  { w:"SONNET", h:"14 line poem", meaning:"Iambic pentameter with rhyme scheme.", sentence:"Shakespeare wrote 154 sonnets.", cat:"English" },
  { w:"HAIKU", h:"17 syllable poem", meaning:"Three lines of 5 7 5.", sentence:"The haiku captures a moment.", cat:"English" },
  { w:"LIMERICK", h:"Humorous 5 line", meaning:"Rhyme scheme aabba.", sentence:"There once was a limerick writer.", cat:"English" },
  { w:"BALLAD", h:"Narrative song poem", meaning:"Quatrains with alternating meter.", sentence:"The ballad told a tragic love story.", cat:"English" },
  { w:"ODE", h:"Praising poem", meaning:"Serious formal lyric.", sentence:"Ode to a Nightingale is by Keats.", cat:"English" },
  { w:"ELEGY", h:"Mourning poem", meaning:"Lament for the dead.", sentence:"The elegy expressed grief.", cat:"English" },
  { w:"EPIC", h:"Long narrative", meaning:"Heroic journey poem.", sentence:"The Iliad is an epic.", cat:"English" },
  { w:"FREEVERSE", h:"No regular meter", meaning:"Unrhymed nonmetrical poetry.", sentence:"Free verse follows natural speech rhythm.", cat:"English" },
  { w:"BLANKVERSE", h:"Unrhymed iambic pentameter", meaning:"Shakespeare's preferred verse.", sentence:"Blank verse sounds conversational yet formal.", cat:"English" },
  { w:"PROSE", h:"Ordinary writing", meaning:"No metrical structure.", sentence:"Novels are written in prose.", cat:"English" },
  { w:"FICTION", h:"Imaginary story", meaning:"Invented narrative.", sentence:"Science fiction is a genre of fiction.", cat:"English" },
  { w:"NONFICTION", h:"Factual writing", meaning:"Based on real events.", sentence:"The biography is nonfiction.", cat:"English" },
  { w:"MEMOIR", h:"Personal account", meaning:"Autobiographical focus on period.", sentence:"Her memoir covered her childhood.", cat:"English" },
  { w:"AUTOBIOGRAPHY", h:"Self written life", meaning:"Author writes own life story.", sentence:"Frederick Douglass wrote his autobiography.", cat:"English" },
  { w:"BIOGRAPHY", h:"Life of another", meaning:"Written account of someone's life.", sentence:"The biography detailed Einstein's early years.", cat:"English" },
  { w:"JOURNAL", h:"Daily record", meaning:"Diary of events and thoughts.", sentence:"She kept a journal while traveling.", cat:"English" },
  { w:"DIARY", h:"Personal day book", meaning:"Private daily entries.", sentence:"Anne Frank's diary is famous.", cat:"English" },
  { w:"BLOG", h:"Web log", meaning:"Online written posts.", sentence:"He writes a food blog.", cat:"English" },
  { w:"EMAIL", h:"Electronic message", meaning:"Letter sent via internet.", sentence:"Send an email to your professor.", cat:"English" },
  { w:"MEMO", h:"Internal note", meaning:"Brief written message in workplace.", sentence:"The memo announced the new policy.", cat:"English" },
  { w:"REPORT", h:"Formal account", meaning:"Structured document presenting findings.", sentence:"Write a lab report after the experiment.", cat:"English" },
  { w:"REVIEW", h:"Critical evaluation", meaning:"Assessment of book film product.", sentence:"The review gave the movie four stars.", cat:"English" },
  { w:"CRITIQUE", h:"Detailed analysis", meaning:"Judgment of strengths weaknesses.", sentence:"Her critique highlighted structural flaws.", cat:"English" },
  { w:"EDITORIAL", h:"Opinion piece", meaning:"Newspaper article expressing view.", sentence:"The editorial supported the new law.", cat:"English" },
  { w:"COLUMN", h:"Regular article", meaning:"Periodic piece by same writer.", sentence:"Her advice column runs weekly.", cat:"English" },
  { w:"OP ED", h:"Opposite editorial", meaning:"Guest opinion essay.", sentence:"The op ed argued for tax reform.", cat:"English" },
  { w:"ESSAYIST", h:"Writer of essays", meaning:"Author of analytical compositions.", sentence:"Montaigne was a famous essayist.", cat:"English" },
  { w:"NOVELIST", h:"Writes novels", meaning:"Author of book length fiction.", sentence:"Toni Morrison is a novelist.", cat:"English" },
  { w:"POET", h:"Writes poems", meaning:"Creator of verse.", sentence:"Emily Dickinson was a reclusive poet.", cat:"English" },
  { w:"DRAMATIST", h:"Playwright", meaning:"Author of plays.", sentence:"Shakespeare is the greatest dramatist.", cat:"English" },
  { w:"CRITIC", h:"Professional judge", meaning:"Writes reviews and analyses.", sentence:"The film critic disliked the sequel.", cat:"English" },
  { w:"EDITOR", h:"Prepares text", meaning:"Revises and manages publication.", sentence:"The editor corrected the manuscript.", cat:"English" },
  { w:"PROOFREADER", h:"Copy checker", meaning:"Finds typos and formatting errors.", sentence:"The proofreader caught missing commas.", cat:"English" },
  { w:"PUBLISHER", h:"Produces books", meaning:"Company printing and distributing.", sentence:"The publisher offered a contract.", cat:"English" },
  { w:"AGENT", h:"Represents writers", meaning:"Finds publishers for authors.", sentence:"Her agent submitted the manuscript.", cat:"English" },
  { w:"ROYALTY", h:"Author payment", meaning:"Percentage of sales to writer.", sentence:"The author earned a 10% royalty.", cat:"English" },
  { w:"COPYRIGHT", h:"Legal ownership", meaning:"Exclusive right to copy work.", sentence:"Copyright lasts for life plus 70 years.", cat:"English" },
  { w:"FOOTNOTE", h:"Note at page bottom", meaning:"Explanatory or reference note.", sentence:"The footnote clarified the term.", cat:"English" },
  { w:"ENDNOTE", h:"Note at chapter end", meaning:"Collected references at back.", sentence:"Endnotes are numbered sequentially.", cat:"English" },
  { w:"HALFTITLE", h:"Book first page", meaning:"Title only no author.", sentence:"The halftitle appears before the title page.", cat:"English" },
  { w:"TITLEPAGE", h:"Main title page", meaning:"Includes title author publisher.", sentence:"The title page had a decorative border.", cat:"English" },
  { w:"COLOPHON", h:"Publication info", meaning:"Printer's emblem or details.", sentence:"The colophon listed the typeface.", cat:"English" },
  { w:"ISBN", h:"Book identifier", meaning:"Unique 13 digit number.", sentence:"Use ISBN to order the textbook.", cat:"English" },
  { w:"SPINE", h:"Book back edge", meaning:"Holds pages together visible on shelf.", sentence:"The spine had gold lettering.", cat:"English" },
  { w:"LEAF", h:"Single sheet", meaning:"Two pages back to front.", sentence:"A leaf torn from the book.", cat:"English" },
  { w:"FOLIO", h:"Large page", meaning:"Size Oversized book format.", sentence:"The folio measured 12 by 18 inches.", cat:"English" },
  { w:"OCTAVO", h:"Book size", meaning:"Eight leaves per sheet.", sentence:"The novel was a small octavo.", cat:"English" },
  { w:"MANUSCRIPT", h:"Handwritten document", meaning:"Text written by hand.", sentence:"The medieval manuscript was illuminated.", cat:"English" },
  { w:"TYPESET", h:"Arrange printing type", meaning:"Compose text for press.", sentence:"The book was typeset in Garamond.", cat:"English" },
  { w:"PROOF", h:"Printer's trial", meaning:"Test page before final print.", sentence:"Check the proof for errors.", cat:"English" },
  { w:"GALLEY", h:"Early proof", meaning:"Long sheet before pagination.", sentence:"The galley had double spacing.", cat:"English" },
  { w:"TYPOGRAPHY", h:"Arranged type art", meaning:"Design of printed text.", sentence:"Good typography improves readability.", cat:"English" },
  { w:"FONT", h:"Complete typeface", meaning:"Set of characters same design.", sentence:"Use a readable font like Times.", cat:"English" },
  { w:"SERIF", h:"Small decorative stroke", meaning:"Line at end of letter stroke.", sentence:"Serif fonts are traditional.", cat:"English" },
  { w:"SANS", h:"Without serifs", meaning:"Clean no stroke font.", sentence:"Sans serif fonts like Arial are modern.", cat:"English" },
  { w:"BOLD", h:"Dark heavy type", meaning:"Thicker stroke for emphasis.", sentence:"Use bold for headings.", cat:"English" },
  { w:"ITALIC", h:"Slanted type", meaning:"Oblique style for distinction.", sentence:"The title was in italics.", cat:"English" },
  { w:"UNDERLINE", h:"Line beneath text", meaning:"Emphasis or hyperlink indicator.", sentence:"Underline only links now.", cat:"English" },
  { w:"KERNING", h:"Space between letters", meaning:"Adjusting character spacing.", sentence:"Good kerning prevents overlapping.", cat:"English" },
  { w:"LEADING", h:"Line spacing", meaning:"Vertical space between baselines.", sentence:"Increase leading for readability.", cat:"English" },
  { w:"MARGIN", h:"Blank border", meaning:"Space around page text.", sentence:"Narrow margins save paper.", cat:"English" },
  { w:"INDENT", h:"First line space", meaning:"Inward margin at paragraph start.", sentence:"Indent each new paragraph five spaces.", cat:"English" },
  { w:"HEADER", h:"Top of page", meaning:"Repeating text at top.", sentence:"The header contained the chapter title.", cat:"English" },
  { w:"FOOTER", h:"Bottom of page", meaning:"Repeating text at bottom.", sentence:"Page numbers go in footer.", cat:"English" },
  { w:"PAGINATION", h:"Page numbering", meaning:"Sequential numbers on leaves.", sentence:"Use roman numerals for front matter.", cat:"English" },
  { w:"VERSO", h:"Left hand page", meaning:"Even numbered page.", sentence:"The verso faced the recto.", cat:"English" },
  { w:"RECTO", h:"Right hand page", meaning:"Odd numbered page.", sentence:"Chapters often start on recto.", cat:"English" },
  { w:"EPIGRAPH", h:"Quotation at start", meaning:"Motto before first chapter.", sentence:"The epigraph was from Dante.", cat:"English" },
  { w:"DEDICATION", h:"Author's tribute", meaning:"Page naming honored person.", sentence:"The dedication read 'For my mother.'.", cat:"English" },
  { w:"ACKNOWLEDGMENT", h:"Thanks page", meaning:"Crediting helpers and sources.", sentence:"The acknowledgment listed her editor.", cat:"English" },
  { w:"CONCORDANCE", h:"Word location list", meaning:"Alphabetical index of every word.", sentence:"Bible concordance finds verses.", cat:"English" },
  { w:"ALPHABET", h:"Ordered letters", meaning:"26 symbols from A to Z.", sentence:"The alphabet came from Phoenicians.", cat:"English" },
  { w:"VOWEL", h:"Open sound letter", meaning:"A E I O U and sometimes Y.", sentence:"Every syllable needs a vowel.", cat:"English" },
  { w:"CONSONANT", h:"Closed sound letter", meaning:"Non vowel letters.", sentence:"B C D F G H J K L M N P Q R S T V W X Y Z.", cat:"English" },
  { w:"DIGRAPH", h:"Two letters one sound", meaning:"Sh ch th ph wh.", sentence:"The digraph th makes two sounds.", cat:"English" },
  { w:"BLEND", h:"Two consonants blended", meaning:"St pl tr cr.", sentence:"Blend st starts stop.", cat:"English" },
  { w:"DIPHTHONG", h:"Gliding vowel sound", meaning:"Oi oy ou ow.", sentence:"The diphthong oi appears in boil.", cat:"English" },
  { w:"SCHWA", h:"Neutral vowel sound", meaning:"Unstressed uh like in about.", sentence:"The schwa is the most common vowel.", cat:"English" },
  { w:"SYLLABLE", h:"Beat in word", meaning:"Unit of pronunciation.", sentence:"Dictionary splits into syllables.", cat:"English" },
  { w:"STRESS", h:"Emphasis on syllable", meaning:"Louder longer higher pitch.", sentence:"Stress the first syllable of record.", cat:"English" },
  { w:"INTONATION", h:"Pitch pattern", meaning:"Melody of speech.", sentence:"Rising intonation asks questions.", cat:"English" },
  { w:"ARTICULATION", h:"Speech production", meaning:"Movement of tongue lips palate.", sentence:"Clear articulation aids understanding.", cat:"English" },
  { w:"PHONEME", h:"Smallest sound unit", meaning:"Distinguishes word meaning.", sentence:"Bat and pat differ by one phoneme.", cat:"English" },
  { w:"MORPHEME", h:"Smallest meaning unit", meaning:"Word or part with meaning.", sentence:"Unhappiness has three morphemes.", cat:"English" },
  { w:"SEMANTICS", h:"Meaning study", meaning:"How words represent concepts.", sentence:"Semantics examines lexical ambiguity.", cat:"English" },
  { w:"PRAGMATICS", h:"Context meaning", meaning:"How situation affects interpretation.", sentence:"Pragmatics explains sarcasm.", cat:"English" },
  { w:"MORPHOLOGY", h:"Word formation", meaning:"Structure of morphemes.", sentence:"Morphology studies plurals and tenses.", cat:"English" },
  { w:"PHONOLOGY", h:"Sound patterns", meaning:"System of phonemes and rules.", sentence:"Phonology describes why ng never starts words.", cat:"English" },
  { w:"LEXICON", h:"Mental dictionary", meaning:"All words a person knows.", sentence:"Her lexicon includes obscure terms.", cat:"English" },
  { w:"IDIOLECT", h:"Personal language", meaning:"Individual's unique speech.", sentence:"His idiolect includes favorite phrases.", cat:"English" },
  { w:"SOCIOLECT", h:"Class based variety", meaning:"Social group language features.", sentence:"The upper class sociolect differs from working class.", cat:"English" },
  { w:"REGISTER", h:"Formality level", meaning:"Language adapted to situation.", sentence:"Use formal register in legal documents.", cat:"English" },
  { w:"COLLOQUIAL", h:"Conversational style", meaning:"Informal everyday speech.", sentence:"'Gonna' is colloquial for going to.", cat:"English" },
  { w:"ARCHAIC", h:"Old fashioned word", meaning:"No longer in common use.", sentence:"Thee and thou are archaic.", cat:"English" },
  { w:"OBSOLETE", h:"No longer used", meaning:"Completely extinct word.", sentence:"Groak (to stare at food) is obsolete.", cat:"English" },
  { w:"PORTMANTEAU", h:"Blended word", meaning:"Two words combined.", sentence:"Brunch is breakfast plus lunch.", cat:"English" },
  { w:"BACKFORM", h:"Reverse derivation", meaning:"Verb from noun by removing affix.", sentence:"Edit from editor is backformation.", cat:"English" },
  { w:"ONOMATOPOEIA", h:"Sound mimicking word", meaning:"Bang hiss buzz.", sentence:"Onomatopoeia echoes real sound.", cat:"English" },
  { w:"HOMONYM", h:"Same spelling sound", meaning:"Bat animal and bat sports.", sentence:"Homonyms cause puns.", cat:"English" },
  { w:"HOMOPHONE", h:"Same sound different spelling", meaning:"Their there they're.", sentence:"Homophones confuse spell check.", cat:"English" },
  { w:"HOMOGRAPH", h:"Same spelling different sound", meaning:"Lead metal vs lead guide.", sentence:"Homographs need context.", cat:"English" },
  { w:"SYNONYM", h:"Same meaning", meaning:"Word interchangeable in some contexts.", sentence:"Big and large are synonyms.", cat:"English" },
  { w:"ANTONYM", h:"Opposite meaning", meaning:"Word with reverse meaning.", sentence:"Hot and cold are antonyms.", cat:"English" },
  { w:"HYPONYM", h:"Subcategory type", meaning:"Red is hyponym of color.", sentence:"Hyponyms form taxonomies.", cat:"English" },
  { w:"HYPERNYM", h:"General category", meaning:"Color is hypernym of red.", sentence:"Hypernyms are broader terms.", cat:"English" },
  { w:"MERONYM", h:"Part whole relationship", meaning:"Finger is meronym of hand.", sentence:"Meronyms show composition.", cat:"English" },
  { w:"HOLONYM", h:"Whole containing part", meaning:"Hand is holonym of finger.", sentence:"Holonyms and meronyms are paired.", cat:"English" },
  { w:"POLYSEMY", h:"Multiple related meanings", meaning:"Word with several senses.", sentence:"Bank (river or money) is polysemy.", cat:"English" },
  { w:"HOMONYMY", h:"Same form unrelated meaning", meaning:"Bat creature vs bat club.", sentence:"Homonymy is coincidence.", cat:"English" },
  { w:"AMBIGUITY", h:"Multiple interpretations", meaning:"Phrase with two possible meanings.", sentence:"'I saw her duck' is ambiguous.", cat:"English" },
  { w:"VAGUENESS", h:"Imprecise meaning", meaning:"Lacks clear boundary.", sentence:"Tall is vague without reference.", cat:"English" },
  { w:"PROTOTYPE", h:"Best example", meaning:"Typical member of category.", sentence:"Robin is prototype of bird.", cat:"English" },
  { w:"STEREOTYPE", h:"Oversimplified belief", meaning:"Fixed oversimplified image.", sentence:"Stereotype can be harmful.", cat:"English" },
  { w:"CONNOTATION", h:"Emotional association", meaning:"Implied feeling of word.", sentence:"Home connotes warmth not just shelter.", cat:"English" },
  { w:"DENOTATION", h:"Literal meaning", meaning:"Dictionary definition.", sentence:"Dog denotes canine animal.", cat:"English" },
  { w:"EUPHEMISM", h:"Mild substitute", meaning:"Replaces offensive term.", sentence:"Passed away for died is euphemism.", cat:"English" },
  { w:"DYSPHEMISM", h:"Offensive substitute", meaning:"Harsh term for neutral.", sentence:"Kicked the bucket for died.", cat:"English" },
  { w:"TABOO", h:"Forbidden topic", meaning:"Socially prohibited subject.", sentence:"Death and sex are taboo in some contexts.", cat:"English" },
  { w:"PEJORATIVE", h:"Negative word", meaning:"Insulting or belittling term.", sentence:"Liar is pejorative.", cat:"English" },
  { w:"AMELIORATE", h:"Meaning improves", meaning:"Word becomes more positive.", sentence:"Nice once meant foolish.", cat:"English" },
  { w:"PEJORATE", h:"Meaning worsens", meaning:"Word becomes more negative.", sentence:"Villain once meant farmhand.", cat:"English" },
  { w:"SYNECDOCHE", h:"Part for whole", meaning:"Wheels for car.", sentence:"All hands on deck uses synecdoche.", cat:"English" },
  { w:"METONYMY", h:"Associated term", meaning:"Crown for monarchy.", sentence:"The White House announced means president.", cat:"English" },
  { w:"LITOTES", h:"Understatement via double negative", meaning:"Not bad meaning good.", sentence:"That's not bad at all.", cat:"English" },
  { w:"MEIOSIS", h:"Belittling understatement", meaning:"Downplaying importance.", sentence:"It's just a scratch said of huge dent.", cat:"English" },
  { w:"RHETORIC", h:"Persuasive language", meaning:"Art of effective speaking.", sentence:"Rhetoric uses ethos logos pathos.", cat:"English" },
  { w:"ETHOS", h:"Credibility appeal", meaning:"Persuasion by character.", sentence:"Doctor's white coat adds ethos.", cat:"English" },
  { w:"PATHOS", h:"Emotional appeal", meaning:"Persuasion by feeling.", sentence:"Sad music creates pathos.", cat:"English" },
  { w:"LOGOS", h:"Logical appeal", meaning:"Persuasion by reason.", sentence:"Statistics support logos.", cat:"English" },
  { w:"KAIROS", h:"Timing opportunity", meaning:"Right moment for argument.", sentence:"Kairos demands speaking now.", cat:"English" },
  { w:"FORENSICS", h:"Debate art", meaning:"Public speaking competition.", sentence:"Forensics team argues resolutions.", cat:"English" },
  { w:"ELOCUTION", h:"Clear speech", meaning:"Articulation and pronunciation.", sentence:"Elocution lessons improve clarity.", cat:"English" },
  { w:"ORATORY", h:"Public speaking", meaning:"Formal address to audience.", sentence:"His oratory moved the crowd.", cat:"English" },
  { w:"DEMAGOGY", h:"Mob manipulation", meaning:"Emotional appeal to prejudice.", sentence:"Demagogy threatens democracy.", cat:"English" },
  { w:"POLEMIC", h:"Aggressive argument", meaning:"Controversial attack on position.", sentence:"His polemic criticized the government.", cat:"English" },
  { w:"APOLOGIA", h:"Formal defense", meaning:"Speech justifying actions.", sentence:"The CEO's apologia fell flat.", cat:"English" },
  { w:"EULOGY", h:"Praise speech", meaning:"Honoring the dead.", sentence:"He delivered a moving eulogy.", cat:"English" },
  { w:"TRIBUTE", h:"Honoring speech", meaning:"Expressing admiration.", sentence:"The tribute celebrated her career.", cat:"English" },
  { w:"ROAST", h:"Comedic mockery", meaning:"Humorous insult event.", sentence:"The roast made fun of the guest.", cat:"English" },
  { w:"TOAST", h:"Celebratory drink speech", meaning:"Brief praise before raising glasses.", sentence:"Propose a toast to the newlyweds.", cat:"English" },
  { w:"LECTURE", h:"Educational talk", meaning:"Formal instructional speech.", sentence:"The professor's lecture lasted an hour.", cat:"English" },
  { w:"SEMINAR", h:"Discussion class", meaning:"Small group interactive session.", sentence:"The seminar debated the reading.", cat:"English" },
  { w:"SYMPOSIUM", h:"Conference meeting", meaning:"Several speakers on one topic.", sentence:"The symposium on climate was informative.", cat:"English" },
  { w:"COLLOQUY", h:"Formal conversation", meaning:"Structured dialogue.", sentence:"The colloquy explored ethics.", cat:"English" },
  { w:"DIALECTIC", h:"Logical discussion", meaning:"Thesis antithesis synthesis.", sentence:"Hegel used dialectic method.", cat:"English" },
  { w:"EXEGESIS", h:"Critical interpretation", meaning:"Detailed analysis of text.", sentence:"Her exegesis of the poem was insightful.", cat:"English" },
  { w:"HERMENEUTICS", h:"Interpretation theory", meaning:"Principles of textual understanding.", sentence:"Biblical hermeneutics requires historical context.", cat:"English" },
  { w:"PALEOGRAPHY", h:"Ancient handwriting study", meaning:"Deciphering old manuscripts.", sentence:"Paleography dated the scroll to 1200 CE.", cat:"English" },
  { w:"CODICOLOGY", h:"Manuscript book study", meaning:"Physical analysis of codex.", sentence:"The codicology revealed medieval binding.", cat:"English" },
  { w:"EPIGRAPHY", h:"Inscription study", meaning:"Deciphering carved or engraved texts.", sentence:"Roman epigraphy appears on stone monuments.", cat:"English" },
  { w:"PAPYROLOGY", h:"Ancient papyrus study", meaning:"Deciphering documents on papyrus.", sentence:"Papyrology recovered lost Greek works.", cat:"English" },
  { w:"DIPLOMATICS", h:"Document analysis", meaning:"Study of historical charters.", sentence:"Diplomatics authenticates medieval deeds.", cat:"English" },
  { w:"NUMISMATICS", h:"Coin study", meaning:"Research on currency and medals.", sentence:"Numismatics dated the coin to 300 BCE.", cat:"English" },
  { w:"SIGILLOGRAPHY", h:"Seal study", meaning:"Analysis of wax or metal seals.", sentence:"Sigillography authenticated the royal charter.", cat:"English" },
  { w:"VEXILLOLOGY", h:"Flag study", meaning:"Research on flags and emblems.", sentence:"Vexillology examines flag symbolism.", cat:"English" },
  { w:"HERALDRY", h:"Coat of arms study", meaning:"System of hereditary symbols.", sentence:"Heraldry identified medieval knights.", cat:"English" },
  { w:"GENEALOGY", h:"Family tree study", meaning:"Tracing ancestral lines.", sentence:"Genealogy revealed royal descent.", cat:"English" },
  { w:"TOPONYMY", h:"Place name study", meaning:"Origin of geographical names.", sentence:"Toponymy explains why York is called York.", cat:"English" },
  { w:"ANTHROPONYMY", h:"Personal name study", meaning:"History of given names and surnames.", sentence:"Anthroponymy traces surname migrations.", cat:"English" },
  { w:"ONOMASTICS", h:"Name study overall", meaning:"Study of all proper names.", sentence:"Onomastics includes brand names too.", cat:"English" },
  { w:"ETYMON", h:"Original root word", meaning:"Source from which word derived.", sentence:"The etymon of 'etymology' is Greek etumon.", cat:"English" },
  { w:"DERIVATIVE", h:"Word from another", meaning:"Formed by adding affixes.", sentence:"Happiness is a derivative of happy.", cat:"English" },
  { w:"COMPOUND", h:"Two roots combined", meaning:"Word made of multiple stems.", sentence:"Toothbrush is a compound.", cat:"English" },
  { w:"CLIPPING", h:"Shortened word", meaning:"Part of longer word.", sentence:"Phone from telephone is clipping.", cat:"English" },
  { w:"BLENDING", h:"Mix two words", meaning:"Portmanteau formation.", sentence:"Smog from smoke and fog.", cat:"English" },
  { w:"REDUPLICATION", h:"Repeating sound", meaning:"Word with repeated element.", sentence:"Ping pong is reduplication.", cat:"English" },
  { w:"ECHOIC", h:"Sound imitation", meaning:"Word mimicking natural sound.", sentence:"Cuckoo is echoic.", cat:"English" },
  { w:"COINAGE", h:"Invented word", meaning:"Created without derivation.", sentence:"Google as verb is coinage.", cat:"English" },
  { w:"BORROWING", h:"Taken from other language", meaning:"Loanword adaptation.", sentence:"Piano borrowed from Italian.", cat:"English" },
  { w:"CALQUE", h:"Literal translation", meaning:"Loan translation from foreign.", sentence:"Skyscraper calques gratte ciel.", cat:"English" },
  { w:"FOLK", h:"Etymology false origin", meaning:"Popular but wrong word history.", sentence:"Folk etymology changed asparagus to sparrow grass.", cat:"English" },
  { w:"BACKRONY", h:"Made up acronym", meaning:"False acronym origin story.", sentence:"Positively no backrony for posh.", cat:"English" },
  { w:"SPOONERISM", h:"Swap initial sounds", meaning:"Phonetic slip transposing consonants.", sentence:"'Belly jeans' for jelly beans.", cat:"English" },
  { w:"MALAPROP", h:"Wrong similar word", meaning:"Humorous misuse of vocabulary.", sentence:"He is the pineapple of politeness.", cat:"English" },
  { w:"EGGCORN", h:"Respelling by sound", meaning:"Incorrect but plausible change.", sentence:"'Old timer's disease' for Alzheimer's.", cat:"English" },
  { w:"MONDEGREEN", h:"Misheard phrase", meaning:"Wrong interpretation of song lyric.", sentence:"'Excuse me while I kiss this guy' for sky.", cat:"English" },
  { w:"HAPAX", h:"Word once in corpus", meaning:"Occurs only one time in record.", sentence:"Hapax legomenon in ancient texts.", cat:"English" },
  { w:"HAPAX LEGOMENON", h:"Word once only", meaning:"From Greek hapax once legomenon said.", sentence:"Hapax legomenon difficult to define.", cat:"English" },
  { w:"DIS LEGOMENON", h:"Word twice in corpus", meaning:"Occurs exactly two times.", sentence:"Dis legomenon rare but defined by context.", cat:"English" },
  { w:"TRIS LEGOMENON", h:"Word three times in corpus", meaning:"Occurs exactly thrice.", sentence:"Tris legomenon slightly more reliable.", cat:"English" },
  { w:"HAPAXOINT", h:"Word in single author", meaning:"Occurs in only one writer.", sentence:"Hapaxoint may reflect idiolect.", cat:"English" },
  { w:"NONCE", h:"Word for one occasion", meaning:"Coined for immediate use.", sentence:"Nonce word like 'snollygoster'.", cat:"English" },
  { w:"PROTOLOGISM", h:"Extremely new word", meaning:"Recently proposed not yet accepted.", sentence:"Protologism may never catch on.", cat:"English" },
  { w:"NEONYM", h:"New name for concept", meaning:"Freshly coined term.", sentence:"Neonym 'cyberbullying' entered dictionaries.", cat:"English" },
  { w:"ARCHAISM", h:"Old fashioned expression", meaning:"Obsolete or outdated word.", sentence:"Methinks is an archaism.", cat:"English" },
  { w:"HISTORICAL", h:"Word for past thing", meaning:"Term for obsolete object.", sentence:"Horseless carriage is historical.", cat:"English" },
  { w:"REVIVAL", h:"Brought back word", meaning:"Recovered from disuse.", sentence:"Revival of 'whom' in formal writing.", cat:"English" },
  { w:"ARGOT", h:"Secret group vocabulary", meaning:"Cryptic language of subculture.", sentence:"Thieves' argot includes 'lifter' for shoplifter.", cat:"English" },
  { w:"CANT", h:"Jargon of group", meaning:"Specialized talk of profession.", sentence:"Legal cant includes 'nolle prosequi'.", cat:"English" },
  { w:"VERNACULAR", h:"Everyday common language", meaning:"Ordinary speech of region.", sentence:"The vernacular differs from literary standard.", cat:"English" },
  { w:"LINGUA", h:"Franca bridge language", meaning:"Common tongue for diverse speakers.", sentence:"English is global lingua franca.", cat:"English" },
  { w:"PIDGIN", h:"Simplified contact language", meaning:"Basic grammar reduced vocabulary.", sentence:"Tok Pisin is a pidgin.", cat:"English" },
  { w:"CREOLE", h:"Pidgin native speakers", meaning:"Stable full language from pidgin.", sentence:"Haitian Creole is a creole.", cat:"English" },
  { w:"KOINE", h:"Common dialect", meaning:"Standardized blend of varieties.", sentence:"Koine Greek spread across empire.", cat:"English" },
  { w:"DIGLOSSIA", h:"Two varieties society", meaning:"High and low language forms.", sentence:"Arabic diglossia has classical and colloquial.", cat:"English" },
  { w:"CODE", h:"Switch alternate languages", meaning:"Change language within conversation.", sentence:"Code switching common among bilinguals.", cat:"English" },
  { w:"INTERLANGUAGE", h:"Learner transitional system", meaning:"Between native and target.", sentence:"Interlanguage has systematic errors.", cat:"English" },
  { w:"FOSSILIZATION", h:"Persistent learner error", meaning:"L2 feature stops developing.", sentence:"Fossilization of 'he go' persists.", cat:"English" },
  { w:"TRANSFER", h:"L1 influence on L2", meaning:"Native language interference.", sentence:"Negative transfer causes false friends.", cat:"English" },
  { w:"CALQUED", h:"Literal translation pattern", meaning:"Borrowed semantic structure.", sentence:"'The year of light' calques anno lucis.", cat:"English" },
  { w:"FALSE", h:"Friend deceptive cognate", meaning:"Looks similar different meaning.", sentence:"Embarrassed vs embarazada (pregnant).", cat:"English" },
  { w:"FAUX AMI", h:"False friend French term", meaning:"Misleading cross language similarity.", sentence:"Faux ami 'librairie' means bookstore not library.", cat:"English" },
  { w:"PARONYM", h:"Nearly same word", meaning:"Cognate with form change.", sentence:"Paronym 'affect' and 'effect'.", cat:"English" },
  { w:"HETERONYM", h:"Same spelling different pronunciation", meaning:"Homograph with distinct sounds.", sentence:"Lead (metal) vs lead (guide).", cat:"English" },
  { w:"ALLELOMORPH", h:"Alternative form", meaning:"String in population.", sentence:"Alleles are allelomorphs.", cat:"English" },
  { w:"MORPH", h:"Variant form of morpheme", meaning:"Allomorph of plural s z iz.", sentence:"The plural has morphs.", cat:"English" },
  { w:"SUPPLETION", h:"Irregular form replacement", meaning:"Completely different root.", sentence:"Go and went are suppletion.", cat:"English" },
  { w:"REDUNDANCY", h:"Extra linguistic information", meaning:"Multiple cues same meaning.", sentence:"The plural redundancy in 'these cats'.", cat:"English" },
  { w:"GAPPING", h:"Verb omission in second clause", meaning:"Ellipsis of predicate.", sentence:"John ate an apple, and Mary an orange.", cat:"English" },
  { w:"ANAPHORA", h:"Reference to prior word", meaning:"Using pronoun for previous noun.", sentence:"Anaphora 'it' refers to 'the book'.", cat:"English" },
  { w:"CATAPHORA", h:"Reference to later word", meaning:"Pronoun before its antecedent.", sentence:"Before he left, John locked the door.", cat:"English" },
  { w:"EXOPHORA", h:"Reference outside text", meaning:"Deixis dependent on context.", sentence:"'That' pointing to visible object.", cat:"English" },
  { w:"DEIXIS", h:"Context dependent reference", meaning:"Words like here there now then.", sentence:"Deixis changes with speaker location.", cat:"English" },
  { w:"ANADEIXIS", h:"Deictic reference pointing", meaning:"Well look at this.", sentence:"Anadeixis accompanies gesture.", cat:"English" },
  { w:"DISCOURSE", h:"Extended language unit", meaning:"Conversation or longer text.", sentence:"Discourse analysis studies coherence.", cat:"English" },
  { w:"COHESION", h:"Connection within text", meaning:"Grammatical and lexical links.", sentence:"Cohesion uses pronouns conjunctions repetition.", cat:"English" },
  { w:"COHERENCE", h:"Logical text flow", meaning:"Meaningful overall structure.", sentence:"Coherence makes text understandable.", cat:"English" },
  { w:"COMMENT", h:"What said about topic", meaning:"Information added about subject.", sentence:"In 'birds fly', fly is comment.", cat:"English" },
  { w:"FOCUS", h:"New or emphasized element", meaning:"Highlighted part of sentence.", sentence:"Focus on 'Mary' in 'It was Mary who left'.", cat:"English" },
  { w:"PRESUPPOSITION", h:"Assumed background", meaning:"Information taken for granted.", sentence:"Presupposition in 'the king of France is bald'.", cat:"English" },
  { w:"IMPLICATURE", h:"Inferred meaning", meaning:"Speaker's intention beyond words.", sentence:"Implicature 'it's cold' may mean close window.", cat:"English" },
  { w:"ENTAILMENT", h:"Logical consequence", meaning:"If A true B must be true.", sentence:"'John murdered Bill' entails 'Bill died'.", cat:"English" },
  { w:"ASSERTION", h:"Stated claim", meaning:"Explicitly affirmed proposition.", sentence:"Assertion can be true or false.", cat:"English" },
  { w:"NEGATION", h:"Reversing truth value", meaning:"Not or never.", sentence:"Negation of 'all' is 'some not'.", cat:"English" },
  { w:"POLARITY", h:"Positive negative orientation", meaning:"Affirmative or negative form.", sentence:"Polarity items like 'any' in negative contexts.", cat:"English" },
  { w:"QUANTIFIER", h:"Expresses amount", meaning:"All some none many.", sentence:"Quantifier 'every' distributes over individuals.", cat:"English" },
  { w:"DETERMINER", h:"Article demonstrative possessive", meaning:"The this my some.", sentence:"Determiner appears before noun.", cat:"English" },
  { w:"ARGUMENT", h:"Participant in event", meaning:"Noun phrase required by predicate.", sentence:"Argument of 'give' is giver gift recipient.", cat:"English" },
  { w:"ADJUNCT", h:"Optional modifier", meaning:"Extra information not required.", sentence:"Adjunct 'yesterday' can be removed.", cat:"English" },
  { w:"COMPLEMENT", h:"Completes meaning", meaning:"Needed to finish phrase.", sentence:"Complement of 'put' is location.", cat:"English" },
  { w:"MODIFIER", h:"Adds descriptive detail", meaning:"Adjective or adverb phrase.", sentence:"Modifier 'red' in red car.", cat:"English" },
  { w:"HEAD", h:"Core of phrase", meaning:"Essential word without modifiers.", sentence:"Head of 'very tall' is tall.", cat:"English" },
  { w:"SPECIFIER", h:"Determiner degree word", meaning:"The very many.", sentence:"Specifier 'the' in the cat.", cat:"English" },
  { w:"NULL", h:"Empty category", meaning:"Phonetically silent element.", sentence:"Null subject in 'Go away' with implied you.", cat:"English" },
  { w:"TRACE", h:"Moved element placeholder", meaning:"Coindexed invisible copy.", sentence:"Trace in 'Who did you see t'.", cat:"English" },
  { w:"PRO", h:"Dropped pronoun", meaning:"Null pronoun in pro drop language.", sentence:"Pro in Spanish 'hablo' meaning I speak.", cat:"English" },
  { w:"GOV", h:"Relation between head and dependent", meaning:"Government syntactic case assignment.", sentence:"Verb governs its object case.", cat:"English" },
  { w:"BIND", h:"Anaphor and antecedent relation", meaning:"Same index in c command.", sentence:"Reflexive binds itself.", cat:"English" },
  { w:"CMD", h:"Node dominates and excludes others", meaning:"C command structural relation.", sentence:"Subject c commands object.", cat:"English" },
  { w:"MOVE", h:"Displacement transformation", meaning:"Move alpha to specifier.", sentence:"Move wh word to front.", cat:"English" },
  { w:"MERGE", h:"Combine two syntactic objects", meaning:"Set formation operation.", sentence:"Merge combines verb and object.", cat:"English" },
  { w:"AGREE", h:"Feature matching relation", meaning:"Subject verb agreement.", sentence:"Agree checks person number features.", cat:"English" },
  { w:"PHASE", h:"Syntactic chunk", meaning:"Cyclic domain for transfer.", sentence:"Phase CP vP for syntax.", cat:"English" },
  { w:"SPELL", h:"Out pronounceable form", meaning:"Output to phonological component.", sentence:"Spell out after phase complete.", cat:"English" },
  { w:"LFG", h:"Lexical functional grammar", meaning:"Parallel c structure f structure.", sentence:"LFG uses functional equations.", cat:"English" },
  { w:"HPSG", h:"Head driven phrase structure grammar", meaning:"Constraint based lexicalist framework.", sentence:"HPSG uses typed feature structures.", cat:"English" },
  { w:"TAGB", h:"Tree adjoining grammar", meaning:"Elementary trees composition.", sentence:"TAGB adds auxiliary tree.", cat:"English" },
  { w:"CATEG", h:"Grammar smallest units", meaning:"Minimalist category features.", sentence:"Categ feature [N] [V] [T].", cat:"English" },
  { w:"SYNT", h:"Represents parsed sentence", meaning:"Tree diagram for analysis.", sentence:"Syntax tree shows hierarchical structure.", cat:"English" },
  { w:"NODE", h:"Point in tree with label", meaning:"Position in syntactic tree.", sentence:"Node N dominates leaf.", cat:"English" },
  { w:"DOMINATE", h:"Higher node contains lower", meaning:"Tree control relation.", sentence:"VP dominates V and NP.", cat:"English" },
  { w:"SISTER", h:"Nodes sharing parent", meaning:"Two children of same node.", sentence:"Sister nodes c command each other.", cat:"English" },
  { w:"MOTHER", h:"Node directly above", meaning:"Parent in tree.", sentence:"Mother of NP is VP.", cat:"English" },
  { w:"DAUGHTER", h:"Directly below node", meaning:"Child in tree.", sentence:"NP is daughter of VP.", cat:"English" },
  { w:"SPEC", h:"Specific position", meaning:"Specifier of X bar.", sentence:"Spec of VP.", cat:"English" },
  { w:"COMP", h:"Complement of head", meaning:"Sister to head.", sentence:"Comp of V is NP.", cat:"English" },
  { w:"BAR", h:"Intermediate projection", meaning:"X one level.", sentence:"Bar level between head and phrase.", cat:"English" },
  { w:"MAXIMAL", h:"Phrase level projection", meaning:"X double bar.", sentence:"Maximal projection is XP.", cat:"English" },
  { w:"THETA", h:"Role semantic relation", meaning:"Agent patient theme.", sentence:"Theta role assigned by verb.", cat:"English" },
  { w:"PATIENT", h:"Undergoes action", meaning:"Entity affected.", sentence:"Patient in 'the window broke'.", cat:"English" },
  { w:"EXPERIENCER", h:"Sentient perceiver", meaning:"One who feels or senses.", sentence:"Experiencer in 'John fears snakes'.", cat:"English" },
  { w:"INSTRUMENT", h:"Used to perform action", meaning:"Means by which event occurs.", sentence:"Instrument in 'The key opened the door'.", cat:"English" },
  { w:"GOAL", h:"Endpoint of motion", meaning:"Destination or recipient.", sentence:"Goal in 'John went to London'.", cat:"English" },
  { w:"PATH", h:"Trajectory of motion", meaning:"Route followed.", sentence:"Path in 'John walked through the park'.", cat:"English" },
  { w:"BENEFICIARY", h:"Entity for whom action done", meaning:"Recipient of benefit.", sentence:"Beneficiary in 'John baked Mary a cake'.", cat:"English" },
  { w:"MALEFICIARY", h:"Entity harmed by action", meaning:"Adversely affected.", sentence:"Maleficiary in 'John stole money from Mary'.", cat:"English" },
  { w:"LOCATIVE", h:"Place of event", meaning:"Location.", sentence:"Locative in 'John sat on the chair'.", cat:"English" },
  { w:"TEMPORAL", h:"Time of event", meaning:"When situation occurs.", sentence:"Temporal in 'John arrived at noon'.", cat:"English" },
  { w:"CAUSAL", h:"Reason for event", meaning:"Because clause.", sentence:"Causal in 'The crash happened due to ice'.", cat:"English" },
  { w:"MANNER", h:"How event performed", meaning:"Way or style.", sentence:"Manner in 'John drove carefully'.", cat:"English" },
  { w:"ACCOMPANIMENT", h:"With whom event occurred", meaning:"Comitative.", sentence:"Accompaniment in 'John went with Mary'.", cat:"English" },
  { w:"DEPICTIVE", h:"Secondary predicate", meaning:"Describes subject during action.", sentence:"Depictive in 'John left angry'.", cat:"English" },
  { w:"RESULTATIVE", h:"Secondary predicate of outcome", meaning:"Describes object after action.", sentence:"Resultative in 'John painted the door red'.", cat:"English" },
  { w:"SMALL", h:"Clause minimal predication", meaning:"Subclause without tense.", sentence:"Small clause 'I consider John smart'.", cat:"English" },
  { w:"EXCEPTIONAL", h:"Case marking verb complement", meaning:"ECM verb raises embedded subject.", sentence:"Exceptional 'I believe John to be smart'.", cat:"English" },
  { w:"RAISING", h:"Subject moves from lower clause", meaning:"Subject of lower clause raises.", sentence:"Raising 'John seems to be smart'.", cat:"English" },
  { w:"CONTROL", h:"Subject of lower clause omitted", meaning:"PRO controlled by matrix.", sentence:"Control 'John tried to leave'.", cat:"English" },
  { w:"OBLIGATORY", h:"Control only one controller", meaning:"PRO must be bound.", sentence:"Obligatory control in 'John promised Mary to leave'.", cat:"English" },
  { w:"NONOBLIGATORY", h:"Free reference PRO", meaning:"Arbitrary or generic.", sentence:"Nonobligatory control in 'It is fun to ski'.", cat:"English" },
  { w:"GOVERNOR", h:"Head assigning case", meaning:"Governor of noun phrase.", sentence:"Verb is governor of object.", cat:"English" },
  { w:"CASE", h:"Marking of grammatical function", meaning:"Nominative accusative genitive.", sentence:"Case on NP reflects role.", cat:"English" },
  { w:"NOMINATIVE", h:"Subject case", meaning:"Marked by verb agreement.", sentence:"Nominative 'he' in 'He left'.", cat:"English" },
  { w:"ACCUSATIVE", h:"Object case", meaning:"Marked by trans verb.", sentence:"Accusative 'him' in 'I saw him'.", cat:"English" },
  { w:"GENITIVE", h:"Possessive case", meaning:"Marked by of or apostrophe s.", sentence:"Genitive 'John's' in 'John's book'.", cat:"English" },
  { w:"DATIVE", h:"Indirect object case", meaning:"Marked to or for in English.", sentence:"Dative remnant in 'give him' him is dative.", cat:"English" },
  { w:"ERGATIVE", h:"Subject of transitive marked", meaning:"Ergative absolutive alignment.", sentence:"Ergative case marks transitive subject.", cat:"English" },
  { w:"ABSOLUTIVE", h:"Object of transitive subject intransitive", meaning:"Absolutive unmarked case.", sentence:"Absolutive in ergative language.", cat:"English" },
  { w:"ACTIVE", h:"Inactive split intransitive", meaning:"Agentive vs patientive subject.", sentence:"Active language marks subject by volition.", cat:"English" },
  { w:"MORPHOSYNTAX", h:"Interface morphology syntax", meaning:"How word forms reflect structure.", sentence:"Morphosyntax includes agreement.", cat:"English" },
  { w:"AGGLUTINATING", h:"One morpheme one meaning", meaning:"Turkish type morphology.", sentence:"Agglutinating language strings suffixes.", cat:"English" },
  { w:"FUSIONAL", h:"Multiple meanings one morpheme", meaning:"Latin type portmanteau.", sentence:"Fusional case number gender combined.", cat:"English" },
  { w:"ISOLATING", h:"One word one morpheme", meaning:"Chinese type no inflection.", sentence:"Isolating language has no affixes.", cat:"English" },
  { w:"POLYSYNTHETIC", h:"Many morphemes per word", meaning:"Inuit type incorporation.", sentence:"Polysynthetic word is like sentence.", cat:"English" },
  { w:"INCORPORATION", h:"Noun merges into verb", meaning:"Noun becomes part of verb complex.", sentence:"Incorporation in 'I fish hunted' meaning I hunted fish.", cat:"English" },
  { w:"AGREEMENT", h:"Verb matches subject object", meaning:"Morphological cross referencing.", sentence:"Agreement marks person number gender.", cat:"English" },
  { w:"STEM", h:"Base for inflection", meaning:"Without affixes.", sentence:"Stem 'walk' in walking.", cat:"English" },
  { w:"INFIX", h:"Inside the stem", meaning:"Absobloomylutely.", sentence:"Infix is rare in English.", cat:"English" },
  { w:"CIRCUMFIX", h:"Around the stem", meaning:"Ge...t in German past participle.", sentence:"Circumfix not typical in English.", cat:"English" },
  { w:"INTERFIX", h:"Linking element", meaning:"-o- in speedometer.", sentence:"Interfix connects combining forms.", cat:"English" },
  { w:"COMBINING", h:"Form bound root", meaning:"Bio- meaning life.", sentence:"Combining form appears in compounds.", cat:"English" },
  { w:"ALLOMORPH", h:"Variant of morpheme", meaning:"Plural s [s] [z] [ɪz].", sentence:"Allomorphs are phonetically conditioned.", cat:"English" },
  { w:"ZERO", h:"Morpheme no sound", meaning:"Sheep plural sheep.", sentence:"Zero morpheme marks plural by absence.", cat:"English" },
  { w:"EMPTY", h:"Morpheme no meaning", meaning:"Cran in cranberry.", sentence:"Empty morpheme has no semantic content.", cat:"English" },
  { w:"BACKFORMATION", h:"Removal of affix", meaning:"Edit from editor.", sentence:"Backformation creates new base.", cat:"English" },
  { w:"APHESIS", h:"Loss of initial sound", meaning:"'cause from because.", sentence:"Aphesis occurs in rapid speech.", cat:"English" },
  { w:"APOCOPE", h:"Loss of final sound", meaning:"Info from information.", sentence:"Apocope shortens words casually.", cat:"English" },
  { w:"SYNCOPE", h:"Loss of medial sound", meaning:"Bos'n from boatswain.", sentence:"Syncope reduces syllable count.", cat:"English" },
  { w:"HAPLOLOGY", h:"Loss of repeated syllable", meaning:"Probly from probably.", sentence:"Haplology simplifies pronunciation.", cat:"English" },
  { w:"METATHESIS", h:"Sound reversal", meaning:"Asterisk said as asterix.", sentence:"Metathesis common in speech errors.", cat:"English" },
  { w:"EPENTHESIS", h:"Insertion of sound", meaning:"Hamster pronounced hampster.", sentence:"Epenthesis eases consonant clusters.", cat:"English" },
  { w:"PROTHESIS", h:"Initial sound addition", meaning:"Especial from special.", sentence:"Prothesis in some dialects.", cat:"English" },
  { w:"PARAGOGE", h:"Final sound addition", meaning:"Height pronounced heightth.", sentence:"Paragoge now nonstandard.", cat:"English" },
  { w:"ELISION", h:"Omission of sound", meaning:"Don't from do not.", sentence:"Elision marks contraction.", cat:"English" },
  { w:"CONTRACTION", h:"Shortened form", meaning:"Cannot to can't.", sentence:"Contraction common in speech.", cat:"English" },
  { w:"CLITIC", h:"Attached short form", meaning:"'ll in I'll.", sentence:"Clitic behaves like suffix but word.", cat:"English" },
  { w:"PROCLITIC", h:"Attached before", meaning:"'em in see'em.", sentence:"Proclitic attaches to following word.", cat:"English" },
  { w:"ENCLITIC", h:"Attached after", meaning:"Ve in could've.", sentence:"Enclitic attaches to preceding word.", cat:"English" },
  { w:"SANDHI", h:"Sound change across boundary", meaning:"Impossible from in+possible.", sentence:"Sandhi assimilation.", cat:"English" },
  { w:"ASSIMILATION", h:"Sound becomes similar", meaning:"Impossible from in+possible.", sentence:"Assimilation eases articulation.", cat:"English" },
  { w:"DISSIMILATION", h:"Sound becomes different", meaning:"Colonel pronounced kernel.", sentence:"Dissimilation avoids repetition.", cat:"English" },
  { w:"DELETION", h:"Sound removed", meaning:"Christmas pronounced chrismas.", sentence:"Deletion simplifies clusters.", cat:"English" },
  { w:"INSERTION", h:"Extra sound added", meaning:"Warmth pronounced warmpth.", sentence:"Insertion of plosive.", cat:"English" },
  { w:"LENITION", h:"Weakening of consonant", meaning:"Water pronounced wader.", sentence:"Lenition turns stop to flap.", cat:"English" },
  { w:"FORTITION", h:"Strengthening of consonant", meaning:"Initial p becomes aspirated.", sentence:"Fortition occurs in some contexts.", cat:"English" },
  { w:"PALATALIZATION", h:"Shift to palate", meaning:"Miss you pronounced mishoo.", sentence:"Palatalization before y sound.", cat:"English" },
  { w:"VELARIZATION", h:"Tongue toward velum", meaning:"Dark l in full.", sentence:"Velarization in coda position.", cat:"English" },
  { w:"NASALIZATION", h:"Air through nose", meaning:"Vowel before nasal.", sentence:"Nasalization in French loanwords.", cat:"English" },
  { w:"ASPIRATION", h:"Burst of air", meaning:"P in pin.", sentence:"Aspiration distinguishes pin from spin.", cat:"English" },
  { w:"VOICING", h:"Vocal cord vibration", meaning:"Difference between s and z.", sentence:"Voicing is phonemic in English.", cat:"English" },
  { w:"DEVOICING", h:"Loss of vibration", meaning:"Plural dogs said as dogz devoiced?.", sentence:"Devoicing in final position.", cat:"English" },
  { w:"SONORANT", h:"Resonant sound", meaning:"Vowels liquids nasals.", sentence:"Sonorant can be syllabic.", cat:"English" },
  { w:"OBSTRUENT", h:"Blocked airflow", meaning:"Stops fricatives affricates.", sentence:"Obstruent includes voiced and voiceless.", cat:"English" },
  { w:"STOP", h:"Complete closure", meaning:"P b t d k g.", sentence:"Stop blocks air then releases.", cat:"English" },
  { w:"FRICATIVE", h:"Continuous friction", meaning:"F v th s z sh zh h.", sentence:"Fricative hissing sound.", cat:"English" },
  { w:"AFFRICATE", h:"Stop then fricative", meaning:"Ch as in church j as in judge.", sentence:"Affricate complex consonants.", cat:"English" },
  { w:"TAP", h:"Flap sound", meaning:"Butter said with d like flap.", sentence:"Tap in American English.", cat:"English" },
  { w:"TRILL", h:"Vibrating sound", meaning:"R in Spanish.", sentence:"Trill rare in English.", cat:"English" },
  { w:"EJECTIVE", h:"Egressive glottalic", meaning:"P' in Georgian.", sentence:"Ejective not in English.", cat:"English" },
  { w:"IMPLOSIVE", h:"Ingressive glottalic", meaning:"Ɓ in Sindhi.", sentence:"Implosive not in English.", cat:"English" },
  { w:"PITCH", h:"Frequency of vibration", meaning:"High or low voice.", sentence:"Pitch varies by speaker.", cat:"English" },
  { w:"LOUDNESS", h:"Amplitude of sound", meaning:"Volume for emphasis.", sentence:"Loudness marks stress.", cat:"English" },
  { w:"DURATION", h:"Length of sound", meaning:"Long vowel vs short vowel.", sentence:"Duration phonemic in some languages.", cat:"English" },
  { w:"TIMBRE", h:"Quality of sound", meaning:"Distinguishes vowels.", sentence:"Timbre from formant structure.", cat:"English" },
  { w:"FORMANT", h:"Resonant frequency", meaning:"F1 F2 for vowels.", sentence:"Formant pattern identifies vowel.", cat:"English" },
  { w:"SPECTROGRAM", h:"Visual sound display", meaning:"Shows time frequency amplitude.", sentence:"Spectrogram reveals speech acoustics.", cat:"English" },
  { w:"WAVEFORM", h:"Amplitude over time", meaning:"Raw audio signal.", sentence:"Waveform shows loudness envelope.", cat:"English" },
  { w:"VOICED", h:"Fold vocal cord vibration", meaning:"Z v b d g.", sentence:"Voiced sounds have periodic waveform.", cat:"English" },
  { w:"VOICELESS", h:"No vibration", meaning:"S f p t k.", sentence:"Voiceless sounds aperiodic.", cat:"English" },
  { w:"SIBILANT", h:"Hissing fricative", meaning:"S z sh zh.", sentence:"Sibilant has high frequency noise.", cat:"English" },
  { w:"STRIDENT", h:"Loud fricative", meaning:"Ch j also sibilants.", sentence:"Strident acoustically intense.", cat:"English" },
  { w:"CORONAL", h:"Tongue tip blade", meaning:"Sounds made with tongue front.", sentence:"Coronal includes t d s z n l.", cat:"English" },
  { w:"GLOTTAL", h:"At vocal folds", meaning:"H and glottal stop.", sentence:"Glottal in uh oh.", cat:"English" },
  { w:"PHARYNGEAL", h:"Pharynx constriction", meaning:"Arabic ayn.", sentence:"Pharyngeal not in English.", cat:"English" },
  { w:"UVULAR", h:"Against uvula", meaning:"French r.", sentence:"Uvular not standard English.", cat:"English" },
  { w:"ALVEOLAR", h:"Alveolar ridge", meaning:"T d s z n l.", sentence:"Alveolar common English.", cat:"English" },
  { w:"DENTAL", h:"Teeth", meaning:"Th voiceless and voiced.", sentence:"Dental fricatives.", cat:"English" },
  { w:"POSTALVEOLAR", h:"Behind alveolar ridge", meaning:"Sh ch zh j.", sentence:"Postalveolar sibilants.", cat:"English" },
  { w:"RETROFLEX", h:"Tongue curled back", meaning:"Many English r.", sentence:"Retroflex approximant.", cat:"English" },
  { w:"LABIALIZED", h:"With lip rounding", meaning:"W and kw.", sentence:"Labialized velar.", cat:"English" },
  { w:"PALATALIZED", h:"With y like offglide", meaning:"Russian soft consonants.", sentence:"Palatalized not phonemic English.", cat:"English" },
  { w:"PHARYNGEALIZED", h:"Constricted pharynx", meaning:"Emphatics in Arabic.", sentence:"Pharyngealized not in English.", cat:"English" },
  { w:"GLOTTALIZED", h:"With glottal constriction", meaning:"Ejective.", sentence:"Glottalized not in English.", cat:"English" },
  { w:"CREAKY", h:"Voice laryngealized", meaning:"Vocal fry.", sentence:"Creaky voice sometimes phrase final.", cat:"English" },
  { w:"BREATHY", h:"Voice with airflow", meaning:"Whispery voice.", sentence:"Breathy voice in some English.", cat:"English" },
  { w:"MODAL", h:"Normal voice", meaning:"Regular phonation.", sentence:"Modal voice for most speech.", cat:"English" },
  { w:"FALSETTO", h:"High thin voice", meaning:"Very high pitch.", sentence:"Falsetto used for emphasis.", cat:"English" },
  { w:"WHISPER", h:"No vocal fold vibration", meaning:"Silent speech.", sentence:"Whisper used for privacy.", cat:"English" },
  { w:"MURMUR", h:"Breathy phonation", meaning:"Voice with air leak.", sentence:"Murmur in some languages.", cat:"English" },
  { w:"ORTHOGRAPHY", h:"Writing system", meaning:"Spelling conventions.", sentence:"English orthography is irregular.", cat:"English" },
  { w:"GRAPHEME", h:"Written symbol", meaning:"Letter or letter group.", sentence:"Digraph sh is one grapheme.", cat:"English" },
  { w:"ALLOGRAPH", h:"Variant letter form", meaning:"Print a vs script a.", sentence:"Allograph same grapheme.", cat:"English" },
  { w:"DIACRITIC", h:"Mark on letter", meaning:"Acute umlaut cedilla.", sentence:"Diacritic changes pronunciation.", cat:"English" },
  { w:"CURSIVE", h:"Handwriting connected", meaning:"Joined script.", sentence:"Cursive faster for long writing.", cat:"English" },
  { w:"PRINT", h:"Block letters", meaning:"Unconnected letters.", sentence:"Print easier to read for beginners.", cat:"English" },
  { w:"SCRIPT", h:"Handwriting style", meaning:"Copperplate Spencerian.", sentence:"Script varies by region era.", cat:"English" },
  { w:"CALLIGRAPHY", h:"Decorative writing", meaning:"Artistic lettering.", sentence:"Calligraphy for certificates.", cat:"English" },
  { w:"PALIMPSEST", h:"Reused parchment", meaning:"Scraped and written over.", sentence:"Palimpsest preserves erased text.", cat:"English" },
  { w:"CODEX", h:"Book form tablets", meaning:"Ancient bound pages.", sentence:"Codex replaced scroll.", cat:"English" },
  { w:"SCROLL", h:"Rolled papyrus", meaning:"Long sheet wound.", sentence:"Scroll used in ancient times.", cat:"English" },
  { w:"INCIPIT", h:"Opening words", meaning:"First words of manuscript.", sentence:"Incipit used as title.", cat:"English" },
  { w:"EXPLICIT", h:"End of manuscript", meaning:"Final words closing.", sentence:"Explicit sometimes includes scribe name.", cat:"English" },
  { w:"ILLUMINATION", h:"Decorated manuscript", meaning:"Gold leaf painted initial.", sentence:"Illumination in medieval books.", cat:"English" },
  { w:"MARGINALIA", h:"Notes in margin", meaning:"Comments written by readers.", sentence:"Marginalia by Coleridge famous.", cat:"English" },
  { w:"GLOSS", h:"Explanatory note", meaning:"Translation or comment.", sentence:"Gloss between lines or in margin.", cat:"English" },
  { w:"ANCHOR", h:"Symbol linking note", meaning:"Reference mark to footnote.", sentence:"Anchor asterisk dagger.", cat:"English" },
  { w:"OBELISK", h:"Reference mark", meaning:"Obsolete dagger symbol.", sentence:"Obelisk used in early printing.", cat:"English" },
  { w:"SECTION", h:"Chapter subdivision", meaning:"§ symbol.", sentence:"Section break in legal texts.", cat:"English" },
  { w:"ASTERISK", h:"Star symbol", meaning:"* marks footnote.", sentence:"Asterisk first reference mark.", cat:"English" },
  { w:"DAGGER", h:"Symbol for note", meaning:"† second reference.", sentence:"Dagger used after asterisk.", cat:"English" },
  { w:"CHAPTER", h:"Major division", meaning:"Numbered or titled.", sentence:"Chapter ends with cliffhanger.", cat:"English" },
  { w:"VOLUME", h:"Book in series", meaning:"Physical tome.", sentence:"Volume three of encyclopedia.", cat:"English" },
  { w:"EDITION", h:"Published version", meaning:"Revised or corrected printing.", sentence:"Second edition fixed errors.", cat:"English" },
  { w:"IMPRESSION", h:"Printing batch", meaning:"Run from same plates.", sentence:"First impression sold out.", cat:"English" },
  { w:"REPRINT", h:"Reissue of same edition", meaning:"Unchanged new printing.", sentence:"Reprint fixes typos only.", cat:"English" },
  { w:"FACSIMILE", h:"Exact copy", meaning:"Reproduction of original.", sentence:"Facsimile of Gutenberg Bible.", cat:"English" },
  { w:"TRANSCRIPT", h:"Written copy of spoken", meaning:"Verbatim text.", sentence:"Transcript of interview.", cat:"English" },
  { w:"TRANSLATION", h:"Converted language", meaning:"From source to target.", sentence:"Translation of Russian novel.", cat:"English" },
  { w:"TRANSLITERATION", h:"Letter by letter mapping", meaning:"Greek to Latin.", sentence:"Transliteration of Cyrillic.", cat:"English" },
  { w:"ROMANIZATION", h:"Latin alphabet conversion", meaning:"Kana to romaji.", sentence:"Romanization of Japanese.", cat:"English" },
  { w:"IDEOGRAM", h:"Picture of idea", meaning:"! @ # $ %.", sentence:"Ideogram conveys meaning directly.", cat:"English" },
  { w:"HIEROGLYPH", h:"Egyptian symbol", meaning:"Sacred carving.", sentence:"Hieroglyph phonogram ideogram.", cat:"English" },
  { w:"GLYPH", h:"Carved symbol", meaning:"Maya or cuneiform.", sentence:"Glyph in stone.", cat:"English" },
  { w:"CUNEIFORM", h:"Wedge shaped script", meaning:"Mesopotamian writing.", sentence:"Cuneiform on clay tablets.", cat:"English" },
  { w:"RUNIC", h:"Germanic alphabet", meaning:"Elder futhark.", sentence:"Runic inscription on stone.", cat:"English" },
  { w:"OGHAM", h:"Early irish script", meaning:"Lines carved on edge.", sentence:"Ogham on standing stones.", cat:"English" },
  { w:"BRAILLE", h:"Raised dot system", meaning:"For blind reading.", sentence:"Braille cell six dots.", cat:"English" },
  { w:"MORSE", h:"Dot dash code", meaning:"Telegraph signaling.", sentence:"Morse code SOS.", cat:"English" },
  { w:"SEMAPHORE", h:"Flag position code", meaning:"Arm signals.", sentence:"Semaphore used at sea.", cat:"English" },
  { w:"SIGN", h:"Language gestural", meaning:"Visual manual communication.", sentence:"ASL is sign language.", cat:"English" },
  { w:"GESTURE", h:"Body movement meaning", meaning:"Thumbs up.", sentence:"Gesture varies by culture.", cat:"English" },
  { w:"EMBLEM", h:"Conventional gesture", meaning:"Peace sign V.", sentence:"Emblem replaces words.", cat:"English" },
  { w:"FACIAL", h:"Expression emotion", meaning:"Smile frown raised brow.", sentence:"Facial expression accompanies speech.", cat:"English" },
  { w:"PROXEMICS", h:"Spatial distance", meaning:"Personal space.", sentence:"Proxemics varies culture.", cat:"English" },
  { w:"HAPTICS", h:"Touch communication", meaning:"Handshake pat hug.", sentence:"Haptics conveys affect.", cat:"English" },
  { w:"KINESICS", h:"Body movement study", meaning:"Posture gesture gait.", sentence:"Kinesics includes eye contact.", cat:"English" },
  { w:"EYE", h:"Contact gaze", meaning:"Looking at others.", sentence:"Eye contact shows engagement.", cat:"English" },
  { w:"PARALANGUAGE", h:"Non verbal voice", meaning:"Pitch loudness speed.", sentence:"Paralanguage conveys emotion.", cat:"English" },
  { w:"TURN", h:"Taking conversation", meaning:"Alternating speakers.", sentence:"Turn taking avoids overlap.", cat:"English" },
  { w:"REPAIR", h:"Fixing conversation", meaning:"Uh I mean correction.", sentence:"Repair strategy in dialogue.", cat:"English" },
  { w:"BACKCHANNEL", h:"Listener response", meaning:"Uh huh mm hmm.", sentence:"Backchannel shows listening.", cat:"English" },
  { w:"ADJACENCY", h:"Pair of utterances", meaning:"Question answer greeting response.", sentence:"Adjacency pair basic dialogue unit.", cat:"English" },
  { w:"PREFERENCE", h:"Organization of response", meaning:"Preferred vs dispreferred.", sentence:"Preference for agreement.", cat:"English" },
  { w:"FACE", h:"Positive social self", meaning:"Politeness theory.", sentence:"Face threatening act.", cat:"English" },
  { w:"POLITENESS", h:"Mitigating imposition", meaning:"Please thank you sorry.", sentence:"Politeness respects face.", cat:"English" },
  { w:"SOLIDARITY", h:"Showing in groupness", meaning:"Using first names slang.", sentence:"Solidarity reduces social distance.", cat:"English" },
  { w:"POWER", h:"Hierarchy in language", meaning:"Deference titles.", sentence:"Power asymmetry in address.", cat:"English" },
  { w:"ETHNOLECT", h:"Ethnic group variety", meaning:"Chicano English.", sentence:"Ethnolect marks identity.", cat:"English" },
  { w:"GENDERLECT", h:"Gender based variety", meaning:"Women's vs men's speech.", sentence:"Genderlect differences in politeness.", cat:"English" },
  { w:"AGE", h:"Grade variety", meaning:"Teen slang.", sentence:"Shifting language across lifespan.", cat:"English" },
  { w:"CONTINUUM", h:"Post creole spectrum", meaning:"Basilect mesolect acrolect.", sentence:"Continuum to standard.", cat:"English" },
  { w:"STANDARD", h:"Prestige variety", meaning:"Educated usage.", sentence:"Standard English taught in school.", cat:"English" },
  { w:"PRESCRIPTIVE", h:"Dictating correct usage", meaning:"Don't split infinitives.", sentence:"Prescriptive grammar rules.", cat:"English" },
  { w:"DESCRIPTIVE", h:"Observing actual usage", meaning:"They for singular they.", sentence:"Descriptive reports variation.", cat:"English" },
  { w:"CORPUS", h:"Large text collection", meaning:"BNC COCA.", sentence:"Corpus studies frequency patterns.", cat:"English" },
  { w:"COLLOCATION", h:"Words co occur", meaning:"Strong coffee powerful engine.", sentence:"Collocation pair.", cat:"English" },
  { w:"N GRAM", h:"Sequence of n items", meaning:"Bigram trigram.", sentence:"N gram language model.", cat:"English" },
  { w:"LEMMA", h:"Citation form", meaning:"Run includes runs running.", sentence:"Lemma dictionary headword.", cat:"English" },
  { w:"TAGGER", h:"Part of speech marker", meaning:"Labeling words.", sentence:"POS tagger disambiguates.", cat:"English" },
  { w:"PARSER", h:"Sentence structure analyzer", meaning:"Syntax tree.", sentence:"Parser uses grammar rules.", cat:"English" },
  { w:"CHUNK", h:"Phrase detection", meaning:"Noun phrase verb phrase.", sentence:"Chunker extracts phrases.", cat:"English" },
  { w:"SEMANTIC", h:"Role labeler", meaning:"Agent patient.", sentence:"Semantic role labeling.", cat:"English" },
  { w:"COREFERENCE", h:"Anaphora resolution", meaning:"He she it.", sentence:"Coreference links pronouns.", cat:"English" },
  { w:"WORDNET", h:"Lexical database", meaning:"Synsets hypernyms.", sentence:"WordNet used in NLP.", cat:"English" },
  { w:"SENTIMENT", h:"Opinion detection", meaning:"Positive negative neutral.", sentence:"Sentiment analysis of reviews.", cat:"English" },
  { w:"EMOTION", h:"Affect recognition", meaning:"Anger joy sadness.", sentence:"Emotion detection from text.", cat:"English" },
  { w:"ENGLISH", h:"Final category word", meaning:"End of English vocabulary.", sentence:"English completes 1000 words.", cat:"English" },
  ],
};

const MAX_GUESSES = 6;
const KEYBOARD_ROWS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["ENTER","Z","X","C","V","B","N","M","⌫"],
];

const REVEAL_COUNT: Record<Difficulty,number> = { beginner:3, easy:2, medium:1, expert:0 };
const DIFF_INFO: Record<Difficulty,{label:string;color:string;desc:string}> = {
  beginner: { label:"Beginner", color:"bg-green-100 text-green-700", desc:"3 letters revealed · Hint always shown" },
  easy:     { label:"Easy",     color:"bg-teal-100 text-teal-700",   desc:"2 letters revealed · Hint always shown" },
  medium:   { label:"Medium",   color:"bg-amber-100 text-amber-700", desc:"1 letter revealed · Hint always shown"  },
  expert:   { label:"Expert",   color:"bg-red-100 text-red-700",     desc:"No letters revealed · Hint always shown" },
};
const STREAK_LEVELS: [number,Difficulty][] = [[0,"beginner"],[4,"easy"],[8,"medium"],[14,"expert"]];

function getDiff(streak:number):Difficulty {
  let d:Difficulty="beginner";
  for(const [t,v] of STREAK_LEVELS) if(streak>=t) d=v;
  return d;
}
function getAllWords():WordEntry[]{ return [...WORDS.math,...WORDS.science,...WORDS.english]; }
function getRndPos(len:number,count:number):number[]{
  return [...Array(len).keys()].sort(()=>Math.random()-0.5).slice(0,count);
}
function scoreGuess(guess:string,word:string):CellState[]{
  const res:CellState[]=Array(word.length).fill("absent");
  const wa=word.split(""), ga=guess.split("");
  ga.forEach((c,i)=>{ if(c===wa[i]){res[i]="correct";wa[i]="";ga[i]="";} });
  ga.forEach((c,i)=>{ if(!c)return; const x=wa.indexOf(c); if(x!==-1){res[i]="present";wa[x]="";} });
  return res;
}

const cellStyle:Record<CellState,string>={
  correct: "bg-teal-600 border-teal-700 text-white",
  present: "bg-amber-500 border-amber-600 text-white",
  absent:  "bg-gray-600 border-gray-700 text-white",
  revealed:"bg-indigo-100 border-indigo-400 text-indigo-800",
};
const keyStyle:Record<KeyState,string>={
  unused:"bg-gray-200 text-gray-800", correct:"bg-teal-600 text-white",
  present:"bg-amber-500 text-white",  absent:"bg-gray-500 text-white",
};

// ── How to Play Modal ─────────────────────────────────────────────────────────
function HowToPlay({onClose}:{onClose:()=>void}){
  return(
    <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center" onClick={onClose}>
      <div
        className="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col"
        style={{ maxHeight: "90vh" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Fixed header */}
        <div className="flex justify-between items-center px-5 pt-5 pb-3 border-b border-gray-100 flex-shrink-0">
          <h2 className="text-lg font-black text-gray-900">How to Play</h2>
          <button onClick={onClose} className="text-gray-400 text-2xl font-bold leading-none w-8 h-8 flex items-center justify-center hover:text-gray-600">×</button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-5 py-4 space-y-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            Guess the hidden <strong>education word</strong> in <strong>up to 6 tries</strong>.
            Words can be <strong>3 to 15 letters</strong> long. Some letters are revealed to help you!
          </p>

          {/* Color guide */}
          <div className="space-y-2">
            {[
              {cls:"bg-indigo-100 border-indigo-400 text-indigo-800", label:"🔵 Revealed", desc:"Given to you as a free clue"},
              {cls:"bg-teal-600 border-teal-700 text-white",           label:"🟩 Correct",  desc:"Right letter, right position"},
              {cls:"bg-amber-500 border-amber-600 text-white",         label:"🟨 Present",  desc:"Right letter, wrong position"},
              {cls:"bg-gray-600 border-gray-700 text-white",           label:"⬛ Absent",   desc:"Letter not in the word"},
            ].map(x=>(
              <div key={x.label} className="flex items-center gap-3">
                <div className={`${x.cls} border-2 w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-black text-xs`}>A</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{x.label}</p>
                  <p className="text-gray-500 text-xs">{x.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Difficulty */}
          <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-xl p-3 border border-gray-100">
            <p className="text-xs font-bold text-gray-700 mb-2">🔥 Difficulty Progression</p>
            <div className="space-y-1.5">
              {(Object.entries(DIFF_INFO) as [Difficulty, typeof DIFF_INFO[Difficulty]][]).map(([d, info]) => (
                <div key={d} className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${info.color}`}>{info.label}</span>
                  <span className="text-xs text-gray-500">{info.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2 italic">Hint is always shown. Streak rises → fewer letters revealed!</p>
          </div>

          {/* Tips */}
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs font-bold text-gray-700 mb-2">💡 Tips</p>
            <ul className="text-xs text-gray-600 space-y-1.5">
              <li>📱 <strong>Mobile:</strong> Tap the active row to open your keyboard</li>
              <li>⌨️ <strong>Desktop:</strong> Just start typing!</li>
              <li>📖 <strong>After winning:</strong> Learn the word meaning + example</li>
              <li>🔥 <strong>Build streak</strong> to reach Expert level!</li>
              <li>📏 <strong>Words vary:</strong> 4, 5 or 6 letters</li>
            </ul>
          </div>
        </div>

        {/* Fixed sticky button at bottom — always visible */}
        <div className="px-5 py-4 border-t border-gray-100 flex-shrink-0 bg-white sm:rounded-b-2xl">
          <button onClick={onClose} className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold text-base"
            style={{ boxShadow: "0 4px 0 #0F6E56" }}>
            Let's Play! 🎮
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Guess History Row ─────────────────────────────────────────────────────────
function HistoryRow({row,wordLen}:{row:GuessRow;wordLen:number}){
  const sz = wordLen > 5 ? 36 : wordLen > 4 ? 40 : 44;
  return(
    <div className="flex gap-1.5 justify-center">
      {Array(wordLen).fill(0).map((_,i)=>(
        <div key={i} className={`flex items-center justify-center border-2 rounded-xl font-black uppercase text-white ${cellStyle[row.results[i]]}`}
          style={{width:sz,height:sz,fontSize:sz*0.45}}>
          {row.letters[i]}
        </div>
      ))}
    </div>
  );
}

// ── Active Input Row ──────────────────────────────────────────────────────────
function ActiveRow({current,word,revealedPos,shake,onClick}:{current:string;word:string;revealedPos:number[];shake:boolean;onClick:()=>void}){
  const wordLen=word.length;
  const sz = wordLen > 5 ? 44 : wordLen > 4 ? 50 : 56;
  const fs = wordLen > 5 ? 20 : wordLen > 4 ? 22 : 24;
  return(
    <div className={`flex gap-2 justify-center cursor-pointer ${shake?"animate-bounce":""}`} onClick={onClick}>
      {Array(wordLen).fill(0).map((_,i)=>{
        const isRevealed = revealedPos.includes(i) && !current[i];
        const letter = current[i] || (isRevealed ? word[i] : "");
        const hasLetter = !!current[i];
        return(
          <div key={i}
            className={`flex items-center justify-center border-2 rounded-xl font-black uppercase transition-all
              ${isRevealed?"bg-indigo-100 border-indigo-400 text-indigo-800":
                hasLetter?"bg-white border-gray-700 text-gray-900 scale-105":"bg-white border-gray-300 text-gray-900"}`}
            style={{width:sz,height:sz,fontSize:fs}}>
            {letter}
          </div>
        );
      })}
    </div>
  );
}

// ── Word Meaning Card ─────────────────────────────────────────────────────────
function MeaningCard({entry,streak}:{entry:WordEntry;streak:number}){
  return(
    <div className="bg-gradient-to-b from-teal-50 to-white border border-teal-100 rounded-2xl p-5">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">📖</span>
        <div>
          <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider">{entry.cat}</p>
          <p className="text-2xl font-black text-gray-900 tracking-widest">{entry.w}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="bg-white rounded-xl p-4 border border-teal-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">📌 Meaning</p>
          <p className="text-sm text-gray-700 leading-relaxed">{entry.meaning}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-teal-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">✏️ Example Sentence</p>
          <p className="text-sm text-gray-600 leading-relaxed italic">"{entry.sentence}"</p>
        </div>
      </div>
      <p className="text-center text-xs text-teal-600 font-semibold mt-3">
        🔥 Streak: {streak} · {getDiff(streak) === "expert"?"Expert Mode 💀":
          `Next level at streak ${STREAK_LEVELS.find(([t])=>t>streak)?.[0] ?? "∞"}`}
      </p>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function WordWiseGame(){
  const [category,setCategory]=useState<Category>("all");
  const [entry,setEntry]=useState<WordEntry|null>(null);
  const [revealedPos,setRevealedPos]=useState<number[]>([]);
  const [guesses,setGuesses]=useState<GuessRow[]>([]);
  const [current,setCurrent]=useState("");
  const [keyStates,setKeyStates]=useState<Record<string,KeyState>>({});
  const [message,setMessage]=useState("");

  const [gameWon,setGameWon]=useState(false);
  const [gameLost,setGameLost]=useState(false);
  const [score,setScore]=useState(0);
  const [wins,setWins]=useState(0);
  const [streak,setStreak]=useState(0);
  const [difficulty,setDifficulty]=useState<Difficulty>("beginner");
  const [shake,setShake]=useState(false);
  const [showHow,setShowHow]=useState(false);
  const inputRef=useRef<HTMLInputElement>(null);

  const word=entry?.w.toUpperCase()??"";

  const newGame=useCallback((cat:Category=category,str:number=streak)=>{
    const pool=cat==="all"?getAllWords():WORDS[cat]??getAllWords();
    const pick=pool[Math.floor(Math.random()*pool.length)];
    const diff=getDiff(str);
    const revCount=REVEAL_COUNT[diff];
    const rev=getRndPos(pick.w.length,revCount);
    setEntry(pick); setRevealedPos(rev); setDifficulty(diff);
    setGuesses([]); setCurrent(""); setMessage("");
    setGameWon(false); setGameLost(false);
    const ks:Record<string,KeyState>={};
    rev.forEach(i=>{ks[pick.w[i]]="correct";});
    setKeyStates(ks);
    setTimeout(()=>inputRef.current?.focus(),100);
  },[category,streak]);

  useEffect(()=>{ newGame("all",0); setShowHow(true); },[]);

  const showMsg=(msg:string)=>{setMessage(msg);setTimeout(()=>setMessage(""),2500);};

  const pressKey=useCallback((key:string)=>{
    if(!entry||gameWon||gameLost) return;
    if(key==="⌫"||key==="BACKSPACE"){setCurrent(c=>c.slice(0,-1));return;}
    if(key==="ENTER"){
      if(current.length<word.length){
        setShake(true);setTimeout(()=>setShake(false),500);
        showMsg(`Need ${word.length} letters!`);return;
      }
      const results=scoreGuess(current,word);
      const row:GuessRow={letters:current.split(""),results};
      const newGuesses=[...guesses,row];
      setGuesses(newGuesses);
      const nk={...keyStates};
      current.split("").forEach((ch,i)=>{
        const r=results[i];
        if(r==="correct") nk[ch]="correct";
        else if(r==="present"&&nk[ch]!=="correct") nk[ch]="present";
        else if(!nk[ch]) nk[ch]="absent";
      });
      setKeyStates(nk); setCurrent("");
      if(results.every(r=>r==="correct")){
        const bonus=Math.max(0,(MAX_GUESSES-newGuesses.length)*20);
        const dBonus={beginner:0,easy:10,medium:20,expert:50}[difficulty];
        const earned=100+bonus+dBonus;
        const ns=streak+1;
        setScore(s=>s+earned); setWins(w=>w+1); setStreak(ns); setGameWon(true);
        const nd=getDiff(ns);
        if(nd!==difficulty) showMsg(`🎉 Level Up! Now ${DIFF_INFO[nd].label}! +${earned} pts`);
        else showMsg(`🎉 ${["Genius!","Amazing!","Excellent!","Great!","Good!","Phew!"][newGuesses.length-1]||"Well done!"} +${earned} pts`);
      } else if(newGuesses.length>=MAX_GUESSES){
        setStreak(0); setGameLost(true); setDifficulty("beginner");
        showMsg(`The word was: ${word}`);
      }
      return;
    }
    if(/^[A-Za-z]$/.test(key)&&current.length<word.length) setCurrent(c=>c+key.toUpperCase());
  },[entry,gameWon,gameLost,current,word,guesses,keyStates,difficulty,streak]);

  useEffect(()=>{
    const h=(e:KeyboardEvent)=>{
      if(e.key==="Backspace") pressKey("BACKSPACE");
      else if(e.key==="Enter") pressKey("ENTER");
      else if(/^[A-Za-z]$/.test(e.key)) pressKey(e.key.toUpperCase());
    };
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[pressKey]);

  const diffInfo=DIFF_INFO[difficulty];
  const attemptsLeft=MAX_GUESSES-guesses.length;

  return(
    <>
      <input ref={inputRef} className="sr-only" onChange={()=>{}}
        autoCapitalize="off" autoCorrect="off" autoComplete="off" spellCheck={false} aria-hidden="true"/>
      {showHow&&<HowToPlay onClose={()=>setShowHow(false)}/>}

      <div className="space-y-4">
        {/* Stats + How to Play */}
        <div className="flex gap-3 items-stretch">
          <div className="grid grid-cols-3 gap-2 flex-1">
            {[["Score",score],["Wins",wins],["Streak",streak]].map(([l,v])=>(
              <div key={l} className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100">
                <p className="text-xl font-bold text-gray-900">{v}</p>
                <p className="text-xs text-gray-500">{l}</p>
              </div>
            ))}
          </div>
          <button onClick={()=>setShowHow(true)} className="bg-teal-50 border border-teal-100 text-teal-700 rounded-xl px-3 py-2 text-xs font-bold hover:bg-teal-100 flex flex-col items-center justify-center gap-1">
            <span>❓</span><span className="whitespace-nowrap">How to Play</span>
          </button>
        </div>

        {/* Difficulty + word info */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${diffInfo.color}`}>{diffInfo.label}</span>
            {entry&&<span className="text-xs text-gray-500 font-medium">{entry.cat} · {word.length} letters · {attemptsLeft} tries left</span>}
          </div>
          {revealedPos.length>0&&(
            <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-1 rounded-full border border-indigo-100">
              🔵 {revealedPos.length} letter{revealedPos.length>1?"s":""} revealed
            </span>
          )}
        </div>

        {/* Category selector */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {(["all","math","science","english"] as Category[]).map(cat=>(
            <button key={cat} onClick={()=>{setCategory(cat);newGame(cat,streak);}}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border whitespace-nowrap transition-all
                ${category===cat?"bg-teal-600 text-white border-teal-700":"border-gray-200 text-gray-500 hover:border-teal-300"}`}>
              {cat==="all"?"🌐 All":cat==="math"?"🧮 Math":cat==="science"?"🔬 Science":"📝 English"}
            </button>
          ))}
          <button onClick={()=>newGame(category,streak)} className="px-3 py-1.5 rounded-full text-xs font-bold border border-gray-200 text-gray-500 hover:border-gray-400 whitespace-nowrap">↻ New</button>
        </div>

        {/* ── ACTIVE INPUT ROW ── */}
        {!gameWon&&!gameLost&&(
          <div className="bg-white border-2 border-teal-200 rounded-2xl p-5 shadow-sm">
            <p className="text-center text-xs text-gray-400 mb-3 font-semibold">
              📱 Tap boxes to type with keyboard · ⌨️ Or type directly
            </p>
            <ActiveRow current={current} word={word} revealedPos={revealedPos} shake={shake} onClick={()=>inputRef.current?.focus()}/>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-gray-400">{current.length}/{word.length} letters</span>
              <button onClick={()=>pressKey("ENTER")} disabled={current.length<word.length}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${current.length===word.length?"bg-teal-600 text-white hover:bg-teal-700":"bg-gray-100 text-gray-400 cursor-not-allowed"}`}
                style={current.length===word.length?{boxShadow:"0 3px 0 #0F6E56"}:{}}>
                Submit →
              </button>
            </div>
          </div>
        )}

        {/* ── PREVIOUS GUESSES ── */}
        {guesses.length>0&&(
          <div className="space-y-2">
            <p className="text-xs text-gray-400 font-semibold text-center">Previous Guesses ({guesses.length}/{MAX_GUESSES})</p>
            {[...guesses].reverse().map((g,i)=>(
              <HistoryRow key={i} row={g} wordLen={word.length}/>
            ))}
          </div>
        )}

        {/* Message */}
        {message&&(
          <div className="text-center py-2 px-4 bg-gray-900 text-white rounded-full text-sm font-semibold">
            {message}
          </div>
        )}

                {/* Hint — always visible */}
        {!gameWon&&!gameLost&&entry&&(
          <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex items-start gap-2">
            <span className="text-lg flex-shrink-0">💡</span>
            <div>
              <p className="text-xs font-bold text-amber-700 mb-0.5">Hint</p>
              <p className="text-sm text-amber-800 leading-relaxed">{entry.h}</p>
            </div>
          </div>
        )}
        {/* Word meaning card — shown on BOTH win AND lose */}
        {(gameWon||gameLost)&&entry&&(
          <>
            {gameLost&&(
              <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center">
                <p className="text-2xl mb-1">😢</p>
                <p className="text-sm text-red-600 font-semibold mb-1">Better luck next time!</p>
                <p className="text-xs text-red-400">The word was — learn it for next time 👇</p>
              </div>
            )}
            <MeaningCard entry={entry} streak={streak}/>

            {/* Share Score — only on win */}
            {gameWon&&(
              <ShareScore
                score={score}
                gameName="WordWise"
                gameEmoji="🔤"
                detail={`Guessed "${entry.w}" · Streak: ${streak} · ${DIFF_INFO[getDiff(streak)].label}`}
                gameUrl="/games/word-puzzle"
              />
            )}

            <button onClick={()=>newGame(category,gameWon?streak:0)}
              className={`w-full py-3 rounded-xl font-bold text-base text-white ${gameWon?"bg-teal-600":"bg-gray-700"}`}
              style={{boxShadow:gameWon?"0 4px 0 #0F6E56":"0 4px 0 #333"}}>
              {gameWon?`🎉 Next Word → (${DIFF_INFO[getDiff(streak)].label})`:"🔄 Try Another Word"}
            </button>
          </>
        )}

        {/* Keyboard */}
        <div className="flex flex-col gap-1.5 items-center pt-1">
          {KEYBOARD_ROWS.map((row,ri)=>(
            <div key={ri} className="flex gap-1">
              {row.map(key=>(
                <button key={key} onClick={()=>pressKey(key)}
                  className={`${key.length>1?"px-2 text-xs":"w-8"} h-11 rounded-lg font-bold text-sm transition-all active:translate-y-0.5 select-none ${keyStyle[keyStates[key]||"unused"]}`}
                  style={{boxShadow:"0 3px 0 rgba(0,0,0,0.15)",minWidth:key.length>1?48:32}}>
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Progress */}
        {streak>0&&(
          <p className="text-center text-xs text-gray-400">
            {streak>=14?"💀 Expert — No letters revealed":
             streak>=8?`🟡 Medium — ${14-streak} wins to Expert`:
             streak>=4?`🟢 Easy — ${8-streak} wins to Medium`:
             `🌱 Beginner — ${4-streak} wins to Easy`}
          </p>
        )}
      </div>
    </>
  );
}