// Verificação de Plano Fitness

function verificarPlanoFitness(plano) {
    if (plano == 'premium' || plano == 'vip') {
        return console.log('Acesso liberado')
    } else {
        return console.log('Acesso restrito')
    }
}
verificarPlanoFitness('simples')