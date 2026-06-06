import { c as clientExports, j as jsxRuntimeExports } from "./Cqdl_uWg.js";
import { Q as QuizTaskComponent } from "./CPm4UabO.js";
const BC_QUESTIONS_EASY = [
  {
    id: 1,
    question: "Which comes earlier in the English alphabet?",
    answer: "B"
  },
  {
    id: 2,
    question: "Which is a body of water?",
    answer: "C"
  },
  {
    id: 3,
    question: "Which is a pollinating insect?",
    answer: "B"
  },
  {
    id: 4,
    question: 'Which means "to perceive with the eyes"?',
    answer: "C"
  },
  {
    id: 5,
    question: 'Which means "to exist"?',
    answer: "B"
  },
  {
    id: 6,
    question: "When made lower, which shrinks in size but does not change in shape?",
    answer: "C"
  },
  {
    id: 7,
    question: "Which is commonly used as a central tone?",
    answer: "C"
  },
  {
    id: 8,
    question: "When made lower, which still rises above the midline?",
    answer: "B"
  },
  {
    id: 9,
    question: "Which represents the speed of light?",
    answer: "C"
  },
  {
    id: 10,
    question: "Which is a Roman numeral?",
    answer: "C"
  }
];
const BC_QUESTIONS_HARD = [
  {
    id: 100,
    question: "In the name of a Canadian province, which shares a name with a river?",
    answer: "C"
  },
  {
    id: 101,
    question: "In dates, which refers to a man's name?",
    answer: "C"
  },
  {
    id: 102,
    question: 'Which is part of a common college saying about its ability to "get degrees"?',
    answer: "C"
  },
  {
    id: 103,
    question: "In the name of Scandinavia's second largest, exhibition hall, which is derived from a city's name?",
    answer: "B"
  },
  {
    id: 104,
    question: "In the name of a professional wrestling stable, which is the name of a piece of ammunition?",
    answer: "B"
  },
  {
    id: 105,
    question: "In a ticker symbol, which is the founder's last name?",
    answer: "B"
  },
  {
    id: 106,
    question: "In the name of an American university, which is the name of a city?",
    answer: "B"
  },
  {
    id: 107,
    question: "In the study of projectile motion, which refers to a mathematical quantity?",
    answer: "C"
  },
  {
    id: 108,
    question: "In soil science, which is the name of an element?",
    answer: "C"
  },
  {
    id: 109,
    question: "In chemistry, which is lighter?",
    answer: "B"
  },
  {
    id: 110,
    question: "In NATO, which is a common man's name?",
    answer: "C"
  },
  {
    id: 111,
    question: "In European English national television networks for adults, which appears more frequently?",
    answer: "B"
  },
  {
    id: 112,
    question: "In morse, which has an equal number of dots and dashes?",
    answer: "C"
  },
  {
    id: 113,
    question: "In email communications, which appears more frequently?",
    answer: "C"
  },
  {
    id: 114,
    question: "In North American English national television networks, which appears more frequently?",
    answer: "C"
  },
  {
    id: 115,
    question: "In maritime signalling, which has exactly 3 colors?",
    answer: "C"
  },
  {
    id: 116,
    question: "In Braille, which has raised dots aligned vertically?",
    answer: "B"
  },
  {
    id: 117,
    question: "In a signalling system using two flags, which forms the smaller minor central angle?",
    answer: "B"
  },
  {
    id: 118,
    question: "In radio systems, which refers to a group of people?",
    answer: "C"
  },
  {
    id: 119,
    question: "In the obsolete symbol for niobium, which is capitalized?",
    answer: "C"
  },
  {
    id: 120,
    question: "In a football position, which comes first?",
    answer: "C"
  }
];
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
const getQuestions = (numberOfQuestions, possibleAnswers) => {
  let questions_easy = BC_QUESTIONS_EASY;
  let questions_hard = BC_QUESTIONS_HARD;
  if (possibleAnswers.length > 0) {
    questions_easy = questions_easy.filter(
      (q) => possibleAnswers.includes(q.answer)
    );
    questions_hard = questions_hard.filter(
      (q) => possibleAnswers.includes(q.answer)
    );
  }
  const clampedNumberOfQuestions = Math.min(
    numberOfQuestions,
    questions_easy.length + questions_hard.length
  );
  let numEasy = Math.floor(clampedNumberOfQuestions / 3);
  numEasy = Math.min(numEasy, questions_easy.length);
  let numHard = clampedNumberOfQuestions - numEasy;
  numHard = Math.min(numHard, questions_hard.length);
  let totalSelected = numEasy + numHard;
  if (totalSelected < clampedNumberOfQuestions) {
    const remainingNeeded = clampedNumberOfQuestions - totalSelected;
    const remainingEasyCapacity = questions_easy.length - numEasy;
    const remainingHardCapacity = questions_hard.length - numHard;
    if (remainingEasyCapacity >= remainingHardCapacity && remainingEasyCapacity > 0) {
      const addEasy = Math.min(remainingNeeded, remainingEasyCapacity);
      numEasy += addEasy;
      totalSelected += addEasy;
    }
    if (totalSelected < clampedNumberOfQuestions && remainingHardCapacity > 0) {
      const stillNeeded = clampedNumberOfQuestions - totalSelected;
      const addHard = Math.min(stillNeeded, remainingHardCapacity);
      numHard += addHard;
      totalSelected += addHard;
    }
  }
  const shuffled_easy = shuffle(questions_easy);
  const shuffled_hard = shuffle(questions_hard);
  return [
    ...shuffled_easy.slice(0, numEasy),
    ...shuffled_hard.slice(0, numHard)
  ];
};
const bc_elem = document.getElementById("bc-root");
if (bc_elem) {
  const root = clientExports.createRoot(bc_elem);
  const possibleAnswers = ["B", "C"];
  const numberOfQuestions = 10;
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizTaskComponent,
      {
        taskSlug: "burton_conner_house",
        localQuestions: () => getQuestions(numberOfQuestions, possibleAnswers),
        quizInstructions: "B or C",
        refreshTimeInSeconds: 5,
        numberOfQuestions,
        possibleAnswers
      }
    )
  );
} else {
  console.error("Could not mount because #bc-root was nowhere to be found");
}
//# sourceMappingURL=lzvJfZje.js.map
