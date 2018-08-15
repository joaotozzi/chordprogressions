# chordprogressions
É uma ferramenta web desenvolvida em Javascript para execução de progressões de acordes. Para testá-la acesse esse [link](https://joaotozzi.github.io/chordprogressions/). 

Para construção desse protótipo foram usadas as bibliotecas:<br/><br/>
[Howler.js](https://howlerjs.com/) para a execução dos sons no navegador.<br/><br/>
[Ohm.js](https://ohmlang.github.io/) para a criação da gramática e análise sintática e semântica, usada no reconhecimento dos acordes digitados.<br/>

# Acordes Aceitos
O sistema reconhece uma grande variedade de acordes em diferentes formas de cifragem:

**TRÍADES**<br/>
Tríade Maior:   <strong><em>C</strong></em><br/>
Tríade Menor:   <strong><em>Cm C-</strong></em><br/>
Tríades Aumentada:   <strong><em>C(#5) C+ Caug Caum C5+</strong></em><br/>
Tríade Diminuta:   <strong><em>Cm(b5) Cm5-</strong></em><br/>
<br/>
<strong>ACORDES SUSPENSOS</strong><br/>
Acorde com 4ª suspensa:   <strong><em>Csus4 Csus C4</strong></em><br/>
Acorde com 2ª suspensa:   <strong><em>Csus2 C2</strong></em><br/>
<br/>
**ACORDES COM SEXTA**<br/>
Acorde maior com 6ª:   <strong><em>C6</strong></em><br/>
Acorde menor com 6ª:   <strong><em>Cm6 C-6</strong></em><br/>
<br/>
**TÉTRADES**<br/>
Maior com 7ª maior:   <strong><em>C7M Cmaj7</strong></em><br/>
Dominante:   <strong><em>C7</strong></em><br/>
Menor com 7ª menor:   <strong><em>Cm7 C-7</strong></em><br/>
Menor com 7ª maior:   <strong><em>Cm7M Cm(7M) Cm(maj7)</strong></em><br/>
Meio-diminuta:   <strong><em>Cm7(b5) C-7b5 Cm7(5-)</strong></em><br/>
Diminuta:   <strong><em>C° Cdim7 Cdim C°7</strong></em><br/>
Aumentada com 7ª maior:   <strong><em>C7M(5+) C7M(#5) C+7M</strong></em><br/>
Dominante com 4ª suspensa:   <strong><em>C7sus4 C7sus C7/4</strong></em><br/>
Dominante com 5ª diminuta:   <strong><em>C7(b5) C7(5-)</strong></em><br/>
Dominante com 5ª aumentada:   <strong><em>C7(#5) C7(5+)</strong></em><br/>
<br/>
**ACORDES COM NONA**<br/>
Nona com 7ª menor:   <strong><em>C9</strong></em><br/> 
Nona com 7ª maior:   <strong><em>Cmaj9</strong></em><br/>
*Para* ***Cadd9*** *use*: <strong><em>C(9)</strong></em><br/>
<br/>
Power Chord: <strong><em>C5</strong></em><br/>
<br/>
Baixo Invertido: <strong><em>C/E</strong></em><br/>
<br/>
**ADICIONANDO TENSÕES**<br/>
Para adicionar tensões pode-se usar as seguintes formas:<br/><br/>
Barras: <strong><em>C7/b9 C7M/9/b13 C7M/9/13-</strong></em><br/>
Parênteses: <strong><em>C7(9-) C7M(9)(b13)</strong></em><br/>
Separados por vírgula ou barra (parêntese único): <strong><em>C7M(9,b13) C7M(9/11+)</strong></em><br/> 