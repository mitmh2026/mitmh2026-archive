import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { h as HighlightedBorderedGrid } from "./CPm4UabO.js";
import { M as Mono } from "./8lrfSi8Z.js";
const grid = [
  ["E", "E", "R", "F", "O", "U", "T", "N", "E", "M", "E", "C", "O"],
  ["M", "T", "A", "D", "R", "E", "S", "S", "E", "R", "S", "L", "C"],
  ["R", "E", "T", "S", "I", "S", "E", "R", "I", "E", "O", "R", "I"],
  ["I", "S", "T", "E", "L", "E", "S", "T", "T", "S", "Y", "D", "N"],
  ["A", "S", "M", "H", "N", "O", "T", "A", "T", "I", "O", "N", "O"],
  ["T", "N", "I", "Y", "A", "A", "T", "E", "R", "W", "I", "N", "M"],
  ["C", "E", "I", "E", "N", "S", "N", "E", "D", "D", "E", "R", "T"],
  ["R", "H", "R", "L", "V", "O", "M", "T", "S", "D", "E", "E", "S"],
  ["O", "H", "I", "E", "E", "E", "N", "B", "M", "I", "N", "I", "T"],
  ["X", "A", "S", "O", "M", "S", "S", "Y", "L", "D", "G", "A", "T"],
  ["H", "O", "D", "B", "Z", "A", "G", "A", "S", "O", "A", "C", "S"],
  ["R", "P", "E", "O", "A", "R", "O", "R", "U", "A", "G", "T", "H"],
  ["A", "R", "E", "S", "I", "L", "T", "G", "L", "Q", "E", "O", "A"]
];
const clues = [
  "Light",
  "Information",
  "Regimented",
  "Closet",
  "Occupy",
  "Flower",
  "Symbol",
  "Trivial",
  "Tiny",
  "Symbol",
  "Woodwind",
  "Smell",
  "Recollect",
  "Opposer",
  "Story",
  "Kernels",
  "Kitchen tools",
  "Alone",
  "Says",
  "Pillars",
  "Equivalents",
  "Renter",
  "Chirp"
];
const clueAnswers = [
  ["AURORA", "U"],
  ["DATA", "D"],
  ["DIETED", "I"],
  ["DRESSER", "D"],
  ["ENGAGE", "N"],
  ["IRIS", "S"],
  ["LOGO", "L"],
  ["MERE", "M"],
  ["MINI", "M"],
  ["NOTATION", "I"],
  ["OBOE", "E"],
  ["ODOR", "R"],
  ["REMEMBER", "B"],
  ["RESISTER", "T"],
  ["SAGA", "S"],
  ["SEEDS", "D"],
  ["SIEVES", "I"],
  ["SOLO", "S"],
  ["STATES", "E"],
  ["STELES", "T"],
  ["SYNONYMS", "M"],
  ["TENANT", "E"],
  ["TWEET", "W"]
];
const almostPalindromeIndex = [
  1,
  0,
  1,
  0,
  1,
  3,
  0,
  0,
  0,
  5,
  3,
  3,
  5,
  5,
  0,
  3,
  1,
  0,
  4,
  1,
  6,
  1,
  1
];
const backgroundColors = [
  "bg-green-400",
  "bg-blue-400",
  "bg-red-200",
  "bg-purple-200",
  "bg-slate-400",
  "bg-violet-400",
  "bg-orange-400",
  "bg-teal-600",
  "bg-pink-300",
  "bg-cyan-500",
  "bg-lime-200",
  "bg-rose-200",
  "bg-fuchsia-500",
  "bg-sky-500",
  "bg-pink-600",
  "bg-amber-600",
  "bg-stone-400",
  "bg-orange-200",
  "bg-sky-100",
  "bg-teal-200",
  "bg-lime-300",
  "bg-rose-500",
  "bg-indigo-400"
];
const answerLocations = {
  AURORA: [
    { row: 11, col: 9 },
    { row: 11, col: 8 },
    { row: 11, col: 7 },
    { row: 11, col: 6 },
    { row: 11, col: 5 },
    { row: 11, col: 4 }
  ],
  DATA: [
    { row: 9, col: 9 },
    { row: 10, col: 10 },
    { row: 11, col: 11 },
    { row: 12, col: 12 }
  ],
  DIETED: [
    { row: 1, col: 3 },
    { row: 2, col: 4 },
    { row: 3, col: 5 },
    { row: 4, col: 6 },
    { row: 5, col: 7 },
    { row: 6, col: 8 }
  ],
  DRESSER: [
    { row: 1, col: 3 },
    { row: 1, col: 4 },
    { row: 1, col: 5 },
    { row: 1, col: 6 },
    { row: 1, col: 7 },
    { row: 1, col: 8 },
    { row: 1, col: 9 }
  ],
  ENGAGE: [
    { row: 7, col: 10 },
    { row: 8, col: 10 },
    { row: 9, col: 10 },
    { row: 10, col: 10 },
    { row: 11, col: 10 },
    { row: 12, col: 10 }
  ],
  IRIS: [
    { row: 6, col: 2 },
    { row: 7, col: 2 },
    { row: 8, col: 2 },
    { row: 9, col: 2 }
  ],
  LOGO: [
    { row: 9, col: 8 },
    { row: 10, col: 9 },
    { row: 11, col: 10 },
    { row: 12, col: 11 }
  ],
  MERE: [
    { row: 9, col: 4 },
    { row: 8, col: 3 },
    { row: 7, col: 2 },
    { row: 6, col: 1 }
  ],
  MINI: [
    { row: 8, col: 8 },
    { row: 8, col: 9 },
    { row: 8, col: 10 },
    { row: 8, col: 11 }
  ],
  NOTATION: [
    { row: 4, col: 4 },
    { row: 4, col: 5 },
    { row: 4, col: 6 },
    { row: 4, col: 7 },
    { row: 4, col: 8 },
    { row: 4, col: 9 },
    { row: 4, col: 10 },
    { row: 4, col: 11 }
  ],
  OBOE: [
    { row: 11, col: 3 },
    { row: 10, col: 3 },
    { row: 9, col: 3 },
    { row: 8, col: 3 }
  ],
  ODOR: [
    { row: 4, col: 12 },
    { row: 3, col: 11 },
    { row: 2, col: 10 },
    { row: 1, col: 9 }
  ],
  REMEMBER: [
    { row: 5, col: 8 },
    { row: 6, col: 7 },
    { row: 7, col: 6 },
    { row: 8, col: 5 },
    { row: 9, col: 4 },
    { row: 10, col: 3 },
    { row: 11, col: 2 },
    { row: 12, col: 1 }
  ],
  RESISTER: [
    { row: 2, col: 7 },
    { row: 2, col: 6 },
    { row: 2, col: 5 },
    { row: 2, col: 4 },
    { row: 2, col: 3 },
    { row: 2, col: 2 },
    { row: 2, col: 1 },
    { row: 2, col: 0 }
  ],
  SAGA: [
    { row: 10, col: 8 },
    { row: 10, col: 7 },
    { row: 10, col: 6 },
    { row: 10, col: 5 }
  ],
  SEEDS: [
    { row: 7, col: 12 },
    { row: 7, col: 11 },
    { row: 7, col: 10 },
    { row: 7, col: 9 },
    { row: 7, col: 8 }
  ],
  SIEVES: [
    { row: 4, col: 1 },
    { row: 5, col: 2 },
    { row: 6, col: 3 },
    { row: 7, col: 4 },
    { row: 8, col: 5 },
    { row: 9, col: 6 }
  ],
  SOLO: [
    { row: 3, col: 9 },
    { row: 2, col: 10 },
    { row: 1, col: 11 },
    { row: 0, col: 12 }
  ],
  STATES: [
    { row: 6, col: 5 },
    { row: 5, col: 6 },
    { row: 4, col: 7 },
    { row: 3, col: 8 },
    { row: 2, col: 9 },
    { row: 1, col: 10 }
  ],
  STELES: [
    { row: 3, col: 1 },
    { row: 3, col: 2 },
    { row: 3, col: 3 },
    { row: 3, col: 4 },
    { row: 3, col: 5 },
    { row: 3, col: 6 }
  ],
  SYNONYMS: [
    { row: 10, col: 8 },
    { row: 9, col: 7 },
    { row: 8, col: 6 },
    { row: 7, col: 5 },
    { row: 6, col: 4 },
    { row: 5, col: 3 },
    { row: 4, col: 2 },
    { row: 3, col: 1 }
  ],
  TENANT: [
    { row: 2, col: 2 },
    { row: 3, col: 3 },
    { row: 4, col: 4 },
    { row: 5, col: 5 },
    { row: 6, col: 6 },
    { row: 7, col: 7 }
  ],
  TWEET: [
    { row: 4, col: 8 },
    { row: 5, col: 9 },
    { row: 6, col: 10 },
    { row: 7, col: 11 },
    { row: 8, col: 12 }
  ]
};
const answerLocationsSerialized = /* @__PURE__ */ new Set();
const almostPalindromeLocationsSerialized = /* @__PURE__ */ new Set();
const answerIndexMap = clueAnswers.reduce(
  (acc, [answer, _], index) => {
    acc[answer] = index;
    return acc;
  },
  {}
);
for (const [answer, _] of clueAnswers) {
  const coords = answerLocations[answer];
  const answerIndex = answerIndexMap[answer];
  if (!coords || !answerIndex) continue;
  for (const [letterIndex, { row, col }] of coords.entries()) {
    if (letterIndex === almostPalindromeIndex[answerIndex]) {
      almostPalindromeLocationsSerialized.add(`${row},${col}`);
    } else {
      answerLocationsSerialized.add(`${row},${col}`);
    }
  }
}
const defaultCellBg = {};
Object.entries(answerLocations).forEach(([_, coords], index) => {
  var _a;
  const color = backgroundColors[index] ?? "";
  const extractIndex = almostPalindromeIndex[index] ?? -1;
  for (const [letterIndex, { row, col }] of coords.entries()) {
    if (letterIndex === extractIndex) {
      defaultCellBg[`${row},${col}`] = "bg-slate-700 text-white font-bold";
    }
    defaultCellBg[_a = `${row},${col}`] ?? (defaultCellBg[_a] = color);
  }
});
const WordList = ({
  clues: clues2,
  clueAnswers: clueAnswers2,
  backgroundColors: backgroundColors2,
  highlightedIndex,
  onHover,
  onLeave
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-black border", children: "Clue" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-black border", children: "Answer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-black border", children: "Removed Letter" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: clues2.map((clue, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "tr",
      {
        className: `${backgroundColors2[i] ?? ""} ${i === highlightedIndex ? "ring-2 ring-black ring-inset" : ""}`,
        tabIndex: 0,
        onFocus: () => {
          onHover(i);
        },
        onBlur: () => {
          onLeave();
        },
        onMouseEnter: () => {
          onHover(i);
        },
        onMouseLeave: () => {
          onLeave();
        },
        style: { cursor: "pointer", marginBottom: "8px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 border-black border", children: clue }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 border-black border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Mono, { children: [
            clueAnswers2[i][0],
            " "
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 border-black border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Mono, { children: [
            clueAnswers2[i][1],
            " "
          ] }) })
        ]
      },
      clueAnswers2[i][0]
    )) })
  ] });
};
const WordSearchSolution = () => {
  const [highlightedIndex, setHighlightedIndex] = reactExports.useState(-1);
  const [highlightedPositions, setHighlightedPositions] = reactExports.useState([]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 place-self-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      HighlightedBorderedGrid,
      {
        grid,
        defaultCellBg,
        highlightedPositions,
        className: "py-1 px-2 text-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hover or keyboard-focus to highlight in grid" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WordList,
        {
          clues,
          clueAnswers,
          backgroundColors,
          highlightedIndex,
          onHover: (i) => {
            setHighlightedIndex(i);
            const key = clueAnswers[i][0];
            if (key && key in answerLocations) {
              const positions = answerLocations[key];
              if (positions) {
                setHighlightedPositions(positions);
              }
            }
          },
          onLeave: () => {
            setHighlightedIndex(-1);
            setHighlightedPositions([]);
          }
        }
      )
    ] })
  ] });
};
const elem = document.getElementById("uneven-solution-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(WordSearchSolution, {}));
} else {
  console.error(
    "Could not mount App because #uneven-solution-root was nowhere to be found"
  );
}
//# sourceMappingURL=B4v59xKs.js.map
