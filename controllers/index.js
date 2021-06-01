const router = require('express').Router(); 
const pages = require('./pages');

// Aqui van las rutas
router.get('/', pages.home)
router.get('/film/:title', pages.film)
router.post('/film/', pages.film)


/* router.get('*', pages.home) //ruta por defecto */

module.exports = router;