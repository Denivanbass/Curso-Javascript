// Triangulo valido

function podeSerTriangulo(a, b, c) {
    a + b > c && b + c > a && c + a > b ? console.log('É um triangulo') : console.log('Não é um triangulo')
}
podeSerTriangulo(3,4,5)