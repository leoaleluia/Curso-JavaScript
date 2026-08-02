document.write("olá mundo")
var n1 = 10
var n2 = 20
var n3 = n1 + n2
function alterar(){
    var nome = document.getElementById("txt1")
    var txtp2 = document.getElementById("p2")
    txtp2.innerHTML = `o Resultado é ${nome.value}`
}