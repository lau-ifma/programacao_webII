import Venda from "../models/Venda.js";

class VendaController {
    index = async (req, res) => {
        let vendas = await Venda.findAll()
        res.render('venda/index', { vendas: vendas })
    }
}

export default new VendaController()
