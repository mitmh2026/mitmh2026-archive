import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { C as COPY_ONLY_CLASS, N as NO_COPY_CLASS } from "./8izHJ_gg.mjs";
import { S as SquareGrid } from "./8lrfSi8Z.mjs";
const C_LAYER = `
				🥧				🥧										
																		
🇪🇸	P	☕	H	☕				🥧	U	🏖️								
		N																
		🏖️								☸️			I					🏖️
		R																
		🏖️		V		🏖️		🇪🇸	L	🥧								
		E		A														
		🇧🇩		🇪🇸		R		💎	T		💎	J		🇪🇸				
																		
								☕		☸️						🏖️		
								W		S								
				K				🇪🇸	K		🇪🇸	D		🇪🇸				
																		
		🇧🇩	I	☕		🏖️				🏖️	O			B				
				G														
🇪🇸		F		💎		S					🥧			🥧	T	🏖️		
											Y							
											🏖️							🏖️`.substring(1);
const M_LAYER = `
				🥧		M		🥧										
				A														
🇪🇸	S	☕		☕				🥧		🏖️								
				C						I								
		🏖️							T	☸️								🏖️
																		
		🏖️				🏖️		🇪🇸		🥧								C
								O		N								
		🇧🇩	T	🇪🇸				💎			💎		I	🇪🇸				
		S						B										
								☕		☸️			E			🏖️		
																		
								🇪🇸			🇪🇸			🇪🇸				
											R							
		🇧🇩		☕		🏖️		Q		🏖️								
																		
🇪🇸				💎					U		🥧			🥧		🏖️		K
																		
											🏖️							🏖️`.substring(1);
const P_LAYER = `
				🥧				🥧										
								U										
🇪🇸		☕		☕				🥧		🏖️								
																		
		🏖️	R	N						☸️			S					🏖️
																		
		🏖️				🏖️		🇪🇸		🥧								
																		
		🇧🇩		🇪🇸	O			💎		T	💎			🇪🇸				
								H										
		W						☕		☸️	E					🏖️		
																		
		O				E		🇪🇸			🇪🇸			🇪🇸				
																		
B		🇧🇩		☕		🏖️				🏖️								Z
											C			E				
🇪🇸			A	💎				R			🥧			🥧		🏖️		
																		
											🏖️		M		G			🏖️`.substring(1);
const toSquareGridCells = (s) => s.split("\n").map(
  (r) => r.split("	").map((c) => ({
    content: c,
    type: "transparent",
    tailwindClasses: "font-mono" + (/^[A-Z]?$/.test(c) ? "" : " border border-solid border-black rounded-full")
  }))
);
const LAYER_NAMES = ["C Layer", "M Layer", "P Layer"];
const CMP = () => {
  const [layer, setLayer] = reactExports.useState(LAYER_NAMES[0]);
  const handleChange = (e) => {
    setLayer(e.target.value);
  };
  const RadioButton = (label, key) => {
    const id = label.replaceAll(" ", "");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "radio",
        name: "layers",
        id,
        value: label,
        checked: layer === label,
        onChange: handleChange
      },
      key
    );
  };
  const radioButtons = LAYER_NAMES.map((name, idx) => RadioButton(name, idx));
  const toDisplayClassName = (layerName) => layerName === layer ? "" : "hidden";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: COPY_ONLY_CLASS, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "C Layer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SquareGrid, { cells: toSquareGridCells(C_LAYER) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "M Layer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SquareGrid, { cells: toSquareGridCells(M_LAYER) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "P Layer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SquareGrid, { cells: toSquareGridCells(P_LAYER) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: NO_COPY_CLASS, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center my-4", children: LAYER_NAMES.map((layerName, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "align-middle", children: [
        radioButtons[idx],
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: layerName.replaceAll(" ", ""), className: "p-1", children: layerName })
      ] }, idx)).reduce(
        (acc, currentValue, currentIndex) => [
          ...acc,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-5" }, currentIndex + 3),
          currentValue
        ],
        Array()
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: toDisplayClassName(LAYER_NAMES[0]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SquareGrid,
        {
          cells: toSquareGridCells(C_LAYER),
          tableClasses: "border-separate"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: toDisplayClassName(LAYER_NAMES[1]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SquareGrid,
        {
          cells: toSquareGridCells(M_LAYER),
          tableClasses: "border-separate"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: toDisplayClassName(LAYER_NAMES[2]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SquareGrid,
        {
          cells: toSquareGridCells(P_LAYER),
          tableClasses: "border-separate"
        }
      ) })
    ] })
  ] });
};
const elem = document.getElementById("cmp-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(CMP, {}));
} else {
  console.error(
    "Could not mount App because #cmp-root was nowhere to be found"
  );
}
//# sourceMappingURL=Dd9wxEze.mjs.map
