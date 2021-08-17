const { Router } = require('express');
const recipeRouter = require('./recipe');
// const dietRouter = require('./diet');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use(recipeRouter);
//router.use(dietRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
