/* =========================================================
   FOUNDATION MATH HUB
   MULTI-WEEK WEBSITE — WEEK 1 AND WEEK 2

   Week 1 remains unchanged.
   Week 2 adds learning choices, guided calculations and
   the new Edcafe resources.
   ========================================================= */


/* =========================================================
   1. ACTIVITY LINKS
   ========================================================= */

const websiteLinks = {
  "week-1": {
    flashcards:
      "https://app.edcafe.ai/flashcards/6a5cc6d2c039e008d0265d68",

    practiceQuiz:
      "https://app.edcafe.ai/quizzes/6a5cc92ba63cac6f1f1c5630",

    officialQuiz:
      "https://forms.office.com/r/ggAmQUyqej"
  },

  "week-2": {
    read:
      "https://app.edcafe.ai/slidedeck/6a65d9a004b551af8b1fe303",

    listen:
      "https://app.edcafe.ai/share/ai-speech/week-2-listen:-composition,-flow-rates-and-molarity-6a65e0d604b551af8b1ff1d7",

    watch:
      "",

    flashcards:
      "https://app.edcafe.ai/share/flashcards/week-2-optional-flashcards:-composition,-flow-rates-and-molarity-6a65e50c04b551af8b1ffdad",

    practiceQuiz:
      "https://app.edcafe.ai/share/quiz/week-2-practice-quiz:-composition,-flow-rates-and-molarity-6a65e59404b551af8b1fff86",

    officialQuiz:
      "https://forms.cloud.microsoft/r/fNZjGCHmNt"
  }
};


/* =========================================================
   2. WEEKLY RELEASE SETTINGS
   ========================================================= */

const weeks = [
  {
    id: "week-1",
    number: "Week 1",
    title: "MEB Formula Foundations",
    icon: "🧪",
    colour: "#2563eb",

    description:
      "Density, Specific Gravity, Number of Moles and Basic Material Balance.",

    available: true,
    status: "Available now",
    releaseNote: "Week 1 is available now.",

    tags: [
      "➗ Fractions",
      "🔣 Formulae",
      "📏 Units",
      "🧮 Calculator",
      "🧪 MEB"
    ]
  },

  {
    id: "week-2",
    number: "Week 2",
    title: "Composition, Flow Rates and Molarity",
    icon: "🧫",
    colour: "#8b5cf6",

    description:
      "Mass and mole composition, component flow, process flow rates and molarity.",

    available: true,
    status: "Available now",
    releaseNote: "Week 2 is available now.",

    tags: [
      "🧪 Composition",
      "⚖️ Mass Fraction",
      "🔢 Mole Fraction",
      "➡️ Flow Rates",
      "🧴 Molarity"
    ]
  },

  {
    id: "week-3",
    number: "Week 3",
    title: "Material Balance Without Reaction",
    icon: "⚖️",
    colour: "#14b8a6",

    description:
      "System boundaries, assumptions, overall and component balances.",

    available: false,
    status: "Coming soon",
    releaseNote: "Week 3 is coming soon.",
    tags: []
  },

  {
    id: "week-4",
    number: "Week 4",
    title: "Chemical Equations and Stoichiometry",
    icon: "⚗️",
    colour: "#f97316",

    description:
      "Balancing equations and applying mole ratios.",

    available: false,
    status: "Coming soon",
    releaseNote: "Week 4 is coming soon.",
    tags: []
  },

  {
    id: "week-5",
    number: "Week 5",
    title: "Material Balance With Reaction",
    icon: "🔥",
    colour: "#ec4899",

    description:
      "Limiting reactant, excess reactant and conversion.",

    available: false,
    status: "Coming soon",
    releaseNote: "Week 5 is coming soon.",
    tags: []
  },

  {
    id: "week-6",
    number: "Week 6",
    title: "Energy Balance",
    icon: "🌡️",
    colour: "#eab308",

    description:
      "Sensible heat, latent heat and integrated energy balance.",

    available: false,
    status: "Coming soon",
    releaseNote: "Week 6 is coming soon.",
    tags: []
  },

  {
    id: "week-7",
    number: "Week 7",
    title: "Test Readiness and Revision",
    icon: "🏁",
    colour: "#22c55e",

    description:
      "Review, correction and full MEB problem-solving practice.",

    available: false,
    status: "Coming soon",
    releaseNote: "Week 7 is coming soon.",
    tags: []
  }
];


/* =========================================================
   3. CHECKPOINTS FOR EACH WEEK
   ========================================================= */

const checkpointIdsByWeek = {
  "week-1": [
    "fractions",
    "formulae",
    "units",
    "calculator",
    "meb-challenge"
  ],

  "week-2": [
    "learning-method",
    "composition",
    "flow-rates",
    "integrated-stream",
    "meb-challenge"
  ]
};


/* =========================================================
   4. STUDENT LEVELS
   ========================================================= */

const studentLevels = [
  {
    name: "Student",
    character: "🧑‍🎓"
  },

  {
    name: "Mathematics Learner",
    character: "🧑‍🎓"
  },

  {
    name: "Formula Solver",
    character: "🧑‍🎓"
  },

  {
    name: "Unit Checker",
    character: "🧑‍🎓"
  },

  {
    name: "MEB Trainee",
    character: "🧑‍🎓"
  },

  {
    name: "Process Problem Solver",
    character: "🧑‍🔬"
  }
];


/* =========================================================
   5. WEEK 1 ACTIVITIES
   ========================================================= */

const week1Activities = [
  {
    id: "fractions",
    number: "Checkpoint 1",
    title: "Fractions and Ratios",
    routeLabel: "Fractions and Ratios",

    icon: "➗",
    colour: "#22c55e",

    description:
      "Understand numerator, denominator and ratios used in MEB formulas.",

    type: "lesson",
    prerequisites: []
  },

  {
    id: "formulae",
    number: "Checkpoint 2",
    title: "Algebra and Formulae",
    routeLabel: "Algebra and Formulae",

    icon: "🔣",
    colour: "#2563eb",

    description:
      "Identify variables, select formulas and use formula triangles.",

    type: "lesson",
    prerequisites: ["fractions"]
  },

  {
    id: "units",
    number: "Checkpoint 3",
    title: "Units and Conversions",
    routeLabel: "Units and Conversions",

    icon: "📏",
    colour: "#8b5cf6",

    description:
      "Convert mass, volume and flow-rate units before calculating.",

    type: "lesson",
    prerequisites: ["formulae"]
  },

  {
    id: "calculator",
    number: "Checkpoint 4",
    title: "Calculator Practice",
    routeLabel: "Calculator Practice",

    icon: "🧮",
    colour: "#f97316",

    description:
      "Enter calculations correctly and report answers to two decimal places.",

    type: "lesson",
    prerequisites: ["units"]
  },

  {
    id: "flashcards",
    number: "Interactive Activity",
    title: "Edcafe Formula Flashcards",

    icon: "🃏",
    colour: "#eab308",

    description:
      "Review the Week 1 formulas, symbols and units.",

    type: "external",
    linkKey: "flashcards",

    prerequisites: ["calculator"]
  },

  {
    id: "practice-quiz",
    number: "Interactive Activity",
    title: "Edcafe Practice Quiz",

    icon: "🎯",
    colour: "#ec4899",

    description:
      "Practise MCQ and short-answer questions with immediate feedback.",

    type: "external",
    linkKey: "practiceQuiz",

    prerequisites: ["flashcards"]
  },

  {
    id: "math-coach",
    number: "Optional Support",
    title: "MEB Mathematics Coach",

    icon: "💬",
    colour: "#14b8a6",

    description:
      "Ask for hints when you are unsure how to begin a calculation.",

    type: "coming-soon",
    optional: true,

    prerequisites: []
  },

  {
    id: "meb-challenge",
    number: "Checkpoint 5",
    title: "Week 1 MEB Challenge",
    routeLabel: "MEB Challenge",

    icon: "🧪",
    colour: "#172554",

    description:
      "Apply Fractions, Formulae, Units and Calculator skills to MEB.",

    type: "lesson",

    prerequisites: ["practice-quiz"]
  },

  {
    id: "official-quiz",
    number: "Official Submission",
    title: "Microsoft Forms Quiz",

    icon: "✅",
    colour: "#16a34a",

    description:
      "Submit your official Week 1 quiz and retain your result screen.",

    type: "external",
    linkKey: "officialQuiz",
    official: true,

    prerequisites: ["meb-challenge"]
  }
];

/* =========================================================
   6. WEEK 2 ACTIVITIES
   ========================================================= */

const week2Activities = [
  {
    id: "learning-outcomes",
    number: "Start Here",
    title: "Week 2 Learning Outcomes",

    icon: "🎯",
    colour: "#6366f1",

    description:
      "Understand what you should be able to do by the end of Week 2.",

    type: "outcomes",
    prerequisites: []
  },

  {
    id: "learning-method",
    number: "Checkpoint 1",
    title: "Choose Your Learning Method",
    routeLabel: "Choose a Method",

    icon: "🧭",
    colour: "#8b5cf6",

    description:
      "Open the Learn Your Way page and choose Read or Listen. Watch is coming soon.",

    type: "choice-page",
    prerequisites: ["learning-outcomes"],

    choices: [
      {
        label: "Read the Slides",
        icon: "📑",
        linkKey: "read"
      },

      {
        label: "Listen",
        icon: "🔊",
        linkKey: "listen"
      },

      {
        label: "Watch",
        icon: "🎥",
        linkKey: "watch",
        comingSoon: true
      }
    ]
  },

  {
    id: "composition",
    number: "Checkpoint 2",
    title: "Composition and Fractions",
    routeLabel: "Composition",

    icon: "⚖️",
    colour: "#2563eb",

    description:
      "Calculate mass fraction, mass percentage, mole fraction and component flow.",

    type: "lesson",
    prerequisites: ["learning-method"]
  },

  {
    id: "flashcards",
    number: "Optional Revision",
    title: "Week 2 Optional Flashcards",

    icon: "🃏",
    colour: "#eab308",

    description:
      "Review composition, flow-rate and molarity formulas at your own pace.",

    type: "external",
    linkKey: "flashcards",
    optional: true,
    prerequisites: []
  },

  {
    id: "flow-rates",
    number: "Checkpoint 3",
    title: "Flow Rates and Molarity",
    routeLabel: "Flow and Molarity",

    icon: "➡️",
    colour: "#14b8a6",

    description:
      "Connect mass, volume, moles, density, molar mass and molarity.",

    type: "lesson",
    prerequisites: ["composition"]
  },

  {
    id: "practice-quiz",
    number: "Optional Revision",
    title: "Week 2 Edcafe Practice Quiz",

    icon: "🎯",
    colour: "#ec4899",

    description:
      "Practise Week 2 questions with immediate feedback before the final challenge.",

    type: "external",
    linkKey: "practiceQuiz",
    optional: true,
    prerequisites: []
  },

  {
    id: "integrated-stream",
    number: "Checkpoint 4",
    title: "Integrated Process Stream",
    routeLabel: "Integrated Stream",

    icon: "🏭",
    colour: "#f97316",

    description:
      "Select and connect several relationships in one process-stream problem.",

    type: "lesson",
    prerequisites: ["flow-rates"]
  },

  {
    id: "calculator-lab",
    number: "Optional Support",
    title: "Calculator Practice Lab",

    icon: "🧮",
    colour: "#64748b",

    description:
      "A separate calculator-entry practice page will be added later.",

    type: "coming-soon",
    optional: true,
    prerequisites: []
  },

  {
    id: "meb-challenge",
    number: "Checkpoint 5",
    title: "Week 2 MEB Challenge",
    routeLabel: "MEB Challenge",

    icon: "🧪",
    colour: "#172554",

    description:
      "Apply composition, flow-rate and molarity mathematics in a final challenge.",

    type: "lesson",
    prerequisites: ["integrated-stream"]
  },

  {
    id: "official-quiz",
    number: "Official Submission",
    title: "Week 2 Official Quiz — 50 Marks",

    icon: "✅",
    colour: "#16a34a",

    description:
      "Complete the official Microsoft Forms quiz and student feedback survey.",

    type: "external",
    linkKey: "officialQuiz",
    official: true,

    prerequisites: ["meb-challenge"]
  }
];


const activitiesByWeek = {
  "week-1": week1Activities,
  "week-2": week2Activities
};



/* =========================================================
   7. WEEK 1 LESSON CONTENT
   ========================================================= */

