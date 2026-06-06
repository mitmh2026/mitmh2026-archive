import { R as React, r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { g as getLocalSolvedPuzzleMap, S as ShowAllPuzzmonInfoBox, F as FlavorText, p as postprocessMonarchAltText } from "./CPm4UabO.js";
import { M as MONSTER_DATA, a as MONSTER_ZONES } from "./C6EA9rzd.js";
const lightDown = "/2026/static/puzzles/assets/aaeeed2bef772aa0.png";
const lightUp = "/2026/static/puzzles/assets/87a7dbdf358207cb.png";
const theBrightsPuzzmon = MONSTER_DATA[MONSTER_ZONES.THE_BRIGHTS];
const BRIGHTS_ORDER = [
  "comettails",
  "lanternbot",
  "incandabra",
  "prismoidia",
  "mistermoon",
  "glimmerpom",
  "twinkleish",
  "knightbulb",
  "bumblebeam",
  "wattissimo"
];
const ALL_PUZZMON_INFO = [
  ...BRIGHTS_ORDER.map((slug) => {
    const data = theBrightsPuzzmon[slug];
    if (!data) {
      throw new Error(`Missing puzzmon data for slug ${slug}`);
    }
    return {
      slug,
      assetA: data.imageSrc,
      assetB: data.imageSrc2 ?? data.imageSrc,
      altText: data.altText
    };
  })
];
const getPuzzmonInfo = (showAllPuzzmon) => {
  if (showAllPuzzmon) {
    return ALL_PUZZMON_INFO;
  }
  const localSolvedPuzzleMap = getLocalSolvedPuzzleMap();
  return ALL_PUZZMON_INFO.map(
    (info) => Object.values(localSolvedPuzzleMap).find(
      ({ puzzmonSlug }) => puzzmonSlug === info.slug
    ) ? info : null
  );
};
const PUZZLE_GRID = [
  ["", "", "", "", "", "", "0", "", "", ""],
  ["", "1", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "2", "", ""],
  ["", "", "3", "", "", "", "", "", "", ""],
  ["", "", "", "", "4", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "5"],
  ["6", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "7", ""],
  ["", "", "", "8", "", "", "", "", "", ""],
  ["", "", "", "", "", "9", "", "", "", ""]
];
const getPuzzleGrid = (puzzmonInfo, isDark) => {
  return PUZZLE_GRID.map((row, _) => {
    return row.map((cell, _2) => {
      if (cell === "") {
        return "";
      }
      const puzzmon = puzzmonInfo[parseInt(cell)];
      if (!puzzmon) {
        return "?";
      }
      return (
        // TODO: Replace this with a onClick handler to open the monarch tab to avoid network fetch.
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `?showMonarch=true&puzzmonSlug=${puzzmon.slug}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: isDark ? puzzmon.assetB : puzzmon.assetA,
                alt: postprocessMonarchAltText(puzzmon.altText)
              }
            )
          },
          puzzmon.slug
        )
      );
    });
  });
};
const PUZZLE_COLORS = [
  [
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white",
    "bg-white"
  ],
  [
    "bg-white",
    "bg-black",
    "bg-black",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white"
  ],
  [
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white"
  ],
  [
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white"
  ],
  [
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white"
  ],
  [
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white",
    "bg-black"
  ],
  [
    "bg-black",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white"
  ],
  [
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-black",
    "bg-black"
  ],
  [
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-black"
  ],
  [
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white"
  ]
];
const LIGHTS_UP_EXAMPLE_GRID = [
  ["", "", "", "", "1", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "1", ""],
  ["", "3", "", "", "", ""],
  ["", "", "3", "", "", ""],
  ["", "", "", "", "", ""]
];
const LightBulb = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lightUp, alt: "lightbulb" });
};
const LIGHTS_UP_EXAMPLE_GRID_SOLVED = [
  [/* @__PURE__ */ jsxRuntimeExports.jsx(LightBulb, {}, "light1"), "", "", "", "1", ""],
  ["", "", "", "", /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulb, {}, "light2"), ""],
  ["", /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulb, {}, "light3"), "", "", "1", ""],
  ["", "3", /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulb, {}, "light4"), "", "", ""],
  ["", /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulb, {}, "light5"), "3", /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulb, {}, "light6"), "", ""],
  ["", "", "", "", "", /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulb, {}, "light7")]
];
const LIGHTS_UP_EXAMPLE_COLORS = [
  ["bg-white", "bg-black", "bg-white", "bg-white", "bg-black", "bg-white"],
  ["bg-white", "bg-white", "bg-white", "bg-white", "bg-white", "bg-white"],
  ["bg-white", "bg-white", "bg-white", "bg-white", "bg-black", "bg-white"],
  ["bg-white", "bg-black", "bg-white", "bg-white", "bg-white", "bg-white"],
  ["bg-white", "bg-white", "bg-black", "bg-white", "bg-white", "bg-white"],
  ["bg-black", "bg-white", "bg-black", "bg-white", "bg-white", "bg-white"]
];
const LIGHTS_UP_SOLVED_COLOR = "bg-yellow-300";
const LIGHTS_UP_EXAMPLE_SOLVED_COLORS = LIGHTS_UP_EXAMPLE_COLORS.map(
  (row) => row.map((cell) => cell === "bg-white" ? LIGHTS_UP_SOLVED_COLOR : cell)
);
const LIGHTS_DOWN_EXAMPLE_GRID = [
  ["", "", "", "", "0", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "2", ""],
  ["", "4", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["0", "", "", "", "", ""]
];
const LightBulbDown = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lightDown, alt: "lightbulb" });
};
const LIGHTS_DOWN_EXAMPLE_GRID_SOLVED = [
  ["", "", "", "", "0", ""],
  [
    "",
    /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulbDown, {}, "light1"),
    "",
    /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulbDown, {}, "light2"),
    "",
    /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulbDown, {}, "light3")
  ],
  ["", "", "", "", "2", ""],
  [
    "",
    "4",
    /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulbDown, {}, "light4"),
    "",
    /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulbDown, {}, "light5"),
    ""
  ],
  ["", /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulbDown, {}, "light6"), "", "", "", ""],
  ["0", "", "", "", /* @__PURE__ */ jsxRuntimeExports.jsx(LightBulbDown, {}, "light7"), ""]
];
const LIGHTS_DOWN_EXAMPLE_COLORS = [
  ["bg-white", "bg-black", "bg-white", "bg-white", "bg-black", "bg-white"],
  ["bg-white", "bg-white", "bg-white", "bg-white", "bg-white", "bg-white"],
  ["bg-white", "bg-white", "bg-white", "bg-white", "bg-black", "bg-white"],
  ["bg-white", "bg-black", "bg-white", "bg-white", "bg-white", "bg-white"],
  ["bg-white", "bg-white", "bg-black", "bg-white", "bg-white", "bg-white"],
  ["bg-black", "bg-white", "bg-black", "bg-white", "bg-white", "bg-white"]
];
const LIGHTS_DOWN_SOLVED_COLOR = "bg-purple-500";
const LIGHTS_DOWN_EXAMPLE_SOLVED_COLORS = LIGHTS_DOWN_EXAMPLE_COLORS.map(
  (row) => row.map((cell) => cell === "bg-white" ? LIGHTS_DOWN_SOLVED_COLOR : cell)
);
const AkariGrid = ({ grid, colors }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "akari-grid border-collapse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: grid.map((row, rowIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: row.map((cell, colIdx) => {
    const isTop = rowIdx === 0;
    const isBottom = rowIdx === grid.length - 1;
    const isLeft = colIdx === 0;
    const isRight = colIdx === row.length - 1;
    let borderClass = "border border-black";
    if (isTop) borderClass += " border-t-4";
    if (isBottom) borderClass += " border-b-4";
    if (isLeft) borderClass += " border-l-4";
    if (isRight) borderClass += " border-r-4";
    let cellClass = colors[rowIdx][colIdx];
    if (cellClass === "bg-black") {
      cellClass += " text-white";
    }
    const cellText = cell;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "td",
      {
        className: `${cellClass} w-10 h-10 text-center align-middle ${borderClass}`,
        children: cellText
      },
      colIdx
    );
  }) }, rowIdx)) }) });
};
const getIsDark = () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const RenderAkariGrid = ({
  isDark,
  light,
  dark,
  lightColors,
  darkColors
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AkariGrid,
    {
      grid: isDark ? dark : light,
      colors: isDark ? darkColors : lightColors
    }
  );
};
const PuzzleComponent = () => {
  const [isDark, setIsDark] = React.useState(getIsDark());
  const [showAllPuzzmon, setShowAllPuzzmon] = reactExports.useState(false);
  const puzzmonInfo = getPuzzmonInfo(showAllPuzzmon);
  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setIsDark(e.matches);
    };
    mql.addEventListener("change", handleChange);
    setIsDark(mql.matches);
    return () => {
      mql.removeEventListener("change", handleChange);
    };
  }, []);
  const puzzleGrid = getPuzzleGrid(puzzmonInfo, isDark);
  const flavorText = isDark ? "It's too dark." : "It's too light.";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    (showAllPuzzmon || puzzmonInfo.some((puzzmon) => puzzmon === null)) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShowAllPuzzmonInfoBox,
      {
        showAllPuzzmon,
        onToggle: () => {
          setShowAllPuzzmon(!showAllPuzzmon);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FlavorText, { children: flavorText }),
    isDark ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex flex-col items-start gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold pl-2", children: "⬇️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AkariGrid, { grid: puzzleGrid, colors: PUZZLE_COLORS })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex flex-row items-start gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold pt-2", children: "➡️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AkariGrid, { grid: puzzleGrid, colors: PUZZLE_COLORS })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-10 mb-4 text-center text-2xl font-bold", children: "Example:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        RenderAkariGrid,
        {
          isDark,
          light: LIGHTS_UP_EXAMPLE_GRID,
          dark: LIGHTS_DOWN_EXAMPLE_GRID,
          lightColors: LIGHTS_UP_EXAMPLE_COLORS,
          darkColors: LIGHTS_DOWN_EXAMPLE_COLORS
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        RenderAkariGrid,
        {
          isDark,
          light: LIGHTS_UP_EXAMPLE_GRID_SOLVED,
          dark: LIGHTS_DOWN_EXAMPLE_GRID_SOLVED,
          lightColors: LIGHTS_UP_EXAMPLE_SOLVED_COLORS,
          darkColors: LIGHTS_DOWN_EXAMPLE_SOLVED_COLORS
        }
      ) })
    ] })
  ] });
};
const elem = document.getElementById("puzzle-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(PuzzleComponent, {}));
} else {
  console.error(
    "Could not mount App because #puzzle-root was nowhere to be found"
  );
}
//# sourceMappingURL=irhdGJiW.js.map
