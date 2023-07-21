import { travaux } from "./script.js";
import { genererAffichageTravaux } from "./gallery.js";
import { genererCategories } from "./gallery.js";

const overlay = document.querySelector(".overlay");
let modal1 = document.querySelector(".modal1");
let modal2 = document.querySelector(".modal2");
/**
 * Fonction qui génerer l'affichage de la modal 1
 */
export function affichageModal() {
  // Vide l'interieur de la modal
  if (modal1) {
    modal1.innerHTML = "";
  }
  overlay.style.display = "block";
  modal1.style.display = "flex";
  modal1.removeAttribute("aria-hidden");
  modal1.setAttribute("aria-modal", "true");

  modal1.innerHTML = `
    <div class = "modal-wrapper">
    <div class="divBoutonFermer">
        <button class="modal-bouton-fermer"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M11.6546 2.05106C12.1235 1.58214 12.1235 0.820611 11.6546 0.351691C11.1856 -0.11723 10.4241 -0.11723 9.95519 0.351691L6.005 4.30563L2.05106 0.355442C1.58214 -0.113479 0.820611 -0.113479 0.351691 0.355442C-0.11723 0.824363 -0.11723 1.58589 0.351691 2.05481L4.30563 6.005L0.355442 9.95894C-0.113479 10.4279 -0.113479 11.1894 0.355442 11.6583C0.824363 12.1272 1.58589 12.1272 2.05481 11.6583L6.005 7.70437L9.95894 11.6546C10.4279 12.1235 11.1894 12.1235 11.6583 11.6546C12.1272 11.1856 12.1272 10.4241 11.6583 9.95519L7.70437 6.005L11.6546 2.05106Z" fill="black"/>
          </svg></button>
    </div>
    <p class="modal1-title">Galerie photo</p>
    <div class="modal1-photos"></div>
   
    <hr>
    <button class="modal1-ajouter-une-photo">Ajouter une photo</button>
    <button class="modal1-supprimer-toutes-photos">Supprimer la galerie</button>
    </div>`;
  genererAffichageTravaux(travaux, "modal");
  ajouterEvenementsBoutons();

  /**
   * EventListener pour ouvrir la modale 2
   */
  const ajouterPhoto = document.querySelector(".modal1-ajouter-une-photo");
  console.log(ajouterPhoto);
  if (ajouterPhoto) {
    ajouterPhoto.addEventListener("click", () => {
      affichageModal2();
    });
  }
}

/**
 * Fonction pour générer l'affichage de la modal 2
 */
export function affichageModal2() {
  modal2.style.display = "flex";
  modal2.removeAttribute("aria-hidden");
  modal2.setAttribute("aria-modal", "true");

  modal2.innerHTML = `
  <div class = "modal-wrapper" id="modal2">
  <div class="divBoutonFermer">
      <button class="modal-bouton-fermer2"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M11.6546 2.05106C12.1235 1.58214 12.1235 0.820611 11.6546 0.351691C11.1856 -0.11723 10.4241 -0.11723 9.95519 0.351691L6.005 4.30563L2.05106 0.355442C1.58214 -0.113479 0.820611 -0.113479 0.351691 0.355442C-0.11723 0.824363 -0.11723 1.58589 0.351691 2.05481L4.30563 6.005L0.355442 9.95894C-0.113479 10.4279 -0.113479 11.1894 0.355442 11.6583C0.824363 12.1272 1.58589 12.1272 2.05481 11.6583L6.005 7.70437L9.95894 11.6546C10.4279 12.1235 11.1894 12.1235 11.6583 11.6546C12.1272 11.1856 12.1272 10.4241 11.6583 9.95519L7.70437 6.005L11.6546 2.05106Z" fill="black"/>
        </svg></button>
  </div>
  <div class="divBoutonRetour"><button class="modal-bouton-retour"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
  <path d="M0.439478 7.94458C-0.146493 8.53055 -0.146493 9.48217 0.439478 10.0681L7.9399 17.5686C8.52587 18.1545 9.47748 18.1545 10.0635 17.5686C10.6494 16.9826 10.6494 16.031 10.0635 15.445L5.11786 10.5041H19.4999C20.3297 10.5041 21 9.83375 21 9.00402C21 8.17428 20.3297 7.50393 19.4999 7.50393H5.12255L10.0588 2.56303C10.6447 1.97706 10.6447 1.02545 10.0588 0.439478C9.47279 -0.146493 8.52118 -0.146493 7.93521 0.439478L0.43479 7.9399L0.439478 7.94458Z" fill="black"/>
</svg></button>
  </div>
  <p class="modal2-title">Ajout Photo</p>
  <div class="divAjoutPhoto"><img src="/FrontEnd/assets/icons/picture-svgrepo-com-1.jpg" id="previewImg"></img><button class="upload-button"><input type="file" id="file" name="file" accept=".png, .jpg, .jpeg" max-size="4MB">+Ajouter photo</button><p>jpg, png: 4mo max</p></div>
  
  
  <form class="formModal2" action="/upload" method="post" enctype="multipart/form-data" >
  <label name="Titre">Titre</label>
  <input type="text" name="Titre" id="Titre" required></input>
  
  <label for="categorie">Catégorie</label>
  <select name="categorie" id="categorie">
  </select>
    <hr>
    <button class="boutonValiderAjout" type ="submit">Valider</button>
    </form>
  </div>`;
  genererCategories();
  ajouterEvenementsBoutons();

  /**
   * Permettre de télécharger une image, en ayant le input[type="file"] caché, pour plus de design et la preview du document televersé
   */

  const fileInput = document.getElementById("file");
  const uploadButton = document.querySelector(".upload-button");
  // Cet addEventListener permet de cliquer virtuellement sur le input[type="file"]
  uploadButton.addEventListener("click", () => {
    fileInput.click();
  });

  const previewImg = document.getElementById("previewImg");

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        previewImg.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });
}
/**
 * Fonction pour fermer les modales
 *
 */
function closeModal() {
  modal1.style.display = "none";
  modal2.style.display = "none";
  overlay.style.display = null;

  modal1.setAttribute("aria-hidden", "true");
  modal1.removeAttribute("aria-modal");
  modal2.setAttribute("aria-hidden", "true");
  modal2.removeAttribute("aria-modal");
}
/**
 * Fonction pour fermer les modales
 * @param {} e
 */
function closeModal2() {
  modal2.style.display = "none";
  modal2.setAttribute("aria-hidden", "true");
  modal2.removeAttribute("aria-modal");
}
/**
 * Fonction pour ajouter le bouton Fermer & Retour
 */
function ajouterEvenementsBoutons() {
  const boutonFermer = document.querySelector(".modal-bouton-fermer");
  const boutonFermer2 = document.querySelector(".modal-bouton-fermer2");

  const boutonRetour = modal2.querySelector(".modal-bouton-retour");
  if (boutonFermer) {
    boutonFermer.addEventListener("click", () => {
      closeModal();
    });
  }
  if (boutonFermer2) {
    boutonFermer2.addEventListener("click", () => {
      closeModal();
    });
  }
  if (boutonRetour) {
    boutonRetour.addEventListener("click", () => {
      closeModal2();
    });
  }
}

// Fonction pour gener la fermeture des modales lors d'un clic en dehors
function handleClickOutsideModal(event) {
  if (
    (event.target === overlay && event.target !== modal1) ||
    (event.target === document &&
      event.target !== modal1 &&
      event.target !== modal2)
  ) {
    closeModal();
    closeModal2();
  }
}
// eventListener pour écouter les clicks en dehors des modales
document.addEventListener("click", handleClickOutsideModal);
