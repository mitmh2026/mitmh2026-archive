import { j as jsxRuntimeExports, r as reactExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { A as AuthorsNote, F as FlavorText, a as PuzzleInfoBox, b as PostHuntDetails, I as ImageGallery } from "./CPm4UabO.mjs";
import { T as TextInput, B as ButtonSecondary } from "./8lrfSi8Z.mjs";
const infinite_loophole = "/static/puzzles/assets/596b5bbba0d2ed11.png";
const puzzle_dactylinion = "/static/puzzles/assets/fdc4f489602b1634.png";
const puzzle_dukdukgoop = "/static/puzzles/assets/fb702b9b34fafd6c.png";
const puzzle_featherbrain = "/static/puzzles/assets/359dae35f75cb06f.png";
const puzzle_hepanchart = "/static/puzzles/assets/7abf798cda413d1c.png";
const puzzle_humidefta = "/static/puzzles/assets/c3e45bc2bb82c780.png";
const puzzle_kneedle = "/static/puzzles/assets/372787cce60378f6.png";
const puzzle_knightbulb = "/static/puzzles/assets/f98b49039cd13e33.png";
const puzzle_perkepsu = "/static/puzzles/assets/f1bba8fdf6b210a1.png";
const puzzle_pointdexter = "/static/puzzles/assets/907fd875384a9cf5.png";
const puzzle_sheriff_shaffour = "/static/puzzles/assets/80004c4cfdc2ef5b.png";
const puzzle_steve = "/static/puzzles/assets/d082a2afc0fd3dc2.png";
const puzzle_ttattell = "/static/puzzles/assets/7bfaab62d57032ae.png";
const PUZZMON_ANSWERS = {
  Dactylinion: ["1986/6/22"],
  Dukdukgoop: ["'26 Dec 25", "2026/12/25", "26/12/25"],
  Featherbrain: ["☕"],
  Hepanchart: ["LIFE UNDER THE SUN"],
  Humidefta: ["NEWBIES"],
  Kneedle: ["🕯️"],
  Knightbulb: ["IT'S LIT"],
  Perkepsu: ["PINK"],
  Pointdexter: ["WATER"],
  "Sheriff Shaffour": ["YELLOW"],
  Steve: ["1"],
  Ttattell: ["15"]
};
const LocalAnswerChecker = ({ puzzmon }) => {
  const [value, setValue] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const check = () => {
    const normalize = (s) => s.toUpperCase().replace(/\s/g, "").replace(/^['/]+|['/]+$/g, "");
    const normalized = normalize(value);
    const correctAnswers = PUZZMON_ANSWERS[puzzmon].map(normalize);
    if (correctAnswers.includes(normalized)) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      className: "flex items-center gap-2 mb-4",
      onSubmit: (e) => {
        e.preventDefault();
        check();
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-40 font-bold", children: [
          puzzmon,
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextInput,
          {
            value,
            onChange: (e) => {
              setValue(e.target.value);
              setResult(null);
            },
            placeholder: "Enter answer",
            className: "flex-grow"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonSecondary, { type: "submit", children: "Check" }),
        result === "correct" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold ml-2", children: "Correct!" }),
        result === "incorrect" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-bold ml-2", children: "Incorrect" })
      ]
    }
  );
};
const Puzzle = ({ teamState }) => {
  const isArchival = teamState.gates_satisfied.includes("archival_mode");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "puzzle-content-root", children: [
    isArchival && /* @__PURE__ */ jsxRuntimeExports.jsx(AuthorsNote, { children: "This finale included an in-person runaround. The archival site provides the original materials and local answer checkers below; the live interaction is no longer available." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FlavorText, { children: "Congratulations on proving yourselves to the 7 Keepers, unifying the Kingdom of the Puzzmon, and discovering the secrets of the artifacts!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PuzzleInfoBox, { copyable: true, children: "Please wait for a phone call to schedule your final mission. Bring at least one laptop (although more than one may be useful), as well as pens or pencils and something to write on (e.g. clipboards). It is also recommended to connect your mobile device to campus wifi before departing. There will be some walking involved but you will not need to go outside." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(PostHuntDetails, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Members of hunt staff went to the team's headquarters to inform them that a potent",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-black text-black hover:bg-transparent hover:text-inherit transition-colors cursor-default", children: "INFINITE LOOPHOLE" }),
        " ",
        "had been discovered somewhere on campus. The team was shown the following photo and asked if they knew where it was on campus."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: infinite_loophole, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: infinite_loophole, alt: "Infinite Loophole" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "After identifying the photo as part of",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "http://borderline.mit.edu/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "The Borderline"
          }
        ),
        " ",
        "exhibit in the MIT tunnels below Building 66, the team was taken to the location. At The Borderline, teams were informed that this part of the puzzle was constructed by the Keeper of Creation and the Keeper of Mysteries. They sent Puzzmon into different universes and created puzzles that resolve to the different data types found in Terminus — two of each data type. Teams had to use the murals in The Borderline to complete all 12 puzzles below. The answers were checked by a member of the hunt staff. Once the team had all 12 answers, they were told that they could proceed to the final room to close the portal. Images of the 12 Borderline puzzles and answer checkers can be found below."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "When they arrived at the final room, they were told to submit LET'S CLOSE THIS PORTAL as the answer to this puzzle to unlock the remainder of the final puzzle." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ImageGallery,
        {
          images: [
            { src: puzzle_dactylinion, alt: "Dactylinion Puzzle" },
            { src: puzzle_dukdukgoop, alt: "Dukdukgoop Puzzle" },
            { src: puzzle_featherbrain, alt: "Featherbrain Puzzle" },
            { src: puzzle_hepanchart, alt: "Hepanchart Puzzle" },
            { src: puzzle_humidefta, alt: "Humidefta Puzzle" },
            { src: puzzle_kneedle, alt: "Kneedle Puzzle" },
            { src: puzzle_knightbulb, alt: "Knightbulb Puzzle" },
            { src: puzzle_perkepsu, alt: "Perkepsu Puzzle" },
            { src: puzzle_pointdexter, alt: "Pointdexter Puzzle" },
            { src: puzzle_sheriff_shaffour, alt: "Sheriff Shaffour Puzzle" },
            { src: puzzle_steve, alt: "Steve Puzzle" },
            { src: puzzle_ttattell, alt: "Ttattell Puzzle" }
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 border-b-2 border-gray-200 pb-2", children: "Puzzmon Mural Puzzle Answer Checkers" }),
        Object.keys(PUZZMON_ANSWERS).map((puzzmon) => /* @__PURE__ */ jsxRuntimeExports.jsx(LocalAnswerChecker, { puzzmon }, puzzmon))
      ] })
    ] })
  ] });
};
const elem = document.getElementById("puzzle-content-root");
if (elem) {
  const { initialTeamState } = window;
  if (!initialTeamState) {
    console.error(
      "Could not mount Puzzle because initialTeamState was not found."
    );
  } else {
    clientExports.hydrateRoot(elem, /* @__PURE__ */ jsxRuntimeExports.jsx(Puzzle, { teamState: initialTeamState }));
  }
} else {
  console.error(
    "Could not mount Puzzle because #puzzle-content-root was nowhere to be found"
  );
}
//# sourceMappingURL=BnfVQ3Pd.mjs.map
