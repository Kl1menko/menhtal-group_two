const nav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".nav-toggle");
const yearEl = document.querySelector("#year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const open = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", String(!open));
    navToggle.setAttribute("aria-expanded", String(!open));
  });
}

document.querySelectorAll("[data-scroll]").forEach((el) => {
  el.addEventListener("click", (event) => {
    const target = event.currentTarget;
    const id = target.getAttribute("data-scroll");
    if (!id) return;
    const section = document.querySelector(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  });
});
