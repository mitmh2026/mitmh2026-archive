import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.js";
const piece_01 = "/2026/hunt/static/puzzles/assets/bc462777d062e5b3.png";
const piece_02 = "/2026/hunt/static/puzzles/assets/6bfffd93fc9d1944.png";
const piece_03 = "/2026/hunt/static/puzzles/assets/92d95dd4e7cd6015.png";
const piece_04 = "/2026/hunt/static/puzzles/assets/c27fad709e34594b.png";
const piece_05 = "/2026/hunt/static/puzzles/assets/e5d57c5e291fe3f2.png";
const piece_06 = "/2026/hunt/static/puzzles/assets/a1e62c1d7f2cd5d6.png";
const piece_07 = "/2026/hunt/static/puzzles/assets/f782cfcceba4c6fb.png";
const piece_08 = "/2026/hunt/static/puzzles/assets/85357eb1ce34fb32.png";
const piece_09 = "/2026/hunt/static/puzzles/assets/f39b7cd78ae2722e.png";
const piece_10 = "/2026/hunt/static/puzzles/assets/7872225e56c3e360.png";
const piece_11 = "/2026/hunt/static/puzzles/assets/feaf176dea9b041b.png";
const piece_12 = "/2026/hunt/static/puzzles/assets/0f2b57816fb1ae80.png";
const piece_13 = "/2026/hunt/static/puzzles/assets/3b65ec117a544e78.png";
const piece_14 = "/2026/hunt/static/puzzles/assets/7c437843a71252a3.png";
const piece_15 = "/2026/hunt/static/puzzles/assets/2a3cdf9abb761b7b.png";
const piece_16 = "/2026/hunt/static/puzzles/assets/bec8a4cb6529611d.png";
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
const createSolvedArray = () => [...Array(TILE_COUNT).keys()].map((i) => i + 1);
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
const SwapPuzzle = ({ onVerify }) => {
  const SOLVED_ARRAY = reactExports.useMemo(() => createSolvedArray(), []);
  const [tiles, setTiles] = reactExports.useState(() => {
    console.log("--- INITIALIZING STATE (This should only run ONCE) ---");
    return shuffleArray([...SOLVED_ARRAY]);
  });
  const [isSolved, setIsSolved] = reactExports.useState(false);
  const [selectedTileIndex, setSelectedTileIndex] = reactExports.useState(
    null
  );
  const handleShuffle = () => {
    setSelectedTileIndex(null);
    setTiles(shuffleArray([...SOLVED_ARRAY]));
  };
  reactExports.useEffect(() => {
    const checkSolved = tiles.every((t, i) => t === SOLVED_ARRAY[i]);
    if (checkSolved) {
      setIsSolved(checkSolved);
      onVerify(true);
      console.log("Puzzle solved!");
    }
  }, [tiles, SOLVED_ARRAY, onVerify]);
  const handleTileClick = (clickedIndex) => {
    if (isSolved) return;
    if (selectedTileIndex === null) {
      setSelectedTileIndex(clickedIndex);
    } else {
      if (selectedTileIndex === clickedIndex) {
        setSelectedTileIndex(null);
        return;
      }
      const { row: selectedRow, col: selectedCol } = getMatrixPosition(selectedTileIndex);
      const { row: clickedRow, col: clickedCol } = getMatrixPosition(clickedIndex);
      const isAdjacent = Math.abs(selectedRow - clickedRow) === 1 && selectedCol === clickedCol || Math.abs(selectedCol - clickedCol) === 1 && selectedRow === clickedRow;
      if (isAdjacent) {
        const newTiles = [...tiles];
        [newTiles[selectedTileIndex], newTiles[clickedIndex]] = [
          newTiles[clickedIndex],
          newTiles[selectedTileIndex]
        ];
        setTiles(newTiles);
        setSelectedTileIndex(null);
      } else {
        setSelectedTileIndex(clickedIndex);
      }
    }
  };
  const getMatrixPosition = (index) => ({
    row: Math.floor(index / GRID_SIZE),
    col: index % GRID_SIZE
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-900 text-white min-h-screen flex flex-col items-center justify-center font-sans p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl shadow-slate-950/50 border border-slate-700 w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "text-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 mt-2", children: "Select two Mistermoon tiles to swap them." }) }),
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
          const isSelected = index === selectedTileIndex;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                handleTileClick(index);
              },
              type: "button",
              className: `rounded-md transition-all duration-300 ease-in-out flex items-center justify-center text-3xl md:text-4xl font-bold select-none bg-indigo-600 cursor-pointer shadow-md
        ${!isSolved ? "hover:scale-105 hover:z-10 hover:shadow-lg hover:bg-indigo-700" : ""}
        ${isSelected ? "ring-4 ring-amber-400 scale-105 z-10" : ""}
    `,
              style: {
                backgroundImage: `url(${PIECES[tileValue - 1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }
            },
            tileValue
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-6 text-center", children: [
      isSolved && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 p-3 bg-green-500/20 text-green-300 rounded-lg text-lg transition-opacity duration-500", children: "🎉 You solved it! 🎉" }),
      !isSolved && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleShuffle,
          className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 shadow-lg hover:shadow-indigo-600/40",
          children: "Shuffle"
        }
      )
    ] })
  ] }) });
};
const swap_puzzle_elem = document.getElementById("swap-puzzle-root");
if (swap_puzzle_elem) {
  const root = clientExports.createRoot(swap_puzzle_elem);
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwapPuzzle,
      {
        onVerify: (isVerified) => {
          console.log(isVerified);
        }
      }
    )
  );
} else {
  console.error(
    "Could not mount because #swap-puzzle-root was nowhere to be found"
  );
}
//# sourceMappingURL=BT2iCg-k.js.map
