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
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");
const checkboxInput = document.querySelector(".checkbox-input");



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

// Configuration des clefs pour les différent Inputs
const inputConf = {
  // Paramétres de la clef pour le Prénom
  first: {
    isValid: false,
    error:"Le prénom doit contenir uniquement des lettres, 2 au minimum",
    regExp:/^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  // Paramétres de la clef pour le Nom
  last: {
    isValid: false,
    error:"Le nom doit contenir uniquement des lettres, 2 au minimum",
    regExp:/^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  // Paramétres de la clef pour l'Email
  email: {
    isValid: false,
    error:"Vous devez saisir un email valide, exemple : aaa@gmail.bb",
    regExp:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  // Paramétres de la clef pour la Date
  birthdate: {
    isValid: false,
    error:"Le format requis est : 'jj/mm/aaaa' ",
    regExp:/^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/
  },
  // Paramétres de la clef pour le Nombre
  quantity: {
    isValid: false,
    error:"Ce champ doit contenir un nombre de participations",
    regExp:/^\d$/
  }
};

// Ecoute la modification du Prénom
firstInput.addEventListener('change', function(event){
  validateByRegExp(event.target, inputConf.first)
});
// Ecoute la modification du Nom
lastInput.addEventListener('change', function(event){
  validateByRegExp(event.target, inputConf.last)
});
// Ecoute la modification de l'Email
emailInput.addEventListener('change', function(event){
  validateByRegExp(event.target, inputConf.email)
});
// Ecoute la modification de la Date
birthdateInput.addEventListener('change', function(event){
  validateByRegExp(event.target, inputConf.birthdate)
});
// Ecoute la modification du Nombre
quantityInput.addEventListener('change', function(event){
  validateByRegExp(event.target, inputConf.quantity)
});

// Validation d'un input donné en paramètre dans "event",
// selon la configuration donnée en paramètre dans "conf"
function validateByRegExp(element, conf) {
  // Recupération de la valeur de l'input
  const value = element.value;

  // Test de la valeur selon la configuration donnée
  let testValue = conf.regExp.test(value);

  // Résultat du test des regExp pour les inputs
  if (testValue) {
    // Applique "valid",l'element sera donc entouré par du vert
    element.parentElement.setAttribute("valid", true);
    // Supprime "data-error-visible", car il n'y a pas d'erreur dans ce cas
    element.parentElement.removeAttribute("data-error-visible");
    // Supprime "data-error", car il n'y a pas d'erreur dans ce cas 
    element.parentElement.removeAttribute("data-error");
    // Modification de la valeur de "isValid" a true, validera le champ pour l'envoi du formulaire
    conf.isValid = true;
  } else {
    // Supprime l'attribut "valid", car il y a une erreur
    element.parentElement.removeAttribute("valid");
    // Applique "data-error-visible",l'element sera donc entouré par du rouge
    element.parentElement.setAttribute("data-error-visible", true);
    // On ajoute le message d'erreur correspondant a l'input testé
    element.parentElement.setAttribute("data-error", conf.error);
    // Laisse la valeur de "isValid" a false, ne validera pas le champ pour l'envoi du formulaire
    conf.isValid = false;
  }
};


  const checkboxInput = document.querySelector(".checkbox-input");
  const checkboxTown1 = document.querySelector("#location1");
  const checkboxTown2 = document.querySelector("#location2");
  const checkboxTown3 = document.querySelector("#location3");
  const checkboxTown4 = document.querySelector("#location4");
  const checkboxTown5 = document.querySelector("#location5");
  const checkboxTown6 = document.querySelector("#location6");
  const checkboxCondition1 = document.querySelector("#checkbox1");
  const checkboxCondition2 = document.querySelector("#checkbox2");
  const checkboxTownTab = [checkboxTown1, checkboxTown2, checkboxTown3, checkboxTown4, checkboxTown5, checkboxTown6] = false;
  const checkConditionsTab = [checkboxCondition1, checkboxCondition2] = false;

// Validation du formulaire complet
function validate() {

  if(inputConf.first.isValid && inputConf.last.isValid && inputConf.email.isValid && inputConf.birthdate.isValid && inputConf.quantity.isValid && checkboxInput.checked) {
    
    console.log("ok");
  } else {
    console.log("Le formulaire n'est pas complet, veuillez vérifier les champs erroné.");
  }
};