const week1Lessons = {

  /* -----------------------------------------------------
     FRACTIONS AND RATIOS
     ----------------------------------------------------- */

  fractions: {
    badge: "Checkpoint 1",
    title: "Fractions and Ratios",
    icon: "➗",

    description:
      "Learn how fractions and ratios are used in Density, Specific Gravity and Number of Moles.",

    content: `
      <div class="content-block">
        <h3>1. Understanding Fractions</h3>

        <p>A fraction represents division.</p>

        <div class="formula-box">
          a ÷ b = a / b
        </div>

        <ul>
          <li>
            The top number is the <strong>numerator</strong>.
          </li>

          <li>
            The bottom number is the <strong>denominator</strong>.
          </li>
        </ul>

        <p>
          Always ask which quantity belongs on top and which quantity
          belongs at the bottom.
        </p>
      </div>


      <div class="content-block">
        <h3>2. Fractions Used in MEB</h3>

        <div class="formula-grid">

          <div class="mini-formula">
            Density
            <br><br>
            ρ = m ÷ V
          </div>

          <div class="mini-formula">
            Specific Gravity
            <br><br>
            SG = ρ substance ÷ ρ reference
          </div>

          <div class="mini-formula">
            Number of Moles
            <br><br>
            n = m ÷ M
          </div>

        </div>
      </div>


      <div class="example-box">
        <h3>Worked Example: Density</h3>

        <p>
          Mass = 600 g and Volume = 500 mL.
        </p>

        <p>
          <strong>Formula:</strong>
          ρ = m ÷ V
        </p>

        <p>
          <strong>Substitution:</strong>
          ρ = 600 ÷ 500
        </p>

        <p>
          <strong>Final answer:</strong>
          ρ = 1.20 g/mL
        </p>
      </div>


      <div class="warning-box">
        <h3>Common Mistake</h3>

        <p>
          Density is Mass ÷ Volume. Do not reverse the numerator and
          denominator.
        </p>
      </div>
    `,

    questions: [
      {
        question:
          "A solution has a mass of 840 g and a volume of 700 mL. Calculate its density.",

        hint:
          "Use Density = Mass ÷ Volume.",

        expectedNumber: 1.20,

        acceptedUnits: [
          "g/ml"
        ],

        displayAnswer:
          "1.20 g/mL"
      },

      {
        question:
          "A liquid has a density of 1050 kg/m³. Water has a density of 1000 kg/m³. Calculate the specific gravity.",

        hint:
          "Divide the liquid density by the water density.",

        expectedNumber: 1.05,

        acceptedUnits: [],

        displayAnswer:
          "1.05"
      }
    ]
  },


  /* -----------------------------------------------------
     ALGEBRA AND FORMULAE
     ----------------------------------------------------- */

  formulae: {
    badge: "Checkpoint 2",
    title: "Algebra and Formulae",
    icon: "🔣",

    description:
      "Identify the unknown quantity and rearrange simple MEB formulas.",

    content: `
      <div class="content-block">
        <h3>The Five-Step Formula Method</h3>

        <ol>
          <li>Identify the unknown quantity.</li>
          <li>List the known values and units.</li>
          <li>Select the correct formula.</li>
          <li>Rearrange the formula when necessary.</li>
          <li>Substitute, calculate and write the final unit.</li>
        </ol>
      </div>


      <div class="content-block">
        <h3>Density Formula Triangle</h3>

        <div class="triangle-wrap">
          <div class="formula-triangle">

            <span class="triangle-top">
              m
            </span>

            <span class="triangle-bottom-left">
              ρ
            </span>

            <span class="triangle-bottom-right">
              V
            </span>

            <span class="triangle-divider-horizontal"></span>
            <span class="triangle-divider-vertical"></span>

          </div>
        </div>


        <div class="formula-grid">

          <div class="mini-formula">
            ρ = m ÷ V
          </div>

          <div class="mini-formula">
            m = ρ × V
          </div>

          <div class="mini-formula">
            V = m ÷ ρ
          </div>

        </div>
      </div>


      <div class="example-box">
        <h3>Worked Example: Calculate Mass</h3>

        <p>
          Density = 800 kg/m³ and Volume = 0.25 m³.
        </p>

        <p>
          <strong>Formula:</strong>
          m = ρ × V
        </p>

        <p>
          <strong>Substitution:</strong>
          m = 800 × 0.25
        </p>

        <p>
          <strong>Final answer:</strong>
          m = 200.00 kg
        </p>
      </div>


      <div class="warning-box">
        <h3>When Not to Use a Triangle</h3>

        <p>
          Formula triangles work for simple multiplication and division.
          Use normal algebra for material balances containing addition
          or subtraction.
        </p>
      </div>
    `,

    questions: [
      {
        question:
          "A liquid has a density of 900 kg/m³ and a volume of 0.40 m³. Calculate its mass.",

        hint:
          "Use Mass = Density × Volume.",

        expectedNumber: 360.00,

        acceptedUnits: [
          "kg"
        ],

        displayAnswer:
          "360.00 kg"
      },

      {
        question:
          "A solution has a mass of 480 g and a density of 1.20 g/mL. Calculate its volume.",

        hint:
          "Use Volume = Mass ÷ Density.",

        expectedNumber: 400.00,

        acceptedUnits: [
          "ml"
        ],

        displayAnswer:
          "400.00 mL"
      }
    ]
  },


  /* -----------------------------------------------------
     UNITS AND CONVERSIONS
     ----------------------------------------------------- */

  units: {
    badge: "Checkpoint 3",
    title: "Units and Conversions",
    icon: "📏",

    description:
      "Make units compatible before completing a calculation.",

    content: `
      <div class="content-block">
        <h3>Essential Week 1 Conversions</h3>

        <table class="simple-table">

          <tr>
            <th>Conversion</th>
            <th>Relationship</th>
          </tr>

          <tr>
            <td>Kilograms and grams</td>
            <td>1 kg = 1000 g</td>
          </tr>

          <tr>
            <td>Litres and millilitres</td>
            <td>1 L = 1000 mL</td>
          </tr>

          <tr>
            <td>Cubic metres and litres</td>
            <td>1 m³ = 1000 L</td>
          </tr>

          <tr>
            <td>Hours and minutes</td>
            <td>1 h = 60 min</td>
          </tr>

        </table>
      </div>


      <div class="content-block">
        <h3>Compatible Units</h3>

        <p>
          In the formula n = m ÷ M:
        </p>

        <ul>
          <li>g may be used with g/mol.</li>
          <li>kg may be used with kg/kmol.</li>
          <li>kg cannot be used directly with g/mol.</li>
        </ul>
      </div>


      <div class="example-box">
        <h3>Worked Example</h3>

        <p>
          Calculate the number of moles in 2.00 kg of sodium chloride.
          Molar mass = 58.44 g/mol.
        </p>

        <p>
          <strong>Conversion:</strong>
          2.00 kg = 2000 g
        </p>

        <p>
          <strong>Calculation:</strong>
          n = 2000 ÷ 58.44
        </p>

        <p>
          <strong>Final answer:</strong>
          n = 34.22 mol
        </p>
      </div>


      <div class="warning-box">
        <h3>Common Mistake</h3>

        <p>
          Do not calculate before checking and converting the units.
        </p>
      </div>
    `,

    questions: [
      {
        question:
          "Convert 4.25 kg into grams.",

        hint:
          "Multiply kilograms by 1000.",

        expectedNumber: 4250.00,

        acceptedUnits: [
          "g"
        ],

        displayAnswer:
          "4250.00 g"
      },

      {
        question:
          "Convert 180 kg/h into kg/min.",

        hint:
          "There are 60 minutes in one hour.",

        expectedNumber: 3.00,

        acceptedUnits: [
          "kg/min"
        ],

        displayAnswer:
          "3.00 kg/min"
      }
    ]
  },


  /* -----------------------------------------------------
     CALCULATOR PRACTICE
     ----------------------------------------------------- */

  calculator: {
    badge: "Checkpoint 4",
    title: "Calculator Practice",
    icon: "🧮",

    description:
      "Enter calculations correctly and report final answers to two decimal places.",

    content: `
      <div class="content-block">
        <h3>The Calculator Routine</h3>

        <ol>
          <li>Write the formula.</li>
          <li>Substitute the values.</li>
          <li>Check the units.</li>
          <li>Enter the calculation carefully.</li>
          <li>Round only the final answer.</li>
          <li>Report the answer to two decimal places.</li>
        </ol>
      </div>


      <div class="content-block">
        <h3>Two Decimal Place Standard</h3>

        <div class="formula-grid">

          <div class="mini-formula">
            1.2 becomes
            <br>
            <strong>1.20</strong>
          </div>

          <div class="mini-formula">
            34.223 becomes
            <br>
            <strong>34.22</strong>
          </div>

          <div class="mini-formula">
            1.998 becomes
            <br>
            <strong>2.00</strong>
          </div>

        </div>
      </div>


      <div class="example-box">
        <h3>Using Brackets</h3>

        <p>
          To calculate 1200 ÷ (3 × 40), enter:
        </p>

        <div class="formula-box">
          1200 ÷ (3 × 40)
        </div>

        <p>
          Final answer = 10.00
        </p>
      </div>


      <div class="warning-box">
        <h3>Common Mistake</h3>

        <p>
          Do not round intermediate values. Round only the final answer.
        </p>
      </div>
    `,

    questions: [
      {
        question:
          "Calculate 1500 ÷ 58.44. Give the answer to two decimal places.",

        hint:
          "Enter the numerator first, followed by division.",

        expectedNumber: 25.67,

        acceptedUnits: [],

        displayAnswer:
          "25.67"
      },

      {
        question:
          "Calculate 1200 ÷ (3 × 40). Give the answer to two decimal places.",

        hint:
          "Use brackets around 3 × 40.",

        expectedNumber: 10.00,

        acceptedUnits: [],

        displayAnswer:
          "10.00"
      }
    ]
  },


  /* -----------------------------------------------------
     WEEK 1 MEB CHALLENGE
     ----------------------------------------------------- */

  "meb-challenge": {
    badge: "Checkpoint 5",
    title: "Week 1 MEB Challenge",
    icon: "🧪",

    description:
      "Apply Fractions, Formulae, Units and Calculator skills to MEB calculations.",

    content: `
      <div class="success-box">
        <h3>You Have Reached the Final Checkpoint</h3>

        <p>
          Show the following for every calculation:
        </p>

        <ol>
          <li>Known values</li>
          <li>Unknown quantity</li>
          <li>Formula</li>
          <li>Substitution</li>
          <li>Final answer with unit</li>
        </ol>
      </div>


      <div class="content-block">
        <h3>Week 1 Formula Summary</h3>

        <div class="formula-grid">

          <div class="mini-formula">
            ρ = m ÷ V
          </div>

          <div class="mini-formula">
            SG = ρ substance ÷ ρ reference
          </div>

          <div class="mini-formula">
            n = m ÷ M
          </div>

          <div class="mini-formula">
            m = ρ × V
          </div>

          <div class="mini-formula">
            m = n × M
          </div>

          <div class="mini-formula">
            Total Input = Total Output
          </div>

        </div>
      </div>
    `,

    questions: [
      {
        question:
          "A chemical solution has a mass of 900 g and a volume of 750 mL. Calculate its density.",

        hint:
          "Use Density = Mass ÷ Volume.",

        expectedNumber: 1.20,

        acceptedUnits: [
          "g/ml"
        ],

        displayAnswer:
          "1.20 g/mL"
      },

      {
        question:
          "A liquid has a specific gravity of 0.85. Water has a density of 1000 kg/m³. Calculate the liquid density.",

        hint:
          "Multiply specific gravity by the reference density.",

        expectedNumber: 850.00,

        acceptedUnits: [
          "kg/m3"
        ],

        displayAnswer:
          "850.00 kg/m³"
      },

      {
        question:
          "Calculate the number of moles in 1.50 kg of water. The molar mass of water is 18.02 g/mol.",

        hint:
          "Convert kilograms into grams before calculating.",

        expectedNumber: 83.24,

        acceptedUnits: [
          "mol"
        ],

        displayAnswer:
          "83.24 mol"
      },

      {
        question:
          "A mixer receives 45 kg/h and 30 kg/h. One product stream leaves. Calculate the product flow rate at steady state.",

        hint:
          "At steady state, Total Input = Total Output.",

        expectedNumber: 75.00,

        acceptedUnits: [
          "kg/h"
        ],

        displayAnswer:
          "75.00 kg/h"
      },

      {
        question:
          "A liquid has a specific gravity of 1.20 and occupies 0.50 m³. Water density is 1000 kg/m³. Calculate the liquid mass.",

        hint:
          "First calculate density. Then use Mass = Density × Volume.",

        expectedNumber: 600.00,

        acceptedUnits: [
          "kg"
        ],

        displayAnswer:
          "600.00 kg"
      }
    ]
  }
};

/* =========================================================
   8. WEEK 2 LESSON CONTENT
   ========================================================= */

