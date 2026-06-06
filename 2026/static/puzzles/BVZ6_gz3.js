import { R as React, j as jsxRuntimeExports, r as reactExports, c as clientExports } from "./Cqdl_uWg.js";
import { m as markLocalTaskSolved } from "./CPm4UabO.js";
const student_img = "/2026/static/puzzles/assets/9b868aa0df526026.png";
const student_santa_img = "/2026/static/puzzles/assets/7f73911b6e0da4c2.png";
const ps1_img = "/2026/static/puzzles/assets/18ca344b40eab788.png";
const ps2_img = "/2026/static/puzzles/assets/0eea5c23f811c8d7.png";
const ps3_img = "/2026/static/puzzles/assets/738a268b744748a2.png";
const ps4_img = "/2026/static/puzzles/assets/ac8d751590237bef.png";
const ps5_img = "/2026/static/puzzles/assets/1cc5dd1362c697e1.png";
const ps6_img = "/2026/static/puzzles/assets/6cf35c96eb180fde.png";
const WINNING_SCORE = 15;
const PS_IMAGES = [ps1_img, ps2_img, ps3_img, ps4_img, ps5_img, ps6_img];
const SPRITE_FRAME_WIDTH = 16;
const SPRITE_FRAME_HEIGHT = 16;
const SPRITE_FRAME_COUNT = 4;
const SECONDS_PER_FRAME = 0.1;
const DEBUG_MODE = false;
const GAME_WIDTH = 480;
const GAME_HEIGHT = 640;
const STUDENT_WIDTH = 72;
const STUDENT_HEIGHT = 72;
const STUDENT_LEFT_POSITION = 80;
const STUDENT_WIND_PUSH_SPEED = 8;
const BUILDING_WIDTH = 90;
const BUILDING_GAP = 200;
const BUILDING_SCROLL_SPEED = 5;
const BUILDING_SPAWN_INTERVAL = 1.2;
const SNOW_GUST_SPEED = 2;
const SNOW_GUST_SPAWN_INTERVAL = 4;
const SNOW_GUST_WIDTH = 280;
const SNOW_GUST_HEIGHT = 170;
const PSET_SIZE = 50;
const PSET_SPEED = 3;
const PSET_SPAWN_INTERVAL = 3;
const PSET_MAX_VERTICAL_SPEED = 6;
const FORBIDDEN_ZONE_HEIGHT = 120;
const TRAIL_PIXEL_SIZE = 4;
const TRAIL_PIXEL_GAP = 8;
const TRAIL_NODE_SPACING = 12;
const TRAIL_LIFETIME_MS = 400;
const TRAIL_OFFSET_X = 10;
const TRAIL_OFFSET_Y = 68;
const STUDENT_HITBOX_REDUCTION_WIDTH = 0.4;
const STUDENT_HITBOX_REDUCTION_HEIGHT = 0.25;
const BUILDING_HITBOX_REDUCTION_WIDTH = 0;
const BUILDING_HITBOX_REDUCTION_HEIGHT = 0;
const TOP_BUILDING_BOTTOM_EDGE_REDUCTION = 36;
const SNOW_GUST_HITBOX_REDUCTION = 0;
const PSET_HITBOX_REDUCTION = 0.25;
const COLOR_BUILDING_BODY = "#d1c7b4ff";
const COLOR_BUILDING_WALL_FACE = "#b6ab93ff";
const COLOR_BUILDING_BORDER = "#72685bff";
const COLOR_DOOR = "#786e5dff";
const COLOR_MATH_BOX_BG = "#dee4e6ff";
const COLOR_MATH_BOX_BORDER = "#9eaebdff";
const COLOR_MATH_BOX_CORRECT_BG = "#7ddb9fff";
const COLOR_MATH_BOX_CORRECT_BORDER = "#439862ff";
const COLOR_MATH_BOX_WRONG_BG = "#cb7878ff";
const COLOR_MATH_BOX_WRONG_BORDER = "#983f3fff";
const gameContainerStyle = {
  position: "relative",
  width: `${GAME_WIDTH}px`,
  height: `${GAME_HEIGHT}px`,
  backgroundColor: "#dee2e6",
  overflow: "hidden",
  margin: "20px auto",
  border: "4.5px solid #000",
  color: "white",
  textShadow: "2px 2px 0px #000",
  cursor: "pointer",
  outline: "none",
  imageRendering: "pixelated"
};
const studentStyle = (top, rotation, frame, imagePath) => {
  const frameX = -frame * SPRITE_FRAME_WIDTH;
  const scale = STUDENT_WIDTH / SPRITE_FRAME_WIDTH;
  return {
    position: "absolute",
    top: `${top}px`,
    left: `${STUDENT_LEFT_POSITION}px`,
    width: `${STUDENT_WIDTH}px`,
    height: `${STUDENT_HEIGHT}px`,
    backgroundImage: `url(${imagePath})`,
    backgroundSize: `${SPRITE_FRAME_WIDTH * SPRITE_FRAME_COUNT * scale}px ${SPRITE_FRAME_HEIGHT * scale}px`,
    backgroundPosition: `${frameX * scale}px 0px`,
    backgroundRepeat: "no-repeat",
    transform: `rotate(${rotation}deg)`,
    zIndex: 10,
    imageRendering: "pixelated"
  };
};
const snowGustContainerStyle = (x, y) => ({
  position: "absolute",
  left: `${x}px`,
  top: `${y}px`,
  width: `${SNOW_GUST_WIDTH}px`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 20
});
const snowGustBodyStyle = {
  width: `${SNOW_GUST_WIDTH}px`,
  height: `${SNOW_GUST_HEIGHT}px`,
  backgroundColor: COLOR_MATH_BOX_BG,
  border: `4.5px solid ${COLOR_MATH_BOX_BORDER}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "black",
  textShadow: "none",
  boxSizing: "border-box",
  padding: "0"
};
const mathAnswersContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  height: "70px",
  borderTop: `4.5px dashed ${COLOR_MATH_BOX_BORDER}`,
  backgroundColor: "rgba(0,0,0,0.03)"
};
const answerOptionStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "6px"
};
const keyCapStyle = {
  backgroundColor: "#f4f4f4",
  border: `2px solid ${COLOR_MATH_BOX_BORDER}`,
  borderBottom: `4px solid ${COLOR_MATH_BOX_BORDER}`,
  borderRadius: "6px",
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#555",
  flexShrink: 0
};
const answerValueStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "black"
};
const problemSetStyle = (x, y, angle) => ({
  position: "absolute",
  left: `${x}px`,
  top: `${y}px`,
  width: `${PSET_SIZE}px`,
  border: "4.5px solid #3c3c3cff",
  boxSizing: "border-box",
  transform: `rotate(${angle}deg)`,
  zIndex: 25,
  imageRendering: "pixelated",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
const scoreStyle = {
  position: "absolute",
  top: "20px",
  width: "100%",
  textAlign: "center",
  fontSize: "48px",
  fontWeight: "bold",
  zIndex: 40,
  WebkitTextStroke: "2px black"
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
  zIndex: 50,
  pointerEvents: "none",
  fontFamily: "inherit"
};
const generateBuilding = () => ({
  id: Date.now() + Math.random(),
  x: GAME_WIDTH,
  gapY: Math.floor(Math.random() * (GAME_HEIGHT - BUILDING_GAP - 200)) + 100
});
const generateMathProblem = () => {
  const operations = ["+", "-", "x", "÷"];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let num1, num2, correctAnswer, problem;
  switch (operation) {
    case "+":
      num1 = Math.floor(Math.random() * 20) + 2;
      num2 = Math.floor(Math.random() * 20) + 2;
      correctAnswer = num1 + num2;
      problem = `${num1} + ${num2} = ?`;
      break;
    case "-":
      num1 = Math.floor(Math.random() * 20) + 10;
      num2 = Math.floor(Math.random() * 10) + 2;
      correctAnswer = num1 - num2;
      problem = `${num1} - ${num2} = ?`;
      break;
    case "x":
      num1 = Math.floor(Math.random() * 9) + 2;
      num2 = Math.floor(Math.random() * 9) + 2;
      correctAnswer = num1 * num2;
      problem = `${num1} x ${num2} = ?`;
      break;
    case "÷": {
      num2 = Math.floor(Math.random() * 9) + 2;
      const quotient = Math.floor(Math.random() * 9) + 2;
      num1 = num2 * quotient;
      correctAnswer = quotient;
      problem = `${num1} ÷ ${num2} = ?`;
      break;
    }
    default:
      num1 = Math.floor(Math.random() * 9) + 2;
      num2 = Math.floor(Math.random() * 9) + 2;
      correctAnswer = num1 * num2;
      problem = `${num1} x ${num2} = ?`;
  }
  const options = /* @__PURE__ */ new Set([correctAnswer]);
  let attempts = 0;
  while (options.size < 3 && attempts < 50) {
    const offset = Math.floor(Math.random() * 10) - 5;
    const incorrect = correctAnswer + offset;
    if (incorrect !== correctAnswer && incorrect > 0) options.add(incorrect);
    attempts++;
  }
  while (options.size < 3) {
    options.add(correctAnswer + options.size + 1);
  }
  const shuffled = Array.from(options).sort(() => Math.random() - 0.5);
  return {
    id: Date.now() + Math.random(),
    x: GAME_WIDTH,
    y: Math.floor(Math.random() * (GAME_HEIGHT / 3)) + 50,
    problem,
    correctAnswer,
    options: shuffled.map((v, i) => ({ key: ["Z", "X", "C"][i], value: v })),
    solved: false,
    opacity: 1
  };
};
const isTrajectoryBlocked = (spawnX, spawnY, vy, buildings) => {
  const relativeSpeed = PSET_SPEED + BUILDING_SCROLL_SPEED;
  const framesToImpact = (spawnX - STUDENT_LEFT_POSITION) / relativeSpeed;
  const framesToEntry = (spawnX - (STUDENT_LEFT_POSITION + BUILDING_WIDTH + 40)) / relativeSpeed;
  const buildingDisplacement = BUILDING_SCROLL_SPEED * framesToImpact;
  const yAtImpact = spawnY + vy * framesToImpact;
  const yAtEntry = spawnY + vy * framesToEntry;
  const minY = Math.min(yAtImpact, yAtEntry);
  const maxY = Math.max(yAtImpact, yAtEntry);
  const projectileTop = minY;
  const projectileBottom = maxY + PSET_SIZE;
  return buildings.some((b) => {
    const futureBx = b.x - buildingDisplacement;
    if (STUDENT_LEFT_POSITION + STUDENT_WIDTH > futureBx && STUDENT_LEFT_POSITION < futureBx + BUILDING_WIDTH) {
      const forbiddenTop = b.gapY - FORBIDDEN_ZONE_HEIGHT / 2;
      const forbiddenBottom = b.gapY + FORBIDDEN_ZONE_HEIGHT / 2;
      return projectileTop < forbiddenBottom && projectileBottom > forbiddenTop;
    }
    return false;
  });
};
const generateProblemSet = (number, currentBuildings, studentY) => {
  let x, y, vy;
  const speedX = PSET_SPEED + BUILDING_SCROLL_SPEED;
  const vx = -speedX;
  const spawnX = GAME_WIDTH + PSET_SIZE;
  const distToPlayerX = spawnX - STUDENT_LEFT_POSITION;
  const timeToImpact = Math.max(0.01, distToPlayerX / speedX);
  const maxVerticalReach = PSET_MAX_VERTICAL_SPEED * timeToImpact;
  const minSpawnY = Math.max(0, studentY - maxVerticalReach + 50);
  const maxSpawnY = Math.min(
    GAME_HEIGHT - PSET_SIZE,
    studentY + maxVerticalReach - 50
  );
  for (let attempt = 0; attempt < 10; attempt++) {
    x = spawnX;
    if (maxSpawnY > minSpawnY) {
      y = Math.random() * (maxSpawnY - minSpawnY) + minSpawnY;
    } else {
      y = Math.random() * (GAME_HEIGHT - 200) + 100;
    }
    const aimJitter = Math.random() * 240 - 120;
    const targetY = studentY + aimJitter;
    const requiredVy = (targetY - y) / timeToImpact;
    vy = Math.max(
      -PSET_MAX_VERTICAL_SPEED,
      Math.min(PSET_MAX_VERTICAL_SPEED, requiredVy)
    );
    if (!isTrajectoryBlocked(x, y, vy, currentBuildings)) {
      return {
        id: Date.now() + Math.random(),
        x,
        y,
        vx,
        vy,
        angle: 0,
        rotationSpeed: (Math.random() - 0.5) * 10,
        number
      };
    }
  }
  return {
    id: Date.now() + Math.random(),
    x: GAME_WIDTH + PSET_SIZE,
    y: 50,
    vx: -speedX,
    vy: 0,
    angle: 0,
    rotationSpeed: 5,
    number
  };
};
const Student = React.memo(({ top, rotation, frame, imagePath }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: studentStyle(top, rotation, frame, imagePath) }));
Student.displayName = "Student";
const CanvasTrail = React.memo(({ studentY, scrollSpeed, gameState, gap }) => {
  const canvasRef = reactExports.useRef(null);
  const trailsRef = reactExports.useRef([]);
  const latestDataRef = reactExports.useRef({ studentY, scrollSpeed, gameState, gap });
  const lastTrailPosRef = reactExports.useRef(null);
  const deathTimeRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    latestDataRef.current = { studentY, scrollSpeed, gameState, gap };
    if (gameState !== "gameOver") {
      deathTimeRef.current = null;
    }
  }, [studentY, scrollSpeed, gameState, gap]);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId;
    let lastTime = performance.now();
    const render = (timestamp) => {
      const {
        studentY: currentY,
        scrollSpeed: currentSpeed,
        gameState: currentGameState,
        gap: currentGap
      } = latestDataRef.current;
      const deltaTime = (timestamp - lastTime) / 1e3;
      const deltaMultiplier = deltaTime * 60;
      lastTime = timestamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isPlaying = currentGameState === "playing";
      const isGameOver = currentGameState === "gameOver";
      if (isPlaying) {
        const scrollDist = currentSpeed * deltaMultiplier;
        const now = Date.now();
        for (const point of trailsRef.current) {
          point.x -= scrollDist;
        }
        if (lastTrailPosRef.current) {
          lastTrailPosRef.current.x -= scrollDist;
        }
        while (trailsRef.current.length > 0 && now - trailsRef.current[0].time > TRAIL_LIFETIME_MS) {
          trailsRef.current.shift();
        }
        if (!lastTrailPosRef.current) {
          lastTrailPosRef.current = { x: STUDENT_LEFT_POSITION, y: currentY };
          trailsRef.current.push({
            x: STUDENT_LEFT_POSITION + 20,
            y: currentY,
            time: now
          });
        } else {
          const startX = lastTrailPosRef.current.x;
          const startY = lastTrailPosRef.current.y;
          const endX = STUDENT_LEFT_POSITION;
          const endY = currentY;
          const dx = endX - startX;
          const dy = endY - startY;
          const dist = Math.hypot(dx, dy);
          if (dist >= TRAIL_NODE_SPACING) {
            const steps = Math.floor(dist / TRAIL_NODE_SPACING);
            for (let i = 1; i <= steps; i++) {
              const t = i / steps;
              const interpX = startX + dx * t;
              const interpY = startY + dy * t;
              const interpolatedTime = now - (1 - t) * deltaTime * 1e3;
              trailsRef.current.push({
                x: interpX + 20,
                y: interpY,
                time: interpolatedTime
              });
            }
            lastTrailPosRef.current = { x: STUDENT_LEFT_POSITION, y: currentY };
          }
        }
      } else {
        lastTrailPosRef.current = null;
      }
      let referenceTime = Date.now();
      if (isGameOver) {
        if (!deathTimeRef.current) deathTimeRef.current = Date.now();
        referenceTime = deathTimeRef.current;
      }
      ctx.fillStyle = "gray";
      for (const pt of trailsRef.current) {
        const age = referenceTime - pt.time;
        const life = 1 - age / TRAIL_LIFETIME_MS;
        if (life > 0) {
          ctx.globalAlpha = 1;
          const snapX = Math.round(pt.x + TRAIL_OFFSET_X);
          const snapY = Math.round(pt.y + TRAIL_OFFSET_Y);
          ctx.fillRect(snapX, snapY, TRAIL_PIXEL_SIZE, TRAIL_PIXEL_SIZE);
          ctx.fillRect(
            snapX + TRAIL_PIXEL_SIZE + currentGap,
            snapY,
            TRAIL_PIXEL_SIZE,
            TRAIL_PIXEL_SIZE
          );
        }
      }
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };
    render(lastTime);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9,
        pointerEvents: "none"
      }
    }
  );
});
CanvasTrail.displayName = "CanvasTrail";
const BuildingPair = React.memo(
  ({ building }) => {
    const wallFaceHeight = 72;
    const topBuildingHeight = building.gapY - BUILDING_GAP / 2 - wallFaceHeight;
    const wallFaceTop = building.gapY - BUILDING_GAP / 2 - wallFaceHeight;
    const bottomBuildingTop = building.gapY + BUILDING_GAP / 2;
    const x = Math.round(building.x);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            position: "absolute",
            width: `${BUILDING_WIDTH}px`,
            backgroundColor: COLOR_BUILDING_BODY,
            borderBottom: `4.5px solid ${COLOR_BUILDING_BORDER}`,
            borderLeft: `4.5px solid ${COLOR_BUILDING_BORDER}`,
            borderRight: `4.5px solid ${COLOR_BUILDING_BORDER}`,
            boxSizing: "border-box",
            zIndex: 5,
            left: `${x}px`,
            top: 0,
            height: `${topBuildingHeight}px`
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            position: "absolute",
            left: `${x}px`,
            top: `${wallFaceTop}px`,
            width: `${BUILDING_WIDTH}px`,
            height: `${wallFaceHeight}px`,
            backgroundColor: COLOR_BUILDING_WALL_FACE,
            borderBottom: `4.5px solid ${COLOR_BUILDING_BORDER}`,
            borderLeft: `4.5px solid ${COLOR_BUILDING_BORDER}`,
            borderRight: `4.5px solid ${COLOR_BUILDING_BORDER}`,
            boxSizing: "border-box",
            zIndex: 5
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "28px",
                height: "45px",
                backgroundColor: COLOR_DOOR,
                borderTop: `4.5px solid ${COLOR_BUILDING_BORDER}`,
                borderLeft: `4.5px solid ${COLOR_BUILDING_BORDER}`,
                borderRight: `4.5px solid ${COLOR_BUILDING_BORDER}`
              }
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            position: "absolute",
            width: `${BUILDING_WIDTH}px`,
            backgroundColor: COLOR_BUILDING_BODY,
            borderTop: `4.5px solid ${COLOR_BUILDING_BORDER}`,
            borderLeft: `4.5px solid ${COLOR_BUILDING_BORDER}`,
            borderRight: `4.5px solid ${COLOR_BUILDING_BORDER}`,
            boxSizing: "border-box",
            zIndex: 11,
            left: `${x}px`,
            top: `${bottomBuildingTop}px`,
            bottom: 0
          }
        }
      )
    ] });
  }
);
BuildingPair.displayName = "BuildingPair";
const MathProblemComponent = React.memo(
  ({ problem }) => {
    const backgroundColor = problem.solved ? COLOR_MATH_BOX_CORRECT_BG : problem.wrong ? COLOR_MATH_BOX_WRONG_BG : COLOR_MATH_BOX_BG;
    const borderColor = problem.solved ? COLOR_MATH_BOX_CORRECT_BORDER : problem.wrong ? COLOR_MATH_BOX_WRONG_BORDER : COLOR_MATH_BOX_BORDER;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          ...snowGustContainerStyle(problem.x, problem.y),
          opacity: problem.opacity ?? 1,
          transition: "opacity 0.5s ease-out"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              ...snowGustBodyStyle,
              backgroundColor,
              borderColor
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    fontSize: "32px",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "0 10px"
                  },
                  children: problem.problem
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: mathAnswersContainerStyle, children: problem.options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: answerOptionStyle, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: keyCapStyle, children: opt.key }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: answerValueStyle, children: opt.value })
              ] }, opt.key)) })
            ]
          }
        )
      }
    );
  }
);
MathProblemComponent.displayName = "MathProblemComponent";
const ProblemSetComponent = React.memo(
  ({ pset }) => {
    const imageIndex = Math.min(pset.number - 1, 5);
    const imageUrl = PS_IMAGES[imageIndex];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: problemSetStyle(pset.x, pset.y, pset.angle), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: imageUrl,
        alt: `Problem set ${pset.number}`,
        loading: "eager",
        decoding: "sync",
        style: {
          maxWidth: "100%",
          height: "auto",
          display: "block",
          imageRendering: "pixelated"
        }
      }
    ) });
  }
);
ProblemSetComponent.displayName = "ProblemSetComponent";
const SnowfallOverlay = React.memo(({ scrollSpeed, isPlaying }) => {
  const [snowflakes, setSnowflakes] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const initialFlakes = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * (GAME_WIDTH * 1.5),
      y: Math.random() * GAME_HEIGHT,
      size: Math.random() * 10 + 4,
      speedY: Math.random() * 16 + 8,
      speedX: Math.random() * 4 - 2,
      opacity: Math.random() * 0.5 + 0.3
    }));
    setSnowflakes(initialFlakes);
  }, []);
  reactExports.useEffect(() => {
    if (!isPlaying) return;
    let animationFrameId;
    let lastTime = performance.now();
    const animate = (timestamp) => {
      const deltaTime = (timestamp - lastTime) / 1e3;
      const deltaMultiplier = deltaTime * 60;
      lastTime = timestamp;
      setSnowflakes(
        (flakes) => flakes.map((flake) => {
          let newY = flake.y + flake.speedY * deltaMultiplier;
          let newX = flake.x - (scrollSpeed + flake.speedX) * deltaMultiplier;
          if (newY > GAME_HEIGHT) newY = 0;
          if (newX < -flake.size) newX = GAME_WIDTH + flake.size;
          return { ...flake, y: newY, x: newX };
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, scrollSpeed]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 30,
        pointerEvents: "none"
      },
      children: snowflakes.map((flake) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            position: "absolute",
            top: `${flake.y}px`,
            left: `${flake.x}px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            backgroundColor: `rgba(255, 255, 255, ${flake.opacity})`
          }
        },
        flake.id
      ))
    }
  );
});
SnowfallOverlay.displayName = "SnowfallOverlay";
const ExamRunGame = () => {
  const [gameState, setGameState] = reactExports.useState("waiting");
  const [deathReason, setDeathReason] = reactExports.useState(null);
  const [studentPosition, setStudentPosition] = reactExports.useState(
    GAME_HEIGHT / 2 - STUDENT_HEIGHT / 2
  );
  const buildingsRef = reactExports.useRef([]);
  const mathProblemsRef = reactExports.useRef([]);
  const problemSetsRef = reactExports.useRef([]);
  const [buildings, setBuildings] = reactExports.useState([]);
  const [mathProblems, setMathProblems] = reactExports.useState([]);
  const [problemSets, setProblemSets] = reactExports.useState([]);
  const [score, setScore] = reactExports.useState(0);
  const [showHitboxes, setShowHitboxes] = reactExports.useState(false);
  const [animationFrame, setAnimationFrame] = reactExports.useState(0);
  const animationTimeRef = reactExports.useRef(0);
  const [useSantaSprite, setUseSantaSprite] = reactExports.useState(false);
  const activeInputsRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const isRunningUpRef = reactExports.useRef(false);
  const [, setIsRunningUp] = reactExports.useState(false);
  const [disableMathProblems, setDisableMathProblems] = reactExports.useState(false);
  const [showTrajectories, setShowTrajectories] = reactExports.useState(false);
  const passedBuildingRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const gameContainerRef = reactExports.useRef(null);
  const buildingSpawnTimerRef = reactExports.useRef(0);
  const mathProblemSpawnTimerRef = reactExports.useRef(0);
  const hasSubmittedRef = reactExports.useRef(false);
  const psetSpawnTimerRef = reactExports.useRef(0);
  const psetCounterRef = reactExports.useRef(0);
  const gameOverTimeRef = reactExports.useRef(0);
  const studentPositionRef = reactExports.useRef(GAME_HEIGHT / 2 - STUDENT_HEIGHT / 2);
  reactExports.useEffect(() => {
    PS_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    const student = new Image();
    student.src = student_img;
    const santa = new Image();
    santa.src = student_santa_img;
  }, []);
  const resetGame = reactExports.useCallback(() => {
    var _a;
    setGameState("waiting");
    setDeathReason(null);
    studentPositionRef.current = GAME_HEIGHT / 2 - STUDENT_HEIGHT / 2;
    buildingsRef.current = [];
    mathProblemsRef.current = [];
    problemSetsRef.current = [];
    passedBuildingRef.current.clear();
    setStudentPosition(GAME_HEIGHT / 2 - STUDENT_HEIGHT / 2);
    setBuildings([]);
    setMathProblems([]);
    setProblemSets([]);
    setScore(0);
    setAnimationFrame(0);
    animationTimeRef.current = 0;
    buildingSpawnTimerRef.current = 0;
    mathProblemSpawnTimerRef.current = 0;
    psetSpawnTimerRef.current = 0;
    psetCounterRef.current = 0;
    activeInputsRef.current.clear();
    isRunningUpRef.current = false;
    setIsRunningUp(false);
    (_a = gameContainerRef.current) == null ? void 0 : _a.focus();
  }, []);
  const startGame = reactExports.useCallback(() => {
    resetGame();
    setGameState("playing");
    const initialBuilding = generateBuilding();
    buildingsRef.current = [initialBuilding];
    setBuildings([initialBuilding]);
  }, [resetGame]);
  const updateInputState = () => {
    const isRunning = activeInputsRef.current.size > 0;
    isRunningUpRef.current = isRunning;
    setIsRunningUp(isRunning);
  };
  const handlePointerDown = () => {
    if (gameState === "waiting") {
      startGame();
    }
    activeInputsRef.current.add("pointer");
    updateInputState();
  };
  const handlePointerUp = () => {
    activeInputsRef.current.delete("pointer");
    updateInputState();
  };
  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      if (gameState === "playing") {
        activeInputsRef.current.add("space");
        updateInputState();
      } else if (gameState === "waiting") {
        startGame();
        activeInputsRef.current.add("space");
        updateInputState();
      } else if (gameState === "gameOver") {
        if (Date.now() - gameOverTimeRef.current >= 500) {
          resetGame();
        }
      }
    }
    if (e.code === "KeyS") {
      setUseSantaSprite((prev) => !prev);
    }
    if (gameState === "playing" && mathProblemsRef.current.length > 0 && ["KeyZ", "KeyX", "KeyC"].includes(e.code)) {
      const key = e.code.slice(-1);
      const problems = mathProblemsRef.current;
      const activeProblems = problems.filter((p) => !p.solved);
      if (activeProblems.length === 0) return;
      const problem = activeProblems.reduce((a, b) => a.x < b.x ? a : b);
      const option = problem.options.find((opt) => opt.key === key);
      if (option) {
        if (option.value === problem.correctAnswer) {
          const newProblems = problems.map(
            (p) => p.id === problem.id ? { ...p, solved: true, solvedTime: Date.now(), opacity: 0 } : p
          );
          mathProblemsRef.current = newProblems;
          setMathProblems(newProblems);
        } else {
          const newProblems = problems.map(
            (p) => p.id === problem.id ? { ...p, wrong: true } : p
          );
          mathProblemsRef.current = newProblems;
          setMathProblems(newProblems);
          setDeathReason("wrongAnswer");
          gameOverTimeRef.current = Date.now();
          setGameState("gameOver");
        }
      }
    }
  };
  const handleKeyUp = (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      activeInputsRef.current.delete("space");
      updateInputState();
    }
  };
  const getStudentHitbox = (yPos) => {
    const reductionWidth = STUDENT_WIDTH * STUDENT_HITBOX_REDUCTION_WIDTH;
    const reductionHeight = STUDENT_HEIGHT * STUDENT_HITBOX_REDUCTION_HEIGHT;
    const leftReduction = reductionWidth * 0.65;
    return {
      x: STUDENT_LEFT_POSITION + leftReduction,
      y: yPos + reductionHeight / 2,
      width: STUDENT_WIDTH - reductionWidth,
      height: STUDENT_HEIGHT - reductionHeight
    };
  };
  const getBuildingHitbox = (building) => {
    const reductionWidth = BUILDING_WIDTH * BUILDING_HITBOX_REDUCTION_WIDTH;
    const reductionHeight = BUILDING_GAP * BUILDING_HITBOX_REDUCTION_HEIGHT;
    return {
      x: building.x + reductionWidth / 2,
      width: BUILDING_WIDTH - reductionWidth,
      topHeight: building.gapY - BUILDING_GAP / 2 - reductionHeight / 2 - TOP_BUILDING_BOTTOM_EDGE_REDUCTION,
      bottomY: building.gapY + BUILDING_GAP / 2 + reductionHeight / 2
    };
  };
  const getMathProblemHitbox = (problem) => {
    const reductionW = SNOW_GUST_WIDTH * SNOW_GUST_HITBOX_REDUCTION;
    const reductionH = SNOW_GUST_HEIGHT * SNOW_GUST_HITBOX_REDUCTION;
    return {
      x: problem.x + reductionW / 2,
      y: problem.y + reductionH / 2,
      width: SNOW_GUST_WIDTH - reductionW,
      height: SNOW_GUST_HEIGHT - reductionH
    };
  };
  const getProblemSetHitbox = (pset) => {
    const reduction = PSET_SIZE * PSET_HITBOX_REDUCTION;
    return {
      x: pset.x + reduction / 2,
      y: pset.y + reduction / 2,
      width: PSET_SIZE - reduction,
      height: PSET_SIZE - reduction
    };
  };
  reactExports.useEffect(() => {
    if (gameState !== "playing") return;
    let lastTime = null;
    let animationFrameId;
    const gameLoop = (timestamp) => {
      if (lastTime === null) {
        lastTime = timestamp;
        animationFrameId = requestAnimationFrame(gameLoop);
        return;
      }
      const deltaTime = (timestamp - lastTime) / 1e3;
      const deltaMultiplier = deltaTime * 60;
      lastTime = timestamp;
      animationTimeRef.current += deltaTime;
      if (animationTimeRef.current >= SECONDS_PER_FRAME) {
        animationTimeRef.current -= SECONDS_PER_FRAME;
        setAnimationFrame((prev) => (prev + 1) % SPRITE_FRAME_COUNT);
      }
      studentPositionRef.current += (isRunningUpRef.current ? -6 : STUDENT_WIND_PUSH_SPEED) * deltaMultiplier;
      if (studentPositionRef.current < 0) studentPositionRef.current = 0;
      if (studentPositionRef.current > GAME_HEIGHT - STUDENT_HEIGHT) {
        setStudentPosition(studentPositionRef.current);
        setDeathReason("fellOff");
        gameOverTimeRef.current = Date.now();
        setGameState("gameOver");
        return;
      }
      setStudentPosition(studentPositionRef.current);
      let scoreUpdated = false;
      const currentBuildings = buildingsRef.current.map((b) => {
        const newX = b.x - BUILDING_SCROLL_SPEED * deltaMultiplier;
        if (!passedBuildingRef.current.has(b.id) && newX + BUILDING_WIDTH < STUDENT_LEFT_POSITION) {
          passedBuildingRef.current.add(b.id);
          if (!scoreUpdated) setScore((s) => s + 1);
          scoreUpdated = true;
        }
        return { ...b, x: newX };
      }).filter((b) => b.x > -BUILDING_WIDTH);
      buildingSpawnTimerRef.current += deltaTime;
      if (buildingSpawnTimerRef.current > BUILDING_SPAWN_INTERVAL) {
        buildingSpawnTimerRef.current = 0;
        currentBuildings.push(generateBuilding());
      }
      buildingsRef.current = currentBuildings;
      setBuildings(currentBuildings);
      const currentMathProblems = mathProblemsRef.current.map((p) => {
        const newX = p.x - SNOW_GUST_SPEED * deltaMultiplier;
        return { ...p, x: newX };
      }).filter((p) => {
        if (p.x <= -SNOW_GUST_WIDTH) return false;
        if (p.solved && p.solvedTime) {
          return Date.now() - p.solvedTime < 600;
        }
        return true;
      });
      mathProblemSpawnTimerRef.current += deltaTime;
      if (mathProblemSpawnTimerRef.current > SNOW_GUST_SPAWN_INTERVAL && currentMathProblems.length === 0 && !disableMathProblems) {
        mathProblemSpawnTimerRef.current = 0;
        currentMathProblems.push(generateMathProblem());
      }
      mathProblemsRef.current = currentMathProblems;
      setMathProblems(currentMathProblems);
      const currentPSets = problemSetsRef.current.map((p) => ({
        ...p,
        x: p.x + p.vx * deltaMultiplier,
        y: p.y + p.vy * deltaMultiplier,
        angle: p.angle + p.rotationSpeed * deltaMultiplier
      })).filter(
        (p) => p.x > -PSET_SIZE && p.x < GAME_WIDTH + PSET_SIZE && p.y > -PSET_SIZE && p.y < GAME_HEIGHT + PSET_SIZE
      );
      psetSpawnTimerRef.current += deltaTime;
      if (psetSpawnTimerRef.current > PSET_SPAWN_INTERVAL) {
        psetSpawnTimerRef.current = 0;
        psetCounterRef.current += 1;
        currentPSets.push(
          generateProblemSet(
            psetCounterRef.current,
            buildingsRef.current,
            studentPositionRef.current
          )
        );
      }
      problemSetsRef.current = currentPSets;
      setProblemSets(currentPSets);
      const studentRect = getStudentHitbox(studentPositionRef.current);
      for (const b of buildingsRef.current) {
        const buildingHitbox = getBuildingHitbox(b);
        const collidedWithBuilding = studentRect.x < buildingHitbox.x + buildingHitbox.width && studentRect.x + studentRect.width > buildingHitbox.x && (studentRect.y < buildingHitbox.topHeight || studentRect.y + studentRect.height > buildingHitbox.bottomY);
        if (collidedWithBuilding) {
          setDeathReason("building");
          gameOverTimeRef.current = Date.now();
          setGameState("gameOver");
          return;
        }
      }
      for (const p of mathProblemsRef.current) {
        if (p.solved) continue;
        const problemHitbox = getMathProblemHitbox(p);
        const collidedWithProblem = studentRect.x < problemHitbox.x + problemHitbox.width && studentRect.x + studentRect.width > problemHitbox.x && studentRect.y < problemHitbox.y + problemHitbox.height && studentRect.y + studentRect.height > problemHitbox.y;
        if (collidedWithProblem) {
          setDeathReason("mathProblem");
          gameOverTimeRef.current = Date.now();
          setGameState("gameOver");
          return;
        }
      }
      for (const p of problemSetsRef.current) {
        const psetHitbox = getProblemSetHitbox(p);
        const collidedWithPset = studentRect.x < psetHitbox.x + psetHitbox.width && studentRect.x + studentRect.width > psetHitbox.x && studentRect.y < psetHitbox.y + psetHitbox.height && studentRect.y + studentRect.height > psetHitbox.y;
        if (collidedWithPset) {
          setDeathReason("pset");
          gameOverTimeRef.current = Date.now();
          setGameState("gameOver");
          return;
        }
      }
      animationFrameId = requestAnimationFrame(gameLoop);
    };
    animationFrameId = requestAnimationFrame(gameLoop);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameState, disableMathProblems]);
  reactExports.useEffect(() => {
    var _a;
    (_a = gameContainerRef.current) == null ? void 0 : _a.focus();
  }, []);
  reactExports.useEffect(() => {
    if (score >= WINNING_SCORE && !hasSubmittedRef.current) {
      hasSubmittedRef.current = true;
      markLocalTaskSolved("frosty_blitz");
    }
  }, [score]);
  const studentRotation = 0;
  const getDeathMessage = (reason) => {
    switch (reason) {
      case "building":
        return "Ouch!";
      case "fellOff":
        return "Wrong way partner!";
      case "pset":
        return "Was that an old problem set?";
      case "mathProblem":
        return "Where are these math problems coming from?";
      case "wrongAnswer":
        return "Hope that's not going to be on the exam!";
      default:
        return "";
    }
  };
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SnowfallOverlay,
          {
            scrollSpeed: BUILDING_SCROLL_SPEED,
            isPlaying: gameState === "playing"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: scoreStyle, children: score }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CanvasTrail,
          {
            studentY: studentPosition,
            scrollSpeed: BUILDING_SCROLL_SPEED,
            gameState,
            gap: TRAIL_PIXEL_GAP
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Student,
          {
            top: studentPosition,
            rotation: studentRotation,
            frame: animationFrame,
            imagePath: useSantaSprite ? student_santa_img : student_img
          }
        ),
        buildings.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(BuildingPair, { building: b }, b.id)),
        mathProblems.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(MathProblemComponent, { problem: p }, p.id)),
        problemSets.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemSetComponent, { pset: p }, p.id)),
        DEBUG_MODE,
        DEBUG_MODE,
        gameState === "waiting" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: overlayStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "24px", margin: "10px 0" }, children: [
            "It's finals day! Hold",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#ffd700", textShadow: "2px 2px 0px #000" }, children: "left click" }),
            " ",
            "or",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#ffd700", textShadow: "2px 2px 0px #000" }, children: "space" }),
            " ",
            "to push against the wind and get to your exam"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "14px", marginTop: "40px" }, children: [
            "Make it past",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#ffd700", textShadow: "2px 2px 0px #000" }, children: WINNING_SCORE }),
            " ",
            "buildings to complete your task"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                position: "absolute",
                bottom: "10px",
                right: "10px",
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
                margin: 0
              },
              children: "[S] for Santa"
            }
          ),
          DEBUG_MODE
        ] }),
        gameState === "gameOver" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: overlayStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontFamily: "inherit" }, children: getDeathMessage(deathReason) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: { margin: "10px 0", fontFamily: "inherit" }, children: [
            "Buildings passed: ",
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
                fontSize: "16px",
                color: "#333",
                background: "#ffd700",
                border: "4.5px solid #333",
                cursor: "pointer",
                marginTop: "20px",
                fontFamily: "inherit",
                pointerEvents: "auto"
              },
              children: "Try Again"
            }
          )
        ] })
      ]
    }
  );
};
const puzzleRootElem = document.getElementById("frosty-blitz-puzzle-root");
if (puzzleRootElem) {
  const root = clientExports.createRoot(puzzleRootElem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(ExamRunGame, {}));
} else {
  console.error(
    "Could not mount because #frosty-blitz-puzzle-root was nowhere to be found"
  );
}
//# sourceMappingURL=BVZ6_gz3.js.map
