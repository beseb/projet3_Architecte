
async function supprimerPhoto(id) {
    console.log(`L'${id} est l'objet qui va être supprimé.`);
    let token = sessionStorage.getItem("token");
    console.log(token);
  
    await fetch("http://localhost:5678/api/works/" + id, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + token,
        "Accept": "*/*",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("La photo " + id + " a été supprimée avec succès !");
          // Suppression du sessionStorage pour forcer à récuperer le nouvel ensemble de travaux depuis l'API plus tard
          window.sessionStorage.removeItem("travaux");
        } else {
          alert("La suppression a échouée");
          console.log(response);
        }
      })
      .catch((error) => {
        alert("Une erreur s'est produite :", error);
      });
    // On regénère l'affichage des travaux dans la modale sans la photo supprimée
     getTravaux();
    console.log(travaux);
    affichageModal();
  }
  


// Ajout photo

  fetch("http://localhost:5678/works", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
          Accept: "*/*",
        },
        body: chargeUtile,
      }).then((response) => {
        if (response.ok) {
          alert("La photo  a été ajoutée avec succès !");
          // Suppression du sessionStorage pour forcer à récuperer le nouvel ensemble de travaux depuis l'API plus tard
          window.sessionStorage.removeItem("travaux");
        } else {
          alert("L'ajout a échoué");
          console.log(response);
        }
        // On regénère l'affichage des travaux dans la modale avec la photo ajoutée
        console.log(travaux);
        affichageModal();
        closeModal2();
      });