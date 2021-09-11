function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*
* Récupération des éléments HTML / DOM pour la modal
*/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const modalBody = document.querySelector(".modal-body");


/*
* Événements d'écoute pour le lancement et l'arrêt de la modal
*/
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

/*
* Fonction lancement de la modal
*/
function launchModal() {
  modalbg.style.display = "block";
}

/*
* Fonction fermeture de la modal
*/
function closeModal() {
  modalbg.style.display = "none";
}

/*
* Objet contenant la configuration des input : initialisé a false, lié au input associé,message d'erreur assosié et regExp
*/
const inputsConf = {
  /* Clef pour le Prénom et ses configurations */
  first: {
    isValid: false,
    input: document.getElementById('first'),
    error:"Le prénom doit contenir uniquement des lettres, 2 au minimum",
    regExp: /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  /* Clef pour le Nom et ses configurations */
  last: {
    isValid: false,
    input: document.getElementById('last'),
    error:"Le nom doit contenir uniquement des lettres, 2 au minimum",
    regExp: /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  /* Clef pour l'Email et ses configurations */
  email: {
    isValid: false,
    input: document.getElementById('email'),
    error:"Vous devez saisir un email valide, exemple : aaa@gmail.fr",
    regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  /* Clef pour la date de naissance et ses configurations */
  birthdate: {
    isValid: false,
    input: document.getElementById('birthdate'),
    error:"Vous devez entrer vôtre date de naissance",
    regExp: /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/
  },
  /* Clef pour le nombre de participation et ses configurations */
  quantity: {
    isValid: false,
    input: document.getElementById('quantity'),
    error:"Ce champ doit contenir un nombre de participations",
    regExp: /^\d$/
  },
  /* Clef pour les boutons radio et leurs configurations */
  radio: {
    isValid: false,
    input: document.getElementsByName('location'),
    error:"Veuillez sélectionné une ville",
    regExp : null
  },
  /* Clef pour la case a cocher et ses configurations */
  checkbox: {
    isValid: false,
    input: document.getElementById('checkbox1'),
    error:"Vous devez accepté les conditions général d'utilisation",
    regExp: null
  }
};

/*
* Validation du formulaire complet
*/
function validate() {
  /* Récupération de la valeur des inputs */
  const firstValue = inputsConf.first.input.value;
  const lastValue = inputsConf.last.input.value;
  const emailValue = inputsConf.email.input.value;
  const birthdateValue = inputsConf.birthdate.input.value;
  const quantityValue = inputsConf.quantity.input.value;
  /* 
  * Test des différentes regExp pour les valeurs recu, change isValid a true si la valeur correspond aux conditions 
  */
  inputsConf.first.isValid = inputsConf.first.regExp.test(firstValue);
  inputsConf.last.isValid = inputsConf.last.regExp.test(lastValue);
  inputsConf.email.isValid = inputsConf.email.regExp.test(emailValue);
  inputsConf.birthdate.isValid = inputsConf.birthdate.regExp.test(birthdateValue);
  inputsConf.quantity.isValid = inputsConf.quantity.regExp.test(quantityValue);
  inputsConf.checkbox.isValid = inputsConf.checkbox.input.checked;

  /*
  * Boucle pour les boutons radio, si un bouton et checked la boucle s'arréte et conserve la valeur coché
  */
  for (var i = 0; i < inputsConf.radio.input.length; i++) {
    if (inputsConf.radio.input[i].checked) {
      inputsConf.radio.isValid = inputsConf.radio.input[i].value;
      break;
    }
  };

  /*
  * Pour toutes les clefs dans notre objet inputsConf si on test une regExp sur notre valeur, faire appel a la fonction validateInput
  */
  for (const key in inputsConf) {
    if(inputsConf[key].regExp) {
      console.log(key)
      console.log(inputsConf[key])
      validateInput(inputsConf[key].isValid, inputsConf[key].input, inputsConf[key].error)
    }
  }
  
  /*
  * Si les valeur de tout les inputs corresponde aux conditions et retourne 'true',
  * Création d'une <div> avec une string de remerciement,
  * Application d'un style a cette <div> en reprenant la hauteur de base de la modal,
  * Récupération du bouton "Fermer" crée dans cette même div,
  * Application d'une écoute pour la fermeture au clique du bouton "Fermer"
  */
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

    modalBody.innerHTML="<div class='remerciement'> Merci, vos informations ont été enregistrés ! A bientôt sur <img class='logo-merci' src='Logo.png'> </div>" + "<button class='btn-close-merci'> Fermer </button>";
    modalBody.style.height= bodyHeight + "px";

    const closeBtnMerci = document.querySelectorAll(".btn-close-merci");
    closeBtnMerci.forEach((btn) => btn.addEventListener("click", closeModal));
  }

  return false;

};

/*
* Fonction pour validé ou non un input, 
* Si isValid es "false", encadré rouge et message d'erreur,
* Si isValid es "true", disparition du messsage d'erreur et encadré vert
*/
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