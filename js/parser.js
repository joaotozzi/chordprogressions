//Lê a gramática
let gramatica = ohm.grammarFromScriptElement();

//cria a semântica
let semantica = gramatica.createSemantics();

//define o dicionário de ações semânticas
semantica.addOperation("retornaIntervalos", {
  Cifra: function(a) {
    return a.retornaIntervalos();
  },

  CifraComum: function(a, b, c) {
    return (
      "" + a.retornaIntervalos() + b.retornaIntervalos() + c.retornaIntervalos()
    );
  },

  Tipo: function(a) {
    return a.retornaIntervalos();
  },

  //reconhece tríades
  Triade: function(a) {
    return a.retornaIntervalos();
  },
  Diminuta: function(a, _) {
    return a.retornaIntervalos() + " 3m 5d";
  },
  Menor: function(a, _) {
    return a.retornaIntervalos() + " 3m 5J";
  },
  Aumentada: function(a, _) {
    return a.retornaIntervalos() + " 3M 5A";
  },
  Maior: function(a) {
    return a.retornaIntervalos() + " 3M 5J";
  },

  //reconhece a fundamental
  Fundamental: function(_a, _b) {
    return this.sourceString;
  },

  //reconhece baixo invertido
  Inversao: function(_, b) {
    return b.retornaIntervalos();
  },
  Baixo: function(_a, _b) {
    return " /" + this.sourceString;
  },

  //reconhece tensões sobre os acordes
  Tensoes: function(a) {
    return a.retornaIntervalos();
  },
  VariosParenteses: function(_a, b, _c) {
    return b.retornaIntervalos();
    //CORRIGIR: coloca virgula quando tem mais de uma tensão
  },
  UnicoParentese: function(_a, b, _c, d, _e) {
    return "" + b.retornaIntervalos() + d.retornaIntervalos();
    //CORRIGIR: coloca virgula quando tem mais de uma tensão
  },
  Barra: function(_, b) {
    return b.retornaIntervalos();
    //CORRIGIR: coloca virgula quando tem mais de uma tensão
  },
  Intervalo: function(_a, _b) {
    if ((this.sourceString === "b9") | (this.sourceString === "9-")) {
      return " 9m";
    } else if (this.sourceString === "9") {
      return " 9M";
    } else if ((this.sourceString === "#9") | (this.sourceString === "9+")) {
      return " 9A";
    } else if ((this.sourceString === "b11") | (this.sourceString === "11-")) {
      return " 11d";
    } else if (this.sourceString === "11") {
      return " 11J";
    } else if ((this.sourceString === "#11") | (this.sourceString === "11+")) {
      return " 11A";
    } else if ((this.sourceString === "b13") | (this.sourceString === "13-")) {
      return " 13m";
    } else if (this.sourceString === "13") {
      return " 13M";
    } else if ((this.sourceString === "#13") | (this.sourceString === "13+")) {
      return " 13A";
    }
  },

  //reconhece acordes com sexta
  Sexta: function(a) {
    return a.retornaIntervalos();
  },
  Maior6: function(a, _) {
    return a.retornaIntervalos() + " 3M 5J 6M";
  },
  Menor6: function(a, _) {
    return a.retornaIntervalos() + " 3m 5J 6M";
  },

  //reconhece acordes suspensos
  Suspenso: function(a) {
    return a.retornaIntervalos();
  },
  Sus2: function(a, _) {
    return a.retornaIntervalos() + " 2M 5J";
  },
  Sus4: function(a, _) {
    return a.retornaIntervalos() + " 4J 5J";
  },

  //reconhece tétrades
  Tetrade: function(a) {
    return a.retornaIntervalos();
  },
  TetAumentada: function(a) {
    return a.retornaIntervalos();
  },
  TetMaior: function(a) {
    return a.retornaIntervalos();
  },
  TetDiminuta: function(a) {
    return a.retornaIntervalos();
  },
  TetMenor: function(a) {
    return a.retornaIntervalos();
  },

  //tétrade maior
  Maior7M: function(a, _) {
    return a.retornaIntervalos() + " 3M 5J 7M";
  },

  //tétrades dominantes
  Dominante: function(a) {
    return a.retornaIntervalos();
  },
  DomSus: function(a, _) {
    return a.retornaIntervalos() + " 4J 5J 7m";
  },
  Dom5Aum: function(a, _) {
    return a.retornaIntervalos() + " 3M 5A 7m";
  },
  Dom5Dim: function(a, _) {
    return a.retornaIntervalos() + " 3M 5d 7m";
  },
  Dom: function(a, _) {
    return a.retornaIntervalos() + " 3M 5J 7m";
  },

  //tétrades menores
  Menor7M: function(a, _) {
    return a.retornaIntervalos() + " 3m 5J 7M";
  },
  Menor7: function(a, _) {
    return a.retornaIntervalos() + " 3m 5J 7m";
  },

  //tétrades aumentadas
  Aum7M: function(a, _) {
    return a.retornaIntervalos() + " 3M 5A 7M";
  },
  Aum7: function(a, _) {
    return a.retornaIntervalos() + " 3M 5A 7m";
  },

  //tétrades diminutas
  MeioDim: function(a, _) {
    return a.retornaIntervalos() + " 3m 5d 7M";
  },
  Dim: function(a, _) {
    return a.retornaIntervalos() + " 3m 5d 7d";
  },

  //casos especiais
  CifraEspecial: function(a) {
    return "" + a.retornaIntervalos();
  },
  Nona: function(a) {
    return a.retornaIntervalos();
  },
  Nona7: function(a, _) {
    return a.retornaIntervalos() + " 3M 5J 7m 9M";
  },
  Nona7M: function(a, _) {
    return a.retornaIntervalos() + " 3M 5J 7M 9M";
  },
  Power: function(a, _) {
    return a.retornaIntervalos() + " 5J 8";
  }
});

function reconheceAcorde(cifragem) {
  //testa a entrada dada
  resultado = gramatica.match(cifragem);

  if (resultado.succeeded()) {
    //cria um Semantic Adapter que permite invocar os métodos
    let adaptador = semantica(resultado);

    //invoca a análise semântica
    intervalos = adaptador.retornaIntervalos();

    //[correção temporária para retirar as vírgulas das tensões]
    intervalosCorrigidos = intervalos.replace(/[,]+/g, "");

    return intervalosCorrigidos;
  } else {
    return "erro";
  }
}
