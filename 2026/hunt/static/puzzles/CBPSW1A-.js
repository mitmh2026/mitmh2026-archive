import { c as clientExports, j as jsxRuntimeExports } from "./Cqdl_uWg.js";
import { c as QATaskComponent } from "./CPm4UabO.js";
import { M as MONSTER_DATA } from "./C6EA9rzd.js";
const ALL_PUZZMON_NAMES = Object.values(MONSTER_DATA).flatMap(
  (zone) => Object.values(zone).map((monster) => monster.name)
);
function fillTemplate(template, values) {
  return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
    return values[key] !== void 0 ? values[key] : match;
  });
}
function toTitleCase(str) {
  return str.trim().toLowerCase().replace(/(?:^|[\s-_/]+)\S/g, (match) => match.toUpperCase());
}
function getAnswer(id) {
  const answer = PUZZMON_SHOWCASE_TASK.answer_options.find(
    (answer2) => answer2.id === id
  );
  if (answer === void 0) {
    throw new Error(`Answer with id ${id} not found.`);
  }
  return answer;
}
function getBestPuzzmons(puzzmonList, scoringFunction) {
  if (puzzmonList.length === 0) {
    return [];
  }
  const scoredPuzzmons = puzzmonList.map((puzzmon) => ({
    puzzmon,
    score: scoringFunction(puzzmon)
  })).filter(
    (entry) => entry.score !== void 0
  );
  if (scoredPuzzmons.length === 0) {
    return [];
  }
  const maxScore = scoredPuzzmons.reduce(
    (max, { score }) => score > max ? score : max,
    scoredPuzzmons[0].score
  );
  return scoredPuzzmons.filter(({ score }) => score === maxScore).map(({ puzzmon }) => puzzmon);
}
const PUZZMON_SHOWCASE_TASK = {
  answer_options: [
    {
      id: "zero_one_two_three",
      properties: {},
      task_content: {
        flavor_text: "Showcase Category: Z-E-R-O, O-N-E, T-W-O, T-H-R-E-E, ...",
        scoring_function: (puzzmon) => {
          const letterToPoints = {
            a: BigInt(1e3),
            b: BigInt(1e9),
            c: BigInt("1000000000000000000000000000"),
            d: BigInt(100),
            e: BigInt(0),
            f: BigInt(4),
            g: BigInt(8),
            h: BigInt(3),
            i: BigInt(5),
            j: void 0,
            k: void 0,
            l: BigInt(11),
            m: BigInt(1e6),
            n: BigInt(1),
            o: BigInt(0),
            p: BigInt("1000000000000000000000000"),
            q: BigInt("1000000000000000"),
            r: BigInt(0),
            s: BigInt(6),
            t: BigInt(2),
            u: BigInt(4),
            v: BigInt(5),
            w: BigInt(2),
            x: BigInt(6),
            y: BigInt(20),
            z: BigInt(0)
          };
          if (typeof puzzmon !== "string") {
            return void 0;
          }
          let score = BigInt(0);
          for (const c of puzzmon) {
            const char = c.toLowerCase();
            if (char in letterToPoints) {
              const points = letterToPoints[char];
              if (points === void 0) {
                return void 0;
              }
              score += points;
            }
          }
          return score;
        }
      }
    }
  ],
  questions: [
    {
      id: "puzzmon",
      question_template: "Pick a Puzzmon: {{Puzzmon}}",
      cost: 30,
      question_content: {
        Puzzmon: ALL_PUZZMON_NAMES
        // Populated locally
      },
      response_function: (id, parameters) => {
        var _a, _b;
        const answer_template = "{{Puzzmon}} scored {{conclusion}} points.";
        const answer = getAnswer(id);
        const score = (_b = (_a = answer.task_content) == null ? void 0 : _a.scoring_function) == null ? void 0 : _b.call(
          _a,
          parameters.Puzzmon
        );
        if (score === void 0) {
          return {
            message: fillTemplate("{{Puzzmon}} cannot be scored.", {
              Puzzmon: parameters.Puzzmon
            })
          };
        }
        return {
          message: fillTemplate(answer_template, {
            conclusion: score.toString(),
            Puzzmon: parameters.Puzzmon
          })
        };
      }
    }
  ],
  validate_submission: (id, submission) => {
    var _a;
    const answer = getAnswer(id);
    const scoringFn = (_a = answer.task_content) == null ? void 0 : _a.scoring_function;
    if (!scoringFn) return false;
    const bestPuzzmons = getBestPuzzmons(ALL_PUZZMON_NAMES, scoringFn);
    return bestPuzzmons.includes(toTitleCase(submission));
  },
  validation_cooldown: 60,
  retry_cooldown: 0
};
const PuzzmonShowcaseTaskApp = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    QATaskComponent,
    {
      taskSlug: "puzzmon_showcase",
      submissionSubtext: "Nominate the winning Puzzmon",
      completionButtonText: "You picked a winner!",
      localTask: PUZZMON_SHOWCASE_TASK
    }
  );
};
const showcase_elem = document.getElementById("puzzmon-showcase-root");
if (showcase_elem) {
  const root = clientExports.createRoot(showcase_elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(PuzzmonShowcaseTaskApp, {}));
} else {
  console.error(
    "Could not mount because #puzzmon-showcase-root was nowhere to be found"
  );
}
//# sourceMappingURL=CBPSW1A-.js.map
