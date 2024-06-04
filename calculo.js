function calcularConsumo() {
    var registroMesAnterior = parseFloat(document.getElementById('mes_anterior').value);
    var registroMesAtual = parseFloat(document.getElementById('mes_atual').value);

    if (isNaN(registroMesAnterior) || isNaN(registroMesAtual)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    var consumo = registroMesAtual - registroMesAnterior;
    alert('Você gastou ' + consumo + ' litros de água este mês.');
}
