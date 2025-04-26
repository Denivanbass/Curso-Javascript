// Cálculo de Calorias Queimadas
function calcularCalorias(tipoExercicio, tempo) {
    if (tipoExercicio == 'corrida') {
        return console.log(`Você queimou ${tempo * 10} calorias.`)
    } else if (tipoExercicio == 'caminhada') {
        return console.log(`Você queimou ${tempo * 5} calorias.`)
    } else if (tipoExercicio == 'ciclismo') {
        return console.log(`Você queimou ${tempo * 8} calorias.`)
    } else {
        return console.log(`Digite uma categoria válida.`)
    }    
}
calcularCalorias('ciclismo', 35)