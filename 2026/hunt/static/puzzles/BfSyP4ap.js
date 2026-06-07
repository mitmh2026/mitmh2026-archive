import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { g as getLocalSolvedPuzzleMap, C as ClickableMonarchDevice, a as PuzzleInfoBox } from "./CPm4UabO.js";
const CAPSTONE_SLUG = "australian_caduceus";
const PuzzleComponent = () => {
  const solvedPuzzles = getLocalSolvedPuzzleMap();
  return CAPSTONE_SLUG in solvedPuzzles ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The Serpentine Hills Puzzmon love eating apples (except Oudinenuff, who doesn't need to eat). Can you help them navigate through the terrain safely?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Some Puzzmon have special abilities, so make sure to use them to your advantage!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClickableMonarchDevice, { zoneSlug: "serpentine_hills", className: "w-20" }),
    ","
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(PuzzleInfoBox, { copyable: false, children: [
    "You need to solve the",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/2026/hunt/puzzles/${CAPSTONE_SLUG}`, children: "Serpentine Hills capstone puzzle" }),
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
//# sourceMappingURL=BfSyP4ap.js.map
