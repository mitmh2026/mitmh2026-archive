import { c as clientExports, j as jsxRuntimeExports } from "./Cqdl_uWg.mjs";
import { Q as QuizTaskComponent } from "./CPm4UabO.mjs";
import { M as MONSTER_DATA } from "./C6EA9rzd.mjs";
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
const allQuestions = Object.values(MONSTER_DATA).flatMap((zone) => Object.values(zone)).filter(
  (monster) => Boolean(monster.silhouetteSrc)
).map((monster, index) => ({
  id: index,
  image: monster.silhouetteSrc,
  answer: monster.name
}));
const possibleAnswers = [
  ...new Set(
    allQuestions.map((q) => q.answer).filter((a) => Boolean(a))
  )
].sort();
const NUMBER_OF_QUESTIONS = 10;
const getQuestions = () => shuffle(allQuestions).slice(0, NUMBER_OF_QUESTIONS);
const rootEl = document.getElementById("whos-that-puzzmon-root");
if (rootEl) {
  const root = clientExports.createRoot(rootEl);
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizTaskComponent,
      {
        taskSlug: "whos_that_puzzmon",
        localQuestions: getQuestions,
        quizInstructions: "Name the Puzzmon shown",
        refreshTimeInSeconds: 10,
        numberOfQuestions: NUMBER_OF_QUESTIONS,
        possibleAnswers
      }
    )
  );
} else {
  console.error(
    "Could not mount Who's That Puzzmon: #whos-that-puzzmon-root not found"
  );
}
//# sourceMappingURL=D-_7VUW4.mjs.map
