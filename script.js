/* =========================================================
   FOUNDATION MATH HUB
   MULTI-WEEK WEBSITE — WEEKS 1 TO 5

   Week 1 remains unchanged.
   Week 3 extends the proven Week 2 structure without changing
   the existing Week 1 and Week 2 learning content.
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
  },

  "week-3": {
    read:
      "https://app.edcafe.ai/slidedeck/6a6c5a0e8155bac122d46ba4",

    listen:
      "https://app.edcafe.ai/ai-speech/6a6c5ae7ad8710c9cbc663c4",

    flashcards:
      "https://app.edcafe.ai/flashcards/6a6c5b82ad8710c9cbc6663d",

    understandPractice:
      "https://app.edcafe.ai/quizzes/6a6c5bf5ad8710c9cbc6684b",

    officialQuiz:
      "https://forms.cloud.microsoft/r/zX3cb3Raxn"
  },

  "week-4": {
    preTest:
      "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=jCy0E8_LPU6dIPVbe17jwfn3D9q2Xd9Ci6lD9o2F-fxUQkVGRU85RUtEUkUzNDNBWVY1UUxQTFdROC4u",

    mission1:
      "https://app.edcafe.ai/share/quiz/week-4-mission-1-checkpoint-–-read-the-reaction-6a7446b0ca64f4eb0330da02?sig=31a2d2e22d8c466ed154222cb0ba1f5b",

    mission2:
      "https://app.edcafe.ai/share/quiz/week-4-mission-2-checkpoint-–-convert-like-an-engineer-6a744258ca64f4eb0330c3f6?sig=565cf1b874985f7d8baa9aed62c4ef20",

    mission3:
      "https://app.edcafe.ai/share/quiz/week-4-mission-3-checkpoint-–-master-the-mole-ratio-6a744337ca64f4eb0330c8fc?sig=8d654719cbd73587eb41626c35136780",

    mission4:
      "https://app.edcafe.ai/share/quiz/week-4-mission-4-checkpoint-–-find-the-limiting-reactant-6a7443b81a30f33122dbf049?sig=cf8e7644b5c570a303116b51cd038468",

    mission5:
      "https://app.edcafe.ai/share/quiz/week-4-mission-5-checkpoint-–-percentage-excess-percentage-conversio-6a7443fcca64f4eb0330ce70?sig=bd6e2399d7d29d8172c18c2065a1e547",

    postTest:
      "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=jCy0E8_LPU6dIPVbe17jwfn3D9q2Xd9Ci6lD9o2F-fxUOEVBRTFaWFRZOTEzUE1YT0FBMUtJMU1NTy4u",

    studentSurvey:
      "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=jCy0E8_LPU6dIPVbe17jwfn3D9q2Xd9Ci6lD9o2F-fxUMDZFSDdIT1BZTEdWMjBLWUZIWUtUWFFIOC4u"
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

    available: true,
    status: "Available now",
    releaseNote: "Week 3 is available now.",

    tags: [
      "🏭 System Boundary",
      "🟢 Inputs",
      "🔵 Outputs",
      "⚖️ Overall Balance",
      "📏 kg/min"
    ]
  },

  {
    id: "week-4",
    number: "Weeks 4–5",
    title: "Material Balance with Chemical Reactions",
    icon: "⚗️",
    colour: "#f97316",

    description:
      "Chemical equations, stoichiometry, mass–mole conversion, limiting and excess reactants, percentage excess and conversion.",

    available: true,
    status: "Available now",
    releaseNote: "Weeks 4–5 are available now.",
    tags: [
      "⚗️ Chemical Equations",
      "🔢 Mole Ratios",
      "⚖️ Mass ↔ Moles",
      "🚦 Limiting Reactant",
      "📊 Conversion"
    ]
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


const outcomesByWeek = {
  "week-2": {
    intro:
      "In Week 2, you will learn how composition, flow rates and molarity are used to describe a chemical process stream.",
    outcomes: [
      "Convert between percentage and fraction.",
      "Calculate mass fraction and mole fraction.",
      "Calculate the flow rate of an individual component.",
      "Distinguish between mass, molar and volumetric flow rates.",
      "Use density, molar mass and molarity in flow calculations.",
      "Combine several formulas to analyse a process stream.",
      "Check whether fractions, flow rates and units are reasonable."
    ],
    note:
      "You will move through the lesson one checkpoint at a time. Choose one learning method, complete the guided activities and finish with the Week 2 MEB Challenge."
  },

  "week-3": {
    intro:
      "In Week 3, you will learn to see a material-balance process clearly before you calculate it.",
    outcomes: [
      "State the conservation-of-mass idea in simple words.",
      "Identify the system and system boundary in a process diagram.",
      "Classify process streams as inputs or outputs.",
      "Decide whether material is building up, decreasing or staying constant.",
      "State that accumulation is zero at steady state.",
      "Use Total Input = Total Output to calculate an unknown mass flowrate in kg/min.",
      "Check whether the final answer and units are reasonable."
    ],
    note:
      "Choose Read or Listen, then complete Remember, Understand and Apply together. Finish the Edcafe understanding check before submitting the official Microsoft Forms quiz."
  }
};


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
  ],

  "week-3": [
    "learning-method",
    "remember-bloom",
    "understand-bloom",
    "apply-balance",
    "edcafe-check"
  ],

  "week-4": [
    "mission-1",
    "mission-2",
    "mission-3",
    "mission-4",
    "mission-5"
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


/* =========================================================
   7. WEEK 3 ACTIVITIES
   ========================================================= */

const week3Activities = [
  {
    id: "learning-method",
    number: "Checkpoint 1",
    title: "Learn the Process",
    routeLabel: "Learn the Process",

    icon: "🧭",
    colour: "#8b5cf6",

    description:
      "Choose Read or Listen. Both explain system boundaries, inputs, outputs and steady state.",

    type: "choice-page",
    prerequisites: [],

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
      }
    ]
  },

  {
    id: "flashcards",
    number: "Optional Revision",
    title: "Week 3 Flashcards",

    icon: "🃏",
    colour: "#eab308",

    description:
      "Review key words such as system boundary, input, output and steady state when you need support.",

    type: "external",
    linkKey: "flashcards",
    optional: true,
    prerequisites: []
  },

  {
    id: "remember-bloom",
    number: "Checkpoint 2",
    title: "Remember Together",
    routeLabel: "Remember",

    icon: "🧠",
    colour: "#2563eb",

    description:
      "10 quick questions to recall system boundaries, inputs, outputs, steady state and units.",

    type: "lesson",
    prerequisites: ["learning-method"]
  },

  {
    id: "understand-bloom",
    number: "Checkpoint 3",
    title: "Understand Together",
    routeLabel: "Understand",

    icon: "🔎",
    colour: "#f97316",

    description:
      "10 diagram-reading questions to explain what is happening before any calculation.",

    type: "lesson",
    prerequisites: ["remember-bloom"]
  },

  {
    id: "apply-balance",
    number: "Checkpoint 4",
    title: "Apply: Overall Material Balance",
    routeLabel: "Overall Balance",

    icon: "⚖️",
    colour: "#14b8a6",

    description:
      "Find an unknown flowrate using Total Input = Total Output at steady state.",

    type: "lesson",
    prerequisites: ["understand-bloom"]
  },

  {
    id: "edcafe-check",
    number: "Checkpoint 5 · Independent Check",
    title: "Edcafe Understanding Check",
    routeLabel: "Edcafe Check",

    icon: "🎯",
    colour: "#ec4899",

    description:
      "Complete this independently after the class activities. Your lecturer can use the results to see what needs reteaching.",

    type: "external",
    linkKey: "understandPractice",
    prerequisites: ["apply-balance"]
  },

  {
    id: "official-quiz",
    number: "Official Submission",
    title: "Week 3 Official Quiz — 20 Questions",

    icon: "✅",
    colour: "#16a34a",

    description:
      "Complete the official Microsoft Forms quiz independently. It checks system boundaries, inputs and outputs, material balance and process scaling.",

    type: "external",
    official: true,
    linkKey: "officialQuiz",
    prerequisites: ["edcafe-check"]
  }
];




