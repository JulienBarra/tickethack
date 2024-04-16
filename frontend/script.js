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
      console.log(result.trips);
    });
});
