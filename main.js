// import "./sass/main.scss";

const menuBtn = document.querySelector("[menu-btn]");
const overlay = document.querySelector("[overlay]");
const sidebar = document.querySelector("[sidebar]");

// console.log(sidebarToggler);

menuBtn.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";

  if (isOpen ? closeMenu() : openMenu());

  overlay.classList.toggle("active");
});

function openMenu() {
  menuBtn.setAttribute("aria-expanded", "true");
  sidebar.setAttribute("data-state", "opened");
}

function closeMenu() {
  menuBtn.setAttribute("aria-expanded", "false");
  sidebar.setAttribute("data-state", "closing");

  sidebar.addEventListener(
    "animationend",
    () => {
      sidebar.setAttribute("data-state", "slosed");
    },
    { once: true }
  );
}
