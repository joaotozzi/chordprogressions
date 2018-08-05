//timers
let reprodutor;
let timers = [];

//carregando os arquivos de áudio
let sounds = [];
let howls = [];

for (var z = 48; z <= 95; z++) {
  sounds.push("sounds/piano" + z.toString() + ".mp3");
  var howl = new Howl({
    src: ["sounds/piano" + z.toString() + ".mp3"],
    volume: 0.2
  });
  howls.push(howl);
}

/*
=======================================
execução principal
=======================================
*/

function executa() {
  progressao = [];
  texto = [];

  //definindo os acorde da progressão
  acorde = new Acorde();
  triade(acorde, "C#", "menor");
  progressao.push(acorde);

  acorde = new Acorde();
  triade(acorde, "A", "maior");
  progressao.push(acorde);

  acorde = new Acorde();
  triade(acorde, "E", "maior");
  progressao.push(acorde);

  acorde = new Acorde();
  triade(acorde, "E", "sus2");
  progressao.push(acorde);

  document.getElementById("progressao").innerHTML =
    "Progressão ||: " + texto.join(" | ") + " :||";
}

//reprodução
function reproduzir() {
  if (document.getElementById("play-pause").getAttribute("value") === "PLAY") {
    contador = 0;
    document.getElementById("play-pause").setAttribute("value", "PAUSE");
    arpejo = document.getElementById("arpejo");

    if (document.getElementById("repetir").checked) {
      reprodutor = setInterval(
        arpejador,
        0,
        arpejo.options[arpejo.selectedIndex].value,
        progressao
      );
    } else {
      arpejador(arpejo.options[arpejo.selectedIndex].value, progressao);
    }

    return true;
  }

  if (document.getElementById("play-pause").getAttribute("value") === "PAUSE") {
    document.getElementById("play-pause").setAttribute("value", "PLAY");
    clearInterval(reprodutor);
    timers.forEach(function(timer) {
      clearTimeout(timer);
    });
    return true;
  }
}

function pausar() {
  document.getElementById("play-pause").setAttribute("value", "PLAY");
  clearInterval(reprodutor);
  timers.forEach(function(timer) {
    clearTimeout(timer);
  });
}

function atualizaValorBPM(bpm) {
  document.getElementById("label-bpm").innerHTML = "BPM: " + bpm;
  pausar();
  andamento = bpm;
}
