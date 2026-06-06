import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { N as NO_COPY_CLASS } from "./8izHJ_gg.js";
import { u as useColorAssist, P as PuzzleWithCutscene } from "./CPm4UabO.js";
const DATA = [
  { numbers: "9 ? 1", className: "text-[#6fa8dc]", colorName: "blue" },
  { numbers: "3 ? 6", className: "text-[#ffd966]", colorName: "yellow" },
  { numbers: "2 ? 3", className: "text-[#93c47d]", colorName: "green" },
  { numbers: "3 ? 6", className: "text-[#e06666]", colorName: "red" }
];
const toClassName = (showColorName) => showColorName ? "" : "hidden";
const ColoredNumbers = () => {
  const [showColorName, setShowColorName] = useColorAssist();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PuzzleWithCutscene, { id: "kc03" }),
    DATA.map((row, index) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: row.className, children: row.numbers }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: toClassName(showColorName), children: [
          "(",
          row.colorName,
          ")"
        ] })
      ] }, index);
    }),
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
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(ColoredNumbers, {}));
} else {
  console.error(
    "Could not mount App because #puzzle-content-root was nowhere to be found"
  );
}
//# sourceMappingURL=cQGMj2Mk.js.map
