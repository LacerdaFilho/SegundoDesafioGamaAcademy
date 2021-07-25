const cliente = document.getElementById("clientes");

cliente.addEventListener("submit", (e) => {
    
    e.preventDefault();

    let Nome = document.getElementById("Nome").value;
    let Email = document.getElementById("Email").value;
    let Senha = document.getElementById("Senha").value;

    let client = {
        Nome,
        Email,
        Senha,
    };

    let newClient = JSON.stringify(client);

    localStorage.setItem(nome, newClient);
    console.log(client)

    let content = document.getElementById("content");
    let pronto = `<h5> CADASTRO FINALIZADO COM SUCESSO !</h5>`;

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto;
    }, 1000);
});