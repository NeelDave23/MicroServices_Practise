const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
const https = require("https");
const path = require("path");
const fs = require("fs");

const routes = {
  "/orders": process.env.ORDERS,
  "/profile": process.env.PROFILE,
  "/users": process.env.USERS,
};
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

app.listen(process.env.PORT, () => {
  console.log(` Port :- ${process.env.PORT}`);
});
