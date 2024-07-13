let checkFrango = document.querySelector(".check1");
let checkCarne = document.querySelector(".check2");
let checkCalabresa = document.querySelector(".check3");

let checkCoca = document.querySelector(".check4");
let checkSuco = document.querySelector(".check5");
let checkFanta = document.querySelector(".check6");

let checkPudim = document.querySelector(".check7");
let checkBrownie = document.querySelector(".check8");
let checkMousse = document.querySelector(".check9");

function selecionarPrato1() {
  const botao = document.querySelector(".pf-frango");
  const botaoSelecionadoAntes = document.querySelector(".selecionadoprato");

  if (botaoSelecionadoAntes !== null) {
    botaoSelecionadoAntes.classList.remove("selecionadoprato");
  }

  botao.classList.add("selecionadoprato");

  if (checkFrango !== null) {
    checkFrango.classList.remove("escondido");
    checkCarne.classList.add("escondido");
    checkCalabresa.classList.add("escondido");
  }

  const pratoEscolhido = document.querySelector(".prato-escolhido");
  pratoEscolhido.innerHTML = "PF Frango";

  const itemSelecionado = document.querySelector(".itemfrango");
  itemSelecionado.classList.add("item-selecionado-prato");

  verificarBotao();
}

function selecionarPrato2() {
  const botao = document.querySelector(".pf-carne");
  const botaoSelecionadoAntes = document.querySelector(".selecionadoprato");

  if (botaoSelecionadoAntes !== null) {
    botaoSelecionadoAntes.classList.remove("selecionadoprato");
  }

  botao.classList.add("selecionadoprato");

  if (checkCarne !== null) {
    checkCarne.classList.remove("escondido");
    checkFrango.classList.add("escondido");
    checkCalabresa.classList.add("escondido");
  }

  const pratoEscolhido = document.querySelector(".prato-escolhido");
  pratoEscolhido.innerHTML = "PF Carne";

  const itemSelecionado1 = document.querySelector(".itemfrango");
  itemSelecionado1.classList.remove("item-selecionado-prato");

  const itemSelecionado = document.querySelector(".itemcarne");
  itemSelecionado.classList.add("item-selecionado-prato");

  verificarBotao();
}

function selecionarPrato3() {
  const botao = document.querySelector(".pf-calabresa");
  const botaoSelecionadoAntes = document.querySelector(".selecionadoprato");

  if (botaoSelecionadoAntes !== null) {
    botaoSelecionadoAntes.classList.remove("selecionadoprato");
  }

  botao.classList.add("selecionadoprato");

  if (checkCalabresa !== null) {
    checkCalabresa.classList.remove("escondido");
    checkFrango.classList.add("escondido");
    checkCarne.classList.add("escondido");
  }

  const pratoEscolhido = document.querySelector(".prato-escolhido");
  pratoEscolhido.innerHTML = "PF Calabresa";

  const itemSelecionado1 = document.querySelector(".itemfrango");
  itemSelecionado1.classList.remove("item-selecionado-prato");

  const itemSelecionado2 = document.querySelector(".itemcarne");
  itemSelecionado2.classList.remove("item-selecionado-prato");

  const itemSelecionado = document.querySelector(".itemcalabresa");
  itemSelecionado.classList.add("item-selecionado-prato");

  verificarBotao();
}

function selecionarBebida1() {
  const botao = document.querySelector(".coca");
  const botaoSelecionadoAntes = document.querySelector(".selecionadobebida");

  if (botaoSelecionadoAntes !== null) {
    botaoSelecionadoAntes.classList.remove("selecionadobebida");
  }

  botao.classList.add("selecionadobebida");

  if (checkCoca !== null) {
    checkCoca.classList.remove("escondido");
    checkSuco.classList.add("escondido");
    checkFanta.classList.add("escondido");
  }

  const bebidaEscolhida = document.querySelector(".bebida-escolhida");
  bebidaEscolhida.innerHTML = "Coquinha Gelada";

  const itemSelecionado = document.querySelector(".itemcoca");
  itemSelecionado.classList.add("item-selecionado-bebida");

  verificarBotao();
}

