const thanksConfirmation = document.querySelector(".thank_you");
const submitButton = document.getElementById("submit");
const mainContainer = document.querySelector(".main_container");
const emailInput = document.getElementById("email");
const errorLabel = document.getElementById("errorLabel");

submitButton.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    emailSpan.textContent = email;
    emailInput.value = '';

    thanksConfirmation.classList.remove("hidden");
    mainContainer.style.display = "none";
  } else {
    errorLabel.classList.add('active');
  }
});

// email validation
function validateEmail(email){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email);
}