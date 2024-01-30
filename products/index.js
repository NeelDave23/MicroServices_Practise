const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.send("Products ");
});
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Products having id :- ${id}`);
});

app.listen(3001, () => {
  console.log("Products. Port :- 3001");
});
