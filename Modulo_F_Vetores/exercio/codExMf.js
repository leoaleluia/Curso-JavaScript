
var lista = []
var totNum = 0
var somatot = 0
var media = 0
function adicionar(){
    var txTnum = document.getElementById('num')
    var num = Number(txTnum.value)
    var listanum = document.getElementById('numeros')

    if (lista.indexOf(num) == -1){
        lista.push(num)
        var item = document.createElement('option')
        item.innerText = num
        listanum.appendChild(item)
        totNum++
    }else{
        alert('Digite outro número')
    }
    txTnum.value = ''
    txTnum.focus()
}

function Verificar(){
    var soma = document.getElementById('soma')
    var txTmaior = document.getElementById('Maior')
    var txTmenor = document.getElementById('Menor')
    var txTmedia = document.getElementById('media')
    var Total = document.getElementById('total')
    var maior = lista[0]
    var menor = lista[0]
    for(c in lista){
        
        if (lista[c] > maior){
            maior = lista[c]
            txTmaior.innerText = `O maior número é ${lista[c]}`
        }else{
            if (lista[c] < menor){
                menor = lista[c]
                txTmenor.innerText = `O menor número é ${lista[c]}`
            }
        }
        somatot += lista[c]     
    }
    media = somatot / totNum
    txTmedia.innerText = `A media é ${media}`
    soma.innerText = `A soma é ${somatot}`
    Total.innerText = `O total de números digitados foram ${totNum}`
}