// Comparação

let igual 
let string = '5'
let number = 5

igual = (string == number)
console.log(igual, 'igualdade')

igual = (string === number) // strict métod (valida o tipo da variável)
console.log(igual, 'igualdade estrita') 

let diferente

diferente = (string != number)
console.log(diferente, 'diferente')

diferente = (string !== number)
console.log(diferente, 'diferente estrita')

let maior = (10 > 5)
let menor = (7 < 3)
let maiorIgual = (5 <= 5)
let menorIgual =(3 >= 4)
// console.log(maior, 'maior')
// console.log(menor, 'menor')
// console.log(maiorIgual, 'maiorigual')
// console.log(menorIgual, 'menorIgual')
console.log('10 > 5 -', maior,'|', '7 < 3 -', menor,'|', '5 <= 5 -',maiorIgual,'|', '3 >= 4 -',menorIgual)