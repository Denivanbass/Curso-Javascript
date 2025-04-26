// aumento de 25% no salario
let salario = 3000
let aumento = 25
let aumento_percent = aumento / 100
let novo_salario = salario * aumento_percent + salario
console.log('Com aumento de', aumento, '% o novo salário será R$', novo_salario.toFixed(2))