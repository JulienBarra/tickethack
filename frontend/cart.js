fetch("http://localhost:3000/carts")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    document.querySelector("#cart-default").style.display = "none";
    document.querySelector(".card").innerHTML += `
    <div id="trip-cart">
            <p id="mycart">My cart</p>
            <div class="result-trip">
              <p>
                <span id="departure">Paris</span> >
                <span id="arrival">Lyon</span> <span id="hour">16:23</span>
                <span id="price">126</span>€
              </p>
              <button type="button" id="btn-x">X</button>
            </div>
            <div class="total-purchase">
              <p>Total:<span id="price-purchase">103</span>€</p>
              <button type="button" id="btn-purchase">Purchase</button>
            </div>
          </div>`;
  });
