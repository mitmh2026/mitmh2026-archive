import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
const zip = "/2026/hunt/static/puzzles/assets/355e537c478bf736.zip";
const DEFAULT_SECTIONS = [
  { tx: -40, ty: -40, rot: 0, show: true },
  // Blue
  { tx: -30, ty: -30, rot: 0, show: true },
  // Cyan
  { tx: -20, ty: -20, rot: 0, show: true },
  // Green
  { tx: -10, ty: -10, rot: 0, show: true },
  // Grey
  { tx: 0, ty: 0, rot: 0, show: true },
  // Lime
  { tx: 10, ty: 10, rot: 0, show: true },
  // Magenta
  { tx: 20, ty: 20, rot: 0, show: true },
  // Orange
  { tx: 30, ty: 30, rot: 0, show: true },
  // Purple
  { tx: 40, ty: 40, rot: 0, show: true },
  // Red
  { tx: 50, ty: 50, rot: 0, show: true }
  // Yellow
];
const CONTROL_META = [
  { title: "Blue" },
  { title: "Cyan" },
  { title: "Green" },
  { title: "Grey" },
  { title: "Lime" },
  { title: "Magenta" },
  { title: "Orange" },
  { title: "Purple" },
  { title: "Red" },
  { title: "Yellow" }
];
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function serialize(sections) {
  return JSON.stringify(sections.map((s) => [s.tx, s.ty, s.rot, s.show]));
}
function isRot(n) {
  return n === 0 || n === 90 || n === 180 || n === 270;
}
function rotateCW(r) {
  switch (r) {
    case 0:
      return 90;
    case 90:
      return 180;
    case 180:
      return 270;
    case 270:
      return 0;
  }
}
function rotateCCW(r) {
  switch (r) {
    case 0:
      return 270;
    case 90:
      return 0;
    case 180:
      return 90;
    case 270:
      return 180;
  }
}
function snapRot(value, fallback) {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n)) return fallback;
  const norm = (n % 360 + 360) % 360;
  return isRot(norm) ? norm : fallback;
}
function toFiniteNumber(value) {
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : null;
}
function parseShow(value) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") {
    const s = value.trim().toLowerCase();
    if (s === "true") return true;
    if (s === "false") return false;
    const n = Number(s);
    if (Number.isFinite(n)) return n !== 0;
  }
  return Boolean(value);
}
function tryParseSections(raw) {
  if (!raw) return null;
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!Array.isArray(parsed) || parsed.length !== 10) return null;
  const rows = parsed;
  const next = [];
  for (let idx = 0; idx < rows.length; idx++) {
    const row = rows[idx];
    if (!Array.isArray(row) || row.length !== 4) return null;
    const [txV, tyV, rotV, showV] = row;
    const d = DEFAULT_SECTIONS[idx];
    if (!d) return null;
    const txN = toFiniteNumber(txV);
    const tyN = toFiniteNumber(tyV);
    const tx = txN === null ? d.tx : clamp(txN, -240, 240);
    const ty = tyN === null ? d.ty : clamp(tyN, -240, 240);
    const rot = snapRot(rotV, d.rot);
    const show = parseShow(showV);
    next.push({ tx, ty, rot, show });
  }
  return next;
}
const LineworkComponent = ({
  getStorage,
  setStorage
}) => {
  const [sections, setSections] = reactExports.useState(DEFAULT_SECTIONS);
  const [textbox, setTextbox] = reactExports.useState(
    () => serialize(DEFAULT_SECTIONS)
  );
  const transformOf = reactExports.useCallback(
    (s) => `translate(${s.tx}, ${s.ty}) rotate(${s.rot})`,
    []
  );
  const stateString = reactExports.useMemo(() => serialize(sections), [sections]);
  reactExports.useEffect(() => {
    const curr = getStorage();
    if (curr !== null) {
      setSections(curr);
    }
  }, [getStorage]);
  reactExports.useEffect(() => {
    setStorage(stateString);
    setTextbox(stateString);
  }, [stateString, setStorage]);
  const updateSection = reactExports.useCallback(
    (i, patch) => {
      setSections(
        (prev) => prev.map((s, idx) => idx === i ? { ...s, ...patch } : s)
      );
    },
    []
  );
  const rotateClockwise = reactExports.useCallback(() => {
    setSections(
      (prev) => prev.map((s) => ({
        ...s,
        tx: -s.ty,
        ty: s.tx,
        rot: rotateCW(s.rot)
      }))
    );
  }, []);
  const rotateCounterclockwise = reactExports.useCallback(() => {
    setSections(
      (prev) => prev.map((s) => ({
        ...s,
        tx: s.ty,
        ty: -s.tx,
        rot: rotateCCW(s.rot)
      }))
    );
  }, []);
  const loadFromTextbox = reactExports.useCallback(() => {
    const loaded = tryParseSections(textbox);
    if (loaded) setSections(loaded);
  }, [textbox]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen w-full bg-white px-5 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: 680,
        height: 160,
        viewBox: "-40 -40 680 160",
        className: "mb-3 h-auto w-full max-w-[680px] border border-black",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("desc", { children: "Black lines spelling out LINEWORK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "0",
              y1: "80",
              x2: "40",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "80",
              y1: "0",
              x2: "120",
              y2: "0",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "100",
              y1: "0",
              x2: "100",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "80",
              y1: "80",
              x2: "120",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "160",
              y1: "0",
              x2: "160",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "160",
              y1: "0",
              x2: "200",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "200",
              y1: "0",
              x2: "200",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "240",
              y1: "0",
              x2: "240",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "240",
              y1: "0",
              x2: "280",
              y2: "0",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "240",
              y1: "40",
              x2: "280",
              y2: "40",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "240",
              y1: "80",
              x2: "280",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "320",
              y1: "0",
              x2: "330",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "330",
              y1: "80",
              x2: "340",
              y2: "0",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "340",
              y1: "4",
              x2: "350",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "350",
              y1: "80",
              x2: "360",
              y2: "0",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "400",
              y1: "0",
              x2: "400",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "400",
              y1: "0",
              x2: "440",
              y2: "0",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "400",
              y1: "80",
              x2: "440",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "440",
              y1: "0",
              x2: "440",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "480",
              y1: "0",
              x2: "480",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "480",
              y1: "0",
              x2: "520",
              y2: "0",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "480",
              y1: "40",
              x2: "520",
              y2: "40",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "480",
              y1: "40",
              x2: "520",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "520",
              y1: "0",
              x2: "520",
              y2: "40",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "560",
              y1: "0",
              x2: "560",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "560",
              y1: "40",
              x2: "600",
              y2: "0",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "560",
              y1: "40",
              x2: "600",
              y2: "80",
              stroke: "#000000",
              strokeWidth: "3px"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: 780,
        height: 420,
        viewBox: "-390 -210 780 420",
        className: "mb-3 h-auto w-full max-w-[780px] border border-black",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("desc", { children: "Lines of ten colors, movable via an interface below" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "g",
            {
              id: "section1",
              transform: transformOf(sections[0]),
              className: sections[0].show ? "" : "hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-150.0",
                    y1: "-150.0",
                    x2: "-30.0",
                    y2: "-150.0",
                    stroke: "#4363d8",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-150.0",
                    y1: "30.0",
                    x2: "-90.0",
                    y2: "-30.0",
                    stroke: "#4363d8",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-90.0",
                    y1: "90.0",
                    x2: "-90.0",
                    y2: "150.0",
                    stroke: "#4363d8",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "90.0",
                    y1: "90.0",
                    x2: "90.0",
                    y2: "150.0",
                    stroke: "#4363d8",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "150.0",
                    y1: "-30.0",
                    x2: "150.0",
                    y2: "30.0",
                    stroke: "#4363d8",
                    strokeWidth: "3px"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "g",
            {
              id: "section2",
              transform: transformOf(sections[1]),
              className: sections[1].show ? "" : "hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-120.0",
                    y1: "-120.0",
                    x2: "0.0",
                    y2: "-105.0",
                    stroke: "#42d4f4",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-120.0",
                    y1: "120.0",
                    x2: "0.0",
                    y2: "120.0",
                    stroke: "#42d4f4",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-60.0",
                    y1: "0.0",
                    x2: "-60.0",
                    y2: "60.0",
                    stroke: "#42d4f4",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "60.0",
                    y1: "-120.0",
                    x2: "60.0",
                    y2: "-60.0",
                    stroke: "#42d4f4",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "60.0",
                    y1: "0.0",
                    x2: "120.0",
                    y2: "0.0",
                    stroke: "#42d4f4",
                    strokeWidth: "3px"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "g",
            {
              id: "section3",
              transform: transformOf(sections[2]),
              className: sections[2].show ? "" : "hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-135.0",
                    y1: "90.0",
                    x2: "-135.0",
                    y2: "150.0",
                    stroke: "#3cb44b",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-75.0",
                    y1: "-150.0",
                    x2: "-75.0",
                    y2: "-30.0",
                    stroke: "#3cb44b",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-75.0",
                    y1: "30.0",
                    x2: "-75.0",
                    y2: "150.0",
                    stroke: "#3cb44b",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-15.0",
                    y1: "90.0",
                    x2: "45.0",
                    y2: "90.0",
                    stroke: "#3cb44b",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "135.0",
                    y1: "150.0",
                    x2: "150.0",
                    y2: "30.0",
                    stroke: "#3cb44b",
                    strokeWidth: "3px"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "g",
            {
              id: "section4",
              transform: transformOf(sections[3]),
              className: sections[3].show ? "" : "hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-150.0",
                    y1: "-30.0",
                    x2: "-90.0",
                    y2: "-90.0",
                    stroke: "#a9a9a9",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-90.0",
                    y1: "30.0",
                    x2: "-90.0",
                    y2: "150.0",
                    stroke: "#a9a9a9",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-30.0",
                    y1: "-150.0",
                    x2: "-30.0",
                    y2: "-30.0",
                    stroke: "#a9a9a9",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "90.0",
                    y1: "30.0",
                    x2: "150.0",
                    y2: "30.0",
                    stroke: "#a9a9a9",
                    strokeWidth: "3px"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "g",
            {
              id: "section5",
              transform: transformOf(sections[4]),
              className: sections[4].show ? "" : "hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-120.0",
                    y1: "105.0",
                    x2: "-120.0",
                    y2: "135.0",
                    stroke: "#bfef45",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "0.0",
                    y1: "-150.0",
                    x2: "0.0",
                    y2: "-90.0",
                    stroke: "#bfef45",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "0.0",
                    y1: "0.0",
                    x2: "120.0",
                    y2: "0.0",
                    stroke: "#bfef45",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "60.0",
                    y1: "90.0",
                    x2: "60.0",
                    y2: "150.0",
                    stroke: "#bfef45",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "120.0",
                    y1: "90.0",
                    x2: "120.0",
                    y2: "150.0",
                    stroke: "#bfef45",
                    strokeWidth: "3px"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "g",
            {
              id: "section6",
              transform: transformOf(sections[5]),
              className: sections[5].show ? "" : "hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-150.0",
                    y1: "90.0",
                    x2: "-150.0",
                    y2: "150.0",
                    stroke: "#f032e6",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-90.0",
                    y1: "-30.0",
                    x2: "-90.0",
                    y2: "30.0",
                    stroke: "#f032e6",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-30.0",
                    y1: "-150.0",
                    x2: "-30.0",
                    y2: "-90.0",
                    stroke: "#f032e6",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "30.0",
                    y1: "30.0",
                    x2: "90.0",
                    y2: "30.0",
                    stroke: "#f032e6",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "30.0",
                    y1: "135.0",
                    x2: "150.0",
                    y2: "120.0",
                    stroke: "#f032e6",
                    strokeWidth: "3px"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "g",
            {
              id: "section7",
              transform: transformOf(sections[6]),
              className: sections[6].show ? "" : "hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-120.0",
                    y1: "-30.0",
                    x2: "-90.0",
                    y2: "-150.0",
                    stroke: "#f58231",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-120.0",
                    y1: "30.0",
                    x2: "-60.0",
                    y2: "30.0",
                    stroke: "#f58231",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-60.0",
                    y1: "90.0",
                    x2: "-60.0",
                    y2: "150.0",
                    stroke: "#f58231",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "0.0",
                    y1: "-150.0",
                    x2: "60.0",
                    y2: "-30.0",
                    stroke: "#f58231",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "120.0",
                    y1: "-150.0",
                    x2: "120.0",
                    y2: "-90.0",
                    stroke: "#f58231",
                    strokeWidth: "3px"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "g",
            {
              id: "section8",
              transform: transformOf(sections[7]),
              className: sections[7].show ? "" : "hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-150.0",
                    y1: "30.0",
                    x2: "-90.0",
                    y2: "30.0",
                    stroke: "#911eb4",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-90.0",
                    y1: "-150.0",
                    x2: "-90.0",
                    y2: "-30.0",
                    stroke: "#911eb4",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "90.0",
                    y1: "-150.0",
                    x2: "150.0",
                    y2: "-90.0",
                    stroke: "#911eb4",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "90.0",
                    y1: "150.0",
                    x2: "150.0",
                    y2: "150.0",
                    stroke: "#911eb4",
                    strokeWidth: "3px"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "g",
            {
              id: "section9",
              transform: transformOf(sections[8]),
              className: sections[8].show ? "" : "hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-150.0",
                    y1: "120.0",
                    x2: "-30.0",
                    y2: "120.0",
                    stroke: "#e6194b",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-90.0",
                    y1: "-120.0",
                    x2: "-30.0",
                    y2: "-120.0",
                    stroke: "#e6194b",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "30.0",
                    y1: "-60.0",
                    x2: "150.0",
                    y2: "-90.0",
                    stroke: "#e6194b",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "30.0",
                    y1: "0.0",
                    x2: "150.0",
                    y2: "0.0",
                    stroke: "#e6194b",
                    strokeWidth: "3px"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "g",
            {
              id: "section10",
              transform: transformOf(sections[9]),
              className: sections[9].show ? "" : "hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-150.0",
                    y1: "-150.0",
                    x2: "-90.0",
                    y2: "-150.0",
                    stroke: "#ffe119",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-150.0",
                    y1: "-30.0",
                    x2: "-90.0",
                    y2: "-30.0",
                    stroke: "#ffe119",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-150.0",
                    y1: "30.0",
                    x2: "-90.0",
                    y2: "90.0",
                    stroke: "#ffe119",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "-150.0",
                    y1: "150.0",
                    x2: "-90.0",
                    y2: "150.0",
                    stroke: "#ffe119",
                    strokeWidth: "3px"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "135.0",
                    y1: "30.0",
                    x2: "150.0",
                    y2: "150.0",
                    stroke: "#ffe119",
                    strokeWidth: "3px"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: sections.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex w-36 flex-col items-center gap-1 rounded-xl border border-black bg-white p-1 shadow-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold", children: CONTROL_META[i].title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex w-full flex-col items-center gap-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Translate X: ",
              s.tx
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "range",
                min: -240,
                max: 240,
                step: 5,
                value: s.tx,
                onChange: (e) => {
                  updateSection(i, { tx: Number(e.target.value) });
                },
                className: "w-full",
                "aria-label": `${CONTROL_META[i].title} translate x`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex w-full flex-col items-center gap-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Translate Y: ",
              s.ty
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "range",
                min: -240,
                max: 240,
                step: 5,
                value: s.ty,
                onChange: (e) => {
                  updateSection(i, { ty: Number(e.target.value) });
                },
                className: "w-full",
                "aria-label": `${CONTROL_META[i].title} translate y`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex w-full flex-col items-center gap-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Rotate: ",
              s.rot,
              "°"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "range",
                min: 0,
                max: 270,
                step: 90,
                value: s.rot,
                onChange: (e) => {
                  updateSection(i, { rot: snapRot(e.target.value, s.rot) });
                },
                className: "w-full",
                "aria-label": `${CONTROL_META[i].title} rotate`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-1 flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Show" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: s.show,
                onChange: (e) => {
                  updateSection(i, { show: e.target.checked });
                },
                "aria-label": `${CONTROL_META[i].title} show`
              }
            )
          ] })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: rotateClockwise,
          className: "rounded-lg border border-black bg-white px-3 py-2 text-sm",
          children: "Rotate everything clockwise"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: rotateCounterclockwise,
          className: "rounded-lg border border-black bg-white px-3 py-2 text-sm",
          children: "Rotate everything counterclockwise"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "mt-6 w-full max-w-3xl rounded-xl border border-black bg-white p-4 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer select-none text-sm font-semibold", children: "Save/Load" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Puzzle state is saved in your browser. To share your state with other team members (or just preserve it for later), copy the text below (it updates on any change). To load a new state, paste it and press "Load". The state saving/loading system is not part of the puzzle.' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: loadFromTextbox,
            className: "rounded-lg border border-black bg-white px-3 py-2 text-sm",
            children: "Load"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: textbox,
            onChange: (e) => {
              setTextbox(e.target.value);
            },
            className: "box-border h-28 w-full rounded-lg border border-black p-2 font-mono text-xs",
            "aria-label": "saved puzzle state"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 w-full", children: [
      "You can also download a zip file with each color represented as a PNG image",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: zip, download: "linework_images.zip", children: "here." })
    ] })
  ] }) });
};
const elem = document.getElementById("puzzle-content-root");
if (elem) {
  const storage = window.localStorage;
  const getStorage = () => {
    const raw = storage.getItem("linework-data");
    return tryParseSections(raw);
  };
  const setStorage = (x) => {
    storage.setItem("linework-data", x);
  };
  const root = clientExports.createRoot(elem);
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(LineworkComponent, { getStorage, setStorage })
  );
} else {
  console.error(
    "Could not mount LineworkComponent because #puzzle-content-root was nowhere to be found"
  );
}
//# sourceMappingURL=CL5zq0I3.js.map