function selecionarBebida2() {
  const botao = document.querySelector(".suco");
  const botaoSelecionadoAntes = document.querySelector(".selecionadobebida");

  if (botaoSelecionadoAntes !== null) {
    botaoSelecionadoAntes.classList.remove("selecionadobebida");
  }

  botao.classList.add("selecionadobebida");

  if (checkSuco !== null) {
    checkSuco.classList.remove("escondido");
    checkCoca.classList.add("escondido");
    checkFanta.classList.add("escondido");
  }

  const bebidaEscolhida = document.querySelector(".bebida-escolhida");
  bebidaEscolhida.innerHTML = "Suquinho de Laranja";

  const itemSelecionado1 = document.querySelector(".itemcoca");
  itemSelecionado1.classList.remove("item-selecionado-bebida");

  const itemSelecionado = document.querySelector(".itemsuco");
  itemSelecionado.classList.add("item-selecionado-bebida");

  verificarBotao();
}

function selecionarBebida3() {
  const botao = document.querySelector(".fanta");
  const botaoSelecionadoAntes = document.querySelector(".selecionadobebida");

  if (botaoSelecionadoAntes !== null) {
    botaoSelecionadoAntes.classList.remove("selecionadobebida");
  }

  botao.classList.add("selecionadobebida");

  if (checkFanta !== null) {
    checkFanta.classList.remove("escondido");
    checkSuco.classList.add("escondido");
    checkCoca.classList.add("escondido");
  }

  const bebidaEscolhida = document.querySelector(".bebida-escolhida");
  bebidaEscolhida.innerHTML = "Fanta Laranja";

  const itemSelecionado1 = document.querySelector(".itemcoca");
  itemSelecionado1.classList.remove("item-selecionado-bebida");

  const itemSelecionado2 = document.querySelector(".itemsuco");
  itemSelecionado2.classList.remove("item-selecionado-bebida");

  const itemSelecionado = document.querySelector(".itemfanta");
  itemSelecionado.classList.add("item-selecionado-bebida");

  verificarBotao();
}

function selecionarSobremesa1() {
  const botao = document.querySelector(".pudim");
  const botaoSelecionadoAntes = document.querySelector(".selecionadosobremesa");

  if (botaoSelecionadoAntes !== null) {
    botaoSelecionadoAntes.classList.remove("selecionadosobremesa");
  }

  botao.classList.add("selecionadosobremesa");

  if (checkPudim !== null) {
    checkPudim.classList.remove("escondido");
    checkBrownie.classList.add("escondido");
    checkMousse.classList.add("escondido");
  }

  const sobremesaEscolhida = document.querySelector(".sobremesa-escolhida");
  sobremesaEscolhida.innerHTML = "Pudim de Vó";

  const itemSelecionado = document.querySelector(".itempudim");
  itemSelecionado.classList.add("item-selecionado-sobremesa");

  verificarBotao();
}

function selecionarSobremesa2() {
  const botao = document.querySelector(".brownie");
  const botaoSelecionadoAntes = document.querySelector(".selecionadosobremesa");

  if (botaoSelecionadoAntes !== null) {
    botaoSelecionadoAntes.classList.remove("selecionadosobremesa");
  }

  botao.classList.add("selecionadosobremesa");

  if (checkBrownie !== null) {
    checkBrownie.classList.remove("escondido");
    checkPudim.classList.add("escondido");
    checkMousse.classList.add("escondido");
  }

  const sobremesaEscolhida = document.querySelector(".sobremesa-escolhida");
  sobremesaEscolhida.innerHTML = "Brownie Bolado";

  const itemSelecionado1 = document.querySelector(".itempudim");
  itemSelecionado1.classList.remove("item-selecionado-sobremesa");

  const itemSelecionado = document.querySelector(".itembrownie");
  itemSelecionado.classList.add("item-selecionado-sobremesa");

  verificarBotao();
}

