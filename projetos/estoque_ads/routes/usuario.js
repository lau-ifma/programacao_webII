import express from 'express'
const router = express.Router()

import UsuarioController from '../controllers/UsuarioController.js'

router.get('/', UsuarioController.index)

export default router
