function verificar(){
    var ctr = new Date
    var anoAtual = ctr.getFullYear()
    var masc = document.getElementById('masc')
    var fem = document.getElementById('fem')
    var anoNasc = document.getElementById('txTano')
    var idade = anoAtual - anoNasc.value
    var p2 = document.getElementById('p2')
    var genero = ''


    if(anoNasc.value >= anoAtual){
        p2.innerHTML = `ano de nascimento Invalido`
       
    }else if (idade > 1 && idade < 10){
        var rad = document.getElementsByName('rad')
        if (rad[0].checked){
            p2.innerHTML = `Você é uma criança do sexo masculino com ${idade} anos de idade`
        }else{
            p2.innerHTML = `VocÊ é uma criança do sexo feminino com ${idade} anos de idade`
        }
    }else if (idade < 18){
        var rad = document.getElementsByName('rad')
        if (rad[0].checked){
            p2.innerHTML = `você é um adolescente  de ${idade} idade, do sexo masculino`
        }else{
            p2.innerHTML = `você é uma adolescente do ${idade} de idade, sexo femino`
        }
    }else{
        var rad = document.getElementsByName('rad')
        if(rad[0].checked){
            p2.innerHTML = `você é um adulto de ${idade} anos de idade e do sexo masculino`
        }else{
            p2.innerHTML = `Você é umaa adulta de ${idade} anos de idade e do sexo feminino`
        }
    }
        
    

    /*Curiosidades: podemos adcionar imagens e outras funcionalidades atraves do js, por exemplo:
    var img = document.createElementy('img')
    img.setAttribute('id', 'foto') // nota-se o uso do id e foto como uma forma de id="foto", serve para outros arquivos. script.setAttribute('src', 'codigo,js)// temos que usar a palavra reservada */
}