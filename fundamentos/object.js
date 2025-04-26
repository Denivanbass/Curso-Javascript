//Objetos
// gerador de cpf - 4devs.com.br / site para criptografar  bycript / mailinator - email / email temporario
// ste do node.js mostra como criar um servidor backend
// const webSite = {
//     name: 'code trouble', 
//     since: 2024,
//     descricao: 'Site de dv para dev.'
// }
// console.log(webSite)
// console.log(webSite.name) //O "." acessa a propriedade desejada, nesse caso a propriedade desejada foi o 'name'.
// console.log(webSite.since) 
// console.log(webSite.descricao) 

const client = {
    name: 'Denivan',
    cpf: '91364144093', 
    phone: 11948377465,
    age: 11,
    yearBirthday: 2014
}
delete client.name // Deletar o nome do cliente
client.name = 'Bernardo'

// console.log(client.phone)
// client.phone = '000000000'
// console.log(client.phone)
// client.email = 'temp@mail.com'
// console.log(client.email)


// console.log(client)
// console.log(client.name)
// console.log(`Olá ${client.name}, seja Bem vindo!!`)

// function saudacao(nome) {
//     return `Olá ${nome}, seja bem vindo!!`
// }
// console.log(saudacao(client.name))

// function idade(name, idade) {
//     return `Olá ${name}, parabéns pelos seus ${idade} anos!!`
// }
// console.log(idade(client.name, client.age))

// function verificaIdade(year) {
//     return `Você tem ${2025 - year} anos.`
// }
// console.log(verificaIdade(client.yearBirthday))

// Função anônima
// function handleCorrectAge() {}

// const handleCorrectAge = () => {} // função anônima
// handleCorrectAge()

// setTimeout(() => {
//     console.log('Estou aqui')
// }, 3000)

// const getNumber = () => console.log('getNumber')
// getNumber()


/* const ageAtual = (name, yearBirthday) => {
    let today = new Date // buscar a data automaticamente
    let result = today.getFullYear() - yearBirthday
    return `Olá ${name}, Você possui ${result} anos.`
}
console.log(ageAtual(client.name, client.yearBirthday)) */

const product = {
    name: 'Tv Samsung 42"',
    category: 'eletronic',
    price: '1669.99',
    feedback: [ 
        {            
            clientName: 'Marilsa',
            message: ' Entrega rápida e funcional.'
        },
        {            
            clientName: 'Paulão da Regulagem',
            message: ' Péssimo produto, num compensa.'
        }
    ]    
}
console.log(product.price, '- Manipulação de objeto simples' )
const { price, feedback } = product // Desestruturação de objetos
console.log(price, '- Manipulação de objeto em desestruturação') // Agora posso chamar o price em qualquer lugar sem informar o product.
// console.log(feedback[0].clientName)