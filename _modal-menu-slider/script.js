const toggleButton = document.getElementById("toggle");
const closeButton = document.getElementById("close");
const openButton = document.getElementById("open");
const modal = document.getElementById("modal");
const navbar = document.getElementById("navbar");

// Close nav by clicking outside
function closeNavbar(e) {
  if (
    document.body.classList.contains("show-nav") &&
    e.target !== toggleButton &&
    !toggleButton.contains(e.target) &&
    e.target !== navbar &&
    !navbar.contains(e.target)
  ) {
    document.body.classList.toggle("show-nav");
    document.body.removeEventListener("click", closeNavbar);
  } else if (!document.body.classList.contains("show-nav")) {
    document.body.removeEventListener("click", closeNavbar);
  }
}

// Show nav
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
  document.body.addEventListener("click", closeNavbar);
});

// Show modal
openButton.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
closeButton.addEventListener("click", () =>
  modal.classList.remove("show-modal")
);

// Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
