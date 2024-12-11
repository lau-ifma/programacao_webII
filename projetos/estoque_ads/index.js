import express from "express"
import path from "path"
import {fileURLToPath} from "url"
import handlebars from 'express-handlebars'
import Handlebars from "handlebars"
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'

const app = express()
const port = 3000

// configuracao da pasta estatica
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// fim configuracao da pasta estatica

// configuracao da visao
app.engine('handlebars', handlebars.engine({
   defaultLayout: 'principal',
   handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')
// fim configuracao da visao


app.use(express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

// rotas - render busca na pasta ./views
app.get("/", (req, res)=>{
    var n = "Lauanderson Rael"
    const notas = {
        nota1: 8.5,
        nota2: 10.00, 
        nota3: 7.00
    }

    res.render("admin/index", {notas, aluno:n})
})

app.get("/contato", (req, res)=>{
    res.render("admin/contato")  
})


app.listen(port, ()=>{
    console.log(`Servidor rodando em porta 3000`)
})
