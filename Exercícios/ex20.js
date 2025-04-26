//Verificação de Dias da Semana

function diaUtil(dia) {
    switch (dia) {
        case 'sábado':
            console.log('Fim de semana')
            break;
        case 'Domingo':
            console.log('Fim de semana')
            break; 
        default:
            console.log('Dia útil')
            break;
    }
}
diaUtil('Domingo')