import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { M as MediaGallery } from "./CPm4UabO.js";
const latergator = "/2026/hunt/static/puzzles/assets/7deb63ccbfc10b75.mp4";
const shard = "/2026/hunt/static/puzzles/assets/892243210e788af8.mp4";
const unicode_snowman = "/2026/hunt/static/puzzles/assets/a2f1aa27b571b172.png";
const valve = "/2026/hunt/static/puzzles/assets/a470893890e979a4.png";
const MEDIA = [
  {
    src: latergator,
    mediaType: "video",
    alt: "The Team That Is Now Named Later (TTINNL): Twinkleish",
    description: "The Team That Is Now Named Later (TTINNL): Twinkleish"
  },
  {
    src: shard,
    mediaType: "video",
    alt: "17th Shard: Lanternbot",
    description: "17th Shard: Lanternbot"
  },
  {
    src: unicode_snowman,
    mediaType: "image",
    alt: "☃: Featherbrain",
    description: "☃: Featherbrain"
  },
  {
    src: valve,
    mediaType: "image",
    alt: "V.AL.V.E.: Circpurrus",
    description: "V.AL.V.E.: Circpurrus"
  }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Some of your shadowy creations:" }),
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
//# sourceMappingURL=BFdparLx.js.map
