var calcular = require('../aula03-funcoes/app.js')

console.log(calcular(4,6))

function equacao(a, b, operacao){
    let r = a + b * operacao(a,b)
    return r
}


let  x = equacao(5, 6, (a,b) => {
    return a + (b * b)
})

console.log("res: ", x)