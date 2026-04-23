import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { M as MediaGallery } from "./CPm4UabO.mjs";
const deathandmayhem = "/static/puzzles/assets/1b97c0ae8ff43dca.jpg";
const emoji = "/static/puzzles/assets/05e84f9b6e39b870.jpg";
const mettei = "/static/puzzles/assets/f3277b927af7fdb5.png";
const rtnp = "/static/puzzles/assets/cc1ca04051073965.mp4";
const singles = "/static/puzzles/assets/7821bb01eb743b99.jpg";
const trendsetters = "/static/puzzles/assets/4c07ed8a00456c5b.mp4";
const unicodesnowman = "/static/puzzles/assets/ecb4474d44691764.jpg";
const MEDIA = [
  {
    src: deathandmayhem,
    alt: "Death and Mayhem",
    mediaType: "image",
    description: "Death and Mayhem"
  },
  {
    src: emoji,
    alt: "✈️🎟️💸",
    mediaType: "image",
    description: "✈️🎟️💸"
  },
  {
    src: mettei,
    alt: "BRD GmbH 10 - Zweistelliger Spass",
    mediaType: "image",
    description: "BRD GmbH 10 - Zweistelliger Spass"
  },
  {
    src: rtnp,
    alt: "Respect The Nessie's Privacy",
    mediaType: "video",
    description: "Respect The Nessie's Privacy"
  },
  {
    src: singles,
    alt: "Singles Ready to Stay Inside",
    mediaType: "image",
    description: "Singles Ready to Stay Inside"
  },
  {
    src: trendsetters,
    alt: "✈✈✈ Galactic Trendsetters ✈✈✈",
    mediaType: "video",
    description: "✈✈✈ Galactic Trendsetters ✈✈✈"
  },
  {
    src: unicodesnowman,
    alt: "☃",
    mediaType: "image",
    description: "☃"
  }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Beautiful sunsets" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MediaGallery, { media: MEDIA })
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
//# sourceMappingURL=D_iEtrWE.mjs.map
