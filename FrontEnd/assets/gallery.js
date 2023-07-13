export async function genererAffichageTravaux() {
  // Récupération des élements depuis l'API
  const travaux = await fetch("http://localhost:5678/api/works").then(
    (travaux) => travaux.json()
  );
  console.log(travaux);

  // Récuperation de la div "Porfolio"
  const sectionPorfolio = document.getElementById("portfolio");
  // Création des éléments de la div Gallery du HTML
  const divGallery = document.createElement("div");
  divGallery.className = "gallery"
  // Boucle pour créer les élements dans la gallerie
  for (let i = 0; i < travaux.length; i++) {
    let figGallery = document.createElement("figure");
    let figCaptionGallery = document.createElement("figcaption");
    figGallery.innerHTML = `<img src = "${travaux[i].imageUrl}" alt = ${travaux[i].title}></img>`
    figCaptionGallery.innerText = travaux[i].title;

    figGallery.appendChild(figCaptionGallery);
    divGallery.appendChild(figGallery);
  }
  // Ajout de la divGallery à la section Portfolio
  sectionPorfolio.appendChild(divGallery);
}
