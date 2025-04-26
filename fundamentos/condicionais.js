// if / else

/* let nota = 10

if (nota == 10){
    return console.log('Excelente')
} else if (nota >= 7){
   return console.log('Aprovado')
} else if (nota >= 4){
    return console.log('Recuperação')
}  
else {
    return console.log('Reprovado')
} */

// Switch case

let nota = 10

switch (true) {
    case nota == 10: return console.log('Excelente')        
    case nota >= 7 : return console.log('Aprovado')
    case nota >= 4 : return console.log('Recuperação')        
    default: return console.log('Reprovado') 
}

