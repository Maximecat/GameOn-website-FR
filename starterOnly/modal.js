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
const modalBody = document.querySelector(".modal-body");


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

// Objet contenant la configuration des input : message d'erreur et regExp
const inputsConf = {
  // Clef configuration pour le Prénom
  first: {
    error:"Le prénom doit contenir uniquement des lettres, 2 au minimum",
    regExp: /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  // Clef configuration pour le Nom
  last: {
    error:"Le nom doit contenir uniquement des lettres, 2 au minimum",
    regExp: /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  // Clef configuration pour l'Email
  email: {
    error:"Vous devez saisir un email valide, exemple : aaa@gmail.bb",
    regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  // Clef configuration pour la date de naissance
  birthdate: {
    error:"Vous devez entrer vôtre date de naissance",
    regExp: /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/
  },
  // Clef configuration pour le nombre de participations
  quantity: {
    error:"Ce champ doit contenir un nombre de participations",
    regExp: /^\d$/
  },
  radio: {
    error:"Veuillez sélectionné une ville",
    regExp : null
  },
  checkbox: {
    error:"Vous devez accepté les conditions général d'utilisation",
    regExp: null
  }
};

const firstInput = document.getElementById('first');
const lastInput = document.getElementById('last');
const emailInput = document.getElementById('email');
const birthdateInput = document.getElementById('birthdate');
const quantityInput = document.getElementById('quantity');
const radioInput = document.getElementsByName('location');
const radioGroup = document.getElementById('radiogroup');
const firstCheckboxInput = document.getElementById('checkbox1');

// Validation du formulaire complet
function validate() {

  const firstValue = firstInput.value;
  const lastValue = lastInput.value;
  const emailValue = emailInput.value;
  const birthdateValue = birthdateInput.value;
  const quantityValue = quantityInput.value;
  let radioValue = null;

  const isFirstValid = inputsConf.first.regExp.test(firstValue);
  const isLastValid = inputsConf.last.regExp.test(lastValue);
  const isEmailValid = inputsConf.email.regExp.test(emailValue);
  const isBirthdateValid = inputsConf.birthdate.regExp.test(birthdateValue);
  const isQuantityValid = inputsConf.quantity.regExp.test(quantityValue);
  const isFirstChecked = firstCheckboxInput.checked;

  for (var i = 0; i < radioInput.length; i++) {

    if (radioInput[i].checked) {
      radioValue = radioInput[i].value;
      break;
    }
  };
  
  validateInput(isFirstValid, firstInput, inputsConf.first.error);

  validateInput(isLastValid, lastInput, inputsConf.last.error);

  validateInput(isEmailValid, emailInput, inputsConf.email.error);

  validateInput(isBirthdateValid, birthdateInput, inputsConf.birthdate.error);

  validateInput(isQuantityValid, quantityInput, inputsConf.quantity.error);

  validateInput(radioValue, radioGroup, inputsConf.radio.error);

  validateInput(isFirstChecked, firstCheckboxInput, inputsConf.checkbox.error);


  if(isFirstValid && isLastValid && isEmailValid && isBirthdateValid && isQuantityValid && isFirstChecked && radioValue) {
    const bodyHeight = modalBody.offsetHeight;

    modalBody.innerHTML='<div class="merci"> Merci, vos informations ont été enregistrés ! A bientôt sur GameOn</div>';
    modalBody.style.height= bodyHeight + "px";
  }

  return false;

};

function validateInput(isValid, inputElement, errorMessage) {
  if (!isValid) {
    inputElement.parentElement.removeAttribute("valid");
    inputElement.parentElement.setAttribute("data-error-visible", true);
    inputElement.parentElement.setAttribute("data-error", errorMessage);
  }else{
    inputElement.parentElement.removeAttribute("data-error-visible");
    inputElement.parentElement.removeAttribute("data-error");
    inputElement.parentElement.setAttribute("valid", true);
  }
}