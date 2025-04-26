// Verificador de Acesso

function  verificarLogin(usuario, senha) {
    if (usuario == 'admin' && senha == 1234) {
        return console.log('Acesso Permitido')
    } else {
        return console.log('Acesso Negado.')
    }
}
verificarLogin('admin', 1234)