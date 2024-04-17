document.querySelector("#btn-search").addEventListener("click", function () {
  const departure = document.querySelector("#departure-trip").value;
  const arrival = document.querySelector("#arrival-trip").value;
  const date = document.querySelector("#calendar-trip").value;

  console.log(departure, arrival, date);

  fetch("http://localhost:3000/trips/searchTrips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ departure, arrival, date }),
  })
    .then((resp) => resp.json())
    .then((result) => {
      if (!result) {
        document.querySelector("#img-train").src =
          "../backend/images/notfound.png";
        document.querySelector("#text-train").textContent = "No trip found";
        return;
      }
    });
});

//FRONTEND

// bouton search - Home
// Si la recherche ne présente aucun résultats: afficher "No trip found" + image loupe croix
// Si la recherche présente plusieurs résultat: afficher les voyages a droite

// bouton book - Home
// lors du click : - le click renvoie sur la page My cart
//                 - ajoute le voyages selectionner dans le panier
//                 - le cout total du panier change (++)
//                 - le logo du site doit renvoyer sur la page d'accueil

// bouton delete - My cart
// lors du click : - supprime le voyage dans le panier +
//                 -  MAJ du cout total du panier (--)

// bouton Purchase - My cart
// lors du click : - renvoie sur la page My booking
//                 - affiche le résumé des voyages validé dans le panier
//                 - affiche pour chaque voyage le temps restant avant le départ
//                 - vide le panier

// BACKEND

// créer une route carts/addCart : - permet d'ajouter un voyage dans la collection carts
//                                 - (voir pour donner un ID à la commande ?)

// créer une route carts/deleteCart : - permet de supprimer un voyage de la collection carts
