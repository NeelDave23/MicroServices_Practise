const express = require("express");
const app = express();
const router = require("./routes/routes");
require("./model/db");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/users", router);

app.listen(3002, () => {
  console.log("Users. Port :- 3002");
});
