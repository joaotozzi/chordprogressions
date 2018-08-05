//define o arpejo do acorde
function arpejador(arpejo, acordes) {
  switch (arpejo) {
    case "1":
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
    case "2":
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
    case "3":
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

  if(!document.getElementById("repetir").checked){
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
function fimExecucao(tempo){
    setTimeout(function(){ document.getElementById("play-pause").setAttribute("value", "PLAY");}, tempo);
}
