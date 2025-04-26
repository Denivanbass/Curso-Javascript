handlesaudacao = (fullName) => {
    let arrayName= fullName.split(' ')

    let correctArray = arrayName.filter((name) => name.length > 3) // o método filter executa uma validação, e retorna apenas os valores que forem validados.

    let handlesaudacao = correctArray[0]
    let lastName = correctArray[correctArray.length - 1]
    return `Olá ${handlesaudacao} ${lastName}, Seja bem vindo.`
}
console.log(handlesaudacao('Bruno Oliveira Dias dos Santos'))

const numeros = [1, 2, 3, 4, 5]
numeros.forEach((num) => console.log(num * 10)) // O método .foreach executa o código mas não salva

let newNumeros = numeros.map((num) => (num * 10)) // O método .map salva a saída em um novo array
console.log(newNumeros)