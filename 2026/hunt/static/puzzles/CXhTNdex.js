import { j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { N as NO_COPY_CLASS } from "./8izHJ_gg.js";
import { u as useColorAssist, H as HorizontalDivider } from "./CPm4UabO.js";
import { c as cn } from "./8lrfSi8Z.js";
const getShapeForColor = (className) => {
  if (!className) return "";
  if (className.includes("#fdb402")) {
    return "●";
  }
  if (className.includes("#fe8b0d")) {
    return "▲";
  }
  if (className.includes("#ed6a31")) {
    return "■";
  }
  if (className.includes("#91de98")) {
    return "●";
  }
  if (className.includes("#61ae63")) {
    return "▲";
  }
  if (className.includes("#447a3b")) {
    return "■";
  }
  if (className.includes("#2c462a")) {
    return "◆";
  }
  if (className.includes("#fbd27f")) {
    return "●";
  }
  if (className.includes("#fa7936")) {
    return "▲";
  }
  if (className.includes("#bd3700")) {
    return "■";
  }
  if (className.includes("#e0dfdf")) {
    return "●";
  }
  if (className.includes("#bcbdc1")) {
    return "▲";
  }
  if (className.includes("#ffa72b")) {
    return "■";
  }
  if (className.includes("#7c2e21")) {
    return "◆";
  }
  if (className.includes("#fed40a")) {
    return "●";
  }
  if (className.includes("#fe8d03")) {
    return "▲";
  }
  if (className.includes("#8c5840")) {
    return "■";
  }
  if (className.includes("bg-black")) {
    return "★";
  }
  return "";
};
const NonogramCell = ({
  content,
  className,
  showShape = false
}) => {
  const shape = showShape ? getShapeForColor(className) : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "td",
    {
      className: cn(
        "text-center font-mono font-bold text-sm min-w-8 min-h-8 w-8 h-8 p-1 bg-white",
        shape && "text-xs p-0.5",
        className
      ),
      children: [
        content,
        shape && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-[3px] text-sm", children: shape })
      ]
    }
  );
};
const Nonogram = ({
  top,
  left,
  body,
  copyToClipboardLeftMargin,
  colorblindFriendly = false
}) => {
  var _a;
  const topClueDepth = (top == null ? void 0 : top.reduce((max, clue) => Math.max(max, clue.length), 0)) ?? 0;
  const leftClueDepth = (left == null ? void 0 : left.reduce((max, clue) => Math.max(max, clue.length), 0)) ?? 0;
  const leftMargin = copyToClipboardLeftMargin ?? 0;
  const extractHex = (className) => {
    const regex = /#[0-9a-fA-F]{6}/;
    const match = regex.exec(className);
    return match ? match[0] : "";
  };
  const getUniqueColors = () => {
    const colorSet = /* @__PURE__ */ new Set();
    const allClues = [...top ?? [], ...left ?? []];
    allClues.forEach((clueArray) => {
      clueArray.forEach((cell) => {
        if (cell.className) {
          colorSet.add(cell.className);
        }
      });
    });
    return Array.from(colorSet).map((className) => ({
      className,
      shape: getShapeForColor(className),
      hex: extractHex(className) || (className.includes("bg-black") ? "#000000" : "")
    })).filter((item) => item.shape !== "" && item.hex !== "").sort((a, b) => {
      const hexA = a.hex.replace("#", "");
      const hexB = b.hex.replace("#", "");
      const rA = parseInt(hexA.substring(0, 2), 16);
      const gA = parseInt(hexA.substring(2, 4), 16);
      const bA = parseInt(hexA.substring(4, 6), 16);
      const rB = parseInt(hexB.substring(0, 2), 16);
      const gB = parseInt(hexB.substring(2, 4), 16);
      const bB = parseInt(hexB.substring(4, 6), 16);
      const sumA = rA + gA + bA;
      const sumB = rB + gB + bB;
      return sumB - sumA;
    });
  };
  const uniqueColors = colorblindFriendly ? getUniqueColors() : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-2", children: [
    leftMargin > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
          .copying .copy-margin-cell {
            display: table-cell !important;
          }
        ` }),
    colorblindFriendly && uniqueColors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-black px-3 py-2 mb-2 w-fit ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: uniqueColors.map(({ shape, hex }, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-4 h-4 rounded",
          style: { backgroundColor: hex }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: shape }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: hex })
    ] }, index)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "max-w-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
      Array.from({ length: topClueDepth }).map((_, clueRow) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        leftMargin > 0 && Array.from({ length: leftMargin }).map((_2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "td",
          {
            className: "copy-margin-cell hidden"
          },
          `copy-margin-top-${i}-${clueRow}`
        )),
        Array.from({ length: leftClueDepth }).map((_2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", {}, `corner-${i}-${clueRow}`)),
        top == null ? void 0 : top.map((clueArray, col) => {
          const index = clueArray.length - topClueDepth + clueRow;
          return index >= 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            NonogramCell,
            {
              content: clueArray[index].content,
              className: cn(
                "border border-black",
                clueArray[index].className
              ),
              showShape: colorblindFriendly
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("td", {}, `top-empty-${col}-${clueRow}`);
        })
      ] }, `top-row-${clueRow}`)),
      (_a = body ?? left) == null ? void 0 : _a.map((clueArray, row) => {
        var _a2;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          leftMargin > 0 && Array.from({ length: leftMargin }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              className: "copy-margin-cell hidden"
            },
            `copy-margin-${i}-${row}`
          )),
          Array.from({ length: leftClueDepth }).map((_, clueCell) => {
            const index = clueArray.length - leftClueDepth + clueCell;
            return index >= 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              NonogramCell,
              {
                content: clueArray[index].content,
                className: cn(
                  "border border-black",
                  clueArray[index].className
                ),
                showShape: colorblindFriendly
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("td", {}, `left-empty-${row}-${clueCell}`);
          }),
          (_a2 = body ?? top) == null ? void 0 : _a2.map((_, col) => {
            var _a3, _b;
            let borderStyling = "border border-black";
            if (col === 0) {
              borderStyling += " border-l-4";
            }
            if (col === (body ?? top ?? []).length - 1) {
              borderStyling += " border-r-4";
            }
            if (row === 0) {
              borderStyling += " border-t-4";
            }
            if (row === (body ?? left ?? []).length - 1) {
              borderStyling += " border-b-4";
            }
            if (col > 0 && col % 5 === 0) {
              borderStyling += " border-l-4";
            }
            if (row > 0 && row % 5 === 0) {
              borderStyling += " border-t-4";
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              NonogramCell,
              {
                content: (_a3 = body == null ? void 0 : body[row][col]) == null ? void 0 : _a3.content,
                className: cn(borderStyling, (_b = body == null ? void 0 : body[row][col]) == null ? void 0 : _b.className),
                showShape: colorblindFriendly
              },
              `nonogram-cell-${row}-${col}`
            );
          })
        ] }, `nonogram-row-${row}`);
      })
    ] }) })
  ] });
};
const image001 = "/2026/hunt/static/puzzles/assets/8f40ca44416ffb0a.png";
const image002 = "/2026/hunt/static/puzzles/assets/1ff008ca2399fbd4.png";
const image003 = "/2026/hunt/static/puzzles/assets/bb3b9e829e386063.png";
const image004 = "/2026/hunt/static/puzzles/assets/ce84fa5b35240f45.png";
const image005 = "/2026/hunt/static/puzzles/assets/a363d726a4677052.png";
const image006 = "/2026/hunt/static/puzzles/assets/181a91deb2cd646f.png";
const image007 = "/2026/hunt/static/puzzles/assets/dfe1ecf5d673e613.png";
const image008 = "/2026/hunt/static/puzzles/assets/4655327ad3bba1f6.png";
const image009 = "/2026/hunt/static/puzzles/assets/ffa0b099d591092d.png";
const image010 = "/2026/hunt/static/puzzles/assets/7dca4ef51b0a8bfe.png";
const image011 = "/2026/hunt/static/puzzles/assets/a4bfee1ee6c0dcaf.png";
const image012 = "/2026/hunt/static/puzzles/assets/aa56728e00545df9.png";
const image013 = "/2026/hunt/static/puzzles/assets/2233902d29e080f8.png";
const image014 = "/2026/hunt/static/puzzles/assets/8fb8b69323b9fa69.png";
const image015 = "/2026/hunt/static/puzzles/assets/27ac32fbefb7ebcb.png";
const image016 = "/2026/hunt/static/puzzles/assets/8867fc32a3a0325d.png";
const image017 = "/2026/hunt/static/puzzles/assets/37d2a43b871da292.png";
const image018 = "/2026/hunt/static/puzzles/assets/531ec520a961021d.png";
const image019 = "/2026/hunt/static/puzzles/assets/0de7659a80d8b4cc.png";
const image020 = "/2026/hunt/static/puzzles/assets/437046b1293ce477.png";
const image021 = "/2026/hunt/static/puzzles/assets/c393f79a054ef710.png";
const image022 = "/2026/hunt/static/puzzles/assets/48e4d877c3d35130.png";
const image023 = "/2026/hunt/static/puzzles/assets/7bf35191b6815c15.png";
const image024 = "/2026/hunt/static/puzzles/assets/82bfe17c0965f243.png";
const image025 = "/2026/hunt/static/puzzles/assets/64a981ec7d67e495.png";
const image026 = "/2026/hunt/static/puzzles/assets/3556066a0765f3b0.png";
const image027 = "/2026/hunt/static/puzzles/assets/a3eedf5226eeef66.png";
const image028 = "/2026/hunt/static/puzzles/assets/ea29b3c04ccff427.png";
const image029 = "/2026/hunt/static/puzzles/assets/af52dbaabf3dd554.png";
const image030 = "/2026/hunt/static/puzzles/assets/578a358a2fed211e.png";
const image031 = "/2026/hunt/static/puzzles/assets/ee714250ca96a35d.png";
const image032 = "/2026/hunt/static/puzzles/assets/f302a736bed8d3c1.png";
const image033 = "/2026/hunt/static/puzzles/assets/5711fbb60c528518.png";
const image034 = "/2026/hunt/static/puzzles/assets/2ab61fa3d4cc6584.png";
const image035 = "/2026/hunt/static/puzzles/assets/2e2662a67ea66c03.png";
const image036 = "/2026/hunt/static/puzzles/assets/45de5b1ce5c1abbb.png";
const image037 = "/2026/hunt/static/puzzles/assets/ab8c55c5122e178d.png";
const image038 = "/2026/hunt/static/puzzles/assets/1434e24212be6e63.png";
const image039 = "/2026/hunt/static/puzzles/assets/81363cc70dcce7e5.png";
const image040 = "/2026/hunt/static/puzzles/assets/aac88a63478fa4ae.png";
const image041 = "/2026/hunt/static/puzzles/assets/48c36322ba6c1e38.png";
const image042 = "/2026/hunt/static/puzzles/assets/d176ac2106363d53.png";
const image043 = "/2026/hunt/static/puzzles/assets/2bcafb6c0f3386aa.png";
const image044 = "/2026/hunt/static/puzzles/assets/77fa446f947a7a94.png";
const image045 = "/2026/hunt/static/puzzles/assets/7ef1783b5af46296.png";
const image046 = "/2026/hunt/static/puzzles/assets/72354cec1a926012.png";
const image047 = "/2026/hunt/static/puzzles/assets/b03a188fa4956f2b.png";
const image048 = "/2026/hunt/static/puzzles/assets/1b6f9478d1731b1b.png";
const image049 = "/2026/hunt/static/puzzles/assets/ddcd2e2df6c5a74f.png";
const image050 = "/2026/hunt/static/puzzles/assets/defab0554d71e2c7.png";
const image051 = "/2026/hunt/static/puzzles/assets/188b8d5953ff983c.png";
const image052 = "/2026/hunt/static/puzzles/assets/276b36381b8ed2a5.png";
const image053 = "/2026/hunt/static/puzzles/assets/0902c0287bb03e15.png";
const image054 = "/2026/hunt/static/puzzles/assets/a7aeb955926fe1cb.png";
const image055 = "/2026/hunt/static/puzzles/assets/824a91155175b0a3.png";
const image056 = "/2026/hunt/static/puzzles/assets/e40db23c929ff096.png";
const image057 = "/2026/hunt/static/puzzles/assets/4d212bc3232d2e38.png";
const image058 = "/2026/hunt/static/puzzles/assets/a2fe9ddf7d09cd7f.png";
const image059 = "/2026/hunt/static/puzzles/assets/f40bc68e036cd563.png";
const image060 = "/2026/hunt/static/puzzles/assets/819c35f57a2f67fd.png";
const image061 = "/2026/hunt/static/puzzles/assets/1fc1a7da1502d363.png";
const image062 = "/2026/hunt/static/puzzles/assets/3c4f231e14112eef.png";
const image063 = "/2026/hunt/static/puzzles/assets/d8cb48a0160534d5.png";
const image064 = "/2026/hunt/static/puzzles/assets/2773eac9bbecda5f.png";
const image065 = "/2026/hunt/static/puzzles/assets/761ac0e2fb4e49fa.png";
const image066 = "/2026/hunt/static/puzzles/assets/ff317c7eeede92be.png";
const image067 = "/2026/hunt/static/puzzles/assets/ce678c94fba2ba10.png";
const image068 = "/2026/hunt/static/puzzles/assets/8e12b875559d1875.png";
const image069 = "/2026/hunt/static/puzzles/assets/f2236ced7c9f2093.png";
const image070 = "/2026/hunt/static/puzzles/assets/4500ef0e3e070e7a.png";
const image071 = "/2026/hunt/static/puzzles/assets/36e384fd57cb016f.png";
const image072 = "/2026/hunt/static/puzzles/assets/a7a1478a1499b46f.png";
const image073 = "/2026/hunt/static/puzzles/assets/2cc385c8841857f8.png";
const image074 = "/2026/hunt/static/puzzles/assets/b6178bdd2dc35027.png";
const image075 = "/2026/hunt/static/puzzles/assets/8d369684276eae18.png";
const image076 = "/2026/hunt/static/puzzles/assets/d5eed0cc64ecef74.png";
const image077 = "/2026/hunt/static/puzzles/assets/73fe5fc65227072d.png";
const image078 = "/2026/hunt/static/puzzles/assets/3b92997da8e937bd.png";
const image079 = "/2026/hunt/static/puzzles/assets/75aa0d229e2fd5ac.png";
const image080 = "/2026/hunt/static/puzzles/assets/5c177afa0b8c84ac.png";
const image081 = "/2026/hunt/static/puzzles/assets/e27a6b6b1a16c767.png";
const image082 = "/2026/hunt/static/puzzles/assets/187aaf006031b90d.png";
const image083 = "/2026/hunt/static/puzzles/assets/663acc135edd4339.png";
const image084 = "/2026/hunt/static/puzzles/assets/a265d1cdf0da69a7.png";
const image085 = "/2026/hunt/static/puzzles/assets/5ae71f3e09be9bf6.png";
const image086 = "/2026/hunt/static/puzzles/assets/441a816340ab39cd.png";
const image087 = "/2026/hunt/static/puzzles/assets/c989f9502f8f7e15.png";
const image088 = "/2026/hunt/static/puzzles/assets/22b06b11457c9e56.png";
const image089 = "/2026/hunt/static/puzzles/assets/5170675ce271bcf5.png";
const image090 = "/2026/hunt/static/puzzles/assets/f2817d361386a9d8.png";
const image091 = "/2026/hunt/static/puzzles/assets/b1517b623785acab.png";
const image092 = "/2026/hunt/static/puzzles/assets/6dd6bea4d862adab.png";
const image093 = "/2026/hunt/static/puzzles/assets/2129c0c965e8c5d2.png";
const image094 = "/2026/hunt/static/puzzles/assets/81af2e298bbd8d2b.png";
const image095 = "/2026/hunt/static/puzzles/assets/70aa111c32ce51d8.png";
const image096 = "/2026/hunt/static/puzzles/assets/77f0eb22cc30c546.png";
const image097 = "/2026/hunt/static/puzzles/assets/9f0d662695625f54.png";
const image098 = "/2026/hunt/static/puzzles/assets/f868419762220d6a.png";
const image099 = "/2026/hunt/static/puzzles/assets/1d4bddb2a12fe7d9.png";
const image100 = "/2026/hunt/static/puzzles/assets/ef032bdefea6772a.png";
const image101 = "/2026/hunt/static/puzzles/assets/dff146a85d6308d9.png";
const image102 = "/2026/hunt/static/puzzles/assets/1545382fae339e99.png";
const image103 = "/2026/hunt/static/puzzles/assets/9a672748a4ec981a.png";
const image104 = "/2026/hunt/static/puzzles/assets/5c6c6f2ae8bb32e3.png";
const image105 = "/2026/hunt/static/puzzles/assets/fdab06a271a47217.png";
const image106 = "/2026/hunt/static/puzzles/assets/79a33b2de2e162bf.png";
const image107 = "/2026/hunt/static/puzzles/assets/81cfc91432fb4619.png";
const image108 = "/2026/hunt/static/puzzles/assets/4e6bab5aca672df4.png";
const image109 = "/2026/hunt/static/puzzles/assets/dcab31e24a0cd4e2.png";
const image110 = "/2026/hunt/static/puzzles/assets/8604cbf37c86f300.png";
const image111 = "/2026/hunt/static/puzzles/assets/fffca85ae9163552.png";
const image112 = "/2026/hunt/static/puzzles/assets/634d8be06730d3f1.png";
const image113 = "/2026/hunt/static/puzzles/assets/6c2bfaed011e7e2e.png";
const image114 = "/2026/hunt/static/puzzles/assets/1b078f2b6d95d25f.png";
const image115 = "/2026/hunt/static/puzzles/assets/156ff059e6e308a8.png";
const image116 = "/2026/hunt/static/puzzles/assets/13c9ef49fb365da6.png";
const image117 = "/2026/hunt/static/puzzles/assets/eaed0f3c649d3a7a.png";
const image118 = "/2026/hunt/static/puzzles/assets/23b440ecd69af888.png";
const image119 = "/2026/hunt/static/puzzles/assets/9bb26cbf17bf7832.png";
const image120 = "/2026/hunt/static/puzzles/assets/6b3d1201741b5b69.png";
const image121 = "/2026/hunt/static/puzzles/assets/4d8c1c2a4ca98437.png";
const image122 = "/2026/hunt/static/puzzles/assets/6e6e1db8b66029e5.png";
const image123 = "/2026/hunt/static/puzzles/assets/86fb9d13df93e65b.png";
const image124 = "/2026/hunt/static/puzzles/assets/cd106901602a14bf.png";
const image125 = "/2026/hunt/static/puzzles/assets/1699dfdf2e11a663.png";
const image126 = "/2026/hunt/static/puzzles/assets/37b685e1071f41da.png";
const image127 = "/2026/hunt/static/puzzles/assets/a2dddf8618542b5c.png";
const image128 = "/2026/hunt/static/puzzles/assets/bead31f083de371e.png";
const image129 = "/2026/hunt/static/puzzles/assets/db55d7dfe242d40b.png";
const image130 = "/2026/hunt/static/puzzles/assets/45566f7b5dd827ab.png";
const image131 = "/2026/hunt/static/puzzles/assets/540c565310c1e0c5.png";
const image132 = "/2026/hunt/static/puzzles/assets/77dce1d7a583b368.png";
const image133 = "/2026/hunt/static/puzzles/assets/97dffd0f29fe7afc.png";
const image134 = "/2026/hunt/static/puzzles/assets/cf614472a175c767.png";
const image135 = "/2026/hunt/static/puzzles/assets/ecde8408fd4ddb5e.png";
const image136 = "/2026/hunt/static/puzzles/assets/445298b3db452e8d.png";
const image137 = "/2026/hunt/static/puzzles/assets/1e2364b7fc4cf616.png";
const image138 = "/2026/hunt/static/puzzles/assets/64c849d9f13e88ad.png";
const image139 = "/2026/hunt/static/puzzles/assets/901a9ec4bad313f3.png";
const image140 = "/2026/hunt/static/puzzles/assets/8ac3a735741400b0.png";
const image141 = "/2026/hunt/static/puzzles/assets/10bdc87baeef8557.png";
const image142 = "/2026/hunt/static/puzzles/assets/5d20a3a8747faa76.png";
const image143 = "/2026/hunt/static/puzzles/assets/8e6773e0275fa276.png";
const image144 = "/2026/hunt/static/puzzles/assets/74b88ef136e78a04.png";
const image145 = "/2026/hunt/static/puzzles/assets/f8f95f554c168acc.png";
const image146 = "/2026/hunt/static/puzzles/assets/120290395b2ad78d.png";
const image147 = "/2026/hunt/static/puzzles/assets/7ad795a58ee52875.png";
const image148 = "/2026/hunt/static/puzzles/assets/21b7a31cc82603e3.png";
const image149 = "/2026/hunt/static/puzzles/assets/06a3f4599b09917d.png";
const image150 = "/2026/hunt/static/puzzles/assets/9396f9bd798ddccc.png";
const image151 = "/2026/hunt/static/puzzles/assets/c2f41121df69003e.png";
const image152 = "/2026/hunt/static/puzzles/assets/723802060272284d.png";
const image153 = "/2026/hunt/static/puzzles/assets/fe4196443a70a0b7.png";
const image154 = "/2026/hunt/static/puzzles/assets/89cf7d3b12f5edb6.png";
const image155 = "/2026/hunt/static/puzzles/assets/40a2ab1d27d92a9e.png";
const image156 = "/2026/hunt/static/puzzles/assets/24e2a9b88422d7a6.png";
const image157 = "/2026/hunt/static/puzzles/assets/3123c0721bbff58c.png";
const image158 = "/2026/hunt/static/puzzles/assets/d8dbb7c0d707ff12.png";
const image159 = "/2026/hunt/static/puzzles/assets/5e47966e65ac663c.png";
const image160 = "/2026/hunt/static/puzzles/assets/46a2032b56580e49.png";
const image161 = "/2026/hunt/static/puzzles/assets/9b7f2b739e012ccf.png";
const image162 = "/2026/hunt/static/puzzles/assets/6022b1077aa02fac.png";
const image163 = "/2026/hunt/static/puzzles/assets/a4438bf0bd1f8875.png";
const image164 = "/2026/hunt/static/puzzles/assets/3ea5b0073729ac13.png";
const image165 = "/2026/hunt/static/puzzles/assets/f71505d934eca4f7.png";
const image166 = "/2026/hunt/static/puzzles/assets/ac5057d168a6ca6f.png";
const image167 = "/2026/hunt/static/puzzles/assets/c1ba4d62680e3b24.png";
const image168 = "/2026/hunt/static/puzzles/assets/980ab2edc9bba943.png";
const image169 = "/2026/hunt/static/puzzles/assets/6a55a0bc239d3f96.png";
const image170 = "/2026/hunt/static/puzzles/assets/c84857fa93985790.png";
const image171 = "/2026/hunt/static/puzzles/assets/6c6ec5c593ba0d75.png";
const image172 = "/2026/hunt/static/puzzles/assets/b304a253ee3da783.png";
const image173 = "/2026/hunt/static/puzzles/assets/b9e611bc92c76caf.png";
const image174 = "/2026/hunt/static/puzzles/assets/6cdaa6866599e843.png";
const image175 = "/2026/hunt/static/puzzles/assets/74e2933edc94d5e9.png";
const image176 = "/2026/hunt/static/puzzles/assets/d59ab1d2aeb1e934.png";
const image177 = "/2026/hunt/static/puzzles/assets/1249f5db123aa0eb.png";
const image178 = "/2026/hunt/static/puzzles/assets/12a749645874079a.png";
const image179 = "/2026/hunt/static/puzzles/assets/e6addfd76abe4f5b.png";
const image180 = "/2026/hunt/static/puzzles/assets/397b4fdfa246b68c.png";
const image181 = "/2026/hunt/static/puzzles/assets/cc320ede4c2be968.png";
const image182 = "/2026/hunt/static/puzzles/assets/7c3a85229e0fc86f.png";
const image183 = "/2026/hunt/static/puzzles/assets/541c241ea8bf423b.png";
const image184 = "/2026/hunt/static/puzzles/assets/74b96731e66468ac.png";
const image185 = "/2026/hunt/static/puzzles/assets/09ed3c8dd1dbbf8b.png";
const image186 = "/2026/hunt/static/puzzles/assets/43ce7bf508b2202e.png";
const image187 = "/2026/hunt/static/puzzles/assets/132a855236f9d82f.png";
const image188 = "/2026/hunt/static/puzzles/assets/36edb332913fab06.png";
const image189 = "/2026/hunt/static/puzzles/assets/549a641a4ad980ae.png";
const image190 = "/2026/hunt/static/puzzles/assets/43dfc167b10f0eee.png";
const image191 = "/2026/hunt/static/puzzles/assets/dbdbc7d4ecad750e.png";
const image192 = "/2026/hunt/static/puzzles/assets/3a50169a5fe0ca1e.png";
const image193 = "/2026/hunt/static/puzzles/assets/1917e6bc06bfeafc.png";
const image194 = "/2026/hunt/static/puzzles/assets/89cd4cc13cd242dc.png";
const image195 = "/2026/hunt/static/puzzles/assets/a4dee327a7403181.png";
const image196 = "/2026/hunt/static/puzzles/assets/9d5242835368b73e.png";
const image197 = "/2026/hunt/static/puzzles/assets/25b9ff716210ed86.png";
const image198 = "/2026/hunt/static/puzzles/assets/c1488de2cc6740d0.png";
const image199 = "/2026/hunt/static/puzzles/assets/56aefea3848c4619.png";
const image200 = "/2026/hunt/static/puzzles/assets/27261c41dfd9a51f.png";
const image201 = "/2026/hunt/static/puzzles/assets/c8c5c33755d9d09e.png";
const image202 = "/2026/hunt/static/puzzles/assets/974a1be1ca1e7f82.png";
const image203 = "/2026/hunt/static/puzzles/assets/2286ff330d4bd01a.png";
const image204 = "/2026/hunt/static/puzzles/assets/a7c3f03ef317620f.png";
const image205 = "/2026/hunt/static/puzzles/assets/056400e41ce9f269.png";
const image206 = "/2026/hunt/static/puzzles/assets/65bd7f151f32c091.png";
const image207 = "/2026/hunt/static/puzzles/assets/22ccafe08ae65117.png";
const image208 = "/2026/hunt/static/puzzles/assets/5758f0be54da540e.png";
const image209 = "/2026/hunt/static/puzzles/assets/853666d4355d3715.png";
const image210 = "/2026/hunt/static/puzzles/assets/19a589c80e4fc633.png";
const image211 = "/2026/hunt/static/puzzles/assets/feac237f86af9307.png";
const image212 = "/2026/hunt/static/puzzles/assets/4c7bd10ade149e1b.png";
const image213 = "/2026/hunt/static/puzzles/assets/fd0bd5059394d037.png";
const image214 = "/2026/hunt/static/puzzles/assets/2c44f442667ef81d.png";
const image215 = "/2026/hunt/static/puzzles/assets/8b683360281f51ac.png";
const image216 = "/2026/hunt/static/puzzles/assets/5903ea900deb1b2f.png";
const image217 = "/2026/hunt/static/puzzles/assets/205f9c0ff273d69b.png";
const image218 = "/2026/hunt/static/puzzles/assets/aabd1e66498a7cb3.png";
const image219 = "/2026/hunt/static/puzzles/assets/469dee590388bc17.png";
const image220 = "/2026/hunt/static/puzzles/assets/0e8037e293a7e195.png";
const image221 = "/2026/hunt/static/puzzles/assets/0b54e578afb74050.png";
const image222 = "/2026/hunt/static/puzzles/assets/0cf49403e35bed21.png";
const image223 = "/2026/hunt/static/puzzles/assets/5f31c1b9e67bf2fd.png";
const image224 = "/2026/hunt/static/puzzles/assets/fdc689ec9f9a83e7.png";
const image225 = "/2026/hunt/static/puzzles/assets/b55c7ef55dd58da0.png";
const image226 = "/2026/hunt/static/puzzles/assets/0df9f439ced0db85.png";
const image227 = "/2026/hunt/static/puzzles/assets/7c945a6661ba57bd.png";
const image228 = "/2026/hunt/static/puzzles/assets/808b608a20cf15b9.png";
const image229 = "/2026/hunt/static/puzzles/assets/e6198940e4ad8cc2.png";
const image230 = "/2026/hunt/static/puzzles/assets/a60c77003547234e.png";
const image231 = "/2026/hunt/static/puzzles/assets/1a154977da4a3d71.png";
const image232 = "/2026/hunt/static/puzzles/assets/67c3224c0c8595c3.png";
const image233 = "/2026/hunt/static/puzzles/assets/b4d6e5559f5ac94b.png";
const image234 = "/2026/hunt/static/puzzles/assets/cf2e9f0729de0cbf.png";
const image235 = "/2026/hunt/static/puzzles/assets/8ecfce4be09d8114.png";
const image236 = "/2026/hunt/static/puzzles/assets/768ad4e85aacb6de.png";
const image237 = "/2026/hunt/static/puzzles/assets/3f737bea1fd4e2e7.png";
const image238 = "/2026/hunt/static/puzzles/assets/1cea57b00797e508.png";
const image239 = "/2026/hunt/static/puzzles/assets/9a81d83eb193d240.png";
const image240 = "/2026/hunt/static/puzzles/assets/ff45cadda976f99f.png";
const image241 = "/2026/hunt/static/puzzles/assets/09b8795b0923e9c8.png";
const image242 = "/2026/hunt/static/puzzles/assets/597bb920c889bad0.png";
const image243 = "/2026/hunt/static/puzzles/assets/6eaa54168044b7db.png";
const image244 = "/2026/hunt/static/puzzles/assets/3c876652d15aa662.png";
const image245 = "/2026/hunt/static/puzzles/assets/e0b0e95396ef0732.png";
const image246 = "/2026/hunt/static/puzzles/assets/421fbceea909b4af.png";
const image247 = "/2026/hunt/static/puzzles/assets/e069585b6d02507b.png";
const image248 = "/2026/hunt/static/puzzles/assets/15b95b4d3f4a2cdc.png";
const image249 = "/2026/hunt/static/puzzles/assets/33e5480821187571.png";
const image250 = "/2026/hunt/static/puzzles/assets/a5ab5aaa053f16e2.png";
const image251 = "/2026/hunt/static/puzzles/assets/c2efac0337bfe94f.png";
const image252 = "/2026/hunt/static/puzzles/assets/43ebe30d4c004815.png";
const image253 = "/2026/hunt/static/puzzles/assets/b786433aa48fdc7a.png";
const image254 = "/2026/hunt/static/puzzles/assets/470d85c5986d2063.png";
const image255 = "/2026/hunt/static/puzzles/assets/ef5cf940f80271c7.png";
const image256 = "/2026/hunt/static/puzzles/assets/856ac71c7ca5e0f3.png";
const gridImages = [
  [
    image001,
    image002,
    image003,
    image004,
    image005,
    image006,
    image007,
    image008,
    image009,
    image010,
    image011,
    image012,
    image013,
    image014,
    image015,
    image016
  ],
  [
    image017,
    image018,
    image019,
    image020,
    image021,
    image022,
    image023,
    image024,
    image025,
    image026,
    image027,
    image028,
    image029,
    image030,
    image031,
    image032
  ],
  [
    image033,
    image034,
    image035,
    image036,
    image037,
    image038,
    image039,
    image040,
    image041,
    image042,
    image043,
    image044,
    image045,
    image046,
    image047,
    image048
  ],
  [
    image049,
    image050,
    image051,
    image052,
    image053,
    image054,
    image055,
    image056,
    image057,
    image058,
    image059,
    image060,
    image061,
    image062,
    image063,
    image064
  ],
  [
    image065,
    image066,
    image067,
    image068,
    image069,
    image070,
    image071,
    image072,
    image073,
    image074,
    image075,
    image076,
    image077,
    image078,
    image079,
    image080
  ],
  [
    image081,
    image082,
    image083,
    image084,
    image085,
    image086,
    image087,
    image088,
    image089,
    image090,
    image091,
    image092,
    image093,
    image094,
    image095,
    image096
  ],
  [
    image097,
    image098,
    image099,
    image100,
    image101,
    image102,
    image103,
    image104,
    image105,
    image106,
    image107,
    image108,
    image109,
    image110,
    image111,
    image112
  ],
  [
    image113,
    image114,
    image115,
    image116,
    image117,
    image118,
    image119,
    image120,
    image121,
    image122,
    image123,
    image124,
    image125,
    image126,
    image127,
    image128
  ],
  [
    image129,
    image130,
    image131,
    image132,
    image133,
    image134,
    image135,
    image136,
    image137,
    image138,
    image139,
    image140,
    image141,
    image142,
    image143,
    image144
  ],
  [
    image145,
    image146,
    image147,
    image148,
    image149,
    image150,
    image151,
    image152,
    image153,
    image154,
    image155,
    image156,
    image157,
    image158,
    image159,
    image160
  ],
  [
    image161,
    image162,
    image163,
    image164,
    image165,
    image166,
    image167,
    image168,
    image169,
    image170,
    image171,
    image172,
    image173,
    image174,
    image175,
    image176
  ],
  [
    image177,
    image178,
    image179,
    image180,
    image181,
    image182,
    image183,
    image184,
    image185,
    image186,
    image187,
    image188,
    image189,
    image190,
    image191,
    image192
  ],
  [
    image193,
    image194,
    image195,
    image196,
    image197,
    image198,
    image199,
    image200,
    image201,
    image202,
    image203,
    image204,
    image205,
    image206,
    image207,
    image208
  ],
  [
    image209,
    image210,
    image211,
    image212,
    image213,
    image214,
    image215,
    image216,
    image217,
    image218,
    image219,
    image220,
    image221,
    image222,
    image223,
    image224
  ],
  [
    image225,
    image226,
    image227,
    image228,
    image229,
    image230,
    image231,
    image232,
    image233,
    image234,
    image235,
    image236,
    image237,
    image238,
    image239,
    image240
  ],
  [
    image241,
    image242,
    image243,
    image244,
    image245,
    image246,
    image247,
    image248,
    image249,
    image250,
    image251,
    image252,
    image253,
    image254,
    image255,
    image256
  ]
];
const BLACK = "bg-black text-white";
const GRID_1_YELLOW = "bg-[#fdb402]";
const GRID_1_ORANGE = "bg-[#fe8b0d]";
const GRID_1_DARK_ORANGE = "bg-[#ed6a31]";
const GRID_2_LIGHT_GREEN = "bg-[#91de98]";
const GRID_2_GREEN = "bg-[#61ae63]";
const GRID_2_MIDDLE_GREEN = "bg-[#447a3b] text-white";
const GRID_2_DARK_GREEN = "bg-[#2c462a] text-white";
const GRID_3_YELLOW = "bg-[#fbd27f]";
const GRID_3_ORANGE = "bg-[#fa7936]";
const GRID_3_RED = "bg-[#bd3700]";
const GRID_4_OFF_WHITE = "bg-[#e0dfdf]";
const GRID_4_GRAY = "bg-[#bcbdc1]";
const GRID_4_YELLOW = "bg-[#ffa72b]";
const GRID_4_MAROON = "bg-[#7c2e21] text-white";
const GRID_5_YELLOW = "bg-[#fed40a]";
const GRID_5_ORANGE = "bg-[#fe8d03]";
const GRID_5_BROWN = "bg-[#8c5840] text-white";
const NONOGRAM_1_TOP = [
  [{ content: "4", className: GRID_1_YELLOW }],
  [{ content: "6", className: GRID_1_YELLOW }],
  [
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_ORANGE }
  ],
  [
    { content: "1", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "3", className: GRID_1_ORANGE },
    { content: "2", className: GRID_1_YELLOW }
  ],
  [
    { content: "3", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_ORANGE },
    { content: "3", className: GRID_1_YELLOW }
  ],
  [
    { content: "2", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "7", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_DARK_ORANGE },
    { content: "3", className: GRID_1_ORANGE }
  ],
  [
    { content: "1", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_ORANGE },
    { content: "2", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_DARK_ORANGE }
  ],
  [
    { content: "1", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "3", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_DARK_ORANGE }
  ],
  [
    { content: "2", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_ORANGE },
    { content: "2", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "3", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_DARK_ORANGE }
  ],
  [
    { content: "5", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_ORANGE },
    { content: "2", className: GRID_1_YELLOW },
    { content: "5", className: GRID_1_DARK_ORANGE }
  ],
  [
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_ORANGE },
    { content: "5", className: GRID_1_YELLOW }
  ],
  [
    { content: "1", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_ORANGE },
    { content: "2", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_YELLOW }
  ],
  [
    { content: "4", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "1", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_YELLOW }
  ],
  [{ content: "6", className: GRID_1_YELLOW }],
  [{ content: "4", className: GRID_1_YELLOW }]
];
const NONOGRAM_1_LEFT = [
  [{ content: "5", className: GRID_1_YELLOW }],
  [
    { content: "3", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_YELLOW }
  ],
  [
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "1", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "3", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_DARK_ORANGE },
    { content: "1", className: GRID_1_YELLOW }
  ],
  [
    { content: "5", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_ORANGE },
    { content: "2", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_ORANGE },
    { content: "2", className: GRID_1_YELLOW }
  ],
  [
    { content: "3", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_DARK_ORANGE },
    { content: "5", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_ORANGE },
    { content: "3", className: GRID_1_YELLOW }
  ],
  [
    { content: "2", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_ORANGE },
    { content: "2", className: GRID_1_YELLOW },
    { content: "3", className: GRID_1_DARK_ORANGE },
    { content: "5", className: GRID_1_YELLOW }
  ],
  [
    { content: "2", className: GRID_1_YELLOW },
    { content: "3", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "3", className: GRID_1_ORANGE },
    { content: "2", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "2", className: GRID_1_YELLOW }
  ],
  [
    { content: "2", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_ORANGE },
    { content: "2", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "3", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_YELLOW },
    { content: "1", className: GRID_1_DARK_ORANGE },
    { content: "1", className: GRID_1_ORANGE },
    { content: "2", className: GRID_1_YELLOW }
  ],
  [
    { content: "1", className: GRID_1_YELLOW },
    { content: "4", className: GRID_1_YELLOW },
    { content: "2", className: GRID_1_ORANGE },
    { content: "5", className: GRID_1_YELLOW }
  ],
  [{ content: "9", className: GRID_1_YELLOW }],
  [{ content: "5", className: GRID_1_DARK_ORANGE }],
  [{ content: "5", className: GRID_1_DARK_ORANGE }],
  [
    { content: "4", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_DARK_ORANGE }
  ],
  [
    { content: "4", className: GRID_1_ORANGE },
    { content: "1", className: GRID_1_DARK_ORANGE }
  ],
  [
    { content: "1", className: GRID_1_ORANGE },
    { content: "4", className: GRID_1_DARK_ORANGE }
  ]
];
const NONOGRAM_2_TOP = [
  [{ content: "3", className: GRID_2_GREEN }],
  [
    { content: "1", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_DARK_GREEN },
    { content: "6", className: GRID_2_GREEN }
  ],
  [
    { content: "1", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "2", className: GRID_2_DARK_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "2", className: GRID_2_MIDDLE_GREEN },
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN }
  ],
  [
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "2", className: GRID_2_MIDDLE_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "2", className: GRID_2_GREEN }
  ],
  [
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "2", className: GRID_2_GREEN },
    { content: "5", className: GRID_2_LIGHT_GREEN },
    { content: "2", className: GRID_2_MIDDLE_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN }
  ],
  [
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "3", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "3", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_MIDDLE_GREEN },
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN }
  ],
  [
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "2", className: GRID_2_DARK_GREEN },
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_MIDDLE_GREEN },
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN }
  ],
  [
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "2", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_DARK_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "5", className: GRID_2_GREEN }
  ],
  [
    { content: "1", className: GRID_2_GREEN },
    { content: "3", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "3", className: GRID_2_LIGHT_GREEN },
    { content: "5", className: GRID_2_GREEN }
  ],
  [
    { content: "4", className: GRID_2_LIGHT_GREEN },
    { content: "3", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_MIDDLE_GREEN },
    { content: "4", className: GRID_2_GREEN }
  ],
  [
    { content: "4", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "4", className: GRID_2_MIDDLE_GREEN },
    { content: "3", className: GRID_2_GREEN }
  ],
  [
    { content: "4", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "3", className: GRID_2_MIDDLE_GREEN },
    { content: "4", className: GRID_2_GREEN }
  ],
  [
    { content: "3", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "4", className: GRID_2_MIDDLE_GREEN },
    { content: "3", className: GRID_2_GREEN }
  ],
  [
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "3", className: GRID_2_MIDDLE_GREEN },
    { content: "4", className: GRID_2_GREEN }
  ],
  [
    { content: "2", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_MIDDLE_GREEN }
  ]
];
const NONOGRAM_2_LEFT = [
  [{ content: "3", className: GRID_2_LIGHT_GREEN }],
  [
    { content: "4", className: GRID_2_LIGHT_GREEN },
    { content: "2", className: GRID_2_GREEN },
    { content: "3", className: GRID_2_LIGHT_GREEN }
  ],
  [
    { content: "2", className: GRID_2_GREEN },
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "3", className: GRID_2_GREEN },
    { content: "6", className: GRID_2_LIGHT_GREEN }
  ],
  [
    { content: "1", className: GRID_2_GREEN },
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "3", className: GRID_2_GREEN },
    { content: "8", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN }
  ],
  [
    { content: "1", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_DARK_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "4", className: GRID_2_GREEN },
    { content: "4", className: GRID_2_LIGHT_GREEN },
    { content: "3", className: GRID_2_GREEN }
  ],
  [
    { content: "1", className: GRID_2_GREEN },
    { content: "2", className: GRID_2_DARK_GREEN },
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "2", className: GRID_2_GREEN },
    { content: "3", className: GRID_2_MIDDLE_GREEN }
  ],
  [
    { content: "1", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_DARK_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "4", className: GRID_2_MIDDLE_GREEN }
  ],
  [
    { content: "1", className: GRID_2_GREEN },
    { content: "3", className: GRID_2_LIGHT_GREEN },
    { content: "2", className: GRID_2_DARK_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "4", className: GRID_2_MIDDLE_GREEN }
  ],
  [
    { content: "1", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_MIDDLE_GREEN },
    { content: "3", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "3", className: GRID_2_MIDDLE_GREEN },
    { content: "1", className: GRID_2_GREEN }
  ],
  [
    { content: "1", className: GRID_2_GREEN },
    { content: "2", className: GRID_2_MIDDLE_GREEN },
    { content: "4", className: GRID_2_LIGHT_GREEN },
    { content: "1", className: GRID_2_GREEN },
    { content: "2", className: GRID_2_MIDDLE_GREEN },
    { content: "3", className: GRID_2_GREEN }
  ],
  [
    { content: "1", className: GRID_2_GREEN },
    { content: "1", className: GRID_2_LIGHT_GREEN },
    { content: "2", className: GRID_2_MIDDLE_GREEN },
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "7", className: GRID_2_GREEN }
  ],
  [
    { content: "1", className: GRID_2_GREEN },
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "3", className: GRID_2_MIDDLE_GREEN },
    { content: "7", className: GRID_2_GREEN }
  ],
  [
    { content: "2", className: GRID_2_GREEN },
    { content: "3", className: GRID_2_LIGHT_GREEN },
    { content: "5", className: GRID_2_GREEN }
  ],
  [
    { content: "2", className: GRID_2_GREEN },
    { content: "2", className: GRID_2_LIGHT_GREEN },
    { content: "3", className: GRID_2_GREEN }
  ],
  [{ content: "3", className: GRID_2_GREEN }]
];
const NONOGRAM_3_TOP = [
  [
    { content: "3", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_ORANGE }
  ],
  [
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED },
    { content: "2", className: GRID_3_ORANGE }
  ],
  [
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED },
    { content: "1", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED }
  ],
  [
    { content: "3", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED },
    { content: "3", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED }
  ],
  [
    { content: "1", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "5", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED }
  ],
  [
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "1", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED }
  ],
  [
    { content: "7", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED }
  ],
  [
    { content: "3", className: GRID_3_ORANGE },
    { content: "2", className: GRID_3_YELLOW },
    { content: "1", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "4", className: GRID_3_ORANGE }
  ],
  [
    { content: "9", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED }
  ],
  [
    { content: "1", className: GRID_3_ORANGE },
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "1", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED }
  ],
  [
    { content: "1", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "4", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED }
  ],
  [
    { content: "4", className: GRID_3_ORANGE },
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED }
  ],
  [
    { content: "3", className: GRID_3_ORANGE },
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_RED }
  ],
  [
    { content: "2", className: GRID_3_ORANGE },
    { content: "3", className: GRID_3_ORANGE }
  ],
  [{ content: "2", className: GRID_3_ORANGE }]
];
const NONOGRAM_3_LEFT = [
  [{ content: "2", className: GRID_3_ORANGE }],
  [{ content: "2", className: GRID_3_ORANGE }],
  [{ content: "3", className: GRID_3_ORANGE }],
  [
    { content: "1", className: GRID_3_ORANGE },
    { content: "3", className: GRID_3_ORANGE }
  ],
  [
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "1", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_ORANGE }
  ],
  [
    { content: "4", className: GRID_3_ORANGE },
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "2", className: GRID_3_ORANGE },
    { content: "4", className: GRID_3_ORANGE }
  ],
  [
    { content: "1", className: GRID_3_RED },
    { content: "12", className: GRID_3_ORANGE }
  ],
  [
    { content: "1", className: GRID_3_RED },
    { content: "1", className: GRID_3_ORANGE },
    { content: "2", className: GRID_3_YELLOW },
    { content: "1", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "1", className: GRID_3_ORANGE },
    { content: "2", className: GRID_3_YELLOW },
    { content: "2", className: GRID_3_ORANGE }
  ],
  [
    { content: "1", className: GRID_3_RED },
    { content: "8", className: GRID_3_ORANGE }
  ],
  [
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "1", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "2", className: GRID_3_ORANGE }
  ],
  [
    { content: "2", className: GRID_3_ORANGE },
    { content: "2", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "3", className: GRID_3_ORANGE },
    { content: "1", className: GRID_3_YELLOW },
    { content: "2", className: GRID_3_ORANGE }
  ],
  [{ content: "12", className: GRID_3_ORANGE }],
  [
    { content: "1", className: GRID_3_RED },
    { content: "2", className: GRID_3_ORANGE },
    { content: "2", className: GRID_3_RED },
    { content: "4", className: GRID_3_RED },
    { content: "2", className: GRID_3_ORANGE }
  ],
  [
    { content: "2", className: GRID_3_RED },
    { content: "1", className: GRID_3_RED },
    { content: "1", className: GRID_3_ORANGE }
  ],
  [{ content: "1", className: GRID_3_ORANGE }]
];
const NONOGRAM_4_TOP = [
  [
    { content: "2", className: GRID_4_OFF_WHITE },
    { content: "1", className: GRID_4_GRAY },
    { content: "1", className: GRID_4_OFF_WHITE },
    { content: "1", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "1", className: GRID_4_YELLOW },
    { content: "1", className: GRID_4_OFF_WHITE },
    { content: "1", className: GRID_4_GRAY },
    { content: "3", className: GRID_4_OFF_WHITE },
    { content: "2", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "2", className: GRID_4_OFF_WHITE },
    { content: "1", className: GRID_4_GRAY },
    { content: "6", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "3", className: GRID_4_OFF_WHITE },
    { content: "1", className: GRID_4_GRAY },
    { content: "5", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "1", className: BLACK },
    { content: "4", className: GRID_4_OFF_WHITE },
    { content: "1", className: GRID_4_GRAY },
    { content: "4", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "2", className: BLACK },
    { content: "1", className: GRID_4_MAROON },
    { content: "1", className: BLACK },
    { content: "4", className: GRID_4_OFF_WHITE },
    { content: "1", className: GRID_4_GRAY },
    { content: "4", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "2", className: BLACK },
    { content: "1", className: GRID_4_MAROON },
    { content: "1", className: BLACK },
    { content: "9", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "2", className: BLACK },
    { content: "1", className: GRID_4_MAROON },
    { content: "1", className: BLACK },
    { content: "3", className: GRID_4_OFF_WHITE },
    { content: "1", className: BLACK },
    { content: "5", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "1", className: BLACK },
    { content: "9", className: GRID_4_OFF_WHITE }
  ],
  [{ content: "10", className: GRID_4_OFF_WHITE }],
  [
    { content: "2", className: GRID_4_OFF_WHITE },
    { content: "6", className: GRID_4_OFF_WHITE },
    { content: "2", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "2", className: GRID_4_OFF_WHITE },
    { content: "5", className: GRID_4_OFF_WHITE },
    { content: "1", className: GRID_4_OFF_WHITE }
  ],
  [{ content: "9", className: GRID_4_OFF_WHITE }],
  [
    { content: "3", className: GRID_4_OFF_WHITE },
    { content: "5", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "3", className: GRID_4_OFF_WHITE },
    { content: "2", className: GRID_4_OFF_WHITE }
  ]
];
const NONOGRAM_4_LEFT = [
  [{ content: "3", className: BLACK }],
  [
    { content: "3", className: BLACK },
    { content: "1", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "3", className: GRID_4_MAROON },
    { content: "1", className: GRID_4_OFF_WHITE },
    { content: "2", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "5", className: BLACK },
    { content: "5", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "5", className: GRID_4_OFF_WHITE },
    { content: "3", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "1", className: GRID_4_YELLOW },
    { content: "8", className: GRID_4_OFF_WHITE },
    { content: "1", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "11", className: GRID_4_OFF_WHITE },
    { content: "2", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "1", className: GRID_4_OFF_WHITE },
    { content: "3", className: GRID_4_GRAY },
    { content: "3", className: GRID_4_OFF_WHITE },
    { content: "1", className: BLACK },
    { content: "6", className: GRID_4_OFF_WHITE }
  ],
  [
    { content: "1", className: GRID_4_GRAY },
    { content: "3", className: GRID_4_OFF_WHITE },
    { content: "2", className: GRID_4_GRAY },
    { content: "9", className: GRID_4_OFF_WHITE }
  ],
  [{ content: "15", className: GRID_4_OFF_WHITE }],
  [{ content: "13", className: GRID_4_OFF_WHITE }],
  [{ content: "11", className: GRID_4_OFF_WHITE }],
  [{ content: "9", className: GRID_4_OFF_WHITE }],
  [
    { content: "3", className: GRID_4_OFF_WHITE },
    { content: "3", className: GRID_4_OFF_WHITE }
  ],
  [{ content: "3", className: GRID_4_OFF_WHITE }]
];
const NONOGRAM_5_TOP = [
  [{ content: "3", className: GRID_5_YELLOW }],
  [{ content: "8", className: GRID_5_YELLOW }],
  [
    { content: "4", className: GRID_5_YELLOW },
    { content: "3", className: GRID_5_ORANGE },
    { content: "3", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "2", className: GRID_5_YELLOW },
    { content: "4", className: GRID_5_ORANGE },
    { content: "6", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "2", className: GRID_5_YELLOW },
    { content: "3", className: GRID_5_ORANGE },
    { content: "2", className: GRID_5_BROWN },
    { content: "5", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "1", className: GRID_5_ORANGE },
    { content: "1", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_ORANGE },
    { content: "2", className: GRID_5_BROWN },
    { content: "1", className: BLACK },
    { content: "1", className: GRID_5_BROWN },
    { content: "2", className: GRID_5_BROWN },
    { content: "2", className: GRID_5_YELLOW }
  ],
  [
    { content: "5", className: GRID_5_BROWN },
    { content: "2", className: GRID_5_BROWN },
    { content: "1", className: BLACK },
    { content: "2", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "2", className: GRID_5_ORANGE },
    { content: "7", className: GRID_5_BROWN },
    { content: "1", className: BLACK },
    { content: "2", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "4", className: GRID_5_ORANGE },
    { content: "3", className: GRID_5_BROWN },
    { content: "2", className: GRID_5_BROWN },
    { content: "1", className: BLACK },
    { content: "2", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "2", className: GRID_5_YELLOW },
    { content: "2", className: GRID_5_BROWN },
    { content: "1", className: BLACK },
    { content: "1", className: GRID_5_BROWN },
    { content: "2", className: GRID_5_BROWN },
    { content: "2", className: GRID_5_YELLOW }
  ],
  [
    { content: "1", className: GRID_5_YELLOW },
    { content: "2", className: GRID_5_BROWN },
    { content: "5", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "5", className: GRID_5_ORANGE },
    { content: "6", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "3", className: GRID_5_YELLOW },
    { content: "2", className: GRID_5_ORANGE },
    { content: "1", className: GRID_5_YELLOW },
    { content: "2", className: GRID_5_ORANGE },
    { content: "3", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [{ content: "9", className: GRID_5_YELLOW }],
  [{ content: "3", className: GRID_5_YELLOW }]
];
const NONOGRAM_5_LEFT = [
  [
    { content: "1", className: GRID_5_YELLOW },
    { content: "1", className: GRID_5_ORANGE }
  ],
  [
    { content: "2", className: GRID_5_YELLOW },
    { content: "1", className: GRID_5_ORANGE },
    { content: "2", className: GRID_5_ORANGE },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "2", className: GRID_5_YELLOW },
    { content: "1", className: GRID_5_ORANGE },
    { content: "2", className: GRID_5_BROWN },
    { content: "2", className: GRID_5_ORANGE },
    { content: "1", className: GRID_5_YELLOW },
    { content: "1", className: GRID_5_ORANGE },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "1", className: GRID_5_YELLOW },
    { content: "3", className: GRID_5_ORANGE },
    { content: "2", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_ORANGE },
    { content: "1", className: GRID_5_YELLOW },
    { content: "1", className: GRID_5_ORANGE },
    { content: "2", className: GRID_5_YELLOW }
  ],
  [
    { content: "2", className: GRID_5_YELLOW },
    { content: "2", className: GRID_5_ORANGE },
    { content: "5", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW },
    { content: "2", className: GRID_5_ORANGE },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "2", className: GRID_5_YELLOW },
    { content: "1", className: GRID_5_ORANGE },
    { content: "7", className: GRID_5_BROWN },
    { content: "2", className: GRID_5_ORANGE },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "2", className: GRID_5_YELLOW },
    { content: "2", className: GRID_5_ORANGE },
    { content: "1", className: GRID_5_BROWN },
    { content: "3", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_ORANGE },
    { content: "3", className: GRID_5_YELLOW }
  ],
  [
    { content: "2", className: GRID_5_YELLOW },
    { content: "1", className: GRID_5_ORANGE },
    { content: "1", className: GRID_5_BROWN },
    { content: "1", className: BLACK },
    { content: "1", className: GRID_5_BROWN },
    { content: "1", className: BLACK },
    { content: "1", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_ORANGE },
    { content: "2", className: GRID_5_YELLOW }
  ],
  [
    { content: "2", className: GRID_5_YELLOW },
    { content: "1", className: GRID_5_ORANGE },
    { content: "2", className: GRID_5_BROWN },
    { content: "3", className: GRID_5_BROWN },
    { content: "2", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_ORANGE },
    { content: "2", className: GRID_5_YELLOW }
  ],
  [
    { content: "1", className: GRID_5_YELLOW },
    { content: "11", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "1", className: GRID_5_YELLOW },
    { content: "3", className: GRID_5_BROWN },
    { content: "3", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "1", className: GRID_5_YELLOW },
    { content: "4", className: GRID_5_BROWN },
    { content: "3", className: BLACK },
    { content: "4", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "1", className: GRID_5_YELLOW },
    { content: "9", className: GRID_5_BROWN },
    { content: "1", className: GRID_5_YELLOW }
  ],
  [
    { content: "3", className: GRID_5_YELLOW },
    { content: "3", className: GRID_5_BROWN },
    { content: "3", className: GRID_5_YELLOW }
  ],
  [{ content: "5", className: GRID_5_YELLOW }]
];
const NonogramWrapper = () => {
  const [colorAssistEnabled, setColorAssistEnabled] = useColorAssist();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Nonogram,
        {
          top: NONOGRAM_1_TOP,
          left: NONOGRAM_1_LEFT,
          colorblindFriendly: colorAssistEnabled
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Nonogram,
        {
          top: NONOGRAM_2_TOP,
          left: NONOGRAM_2_LEFT,
          copyToClipboardLeftMargin: 1,
          colorblindFriendly: colorAssistEnabled
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Nonogram,
        {
          top: NONOGRAM_3_TOP,
          left: NONOGRAM_3_LEFT,
          copyToClipboardLeftMargin: 1,
          colorblindFriendly: colorAssistEnabled
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Nonogram,
        {
          top: NONOGRAM_4_TOP,
          left: NONOGRAM_4_LEFT,
          copyToClipboardLeftMargin: 4,
          colorblindFriendly: colorAssistEnabled
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Nonogram,
        {
          top: NONOGRAM_5_TOP,
          left: NONOGRAM_5_LEFT,
          colorblindFriendly: colorAssistEnabled
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HorizontalDivider, { copyToClipboardNumCols: 25 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "m-2", children: gridImages.map((row, rowIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: row.map((image, colIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: image, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "", src: image, width: "96" }) }) }, colIndex)) }, rowIndex)) })
  ] });
};
const elem = document.getElementById("puzzle-content-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(NonogramWrapper, {}));
} else {
  console.error(
    "Could not mount NonogramWrapper because #puzzle-content-root was nowhere to be found"
  );
}
//# sourceMappingURL=CXhTNdex.js.map