/* =========================================================
   8. WEEK 4 ACTIVITIES
   Pre-test → guided missions → Edcafe checkpoints → post-test → survey
   ========================================================= */

const week4Activities = [
  {
    id: "pre-test",
    number: "Step 1 · Before Learning",
    title: "Weeks 4–5 Pre-Test",
    icon: "📝",
    colour: "#d71920",
    description:
      "Complete this independently before opening Mission 1. Do not use notes or worked examples.",
    type: "external",
    linkKey: "preTest",
    official: true,
    prerequisites: []
  },
  {
    id: "mission-1",
    number: "Mission 1",
    title: "Read the Reaction",
    routeLabel: "Read Reaction",
    icon: "🔍",
    colour: "#22c55e",
    description:
      "Identify reactants, products and coefficients, then read a balanced equation in moles.",
    type: "lesson",
    prerequisites: ["pre-test"]
  },
  {
    id: "checkpoint-1",
    number: "Mission 1 Checkpoint",
    title: "Edcafe: Read the Reaction",
    icon: "🎯",
    colour: "#16a34a",
    description:
      "Use your Full Name – Class. Submit the three-question checkpoint, then return here.",
    type: "external",
    linkKey: "mission1",
    prerequisites: ["mission-1"]
  },
  {
    id: "mission-2",
    number: "Mission 2",
    title: "Convert Like an Engineer",
    routeLabel: "Mass ↔ Moles",
    icon: "⚖️",
    colour: "#2563eb",
    description:
      "Calculate molecular weight and convert accurately between mass and moles.",
    type: "lesson",
    prerequisites: ["checkpoint-1"]
  },
  {
    id: "checkpoint-2",
    number: "Mission 2 Checkpoint",
    title: "Edcafe: Convert Like an Engineer",
    icon: "🎯",
    colour: "#2563eb",
    description:
      "Complete the independent three-question checkpoint before continuing.",
    type: "external",
    linkKey: "mission2",
    prerequisites: ["mission-2"]
  },
  {
    id: "mission-3",
    number: "Mission 3",
    title: "Master the Mole Ratio",
    routeLabel: "Mole Ratio",
    icon: "🔗",
    colour: "#eab308",
    description:
      "Select and apply the correct mole ratio from a balanced equation.",
    type: "lesson",
    prerequisites: ["checkpoint-2"]
  },
  {
    id: "checkpoint-3",
    number: "Mission 3 Checkpoint",
    title: "Edcafe: Master the Mole Ratio",
    icon: "🎯",
    colour: "#eab308",
    description:
      "Complete the independent three-question checkpoint before continuing.",
    type: "external",
    linkKey: "mission3",
    prerequisites: ["mission-3"]
  },
  {
    id: "mission-4",
    number: "Mission 4",
    title: "Find the Limiting Reactant",
    routeLabel: "Limiting Reactant",
    icon: "🚦",
    colour: "#f97316",
    description:
      "Compare reactants systematically and calculate the maximum product formed.",
    type: "lesson",
    prerequisites: ["checkpoint-3"]
  },
  {
    id: "checkpoint-4",
    number: "Mission 4 Checkpoint",
    title: "Edcafe: Find the Limiting Reactant",
    icon: "🎯",
    colour: "#f97316",
    description:
      "Complete the independent three-question checkpoint before continuing.",
    type: "external",
    linkKey: "mission4",
    prerequisites: ["mission-4"]
  },
  {
    id: "mission-5",
    number: "Mission 5",
    title: "Optimise the Reaction",
    routeLabel: "Reaction Performance",
    icon: "📊",
    colour: "#ec4899",
    description:
      "Distinguish and calculate percentage excess and percentage conversion.",
    type: "lesson",
    prerequisites: ["checkpoint-4"]
  },
  {
    id: "checkpoint-5",
    number: "Mission 5 Checkpoint",
    title: "Edcafe: Reaction Performance",
    icon: "🎯",
    colour: "#ec4899",
    description:
      "Complete the final mission checkpoint before attempting the post-test.",
    type: "external",
    linkKey: "mission5",
    prerequisites: ["mission-5"]
  },
  {
    id: "post-test",
    number: "Step 3 · Independent Assessment",
    title: "Weeks 4–5 Post-Test",
    icon: "✅",
    colour: "#16a34a",
    description:
      "Complete this independently without opening hints, notes or worked solutions.",
    type: "external",
    linkKey: "postTest",
    official: true,
    prerequisites: ["checkpoint-5"]
  },
  {
    id: "student-survey",
    number: "Final Step",
    title: "Weeks 4–5 Student Feedback",
    icon: "💬",
    colour: "#8b5cf6",
    description:
      "Tell us whether the learning journey helped and whether the website was clear to use.",
    type: "external",
    linkKey: "studentSurvey",
    official: true,
    prerequisites: ["post-test"]
  }
];


