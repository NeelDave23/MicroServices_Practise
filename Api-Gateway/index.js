const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
const https = require("https");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");
const routes = {
  "/orders": process.env.ORDERS,
  "/profile": process.env.PROFILE,
  "/users": process.env.USERS,
};
app.use(cors());
app.get("/", (req, res) => {
  res.send("Home");
});
for (const route in routes) {
  try {
    const target = routes[route];
    app.use(route, createProxyMiddleware({ target }));
  } catch (e) {
    throw e;
  }
}

// const sslServer = https.createServer(
//   {
//     key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
//     cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
//   },
//   app
// );

// sslServer.listen(process.env.PORT, () => {
//   console.log(` Port :- ${process.env.PORT}`);
// });

// app.listen(3000, "0.0.0.0", () => {
//   console.log("Orders. Port :- 3000");
// });

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Microservices ",
      version: "1.0.0",
    },

    servers: [{ url: "http://localhost:8000" }],
  },
  apis: [
    "./swaggers/authentication/*.js",
    "./swaggers/profile/*.js",
    "./swaggers/tasks/*.js",
    "./swaggers/admin/*.js",
  ],
};
const spacs = swaggerjsdoc(options);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(spacs));
app.get("/docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(spacs);
});
app.listen(process.env.PORT, () => {
  console.log(` Port :- ${process.env.PORT}`);
});