const week2Lessons = {

  composition: {
    badge: "Checkpoint 2",
    title: "Composition and Fractions",
    icon: "⚖️",

    description:
      "Describe a mixture using mass fraction, mass percentage, mole fraction and component flow.",

    content: `
      <div class="content-block">
        <h3>1. What Is Chemical Composition?</h3>

        <p>
          A mixture contains two or more components. Composition tells us
          how much of each component is present in the total mixture.
        </p>

        <div class="formula-grid">

          <div class="mini-formula">
            Mass fraction
            <br><br>
            x<sub>A</sub> =
            mass of A ÷ total mass
          </div>

          <div class="mini-formula">
            Mass percentage
            <br><br>
            x<sub>A</sub> × 100%
          </div>

          <div class="mini-formula">
            Mole fraction
            <br><br>
            y<sub>A</sub> =
            moles of A ÷ total moles
          </div>

        </div>
      </div>


      <div class="content-block">
        <h3>2. Fraction and Percentage</h3>

        <div class="formula-box">
          Percentage ÷ 100 = Fraction
          <br>
          Fraction × 100% = Percentage
        </div>

        <p>
          A fraction has no unit. The fractions of all components in a
          complete mixture must add up to <strong>1.00</strong>.
        </p>
      </div>


      <div class="example-box">
        <h3>Worked Example: Component Mass Flow</h3>

        <p>
          A stream flows at 200 kg/h and contains 15% Component A.
        </p>

        <p>
          <strong>Convert:</strong>
          15% ÷ 100 = 0.15
        </p>

        <p>
          <strong>Component A flow:</strong>
          0.15 × 200 = 30.00 kg/h
        </p>

        <p>
          <strong>Remaining component:</strong>
          200.00 − 30.00 = 170.00 kg/h
        </p>

        <p>
          <strong>Check:</strong>
          30.00 + 170.00 = 200.00 kg/h
        </p>
      </div>


      <div class="warning-box">
        <h3>Common Mistakes</h3>

        <ul>
          <li>Use 0.15, not 15, when calculating 15% of a total.</li>
          <li>Use mass values for mass fraction.</li>
          <li>Use mole values for mole fraction.</li>
          <li>Check that all fractions add up to 1.00.</li>
        </ul>
      </div>
    `,

    questions: [
      {
        question:
          "Convert 25% into a mass fraction.",

        hint:
          "Divide the percentage by 100.",

        expectedNumber: 0.25,

        acceptedUnits: [],

        displayAnswer:
          "0.25"
      },

      {
        question:
          "A stream flows at 400 kg/h and contains 20% Component A. Calculate the mass flow rate of Component A.",

        hint:
          "Convert 20% into 0.20, then multiply by the total flow.",

        expectedNumber: 80.00,

        acceptedUnits: [
          "kg/h"
        ],

        displayAnswer:
          "80.00 kg/h"
      },

      {
        question:
          "A gas mixture contains 3 mol A, 5 mol B and 2 mol C. Calculate the mole fraction of A.",

        hint:
          "First calculate the total number of moles.",

        expectedNumber: 0.30,

        acceptedUnits: [],

        displayAnswer:
          "0.30"
      }
    ]
  },


  "flow-rates": {
    badge: "Checkpoint 3",
    title: "Flow Rates and Molarity",
    icon: "➡️",

    description:
      "Use density, molar mass and molarity to convert between different descriptions of a flowing stream.",

    content: `
      <div class="content-block">
        <h3>1. Three Types of Flow Rate</h3>

        <div class="formula-grid">

          <div class="mini-formula">
            Mass flow rate
            <br><br>
            ṁ = mass ÷ time
          </div>

          <div class="mini-formula">
            Volumetric flow rate
            <br><br>
            Q = volume ÷ time
          </div>

          <div class="mini-formula">
            Molar flow rate
            <br><br>
            ṅ = moles ÷ time
          </div>

        </div>
      </div>


      <div class="content-block">
        <h3>2. Converting Between Flow Rates</h3>

        <div class="formula-grid">

          <div class="mini-formula">
            ṁ = ρQ
          </div>

          <div class="mini-formula">
            ṅ = ṁ ÷ MW
          </div>

          <div class="mini-formula">
            ṁ = ṅ × MW
          </div>

        </div>

        <p>
          Use density to connect volume flow and mass flow.
          Use molar mass to connect mass flow and molar flow.
        </p>
      </div>


      <div class="content-block">
        <h3>3. Molarity</h3>

        <div class="formula-grid">

          <div class="mini-formula">
            M = n ÷ V
          </div>

          <div class="mini-formula">
            n = M × V
          </div>

          <div class="mini-formula">
            ṅ<sub>solute</sub> = M × Q
          </div>

        </div>

        <p>
          Molarity uses litres. Convert millilitres into litres before
          substituting into the formula.
        </p>
      </div>


      <div class="example-box">
        <h3>Worked Example: Density to Mass Flow</h3>

        <p>
          Density = 1050 kg/m³ and Q = 0.20 m³/min.
        </p>

        <p>
          <strong>Formula:</strong>
          ṁ = ρQ
        </p>

        <p>
          <strong>Substitution:</strong>
          ṁ = 1050 × 0.20
        </p>

        <p>
          <strong>Final answer:</strong>
          ṁ = 210.00 kg/min
        </p>
      </div>


      <div class="warning-box">
        <h3>Unit Check</h3>

        <p>
          (kg/m³)(m³/min) gives kg/min because the m³ units cancel.
        </p>
      </div>
    `,

    questions: [
      {
        question:
          "A liquid has a density of 900 kg/m³ and flows at 0.50 m³/min. Calculate the mass flow rate.",

        hint:
          "Use Mass flow rate = Density × Volumetric flow rate.",

        expectedNumber: 450.00,

        acceptedUnits: [
          "kg/min"
        ],

        displayAnswer:
          "450.00 kg/min"
      },

      {
        question:
          "A carbon dioxide stream flows at 88.00 kg/h. Its molar mass is 44.00 kg/kmol. Calculate the molar flow rate.",

        hint:
          "Divide mass flow rate by molar mass.",

        expectedNumber: 2.00,

        acceptedUnits: [
          "kmol/h"
        ],

        displayAnswer:
          "2.00 kmol/h"
      },

      {
        question:
          "A 0.80 mol/L solution flows at 1.50 L/min. Calculate the molar flow rate of the solute.",

        hint:
          "Use Solute molar flow = Molarity × Volumetric flow rate.",

        expectedNumber: 1.20,

        acceptedUnits: [
          "mol/min"
        ],

        displayAnswer:
          "1.20 mol/min"
      }
    ]
  },


  "integrated-stream": {
    badge: "Checkpoint 4",
    title: "Integrated Process Stream",
    icon: "🏭",

    description:
      "Connect composition, flow rate, density, molar mass and molarity in a logical calculation pathway.",

    content: `
      <div class="content-block">
        <h3>The Integrated Calculation Pathway</h3>

        <ol>
          <li>Identify the required final quantity.</li>
          <li>List all known values and units.</li>
          <li>Convert percentages into fractions.</li>
          <li>Make units compatible.</li>
          <li>Select the first relationship.</li>
          <li>Use its answer in the next relationship.</li>
          <li>Check totals and final units.</li>
        </ol>
      </div>


      <div class="example-box">
        <h3>Example 1: Mass Composition to Mole Composition</h3>

        <p>
          A 100 kg/h gas stream contains 44 kg/h CO₂ and 56 kg/h N₂.
        </p>

        <p>
          CO₂ molar flow = 44 ÷ 44 = 1.00 kmol/h
        </p>

        <p>
          N₂ molar flow = 56 ÷ 28 = 2.00 kmol/h
        </p>

        <p>
          Total molar flow = 3.00 kmol/h
        </p>

        <p>
          yCO₂ = 1 ÷ 3 = 0.33 and yN₂ = 2 ÷ 3 = 0.67
        </p>
      </div>


      <div class="example-box">
        <h3>Example 2: Molarity to Solute Mass Flow</h3>

        <p>
          A 0.50 mol/L NaCl solution flows at 2.00 L/min.
          MW of NaCl = 58.44 g/mol.
        </p>

        <p>
          Solute molar flow = 0.50 × 2.00 = 1.00 mol/min
        </p>

        <p>
          Solute mass flow = 1.00 × 58.44 = 58.44 g/min
        </p>
      </div>


      <div class="success-box">
        <h3>Reasonableness Checks</h3>

        <ul>
          <li>Composition fractions should total 1.00.</li>
          <li>Component flows should total the full stream flow.</li>
          <li>Units should cancel logically.</li>
          <li>Do not round intermediate values too early.</li>
        </ul>
      </div>
    `,

    questions: [
      {
        question:
          "A gas stream contains 44.00 kg/h CO₂ and 56.00 kg/h N₂. Their molar masses are 44.00 kg/kmol and 28.00 kg/kmol. Calculate the mole fraction of CO₂.",

        hint:
          "Convert each component mass flow into molar flow, then divide the CO₂ molar flow by the total molar flow.",

        expectedNumber: 0.33,

        acceptedUnits: [],

        displayAnswer:
          "0.33"
      },

      {
        question:
          "A 0.50 mol/L sodium chloride solution flows at 2.00 L/min. The molar mass of NaCl is 58.44 g/mol. Calculate the NaCl mass flow rate.",

        hint:
          "First calculate molar flow using M × Q, then multiply by molar mass.",

        expectedNumber: 58.44,

        acceptedUnits: [
          "g/min"
        ],

        displayAnswer:
          "58.44 g/min"
      }
    ]
  },


  "meb-challenge": {
    badge: "Checkpoint 5",
    title: "Week 2 MEB Challenge",
    icon: "🧪",

    description:
      "Apply the Week 2 relationships independently before attempting the official 50-mark quiz.",

    content: `
      <div class="success-box">
        <h3>Final Week 2 Mission</h3>

        <p>
          For each calculation, show:
        </p>

        <ol>
          <li>Known values</li>
          <li>Required quantity</li>
          <li>Formula</li>
          <li>Substitution</li>
          <li>Final answer with unit</li>
          <li>A total or unit check where relevant</li>
        </ol>
      </div>


      <div class="content-block">
        <h3>Week 2 Formula Summary</h3>

        <div class="formula-grid">

          <div class="mini-formula">
            x<sub>A</sub> =
            mass A ÷ total mass
          </div>

          <div class="mini-formula">
            y<sub>A</sub> =
            moles A ÷ total moles
          </div>

          <div class="mini-formula">
            ṁ = ρQ
          </div>

          <div class="mini-formula">
            ṅ = ṁ ÷ MW
          </div>

          <div class="mini-formula">
            M = n ÷ V
          </div>

          <div class="mini-formula">
            ṅ<sub>solute</sub> = MQ
          </div>

        </div>
      </div>
    `,

    questions: [
      {
        question:
          "Convert 18% into a mass fraction.",

        hint:
          "Divide by 100.",

        expectedNumber: 0.18,

        acceptedUnits: [],

        displayAnswer:
          "0.18"
      },

      {
        question:
          "Convert a mole fraction of 0.35 into mole percentage.",

        hint:
          "Multiply the fraction by 100%.",

        expectedNumber: 35.00,

        acceptedUnits: [
          "%"
        ],

        displayAnswer:
          "35.00%"
      },

      {
        question:
          "A liquid with a density of 800 kg/m³ flows at 0.25 m³/min. Calculate its mass flow rate.",

        hint:
          "Use ṁ = ρQ.",

        expectedNumber: 200.00,

        acceptedUnits: [
          "kg/min"
        ],

        displayAnswer:
          "200.00 kg/min"
      },

      {
        question:
          "A gas flows at 6.00 kmol/h and has an average molar mass of 30.00 kg/kmol. Calculate the mass flow rate.",

        hint:
          "Use Mass flow rate = Molar flow rate × Molar mass.",

        expectedNumber: 180.00,

        acceptedUnits: [
          "kg/h"
        ],

        displayAnswer:
          "180.00 kg/h"
      },

      {
        question:
          "A 0.40 mol/L solution flows at 3.00 L/min. The solute molar mass is 50.00 g/mol. Calculate the solute mass flow rate.",

        hint:
          "First calculate solute molar flow using M × Q, then multiply by molar mass.",

        expectedNumber: 60.00,

        acceptedUnits: [
          "g/min"
        ],

        displayAnswer:
          "60.00 g/min"
      }
    ]
  }
};


const lessonsByWeek = {
  "week-1": week1Lessons,
  "week-2": week2Lessons
};


/* =========================================================
   CURRENT-WEEK HELPERS
   ========================================================= */

function getCurrentActivities() {
  return activitiesByWeek[selectedWeekId] || [];
}


function getCurrentLessons() {
  return lessonsByWeek[selectedWeekId] || {};
}


function getCurrentCheckpointIds() {
  return checkpointIdsByWeek[selectedWeekId] || [];
}


function getCurrentLinks() {
  return websiteLinks[selectedWeekId] || {};
}



/* =========================================================
   7. EMPTY STUDENT PROGRESS

   Each week uses its own browser storage.
   ========================================================= */

function createEmptyProgress() {
  return {
    completedActivities: [],
    completionDates: {},

    // Kept for backwards compatibility with earlier pilot data.
    bonusTokens: 0,
    bonusRollsUsed: [],

    studentName: "",
    studentClass: "",
    learningMethod: "",

    masteryStars: {
      formula: false,
      unit: false,
      practice: false,
      persistence: false,
      application: false
    },

    rewardTokenRedeemed: false,
    rewardTokenRedeemedAt: ""
  };
}


/* =========================================================
   8. CURRENT WEBSITE INFORMATION
   ========================================================= */

let selectedWeekId = null;
let selectedWeek = null;

let studentProgress =
  createEmptyProgress();

let currentLessonId = null;
let currentQuestionResults = {};
let currentQuestionAttempts = {};
let currentQuestionHintUsed = {};
let currentPracticeQuestionIndex = 0;
let currentPracticeResponses = {};
let currentBonusActivity = null;

/* Learning Tools state */
let learningCalculatorExpression = "";
let learningCalculatorLastAnswer = 0;
let learningCalculatorHistory = [];

let whiteboardStrokes = [];
let whiteboardRedoStack = [];
let whiteboardActiveStroke = null;
let whiteboardTool = "pen";
let whiteboardColour = "#172554";
let whiteboardGridVisible = true;
let whiteboardLoadedWeek = null;


/* =========================================================
   9. SAVE AND LOAD WEEKLY PROGRESS
   ========================================================= */

function getStorageKey() {
  return (
    "foundationMathHubProgress_" +
    selectedWeekId
  );
}


function loadProgress() {
  const saved =
    localStorage.getItem(
      getStorageKey()
    );

  if (!saved) {
    return createEmptyProgress();
  }

  try {
    const emptyProgress = createEmptyProgress();
    const parsedProgress = JSON.parse(saved);

    return {
      ...emptyProgress,
      ...parsedProgress,
      masteryStars: {
        ...emptyProgress.masteryStars,
        ...(parsedProgress.masteryStars || {})
      }
    };
  } catch (error) {
    console.error(
      "Unable to load progress:",
      error
    );

    return createEmptyProgress();
  }
}


function saveProgress() {
  localStorage.setItem(
    getStorageKey(),
    JSON.stringify(studentProgress)
  );
}


/* =========================================================
   10. CREATE THE WEEK CARDS
   ========================================================= */

function renderWeekCards() {
  const weekGrid =
    document.getElementById("weekGrid");

  weekGrid.innerHTML = "";

  weeks.forEach(week => {
    const weekCard =
      document.createElement("article");

    weekCard.className =
      "week-card";

    weekCard.style.setProperty(
      "--week-colour",
      week.colour
    );

    if (!week.available) {
      weekCard.classList.add("locked");
    }

    let badgeClass = "";

    if (!week.available) {
      badgeClass =
        week.status === "Coming soon"
          ? "soon"
          : "locked";
    }

    weekCard.innerHTML = `
      <div class="week-card-header">

        <div class="week-card-title">

          <span class="week-icon">
            ${week.icon}
          </span>

          <div>

            <div class="week-number">
              ${week.number}
            </div>

            <h3>
              ${week.title}
            </h3>

          </div>

        </div>


        <span class="release-badge ${badgeClass}">
          ${week.status}
        </span>

      </div>


      <p>
        ${week.description}
      </p>


      ${
        week.available
          ? `
            <button
              class="button button-primary button-small"
              onclick="openWeek('${week.id}')"
            >
              Start ${week.number}
            </button>
          `
          : `
            <button
              class="button button-light button-small"
              disabled
            >
              🔒 ${week.status}
            </button>
          `
      }
    `;

    weekGrid.appendChild(weekCard);
  });
}


/* =========================================================
   11. OPEN A WEEK
   ========================================================= */

