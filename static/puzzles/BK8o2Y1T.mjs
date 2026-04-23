import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { c as createLucideIcon, B as Button, S as Select, a as SelectTrigger, b as SelectValue, d as SelectContent, e as SelectItem, I as Input } from "./CyHnzWK1.mjs";
import { c as cn } from "./8lrfSi8Z.mjs";
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const ITEM_NAMES = [
  "Associated Waveform",
  "Bravado Machine",
  "Certificate Scheme",
  "Dynamic Warp",
  "Eureka Camera",
  "Fragrance Label",
  "Gated Alchemy"
];
const ITEM_NUMS = [0, 1, 2, 3, 4, 5, 6];
const COMPETITOR_BIDS = [
  [33, 35, 58, 66, 63, 87, 31],
  [12, 11, 9, 12, 54, 8, 9],
  [9, 25, 49, 16, 1, 49, 4],
  [4, 1, 10, 2, 6, 7, 7]
];
const COMPETITOR_TOKENS = [48, 59, 49, 37];
const YOUR_TOKENS = 88;
const AuctionRow = ({
  num,
  itemNames,
  setItemNames,
  itemBids,
  setItemBids
}) => {
  const handleChange = (idx, value) => {
    setItemBids((prev) => prev.map((b, i) => i === idx ? value : b));
  };
  const handleBlur = (idx) => {
    setItemBids(
      (prev) => prev.map((b, i) => {
        if (i !== idx) return b;
        const n = parseFloat(b);
        return isNaN(n) ? "0" : String(n);
      })
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "Lot ",
      num + 1,
      ":"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        value: itemNames[num],
        onValueChange: (newValue) => {
          setItemNames(
            (prev) => prev.map((item, i) => i === num ? newValue : item)
          );
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-56", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ITEM_NAMES.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: x, children: x }, x)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Your bid:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "number",
        min: 0,
        value: itemBids[num],
        onChange: (e) => {
          handleChange(num, e.target.value);
        },
        onBlur: () => {
          handleBlur(num);
        },
        className: "w-20"
      }
    )
  ] });
};
const computeAuctionResult = (names, bids) => {
  let competitorTokens = [...COMPETITOR_TOKENS];
  let yourTokens = YOUR_TOKENS;
  const whichItemsWon = [];
  const yourRealBids = [];
  for (let ind = 0; ind < 7; ind++) {
    const yourBid = Math.min(bids[ind], yourTokens);
    const itemNumber = names[ind].charCodeAt(0) - 65;
    const competitorBidsOnItem = COMPETITOR_BIDS.map(
      (i, ind2) => Math.min(i[itemNumber], competitorTokens[ind2])
    );
    whichItemsWon.push(yourBid >= Math.max(...competitorBidsOnItem));
    yourRealBids.push(yourBid);
    yourTokens -= yourBid;
    competitorTokens = competitorTokens.map(
      (i, ind2) => i - competitorBidsOnItem[ind2]
    );
  }
  const summary = whichItemsWon.every((i) => i) ? { won: true, message: "Congratulations! You won all seven lots!" } : {
    won: false,
    message: `You won ${whichItemsWon.filter((i) => i).length}/7 lots.`
  };
  const output = whichItemsWon.map((i, ind) => ({
    won: i,
    message: `Lot ${ind + 1} (${names[ind]}): Your bid of ${yourRealBids[ind]} token${yourRealBids[ind] !== 1 ? "s" : ""} ${i ? "won" : "did not win"}.`
  }));
  return [summary, output];
};
const runAuction = (itemNames, itemBids, lastCheckTime, setLastCheckTime, setError, setSummary, setOutput) => {
  if (Date.now() < lastCheckTime + 1e3) {
    setError("Please wait at least one second between attempts.");
    setSummary({ won: false, message: "" });
    setOutput([]);
    return;
  }
  if (itemBids.some((b) => isNaN(parseFloat(b)))) {
    setError("Some bid is not a number!");
    setSummary({ won: false, message: "" });
    setOutput([]);
    return;
  }
  setLastCheckTime(Date.now());
  const bids = itemBids.map((i) => parseFloat(i));
  let response;
  if (new Set(itemNames).size !== 7) {
    response = {
      inputError: "Invalid permutation! (Some lot is missing/repeated)",
      summary: { won: false, message: "" },
      output: []
    };
  } else if (bids.some((x) => x < 0 || x !== Math.floor(x))) {
    response = {
      inputError: "Bids must be non-negative integers!",
      summary: { won: false, message: "" },
      output: []
    };
  } else {
    const [summary, output] = computeAuctionResult(itemNames, bids);
    response = { inputError: "", summary, output };
  }
  setError(response.inputError);
  setSummary(response.summary);
  setOutput(response.output);
};
const AuctionComponent = () => {
  const [itemNames, setItemNames] = reactExports.useState([...ITEM_NAMES]);
  const [itemBids, setItemBids] = reactExports.useState(
    Array(ITEM_NAMES.length).fill("0")
  );
  const [error, setError] = reactExports.useState("");
  const [summary, setSummary] = reactExports.useState({
    won: false,
    message: ""
  });
  const [output, setOutput] = reactExports.useState([]);
  const [lastCheckTime, setLastCheckTime] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 mt-2", children: ITEM_NUMS.map((idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      AuctionRow,
      {
        num: idx,
        itemNames,
        setItemNames,
        itemBids,
        setItemBids
      },
      idx
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "primary",
        onClick: () => {
          runAuction(
            itemNames,
            itemBids,
            lastCheckTime,
            setLastCheckTime,
            setError,
            setSummary,
            setOutput
          );
        },
        className: "mt-4",
        children: "See auction results"
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-6 h-6 text-red-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500", children: error })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: cn(
          "text-lg mt-2",
          summary.won ? "text-green-500" : "text-red-500"
        ),
        children: summary.message
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: output.map((x, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: x.won ? "text-green-500" : "text-red-500", children: x.message }, idx)) })
  ] });
};
const elem1 = document.getElementById("auction-root");
if (elem1) {
  const root = clientExports.createRoot(elem1);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(AuctionComponent, {}));
} else {
  console.error(
    "Could not mount App because #auction-root was nowhere to be found"
  );
}
//# sourceMappingURL=BK8o2Y1T.mjs.map
