import express from 'express'
const router = express.Router()

import UsuarioController from '../controllers/UsuarioController.js'

router.get('/', UsuarioController.index)
router.get('/cadastro', UsuarioController.cadastrar)
router.get('/login', UsuarioController.login) /* novo */
router.post('/salvar', UsuarioController.salvar)

export default router
