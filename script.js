function adicionarTarefa() {
    const input = document.getElementById("tarefa");
    const texto = input.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const lista = document.getElementById("lista");

    const li = document.createElement("li");
    li.innerHTML = `
        ${texto}
        <button onclick="removerTarefa(this)">X</button>
    `;

    lista.appendChild(li);
    input.value = "";
}

function removerTarefa(botao) {
    botao.parentElement.remove();
}