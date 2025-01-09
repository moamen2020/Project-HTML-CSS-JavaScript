const movieSelect = document.getElementById("movie");
const container = document.querySelector(".container");
const seate = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

// Populate UI
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * movieSelect.value;
}

// Event Listeners movie select change
movieSelect.addEventListener("change", (e) => {
  updateSelectedCount();
});

// Event Listeners seat click
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
