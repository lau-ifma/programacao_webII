

export default function criptografia(mensagem, chave, converter){
    return converter(mensagem, chave)
}

export function cifraLetra(letra, chave){
    let alfa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q','r','s','t','u','v','w','x','y','z']
    for (let i = 0; i <= alfa.length; i++){
        if (alfa[i] === letra){
            let pulo = i + chave
            if(pulo > alfa.length){
                pulo = pulo - alfa.length
            }
            return alfa[pulo]
        }
    }
}
export function decifraLetra(letra, chave){
    let alfa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q','r','s','t','u','v','w','x','y','z']
    for (let i = 0; i <= alfa.length; i++){
        if (alfa[i] === letra){
            let pulo = i - chave
            if(pulo < 0){
                pulo = pulo + alfa.length
            }
            return alfa[pulo]
        }
    }
}





