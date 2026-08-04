import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { d as CapstoneInfoBox, S as ShowAllPuzzmonInfoBox, F as FlavorText, g as getLocalSolvedPuzzleMap } from "./CPm4UabO.js";
import { M as MONSTER_DATA, a as MONSTER_ZONES } from "./C6EA9rzd.js";
const bubbleCovePuzzmon = MONSTER_DATA[MONSTER_ZONES.BUBBLE_COVE];
const CLUES = [
  ["grrrrrrravalax", 3],
  ["healibut", 4],
  ["splorkdine", 2],
  ["barelythereacuda", 3],
  ["steve", 1],
  ["troutorque", 6],
  ["splorkdine", 1],
  ["grrrrrrravalax", 4],
  ["barelythereacuda", 1],
  ["troutorque", 2],
  ["el_tuna_diablo", 7],
  ["healibut", 1],
  ["el_tuna_diablo", 3],
  ["steve", 4]
];
const BUBBLE_COVE_PUZZMON_SLUGS = new Set(
  CLUES.map(([puzzmonSlug]) => puzzmonSlug)
);
const getClues = (showAllPuzzmon) => {
  const localSolvedPuzzleMap = getLocalSolvedPuzzleMap();
  const solvedPuzzmonSlugs = Object.values(localSolvedPuzzleMap).filter(
    (entry) => Boolean(
      entry.puzzmonSlug && BUBBLE_COVE_PUZZMON_SLUGS.has(entry.puzzmonSlug)
    )
  ).map(({ puzzmonSlug }) => puzzmonSlug);
  return CLUES.map(([puzzmonSlug, count]) => {
    if (showAllPuzzmon || solvedPuzzmonSlugs.includes(puzzmonSlug)) {
      const puzzmonName = bubbleCovePuzzmon[puzzmonSlug].name;
      return `${puzzmonName} ${count}`;
    }
    return `??? ${count}`;
  });
};
const PuzzleComponent = () => {
  const [showAllPuzzmon, setShowAllPuzzmon] = reactExports.useState(false);
  const clues = getClues(showAllPuzzmon);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CapstoneInfoBox, {}),
    (showAllPuzzmon || clues.some((clue) => clue.includes("???"))) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShowAllPuzzmonInfoBox,
      {
        showAllPuzzmon,
        onToggle: () => {
          setShowAllPuzzmon(!showAllPuzzmon);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FlavorText, { children: "The Bubble Cove clan is hoping Baby Shark will grow into a wonderful kind of shark. But how would these Puzzmon currently describe them?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-center", children: clues.map((clue, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: clue }, idx)) }) })
  ] });
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
//# sourceMappingURL=DCQqkJpZ.js.map
