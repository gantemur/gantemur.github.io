const pde2Topics = [
  "Cauchy-Kovalevskaya theorem, Holmgren's theorem, and characteristic surfaces",
  "Distributions, convolution, Fourier transform, and fundamental solutions",
  "Constant coefficient operators, hypoellipticity, and the Malgrange-Ehrenpreis theorem",
  "Ellipticity, parabolicity, hyperbolicity, and well-posedness",
  "Sobolev spaces, semilinear evolution equations, and applications to Navier-Stokes type problems"
];

const pde2Books = [
  "Gerald B. Folland, Introduction to partial differential equations. Princeton, 1995.",
  "Gregory I. Eskin, Lectures on linear partial differential equations. AMS, 2011.",
  "Joseph Wloka, Partial differential equations. Cambridge, 1987.",
  "Francois Treves, Basic linear partial differential equations. Dover, 2006."
];

const pde1Books = [
  "Lawrence C. Evans, Partial differential equations. AMS, 1998.",
  "Fritz John, Partial differential equations. Springer, 1982.",
  "Jurgen Jost, Partial differential equations. Springer, 2007.",
  "Qing Han, A basic course in partial differential equations. AMS, 2011."
];

const grBooks = [
  "Stephen Hawking and George Ellis, The large scale structure of space-time. Cambridge, 1973.",
  "Robert Wald, General relativity. University of Chicago, 1984.",
  "Barrett O'Neill, Semi-Riemannian geometry. Academic Press, 1983."
];

