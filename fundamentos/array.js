// Array é uma lista ou uma matriz

// const fruits = ['maça', 'uva', 'laranja'] // Array é uma lista ordenada por números.
// console.table(fruits)
// console.log(`O array possui ${fruits.length} elementos:`) // cada tipo de dados tem seus métodos.


// O length começa contar pelo 1, já o índice começa a contar pelo 0.
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits.length -1, `O último item do array é: ${fruits[2]}`)

//criar um array de numeros de 0 a 10
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const fullName = 'Maria José dos Santos Oliveira'
// // let arrayName = fullName.length // Método string - conta caractér
// // console.log(arrayName)

// let arrayName = fullName.split(' ') // Método string - Fatia pelo espaço vazio
// console.log(`Olá, ${arrayName[0]} ${arrayName[arrayName.length - 1]}`)

// função que recebe um nome completo e retorna o primeiro e ultimo nome.

firstNameandLastName = (fullName) => {
    let arrayName= fullName.split(' ')
    return `Olá ${arrayName[0]} ${arrayName[arrayName.length - 1]}, Seja bem vindo.`
}
console.log(firstNameandLastName('Bruno Oliveira Dias dos Santos'))