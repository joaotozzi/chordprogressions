let bpm = 120;
let arpejo = "Simples";
let repetir = false;
let textoProgressao = [];




/*
=================================
definindo os acorde da progressão
=================================
*/
function definirAcordes(){
  textoProgressao.push(triade("D", "menor", ""));
  textoProgressao.push(triade("G", "maior", ""));
  textoProgressao.push(triade("C", "maior",""));
}



//chamada durante o carregamento da página HTML
function iniciar() {
  definirAcordes();
  configurarValoresIniciais();
}

function configurarValoresIniciais(){
  document.getElementById("progressao").innerHTML = "Progressão ||: " + textoProgressao.join(" | ") + " :||";

  document.getElementById("label-bpm").innerHTML = "BPM: " + bpm;
  document.getElementById("bpm").setAttribute("value", bpm);
}

function onBotaoPlayClicked(){
  if(botaoPlay === "PLAY"){
    tocarProgressao(progressao, bpm, arpejo, repetir);
  }else{
    pausar();
  }
}

function atualizaBPM(andamento) {
  bpm = andamento;
  document.getElementById("label-bpm").innerHTML = "BPM: " + bpm;
  pausar();
}

function atualizaRepeticao(){
  if(document.getElementById("repetir").checked){
    repetir = true;
  }else{
    repetir =false;
  }
  pausar();
}

function atualizaArpejo(){
  selecaoArpejo = document.getElementById("arpejo");  
  arpejo = selecaoArpejo.options[selecaoArpejo.selectedIndex].value;
  pausar();
}