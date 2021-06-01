 
 
 const routes = {
  home: (req, res) => {
    let datos = { nombre: "alex" };
    res.status(200).render("home", datos);
  },
  film: (req, res) => {
    let datos = { nombre: "alex" };
    res.status(200).render("film", datos);
  },
  products: async (req, res) => {
    let id = req.query.id || '';
        let data = await prod.getProducts(`http://www.omdbapi.com/?t=${pelicula}&apikey=d33a722d`);
        res.status(200).render('home', {data})
        }
  
};
module.exports = routes;
