// Avaliador de Notas

function verificarAprovacao(nota) {
    if(nota >= 7){
        return console.log('Aprovado')
    } else if(nota >= 5) {
        return console.log('Recuperação')
    } else {
        return console.log('Reprovado')
    }
}
verificarAprovacao(8)