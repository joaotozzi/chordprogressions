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
  this.nona = "";
  this.decimaPrimeira = "";
  this.decimaTerceira = "";
}

function reconheceAcorde (cifra){

}

/*
adiciona ao acorde as notas da tríade (T + 3 + 5) de acordo com sua tipologia
Também trata acordes suspensos sus2 (T + 2 + 5) e sus4 (T + 4 + 5)
*/
function triade(acorde, cifra, categoria) {
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

function tetrade(){

}

//inverte o baixo do acorde
function inversao(acorde, baixo){
  acorde.baixo = converteNotaEmMidi(baixo, 3);
  texto[texto.length - 1] = texto[texto.length - 1] + "/" + baixo;
}

function tensoes(){
  
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