function openWeek(weekId) {
  const week =
    weeks.find(item => item.id === weekId);

  if (!week || !week.available) {
    showToast(
      "This week has not been released yet."
    );

    return;
  }

  selectedWeekId = weekId;
  selectedWeek = week;

  studentProgress =
    loadProgress();

  document
    .getElementById("weekHome")
    .classList.add("hidden");

  document
    .getElementById("weekApp")
    .classList.remove("hidden");

  document
    .getElementById("backToWeeksButton")
    .classList.remove("hidden");

  document
    .getElementById("resetProgressButton")
    .classList.remove("hidden");

  document.getElementById(
    "weekLabel"
  ).textContent =
    week.number;

  document.getElementById(
    "weekTitle"
  ).textContent =
    week.title;

  document.getElementById(
    "weekDescription"
  ).textContent =
    week.description;

  document.getElementById(
    "weekTags"
  ).innerHTML =
    week.tags
      .map(tag => `<span>${tag}</span>`)
      .join("");

  updateWholeWeek();

  if (
    selectedWeekId === "week-2" &&
    !isActivityCompleted("learning-outcomes")
  ) {
    openOutcomesPage();
  } else {
    showWeekDashboard();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   12. RETURN TO ALL WEEKS
   ========================================================= */

function returnToWeeks() {
  currentLessonId = null;

  document
    .getElementById("lessonSection")
    .classList.add("hidden");

  document
    .getElementById("outcomesSection")
    .classList.add("hidden");

  document
    .getElementById("learningPathSection")
    .classList.add("hidden");

  document
    .getElementById("activitiesSection")
    .classList.remove("hidden");

  document
    .getElementById("weekApp")
    .classList.add("hidden");

  document
    .getElementById("weekHome")
    .classList.remove("hidden");

  document
    .getElementById("backToWeeksButton")
    .classList.add("hidden");

  document
    .getElementById("resetProgressButton")
    .classList.add("hidden");

  renderWeekCards();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   WEEK 2 FOCUSED LEARNING SCREENS
   ========================================================= */

const dashboardSectionIds = [
  "summarySection",
  "routeSection",
  "activitiesSection",
  "rewardSection",
  "evidenceSection"
];


function hideFocusedScreens() {
  document
    .getElementById("outcomesSection")
    .classList.add("hidden");

  document
    .getElementById("learningPathSection")
    .classList.add("hidden");

  document
    .getElementById("lessonSection")
    .classList.add("hidden");
}


function showWeekDashboard() {
  hideFocusedScreens();

  dashboardSectionIds.forEach(sectionId => {
    document
      .getElementById(sectionId)
      .classList.remove("hidden");
  });
}


function hideWeekDashboard() {
  dashboardSectionIds.forEach(sectionId => {
    document
      .getElementById(sectionId)
      .classList.add("hidden");
  });
}


function openOutcomesPage() {
  if (selectedWeekId !== "week-2") {
    showWeekDashboard();
    return;
  }

  hideWeekDashboard();
  hideFocusedScreens();

  document
    .getElementById("outcomesSection")
    .classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function completeOutcomesAndContinue() {
  markActivityCompleted("learning-outcomes");
  updateWholeWeek();
  openLearningPathPage();
}


function openLearningPathPage() {
  if (selectedWeekId !== "week-2") {
    showToast("This learning-path page is available in Week 2.");
    return;
  }

  hideWeekDashboard();
  hideFocusedScreens();
  renderLearningChoices();

  document
    .getElementById("learningPathSection")
    .classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function renderLearningChoices() {
  const activity =
    getCurrentActivities().find(
      item => item.id === "learning-method"
    );

  const grid =
    document.getElementById("learningChoiceGrid");

  if (!activity || !grid) {
    return;
  }

  const descriptions = {
    read: "Go through the visual slides slowly at your own pace.",
    listen: "Listen to the explanation and follow the calculation steps.",
    watch: "Use a video explanation to learn the steps."
  };

  const positionClasses = {
    watch: "mind-branch-watch",
    read: "mind-branch-read",
    listen: "mind-branch-listen"
  };

  const choiceCards = activity.choices
    .map(choice => {
      const link = getCurrentLinks()[choice.linkKey];
      const unavailable = choice.comingSoon || !link;
      const selected =
        studentProgress.learningMethod === choice.linkKey;

      const cleanLabel =
        choice.linkKey === "read"
          ? "Read"
          : choice.label;

      return `
        <article
          class="learning-choice-card mind-branch
            ${positionClasses[choice.linkKey] || ""}
            ${selected ? "selected" : ""}
            ${unavailable ? "unavailable" : ""}"
        >
          <div class="learning-choice-icon">
            ${choice.icon}
          </div>

          <h3>${cleanLabel}</h3>

          <p>${descriptions[choice.linkKey]}</p>

          ${
            unavailable
              ? `
                <span class="status-badge optional">
                  Coming Soon
                </span>
              `
              : `
                <button
                  class="button
                    ${selected ? "button-green" : "button-primary"}
                    button-small"
                  onclick="selectLearningMethod('${choice.linkKey}')"
                >
                  ${
                    selected
                      ? "✓ Selected — Open Again"
                      : "Select and Open"
                  }
                </button>
              `
          }
        </article>
      `;
    })
    .join("");

  grid.innerHTML = `
    <div class="mind-map-line line-up" aria-hidden="true"></div>
    <div class="mind-map-line line-left" aria-hidden="true"></div>
    <div class="mind-map-line line-right" aria-hidden="true"></div>

    <div class="learning-mind-centre">
      <span>🧠</span>
      <strong>Learn<br>Your Way</strong>
    </div>

    ${choiceCards}
  `;

  updateLearningPathStatus();
}


function selectLearningMethod(linkKey) {
  const link = getCurrentLinks()[linkKey];

  if (!link) {
    showToast("This learning method is coming soon.");
    return;
  }

  studentProgress.learningMethod = linkKey;
  saveProgress();
  renderLearningChoices();

  window.open(
    link,
    "_blank",
    "noopener,noreferrer"
  );
}


function updateLearningPathStatus() {
  const status =
    document.getElementById("learningMethodStatus");

  const continueButton =
    document.getElementById("learningPathContinueButton");

  const names = {
    read: "Read",
    listen: "Listen",
    watch: "Watch"
  };

  if (!studentProgress.learningMethod) {
    status.textContent =
      "Choose Read or Listen to begin. Watch is coming soon.";

    continueButton.disabled = true;
    return;
  }

  status.textContent =
    "Selected method: " +
    names[studentProgress.learningMethod] +
    ". Complete the resource, then continue.";

  continueButton.disabled = false;
}


function completeLearningPath() {
  if (!studentProgress.learningMethod) {
    showToast("Choose Read or Listen before continuing.");
    return;
  }

  markActivityCompleted("learning-method");
  updateWholeWeek();
  showWeekDashboard();

  showToast(
    "Learning method completed. Guided Practice is now unlocked."
  );

  document
    .getElementById("activitiesSection")
    .scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
}


/* =========================================================
   13. CHECK ACTIVITY COMPLETION
   ========================================================= */

function isActivityCompleted(activityId) {
  return studentProgress
    .completedActivities
    .includes(activityId);
}


/* =========================================================
   14. CHECK WHETHER AN ACTIVITY IS UNLOCKED
   ========================================================= */

function isActivityUnlocked(activity) {
  if (activity.optional) {
    return true;
  }

  return activity.prerequisites.every(
    requiredActivity =>
      isActivityCompleted(requiredActivity)
  );
}


/* =========================================================
   15. CREATE THE ACTIVITY CARDS
   ========================================================= */

function renderActivityCards() {
  const grid =
    document.getElementById("activityGrid");

  grid.innerHTML = "";

  getCurrentActivities().forEach(activity => {
    const completed =
      isActivityCompleted(activity.id);

    const unlocked =
      isActivityUnlocked(activity);

    const card =
      document.createElement("article");

    card.className =
      "activity-card";

    card.style.setProperty(
      "--card-colour",
      activity.colour
    );

    if (completed) {
      card.classList.add("completed");
    }

    if (!unlocked) {
      card.classList.add("locked");
    }

    let statusText =
      unlocked ? "Ready" : "Locked";

    let statusClass = "";

    if (activity.optional) {
      statusText = "Optional";
      statusClass = "optional";
    }

    if (completed) {
      statusText = "Completed";
      statusClass = "done";
    }

    card.innerHTML = `
      <div class="activity-top">

        <div class="activity-title-area">

          <span class="activity-icon">
            ${activity.icon}
          </span>

          <div>

            <div class="activity-number">
              ${activity.number}
            </div>

            <h3 class="activity-title">
              ${activity.title}
            </h3>

          </div>

        </div>


        <span class="status-badge ${statusClass}">
          ${statusText}
        </span>

      </div>


      <p class="activity-description">
        ${activity.description}
      </p>


      <div class="card-buttons">
        ${createActivityButtons(
          activity,
          unlocked,
          completed
        )}
      </div>
    `;

    grid.appendChild(card);
  });
}


/* =========================================================
   16. CREATE THE ACTIVITY BUTTONS
   ========================================================= */

function createActivityButtons(
  activity,
  unlocked,
  completed
) {
  if (activity.type === "outcomes") {
    if (!unlocked) {
      return `
        <button
          class="button button-light button-small"
          disabled
        >
          Complete the previous activity first
        </button>
      `;
    }

    return `
      <button
        class="button button-primary button-small"
        onclick="openOutcomesPage()"
      >
        ${completed ? "Review Outcomes" : "Start Here"}
      </button>
    `;
  }

  if (activity.type === "choice-page") {
    if (!unlocked) {
      return `
        <button
          class="button button-light button-small"
          disabled
        >
          Complete Start Here first
        </button>
      `;
    }

    return `
      <button
        class="button button-primary button-small"
        onclick="openLearningPathPage()"
      >
        ${completed ? "Review Learning Method" : "Choose Learning Method"}
      </button>
    `;
  }

  if (activity.type === "coming-soon") {
    return `
      <button
        class="button button-light button-small"
        disabled
      >
        Coming Soon
      </button>
    `;
  }

  if (!unlocked) {
    return `
      <button
        class="button button-light button-small"
        disabled
      >
        Complete the previous activity first
      </button>
    `;
  }

  if (activity.type === "lesson") {
    return `
      <button
        class="button button-primary button-small"
        onclick="openLesson('${activity.id}')"
      >
        ${
          completed
            ? "Review Lesson"
            : "Start Lesson"
        }
      </button>
    `;
  }

  if (activity.type === "external") {
    const confirmationText =
      activity.official
        ? "I Submitted It"
        : "I Finished It";

    return `
      <button
        class="button button-primary button-small"
        onclick="openExternalActivity('${activity.id}')"
      >
        Open Activity
      </button>


      <button
        class="button button-light button-small"
        onclick="confirmExternalCompletion('${activity.id}')"
      >
        ${confirmationText}
      </button>
    `;
  }

  return "";
}


/* =========================================================
   CHOOSE WATCH, LISTEN OR READ
   ========================================================= */

function openChoiceResource(
  activityId,
  linkKey
) {
  const activity =
    getCurrentActivities().find(
      item => item.id === activityId
    );

  if (!activity) {
    showToast(
      "The learning-method activity could not be found."
    );

    return;
  }

  const link =
    getCurrentLinks()[linkKey];

  if (!link) {
    showToast(
      "This learning method is coming soon."
    );

    return;
  }

  window.open(
    link,
    "_blank",
    "noopener,noreferrer"
  );
}


function confirmChoiceCompletion(activityId) {
  const wasAlreadyCompleted =
    isActivityCompleted(activityId);

  if (wasAlreadyCompleted) {
    showToast(
      "This checkpoint is already completed."
    );

    return;
  }

  const confirmed =
    window.confirm(
      "Have you completed at least one learning method: Read or Listen?"
    );

  if (!confirmed) {
    return;
  }

  markActivityCompleted(activityId);
  updateWholeWeek();
  showCelebration(activityId);
}


/* =========================================================
   17. OPEN EDCAFE OR MICROSOFT FORMS
   ========================================================= */

function openExternalActivity(activityId) {
  const activity =
    getCurrentActivities().find(
      item => item.id === activityId
    );

  if (!activity) {
    showToast(
      "The activity could not be found."
    );

    return;
  }

  const link =
    getCurrentLinks()[activity.linkKey];

  if (!link) {
    showToast(
      "The student link has not been added yet."
    );

    return;
  }

  window.open(
    link,
    "_blank",
    "noopener,noreferrer"
  );
}


/* =========================================================
   18. CONFIRM AN EXTERNAL ACTIVITY IS FINISHED
   ========================================================= */

function confirmExternalCompletion(activityId) {
  const activity =
    getCurrentActivities().find(
      item => item.id === activityId
    );

  if (!activity) {
    return;
  }

  const wording =
    activity.official
      ? "Have you submitted the official Microsoft Forms quiz?"
      : "Have you completed this activity?";

  const confirmed =
    window.confirm(wording);

  if (!confirmed) {
    return;
  }

  markActivityCompleted(activityId);

  updateWholeWeek();

  showToast(
    activity.official
      ? "Official quiz marked as submitted. Keep your Microsoft Forms result screen."
      : "Activity marked as completed."
  );
}


/* =========================================================
   19. MARK AN ACTIVITY COMPLETED
   ========================================================= */

function markActivityCompleted(activityId) {
  if (!isActivityCompleted(activityId)) {
    studentProgress
      .completedActivities
      .push(activityId);

    studentProgress
      .completionDates[activityId] =
      new Date().toISOString();

    saveProgress();
  }
}


/* =========================================================
   20. OPEN AN INTERNAL LESSON
   ========================================================= */

function openLesson(lessonId) {
  const lesson =
    getCurrentLessons()[lessonId];

  if (!lesson) {
    showToast(
      "The lesson could not be found."
    );

    return;
  }

  currentLessonId = lessonId;
  currentQuestionResults = {};
  currentQuestionAttempts = {};
  currentQuestionHintUsed = {};
  currentPracticeQuestionIndex = 0;
  currentPracticeResponses = {};

  lesson.questions.forEach(
    (question, index) => {
      currentQuestionResults[index] = false;
      currentQuestionAttempts[index] = 0;
      currentQuestionHintUsed[index] = false;
      currentPracticeResponses[index] = {
        working: "",
        answer: ""
      };
    }
  );

  document.getElementById(
    "lessonBadge"
  ).textContent =
    lesson.badge;

  document.getElementById(
    "lessonTitle"
  ).textContent =
    lesson.title;

  document.getElementById(
    "lessonDescription"
  ).textContent =
    lesson.description;

  document.getElementById(
    "lessonIcon"
  ).textContent =
    lesson.icon;

  document.getElementById(
    "lessonContent"
  ).innerHTML =
    lesson.content +
    createPracticeSection(lesson);

  initialiseLearningTools();
  renderCurrentPracticeQuestion();

  const completeButton =
    document.getElementById(
      "completeLessonButton"
    );

  const alreadyCompleted =
    isActivityCompleted(lessonId);

  completeButton.disabled =
    !alreadyCompleted;

  document.getElementById(
    "completionHelp"
  ).textContent =
    alreadyCompleted
      ? "This checkpoint is already completed. You may review it again."
      : "Complete all questions correctly to unlock this button.";

  hideWeekDashboard();
  hideFocusedScreens();

  document
    .getElementById("lessonSection")
    .classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   21. CREATE PRACTICE QUESTIONS
   ========================================================= */

function createPracticeSection(lesson) {
  return `
    <div class="practice-section">

      <span class="small-label">
        Practice and Check
      </span>


      <h3>
        Complete one question at a time
      </h3>


      <p>
        Show your working and report every final numerical answer to
        <strong>two decimal places</strong> where required.
        Your working and answers are kept while you move between questions.
      </p>


      <section class="learning-tools" aria-labelledby="learningToolsHeading">
        <div class="learning-tools-heading">
          <div>
            <span class="small-label">Learning Tools</span>
            <h3 id="learningToolsHeading">Use support without leaving the lesson</h3>
            <p>
              Open the calculator, notes or whiteboard whenever you need them.
              These tools are saved on this device and are not official submissions.
            </p>
          </div>
        </div>

        <div class="learning-tools-bar" role="toolbar" aria-label="Learning tools">
          <button
            class="button button-light learning-tool-button"
            type="button"
            onclick="toggleLearningTool('calculator')"
          >
            🧮 Open Calculator
          </button>

          <button
            class="button button-light learning-tool-button"
            type="button"
            onclick="toggleLearningTool('notes')"
          >
            📝 Open Sticky Notes
          </button>

          <button
            class="button button-light learning-tool-button"
            type="button"
            onclick="toggleLearningTool('whiteboard')"
          >
            🖍️ Open Whiteboard
          </button>
        </div>


        <div class="learning-tool-panel hidden" id="learningToolCalculator">
          <div class="learning-tool-panel-heading">
            <div>
              <h4>🧮 MEB Calculator</h4>
              <p>Use the calculator to support your working. Enter the final answer separately.</p>
            </div>
            <button class="tool-close-button" type="button" onclick="toggleLearningTool('calculator')">×</button>
          </div>

          <div class="embedded-calculator">
            <div class="embedded-calculator-screen">
              <div id="learningCalculatorDisplay">0</div>
              <small id="learningCalculatorStatus">Ready · Report final answers to 2 d.p.</small>
            </div>

            <div class="embedded-calculator-keys">
              <button class="calc-key calc-control" type="button" onclick="clearLearningCalculator()">AC</button>
              <button class="calc-key calc-control" type="button" onclick="deleteLearningCalculatorValue()">DEL</button>
              <button class="calc-key" type="button" onclick="appendLearningCalculator('(')">(</button>
              <button class="calc-key" type="button" onclick="appendLearningCalculator(')')">)</button>

              <button class="calc-key calc-number" type="button" onclick="appendLearningCalculator('7')">7</button>
              <button class="calc-key calc-number" type="button" onclick="appendLearningCalculator('8')">8</button>
              <button class="calc-key calc-number" type="button" onclick="appendLearningCalculator('9')">9</button>
              <button class="calc-key calc-operator" type="button" onclick="appendLearningCalculator('÷')">÷</button>

              <button class="calc-key calc-number" type="button" onclick="appendLearningCalculator('4')">4</button>
              <button class="calc-key calc-number" type="button" onclick="appendLearningCalculator('5')">5</button>
              <button class="calc-key calc-number" type="button" onclick="appendLearningCalculator('6')">6</button>
              <button class="calc-key calc-operator" type="button" onclick="appendLearningCalculator('×')">×</button>

              <button class="calc-key calc-number" type="button" onclick="appendLearningCalculator('1')">1</button>
              <button class="calc-key calc-number" type="button" onclick="appendLearningCalculator('2')">2</button>
              <button class="calc-key calc-number" type="button" onclick="appendLearningCalculator('3')">3</button>
              <button class="calc-key calc-operator" type="button" onclick="appendLearningCalculator('-')">−</button>

              <button class="calc-key calc-number" type="button" onclick="appendLearningCalculator('0')">0</button>
              <button class="calc-key" type="button" onclick="appendLearningCalculator('.')">.</button>
              <button class="calc-key" type="button" onclick="appendLearningCalculator('%')">%</button>
              <button class="calc-key calc-operator" type="button" onclick="appendLearningCalculator('+')">+</button>

              <button class="calc-key" type="button" onclick="insertLearningCalculatorAnswer()">Ans</button>
              <button class="calc-key" type="button" onclick="appendLearningCalculator('^2')">x²</button>
              <button class="calc-key calc-equals calc-span-two" type="button" onclick="calculateLearningCalculator()">=</button>
            </div>

            <div class="calculator-history-box">
              <div class="calculator-history-heading">
                <strong>Recent calculations</strong>
                <button type="button" onclick="clearLearningCalculatorHistory()">Clear history</button>
              </div>
              <ol id="learningCalculatorHistory"></ol>
            </div>
          </div>
        </div>


        <div class="learning-tool-panel hidden" id="learningToolNotes">
          <div class="learning-tool-panel-heading">
            <div>
              <h4>📝 Sticky Notes</h4>
              <p>Your notes autosave for this learning week on this device.</p>
            </div>
            <button class="tool-close-button" type="button" onclick="toggleLearningTool('notes')">×</button>
          </div>

          <textarea
            class="learning-notes-textarea"
            id="learningNotesInput"
            aria-label="Learning notes"
            oninput="saveLearningNotes()"
          ></textarea>

          <div class="learning-notes-actions">
            <span id="learningNotesStatus">Ready</span>
            <div>
              <button class="button button-light button-small" type="button" onclick="copyLearningNotes()">Copy Notes</button>
              <button class="button button-light button-small" type="button" onclick="clearLearningNotes()">Clear Notes</button>
            </div>
          </div>
        </div>


        <div class="learning-tool-panel hidden" id="learningToolWhiteboard">
          <div class="learning-tool-panel-heading">
            <div>
              <h4>🖍️ Whiteboard</h4>
              <p>Sketch a process stream, system boundary, arrows or calculation steps.</p>
            </div>
            <button class="tool-close-button" type="button" onclick="toggleLearningTool('whiteboard')">×</button>
          </div>

          <div class="whiteboard-toolbar" role="toolbar" aria-label="Whiteboard controls">
            <button class="whiteboard-tool active" id="whiteboardPenButton" type="button" onclick="setWhiteboardTool('pen')">✏️ Pen</button>
            <button class="whiteboard-tool" id="whiteboardEraserButton" type="button" onclick="setWhiteboardTool('eraser')">🧽 Eraser</button>
            <label class="whiteboard-colour-label">Colour <input id="whiteboardColourInput" type="color" value="#172554" onchange="setWhiteboardColour(this.value)"></label>
            <button class="whiteboard-tool" type="button" onclick="undoWhiteboard()">↶ Undo</button>
            <button class="whiteboard-tool" type="button" onclick="redoWhiteboard()">↷ Redo</button>
            <button class="whiteboard-tool" type="button" onclick="toggleWhiteboardGrid()"># Grid</button>
            <button class="whiteboard-tool" type="button" onclick="clearWhiteboard()">Clear</button>
            <button class="whiteboard-tool whiteboard-save" type="button" onclick="saveWhiteboardAsPng()">Save PNG</button>
          </div>

          <div class="whiteboard-canvas-wrap">
            <canvas id="learningWhiteboardCanvas" aria-label="Drawing whiteboard"></canvas>
          </div>

          <p class="whiteboard-status" id="whiteboardStatus">
            Whiteboard saves automatically on this device.
          </p>
        </div>
      </section>


      <div
        class="practice-question-flow"
        id="practiceQuestionFlow"
        aria-live="polite"
      ></div>

    </div>
  `;
}


function saveCurrentPracticeResponse(questionIndex) {
  const workingInput =
    document.getElementById("working" + questionIndex);

  const answerInput =
    document.getElementById("answer" + questionIndex);

  if (!currentPracticeResponses[questionIndex]) {
    currentPracticeResponses[questionIndex] = {
      working: "",
      answer: ""
    };
  }

  if (workingInput) {
    currentPracticeResponses[questionIndex].working =
      workingInput.value;
  }

  if (answerInput) {
    currentPracticeResponses[questionIndex].answer =
      answerInput.value;
  }
}


function getPracticeDotClass(questionIndex) {
  if (currentQuestionResults[questionIndex]) {
    return "completed";
  }

  if (questionIndex === currentPracticeQuestionIndex) {
    return "current";
  }

  return "";
}


function renderCurrentPracticeQuestion() {
  const lesson =
    getCurrentLessons()[currentLessonId];

  const container =
    document.getElementById("practiceQuestionFlow");

  if (!lesson || !container) {
    return;
  }

  const questionIndex =
    currentPracticeQuestionIndex;

  const question =
    lesson.questions[questionIndex];

  const response =
    currentPracticeResponses[questionIndex] || {
      working: "",
      answer: ""
    };

  const totalQuestions =
    lesson.questions.length;

  const positionPercent =
    Math.round(
      ((questionIndex + 1) / totalQuestions) * 100
    );

  const correctCount =
    Object.values(currentQuestionResults)
      .filter(Boolean)
      .length;

  const dots =
    lesson.questions
      .map((item, index) => {
        return `
          <button
            class="practice-progress-dot ${getPracticeDotClass(index)}"
            type="button"
            aria-label="Open question ${index + 1}"
            title="Question ${index + 1}"
            onclick="goToPracticeQuestion(${index})"
          >
            ${currentQuestionResults[index] ? "✓" : index + 1}
          </button>
        `;
      })
      .join("");

  const isLastQuestion =
    questionIndex === totalQuestions - 1;

  container.innerHTML = `
    <div class="practice-flow-header">
      <div>
        <strong>
          Question ${questionIndex + 1} of ${totalQuestions}
        </strong>
        <span>
          ${correctCount} completed
        </span>
      </div>

      <div class="practice-position-bar" aria-hidden="true">
        <div style="width:${positionPercent}%"></div>
      </div>

      <div class="practice-progress-dots" aria-label="Question progress">
        ${dots}
      </div>
    </div>


    <article
      class="practice-question ${currentQuestionResults[questionIndex] ? "correct" : ""}"
      id="practiceQuestion${questionIndex}"
    >

      <div class="practice-question-heading">
        <h4>
          Question ${questionIndex + 1}
        </h4>

        ${
          currentQuestionResults[questionIndex]
            ? `<span class="practice-complete-label">✓ Completed</span>`
            : ""
        }
      </div>


      <p class="practice-question-text">
        ${question.question}
      </p>


      <label for="working${questionIndex}">
        Show your working
      </label>


      <textarea
        id="working${questionIndex}"
        placeholder="Write your formula, substitution and calculation."
        oninput="saveCurrentPracticeResponse(${questionIndex})"
      ></textarea>


      <label for="answer${questionIndex}">
        Final answer
      </label>


      <input
        id="answer${questionIndex}"
        type="text"
        placeholder="Example: ${question.displayAnswer}"
        oninput="saveCurrentPracticeResponse(${questionIndex})"
      >


      <div class="practice-actions">
        <button
          class="button button-primary button-small"
          onclick="checkPracticeAnswer(${questionIndex})"
        >
          Check Answer
        </button>

        <button
          class="button button-light button-small"
          onclick="showPracticeHint(${questionIndex})"
        >
          Show Hint
        </button>
      </div>


      <p
        class="hint-message ${currentQuestionHintUsed[questionIndex] ? "" : "hidden"}"
        id="hint${questionIndex}"
      >
        ${currentQuestionHintUsed[questionIndex] ? "Hint: " + question.hint : ""}
      </p>


      <p
        class="feedback-message"
        id="feedback${questionIndex}"
      ></p>


      <div class="practice-navigation-buttons">
        <button
          class="button button-light"
          type="button"
          onclick="previousPracticeQuestion()"
          ${questionIndex === 0 ? "disabled" : ""}
        >
          ← Previous Question
        </button>

        <button
          class="button button-primary"
          type="button"
          onclick="${isLastQuestion ? "finishPracticeQuestionSet()" : "nextPracticeQuestion()"}"
        >
          ${isLastQuestion ? "Finish Practice" : "Next Question →"}
        </button>
      </div>

    </article>
  `;

  document.getElementById(
    "working" + questionIndex
  ).value = response.working;

  document.getElementById(
    "answer" + questionIndex
  ).value = response.answer;
}


function goToPracticeQuestion(questionIndex) {
  const lesson =
    getCurrentLessons()[currentLessonId];

  if (
    !lesson ||
    questionIndex < 0 ||
    questionIndex >= lesson.questions.length
  ) {
    return;
  }

  saveCurrentPracticeResponse(
    currentPracticeQuestionIndex
  );

  currentPracticeQuestionIndex =
    questionIndex;

  renderCurrentPracticeQuestion();

  document
    .getElementById("practiceQuestionFlow")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
}


function previousPracticeQuestion() {
  if (currentPracticeQuestionIndex > 0) {
    goToPracticeQuestion(
      currentPracticeQuestionIndex - 1
    );
  }
}


function nextPracticeQuestion() {
  const lesson =
    getCurrentLessons()[currentLessonId];

  if (
    lesson &&
    currentPracticeQuestionIndex <
      lesson.questions.length - 1
  ) {
    goToPracticeQuestion(
      currentPracticeQuestionIndex + 1
    );
  }
}


function finishPracticeQuestionSet() {
  saveCurrentPracticeResponse(
    currentPracticeQuestionIndex
  );

  const lesson =
    getCurrentLessons()[currentLessonId];

  const firstIncompleteIndex =
    lesson.questions.findIndex(
      (question, index) =>
        !currentQuestionResults[index]
    );

  if (firstIncompleteIndex !== -1) {
    showToast(
      "You still have an incomplete question. Your existing working has been saved."
    );

    goToPracticeQuestion(
      firstIncompleteIndex
    );

    return;
  }

  showToast(
    "All practice questions are complete. You may now complete this checkpoint."
  );

  document
    .querySelector(".lesson-completion-area")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
}


function updatePracticeQuestionFlow() {
  saveCurrentPracticeResponse(
    currentPracticeQuestionIndex
  );

  const currentFeedback =
    document.getElementById(
      "feedback" + currentPracticeQuestionIndex
    )?.textContent || "";

  const currentFeedbackClass =
    document.getElementById(
      "feedback" + currentPracticeQuestionIndex
    )?.className || "feedback-message";

  renderCurrentPracticeQuestion();

  const feedback =
    document.getElementById(
      "feedback" + currentPracticeQuestionIndex
    );

  if (feedback && currentFeedback) {
    feedback.textContent =
      currentFeedback;

    feedback.className =
      currentFeedbackClass;
  }
}


function showPracticeHint(questionIndex) {
  const lesson =
    getCurrentLessons()[currentLessonId];

  const question =
    lesson.questions[questionIndex];

  const hintBox =
    document.getElementById(
      "hint" + questionIndex
    );

  hintBox.textContent =
    "Hint: " + question.hint;

  hintBox.classList.remove("hidden");
  currentQuestionHintUsed[questionIndex] = true;
}


/* =========================================================
   22. LEARNING TOOLS
   Calculator, autosaving notes and whiteboard.
   ========================================================= */

const learningNotesTemplate = `Known values:

Unknown:

Formula:

Substitution:

Final answer:`;


function initialiseLearningTools() {
  learningCalculatorExpression = "";
  loadLearningCalculatorHistory();
  renderLearningCalculator();

  const notesInput =
    document.getElementById("learningNotesInput");

  if (notesInput) {
    notesInput.value =
      localStorage.getItem(getLearningNotesKey()) ||
      learningNotesTemplate;
  }

  whiteboardLoadedWeek = null;
}


function toggleLearningTool(toolName) {
  const panelIds = {
    calculator: "learningToolCalculator",
    notes: "learningToolNotes",
    whiteboard: "learningToolWhiteboard"
  };

  const targetId = panelIds[toolName];
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  const willOpen = target.classList.contains("hidden");

  Object.values(panelIds).forEach(panelId => {
    const panel = document.getElementById(panelId);

    if (panel && panelId !== targetId) {
      panel.classList.add("hidden");
    }
  });

  target.classList.toggle("hidden");

  if (willOpen) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

    if (toolName === "whiteboard") {
      window.setTimeout(initialiseWhiteboard, 60);
    }
  }
}


/* ---------------- CALCULATOR ---------------- */

function getLearningCalculatorHistoryKey() {
  return "foundationMathHubCalculatorHistory_" + selectedWeekId;
}


function loadLearningCalculatorHistory() {
  try {
    learningCalculatorHistory = JSON.parse(
      localStorage.getItem(getLearningCalculatorHistoryKey())
    ) || [];
  } catch (error) {
    learningCalculatorHistory = [];
  }

  renderLearningCalculatorHistory();
}


function saveLearningCalculatorHistory() {
  localStorage.setItem(
    getLearningCalculatorHistoryKey(),
    JSON.stringify(learningCalculatorHistory.slice(0, 6))
  );
}


function renderLearningCalculator() {
  const display =
    document.getElementById("learningCalculatorDisplay");

  if (display) {
    display.textContent =
      learningCalculatorExpression || "0";
  }
}


function setLearningCalculatorStatus(message) {
  const status =
    document.getElementById("learningCalculatorStatus");

  if (status) {
    status.textContent = message;
  }
}


function appendLearningCalculator(value) {
  learningCalculatorExpression += value;
  renderLearningCalculator();
  setLearningCalculatorStatus("Typing…");
}


function clearLearningCalculator() {
  learningCalculatorExpression = "";
  renderLearningCalculator();
  setLearningCalculatorStatus("Ready · Report final answers to 2 d.p.");
}


function deleteLearningCalculatorValue() {
  learningCalculatorExpression =
    learningCalculatorExpression.slice(0, -1);

  renderLearningCalculator();
  setLearningCalculatorStatus("Last entry deleted");
}


function insertLearningCalculatorAnswer() {
  learningCalculatorExpression +=
    formatLearningCalculatorNumber(
      learningCalculatorLastAnswer
    );

  renderLearningCalculator();
  setLearningCalculatorStatus("Previous answer inserted");
}


function formatLearningCalculatorNumber(value) {
  if (Number.isInteger(value)) {
    return String(value);
  }

  return Number(value.toPrecision(12)).toString();
}


function tokeniseLearningExpression(expression) {
  const normalised = expression
    .replaceAll("×", "*")
    .replaceAll("÷", "/")
    .replace(/\s+/g, "");

  const tokens = [];
  let index = 0;

  while (index < normalised.length) {
    const character = normalised[index];

    if (/[0-9.]/.test(character)) {
      let numberText = "";
      let decimalCount = 0;

      while (
        index < normalised.length &&
        /[0-9.]/.test(normalised[index])
      ) {
        if (normalised[index] === ".") {
          decimalCount += 1;
        }

        numberText += normalised[index];
        index += 1;
      }

      if (decimalCount > 1 || numberText === ".") {
        throw new Error("Invalid number");
      }

      tokens.push({
        type: "number",
        value: Number(numberText)
      });

      continue;
    }

    if ("+-*/^()%".includes(character)) {
      tokens.push({
        type: character,
        value: character
      });

      index += 1;
      continue;
    }

    throw new Error("Unsupported character");
  }

  return tokens;
}


function evaluateLearningExpression(expression) {
  const tokens = tokeniseLearningExpression(expression);
  let position = 0;

  function peek(type) {
    return tokens[position] && tokens[position].type === type;
  }

  function consume(type) {
    if (!peek(type)) {
      throw new Error("Unexpected input");
    }

    return tokens[position++];
  }

  function parseExpression() {
    let value = parseTerm();

    while (peek("+") || peek("-")) {
      const operator = tokens[position++].type;
      const rightValue = parseTerm();
      value = operator === "+"
        ? value + rightValue
        : value - rightValue;
    }

    return value;
  }

  function parseTerm() {
    let value = parsePower();

    while (peek("*") || peek("/")) {
      const operator = tokens[position++].type;
      const rightValue = parsePower();

      if (operator === "/" && rightValue === 0) {
        throw new Error("Cannot divide by zero");
      }

      value = operator === "*"
        ? value * rightValue
        : value / rightValue;
    }

    return value;
  }

  function parsePower() {
    let value = parseUnary();

    if (peek("^")) {
      consume("^");
      value = Math.pow(value, parsePower());
    }

    return value;
  }

  function parseUnary() {
    if (peek("+")) {
      consume("+");
      return parseUnary();
    }

    if (peek("-")) {
      consume("-");
      return -parseUnary();
    }

    return parsePostfix();
  }

  function parsePostfix() {
    let value = parsePrimary();

    while (peek("%")) {
      consume("%");
      value /= 100;
    }

    return value;
  }

  function parsePrimary() {
    if (peek("number")) {
      return consume("number").value;
    }

    if (peek("(")) {
      consume("(");
      const value = parseExpression();
      consume(")");
      return value;
    }

    throw new Error("Number or bracket expected");
  }

  if (tokens.length === 0) {
    throw new Error("Empty expression");
  }

  const result = parseExpression();

  if (position !== tokens.length || !Number.isFinite(result)) {
    throw new Error("Invalid expression");
  }

  return result;
}


function calculateLearningCalculator() {
  if (!learningCalculatorExpression.trim()) {
    return;
  }

  const originalExpression = learningCalculatorExpression;

  try {
    const result =
      evaluateLearningExpression(originalExpression);

    learningCalculatorLastAnswer = result;
    learningCalculatorExpression =
      formatLearningCalculatorNumber(result);

    learningCalculatorHistory.unshift({
      expression: originalExpression,
      result: learningCalculatorExpression
    });

    learningCalculatorHistory =
      learningCalculatorHistory.slice(0, 6);

    saveLearningCalculatorHistory();
    renderLearningCalculator();
    renderLearningCalculatorHistory();

    setLearningCalculatorStatus(
      "Answer = " + learningCalculatorExpression +
      " · Round the reported answer to 2 d.p."
    );
  } catch (error) {
    setLearningCalculatorStatus(
      error.message === "Cannot divide by zero"
        ? "Math error · Cannot divide by zero"
        : "Check the calculation entry and brackets"
    );
  }
}


function renderLearningCalculatorHistory() {
  const historyList =
    document.getElementById("learningCalculatorHistory");

  if (!historyList) {
    return;
  }

  historyList.innerHTML = learningCalculatorHistory.length
    ? learningCalculatorHistory
        .map(item => `
          <li>
            <span>${escapeHtml(item.expression)}</span>
            <strong>= ${escapeHtml(item.result)}</strong>
          </li>
        `)
        .join("")
    : "<li class=\"empty-history\">No calculations yet.</li>";
}


function clearLearningCalculatorHistory() {
  learningCalculatorHistory = [];
  saveLearningCalculatorHistory();
  renderLearningCalculatorHistory();
}


function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* ---------------- STICKY NOTES ---------------- */

function getLearningNotesKey() {
  return "foundationMathHubNotes_" + selectedWeekId;
}


function saveLearningNotes() {
  const notesInput =
    document.getElementById("learningNotesInput");

  const status =
    document.getElementById("learningNotesStatus");

  if (!notesInput) {
    return;
  }

  localStorage.setItem(
    getLearningNotesKey(),
    notesInput.value
  );

  if (status) {
    status.textContent = "Saved on this device";
  }
}


async function copyLearningNotes() {
  const notesInput =
    document.getElementById("learningNotesInput");

  if (!notesInput) {
    return;
  }

  try {
    await navigator.clipboard.writeText(notesInput.value);
    showToast("Notes copied.");
  } catch (error) {
    notesInput.select();
    document.execCommand("copy");
    showToast("Notes copied.");
  }
}


function clearLearningNotes() {
  const confirmed = window.confirm(
    "Clear your saved notes for this week?"
  );

  if (!confirmed) {
    return;
  }

  const notesInput =
    document.getElementById("learningNotesInput");

  if (notesInput) {
    notesInput.value = learningNotesTemplate;
  }

  saveLearningNotes();
  showToast("Notes cleared and the template was restored.");
}


/* ---------------- WHITEBOARD ---------------- */

function getWhiteboardStorageKey() {
  return "foundationMathHubWhiteboard_" + selectedWeekId;
}


function loadWhiteboard() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(getWhiteboardStorageKey())
    );

    whiteboardStrokes =
      Array.isArray(saved?.strokes)
        ? saved.strokes
        : [];

    whiteboardGridVisible =
      saved?.gridVisible !== false;
  } catch (error) {
    whiteboardStrokes = [];
    whiteboardGridVisible = true;
  }

  whiteboardRedoStack = [];
  whiteboardLoadedWeek = selectedWeekId;
}


function saveWhiteboard() {
  localStorage.setItem(
    getWhiteboardStorageKey(),
    JSON.stringify({
      strokes: whiteboardStrokes.slice(-250),
      gridVisible: whiteboardGridVisible
    })
  );

  const status =
    document.getElementById("whiteboardStatus");

  if (status) {
    status.textContent =
      "Whiteboard saved automatically on this device.";
  }
}


function initialiseWhiteboard() {
  const canvas =
    document.getElementById("learningWhiteboardCanvas");

  if (!canvas) {
    return;
  }

  if (whiteboardLoadedWeek !== selectedWeekId) {
    loadWhiteboard();
  }

  if (!canvas.dataset.ready) {
    canvas.dataset.ready = "true";
    canvas.style.touchAction = "none";

    canvas.addEventListener("pointerdown", startWhiteboardStroke);
    canvas.addEventListener("pointermove", continueWhiteboardStroke);
    canvas.addEventListener("pointerup", finishWhiteboardStroke);
    canvas.addEventListener("pointercancel", finishWhiteboardStroke);
  }

  resizeWhiteboardCanvas();
  updateWhiteboardToolButtons();
}


function resizeWhiteboardCanvas() {
  const canvas =
    document.getElementById("learningWhiteboardCanvas");

  if (!canvas) {
    return;
  }

  const width = Math.max(
    300,
    Math.floor(canvas.parentElement.clientWidth)
  );

  const height = width < 600 ? 360 : 460;
  const pixelRatio = Math.max(1, window.devicePixelRatio || 1);

  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  canvas.width = Math.floor(width * pixelRatio);
  canvas.height = Math.floor(height * pixelRatio);

  canvas.dataset.logicalWidth = String(width);
  canvas.dataset.logicalHeight = String(height);
  canvas.dataset.pixelRatio = String(pixelRatio);

  renderWhiteboard();
}


function getWhiteboardPoint(event) {
  const canvas =
    document.getElementById("learningWhiteboardCanvas");

  const rectangle = canvas.getBoundingClientRect();

  return {
    x: Math.min(1, Math.max(0,
      (event.clientX - rectangle.left) / rectangle.width
    )),
    y: Math.min(1, Math.max(0,
      (event.clientY - rectangle.top) / rectangle.height
    ))
  };
}


function startWhiteboardStroke(event) {
  event.preventDefault();

  const canvas = event.currentTarget;
  canvas.setPointerCapture(event.pointerId);

  whiteboardActiveStroke = {
    tool: whiteboardTool,
    colour: whiteboardColour,
    width: whiteboardTool === "eraser" ? 26 : 3,
    points: [getWhiteboardPoint(event)]
  };

  whiteboardRedoStack = [];
  renderWhiteboard();
}


function continueWhiteboardStroke(event) {
  if (!whiteboardActiveStroke) {
    return;
  }

  event.preventDefault();

  const nextPoint = getWhiteboardPoint(event);
  const lastPoint =
    whiteboardActiveStroke.points[
      whiteboardActiveStroke.points.length - 1
    ];

  const distance = Math.hypot(
    nextPoint.x - lastPoint.x,
    nextPoint.y - lastPoint.y
  );

  if (
    distance >= 0.002 &&
    whiteboardActiveStroke.points.length < 1500
  ) {
    whiteboardActiveStroke.points.push(nextPoint);
    renderWhiteboard();
  }
}


function finishWhiteboardStroke(event) {
  if (!whiteboardActiveStroke) {
    return;
  }

  event.preventDefault();

  if (whiteboardActiveStroke.points.length === 1) {
    whiteboardActiveStroke.points.push(
      whiteboardActiveStroke.points[0]
    );
  }

  whiteboardStrokes.push(whiteboardActiveStroke);
  whiteboardActiveStroke = null;
  saveWhiteboard();
  renderWhiteboard();
}


function drawWhiteboardGrid(context, width, height) {
  context.save();
  context.strokeStyle = "#e5e7eb";
  context.lineWidth = 1;

  for (let x = 24; x < width; x += 24) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }

  for (let y = 24; y < height; y += 24) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }

  context.restore();
}


