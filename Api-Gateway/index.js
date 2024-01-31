const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const routes = {
  "/orders": process.env.ORDERS,
  "/profile": process.env.PROFILE,
  "/users": process.env.USERS,
};

for (const route in routes) {
  const target = routes[route];
  app.use(route, createProxyMiddleware({ target }));
}

app.listen(process.env.PORT, () => {
  console.log(` Port :- ${process.env.PORT}`);
});
