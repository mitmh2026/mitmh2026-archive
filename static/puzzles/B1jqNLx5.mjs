import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { M as MediaGallery } from "./CPm4UabO.mjs";
const copy_of_copy_of = "/static/puzzles/assets/41ec2a7f29c3de5e.mp4";
const left_out = "/static/puzzles/assets/b01f0419ee96b97e.mp4";
const spore_giant = "/static/puzzles/assets/77753fb5727d283d.mp4";
const ttinnl = "/static/puzzles/assets/a1179236d199f5f2.mp4";
const MEDIA = [
  {
    src: ttinnl,
    mediaType: "video",
    alt: "The Team That Is Now Named Later (TTINNL)",
    description: "The Team That Is Now Named Later (TTINNL)"
  },
  {
    src: left_out,
    mediaType: "video",
    alt: "Left Out",
    description: "Left Out"
  },
  {
    src: copy_of_copy_of,
    mediaType: "video",
    alt: "Copy of Copy of",
    description: "Copy of Copy of Sheet1"
  },
  {
    src: spore_giant,
    mediaType: "video",
    alt: "Spore Giant",
    description: "Spore Giant"
  }
];
const Solution = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "solution-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Below are some examples of rollercoasters that were submitted." }),
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
//# sourceMappingURL=B1jqNLx5.mjs.map
