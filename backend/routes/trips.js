var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Trip = require("../models/trips");
const { checkBody } = require("../modules/checkBody");

router.post("/searchTrips", (req, res) => {
  //check si tout les champs sont rempli
  const requiredFields = ["departure", "arrival", "date"];
  if (!checkBody(req.body, requiredFields)) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  Trip.find({ departure: req.body.departure, arrival: req.body.arrival }).then(
    (trips) => {
      const matchedTrips = trips.filter(
        (trip) => trip.date >= new Date(req.body.date)
      );
      res.json({ result: true, trips: matchedTrips });
    }
  );
});

module.exports = router;
