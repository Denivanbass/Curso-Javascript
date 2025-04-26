// calcular valor final com taxa

function calcularValorFinal(valor, taxa) {
    let valorTaxa = valor * (taxa / 100)
    let valorFinal = valor + valorTaxa
    return console.log(`O valor final com a taxa será de R$${valorFinal.toFixed(2)}`)
}
calcularValorFinal(100, 5)