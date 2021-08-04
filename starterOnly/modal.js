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
const firstInput = document.querySelector("#first");
const lastInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");

// Launch modal events
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture de la modal
function closeModal() {
  modalbg.style.display = "none";
}

// Configuration des clefs pour les différent Inputs
const inputConf = {
  // Paramétres de la clef pour le Prénom
  first: {
    error:"Vous devez ecrire un prénom avec 2 caractéres minimum",
    regExp:/^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  // Paramétres de la clef pour le Nom
  last: {
    error:"Vous devez ecrire un nom avec 2 caractéres minimum",
    regExp:/^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  // Paramétres de la clef pour l'Email
  email: {
    error:"Vous devez saisir un email valide",
    regExp:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  }
};

// Ecoute la modification du Prénom
firstInput.addEventListener('change', function(event){
  validateByRegExp(event, inputConf.first);
});
// Ecoute la modification du Nom
lastInput.addEventListener('change', function(event){
  validateByRegExp(event, inputConf.last)
});
// Ecoute la modification de l'Email
emailInput.addEventListener('change', function(event){
  validateByRegExp(event, inputConf.email)
});

// Validation d'un input donné en paramètre dans "event",
// selon la configuration donnée en paramètre dans "conf"
function validateByRegExp(event, conf) {
  // Recupération de la valeur de l'input
  const value = event.srcElement.value;

  // Test de la valeur selon la configuration donnée
  let testValue = conf.regExp.test(value);

  // Résultat du test des regExp pour les inputs
  if (testValue) {
    // Applique "valid",l'element sera donc entouré par du vert
    event.srcElement.parentElement.setAttribute("valid", true);
    // Supprime "data-error-visible", car il n'y a pas d'erreur dans ce cas
    event.srcElement.parentElement.removeAttribute("data-error-visible");
    // Supprime "data-error", car il n'y a pas d'erreur dans ce cas 
    event.srcElement.parentElement.removeAttribute("data-error");
  } else {
    // Supprime l'attribut "valid", car il y a une erreur
    event.srcElement.parentElement.removeAttribute("valid");
    // Applique "data-error-visible",l'element sera donc entouré par du rouge
    event.srcElement.parentElement.setAttribute("data-error-visible", true);
    // On ajoute le message d'erreur correspondant a l'input testé
    event.srcElement.parentElement.setAttribute("data-error", conf.error);
  }
}

// Validation du formulaire complet
function validate() {
  console.log("validation de tout le formulaire");
};