# CHORD PROGRESSIONS
Uma ferramenta web desenvolvida em Javascript para a execução de progressões de acordes. Para testá-la, acesse esse [link](https://joaotozzi.github.io/chordprogressions/). 

Para a construção dessa ferramenta foram utilizadas as seguintes bibliotecas:<br/>
&nbsp;&nbsp;&bull;&nbsp;&nbsp;[Howler.js](https://howlerjs.com/) - Para a reprodução de sons no navegador.<br/>
&nbsp;&nbsp;&bull;&nbsp;&nbsp;[Ohm.js](https://ohmlang.github.io/) - Para criação da gramática, análise sintática e semântica (usada no reconhecimento das cifras dos acordes digitados).<br/>

# Acordes Aceitos
O sistema reconhece uma grande variedade de acordes, em diferentes formas de cifragem (exemplos em C):

**TRÍADES**<br/>
Tríade Maior:&nbsp;&nbsp;&nbsp;<strong><em>C</strong></em><br/>
Tríade Menor:&nbsp;&nbsp;&nbsp;<strong><em>Cm&nbsp;&nbsp;&nbsp;C-</strong></em><br/>
Tríade Aumentada:&nbsp;&nbsp;&nbsp;<strong><em>C(#5)&nbsp;&nbsp;&nbsp;C+&nbsp;&nbsp;&nbsp;Caug&nbsp;&nbsp;&nbsp;Caum&nbsp;&nbsp;&nbsp;C5+</strong></em><br/>
Tríade Diminuta:&nbsp;&nbsp;&nbsp;<strong><em>Cm(b5)&nbsp;&nbsp;&nbsp;Cm5-</strong></em><br/>
<br/>
<strong>ACORDES SUSPENSOS</strong><br/>
Acorde com 4ª suspensa:&nbsp;&nbsp;&nbsp;<strong><em>Csus4&nbsp;&nbsp;&nbsp;Csus&nbsp;&nbsp;&nbsp;C4</strong></em><br/>
Acorde com 2ª suspensa:&nbsp;&nbsp;&nbsp;<strong><em>Csus2&nbsp;&nbsp;&nbsp;C2</strong></em><br/>
<br/>
**ACORDES COM SEXTA**<br/>
Acorde maior com 6ª:&nbsp;&nbsp;&nbsp;<strong><em>C6</strong></em><br/>
Acorde menor com 6ª:&nbsp;&nbsp;&nbsp;<strong><em>Cm6&nbsp;&nbsp;&nbsp;C-6</strong></em><br/>
<br/>
**TÉTRADES**<br/>
Maior com 7ª maior:&nbsp;&nbsp;&nbsp;<strong><em>C7M&nbsp;&nbsp;&nbsp;Cmaj7</strong></em><br/>
Menor com 7ª menor:&nbsp;&nbsp;&nbsp;<strong><em>Cm7&nbsp;&nbsp;&nbsp;C-7</strong></em><br/>
Dominante:&nbsp;&nbsp;&nbsp;<strong><em>C7</strong></em><br/>
Meio-diminuta:&nbsp;&nbsp;&nbsp;<strong><em>Cm7(b5)&nbsp;&nbsp;&nbsp;Cm7(5-)</strong></em><br/>
<br/>
Menor com 7ª maior:&nbsp;&nbsp;&nbsp;<strong><em>Cm7M&nbsp;&nbsp;&nbsp;Cm(7M)&nbsp;&nbsp;&nbsp;Cm(maj7)</strong></em><br/>
Aumentada com 7ª maior:&nbsp;&nbsp;&nbsp;<strong><em>C7M(5+)&nbsp;&nbsp;&nbsp;C7M(#5)&nbsp;&nbsp;&nbsp;C+7M</strong></em><br/>
Diminuta:&nbsp;&nbsp;&nbsp;<strong><em>C°&nbsp;&nbsp;&nbsp;Cdim</strong></em><br/>
<br/>
Dominante com 4ª suspensa:&nbsp;&nbsp;&nbsp;<strong><em>C7sus4&nbsp;&nbsp;&nbsp;C7sus&nbsp;&nbsp;&nbsp;C7/4</strong></em><br/>
Dominante com 5ª diminuta:&nbsp;&nbsp;&nbsp;<strong><em>C7(b5)&nbsp;&nbsp;&nbsp;C7(5-)</strong></em><br/>
Dominante com 5ª aumentada:&nbsp;&nbsp;&nbsp;<strong><em>C7(#5)&nbsp;&nbsp;&nbsp;C7(5+)</strong></em><br/>
<br/>
**ACORDES COM NONA**<br/>
Nona com 7ª menor:&nbsp;&nbsp;&nbsp;<strong><em>C9</strong></em>&nbsp;&nbsp;&nbsp;[Para *Cadd9* use: <strong><em>C(9)</strong></em>]<br/> 
Nona com 7ª maior:&nbsp;&nbsp;&nbsp;<strong><em>Cmaj9</strong></em><br/>
<br/>
**POWER CHORD:**&nbsp;&nbsp;&nbsp;<strong><em>C5</strong></em><br/>
<br/>
**INVERSÃO DE BAIXO:**&nbsp;&nbsp;&nbsp;<strong><em>C/E</strong></em><br/>
<br/>
**ADICIONANDO TENSÕES**<br/>
Para adicionar tensões (9ªs, 11ªs e 13ªs) ao acorde, pode-se usar as seguintes formas de cifragem:<br/><br/>

As alterações de intervalos podem ser colocadas antes (**#9** ou **b9**) ou depois (**9+** ou **9-**) do número referente ao intervalo.

As tensões podem ser adicionadas com barras:<br/><strong><em>C7/b9&nbsp;&nbsp;&nbsp;C7M/9/b13</strong></em><br/>
Parênteses:<br/><strong><em>C7(9-)&nbsp;&nbsp;&nbsp;C7M(9)(b13)</strong></em><br/>
Ou separados por vírgula ou barra dentro de um único parêntese:<br/><strong><em>C7M(9,b13)&nbsp;&nbsp;&nbsp;C7M(9/11+)</strong></em><br/><br/>
**OBS.:** Para informações sobre como adicionar 4ªs e 7ªs, leia as sessões de *ACORDES SUSPENSOS* e *TÉTRADES* deste guia. 