export function buscaLinear(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return array[i]; 
        }
    }
    return -1; 
}
