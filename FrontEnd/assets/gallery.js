/**
 *Fonction qui génère l'affiche des travaux avec {travaux} en paramètre, en fonction de l'endroit de la page où elle doit être
 * */
export async function genererAffichageTravaux(travaux, type = "type") {
  // si l'affichage doit se faire dans la gallery !
  if (type === "gallery") {
    // Récuperation de la div "Porfolio" et de la div "Gallery" si elle existe
    let container = document.getElementById("portfolio");
    let divGallery = document.querySelector(".gallery");
    console.log(divGallery)
    // Suppression de la div Gallery existante
    if (divGallery) {
      divGallery.remove();
    }

    // Création des éléments de la div Gallery du HTML
    divGallery = document.createElement("div");
    divGallery.className = "gallery";
    console.log(divGallery)

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
  // Si l'affichage doit se faire dans la modale !
  if (type === "modal") {
    let container = document.querySelector(".modal1-photos");
    let modal1PhotosWrapper = document.createElement("div");
    modal1PhotosWrapper.className = "modal1-photos-wrapper";
    // Boucle pour créer les éléments dans la galerie
    for (let i = 0; i < travaux.length; i++) {
      let figGallery = document.createElement("figure");
      let figCaptionGallery = document.createElement("figcaption");
    
      figCaptionGallery.innerText = "éditer";
      figGallery.innerHTML = `<div class = "image_boutons"><img src = "${travaux[i].imageUrl}" alt = ${travaux[i].title} ">
      <div class="boutons">
        <button class = "movePhoto" ><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"  hidden>
        <rect width="17" height="17" rx="2" fill="none" />
        <path  d="M9.05089 3.20363C8.77938 2.93212 8.33845 2.93212 8.06694 3.20363L6.6768 4.59377C6.40529 4.86528 6.40529 5.30621 6.6768 5.57772C6.94831 5.84924 7.38925 5.84924 7.66076 5.57772L7.86493 5.37355V7.86493H5.37355L5.57772 7.66076C5.84924 7.38925 5.84924 6.94831 5.57772 6.6768C5.30621 6.40529 4.86528 6.40529 4.59377 6.6768L3.20363 8.06694C2.93212 8.33845 2.93212 8.77938 3.20363 9.05089L4.59377 10.441C4.86528 10.7125 5.30621 10.7125 5.57772 10.441C5.84924 10.1695 5.84924 9.72858 5.57772 9.45707L5.37355 9.2529H7.86493V11.7465L7.66076 11.5423C7.38925 11.2708 6.94831 11.2708 6.6768 11.5423C6.40529 11.8138 6.40529 12.2547 6.6768 12.5262L8.06694 13.9164C8.33845 14.1879 8.77938 14.1879 9.05089 13.9164L10.441 12.5262C10.7125 12.2547 10.7125 11.8138 10.441 11.5423C10.1695 11.2708 9.72858 11.2708 9.45707 11.5423L9.2529 11.7465V9.25507H11.7465L11.5423 9.45924C11.2708 9.73076 11.2708 10.1717 11.5423 10.4432C11.8138 10.7147 12.2547 10.7147 12.5262 10.4432L13.9164 9.05306C14.1879 8.78155 14.1879 8.34062 13.9164 8.06911L12.5262 6.67897C12.2547 6.40746 11.8138 6.40746 11.5423 6.67897C11.2708 6.95048 11.2708 7.39142 11.5423 7.66293L11.7465 7.8671H9.25507V5.37355L9.45924 5.57772C9.73076 5.84924 10.1717 5.84924 10.4432 5.57772C10.7147 5.30621 10.7147 4.86528 10.4432 4.59377L9.05306 3.20363H9.05089Z" fill="white"/>
            </svg></button><button class="deletePhoto ${[i]}" data-id="${travaux[i].id}" ><svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
            <path d="M2.71607 0.35558C2.82455 0.136607 3.04754 0 3.29063 0H5.70938C5.95246 0 6.17545 0.136607 6.28393 0.35558L6.42857 0.642857H8.35714C8.71272 0.642857 9 0.930134 9 1.28571C9 1.64129 8.71272 1.92857 8.35714 1.92857H0.642857C0.287277 1.92857 0 1.64129 0 1.28571C0 0.930134 0.287277 0.642857 0.642857 0.642857H2.57143L2.71607 0.35558ZM0.642857 2.57143H8.35714V9C8.35714 9.70915 7.78058 10.2857 7.07143 10.2857H1.92857C1.21942 10.2857 0.642857 9.70915 0.642857 9V2.57143ZM2.57143 3.85714C2.39464 3.85714 2.25 4.00179 2.25 4.17857V8.67857C2.25 8.85536 2.39464 9 2.57143 9C2.74821 9 2.89286 8.85536 2.89286 8.67857V4.17857C2.89286 4.00179 2.74821 3.85714 2.57143 3.85714ZM4.5 3.85714C4.32321 3.85714 4.17857 4.00179 4.17857 4.17857V8.67857C4.17857 8.85536 4.32321 9 4.5 9C4.67679 9 4.82143 8.85536 4.82143 8.67857V4.17857C4.82143 4.00179 4.67679 3.85714 4.5 3.85714ZM6.42857 3.85714C6.25179 3.85714 6.10714 4.00179 6.10714 4.17857V8.67857C6.10714 8.85536 6.25179 9 6.42857 9C6.60536 9 6.75 8.85536 6.75 8.67857V4.17857C6.75 4.00179 6.60536 3.85714 6.42857 3.85714Z" fill="white"/>
          </svg></button>
      </div></div>
    `;
      figGallery.appendChild(figCaptionGallery);
      modal1PhotosWrapper.appendChild(figGallery);
    }
    // Ajout de la divGallery à la section Portfolio
    container.appendChild(modal1PhotosWrapper);
  }
}

/**
 * Fonction qui gère la récupération et l'affichage des catégories
 */
export async function genererCategories() {
  let select = document.querySelector(".formModal2 select");

let categories = null;
  categories = await fetch("http://localhost:5678/api/categories").then((categories) => (
    categories.json()
  ))
  if(categories !== null){
  for (let i = 0; i < categories.length; i++) {
    let option = document.createElement("option");
    option.value = categories[i].name;
    option.innerText = categories[i].name;
    select.appendChild(option);
  }}
}
