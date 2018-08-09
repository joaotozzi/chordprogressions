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
  this.oitava = "";
  this.nona = "";
  this.decimaPrimeira = "";
  this.decimaTerceira = "";
}




//Para acordes Tríades e Suspensos
function triade(cifra, categoria, baixo) {
  acorde = new Acorde();
  texto = null;
  
  acorde.fundamental = converteNotaEmMidi(cifra, 4);

  //Tríade Maior
  if (categoria === "maior") {
    acorde.terca = acorde.fundamental + intervalo("3M");
    acorde.quinta = acorde.fundamental + intervalo("5J");
    progressao.push(acorde);
    texto = cifra;
  }

  //Tríade Menor
  if (categoria === "menor") {
    acorde.terca = acorde.fundamental + intervalo("3m");
    acorde.quinta = acorde.fundamental + intervalo("5J");
    progressao.push(acorde);
    texto = cifra + "m";
  }

  //Tríade Aumentada
  if (categoria === "aumentada") {
    acorde.terca = acorde.fundamental + intervalo("3M");
    acorde.quinta = acorde.fundamental + intervalo("5A");
    progressao.push(acorde);
    texto = cifra + "+";
  }

  //Tríade Diminuta
  if (categoria === "diminuta") {
    acorde.terca = acorde.fundamental + intervalo("3m");
    acorde.quinta = acorde.fundamental + intervalo("5d");
    progressao.push(acorde);
    texto = cifra + "°";
  }

  //Acorde Sus2
  if (categoria === "sus2") {
    acorde.segunda = acorde.fundamental + intervalo("2M");
    acorde.quinta = acorde.fundamental + intervalo("5J");
    progressao.push(acorde);
    texto = cifra + "sus2";
  }

  //Acorde Sus4
  if (categoria === "sus4") {
    acorde.quarta = acorde.fundamental + intervalo("4J");
    acorde.quinta = acorde.fundamental + intervalo("5J");
    progressao.push(acorde);
    texto = cifra + "sus4";
  }

  //inversão de baixo
  if(baixo === ""){
    acorde.baixo = acorde.fundamental - intervalo("8");
  }else{
    progressao[progressao.length -1].baixo = converteNotaEmMidi(baixo, 3);
    return texto + "/" + baixo;
  }

  return texto;
}

function tetrade(){
  //falta implementar
}

function tensoes(){
  //falta implementar
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