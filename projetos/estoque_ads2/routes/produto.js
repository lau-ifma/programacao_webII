import express from 'express'
const router = express.Router()

import ProdutoController from '../controllers/ProdutoController'

router.get('/', ProdutoController.index)
router.get('/cadastro', ProdutoController.cadastrar)
router.post('/cadastro', ProdutoController.salvar)
 
export default router