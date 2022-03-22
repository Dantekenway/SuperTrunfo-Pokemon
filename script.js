var carta1 = {
  nome: "Charlizard",
  imagem:"https://tcg.pokemon.com/assets/img/home/wallpapers/wallpaper-56.jpg",
  atributos:{
    ataque: 10,
    defesa:8,
    magia: 9
  }
};
 var carta2 = {
  nome: "Blastoise",
   imagem:"https://cdn.donmai.us/original/03/b0/__blastoise_pokemon_and_1_more_drawn_by_ariga_hitoshi__03b0f55970ea027dea345227d4115920.jpg",
  atributos:{
    ataque:8,
    defesa:10,
    magia:7
  }
 };
 var carta3 = {
  nome: "Pikachu",
   imagem:"https://i.kym-cdn.com/photos/images/original/001/130/683/eb8.jpg",
   atributos:{
    ataque:7,
    defesa:9,
    magia:10
  }
 };

var cartaJogador;
var cartaMaquina;
var cartas=[carta1, carta2, carta3];
function sortearCarta() {
 var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  
   var numeroCartaJogador = parseInt(Math.random() * 3);
  
  while (numeroCartaJogador == numeroCartaMaquina) {
     numeroCartaJogador = parseInt(Math.random() * 3);
  };
   cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
  }


function obtemAtributoSelecionado(){
var radioAtributos= document.getElementsByName("atributo");

for (var i = 0; i < radioAtributos.length; i++) {
  if(radioAtributos[i].checked == true){
   return radioAtributos[i].value; 
}
} 
} 
function jogar(){
  exibirCartaMaquina();
var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
if (
cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]
  ){ htmlResultado =  "<p class='resultado-final'>Venceu</p>"}
 else if (
 cartaJogador.atributos[atributoSelecionado]< cartaMaquina.atributos[atributoSelecionado])
 {htmlResultado =  "<p class='resultado-final'>Perdeu</p>"
} else{   htmlResultado = "<p class='resultado-final'>Empatou</p>"
}
  console.log(divResultado);
  divResultado.innerHTML = htmlResultado;
  document.getElementById('btnJogar').disabled = true;
}

function exibirCartaJogador() {
var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage =`url(${cartaJogador.imagem})`;
var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
   var opcoes =document.getElementById("opcoes")
  var opcoesTexto =""
  
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type= 'radio' name='atributo' value='"+ atributo+"'>"+ atributo + "" + cartaJogador.atributos[atributo] + "<br>";
  }
   var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}
function exibirCartaMaquina() {
var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage =`url(${cartaMaquina.imagem})`;
var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style= " width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
   
  var opcoesTexto ="";
  
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type= 'text' name='atributo' value='"+ atributo+"'>"+ atributo + "" + cartaMaquina.atributos[atributo] + "</p>";
  }
   var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}