let bpm = 120;
let arpejo = "Simples";
let repetir = false;

//definindo os acorde da progressão
function definirAcordes() {
  acordesIntervalos = [];
  
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
    }else{
      acordesIntervalos.push(temp);
    } 
  });

  if (status) {
    //Exibe a progressão
    document.getElementById("progressao").innerHTML =
      "Progressão ||: " + textoProgressao.split(" ").join(" | ") + " :||";
  } else {
    document.getElementById("progressao").innerHTML =
      "O sistema não reconhece o(s) acorde(s) " + erros.join(" ");
  }
}

//chamada durante o carregamento da página HTML
function iniciar() {
  document.getElementById("label-bpm").innerHTML = "BPM: " + bpm;
  document.getElementById("bpm").setAttribute("value", bpm);
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
