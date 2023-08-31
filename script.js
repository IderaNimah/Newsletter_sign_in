const thanksConfirmation = document.querySelector(".thank_you");
const submitButton = document.getElementById("submit");
const mainContainer = document.querySelector(".main_container");
console.log("thanksConfirmation");

submitButton.addEventListener("click", () => {
  thanksConfirmation.classList.remove("hidden");
  mainContainer.style.display = "none";
});

document.getElementById("submit").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const emailSpan = document.getElementById("emailSpan");
  emailSpan.textContent = email;

  // Show the confirmation section
  document.querySelector(".thank_you").classList.remove("hidden");
});
