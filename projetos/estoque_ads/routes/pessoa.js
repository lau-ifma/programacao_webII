import express from 'express'
const router = express.Router()
import PessoaController from '../controllers/PessoaController.js'

/* Como estamos dentro de routes, "/" == "/pessoa" */

router.get('/', PessoaController.index)
router.get('/cadastrar', PessoaController.cadastrar)
router.get('/perfil', PessoaController.perfil)
router.post('/salvar', PessoaController.salvar)
router.delete('/delete/:id', PessoaController.deletar)

export default router