function selecionarSobremesa3() {
  const botao = document.querySelector(".mousse");
  const botaoSelecionadoAntes = document.querySelector(".selecionadosobremesa");

  if (botaoSelecionadoAntes !== null) {
    botaoSelecionadoAntes.classList.remove("selecionadosobremesa");
  }

  botao.classList.add("selecionadosobremesa");

  if (checkMousse !== null) {
    checkMousse.classList.remove("escondido");
    checkBrownie.classList.add("escondido");
    checkPudim.classList.add("escondido");
  }

  const sobremesaEscolhida = document.querySelector(".sobremesa-escolhida");
  sobremesaEscolhida.innerHTML = "Mousse Top";

  const itemSelecionado1 = document.querySelector(".itempudim");
  itemSelecionado1.classList.remove("item-selecionado-sobremesa");

  const itemSelecionado2 = document.querySelector(".itembrownie");
  itemSelecionado2.classList.remove("item-selecionado-sobremesa");

  const itemSelecionado = document.querySelector(".itemmousse");
  itemSelecionado.classList.add("item-selecionado-sobremesa");

  verificarBotao();
}

function verificarBotao() {
  if (
    document.querySelector(".selecionadoprato") !== null &&
    document.querySelector(".selecionadobebida") !== null &&
    document.querySelector(".selecionadosobremesa") !== null
  ) {
    botaoLigado();
  }
}

function calcularPreco() {
  const itemPrato = document.querySelector(".item-selecionado-prato");
  const textoItemPrato = itemPrato.textContent;
  const valorItemPrato = Number(textoItemPrato);

  let precoNumP = 0;
  let precoNumB = 0;
  let precoNumS = 0;

  if (valorItemPrato == 1) {
    const precoPrato = document.querySelector(".preco-frango");
    const precoTexto = precoPrato.textContent;
    const precoFormatado = precoTexto.replace(/[^\d.,]/g, "").replace(",", ".");

    precoNumP = Number(precoFormatado).toFixed(2);

    const valorPrato = document.querySelector(".preco-prato-escolhido");
    valorPrato.innerHTML = "R$" + precoNumP;
  }

  if (valorItemPrato == 2) {
    const precoPrato = document.querySelector(".preco-carne");
    const precoTexto = precoPrato.textContent;
    const precoFormatado = precoTexto.replace(/[^\d.,]/g, "").replace(",", ".");

    precoNumP = Number(precoFormatado).toFixed(2);

    const valorPrato = document.querySelector(".preco-prato-escolhido");
    valorPrato.innerHTML = "R$" + precoNumP;
  }

  if (valorItemPrato == 3) {
    const precoPrato = document.querySelector(".preco-calabresa");
    const precoTexto = precoPrato.textContent;
    const precoFormatado = precoTexto.replace(/[^\d.,]/g, "").replace(",", ".");

    precoNumP = Number(precoFormatado).toFixed(2);

    const valorPrato = document.querySelector(".preco-prato-escolhido");
    valorPrato.innerHTML = "R$" + precoNumP;
  }

  const itemBebida = document.querySelector(".item-selecionado-bebida");
  const textoItemBebida = itemBebida.textContent;
  const valorItemBebida = Number(textoItemBebida);

  if (valorItemBebida == 1) {
    const precoBebida = document.querySelector(".preco-coca");
    const precoTexto = precoBebida.textContent;
    const precoFormatado = precoTexto.replace(/[^\d.,]/g, "").replace(",", ".");

    precoNumB = Number(precoFormatado).toFixed(2);

    const valorPrato = document.querySelector(".preco-bebida-escolhida");
    valorPrato.innerHTML = "R$" + precoNumB;
  }

  if (valorItemBebida == 2) {
    const precoBebida = document.querySelector(".preco-suco");
    const precoTexto = precoBebida.textContent;
    const precoFormatado = precoTexto.replace(/[^\d.,]/g, "").replace(",", ".");

    precoNumB = Number(precoFormatado).toFixed(2);

    const valorPrato = document.querySelector(".preco-bebida-escolhida");
    valorPrato.innerHTML = "R$" + precoNumB;
  }

  if (valorItemBebida == 3) {
    const precoBebida = document.querySelector(".preco-fanta");
    const precoTexto = precoBebida.textContent;
    const precoFormatado = precoTexto.replace(/[^\d.,]/g, "").replace(",", ".");

    precoNumB = Number(precoFormatado).toFixed(2);

    const valorPrato = document.querySelector(".preco-bebida-escolhida");
    valorPrato.innerHTML = "R$" + precoNumB;
  }

  const itemSobremesa = document.querySelector(".item-selecionado-sobremesa");
  const textoItemSobremesa = itemSobremesa.textContent;
  const valorItemSobremesa = Number(textoItemSobremesa);

  if (valorItemSobremesa == 1) {
    const precoSobremesa = document.querySelector(".preco-pudim");
    const precoTexto = precoSobremesa.textContent;
    const precoFormatado = precoTexto.replace(/[^\d.,]/g, "").replace(",", ".");

    precoNumS = Number(precoFormatado).toFixed(2);

    const valorPrato = document.querySelector(".preco-sobremesa-escolhida");
    valorPrato.innerHTML = "R$" + precoNumS;
  }

  if (valorItemSobremesa == 2) {
    const precoSobremesa = document.querySelector(".preco-brownie");
    const precoTexto = precoSobremesa.textContent;
    const precoFormatado = precoTexto.replace(/[^\d.,]/g, "").replace(",", ".");

    precoNumS = Number(precoFormatado).toFixed(2);

    const valorPrato = document.querySelector(".preco-sobremesa-escolhida");
    valorPrato.innerHTML = "R$" + precoNumS;
  }

  if (valorItemSobremesa == 3) {
    const precoSobremesa = document.querySelector(".preco-mousse");
    const precoTexto = precoSobremesa.textContent;
    const precoFormatado = precoTexto.replace(/[^\d.,]/g, "").replace(",", ".");

    precoNumS = Number(precoFormatado).toFixed(2);

    const valorPrato = document.querySelector(".preco-sobremesa-escolhida");
    valorPrato.innerHTML = "R$" + precoNumS;
  }

  const valorTotal = Number(precoNumP) + Number(precoNumB) + Number(precoNumS);

  const total = document.querySelector(".preco-total");
  total.innerHTML = "R$" + valorTotal.toFixed(2);
}

