import express from "express"
import path from "path"
import {fileURLToPath} from "url"
import handlebars from 'express-handlebars'
import Handlebars from "handlebars"
import bodyParser from "body-parser"
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'

const app = express()
const port = 3000

// configuracao da pasta estatica
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// fim configuracao da pasta estatica

app.use(express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

// configuracao da visao
app.engine('handlebars', handlebars.engine({
   defaultLayout: 'principal',
   handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')
// fim configuracao da visao

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROTAS DO SITEMA
app.get("/", (req, res)=>{
    // rotas - render busca na pasta ./views
    res.render("admin/index")
})

app.get("/produto", (req, res)=>{
    var produtos = [
        {
            id: 14,
            descricao: 'Areia grossa',
            preco: 45.0,
            estoque: 40,
        },
        {
            id: 15,
            descricao: 'Pedra britada 1',
            preco: 30.0,
            estoque: 60,
        },
        {
            id: 16,
            descricao: 'Cal hidratada',
            preco: 25.0,
            estoque: 33,
        },
        {
            id: 17,
            descricao: 'Tijolo pequeno',
            preco: 15.0,
            estoque: 80,
        },
       
    ];
    res.render("produto/lista", {produtos: produtos})  
})

import produtos from  './routes/produtos.js'
app.use('/produto', produtos)





app.listen(port, ()=>{
    console.log(`Servidor rodando em porta http://localhost:${port}`)
})
