document.querySelector("#btn-search").addEventListener("click", function () {
  const departure = document.querySelector("#departure-trip").value;
  const arrival = document.querySelector("#arrival-trip").value;
  const date = document.querySelector("#calendar-trip").value;

  if (!departure || !arrival || !date) {
    document.querySelector("#img-train").src = "../backend/images/notfound.png";
    document.querySelector("#text-train").textContent =
      "Missing or empty fields";
    return;
  }

  fetch("http://localhost:3000/trips/searchTrips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ departure, arrival, date }),
  })
    .then((resp) => resp.json())
    .then((result) => {
      if (!result.trips.length) {
        document.querySelector("#img-default").style.display = "none";
        document.querySelector("#data-trip").innerHTML += `
        <div id="img-default">
            <img id="img-train" src="../backend/images/notfound.png" alt="loupe-verte" />
            <hr>
            <p id="text-train">Trip not found</p>
        </div>`;
        return;
      }

      document.querySelector("#img-default").style.display = "none ";
      for (let element of result.trips) {
        const stringDate = element.date;
        const formatDate = stringDate.slice(11, 16);

        document.querySelector("#data-trip").innerHTML += `
        <div id='${element.id}' class="result-trip">
            <p><span id="departure">${element.departure}</span> > <span id="arrival">${element.arrival}</span> <span
                    id="hour">${formatDate}</span>
                <span id="price">${element.price}</span>€
            </p>
            <button type="button" class="btn-book">Book</button>
        </div>`;
      }
    });
});

const allButtonBook = document.querySelectorAll(".btn-book");
for (let i = 0; i < allButtonBook.length; i++) {
  allButtonBook[i].addEventListener("click", function () {
    window.location.assign("/cart.html");
  });
}

//FRONTEND

// bouton search - Home
// Si la recherche ne présente aucun résultats: afficher "No trip found" + image loupe croix -OK
// Si la recherche présente plusieurs résultat: afficher les voyages a droite -OK

// bouton book - Home
// lors du click : - le click renvoie sur la page My cart
//                 - ajoute le voyages selectionné dans le panier
//                 - le coût total du panier change (++)
//                 - le logo du site doit renvoyer sur la page d'accueil -OK

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
