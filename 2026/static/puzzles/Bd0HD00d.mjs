import { c as clientExports, j as jsxRuntimeExports } from "./Cqdl_uWg.mjs";
import { p as processData, P as PuzzleComponent } from "./Dc4MrPm0.mjs";
const Image201 = "/2026/static/puzzles/assets/7460c13cd28809c6.png";
const Image202 = "/2026/static/puzzles/assets/8afd9e868c08b311.png";
const Image203 = "/2026/static/puzzles/assets/478dd980e81fa249.png";
const Image204 = "/2026/static/puzzles/assets/e94c60448e72ecba.png";
const Image205 = "/2026/static/puzzles/assets/22d9e3a50fa4b970.png";
const Image206 = "/2026/static/puzzles/assets/f7b8ca6124596eca.png";
const Image207 = "/2026/static/puzzles/assets/65adc5d00ae4ce7c.png";
const Image208 = "/2026/static/puzzles/assets/ad9a9dda5d2f5f97.png";
const Image209 = "/2026/static/puzzles/assets/679b4e08c218bf21.png";
const puzzleData = [
  {
    imageSrc: Image201,
    alt: "A stack of 5 gray rounded rectangles. Each rectangle has a circled number in it; the numbers go from 1 at the top to 5 at the bottom.",
    title: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    fields: [
      [1, -1, 2, 3, 4, 5, 6, 7, 8],
      [9, -1, -1, -1, 10, 2, 3, 4, 5, 6, 7, 8],
      [10, -1, -1, 2, 3, 4, 5, 6, 7, 8],
      [-1, -1, -1, -1, -1, 2, 3, 4, 5, 6, 7, 8],
      [-1, -1, -1, -1, 2, 3, 4, 5, 6, 7, 8]
    ],
    expectedHash: "2ef43178f500f0da2b4619207a1b3fc6"
  },
  {
    imageSrc: Image202,
    alt: "A stack of 4 gray rounded rectangles. Each rectangle has a circled number in it; the numbers go from 1 at the top to 4 at the bottom.",
    title: [-1, -1, -1, -1, -1, -1, -1, " ", -1, -1, -1, -1, -1],
    fields: [
      [-1, 11, 12, -1, 13, 14],
      [15, -1, 16, 1, -1, 17],
      [16, 18, -1, -1, 19, 11, 9, 2, 20],
      [21, 2, -1, 17, -1, 21, 9, 2, 20]
    ],
    expectedHash: "516ac835843ced359775c276d30f72cb"
  },
  {
    imageSrc: Image203,
    alt: "6 layers comprised of gray rounded rectangles. The topmost row has a circled number 1. The 2nd through 5th rows each have 2 rectangles, ..., then 2 rectangles. The leftmost rectangle in the 3rd row has a circled number 2. The leftmost rectangle in the 4th row has a circled number 3. The 6th layer has a circled number 4. The 7th layer has a circled number 5.",
    title: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    fields: [
      [-1, 22, -1, 2],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, "-", -1, -1, -1, -1],
      [9, 23, -1, -1, 9, 24, "-", 25, -1, 26, 13],
      [25, -1, -1, 9, 24]
    ],
    expectedHash: "a3e7fa9873da8e302f87e737b8ffc2da"
  },
  {
    imageSrc: Image204,
    alt: "A stack of 4 gray rounded rectangles. Each rectangle has a circled number in it; the numbers go from 1 at the top to 4 at the bottom.",
    title: "EARTH",
    fields: [
      [21, -1, -1, -1, -1],
      [-1, 11, -1, -1, 19, -1],
      [-1, -1, -1, 27, 28, " ", 12, 2, 29, 13],
      [-1, -1, -1, 27, 28, " ", 12, 2, 29, 13]
    ],
    expectedHash: "50eda72d07ec528bc7a28731ae90f4e2"
  },
  {
    imageSrc: Image205,
    alt: "A collection of gray rounded rectangles in 4 layers. The rectangles are different heights and widths. There is an empty dotted area that corresponds to a stack of 3 gray rounded rectangles. In the region of the diagram to the left of the empty dotted area, row 2 has a gap where there is a circled number 1. In the stack of 3 gray rectangles, rectangle 1 has a circled number 2 and rectangle 2 has a circled number 3.",
    title: [-1, -1, -1],
    fields: [
      [30, -1, 30, 16, 19],
      [10, 31, 32, 33, 34, 35, 36, 15],
      [2, -1, -1, 16, 21, " ", 18, -1, -1, 26, 31]
    ],
    expectedHash: "243ae9a85413cc2bf457cfd2e0eab147"
  },
  {
    imageSrc: Image206,
    alt: "A stack of 3 gray rectangles with black borders. Assuming the topmost rectangle is '1', rectangle 1 has a circled number 1.",
    title: [10, 31, 32, 33, 34, 35, 36, 15],
    fields: [[-1, -1, -1, -1, " ", -1, -1, -1, -1, -1]],
    expectedHash: "beabb0bdc281ac4134fd68492fa00d44"
  },
  {
    imageSrc: Image207,
    alt: "5 gray rounded rectangles in a 4-layer-high diagram. A rectangle with a circled number 1 is narrower than all the other rectangles, and it is vertically centered. Below that rectangle, on the right side is a large square containing the number 6. On the left side is a stack of 3 rectangles. Assuming the topmost rectangle of this stack is '1', rectangle 1 has a circled number 2. Rectangle 2 has a circled number 3. Rectangle 3 has a circled number 4 and a parenthesized circled number 5. The gap between the stack and the square is vertically centered.",
    title: [-1, -1, -1, -1, -1, -1],
    fields: [
      [-1, -1, -1, -1, -1, -1, -1],
      [30, -1, -1, 18, 14],
      [23, 37, 37, 38],
      [19, 22, 11, 38],
      [35, 20, -1, -1, -1, -1, 9, -1],
      [1, 20, -1, -1, 1, 20]
    ],
    expectedHash: "7f1efe140c146a7fd56979d2a48b311f"
  },
  {
    imageSrc: Image208,
    alt: "3 dots in a vertical line above a stack of 6 gray rounded rectangles. Each rectangle has a circled number in it; the numbers go from 1 at the top to 6 at the bottom.",
    title: [39, 40, 41, 42, 15, " ", -1, -1, " ", 43, 44, 45, 46, 47, 48],
    fields: [
      [11, " ", 39, 40, 41, 42],
      [-1, 11, -1, -1, 49, 18, 49, " ", 17, 49, 26, 49, -1, -1, -1, 32],
      [-1, " ", 39, 40, 41, 42],
      [21, " ", 39, 40, 41, 42],
      [38, " ", 39, 40, 41, 42],
      [43, 44, 45, 46, 47, 48]
    ],
    expectedHash: "4f33c70183a67b0ea56ac5de0ee924c7"
  },
  {
    imageSrc: Image209,
    alt: "A stack with 6 gray rectangles in 4 layers. The topmost layer has 2 rectangles, ..., then 1 rectangle. The 2nd layer has a circled number 1. The 3rd layer has a circled number 2. The 4th layer has a circled number 3.",
    title: [-1, -1, -1, -1, -1],
    fields: [
      [13, -1, 26, 13, -1, -1, 30, 13],
      [21, 11, 30, 15, -1, 38],
      [35, 13, -1, -1, 10, 13]
    ],
    expectedHash: "b5cd598854a988db539678c16bfb3ef3"
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
        id: "rounded",
        checkSlug: "layers_rounded"
      }
    )
  );
} else {
  console.error(
    "Could not mount App because #puzzle-root was nowhere to be found"
  );
}
//# sourceMappingURL=Bd0HD00d.mjs.map
