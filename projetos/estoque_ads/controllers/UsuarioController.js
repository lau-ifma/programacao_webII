import Usuario from "../models/Usuario.js";
import Pessoa from "../models/Pessoa.js";

class UsuarioController {
    index = async (req, res) => {
        let usuarios = await Usuario.findAll()
        res.render('usuario/index', { usuarios: usuarios })
    }

    cadastrar = async (req, res) =>{
        const pessoas = await Pessoa.findAll()
        res.render('usuario/cadastro', {pessoas: pessoas})
    }
    
    login = async (req, res) =>{
        // const pessoas = await Pessoa.findAll()
        res.render('usuario/login')
    }

    salvar = (req, res) => {
        const { username, senha, categoria, pessoa_id  } = req.body;
        const novo_usuario = {
            username: username,
            senha: senha,
            categoria: categoria,
            pessoa_id: pessoa_id,
            status: 1
        }
        Usuario.create(novo_usuario).then(() => {
            console.log("Usuario cadastrado com Sucesso!")
            res.redirect('/usuario')
        })
    }
}

export default new UsuarioController()
