
import Pessoa from "../models/Pessoa.js"
import { Op, or, where } from "sequelize"

function index(req, res) {
    Pessoa.findAll({
        where: {
            status: 1
        },
        order: [['nome', 'asc']]
    })
        .then((pessoas) => {
            res.render('pessoa/index', { pessoas: pessoas })
        })
}


export default { index }
