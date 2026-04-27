import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
const bgAudio = "/2026/static/puzzles/assets/5c7891a90860c585.mp3";
const image1 = "/2026/static/puzzles/assets/7dfab9412fab0d2b.png";
const image10 = "/2026/static/puzzles/assets/60e4e43e0443cbc1.png";
const image11 = "/2026/static/puzzles/assets/7ea21f0b476a6925.png";
const image12 = "/2026/static/puzzles/assets/f1eec6c1f78b0715.png";
const image13 = "/2026/static/puzzles/assets/c980b3443a3c9983.png";
const image14 = "/2026/static/puzzles/assets/5089021250d09779.png";
const image2 = "/2026/static/puzzles/assets/2275b098ad2e6258.png";
const image3 = "/2026/static/puzzles/assets/38a02c1a151152be.png";
const image4 = "/2026/static/puzzles/assets/92259f890567f031.png";
const image5 = "/2026/static/puzzles/assets/941386ae928de357.png";
const image6 = "/2026/static/puzzles/assets/7d64885a928c316b.png";
const image7 = "/2026/static/puzzles/assets/c6104bb6b45fcd03.png";
const image8 = "/2026/static/puzzles/assets/cd1c9ed26d4d67ca.png";
const image9 = "/2026/static/puzzles/assets/389753a1ebd86dfb.png";
const ShoppingSpreeComponent = () => {
  const audioRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const VOLUME_STORAGE_KEY = "hunt-volume";
    const DEFAULT_VOLUME = 0.2;
    const syncVolume = () => {
      if (!audioRef.current) return;
      const savedVolume = localStorage.getItem(VOLUME_STORAGE_KEY);
      const parsedVolume = Number(savedVolume ?? DEFAULT_VOLUME);
      if (!isNaN(parsedVolume)) {
        const clampedVolume = Math.max(0, Math.min(1, parsedVolume));
        if (audioRef.current.volume !== clampedVolume) {
          audioRef.current.volume = clampedVolume;
        }
      }
    };
    syncVolume();
    const interval = setInterval(syncVolume, 200);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "puzzle-root w-full space-y-4 p-8 pt-4 bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
                @keyframes rotAnim {
                    0% { transform: rotate(-1.5deg); }    
                    49.9% { transform: rotate(-1.5deg); }
                    50% { transform: rotate(1.5deg); }
                    100% { transform: rotate(1.5deg); }
                }
                .puzzle-container p {
                    color: #FFFF00 !important;
                    -webkit-text-stroke: 1.5px black !important;
                    font-size: 2rem !important;
                    font-weight: 900 !important;
                    display: inline-block;
                    animation: rotAnim 1.5s steps(1) infinite !important;
                    text-align: center;
                    width: 100%;
                }
            ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic", children: "Finally found everything I needed! I'm exhausted... been running up and down this store all day." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { ref: audioRef, autoPlay: true, loop: true, src: bgAudio, children: /* @__PURE__ */ jsxRuntimeExports.jsx("track", { default: true, kind: "captions", srcLang: "en" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "puzzle-container space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image11,
            alt: "Shibuya T-Shirt",
            className: "mx-auto max-w-full",
            style: { width: "310px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Shibuya T-Shirt" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image13,
            alt: "Michael Kors handbag",
            className: "mx-auto max-w-full",
            style: { width: "334px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Michael Kors handbag" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image3,
            alt: "Duo Cleansing Balm Scrub",
            className: "mx-auto max-w-full",
            style: { width: "278px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Duo Cleansing Balm Scrub" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image9,
            alt: "Compact Wallet",
            className: "mx-auto max-w-full",
            style: { width: "271px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Compact Wallet" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image7,
            alt: "Magnet Pro",
            className: "mx-auto max-w-full",
            style: { width: "349px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Magnet Pro" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image10,
            alt: "Casio Standard",
            className: "mx-auto max-w-full",
            style: { width: "326px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Casio Standard" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image5,
            alt: "Almond Meiji",
            className: "mx-auto max-w-full",
            style: { width: "332px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Almond Meiji" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image2,
            alt: "Lucky cat socks",
            className: "mx-auto max-w-full",
            style: { width: "361px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Lucky cat socks" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image4,
            alt: "Pokémon Scarlet and Violet",
            className: "mx-auto max-w-full",
            style: { width: "369px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Pokémon Scarlet and Violet" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image6,
            alt: "Reguno watch",
            className: "mx-auto max-w-full",
            style: { width: "311px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Reguno watch" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image12,
            alt: "Wine glass (clearance)",
            className: "mx-auto max-w-full",
            style: { width: "310px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Wine glass (clearance)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image8,
            alt: "Keychain",
            className: "mx-auto max-w-full",
            style: { width: "391px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Keychain" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image14,
            alt: "Carry case",
            className: "mx-auto max-w-full",
            style: { width: "388px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Carry case" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image1,
            alt: "Clathas handbag",
            className: "mx-auto max-w-full",
            style: { width: "293px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-center", children: "Clathas handbag" })
      ] })
    ] })
  ] });
};
const elem = document.getElementById("puzzle-content-root");
if (elem) {
  const root = clientExports.createRoot(elem);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingSpreeComponent, {}));
} else {
  console.error(
    "Could not mount App because #puzzle-content-root was nowhere to be found"
  );
}
//# sourceMappingURL=BN_y8ALm.mjs.map
