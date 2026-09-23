// Variáveis de controlo do pedido
let subtotal = 0;
let totalItens = 0;

// =========================================================
// 1. SELEÇÃO DE ELEMENTOS (getElementById e querySelectorAll)
// =========================================================
let campoSenha = document.getElementById("campo-senha");
let btnEntrar = document.getElementById("btn-entrar");
let msgErro = document.getElementById("msg-erro");

let painelLogin = document.getElementById("painel-login");
let painelMenu = document.getElementById("painel-menu");
let painelRelatorio = document.getElementById("painel-relatorio");

let statusPedido = document.getElementById("status-pedido");
let btnFinalizar = document.getElementById("btn-finalizar");

let listaProdutos = document.getElementById("lista-produtos");
let outSubtotal = document.getElementById("out-subtotal");
let outDesconto = document.getElementById("out-desconto");
let outTotal = document.getElementById("out-total");

// Seleção em lote através de seletor CSS, retornando uma NodeList
let botoesMenu = document.querySelectorAll(".opcao-menu");

// =========================================================
// 2. EVENTOS DE AUTENTICAÇÃO (click e keydown)
// =========================================================

// Função para validar a senha
function verificarSenha() {
  // Leitura do valor introduzido no campo via .value
  if (campoSenha.value === "1234") {
    // Alteração de estilo via propriedade .style do elemento DOM
    painelLogin.style.display = "none";
    painelMenu.style.display = "block";
  } else {
    // Atualização de texto com .innerText
    msgErro.innerText = "Senha incorreta!";
    campoSenha.value = "";
  }
}

// Evento de clique no botão de acesso
btnEntrar.addEventListener("click", () => {
  verificarSenha();
});

// Evento de tecla pressionada (keydown) no campo de texto
campoSenha.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    verificarSenha();
  }
});

// =========================================================
// 3. REGISTO DOS PEDIDOS (querySelectorAll + forEach + click)
// =========================================================

// Percorre a NodeList obtida pelo querySelectorAll utilizando forEach
botoesMenu.forEach((botao) => {
  botao.addEventListener("click", () => {
    let preco = parseFloat(botao.getAttribute("data-preco"));
    let nome = botao.getAttribute("data-nome");

    subtotal += preco;
    totalItens++;

    // Atualização do texto de confirmação com .innerText
    statusPedido.innerText = `${nome} adicionado!`;
  });
});

// =========================================================
// 4. FINALIZAÇÃO E RELATÓRIO (Laço FOR + Operador Ternário)
// =========================================================

btnFinalizar.addEventListener("click", () => {
  if (totalItens === 0) {
    statusPedido.innerText = "Adicione pelo menos um item!";
    statusPedido.style.color = "red";
    return;
  }

  // Transição de visualização entre painéis
  painelMenu.style.display = "none";
  painelRelatorio.style.display = "block";

  listaProdutos.innerText = "";

  // Laço for para criar os registos dinamicamente
  for (let i = 1; i <= totalItens; i++) {
    let p = document.createElement("p");
    p.innerText = `Produto ${i} registrado`;
    p.className = "item-registo";
    listaProdutos.appendChild(p);
  }

  // Operador ternário para determinar o desconto de 10%
  let desconto = (subtotal >= 50.00) ? (subtotal * 0.10) : 0.0;
  let totalFinal = subtotal - desconto;

  // Atualização dos totais finais com .innerText
  outSubtotal.innerText = `Subtotal: R$ ${subtotal.toFixed(2)}`;
  outDesconto.innerText = `Desconto: R$ ${desconto.toFixed(2)}`;
  outTotal.innerText = `Total: R$ ${totalFinal.toFixed(2)}`;
});