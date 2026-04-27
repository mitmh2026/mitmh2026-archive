import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { I as ImageGallery } from "./CPm4UabO.mjs";
const lexingtons = "/2026/static/puzzles/assets/c3c053005df39b30.png";
const nope = "/2026/static/puzzles/assets/77a4b0b8d20eca51.png";
const unicode_equivalence = "/2026/static/puzzles/assets/3020e385ed55b14e.png";
const IMAGES = [
  {
    src: unicode_equivalence,
    alt: "Unicode Equivalence",
    description: "Unicode Equivalence"
  },
  { src: lexingtons, alt: "The Lexingtons", description: "The Lexingtons" },
  { src: nope, alt: "Nope", description: "Nope" }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We were very impressed by the number of Puzzmon children that were crocheted. In total, over 120 Puzzmon children were created. Below are pictures of just a few." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ImageGallery, { images: IMAGES })
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
//# sourceMappingURL=D-RuntFw.mjs.map
