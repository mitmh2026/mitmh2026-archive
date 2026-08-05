import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { M as MediaGallery } from "./CPm4UabO.js";
const cservices = "/2026/hunt/static/puzzles/assets/0bcec322669f7dd8.png";
const providence = "/2026/hunt/static/puzzles/assets/344b4a716c35cb2f.png";
const rage = "/2026/hunt/static/puzzles/assets/e044d95602d0c848.png";
const setec = "/2026/hunt/static/puzzles/assets/a9c77008aa63c603.pdf";
const tetacetera = "/2026/hunt/static/puzzles/assets/67be589e438ed631.png";
const uplate = "/2026/hunt/static/puzzles/assets/096bdfb46f2ab38c.mp4";
const MEDIA = [
  {
    src: cservices,
    mediaType: "image",
    alt: "Central Services",
    description: "Central Services"
  },
  {
    src: providence,
    mediaType: "image",
    alt: "The Providence Bureau of Invest-Egg-Ations",
    description: "The Providence Bureau of Invest-Egg-Ations"
  },
  {
    src: rage,
    mediaType: "image",
    alt: "Ragers of the Lost Ark",
    description: "Ragers of the Lost Ark"
  },
  {
    src: setec,
    mediaType: "pdf",
    alt: "Setec Astronomy",
    description: "Setec Astronomy"
  },
  {
    src: tetacetera,
    mediaType: "image",
    alt: "Tetacetera",
    description: "Tetacetera"
  },
  { src: uplate, mediaType: "video", alt: "Up Late", description: "Up Late" }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Many of you braved the cold to touch grass. Others found clever alternate interpretations. Here are some of our favorites:" }),
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
//# sourceMappingURL=CUmGFLu0.js.map
