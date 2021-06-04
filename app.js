const express = require("express");
const cool = require('cool-ascii-faces');
const app = express();
dotenv = require('dotenv').config();
const router = require("./controllers/index");
const routerApi = require('./controllers/routerApi');


app.use("/public", express.static("public"));
 
const port = process.env.PORT || 3000;

// motor de vistas
app.set("view engine", "pug");
app.set("views", "./views");
app.get('/cool', (req, res) => res.send(cool()));
app.get('/times', (req, res) => res.send(showTimes()));
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use('/api', routerApi);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
 
});

showTimes = () => {
  let result = '';
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + ' ';
  }
  return result;
}
