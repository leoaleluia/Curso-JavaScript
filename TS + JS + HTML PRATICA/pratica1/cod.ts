// cod.ts - USE ISSO!

function Verificar() {
    // @ts-ignore - Ignora o erro do TypeScript
    let km: HTMLInputElement = document.getElementById('km') as HTMLInputElement
    // @ts-ignore
    let gasolina: HTMLInputElement = document.getElementById('combustivel') as HTMLInputElement
    // @ts-ignore
    let resultado: HTMLInputElement = document.getElementById('psg');
    
    let km1 = Number(km.value);
    let gasolina2 = Number(gasolina.value);
    
    let consumo = km1 / 10;
    let passagem = gasolina2 * consumo;
    
    resultado.innerHTML = "O valor da passagem é R$ " + passagem.toFixed(2);
}

// @ts-ignore
window.Verificar = Verificar;