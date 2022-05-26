const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("./database/user.json");
const path = require("path");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/principal.html"));
});

app.get("/ruta-privada", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/bolitas.html"));
});

app.post("/login", (req, res) => {
  const { user, password } = req.body;
  res.send({ user, password });
});

app.listen(4000, () => {
  console.log(`El server esta corriendo Mercado!!`);
});
