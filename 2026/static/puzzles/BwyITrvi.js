import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { I as ImageGallery } from "./CPm4UabO.js";
const buildersGuild = "/2026/static/puzzles/assets/b7b3b690ffedd208.png";
const donnerHunt = "/2026/static/puzzles/assets/c98201f9dd465321.png";
const highFive = "/2026/static/puzzles/assets/cd75cdaa4142e4df.jpeg";
const stumped = "/2026/static/puzzles/assets/f033bafd81ec8f37.png";
const theGr88ones = "/2026/static/puzzles/assets/97f59a984963f1e3.jpg";
const IMAGES = [
  {
    src: buildersGuild,
    alt: "The Builders' Guild: π",
    description: "The Builders' Guild: π"
  },
  {
    src: donnerHunt,
    alt: "Donner Party of N: L",
    description: "Donner Party of N: L"
  },
  { src: highFive, alt: "HighFive: B", description: "HighFive: B" },
  {
    src: stumped,
    alt: "Stumped and Furious: F",
    description: "Stumped and Furious: F"
  },
  {
    src: theGr88ones,
    alt: "The Gr88 Ones: X",
    description: "The Gr88 Ones: X"
  }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Some of the more interesting letters:" }),
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
//# sourceMappingURL=BwyITrvi.js.map
