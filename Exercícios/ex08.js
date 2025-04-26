// Exercício 08 - Par ou ímpar

function parOuImpar(a ) {
    if (a == 0) {
        return `O número ${a} é neutro.`
    } else if (a % 2 == 0) {
        return `O número ${a} é par.`
    } else {
        return `O número ${a} é ímpar.`
    }
}
console.log(parOuImpar(2))