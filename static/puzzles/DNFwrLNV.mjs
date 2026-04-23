import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { g as getLocalSolvedPuzzleMap, C as ClickableMonarchDevice, a as PuzzleInfoBox } from "./CPm4UabO.mjs";
const CAPSTONE_SLUG = "bringing_up_baby_shark";
const PuzzleComponent = () => {
  const solvedPuzzles = getLocalSolvedPuzzleMap();
  return CAPSTONE_SLUG in solvedPuzzles ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The Bubble Cove Puzzmon like swimming around with their favorite shark types!",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Can you remember what they are?"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClickableMonarchDevice, { zoneSlug: "bubble_cove", className: "w-20" }),
    ","
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(PuzzleInfoBox, { copyable: false, children: [
    "You need to solve the",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/puzzles/${CAPSTONE_SLUG}`, children: "Bubble Cove capstone puzzle" }),
    " ",
    "before you can access this task."
  ] });
};
const elem = document.getElementById("puzzle-content-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(PuzzleComponent, {}));
} else {
  console.error(
    "Could not mount App because #puzzle-content-root was nowhere to be found"
  );
}
//# sourceMappingURL=DNFwrLNV.mjs.map
