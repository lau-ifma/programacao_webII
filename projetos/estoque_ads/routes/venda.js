import express from 'express'
const router = express.Router()

import VendaController from '../controllers/VendaController.js'

router.get('/', VendaController.index)

export default router