function drawWhiteboardStroke(
  context,
  stroke,
  width,
  height
) {
  if (!stroke.points.length) {
    return;
  }

  context.save();
  context.globalCompositeOperation =
    stroke.tool === "eraser"
      ? "destination-out"
      : "source-over";

  context.strokeStyle = stroke.colour;
  context.lineWidth = stroke.width;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.beginPath();

  stroke.points.forEach((point, index) => {
    const x = point.x * width;
    const y = point.y * height;

    if (index === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  });

  context.stroke();
  context.restore();
}


function renderWhiteboard() {
  const canvas =
    document.getElementById("learningWhiteboardCanvas");

  if (!canvas || !canvas.width) {
    return;
  }

  const context = canvas.getContext("2d");
  const width = Number(canvas.dataset.logicalWidth);
  const height = Number(canvas.dataset.logicalHeight);
  const pixelRatio = Number(canvas.dataset.pixelRatio) || 1;

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);

  if (whiteboardGridVisible) {
    drawWhiteboardGrid(context, width, height);
  }

  const layer = document.createElement("canvas");
  layer.width = canvas.width;
  layer.height = canvas.height;

  const layerContext = layer.getContext("2d");
  layerContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  const strokesToRender = whiteboardActiveStroke
    ? [...whiteboardStrokes, whiteboardActiveStroke]
    : whiteboardStrokes;

  strokesToRender.forEach(stroke => {
    drawWhiteboardStroke(layerContext, stroke, width, height);
  });

  context.drawImage(layer, 0, 0, width, height);
}


