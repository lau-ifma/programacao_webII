import express from `express`
import path from `path`
import {fileURLToPath} from `url`
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
   defaultLayout: 'main',
   handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')
// fim configuracao da visao


app.use(express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

// rotas
app.get(`/`, (req, res)=>{
    res.send(`Bem vindo ao estoque`)
})


app.listen(port, ()=>{
    console.log(`Servidor rodando em porta 3000`)
})
