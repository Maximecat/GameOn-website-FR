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
  const checkboxInput = document.getElementsByName('location');

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
      error:"Vous devez entrer votre date de naissance"
    },
    // Clef message d'erreur pour le nombre de participations
    quantity: {
      error:"Ce champ doit contenir un nombre de participations"
    },
    radio: {
      error:"Veuillez sélectionné une ville"
    }
  };
  
  if (!isFirstValid) {
    firstInput.parentElement.removeAttribute("valid");
    firstInput.parentElement.setAttribute("data-error-visible", true);
    firstInput.parentElement.setAttribute("data-error", errorMessage.first.error);
  }else{
    firstInput.parentElement.removeAttribute("data-error-visible");
    firstInput.parentElement.removeAttribute("data-error");
    firstInput.parentElement.setAttribute("valid", true);
  }

  if (!isLastValid) {
    lastInput.parentElement.removeAttribute("valid");
    lastInput.parentElement.setAttribute("data-error-visible", true);
    lastInput.parentElement.setAttribute("data-error", errorMessage.last.error);
  }else{
    lastInput.parentElement.removeAttribute("data-error-visible");
    lastInput.parentElement.removeAttribute("data-error");
    lastInput.parentElement.setAttribute("valid", true);
  }

  if (!isEmailValid) {
    emailInput.parentElement.removeAttribute("valid");
    emailInput.parentElement.setAttribute("data-error-visible", true);
    emailInput.parentElement.setAttribute("data-error", errorMessage.email.error);
  }else{
    emailInput.parentElement.removeAttribute("data-error-visible");
    emailInput.parentElement.removeAttribute("data-error");
    emailInput.parentElement.setAttribute("valid", true);
  }

  if (!isBirthdateValid) {
    birthdateInput.parentElement.removeAttribute("valid");
    birthdateInput.parentElement.setAttribute("data-error-visible", true);
    birthdateInput.parentElement.setAttribute("data-error", errorMessage.birthdate.error);
  }else{
    birthdateInput.parentElement.removeAttribute("data-error-visible");
    birthdateInput.parentElement.removeAttribute("data-error");
    birthdateInput.parentElement.setAttribute("valid", true);
  }

  if (!isQuantityValid) {
    quantityInput.parentElement.removeAttribute("valid");
    quantityInput.parentElement.setAttribute("data-error-visible", true);
    quantityInput.parentElement.setAttribute("data-error", errorMessage.quantity.error);
  }else{
    quantityInput.parentElement.removeAttribute("data-error-visible");
    quantityInput.parentElement.removeAttribute("data-error");
    quantityInput.parentElement.setAttribute("valid", true);
  };

  for (var i = 0; i < checkboxInput.length; i++) {

    if (checkboxInput[i].checked) {

      return checkboxInput[i].value;

    }
  }

  return false;

};