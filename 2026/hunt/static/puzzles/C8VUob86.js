import { R as React, j as jsxRuntimeExports, r as reactExports, c as clientExports } from "./Cqdl_uWg.js";
import { m as markLocalTaskSolved } from "./CPm4UabO.js";
const bird_img = "/2026/hunt/static/puzzles/assets/a01f5ca34ff34424.png";
const flap_sound = "/2026/hunt/static/puzzles/assets/5b8fef70a0b569fa.wav";
const death_sound = "/2026/hunt/static/puzzles/assets/476cf722e0fa624f.mp3";
const pipe_sound = "/2026/hunt/static/puzzles/assets/feb4af3817710905.wav";
const sound_off_icon = "/2026/hunt/static/puzzles/assets/515c5a83d7f71ab4.svg";
const sound_on_icon = "/2026/hunt/static/puzzles/assets/72d492027159d137.svg";
const BIRD_IMAGE_PATH = bird_img;
const FLAP_SOUND_PATH = flap_sound;
const DEATH_SOUND_PATH = death_sound;
const PIPE_SOUND_PATH = pipe_sound;
const SOUND_ON_ICON = sound_on_icon;
const SOUND_OFF_ICON = sound_off_icon;
const DEBUG_MODE = false;
const GAME_WIDTH = 480;
const GAME_HEIGHT = 640;
const BIRD_WIDTH = 102;
const BIRD_HEIGHT = 72;
const BIRD_LEFT_POSITION = 80;
const JUMP_VELOCITY = -10;
const GRAVITY = 0.6;
const MAX_FALL_VELOCITY = 12;
const PIPE_WIDTH = 70;
const PIPE_GAP = 160;
const PIPE_SPEED = 5;
const PIPE_SPAWN_INTERVAL = 1.2;
const PIPE_COLOR = "#91db62ff";
const PIPE_BORDER_COLOR = "#2d6016";
const WINNING_SCORE = 10;
const BIRD_HITBOX_WIDTH_REDUCTION = 0.495;
const BIRD_HITBOX_HEIGHT_REDUCTION = 0.4;
const BIRD_HITBOX_X_OFFSET = 5;
const BIRD_HITBOX_Y_OFFSET = 12;
const PIPE_HITBOX_REDUCTION = 0.2;
const gameContainerStyle = {
  position: "relative",
  width: `${GAME_WIDTH}px`,
  height: `${GAME_HEIGHT}px`,
  backgroundImage: "linear-gradient(to bottom, #70c5ce 0%, #a6e6ef 50%, #70c5ce 100%)",
  overflow: "hidden",
  margin: "20px auto",
  border: "4.5px solid #000",
  color: "white",
  textShadow: "2px 2px 0px #000",
  cursor: "pointer",
  outline: "none",
  imageRendering: "pixelated"
};
const birdStyle = (top, rotation) => ({
  position: "absolute",
  top: `${top}px`,
  left: `${BIRD_LEFT_POSITION}px`,
  width: `${BIRD_WIDTH}px`,
  height: `${BIRD_HEIGHT}px`,
  backgroundImage: `url(${BIRD_IMAGE_PATH})`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  transition: "transform 0.1s linear",
  transform: `rotate(${rotation}deg)`,
  zIndex: 10
});
const pipeBaseStyle = {
  position: "absolute",
  width: `${PIPE_WIDTH}px`,
  background: `linear-gradient(to right,
    #6ba84a 0%, #6ba84a 30%, ${PIPE_COLOR} 40%,  #b3f07a 100%
  )`,
  borderLeft: `4.5px solid ${PIPE_BORDER_COLOR}`,
  borderRight: `4.5px solid ${PIPE_BORDER_COLOR}`,
  boxSizing: "border-box",
  zIndex: 5
};
const scoreStyle = {
  position: "absolute",
  top: "20px",
  width: "100%",
  textAlign: "center",
  fontSize: "48px",
  fontWeight: "bold",
  zIndex: 20,
  WebkitTextStroke: "2px black"
};
const soundToggleStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: 50,
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0px",
  userSelect: "none",
  pointerEvents: "auto"
};
const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  zIndex: 30,
  pointerEvents: "none"
};
const generatePipe = () => ({
  id: Date.now() + Math.random(),
  x: GAME_WIDTH,
  gapY: Math.floor(Math.random() * (GAME_HEIGHT - PIPE_GAP - 200)) + 100
});
const Bird = React.memo(
  ({ top, rotation }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: birdStyle(top, rotation) });
  }
);
Bird.displayName = "Bird";
const PipePair = React.memo(({ pipe }) => {
  const topPipeHeight = pipe.gapY - PIPE_GAP / 2;
  const bottomPipeTop = pipe.gapY + PIPE_GAP / 2;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          ...pipeBaseStyle,
          left: `${pipe.x}px`,
          top: 0,
          height: `${topPipeHeight}px`,
          borderBottom: `4.5px solid ${PIPE_BORDER_COLOR}`
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          ...pipeBaseStyle,
          left: `${pipe.x}px`,
          top: `${bottomPipeTop}px`,
          bottom: 0,
          borderTop: `4.5px solid ${PIPE_BORDER_COLOR}`
        }
      }
    )
  ] });
});
PipePair.displayName = "PipePair";
const FowlBounceGame = () => {
  const [gameState, setGameState] = reactExports.useState("waiting");
  const [birdPosition, setBirdPosition] = reactExports.useState(
    GAME_HEIGHT / 2 - BIRD_HEIGHT / 2
  );
  const [pipes, setPipes] = reactExports.useState([]);
  const [score, setScore] = reactExports.useState(0);
  const [fps, setFps] = reactExports.useState(0);
  const [showFps, setShowFps] = reactExports.useState(false);
  const [showHitboxes, setShowHitboxes] = reactExports.useState(false);
  const [targetFps, setTargetFps] = reactExports.useState(60);
  const [birdVelocity, setBirdVelocity] = reactExports.useState(0);
  const [soundEnabled, setSoundEnabled] = reactExports.useState(true);
  const [deathRotation, setDeathRotation] = reactExports.useState(0);
  const pipePassedRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const gameContainerRef = reactExports.useRef(null);
  const pipeSpawnTimerRef = reactExports.useRef(0);
  const hasSubmittedRef = reactExports.useRef(false);
  const birdVelocityRef = reactExports.useRef(0);
  const birdPositionRef = reactExports.useRef(GAME_HEIGHT / 2 - BIRD_HEIGHT / 2);
  const gameOverTimeRef = reactExports.useRef(0);
  const deathRotationRef = reactExports.useRef(0);
  const audioContextRef = reactExports.useRef(null);
  const audioBuffersRef = reactExports.useRef({});
  const audioUnlockedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;
    const ctx = new AudioCtor();
    audioContextRef.current = ctx;
    const loadSound = async (path, key) => {
      try {
        const response = await fetch(path);
        const arrayBuffer = await response.arrayBuffer();
        const decodedBuffer = await ctx.decodeAudioData(arrayBuffer);
        audioBuffersRef.current[key] = decodedBuffer;
      } catch (e) {
      }
    };
    void loadSound(FLAP_SOUND_PATH, "flap");
    void loadSound(DEATH_SOUND_PATH, "death");
    void loadSound(PIPE_SOUND_PATH, "pipe");
    return () => {
      void ctx.close().catch(() => void 0);
    };
  }, []);
  const playSound = reactExports.useCallback(
    (key, volume) => {
      if (!soundEnabled || !audioContextRef.current) return;
      const buffer = audioBuffersRef.current[key];
      if (!buffer) return;
      try {
        const source = audioContextRef.current.createBufferSource();
        source.buffer = buffer;
        const gainNode = audioContextRef.current.createGain();
        gainNode.gain.value = volume;
        source.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);
        source.onended = () => {
          source.disconnect();
          gainNode.disconnect();
        };
        source.start(0);
      } catch (e) {
      }
    },
    [soundEnabled]
  );
  const unlockAudio = reactExports.useCallback(() => {
    if (audioUnlockedRef.current || !audioContextRef.current) return;
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume().catch((e) => {
      });
    }
    audioUnlockedRef.current = true;
  }, []);
  const resetGame = reactExports.useCallback(() => {
    var _a;
    setGameState("waiting");
    const initialPosition = GAME_HEIGHT / 2 - BIRD_HEIGHT / 2;
    setBirdPosition(initialPosition);
    birdPositionRef.current = initialPosition;
    setPipes([]);
    setScore(0);
    pipePassedRef.current.clear();
    pipeSpawnTimerRef.current = 0;
    birdVelocityRef.current = 0;
    setBirdVelocity(0);
    deathRotationRef.current = 0;
    setDeathRotation(0);
    (_a = gameContainerRef.current) == null ? void 0 : _a.focus();
  }, []);
  const startGame = reactExports.useCallback(() => {
    unlockAudio();
    resetGame();
    setGameState("playing");
    setPipes([generatePipe()]);
  }, [resetGame, unlockAudio]);
  const handlePointerDown = () => {
    unlockAudio();
    if (gameState === "playing") {
      playSound("flap", 0.3);
      birdVelocityRef.current = JUMP_VELOCITY;
      setBirdVelocity(JUMP_VELOCITY);
    } else if (gameState === "waiting") {
      startGame();
      playSound("flap", 0.3);
      birdVelocityRef.current = JUMP_VELOCITY;
      setBirdVelocity(JUMP_VELOCITY);
    }
  };
  const handlePointerUp = () => {
  };
  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      unlockAudio();
      if (gameState === "playing") {
        playSound("flap", 0.3);
        birdVelocityRef.current = JUMP_VELOCITY;
        setBirdVelocity(JUMP_VELOCITY);
      } else if (gameState === "waiting") {
        startGame();
        playSound("flap", 0.3);
        birdVelocityRef.current = JUMP_VELOCITY;
        setBirdVelocity(JUMP_VELOCITY);
      } else if (gameState === "gameOver") {
        if (Date.now() - gameOverTimeRef.current >= 500) {
          resetGame();
        }
      }
    }
    if (e.code === "KeyM") {
      e.preventDefault();
      setSoundEnabled((s) => !s);
    }
  };
  const handleKeyUp = (e) => {
    if (e.code === "Space") {
      e.preventDefault();
    }
  };
  reactExports.useEffect(() => {
    if (gameState === "waiting") return;
    let lastTime = null;
    let animationFrameId;
    let frameCount = 0;
    let fpsTimer = 0;
    let lastFrameTimestamp = 0;
    const targetFrameTime = 1e3 / targetFps;
    const gameLoop = (timestamp) => {
      animationFrameId = requestAnimationFrame(gameLoop);
      const elapsed = timestamp - lastFrameTimestamp;
      if (targetFps < 60 && elapsed < targetFrameTime) return;
      lastFrameTimestamp = timestamp - elapsed % targetFrameTime;
      if (lastTime === null) {
        lastTime = timestamp;
        return;
      }
      const deltaTime = (timestamp - lastTime) / 1e3;
      const deltaMultiplier = deltaTime * 60;
      lastTime = timestamp;
      frameCount++;
      fpsTimer += deltaTime;
      if (fpsTimer >= 0.5) {
        setFps(Math.round(frameCount / fpsTimer));
        frameCount = 0;
        fpsTimer = 0;
      }
      birdVelocityRef.current += GRAVITY * deltaMultiplier;
      birdVelocityRef.current = Math.min(
        birdVelocityRef.current,
        MAX_FALL_VELOCITY
      );
      birdPositionRef.current += birdVelocityRef.current * deltaMultiplier;
      setBirdPosition(birdPositionRef.current);
      setBirdVelocity(birdVelocityRef.current);
      if (gameState === "gameOver") {
        deathRotationRef.current += 15 * deltaMultiplier;
        setDeathRotation(deathRotationRef.current);
        if (birdPositionRef.current > GAME_HEIGHT + BIRD_HEIGHT) {
          cancelAnimationFrame(animationFrameId);
          return;
        }
      }
      if (gameState === "playing") {
        setPipes((prev) => {
          let scoreUpdated = false;
          const newPipes = prev.map((p) => {
            const newX = p.x - PIPE_SPEED * deltaMultiplier;
            if (!pipePassedRef.current.has(p.id) && newX + PIPE_WIDTH / 2 < BIRD_LEFT_POSITION) {
              pipePassedRef.current.add(p.id);
              if (!scoreUpdated) {
                setScore((s) => s + 1);
                playSound("pipe", 0.3);
                scoreUpdated = true;
              }
            }
            return { ...p, x: newX };
          }).filter((p) => p.x > -PIPE_WIDTH);
          return newPipes;
        });
        pipeSpawnTimerRef.current += deltaTime;
        if (pipeSpawnTimerRef.current > PIPE_SPAWN_INTERVAL) {
          pipeSpawnTimerRef.current = 0;
          setPipes((prev) => [...prev, generatePipe()]);
        }
      }
    };
    animationFrameId = requestAnimationFrame(gameLoop);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameState, targetFps, playSound]);
  const getBirdHitbox = reactExports.useCallback(() => {
    const widthReduction = BIRD_WIDTH * BIRD_HITBOX_WIDTH_REDUCTION;
    const heightReduction = BIRD_HEIGHT * BIRD_HITBOX_HEIGHT_REDUCTION;
    return {
      x: BIRD_LEFT_POSITION + widthReduction / 2 + BIRD_HITBOX_X_OFFSET,
      y: birdPosition + heightReduction / 2 + BIRD_HITBOX_Y_OFFSET,
      width: BIRD_WIDTH - widthReduction,
      height: BIRD_HEIGHT - heightReduction
    };
  }, [birdPosition]);
  const getPipeHitbox = reactExports.useCallback((pipe) => {
    const reduction = PIPE_WIDTH * PIPE_HITBOX_REDUCTION;
    return {
      x: pipe.x + reduction / 2,
      width: PIPE_WIDTH - reduction,
      topHeight: pipe.gapY - PIPE_GAP / 2,
      bottomY: pipe.gapY + PIPE_GAP / 2
    };
  }, []);
  reactExports.useEffect(() => {
    if (gameState !== "playing") return;
    if (birdPosition < 0) setBirdPosition(0);
    if (birdPosition > GAME_HEIGHT - BIRD_HEIGHT) {
      playSound("death", 0.4);
      gameOverTimeRef.current = Date.now();
      setGameState("gameOver");
      return;
    }
    const birdRect = getBirdHitbox();
    for (const pipe of pipes) {
      const pipeHitbox = getPipeHitbox(pipe);
      if (birdRect.x < pipeHitbox.x + pipeHitbox.width && birdRect.x + birdRect.width > pipeHitbox.x && (birdRect.y < pipeHitbox.topHeight || birdRect.y + birdRect.height > pipeHitbox.bottomY)) {
        playSound("death", 0.4);
        gameOverTimeRef.current = Date.now();
        setGameState("gameOver");
        return;
      }
    }
  }, [birdPosition, pipes, gameState, getBirdHitbox, getPipeHitbox, playSound]);
  reactExports.useEffect(() => {
    var _a;
    (_a = gameContainerRef.current) == null ? void 0 : _a.focus();
  }, []);
  reactExports.useEffect(() => {
    if (score >= WINNING_SCORE && !hasSubmittedRef.current) {
      hasSubmittedRef.current = true;
      markLocalTaskSolved("fowl_bounce");
    }
  }, [score]);
  const birdRotation = gameState === "gameOver" ? deathRotation : birdVelocity < 0 ? -20 : 30;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: gameContainerRef,
      className: "font-silkscreen",
      style: gameContainerStyle,
      tabIndex: 0,
      role: "button",
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerLeave: handlePointerUp,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      children: [
        DEBUG_MODE,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: soundToggleStyle,
            onClick: (e) => {
              e.stopPropagation();
              setSoundEnabled((s) => !s);
            },
            onKeyDown: (e) => {
              if (e.key === "m" || e.key === "M") {
                e.preventDefault();
                e.stopPropagation();
                setSoundEnabled((s) => !s);
              }
            },
            role: "button",
            tabIndex: -1,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: soundEnabled ? SOUND_ON_ICON : SOUND_OFF_ICON,
                  alt: soundEnabled ? "Sound on" : "Sound off",
                  style: { width: "32px", height: "32px" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    fontSize: "14px",
                    color: "#000",
                    fontFamily: "inherit",
                    fontWeight: "bold",
                    textShadow: "none"
                  },
                  children: "M"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: scoreStyle, children: score }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bird, { top: birdPosition, rotation: birdRotation }),
        pipes.map((pipe) => /* @__PURE__ */ jsxRuntimeExports.jsx(PipePair, { pipe }, pipe.id)),
        DEBUG_MODE,
        gameState === "waiting" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: overlayStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontSize: "24px",
                margin: "10px 0",
                fontFamily: "inherit"
              },
              children: "Click or press Space to bounce!"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              style: {
                fontSize: "14px",
                marginTop: "40px",
                fontFamily: "inherit"
              },
              children: [
                "Make it past ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: WINNING_SCORE }),
                " poles to complete your task"
              ]
            }
          ),
          DEBUG_MODE
        ] }),
        gameState === "gameOver" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: overlayStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontFamily: "inherit" }, children: "Game Over" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: { margin: "10px 0", fontFamily: "inherit" }, children: [
            "Score: ",
            score
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                if (Date.now() - gameOverTimeRef.current >= 350) {
                  resetGame();
                }
              },
              style: {
                padding: "12px 24px",
                fontSize: "18px",
                color: "#000",
                backgroundColor: "#ffd700",
                border: "4.5px solid #000",
                cursor: "pointer",
                marginTop: "20px",
                fontFamily: "inherit",
                pointerEvents: "auto",
                fontWeight: "bold",
                textShadow: "none"
              },
              children: "Try Again"
            }
          )
        ] })
      ]
    }
  );
};
const puzzleRootElem = document.getElementById("fowl-bounce-puzzle-root");
if (puzzleRootElem) {
  const root = clientExports.createRoot(puzzleRootElem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(FowlBounceGame, {}));
} else {
  console.error(
    "Could not mount because #fowl-bounce-puzzle-root was nowhere to be found"
  );
}
//# sourceMappingURL=C8VUob86.js.map
