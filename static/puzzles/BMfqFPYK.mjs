import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { M as MediaGallery } from "./CPm4UabO.mjs";
const cservices = "/static/puzzles/assets/b0c94236f7417acb.mp4";
const providence = "/static/puzzles/assets/4e77cfbd1e774d21.mp4";
const rage = "/static/puzzles/assets/50df67e6109db329.mp4";
const tsbi = "/static/puzzles/assets/00f8a70d28c6ab78.mp4";
const unseen = "/static/puzzles/assets/44a277970ca29f8b.mp4";
const VIDEOS = [
  {
    src: cservices,
    mediaType: "video",
    alt: "Central Services",
    description: "Central Services"
  },
  {
    src: providence,
    mediaType: "video",
    alt: "The Providence Bureau of Invest-Egg-Ations",
    description: "The Providence Bureau of Invest-Egg-Ations"
  },
  {
    src: rage,
    mediaType: "video",
    alt: "Ragers of the Lost Ark",
    description: "Ragers of the Lost Ark"
  },
  {
    src: tsbi,
    mediaType: "video",
    alt: "Test Solution Bees Ignore",
    description: "Test Solution Bees Ignore"
  },
  {
    src: unseen,
    mediaType: "video",
    alt: "Unseen",
    description: "Unseen"
  }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Coming Soon!" }),
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
//# sourceMappingURL=BMfqFPYK.mjs.map
