let nome = {nome:'', idade: 0, bairro:'', 
    fnome(n){
        this.nome = n
    }, 
    fIdade(i){
        this.idade = i
    }, 
    fBairro(b){
        this.bairro = b
    }}

    nome.fBairro('centro')
    console.log(nome.bairro)