const express = require("express");
const app = express();
const router = require("./routes/routes");
const adminRouter = require("./routes/admin_route");
require("./model/db");
let cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use("/users", router);
app.use("/users/admin", adminRouter);

app.listen(process.env.PORT, () => {
  console.log(` Port :- ${process.env.PORT}`);
});
