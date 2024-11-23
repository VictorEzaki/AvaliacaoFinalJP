const express = require('express')
const ControllerCliente = require('./../controllers/cliente')
const auth = require('./../middleware/auth')

const router = express.Router()

router.post('/', ControllerCliente.CreateCliente)
router.get('/', auth, ControllerCliente.GetClientes)
router.put('/:id', auth, ControllerCliente.UpdateCliente)
router.delete('/:id', auth, ControllerCliente.DeleteCliente)
router.post('/login', ControllerCliente.Login)

module.exports = router