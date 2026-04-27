import { c as clientExports, j as jsxRuntimeExports } from "./Cqdl_uWg.mjs";
import { p as processData, P as PuzzleComponent } from "./Dc4MrPm0.mjs";
const Image301 = "/2026/static/puzzles/assets/b6bdefe521a88f1d.png";
const Image302 = "/2026/static/puzzles/assets/9cf570deb2ca860d.png";
const Image303 = "/2026/static/puzzles/assets/de84e27e9cd7c318.png";
const Image304 = "/2026/static/puzzles/assets/1b7147a224969890.png";
const Image305 = "/2026/static/puzzles/assets/1ea31a3ad4b131c0.png";
const Image306 = "/2026/static/puzzles/assets/9db74dca341ae041.png";
const Image307 = "/2026/static/puzzles/assets/cf14a45f700302e9.png";
const Image308 = "/2026/static/puzzles/assets/be25ca1bec6939f9.png";
const Image309 = "/2026/static/puzzles/assets/c665758a2c73c81c.png";
const Image310 = "/2026/static/puzzles/assets/c5d5541415bc812d.png";
const puzzleData = [
  {
    imageSrc: Image301,
    alt: "A stack of 7 gray rectangles with black borders. Each rectangle has a circled number in it; the numbers go from 1 at the top to 7 at the bottom.",
    title: [-1, -1, -1, -1, -1, -1, -1, -1, " ", -1, -1, -1, -1, -1, -1],
    fields: [
      [-1, -1, -1, 1],
      [2, 3, 4, 5, -1, -1, -1, -1, 6],
      [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 6],
      [11, 12, 13, 14, 15, 16, 6],
      [-1, -1, -1, -1, -1, -1, 6],
      [5, -1, 17, -1, 18, 19, 6],
      [20, -1, 21, -1, 22]
    ],
    expectedHash: "d325917bd315070db9232937bc07683c"
  },
  {
    imageSrc: Image302,
    alt: "A stack with 6 gray rectangles in 5 layers. The topmost layer has a circled number 1. The 2nd layer has a circled number 2. The 3rd layer has a circled number 3. The 4th layer has two rectangles; the one on the left has a circled number 4, and the one on the right has a circled number 5. The 5th layer has a circled number 6.",
    title: [
      23,
      24,
      25,
      6,
      6,
      " ",
      "(",
      16,
      26,
      27,
      23,
      27,
      " ",
      28,
      29,
      20,
      30,
      27,
      ")"
    ],
    fields: [
      [31, 26, -1, -1],
      [32, 30, 27, 27, -1],
      [33, 34, -1, -1],
      [11, 12, 13, 14, 15, 16],
      [31, -1, -1, -1, -1, -1],
      [35, 29, -1, -1]
    ],
    expectedHash: "34af9cd6879a6ff1d15960bbd544d16c"
  },
  {
    imageSrc: Image303,
    alt: "A stack of 7 gray rectangles with black borders. Assuming the topmost rectangle is '1', rectangle 2 has a circled number 1. Rectangle 3 has a circled number 2. Rectangle 4 has a circled number 3. Rectangle 6 has a circled number 4.",
    title: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      "'",
      -1,
      " ",
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      " ",
      -1,
      -1,
      " ",
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    fields: [
      [-1, 27, 36, -1, 37, -1, 38, 39, 18, 19],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [40, 41, 42, 43, -1, -1, 5, -1, -1, 38, 39, 18, 19],
      [3, 44, " ", -1, -1, 45, 46, 19, 1, 45]
    ],
    expectedHash: "3cecf2deea36eebcd47e27cffc029f02"
  },
  {
    imageSrc: Image304,
    alt: "A stack of 4 gray rectangles with black borders. Each rectangle has a circled number in it; the numbers go from 1 at the top to 4 at the bottom.",
    title: [-1, -1, -1, -1, -1, -1, -1, -1],
    fields: [
      [14, 12, 47, 48, 49, 21],
      [37, 3, -1, -1],
      [37, 17, 19, 50, 7, 31, 51],
      [47, 48, -1, -1]
    ],
    expectedHash: "832ee5bdc81ee49d6a27589506921ae8"
  },
  {
    imageSrc: Image305,
    alt: "A stack of 5 gray rectangles with black borders. Assuming the topmost rectangle is '1', rectangle 1 has a circled number 1. Rectangle 2 has a circled number 2. Rectangle 5 has a circled number 3.",
    title: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      " ",
      -1,
      -1,
      " ",
      40,
      41,
      42,
      -1,
      -1,
      -1,
      -1,
      52
    ],
    fields: [
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [52, -1, 11, 52, 37, 53, 37, -1, 38, 39, 18, 19],
      [35, 16, 27]
    ],
    expectedHash: "302c130b0e166fbd230126d0665a42dd"
  },
  {
    imageSrc: Image306,
    alt: "A stack of 6 gray rectangles with black borders (containing circled numbers 1, 3, 4, 5, and 5 from top to bottom), next to one rectangle containing a circled number 2. The rectangle with the 1 is in the same row as the rectangle with the 2.",
    title: [-1, -1, -1, -1, -1],
    fields: [
      [54, 55, 56, 57],
      [40, 41, 42, 52, 21, 58, 20, 59, 1, -1, 1],
      [51, 19, 44, 27, -1, 54, 55, 56, 57],
      [-1, -1, 35, 34, 49, 1, 58, 53, 45, 1, 6],
      [-1, -1, -1, -1, -1, -1, -1, 6],
      [17, 56, 57, -1, -1, -1, -1, -1, -1, 6]
    ],
    expectedHash: "f7b8a312ab38407583eb34db7fce56e1"
  },
  {
    imageSrc: Image307,
    alt: "A stack of 5 gray rectangles with black borders. Each rectangle has a circled number in it; the numbers go from 1 at the top to 5 at the bottom.",
    title: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      "'",
      -1,
      " ",
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      " ",
      -1,
      -1,
      " ",
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    fields: [
      [-1, 27, 20, 36, "-", -1, -1, -1, -1, -1, 20, 59, 50, -1, 38, 39, 18, 19],
      [60, -1, 61, 62, -1, 45],
      [20, -1, 28, -1, " ", -1, 19, 5, " ", 11, 1, 20, -1, 19, 58, 46, 19, 58],
      [-1, -1, -1, -1, -1, -1],
      [35, -1, 22, 52, -1, -1, 20, -1, -1, 53, -1, 17, 20]
    ],
    expectedHash: "3a1d786ebb259dd51ec8fe0191de1370"
  },
  {
    imageSrc: Image308,
    alt: "Two stacks, each with 5 gray rectangles with black borders. The left stack is as follows. Rectangle 1 has a circled number 1. Rectangle 2 has a circled number 3. Rectangle 3 has a circled number 5, and then a parenthesized circled number 6. Rectangle 4 has a circled number 8. Rectangle 5 has a circled number 10. The right stack is as follows. Rectangle 1 has a circled number 2. Rectangle 2 has a circled number 4. Rectangle 3 has a circled number 7. Rectangle 4 has a circled number 9.",
    title: [-1, -1, -1, -1, -1, -1, -1],
    fields: [
      [44, 51, -1, 27],
      [44, 51, 23, 24, 25, 6, 6],
      [45, 7, 8, 32, 30, -1, -1, -1],
      [45, 7, 8, 9, 10, -1, 34, -1, -1, -1, -1],
      [40, 41, 63, 42, 43],
      [27, 48, 49, -1],
      [40, 41, 63, 42, 43, 64, 65, 66],
      [28, 67, 68, 40, 41, 63, 42, 43],
      [28, 67, 68, 40, 41, 63, 42, 43, 64, 65, 66],
      [-1, -1, -1, -1, -1]
    ],
    expectedHash: "cc3bb1aa21761a63cdffde076af7fba4"
  },
  {
    imageSrc: Image309,
    alt: "A stack of 10 gray rectangles with black borders. Assuming the topmost rectangle is '1', rectangle 1 has a circled number 1. Rectangle 4 has a circled number 2. Rectangle 6 has a circled number 3. Rectangle 8 has a circled number 4. Rectangle 9 has a circled number 5. Rectangle 10 has a circled number 6.",
    title: [-1, -1, -1, -1, -1, -1, -1, -1],
    fields: [
      [45, 7, 8, -1, 14, -1, -1],
      [-1, -1, -1, -1, -1],
      [20, 59, 60, -1, 61, 62, 69, -1, -1, -1],
      [45, 46, 19, 1, 33],
      [65, 40, 41, 63, 43],
      [52, -1, 22]
    ],
    expectedHash: "b7c329e4345c646e6ad4032397441da2"
  },
  {
    imageSrc: Image310,
    alt: "A stack of 6 gray rectangles with black borders. Each rectangle has a circled number in it; the numbers go from 1 at the top to 6 at the bottom.",
    title: [-1, -1, -1, -1, -1, "-", -1, -1, -1, -1, " ", -1, -1, -1, -1],
    fields: [
      [70, 49, 53, 3, 20],
      [4, 71, 69, -1, -1, -1, -1, " ", 72, 73, 74, 75, 76],
      [4, 71, 69],
      [72, 73, 74, 75, 76],
      [70, 3, -1, 33],
      [14, 46, 58, 14, " ", 2, 3, 4, 5]
    ],
    expectedHash: "497d72690c1ca64d621719afe2668fde"
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
        id: "bordered",
        checkSlug: "layers_bordered"
      }
    )
  );
} else {
  console.error(
    "Could not mount App because #puzzle-root was nowhere to be found"
  );
}
//# sourceMappingURL=sHLSKvvq.mjs.map
