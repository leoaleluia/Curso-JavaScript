//usando funções com parametros, caso usarmos o somar(n1=0, n2=0) estamos definindo o valor padrão em 5 caso não ocorra entrada de dados
function somar(n1, n2){
    return n1 + n2
}

console.log(somar(5, 3))


//podemos colocar uma função em uma variável
let v = function mult(n1=0, n2=0){
    return n1 * n2
}

console.log(v(5))


// usando apenas duas expressões para declarar a function
var calcular = (n1, n2) => n1 * n2
console.log(calcular(5, 6))