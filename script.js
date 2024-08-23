function converterMoeda(){
    let valor = document.getElementById('valor').value
    let moedaOrigem = document.getElementById('moedaOrigem').value
    let moedaDestino = document.getElementById('moedaDestino').value
    let resultado = document.getElementById('resultado')

    if (valor.length == 0 || valor <= 0){
        window.alert('[ERRO] Insira um valor válido!')
        return;
    }

    // URL da API de câmbio (chave de API é necessária)
    let url = `https://v6.exchangerate-api.com/v6/60c8a550fee8f59949cdf24b/latest/${moedaOrigem}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.result === "success") {
                let taxa = data.conversion_rates[moedaDestino]
                let valorConvertido = (valor * taxa).toFixed(2)

                resultado.innerHTML = `${valor} ${moedaOrigem} = ${valorConvertido} ${moedaDestino}`
            } else {
                resultado.innerHTML = '[ERRO] Não foi possível obter as taxas de câmbio.'
            }
        })
        .catch(error => {
            console.error('Erro:', error)
            resultado.innerHTML = '[ERRO] Não foi possível se conectar ao serviço de câmbio.'
        })
}