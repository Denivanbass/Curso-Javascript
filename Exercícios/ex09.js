//Conversor de Moeda

/* let real =  1000
let dollar = 5.73 
let resultado = real / dollar 
console.log('R$', real, 'convertido em dóllar são: US$', resultado.toFixed(2)) */


 function converterRealParaDolar(reais, taxa) {   
   let dollar = reais / taxa
   return console.log(`R$ ${reais} equivale à US${dollar.toFixed(2)}`)
 }
 converterRealParaDolar(100, 5.73)
