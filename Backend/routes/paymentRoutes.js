const express = require("express")
const { checkout, paymentVarification, getkey }  = require("../controller/paymentController");
const paymentRoute = express.Router();

paymentRoute.post("/checkout",checkout);

paymentRoute.post("/paymentverification", paymentVarification )

paymentRoute.get("/getkey", getkey); 

module.exports =  paymentRoute;