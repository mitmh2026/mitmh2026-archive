import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./Cqdl_uWg.mjs";
import { N as NO_COPY_CLASS } from "./8izHJ_gg.mjs";
import { B as Button } from "./CyHnzWK1.mjs";
import { c as cn } from "./8lrfSi8Z.mjs";
const GLITCH_PUZZMON_BEFRIENDED_KEY = "glitch-puzzmon-befriended";
function GlitchBefriendButton() {
  const [befriended, setBefriended] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setBefriended(
      localStorage.getItem(GLITCH_PUZZMON_BEFRIENDED_KEY) === "true"
    );
  }, []);
  const handleBefriend = reactExports.useCallback(() => {
    if (!befriended) {
      localStorage.setItem(GLITCH_PUZZMON_BEFRIENDED_KEY, "true");
      setBefriended(true);
      window.dispatchEvent(new CustomEvent("glitch-puzzmon-befriended"));
    }
    if (typeof window === "undefined") {
      return;
    }
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("showMonarch", "true");
    currentUrl.searchParams.set("puzzmonSlug", "glitchy");
    window.history.pushState({}, "", currentUrl.toString());
    window.dispatchEvent(new CustomEvent("monarch-open"));
  }, [befriended]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex justify-center", NO_COPY_CLASS), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleBefriend, children: befriended ? "View Glitchy's Monarch entry" : "Befriend the Glitch Puzzmon" }) });
}
const elem = document.getElementById("inferior-shot-befriend-root");
if (elem) {
  clientExports.createRoot(elem).render(/* @__PURE__ */ jsxRuntimeExports.jsx(GlitchBefriendButton, {}));
} else {
  console.error(
    "Could not mount GlitchBefriendButton because #inferior-shot-befriend-root was not found"
  );
}
//# sourceMappingURL=DqrHX3S8.mjs.map
