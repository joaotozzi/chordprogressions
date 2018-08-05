andamento = 100;

var Subdivisoes = function() {
  this.seminima = "";
  this.colcheia = "";
  this.semicolcheia = "";
  this.tercina = "";
};

function defineTempo(bpm) {
  subdivisoes = new Subdivisoes();
  subdivisoes.seminima = 60000 / bpm;
  subdivisoes.colcheia = subdivisoes.seminima / 2;
  subdivisoes.semicolcheia = subdivisoes.seminima / 4;
  subdivisoes.tercina = subdivisoes.seminima / 3;

  return subdivisoes;
}

//define o arpejo do acorde
function arpejador(arpejo, acordes) {
  tempo = defineTempo(andamento);

  switch (arpejo) {
    case "1":
      acordes.forEach(function(acorde) {
        for (i = 0; i < 4; i++) {
          if (acorde.segunda) {
            tocar(acorde.baixo, (contador = contador + tempo.semicolcheia));
            tocar(acorde.fundamental, (contador = contador + tempo.semicolcheia));
            tocar(acorde.segunda, (contador = contador + tempo.semicolcheia));
            tocar(acorde.quinta, (contador = contador + tempo.semicolcheia));
          }

          if (acorde.terca) {
            tocar(acorde.baixo, (contador = contador + tempo.semicolcheia));
            tocar(acorde.fundamental, (contador = contador + tempo.semicolcheia));
            tocar(acorde.terca, (contador = contador + tempo.semicolcheia));
            tocar(acorde.quinta, (contador = contador + tempo.semicolcheia));
          }

          if (acorde.quarta) {
            tocar(acorde.baixo, (contador = contador + tempo.semicolcheia));
            tocar(acorde.fundamental, (contador = contador + tempo.semicolcheia));
            tocar(acorde.quarta, (contador = contador + tempo.semicolcheia));
            tocar(acorde.quinta, (contador = contador + tempo.semicolcheia));
          }
        }
      }, this);
      break;
    
    case "2":
      acordes.forEach(function(acorde) {
          if (acorde.segunda) {
            tocar(acorde.fundamental, (contador = contador + tempo.colcheia));    
            tocar(acorde.baixo, contador);
            tocar(acorde.segunda, contador);
            tocar(acorde.quinta, contador);

            tocar(acorde.baixo, (contador = contador + tempo.colcheia));

            tocar(acorde.fundamental, (contador = contador + tempo.colcheia));
            tocar(acorde.segunda, contador);
            tocar(acorde.quinta, contador);

            tocar(acorde.baixo, (contador = contador + tempo.colcheia));

            tocar(acorde.fundamental, (contador = contador + tempo.colcheia));    
            tocar(acorde.segunda, contador);
            tocar(acorde.quinta, contador);

            tocar(acorde.baixo, (contador = contador + tempo.colcheia));

            tocar(acorde.fundamental, (contador = contador + tempo.colcheia));
            tocar(acorde.segunda, contador);
            tocar(acorde.quinta, contador);

            tocar(acorde.baixo, (contador = contador + tempo.colcheia));
          }

          if (acorde.terca) {
            tocar(acorde.fundamental, (contador = contador + tempo.colcheia));
            tocar(acorde.baixo, contador);
            tocar(acorde.terca, contador);
            tocar(acorde.quinta, contador);

            tocar(acorde.baixo, (contador = contador + tempo.colcheia));

            tocar(acorde.fundamental, (contador = contador + tempo.colcheia));
            tocar(acorde.terca, contador);
            tocar(acorde.quinta, contador);

            tocar(acorde.baixo, (contador = contador + tempo.colcheia));

            tocar(acorde.fundamental, (contador = contador + tempo.colcheia));
            tocar(acorde.terca, contador);
            tocar(acorde.quinta, contador);

            tocar(acorde.baixo, (contador = contador + tempo.colcheia));

            tocar(acorde.fundamental, (contador = contador + tempo.colcheia));
            tocar(acorde.terca, contador);
            tocar(acorde.quinta, contador);

            tocar(acorde.baixo, (contador = contador + tempo.colcheia));
          }

          if (acorde.quarta) {
            tocar(acorde.fundamental, (contador = contador + tempo.colcheia));
            tocar(acorde.baixo, contador);
            tocar(acorde.quarta, contador);
            tocar(acorde.quinta, contador);

            tocar(acorde.baixo, (contador = contador + tempo.colcheia));

            tocar(acorde.fundamental, (contador = contador + tempo.colcheia));
            tocar(acorde.quarta, contador);
            tocar(acorde.quinta, contador);

            tocar(acorde.baixo, (contador = contador + tempo.colcheia));

            tocar(acorde.fundamental, (contador = contador + tempo.colcheia));
            tocar(acorde.quarta, contador);
            tocar(acorde.quinta, contador);

            tocar(acorde.baixo, (contador = contador + tempo.colcheia));

            tocar(acorde.fundamental, (contador = contador + tempo.colcheia));
            tocar(acorde.quarta, contador);
            tocar(acorde.quinta, contador);

            tocar(acorde.baixo, (contador = contador + tempo.colcheia));
          }
      }, this);
      break;
  }

  if (!document.getElementById("repetir").checked) {
    fimExecucao(contador);
  }
}

//toca a nota no tempo determinado
function tocar(nota, tempoEmMillis) {
  if (tempoEmMillis == 0) {
    howls[nota - 48].play();
  } else {
    timers.push(
      setTimeout(function() {
        howls[nota - 48].play();
      }, tempoEmMillis)
    );
  }
}

//muda o texto do botão (quando progressão termina e não está me loop)
function fimExecucao(fim) {
  setTimeout(function() {
    document.getElementById("play-pause").setAttribute("value", "PLAY");
  }, fim);
}
