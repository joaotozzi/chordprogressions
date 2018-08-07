let timers = [];
let timersRepeticao = [];
let sounds = [];
let howls = [];
let contador = 0;
let botaoPlay = "PLAY";

//carregando os sons no sistema
for (var z = 48; z <= 95; z++) {
  sounds.push("sounds/piano" + z.toString() + ".mp3");
  var howl = new Howl({
    src: ["sounds/piano" + z.toString() + ".mp3"],
    volume: 0.2
  });
  howls.push(howl);
}





//reproduz a progressão de acordes
function tocarProgressao(progressao, bpm, arpejo, repetir){
    atualizaTextoBotaoPlay("PAUSE");
    pulso = 60000 / bpm;
    contador = 0;
    
    for(i = 0; i < progressao.length; i++){
        arpejador(progressao[i], pulso, arpejo);
    }

    if(repetir){
        //inicia novamente a função após o fim da execução
        timersRepeticao.push(setTimeout(function() {
            timers = [];
            tocarProgressao(progressao, bpm, arpejo, repetir);
        }, progressao.length * pulso * 4));
    }else{
        fimReproducao(progressao.length * pulso * 4);
    }
}


//arpeja as notas do acorde a quantidade de vezes indicada
function arpejador(acorde, pulso, arpejo){
    
    switch (arpejo) {
        case "ABCD":
            if (acorde.segunda) {
                tocarNota(acorde.baixo, contador);
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.segunda, contador += pulso);
                tocarNota(acorde.quinta, contador += pulso);
            }

            if (acorde.terca) {
                tocarNota(acorde.baixo, contador);
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.terca, contador += pulso);
                tocarNota(acorde.quinta, contador += pulso);
            }

            if (acorde.quarta) {
                tocarNota(acorde.baixo, contador);
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.quarta, contador += pulso);
                tocarNota(acorde.quinta, contador += pulso);
            }
            contador += pulso; //para iniciar próximo arpejo
            break;
        
        case "AB":
            if (acorde.segunda) {
                tocarNota(acorde.baixo, contador);
                tocarNota(acorde.baixo + intervalo("8"), contador);
                
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.segunda, contador);
                tocarNota(acorde.quinta, contador);

                tocarNota(acorde.baixo, contador += pulso);
                tocarNota(acorde.baixo + intervalo("8"), contador);
                
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.segunda, contador);
                tocarNota(acorde.quinta, contador);
            }

            if (acorde.terca) {
                tocarNota(acorde.baixo, contador);
                tocarNota(acorde.baixo + intervalo("8"), contador);
                
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.terca, contador);
                tocarNota(acorde.quinta, contador);

                tocarNota(acorde.baixo, contador += pulso);
                tocarNota(acorde.baixo + intervalo("8"), contador);
                
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.terca, contador);
                tocarNota(acorde.quinta, contador);
            }

            if (acorde.quarta) {
                tocarNota(acorde.baixo, contador);
                tocarNota(acorde.baixo + intervalo("8"), contador);
                
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.quarta, contador);
                tocarNota(acorde.quinta, contador);

                tocarNota(acorde.baixo, contador += pulso);
                tocarNota(acorde.baixo + intervalo("8"), contador);
                
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.quarta, contador);
                tocarNota(acorde.quinta, contador);
            }
            contador += pulso; //para iniciar próximo arpejo
            break;

            case "ABBB":
            if (acorde.segunda) {
                tocarNota(acorde.baixo, contador);
                tocarNota(acorde.baixo + intervalo("8"), contador);
                
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.segunda, contador);
                tocarNota(acorde.quinta, contador);

                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.segunda, contador);
                tocarNota(acorde.quinta, contador);
                
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.segunda, contador);
                tocarNota(acorde.quinta, contador);
            }

            if (acorde.terca) {
                tocarNota(acorde.baixo, contador);
                tocarNota(acorde.baixo + intervalo("8"), contador);
                
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.terca, contador);
                tocarNota(acorde.quinta, contador);

                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.terca, contador);
                tocarNota(acorde.quinta, contador);
                
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.terca, contador);
                tocarNota(acorde.quinta, contador);
            }

            if (acorde.quarta) {
                tocarNota(acorde.baixo, contador);
                tocarNota(acorde.baixo + intervalo("8"), contador);
                
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.quarta, contador);
                tocarNota(acorde.quinta, contador);

                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.quarta, contador);
                tocarNota(acorde.quinta, contador);
                
                tocarNota(acorde.fundamental, contador += pulso);
                tocarNota(acorde.quarta, contador);
                tocarNota(acorde.quinta, contador);
            }
            contador += pulso; //para iniciar próximo arpejo
            break;

        case "Simples":
            for(j = 0; j < 2; j++){
                tocarNota(acorde.baixo, contador);
                tocarNota(acorde.fundamental, contador);

                if(!(acorde.segunda === "")){
                    tocarNota(acorde.segunda, contador);  
                }

                if(!(acorde.terca === "")){
                    tocarNota(acorde.terca, contador);  
                }

                if(!(acorde.quarta === "")){
                    tocarNota(acorde.quarta, contador);  
                }

                if(!(acorde.quinta === "")){
                    tocarNota(acorde.quinta, contador);  
                }

                if(!(acorde.sexta === "")){
                    tocarNota(acorde.sexta, contador);  
                }

                if(!(acorde.setima === "")){
                    tocarNota(acorde.setima, contador);  
                }

                if(!(acorde.nona === "")){
                    tocarNota(acorde.nona, contador);  
                }

                if(!(acorde.decimaPrimeira === "")){
                    tocarNota(acorde.decimaPrimeira, contador);  
                }

                if(!(acorde.decimaTerceira === "")){
                    tocarNota(acorde.decimaTerceira, contador);  
                }

                contador += (pulso * 2); //para iniciar próximo arpejo
            }
            break; 
    }
}

//toca uma nota após o atraso indicado
function tocarNota(nota, atraso){
    timers.push(setTimeout(function() {
          howls[nota - 48].play();
        }, atraso)
      );
}

//pausa a execução da progressão
function pausar(){
    atualizaTextoBotaoPlay("PLAY");
    
    timersRepeticao.forEach(function(timerRepeticao){
        clearTimeout(timerRepeticao);
    });

    timers.forEach(function(timer) {
        clearTimeout(timer);
    });

    timersRepeticao = [];
    timers = [];
}

//atualiza os campos após o fim da execução
function fimReproducao(fim){
    timers.push(setTimeout(function() {
        atualizaTextoBotaoPlay("PLAY");
      }, fim)
    );    
}

//atualiza o texto do botão PLAY-PAUSE
function atualizaTextoBotaoPlay(status){
    document.getElementById("play-pause").setAttribute("value", status);
    botaoPlay = status;
}