import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000

// configurar onde estao ficarão os arquivo independente de servidor
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
app.use('/icons', express.static(path.join(__dirname, './node_modules/bootstrap-icons/font')))


app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/src/index.html')
})

app.get('/listar', (req, res)=>{
    res.sendFile(__dirname+'/src/listar.html')
})

app.get('/cadastrar', (req, res)=>{
    res.sendFile(__dirname+'/src/cadastrar.html')
})
app.get('/usuarios', (req, res)=>{
    res.sendFile(__dirname+'/src/usuarios.html')
})




app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})