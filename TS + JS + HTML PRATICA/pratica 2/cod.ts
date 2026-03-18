class Veiculo {
    public modelo: string;
    public marca: string;
    public placa: number;

    constructor (mod: string, marc: string, plc: number) {
        this.modelo = mod;
        this.marca = marc;
        this.placa = plc;
        

    }
    toString(): string {
        return `${this.marca} ${this.modelo} - Placa: ${this.placa}`;
    }
}

function Verificar(){
    let txtModelo: HTMLInputElement | null = document.getElementById("Modelo") as HTMLInputElement
    let txtMarca: HTMLInputElement | null = document.getElementById("Marca") as HTMLInputElement
    let txtPlaca: HTMLInputElement | null = document.getElementById("Placa") as HTMLInputElement
    let placa = Number(txtPlaca.value)
    let tela: HTMLDivElement | null =  document.getElementById("carTela") as HTMLDivElement
    let carro = new Veiculo (txtModelo.value, txtMarca.value, placa )
    tela.innerText = `o carro é ${carro}`


    
}