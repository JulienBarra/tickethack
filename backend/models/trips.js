const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  departure: String,
  arrivals: String,
  date: Date,
  price: Number,
});

const Trip = mongoose.model("trips", tripSchema);

module.exports = Trip;
