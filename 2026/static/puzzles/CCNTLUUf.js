import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { M as MediaGallery } from "./CPm4UabO.js";
const left_out = "/2026/static/puzzles/assets/8b3eed3202093b9a.mp4";
const needle = "/2026/static/puzzles/assets/8e4a268d2b54602e.png";
const rage = "/2026/static/puzzles/assets/0644de637f8e2835.png";
const rtnp = "/2026/static/puzzles/assets/29a1fbb499b5b8ae.mp4";
const society_of_spirits = "/2026/static/puzzles/assets/feee1fbab7f76889.png";
const MEDIA = [
  {
    src: left_out,
    mediaType: "video",
    alt: "Left Out",
    description: "Left Out"
  },
  {
    src: needle,
    mediaType: "image",
    alt: "Space Needle in a Haystack",
    description: "Space Needle in a Haystack"
  },
  {
    src: rage,
    mediaType: "image",
    alt: "Ragers of the Lost Ark",
    description: "Ragers of the Lost Ark"
  },
  {
    src: rtnp,
    mediaType: "video",
    alt: "Respect The Nessie's Privacy",
    description: "Respect The Nessie's Privacy"
  },
  {
    src: society_of_spirits,
    mediaType: "image",
    alt: "Society of Spirits",
    description: "Society of Spirits"
  }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hydration is important" }),
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
//# sourceMappingURL=CCNTLUUf.js.map
