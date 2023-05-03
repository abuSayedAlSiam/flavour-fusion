const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const slides = require("./data/slideShow.json");
const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Flavour is cooking...");
});

app.get("/slides", (req, res) => {
  res.send(slides);
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chefs.find((c) => parseInt(c.id) === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Flavour is cooking on port, ${port}`);
});
