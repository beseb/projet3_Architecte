import { travaux } from "./script.js";
import { genererAffichageTravaux } from "./gallery.js";
import { genererCategories } from "./gallery.js";

const overlay = document.querySelector(".overlay");
let modal1 = document.querySelector(".modal1");
let modal2 = document.querySelector(".modal2");
let token = sessionStorage.getItem("token");

/**
 * Fonction qui génère l'affichage de la modal 1
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
  if (ajouterPhoto) {
    ajouterPhoto.addEventListener("click", () => {
      affichageModal2();
    });
  }
  /**
   * EventListener pour gérer la création des boutons Move et Delete
   */
  const figures = document.querySelectorAll(".modal-wrapper figure");

  figures.forEach((figure) => {
    // Création des boutons pour chaque figure
    const divBoutons = document.createElement("div");
    const boutonMove = document.createElement("button");
    const boutonDelete = document.createElement("button");
    // Bouton move
    boutonMove.classList.add("movePhoto");
    boutonMove.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"  >
    <rect width="17" height="17" rx="2" fill="none" />
    <path  d="M9.05089 3.20363C8.77938 2.93212 8.33845 2.93212 8.06694 3.20363L6.6768 4.59377C6.40529 4.86528 6.40529 5.30621 6.6768 5.57772C6.94831 5.84924 7.38925 5.84924 7.66076 5.57772L7.86493 5.37355V7.86493H5.37355L5.57772 7.66076C5.84924 7.38925 5.84924 6.94831 5.57772 6.6768C5.30621 6.40529 4.86528 6.40529 4.59377 6.6768L3.20363 8.06694C2.93212 8.33845 2.93212 8.77938 3.20363 9.05089L4.59377 10.441C4.86528 10.7125 5.30621 10.7125 5.57772 10.441C5.84924 10.1695 5.84924 9.72858 5.57772 9.45707L5.37355 9.2529H7.86493V11.7465L7.66076 11.5423C7.38925 11.2708 6.94831 11.2708 6.6768 11.5423C6.40529 11.8138 6.40529 12.2547 6.6768 12.5262L8.06694 13.9164C8.33845 14.1879 8.77938 14.1879 9.05089 13.9164L10.441 12.5262C10.7125 12.2547 10.7125 11.8138 10.441 11.5423C10.1695 11.2708 9.72858 11.2708 9.45707 11.5423L9.2529 11.7465V9.25507H11.7465L11.5423 9.45924C11.2708 9.73076 11.2708 10.1717 11.5423 10.4432C11.8138 10.7147 12.2547 10.7147 12.5262 10.4432L13.9164 9.05306C14.1879 8.78155 14.1879 8.34062 13.9164 8.06911L12.5262 6.67897C12.2547 6.40746 11.8138 6.40746 11.5423 6.67897C11.2708 6.95048 11.2708 7.39142 11.5423 7.66293L11.7465 7.8671H9.25507V5.37355L9.45924 5.57772C9.73076 5.84924 10.1717 5.84924 10.4432 5.57772C10.7147 5.30621 10.7147 4.86528 10.4432 4.59377L9.05306 3.20363H9.05089Z" fill="white"/>
        </svg>`;
    boutonMove.style.display = "none";
    // Bouton Delete
    boutonDelete.classList.add("deletePhoto");
    boutonDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
    <path d="M2.71607 0.35558C2.82455 0.136607 3.04754 0 3.29063 0H5.70938C5.95246 0 6.17545 0.136607 6.28393 0.35558L6.42857 0.642857H8.35714C8.71272 0.642857 9 0.930134 9 1.28571C9 1.64129 8.71272 1.92857 8.35714 1.92857H0.642857C0.287277 1.92857 0 1.64129 0 1.28571C0 0.930134 0.287277 0.642857 0.642857 0.642857H2.57143L2.71607 0.35558ZM0.642857 2.57143H8.35714V9C8.35714 9.70915 7.78058 10.2857 7.07143 10.2857H1.92857C1.21942 10.2857 0.642857 9.70915 0.642857 9V2.57143ZM2.57143 3.85714C2.39464 3.85714 2.25 4.00179 2.25 4.17857V8.67857C2.25 8.85536 2.39464 9 2.57143 9C2.74821 9 2.89286 8.85536 2.89286 8.67857V4.17857C2.89286 4.00179 2.74821 3.85714 2.57143 3.85714ZM4.5 3.85714C4.32321 3.85714 4.17857 4.00179 4.17857 4.17857V8.67857C4.17857 8.85536 4.32321 9 4.5 9C4.67679 9 4.82143 8.85536 4.82143 8.67857V4.17857C4.82143 4.00179 4.67679 3.85714 4.5 3.85714ZM6.42857 3.85714C6.25179 3.85714 6.10714 4.00179 6.10714 4.17857V8.67857C6.10714 8.85536 6.25179 9 6.42857 9C6.60536 9 6.75 8.85536 6.75 8.67857V4.17857C6.75 4.00179 6.60536 3.85714 6.42857 3.85714Z" fill="white"/>
  </svg>`;
    // Boucle pour attribuer le bon ID aux boutons delete
    for (let i = 0; i < travaux.length; i++) {
      boutonDelete.setAttribute("data-id", travaux[i].id);
    }
    // DivBoutons
    divBoutons.classList.add("boutons");
    // Ajout des boutons à la div bouton et sur chaque figure
    divBoutons.appendChild(boutonDelete);
    divBoutons.appendChild(boutonMove);
    figure.appendChild(divBoutons);
    /**
     * Listener pour faire apparaitre ou non les boutons Move
     */
    // Ajoutez les événements "mouseenter" et "mouseleave" sur chaque figure
    figure.addEventListener("mouseover", () => {
      boutonMove.style.display = "block";
    });

    figure.addEventListener("mouseout", () => {
      boutonMove.style.display = "none";
    });
    /**
     * EventListener pour Suppression des images, individuellement
     */
    let deletePhotoButtons = document.querySelectorAll(".deletePhoto");

    deletePhotoButtons.forEach((button) => {
      button.addEventListener("click", (event) => {

        // Empecher la propagation de l'évenement
        removeModal1CloseEvent()
        // Récupération de l'id du bouton cliqué, qui correspond à la photo concerné
        let dataId = button.dataset.id;
        //Appel à la fonction supprimerPhoto
        supprimerPhoto(dataId);
        // Regeneration de la gallerie
        affichageModal()
        document.addEventListener("click", handleClickOutsideModal)
      });
    });
  });
}
/**
 * Fonction qui permet de supprimer individuellement les photos
 */

