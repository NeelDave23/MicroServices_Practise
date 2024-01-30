const express = require("express");
const app = express();

const { createProxyMiddleware } = require("http-proxy-middleware");

const routes = {
  "/orders": "http://localhost:3000",
  "/products": "http://localhost:3001",
  "/users": "http://localhost:3002",
};
for (const route in routes) {
  const target = routes[route];
  app.use(route, createProxyMiddleware({ target }));
}
app.get("/", (req, res) => {
  res.json({
    "/orders": "http://localhost:3000",
    "/products": "http://localhost:3001",
    "/users": "http://localhost:3002",
  });
});
app.listen(8000, () => {
  console.log(" Port :- 8000");
});
