document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculadora-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const preco = parseFloat(document.getElementById('preco').value);
        const quantidade = parseInt(document.getElementById('quantidade').value);
        const desconto = parseFloat(document.getElementById('desconto').value);

        const precoVenda = preco * quantidade * (1 - desconto / 100);

        const resultadoElemento = document.getElementById('resultado');
        resultadoElemento.textContent = `Preço de Venda: R$ ${precoVenda.toFixed(2)}`;
    });
});

