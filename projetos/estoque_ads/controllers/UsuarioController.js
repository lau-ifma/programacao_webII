import Usuario from "../models/Usuario.js";

class UsuarioController {
    index = async (req, res) => {
        let usuarios = await Usuario.findAll()
        res.render('usuario/index', { usuarios: usuarios })
    }
}

export default new UsuarioController()
