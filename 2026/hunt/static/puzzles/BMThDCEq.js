import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { S as ShowAllPuzzmonInfoBox, g as getLocalSolvedPuzzleMap } from "./CPm4UabO.js";
import { C as ConditionalTooltip } from "./CyHnzWK1.js";
import { t } from "./DGHxrElc.js";
import { M as MONSTER_DATA, a as MONSTER_ZONES } from "./C6EA9rzd.js";
const ElandIslandsMap = "/2026/hunt/static/puzzles/assets/2560edefbde41b16.png";
const elandIslandsPuzzmon$1 = t(
  MONSTER_DATA[MONSTER_ZONES.ELAND_ISLANDS]
);
const PUZZMON_IMAGES = t({
  bambidextrous: elandIslandsPuzzmon$1.bambidextrous.imageSrc,
  carriebou: elandIslandsPuzzmon$1.carriebou.imageSrc,
  ceryna: elandIslandsPuzzmon$1.ceryna.imageSrc,
  pointdexter: elandIslandsPuzzmon$1.pointdexter.imageSrc,
  ernstag: elandIslandsPuzzmon$1.ernstag.imageSrc,
  wapeaty: elandIslandsPuzzmon$1.wapeaty.imageSrc,
  jambrocket: elandIslandsPuzzmon$1.jambrocket.imageSrc,
  moontjack: elandIslandsPuzzmon$1.moontjack.imageSrc,
  doeball: elandIslandsPuzzmon$1.doeball.imageSrc,
  sakusika: elandIslandsPuzzmon$1.sakusika.imageSrc,
  randolph: elandIslandsPuzzmon$1.randolph.imageSrc,
  elklizabeth: elandIslandsPuzzmon$1.elklizabeth.imageSrc
});
const PUZZMON_POSITIONS = t({
  ernstag: { top: 5, left: 20 },
  randolph: { top: 13, left: 40 },
  pointdexter: { top: 20, left: 64 },
  ceryna: { top: 29, left: 31 },
  bambidextrous: { top: 35, left: 48 },
  moontjack: { top: 44, left: 10 },
  sakusika: { top: 54, left: 62 },
  elklizabeth: { top: 58, left: 27 },
  carriebou: { top: 66, left: 75 },
  wapeaty: { top: 85, left: 35 },
  jambrocket: { top: 81, left: 59 },
  doeball: { top: 80, left: 92 }
});
const MONARCH_QUERY_KEYS = {
  IS_OPEN: "showMonarch",
  ZONE: "zone",
  PUZZMON_SLUG: "puzzmonSlug"
};
const ELAND_ISLANDS_ZONE = "eland_islands";
const elandIslandsPuzzmon = MONSTER_DATA[MONSTER_ZONES.ELAND_ISLANDS];
const updateQueryParam = (key, value, shouldReplace = false) => {
  if (typeof window === "undefined") {
    return;
  }
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set(key, value);
  if (shouldReplace) {
    window.history.replaceState({}, "", currentUrl.toString());
  } else {
    window.history.pushState({}, "", currentUrl.toString());
  }
};
const openMonarchForPuzzmon = (slug) => {
  updateQueryParam(MONARCH_QUERY_KEYS.IS_OPEN, "true");
  updateQueryParam(MONARCH_QUERY_KEYS.ZONE, ELAND_ISLANDS_ZONE, true);
  updateQueryParam(MONARCH_QUERY_KEYS.PUZZMON_SLUG, slug, true);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("monarch-open"));
  }
};
const getSolvedPuzzmon = () => {
  const localSolvedPuzzleMap = getLocalSolvedPuzzleMap();
  return Object.values(localSolvedPuzzleMap).filter(
    (entry) => Boolean(
      entry.puzzmonSlug && entry.puzzmonSlug in elandIslandsPuzzmon && entry.puzzmonSlug in PUZZMON_POSITIONS
    )
  ).map(({ puzzmonSlug }) => puzzmonSlug);
};
const getAllPuzzmonSlugs = () => Object.keys(PUZZMON_POSITIONS);
const DeerAirlinesMap = () => {
  const [showAllPuzzmon, setShowAllPuzzmon] = reactExports.useState(false);
  const puzzmonSlugsToShow = showAllPuzzmon ? getAllPuzzmonSlugs() : getSolvedPuzzmon();
  const puzzmonImages = puzzmonSlugsToShow.map((puzzmonSlug) => ({
    slug: puzzmonSlug,
    name: puzzmonSlug.charAt(0).toUpperCase() + puzzmonSlug.slice(1),
    image: PUZZMON_IMAGES[puzzmonSlug],
    top: PUZZMON_POSITIONS[puzzmonSlug].top,
    left: PUZZMON_POSITIONS[puzzmonSlug].left
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    (showAllPuzzmon || puzzmonSlugsToShow.length !== getAllPuzzmonSlugs().length) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShowAllPuzzmonInfoBox,
      {
        showAllPuzzmon,
        onToggle: () => {
          setShowAllPuzzmon(!showAllPuzzmon);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: ElandIslandsMap,
          alt: "Map of the Eland Islands",
          className: "h-auto w-full rounded-lg border border-gray-200"
        }
      ),
      puzzmonImages.map(({ slug, name, image, top, left }) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ConditionalTooltip, { tooltip: name, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              openMonarchForPuzzmon(slug);
            },
            "aria-label": `Show ${slug} in the MonArch window`,
            style: {
              position: "absolute",
              width: "16%",
              maxWidth: "120px",
              top: `${top}%`,
              left: `${left}%`,
              transform: "translate(-50%, -50%)",
              display: "block"
            },
            className: "group block bg-transparent p-0 border-0 cursor-pointer focus-visible:outline-none",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: image,
                alt: slug,
                className: "select-none transition-transform duration-150 ease-out group-hover:scale-110 group-focus-visible:scale-110 transform-gpu drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]",
                style: {
                  width: "100%",
                  height: "auto"
                },
                draggable: false
              }
            )
          }
        ) }, slug);
      })
    ] })
  ] });
};
const elem = document.getElementById("deer-airlines-map-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(DeerAirlinesMap, {}));
} else {
  console.error(
    "Could not mount App because #deer-airlines-map-root was nowhere to be found"
  );
}
//# sourceMappingURL=BMThDCEq.js.map
