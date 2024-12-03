import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000

// configurar onde estao ficarão os arquivo independente de servidor
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/conteudo/index.html')
})

app.get('/produtos', (req, res)=>{
    res.sendFile(__dirname+'/conteudo/produtos.html')
})

app.get('/sobre', (req, res)=>{
    res.sendFile(__dirname+'/conteudo/sobre.html')
})



app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})