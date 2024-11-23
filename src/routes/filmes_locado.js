const express = require('express')
const ControllerFilmesLocado = require('../controllers/filmes_locado')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/locar/:idFilme/:idCliente', auth, ControllerFilmesLocado.LocarFilme)
router.put('/devolver/:id', auth, ControllerFilmesLocado.DevolverFilmes)

module.exports = router