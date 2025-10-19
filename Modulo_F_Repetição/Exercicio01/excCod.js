function contar(){
    var txTinicio = document.getElementById('inicio')
    var txTpulo = document.getElementById('pulo')
    var txTfim = document.getElementById('fim')
    var iCont = 0
    var inicio = Number(txTinicio.value)
    var pulo = Number(txTpulo.value)
    var fim  = Number(txTfim.value)
    var p1 = document.getElementById('p1')
    for(iCont = inicio; iCont <= fim; iCont += pulo) {
        p1.innerHTML += `${iCont} >>`
    }
}