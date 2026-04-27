import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { I as ImageGallery } from "./CPm4UabO.mjs";
const codex2026 = "/2026/static/puzzles/assets/c391a8fd11a46472.jpeg";
const cservices = "/2026/static/puzzles/assets/6a7a06144a72b548.png";
const latergator = "/2026/static/puzzles/assets/4f7fe73d395ec910.jpeg";
const leftout = "/2026/static/puzzles/assets/06f71b8442a12445.jpg";
const miao = "/2026/static/puzzles/assets/bf4683268c7d1d62.jpg";
const simhunt = "/2026/static/puzzles/assets/7fbbcea0853bd19f.jpeg";
const IMAGES = [
  {
    src: codex2026,
    alt: "Codex Quauhquechollan",
    description: "Codex Quauhquechollan"
  },
  {
    src: cservices,
    alt: "Customer Services",
    description: "Customer Services"
  },
  {
    src: latergator,
    alt: "The Team That Is Now Named Later (TTINNL)",
    description: "The Team That Is Now Named Later (TTINNL)"
  },
  { src: leftout, alt: "Left Out", description: "Left Out" },
  { src: miao, alt: "喵喵喵", description: "喵喵喵" },
  { src: simhunt, alt: "Wafflehaüs", description: "Wafflehaüs" }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You'll be glad to know that Stata was returned." }),
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
//# sourceMappingURL=BX8GEeSH.mjs.map
