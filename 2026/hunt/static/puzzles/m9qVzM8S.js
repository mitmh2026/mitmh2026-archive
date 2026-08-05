const select = document.getElementById(
  "casino-meta-banner-select"
);
const panels = Array.from(
  document.querySelectorAll("[data-casino-meta-banner]")
);
const setActiveBanner = (value) => {
  panels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.casinoMetaBanner !== value);
  });
};
if (select && panels.length) {
  setActiveBanner(select.value);
  select.addEventListener("change", (event) => {
    setActiveBanner(event.target.value);
  });
}
//# sourceMappingURL=m9qVzM8S.js.map
