function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*
* Récupération des éléments HTML / DOM 
*/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const modalBody = document.querySelector(".modal-body");

/*
* Ajouts d'évènements au clique pour le lancement et la fermeture de la modal
*/
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

/*
* Fonction de lancement de la modal
*/
function launchModal() {
  modalbg.style.display = "block";
}

/*
* Fonction de fermeture de la modal
*/
function closeModal() {
  modalbg.style.display = "none";
}

/*
* Objet contenant la configuration des inputs : 
* - Initialisé a "false"
* - Lié a l'input associé 
* - Un message d'erreur assosié
* - une regExp (Expression réguliére : décrit l'ensemble de chaînes de caractères possibles)
*/
const inputsConf = {
  /* Clef pour le Prénom */
  first: {
    isValid: false,
    input: document.getElementById('first'),
    error: "Le prénom doit contenir uniquement des lettres, 2 au minimum",
    regExp: /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  /* Clef pour le Nom */
  last: {
    isValid: false,
    input: document.getElementById('last'),
    error: "Le nom doit contenir uniquement des lettres, 2 au minimum",
    regExp: /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  /* Clef pour l'Email */
  email: {
    isValid: false,
    input: document.getElementById('email'),
    error: "Vous devez saisir un email valide, exemple : aaa@gmail.fr",
    regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  /* Clef pour la Date de naissance */
  birthdate: {
    isValid: false,
    input: document.getElementById('birthdate'),
    error: "Vous devez entrer vôtre date de naissance",
    regExp: /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/
  },
  /* Clef pour le Nombre de participation */
  quantity: {
    isValid: false,
    input: document.getElementById('quantity'),
    error: "Ce champ doit contenir un nombre de participations",
    regExp: /^\d$/
  },
  /* Clef pour les Boutons radio */
  radio: {
    isValid: false,
    inputs: document.getElementsByName('location'),
    input: document.getElementById('location1'),
    error: "Veuillez sélectionné une ville",
    regExp: null
  },
  /* Clef pour la case a cocher (CG) */
  checkbox: {
    isValid: false,
    input: document.getElementById('checkbox1'),
    error: "Vous devez vérifier que vous acceptez les termes et conditions",
    regExp: null
  }
};

/*
* Fonction pour la Validation du formulaire
*/
function validate() {
  // Pour la checkbox la valeur de 'isValid' passe a "true" si la case es cochée
  inputsConf.checkbox.isValid = inputsConf.checkbox.input.checked;

  /*
  * Boucle pour les boutons radio, si un bouton et 'checked' la boucle s'arréte et conserve la valeur coché
  */
  for (var i = 0; i < inputsConf.radio.inputs.length; i++) {
    if (inputsConf.radio.inputs[i].checked) {
      inputsConf.radio.isValid = inputsConf.radio.inputs[i].value;
      break;
    }
  };

  /*
  * Pour toutes les clefs dans notre objet inputsConf,
  * Si les clefs contiennent une regExp, 
  * Changement de la valeur "false" de 'isValid' par la nouvelle valeur inscrite dans le champ, soumis au test de la regExp assosié.
  * Faire appel a la fonction displayIsValidInput, permettant d'afficher l'erreur ou la validation sur l'input.
  */
  for (const key in inputsConf) {
    if (inputsConf[key].regExp) {
      inputsConf[key].isValid = inputsConf[key].regExp.test(inputsConf[key].input.value);
    }
    displayIsValidInput(inputsConf[key].isValid, inputsConf[key].input, inputsConf[key].error);
  }

  /*
  * Si toutes les valeurs des inputs correspondent aux conditions(regExp,checked), donc retourne 'true',
  * Faire appel a la fonction displayThanks (Remerciement).
  */
  if (
    inputsConf.first.isValid &&
    inputsConf.last.isValid &&
    inputsConf.email.isValid &&
    inputsConf.birthdate.isValid &&
    inputsConf.quantity.isValid &&
    inputsConf.radio.isValid &&
    inputsConf.checkbox.isValid
  ) {
    displayThanks();
  }

  return false;
};

/*
* Fonction pour afficher sur l'input l'erreur ou la validation du champ, 
* Si isValid retourne "false", affiche un encadré rouge et message d'erreur,
* Si isValid retourne "true", disparition de l'encadré rouge et du messsage d'erreur, pour un encadré vert.
*/
function displayIsValidInput(isValid, inputElement, errorMessage) {
  if (!isValid) {
    inputElement.parentElement.removeAttribute("valid");
    inputElement.parentElement.setAttribute("data-error-visible", true);
    inputElement.parentElement.setAttribute("data-error", errorMessage);
  } else {
    inputElement.parentElement.removeAttribute("data-error-visible");
    inputElement.parentElement.removeAttribute("data-error");
    inputElement.parentElement.setAttribute("valid", true);
  }
}

/*
* Fonction pour afficher une fenêtre de remerciement,
* Récupération de la taille de la modal de base,
* Création de la modal de remerciement avec son message et un bouton "Fermer",
* Application de la taille de la modal de base a celle de remerciement,
* Récupération du bouton "Fermer",
* Ajout d'un évènement de fermeture au clique sur le bouton.
*/
function displayThanks() {
  const bodyHeight = modalBody.offsetHeight;

  modalBody.innerHTML = `
    <div class="remerciement">
      Merci, vos informations ont été enregistrés ! A bientôt sur <img class='logo-merci' src='/public/img/Logo.png'>
    </div>
    <button class="btn-submit" id="btn-close-merci"> Fermer </button>
    `;

  modalBody.style.height = bodyHeight + "px";

  const closeBtnMerci = document.getElementById("btn-close-merci");
  closeBtnMerci.addEventListener("click", closeModal);
}