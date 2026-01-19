const imagemVisualizacao = document.querySelector("#visualizacao img");
const tituloProduto = document.querySelector("h1");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img');

const opcoesTamanhos = ["41 mm", "45 mm"];
const opcoesCores = ["Verde cipreste", "Azul inverno", "Meia noite", "Estelar", "Rosa claro"];

const pastasCores = ["verde-cipreste", "azul-inverno", "meia-noite", "estelar", "rosa-claro"];

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;


function atualizarCorSelecionada() {
  const opcaoCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);
  numCorSelecionada = opcaoCorSelecionada;

  const nomeCor = opcoesCores[numCorSelecionada];
  const pastaCor = pastasCores[numCorSelecionada];

  nomeCorSelecionada.innerText = "Cor - " + nomeCor;

  imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-" + pastaCor + "/imagem-" + numImagemSelecionada + ".jpeg";


  imagemMiniatura0.src = "./imagens/opcoes-cores/imagens-" + pastaCor + "/imagem-0.jpeg";
  imagemMiniatura1.src = "./imagens/opcoes-cores/imagens-" + pastaCor + "/imagem-1.jpeg";
  imagemMiniatura2.src = "./imagens/opcoes-cores/imagens-" + pastaCor + "/imagem-2.jpeg";


  tituloProduto.innerText = "Pulseira loop esportiva " + nomeCor.toLowerCase() + " para caixa de " + opcoesTamanhos[numTamanhoSelecionado];
}


function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);
  numTamanhoSelecionado = opcaoTamanhoSelecionado;

  const tamanhoCaixa = opcoesTamanhos[numTamanhoSelecionado];

  tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[numCorSelecionada].toLowerCase() + " para caixa de " + tamanhoCaixa;

  if (tamanhoCaixa === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}


function atualizarImagemSelcionada() {
  const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);
  numImagemSelecionada = opcaoImagemSelecionada;

  const pastaCor = pastasCores[numCorSelecionada];

  imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-" + pastaCor + "/imagem-" + numImagemSelecionada + ".jpeg";
}
