var bpm = 120;
var arpejo = "ABBB";

var btn_principal = document.getElementById("btn-principal");
var player = document.getElementById("player");
var input = document.getElementById("input-principal");
var painel_cifras = document.getElementById("painel-cifras");
var titulo = document.getElementById("titulo"); 

var play_pause = document.getElementById("play-pause");
var arpejo = document.getElementById("arpejo");
var andamento = document.getElementById("andamento");

/*evento de clique no botão principal*/
btn_principal.addEventListener("click", tratarInput);

arpejo.addEventListener("change", pausar);

andamento.addEventListener("change", pausar);

play_pause.addEventListener("click", function(){
  if(play_pause.value === "PLAY"){
    play();
  }else{
    pausar();
  }
});

titulo.addEventListener("click", mudardeContexto);


function tratarInput(evento){
  evento.preventDefault();
  let textoDigitado = input.value;
  if (!(textoDigitado === "")) {
    pausar();
    acordesIntervalos = [];
    progressao = [];

    //removendo espaços duplicados da string de entrada
    textoDigitado = textoDigitado.replace(/\s{2,}/g, " ");

    //removendo espaços desnecessários na string de entrada 
    textoDigitado = textoDigitado.trim();

    let cifras = textoDigitado.split(" ");
    let status = true;
    let erros = [];

    cifras.forEach(function(cifra) {
      let resultado = reconheceAcorde(cifra);

      if (resultado === "erro") {
        status = false;
        erros.push(cifra);
      } else {
        acordesIntervalos.push(resultado);
      }
    });

    if (status) {
      exibirCifras(cifras);
      montarAcordes();
      player.style.display = "block";
      play();
    } else {
      exibirMsgErro(erros);
      player.style.display = "none";
    }
  }
}

function exibirCifras(cifras){
  painel_cifras.innerHTML = "";
 
  for(i = 0; i < cifras.length; i++){
      if (i === 0){
          painel_cifras.innerHTML += '<div class="col-3 border-right border-left p-0"><p class="cifra">' + cifras[i] + '</p></div>'; 
      }
      else if(i%4 == 0){
          painel_cifras.innerHTML += '<div class="w-100 my-1"></div>';
          painel_cifras.innerHTML += '<div class="col-3 border-right border-left p-0"><p class="cifra">' + cifras[i] + '</p></div>';
      }else{
          painel_cifras.innerHTML += '<div class="col-3 border-right p-0"><p class="cifra">' + cifras[i] + '</p></div>';
      }
  }
} 

function exibirMsgErro(erros){
  if(erros.length === 1){
    painel_cifras.innerHTML = '<p class="col-12 display-4 text-center text-danger">O sistema não reconhece o acorde: ' + erros.join(" ") + '</p>';
  }else{
    painel_cifras.innerHTML = '<p class="col-12 display-4 text-center text-danger">O sistema não reconhece os acordes: ' + erros.join(" ") + '</p>';
  }
}

function play() {
  if (play_pause.value === "PLAY") {
    tocarProgressao(progressao, andamento.value, arpejo.options[arpejo.selectedIndex].value, true);
  } else {
    pausar();
  }
}

function mudardeContexto(){
  pausar();
  acordesIntervalos = [];
  progressao = [];
  painel_cifras.innerHTML = "";  
  player.style.display = "none";
  input.value = "";
}