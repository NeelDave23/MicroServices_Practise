const express = require("express");
const app = express();
require("./model/db");
const router = require("./routes/routes");
const bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use("/", router);

app.listen(3001, () => {
  console.log("Profile. Port :- 3001");
});
