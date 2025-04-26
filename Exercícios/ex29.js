// Verificador de Horário Comercial

function verificaHorarioComercial(hora) {
    if (hora >= 9 && hora <= 18){
        return console.log('Dentro do horário comercial')
    } else {
        return console.log('Fora do horario comercial')
    }        
}
verificaHorarioComercial(12)