
export function dobraVetor(vetor){
    var res = []
    for (let i = 0; i < vetor.length; i++){
        res.push(vetor[i]*2)
    }
    return res;
}


export function somaVetor (vetor, dobro){
    let v = dobro(vetor)
    let soma = []

    for (let i = 0; i < v.length; i++){
        soma.push(v[i] + vetor[i])
    }
    return soma

}

// console.log(somaVetor([3,5,7,10,12], dobraVetor))

