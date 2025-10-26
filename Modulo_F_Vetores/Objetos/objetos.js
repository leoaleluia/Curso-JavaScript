var nome = {nome:'', idade:0, 
    fNome(n){
        this.nome = n
    }, 
    fIdade(i){
        this.idade = i
    }}

    function iniciar(){
        var txTnome = document.getElementById('idNome')
        var txTidade = document.getElementById('idIdade')
        var pIdade = document.getElementById('pIdade')
        var pNome = document.getElementById('pNome')
        nome.fNome(txTnome.value)
        nome.fIdade(txTidade.value)
        pIdade.innerText = nome.nome
        pNome.innerText = nome.idade
    }