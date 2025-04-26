// Exercício 03 - conversor celsius / fahrenheit - 
// Fórmula:	(2 °C × 9/5) + 32 = 35,6 °F

function converterCelsiusParaFahrenheit(celsius) {
    return celsius * (5/9) + 32
}
console.log('A conversão é equivalente à:', converterCelsiusParaFahrenheit(2).toFixed(1

), '°c')

// Formula:(32 °F − 32) × 5/9 = 0 °C

function converterFahrenheitParaCelsius(Fahrenheit) {
    return (Fahrenheit - 32) * 5 / 9
}
console.log('A conversão é equivalente à :',converterFahrenheitParaCelsius(35.6).toFixed(0),'°F')