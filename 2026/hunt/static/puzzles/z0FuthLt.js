import { R as React, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { H as HorizontalDivider } from "./CPm4UabO.js";
import { B as Button } from "./CyHnzWK1.js";
const q1a = "/2026/hunt/static/puzzles/assets/fdbf8db44396faaf.png";
const q1b = "/2026/hunt/static/puzzles/assets/314af2ac4a2cddd7.png";
const q10a = "/2026/hunt/static/puzzles/assets/bf4b5b8ce20393b2.png";
const q10b = "/2026/hunt/static/puzzles/assets/b627f2fc64fbd0a3.png";
const q11a = "/2026/hunt/static/puzzles/assets/13ed98d245d39d32.png";
const q11b = "/2026/hunt/static/puzzles/assets/a75a9dbd5006284b.png";
const q12a = "/2026/hunt/static/puzzles/assets/7db76c3ea88dbf30.png";
const q12b = "/2026/hunt/static/puzzles/assets/ca3c321708f11fb4.png";
const q13a = "/2026/hunt/static/puzzles/assets/1a4fbfa78f03231d.png";
const q13b = "/2026/hunt/static/puzzles/assets/2121193e31c6f588.png";
const q2a = "/2026/hunt/static/puzzles/assets/80b1cb622f076df6.png";
const q2b = "/2026/hunt/static/puzzles/assets/1f5221f4c5d12ae8.png";
const q3a = "/2026/hunt/static/puzzles/assets/393be8beb573004c.png";
const q3b = "/2026/hunt/static/puzzles/assets/039245f8fef76d7d.png";
const q4a = "/2026/hunt/static/puzzles/assets/d3717be64e1b5850.png";
const q4b = "/2026/hunt/static/puzzles/assets/ae411059bbcb1765.png";
const q5a = "/2026/hunt/static/puzzles/assets/276f98c59f2c49e4.png";
const q5b = "/2026/hunt/static/puzzles/assets/fdc0651c7bf7846a.png";
const q6a = "/2026/hunt/static/puzzles/assets/048b425862fd3258.png";
const q6b = "/2026/hunt/static/puzzles/assets/0bdb9873cd7d0b6f.png";
const q7a = "/2026/hunt/static/puzzles/assets/2f2e7e98f4da1194.png";
const q7b = "/2026/hunt/static/puzzles/assets/aa70afaa659539fe.png";
const q8a = "/2026/hunt/static/puzzles/assets/709cf8b42507c6b0.png";
const q8b = "/2026/hunt/static/puzzles/assets/b1298d5da53bc847.png";
const q9a = "/2026/hunt/static/puzzles/assets/dd8b565283ecbb41.png";
const q9b = "/2026/hunt/static/puzzles/assets/6137d592bdc15c22.png";
const correctSubmission = [
  "a",
  "b",
  "a",
  "a",
  "b",
  "b",
  "a",
  "a",
  "b",
  "a",
  "a",
  "b",
  "b"
];
const trueOutput = [
  q1b,
  q3a,
  q4b,
  q4b,
  q8a,
  q7a,
  q6a,
  q5b,
  q12b,
  q2a,
  q2b,
  q10a
];
const allImages = [
  q8a,
  q1b,
  q13a,
  q5a,
  q3b,
  q4b,
  q2b,
  q9b,
  q12b,
  q4a,
  q1a,
  q7a,
  q9a,
  q2a,
  q6a,
  q7b,
  q10b,
  q11b,
  q10a,
  q6b,
  q3a,
  q8b,
  q5b,
  q13b,
  q11a,
  q12a
];
const imageReplacements = /* @__PURE__ */ new Map();
allImages.forEach((image) => {
  const alternatives = allImages.filter((candidate) => candidate !== image);
  imageReplacements.set(image, alternatives);
});
const evaluationThresholds = [
  { minCloseness: 1, message: "Perfect!" },
  { minCloseness: 0.8, message: "Close!" },
  { minCloseness: 0.5, message: "Okay, but you can do better!" },
  { minCloseness: 0.3, message: "Far off, try again!" },
  { minCloseness: 0, message: "You're trying to get it wrong!" }
];
const getEvaluationMessage = (closeness) => {
  for (const threshold of evaluationThresholds) {
    if (closeness >= threshold.minCloseness) {
      return threshold.message;
    }
  }
  return evaluationThresholds[evaluationThresholds.length - 1].message;
};
const normalizeSubmission = (submission) => correctSubmission.map((_, index) => {
  const response = submission[index];
  if (response === "a" || response === "b") {
    return response;
  }
  return void 0;
});
const calculateCloseness = (submission) => {
  const normalized = normalizeSubmission(submission);
  let distance = 0;
  normalized.forEach((answer, index) => {
    if (answer !== correctSubmission[index]) {
      distance += 1;
    }
  });
  return (correctSubmission.length - distance) / correctSubmission.length;
};
const createNoiseGenerator = (normalized) => {
  const seed = normalized.reduce((accumulator, answer, index) => {
    const code = answer === "a" ? 65 : answer === "b" ? 66 : 63;
    const mixed = (accumulator ^ code + index * 2654435769) >>> 0;
    return Math.imul(mixed ^ mixed >>> 16, 2146121005) >>> 0;
  }, 2166136261);
  let state = seed === 0 ? 305419896 : seed;
  return () => {
    state = state + 1831565813 >>> 0;
    let result = Math.imul(state ^ state >>> 15, (state | 1) >>> 0);
    result ^= result + Math.imul(result ^ result >>> 7, (result | 61) >>> 0);
    const finalState = (result ^ result >>> 14) >>> 0;
    return finalState / 4294967296;
  };
};
const clamp = (value, lower, upper) => {
  if (value < lower) {
    return lower;
  }
  if (value > upper) {
    return upper;
  }
  return value;
};
const submitToOutput = (submission) => {
  const normalized = normalizeSubmission(submission);
  const closeness = calculateCloseness(submission);
  const eased = closeness > 0 ? Math.pow(closeness, 1.5) : 0;
  const random = createNoiseGenerator(normalized);
  const lengthSpread = Math.ceil((1 - eased) * 2);
  const offsetRange = lengthSpread * 2 + 1;
  const offset = lengthSpread === 0 ? 0 : Math.floor(random() * offsetRange) - lengthSpread;
  const targetLength = clamp(
    trueOutput.length + offset,
    Math.max(1, trueOutput.length - 2),
    Math.min(allImages.length, trueOutput.length + 2)
  );
  const baseCount = Math.min(trueOutput.length, targetLength);
  const indices = trueOutput.map((_, index) => index);
  for (let i = indices.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    const temp = indices[i];
    indices[i] = indices[j];
    indices[j] = temp;
  }
  const excludedCount = trueOutput.length - baseCount;
  const excluded = new Set(indices.slice(0, excludedCount));
  const included = indices.filter((index) => !excluded.has(index));
  const orderedIncluded = [...included].sort((a, b) => a - b);
  const baseTarget = eased * orderedIncluded.length;
  const noise = (random() - 0.5) * orderedIncluded.length * (0.4 + (1 - eased) * 0.4);
  const matchCount = clamp(
    Math.round(baseTarget + noise),
    0,
    orderedIncluded.length
  );
  const revealOrder = indices.filter((index) => !excluded.has(index));
  const revealed = /* @__PURE__ */ new Set();
  for (let i = 0; i < matchCount; i += 1) {
    revealed.add(revealOrder[i]);
  }
  const generateReplacement = (image) => {
    const alternatives = imageReplacements.get(image);
    if (!alternatives || alternatives.length === 0) {
      return image;
    }
    const selection = Math.floor(random() * alternatives.length);
    return alternatives[selection];
  };
  const coreOutput = orderedIncluded.map((index) => {
    const image = trueOutput[index];
    if (revealed.has(index)) {
      return image;
    }
    return generateReplacement(image);
  });
  const extraCount = targetLength - coreOutput.length;
  if (extraCount <= 0) {
    return coreOutput;
  }
  const extras = [];
  for (let i = 0; i < extraCount; i += 1) {
    const selection = Math.floor(random() * allImages.length);
    extras.push(allImages[selection]);
  }
  return [...coreOutput, ...extras];
};
const evaluateSubmission = (submission) => {
  if (submission.length !== correctSubmission.length) {
    throw new Error("Invalid submission length");
  }
  const closeness = calculateCloseness(submission);
  const evaluation = getEvaluationMessage(closeness);
  const output = submitToOutput(submission);
  return { finalClue: output, evaluation };
};
const QUESTIONS = [
  {
    prompt: ["Kiki", "Bouba"],
    a: { image: q1a, description: "An object with points protruding from it." },
    b: { image: q1b, description: "An object with bulbous protrusions." }
  },
  {
    prompt: ["Goobaw", "Norlib"],
    a: { image: q2a, description: "A tall narrow object with a lumpy top." },
    b: { image: q2b, description: "A short round object with a lumpy bottom." }
  },
  {
    prompt: ["Uumwam", "Ehtt"],
    a: { image: q3a, description: "A wide round object." },
    b: { image: q3b, description: "A narrow tall object" }
  },
  {
    prompt: ["Jarb", "Fancy Jarb"],
    a: { image: q4a, description: "A three-dimensional cylinder" },
    b: {
      image: q4b,
      description: "A three-dimensional cylinder with a tophat and monocle"
    }
  },
  {
    prompt: ["Wissiyesh", "Dumur"],
    a: { image: q5a, description: "A trapezoidal object with a wide bottom" },
    b: {
      image: q5b,
      description: "A leaning, vaguely triangular object that curls over at the top"
    }
  },
  {
    prompt: ["Thipech", "Onura"],
    a: {
      image: q6a,
      description: "Many concentric arcs around a central point"
    },
    b: { image: q6b, description: "Many perpendicular lines" }
  },
  {
    prompt: ["Lack", "Poang"],
    a: {
      image: q7a,
      description: "A rectangular object with four downward protrusions"
    },
    b: { image: q7b, description: "A squiggly object" }
  },
  {
    prompt: ["Alomo", "Vachtuf"],
    a: { image: q8a, description: "A donut-shaped object" },
    b: {
      image: q8b,
      description: "Two objects, each jagged on one end."
    }
  },
  {
    prompt: ["Hiffoo", "Mrolt"],
    a: { image: q9a, description: "A gear-like object" },
    b: {
      image: q9b,
      description: "Several circles, with the larger circles tending to the bottom"
    }
  },
  {
    prompt: ["Spinch", "Qunch"],
    a: { image: q10a, description: "A leaf-like object with a face" },
    b: {
      image: q10b,
      description: "A leaf-like object with a concerning face"
    }
  },
  {
    prompt: ["Yucludae", "Rashikatti"],
    a: { image: q11a, description: "Several clusters of dots" },
    b: { image: q11b, description: "A scattering of dots" }
  },
  {
    prompt: ["Isofi", "Zohng"],
    a: {
      image: q12a,
      description: "A shaded region with a small rectangle cut out"
    },
    b: { image: q12b, description: "A rectangle without a bottom" }
  },
  {
    prompt: ["Xurchog", "Churm"],
    a: {
      image: q13a,
      description: "A wide-on-top trapezoid with a small triangle cut out from the bottom"
    },
    b: {
      image: q13b,
      description: "Short lines approximately radiating from a central point"
    }
  }
];
const createInitialAnswers = () => new Array(QUESTIONS.length).fill(void 0);
const createShuffledOrder = () => {
  const rest = QUESTIONS.map((_, index) => index).slice(1);
  for (let i = rest.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = rest[i];
    rest[i] = rest[j];
    rest[j] = tmp;
  }
  return [0, ...rest];
};
const createRandomizedPrompts = () => {
  return QUESTIONS.map(() => Math.random() < 0.5);
};
const Puzzle = () => {
  const [answers, setAnswers] = React.useState(createInitialAnswers);
  const [displayOrder, setDisplayOrder] = React.useState(createShuffledOrder);
  const [askFirst, setAskFirst] = React.useState(
    createRandomizedPrompts
  );
  const [finalClue, setFinalClue] = React.useState(
    void 0
  );
  const [evaluation, setEvaluation] = React.useState(
    void 0
  );
  const handleSelect = (questionIndex, choice) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = choice;
      return next;
    });
  };
  const handleReset = () => {
    setAnswers(createInitialAnswers());
    setDisplayOrder(createShuffledOrder());
    setAskFirst(createRandomizedPrompts());
    setFinalClue(void 0);
    setEvaluation(void 0);
  };
  const isComplete = answers.every((answer) => answer !== void 0);
  const handleSubmit = () => {
    const submission = answers.map((selection, index) => {
      if (selection === void 0) return void 0;
      const normalized = askFirst[index] ? selection : selection === "a" ? "b" : "a";
      return normalized;
    });
    try {
      const result = evaluateSubmission(submission);
      setEvaluation(result.evaluation);
      setFinalClue(result.finalClue);
    } catch (error) {
      console.error("Evaluation failed:", error);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
    !finalClue && displayOrder.map((questionIndex, displayIndex) => {
      const question = QUESTIONS[questionIndex];
      const previousQuestionIndex = displayOrder[displayIndex - 1];
      const isUnlocked = displayIndex === 0 || answers[previousQuestionIndex] !== void 0;
      if (!isUnlocked) {
        return null;
      }
      const selected = answers[questionIndex];
      const whichToAsk = askFirst[questionIndex] ? question.prompt[0] : question.prompt[1];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
        displayIndex > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(HorizontalDivider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
          "This is ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-blue-500", children: question.prompt[0] }),
          " and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-blue-500", children: question.prompt[1] }),
          ". Which is ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-blue-500", children: whichToAsk }),
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                handleSelect(questionIndex, "a");
              },
              "aria-pressed": selected === "a",
              style: {
                border: selected === "a" ? "2px solid #0070f3" : "1px solid #ccc",
                padding: "0.5rem",
                cursor: "pointer",
                background: "transparent"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: question.a.image,
                  alt: question.a.description,
                  style: { maxWidth: "200px", height: "auto" }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                handleSelect(questionIndex, "b");
              },
              "aria-pressed": selected === "b",
              style: {
                border: selected === "b" ? "2px solid #0070f3" : "1px solid #ccc",
                padding: "0.5rem",
                cursor: "pointer",
                background: "transparent"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: question.b.image,
                  alt: question.b.description,
                  style: { maxWidth: "200px", height: "auto" }
                }
              )
            }
          )
        ] })
      ] }, questionIndex);
    }),
    isComplete && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      !finalClue && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: { marginTop: "1.5rem", display: "flex", gap: "0.75rem" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => {
                handleSubmit();
              },
              children: "Submit"
            }
          )
        }
      ),
      finalClue && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: evaluation }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: finalClue.map((image) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image,
            alt: "",
            style: { maxWidth: "150px", height: "auto" }
          },
          image
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleReset, children: "Try again" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HorizontalDivider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm text-gray-600 mb-2", children: "Your choices:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4", children: displayOrder.map((questionIndex) => {
            const question = QUESTIONS[questionIndex];
            const answer = answers[questionIndex];
            if (answer === void 0) {
              return null;
            }
            const whichToAsk = askFirst[questionIndex] ? question.prompt[0] : question.prompt[1];
            const otherName = askFirst[questionIndex] ? question.prompt[1] : question.prompt[0];
            const selectedImage = answer === "a" ? question.a.image : question.b.image;
            const selectedDescription = answer === "a" ? question.a.description : question.b.description;
            const notSelectedImage = answer === "a" ? question.b.image : question.a.image;
            const notSelectedDescription = answer === "a" ? question.b.description : question.a.description;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: selectedImage,
                        alt: selectedDescription,
                        style: { maxWidth: "75px", height: "auto" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-600 mt-1", children: whichToAsk })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: notSelectedImage,
                        alt: notSelectedDescription,
                        style: {
                          maxWidth: "75px",
                          height: "auto"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-600 mt-1", children: otherName })
                  ] })
                ]
              },
              `choice-${questionIndex}`
            );
          }) })
        ] })
      ] })
    ] })
  ] });
};
const elem = document.getElementById("remote-point-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(Puzzle, {}));
} else {
  console.error(
    "Could not mount App because #remote-point-root was nowhere to be found"
  );
}
//# sourceMappingURL=z0FuthLt.js.map
