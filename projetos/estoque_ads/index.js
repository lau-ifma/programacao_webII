import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import handlebars from 'express-handlebars'
import Handlebars from 'handlebars'
import bodyParser from 'body-parser'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'
import session from 'express-session'
import flash from 'connect-flash'

const app = express()

/*CONFIGURAÇÃO DA PASTA ESTATICA*/
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'public')))

/**CONFIGURAÇÃO DA VISÃO */
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'principal',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* SESSÃO */
app.use(session, ({
    secret: '123456',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

/* middlewares - executados quando a rota for chamada */
app.use((req, res, next)=> {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})

/* FIM SESSÃO */

/**ROTAS DO SISTEMA */
app.get('/', function (req, res) {
    res.render('admin/index')
})

import produto from './routes/produto.js'
app.use('/produto', produto)


import pessoa from './routes/pessoa.js'
app.use('/pessoa', pessoa)

import venda from './routes/venda.js'
app.use('/venda', venda)

import usuario from './routes/usuario.js'
app.use('/usuario', usuario)
/**FIM ROTAS DO SISTEMA */


app.listen(3200, () => console.log('Servidor truando em http://localhost:3200'))
