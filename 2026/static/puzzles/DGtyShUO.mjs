import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { N as NO_COPY_CLASS, C as COPY_ONLY_CLASS } from "./8izHJ_gg.mjs";
const ADDEND_1_QUESTION_MARK_COUNTS = [
  93,
  191,
  68,
  124,
  76,
  35,
  130,
  106,
  13,
  66,
  51,
  10
];
const ADDEND_2_QUESTION_MARK_COUNTS = [
  96,
  19,
  40,
  22,
  32,
  232,
  32,
  120,
  22,
  32,
  59,
  257
];
const SUM_QUESTION_MARK_COUNTS = [
  4,
  64,
  52,
  248,
  106,
  294,
  175,
  6422,
  3966,
  8233,
  45874,
  8
];
const SUM_LETTER_COUNTS = [2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
const SUM_LETTERS = ["I", "A", "G", "C", "H", "B", "F", "J", "D", "E", "K"];
const TEXT_FORMAT = "font-mono leading-relaxed";
const CLUES = [
  "A. Dung",
  "B. Short-sheeted furniture",
  "C. Simple",
  "D. Share of something",
  'E. "Be quiet"',
  "F. Face humiliation and apologize",
  "G. Lie",
  "H. Smug smile",
  "I. Drunk",
  "J. Unrealistic goal",
  "K. Involved"
];
const PuzzleComponent = () => {
  const [lineLength, setLineLength] = reactExports.useState(0);
  const containerRef = reactExports.useRef(null);
  const charRef = reactExports.useRef(null);
  const chunkString = (str, length) => {
    const chunks = [];
    if (!str || length < 1) {
      return chunks;
    }
    for (let i = 0; i < str.length; i += length) {
      chunks.push(str.substring(i, i + length));
    }
    return chunks;
  };
  const updateLineLength = reactExports.useCallback(() => {
    if (containerRef.current && charRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const charWidth = charRef.current.offsetWidth;
      if (charWidth > 0) {
        const newLength = Math.floor(containerWidth / charWidth);
        setLineLength(newLength);
      }
    }
  }, []);
  reactExports.useLayoutEffect(() => {
    updateLineLength();
    window.addEventListener("resize", updateLineLength);
    return () => {
      window.removeEventListener("resize", updateLineLength);
    };
  }, [updateLineLength]);
  let ADDEND_1 = "?.";
  for (let i = 0; i < ADDEND_1_QUESTION_MARK_COUNTS.length; i++) {
    const question_mark_count = ADDEND_1_QUESTION_MARK_COUNTS[i];
    if (i === ADDEND_1_QUESTION_MARK_COUNTS.length - 1) {
      ADDEND_1 += "?".repeat(question_mark_count) + "...";
    } else {
      ADDEND_1 += "?".repeat(question_mark_count) + "XX";
    }
  }
  let ADDEND_2 = "?.";
  for (let i = 0; i < ADDEND_2_QUESTION_MARK_COUNTS.length; i++) {
    const question_mark_count = ADDEND_2_QUESTION_MARK_COUNTS[i];
    if (i === ADDEND_2_QUESTION_MARK_COUNTS.length - 1) {
      ADDEND_2 += "?".repeat(question_mark_count) + "...";
    } else {
      ADDEND_2 += "?".repeat(question_mark_count) + "XX";
    }
  }
  let SUM = "?.";
  for (let i = 0; i < SUM_QUESTION_MARK_COUNTS.length; i++) {
    const question_mark_count = SUM_QUESTION_MARK_COUNTS[i];
    if (i === SUM_QUESTION_MARK_COUNTS.length - 1) {
      SUM += "?".repeat(question_mark_count) + "...";
    } else {
      const letter_count = SUM_LETTER_COUNTS[i];
      const letter = SUM_LETTERS[i];
      SUM += "?".repeat(question_mark_count) + letter.repeat(letter_count);
    }
  }
  const addend_lines_1 = chunkString(ADDEND_1, lineLength);
  const addend_lines_2 = chunkString(ADDEND_2, lineLength);
  const sum_lines = chunkString(SUM, lineLength);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-4xl", ref: containerRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        ref: charRef,
        className: `${TEXT_FORMAT} ${NO_COPY_CLASS} absolute invisible -z-10`,
        children: "_"
      }
    ),
    lineLength > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${TEXT_FORMAT} ${NO_COPY_CLASS}`, children: addend_lines_1.map((line, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: line }, `addend-1-${index}`)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: COPY_ONLY_CLASS, children: ADDEND_1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center my-8 sm:my-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl sm:text-5xl", children: "+" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${TEXT_FORMAT} ${NO_COPY_CLASS}`, children: addend_lines_2.map((line, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: line }, `addend-2-${index}`)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: COPY_ONLY_CLASS, children: ADDEND_2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center my-8 sm:my-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl sm:text-5xl", children: "=" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${TEXT_FORMAT} ${NO_COPY_CLASS}`, children: sum_lines.map((line, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: line }, `sum-${index}`)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: COPY_ONLY_CLASS, children: "[Text is too long to copy into Google Sheets. See puzzle for text.]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-fit", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-none w-fit", children: CLUES.map((clue) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-pretty w-fit", children: clue }, clue)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-fit", children: "(1 4 3 3) → (3 5 3) → (7 4)" })
      ] })
    ] })
  ] }) });
};
const elem = document.getElementById("puzzle-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(PuzzleComponent, {}));
} else {
  console.error(
    "Could not mount App because #puzzle-root was nowhere to be found"
  );
}
//# sourceMappingURL=DGtyShUO.mjs.map
