import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { M as MediaGallery } from "./CPm4UabO.mjs";
const palindrome = "/2026/static/puzzles/assets/a9dd4740fbd91b8f.png";
const pppp = "/2026/static/puzzles/assets/ff705e998f8b6c83.jpg";
const qDuckrypters = "/2026/static/puzzles/assets/f01b9112afdda7a0.jpg";
const singles = "/2026/static/puzzles/assets/ebe5de2d5b215571.mp4";
const tinkersHollow = "/2026/static/puzzles/assets/84c866d38f2bbbdc.jpg";
const unseen = "/2026/static/puzzles/assets/047309418594e53c.jpeg";
const MEDIA = [
  {
    src: palindrome,
    alt: "Palindrome: Eelemumelee",
    mediaType: "image",
    description: "Palindrome: Eelemumelee"
  },
  {
    src: pppp,
    alt: "PPPP: Puzzle Eggxiety",
    mediaType: "image",
    description: "PPPP: Puzzle Eggxiety"
  },
  {
    src: qDuckrypters,
    alt: "Quarantine Duckrypters: Souped Up: Qduck",
    mediaType: "image",
    description: "Quarantine Duckrypters: Souped Up: Qduck"
  },
  {
    src: singles,
    alt: "Singles Ready to Stay Inside: Brown-EEE",
    mediaType: "video",
    description: "Singles Ready to Stay Inside: Brown-EEE"
  },
  {
    src: tinkersHollow,
    alt: "Tinkers' Hollow: Treezzle",
    mediaType: "image",
    description: "Tinkers' Hollow: Treezzle"
  },
  {
    src: unseen,
    alt: "Unseen: Cappuccino (Cappy)",
    mediaType: "image",
    description: "Unseen: Cappuccino (Cappy)"
  }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Y'all came up with some impressive mascots" }),
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
//# sourceMappingURL=CSLBUgEf.mjs.map
