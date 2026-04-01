function salvarDados() {
    const dados = {
        dev: document.getElementById("dev").innerHTML,
        teste: document.getElementById("teste").innerHTML,
        aprovado: document.getElementById("aprovado").innerHTML
    };
    localStorage.setItem("kanban", JSON.stringify(dados));
}

function carregarDados() {
    const dados = JSON.parse(localStorage.getItem("kanban"));

    if (dados) {
        document.getElementById("dev").innerHTML = dados.dev;
        document.getElementById("teste").innerHTML = dados.teste;
        document.getElementById("aprovado").innerHTML = dados.aprovado;
    }
}

window.onload = carregarDados;

function adicionarTarefa() {
    const input = document.getElementById("tarefa");

    if (input.value === "") {
        alert("Digite uma tarefa!");
        return;
    }

    criarTarefa(input.value, "dev");
    input.value = "";
    salvarDados();
}

function criarTarefa(texto, status) {
    const li = document.createElement("li");
    li.className = status;

    li.innerHTML = `
        <span onclick="concluir(this)">${texto}</span>
        <div>
            <button onclick="avancar(this)">➡️</button>
            <button onclick="remover(this)">❌</button>
        </div>
    `;

    document.getElementById(status).appendChild(li);
}

function avancar(botao) {
    const li = botao.parentElement.parentElement;

    if (li.classList.contains("dev")) {
        li.classList.remove("dev");
        li.classList.add("teste");
        document.getElementById("teste").appendChild(li);
    } 
    else if (li.classList.contains("teste")) {
        li.classList.remove("teste");
        li.classList.add("aprovado");
        document.getElementById("aprovado").appendChild(li);
    } 
    else {
        alert("Já está aprovado!");
    }

    salvarDados();
}

function concluir(span) {
    span.parentElement.classList.toggle("concluida");
    salvarDados();
}

function remover(botao) {
    botao.parentElement.parentElement.remove();
    salvarDados();
}