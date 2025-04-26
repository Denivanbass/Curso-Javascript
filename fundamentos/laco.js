// let num = 0
// while (num < 100) {
//     console.log(num)
//     num ++    
// }

/* for (i = 0; i <= 100; i++){
    console.log(i)
} */

/* function contagem(limite) {
    for(i = 0; i <= limite; i++) {
        if (i % 2 == 0 && i != 0) {
            console.log(`O número ${i} é par.`)         
        } 
    }
}
contagem(10)


function contagem2(limite) {
    let somaPares = 0
    let somaImpares = 0
    for(i = 0; i <= limite; i++) {
        if (i % 2 == 0 && i != 0) {
            somaPares += i
        } else {
            somaImpares += i
        }
    }
    return `A soma dos pares é ${somaPares}, e a soma dos ímpares é ${somaImpares}`
}
console.log(contagem2(20))



// Parar ao encontrar o numero 27
for (i = 0; i <= 100; i ++){
    console.log(i)
    if (i === 27){
        return console.log('Encontrei o numero 27.')        
    }
}
 */

// tabuada até 10
/* function tabuada(numero) {
    for (i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}
tabuada(7) */

// contagem regressiva
/* function contagemRegressiva(inicio) {
    for(i = inicio; i >= 0; i--) {
        if (i == 0) {
            return console.log('Feliz ano novo!!!')
        }
        console.log(`contagem regressiva ${i}`)
    }
}
contagemRegressiva(100) */



function numerosPares(inicio) {
    for(i = inicio; i >= 0; i--) {
        if (i == 0){
            return
        } else if (i % 2 == 0) {
            console.log(`O número ${i} é par.`)
        }
    }
}
numerosPares(20)