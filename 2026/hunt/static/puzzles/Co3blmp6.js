import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { I as ImageGallery } from "./CPm4UabO.js";
const amateurHour = "/2026/hunt/static/puzzles/assets/ecf0d626ae578d4e.png";
const llamas = "/2026/hunt/static/puzzles/assets/872e15870c2fa69e.png";
const ophiuchus = "/2026/hunt/static/puzzles/assets/0c1b4813cf21aa8b.png";
const plant = "/2026/hunt/static/puzzles/assets/001e1254cf2f8e19.png";
const turtles = "/2026/hunt/static/puzzles/assets/750b7665a34e4b78.png";
const IMAGES = [
  {
    src: amateurHour,
    alt: "Amateur Hour: Troutorque",
    description: "Amateur Hour: Troutorque"
  },
  {
    src: llamas,
    alt: "Small Llama Malls: Meldekk ",
    description: "Small Llama Malls: Meldekk "
  },
  {
    src: ophiuchus,
    alt: "⛎ UNICODE EQUIVALENCE: Featherbrain",
    description: "⛎ UNICODE EQUIVALENCE: Featherbrain"
  },
  {
    src: plant,
    alt: "Metaphysical Plant: Hookey Hifive",
    description: "Metaphysical Plant: Hookey Hifive"
  },
  {
    src: turtles,
    alt: "Turtles All the Way Down: The Child",
    description: "Turtles All the Way Down: The Child"
  }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Very impressive routes:" }),
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
//# sourceMappingURL=Co3blmp6.js.map
