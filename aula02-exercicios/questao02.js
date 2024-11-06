// Definição das posições
let H = 4;
let P = 14;
let F = 7;
let D = -1;

let conseguiuFugir = true;

// Se direção for anti-horária
if (D === 1) {
    for (let i = F; i !== H; i = (i + 1) % 16) {
        if (i === P) {  // Se o fugitivo encontrar o policial
            conseguiuFugir = false;
            break;
        }
    }
}
// Se direção for horária
else if (D === -1) {
    for (let i = F; i !== H; i = (i - 1 + 16) % 16) {
        if (i === P) {
            conseguiuFugir = false
            break;
        }
    }
}

if (conseguiuFugir) {
    console.log("S")
} else {
    console.log("N")
}
