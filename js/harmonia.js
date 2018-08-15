let progressao = [];
let acordesIntervalos = [];

//Estrutura para armazenar as notas (em MIDI) de um Acorde
Acorde = function() {
  this.baixo = "";
  this.fundamental = "";
  this.segunda = "";
  this.terca = "";
  this.quarta = "";
  this.quinta = "";
  this.sexta = "";
  this.setima = "";
  this.oitava = ""; //apenas para power chords (X5)
  this.nona = "";
  this.decimaPrimeira = "";
  this.decimaTerceira = "";
};

function montarAcordes() {
  acordesIntervalos.forEach(function(intervalosDoAcorde) {
    acorde = new Acorde();

    //extraindo a fundamental
    fund = intervalosDoAcorde.split(" ").shift();
    acorde.fundamental = converteNotaEmMidi(fund, 3);

    //array só com os intervalos
    vetIntervalos = intervalosDoAcorde.split(" ");

    //extraindo o baixo
    baixo = intervalosDoAcorde.match(/[\/][A-G][\#|b]?/g);
    if (baixo === null) {
      acorde.baixo = acorde.fundamental - 12; //oitava abaixo

      //extrai a fundamental do acorde da array
      vetIntervalos = vetIntervalos.slice(1);

    } else {
      acorde.baixo = converteNotaEmMidi(baixo[0].substring(1), 2);

      //extrai a fundamental e a inversão de baixo da array
      vetIntervalos = vetIntervalos.slice(1, vetIntervalos.length-1);
    }

    vetIntervalos.forEach(function(i) {
      converteIntervaloEmMidi(acorde, i);
    });

    //adicionando o acorde ao vetor que armazena a progressão
    progressao.push(acorde);
  });
}

//Converte os intervalos em notas Midi com base na fundamental (que já está no objeto acorde)
function converteIntervaloEmMidi(acorde, classInt) {
  switch (classInt) {
    case "2M":
      acorde.segunda = acorde.fundamental + 2;
      break;
    case "3m":
      acorde.terca = acorde.fundamental + 3;
      break;
    case "3M":
      acorde.terca = acorde.fundamental + 4;
      break;
    case "4J":
      acorde.quarta = acorde.fundamental + 5;
      break;
    case "5d":
      acorde.quinta = acorde.fundamental + 6;
      break;
    case "5J":
      acorde.quinta = acorde.fundamental + 7;
      break;
    case "5A":
      acorde.quinta = acorde.fundamental + 8;
      break;
    case "6M":
      acorde.sexta = acorde.fundamental + 9;
      break;
    case "7d":
      acorde.setima = acorde.fundamental + 9;
      break;
    case "7m":
      acorde.setima = acorde.fundamental + 10;
      break;
    case "7M":
      acorde.setima = acorde.fundamental + 11;
      break;
    case "8":
      acorde.oitava = acorde.fundamental + 12;
      break;
    case "9m":
      acorde.nona = acorde.fundamental + 13;
      break;
    case "9M":
      acorde.nona = acorde.fundamental + 14;
      break;
    case "9A":
      acorde.nona = acorde.fundamental + 15;
      break;
    case "11d":
      acorde.decimaPrimeira = acorde.fundamental + 16;
      break;
    case "11J":
      acorde.decimaPrimeira = acorde.fundamental + 17;
      break;
    case "11A":
      acorde.decimaPrimeira = acorde.fundamental + 18;
      break;
    case "13m":
      acorde.decimaTerceira = acorde.fundamental + 20;
      break;
    case "13M":
      acorde.decimaTerceira = acorde.fundamental + 21;
      break;
    case "13A":
      acorde.decimaTerceira = acorde.fundamental + 22;
      break;
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