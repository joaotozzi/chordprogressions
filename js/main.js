let bpm = 120;
let arpejo = "ABBB";
let repetir = false;

//definindo os acorde da progressão
function definirAcordes() {
  pausar();
  acordesIntervalos = [];
  progressao = [];

  textoProgressao = document.getElementById("acordes").value;

  //limpa o input
  document.getElementById("acordes").value = "";

  vetorDeAcordes = textoProgressao.split(" ");
  let status = true;
  let erros = [];

  vetorDeAcordes.forEach(function(c) {
    temp = reconheceAcorde(c);

    if (temp === "erro") {
      status = false;
      erros.push(c);
    } else {
      acordesIntervalos.push(temp);
    }
  });

  if (status) {
    //Exibe a progressão
    document.getElementById("progressao").innerHTML =
      "Progressão ||: " + textoProgressao.split(" ").join(" | ") + " :||";
    montarAcordes();
    mudarEstado("painel-oculto", false);
  } else {
    document.getElementById("progressao").innerHTML =
      "O sistema não reconhece o(s) acorde(s): " + erros.join(" ");
    mudarEstado("painel-oculto", true);
  }
}

//chamada durante o carregamento da página HTML
function iniciar() {
  document.getElementById("label-bpm").innerHTML = "BPM: " + bpm;
  document.getElementById("bpm").setAttribute("value", bpm);
  mudarEstado("painel-oculto", true);

  //Evento para Enter no input #acordes
  document.getElementById("acordes").addEventListener("keyup", function(event) {
    event.preventDefault();
    //13 "Enter"
    if (event.keyCode === 13) {
      document.getElementById("botao-acordes").click();
    }
  });
}

function onBotaoPlayClicked() {
  if (botaoPlay === "PLAY") {
    tocarProgressao(progressao, bpm, arpejo, repetir);
  } else {
    pausar();
  }
}

function atualizaBPM(andamento) {
  bpm = andamento;
  document.getElementById("label-bpm").innerHTML = "BPM: " + bpm;
  pausar();
}

function atualizaRepeticao() {
  if (document.getElementById("repetir").checked) {
    repetir = true;
  } else {
    repetir = false;
  }
  pausar();
}

function atualizaArpejo() {
  selecaoArpejo = document.getElementById("arpejo");
  arpejo = selecaoArpejo.options[selecaoArpejo.selectedIndex].value;
  pausar();
}

function mudarEstado(id, ocultar) {
  var display = document.getElementById(id).style.display;
  if (!ocultar) {
    document.getElementById(id).style.display = "block";
  } else {
    document.getElementById(id).style.display = "none";
  }
}
