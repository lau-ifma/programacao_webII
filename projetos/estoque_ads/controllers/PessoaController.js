
import Pessoa from "../models/Pessoa.js"

class PessoaController{
    index = async (req, res)=>{
        let pessoas = await Pessoa.findAll()
        res.render('pessoa/index', {pessoas: pessoas})
    }
    cadastrar = (req, res) => {
        res.render('pessoa/cadastro')
    }

    // salvar = (req, res) => {
    //     let produto = {
    //         descricao: req.body.descricao,
    //         preco: req.body.preco,
    //         estoque: req.body.estoque,
    //         status: 1
    //     }

    //     Produto.create(produto).then(function () {
    //         res.redirect('/produto')
    //     })
    // }
}

export default new PessoaController()