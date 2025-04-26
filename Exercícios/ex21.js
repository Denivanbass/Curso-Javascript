// Índice de Massa Corporal (IMC)
// imc = peso / altura²

function calcularIMC(peso, altura) {
    let imc = peso / (altura ^ 2)
    return console.log(`O índice de massa corporal é ${imc}`)
}
calcularIMC(75, 1.75)