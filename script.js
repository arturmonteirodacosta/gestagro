function orcamento(){
    alert("Pedido enviado");
}


// Placeholder para funcionalidade (pode ser expandido)
    document.getElementById('adicionarCarrinho').addEventListener('click', function() {
      const produto = document.getElementById('produto').value;
      const quantidade = document.getElementById('quantidade').value;
      if (produto && quantidade) {
        alert(`Produto: ${produto}, Quantidade: ${quantidade} adicionado ao carrinho!`);
      }
    });

// Exemplo de chamada à Open-Meteo API para Realeza, PR (lat: -25.78, lon: -53.83)
fetch('https://api.open-meteo.com/v1/forecast?latitude=-25.78&longitude=-53.83&hourly=temperature_2m,precipitation,relative_humidity_2m&forecast_days=7')
.then(response => response.json())
.then(data => {
const temp = data.hourly.temperature_2m[0].toFixed(1) + ' °C';
const precip = data.hourly.precipitation[0] + ' mm';
const humidity = data.hourly.relative_humidity_2m[0] + ' %';
document.querySelector('.column:last-child p:nth-child(2)').textContent = 'Temperatura: ' + temp;
document.querySelector('.column:last-child p:nth-child(3)').textContent = 'Precipitação: ' + precip;
document.querySelector('.column:last-child p:nth-child(4)').textContent = 'Umidade: ' + humidity;
})
.catch(error => console.error('Erro ao carregar dados climáticos:', error));