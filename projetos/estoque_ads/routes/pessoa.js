import express from 'express'
const router = express.Router()
import PessoaController from '../controllers/PessoaController.js'

/*  como estamos dentro de routes, "/" representa o nome da rota atual "/pessoa" */

router.get('/', PessoaController.index)
router.get('/cadastrar', PessoaController.cadastrar)
// router.post('/salvar', PessoaController.cadastro)

export default router