async function supprimerPhoto(id) {
  await fetch("http://localhost:5678/api/works/" + id, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
      Accept: "*/*",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("La photo n°" + id + " a été supprimée avec succès !");
        // Suppression du sessionStorage pour forcer à récuperer le nouvel ensemble de travaux depuis l'API plus tard
        window.sessionStorage.removeItem("travaux");
      } else {
        alert("La suppression a échouée !");
        console.log(response);
      }
    })
    .catch((error) => {
      alert("Une erreur s'est produite :", error);
    });

}

/**
 * Fonction pour générer l'affichage de la modal 2
 */
function affichageModal2() {
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
  
  <form class="formModal2"  method="post" enctype="multipart/form-data" >
  <p class="modal2-title">Ajout Photo</p>
  <div class="divAjoutPhoto">
  <img src="/FrontEnd/assets/icons/picture-svgrepo-com-1.jpg" class="previewImg icone"></img><p id = "infoAjout">jpg, png: 4mo max</p></div>
  
  <label id="labelAjoutPhoto">+ Ajouter photo   <input type="file" name="file" id="inputFile" required /></label>  

  <label name="titre">Titre</label>
  <input type="text" name="inputTitre" id="titre" required></input>
  
  <label for="categorie">Catégorie</label>
  <select name="inputCategorie" id="categorie" required>
  </select>
    <hr>
    <button class="boutonValiderAjoutPhoto" type ="submit" >Valider</button>
    </form>
  `;
  genererCategories();
  ajouterEvenementsBoutons();

  /**
   * Permettre de télécharger une image, en ayant le input[type="file"] caché, pour plus de design et la preview du document televersé
   */
  const fileInput = document.getElementById("inputFile");
  const labelAjoutPhoto = document.getElementById("labelAjoutPhoto");
  const infoAjout = document.getElementById("infoAjout")

  // Affichage de la preview image
  const previewImg = document.querySelector(".previewImg");
  // Si l'image de preview est l'icone, elle à une classe affectée en CSS (".previewImg.icone") pour gérer sa hauteur/largeur
  // Ici, on récupère le fichier à télécharger et on le visualise dans la boite de dialogue
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        previewImg.src = reader.result;
        // Affichage de la preview image à 100% de sa hauteur, en lui retirant sa class CSS "icone"
        previewImg.classList.remove("icone");
        // Disparition du bouton upload et du texte d'infoAjout
        labelAjoutPhoto.style.display = "none";
        infoAjout.style.display = "none"
        
      });
      reader.readAsDataURL(file);
    }
  });

  /**
   * Gestion du formulaire d'ajout photo et Ajout Photo à l'API
   */

  let boutonValiderAjoutPhoto = document.querySelector(
    ".boutonValiderAjoutPhoto"
  );

  if (boutonValiderAjoutPhoto) {
    // Fonction pour vérifier les données du formulaire
    function checkInputs() {
      const inputTitre = document.querySelector("[name=inputTitre]");
      const selectCategorie = document.querySelector("[name=inputCategorie]");
      const fileInput = document.getElementById("inputFile");

      // Vérifiez que le titre n'est pas vide
      if (inputTitre.value.trim() === "") {
        alert("Veuillez entrer un titre.");
        return false;
      }

      // Vérifiez que la catégorie est sélectionnée
      if (selectCategorie.value === "") {
        alert("Veuillez sélectionner une catégorie.");
        return false;
      }

      // Vérifiez que le fichier est téléversé
      if (fileInput.files.length === 0) {
        alert("Veuillez sélectionner un fichier.");
        return false;
      }

      // Si tout est valide, retournez true
      boutonValiderAjoutPhoto.style.background = "#1d6154";
      boutonValiderAjoutPhoto.style.color = "white";
      return true;
    }
    // Listener sur boutonValider pour ajouter la photo à l'API
    boutonValiderAjoutPhoto.addEventListener("click", (event) => {
      event.preventDefault();
      // On vérifie les champs et on retourne les alertes si les données du formulaire ne sont pas valides
      if (!checkInputs()) {
        return;
      }

      // On récupère l'id de la catégorie de photos sélectionnée
      let selectCategorie = document.querySelector("[name=inputCategorie]");
      let selectedOption =
        selectCategorie.options[selectCategorie.selectedIndex];
      let idCategorie = selectedOption.getAttribute("id");

      // On crée l'objet à mettre dans la charge Utile, en formData
      let formData = new FormData();
      formData.append(
        "title",
        document.querySelector("[name = inputTitre]").value
      );
      formData.append("image", fileInput.files[0]);
      formData.append("category", idCategorie);

      // Création de la fonction fetch avec toutes les informations nécessaires
      async function envoyerNouvellePhoto(chargeUtile) {
        await fetch("http://localhost:5678/api/works", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + window.sessionStorage.getItem("token"),
          },
          body: chargeUtile,
        }).then((response) => {
          if (response.ok) {
            console.log(response);
            alert("La photo  a été ajoutée avec succès !");
            // Suppression du sessionStorage pour forcer à récuperer le nouvel ensemble de travaux depuis l'API plus tard
            window.sessionStorage.removeItem("travaux");
          } else {
            alert("L'ajout a échoué");
            console.log(response);
            console.log(window.sessionStorage.getItem("token"));
          }
          // On regénère l'affichage des travaux dans la modale avec la photo ajoutée
          console.log(travaux);
          affichageModal();
          closeModal2();
        });
      }
      envoyerNouvellePhoto(formData);
    });
  }
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

// Fonction pour permettre la fermeture des modales lors d'un clic en dehors
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
// Fonction pour empecher la fermeture des modales
function removeModal1CloseEvent() {
  document.removeEventListener("click", handleClickOutsideModal);
}

// EventListener pour écouter les clicks en dehors des modales
document.addEventListener("click", handleClickOutsideModal);
