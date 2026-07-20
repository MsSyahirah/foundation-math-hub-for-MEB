/* =========================================================
   FOUNDATION MATH HUB
   MULTI-WEEK WEBSITE

   The green comments explain what each section controls.
   ========================================================= */


/* =========================================================
   1. ACTIVITY LINKS

   These are the student links for Edcafe and Microsoft Forms.
   ========================================================= */

const websiteLinks = {
  flashcards:
    "https://app.edcafe.ai/flashcards/6a5cc6d2c039e008d0265d68",

  practiceQuiz:
    "https://app.edcafe.ai/quizzes/6a5cc92ba63cac6f1f1c5630",

  officialQuiz:
    "https://forms.office.com/r/ggAmQUyqej"
};


/* =========================================================
   2. WEEKLY RELEASE SETTINGS

   To release Week 2, change:

   available: false

   to:

   available: true
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
    title: "Composition and Component Flow",
    icon: "🧫",
    colour: "#8b5cf6",

    description:
      "Mass percentage, mass fraction, component flow and molarity.",

    available: false,
    status: "Releases after Wednesday’s mass lecture",
    releaseNote:
      "Week 2 will be released after Wednesday’s mass lecture.",

    tags: []
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
   3. WEEK 1 CHECKPOINTS

   These five activities award learning stars.
   ========================================================= */

const checkpointIds = [
  "fractions",
  "formulae",
  "units",
  "calculator",
  "meb-challenge"
];


/* =========================================================
   4. STUDENT LEVELS

   The student becomes a scientist at the final goal.
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

   prerequisites tells the website what students must finish
   before the next activity becomes available.
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
   6. WEEK 1 LESSON CONTENT
   ========================================================= */

