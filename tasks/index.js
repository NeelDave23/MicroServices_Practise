const express = require("express");
const app = express();
const axios = require("axios");
require("./model/db");
const router = require("./routes/route");
const bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(` Port :- ${process.env.PORT}`);
});
