const navToggleButton = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

navToggleButton.addEventListener("click", () => {
  const isVisible = nav.getAttribute("data-visible") == "true";
  if (isVisible) {
    nav.setAttribute("data-visible", false);
    navToggleButton.setAttribute("aria-expanded", false);
  } else {
    nav.setAttribute("data-visible", true);
    navToggleButton.setAttribute("aria-expanded", true);
  }
});
