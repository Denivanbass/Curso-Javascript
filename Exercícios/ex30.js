// Sistema de Recompensas

function verificarRecompensa(treinosSemana) {
    if (treinosSemana >= 4) {
        return console.log('Premio Liberado')
    } else {
        return console.log('Continue Treinando')
    }
}
verificarRecompensa(5)