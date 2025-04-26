//Exercicio 07 - Verificação de Múltiplo 
function ehmultiplo(n, m) {
    if (n % m == 0) {
        return `${n} É multiplo de ${m}.`
    } else {
        return `${n} Não é multiplo de ${m}`
    }
}
console.log(ehmultiplo(8, 4))