function getCountdown(dataAlvo) {
    var dataAtual = new Date().getTime();
    var diferencaDeTempo = dataAlvo - dataAtual;

    var days = Math.floor(diferencaDeTempo / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diferencaDeTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diferencaDeTempo % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diferencaDeTempo % (1000 * 60)) / 1000);

    return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

function openGoogleMaps() {
    var userAddress = document.getElementById("userAddress").value;
    var destination = encodeURIComponent("Ibirapuera, São Paulo - SP");
    var mapsURL = "https://www.google.com/maps/dir/?api=1&origin=" + encodeURIComponent(userAddress) + "&destination=" + destination;
    window.open(mapsURL);
}

var dataDoAniversario = new Date("july 18, 2023 19:00:00").getTime();

setInterval(function() {
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerText = getCountdown(dataDoAniversario);
}, 1000);