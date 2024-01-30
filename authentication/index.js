const express = require("express");
const app = express();
const router = require("./routes/routes");
require("./model/db");
let cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use("/users", router);

app.listen(3002, () => {
  console.log("Users. Port :- 3002");
});
