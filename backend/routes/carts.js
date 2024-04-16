var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Trip = require("../models/trips");
const { checkBody } = require("../modules/checkBody");

router.post("/addTrip", (req, res) => {});

router.delete("/addTrip", (req, res) => {});

module.exports = router;
