import express from 'express'
const router = express.Router()

import PessoaController from '../controllers/PessoaController'

router.get('/', PessoaController.index)
router.get('/cadastro', (req, res) => { res.render('pessoa/cadastro') })
router.post('/salvar', PessoaController.cadastro)

export default router
