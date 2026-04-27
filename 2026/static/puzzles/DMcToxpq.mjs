import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { N as NO_COPY_CLASS, C as COPY_ONLY_CLASS } from "./8izHJ_gg.mjs";
import { u as useColorAssist } from "./CPm4UabO.mjs";
const TABLE_CELL_CLASS_PREFIX = "text-center px-4 ";
const BLUE = "text-[#003DA5]";
const GREEN = "text-[#00843D]";
const ORANGE = "text-[#ED8B00]";
const RED = "text-[#DA291C]";
const toClassNamePrefix = (showColorName) => showColorName ? "" : "hidden ";
const NodeLines = () => {
  const [showColorName, setShowColorName] = useColorAssist();
  const DATA = [
    {
      text: ["1_5", "(5 ⬤)", "5_4", "(1 ⬤)", "9_2", "(2 ⬤)", "7_1"],
      tailwindHex: BLUE,
      colorName: "Blue"
    },
    {
      text: [
        "1_9",
        "(1 ⬤)",
        "2_15",
        "(5 ⬤)",
        "6_2",
        "(7 ⬤)",
        "3_8",
        "(3 ⬤)",
        "6_8",
        "(3 ⬤)",
        "5_3"
      ],
      tailwindHex: GREEN,
      colorName: "Green"
    },
    void 0,
    {
      text: [
        "2_4",
        "(6 ⬤)",
        "3_8",
        "(1 ⬤)",
        "7_2",
        "(2 ⬤)",
        "5_1",
        "(3 ⬤)",
        "5_1"
      ],
      tailwindHex: RED,
      colorName: "Red"
    },
    {
      text: [
        "5_2",
        "(4 ⬤)",
        "1_14",
        "(3 ⬤)",
        "9_6",
        "(2 ⬤)",
        "2_4",
        "(2 ⬤)",
        "1_13",
        "(3 ⬤)",
        "7_3"
      ],
      tailwindHex: ORANGE,
      colorName: "Orange"
    },
    {
      text: [
        "3_7",
        "(3 ⬤)",
        "_10",
        "(2 ⬤)",
        "7_8",
        "(6 ⬤)",
        "7_2",
        "(4 ⬤)",
        "1_6",
        "(4 ⬤)",
        "10_"
      ],
      tailwindHex: GREEN,
      colorName: "Green"
    },
    void 0,
    {
      text: [
        "3_3",
        "(2 ⬤)",
        "6_",
        "(1 ⬤)",
        "8_1",
        "(1 ⬤)",
        "6_2",
        "8_7",
        "8_",
        "(7 ⬤)",
        "3_4"
      ],
      tailwindHex: RED,
      colorName: "Red"
    },
    void 0,
    {
      text: ["5_2", "(2 ⬤)", "_12", "4_1", "(2 ⬤)", "2_4"],
      tailwindHex: RED,
      colorName: "Red"
    },
    {
      text: [
        "6_8",
        "(1 ⬤)",
        "5_2",
        "(2 ⬤)",
        "7_7",
        "(5 ⬤)",
        "2_8",
        "(7 ⬤)",
        "3_11"
      ],
      tailwindHex: GREEN,
      colorName: "Green"
    },
    {
      text: [
        "5_10",
        "(6 ⬤)",
        "2_12",
        "(5 ⬤)",
        "2_10",
        "(4 ⬤)",
        "4_9",
        "(3 ⬤)",
        "10_2"
      ],
      tailwindHex: GREEN,
      colorName: "Green"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "table-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CELL_CLASS_PREFIX }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CELL_CLASS_PREFIX, children: "↓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CELL_CLASS_PREFIX }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: TABLE_CELL_CLASS_PREFIX, children: "↓" })
      ] }),
      DATA.map((values, idx) => {
        if (values === void 0) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, children: " " }) }, idx);
        } else {
          const { text, tailwindHex, colorName } = values;
          const classNames = TABLE_CELL_CLASS_PREFIX + tailwindHex;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: TABLE_CELL_CLASS_PREFIX, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: toClassNamePrefix(showColorName) + NO_COPY_CLASS,
                  children: [
                    colorName,
                    ":"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: COPY_ONLY_CLASS, children: colorName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: classNames, children: text[0] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: classNames, children: text.slice(1, text.length - 1).join("     ") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: classNames, children: text[text.length - 1] })
          ] }, idx);
        }
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-start " + NO_COPY_CLASS, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "checkbox",
          checked: showColorName,
          onChange: () => {
            setShowColorName(!showColorName);
          },
          className: "h-4 w-4 rounded border-gray-300",
          "aria-label": "Show color names alongside colored text"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Show color names" })
    ] }) })
  ] });
};
const elem = document.getElementById("puzzle-content-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(NodeLines, {}));
} else {
  console.error(
    "Could not mount App because #puzzle-content-root was nowhere to be found"
  );
}
//# sourceMappingURL=DMcToxpq.mjs.map
