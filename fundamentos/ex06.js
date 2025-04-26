// Função teste- para aquecimento da aula
function decremento(num) {
    for (num; num >= 0; num--) {
        console.log(num)
        if (num == 0) {
            return console.log('Feliz Ano Novo!!')
        }
    }
}
// decremento(10)


// função com tabuada do 2 x

function multiplicaPorDois(num, multiplicador) {
    for (let i = 0; i <= num; i++) {        
        console.log(`${i} x ${multiplicador} = ${i * multiplicador}`)
    }
}
multiplicaPorDois(20, 3)
