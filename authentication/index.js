const express = require("express");
const app = express();
const router = require("./routes/routes");
const adminRouter = require("./routes/admin_route");
require("./model/db");
let cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/users", router);
app.use("/users/admin", adminRouter);
app.get("/users", (req, res) => {
  res.send("Authentication");
});

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Microservices ",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:3002/users/" }],
  },
  apis: ["./routes/*.js"],
};
const spacs = swaggerjsdoc(options);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(spacs));
app.listen(process.env.PORT, () => {
  console.log(` Port :- ${process.env.PORT}`);
});
