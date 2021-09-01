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

// Validation du formulaire complet
function validate() {

  const firstInput = document.getElementById('first');
  const lastInput = document.getElementById('last');
  const emailInput = document.getElementById('email');
  const birthdateInput = document.getElementById('birthdate');
  const quantityInput = document.getElementById('quantity');
  const radioInput = document.getElementsByName('location');
  const radioGroup = document.getElementById('radiogroup');
  const firstCheckboxInput = document.getElementById('checkbox1');

  let firstValue = firstInput.value;
  let lastValue = lastInput.value;
  let emailValue = emailInput.value;
  let birthdateValue = birthdateInput.value;
  let quantityValue = quantityInput.value;
  let radioValue = null;

  let nameRegExp = /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/;
  let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let birthdateRegExp = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/
  let quantityRegExp = /^\d$/

  const isFirstValid = nameRegExp.test(firstValue);
  const isLastValid = nameRegExp.test(lastValue);
  const isEmailValid = emailRegExp.test(emailValue);
  const isBirthdateValid = birthdateRegExp.test(birthdateValue);
  const isQuantityValid = quantityRegExp.test(quantityValue);
  const isFirstChecked = firstCheckboxInput.checked;

  for (var i = 0; i < radioInput.length; i++) {

    if (radioInput[i].checked) {
      radioValue = radioInput[i].value;
      break;
    }
  };

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
      error:"Vous devez entrer vôtre date de naissance"
    },
    // Clef message d'erreur pour le nombre de participations
    quantity: {
      error:"Ce champ doit contenir un nombre de participations"
    },
    radio: {
      error:"Veuillez sélectionné une ville"
    },
    checkbox: {
      error:"Vous devez accepté les conditions général d'utilisation"
    }
  };
  
  validateInput(isFirstValid, firstInput, errorMessage.first.error);

  validateInput(isLastValid, lastInput, errorMessage.last.error);

  validateInput(isEmailValid, emailInput, errorMessage.email.error);

  validateInput(isBirthdateValid, birthdateInput, errorMessage.birthdate.error);

  validateInput(isQuantityValid, quantityInput, errorMessage.quantity.error);

  validateInput(radioValue, radioGroup, errorMessage.radio.error);

  validateInput(isFirstChecked, firstCheckboxInput, errorMessage.checkbox.error);


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