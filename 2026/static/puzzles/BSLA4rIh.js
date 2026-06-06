import { j as jsxRuntimeExports, R as React, c as clientExports } from "./Cqdl_uWg.js";
import { N as NO_COPY_CLASS, C as COPY_ONLY_CLASS } from "./8izHJ_gg.js";
import { u as useColorAssist, H as HorizontalDivider } from "./CPm4UabO.js";
import { c as cn } from "./8lrfSi8Z.js";
const COLOR_TO_SHAPE = {
  black: "●",
  // circle
  pink: "▲",
  // triangle
  yellow: "■",
  // square
  lightblue: "◆",
  // diamond
  red: "▬"
  // rectangle
};
const COLOR_TO_NAME = {
  black: "black",
  pink: "pink",
  yellow: "yellow",
  lightblue: "light blue",
  red: "red"
};
const COLOR_TO_HEX_CODE = {
  black: "#000000",
  pink: "#FFC0CB",
  yellow: "#FFFF00",
  lightblue: "#ADD8E6",
  red: "#FF0000"
};
const COLOR_LIST = ["black", "pink", "yellow", "lightblue", "red"];
function Section({ fragments, showShapes }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `my-5 ${NO_COPY_CLASS}`, children: fragments.map((fragment, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      idx > 0 && " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          style: {
            backgroundColor: fragment.color,
            color: fragment.color === "black" ? "white" : "black"
          },
          children: showShapes ? fragment.text.split(" ").map((i) => i + COLOR_TO_SHAPE[fragment.color]).join(" ") : fragment.text
        }
      )
    ] }, idx)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: COPY_ONLY_CLASS, children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: fragments.map(
      (fragment, fIdx) => fragment.text.split(" ").map((part, pIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "td",
        {
          style: {
            backgroundColor: fragment.color,
            color: fragment.color === "black" ? "white" : "black"
          },
          children: showShapes ? part + COLOR_TO_SHAPE[fragment.color] : part
        },
        `${fIdx}-${pIdx}`
      ))
    ) }) }) })
  ] });
}
function PuzzleComponent({ data }) {
  const [colorAssistEnabled, setColorAssistEnabled] = useColorAssist();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex items-center space-x-2 mb-4", NO_COPY_CLASS), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "checkbox",
          checked: colorAssistEnabled,
          onChange: () => {
            setColorAssistEnabled(!colorAssistEnabled);
          },
          className: "h-4 w-4 rounded border-gray-300",
          "aria-label": "Enable color assist mode to show color legend with shapes"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Show color legend" })
    ] }) }),
    colorAssistEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col gap-2", NO_COPY_CLASS), children: COLOR_LIST.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-4 h-4 rounded",
            style: { backgroundColor: color },
            role: "img",
            "aria-label": `${COLOR_TO_NAME[color]} color sample`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: COLOR_TO_SHAPE[color] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
          COLOR_TO_NAME[color],
          " (",
          COLOR_TO_HEX_CODE[color],
          ")"
        ] })
      ] }, color)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: COPY_ONLY_CLASS, children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: COLOR_LIST.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "td",
          {
            style: { backgroundColor: color },
            "aria-label": `${COLOR_TO_NAME[color]} color sample`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "font-mono", children: COLOR_TO_SHAPE[color] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "font-mono", children: [
          COLOR_TO_NAME[color],
          " (",
          COLOR_TO_HEX_CODE[color],
          ")"
        ] })
      ] }, color)) }) })
    ] }),
    data.slice(0, -1).map((frags, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { fragments: frags, showShapes: colorAssistEnabled }) }, idx)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HorizontalDivider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        fragments: data[data.length - 1],
        showShapes: colorAssistEnabled
      }
    )
  ] });
}
const elem = document.getElementById("puzzle-root");
if (elem) {
  const puzzleData = window.data;
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(PuzzleComponent, { data: puzzleData }));
} else {
  console.error(
    "Could not mount PuzzleComponent because #puzzle-root was nowhere to be found"
  );
}
//# sourceMappingURL=BSLA4rIh.js.map
