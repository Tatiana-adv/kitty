document.addEventListener('DOMContentLoaded', () => {
    // Defina a data de nascimento (Ano, Mês-1, Dia)
    const dataNascimento = new Date('1979-10-08T00:00:00');

    const diasEl = document.getElementById('dias');
    const horasEl = document.getElementById('horas');
    const minutosEl = document.getElementById('minutos');
    const segundosEl = document.getElementById('segundos');

    function formatarNumero(numero) {
        // Usa Intl.NumberFormat para formatar números grandes com pontos. Ex: 16.750
        return new Intl.NumberFormat('pt-BR').format(numero);
    }

    function atualizarContador() {
        const agora = new Date();
        const diferenca = agora - dataNascimento; // A diferença é agora - nascimento

        // Calcula o total de dias, horas, minutos e segundos
        const totalSegundos = Math.floor(diferenca / 1000);
        const totalMinutos = Math.floor(totalSegundos / 60);
        const totalHoras = Math.floor(totalMinutos / 60);
        const totalDias = Math.floor(totalHoras / 24);
        
        // Atualiza o HTML com os valores totais formatados
        diasEl.textContent = formatarNumero(totalDias);
        horasEl.textContent = formatarNumero(totalHoras);
        minutosEl.textContent = formatarNumero(totalMinutos);
        segundosEl.textContent = formatarNumero(totalSegundos);
    }

    // Atualiza o contador a cada segundo
    setInterval(atualizarContador, 1000);

    // Chama a função uma vez para não haver atraso na exibição
    atualizarContador();
});
