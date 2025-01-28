
import Produto from '../models/produto.js'

class ProdutoController {
    index = async function (req, res) {
        const produtos = await Produto.findAll()
        res.render('produto/index', { produtos: produtos })
    }

    cadastrar = (req, res) => {
        res.render('produto/cadastrar')
    }

    salvar = (req, res) => {
        let produto = {
            descricao: req.body.descricao,
            preco: req.body.preco,
            estoque: req.body.estoque,
            status: 1
        }

        Produto.create(produto).then(function () {
            res.redirect('/produto')
        })
    }
}

export default new ProdutoController()


/*controller busca no banco e manda pro front */
