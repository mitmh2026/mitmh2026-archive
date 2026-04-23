import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { C as COPY_ONLY_CLASS, N as NO_COPY_CLASS } from "./8izHJ_gg.mjs";
import { a as PuzzleInfoBox, H as HorizontalDivider } from "./CPm4UabO.mjs";
import { c as cn } from "./8lrfSi8Z.mjs";
import { a as arrayType, s as stringType } from "./CHMkij4t.mjs";
const img1 = "/static/puzzles/assets/ce287e429806ce29.png";
const img2 = "/static/puzzles/assets/0abcf6695bf54c34.png";
const img3 = "/static/puzzles/assets/cc30ea2685566948.png";
const img4 = "/static/puzzles/assets/4c9371e94036e7dd.png";
const img5 = "/static/puzzles/assets/74d14411c84af2d8.png";
const img6 = "/static/puzzles/assets/857fa808414ea757.png";
const img7 = "/static/puzzles/assets/794de7f277990467.png";
const EMPTY_ANSWERS = [null, null, null, null, null];
const LOCATIONS = [
  "Bandit Camp",
  "Battlefield of Khazard",
  "Castle Wars",
  "Chaos Temple",
  "Digsite",
  "Emir's Arena",
  "Feldip Hills",
  "Ferox Enclave",
  "Fortis Colosseum",
  "Fossil Island",
  "Gnome Stronghold",
  "Grand Exchange",
  "Jaleustrophos",
  "Jalsavrah",
  "Prifddinas",
  "Tree Gnome Village",
  "Xeric's Lookout"
];
const NONSENSE1 = [
  "THEBOTTLEYSCRAPER",
  "REPUTATIONROLEAU",
  "MEXTREMEMANSION",
  "SEARUN",
  "IBMIMAGECUP",
  "HOWARDLIVES",
  "DAUGHTEREACH",
  "INNVIRTUALLYBE",
  "EPITHETMEASURE",
  "CLOISTERLIFE",
  "ABSURDTOSHOW",
  "SENTANGEL",
  "TITLECBIZ"
];
const CLUES = [
  "Enormous Munchy Avian Pursuing",
  "Helping a man overcome his fears in his sleep",
  "Man becomes poultry in a spooky mansion",
  "...of a Drunken Dwarf",
  "Famous wizard got stuck in glass mineral",
  "Puzzling homicide in the mansion",
  "Killing a tyrant in a forest full of traps",
  "Zombie pirates are thirsty and angry",
  "Colourful livestock causing the plague",
  "Do I side with the Mahjarrat or Armadyl?",
  "Big sapling poisoned by a hidden stone"
];
const NONSENSE2 = [
  "HUTK EGXJ",
  "UJSTUDSO AKDW",
  "NMVSMVABZIQVA KIABTM",
  "BMVQZTVMY JA NCVYJRN",
  "FDIBNOJRI",
  "IXSX AOXDLK FPIB",
  "UMQGMZLQBKP",
  "AZCE ASLDXLEJD",
  "ZOHFGPH YBPU",
  "ZSLWL",
  "OCZ AJMBJOOZI XZHZOZMT",
  "CPULYF"
];
const DEFAULT_CHEST_TEXT = "Solve more clues to open this casket.";
const DEFAULT_CHEST_ALT = "A casket (that looks like a chest)";
const DEFAULT_CHEST_LINES = [];
const ANSWERS = ["OBELISK", "GUTHIX", "PICKPOCKETING", "RIGOUR", "SPIDER"];
const PARTIALS = [
  [],
  [],
  [["SUMUPRUNECOST", "SUM UP RUNE COST: Keep going!"]],
  [],
  [["THREECROSSES", "THREE CROSSES: Keep going!"]]
];
const CHEST_DESCRIPTIONS = [
  "5 items with numbers to the top-left of them, in a 2-row 3-column grid with the bottom-right missing:",
  "A brown tied bag with the number 3 to the top-left",
  "A piece of paper with five short lines of writing with the number 5 to the top-left",
  "A purple oval with a smaller deeper-purple oval inside and an even deeper-purple many-pointed shape inside with the number 4 to the top-left",
  "A rolled-up green scroll with the number 3 to the top-left",
  "A bunch of blue spheres in a see-through container with the number 1 to the top-left"
];
const normalizeGuess = (value) => value.toUpperCase().replace(/[^A-Z]/g, "");
const normalizeAnswer = (answers) => {
  if (answers.length !== 5) return [...EMPTY_ANSWERS];
  return answers.map(
    (ans) => typeof ans === "string" || ans === null ? ans : null
  );
};
const ClueArbiterComponent = ({
  getStorage,
  setStorage
}) => {
  const [storedAnswers, setStoredAnswers] = reactExports.useState(
    () => normalizeAnswer(getStorage())
  );
  const [messages, setMessages] = reactExports.useState(
    () => storedAnswers.map((ans) => ans ?? "")
  );
  const [inputs, setInputs] = reactExports.useState(["", "", "", "", ""]);
  const [lastSubmissionTime, setLastSubmissionTime] = reactExports.useState([
    0,
    0,
    0,
    0,
    0
  ]);
  const [processingGuess, setProcessingGuess] = reactExports.useState([
    false,
    false,
    false,
    false,
    false
  ]);
  const [chestText, setChestText] = reactExports.useState(DEFAULT_CHEST_TEXT);
  const [chestSrc, setChestSrc] = reactExports.useState(img6);
  const [chestAlt, setChestAlt] = reactExports.useState(DEFAULT_CHEST_ALT);
  const [chestLines, setChestLines] = reactExports.useState(DEFAULT_CHEST_LINES);
  const onCheckAll = reactExports.useCallback((answers) => {
    const solvedEnough = answers.filter(
      (ans, idx) => ans !== null && normalizeGuess(ans) === ANSWERS[idx]
    ).length >= 3;
    if (!solvedEnough) {
      return;
    }
    setChestText("");
    setChestSrc(img7);
    setChestAlt(
      "An open casket (that looks like a chest), with five items, each with a number to the top-left of it. The items are arranged in a 2-row 3-column grid with the bottom-right missing. See copy-to-clipboard text for detailed descriptions."
    );
    setChestLines(CHEST_DESCRIPTIONS);
  }, []);
  reactExports.useEffect(() => {
    onCheckAll(storedAnswers);
  }, [onCheckAll]);
  const submitAnswer = reactExports.useCallback(
    (checkerId) => {
      if (inputs[checkerId].length === 0) return;
      if (processingGuess[checkerId]) {
        setMessages((prev) => {
          const next = [...prev];
          next[checkerId] = "Still processing previous guess";
          return next;
        });
        return;
      }
      if (Date.now() - lastSubmissionTime[checkerId] < 6e4) {
        setMessages((prev) => {
          const next = [...prev];
          next[checkerId] = "Rate-limited (1/minute)";
          return next;
        });
        return;
      }
      setProcessingGuess((prev) => {
        const next = [...prev];
        next[checkerId] = true;
        return next;
      });
      const normalized = normalizeGuess(inputs[checkerId]);
      let result = {
        answer: null,
        text: `${normalized}: Incorrect.`
      };
      if (normalized === ANSWERS[checkerId]) {
        result = { answer: normalized, text: normalized };
      }
      for (const [alt, message] of PARTIALS[checkerId]) {
        if (normalized === alt) {
          result = { answer: null, text: message };
          break;
        }
      }
      setStoredAnswers((prev) => {
        const next = prev.map(
          (ans, idx) => idx === checkerId ? result.answer : ans
        );
        setStorage(next);
        if (result.answer !== null) onCheckAll(next);
        return next;
      });
      setMessages((prev) => {
        const next = [...prev];
        next[checkerId] = result.text;
        return next;
      });
      if (result.text.includes("Incorrect")) {
        setLastSubmissionTime((prev) => {
          const next = [...prev];
          next[checkerId] = Date.now();
          return next;
        });
      }
      setProcessingGuess((prev) => {
        const next = [...prev];
        next[checkerId] = false;
        return next;
      });
    },
    [inputs, processingGuess, lastSubmissionTime, setStorage, onCheckAll]
  );
  const onKeyDown = reactExports.useCallback(
    (i) => (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        submitAnswer(i);
      }
    },
    [submitAnswer]
  );
  const checkerRow = reactExports.useCallback(
    (checkerId) => {
      const solved = storedAnswers[checkerId] !== null;
      const text = messages[checkerId];
      return solved ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        text,
        " ✅"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: inputs[checkerId],
            onChange: (e) => {
              const updated = [...inputs];
              updated[checkerId] = e.target.value;
              setInputs(updated);
            },
            onKeyDown: onKeyDown(checkerId),
            className: "border border-black"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              submitAnswer(checkerId);
            },
            disabled: inputs[checkerId].length === 0,
            className: cn(
              "ml-2 rounded-2xl px-4 py-2 shadow-sm border bg-white hover:bg-gray-50 disabled:opacity-50",
              inputs[checkerId].length === 0 && "cursor-not-allowed"
            ),
            children: "Check"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: text })
      ] });
    },
    [messages, inputs, storedAnswers, submitAnswer, onKeyDown]
  );
  const checkers = reactExports.useMemo(
    () => [0, 1, 2, 3, 4].map((idx) => checkerRow(idx)),
    [checkerRow]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PuzzleInfoBox, { copyable: false, children: "Which puzzles are solved is stored in your browser, not across the team, so make sure someone inputs all the answers your team has. Also, descriptions of the images are available via copy-to-clipboard." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: COPY_ONLY_CLASS, children: "Which puzzles are solved is stored in your browser, not across the team, so make sure someone inputs all the answers your team has." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: NO_COPY_CLASS, children: checkers[0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img1, alt: "Description in copyable text below" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: COPY_ONLY_CLASS, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Armaments so special, every monster cowers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "How many times can you use their powers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8", children: "2 rows of 5 images" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "Row 1 (left-to-right):" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Long bladed weapon with a pointy red blade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Large bladed weapon with a purple cross in a circle ornament at the handle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Large bladed weapon with a golden blade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bladed weapon with a gray blade and purple gem" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bladed weapon with a protective guard on the handle" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "Row 2 (left-to-right):" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ranged weapon with a red handle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Two almost-identical blunt weapons next to each other with red and purple line etchings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Large shield with a green eye in the center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Short bladed weapon with a dark red blade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bladed weapon with a sun ornament at the handle" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HorizontalDivider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: NO_COPY_CLASS, children: checkers[1] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img2, alt: "Description in copyable text below" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: COPY_ONLY_CLASS, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "How many places can you go" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "With what the images here show" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8", children: LOCATIONS.map((i, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: i }, ind)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8", children: "A line with 6 pairs of 2 small emoji-like images each:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ring and Two Crossed Swords" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Fire and Necklace" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ghost and Tree" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Man With A Crown and Sceptre" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pickaxe and Necklace" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Wizard and Necklace" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HorizontalDivider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: NO_COPY_CLASS, children: checkers[2] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img3, alt: "Description in copyable text below" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: COPY_ONLY_CLASS, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Removing a spare" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Each cast you repair" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8", children: NONSENSE1.map((i, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: i }, ind)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8", children: "_ _ _ _ _ _ _ _ _ _ _ _ _" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HorizontalDivider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: NO_COPY_CLASS, children: checkers[3] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img4, alt: "Description in copyable text below" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: COPY_ONLY_CLASS, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sort what the diary has recorded" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Count points the adventures rewarded" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8", children: CLUES.map((i, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: i }, ind)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8", children: "_ _ _ _ _ _" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HorizontalDivider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: NO_COPY_CLASS, children: checkers[4] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img5, alt: "Description in copyable text below" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: COPY_ONLY_CLASS, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The symbols are shifted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Locations depicted" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8", children: NONSENSE2.map((i, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: i }, ind)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The map will show" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "What lies below" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8", children: "_ _ _ _ _ _" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HorizontalDivider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: chestText }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-live": "polite", "aria-atomic": "true", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: chestSrc, alt: chestAlt }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: chestAlt })
    ] }),
    chestLines.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: COPY_ONLY_CLASS, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: chestLines[0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: chestLines.slice(1).map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: line }, i)) })
    ] })
  ] });
};
const elem = document.getElementById("puzzle-content-root");
if (elem) {
  const PossibleAnswerArray = arrayType(stringType().nullable());
  const storage = window.localStorage;
  const getStorage = () => {
    const raw = storage.getItem("clue-arbiter-data");
    if (raw === null) return [...EMPTY_ANSWERS];
    const safe = PossibleAnswerArray.safeParse(JSON.parse(raw));
    return safe.success ? safe.data : [...EMPTY_ANSWERS];
  };
  const setStorage = (x) => {
    storage.setItem("clue-arbiter-data", JSON.stringify(x));
  };
  const root = clientExports.createRoot(elem);
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClueArbiterComponent, { getStorage, setStorage })
  );
} else {
  console.error(
    "Could not mount ClueArbiterComponent because #puzzle-content-root was nowhere to be found"
  );
}
//# sourceMappingURL=DoXCS_dZ.mjs.map
