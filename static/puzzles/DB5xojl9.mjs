import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { g as getLocalSolvedPuzzleMap, C as ClickableMonarchDevice, a as PuzzleInfoBox } from "./CPm4UabO.mjs";
const CAPSTONE_SLUG = "nine_lives";
const PuzzleComponent = () => {
  const solvedPuzzles = getLocalSolvedPuzzleMap();
  return CAPSTONE_SLUG in solvedPuzzles ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    "Oh no, look at the time! The Kitty City Puzzmon commissioned you to take photos for them, but they only seem to come out when you're not looking.",
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClickableMonarchDevice, { zoneSlug: "kitty_city", className: "w-20" }),
    ","
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(PuzzleInfoBox, { copyable: false, children: [
    "You need to solve the",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/puzzles/${CAPSTONE_SLUG}`, children: "Kitty City capstone puzzle" }),
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
//# sourceMappingURL=DB5xojl9.mjs.map
