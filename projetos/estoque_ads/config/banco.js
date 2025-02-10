import Sequelize from "sequelize";
/* conexao com banco */
const NOME_BANCO = 'loja'
const USUARIO = 'root'
const SENHA = ''
const HOST = ''

const sequelize = new Sequelize(
    NOME_BANCO,
    USUARIO,
    SENHA,
    {
        host: HOST,
        dialect: 'mysql'
    }
)

sequelize.authenticate()
    .then(() => {
        console.log('\n- - - - Conexao estabelecida com sucesso! - - - - \n')
    })
    .catch((error) => {
        console.log("ERRO: ", error)
    })


export default { sequelize, Sequelize }
