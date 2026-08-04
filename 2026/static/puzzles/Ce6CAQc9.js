import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { m as markLocalTaskSolved, j as Play, R as RotateCcw, k as Trophy } from "./CPm4UabO.js";
const dog = "/2026/static/puzzles/assets/5b1947d1c5247394.png";
const WINNING_SCORE = 30;
const RUB_THRESHOLD = 30;
const RUB_SENSITIVITY = 1.5;
const SPEED_INCREASE_PER_POINT = 50;
const MAX_SPEED_REDUCTION = 2e3;
const TIMER_UPDATE_INTERVAL_MS = 50;
const BOWL_X = 340;
const BOWL_Y = 280;
const COLLISION_RADIUS = 60;
const HIGHLIGHT_RADIUS = 50;
const COMMANDS = [
  {
    id: "boop",
    text: "Boop It!",
    color: "text-pink-500",
    instruction: "Tap the nose!"
  },
  {
    id: "scritch",
    text: "Scritch It!",
    color: "text-purple-500",
    instruction: "Scritch the ears!"
  },
  {
    id: "pet",
    text: "Pet It!",
    color: "text-blue-500",
    instruction: "Pet the dog!"
  },
  {
    id: "belly",
    text: "Belly Rub It!",
    color: "text-orange-500",
    instruction: "Rub the belly!"
  },
  {
    id: "feed",
    text: "Feed It!",
    color: "text-green-500",
    instruction: "Drag food to bowl!"
  }
];
const BoopItGame = () => {
  const [gameState, setGameState] = reactExports.useState("menu");
  const [score, setScore] = reactExports.useState(0);
  const [timeLeft, setTimeLeft] = reactExports.useState(100);
  const [currentCommand, setCurrentCommand] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState("");
  const [rubProgress, setRubProgress] = reactExports.useState(0);
  const [dragPosition, setDragPosition] = reactExports.useState({ x: 0, y: 0 });
  const [isDraggingFood, setIsDraggingFood] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const maxTimeRef = reactExports.useRef(3e3);
  const scoreRef = reactExports.useRef(score);
  scoreRef.current = score;
  const rubProcessedRef = reactExports.useRef(false);
  const inFeedbackDelayRef = reactExports.useRef(false);
  const handleFoodDragEndRef = reactExports.useRef(null);
  const nextCommandRef = reactExports.useRef(null);
  const svgRef = reactExports.useRef(null);
  const dragPositionRef = reactExports.useRef(dragPosition);
  const startGame = () => {
    setScore(0);
    setGameState("playing");
    setFeedback("");
    maxTimeRef.current = 3e3;
    nextCommand();
  };
  const gameOver = reactExports.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const currentScore = scoreRef.current;
    if (currentScore >= WINNING_SCORE) {
      setGameState("win");
      markLocalTaskSolved("boop_it");
    } else {
      setGameState("gameover");
    }
    setRubProgress(0);
    setDragPosition({ x: 0, y: 0 });
    setIsDraggingFood(false);
    rubProcessedRef.current = false;
    setCurrentCommand(null);
  }, []);
  const nextCommand = reactExports.useCallback(() => {
    setRubProgress(0);
    setDragPosition({ x: 0, y: 0 });
    setIsDraggingFood(false);
    rubProcessedRef.current = false;
    inFeedbackDelayRef.current = false;
    const availableCommands = currentCommand ? COMMANDS.filter((cmd) => cmd.id !== currentCommand.id) : COMMANDS;
    const nextCmd = availableCommands[Math.floor(Math.random() * availableCommands.length)];
    setCurrentCommand(nextCmd);
    const speedUp = Math.min(
      MAX_SPEED_REDUCTION,
      score * SPEED_INCREASE_PER_POINT
    );
    const newMaxTime = Math.max(1e3, 3e3 - speedUp);
    maxTimeRef.current = newMaxTime;
    setTimeLeft(100);
    if (timerRef.current) clearInterval(timerRef.current);
    const startTime = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentLeft = 100 - elapsed / newMaxTime * 100;
      if (percentLeft <= 0) {
        setTimeLeft(0);
        if (timerRef.current) clearInterval(timerRef.current);
        gameOver();
      } else {
        setTimeLeft(percentLeft);
      }
    }, TIMER_UPDATE_INTERVAL_MS);
  }, [currentCommand, score, gameOver]);
  nextCommandRef.current = nextCommand;
  const success = reactExports.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const newScore = scoreRef.current + 1;
    setScore(newScore);
    setFeedback("Good Dog!");
    inFeedbackDelayRef.current = true;
    setTimeout(() => {
      var _a;
      setFeedback("");
      (_a = nextCommandRef.current) == null ? void 0 : _a.call(nextCommandRef);
    }, 200);
  }, []);
  const handleBoop = () => {
    if (gameState !== "playing" || (currentCommand == null ? void 0 : currentCommand.id) !== "boop") return;
    if (inFeedbackDelayRef.current) return;
    success();
  };
  const handleRubMove = (e, targetId) => {
    if (gameState !== "playing" || (currentCommand == null ? void 0 : currentCommand.id) !== targetId) return;
    if (e.buttons !== 1) return;
    if (rubProcessedRef.current) return;
    if (inFeedbackDelayRef.current) return;
    setRubProgress((prev) => {
      const newProgress = prev + RUB_SENSITIVITY;
      if (newProgress >= RUB_THRESHOLD) {
        rubProcessedRef.current = true;
        setTimeout(() => {
          success();
        }, 100);
        return RUB_THRESHOLD;
      }
      return newProgress;
    });
  };
  const handleFoodDragStart = (e) => {
    if (gameState !== "playing" || (currentCommand == null ? void 0 : currentCommand.id) !== "feed") return;
    e.preventDefault();
    setIsDraggingFood(true);
  };
  const handleFoodDragMove = (e) => {
    if (!isDraggingFood) return;
    const svg = svgRef.current;
    if (!svg) return;
    const pt = svg.createSVGPoint();
    if ("touches" in e) {
      if (e.touches.length === 0) return;
      pt.x = e.touches[0].clientX;
      pt.y = e.touches[0].clientY;
    } else {
      pt.x = e.clientX;
      pt.y = e.clientY;
    }
    const screenCTM = svg.getScreenCTM();
    if (!screenCTM) return;
    const svgP = pt.matrixTransform(screenCTM.inverse());
    setDragPosition({ x: svgP.x, y: svgP.y });
  };
  reactExports.useEffect(() => {
    dragPositionRef.current = dragPosition;
  }, [dragPosition]);
  reactExports.useEffect(() => {
    handleFoodDragEndRef.current = () => {
      if (!isDraggingFood) return;
      setIsDraggingFood(false);
      if (inFeedbackDelayRef.current) {
        setDragPosition({ x: 0, y: 0 });
        return;
      }
      const currentDragPosition = dragPositionRef.current;
      const dist = Math.sqrt(
        Math.pow(currentDragPosition.x - BOWL_X, 2) + Math.pow(currentDragPosition.y - BOWL_Y, 2)
      );
      if (dist < COLLISION_RADIUS) {
        success();
      } else {
        setDragPosition({ x: 0, y: 0 });
      }
    };
  }, [isDraggingFood, success]);
  reactExports.useEffect(() => {
    const handleEvent = () => {
      var _a;
      (_a = handleFoodDragEndRef.current) == null ? void 0 : _a.call(handleFoodDragEndRef);
    };
    window.addEventListener("mouseup", handleEvent);
    window.addEventListener("touchend", handleEvent);
    return () => {
      window.removeEventListener("mouseup", handleEvent);
      window.removeEventListener("touchend", handleEvent);
    };
  }, []);
  const getActiveStyle = (id) => {
    if (gameState !== "playing") return "fill-transparent opacity-0";
    if ((currentCommand == null ? void 0 : currentCommand.id) === id)
      return "fill-yellow-400 opacity-40 animate-pulse cursor-pointer";
    return "fill-transparent cursor-default";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center h-full w-full bg-slate-900 text-white font-sans overflow-hidden select-none touch-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md px-4 py-4 flex justify-between items-center z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 uppercase tracking-widest", children: "Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold font-mono", children: score })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center", children: gameState === "playing" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `text-2xl font-black tracking-tighter uppercase transition-all duration-100 transform ${currentCommand ? "scale-110" : "scale-100"} ${(currentCommand == null ? void 0 : currentCommand.color) || "text-white"}`,
          children: feedback || (currentCommand == null ? void 0 : currentCommand.text)
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black tracking-tighter text-yellow-500", children: "BOOP IT" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 uppercase tracking-widest", children: "Target" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold font-mono text-yellow-500", children: WINNING_SCORE })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md px-4 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `h-full ${timeLeft < 30 ? "bg-red-500" : "bg-green-500"}`,
          style: { width: `${timeLeft}%` }
        }
      ) }),
      gameState === "playing" && currentCommand && ["scritch", "pet", "belly"].includes(currentCommand.id) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full bg-purple-500 transition-all duration-75",
            style: { width: `${rubProgress / RUB_THRESHOLD * 100}%` }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-purple-400 text-xs mt-1", children: "Progress" })
      ] }),
      gameState === "playing" && currentCommand && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-slate-400 text-sm mt-2 animate-bounce", children: currentCommand.instruction })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md aspect-[5/4] bg-slate-800/50 rounded-3xl border-4 border-slate-700 shadow-2xl overflow-hidden m-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          id: "game-canvas",
          ref: svgRef,
          viewBox: "0 0 400 320",
          className: "w-full h-full cursor-crosshair touch-none",
          onMouseMove: (e) => {
            if (isDraggingFood) handleFoodDragMove(e);
          },
          onTouchMove: (e) => {
            if (isDraggingFood) handleFoodDragMove(e);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "rect",
              {
                x: "0",
                y: "160",
                width: "400",
                height: "160",
                className: "fill-slate-700"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "image",
              {
                href: dog,
                x: "40",
                y: "40",
                width: "280",
                height: "280",
                preserveAspectRatio: "xMidYMid meet",
                "aria-label": "Dog silhouette"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(0, 0)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "ellipse",
              {
                cx: "165",
                cy: "160",
                rx: "70",
                ry: "20",
                className: getActiveStyle("pet"),
                role: "button",
                "aria-label": "Pet the dog's back",
                onPointerDown: (e) => {
                  handleRubMove(e, "pet");
                },
                onPointerMove: (e) => {
                  handleRubMove(e, "pet");
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(0, 0)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "ellipse",
              {
                cx: "170",
                cy: "210",
                rx: "60",
                ry: "18",
                className: getActiveStyle("belly"),
                role: "button",
                "aria-label": "Rub the dog's belly",
                onPointerDown: (e) => {
                  handleRubMove(e, "belly");
                },
                onPointerMove: (e) => {
                  handleRubMove(e, "belly");
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(0, 0)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "ellipse",
              {
                cx: "270",
                cy: "130",
                rx: "15",
                ry: "30",
                className: getActiveStyle("scritch"),
                role: "button",
                "aria-label": "Scritch the dog's ears",
                onPointerDown: (e) => {
                  handleRubMove(e, "scritch");
                },
                onPointerMove: (e) => {
                  handleRubMove(e, "scritch");
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(0, 0)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: "315",
                cy: "130",
                r: "20",
                className: getActiveStyle("boop"),
                role: "button",
                "aria-label": "Boop the dog's nose",
                onClick: handleBoop
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${BOWL_X}, ${BOWL_Y - 20})`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "ellipse",
                {
                  cx: "0",
                  cy: "20",
                  rx: "40",
                  ry: "15",
                  className: "fill-slate-800 opacity-50"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M -30 20 L -35 0 L 35 0 L 30 20 Z",
                  className: "fill-red-600"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "0", cy: "0", rx: "35", ry: "10", className: "fill-red-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "ellipse",
                {
                  cx: "0",
                  cy: "2",
                  rx: "30",
                  ry: "8",
                  className: "fill-amber-900"
                }
              ),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  r: HIGHLIGHT_RADIUS,
                  className: `${(currentCommand == null ? void 0 : currentCommand.id) === "feed" ? "stroke-green-400 stroke-2 stroke-dashed opacity-50" : "opacity-0"} fill-transparent pointer-events-none`
                }
              )
            ] }),
            (currentCommand == null ? void 0 : currentCommand.id) === "feed" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "g",
              {
                transform: `translate(${isDraggingFood ? dragPosition.x : 60}, ${isDraggingFood ? dragPosition.y : 290})`,
                className: "cursor-grab active:cursor-grabbing",
                role: "button",
                "aria-label": "Drag food to the dog's bowl",
                onMouseDown: handleFoodDragStart,
                onTouchStart: handleFoodDragStart,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "rect",
                    {
                      x: "-20",
                      y: "-30",
                      width: "40",
                      height: "50",
                      rx: "5",
                      className: "fill-green-600 stroke-white stroke-2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "text",
                    {
                      x: "0",
                      y: "0",
                      textAnchor: "middle",
                      className: "fill-white text-xs font-bold pointer-events-none",
                      children: "FOOD"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "25", className: "fill-transparent" })
                ]
              }
            )
          ]
        }
      ),
      gameState === "menu" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-slate-900/80 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-black text-yellow-500 mb-2 tracking-tighter transform-gpu drop-shadow-lg", children: "BOOP IT!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 mb-8 max-w-xs", children: "Listen to the commands and react fast. Don't make the puppy sad!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: startGame,
            className: "group relative px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black text-xl rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-6 h-6 fill-current" }),
              "PLAY NOW",
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-shine" }) })
            ]
          }
        )
      ] }),
      gameState === "gameover" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center p-6 text-center backdrop-blur-md z-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black text-white mb-2", children: "GAME OVER" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-800 p-6 rounded-2xl border border-slate-700 mb-8 w-full max-w-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-white", children: score })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Target" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-yellow-500", children: WINNING_SCORE })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: startGame,
            className: "px-8 py-4 bg-white hover:bg-slate-200 text-slate-900 font-black text-xl rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-6 h-6" }),
              "TRY AGAIN"
            ]
          }
        )
      ] }),
      gameState === "win" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center p-6 text-center backdrop-blur-md z-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-16 h-16 text-yellow-500 mb-4 animate-bounce" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black text-yellow-500 mb-2", children: "YOU WIN!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-800 p-6 rounded-2xl border border-yellow-500 mb-8 w-full max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Final Score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-yellow-500", children: score })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: startGame,
            className: "px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black text-xl rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-6 h-6" }),
              "PLAY AGAIN"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes shine {
            100% { transform: translateX(100%); }
        }
        .animate-shine {
            animation: shine 0.5s;
        }
      ` })
  ] });
};
const boop_it_elem = document.getElementById("boop-it-root");
if (boop_it_elem) {
  const root = clientExports.createRoot(boop_it_elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(BoopItGame, {}));
} else {
  console.error(
    "Could not mount because #boop-it-root was nowhere to be found"
  );
}
//# sourceMappingURL=Ce6CAQc9.js.map
