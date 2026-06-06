import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
import { i as useGlobalVolume, R as RotateCcw, T as TwemojiText, j as Play } from "./CPm4UabO.js";
import { c as createLucideIcon, B as Button } from "./CyHnzWK1.js";
import { c as cn } from "./8lrfSi8Z.js";
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz"
    }
  ],
  ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }]
];
const FlaskConical = createLucideIcon("flask-conical", __iconNode$1);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
];
const LockOpen = createLucideIcon("lock-open", __iconNode);
const GAMES = [
  { label: "🍽️", state: 1, action: 0, statIndex: 0 },
  { label: "🍹", state: 2, action: 1, statIndex: 1 },
  { label: "💩", state: 3, action: 2, statIndex: 2 },
  { label: "😴", state: 4, action: 3, statIndex: 3 },
  { label: "🏋", state: 5, action: 4, statIndex: 4 }
];
function KeyboardKey({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-neutral-600 rounded-sm text-white shadow-[0_3px_rgb(0,0,0)] w-fit", children });
}
const MONARCH_OPEN_EVENT = "monarchOpen";
const MONARCH_CLOSE_EVENT = "monarchClose";
const MONARCH_OPEN_QUERY_KEY = "showMonarch";
function TamitgotchiEmulator() {
  const globalVolume = useGlobalVolume();
  const [isMonarchOpen, setIsMonarchOpen] = reactExports.useState(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get(
      MONARCH_OPEN_QUERY_KEY
    ) === "true";
  });
  const [isHydrated, setIsHydrated] = reactExports.useState(false);
  const [loadError, setLoadError] = reactExports.useState(null);
  const [pinStateCb, setPinStateCb] = reactExports.useState();
  const [setGameState, setSetGameState] = reactExports.useState();
  const [unlockAllGames, setUnlockAllGames] = reactExports.useState();
  const [setGameProgressUnlocked, setSetGameProgressUnlocked] = reactExports.useState();
  const [setResearchTaskUnlocked, setSetResearchTaskUnlocked] = reactExports.useState();
  const [addSteps, setAddSteps] = reactExports.useState();
  const [resetEmulatorState, setResetEmulatorState] = reactExports.useState();
  const [pressedPin, setPressedPin] = reactExports.useState(null);
  const emulatorRef = reactExports.useRef(null);
  const enterPressedForEmulatorRef = reactExports.useRef(false);
  const escapePressedForEmulatorRef = reactExports.useRef(false);
  const containerRef = reactExports.useRef(null);
  const [isEggHatched, setIsEggHatched] = reactExports.useState(false);
  function isButtonOrControlFocused() {
    var _a;
    const active = document.activeElement;
    if (!active || active === document.body) return false;
    return active instanceof HTMLButtonElement || active instanceof HTMLAnchorElement || active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement || active instanceof HTMLSelectElement || ((_a = active.getAttribute) == null ? void 0 : _a.call(active, "role")) === "button";
  }
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      window.__taMITgotchiVolume = globalVolume;
    }
  }, [globalVolume]);
  reactExports.useEffect(() => {
    let mounted = true;
    import("./BCUbA1JG.js").then((module) => module.default()).then((result) => {
      if (!mounted) return;
      emulatorRef.current = result;
      setPinStateCb(() => result._setPinState);
      setSetGameState(() => (state) => {
        var _a;
        (_a = result._setGameState) == null ? void 0 : _a.call(result, state);
      });
      setUnlockAllGames(() => () => {
        var _a;
        (_a = result._unlockAllGames) == null ? void 0 : _a.call(result);
      });
      setSetGameProgressUnlocked(() => (action) => {
        var _a;
        (_a = result._setGameProgressUnlocked) == null ? void 0 : _a.call(result, action);
      });
      setSetResearchTaskUnlocked(() => (statIndex) => {
        var _a;
        (_a = result._setResearchTaskUnlocked) == null ? void 0 : _a.call(result, statIndex);
      });
      setAddSteps(() => (steps) => {
        var _a;
        (_a = result._addSteps) == null ? void 0 : _a.call(result, steps);
      });
      setResetEmulatorState(() => () => {
        var _a;
        (_a = result._resetEmulatorState) == null ? void 0 : _a.call(result);
      });
      setIsHydrated(true);
    }).catch((ex) => {
      console.error(ex);
      if (mounted) {
        setLoadError(ex instanceof Error ? ex : new Error(String(ex)));
      }
    });
    return () => {
      mounted = false;
    };
  }, []);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      var _a;
      if ((_a = emulatorRef.current) == null ? void 0 : _a._isEggHatched) {
        setIsEggHatched(emulatorRef.current._isEggHatched() !== 0);
      }
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  reactExports.useEffect(() => {
    const onOpen = () => {
      setIsMonarchOpen(true);
    };
    const onClose = () => {
      setIsMonarchOpen(false);
    };
    window.addEventListener(MONARCH_OPEN_EVENT, onOpen);
    window.addEventListener(MONARCH_CLOSE_EVENT, onClose);
    return () => {
      window.removeEventListener(MONARCH_OPEN_EVENT, onOpen);
      window.removeEventListener(MONARCH_CLOSE_EVENT, onClose);
    };
  }, []);
  reactExports.useEffect(() => {
    const keydownListener = (event) => {
      var _a, _b, _c, _d, _e;
      if (isMonarchOpen) return;
      if (event.key === "w") {
        addSteps == null ? void 0 : addSteps(250);
      } else if (event.key === "1" || event.key === "ArrowLeft") {
        if (isButtonOrControlFocused()) {
          (_a = document.activeElement) == null ? void 0 : _a.blur();
        }
        pinStateCb == null ? void 0 : pinStateCb(0, 1);
      } else if (event.key === "2" || event.key === "ArrowRight") {
        if (isButtonOrControlFocused()) {
          (_b = document.activeElement) == null ? void 0 : _b.blur();
        }
        pinStateCb == null ? void 0 : pinStateCb(1, 1);
      } else if (event.key === "3") {
        if (isButtonOrControlFocused()) {
          (_c = document.activeElement) == null ? void 0 : _c.blur();
        }
        pinStateCb == null ? void 0 : pinStateCb(2, 1);
      } else if (event.key === " ") {
        if (isButtonOrControlFocused()) {
          (_d = document.activeElement) == null ? void 0 : _d.blur();
        }
        pinStateCb == null ? void 0 : pinStateCb(0, 1);
        event.preventDefault();
      } else if (event.key === "Enter") {
        if (!isButtonOrControlFocused()) {
          enterPressedForEmulatorRef.current = true;
          pinStateCb == null ? void 0 : pinStateCb(1, 1);
          event.preventDefault();
        }
      } else if (event.key === "Escape") {
        if (isButtonOrControlFocused()) {
          (_e = document.activeElement) == null ? void 0 : _e.blur();
          event.preventDefault();
        } else {
          escapePressedForEmulatorRef.current = true;
          pinStateCb == null ? void 0 : pinStateCb(2, 1);
          event.preventDefault();
        }
      }
    };
    const keyupListener = (event) => {
      if (isMonarchOpen) return;
      if (event.key === "1" || event.key === "ArrowLeft") {
        pinStateCb == null ? void 0 : pinStateCb(0, 0);
      } else if (event.key === "2" || event.key === "ArrowRight") {
        pinStateCb == null ? void 0 : pinStateCb(1, 0);
      } else if (event.key === "3") {
        pinStateCb == null ? void 0 : pinStateCb(2, 0);
      } else if (event.key === " ") {
        pinStateCb == null ? void 0 : pinStateCb(0, 0);
      } else if (event.key === "Enter") {
        if (enterPressedForEmulatorRef.current) {
          enterPressedForEmulatorRef.current = false;
          pinStateCb == null ? void 0 : pinStateCb(1, 0);
        }
      } else if (event.key === "Escape") {
        if (escapePressedForEmulatorRef.current) {
          escapePressedForEmulatorRef.current = false;
          pinStateCb == null ? void 0 : pinStateCb(2, 0);
        }
      }
    };
    window.addEventListener("keydown", keydownListener);
    window.addEventListener("keyup", keyupListener);
    return () => {
      window.removeEventListener("keydown", keydownListener);
      window.removeEventListener("keyup", keyupListener);
    };
  }, [addSteps, pinStateCb, isMonarchOpen]);
  reactExports.useEffect(() => {
    const handler = (event) => {
      var _a;
      const target = event.target;
      if (!((_a = containerRef.current) == null ? void 0 : _a.contains(target))) return;
      const button = target instanceof HTMLElement ? target.closest("button, [role='button']") : null;
      if (button instanceof HTMLElement) {
        requestAnimationFrame(() => {
          button.blur();
        });
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-center", children: [
        "Warning: Refreshing or leaving the page will reset the emulator state.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Turning on audio is highly recommended."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-lg min-h-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "canvas",
          {
            id: "emulator",
            className: "w-full",
            "aria-label": "TaMITgotchi emulator display"
          }
        ),
        !isHydrated && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black text-white", children: loadError ? "Error loading emulator. Please try refreshing the page." : "Loading..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { id: "emulator-hidden", className: "hidden" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: [0, 1, 2].map((index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: cn(
            "w-8 h-8 bg-emerald-600 rounded-full hover:bg-emerald-500 focus-visible:bg-emerald-500",
            pressedPin === index && "bg-emerald-400"
          ),
          onPointerDown: () => {
            setPressedPin(index);
            pinStateCb == null ? void 0 : pinStateCb(index, 1);
          },
          onPointerUp: () => {
            setPressedPin(null);
            pinStateCb == null ? void 0 : pinStateCb(index, 0);
          },
          onPointerLeave: () => {
            if (pressedPin === index) {
              setPressedPin(null);
              pinStateCb == null ? void 0 : pinStateCb(index, 0);
            }
          },
          "aria-label": index === 0 ? "Left button (press 1 or space)" : index === 1 ? "Middle button (press 2 or enter)" : "Right button (press 3 or escape)"
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center", children: "Keyboard shortcuts" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-2 list-disc ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Walk: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardKey, { children: "w" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Left button: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardKey, { children: "1" }),
          " or",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardKey, { children: "Space" }),
          " or ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardKey, { children: "Left" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Middle button: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardKey, { children: "2" }),
          " or",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardKey, { children: "Enter" }),
          " or ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardKey, { children: "Right" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Right button: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardKey, { children: "3" }),
          " or",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardKey, { children: "Esc" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "p-3 px-4 rounded-lg border-gray-400 border-[3px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: "Manual controls (contains spoilers)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 pb-2 mt-2 border-gray-400 border-dashed border-2 rounded-lg flex flex-col gap-4", children: [
        "These controls were not available during the hunt. They have been added here to allow you to bypass parts of the gameplay for convenience.",
        !isEggHatched && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "The controls will become available after the egg hatches. The walk button is available from the start." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "primary",
                onClick: () => resetEmulatorState == null ? void 0 : resetEmulatorState(),
                disabled: !resetEmulatorState || !isEggHatched,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-5 h-5" }),
                  " Reset to beginning"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "primary",
                onClick: () => unlockAllGames == null ? void 0 : unlockAllGames(),
                disabled: !unlockAllGames || !isEggHatched,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LockOpen, { className: "w-5 h-5" }),
                  " Unlock all dances"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_auto_auto_auto] gap-x-2 gap-y-2 items-center py-2", children: [
            GAMES.flatMap(({ label, state, action, statIndex }) => [
              /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "col-span-4 m-0 bg-black" }, `hr-${state}`),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TwemojiText, { className: "h-6 w-6", children: label }) }, `${state}-label`),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "primary",
                  onClick: () => setGameState == null ? void 0 : setGameState(state),
                  disabled: !setGameState || !isEggHatched,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-sm:hidden", children: "Play" })
                  ]
                },
                `${state}-play`
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "primary",
                  onClick: () => setGameProgressUnlocked == null ? void 0 : setGameProgressUnlocked(action),
                  disabled: !setGameProgressUnlocked || !isEggHatched,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LockOpen, { className: "w-4 h-4" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-sm:hidden", children: "Unlock dance" })
                  ]
                },
                `${state}-unlock`
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "primary",
                  onClick: () => setResearchTaskUnlocked == null ? void 0 : setResearchTaskUnlocked(statIndex),
                  disabled: !setResearchTaskUnlocked || !isEggHatched,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-sm:hidden", children: "Complete research goal" })
                  ]
                },
                `${state}-research`
              )
            ]),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "col-span-4 m-0 bg-black" }, "hr-steps"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TwemojiText, { className: "h-6 w-6", children: "👣" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "primary",
                onClick: () => addSteps == null ? void 0 : addSteps(250),
                disabled: !addSteps,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-sm:hidden", children: "Walk" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "primary",
                onClick: () => setResearchTaskUnlocked == null ? void 0 : setResearchTaskUnlocked(5),
                disabled: !setResearchTaskUnlocked || !isEggHatched,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-sm:hidden", children: "Complete research goal" })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
const elem = document.getElementById("emulator-content-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(TamitgotchiEmulator, {}));
} else {
  console.error(
    "Could not mount TamitgotchiEmulator because #emulator-content-root was nowhere to be found"
  );
}
//# sourceMappingURL=Dl3fhZsy.js.map
