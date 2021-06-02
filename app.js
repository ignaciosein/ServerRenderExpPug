const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./controllers/index");
const film = require("./controllers/pages");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static("public"));

const port = 3000;

// motor de vistas
app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});