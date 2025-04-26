//Idade para Votar

function podeVotar(idade) {
    if(idade >= 18) {
        return console.log('Pode votar')
    } else {
        return console.log('Não pode votar')
    }
}
podeVotar(18)