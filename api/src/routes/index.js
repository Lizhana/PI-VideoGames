const { Router } = require('express');

const router = Router();

// Importar todos los routers;
const videogames = require('./videogames');
const videogame = require('./videogame');
const genres = require('./genres');
const users = require('./users')
// Ejemplo: const authRouter = require('./auth.js');



// Configurar los routers
router.use('/videogames', videogames);
router.use('/videogame', videogame);
router.use('/genres', genres);
router.use('/user', users ) 
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