const lessons = {

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
   7. EMPTY STUDENT PROGRESS

   Each week uses its own browser storage.
   ========================================================= */

function createEmptyProgress() {
  return {
    completedActivities: [],
    completionDates: {},
    bonusTokens: 0,
    bonusRollsUsed: [],
    studentName: "",
    studentClass: ""
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
let currentBonusActivity = null;


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
    return {
      ...createEmptyProgress(),
      ...JSON.parse(saved)
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

  if (weekId !== "week-1") {
    showToast(
      "The content for this week will be added soon."
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

  week1Activities.forEach(activity => {
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
   17. OPEN EDCAFE OR MICROSOFT FORMS
   ========================================================= */

function openExternalActivity(activityId) {
  const activity =
    week1Activities.find(
      item => item.id === activityId
    );

  if (!activity) {
    showToast(
      "The activity could not be found."
    );

    return;
  }

  const link =
    websiteLinks[activity.linkKey];

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
    week1Activities.find(
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
    lessons[lessonId];

  if (!lesson) {
    showToast(
      "The lesson could not be found."
    );

    return;
  }

  currentLessonId = lessonId;
  currentQuestionResults = {};

  lesson.questions.forEach(
    (question, index) => {
      currentQuestionResults[index] = false;
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

  document
    .getElementById("activitiesSection")
    .classList.add("hidden");

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
  const questionCards =
    lesson.questions
      .map((question, index) => {
        return `
          <article
            class="practice-question"
            id="practiceQuestion${index}"
          >

            <h4>
              Question ${index + 1}
            </h4>


            <p>
              ${question.question}
            </p>


            <label for="working${index}">
              Show your working
            </label>


            <textarea
              id="working${index}"
              placeholder="Write your formula, substitution and calculation."
            ></textarea>


            <label for="answer${index}">
              Final answer
            </label>


            <input
              id="answer${index}"
              type="text"
              placeholder="Example: 1.20 g/mL"
            >


            <button
              class="button button-primary button-small"
              onclick="checkPracticeAnswer(${index})"
            >
              Check Answer
            </button>


            <p
              class="feedback-message"
              id="feedback${index}"
            ></p>

          </article>
        `;
      })
      .join("");

  return `
    <div class="practice-section">

      <span class="small-label">
        Practice and Check
      </span>


      <h3>
        Complete all questions
      </h3>


      <p>
        Show your working and report every final numerical answer to
        <strong>two decimal places</strong>.
      </p>


      ${questionCards}

    </div>
  `;
}


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
   23. CHECK A PRACTICE ANSWER
   ========================================================= */

function checkPracticeAnswer(questionIndex) {
  const lesson =
    lessons[currentLessonId];

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
      "Please show your formula or calculation before checking.";

    feedback.className =
      "feedback-message incorrect";

    return;
  }

  const studentNumber =
    extractNumber(answer);

  if (Number.isNaN(studentNumber)) {
    feedback.textContent =
      "Please enter a numerical final answer.";

    feedback.className =
      "feedback-message incorrect";

    return;
  }

  const allowedDifference =
    0.005;

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
    currentQuestionResults[
      questionIndex
    ] = true;

    feedback.textContent =
      "Correct. Final answer: " +
      question.displayAnswer + ".";

    feedback.className =
      "feedback-message correct";

    questionCard.classList.add(
      "correct"
    );
  } else if (
    numberCorrect &&
    unitCorrect &&
    !decimalFormatCorrect
  ) {
    currentQuestionResults[
      questionIndex
    ] = false;

    feedback.textContent =
      "Your numerical answer is correct. Rewrite it using exactly two decimal places, for example " +
      question.displayAnswer + ".";

    feedback.className =
      "feedback-message incorrect";

    questionCard.classList.remove(
      "correct"
    );
  } else if (
    numberCorrect &&
    !unitCorrect
  ) {
    currentQuestionResults[
      questionIndex
    ] = false;

    feedback.textContent =
      "Your number is correct, but the unit is missing or incorrect.";

    feedback.className =
      "feedback-message incorrect";

    questionCard.classList.remove(
      "correct"
    );
  } else {
    currentQuestionResults[
      questionIndex
    ] = false;

    feedback.textContent =
      "Not correct yet. " +
      question.hint;

    feedback.className =
      "feedback-message incorrect";

    questionCard.classList.remove(
      "correct"
    );
  }

  updateLessonCompletionButton();
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
  currentBonusActivity =
    activityId;

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
    "celebrationCharacter"
  ).textContent =
    level.character;

  document.getElementById(
    "celebrationTitle"
  ).textContent =
    completedCount === 5
      ? "You Reached the Weekly Goal!"
      : "Checkpoint Completed!";

  document.getElementById(
    "celebrationText"
  ).textContent =
    completedCount === 5
      ? "You transformed into a Process Problem Solver and earned all five learning stars."
      : "You earned one learning star and moved closer to the goal.";

  const rollButton =
    document.getElementById(
      "rollBonusButton"
    );

  const alreadyRolled =
    studentProgress
      .bonusRollsUsed
      .includes(activityId);

  rollButton.disabled =
    alreadyRolled;

  rollButton.textContent =
    alreadyRolled
      ? "Bonus Roll Already Used"
      : "🎲 Roll the Learning Die";

  document
    .getElementById("bonusResult")
    .classList.add("hidden");

  document
    .getElementById("celebrationModal")
    .classList.remove("hidden");
}


/* =========================================================
   27. MINI SNAKES AND LADDERS BONUS
   ========================================================= */

function rollBonusGame() {
  if (!currentBonusActivity) {
    return;
  }

  if (
    studentProgress
      .bonusRollsUsed
      .includes(currentBonusActivity)
  ) {
    return;
  }

  const roll =
    Math.floor(
      Math.random() * 6
    ) + 1;

  const resultBox =
    document.getElementById(
      "bonusResult"
    );

  let message = "";

  if (roll <= 2) {
    message =
      "🎲 You rolled " +
      roll +
      ". 🐍 Snake square! Review one common mistake before continuing. Your learning progress remains safe.";
  } else if (roll <= 4) {
    message =
      "🎲 You rolled " +
      roll +
      ". 🟦 Safe square! Continue making steady progress.";
  } else {
    message =
      "🎲 You rolled " +
      roll +
      ". 🪜 Ladder! You earned one bonus token.";

    studentProgress.bonusTokens += 1;
  }

  studentProgress
    .bonusRollsUsed
    .push(currentBonusActivity);

  saveProgress();

  resultBox.textContent =
    message;

  resultBox.classList.remove(
    "hidden"
  );

  document.getElementById(
    "rollBonusButton"
  ).disabled = true;

  document.getElementById(
    "rollBonusButton"
  ).textContent =
    "Bonus Roll Completed";

  updateWholeWeek();
}


/* =========================================================
   28. COUNT COMPLETED CHECKPOINTS
   ========================================================= */

function getCompletedCheckpointCount() {
  return checkpointIds.filter(
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

  checkpointIds.forEach(
    (checkpointId, index) => {
      const activity =
        week1Activities.find(
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
        completedCount < 5
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
    completedCount < 5
  ) {
    routePercentage =
      checkpointPositions[
        completedCount - 1
      ];
  }

  if (completedCount === 5) {
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

  const level =
    studentLevels[
      Math.min(
        completedCount,
        studentLevels.length - 1
      )
    ];

  document.getElementById(
    "starCount"
  ).textContent =
    completedCount;

  document.getElementById(
    "bonusTokenCount"
  ).textContent =
    studentProgress.bonusTokens;

  document.getElementById(
    "checkpointSummary"
  ).textContent =
    completedCount + " / 5";

  document.getElementById(
    "heroCharacter"
  ).textContent =
    level.character;

  document.getElementById(
    "studentMarker"
  ).textContent =
    level.character;

  document.getElementById(
    "heroLevel"
  ).textContent =
    level.name;

  if (completedCount === 5) {
    document.getElementById(
      "routeStatus"
    ).textContent =
      "🏁 Weekly goal completed!";
  } else {
    const nextCheckpointId =
      checkpointIds[completedCount];

    const nextActivity =
      week1Activities.find(
        item =>
          item.id === nextCheckpointId
      );

    document.getElementById(
      "routeStatus"
    ).textContent =
      "Next checkpoint: " +
      nextActivity.routeLabel;
  }
}


/* =========================================================
   31. UPDATE WEEKLY REWARDS
   ========================================================= */

function renderWeeklyRewards() {
  document.getElementById(
    "rewardWeekTitle"
  ).textContent =
    selectedWeek.number +
    ": " +
    selectedWeek.title;

  document.getElementById(
    "rewardReleaseStatus"
  ).textContent =
    selectedWeek.status;

  const currentWeekIndex =
    weeks.findIndex(
      week =>
        week.id === selectedWeekId
    );

  const nextWeek =
    weeks[currentWeekIndex + 1];

  document.getElementById(
    "nextReleaseText"
  ).textContent =
    nextWeek
      ? nextWeek.releaseNote
      : "This is the final scheduled learning week.";
}


/* =========================================================
   32. STUDENT COMPLETION EVIDENCE
   ========================================================= */

function evidenceIsUnlocked() {
  return (
    getCompletedCheckpointCount() === 5 &&
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
    completedCount + " / 5";

  document.getElementById(
    "evidenceStars"
  ).textContent =
    completedCount + " / 5";

  document.getElementById(
    "evidenceTokens"
  ).textContent =
    studentProgress.bonusTokens;

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
  document
    .getElementById("lessonSection")
    .classList.add("hidden");

  document
    .getElementById("activitiesSection")
    .classList.remove("hidden");

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
