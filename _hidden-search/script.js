const btnSearch = document.querySelector(".btn-search");
const inputSearch = document.querySelector(".input");
const search = document.querySelector(".search");

btnSearch.addEventListener("click", () => {
  search.classList.toggle("active");
  inputSearch.focus();
});
