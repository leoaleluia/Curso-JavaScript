const usuarios = [
    { id: 1, nome: 'Ana' },
    { id: 2, nome: 'Carlos' },
    { id: 3, nome: 'Beatriz' }
];

usuarios[3] = usuarios.id = 4
usuarios[3] = usuarios.nome = 'leo'
var usuarioEnc = undefined

var i = 0
while(i < usuarios.length){
    var item = usuarios[i]
    if(item.id === 4){
        usuarioEnc = item
        break
    }
    i++
}

console.log(item);