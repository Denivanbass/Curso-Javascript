// Classificação de Idade
function classificarIdade(idade){
    if (idade <= 12){
        return console.log('Criança')
    } else if(idade >=13 && idade <= 17){
        return console.log('Adolescente')
    } else if(idade >=18 && idade <= 59){
        return console.log('Adulto')
    } else {
        console.log('Idoso')
    }
}
classificarIdade(60)