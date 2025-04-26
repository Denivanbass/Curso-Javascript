// Classificação de Números Positivos, Negativos ou Neutros

function classificarNumero(n) {
    if (n > 0) {
        return console.log(`O número ${n} é positivo.`)
    } else if (n === 0) {
        return console.log(`O número ${n} é neutro.`)
    } else {
        return console.log(`O número ${n} é negativo.`)
    }
}
classificarNumero(0)