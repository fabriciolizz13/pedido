function fuja(){
    var botaoNao = document.getElementById('não')
    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxX = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioy = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioy + "px";
}