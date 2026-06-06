import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { P as PuzzleAnswer } from "./8lrfSi8Z.js";
import { f as Crossword } from "./CPm4UabO.js";
import './font.css';/* empty css          */
const GRID_SIZE = 11;
const FILL = [
  ["g", "i", "a", "n", "t", "r", "a", "n", "s", "o", "m"],
  ["a", "c", "t", "e", "d", "i", "n", "c", "a", "n", "p"],
  ["m", "e", "t", "r", "i", "c", "t", "o", "r", "c", "h"],
  ["b", "r", "i", "o", "n", "e", "g", "v", "i", "e", "a"],
  ["l", "u", "c", "k", "i", "s", "l", "e", "e", "b", "b"],
  ["i", "n", "f", "a", "n", "t", "u", "n", "l", "i", "u"],
  ["n", "e", "a", "r", "g", "a", "e", "l", "i", "c", "n"],
  ["g", "e", "t", "s", "u", "r", "v", "e", "y", "e", "d"],
  ["a", "s", "h", "e", "n", "o", "i", "r", "u", "s", "a"],
  ["u", "p", "o", "o", "d", "l", "e", "o", "m", "e", "n"],
  ["g", "y", "m", "n", "a", "m", "w", "y", "a", "t", "t"]
];
const VERTICAL_BARS = [
  [4],
  [4, 9],
  [5],
  [3, 6, 9],
  [3, 7],
  [5, 7],
  [3, 9],
  [2],
  [3, 7],
  [0, 6],
  [2, 5]
];
const HORIZONTAL_BARS = [
  [4, 7],
  [],
  [1, 6, 10],
  [3, 5, 8, 9],
  [2],
  [7],
  [1, 4, 6, 8],
  [0, 3, 5, 9],
  [],
  [4]
];
const HIGHLIGHTS = [
  [".", ".", ".", ".", ".", "Y", ".", ".", "Y", "Y", "."],
  [".", "Y", ".", "Y", ".", ".", ".", "Y", ".", ".", "."],
  [".", "Y", ".", "Y", ".", "Y", ".", "Y", "Y", "Y", "."],
  [".", "Y", ".", "Y", ".", "Y", ".", ".", ".", "Y", "."],
  [".", ".", "Y", ".", ".", "Y", ".", "Y", "Y", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "Y", ".", "Y", ".", ".", "Y", ".", ".", "Y", "."],
  [".", "Y", ".", "Y", ".", "Y", ".", "Y", ".", "Y", "."],
  [".", "Y", ".", "Y", ".", "Y", ".", "Y", ".", "Y", "."],
  [".", ".", "Y", "Y", ".", ".", "Y", "Y", ".", "Y", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
];
const EMPTY_LABELS = Array.from(
  { length: GRID_SIZE },
  () => Array.from({ length: GRID_SIZE }, () => "")
);
function getGridBarClasses(row, column) {
  var _a, _b;
  const classes = [];
  if (row === GRID_SIZE - 1 || ((_a = HORIZONTAL_BARS[row]) == null ? void 0 : _a.includes(column))) {
    classes.push("border-b-4");
  } else {
    classes.push("border-b");
  }
  if (row === 0) {
    classes.push("border-t-4");
  } else {
    classes.push("border-t");
  }
  if (column === GRID_SIZE - 1 || ((_b = VERTICAL_BARS[row]) == null ? void 0 : _b.includes(column))) {
    classes.push("border-r-4");
  } else {
    classes.push("border-r");
  }
  if (column === 0) {
    classes.push("border-l-4");
  } else {
    classes.push("border-l");
  }
  classes.push("text-lg", "font-semibold", "charfont");
  return classes;
}
const getAdditionalCellStyles = ({
  row,
  column
}) => {
  return {
    backgroundColor: HIGHLIGHTS[row][column] === "Y" ? "#0d5200" : "",
    color: HIGHLIGHTS[row][column] === "Y" ? "#fff" : ""
  };
};
const getAdditionalCellClass = ({
  row,
  column
}) => getGridBarClasses(row, column).join(" ");
const PeacefulSlipSolutionGrid = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Crossword,
    {
      labels: EMPTY_LABELS,
      fill: FILL,
      getAdditionalCellClass,
      getAdditionalCellStyles,
      className: "mx-auto"
    }
  );
};
const TABLE_CLASS = "border border-gray-600 px-2 py-1";
const ANSWER_CLASS = "border border-gray-600 px-2 py-1 charfont";
const PeacefulSlipSolution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Summary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "This crossword uses a custom font inspired by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "http://2021.silphpuzzlehunt.com/puzzle/indirect-anagrams.html", children: "indirect anagrams" }),
      " ",
      "and suckerpinch's",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.youtube.com/watch?v=qTBAW-Eh0tM", children: "Anagraphs" }),
      ": every letter is built from the following components:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "c o r e s . , -" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Solvers will find that the punctuation, usually ignored in most cryptic clues, is also crafted from these components, and sometimes necessary to manipulate in order to arrive at the answers. Clues exploit how these components combine, so solvers focus on the physical construction of letters rather than just sounds or letter order." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Here are all of the lowercase letters in the font:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "abcdefghijklmnopqrstuvwxyz" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Custom Clue Types" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Bits that cannot be broken down: standard cryptic clues referencing the base letters ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "c o r e s" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Letter manipulation: swap a letter (or punctuation) for another assembled from the same components. The interchangeable sets are",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "l v x" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" }),
        ",",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "f t" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" }),
        ",",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "u n" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" }),
        ",",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "k w" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" }),
        ",",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "y z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" }),
        ",",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "b d p q" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" }),
        ", and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "i !" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Component addition/subtraction: add or remove one component to change a single letter." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Anagraph: rebuild the entire entry (letters and sometimes punctuation) with all of its components, denoted with braces",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{ }" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Clue Explanations" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Definitions are underlined in the original clue list." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Across" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "my-4 border-collapse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: TABLE_CLASS, children: "Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: TABLE_CLASS, children: "Clue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: TABLE_CLASS, children: "Explanation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: TABLE_CLASS, children: "Answer" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "big" }),
            " clown tang! (5)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "tang!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" }),
            " using all components"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "giant" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "salvage" }),
            " crooked manor housing a bit that cannot be broken down (6)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagram of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "manor" }),
            " plus component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "s" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "ransom" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "pretended" }),
            " to stir decaf (5)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "decaf" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "acted" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "old society" }),
            " confuses nan? (5)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "nan?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "incan" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "14" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "system" }),
            " where two bits that cannot be broken down fall from type of high rise? (6)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Remove component letters ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "e" }),
            " and",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "o" }),
            " from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "meteoric" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "metric" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "fire!" }),
            " fire at ron! (5)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "atron" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "torch" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "16" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "ancient form of flyer drops a stick...with ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "panache" }),
            " (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "With ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "brid" }),
            ", remove the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "-" }),
            " in",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "d" }),
            " for an",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "o" }),
            " component"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "brio" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "18" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "put down" }),
            " egg drink that replaced one bit that cannot be broken down with another bit that cannot be broken down (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Swap the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "o" }),
            " component in",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "nog" }),
            " for",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "e" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "neg" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "attempt" }),
            " to mend lei (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "lei" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "vie" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "22" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "fortune" }),
            " when playing azul (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "azul" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "luck" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "24" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "key" }),
            " damaged? yes. (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "yes." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "isle" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "26" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "retreat" }),
            " with pep in step (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "pep" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "ebb" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "28" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "hying at full tilt to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "baby" }),
            " (6)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "hying" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "infant" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "some taiwanese basketball player cartwheels and becomes",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "some canadian actor" }),
            " (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Rotate final component of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "lin" }),
            " ",
            "to form counterpart ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "liu" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "liu" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "31" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "almost" }),
            " hear, but the line drops (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Drop the leading line component from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "hear" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "near" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "32" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "old tongue" }),
            " finds a flavorful bulb with a bit that cannot be broken down instead of a bit that cannot be broken down (6)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Replace component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "r" }),
            " in",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "garlic" }),
            " with",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "e" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "gaelic" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "34" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "nab" }),
            " wading bird missing two bits that cannot be broken down (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Remove component letters ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "e" }),
            " and",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "r" }),
            " from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "egret" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "get" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "36" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "saw" }),
            " varied medleys (8)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "medleys" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "surveyed" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "fire residue and a bit that cannot be broken down at",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "queens stadium" }),
            " (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Add component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "e" }),
            " to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "ash" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "ashe" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "42" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "polite denial drops a bit that cannot be broken down for",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "broody genre" }),
            " (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Remove component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "s" }),
            " from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "no sir" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "noir" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "44" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "country's" }),
            " cyber agency has rotating leadership (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Rotate the leading letter of",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "nsa" }),
            " to become a",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "u" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "usa" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "46" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "sketch first revolutionary and ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "dog" }),
            " (6)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Rotate the initial component of",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "doodle" }),
            " to form its counterpart",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "p" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "poodle" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "47" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "sign" }),
            " where a bit that cannot be broken down is in front of some people (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Prefix component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "o" }),
            " to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "men" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "omen" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "48" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "might abuse hgh here?!" }),
            " (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "hgh" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "gym" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "49" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "a war" }),
            " where campy actor lost part of a forelimb (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Drop the leading line component from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "ham" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "nam" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "sheriff" }),
            " flatly ordered to disperse (5)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "flatly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "wyatt" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Down" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "my-4 border-collapse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: TABLE_CLASS, children: "Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: TABLE_CLASS, children: "Clue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: TABLE_CLASS, children: "Explanation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: TABLE_CLASS, children: "Answer" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "risky business" }),
            " makes college lose a bit that cannot be broken down (8)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Remove component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "r" }),
            " from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "grambling" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "gambling" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "meth" }),
            " or cut e? (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "e?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "ice" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "top story" }),
            ": crazy fact! (5)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "fact!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "attic" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "fiddler" }),
            " plays emo (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "emo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "nero" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "shred" }),
            " damaged cue. (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "cue." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "rice" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "worker's" }),
            " tirade loses a bit that cannot be broken down (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Remove component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "r" }),
            " from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "rant" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "ant" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "wrap" }),
            " around usa. (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "usa." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "sari" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "a bit that cannot be broken down got into a number",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "earlier" }),
            " (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Insert component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "c" }),
            " into",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "one" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "once" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "shortened pace" }),
            " is mad, bruh (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "bruh" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "mph" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "11" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "wanting some rolls for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "eating" }),
            " (6)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Rotate the initial component of",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "pining" }),
            " to form its counterpart",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "d" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "dining" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "a bit that cannot be broken down precedes appliance ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "crew" }),
            " ",
            "(5)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Prefix component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "c" }),
            " to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "oven" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "coven" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "silly emu ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "character" }),
            " (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "emu" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "rune" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "19" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "a sugar without three bits that cannot be broken down—",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "it's sticky!" }),
            " (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Remove component letters ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "c" }),
            ",",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "o" }),
            ", and",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "s" }),
            " from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "glucose" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "glue" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "21" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "plenty" }),
            " from clock cycles (8)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "from clock" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "abundant" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "23" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "reshaped scull—",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "they're for kids!" }),
            " (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "scull" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "kars" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "25" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "celebrity" }),
            " gaze without a bit that cannot be broken down (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Remove component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "e" }),
            " from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "stare" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "star" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "26" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "after reflecting, i've straightened up for",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "someone at yale" }),
            " (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Reflect ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "ive" }),
            " and straighten",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "v" }),
            " to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "i" }),
            " to read",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "eli" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "eli" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "27" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "head spinning: dice ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "was second place in ai competition" }),
            " ",
            "(4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Rotate vertically the leading component of",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "dice" }),
            " for",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "b" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "bice" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "29" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "comprehend" }),
            " my long jumble (6)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "my long" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "fathom" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "33" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "rename owen ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "sibbles" }),
            " (5)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "owen" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "leroy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "35" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "manage solve? get ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "an award" }),
            " (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "solve" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "espy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "37" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "a german and" }),
            " a french band leader turned around (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Join French article ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "un" }),
            " with band leader letter flipped from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "b" }),
            " to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "d" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "und" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "38" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "perspective" }),
            " from around lille (4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Anagraph of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "lille" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "view" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "39" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "adjust the start of frog-shooting game in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "arizona city" }),
            " ",
            "(4)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Replace the starting letter of",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "zuma" }),
            " with",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "y" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "yuma" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "before sep" }),
            "-ira fails and loses initial investment, purchase genpact (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Drop the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "i" }),
            " from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "ira" }),
            ", then anagraph",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "-ra" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" }),
            " with the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "g" }),
            " ",
            'from "Genpact"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "aug" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "41" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "a bit that cannot be broken down gets empowered for",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "a while" }),
            " (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Add component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "e" }),
            " to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "on" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "eon" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "43" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "salamander" }),
            " makes resistance unit run away (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Remove component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "r" }),
            " from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "ohm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "olm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "45" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "a bit that cannot be broken down joins alien ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "game" }),
            " (3)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            "Prefix component letter ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "s" }),
            " to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "et" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "set" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Extraction" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Filling the 11×11 barred grid with the clued entries produces the layout below. The shaded cells mark letters that also serve as font components; reading them spells the final answer",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(PuzzleAnswer, { children: "VISUAL" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PeacefulSlipSolutionGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Quest Explanations" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "my-4 border-collapse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: TABLE_CLASS, children: "Quest Text" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: TABLE_CLASS, children: "Explanation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: TABLE_CLASS, children: "Answer" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "a bit that cannot be broken down gets into cool ranking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "lit" }),
            " +",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "s" }),
            " →",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "list" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "list" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "yelp! part of snout got longer!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "snout" }),
            " →",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "shout" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "shout" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "centers of bits that cannot be broken down" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "c o r e s" }),
            " →",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "cores" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "cores" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "do this for an apple soda to raise the bars" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "pop" }),
            " →",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "bob" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "bob" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "reward: improved legroom" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "legroom" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" }),
            " → ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "guerdon" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "guerdon" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "ajax, not unreasonably, too sweet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "ajaxnot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" }),
            " → ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "cloying" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "cloying" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "grill ill phil" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CLASS, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "phil" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "}" }),
            " → ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "quiz" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "quiz" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "Enter the top left-bottom right diagonal, starting with a consonant." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "N/A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "gctoiteeuet" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "Enter the top right-bottom left diagonal, starting with a consonant." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CLASS, children: "N/A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: ANSWER_CLASS, children: "mnrvltgshpg" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Author's Notes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      'There were fewer workable visual manipulations than I first expected, and building the custom font turned into its own project (Thanks, Dan!). The title "',
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "charfactor" }),
      '" is itself an anagraph of "',
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "charfont", children: "anagraph" }),
      `". "grill ill phil" is currently my favorite cryptic-ish clue that I've written.`
    ] })
  ] }) });
};
const elem = document.getElementById("solution-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(PeacefulSlipSolution, {}));
} else {
  console.error(
    "Could not mount App because #solution-root was nowhere to be found"
  );
}
//# sourceMappingURL=CZ19tOhF.js.map
