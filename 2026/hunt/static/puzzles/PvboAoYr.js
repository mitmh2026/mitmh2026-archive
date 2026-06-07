import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { I as ImageGallery } from "./CPm4UabO.js";
const bruteForce = "/2026/hunt/static/puzzles/assets/338d9aae99d04340.jpeg";
const luigi = "/2026/hunt/static/puzzles/assets/0daf738508152979.png";
const mythfiaKitty = "/2026/hunt/static/puzzles/assets/47d71c0e7b345d7f.jpg";
const pictureGame = "/2026/hunt/static/puzzles/assets/c8cd23a6f13eeb21.jpg";
const qDuckrypters = "/2026/hunt/static/puzzles/assets/9e0ac17bce6128e8.png";
const setec = "/2026/hunt/static/puzzles/assets/d703bd472e35ebe1.png";
const IMAGES = [
  { src: bruteForce, alt: "Brute Force", description: "Brute Force" },
  {
    src: luigi,
    alt: "Luigi's Death Stare",
    description: "Luigi's Death Stare"
  },
  {
    src: mythfiaKitty,
    alt: "mythfia and friends",
    description: "mythfia and friends"
  },
  {
    src: pictureGame,
    alt: "Exotic Creatures of r/PictureGame",
    description: "Exotic Creatures of r/PictureGame"
  },
  {
    src: qDuckrypters,
    alt: "Quarantine Duckrypters: Souped Up",
    description: "Quarantine Duckrypters: Souped Up"
  },
  { src: setec, alt: "Setec Astronomy", description: "Setec Astronomy" }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "There were so many excellent comic submissions" }),
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
//# sourceMappingURL=PvboAoYr.js.map
