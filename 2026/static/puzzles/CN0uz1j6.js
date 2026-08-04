import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { g as getLocalSolvedPuzzleMap, C as ClickableMonarchDevice, a as PuzzleInfoBox } from "./CPm4UabO.js";
const CAPSTONE_SLUG = "bird_nation";
const PuzzleComponent = () => {
  const solvedPuzzles = getLocalSolvedPuzzleMap();
  return CAPSTONE_SLUG in solvedPuzzles ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    "The Aviaria Puzzmon invite you to journal with them in their natural habitat.",
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClickableMonarchDevice, { zoneSlug: "aviaria", className: "w-20" })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(PuzzleInfoBox, { copyable: false, children: [
    "You need to solve the",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/2026/puzzles/${CAPSTONE_SLUG}`, children: "Aviaria capstone puzzle" }),
    " before you can access this task."
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
//# sourceMappingURL=CN0uz1j6.js.map
