import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { m as markLocalTaskSolved } from "./CPm4UabO.mjs";
const piece_01 = "/static/puzzles/assets/bc462777d062e5b3.png";
const piece_02 = "/static/puzzles/assets/6bfffd93fc9d1944.png";
const piece_03 = "/static/puzzles/assets/92d95dd4e7cd6015.png";
const piece_04 = "/static/puzzles/assets/c27fad709e34594b.png";
const piece_05 = "/static/puzzles/assets/e5d57c5e291fe3f2.png";
const piece_06 = "/static/puzzles/assets/a1e62c1d7f2cd5d6.png";
const piece_07 = "/static/puzzles/assets/f782cfcceba4c6fb.png";
const piece_08 = "/static/puzzles/assets/85357eb1ce34fb32.png";
const piece_09 = "/static/puzzles/assets/f39b7cd78ae2722e.png";
const piece_10 = "/static/puzzles/assets/7872225e56c3e360.png";
const piece_11 = "/static/puzzles/assets/feaf176dea9b041b.png";
const piece_12 = "/static/puzzles/assets/0f2b57816fb1ae80.png";
const piece_13 = "/static/puzzles/assets/3b65ec117a544e78.png";
const piece_14 = "/static/puzzles/assets/7c437843a71252a3.png";
const piece_15 = "/static/puzzles/assets/2a3cdf9abb761b7b.png";
const piece_16 = "/static/puzzles/assets/bec8a4cb6529611d.png";
const PIECES = [
  piece_01,
  piece_02,
  piece_03,
  piece_04,
  piece_05,
  piece_06,
  piece_07,
  piece_08,
  piece_09,
  piece_10,
  piece_11,
  piece_12,
  piece_13,
  piece_14,
  piece_15,
  piece_16
];
const GRID_SIZE = 4;
const TILE_COUNT = GRID_SIZE * GRID_SIZE;
const EMPTY_TILE = 0;
const createSolvedArray = () => [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  EMPTY_TILE,
  14,
  15,
  16
];
const shuffleArray = (array) => {
  let shuffled;
  do {
    shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  } while (!isSolvable(shuffled));
  return shuffled;
};
const isSolvable = (tiles) => {
  let inversions = 0;
  for (let i = 0; i < TILE_COUNT; i++) {
    for (let j = i + 1; j < TILE_COUNT; j++) {
      if (tiles[i] > tiles[j] && tiles[i] !== EMPTY_TILE && tiles[j] !== EMPTY_TILE) {
        inversions++;
      }
    }
  }
  const emptyTileRow = Math.floor(tiles.indexOf(EMPTY_TILE) / GRID_SIZE);
  {
    const emptyOnOddRowFromBottom = (GRID_SIZE - emptyTileRow) % 2 !== 0;
    if (emptyOnOddRowFromBottom) {
      return inversions % 2 === 0;
    } else {
      return inversions % 2 !== 0;
    }
  }
};
const SlidePuzzle = () => {
  const SOLVED_ARRAY = reactExports.useMemo(() => createSolvedArray(), []);
  const [tiles, setTiles] = reactExports.useState(() => {
    console.log("--- INITIALIZING STATE (This should only run ONCE) ---");
    return shuffleArray([...SOLVED_ARRAY]);
  });
  const [isSolved, setIsSolved] = reactExports.useState(false);
  const handleShuffle = () => {
    console.log("Shuffling tiles.......");
    setTiles(shuffleArray([...SOLVED_ARRAY]));
  };
  reactExports.useEffect(() => {
    const checkSolved = tiles.every((t, i) => t === SOLVED_ARRAY[i]);
    if (checkSolved) {
      setIsSolved(true);
      markLocalTaskSolved("rebuild_mistermoon");
    }
  }, [tiles, SOLVED_ARRAY]);
  const handleTileClick = (clickedIndex) => {
    if (isSolved) return;
    const emptyIndex = tiles.indexOf(EMPTY_TILE);
    const { row: emptyRow, col: emptyCol } = getMatrixPosition(emptyIndex);
    const { row: clickedRow, col: clickedCol } = getMatrixPosition(clickedIndex);
    const isAdjacent = Math.abs(emptyRow - clickedRow) === 1 && emptyCol === clickedCol || Math.abs(emptyCol - clickedCol) === 1 && emptyRow === clickedRow;
    if (isAdjacent) {
      const newTiles = [...tiles];
      [newTiles[emptyIndex], newTiles[clickedIndex]] = [
        newTiles[clickedIndex],
        newTiles[emptyIndex]
      ];
      setTiles(newTiles);
    }
  };
  const getMatrixPosition = (index) => ({
    row: Math.floor(index / GRID_SIZE),
    col: index % GRID_SIZE
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl shadow-slate-950/50 border border-slate-700 w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "text-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-bold font-sans text-navbar-primary tracking-wider", children: "Help Put Mistermoon Back Together" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid gap-2 p-2 bg-slate-900/50 rounded-lg border border-slate-700",
        style: {
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          width: "100%",
          aspectRatio: "1 / 1"
        },
        children: tiles.map((tileValue, index) => {
          const isEmpty = tileValue === EMPTY_TILE;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                handleTileClick(index);
              },
              type: "button",
              className: `rounded-md transition-all duration-300 ease-in-out flex items-center justify-center text-3xl md:text-4xl font-bold select-none
        ${isEmpty ? "bg-slate-700/50" : "bg-navbar-primary cursor-pointer shadow-md"}
        ${!isSolved && !isEmpty ? "hover:scale-105 hover:z-10 hover:shadow-lg hover:brightness-110" : ""}
    `,
              style: {
                backgroundImage: isEmpty ? "none" : `url(${PIECES[tileValue - 1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }
            },
            tileValue
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center", children: [
      isSolved && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 p-3 bg-green-500/20 text-green-300 rounded-lg text-lg transition-opacity duration-500", children: "🎉 You solved it! 🎉" }),
      !isSolved && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleShuffle,
          className: "w-full bg-navbar-primary hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 shadow-lg hover:shadow-indigo-600/40",
          children: "Shuffle"
        }
      )
    ] })
  ] });
};
const slide_puzzle_elem = document.getElementById("slide-puzzle-root");
if (slide_puzzle_elem) {
  const root = clientExports.createRoot(slide_puzzle_elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(SlidePuzzle, {}));
} else {
  console.error(
    "Could not mount because #slide-puzzle-root was nowhere to be found"
  );
}
//# sourceMappingURL=CdazUrcv.mjs.map
