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


// Launch modal events
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// Lancement de la modal
function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture de la modal
function closeModal() {
  modalbg.style.display = "none";
}


// Validation du formulaire complet
function validate() {

  const firstInput = document.getElementById('first');
  const lastInput = document.getElementById('last');
  const emailInput = document.getElementById('email');

  let firstValue = firstInput.value;
  let lastValue = lastInput.value;
  let emailValue = emailInput.value;

  console.log(firstValue, lastValue, emailValue);
  
  return false;

};