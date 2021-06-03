const pelis = require('../utils/pelis');

const peliculas = {
    getPeli: async (req, res) => {
        let tituloDePelicula = req.params.title;
        let data = await pelis.getMovie(`http://www.omdbapi.com/?t=${tituloDePelicula}&apikey=d33a722d`);
        res.status(200).json(data);
    },
    
    postPeli:  async (req, res) => {
        let nombreDePelicula = req.body.peliculaBuscar;
        console.log(nombreDePelicula)
        // console.log(nombreDePelicula)
        res.status(200).json({message: `Se ha guardado ${nombreDePelicula}`})
    }, 
    putPeli: async (req, res) => {
        let nombreDePelicula = req.body.peliculaBuscar;
        res.status(200).json({id:"0", message: `Se ha actualizado ${nombreDePelicula}`})
    },
    deletePeli: async (req, res) => {
        let nombreDePelicula = req.body.peliculaBuscar;
        res.status(200).json({id:"0", message: `Se ha borrado ${nombreDePelicula}`})
    }
}

module.exports = peliculas;

// para comprobar en request que funciona metodo post y put colocando esto en el body {
//   "peliculaBuscar": "hulk"
// }