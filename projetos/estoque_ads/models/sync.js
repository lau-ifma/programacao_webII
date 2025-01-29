
import Produto from "./produto.js";
import Pessoa from "./Pessoa.js";
import Usuario from "./Usuario.js";
import Venda from "./Venda.js";

/*sincronizar com o banco, necessario apenas uma ves*/
await Pessoa.sync()
await Produto.sync()
await Usuario.sync()
await Venda.sync()
