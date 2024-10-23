const adicao = (a, b) =>{
    let s = parseFloat(a) + parseFloat(b)
    return s
}
const Subtrair = (a, b) =>{
    s = a - b
    return s
}
const Multiplicar = (a, b) =>{
    s = a * b
    return s
}
const Dividir = (a, b) =>{
    s = a / b
    return s
}

function clicouSoma(){
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
j
    let s = adicao(v1, v2)

    document.getElementById("resultado").value = s
}
function clicouSub(){
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    let s = Subtrair(v1, v2)
    document.getElementById("resultado").value = s
}
function clicouMult(){
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    let s = Multiplicar(v1, v2)
    document.getElementById("resultado").value = s
}
function clicouDiv(){
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    let s = Dividir(v1, v2)
    document.getElementById("resultado").value = s
}
