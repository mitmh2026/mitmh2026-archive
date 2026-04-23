import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { M as MediaGallery } from "./CPm4UabO.mjs";
const cservices = "/static/puzzles/assets/ad7a3ff303eef94e.mp4";
const death_and_mayhem = "/static/puzzles/assets/0063da83f019ca09.mp4";
const laf = "/static/puzzles/assets/74019ec37721c1f5.mp4";
const palindrome = "/static/puzzles/assets/31e5a283d4a7220b.mp4";
const simhunt = "/static/puzzles/assets/815689559336c9dc.mp4";
const unicodesnowman = "/static/puzzles/assets/a9d4f4f5838c556b.mp4";
const VIDEOS = [
  {
    src: cservices,
    mediaType: "video",
    alt: "Central Services (Grrrrrrravalax)",
    description: "Central Services (Grrrrrrravalax)"
  },
  {
    src: death_and_mayhem,
    mediaType: "video",
    alt: "Death and Mayhem (Steve)",
    description: "Death and Mayhem (Steve)"
  },
  {
    src: laf,
    mediaType: "video",
    alt: "Literally Animal Farm (Slizztaah)",
    description: "Literally Animal Farm (Slizztaah)"
  },
  {
    src: palindrome,
    mediaType: "video",
    alt: "Palindrome (Steve)",
    description: "Palindrome (Steve)"
  },
  {
    src: simhunt,
    mediaType: "video",
    alt: "Wafflehaüs (Splorkdine)",
    description: "Wafflehaüs (Splorkdine)"
  },
  {
    src: unicodesnowman,
    mediaType: "video",
    alt: "☃ (Dukdukgoop)",
    description: "☃ (Dukdukgoop)"
  }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "David Attenborough couldn't have done any better" }),
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
//# sourceMappingURL=Bo9r7YPO.mjs.map
