const express = require("express");
const app = express();
dotenv = require('dotenv').config();
const router = require("./routes/pages");
const routerApi = require('./routes/peliculas');

app.use("/public", express.static("public"));
 
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", "./views");
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use('/api', routerApi);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
 
});