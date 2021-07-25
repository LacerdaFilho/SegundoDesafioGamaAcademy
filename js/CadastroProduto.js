const cliente = document.getElementById("clientes");

cliente.addEventListener("submit", (e) => {
    
    e.preventDefault();

    let NomeProduto = document.getElementById("Nome do Produto").value;
    let MarcaProduto = document.getElementById("Marca do Produto").value;
    let DescricaoProduto = document.getElementById("Descrição do Produto").value;

    let client = {
        NomeProduto,
        MarcaProduto,
        DescricaoProduto,
    };

    let newClient = JSON.stringify(client);

    localStorage.setItem(nome, newClient);
    console.log(client)

    let content = document.getElementById("content");
    let carregando = `<h5> Aguarde ... </h5>`;
    let pronto = `<h5> PRODUTO CADASTRADO COM SUCESSO !</h5>`;

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto;
    }, 1000);
});