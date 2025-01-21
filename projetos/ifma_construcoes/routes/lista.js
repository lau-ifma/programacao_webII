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