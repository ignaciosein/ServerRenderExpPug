const express = require('express')
const app = express()
const path = require('path')
const router = require("./controllers/index")

app.use('/public', express.static('public'));
// app.use(express.static(path.join(__dirname, '/public')));
 
/* app.use(express.static('public')); */
 
const port = 3000

// motor de vistas
app.set('view engine', 'pug');
app.set('views','./views');
// Para acceder con http://localhost:3000/products?API_KEY=true
//Si pusieramos en el navegador otra cosa distinta como por ejemplo "/products?API_KEY=false" 
//nos tiraría error "lo siento no funciona /products?API_KEY=false"

//PARA HABILITAR RECEPCION DE JSON


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function isAdmin(req, res, next){

if(req.query.API_KEY == "473627c5")
{
next();

}
else {

res.status(403).send(`lo siento no funciona ${req.url}`);


}

 
}

 app.use(isAdmin)
 
app.use("/",router) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})