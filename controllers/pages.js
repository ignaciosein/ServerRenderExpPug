const pelis = require('../utils/pelis');

const routes = {
    home: (req, res) => {
        res.status(200).render('home');
    },
    getFilm: async (req, res) => {
        let tituloDePelicula = req.params.title;
        let data = await pelis.getMovie(`http://www.omdbapi.com/?t=${tituloDePelicula}&apikey=d33a722d`);
        res.status(200).render('film', data);
    },
    postFilm: (req, res) => {
    let nombreDePelicula = req.body.nombrePelicula;
    res.redirect(`/film/${nombreDePelicula}`)
    } 
};

module.exports = routes;