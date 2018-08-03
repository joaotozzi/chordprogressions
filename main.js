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

//define o arpejo do acorde
function arpejador(arpejo, acordes) {
  switch (arpejo) {
    case 1:
      acordes.forEach(function(acorde) {
        if (acorde.segunda) {
          tocar(acorde.baixo, (contador = contador + 250));
          tocar(acorde.fundamental, (contador = contador + 250));
          tocar(acorde.segunda, (contador = contador + 250));
          tocar(acorde.quinta, (contador = contador + 250));
        }

        if (acorde.terca) {
          tocar(acorde.baixo, (contador = contador + 250));
          tocar(acorde.fundamental, (contador = contador + 250));
          tocar(acorde.terca, (contador = contador + 250));
          tocar(acorde.quinta, (contador = contador + 250));
        }

        if (acorde.quarta) {
          tocar(acorde.baixo, (contador = contador + 250));
          tocar(acorde.fundamental, (contador = contador + 250));
          tocar(acorde.quarta, (contador = contador + 250));
          tocar(acorde.quinta, (contador = contador + 250));
        }
      }, this);
      break;
    case 2:
      acordes.forEach(function(acorde) {
        if (acorde.segunda) {
          tocar(acorde.baixo, (contador = contador + 250));

          tocar(acorde.fundamental, (contador = contador + 250));
          tocar(acorde.segunda, contador);
          tocar(acorde.quinta, contador);

          tocar(acorde.baixo, (contador = contador + 250));

          tocar(acorde.fundamental, (contador = contador + 250));
          tocar(acorde.segunda, contador);
          tocar(acorde.quinta, contador);
        }

        if (acorde.terca) {
          tocar(acorde.baixo, (contador = contador + 250));

          tocar(acorde.fundamental, (contador = contador + 250));
          tocar(acorde.terca, contador);
          tocar(acorde.quinta, contador);

          tocar(acorde.baixo, (contador = contador + 250));

          tocar(acorde.fundamental, (contador = contador + 250));
          tocar(acorde.terca, contador);
          tocar(acorde.quinta, contador);
        }

        if (acorde.quarta) {
          tocar(acorde.baixo, (contador = contador + 250));

          tocar(acorde.fundamental, (contador = contador + 250));
          tocar(acorde.quarta, contador);
          tocar(acorde.quinta, contador);

          tocar(acorde.baixo, (contador = contador + 250));

          tocar(acorde.fundamental, (contador = contador + 250));
          tocar(acorde.quarta, contador);
          tocar(acorde.quinta, contador);
        }
      }, this);
      break;
    case 3:
      acordes.forEach(function(acorde) {
        if (acorde.segunda) {
          tocar(acorde.baixo, (contador = contador + 500));
          tocar(acorde.fundamental, contador);
          tocar(acorde.segunda, contador);
          tocar(acorde.quinta, contador);

          tocar(acorde.baixo, (contador = contador + 500));

          tocar(acorde.baixo, (contador = contador + 500));
          tocar(acorde.fundamental, contador);
          tocar(acorde.segunda, contador);
          tocar(acorde.quinta, contador);

          tocar(acorde.baixo, (contador = contador + 500));
        }

        if (acorde.terca) {
          tocar(acorde.baixo, (contador = contador + 500));
          tocar(acorde.fundamental, contador);
          tocar(acorde.terca, contador);
          tocar(acorde.quinta, contador);

          tocar(acorde.baixo, (contador = contador + 500));

          tocar(acorde.baixo, (contador = contador + 500));
          tocar(acorde.fundamental, contador);
          tocar(acorde.terca, contador);
          tocar(acorde.quinta, contador);

          tocar(acorde.baixo, (contador = contador + 500));
        }

        if (acorde.quarta) {
          tocar(acorde.baixo, (contador = contador + 500));
          tocar(acorde.fundamental, contador);
          tocar(acorde.quarta, contador);
          tocar(acorde.quinta, contador);

          tocar(acorde.baixo, (contador = contador + 500));

          tocar(acorde.baixo, (contador = contador + 500));
          tocar(acorde.fundamental, contador);
          tocar(acorde.quarta, contador);
          tocar(acorde.quinta, contador);

          tocar(acorde.baixo, (contador = contador + 500));
        }
      }, this);
      break;
  }
}

//toca a nota no tempo determinado
function tocar(nota, tempoEmMillis) {
  
  if (tempoEmMillis == 0) {
    howls[nota - 48].play();
  } else {
    timers.push(setTimeout(function() {
      howls[nota - 48].play();
    }, tempoEmMillis));
  }
}

//Estrutura para armazenar as notas (em MIDI) de um Acorde
var Acorde = function() {
  this.baixo = "";
  this.fundamental = "";
  this.segunda = "";
  this.terca = "";
  this.quarta = "";
  this.quinta = "";
  this.sexta = "";
  this.setima = "";
  this.nona = "";
  this.decimaPrimeira = "";
  this.decimaTerceira = "";
};

