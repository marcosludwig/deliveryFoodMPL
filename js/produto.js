let decrementar = document.querySelector(".bi-dash-square");
let incrementar = document.querySelector(".bi-plus-square");
let txtQuantidade = document.querySelector(".numero-produto");
let quantidadeProduto = parseInt(txtQuantidade.textContent);
count = 0

incrementar.addEventListener("click", function () {
  quantidadeProduto++;
  txtQuantidade.innerHTML = quantidadeProduto;
});

decrementar.addEventListener("click", function () {
  if (quantidadeProduto <= 1) {
    alert("A quantidade de produtos nao poder ser menor que 1")
  }
  else {
    quantidadeProduto--;
    txtQuantidade.innerHTML = quantidadeProduto;
  }
});

// script coração favoritar
let coracao = document.querySelector(".bi-heart-fill");
coracao.addEventListener('click', function (event) {
  if (event.target.nodeName === "I") {
    event.target.classList.toggle("red");
  }
});