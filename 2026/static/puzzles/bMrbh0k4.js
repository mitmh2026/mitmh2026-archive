import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { M as MediaGallery } from "./CPm4UabO.js";
const frenchFries = "/2026/static/puzzles/assets/6aa0541149e1d53d.mp4";
const laf = "/2026/static/puzzles/assets/06e9b7a1e3f115cc.mp4";
const VIDEOS = [
  {
    src: frenchFries,
    alt: "French Fries: OPENNESS, INTEGRITY, COMMUNITY",
    mediaType: "video",
    description: "French Fries: OPENNESS, INTEGRITY, COMMUNITY"
  },
  {
    src: laf,
    alt: "Literally Animal Farm: OPENNESS, WELL-BEING, COMMUNITY",
    mediaType: "video",
    description: "Literally Animal Farm: OPENNESS, WELL-BEING, COMMUNITY"
  }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your values:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MediaGallery, { media: VIDEOS })
  ] });
};
const elem = document.getElementById("solution-content-root");
if (elem) {
  clientExports.hydrateRoot(elem, /* @__PURE__ */ jsxRuntimeExports.jsx(Solution, {}));
} else {
  console.error(
    "Could not mount Solution because #solution-content-root was nowhere to be found"
  );
}
//# sourceMappingURL=bMrbh0k4.js.map
