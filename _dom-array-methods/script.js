const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");
const clearData = document.getElementById("clear-data");

// Store the data in an array
let data = [];

// Get 3 random users
getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
  const user = await fetch("https://randomuser.me/api");
  const data = await user.json();
  const userObj = data.results[0];

  const newUser = {
    name: `${userObj.name.first} ${userObj.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

// Double the money of each user
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

// Show only millionaires
function showMillionaires() {
  data = data.filter((user) => user.money > 1000000);

  updateDOM();
}

// Sort users by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

// Calculate the total wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthElement = document.createElement("div");
  wealthElement.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthElement);
}

// remove User from the array
function removeData() {
  data = [];
  updateDOM();
}

// Add new user to the data array
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update the DOM
function updateDOM(providedData = data) {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format number as money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// Event listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
showMillionairesBtn.addEventListener("click", showMillionaires);
sortBtn.addEventListener("click", sortByRichest);
calculateWealthBtn.addEventListener("click", calculateWealth);
clearData.addEventListener("click", removeData);