function setWhiteboardTool(tool) {
  whiteboardTool = tool;
  updateWhiteboardToolButtons();
}


function setWhiteboardColour(colour) {
  whiteboardColour = colour;
  setWhiteboardTool("pen");
}


function updateWhiteboardToolButtons() {
  const penButton =
    document.getElementById("whiteboardPenButton");

  const eraserButton =
    document.getElementById("whiteboardEraserButton");

  if (penButton) {
    penButton.classList.toggle(
      "active",
      whiteboardTool === "pen"
    );
  }

  if (eraserButton) {
    eraserButton.classList.toggle(
      "active",
      whiteboardTool === "eraser"
    );
  }
}


function undoWhiteboard() {
  if (!whiteboardStrokes.length) {
    return;
  }

  whiteboardRedoStack.push(
    whiteboardStrokes.pop()
  );

  saveWhiteboard();
  renderWhiteboard();
}


function redoWhiteboard() {
  if (!whiteboardRedoStack.length) {
    return;
  }

  whiteboardStrokes.push(
    whiteboardRedoStack.pop()
  );

  saveWhiteboard();
  renderWhiteboard();
}


function toggleWhiteboardGrid() {
  whiteboardGridVisible = !whiteboardGridVisible;
  saveWhiteboard();
  renderWhiteboard();
}


