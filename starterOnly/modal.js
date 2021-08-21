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

  const isFirstValid = nameRegExp.test(firstValue);
  const isLastValid = nameRegExp.test(lastValue);
  const isEmailValid = emailRegExp.test(emailValue);
  const isBirthdateValid = birthdateRegExp.test(birthdateValue);
  const isQuantityValid = quantityRegExp.test(quantityValue);

  const errorMessage = {
    // Clef message d'erreur pour le Prénom
    first: {
      error:"Le prénom doit contenir uniquement des lettres, 2 au minimum"
    },
    // Clef message d'erreur pour le Nom
    last: {
      error:"Le nom doit contenir uniquement des lettres, 2 au minimum"
    },
    // Clef message d'erreur pour l'Email
    email: {
      error:"Vous devez saisir un email valide, exemple : aaa@gmail.bb"
    },
    // Clef message d'erreur pour la date de naissance
    birthdate: {
      error:"Vous devez entrer votre date de naissance."
    },
    // Clef message d'erreur pour le nombre de participations
    quantity: {
      error:"Ce champ doit contenir un nombre de participations"
    }
  };
  
  if (!isFirstValid) {
    firstInput.parentElement.setAttribute("data-error-visible", true);
    firstInput.parentElement.setAttribute("data-error", errorMessage.first.error);
  }
  if (!isLastValid) {
    lastInput.parentElement.setAttribute("data-error-visible", true);
    lastInput.parentElement.setAttribute("data-error", errorMessage.last.error);
  }
  if (!isEmailValid) {
    emailInput.parentElement.setAttribute("data-error-visible", true);
    emailInput.parentElement.setAttribute("data-error", errorMessage.email.error);
  }
  if (!isBirthdateValid) {
    birthdateInput.parentElement.setAttribute("data-error-visible", true);
    birthdateInput.parentElement.setAttribute("data-error", errorMessage.birthdate.error);
  }
  if (!isQuantityValid) {
    quantityInput.parentElement.setAttribute("data-error-visible", true);
    quantityInput.parentElement.setAttribute("data-error", errorMessage.quantity.error);
  };

  return false;

};