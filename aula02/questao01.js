// obs: e = Math.exp
// minha resolucao
function Neuronio(x1, x2, x3){
    let w1 = 0.25
    let w2 = 0.43
    let w3 = 0.5

    let v = (x1 * w1) + (x2 * w2) + (x3 * w3)

    let y = 1 / (1 + Math.exp(-v))

    if (y >= 0.8){
        var res = 'Gato'
    }else{
        var res = 'Cachorro'
    }

    return console.log(res);
}

Neuronio(0.1, 0.3, 0.4)



// resolucao prof

var X = [0.1, 0.3, 0.4]
var W = [0.25, 0.43, 0.5]
var v 

for (let i = 0; i < X.length; i++){
    v+= (X[i] * W[i])
}

var y = 1 / (1+ Math.exp(-v))

if (y >= 0.8){
    console.log('Gato')
}else{
    console.log('Cachorro')
}