//inverte o baixo do acorde
function inverteBaixo(acorde, cifra) {
  acorde.baixo = converteNotaEmMidi(cifra, 3);
  texto[texto.length - 1] = texto[texto.length - 1] + "/" + cifra;
}

/*
adiciona ao acorde as notas da tríade (T + 3 + 5) de acordo com sua tipologia
Também trata acordes suspensos sus2 (T + 2 + 5) e sus4 (T + 4 + 5)
*/
function defineTriade(acorde, cifra, categoria) {
  fundamental = converteNotaEmMidi(cifra, 4);

  if (acorde.baixo === "") {
    acorde.baixo = fundamental - intervalo("8");
  }

  acorde.fundamental = fundamental;

  if (categoria === "maior") {
    acorde.terca = fundamental + intervalo("3M");
    acorde.quinta = fundamental + intervalo("5J");
    texto.push(cifra);
  }

  if (categoria === "menor") {
    acorde.terca = fundamental + intervalo("3m");
    acorde.quinta = fundamental + intervalo("5J");
    texto.push(cifra + "m");
  }

  if (categoria === "aumentada") {
    acorde.terca = fundamental + intervalo("3M");
    acorde.quinta = fundamental + intervalo("5A");
    texto.push(cifra + "+");
  }

  if (categoria === "diminuta") {
    acorde.terca = fundamental + intervalo("3m");
    acorde.quinta = fundamental + intervalo("5d");
    texto.push(cifra + "dim");
  }

  if (categoria === "sus2") {
    acorde.segunda = fundamental + intervalo("2M");
    acorde.quinta = fundamental + intervalo("5J");
    texto.push(cifra + "sus2");
  }

  if (categoria === "sus4") {
    acorde.quarta = fundamental + intervalo("4J");
    acorde.quinta = fundamental + intervalo("5J");
    texto.push(cifra + "sus4");
  }
}

//retorna os intervalos em numero de semitons
function intervalo(tipo) {
  switch (tipo) {
    case "2M":
      return 2;
    case "3m":
      return 3;
    case "3M":
      return 4;
    case "4J":
      return 5;
    case "5d":
      return 6;
    case "5J":
      return 7;
    case "5A":
      return 8;
    case "6M":
      return 9;
    case "7d":
      return 9;
    case "7m":
      return 10;
    case "7M":
      return 11;
    case "8":
      return 12;
    case "9m":
      return 13;
    case "9M":
      return 14;
    case "9A":
      return 15;
    case "11d":
      return 16;
    case "11J":
      return 17;
    case "11A":
      return 18;
    case "13m":
      return 20;
    case "13M":
      return 21;
    case "13A":
      return 22;
  }
}

//converte cifra + oitava em Notação MIDI
function converteNotaEmMidi(cifra, oitava) {
  switch (cifra) {
    case "C":
      return 24 + oitava * 12;
    case "C#":
      return 25 + oitava * 12;
    case "Db":
      return 25 + oitava * 12;
    case "D":
      return 26 + oitava * 12;
    case "D#":
      return 27 + oitava * 12;
    case "Eb":
      return 27 + oitava * 12;
    case "E":
      return 28 + oitava * 12;
    case "F":
      return 29 + oitava * 12;
    case "F#":
      return 30 + oitava * 12;
    case "Gb":
      return 30 + oitava * 12;
    case "G":
      return 31 + oitava * 12;
    case "G#":
      return 32 + oitava * 12;
    case "Ab":
      return 32 + oitava * 12;
    case "A":
      return 33 + oitava * 12;
    case "A#":
      return 34 + oitava * 12;
    case "Bb":
      return 34 + oitava * 12;
    case "B":
      return 35 + oitava * 12;
  }
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
  defineTriade(acorde, "C", "maior");
  progressao.push(acorde);

  acorde = new Acorde();
  defineTriade(acorde, "A", "menor");
  progressao.push(acorde);

  acorde = new Acorde();
  defineTriade(acorde, "G", "maior");
  inverteBaixo(acorde, "B");
  progressao.push(acorde);

  acorde = new Acorde();
  defineTriade(acorde, "F", "maior");
  progressao.push(acorde);

  document.getElementById("progressao").innerHTML =
    "Progressão ||: " + texto.join(" | ") + " :||";
}


//reprodução
function reproduzir() {
  botao = document.getElementById("play-pause");
  if (botao.getAttribute("value") ==="play") {
    contador = 0;
    botao.setAttribute("value", "pause");
    reprodutor = setInterval(arpejador, 0, 3, progressao);
    return true;
  }

  if (botao.getAttribute("value") === "pause") {
    botao.setAttribute("value", "play");
    clearInterval(reprodutor);
    timers.forEach(function(timer){
      clearTimeout(timer);
    })
    return true;
  }
}
