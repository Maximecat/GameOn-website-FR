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
  const birthdateInput = document.getElementById('birthdate');
  const quantityInput = document.getElementById('quantity');

  let firstValue = firstInput.value;
  let lastValue = lastInput.value;
  let emailValue = emailInput.value;
  let birthdateValue = birthdateInput.value;
  let quantityValue = quantityInput.value;

  let nameRegExp = /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/;
  let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let birthdateRegExp = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/
  let quantityRegExp = /^\d$/
  
  if (nameRegExp.test(firstValue) && nameRegExp.test(lastValue) && emailRegExp.test(emailValue) && birthdateRegExp.test(birthdateValue) && quantityRegExp.test(quantityValue)) {
    console.log('ok');
  } else {
    console.error('pas ok')
  }

  return false;

};