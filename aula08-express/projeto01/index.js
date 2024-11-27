import express from "express";
const app = express();

const porta = 8000

app.get('/', (req, res) => {
    res.send('Hello world my friend')
})

app.get('/cliente', (req, res) => {
    res.send('Rota de cliente')
})
app.get('/produto/:id', (req, res) => {
    let codigo = req.params.id
    res.send('Meu produto:' + codigo * 2)
})

app.get('*', (req, res) => {
    res.send('Pagina não encontrada!')
})


// fica no final 
app.listen(porta, ()=>{
    console.log(`Servidor rodando em http://localhost:${porta}`)
});
