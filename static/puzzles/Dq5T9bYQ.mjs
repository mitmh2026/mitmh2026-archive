import { c as clientExports, j as jsxRuntimeExports } from "./Cqdl_uWg.mjs";
import { p as processData, P as PuzzleComponent } from "./Dc4MrPm0.mjs";
const Image501 = "/static/puzzles/assets/40e526fd524db1c7.png";
const Image502 = "/static/puzzles/assets/40e526fd524db1c7.png";
const Image503 = "/static/puzzles/assets/a055dc2a5bb54ec9.png";
const Image504 = "/static/puzzles/assets/49fd38c589e992a0.png";
const Image505 = "/static/puzzles/assets/a055dc2a5bb54ec9.png";
const Image506 = "/static/puzzles/assets/a055dc2a5bb54ec9.png";
const Image507 = "/static/puzzles/assets/10f6a5bdb42ed398.png";
const puzzleData = [
  {
    imageSrc: Image501,
    alt: "A stack of 3 gray trapezoids. Each trapezoid has a circled number in it; the numbers go from 1 at the top to 3 at the bottom.",
    title: [-1, -1, -1, -1, -1],
    fields: [
      [1, 2, 3, -1, -1, -1],
      [4, 5, 6, 7, 8, 9, 10, 11, 12],
      [4, 5, 6, 13, 14, 15, 16, 17, 18]
    ],
    expectedHash: "284ddd4a8e34c67e884839b8c16e9499"
  },
  {
    imageSrc: Image502,
    alt: "A stack of 3 gray trapezoids. Each trapezoid has a circled number in it; the numbers go from 1 at the top to 3 at the bottom.",
    title: [-1, 19, -1, -1, -1, -1, 20, -1],
    fields: [
      [-1, -1, -1, 17, 18],
      [-1, 21, 22, 23, 24, -1, -1, -1],
      [-1, -1, 25, 25, 26]
    ],
    expectedHash: "d0de52e4d371fc0cf9382229949e53fd"
  },
  {
    imageSrc: Image503,
    alt: "A stack of 4 gray trapezoids. Each trapezoid has a circled number in it; the numbers go from 1 at the top to 4 at the bottom.",
    title: "LENGTH",
    fields: [
      [27, 22, 23, -1],
      [-1, 28, -1, 29],
      [30, 31, 31, -1],
      [-1, -1, -1, 32]
    ],
    expectedHash: "5c360137727530e5c345992a2084a004"
  },
  {
    imageSrc: Image504,
    alt: "A stack of 5 gray trapezoids above 3 dots in a vertical line. Assuming the topmost trapezoid is '1', trapezoid 1 has a circled number 1. Trapezoid 2 has a circled number 2. Trapezoid 3 has a circled number 3.",
    title: [33, 34, 35, 36, " ", -1, -1, -1, -1, -1],
    fields: [
      [-1, 21, -1, 37, 36, " ", 33, 34, 35, 36],
      [32, 38, 37, 30, " ", 33, 34, 35, 36],
      [39, 40, 28, 41, 42, -1, -1, " ", 33, 34, 35, 36]
    ],
    expectedHash: "9eab4258810983c81d4dd4fbe0480597"
  },
  {
    imageSrc: Image505,
    alt: "A stack of 4 gray trapezoids. Each trapezoid has a circled number in it; the numbers go from 1 at the top to 4 at the bottom.",
    title: [43, 44, 45, 46],
    fields: [
      [29, 38, -1],
      [21, -1, -1, -1],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18]
    ],
    expectedHash: "f44653536a70d6efae290bd9a5a4075d"
  },
  {
    imageSrc: Image506,
    alt: "A stack of 4 gray trapezoids. Each trapezoid has a circled number in it; the numbers go from 1 at the top to 4 at the bottom.",
    title: [43, 44, 45, 46, "(", 26, 47, 48, 49, 13, ")"],
    fields: [
      [27, 22, 23, 24, -1, -1, -1, -1, -1, -1],
      [20, -1, -1, -1, 19, -1, -1],
      [1, 2, -1, -1, 1, 2],
      [26, 47, 48, 49]
    ],
    expectedHash: "ae61d15851621c0a40b860671d300c7c"
  },
  {
    imageSrc: Image507,
    alt: "A stack of 6 gray trapezoids. Assuming the topmost trapezoid is '1', trapezoid 1 has a circled number 1. Trapezoid 2 has a circled number 2. Trapezoid 4 has a circled number 3. Trapezoid 5 has a circled number 4. Trapezoid 6 has a circled number 5.",
    title: [-1, 31, -1, -1, -1, 50],
    fields: [
      [3, -1, -1, -1, 16, 17],
      [39, 40, 28, 41, 42],
      [20, 19, -1],
      [-1, -1, -1, -1, 50, 51, 52, 31, 31, 25],
      [-1, -1, -1, 51, 52, 31, 31, 25]
    ],
    expectedHash: "2069f7eb111510d27bcbc829395bcd10"
  }
];
const elem = document.getElementById("puzzle-root");
const processedPuzzleData = processData(puzzleData);
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PuzzleComponent,
      {
        data: processedPuzzleData,
        id: "trapezoidal",
        checkSlug: "layers_trapezoidal"
      }
    )
  );
} else {
  console.error(
    "Could not mount App because #puzzle-root was nowhere to be found"
  );
}
//# sourceMappingURL=Dq5T9bYQ.mjs.map
