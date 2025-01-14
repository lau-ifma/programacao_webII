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

app.get("/", (req, res)=>{
    var n = "Lauanderson Rael"
    const notas = {
        nota1: 8.5,
        nota2: 10.00, 
        nota3: 7.00
    }
    // rotas - render busca na pasta ./views
    res.render("admin/index", {notas, aluno:n})
})

app.get("/contato", (req, res)=>{
    res.render("admin/contato")  
})
app.get("/produto", (req, res)=>{
    var produtos = [
        {
            id: 12,
            descricao: 'Tijolo médio',
            preco: 20.5,
            estoque: 29,
        },
        {
            id: 13,
            descricao: 'Cimento CP-II',
            preco: 35.0,
            estoque: 50,
        },
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
        {
            id: 18,
            descricao: 'Viga de concreto',
            preco: 75.0,
            estoque: 15,
        },
        {
            id: 19,
            descricao: 'Piso cerâmico',
            preco: 58.0,
            estoque: 22,
        },
        {
            id: 20,
            descricao: 'Revestimento cerâmico',
            preco: 48.5,
            estoque: 37,
        },
        {
            id: 21,
            descricao: 'Tinta impermeabilizante',
            preco: 95.0,
            estoque: 12,
        }
    ];
    res.render("produto/lista", {produtos: produtos})  
})
app.get("/cadastro", (req, res)=>{
    res.render("produto/cadastro")  
})

app.post("/cadastro", (req, res)=>{
    var produto = {
        descricao: req.body.descricao,
        estoque: req.body.estoque,
        preco: req.body.preco,
        status: 1,
        foto: '/img/semfoto.png'
    }

    res.render('produto/detalhe', {produto})
   
})


app.listen(port, ()=>{
    console.log(`Servidor rodando em porta http://localhost:${port}`)
})
