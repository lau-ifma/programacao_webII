
function sigmoide (e){
    return 1 / ( 1 + Math.exp(-e))
}


function tangenteHiper(v){
    return (Math.exp(v) - Math.exp(-v)  /   (Math.exp(v) + Math.exp(-v) ))
}

function relu(v){
    if (v > 0){
        return v
    }
    return 0
}

export default { sigmoide, tangenteHiper, relu}