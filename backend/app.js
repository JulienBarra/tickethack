require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./connection");

var tripsRouter = require("./routes/trips");
var cartsRouter = require("./routes/carts");

var app = express();
const cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/trips", tripsRouter);
app.use("/carts", cartsRouter);

module.exports = app;
