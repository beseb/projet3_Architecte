import { genererAffichageTravaux } from "./gallery.js";
import { affichageModal } from "./dialog.js";

/**
 * Function pour recuperer les travaux depuis l'API ou le localStorage
 */

// Récupération des travaux via le local storage
 export let travaux = window.localStorage.getItem("travaux");

if (travaux === null) {
  // Récupération des élements depuis l'API
  travaux =  await fetch("http://localhost:5678/api/works").then((travaux) =>
    travaux.json()
  );

  // Transformation des pièces en JSON
  const valeurTravaux = JSON.stringify(travaux);
  // Stockage des informations dans le localStorage
  window.localStorage.setItem("travaux", valeurTravaux);
} else {
  travaux = JSON.parse(travaux);
}

// On récupère les travaux, pour les enregistrer dans une variable
genererAffichageTravaux(travaux, "gallery");

/*
 * Utilisation des filtres
 */
// Filtres tous
const boutonTous = document.querySelector(".btnTous");
boutonTous.addEventListener("click", () => {
  genererAffichageTravaux(travaux,"gallery");
});

// Filtres objets
const boutonObjet = document.querySelector(".btnObjets");
boutonObjet.addEventListener("click", () => {
  const travauxObjets = travaux.filter(function (travail) {
    return travail.categoryId === 1;
  });
  // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  genererAffichageTravaux(travauxObjets,"gallery");
});
// Filtres appartements
const boutonAppartements = document.querySelector(".btnAppartements");
boutonAppartements.addEventListener("click", () => {
  const travauxAppartements = travaux.filter(function (travail) {
    return travail.categoryId === 2;
  });
  // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  genererAffichageTravaux(travauxAppartements, "gallery");
});
// Filtres hotel & restaurants
const boutonHotelEtRestaurants = document.querySelector(
  ".btnHotelsEtRestaurants"
);
boutonHotelEtRestaurants.addEventListener("click", () => {
  const travauxHotelEtRestaurants = travaux.filter(function (travail) {
    return travail.categoryId === 3;
  });
  // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  genererAffichageTravaux(travauxHotelEtRestaurants, "gallery");
});

/***
 * Mode édition si token && userId valides
 * affichage de la banniere mode édition et apparition des boutons LogOut et modifier
 * disparition de Login et des filtres
 */
let userId = sessionStorage.getItem("userId");
let token = sessionStorage.getItem("token");

if (userId != null && token != null) {
  let banner = document.querySelector(".bannerEdition");
  banner.style.display = null;
  // le bouton Login disparait
  let loginLink = document.getElementById("loginLink");
  loginLink.style.display = "none";
  loginLink.style.padding = "0px";
  // Le bouton logout apparait
  let logoutLink = document.getElementById("logoutLink");
  logoutLink.style.display = null;
  // Apparait des boutons
  let btnModifierContenu = document.getElementById("btnModifierContenu");
  let btnModifierProjets = document.getElementById("btnModifierProjets");
  btnModifierContenu.style.display = null;
  btnModifierProjets.style.display = null;
  // Disparition des filtres
  let filtres = document.querySelector(".filtres")
  filtres.style.display = "none";
}

/**
 * Ajout d'un eventListener pour log out
 */
let btnLogout = document.getElementById("logoutLink");
btnLogout.addEventListener("click", () => {
  sessionStorage.removeItem("userId");
  sessionStorage.removeItem("token");
});

/**
 * Listener pour affichage de la modale en mode Edition
 */
let btnModifierProjets = document.getElementById("btnModifierProjets")
btnModifierProjets.addEventListener("click", () => {
  affichageModal();
})

