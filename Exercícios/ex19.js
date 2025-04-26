// Sistema de Desconto Progressivo


function calcularDescontoProgressivo(valor) {
    
    if (valor >= 500) {
        let desconto = valor * 0.2
        let precoFinal = valor - desconto
        return console.log(`Ganhou 20% de desconto, o valor a pagar é R$${precoFinal.toFixed(2)}`)
    } else if (valor >= 300){
        let desconto = valor * 0.15
        let precoFinal = valor - desconto
        return console.log(`Ganhou 15% de desconto, o valor a pagar é R$${precoFinal.toFixed(2)}`)
    } else {
        let desconto = valor * 0.1
        let precoFinal = valor - desconto
        return console.log(`Ganhou 10% de desconto, o valor a pagar é R$${precoFinal.toFixed(2)}`)
    }
}
calcularDescontoProgressivo(1009)