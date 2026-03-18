class Veiculo {
    constructor(mod, marc, plc) {
        this.modelo = mod;
        this.marca = marc;
        this.placa = plc;
    }
    toString() {
        return `${this.marca} ${this.modelo} - Placa: ${this.placa}`;
    }
}
function Verificar() {
    let txtModelo = document.getElementById("Modelo");
    let txtMarca = document.getElementById("Marca");
    let txtPlaca = document.getElementById("Placa");
    let placa = Number(txtPlaca.value);
    let tela = document.getElementById("carTela");
    let carro = new Veiculo(txtModelo.value, txtMarca.value, placa);
    tela.innerText = `o carro é ${carro}`;
}
