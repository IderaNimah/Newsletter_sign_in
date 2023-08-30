const thanksConfirmation = document.querySelector(".thank_you");
const submitButton = document.getElementById("submit");
const mainContainer = document.querySelector(".main_container");
console.log("thanksConfirmation");

submitButton.addEventListener("click", () => {
    thanksConfirmation.classList.remove("hidden")
    mainContainer.style.display="none"
  })