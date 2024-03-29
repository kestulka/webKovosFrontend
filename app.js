const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(cors());
app.options("*", cors());
app.use(express.json());

app.use(express.static(".")); // servinimui (setupinti gale)

app.get("/login", async (req, res) => {
  res.sendFile(path.join(__dirname, "/login.html"));
});
app.get("/favorites", async (req, res) => {
  res.sendFile(path.join(__dirname, "/favorites.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
