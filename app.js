const express = require("express");
const cool = require('cool-ascii-faces');
const app = express();
const router = require("./controllers/index");
const routerApi = require('./controllers/routerApi');


app.use("/public", express.static("public"));
 
const port = process.env.PORT || 3000;

// motor de vistas
app.set("view engine", "pug");
app.set("views", "./views");
app.get('/cool', (req, res) => res.send(cool()));
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use('/api', routerApi);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
 
});