import { genererAffichageTravaux } from "./gallery.js";

// Récupération des travaux via le local storage
export let travaux = window.localStorage.getItem("travaux");

if (travaux === null) {
  // Récupération des élements depuis l'API
  travaux = await fetch("http://localhost:5678/api/works").then((travaux) =>
    travaux.json()
  );
  console.log(travaux);

  // Transformation des pièces en JSON
  const valeurTravaux = JSON.stringify(travaux);
  // Stockage des informations dans le localStorage
  window.localStorage.setItem("travaux", valeurTravaux);
} else {
  travaux = JSON.parse(travaux);
}

genererAffichageTravaux(travaux);

/*
 * Utilisation des filtres
 */
// Filtres tous
const boutonTous = document.querySelector(".btnTous");
boutonTous.addEventListener("click", () => {
  genererAffichageTravaux(travaux);
});

// Filtres objets
const boutonObjet = document.querySelector(".btnObjets");
boutonObjet.addEventListener("click", () => {
  const travauxObjets = travaux.filter(function (travail) {
    return travail.categoryId === 1;
  });
  // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  genererAffichageTravaux(travauxObjets);
});
// Filtres appartements
const boutonAppartements = document.querySelector(".btnAppartements");
boutonAppartements.addEventListener("click", () => {
  const travauxAppartements = travaux.filter(function (travail) {
    return travail.categoryId === 2;
  });
  // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  genererAffichageTravaux(travauxAppartements);
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
  genererAffichageTravaux(travauxHotelEtRestaurants);
});
