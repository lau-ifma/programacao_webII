import banco from "../config/banco.js";
import Produto from "./produto.js"
import Pessoa from "./Pessoa.js";

const Venda = banco.sequelize.define('vendas', {
    id: {
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    qtd: {
        type: banco.Sequelize.INTEGER,
    },
    total: {
        type: banco.Sequelize.FLOAT
    },
    status: {
        type: banco.Sequelize.INTEGER
    },

})

// venda pertence aoS modeloS PRODUTO e PESSOA
Venda.belongsTo(Produto, {
    foreignKey: 'produto_id',
    constraint: true,
    onDelete: 'CASCADE',
    as: 'produto'

})

Venda.belongsTo(Pessoa, {
    foreignKey: 'pessoa_id',
    constraint: true,
    onDelete: 'CASCADE',
    as: 'pessoa'
})

export default Venda
