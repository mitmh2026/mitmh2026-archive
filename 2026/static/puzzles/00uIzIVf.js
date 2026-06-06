import "./Cqdl_uWg.js";
const ALPHABET_REPLACEMENT_CHAR = "�";
const ALPHABET_META_SLUG = "7182";
const ALPHABET_SLUG_TO_LETTER = {
  "3842": "A",
  "9283": "B",
  "1736": "C",
  "6147": "D",
  "2074": "E",
  "4519": "F",
  "8063": "G",
  "1259": "H",
  "7642": "I",
  "3961": "J",
  "5823": "K",
  "9350": "L",
  "2871": "M",
  "6714": "N",
  "8402": "O",
  "4295": "P",
  "1906": "Q",
  "3175": "R",
  "7480": "S",
  "6592": "T",
  "2843": "U",
  "9810": "V",
  "1037": "W",
  "5671": "X",
  "8904": "Y",
  "2129": "Z",
  [ALPHABET_META_SLUG]: ALPHABET_REPLACEMENT_CHAR
};
const ALPHABET_LETTER_TO_SLUG = Object.fromEntries(
  Object.entries(ALPHABET_SLUG_TO_LETTER).filter(([slug, _]) => slug !== ALPHABET_META_SLUG).map(([slug, letter]) => [letter, slug])
);
const ALPHABET_SLUGS = Object.keys(ALPHABET_LETTER_TO_SLUG).sort().map((k) => ALPHABET_LETTER_TO_SLUG[k]).concat([ALPHABET_META_SLUG]);
function obfuscateStringFromAvailableLetters(str, availableLetters) {
  const allowedLetters = new Set(
    availableLetters.map((letter) => letter.toUpperCase())
  );
  return str.replace(/[A-Za-z]/g, (char) => {
    return allowedLetters.has(char.toUpperCase()) ? char : ALPHABET_REPLACEMENT_CHAR;
  });
}
export {
  ALPHABET_LETTER_TO_SLUG as A,
  ALPHABET_REPLACEMENT_CHAR as a,
  ALPHABET_SLUGS as b,
  ALPHABET_META_SLUG as c,
  obfuscateStringFromAvailableLetters as o
};
//# sourceMappingURL=00uIzIVf.js.map
