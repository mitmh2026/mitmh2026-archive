import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { I as ImageGallery } from "./CPm4UabO.js";
const cservices = "/2026/static/puzzles/assets/31c1a446010c1eac.jpg";
const donnerhunt = "/2026/static/puzzles/assets/9f6f9367202bbea6.jpg";
const qduckrypters = "/2026/static/puzzles/assets/8dff0e608fce830f.jpg";
const showerpomelo = "/2026/static/puzzles/assets/3f3b19191898f747.jpg";
const IMAGES = [
  {
    src: cservices,
    alt: "Central Services: Grrrrrrravalax",
    description: "Central Services: Grrrrrrravalax"
  },
  {
    src: donnerhunt,
    alt: "Donner Party of N: Kawai-i",
    description: "Donner Party of N: Kawai-i"
  },
  {
    src: qduckrypters,
    alt: "Quarantine Duckrypters: Souped Up: Featherbrain",
    description: "Quarantine Duckrypters: Souped Up: Featherbrain"
  },
  {
    src: showerpomelo,
    alt: "Shower Pomelo: Steve",
    description: "Shower Pomelo: Steve"
  }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A sample of origami submissions:" }),
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
//# sourceMappingURL=Bzn4tlti.js.map
