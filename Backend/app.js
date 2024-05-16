const  express = require("express");
const  paymentRoute  = require("./routes/paymentRoutes");
const cors  =  require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", paymentRoute);

module.exports = app;