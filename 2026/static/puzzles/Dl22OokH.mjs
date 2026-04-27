import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { e as ClueTable } from "./CPm4UabO.mjs";
import { t } from "./DGHxrElc.mjs";
const Across = t([
  [2, "Deposited delicate material in palladium"],
  [5, "Boring meal: salad"],
  [8, "Dreamt vividly inside Jersey Shore home"],
  [10, "Nice summer embodied by sweet escape"],
  [12, "Half defaced limes on the counter"],
  [13, "See past, see follower?"],
  [14, "Party is noisily overrun"],
  [16, "Permitted to fire"],
  [18, "Norse god imprisoned by good instincts"],
  [19, "Pinky, for example, went to see finales"],
  [20, "One Republic holds baby for exposure-to-symptom time"],
  [22, "Squeakily procure casket alternative"],
  [23, "Douchebag den is a place with drills"],
  [24, "Awfully direct likelihood of repaying loan on time"],
  [26, "Opera tower housing muse"],
  [27, "Microscopic sounding joint after standoff"],
  [29, "Competent leaders of Amazon Basics logistics engineering"],
  [30, "Software purchased over the phone"],
  [33, "Tell it off for short"],
  [36, "Scored one without remaking pastry"],
  [37, "Compass maker originally just extended every point"],
  [38, "Edge of South-East Asian mountain tops"],
  [39, "Sounds like you and I are number one"],
  [40, "Waffle maker gives up golf to get self-esteem"],
  [42, "Droid replaces digit with a guitar clamp"],
  [43, "Dunphy dad is secretly a bibliophile"],
  [45, "Software navigator obscures center"],
  [47, "Wrongfully arrest the most precious"],
  [48, "Mini child entertainer?"],
  [49, "Outspoken single spirit"],
  [50, "Infatuated with spotted horse becoming powerless"],
  [55, "Doc, for one, scrambled forward without either partner"],
  [58, "Rapper's negatory epithet?"],
  [62, "Figure with twisted tail leads officer and warden Natalie"],
  [64, "Musical doctor in the midst of daydreaming"],
  [
    65,
    "Confusing US Court of Appeals form without coat of arms? It's intentional"
  ],
  [66, "Alternate hub for streaming platform"],
  [67, "Feline possessing nothing for fur"],
  [70, "Organ involved in hearing!"],
  [71, "Interior land is crop circle"],
  [72, "One of Durin's Folk begins official invasion network"],
  [73, "Careless usher skips first exit, leading to peak traffic time"],
  [74, "In-Guk's method for manipulating search results"],
  [75, "Officer starts strict gen. training"],
  [76, "Insect stole heart from monolith"],
  [77, "Sierra James's giant sidekick orated lecture"]
]);
const Down = t([
  [1, "Dainty songbird slipped into piss"],
  [2, "Legume covering double-breasted jacket?"],
  [3, "California repeatedly began overplanting chocolate tree"],
  [4, "Bring back mined material"],
  [5, "Heavy element emits alpha particle, becomes efficient light"],
  [6, "Family harbors French friend"],
  [7, "Underage gold digger on the radio"],
  [8, "Polynesian's aromatic mix eliminates stray cat"],
  [9, "Timeshare and real estate company busted, yet went on"],
  [11, "Reflected in water, one travels to range above bass"],
  [12, "Ballads of Soda Springs: no wild rapids"],
  [13, "Sexy man in bubbles lost silk top and borrowed a shirt"],
  [15, "Wordless reshuffling would trim more than one prefix"],
  [17, "War troop appears regularly overhead"],
  [21, "Hollow breeze takes on what followed neolithic time"],
  [24, "Regular object made of garlic root and yam"],
  [25, "No opponent follows automobile end blinkers"],
  [28, "Wifi scalability bears annual budgeting time"],
  [29, "Just about disoriented, am lost"],
  [30, "Dish caused Bill to empty out stomach, hurting inside"],
  [31, "Quite ethically concealing tusks"],
  [32, "Uncle athletically catches soccer shoe"],
  [34, "Split droplet"],
  [35, "Scotch product of pureed pâté"],
  [37, "Baby animal's happiness is filled with energy"],
  [41, "Field glutton produces spring prediction time"],
  [44, "Religious people not entirely behind Ushas"],
  [46, "Removed rugged turn from Austrian continent"],
  [47, "Note holds a French letter"],
  [51, "I heard tea goes with hemp fabric"],
  [52, "Doomsday animal messed up his afro"],
  [53, "Phi Delt got drunk, threw up a liter and lost first intestinal bowel"],
  [54, "Stuck up Avril traded trailer for piano to give Dua"],
  [56, "Wake up, Rose, get up"],
  [57, "Time-saving fictional starship prisoner follows Cornish river"],
  [59, "Logic gate, binary digit, for loop?"],
  [60, "Intensely bright, even on heroin"],
  [61, "Secret cosmic romance on a smaller scale"],
  [62, "Thin strips of metal for dentist, regularly"],
  [63, "Valley feast"],
  [68, "Unbounded route elsewhere"],
  [69, "Magma meets earth, ends volcanic output"]
]);
const escapeString = (str) => {
  if (str.startsWith("'") && str.endsWith("'") || str.startsWith('"') && str.endsWith('"')) {
    str = str.slice(1, -1);
  }
  return str.replace(/\\x([0-9A-Fa-f]{2})/g, (match, hex) => {
    const code = parseInt(hex, 16);
    return `\\u${code.toString(16).padStart(4, "0")}`;
  }).replace(/\\n/g, "\\u000a").replace(/\\r/g, "\\u000d").replace(/\\t/g, "\\u0009").replace(/\\b/g, "\\u0008").replace(/\\f/g, "\\u000c").replace(/\\v/g, "\\u000b");
};
const xorEncode = (str, key) => {
  return str.split("").map(
    (char, i) => String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
  ).join("");
};
const LOADING_MESSAGE = "Loading...";
const ERROR_MESSAGE = "Something went wrong. Please refresh the page.";
const getEncodedClues = () => {
  const acrossEncoded = Across.map(([num, str]) => [
    num % 10,
    escapeString(xorEncode(str, LOADING_MESSAGE))
  ]);
  const downEncoded = Down.map(([num, str]) => [
    num % 10,
    escapeString(xorEncode(str, LOADING_MESSAGE))
  ]);
  return {
    across: xorEncode(JSON.stringify(acrossEncoded), ERROR_MESSAGE),
    down: xorEncode(JSON.stringify(downEncoded), ERROR_MESSAGE)
  };
};
const lM = "Loading...";
const eM = "Something went wrong. Please refresh the page.";
let A = "";
let D = "";
const ClueComponent = () => {
  const [e, sE] = reactExports.useState(false);
  const [a, sA] = reactExports.useState([lM]);
  const [d, sD] = reactExports.useState([lM]);
  const initialize = () => {
    try {
      const clues = getEncodedClues();
      A = clues.across;
      D = clues.down;
      sE(false);
    } catch (e2) {
      console.error(e2);
      sE(true);
      sA([eM]);
      sD([eM]);
    }
  };
  const gC = reactExports.useCallback(() => {
    if (A === "" || D === "") {
      initialize();
    }
    try {
      sA(JSON.parse(A.split("").map((c, i) => String.fromCharCode(c.charCodeAt(0) ^ eM.charCodeAt(i % eM.length))).join("")).filter(([num]) => num === (/* @__PURE__ */ new Date()).getMinutes() % 10).map(([, c]) => c.split("").map((char, i) => String.fromCharCode(char.charCodeAt(0) ^ lM.charCodeAt(i % lM.length))).join("")).sort());
      sD(JSON.parse(D.split("").map((c, i) => String.fromCharCode(c.charCodeAt(0) ^ eM.charCodeAt(i % eM.length))).join("")).filter(([num]) => num === (/* @__PURE__ */ new Date()).getMinutes() % 10).map(([, c]) => c.split("").map((char, i) => String.fromCharCode(char.charCodeAt(0) ^ lM.charCodeAt(i % lM.length))).join("")).sort());
    } catch (e2) {
      console.error(e2);
      sE(true);
      sA([eM]);
      sD([eM]);
    }
  }, []);
  reactExports.useEffect(() => {
    gC();
    const n = /* @__PURE__ */ new Date();
    const sUNM = (60 - n.getSeconds()) * 1e3;
    let min = null;
    const i = setTimeout(() => {
      gC();
      min = setInterval(() => {
        gC();
      }, 6e4);
    }, sUNM);
    return () => {
      clearTimeout(i);
      if (min) {
        clearInterval(min);
      }
    };
  }, [gC]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClueTable, { items: [{ header: "Across", clues: a }, { header: "Down", clues: d }], ...e && { className: "text-red-500" } }) });
};
const elem = document.getElementById("clue-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(ClueComponent, {}));
} else {
  console.error(
    "Could not mount App because #clue-root was nowhere to be found"
  );
}
//# sourceMappingURL=Dl22OokH.mjs.map