function botaoLigado() {
  const paragrafo = document.querySelector(".texto-botao");
  paragrafo.innerHTML = "Fechar pedido";

  const botaoPedido = document.querySelector(".botao-pedido");
  botaoPedido.classList.add("botaoverde");

  const cliqueBotao = document.querySelector(".botao-pedido");
  cliqueBotao.addEventListener("click", function () {
    confirmarPedido();
  });
}

function confirmarPedido() {
  calcularPreco();

  const menu = document.querySelector(".confirmar-pedido");
  menu.classList.remove("escondido");

  const opaco = document.querySelector(".topo");
  opaco.classList.add("opaco");

  const opaco2 = document.querySelector(".pratos");
  opaco2.classList.add("opaco");

  const opaco3 = document.querySelector(".bebidas");
  opaco3.classList.add("opaco");

  const opaco4 = document.querySelector(".sobremesas");
  opaco4.classList.add("opaco");

  const opaco5 = document.querySelector(".menu-inferior");
  opaco5.classList.add("opaco");
}

function cancelarPedido() {
  const menu = document.querySelector(".confirmar-pedido");
  menu.classList.add("escondido");

  const opaco = document.querySelector(".topo");
  opaco.classList.remove("opaco");

  const opaco2 = document.querySelector(".pratos");
  opaco2.classList.remove("opaco");

  const opaco3 = document.querySelector(".bebidas");
  opaco3.classList.remove("opaco");

  const opaco4 = document.querySelector(".sobremesas");
  opaco4.classList.remove("opaco");

  const opaco5 = document.querySelector(".menu-inferior");
  opaco5.classList.remove("opaco");
}
