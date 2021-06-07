const router = require('express').Router(); 
const pages = require('../controllers/pages');

router.get('/', pages.home)
router.get('/film/:title', pages.getFilm)
router.post('/film', pages.postFilm)
router.all('*', (req, res) =>
  res
    .status(404)
    .json({ message: "Route does not exist", app: "Express-Routes" })
);
 
module.exports = router;