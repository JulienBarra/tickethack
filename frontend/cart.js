fetch("http://localhost:3000/carts")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);

    document.querySelector("#cart-default").style.display = "none";

    const stringDate = result.trips[0].trip.date;
    const formatDate = stringDate.slice(11, 16);

    document.querySelector("#card-one").innerHTML += `
    <div id="trip-cart">
            <p id="mycart">My cart</p>
            <div class="result-trip">
              <p>
                <span id="departure">${result.trips[0].trip.departure}</span> >
                <span id="arrival">${result.trips[0].trip.arrival}</span> <span id="hour">${formatDate}</span>
                <span id="price">${result.trips[0].trip.price}</span>€
              </p>
              <button type="button" id="btn-x">X</button>
            </div>
            <div class="total-purchase">
              <p>Total:<span id="price-purchase">${result.trips[0].trip.price}</span>€</p>
              <button type="button" id="btn-purchase">Purchase</button>
            </div>
          </div>`;
  });
