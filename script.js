// 1. SWITCH BETWEEN LOGIN & REGISTER FORMS
function switchForm(formType) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const tabs = document.querySelectorAll(".tab-btn");

  if (formType === "login") {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    tabs[0].classList.add("active");
    tabs[1].classList.remove("active");
  } else {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    tabs[0].classList.remove("active");
    tabs[1].classList.add("active");
  }
}

function togglePass(inputId) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

const emailInput = document.getElementById("regEmail");
const passInput = document.getElementById("regPassword");
const confirmInput = document.getElementById("confirmPassword");

// Helper to set styling state loops
function setValidation(inputElement, isValid) {
  const container = inputElement.closest(".input-group");
  if (isValid || inputElement.value === "") {
    container.classList.remove("invalid");
  } else {
    container.classList.add("invalid");
  }
}

// Email checking listener
emailInput.addEventListener("input", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(emailInput.value);
  setValidation(emailInput, isValid);
});

// Password checking listener (length >= )
passInput.addEventListener("input", () => {
  const isValid = passInput.value.length >= 6;
  setValidation(passInput, isValid);

  if (confirmInput.value !== "") {
    setValidation(confirmInput, passInput.value === confirmInput.value);
  }
});

// Confirm Password checking listener (match tracking verification)
confirmInput.addEventListener("input", () => {
  const isMatch = passInput.value === confirmInput.value;
  setValidation(confirmInput, isMatch);
});

// 4. SUBMIT FORM GUARD CHECK
function handleSubmit(event) {
  event.preventDefault();

  const activeErrors = event.target.querySelectorAll(".input-group.invalid");
  if (activeErrors.length > 0) {
    alert("Please fix layout errors before submitting!");
    return;
  }

  alert("Form submitted successfully!");
}
