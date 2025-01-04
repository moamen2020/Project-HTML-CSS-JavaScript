const empties = document.querySelectorAll(".empty");
const fill = document.querySelector(".fill");

fill.addEventListener("dragstart", () => {
  fill.classList.add("hold");
});

fill.addEventListener("dragend", () => {
  fill.classList.remove("hold");
});

for (const empty of empties) {
  empty.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  empty.addEventListener("dragenter", () => {
    empty.classList.add("hovered");
  });

  empty.addEventListener("dragleave", () => {
    empty.classList.remove("hovered");
  });

  empty.addEventListener("drop", () => {
    empty.append(fill);
    empty.classList.remove("hovered");
  });
}
