import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { I as ImageGallery } from "./CPm4UabO.mjs";
const control_group = "/2026/static/puzzles/assets/6a30d43d76eec4cf.png";
const death_and_mayhem = "/2026/static/puzzles/assets/89cfaf396c14e0e7.png";
const donner_hunt = "/2026/static/puzzles/assets/f3949f0294ff683c.png";
const galactic_trendsetters = "/2026/static/puzzles/assets/44b662d42bd5a6f2.png";
const ladder_dogs = "/2026/static/puzzles/assets/ba01c85d76b5e17d.png";
const management = "/2026/static/puzzles/assets/fec88bf7e202cb1b.png";
const unicode_snowman = "/2026/static/puzzles/assets/62325747a0af1a9b.png";
const IMAGES = [
  {
    src: death_and_mayhem,
    alt: "Death and Mayhem: Challah Child",
    description: "Death and Mayhem: Challah Child"
  },
  {
    src: galactic_trendsetters,
    alt: "✈✈✈ Galactic Trendsetters ✈✈✈: Shiny Meldekk",
    description: "✈✈✈ Galactic Trendsetters ✈✈✈: Shiny Meldekk"
  },
  {
    src: control_group,
    alt: "Control Group: Dactylinion",
    description: "Control Group: Dactylinion"
  },
  {
    src: donner_hunt,
    alt: "Donner Party of N: Bbluurrbibell",
    description: "Donner Party of N: Bbluurrbibell"
  },
  {
    src: ladder_dogs,
    alt: "Ladder Dogs: Splorkdine",
    description: "Ladder Dogs: Splorkdine"
  },
  {
    src: management,
    alt: "Ange Management: Vortlexlis",
    description: "Ange Management: Vortlexlis"
  },
  {
    src: unicode_snowman,
    alt: "☃: Splorkdine",
    description: "☃: Splorkdine"
  }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Some delicious creations:" }),
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
//# sourceMappingURL=D481VbyN.mjs.map
