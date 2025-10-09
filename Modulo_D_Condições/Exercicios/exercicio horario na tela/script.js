function carregar(){
    var d1 = window.document.getElementById('d1')
    var data = new Date
    var horario = data.getHours()
    var minutos = data.getMinutes()
    var body = window.document.getElementById('b1')
    if (horario >= 0 && horario <= 11){
        d1.innerText = `Bom dia, horario: ${horario}:${minutos}`
        document.body.style.background = 'blue'
    }else if (horario >= 12 && horario <= 18){
        d1.innerText = `Boa tarde, Horário: ${horario}:${minutos}`
        document.body.style.background = 'red'
    }else{
        d1.innerText = `Boa noite, Horário: ${horario}:${minutos}`
        document.body.style.background = 'brown' //Usamos esse comando para alterar a cor do body do site
    }
}

   
    