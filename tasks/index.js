const express = require("express");
const app = express();
const axios = require("axios");
require("./model/db");
const router = require("./routes/route");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);

app.listen(3000, () => {
  console.log("Orders. Port :- 3000");
});