module.exports = {
  math567f21: {
    overview: [
      "Graduate functional analysis course covering Banach and Hilbert spaces, weak convergence, compact operators, Fredholm theory, and spectral theory.",
      "The recovered archive includes a full topic schedule, planned topics, recommended books, and the assessment structure."
    ],
    plannedTopics: [
      "Hahn-Banach theorem and duality",
      "Weak and weak-star convergence",
      "Bounded linear operators in Banach spaces",
      "Compact operators and Fredholm theory",
      "Spectral theory of bounded self-adjoint operators",
      "Rudiments of locally convex spaces and unbounded operators",
      "Semigroups, if time permits"
    ],
    books: [
      "Barbara MacCluer, Elementary Functional Analysis. Springer.",
      "Martin Schechter, Principles of Functional Analysis. AMS.",
      "Peter Lax, Functional Analysis. Wiley."
    ],
    schedule: [
      ["R 9/2", "Introduction. Weierstrass existence theorem."],
      ["T 9/7", "Finite dimensional spaces. Riesz lemma. Uniform convexity."],
      ["R 9/9", "Hilbert spaces. Projection. Riesz representation."],
      ["T 9/14", "Sobolev spaces. Strong derivatives."],
      ["R 9/16", "Mollifiers. Du Bois-Reymond lemma. Weak derivatives."],
      ["T 9/21", "Meyers-Serrin theorem. Sobolev lemma. Regularity."],
      ["R 9/23", "Neumann problems. Rellich lemma. Complex scalars."],
      ["T 9/28", "Orthonormal bases."],
      ["R 9/30", "Fourier bases."],
      ["T 10/5", "Sturm-Liouville problems. Resolvent formalism."],
      ["R 10/7", "Hilbert-Schmidt theory."],
      ["F 10/15", "Gelfand triples. Singular Sturm-Liouville problems."],
      ["T 10/19", "Functional calculus. Evolution equations."],
      ["R 10/21", "Seminorms. Local spaces. Tempered distributions."],
      ["T 10/26", "Hahn-Banach theorem."],
      ["R 10/28", "Milman-Pettis theorem."],
      ["T 11/2", "Weak convergence. Uniform boundedness principle."],
      ["R 11/4", "Banach-Alaoglu theorem."],
      ["T 11/9", "Tychonov's theorem. Consequences of the open mapping theorem."],
      ["R 11/11", "Open mapping theorem. Bounded below property. Range closedness."],
      ["T 11/16", "Closed range theorem."],
      ["R 11/18", "Inf-sup conditions. Saddle point problems."],
      ["T 11/23", "Perturbations of invertible operators. Fredholm alternative."],
      ["R 11/25", "Compact operators."],
      ["T 11/30", "Riesz-Schauder theory. Fredholm operators. Regularizers."],
      ["R 12/2", "Perturbations of Fredholm operators. Bounded self-adjoint operators."]
    ],
    assignments: [
      "Homework assignments, a take-home midterm exam, and a course project."
    ],
    archiveNote: "The public archive records the schedule and course structure; course-management homework files are not included."
  },

  math325w22: {
    overview: [
      "Honours ordinary differential equations course on first and second order equations, Laplace transforms, series solutions, stability, and boundary value problems."
    ],
    plannedTopics: [
      "First order equations",
      "Second order linear equations",
      "Power series solutions and Frobenius method",
      "Phase space, linearization, stability, and perturbation",
      "Second order linear boundary value problems",
      "Calculus of variations, if time permits",
      "Sturm-Liouville theory, if time permits"
    ],
    books: [
      "Garrett Birkhoff and Gian-Carlo Rota, Ordinary differential equations. Wiley.",
      "William E. Boyce, Richard C. DiPrima, and Douglas B. Meade, Elementary differential equations. Wiley.",
      "Dennis G. Zill and Warren S. Wright, Differential equations. Cengage.",
      "William F. Trench, Elementary differential equations. Trinity."
    ],
    schedule: [
      ["R 1/6", "Introduction. IVP. BVP. Examples. Classifications. Complex exponentials."],
      ["T 1/11", "Constant coefficient first order linear equations. Uniqueness. Stability. Duhamel's principle."],
      ["R 1/13", "Constant coefficient second order homogeneous equations. Uniqueness. Fundamental set."],
      ["T 1/18", "Wronskian. Abel's formula. Stability. Inhomogeneity. Undetermined coefficients."],
      ["R 1/20", "Variation of parameters. Forced oscillators. Transfer function."],
      ["T 1/25", "Discontinuous source functions. Laplace transform."],
      ["R 1/27", "Laplace transform table. Dirac's delta."],
      ["T 2/1", "Euler-Cauchy equations. First and second order cases. Abel's formula."],
      ["R 2/3", "Fundamental sets. Reduction of order. Variation of constants. Sturm's separation theorem."],
      ["T 2/8", "Sturm's comparison theorem. Power series method."],
      ["R 2/10", "Frobenius method."]
    ],
    assignments: [
      "Homework assignments were part of the course record."
    ],
    archiveNote: "The recovered schedule records the first part of the term; later rows in the archived page were blank."
  },

  math581w22: {
    overview: [
      "Graduate PDE II course emphasizing distributions, Fourier transform, constant coefficient systems, spectral theory, and nonlinear evolution equations."
    ],
    plannedTopics: [
      "Cauchy-Kovalevskaya theorem",
      "Distributions and Fourier transform",
      "Constant coefficient linear systems",
      "Ellipticity, parabolicity, and hyperbolicity",
      "Spectral theory",
      "Nonlinear evolution equations, if time permits"
    ],
    books: [
      "Gerald B. Folland, Introduction to partial differential equations. Princeton, 1995.",
      "Jeffrey Rauch, Partial differential equations. Springer, 1991."
    ],
    schedule: [
      ["R 1/6", "Introduction. Cauchy-Kovalevskaya theorem."]
    ],
    assignments: [
      "Homework assignments and a course project."
    ],
    relatedCourses: [
      { label: "Math 581 Winter 2012", url: "/legacy/courses/math581w12/" },
      { label: "Math 581 Winter 2013", url: "/legacy/courses/math581w13/" },
      { label: "Math 581 Winter 2014", url: "/legacy/courses/math581w14/" },
      { label: "Math 581 Winter 2019", url: "/legacy/courses/math581w19/" }
    ],
    archiveNote: "The archived page preserved the outline and first meeting; the remaining schedule rows were blank."
  },

  math578f20: {
    overview: [
      "Graduate numerical analysis course on linear systems, eigenproblems, least squares problems, nonlinear systems, approximation, and numerical integration of initial value problems.",
      "Python was used as the official programming language for computational work."
    ],
    plannedTopics: [
      "Direct methods for linear systems: LU and QR factorization, conditioning, and stability",
      "Iterative methods for linear systems: Jacobi, Gauss-Seidel, SOR, steepest descent, conjugate gradients, and preconditioning",
      "Eigenproblems: Hessenberg form, QR algorithm, and Jacobi method",
      "Least squares problems: normal equations, QR factorization, and SVD",
      "Nonlinear systems and optimization: gradient descent, fixed point iteration, Newton-Raphson and variants",
      "Approximation of functions: interpolation, least squares approximation, uniform approximation, polynomial and trigonometric functions",
      "Initial value problems: Runge-Kutta methods, consistency, stability, convergence, stiffness, and adaptivity"
    ],
    books: [
      "Alfio Quarteroni, Riccardo Sacco, and Fausto Saleri, Numerical mathematics. Springer.",
      "Endre Suli and David Mayers, An introduction to numerical analysis. Cambridge University.",
      "Lloyd N. Trefethen and David Bau III, Numerical linear algebra. SIAM.",
      "Germund Dahlquist and Ake Bjorck, Numerical methods. Dover.",
      "Eugene Isaacson and Herbert B. Keller, Analysis of numerical methods. Dover."
    ],
    assignments: [
      "Analytical and computational homework assignments.",
      "Course project involving an advanced topic, implementation, experimentation, report writing, and a presentation."
    ],
    relatedCourses: [
      { label: "Math 578 Fall 2009", url: "/legacy/courses/math578f09/" },
      { label: "Math 387 Winter 2018", url: "/legacy/courses/math387w18/" },
      { label: "Math 387 Winter 2016", url: "/legacy/courses/math387w16/" }
    ],
    archiveNote: "The Fall 2020 archive preserves the public course outline and topic list; lecture media were hosted inside the course management system and are not included."
  },

  math578f09: {
    overview: [
      "Numerical analysis course covering linear systems, iterative methods, eigenvalue problems, nonlinear equations, least squares, approximation, interpolation, and quadrature.",
      "Matlab was used as the official mathematical software and programming tool."
    ],
    plannedTopics: [
      "Direct methods for linear systems",
      "Iterative methods, Krylov subspaces, GMRES, conjugate gradients, and preconditioning",
      "Nonlinear equations and Newton-type methods",
      "Matrix eigenvalue problems",
      "Polynomial interpolation, quadrature, least squares, and uniform approximation",
      "Trigonometric polynomials and FFT"
    ],
    books: [
      "Alfio Quarteroni, Riccardo Sacco, and Fausto Saleri, Numerical mathematics. Springer.",
      "Robert Plato, Concise numerical mathematics. AMS.",
      "Lloyd N. Trefethen and David Bau III, Numerical linear algebra. SIAM.",
      "Germund Dahlquist and Ake Bjorck, Numerical methods. Dover.",
      "Kendall Atkinson and Weimin Han, Theoretical numerical analysis. Springer."
    ],
    schedule: [
      ["Sep 2", "Introduction to numerical analysis."],
      ["Sep 4", "Floating point arithmetic, well-posedness, conditioning, stability, and backward stability."],
      ["Sep 9", "Gaussian elimination and LU decomposition."],
      ["Sep 16", "QR decomposition, Gram-Schmidt process, Householder reflection, and least-squares problems."],
      ["Sep 23", "Fixed point iterations and the Banach fixed point theorem."],
      ["Sep 30", "Relaxation schemes, Richardson iteration, and steepest descent."],
      ["Oct 7", "Krylov subspaces, Arnoldi, GMRES, and preconditioning."],
      ["Oct 19", "Nonlinear equations in one variable: Newton-Raphson and bisection."],
      ["Oct 28", "Roots of polynomials, Horner's scheme, deflation, Sturm sequences, and Euclid's algorithm."],
      ["Nov 4", "Matrix eigenvalue problems, Hessenberg matrices, and power iterations."],
      ["Nov 18", "Polynomial interpolation, Lagrange coefficients, Newton polynomials, and divided differences."],
      ["Nov 20", "Numerical quadrature, Gauss quadrature, orthogonal polynomials, and least squares approximation."],
      ["Nov 27", "Trigonometric polynomials and fast Fourier transform."],
      ["Dec 2", "Review."],
      ["Dec 10", "Final exam."]
    ],
    assignments: [
      "Five homework assignments, with analytical and computational components.",
      "Midterm exam covering linear systems, conditioning, fixed point methods, stationary and nonstationary iterations, conjugate gradients, and GMRES.",
      "Cumulative final exam."
    ],
    archiveNote: "Matlab code names are recorded in the recovered page, but the code files are not present in the local public archive."
  },

  math170c: {
    overview: [
      "Numerical ordinary differential equations course at UCSD covering numerical differentiation and integration, numerical ODE solvers, stability, difference equations, and boundary value problems.",
      "MATLAB was the official mathematical software and programming tool."
    ],
    plannedTopics: [
      "Finite difference formulas for differentiation and rounding error",
      "Newton-Cotes formulas, Romberg integration, adaptive quadrature, and Gauss-Legendre quadrature",
      "Initial value problems, Euler's method, Heun's method, midpoint method, and Runge-Kutta methods",
      "Systems of ODEs, orbital mechanics, Lorenz equations, and variable step-size methods",
      "Implicit methods, stiff equations, multistep methods, and predictor-corrector methods",
      "Boundary value problems, shooting methods, finite difference methods, collocation, Galerkin method, and finite elements"
    ],
    books: [
      "Timothy Sauer, Numerical Analysis. Pearson, 2006.",
      "Eugene Isaacson and Herbert B. Keller, Analysis of Numerical Methods."
    ],
    schedule: [
      ["Apr 2", "Finite difference formulas for approximate differentiation."],
      ["Apr 9", "Newton-Cotes formulas: trapezoid, midpoint, Simpson, open and composite formulas."],
      ["Apr 18", "Gauss-Legendre quadrature."],
      ["Apr 20", "Initial value problems, existence and uniqueness, and Euler's method."],
      ["Apr 27", "Systems of ordinary differential equations, higher order equations, and the physical pendulum."],
      ["May 2", "Runge-Kutta methods and the Hodgkin-Huxley neuron."],
      ["May 16", "Multistep methods: Adams-Bashforth, Adams-Moulton, and predictor-corrector methods."],
      ["May 21", "Boundary value problems and shooting methods."],
      ["May 23", "Finite difference methods for linear boundary value problems."],
      ["Jun 4", "Galerkin method and finite elements."],
      ["Jun 15", "Final exam."]
    ],
    assignments: [
      "Nine homework assignments, mixing analytical exercises and computer problems.",
      "Midterm exam on numerical differentiation, quadrature, and initial value problem methods.",
      "Cumulative final exam."
    ],
    archiveNote: "The recovered page listed many MATLAB file names; the files themselves are not present in the local public archive."
  },

  math20f: {
    overview: [
      "UCSD linear algebra course on systems of linear equations, matrix algebra, vector spaces, bases, dimension, determinants, eigenvalues, eigenvectors, orthogonality, and applications.",
      "The course included MATLAB computer lab assignments."
    ],
    plannedTopics: [
      "Linear systems, echelon forms, vector equations, and matrix equations",
      "Linear transformations, matrix operations, inverses, and LU factorization",
      "Vector spaces, subspaces, null spaces, column spaces, bases, dimension, and rank",
      "Determinants, Cramer's rule, volume, and linear transformations",
      "Eigenvectors, eigenvalues, diagonalization, inner products, and orthogonality",
      "Least-squares problems and symmetric matrices"
    ],
    books: [
      "David C. Lay, Linear Algebra and Its Applications, updated third edition. Pearson/Addison Wesley, 2006."
    ],
    assignments: [
      "Weekly homework and MATLAB lab assignments.",
      "Two midterm exams and a cumulative final exam."
    ],
    archiveNote: "Expired syllabus, calendar, slide, and exam links from the earlier UCSD course site are not carried forward."
  },

  math599w19: {
    overview: [
      "Introduction to mathematical general relativity, with emphasis on Lorentzian geometry, Einstein's field equations, exact solutions, geodesic congruences, and singularity theorems."
    ],
    plannedTopics: [
      "Exact solutions, including black hole and cosmological solutions",
      "Lorentzian geometry, geodesic congruences, and variational characterization of geodesics",
      "Penrose and Hawking singularity theorems",
      "Black hole uniqueness theorems, if time permits"
    ],
    books: grBooks,
    schedule: [
      ["T 1/8", "Prerequisites."],
      ["R 1/10", "Lie derivative. Affine connection."],
      ["T 1/15", "Christoffel symbols, torsion, parallel transport, and horizontal subspaces."],
      ["R 1/17", "Geodesics, reparametrization, the exponential map, and curvature."],
      ["T 1/22", "Properties of the Riemann tensor and moving frames."],
      ["R 1/31", "Galilean spacetime, Newtonian gravity, and Minkowski spacetime."],
      ["T 2/5", "Equivalence principle, Lorentzian manifolds, and geodesic principle."],
      ["T 2/12", "The field equations and harmonic coordinates."],
      ["R 2/14", "Matter fields and Schwarzschild solution."],
      ["T 2/19", "Kruskal extension and spherically symmetric spacetimes."],
      ["R 2/28", "Jacobi fields, conjugate points, and Jacobi's theorem."],
      ["R 3/14", "Hypersurface orthogonal and null geodesic congruences."],
      ["T 4/2", "Big bang singularity theorem."],
      ["R 4/4", "Black hole singularity theorem."],
      ["T 4/9", "Structure of event horizons and area law."]
    ],
    assignments: [
      "Problem sets 1-5.",
      "Final project."
    ],
    projects: [
      "Shenshun Yao: Spherically symmetric collapse of stars",
      "Yuzhen Cao: Witten's proof of the positive mass theorem",
      "Vladmir Sicca: Initial value problem in general relativity",
      "Mathieu Giroux: Equivalence principle from a QFT perspective",
      "Jiuzhou Huang: Schoen and Yau's proof of the positive mass theorem"
    ],
    relatedCourses: [
      { label: "Math 599 Winter 2017", url: "/legacy/courses/math599w17/" }
    ],
    archiveNote: "Problem sets and project reports mentioned on the recovered page are not present in the local public archive, so their file links are omitted."
  },

  math599w17: {
    overview: [
      "Introduction to mathematical general relativity, beginning with manifolds and tensor calculus and leading to Lorentzian geometry, Einstein equations, geodesic congruences, causality, and singularity theorems."
    ],
    plannedTopics: [
      "Lorentzian geometry and geodesic congruences",
      "Matter models and the geodesic hypothesis",
      "Exact solutions: cosmological solutions and black holes",
      "Singularity theorems and causality",
      "Cauchy problem and collapse models, if time permits"
    ],
    books: grBooks,
    schedule: [
      ["W 1/4", "Manifolds."],
      ["F 1/6", "Tangent spaces, vector fields, and integral curves."],
      ["W 1/11", "Flows, Lie derivative, Lie bracket, and cotangent spaces."],
      ["F 1/13", "1-forms, tensorial property, moving frames, and Cartan's formula."],
      ["W 1/18", "Tensors, differential forms, affine connection, and torsion."],
      ["F 1/20", "Parallel transport, tangent bundle, horizontal subspaces, geodesics, and spray."],
      ["W 1/25", "Geodesic flow, affine parameters, exponential map, curvature, and Jacobi equation."],
      ["W 2/1", "Newtonian spacetime, Minkowski spacetime, Lorentz group, Minkowski metric, and proper time."],
      ["W 2/8", "Geodesic principle, Ricci tensor and scalar, Einstein field equations, and stress-energy tensor."],
      ["F 2/17", "Second variation of length, index form, and Jacobi fields."],
      ["F 3/17", "Timelike geodesic congruences, Raychaudhuri equation, and focusing theorem."],
      ["W 3/29", "Road map for singularity theorems and causality."],
      ["W 4/5", "Inextendible curves and global hyperbolicity."],
      ["F 4/7", "Locally Lipschitz curves and accumulation of causal curves."]
    ],
    assignments: [
      "Problem sets 1-4.",
      "Final project."
    ],
    projects: [
      "Michael Baker: Ernst equation and inverse scattering",
      "Renaud Raquepas and Erick Schulz: Visualization of Kerr black holes",
      "Jeremy Wu: Spacetime singularities",
      "Zahra Zahraee: Inflationary cosmology",
      "Jean-Pascal Guevin: Gravitational waves",
      "Michael Massussi: Supergravity and string theory",
      "Antoine Savard: Hawking radiation"
    ],
    archiveNote: "Old problem-set and project-report file links are omitted because the files are not present locally."
  },

  math580f18: {
    overview: [
      "PDE I course focused on harmonic functions, the Dirichlet problem, Sobolev spaces, weak solutions, elliptic regularity, spectral theory, and heat equation examples."
    ],
    plannedTopics: [
      "Green's identities, harmonic functions, Harnack inequality, and maximum principles",
      "Fundamental solutions, Green's function, Poisson's formula, and the Dirichlet problem",
      "Sobolev spaces, weak derivatives, variational formulation, and elliptic regularity",
      "Spectral theory of compact self-adjoint operators and Laplace eigenvalues",
      "Spectral resolution of heat and wave equations"
    ],
    books: pde1Books,
    schedule: [
      ["W 9/5", "Examples of harmonic functions, Green's identities, and fundamental solutions."],
      ["W 9/12", "Harnack inequality, Liouville's theorem, maximum principles, and Green's function."],
      ["W 10/3", "Minimization of the Dirichlet energy."],
      ["F 10/5", "Sobolev spaces, strong derivatives, and weak solutions."],
      ["W 10/24", "Poisson problems and moduli of continuity."],
      ["W 10/31", "Higher regularity and Sobolev's lemma."],
      ["W 11/14", "Resolvent of the Laplacian."],
      ["W 11/21", "Hilbert-Schmidt theory."],
      ["F 11/23", "Laplace eigenproblems, Rayleigh quotient, and explicit examples."],
      ["F 11/30", "Weyl's law."]
    ],
    assignments: [
      "Assignments 1-5.",
      "Final exam."
    ],
    archiveNote: "The referenced assignment files are not present locally."
  },

  math580f14: {
    overview: [
      "PDE I course beginning with ODE methods and first order equations, then moving through Cauchy-Kovalevskaya theory, wave and heat equations, harmonic functions, and the Dirichlet problem."
    ],
    plannedTopics: [
      "Linear first and second order equations",
      "Cauchy-Kovalevskaya theorem, characteristic surfaces, and well-posedness",
      "Wave equation, finite speed of propagation, Kirchhoff formula, and geometric optics",
      "Heat equation, parabolic maximum principles, and uniqueness",
      "Harmonic functions, Poisson formula, Harnack inequalities, and Perron's method",
      "Sobolev spaces, if time permits"
    ],
    books: pde1Books,
    schedule: [
      ["W 9/3", "Ordinary differential equations, local existence and uniqueness."],
      ["W 9/17", "Homogeneous linear first order equations and characteristic curves."],
      ["W 10/1", "Cauchy-Kovalevskaya theorem for first order linear systems."],
      ["W 10/15", "Basic classifications and the one-dimensional wave equation."],
      ["M 10/20", "Kirchhoff's formula for the wave equation."],
      ["W 10/29", "Geometric optics and the Euclidean heat kernel."],
      ["M 11/10", "Harnack inequality, Liouville's theorem, and maximum principles."],
      ["M 11/24", "Perron's method and boundary regularity."],
      ["W 12/3", "Hamilton-Jacobi equations."]
    ],
    assignments: [
      "Assignments 1-5.",
      "Two take-home midterm exams and a final exam."
    ]
  },

  math580f13: {
    overview: [
      "PDE I course centered on second order linear equations, with harmonic functions, Dirichlet problems, Sobolev spaces, weak solutions, regularity, spectral theory, and heat equation examples."
    ],
    plannedTopics: [
      "Green's identities, harmonic functions, Harnack inequality, and fundamental solutions",
      "Green's function, Poisson formula, and the Dirichlet problem",
      "Sobolev spaces, weak and strong derivatives, and variational methods",
      "Elliptic regularity, Sobolev embedding, and Rellich compactness",
      "Laplace eigenvalues, eigenfunctions, Weyl's law, and heat equation examples"
    ],
    books: pde1Books,
    schedule: [
      ["W 9/4", "Green's identities and fundamental solutions."],
      ["M 9/9", "Green's formula, mean value property, Harnack inequality, and maximum principles."],
      ["W 9/25", "Harnack's inequality, Heine-Borel property, and the Dirichlet problem."],
      ["M 10/7", "Strong derivatives, Sobolev spaces, and weak solutions."],
      ["W 10/16", "Mollifiers, Du Bois-Reymond lemma, Leibniz rule, and Weyl's lemma."],
      ["W 10/23", "Trace maps, Poisson equations, and variational method."],
      ["W 10/30", "Moduli of continuity and interior regularity."],
      ["W 11/20", "Rellich's lemma and Hilbert-Schmidt theory."],
      ["W 11/27", "Courant's nodal domain theorem, minimax principle, and comparison theorems."],
      ["M 12/2", "Weyl's law and functional calculus."]
    ],
    assignments: [
      "Assignments 1-3.",
      "Take-home midterms 1-2.",
      "Final exam."
    ]
  },

  math580f12: {
    overview: [
      "PDE I course covering distributions, first order equations, conservation laws, harmonic functions, Dirichlet problems, Sobolev spaces, spectral theory, heat and wave equations, and student projects."
    ],
    plannedTopics: [
      "Test functions, distributions, and operations on distributions",
      "Semilinear and quasilinear first order equations",
      "Conservation laws, weak solutions, shock waves, and entropy conditions",
      "Harmonic functions, Green's functions, Poisson formula, and Dirichlet problems",
      "Sobolev spaces, weak derivatives, Hilbert space methods, and spectral theory",
      "Heat equation, wave equation, and energy estimates"
    ],
    books: pde1Books,
    schedule: [
      ["Th 9/6", "Idea of distributions and seminorms."],
      ["Mo 9/24", "First order semilinear equations and method of characteristics."],
      ["Th 9/27", "First order quasilinear equations, conservation laws, and wave breaking."],
      ["Th 10/11", "Analyticity, maximum principles, and Green's function approach."],
      ["Th 11/1", "Dirichlet energy, Sobolev spaces, weak and strong derivatives."],
      ["Fr 11/9", "Spectral theory for compact self-adjoint positive operators."],
      ["Mo 11/26", "Heat equation: semigroup property, smoothing, decay, and well-posedness."],
      ["We 12/5", "Wave energy and basic classifications of PDEs."]
    ],
    assignments: [
      "Assignments 1-6.",
      "Student project reports and presentations."
    ]
  },

  math580f11: {
    overview: [
      "PDE I course on classification and well-posedness, energy methods, Dirichlet principle, distributions, weak derivatives, harmonic functions, heat equations, wave equations, and scalar conservation laws."
    ],
    plannedTopics: [
      "Cauchy-Kovalevskaya theorem and analytic functions",
      "Quasilinear first order equations, conservation laws, shocks, and entropy criteria",
      "Harmonic functions, Green's identities, maximum principles, Harnack inequalities, and Poisson formula",
      "Dirichlet problem, Schauder estimates, method of continuity, and nonlinear elliptic examples",
      "Heat equation, Duhamel's principle, maximum principle, and nonlinear reaction-diffusion equations",
      "Wave equation, Huygens principle, energy method, and symmetric hyperbolic systems"
    ],
    books: pde1Books,
    schedule: [
      ["Sep 1", "Examples of PDE."],
      ["Sep 13", "Cauchy-Kovalevskaya theorem."],
      ["Sep 20", "First order semilinear equations and method of characteristics."],
      ["Sep 27", "Weak solutions, Riemann problem, shock waves, Rankine-Hugoniot condition, and entropy conditions."],
      ["Oct 4", "Green's formula, mean value property, maximum principles, and comparison principle."],
      ["Oct 13", "Removable singularity theorem, Harnack inequalities, and Harnack convergence theorems."],
      ["Oct 25", "Poisson equation and Newtonian potential."],
      ["Nov 8", "Global Schauder estimates and semilinear examples."],
      ["Nov 24", "Nonlinear reaction-diffusion equations and maximum principles."],
      ["Dec 1", "Tychonov's example, Kirchhoff's formula, and wave energy."]
    ],
    assignments: [
      "Assignments 1-6.",
      "Take-home midterm exam.",
      "Final project."
    ]
  },

  math581w21: {
    overview: [
      "PDE II course focused on nonlinear problems, with Sobolev spaces, Fourier transform, and functional analytic methods used throughout."
    ],
    plannedTopics: pde2Topics,
    books: [
      "Gerald B. Folland, Introduction to partial differential equations. Princeton, 1995."
    ],
    assignments: [
      "Homework assignments and a course project."
    ],
    relatedCourses: [
      { label: "Math 581 Winter 2019", url: "/legacy/courses/math581w19/" },
      { label: "Math 581 Winter 2014", url: "/legacy/courses/math581w14/" },
      { label: "Math 581 Winter 2013", url: "/legacy/courses/math581w13/" },
      { label: "Math 581 Winter 2012", url: "/legacy/courses/math581w12/" }
    ],
    archiveNote: "The recovered page contains the outline but no detailed public schedule."
  },

  math581w20: {
    overview: [
      "PDE II course on distributions, Fourier transform, fundamental solutions, hypoellipticity, well-posedness, semilinear evolution equations, and the Navier-Stokes equations."
    ],
    plannedTopics: pde2Topics,
    books: pde2Books,
    schedule: [
      ["W 1/8", "Test functions and distributions."],
      ["W 1/15", "Local structure of distributions and the Fourier transform."],
      ["W 1/29", "Fundamental solutions, Laurent expansion, and hypoellipticity."],
      ["W 2/5", "Malgrange-Ehrenpreis theorem."],
      ["W 2/12", "Hormander's theorem."],
      ["W 2/19", "Microlocal regularity."],
      ["W 3/11", "Petrowsky well-posedness."],
      ["W 4/1", "Strong well-posedness."],
      ["F 4/3", "Duhamel's principle and semilinear evolution equations."],
      ["T 4/14", "Weak solutions of the Navier-Stokes equations."]
    ],
    assignments: [
      "Assignments 1-5.",
      "Course project."
    ]
  },

  math581w19: {
    overview: [
      "PDE II course connecting heat and wave equations with distributions, Fourier methods, hypoellipticity, well-posedness, semilinear problems, and Navier-Stokes equations."
    ],
    plannedTopics: [
      "Heat and wave equations",
      "Tempered distributions, convolution, and Fourier transform",
      "Fourier analytic treatment of Sobolev spaces",
      "Half-space problems and elliptic, parabolic, and hyperbolic behavior",
      "Semilinear evolution equations",
      "Navier-Stokes equations and related turbulence models"
    ],
    books: [
      "Lawrence C. Evans, Partial differential equations. AMS, 1998.",
      "Fritz John, Partial differential equations. Springer, 1982."
    ],
    schedule: [
      ["T 1/8", "Green's identities for the heat operator and the Euclidean heat kernel."],
      ["T 1/22", "Spectral resolution of the heat equation, smoothing, decay, and backward ill-posedness."],
      ["R 1/31", "Distributions."],
      ["R 2/7", "Fourier transform and tempered distributions."],
      ["T 2/12", "Cauchy problem for wave equations."],
      ["R 2/21", "Morawetz estimate on local energy decay."],
      ["T 2/26", "Cauchy-Kovalevskaya theorem."],
      ["R 3/21", "Malgrange-Ehrenpreis theorem and Hormander's theorem on hypoellipticity."],
      ["T 4/9", "Duhamel's principle and semilinear problems."],
      ["R 4/11", "Sobolev algebras, Ladyzhenskaya inequality, and Navier-Stokes equations."]
    ],
    assignments: [
      "Assignments 1-5.",
      "Course project."
    ],
    projects: [
      "Thomas Tendron: Kolmogorov-Petrowsky-Piskunov equations"
    ],
    archiveNote: "Only project items represented by localized files are linked below."
  },

  math581w14: {
    overview: [
      "PDE II course on heat kernels, Cauchy-Kovalevskaya theory, distributions, Fourier transform, constant coefficient operators, hypoellipticity, and pseudodifferential directions."
    ],
    plannedTopics: [
      "Heat equation, maximum principles, heat kernel, and uniqueness theorems",
      "Nirenberg-Nishida, Cauchy-Kovalevskaya, and Holmgren theorems",
      "Distributions, convolution, and Fourier transform",
      "Constant coefficient operators, fundamental solutions, and hypoellipticity",
      "Malgrange-Ehrenpreis theorem and Hormander's characterization",
      "Introduction to pseudodifferential operators, if time permits"
    ],
    books: pde2Books,
    schedule: [
      ["M 1/6", "Euclidean heat kernel, parabolic maximum principles, and Tychonov uniqueness theorem."],
      ["M 1/27", "Cauchy-Kovalevskaya theorem and Janet-Cartan isometric embedding theorem."],
      ["M 2/17", "Test functions and distributions."],
      ["M 3/10", "Complex-valued distributions and fundamental solutions."],
      ["W 3/19", "Fourier transform and Paley-Wiener theorem."],
      ["W 3/26", "Laurent expansion and Malgrange-Ehrenpreis theorem."],
      ["W 4/2", "Hormander's theorem."],
      ["W 4/9", "Petrowsky's theorem and fundamental solution of the Cauchy problem."]
    ],
    assignments: [
      "Assignments 1-5.",
      "Course project."
    ],
    projects: [
      "Y. Barsheshat: The Yamabe problem",
      "S. Lu: Lin's local isometric embedding theorem",
      "G. Martine-La Boissoniere: Approximations in quantum mechanics",
      "M. Stevenson: The heat kernel for forms"
    ]
  },

  math581w13: {
    overview: [
      "PDE II course on constant coefficient operators, semilinear evolution equations, strongly elliptic systems, distributions, Fourier transform, Sobolev spaces, and functional analytic methods."
    ],
    plannedTopics: pde2Topics.concat([
      "Overview of elliptic theory, Lopatinsky-Shapiro condition, strong ellipticity, and Garding inequality",
      "Variational minimization problems and semilinear elliptic problems, if time permits"
    ]),
    books: pde2Books,
    schedule: [
      ["W 1/16", "Cauchy-Kovalevskaya theorem."],
      ["F 1/25", "Subspaces of distributions and compactly supported distributions."],
      ["F 2/8", "Fundamental solutions and Schwartz's theorem on hypoellipticity."],
      ["W 2/20", "Hormander's characterization of hypoellipticity."],
      ["W 2/27", "Wave front set and microlocal regularity theorem."],
      ["W 3/20", "Inhomogeneous equations and Duhamel's principle."],
      ["W 3/27", "Multiplication in Sobolev spaces and Navier-Stokes equations."],
      ["F 4/5", "Boundary value problems in half space and Lopatinsky-Shapiro conditions."],
      ["F 4/12", "Garding inequality and interior regularity."],
      ["T 4/16", "Regularity up to the boundary."]
    ],
    assignments: [
      "Assignments 1-6.",
      "Course project."
    ],
    projects: [
      "T. Salvador: Mean field games",
      "B. Landon: Introductory scattering theory",
      "A. Kumar: Kato's theorem on the Coulomb Hamiltonian",
      "M.-A. Mandich: Probabilistic approach to the Dirichlet problem"
    ]
  },

  math581w12: {
    overview: [
      "PDE II course on topological vector spaces, distributions, constant coefficient operators, hypoellipticity, Fourier transform, boundary value problems, semilinear evolution equations, elliptic theory, and spectral theory."
    ],
    plannedTopics: pde2Topics.concat([
      "Wave front sets and microlocal regularity",
      "Lopatinsky-Shapiro condition, Garding inequality, and spectral theory"
    ]),
    books: pde2Books.concat([
      "Walter Rudin, Functional Analysis. McGraw-Hill.",
      "Walter A. Strauss, Nonlinear wave equations. AMS, 1990.",
      "Terence Tao, Nonlinear dispersive equations. AMS, 2006."
    ]),
    schedule: [
      ["Wed 1/11", "Idea of distributions and topological vector spaces."],
      ["Wed 1/18", "Locally convex spaces, seminorms, and Frechet spaces."],
      ["Wed 1/25", "Distributions and Radon measures."],
      ["Fri 2/10", "Constant coefficient operators, fundamental solutions, and hypoellipticity."],
      ["Fri 2/17", "Fourier transform and Liouville's theorem."],
      ["Fri 3/2", "Problems in half-space, Cauchy problem, and Petrowsky well-posedness."],
      ["Wed 3/14", "Strong hyperbolicity and inhomogeneous Cauchy problem."],
      ["Wed 3/21", "Semilinear evolution equations."],
      ["Wed 3/28", "Elliptic boundary value problems and Garding inequality."],
      ["Fri 4/13", "Spectral theory and semigroups."]
    ],
    assignments: [
      "Assignments 1-7.",
      "Final project."
    ],
    projects: [
      "Morgane Henry: Wave maps",
      "Ibrahim Al Balushi: Nonlinear diffusion",
      "Olga Yakovlenko: Introduction to the Ricci flow",
      "Yang Guo: Einstein equations",
      "Sebastien Picard: Introduction to the Yang-Mills equations",
      "Spencer Frei: DeGiorgi-Nash-Moser regularity theory",
      "Olivier Mercier: Mean curvature flow",
      "Joshua Lackman: Pseudodifferential operators",
      "Andrew MacDougall: Some topics in semiclassical analysis"
    ]
  }
};
