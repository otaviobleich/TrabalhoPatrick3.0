function salvarDados() {
    const lista = document.getElementById("lista").innerHTML;
    localStorage.setItem("tarefas", lista);
}

function carregarDados() {
    const dados = localStorage.getItem("tarefas");
    if (dados) {
        document.getElementById("lista").innerHTML = dados;
    }
}

window.onload = carregarDados;

function adicionarTarefa() {
    const input = document.getElementById("tarefa");
    const texto = input.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    criarTarefa(texto, "dev");
    input.value = "";
    salvarDados();
}

function criarTarefa(texto, status) {
    const lista = document.getElementById("lista");

    const li = document.createElement("li");
    li.className = status;

    li.innerHTML = `
        <span onclick="concluir(this)">${texto}</span>
        <div>
            <button onclick="avancar(this)">➡️</button>
            <button onclick="remover(this)">❌</button>
        </div>
    `;

    lista.appendChild(li);
}

function avancar(botao) {
    const li = botao.parentElement.parentElement;

    if (li.classList.contains("dev")) {
        li.classList.remove("dev");
        li.classList.add("teste");
    } 
    else if (li.classList.contains("teste")) {
        li.classList.remove("teste");
        li.classList.add("aprovado");
    } 
    else {
        alert("Essa tarefa já está finalizada!");
    }

    salvarDados();
}

function concluir(span) {
    const li = span.parentElement;
    li.classList.toggle("concluida");
    salvarDados();
}

function remover(botao) {
    botao.parentElement.parentElement.remove();
    salvarDados();
}