const activitiesByWeek = {
  "week-1": week1Activities,
  "week-2": week2Activities,
  "week-3": week3Activities,
  "week-4": week4Activities
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


const week3Lessons = {
  "remember-bloom": {
    badge: "Checkpoint 2 · Remember",
    title: "Remember: Key Material-Balance Ideas",
    icon: "🧠",
    description: "Recall the key words before you interpret or calculate a process.",
    content: `
      <div class="content-block">
        <span class="small-label">Class activity</span>
        <h3>Pause, discuss, then choose</h3>
        <p>For each question, look at the process idea first. Discuss with your group or lecturer, then select one answer. Use the hint if you are unsure—this is practice, not a test.</p>
      </div>
      <div class="formula-box">At steady state: Total Input = Total Output<br>Accumulation = 0</div>
    `,
    questions: [
      { question: "A material arrow points into a mixing tank. What is this stream called?", type: "mcq", choices: ["A. Output", "B. Input", "C. System boundary"], correctOption: "B", hint: "Look at the arrow direction.", feedback: "Correct. Material entering the system is an input." },
      { question: "A material arrow points out of a mixing tank. What is this stream called?", type: "mcq", choices: ["A. Input", "B. Output", "C. Accumulation"], correctOption: "B", hint: "Look at the arrow direction.", feedback: "Correct. Material leaving the system is an output." },
      { question: "What is the system in a material-balance question?", type: "mcq", choices: ["A. The part we choose to study", "B. Every piece of equipment in the plant", "C. Only the outlet stream"], correctOption: "A", hint: "Ask: What part am I focusing on?", feedback: "Correct. The system can be a tank, a pipe or another selected process unit." },
      { question: "What is a system boundary?", type: "mcq", choices: ["A. A line around the system being studied", "B. The amount stored in a tank", "C. The name of the outlet"], correctOption: "A", hint: "Think of a box drawn around the equipment.", feedback: "Correct. The boundary helps you identify what crosses into and out of the system." },
      { question: "At steady state, what happens to the amount of material inside a tank?", type: "mcq", choices: ["A. It stays the same", "B. It always increases", "C. It disappears"], correctOption: "A", hint: "Does the tank build up material?", feedback: "Correct. At steady state, there is no net build-up." },
      { question: "At steady state, accumulation is:", type: "mcq", choices: ["A. 0", "B. Always 10 kg/min", "C. Always negative"], correctOption: "A", hint: "No build-up means zero accumulation.", feedback: "Correct. Accumulation equals zero at steady state." },
      { question: "Complete the rule for a steady-state process: Total input ___ total output.", type: "mcq", choices: ["A. is greater than", "B. equals", "C. is unrelated to"], correctOption: "B", hint: "Use the phrase: what goes in equals what goes out.", feedback: "Correct. At steady state, total input equals total output." },
      { question: "Which item can cross a system boundary?", type: "mcq", choices: ["A. A stream entering or leaving", "B. Only accumulation", "C. Only the system name"], correctOption: "A", hint: "Think about the arrows crossing the dashed box.", feedback: "Correct. Streams cross the system boundary." },
      { question: "Which unit is a mass flowrate?", type: "mcq", choices: ["A. kg/min", "B. kg", "C. min/kg"], correctOption: "A", hint: "A flowrate needs an amount and per time.", feedback: "Correct. kg/min tells us how much mass moves each minute." },
      { question: "What is the best first step before solving a material-balance question?", type: "mcq", choices: ["A. Draw or read the flowchart and label the arrows", "B. Guess the answer", "C. Remove all units"], correctOption: "A", hint: "See the process first.", feedback: "Correct. A labelled diagram prevents mixing up inputs and outputs." }
    ]
  },

  "understand-bloom": {
    badge: "Checkpoint 3 · Understand",
    title: "Understand: What Is Happening in the Process?",
    icon: "🔎",
    description: "Interpret the arrows and decide whether material is building up, decreasing or staying the same.",
    content: `
      <div class="content-block">
        <span class="small-label">Class activity</span>
        <h3>Explain your choice</h3>
        <p>Do not only look for a number. First decide whether material is entering, leaving, building up or decreasing inside the system.</p>
      </div>
      <div class="formula-box">Input − Output = Accumulation</div>
    `,
    questions: [
      { question: "A tank has 12 kg/min entering and 12 kg/min leaving. Is it at steady state?", type: "mcq", choices: ["A. Yes", "B. No"], correctOption: "A", hint: "Compare the total in and total out.", feedback: "Correct. Equal flowrates mean no net build-up." },
      { question: "A tank has 12 kg/min entering and 9 kg/min leaving. What is happening inside?", type: "mcq", choices: ["A. Material is building up", "B. Material is decreasing", "C. The amount stays the same"], correctOption: "A", hint: "More enters than leaves.", feedback: "Correct. The difference stays in the tank, so accumulation is positive." },
      { question: "A tank has 8 kg/min entering and 11 kg/min leaving. What is happening inside?", type: "mcq", choices: ["A. Material is building up", "B. The amount is decreasing", "C. Input equals output"], correctOption: "B", hint: "More leaves than enters.", feedback: "Correct. The amount inside must decrease to supply the larger outlet." },
      { question: "A dashed box is drawn around only the mixing tank. A feed pipe carries 5 kg/min into the tank. Is the feed an input to this system?", type: "mcq", choices: ["A. Yes", "B. No"], correctOption: "A", hint: "Does the arrow cross into the dashed box?", feedback: "Correct. It enters the selected system boundary." },
      { question: "Two feeds enter a tank: 4 kg/min and 6 kg/min. One product leaves. What total input should be used in the overall balance?", type: "mcq", choices: ["A. 4 kg/min", "B. 6 kg/min", "C. 10 kg/min"], correctOption: "C", hint: "Add all arrows entering the boundary.", feedback: "Correct. Both feeds are inputs, so total input is 10 kg/min." },
      { question: "One feed enters a tank at 15 kg/min. Two products leave at 5 kg/min and 10 kg/min. Is the tank at steady state?", type: "mcq", choices: ["A. Yes", "B. No"], correctOption: "A", hint: "Add all outputs before comparing.", feedback: "Correct. Total output is 15 kg/min, equal to the input." },
      { question: "A question says: continuous operation at steady state. Which equation is appropriate for an overall balance?", type: "mcq", choices: ["A. Total Input = Total Output", "B. Total Input = 0", "C. Total Input = Accumulation only"], correctOption: "A", hint: "At steady state, accumulation is zero.", feedback: "Correct. Start with total input equal to total output." },
      { question: "Why should you write units on a material-balance calculation?", type: "mcq", choices: ["A. To check that quantities are the same type", "B. To make the answer longer", "C. Units are never needed"], correctOption: "A", hint: "Can kg/min be added to kg?", feedback: "Correct. Units help you spot a wrong setup." },
      { question: "A learner writes: 20 = 20 kg/min. What is missing from the left side?", type: "mcq", choices: ["A. The unit kg/min", "B. A tank picture", "C. A new formula"], correctOption: "A", hint: "Both sides of an equation need matching units.", feedback: "Correct. Write 20 kg/min = 20 kg/min." },
      { question: "A learner obtains an outlet of −5 kg/min for a simple tank with positive feeds. What should they do next?", type: "mcq", choices: ["A. Check the diagram, equation and subtraction", "B. Submit it without checking", "C. Delete all units"], correctOption: "A", hint: "Ask whether a negative outlet is reasonable here.", feedback: "Correct. A reasonableness check can reveal an input/output mix-up." }
    ]
  },

  "apply-balance": {
    badge: "Checkpoint 4 · Apply",
    title: "Overall Material Balance",
    icon: "⚖️",

    description:
      "Use a system boundary and Total Input = Total Output to find an unknown mass flowrate.",

    content: `
      <div class="content-block">
        <span class="small-label">Your test method</span>
        <h3>Use these four steps every time</h3>
        <ol>
          <li><strong>Read the process:</strong> identify the system boundary and label every input and output.</li>
          <li><strong>State the condition:</strong> steady state, so accumulation = 0.</li>
          <li><strong>Write the balance:</strong> Total Input = Total Output.</li>
          <li><strong>Substitute and check:</strong> keep kg/min on both sides, solve the unknown and check that the answer is reasonable.</li>
        </ol>
      </div>

      <div class="example-box">
        <h3>Worked example</h3>
        <p><strong>Process:</strong> 20 kg/min enters a tank. One outlet is unknown. The tank is at steady state.</p>
        <div class="formula-box">20.00 kg/min in → [ Tank ] → ? kg/min out</div>
        <p><strong>1. Condition:</strong> Steady state, so accumulation = 0.</p>
        <p><strong>2. Balance:</strong> Total Input = Total Output</p>
        <p><strong>3. Substitute:</strong> 20.00 kg/min = Outlet</p>
        <p><strong>Answer:</strong> Outlet = 20.00 kg/min</p>
      </div>

      <div class="warning-box">
        <h3>Before you press Check Answer</h3>
        <p>Write the balance in your working box first. Then give your final answer with <strong>two decimal places</strong> and <strong>kg/min</strong>, for example: 20.00 kg/min.</p>
      </div>
    `,

    questions: [
      {
        question: "A tank receives 20.00 kg/min. It operates at steady state with one outlet. Find the outlet flowrate.",
        hint: "Write Total Input = Total Output, then substitute 20.00 kg/min.",
        expectedNumber: 20.00,
        acceptedUnits: ["kg/min"],
        displayAnswer: "20.00 kg/min"
      },
      {
        question: "A tank has one outlet of 18.00 kg/min. It operates at steady state with one inlet. Find the inlet flowrate.",
        hint: "At steady state, total input equals total output.",
        expectedNumber: 18.00,
        acceptedUnits: ["kg/min"],
        displayAnswer: "18.00 kg/min"
      },
      {
        question: "Two feeds enter a tank: 8.00 kg/min and 7.00 kg/min. One product leaves. At steady state, find the product flowrate.",
        hint: "Add both inputs before you write the total output.",
        expectedNumber: 15.00,
        acceptedUnits: ["kg/min"],
        displayAnswer: "15.00 kg/min"
      },
      {
        question: "A tank receives 25.00 kg/min. It has two outlets: Product A is 10.00 kg/min and Product B is unknown. At steady state, find Product B.",
        hint: "Write 25.00 = 10.00 + Product B, then rearrange.",
        expectedNumber: 15.00,
        acceptedUnits: ["kg/min"],
        displayAnswer: "15.00 kg/min"
      },
      {
        question: "A tank receives two feeds: Feed A is 12.00 kg/min and Feed B is unknown. The product is 30.00 kg/min. At steady state, find Feed B.",
        hint: "Write 12.00 + Feed B = 30.00, then rearrange.",
        expectedNumber: 18.00,
        acceptedUnits: ["kg/min"],
        displayAnswer: "18.00 kg/min"
      },
      {
        question: "A blender has three inputs: 4.00 kg/min, 6.00 kg/min and 10.00 kg/min. One blended product leaves at steady state. Find the product flowrate.",
        hint: "Add every stream entering the system boundary.",
        expectedNumber: 20.00,
        acceptedUnits: ["kg/min"],
        displayAnswer: "20.00 kg/min"
      },
      {
        question: "A separator receives 40.00 kg/min. It produces a top stream of 15.00 kg/min and a bottom stream of unknown flowrate. At steady state, find the bottom-stream flowrate.",
        hint: "Write 40.00 = 15.00 + bottom stream.",
        expectedNumber: 25.00,
        acceptedUnits: ["kg/min"],
        displayAnswer: "25.00 kg/min"
      },
      {
        question: "A tank receives 9.00 kg/min and 11.00 kg/min. It has two outlets: 5.00 kg/min and an unknown outlet. At steady state, find the unknown outlet.",
        hint: "First total the inputs. Then subtract the known outlet flowrate.",
        expectedNumber: 15.00,
        acceptedUnits: ["kg/min"],
        displayAnswer: "15.00 kg/min"
      },
      {
        question: "A tank receives 35.00 kg/min and has an outlet of 30.00 kg/min. It is not at steady state. Calculate the accumulation using Input − Output.",
        hint: "35.00 − 30.00 is the amount building up each minute.",
        expectedNumber: 5.00,
        acceptedUnits: ["kg/min"],
        displayAnswer: "+5.00 kg/min accumulation"
      },
      {
        question: "A mixing tank receives Feed A = 14.00 kg/min and Feed B = 16.00 kg/min. It has Product = 22.00 kg/min and a recycle outlet that is unknown. The tank is at steady state. Find the recycle flowrate.",
        hint: "Write 14.00 + 16.00 = 22.00 + recycle.",
        expectedNumber: 8.00,
        acceptedUnits: ["kg/min"],
        displayAnswer: "8.00 kg/min"
      }
    ]
  }
};


const week3CriterionCards = {
  "learning-method": {
    title: "Process Explorer Achievement Unlocked",
    achievement:
      "You can identify the equipment being studied and draw its system boundary.",
    plantConnection:
      "Before doing a material balance, operators and engineers must agree on which tank, mixer or separator is inside the study boundary.",
    whyMatters:
      "A poorly chosen boundary can leave out a stream and make every later calculation incorrect.",
    question:
      "An engineer draws a boundary around one mixing tank. Which item crosses that boundary?",
    choices: [
      "A. The name of the equipment",
      "B. An input or output stream",
      "C. The title of the question"
    ],
    correctOption: "B",
    explanation:
      "Correct. Material streams cross into or out of the selected system boundary."
  },

  "remember-bloom": {
    title: "Flow Detective Achievement Unlocked",
    achievement:
      "You can classify process streams as inputs or outputs by reading their arrow directions.",
    plantConnection:
      "Plant equipment may have several feed, product, recycle and waste pipes. Each stream crossing the boundary must be counted.",
    whyMatters:
      "Missing or reversing one stream gives the wrong total flow and can hide an operating problem.",
    question:
      "A pipe arrow points away from a mixing tank. How should an operator classify it?",
    choices: [
      "A. Input",
      "B. Output",
      "C. Accumulation"
    ],
    correctOption: "B",
    explanation:
      "Correct. The arrow leaves the selected system, so it is an output."
  },

  "understand-bloom": {
    title: "Steady-State Scout Achievement Unlocked",
    achievement:
      "You can decide whether material is building up, decreasing or remaining constant inside a process.",
    plantConnection:
      "Operators compare inlet and outlet flowrates with tank-level trends to judge whether a process is operating steadily.",
    whyMatters:
      "If more material enters than leaves, the tank level rises. Recognising accumulation early supports stable and safe operation.",
    question:
      "A tank has 12 kg/min entering and 9 kg/min leaving. What is happening?",
    choices: [
      "A. Material is building up",
      "B. Material is decreasing",
      "C. The tank is at steady state"
    ],
    correctOption: "A",
    explanation:
      "Correct. More enters than leaves, so 3 kg/min accumulates in the tank."
  },

  "apply-balance": {
    title: "Balance Builder Achievement Unlocked",
    achievement:
      "You can use Total Input = Total Output to calculate an unknown mass flowrate at steady state.",
    plantConnection:
      "This calculation helps plant staff estimate a missing stream, check flowmeter readings and maintain the required production rate.",
    whyMatters:
      "An incorrect balance may lead to the wrong operating decision, production loss or an unexpected tank-level change.",
    question:
      "Two feeds enter at 8 kg/min and 7 kg/min. What is the single outlet at steady state?",
    choices: [
      "A. 1 kg/min",
      "B. 8 kg/min",
      "C. 15 kg/min"
    ],
    correctOption: "C",
    explanation:
      "Correct. Total input is 8 + 7 = 15 kg/min, so the outlet is 15 kg/min."
  },

  "edcafe-check": {
    title: "MEB Challenge Achievement Unlocked",
    achievement:
      "You can independently interpret a simple non-reacting process and complete an overall material balance.",
    plantConnection:
      "This is the same thinking sequence used to read a plant flow diagram, select a balance equation and check whether the result is reasonable.",
    whyMatters:
      "Independent checking helps prevent calculation errors from being carried into later process decisions.",
    question:
      "Which equation should you start with for a non-reacting steady-state process?",
    choices: [
      "A. Total Input = Total Output",
      "B. Total Input = 0",
      "C. Total Output = Accumulation"
    ],
    correctOption: "A",
    explanation:
      "Correct. At steady state, accumulation is zero, so total input equals total output."
  }
};




/* =========================================================
   WEEK 4 GUIDED MISSIONS
   ========================================================= */

const week4Lessons = {
  "mission-1": {
    badge: "Mission 1",
    title: "Read the Reaction",
    icon: "🔍",
    description:
      "Learn to identify reactants, products and coefficients before beginning any calculation.",
    content: `
      <div class="content-block">
        <span class="small-label">Learn With Your Lecturer</span>
        <h3>Understand the reaction before touching your calculator</h3>
        <p>Reactants are shown on the left of the arrow. Products are shown on the right. The large number in front of a formula is the stoichiometric coefficient.</p>
        <div class="formula-box">2H₂ + O₂ → 2H₂O</div>
        <p>Read this as: <strong>2 mol H₂ react with 1 mol O₂ to produce 2 mol H₂O.</strong></p>
      </div>
      <div class="warning-box">
        <h3>Common mistake</h3>
        <p>Do not confuse the coefficient with the subscript. In 2H₂, the coefficient is 2 and the subscript is also 2, but they have different meanings.</p>
      </div>
    `,
    questions: [
      { question: "For 2H₂ + O₂ → 2H₂O, which substances are the reactants?", type: "mcq", choices: ["A. H₂ and O₂", "B. H₂O only", "C. O₂ and H₂O"], correctOption: "A", hint: "Look at the left-hand side of the arrow.", feedback: "Correct. H₂ and O₂ are the starting substances, so they are reactants." },
      { question: "For N₂ + 3H₂ → 2NH₃, what is the coefficient of H₂?", type: "mcq", choices: ["A. 1", "B. 2", "C. 3"], correctOption: "C", hint: "Read the large number immediately before H₂.", feedback: "Correct. The coefficient of H₂ is 3." },
      { question: "Which sentence correctly reads 2H₂ + O₂ → 2H₂O?", type: "mcq", choices: ["A. 2 mol H₂ react with 1 mol O₂ to produce 2 mol H₂O", "B. 1 mol H₂ reacts with 2 mol O₂ to produce 1 mol H₂O", "C. 2 g H₂ react with 1 g O₂ to produce 2 g H₂O"], correctOption: "A", hint: "Use the coefficients as mole amounts.", feedback: "Correct. The coefficients 2, 1 and 2 give the mole relationship." }
    ]
  },

  "mission-2": {
    badge: "Mission 2",
    title: "Convert Like an Engineer",
    icon: "⚖️",
    description:
      "Calculate molecular weight and convert between mass and moles using compatible units.",
    content: `
      <div class="content-block">
        <span class="small-label">Think Like Your Lecturer</span>
        <h3>What is given, and what is required?</h3>
        <div class="formula-grid">
          <div class="mini-formula">Moles = Mass ÷ Molecular Weight</div>
          <div class="mini-formula">Mass = Moles × Molecular Weight</div>
          <div class="mini-formula">g with g/mol<br>kg with kg/kmol</div>
        </div>
        <p>Finding moles means divide. Finding mass means multiply.</p>
      </div>
      <div class="example-box">
        <h3>Worked example</h3>
        <p>88 g CO₂ ÷ 44 g/mol = <strong>2 mol CO₂</strong>.</p>
      </div>
    `,
    questions: [
      { question: "Calculate the molecular weight of CO₂. Use C = 12 and O = 16.", hint: "Add 12 + 2(16).", expectedNumber: 44, acceptedUnits: ["g/mol"], displayAnswer: "44 g/mol" },
      { question: "Calculate the number of moles in 88 g of CO₂. MW = 44 g/mol.", hint: "Moles = Mass ÷ MW.", expectedNumber: 2, acceptedUnits: ["mol"], displayAnswer: "2 mol" },
      { question: "Calculate the mass of 3 mol NH₃. MW = 17 g/mol.", hint: "Mass = Moles × MW.", expectedNumber: 51, acceptedUnits: ["g"], displayAnswer: "51 g" }
    ]
  },

  "mission-3": {
    badge: "Mission 3",
    title: "Master the Mole Ratio",
    icon: "🔗",
    description:
      "Read, select and apply the correct mole ratio without guessing.",
    content: `
      <div class="content-block">
        <span class="small-label">Chemical Recipe</span>
        <h3>Read the balanced equation as a recipe</h3>
        <div class="formula-box">N₂ + 3H₂ → 2NH₃</div>
        <p>1 mol nitrogen + 3 mol hydrogen → 2 mol ammonia.</p>
        <p>Use only the coefficients connecting the <strong>given</strong> substance to the <strong>required</strong> substance.</p>
      </div>
      <div class="warning-box"><h3>Common mistake</h3><p>For a mole ratio, use coefficients—not subscripts and not molecular weights.</p></div>
    `,
    questions: [
      { question: "For N₂ + 3H₂ → 2NH₃, what is the mole ratio N₂ : H₂?", type: "mcq", choices: ["A. 1 : 2", "B. 1 : 3", "C. 3 : 2"], correctOption: "B", hint: "Read the coefficients of N₂ and H₂.", feedback: "Correct. N₂ has coefficient 1 and H₂ has coefficient 3." },
      { question: "For N₂ + 3H₂ → 2NH₃, 2 mol N₂ react completely. Calculate the NH₃ produced.", hint: "Use 1 mol N₂ : 2 mol NH₃.", expectedNumber: 4, acceptedUnits: ["mol"], displayAnswer: "4 mol NH3" },
      { question: "For N₂ + 3H₂ → 2NH₃, calculate H₂ required to produce 8 mol NH₃.", hint: "Use 3 mol H₂ : 2 mol NH₃.", expectedNumber: 12, acceptedUnits: ["mol"], displayAnswer: "12 mol H2" },
      { question: "For 2H₂ + O₂ → 2H₂O, which ratio converts O₂ to H₂O?", type: "mcq", choices: ["A. 2 : 1", "B. 1 : 2", "C. 2 : 2"], correctOption: "B", hint: "Write the coefficient of O₂ first, then H₂O.", feedback: "Correct. The O₂ : H₂O mole ratio is 1 : 2." }
    ]
  },

  "mission-4": {
    badge: "Mission 4",
    title: "Find the Limiting Reactant",
    icon: "🚦",
    description:
      "Determine which reactant runs out first and use it to calculate the maximum product.",
    content: `
      <div class="content-block">
        <span class="small-label">Systematic Method</span>
        <h3>Divide available moles by the coefficient</h3>
        <div class="formula-box">Available moles ÷ coefficient</div>
        <p>The smallest result identifies the limiting reactant. Use only the limiting reactant to calculate maximum product.</p>
      </div>
      <div class="warning-box"><h3>When mass is given</h3><p>Convert every reactant mass into moles before comparing.</p></div>
    `,
    questions: [
      { question: "For 2H₂ + O₂ → 2H₂O, 4 mol H₂ and 1 mol O₂ are available. Which reactant is limiting?", type: "mcq", choices: ["A. H₂", "B. O₂", "C. H₂O"], correctOption: "B", hint: "Compare 4 ÷ 2 with 1 ÷ 1.", feedback: "Correct. O₂ gives the smaller stoichiometric amount, so it is limiting." },
      { question: "For N₂ + 3H₂ → 2NH₃, 4 mol N₂ and 9 mol H₂ are available. Which reactant is limiting?", type: "mcq", choices: ["A. N₂", "B. H₂", "C. Neither"], correctOption: "B", hint: "Compare 4 ÷ 1 with 9 ÷ 3.", feedback: "Correct. 9 ÷ 3 = 3 is smaller than 4 ÷ 1 = 4, so H₂ is limiting." },
      { question: "For N₂ + 3H₂ → 2NH₃, 2 mol N₂ and 3 mol H₂ are supplied. Calculate the maximum NH₃ produced.", hint: "H₂ is limiting. Use 3 mol H₂ : 2 mol NH₃.", expectedNumber: 2, acceptedUnits: ["mol"], displayAnswer: "2 mol NH3" },
      { question: "Two reactant masses are given in a limiting-reactant question. What should you do first?", type: "mcq", choices: ["A. Compare the masses directly", "B. Convert both masses to moles", "C. Choose the larger mass"], correctOption: "B", hint: "Balanced equations compare mole amounts.", feedback: "Correct. Convert both masses to moles before applying the coefficients." }
    ]
  },

  "mission-5": {
    badge: "Mission 5",
    title: "Optimise the Reaction",
    icon: "📊",
    description:
      "Distinguish between percentage excess and percentage conversion, then calculate each correctly.",
    content: `
      <div class="content-block">
        <span class="small-label">Choose the Formula First</span>
        <h3>Percentage of what?</h3>
        <div class="formula-grid">
          <div class="mini-formula">% Excess = (Actual − Required) ÷ Required × 100%</div>
          <div class="mini-formula">% Conversion = Reacted ÷ Fed × 100%</div>
          <div class="mini-formula">Excess = extra supplied<br>Conversion = actually reacted</div>
        </div>
      </div>
      <div class="warning-box"><h3>Common mistake</h3><p>For percentage excess, divide by the stoichiometric requirement. For conversion, numerator and denominator must refer to the same reactant.</p></div>
    `,
    questions: [
      { question: "A process supplies 120 kg O₂ but only 100 kg is required. Which concept is tested?", type: "mcq", choices: ["A. Percentage conversion", "B. Percentage excess", "C. Mole fraction"], correctOption: "B", hint: "The question compares actual supplied with required.", feedback: "Correct. This comparison measures percentage excess." },
      { question: "A reactor requires 100 kg O₂ and receives 120 kg. Calculate percentage excess.", hint: "Use (120 − 100) ÷ 100 × 100%.", expectedNumber: 20, acceptedUnits: ["%"], displayAnswer: "20%" },
      { question: "A reactor is fed 200 kg of A and 150 kg reacts. Calculate percentage conversion.", hint: "Use Reacted ÷ Fed × 100%.", expectedNumber: 75, acceptedUnits: ["%"], displayAnswer: "75%" },
      { question: "Which statement is correct?", type: "mcq", choices: ["A. Percentage excess compares actual feed with stoichiometric requirement", "B. Percentage conversion measures extra reactant supplied", "C. Percentage excess compares product with reactant"], correctOption: "A", hint: "Match each term to the engineering question it answers.", feedback: "Correct. Percentage excess compares actual feed with the exact stoichiometric amount required." }
    ]
  }
};




const week4CriterionCards = {
  "mission-1": {
    title: "Reaction Reader Badge Unlocked",
    achievement: "You can identify reactants, products and coefficients in a balanced chemical equation.",
    plantConnection: "Operators must identify which materials enter a reactor and which products leave before completing a balance.",
    whyMatters: "Reading the reaction incorrectly causes every later mole-ratio calculation to be wrong.",
    question: "In 2H₂ + O₂ → 2H₂O, which substances are the reactants?",
    choices: ["A. H₂ and O₂", "B. H₂O only", "C. O₂ and H₂O"],
    correctOption: "A",
    explanation: "Correct. H₂ and O₂ are on the left side of the equation, so they are the reactants."
  },
  "mission-2": {
    title: "Mole Converter Badge Unlocked",
    achievement: "You can convert between mass and moles using molecular weight.",
    plantConnection: "Plant data may be recorded as mass flow, while reaction equations use mole relationships.",
    whyMatters: "A correct mass-to-mole conversion is required before stoichiometric calculations can begin.",
    question: "What operation converts mass into moles?",
    choices: ["A. Mass ÷ molecular weight", "B. Mass × molecular weight", "C. Molecular weight ÷ mass"],
    correctOption: "A",
    explanation: "Correct. Number of moles equals mass divided by molecular weight."
  },
  "mission-3": {
    title: "Mole Ratio Master Badge Unlocked",
    achievement: "You can select and apply the correct mole ratio from a balanced equation.",
    plantConnection: "Stoichiometric ratios help engineers determine how much feed is needed and how much product can form.",
    whyMatters: "Using the wrong coefficient pair gives an incorrect reactant requirement or product amount.",
    question: "For N₂ + 3H₂ → 2NH₃, what is the mole ratio H₂:NH₃?",
    choices: ["A. 1:2", "B. 3:2", "C. 2:3"],
    correctOption: "B",
    explanation: "Correct. The coefficients of H₂ and NH₃ are 3 and 2, so the ratio is 3:2."
  },
  "mission-4": {
    title: "Limiting Reactant Detective Badge Unlocked",
    achievement: "You can identify the reactant that controls the maximum product formed.",
    plantConnection: "The limiting reactant determines when production stops even if another feed remains available.",
    whyMatters: "Product must be calculated from the limiting reactant, not the excess reactant.",
    question: "After dividing available moles by each coefficient, which result identifies the limiting reactant?",
    choices: ["A. The largest result", "B. The smallest result", "C. The average result"],
    correctOption: "B",
    explanation: "Correct. The smallest available-moles-to-coefficient result identifies the limiting reactant."
  },
  "mission-5": {
    title: "Reaction Optimiser Badge Unlocked",
    achievement: "You can distinguish percentage excess from percentage conversion.",
    plantConnection: "Engineers track extra feed supplied and the fraction of feed that actually reacts to assess reactor performance.",
    whyMatters: "Confusing these percentages can lead to incorrect conclusions about feed usage and process efficiency.",
    question: "Which percentage compares the amount reacted with the amount originally fed?",
    choices: ["A. Percentage excess", "B. Percentage conversion", "C. Mole fraction"],
    correctOption: "B",
    explanation: "Correct. Percentage conversion compares reactant reacted with reactant fed."
  }
};

function getCurrentCriterionCards() {
  if (selectedWeekId === "week-3") return week3CriterionCards;
  if (selectedWeekId === "week-4") return week4CriterionCards;
  return {};
}

const lessonsByWeek = {
  "week-1": week1Lessons,
  "week-2": week2Lessons,
  "week-3": week3Lessons,
  "week-4": week4Lessons
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
let journeyInProgress = false;
let journeySoundEnabled =
  localStorage.getItem("foundationMathHubJourneySound") !== "off";
let journeyAudioContext = null;

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

  document
    .getElementById("weekSoundControl")
    .classList.toggle(
      "hidden",
      !["week-3", "week-4"].includes(selectedWeekId)
    );

  updateJourneySoundButton();

  if (["week-3", "week-4"].includes(selectedWeekId) && journeySoundEnabled) {
    getJourneyAudioContext();
  }

  updateWholeWeek();

  if (
    outcomesByWeek[selectedWeekId] &&
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
  const outcomes = outcomesByWeek[selectedWeekId];

  if (!outcomes) {
    showWeekDashboard();
    return;
  }

  document.getElementById("outcomesIntro").textContent =
    outcomes.intro;

  document.getElementById("outcomesList").innerHTML =
    outcomes.outcomes
      .map(outcome => `<li>${outcome}</li>`)
      .join("");

  document.getElementById("outcomesNote").textContent =
    outcomes.note;

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
  const hasLearningPath =
    getCurrentActivities().some(
      activity => activity.type === "choice-page"
    );

  if (!hasLearningPath) {
    showToast("This learning-path page is not available for this week.");
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

  const hasWatchChoice = activity.choices.some(
    choice => choice.linkKey === "watch"
  );

  grid.classList.toggle("two-choice-layout", !hasWatchChoice);

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
      "Choose Read or Listen to begin.";

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

  const wasAlreadyCompleted =
    isActivityCompleted("learning-method");

  markActivityCompleted("learning-method");
  updateWholeWeek();
  showWeekDashboard();

  if (!wasAlreadyCompleted) {
    showCelebration("learning-method");
  } else {
    showToast("Learning method already completed. Your next checkpoint is unlocked.");
  }

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

  const wasAlreadyCompleted =
    isActivityCompleted(activityId);

  markActivityCompleted(activityId);

  updateWholeWeek();

  if (
    selectedWeekId === "week-3" &&
    activityId === "edcafe-check" &&
    !wasAlreadyCompleted
  ) {
    showCelebration(activityId);
  } else {
    showToast(
      activity.official
        ? "Official quiz marked as submitted. Keep your Microsoft Forms result screen."
        : "Activity marked as completed."
    );
  }
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
        answer: "",
        choice: ""
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
      answer: "",
      choice: ""
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

  const selectedChoice = document.querySelector(
    `input[name="choice${questionIndex}"]:checked`
  );

  if (selectedChoice) {
    currentPracticeResponses[questionIndex].choice =
      selectedChoice.value;
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
      answer: "",
      choice: ""
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


      ${
        question.type === "mcq"
          ? `
            <fieldset class="practice-choice-list">
              <legend>Choose one answer</legend>
              ${question.choices.map(choice => {
                const option = choice.charAt(0);
                return `
                  <label class="practice-choice">
                    <input
                      type="radio"
                      name="choice${questionIndex}"
                      value="${option}"
                      ${response.choice === option ? "checked" : ""}
                      onchange="saveCurrentPracticeResponse(${questionIndex})"
                    >
                    <span>${choice}</span>
                  </label>
                `;
              }).join("")}
            </fieldset>
          `
          : `
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
          `
      }


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

  const workingField = document.getElementById("working" + questionIndex);
  const answerField = document.getElementById("answer" + questionIndex);

  if (workingField) {
    workingField.value = response.working;
  }

  if (answerField) {
    answerField.value = response.answer;
  }
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

  if (selectedWeekId === "week-3") {
    if (isActivityCompleted("learning-method")) {
      awardMasteryStar("formula");
    }

    if (isActivityCompleted("remember-bloom")) {
      awardMasteryStar("unit");
    }

    if (isActivityCompleted("understand-bloom")) {
      awardMasteryStar("practice");
    }

    if (isActivityCompleted("apply-balance")) {
      awardMasteryStar("persistence");
    }

    if (isActivityCompleted("edcafe-check")) {
      awardMasteryStar("application");
    }

    return;
  }

  if (selectedWeekId === "week-4") {
    if (isActivityCompleted("mission-1")) awardMasteryStar("formula");
    if (isActivityCompleted("mission-2")) awardMasteryStar("unit");
    if (isActivityCompleted("mission-3")) awardMasteryStar("practice");
    if (isActivityCompleted("mission-4")) awardMasteryStar("persistence");
    if (isActivityCompleted("mission-5")) awardMasteryStar("application");
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


function getFinalSubmissionActivityId() {
  // Weeks 4–5 finish with the student survey after the post-test.
  // Earlier weeks finish with their official quiz.
  return selectedWeekId === "week-4"
    ? "student-survey"
    : "official-quiz";
}


function rewardTokenIsEarned() {
  return (
    getCompletedCheckpointCount() ===
      getCurrentCheckpointIds().length &&
    isActivityCompleted(getFinalSubmissionActivityId())
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

  if (question.type === "mcq") {
    const selectedChoice = document.querySelector(
      `input[name="choice${questionIndex}"]:checked`
    );

    if (!selectedChoice) {
      feedback.textContent =
        "Choose one answer first. You can use the hint if you need a clue.";

      feedback.className =
        "feedback-message supportive";

      return;
    }

    if (selectedChoice.value === question.correctOption) {
      currentQuestionResults[questionIndex] = true;

      feedback.textContent = question.feedback;
      feedback.className = "feedback-message correct";
      questionCard.classList.add("correct");
    } else {
      currentQuestionResults[questionIndex] = false;
      currentQuestionAttempts[questionIndex] =
        (currentQuestionAttempts[questionIndex] || 0) + 1;

      feedback.textContent =
        currentQuestionAttempts[questionIndex] === 1
          ? "Not quite yet. Look at the hint, discuss the process idea, then try again."
          : "Keep going. Read the key idea above and try again—your progress is saved.";

      feedback.className = "feedback-message supportive";
      questionCard.classList.remove("correct");
    }

    updateLessonCompletionButton();
    updatePracticeQuestionFlow();
    return;
  }

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
      ? ["week-3", "week-4"].includes(selectedWeekId)
        ? "Your five mission stops are complete. Continue to the independent assessment and final feedback step."
        : "Your required checkpoints are complete. Submit the official quiz when it is released."
      : "Good work. Your checkpoint progress and Mastery Stars have been updated.";

  document.getElementById(
    "bonusResult"
  ).textContent =
    "You now have " + getMasteryStarCount() +
    " of 5 Mastery Stars. Reward Tokens are not awarded by chance.";

  const rewardButton =
    document.getElementById("rollBonusButton");

  const criterionCards = getCurrentCriterionCards();
  const hasCriterionCard = Boolean(criterionCards[activityId]);

  const journeyPause =
    document.getElementById("journeyPause");

  const achievementReveal =
    document.getElementById("achievementReveal");

  const modalCard =
    document.getElementById("celebrationModalCard");

  const closeButton =
    document.getElementById("closeModalButton");

  document.getElementById("criterionGame")
    .classList.toggle("hidden", !hasCriterionCard);

  if (hasCriterionCard) {
    renderCriterionCard(activityId);
    rewardButton.disabled = true;
    rewardButton.textContent = "Answer the game card first";
  } else {
    rewardButton.disabled = false;
    rewardButton.textContent = "View My Rewards";
  }

  document
    .getElementById("celebrationModal")
    .classList.remove("hidden");

  if (hasCriterionCard) {
    journeyInProgress = true;
    journeyPause.classList.remove("hidden");
    achievementReveal.classList.add("hidden");
    achievementReveal.classList.remove("revealing");
    modalCard.classList.add("journey-active");
    closeButton.classList.add("hidden");

    animatePlantJourney(completedCount);
  } else {
    journeyInProgress = false;
    journeyPause.classList.add("hidden");
    achievementReveal.classList.remove("hidden");
    modalCard.classList.remove("journey-active");
    closeButton.classList.remove("hidden");
  }
}


const journeyArrivalEvents = {
  1: {
    icon: "🔍",
    title: "Boundary inspection passed",
    message: "You identified what belongs inside the system before counting any streams."
  },
  2: {
    icon: "🔀",
    title: "Pipe-route check passed",
    message: "You followed the arrows and accounted for the inlet and outlet streams."
  },
  3: {
    icon: "📊",
    title: "Tank-level signal checked",
    message: "You used the flow difference to recognise steady state or accumulation."
  },
  4: {
    icon: "🪜",
    title: "Calculation ladder climbed",
    message: "Your balance equation moved you up to the calculation station."
  },
  5: {
    icon: "🏭",
    title: "Weekly MEB goal reached",
    message: "You completed the independent plant-process check."
  }
};


const week4JourneyArrivalEvents = {
  1: { icon: "🔍", title: "Reaction identified", message: "You read the balanced equation and identified its reactants, products and coefficients." },
  2: { icon: "⚖️", title: "Mole conversion completed", message: "You converted correctly between mass and moles." },
  3: { icon: "🔗", title: "Mole ratio unlocked", message: "You selected the correct coefficient ratio for the calculation." },
  4: { icon: "🚦", title: "Limiting reactant found", message: "You identified the reactant that controls the maximum product." },
  5: { icon: "📊", title: "Reaction optimised", message: "You distinguished percentage excess from percentage conversion." }
};

function getJourneyArrivalEvents() {
  return selectedWeekId === "week-4"
    ? week4JourneyArrivalEvents
    : journeyArrivalEvents;
}


function waitForJourney(milliseconds) {
  const reducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return new Promise(resolve => {
    window.setTimeout(resolve, reducedMotion ? 40 : milliseconds);
  });
}


function getJourneyAudioContext() {
  if (!journeySoundEnabled) {
    return null;
  }

  const AudioContextClass =
    window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!journeyAudioContext) {
    journeyAudioContext = new AudioContextClass();
  }

  if (journeyAudioContext.state === "suspended") {
    journeyAudioContext.resume().catch(() => {});
  }

  return journeyAudioContext;
}


function playJourneyTone(
  frequency,
  duration = 0.09,
  volume = 0.045,
  delay = 0
) {
  const audioContext = getJourneyAudioContext();

  if (!audioContext) {
    return;
  }

  const startTime = audioContext.currentTime + delay;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(
    volume,
    startTime + 0.012
  );
  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    startTime + duration
  );

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.02);
}


function playJourneyStep(tileNumber) {
  playJourneyTone(
    tileNumber % 2 === 0 ? 392 : 330,
    0.08,
    0.035
  );
}


function playJourneyEvent() {
  playJourneyTone(523.25, 0.12, 0.045, 0);
  playJourneyTone(659.25, 0.14, 0.045, 0.1);
}


function playAchievementChime() {
  playJourneyTone(523.25, 0.18, 0.04, 0);
  playJourneyTone(659.25, 0.2, 0.045, 0.12);
  playJourneyTone(783.99, 0.25, 0.05, 0.24);
}


function updateJourneySoundButton() {
  ["weekSoundToggle", "journeySoundToggle"].forEach(buttonId => {
    const button = document.getElementById(buttonId);

    if (!button) {
      return;
    }

    button.textContent = journeySoundEnabled
      ? "🔊 Sound On"
      : "🔇 Sound Off";
    button.setAttribute(
      "aria-pressed",
      String(journeySoundEnabled)
    );
    button.setAttribute(
      "aria-label",
      journeySoundEnabled
        ? "Turn plant journey sound off"
        : "Turn plant journey sound on"
    );
  });
}


function toggleJourneySound() {
  journeySoundEnabled = !journeySoundEnabled;
  localStorage.setItem(
    "foundationMathHubJourneySound",
    journeySoundEnabled ? "on" : "off"
  );
  updateJourneySoundButton();

  if (journeySoundEnabled) {
    playJourneyTone(659.25, 0.12, 0.04);
  }
}


function getPlantTilePosition(tileNumber) {
  const row = Math.floor((tileNumber - 1) / 5) + 1;
  const placeInRow = (tileNumber - 1) % 5;
  const column = row % 2 === 1
    ? placeInRow + 1
    : 5 - placeInRow;

  return { row, column };
}


function renderPlantBoard(startTile, arrivalTile, checkpointNumber) {
  const event = getJourneyArrivalEvents()[checkpointNumber];
  const board = document.getElementById("plantBoard");

  board.innerHTML = "";

  for (let tileNumber = 1; tileNumber <= 20; tileNumber += 1) {
    const tile = document.createElement("div");
    const position = getPlantTilePosition(tileNumber);

    tile.className = "plant-tile";
    tile.dataset.tile = String(tileNumber);
    tile.style.gridRow = String(position.row);
    tile.style.gridColumn = String(position.column);
    tile.textContent = String(tileNumber);

    if (tileNumber <= startTile) {
      tile.classList.add("visited");
    }

    if (tileNumber === arrivalTile) {
      tile.classList.add("special");
      tile.dataset.eventIcon = event.icon;
    }

    board.appendChild(tile);
  }
}


function placeJourneyAvatar(tileNumber) {
  const board = document.getElementById("plantBoard");
  const tile = board.querySelector(`[data-tile="${tileNumber}"]`);

  if (!tile) {
    return;
  }

  board.querySelector(".journey-avatar")?.remove();

  const avatar = document.createElement("span");
  avatar.className = "journey-avatar";
  avatar.textContent = "🧑‍🔬";
  avatar.setAttribute("aria-label", `Process trainee on tile ${tileNumber}`);
  tile.appendChild(avatar);
  tile.classList.add("visited");

  void avatar.offsetWidth;
}


async function animatePlantJourney(completedCount) {
  const checkpointNumber = Math.max(1, Math.min(5, completedCount));
  const startTile = (checkpointNumber - 1) * 4;
  const arrivalTile = checkpointNumber * 4;
  const event = getJourneyArrivalEvents()[checkpointNumber];
  const eventBox = document.getElementById("journeyEvent");
  const progressFill = document.getElementById("journeyProgressFill");

  document.getElementById("journeyPauseTitle").textContent =
    `Checkpoint ${checkpointNumber} achieved — follow your trainee!`;

  renderPlantBoard(startTile, arrivalTile, checkpointNumber);
  progressFill.style.width = `${(startTile / 20) * 100}%`;
  eventBox.className = "journey-event";
  eventBox.textContent = "Plant route cleared. Moving one tile at a time…";
  updateJourneySoundButton();
  getJourneyAudioContext();

  await waitForJourney(450);

  for (let tileNumber = startTile + 1; tileNumber <= arrivalTile; tileNumber += 1) {
    placeJourneyAvatar(tileNumber);
    playJourneyStep(tileNumber);
    progressFill.style.width = `${(tileNumber / 20) * 100}%`;
    eventBox.textContent = `Moving through the plant: tile ${tileNumber} of 20`;
    await waitForJourney(480);
  }

  document.querySelector(`[data-tile="${arrivalTile}"]`)
    ?.classList.add("arrival");

  eventBox.classList.add("event-arrived");
  eventBox.textContent = `${event.icon} ${event.title}: ${event.message}`;
  playJourneyEvent();

  await waitForJourney(1250);

  revealPlantAchievement();
}


function revealPlantAchievement() {
  journeyInProgress = false;

  document.getElementById("journeyPause")
    .classList.add("hidden");

  const achievementReveal =
    document.getElementById("achievementReveal");

  achievementReveal.classList.remove("hidden");
  achievementReveal.classList.add("revealing");

  document.getElementById("celebrationModalCard")
    .classList.remove("journey-active");

  document.getElementById("closeModalButton")
    .classList.remove("hidden");

  playAchievementChime();
}


function renderCriterionCard(activityId) {
  const card = getCurrentCriterionCards()[activityId];

  document.getElementById("criterionTitle").textContent =
    card.title;

  document.getElementById("criterionAchievement").textContent =
    card.achievement;

  document.getElementById("criterionPlantConnection").textContent =
    card.plantConnection;

  document.getElementById("criterionWhyMatters").textContent =
    card.whyMatters;

  document.getElementById("criterionQuestion").textContent =
    card.question;

  const feedback =
    document.getElementById("criterionFeedback");

  feedback.textContent = "";
  feedback.className = "criterion-feedback hidden";

  document.getElementById("criterionOptions").innerHTML =
    card.choices
      .map(choice => `
        <button
          class="criterion-option"
          type="button"
          data-option="${choice.charAt(0)}"
        >
          ${choice}
        </button>
      `)
      .join("");

  document.querySelectorAll(".criterion-option").forEach(button => {
    button.addEventListener("click", () => {
      checkCriterionAnswer(button, card);
    });
  });
}


function checkCriterionAnswer(button, card) {
  const selectedOption = button.dataset.option;
  const feedback =
    document.getElementById("criterionFeedback");

  document.querySelectorAll(".criterion-option").forEach(option => {
    option.classList.remove("wrong");
  });

  if (selectedOption !== card.correctOption) {
    button.classList.add("wrong");
    feedback.textContent =
      "Try again. Use the teaching clue above and focus on the process direction or condition.";
    feedback.className = "criterion-feedback retry";
    return;
  }

  button.classList.add("correct");

  document.querySelectorAll(".criterion-option").forEach(option => {
    option.disabled = true;
  });

  feedback.textContent = card.explanation;
  feedback.className = "criterion-feedback success";

  const rewardButton =
    document.getElementById("rollBonusButton");

  rewardButton.disabled = false;
  rewardButton.textContent =
    getCompletedCheckpointCount() === getCurrentCheckpointIds().length
      ? "View Weekly Goal"
      : "Continue Mission";
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

  if (
    getCurrentCriterionCards()[currentBonusActivity]
  ) {
    window.setTimeout(() => {
      const targetId =
        getCompletedCheckpointCount() === getCurrentCheckpointIds().length
          ? "rewardSection"
          : "activitiesSection";

      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 40);
  } else {
    scrollToRewardCentre();
  }
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

  const checkpointCount =
    getCurrentCheckpointIds().length;

  const checkpointPositions =
    Array.from(
      { length: checkpointCount },
      (item, index) => {
        if (checkpointCount === 1) {
          return 50;
        }

        return 15 + (70 * index) / (checkpointCount - 1);
      }
    );

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

const week3MasteryProfile = {
  formula: {
    title: "Process Explorer Star",
    description: "Choose a learning route and recognise the key process ideas."
  },
  unit: {
    title: "Boundary Spotter Star",
    description: "Identify the system boundary, inputs and outputs."
  },
  practice: {
    title: "Flow Detective Star",
    description: "Explain steady state, build-up and decrease from a process diagram."
  },
  persistence: {
    title: "Balance Builder Star",
    description: "Use Total Input = Total Output with correct working and units."
  },
  application: {
    title: "Independent MEB Star",
    description: "Complete the Edcafe understanding check independently."
  }
};

const standardMasteryProfile = {
  formula: {
    title: "Formula Star",
    description: "Use the correct formula for the calculation."
  },
  unit: {
    title: "Unit Star",
    description: "Give the correct unit and appropriate decimal places."
  },
  practice: {
    title: "Practice Star",
    description: "Complete the guided practice activities."
  },
  persistence: {
    title: "Persistence Star",
    description: "Review feedback, correct your method and try successfully again."
  },
  application: {
    title: "Application Star",
    description: "Complete the final multi-step process-stream problem."
  }
};

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

      const profile = selectedWeekId === "week-3"
        ? week3MasteryProfile[starKey]
        : standardMasteryProfile[starKey];

      card.querySelector("strong").textContent = profile.title;
      card.querySelector("p").textContent = profile.description;
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
    isActivityCompleted(getFinalSubmissionActivityId())
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
        getFinalSubmissionActivityId()
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
  "journeySoundToggle"
).addEventListener(
  "click",
  toggleJourneySound
);


document.getElementById(
  "weekSoundToggle"
).addEventListener(
  "click",
  toggleJourneySound
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
    if (journeyInProgress) {
      return;
    }

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
      "celebrationModal" &&
      !journeyInProgress
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
