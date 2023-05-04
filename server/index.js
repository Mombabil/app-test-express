const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// pour demander a Node de servir les fichiers a partir du build de react
app.use(express.static(path.resolve(__dirname, "../client/build")));

// pour gerer les requetes GET vers la route /api
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// pour les requetes non traitées par le code précédent, ceci affiche l'appli React
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
