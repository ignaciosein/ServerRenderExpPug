const pelis = require('../utils/pelis');

const pagesApi = {
    getPeli: async (req, res) => {
        let tituloDePelicula = req.params.title;
        let data = await pelis.getMovie(`http://www.omdbapi.com/?t=${tituloDePelicula}&apikey=d33a722d`);
        res.status(200).json('film', data);
    },
    postPeli: ,
    putPeli: ,
    deletePeli:
}