function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

function validate() {
  const firstInput = document.querySelector("#first");
  const lastInput = document.querySelector("#last");
  const emailInput = document.querySelector("#email");
  const birthdateInput = document.querySelector("#birthdate");
  const quantityInput = document.querySelector("#quantity");

  const firstValue = firstInput.value;
  if(firstValue || firstValue.length < 2) {
    firstInput.parentElement.setAttribute("data-error-visible", true);
    firstInput.parentElement.setAttribute("data-error", "Le prénom est obligatoire et doit contenir 2 caractéres minimum");
  }

  const lastValue = lastInput.value;
  if(lastValue || lastValue.length < 2) {
    lastInput.parentElement.setAttribute("data-error-visible", true);
    lastInput.parentElement.setAttribute("data-error", "Le nom est obligatoire et doit contenir 2 caractéres minimum");
  }

  const emailValue = emailInput.value;
  const birthdateValue = birthdateInput.value;
  const quantityValue = (quantityInput.value);

  console.log(firstValue, lastValue, emailValue, birthdateValue, quantityValue);
  console.log("Fin");
  
}
