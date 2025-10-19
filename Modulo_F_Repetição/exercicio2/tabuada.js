function Gerar(){
    var txTnum = document.getElementById('txTnumero')
    var num = Number(txTnum.value)
    var txTtabuada = document.getElementById('txTtabuada')
    if (txTnum.value.length == 0){
        alert('Digite algo')
    }else{
        var sm = 11
        var c = 0
        txTtabuada.innerText = ''
        for(c = 1; c < sm; c++){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c} `//aqui vai o que será guardado no option para mostrar na proxima linha
            txTtabuada.appendChild(item)

        }


        
       // var item = document.createElement('option')/*nessas tres proximas linhas, temos as amostragem dos dados de forma dinamica, precisamos criar um item option para poder adcionar no mostrador*/
        //item.text = txTnum.value /*O option recebe o item digitado no txTnum, mas poderia ser qualquer outro valor, no exemo a cima veremos a forma dinamica de contagem*/ 
        //txTtabuada.appendChild(item)/*a tabuada recebe o item. */
    }

}