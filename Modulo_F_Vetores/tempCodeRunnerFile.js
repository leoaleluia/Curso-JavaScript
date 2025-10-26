var c = 0
var lista = []
while (c < 3) {
    var idade = parseInt(prompt("Digite sua idade"))
    lista.push(idade)
    c++
}
c = 0
for(c in lista){
    console.log(lista[c])
}
