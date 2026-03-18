// cod.ts - USE ISSO!
function Verificar() {
    // @ts-ignore - Ignora o erro do TypeScript
    let km = document.getElementById('km');
    // @ts-ignore
    let gasolina = document.getElementById('combustivel');
    // @ts-ignore
    let resultado = document.getElementById('psg');
    let km1 = Number(km.value);
    let gasolina2 = Number(gasolina.value);
    let consumo = km1 / 10;
    let passagem = gasolina2 * consumo;
    resultado.innerHTML = "O valor da passagem é R$ " + passagem.toFixed(2);
}
// @ts-ignore
window.Verificar = Verificar;
export {};
