# SuperTrunfo-Pokemon
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Super Trunfo - Dia 8</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<html>

<head>
    <title>
        Imersão Dev - Aula 08
    </title>
</head>

<body>
    <div class="container">
        <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" class="page-logo"
            alt="">
        <h1 class="page-title">A batalha das cartas</h1>
        <button onclick="sortearCarta()" id="btnSortear">Sortear carta</button>
        <form id="form">
            <h2>Escolha o seu atributo</h2>
            <div class="wrapper">
                <div>
                    <div id="carta-jogador">
                        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
                            style=" width: inherit; height: inherit; position: absolute;">
                        <h3></h3>
                    </div>
                </div>
                <div>
                    <div id="carta-maquina" class="carta"><img
                            src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
                            style=" width: inherit; height: inherit; position: absolute;"></div>
                </div>
            </div>
            <button class="button-jogar" type="button" id="btnJogar" onclick="jogar()" disabled="false">Jogar</button>
            <div id="resultado"></div>
        </form>
    </div>
</body>

</html>
<!-- partial -->
  <script  src="./script.js"></script>

</body>
</html>
