const router = require('express').Router();
const pagesApi = require('./pagesApi');

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