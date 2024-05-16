const express = require("express")
const checkout  = require("../controller/paymentController");
const paymentRoute = express.Router();

paymentRoute.post("/checkout",checkout);


module.exports =  paymentRoute;