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
  try {
    const target = routes[route];
    app.use(route, createProxyMiddleware({ target }));
  } catch (e) {
    // throw e;
    console.log(e);
  }
}

app.listen(process.env.PORT, () => {
  console.log(` Port :- ${process.env.PORT}`);
});
