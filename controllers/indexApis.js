const router = require('express').Router();
const pelis = require('./pelis');

router.get('/film/:title', pages.getPeli)
router.post('/film/', pages.postPeli)
router.put('/film/', pages.putPeli)
router.delete('/film/', pages.deletePeli)
router.all('*', (req, res) =>
  res
    .status(404)
    .json({ message: "Route does not exist", app: "Express-Routes" })
);

module.exports = router;