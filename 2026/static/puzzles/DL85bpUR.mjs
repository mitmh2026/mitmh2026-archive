import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { m as markLocalTaskSolved } from "./CPm4UabO.mjs";
const GRID_SIZE = 17;
const ROW_CLUES = [
  [17],
  [7, 7],
  [5, 5],
  [3, 3],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 1, 1, 2],
  [1, 1, 1, 1],
  [1, 1],
  [1, 1, 1],
  [2, 2, 1, 2, 2],
  [2, 2, 1, 2, 2],
  [2, 1, 2],
  [3, 1, 3],
  [5, 5],
  [7, 7],
  [17]
];
const COL_CLUES = [
  [17],
  [7, 7],
  [4, 4],
  [3, 3],
  [3, 2, 2, 3],
  [2, 2, 2, 2],
  [2, 1, 1, 2],
  [1, 1],
  [1, 5, 1],
  [1, 1],
  [2, 1, 1, 2],
  [2, 2, 2, 2],
  [3, 2, 2, 3],
  [3, 3],
  [4, 4],
  [7, 7],
  [17]
];
function checkNonogramSolution(grid, isFilled) {
  var _a;
  if (grid.length !== GRID_SIZE) {
    return false;
  }
  for (let i = 0; i < GRID_SIZE; i++) {
    if (((_a = grid[i]) == null ? void 0 : _a.length) !== GRID_SIZE) {
      return false;
    }
  }
  for (let i = 0; i < GRID_SIZE; i++) {
    let rowClueIndex = 0;
    let rowCount = 0;
    for (let j = 0; j < GRID_SIZE; j++) {
      if (isFilled(grid[i][j])) {
        rowCount++;
      } else {
        if (rowCount > 0) {
          if (rowClueIndex >= ROW_CLUES[i].length || rowCount !== ROW_CLUES[i][rowClueIndex]) {
            return false;
          }
          rowClueIndex++;
          rowCount = 0;
        }
      }
    }
    if (rowCount > 0) {
      if (rowClueIndex >= ROW_CLUES[i].length || rowCount !== ROW_CLUES[i][rowClueIndex]) {
        return false;
      }
      rowClueIndex++;
    }
    if (rowClueIndex !== ROW_CLUES[i].length) {
      return false;
    }
  }
  for (let j = 0; j < GRID_SIZE; j++) {
    let colClueIndex = 0;
    let colCount = 0;
    for (let i = 0; i < GRID_SIZE; i++) {
      if (isFilled(grid[i][j])) {
        colCount++;
      } else {
        if (colCount > 0) {
          if (colClueIndex >= COL_CLUES[j].length || colCount !== COL_CLUES[j][colClueIndex]) {
            return false;
          }
          colClueIndex++;
          colCount = 0;
        }
      }
    }
    if (colCount > 0) {
      if (colClueIndex >= COL_CLUES[j].length || colCount !== COL_CLUES[j][colClueIndex]) {
        return false;
      }
      colClueIndex++;
    }
    if (colClueIndex !== COL_CLUES[j].length) {
      return false;
    }
  }
  return true;
}
const Nonogram = ({ onVerify }) => {
  const [grid, setGrid] = reactExports.useState(
    Array.from(
      { length: GRID_SIZE },
      () => Array(GRID_SIZE).fill("EMPTY")
    )
  );
  const [isSolved, setIsSolved] = reactExports.useState(false);
  const handleCellClick = (row, col) => {
    if (isSolved) return;
    const newGrid = grid.map((r) => [...r]);
    const currentCell = newGrid[row][col];
    if (currentCell === "EMPTY") {
      newGrid[row][col] = "FILLED";
    } else if (currentCell === "FILLED") {
      newGrid[row][col] = "CROSSED";
    } else {
      newGrid[row][col] = "EMPTY";
    }
    setGrid(newGrid);
    checkSolution(newGrid);
  };
  const checkSolution = (currentGrid) => {
    if (!checkNonogramSolution(currentGrid, (cell) => cell === "FILLED")) {
      return;
    }
    setIsSolved(true);
    onVerify == null ? void 0 : onVerify(true);
    markLocalTaskSolved("puzzmon_picross");
  };
  const handleReset = () => {
    setGrid(
      Array.from(
        { length: GRID_SIZE },
        () => Array(GRID_SIZE).fill("EMPTY")
      )
    );
    setIsSolved(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-5 p-10 px-5 font-sans bg-gray-100 rounded-xl min-h-screen", children: [
    isSolved && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-3 font-bold text-green-800 bg-green-100 border border-green-200 rounded-lg", children: "🎉 You Solved It! 🎉" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-1.5 p-3 bg-white rounded-lg shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-around p-1 bg-gray-200 rounded-md col-start-2 row-start-1 pb-3", children: COL_CLUES.map((clue, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex flex-col items-center justify-end min-w-[32px] min-h-[32px] gap-1 font-bold text-center text-gray-700",
          children: clue.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: c }, i))
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-end justify-around p-1 bg-gray-200 rounded-md col-start-1 pr-3", children: ROW_CLUES.map((clue, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex items-center justify-end min-w-[32px] min-h-[32px] gap-2 font-bold text-center text-gray-700",
          children: clue.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: c }, i))
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid bg-gray-400 border-2 border-gray-800 gap-[1px]",
          style: { gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` },
          children: grid.map(
            (row, rIndex) => row.map((cell, cIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  handleCellClick(rIndex, cIndex);
                },
                type: "button",
                className: `
                                    w-8 h-8 flex justify-center items-center border border-gray-300 
                                    transition-colors duration-150 ease-in-out
                                    ${cell === "FILLED" ? "bg-gray-800" : "bg-white"}
                                    ${isSolved ? "cursor-not-allowed" : "cursor-pointer"}
                                    ${(cIndex + 1) % 5 === 0 ? "border-r-2 border-r-gray-800" : ""}
                                    ${(rIndex + 1) % 5 === 0 ? "border-b-2 border-b-gray-800" : ""}
                                `,
                children: cell === "CROSSED" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl leading-none text-gray-600", children: "×" })
              },
              `${rIndex}-${cIndex}`
            ))
          )
        }
      )
    ] }),
    !isSolved && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleReset,
        className: "px-6 py-3 text-base font-bold text-white bg-blue-500 border-none rounded-lg cursor-pointer transition-colors hover:bg-blue-600",
        children: "Reset"
      }
    )
  ] });
};
const nonogram_elem = document.getElementById("nonogram-root");
if (nonogram_elem) {
  const root = clientExports.createRoot(nonogram_elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(Nonogram, {}));
} else {
  console.error(
    "Could not mount because #nonogram-root was nowhere to be found"
  );
}
//# sourceMappingURL=DL85bpUR.mjs.map