function clearWhiteboard() {
  const confirmed = window.confirm(
    "Clear your whiteboard for this week?"
  );

  if (!confirmed) {
    return;
  }

  whiteboardStrokes = [];
  whiteboardRedoStack = [];
  saveWhiteboard();
  renderWhiteboard();
  showToast("Whiteboard cleared.");
}


function saveWhiteboardAsPng() {
  const canvas =
    document.getElementById("learningWhiteboardCanvas");

  if (!canvas) {
    return;
  }

  renderWhiteboard();

  const link = document.createElement("a");
  link.download =
    `${selectedWeekId || "learning"}-whiteboard.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}


window.addEventListener("resize", () => {
  const whiteboardPanel =
    document.getElementById("learningToolWhiteboard");

  if (
    whiteboardPanel &&
    !whiteboardPanel.classList.contains("hidden")
  ) {
    resizeWhiteboardCanvas();
  }
});


/* =========================================================
   22. ANSWER-CHECKING TOOLS
   ========================================================= */

/* Make the typed text easier to compare */

function normaliseText(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "")
    .replaceAll("³", "3")
    .replaceAll("^", "")
    .replaceAll("per", "/")
    .replace(/[.;,:]+$/, "");
}


/* Find the first numerical value typed */

function extractNumber(text) {
  const cleaned =
    text.replaceAll(",", "");

  const match =
    cleaned.match(
      /-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/i
    );

  if (!match) {
    return NaN;
  }

  return Number(match[0]);
}


/* Check whether the student used exactly two decimal places */

function hasTwoDecimalPlaces(text) {
  const cleaned =
    text.replaceAll(",", "");

  const match =
    cleaned.match(
      /-?\d+\.(\d+)/
    );

  return Boolean(
    match &&
    match[1].length === 2
  );
}


/* Safely prepare a unit for a regular expression */

function escapeRegularExpression(text) {
  return text.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
}


/* Check whether the final unit is correct */

function containsAcceptedUnit(
  answer,
  acceptedUnits
) {
  if (acceptedUnits.length === 0) {
    return true;
  }

  const normalisedAnswer =
    normaliseText(answer);

  return acceptedUnits.some(unit => {
    const normalisedUnit =
      normaliseText(unit);

    const escapedUnit =
      escapeRegularExpression(
        normalisedUnit
      );

    const unitPattern =
      new RegExp(
        `(?:^|[^a-z])${escapedUnit}$`,
        "i"
      );

    return unitPattern.test(
      normalisedAnswer
    );
  });
}


/* =========================================================
   MASTERY STAR HELPERS
   ========================================================= */

const masteryStarKeys = [
  "formula",
  "unit",
  "practice",
  "persistence",
  "application"
];


function awardMasteryStar(starKey) {
  if (!masteryStarKeys.includes(starKey)) {
    return;
  }

  if (!studentProgress.masteryStars) {
    studentProgress.masteryStars =
      createEmptyProgress().masteryStars;
  }

  if (!studentProgress.masteryStars[starKey]) {
    studentProgress.masteryStars[starKey] = true;
    saveProgress();
  }
}


function refreshAutomaticMasteryStars() {
  if (selectedWeekId === "week-2") {
    if (isActivityCompleted("composition")) {
      awardMasteryStar("formula");
    }

    if (
      isActivityCompleted("composition") &&
      isActivityCompleted("flow-rates")
    ) {
      awardMasteryStar("practice");
    }

    if (
      isActivityCompleted("integrated-stream") ||
      isActivityCompleted("meb-challenge")
    ) {
      awardMasteryStar("application");
    }

    return;
  }

  /* Week 1 migration: map completed checkpoints to the five stars. */
  const completedCount = getCompletedCheckpointCount();

  masteryStarKeys.forEach((starKey, index) => {
    if (completedCount > index) {
      awardMasteryStar(starKey);
    }
  });
}


function getMasteryStarCount() {
  refreshAutomaticMasteryStars();

  return masteryStarKeys.filter(
    starKey => studentProgress.masteryStars?.[starKey]
  ).length;
}


function rewardTokenIsEarned() {
  return (
    getCompletedCheckpointCount() ===
      getCurrentCheckpointIds().length &&
    isActivityCompleted("official-quiz")
  );
}


function getAvailableRewardTokenCount() {
  return rewardTokenIsEarned() &&
    !studentProgress.rewardTokenRedeemed
      ? 1
      : 0;
}


/* =========================================================
   23. CHECK A PRACTICE ANSWER
   ========================================================= */

function checkPracticeAnswer(questionIndex) {
  saveCurrentPracticeResponse(questionIndex);

  const lesson =
    getCurrentLessons()[currentLessonId];

  const question =
    lesson.questions[questionIndex];

  const workingInput =
    document.getElementById(
      "working" + questionIndex
    );

  const answerInput =
    document.getElementById(
      "answer" + questionIndex
    );

  const feedback =
    document.getElementById(
      "feedback" + questionIndex
    );

  const questionCard =
    document.getElementById(
      "practiceQuestion" + questionIndex
    );

  const working =
    workingInput.value.trim();

  const answer =
    answerInput.value.trim();

  if (working.length < 5) {
    feedback.textContent =
      "Start by writing the formula or your first calculation step. Your working does not need to be perfect.";

    feedback.className =
      "feedback-message supportive";

    return;
  }

  const studentNumber =
    extractNumber(answer);

  if (Number.isNaN(studentNumber)) {
    feedback.textContent =
      "Add a numerical final answer, then check it again. You may use the hint when you need support.";

    feedback.className =
      "feedback-message supportive";

    return;
  }

  const allowedDifference = 0.005;

  const numberCorrect =
    Math.abs(
      studentNumber -
      question.expectedNumber
    ) <= allowedDifference;

  const unitCorrect =
    containsAcceptedUnit(
      answer,
      question.acceptedUnits
    );

  const decimalFormatCorrect =
    hasTwoDecimalPlaces(answer);

  if (
    numberCorrect &&
    unitCorrect &&
    decimalFormatCorrect
  ) {
    currentQuestionResults[questionIndex] = true;

    const attempts =
      currentQuestionAttempts[questionIndex] || 0;

    feedback.textContent =
      attempts > 0
        ? "Correct—great persistence. You adjusted your method and reached " +
          question.displayAnswer + "."
        : "Correct. Final answer: " +
          question.displayAnswer + ".";

    feedback.className =
      "feedback-message correct";

    questionCard.classList.add("correct");

    if (
      selectedWeekId === "week-2" &&
      question.acceptedUnits.length > 0
    ) {
      awardMasteryStar("unit");
    }

    if (
      selectedWeekId === "week-2" &&
      (attempts > 0 || currentQuestionHintUsed[questionIndex])
    ) {
      awardMasteryStar("persistence");
    }

    updateStudentSummary();
    renderWeeklyRewards();
  } else if (
    numberCorrect &&
    unitCorrect &&
    !decimalFormatCorrect
  ) {
    currentQuestionResults[questionIndex] = false;

    feedback.textContent =
      "Your calculation is correct. You are one small step away—rewrite the final answer using exactly two decimal places, for example " +
      question.displayAnswer + ".";

    feedback.className =
      "feedback-message supportive";

    questionCard.classList.remove("correct");
  } else if (
    numberCorrect &&
    !unitCorrect
  ) {
    currentQuestionResults[questionIndex] = false;

    feedback.textContent =
      "Your number is correct. Now add or correct the final unit, then check again.";

    feedback.className =
      "feedback-message supportive";

    questionCard.classList.remove("correct");
  } else {
    currentQuestionResults[questionIndex] = false;
    currentQuestionAttempts[questionIndex] =
      (currentQuestionAttempts[questionIndex] || 0) + 1;

    const attempts =
      currentQuestionAttempts[questionIndex];

    if (attempts === 1) {
      feedback.textContent =
        "Not quite yet. Check the formula and try again. You can open the hint whenever you need it.";
    } else if (attempts === 2) {
      feedback.textContent =
        "You’re getting there. Hint: " +
        question.hint;
    } else if (attempts === 3) {
      feedback.textContent =
        "Let’s complete the first step together: " +
        question.hint;
    } else {
      feedback.textContent =
        "Good persistence. Review the worked example above, use the same steps, and try once more. Your progress is not lost.";
    }

    feedback.className =
      "feedback-message supportive";

    questionCard.classList.remove("correct");
  }

  updateLessonCompletionButton();
  updatePracticeQuestionFlow();
}


/* =========================================================
   24. UNLOCK THE CHECKPOINT BUTTON
   ========================================================= */

function updateLessonCompletionButton() {
  const results =
    Object.values(
      currentQuestionResults
    );

  const allCorrect =
    results.length > 0 &&
    results.every(
      result => result === true
    );

  document.getElementById(
    "completeLessonButton"
  ).disabled =
    !allCorrect;

  document.getElementById(
    "completionHelp"
  ).textContent =
    allCorrect
      ? "Excellent. You may now complete this checkpoint."
      : "Complete all questions correctly to unlock this button.";
}


/* =========================================================
   25. COMPLETE THE CURRENT LESSON
   ========================================================= */

function completeCurrentLesson() {
  if (!currentLessonId) {
    return;
  }

  const wasAlreadyCompleted =
    isActivityCompleted(
      currentLessonId
    );

  markActivityCompleted(
    currentLessonId
  );

  updateWholeWeek();

  if (!wasAlreadyCompleted) {
    showCelebration(
      currentLessonId
    );
  } else {
    showToast(
      "This checkpoint was already completed."
    );
  }
}


/* =========================================================
   26. COMPLETION POPUP
   ========================================================= */

function showCelebration(activityId) {
  currentBonusActivity = activityId;

  const completedCount =
    getCompletedCheckpointCount();

  const level =
    studentLevels[
      Math.min(
        completedCount,
        studentLevels.length - 1
      )
    ];

  refreshAutomaticMasteryStars();

  document.getElementById(
    "celebrationCharacter"
  ).textContent = level.character;

  document.getElementById(
    "celebrationTitle"
  ).textContent =
    completedCount === getCurrentCheckpointIds().length
      ? "You Reached the Weekly Goal!"
      : "Checkpoint Completed!";

  document.getElementById(
    "celebrationText"
  ).textContent =
    completedCount === getCurrentCheckpointIds().length
      ? "Your five checkpoints are complete. Submit the official quiz to earn the weekly Reward Token."
      : "Good work. Your checkpoint progress and Mastery Stars have been updated.";

  document.getElementById(
    "bonusResult"
  ).textContent =
    "You now have " + getMasteryStarCount() +
    " of 5 Mastery Stars. Reward Tokens are not awarded by chance.";

  const rewardButton =
    document.getElementById("rollBonusButton");

  rewardButton.disabled = false;
  rewardButton.textContent = "View My Rewards";

  document
    .getElementById("celebrationModal")
    .classList.remove("hidden");
}


/* =========================================================
   27. OPEN THE REWARD CENTRE FROM THE COMPLETION MESSAGE
   ========================================================= */

function rollBonusGame() {
  document
    .getElementById("celebrationModal")
    .classList.add("hidden");

  showWeekDashboard();
  updateWholeWeek();
  scrollToRewardCentre();
}


/* =========================================================
   28. COUNT COMPLETED CHECKPOINTS
   ========================================================= */

function getCompletedCheckpointCount() {
  return getCurrentCheckpointIds().filter(
    checkpointId =>
      isActivityCompleted(checkpointId)
  ).length;
}


/* =========================================================
   29. CREATE THE ADVENTURE ROUTE
   ========================================================= */

function renderAdventureRoute() {
  const completedCount =
    getCompletedCheckpointCount();

  const checkpointPositions = [
    15,
    32.5,
    50,
    67.5,
    85
  ];

  const container =
    document.getElementById(
      "routeCheckpoints"
    );

  container.innerHTML = "";

  getCurrentCheckpointIds().forEach(
    (checkpointId, index) => {
      const activity =
        getCurrentActivities().find(
          item =>
            item.id === checkpointId
        );

      const node =
        document.createElement("div");

      node.className =
        "route-node";

      node.style.left =
        checkpointPositions[index] +
        "%";

      if (
        isActivityCompleted(checkpointId)
      ) {
        node.classList.add(
          "completed"
        );
      }

      if (
        index === completedCount &&
        completedCount < getCurrentCheckpointIds().length
      ) {
        node.classList.add(
          "current"
        );
      }

      node.innerHTML = `
        <div class="route-circle">

          ${
            isActivityCompleted(checkpointId)
              ? "✓"
              : index + 1
          }

        </div>


        <div class="route-label">
          ${activity.routeLabel}
        </div>
      `;

      container.appendChild(node);
    }
  );

  let routePercentage = 0;

  if (
    completedCount > 0 &&
    completedCount < getCurrentCheckpointIds().length
  ) {
    routePercentage =
      checkpointPositions[
        completedCount - 1
      ];
  }

  if (completedCount === getCurrentCheckpointIds().length) {
    routePercentage = 100;
  }

  document.getElementById(
    "routeCompleted"
  ).style.width =
    routePercentage + "%";

  document.getElementById(
    "studentMarker"
  ).style.left =
    routePercentage + "%";
}


/* =========================================================
   30. UPDATE STARS, LEVEL AND ROUTE MESSAGE
   ========================================================= */

function updateStudentSummary() {
  const completedCount =
    getCompletedCheckpointCount();

  const masteryCount =
    getMasteryStarCount();

  const level =
    studentLevels[
      Math.min(
        completedCount,
        studentLevels.length - 1
      )
    ];

  document.getElementById(
    "starCount"
  ).textContent = masteryCount;

  document.getElementById(
    "bonusTokenCount"
  ).textContent = getAvailableRewardTokenCount();

  document.getElementById(
    "checkpointSummary"
  ).textContent =
    completedCount + " / " + getCurrentCheckpointIds().length;

  document.getElementById(
    "heroCharacter"
  ).textContent = level.character;

  document.getElementById(
    "studentMarker"
  ).textContent = level.character;

  document.getElementById(
    "heroLevel"
  ).textContent = level.name;

  if (completedCount === getCurrentCheckpointIds().length) {
    document.getElementById(
      "routeStatus"
    ).textContent = "🏁 Weekly goal completed!";
  } else {
    const nextCheckpointId =
      getCurrentCheckpointIds()[completedCount];

    const nextActivity =
      getCurrentActivities().find(
        item => item.id === nextCheckpointId
      );

    document.getElementById(
      "routeStatus"
    ).textContent =
      "Next checkpoint: " + nextActivity.routeLabel;
  }
}


/* =========================================================
   31. UPDATE WEEKLY REWARDS
   ========================================================= */

function renderWeeklyRewards() {
  document.getElementById(
    "rewardWeekTitle"
  ).textContent =
    selectedWeek.number + ": " + selectedWeek.title;

  document.getElementById(
    "rewardReleaseStatus"
  ).textContent = selectedWeek.status;

  const badgeTitle =
    document.getElementById("masteryBadgeTitle");

  if (badgeTitle) {
    badgeTitle.textContent =
      selectedWeek.number + " Process Problem Solver Badge";
  }

  const masteryCount = getMasteryStarCount();

  document.getElementById(
    "rewardMasteryCount"
  ).textContent = masteryCount;

  const starElementIds = {
    formula: "masteryStarFormula",
    unit: "masteryStarUnit",
    practice: "masteryStarPractice",
    persistence: "masteryStarPersistence",
    application: "masteryStarApplication"
  };

  Object.entries(starElementIds).forEach(
    ([starKey, elementId]) => {
      const card = document.getElementById(elementId);

      if (!card) {
        return;
      }

      const earned =
        Boolean(studentProgress.masteryStars?.[starKey]);

      card.classList.toggle("earned", earned);

      const icon = card.querySelector(".mastery-star-icon");

      if (icon) {
        icon.textContent = earned ? "⭐" : "☆";
      }
    }
  );

  const badgeUnlocked = masteryCount === 5;
  const badgeBox = document.getElementById("masteryBadgeBox");

  badgeBox.classList.toggle("unlocked", badgeUnlocked);

  document.getElementById(
    "masteryBadgeStatus"
  ).textContent =
    badgeUnlocked
      ? "🏅 Badge unlocked"
      : "Badge in progress";

  const tokenStatus =
    document.getElementById("rewardTokenStatus");

  const redeemButton =
    document.getElementById("redeemTokenButton");

  if (studentProgress.rewardTokenRedeemed) {
    tokenStatus.textContent =
      "Token redeemed on this device. Lecturer confirmation is still the official record.";

    redeemButton.disabled = true;
    redeemButton.textContent = "Token Redeemed";
  } else if (rewardTokenIsEarned()) {
    tokenStatus.textContent =
      "Reward Token earned! Show this screen to your lecturer before using the five-minute privilege.";

    redeemButton.disabled = false;
    redeemButton.textContent = "Use My Token";
  } else {
    tokenStatus.textContent =
      "Complete all five checkpoints and submit the official quiz to earn one token.";

    redeemButton.disabled = true;
    redeemButton.textContent = "Token Locked";
  }

  const currentWeekIndex =
    weeks.findIndex(
      week => week.id === selectedWeekId
    );

  const nextWeek = weeks[currentWeekIndex + 1];

  document.getElementById(
    "nextReleaseText"
  ).textContent =
    nextWeek
      ? nextWeek.releaseNote
      : "This is the final scheduled learning week.";
}


function scrollToRewardCentre() {
  showWeekDashboard();
  updateWholeWeek();

  window.setTimeout(() => {
    document.getElementById("rewardSection")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 40);
}


function scrollToActivities() {
  showWeekDashboard();

  window.setTimeout(() => {
    document.getElementById("activitiesSection")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 40);
}


function redeemRewardToken() {
  if (!rewardTokenIsEarned()) {
    showToast(
      "Complete all checkpoints and the official quiz before using the token."
    );
    return;
  }

  if (studentProgress.rewardTokenRedeemed) {
    showToast("This weekly token is already marked as redeemed.");
    return;
  }

  const confirmed = window.confirm(
    "Only continue after your lecturer approves the five-minute privilege. Mark this Reward Token as redeemed?"
  );

  if (!confirmed) {
    return;
  }

  studentProgress.rewardTokenRedeemed = true;
  studentProgress.rewardTokenRedeemedAt =
    new Date().toISOString();

  saveProgress();
  updateWholeWeek();

  showToast(
    "Reward Token marked as redeemed on this device."
  );
}


/* =========================================================
   32. STUDENT COMPLETION EVIDENCE
   ========================================================= */

function evidenceIsUnlocked() {
  return (
    getCompletedCheckpointCount() === getCurrentCheckpointIds().length &&
    isActivityCompleted("official-quiz")
  );
}


function renderEvidenceSection() {
  const section =
    document.getElementById(
      "evidenceSection"
    );

  const form =
    document.getElementById(
      "evidenceForm"
    );

  const lock =
    document.getElementById(
      "evidenceLock"
    );

  const instructions =
    document.getElementById(
      "evidenceInstructions"
    );

  if (evidenceIsUnlocked()) {
    section.classList.remove(
      "locked-evidence"
    );

    form.classList.remove(
      "hidden"
    );

    lock.textContent =
      "✅";

    instructions.textContent =
      "Your weekly evidence is unlocked. Add your name and class before saving or printing it.";

    document.getElementById(
      "studentNameInput"
    ).value =
      studentProgress.studentName;

    document.getElementById(
      "studentClassInput"
    ).value =
      studentProgress.studentClass;

    updateEvidenceDocument();
  } else {
    section.classList.add(
      "locked-evidence"
    );

    form.classList.add(
      "hidden"
    );

    lock.textContent =
      "🔒";

    instructions.textContent =
      "Complete all five checkpoints and submit the official quiz to unlock your evidence.";
  }
}


function updateEvidenceDocument() {
  const completedCount =
    getCompletedCheckpointCount();

  const level =
    studentLevels[
      Math.min(
        completedCount,
        studentLevels.length - 1
      )
    ];

  document.getElementById(
    "evidenceStudentName"
  ).textContent =
    studentProgress.studentName ||
    "Not entered";

  document.getElementById(
    "evidenceStudentClass"
  ).textContent =
    studentProgress.studentClass ||
    "Not entered";

  document.getElementById(
    "evidenceWeek"
  ).textContent =
    selectedWeek.number +
    ": " +
    selectedWeek.title;

  document.getElementById(
    "evidenceCheckpoints"
  ).textContent =
    completedCount + " / " + getCurrentCheckpointIds().length;

  document.getElementById(
    "evidenceStars"
  ).textContent =
    getMasteryStarCount() + " / 5";

  document.getElementById(
    "evidenceTokens"
  ).textContent =
    rewardTokenIsEarned()
      ? studentProgress.rewardTokenRedeemed
        ? "1 (Redeemed)"
        : "1"
      : "0";

  document.getElementById(
    "evidenceLevel"
  ).textContent =
    level.character +
    " " +
    level.name;

  const completionDate =
    studentProgress
      .completionDates[
        "official-quiz"
      ];

  document.getElementById(
    "evidenceDate"
  ).textContent =
    completionDate
      ? formatDate(completionDate)
      : formatDate(
          new Date().toISOString()
        );
}


function saveEvidenceDetails() {
  const name =
    document.getElementById(
      "studentNameInput"
    ).value.trim();

  const studentClass =
    document.getElementById(
      "studentClassInput"
    ).value.trim();

  if (!name || !studentClass) {
    showToast(
      "Please enter both your name and class."
    );

    return;
  }

  studentProgress.studentName =
    name;

  studentProgress.studentClass =
    studentClass;

  saveProgress();
  updateEvidenceDocument();

  showToast(
    "Evidence details updated."
  );
}


function printEvidence() {
  if (
    !studentProgress.studentName ||
    !studentProgress.studentClass
  ) {
    showToast(
      "Enter and save your name and class before printing."
    );

    return;
  }

  window.print();
}


function formatDate(isoDate) {
  return new Date(
    isoDate
  ).toLocaleString(
    "en-SG",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }
  );
}


/* =========================================================
   33. RETURN TO THE ACTIVITY CARDS
   ========================================================= */

function returnToActivities() {
  showWeekDashboard();
  updateWholeWeek();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   34. RESET THE SELECTED WEEK
   ========================================================= */

function resetStudentProgress() {
  const confirmed =
    window.confirm(
      "Are you sure you want to reset all progress for this week?"
    );

  if (!confirmed) {
    return;
  }

  studentProgress =
    createEmptyProgress();

  saveProgress();

  currentLessonId = null;
  currentQuestionResults = {};
  currentQuestionAttempts = {};
  currentQuestionHintUsed = {};
  whiteboardLoadedWeek = null;

  localStorage.removeItem(getLearningNotesKey());
  localStorage.removeItem(getWhiteboardStorageKey());
  localStorage.removeItem(getLearningCalculatorHistoryKey());

  returnToActivities();

  showToast(
    "Weekly progress has been reset."
  );
}


/* =========================================================
   35. SMALL MESSAGE AT THE BOTTOM
   ========================================================= */

function showToast(message) {
  const toast =
    document.getElementById(
      "toastMessage"
    );

  toast.textContent =
    message;

  toast.classList.remove(
    "hidden"
  );

  window.setTimeout(() => {
    toast.classList.add(
      "hidden"
    );
  }, 3500);
}


/* =========================================================
   36. UPDATE THE WHOLE SELECTED WEEK
   ========================================================= */

function updateWholeWeek() {
  renderActivityCards();
  renderAdventureRoute();
  updateStudentSummary();
  renderWeeklyRewards();
  renderEvidenceSection();
}


/* =========================================================
   37. CONNECT THE HTML BUTTONS
   ========================================================= */

document.getElementById(
  "backToWeeksButton"
).addEventListener(
  "click",
  returnToWeeks
);


document.getElementById(
  "resetProgressButton"
).addEventListener(
  "click",
  resetStudentProgress
);


document.getElementById(
  "backToActivitiesButton"
).addEventListener(
  "click",
  returnToActivities
);


document.getElementById(
  "outcomesContinueButton"
).addEventListener(
  "click",
  completeOutcomesAndContinue
);


document.getElementById(
  "backFromLearningPathButton"
).addEventListener(
  "click",
  showWeekDashboard
);


document.getElementById(
  "learningPathContinueButton"
).addEventListener(
  "click",
  completeLearningPath
);


document.getElementById(
  "completeLessonButton"
).addEventListener(
  "click",
  completeCurrentLesson
);


document.getElementById(
  "saveEvidenceDetailsButton"
).addEventListener(
  "click",
  saveEvidenceDetails
);


document.getElementById(
  "printEvidenceButton"
).addEventListener(
  "click",
  printEvidence
);


document.getElementById(
  "rollBonusButton"
).addEventListener(
  "click",
  rollBonusGame
);


document.getElementById(
  "redeemTokenButton"
).addEventListener(
  "click",
  redeemRewardToken
);


document.getElementById(
  "closeModalButton"
).addEventListener(
  "click",
  () => {
    document
      .getElementById("celebrationModal")
      .classList.add("hidden");

    returnToActivities();
  }
);


/* Close the popup when the dark background is clicked */

document.getElementById(
  "celebrationModal"
).addEventListener(
  "click",
  event => {
    if (
      event.target.id ===
      "celebrationModal"
    ) {
      document
        .getElementById("celebrationModal")
        .classList.add("hidden");

      returnToActivities();
    }
  }
);


/* =========================================================
   38. START THE WEBSITE
   ========================================================= */

renderWeekCards();