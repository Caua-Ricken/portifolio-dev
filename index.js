function enviar(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const texto = document.getElementById('texto').value;
    const telefone = '5548996709510'

    const mensagem = `Olá! Me chamo ${nome}, ${texto}`
    const msgFormatada = encodeURIComponent(mensagem)

    const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`
    console.log(url)

    window.open(url, '_blank')
}

