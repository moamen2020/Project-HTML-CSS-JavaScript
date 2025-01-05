const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Add event listener to the form on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if all required fields are filled
  if (!checkRequired([username, email, password, password2])) {
    // Validate username length
    checkLength(username, 3, 15);
    // Validate password length
    checkLength(password, 6, 25);
    // Validate email format
    checkEmail(email);
    // Check if passwords match
    checkPasswordsMatch(password, password2);
  }
});

// Function to check if required fields are filled
function checkRequired(inputArr) {
  let isRequired = true;
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
      isRequired = false;
    }
  });
  return isRequired;
}

// Function to show error message
function showError(input, message) {
  input.parentElement.classList.add("error");
  const small = input.parentElement.querySelector("small");
  small.innerText = message;
}

// Function to show success message
function showSuccess(input) {
  input.parentElement.classList.add("success");
  input.parentElement.classList.remove("error");
}

// Function to get field name with first letter capitalized
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Function to check the length of input value
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Function to validate email format
function checkEmail(input) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Function to check if passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}
