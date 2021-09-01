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
    isValid: false,
    input: document.getElementById('first'),
    error:"Le prénom doit contenir uniquement des lettres, 2 au minimum",
    regExp: /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  // Clef configuration pour le Nom
  last: {
    isValid: false,
    input: document.getElementById('last'),
    error:"Le nom doit contenir uniquement des lettres, 2 au minimum",
    regExp: /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  // Clef configuration pour l'Email
  email: {
    isValid: false,
    input: document.getElementById('email'),
    error:"Vous devez saisir un email valide, exemple : aaa@gmail.bb",
    regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  // Clef configuration pour la date de naissance
  birthdate: {
    isValid: false,
    input: document.getElementById('birthdate'),
    error:"Vous devez entrer vôtre date de naissance",
    regExp: /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/
  },
  // Clef configuration pour le nombre de participations
  quantity: {
    isValid: false,
    input: document.getElementById('quantity'),
    error:"Ce champ doit contenir un nombre de participations",
    regExp: /^\d$/
  },
  radio: {
    isValid: false,
    input: document.getElementsByName('location'),
    error:"Veuillez sélectionné une ville",
    regExp : null
  },
  checkbox: {
    isValid: false,
    input: document.getElementById('checkbox1'),
    error:"Vous devez accepté les conditions général d'utilisation",
    regExp: null
  }
};

// Validation du formulaire complet
function validate() {

  const firstValue = inputsConf.first.input.value;
  const lastValue = inputsConf.last.input.value;
  const emailValue = inputsConf.email.input.value;
  const birthdateValue = inputsConf.birthdate.input.value;
  const quantityValue = inputsConf.quantity.input.value;

  inputsConf.first.isValid = inputsConf.first.regExp.test(firstValue);
  inputsConf.last.isValid = inputsConf.last.regExp.test(lastValue);
  inputsConf.email.isValid = inputsConf.email.regExp.test(emailValue);
  inputsConf.birthdate.isValid = inputsConf.birthdate.regExp.test(birthdateValue);
  inputsConf.quantity.isValid = inputsConf.quantity.regExp.test(quantityValue);
  inputsConf.checkbox.isValid = inputsConf.checkbox.input.checked;

  for (var i = 0; i < inputsConf.radio.input.length; i++) {
    if (inputsConf.radio.input[i].checked) {
      inputsConf.radio.isValid = inputsConf.radio.input[i].value;
      break;
    }
  };

  for (const key in inputsConf) {
    if(inputsConf[key].regExp) {
      console.log(key)
      console.log(inputsConf[key])
      validateInput(inputsConf[key].isValid, inputsConf[key].input, inputsConf[key].error)
    }
  }
  
  if(
    inputsConf.first.isValid && 
    inputsConf.last.isValid &&
    inputsConf.email.isValid &&
    inputsConf.birthdate.isValid &&
    inputsConf.quantity.isValid &&
    inputsConf.radio.isValid &&
    inputsConf.checkbox.isValid
  ) {
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