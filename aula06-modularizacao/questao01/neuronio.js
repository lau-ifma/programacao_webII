function calculo_neuronio (x, ativacao){
    var w = treinamento(x.length)
    var v = 0
    for (let i = 0; i < x.length; i++){
        v+= (x[i] * w[i])
    }
    var f = ativacao(v)
    return f

}

function treinamento(n){
    var w = []
    for (let i = 0; i < n; i++){
        w.push(Math.random())
    }
    return w
}

export default calculo_neuronio