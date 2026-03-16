function Verificar() {
    // Pegar os elementos
    const txtKm = document.getElementById('km');
    const txtGasolina = document.getElementById('combustivel');
    const txtpsg = document.getElementById('psg');
    // Pegar os valores
    const km = Number(txtKm.value);
    const gasolina = Number(txtGasolina.value);
    // Calcular
    const consumo = km / 10;
    const passagem = gasolina * consumo;
    // Mostrar resultado
    txtpsg.innerHTML = `O valor da passagem é R$ ${passagem.toFixed(2)}`;
}

