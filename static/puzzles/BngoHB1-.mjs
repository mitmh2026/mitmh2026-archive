import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { g as getLocalSolvedPuzzleMap, C as ClickableMonarchDevice, a as PuzzleInfoBox } from "./CPm4UabO.mjs";
const CAPSTONE_SLUG = "three_dog_night";
const PuzzleComponent = () => {
  const solvedPuzzles = getLocalSolvedPuzzleMap();
  return CAPSTONE_SLUG in solvedPuzzles ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    "The Old Bark Town Puzzmon want to play fetch with you, can you help all of them reach their favorite toys?",
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClickableMonarchDevice, { zoneSlug: "old_bark_town", className: "w-20" }),
    ","
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(PuzzleInfoBox, { copyable: false, children: [
    "You need to solve the",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/puzzles/${CAPSTONE_SLUG}`, children: "Old Bark Town capstone puzzle" }),
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
//# sourceMappingURL=BngoHB1-.mjs.map
