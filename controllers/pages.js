const pelis = require('../utils/pelis');
const apiKey = process.env.API_KEY;

const routes = {
    home: (req, res) => {
        res.status(200).render('home');
    },
    getFilm: async (req, res) => {
        let tituloDePelicula = req.params.title;
        let data = await pelis.getMovie(`http://www.omdbapi.com/?t=${tituloDePelicula}&apikey=${apiKey}`);
        res.status(200).render('film', data);
    },
    postFilm: async (req, res) => {
        let nombreDePelicula = req.body.peliculaBuscar;
        // console.log(nombreDePelicula)
        res.redirect(`/film/${nombreDePelicula}`)
    } 
};

module.exports = routes;