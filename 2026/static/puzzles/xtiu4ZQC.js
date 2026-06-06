import { j as jsxRuntimeExports, r as reactExports, c as clientExports } from "./Cqdl_uWg.js";
import { b as PostHuntDetails } from "./CPm4UabO.js";
import { T as TextInput } from "./8lrfSi8Z.js";
const LocalAnswerChecker = ({ answer }) => {
  const [value, setValue] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const check = () => {
    const normalize = (s) => s.toUpperCase().replace(/\s/g, "");
    const normalized = normalize(value);
    const normalizedAnswer = normalize(answer);
    if (normalized === normalizedAnswer) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: check,
          className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
          children: "Check"
        }
      )
    ] }),
    result === "correct" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-600 font-bold mt-2", children: "Correct" }),
    result === "incorrect" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-600 font-bold mt-2", children: "Incorrect" })
  ] });
};
const Puzzle = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "puzzle-content-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The Puzzmon would like you to learn more about them by studying their distant relatives, Pokémon. Follow the Pokémon GO route:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Visit M.I.T." }),
      " and fill out this form (see below)."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(PostHuntDetails, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The Google form contained the following text and questions. During the hunt, teams could use the Google form to check their answers." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Not all research happens in the lab! Start the Pokémon GO route "Visit M.I.T." at the Transparent Horizon Gym and see what you encounter along the route. Unless indicated, please stay on route indoors and please pay attention to your surroundings.' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Note: You need to have a Pokémon GO account above level 7. If you are starting with with a completely new account, getting up to Level 7 takes 60 minutes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At the last stop, you will meet Smeargle. What would help Smeargle's career?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Note:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-disc ml-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "All answers should be lowercase" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No space or punctuation for answers with multiple words" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Write out all numbers as words" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-decimal ml-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The beginning of our route starts where a statue of strange specimen has appeared indoors. It has been classified as an example of Stakataka, but despite some resemblances, it looks different from the rest of its kind. Looking down to read its placard, what might this specific Pokemon's name be? (2/13)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LocalAnswerChecker, { answer: "spatiodynamic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Oh no! Before you approach the Ralph Landau PokéStop, you notice there is an Applin infestation. Looking to the left for a black placard, which classroom (first name) may be named after a Applin fan? (4/6)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LocalAnswerChecker, { answer: "gerald" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: `You head into the next building, approaching the Class of 2002 Peace Garden PokéStop. Looking to your right you see classrooms and exhibits about M.I.T. Hacks. Pikachu hops out and points to a picture of a pedestrian walking light, saying, "___'_ ____, ____!" (three words) (4/3'1 4 4)` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LocalAnswerChecker, { answer: "dontwalkchew" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "You keep strolling for some time. Right before you pass the next PokéStop for Killian Court, you see Gholdengo standing next to a glass wall reminiscing about the good old days as well. Specifically, 1993: when tuition was closest to what power of ten? (4/4)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LocalAnswerChecker, { answer: "four" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "You're nearing the end! As you pass one of the last PokéStops commemorating the MIT Seal, you stop to admire the seal in real life. Facing the seal you turn to your right and feel a chill down your spine. Where might you find some Sinistea? (Two words) (13/8'1 4)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LocalAnswerChecker, { answer: "bosworthscafe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Second to last PokéStop! Time to go outside. MIT is full of busy Bidoof trying to find their way around via the Campus Map. Looking to the right of the MIT logo, what cardinal direction is the arrow pointing? (2/5)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LocalAnswerChecker, { answer: "north" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "As you head inside the Student Center to the Weisner Art Gallery PokéStop, you see Smeargle wave from the second floor atrium. It seems eager to show you its artwork, which consists of a few stripes on a wall. Assuming the darker color reads zero, interpreting in binary, spell your answer as a decimal number. (5/9)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LocalAnswerChecker, { answer: "seventeen" })
      ] })
    ] })
  ] }) });
};
const elem = document.getElementById("puzzle-content-root");
if (elem) {
  clientExports.hydrateRoot(elem, /* @__PURE__ */ jsxRuntimeExports.jsx(Puzzle, {}));
} else {
  console.error(
    "Could not mount Puzzle because #puzzle-content-root was nowhere to be found"
  );
}
//# sourceMappingURL=xtiu4ZQC.js.map
