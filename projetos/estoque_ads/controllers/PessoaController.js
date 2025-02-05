
import { where } from "sequelize"
import Pessoa from "../models/Pessoa.js"
import Usuario from "../models/Usuario.js"

class PessoaController {
    index = async (req, res) => {
        let pessoas = await Pessoa.findAll()
        res.render('pessoa/index', { pessoas: pessoas })
    }

    cadastrar = (req, res) => {
        res.render('pessoa/cadastro')
    }

    salvar = (req, res) => {
        const { nome, cpf, telefone, email } = req.body;
        const pessoa = {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            email: email,
            status: 1
        }
        Pessoa.create(pessoa).then(() => {
            res.redirect('/pessoa')
        })
    }

    // novo
    perfil = async (req, res) =>{
        let id = req.params.id
        let pessoa = await Pessoa.findByPk(id) /* busca pela primary key */
        let usuarios =  await Usuario.findAll({
            where:{
                pessoa_id: id
            }
        })
        res.render('pessoa/perfil', {
            pessoa: pessoa,
            usuarios: usuarios
        })
    }
    // novo
    
    deletar = async (req, res) => {

        const { id } = req.params
        console.log("id ====== ", id)
        await Pessoa.destroy({
            where: {
                id: id
            }
        }).then(() => {
            console.log('Pessoa excluída com sucesso!!')
            res.redirect('/pessoa')
        }).catch(error => {
            console.log(error)
        })
    }
}

export default new PessoaController()
