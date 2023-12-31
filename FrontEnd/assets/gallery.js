/**
 *Fonction qui génère l'affiche des travaux avec {travaux} en paramètre
 * */
export async function genererAffichageTravaux(
  travaux,
  type = "type"
) {
  if (type === "gallery") {
    // Récuperation de la div "Porfolio" et de la div "Gallery" si elle existe
    let container = document.getElementById("portfolio");
    let divGallery = document.querySelector(".gallery");

    // Suppression de la div Gallery existante
    if (divGallery) {
      divGallery.remove();
    }

    // Création des éléments de la div Gallery du HTML
    divGallery = document.createElement("div");
    divGallery.className = "gallery";

    // Boucle pour créer les éléments dans la galerie
    for (let i = 0; i < travaux.length; i++) {
      let figGallery = document.createElement("figure");
      let figCaptionGallery = document.createElement("figcaption");
      figGallery.innerHTML = `<img src = "${travaux[i].imageUrl}" alt = ${travaux[i].title}></img>`;
      figCaptionGallery.innerText = travaux[i].title;

      figGallery.appendChild(figCaptionGallery);
      divGallery.appendChild(figGallery);
    }
    // Ajout de la divGallery à la section Portfolio
    container.appendChild(divGallery);
  }
  if (type === "modal") {
    let container = document.querySelector(".modal1-photos");
    let modal1PhotosWrapper = document.createElement("div");
    modal1PhotosWrapper.className = "modal1-photos-wrapper"
    // Boucle pour créer les éléments dans la galerie
    for (let i = 0; i < travaux.length; i++) {
      let figGallery = document.createElement("figure");
      let figCaptionGallery = document.createElement("figcaption");
      figGallery.innerHTML = `<img src = "${travaux[i].imageUrl}" alt = ${travaux[i].title}></img>`;
      figCaptionGallery.innerText = "éditer";

      figGallery.appendChild(figCaptionGallery);
      modal1PhotosWrapper.appendChild(figGallery);
    }
    // Ajout de la divGallery à la section Portfolio
    container.appendChild(modal1PhotosWrapper);
  }
}
