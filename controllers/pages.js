const fetch = require("node-fetch");
const bodyParser = require("body-parser");
 
const routes = {
    home: (req, res) => {
        let datos = { nombre: "alex" };
        res.status(200).render("home", datos);
    },
    getFilm: (req, res) => {
        let tituloDePelicula = req.params.title;
        console.log(tituloDePelicula)
        
        fetch(`http://www.omdbapi.com/?t=${tituloDePelicula}&apikey=d33a722d`)
        .then((res) => res.json())
        .then((json) => {
        console.log(json ,"respuesta de la api");
        res.status(200).render("film", json);
        }); 
    },
    postFilm: (req, res) => {
    let nombreDePelicula = req.body.nombrePelicula;
    console.log(nombreDePelicula)
    res.redirect(`/film/${nombreDePelicula}`)
    } 
};

module.exports = routes;