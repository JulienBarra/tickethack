var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Trip = require("../models/trips");
const Cart = require("../models/carts");
const { checkBody } = require("../modules/checkBody");

router.post("/add", (req, res) => {
  const newCart = new Cart({
    trip: req.body.id,
  });
  newCart.save().then((cart) => {
    res.json({ result: true, trips: cart });
  });
});

router.get("/", (req, res) => {
  Cart.find()
    .populate("trip")
    .then((trips) => {
      res.json({ result: true, trips });
    });
});

router.delete("/delete", (req, res) => {
  Cart.deleteOne({ _id: req.body.id }).then((deleted) => {
    res.json({ result: true, deleted });
  });
});

module.exports = router;
