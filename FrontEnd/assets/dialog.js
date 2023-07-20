import { travaux } from "./script.js";
import { genererAffichageTravaux } from "./gallery.js";
 


const overlay = document.querySelector(".overlay")
let modal1 = document.querySelector(".modal1")

export function affichageModal() {
    
    // Vide l'interieur de la modal
    if (modal1) {modal1.innerHTML = ""}
    overlay.style.display = "block";
    modal1.style.display="flex";
    modal1.removeAttribute("aria-hidden");
    modal1.setAttribute("aria-modal", "true");
    // Ferme la modal si l'on clique en dehors
   // modal1.addEventListener("click", closeModal);
  
    modal1.innerHTML = `
    <div class = "modal1-wrapper">
    <div class="divBoutonFermer">
        <button class="modal1-bouton-fermer"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M11.6546 2.05106C12.1235 1.58214 12.1235 0.820611 11.6546 0.351691C11.1856 -0.11723 10.4241 -0.11723 9.95519 0.351691L6.005 4.30563L2.05106 0.355442C1.58214 -0.113479 0.820611 -0.113479 0.351691 0.355442C-0.11723 0.824363 -0.11723 1.58589 0.351691 2.05481L4.30563 6.005L0.355442 9.95894C-0.113479 10.4279 -0.113479 11.1894 0.355442 11.6583C0.824363 12.1272 1.58589 12.1272 2.05481 11.6583L6.005 7.70437L9.95894 11.6546C10.4279 12.1235 11.1894 12.1235 11.6583 11.6546C12.1272 11.1856 12.1272 10.4241 11.6583 9.95519L7.70437 6.005L11.6546 2.05106Z" fill="black"/>
          </svg></button>
    </div>
    <p class="modal1-title">Galerie photo</p>
    <div class="modal1-photos"></div>
   
    <hr>
    <button class="modal1-ajouter-une-photo">Ajouter une photo</button>
    <button class="modal1-supprimer-toutes-photos">Supprimer la galerie</button>
    </div>`
    ;
    genererAffichageTravaux(travaux,"modal")
    ajouterEvenements();
 }
/**
 * Fonction pour fermer la modale
 * @param {} e 
 */
 const closeModal = () => {
     window.setTimeout(function () {
         modal1.style.display = "none";
         overlay.style.display = null;
    
    }, 200)
    modal1.setAttribute("aria-hidden", "true");
    modal1.removeAttribute("aria-modal");
   /* modal1.removeEventListener("click", closeModal);
    modal1
      .querySelector(".js-modal-close")
      .removeEventListener("click", closeModal);*/
  
  };
function ajouterEvenements(){
    const boutonFermer = document.querySelector(".modal1-bouton-fermer")
    if(boutonFermer){
        boutonFermer.addEventListener("click",() => {
            closeModal();
        })
    }
}
