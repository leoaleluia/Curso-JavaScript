function verificar(){
    var controle = new Date
    var anoAtual = controle.getUTCFullYear()
    var txTanonasc =  window.document.getElementById('nasc')
    var anonasc = Number(txTanonasc.value)
    var d1 = window.document.getElementById('d1')
    var genero = window.document.getElementById('sexo')
    var body = window.document.getElementById('b1')
    var idade = anoAtual - anonasc
    if (genero.value == "Masculino") {
        document.body.style.background = "blue"
        d1.innerText = `Bem vindo, sua idade é ${idade} e seu sexo é ${genero.value}`
    }else {
        document.body.style.background = "pink"
        d1.innerText = `Bem vindo, sua idade é ${idade}  e seu sexo é ${genero.value}`
    }
}