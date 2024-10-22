

const novaTarefa = document.querySelector("#input_id");
const botaoAdd = document.getElementById("botao_add_id");
const formulario = document.getElementById("form_id");
const listaDeTarefas = document.getElementById("lista_id");
const botaoMarca = document.getElementById ("botao_marca_id");
const botaoLimpa = document.getElementById("botao_limpa_id");



botaoAdd.addEventListener("click", (event) => {
    event.preventDefault();
    const elementoLista = document.createElement("li");
    const textoTarefa = document.createElement("p");
    const iconeDeleta = document.createElement("span");

})
botaoAdd.addEventListener("click", (event) => {
    textoTarefa.innerText = novaTarefa.value;
    iconeDeleta.innerText = "🗑️";

    if (textoTarefa.innerText.trim() === "") {
        alert("Você precisa digitar alguma coisa!");

    } else {
    listadeTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoTarefa);
    elemtoLista.appendiuChild(iconeDeleta);
    formulario.reset();
    }
novaTarefa.focus()


textoTarefa.AddEvenListener("click", () => {

    textoTarefa.classList.toggle("checked");
    verificarMarcados();
});


iconeDeleta.addEventListener("click", () => {

    elementoLista.remove();
});
verificarMarcados();
});



botaoMarca.AddEvenListener("click", () => {
    let todasAsTarefas = document.querySelectorAll("p");

    if (botaoMarca.inertText === "Marcar Todos"){
        todasAsTarefas.forEach((tarefa) => {
            tarefa.classList.add("checked");
        });
        botaoMarca.innerText = "Desmarcar todos";
    } else {
        todasAsTarefas.forEach((tarefa) => {
            tarefa.classList.remove("checked");
        });
        botaoMarca.inertText = "Marcar todos";
    }
})



botaoLimpa.addEventListener("click", () => {
    listaDeTarefas.innerHTML ="";
});




function verificarMarcados() {
    let todasAsTarefas = document.querySelectorAll("p");
    let verificacao = [];

    todasAsTarefas.forEach((tarefa) => {
    
    if(!tarefa.classList.contains("checked")) {

        verificacao.push(tarefa);
    }
});


if (verificacao.lengh === 0 && todasAsTarefas) {

    botaoMarca.inertText = "Desmarcar Todos";
} else {

    botaoMarca.innerText = "Marcar Todos";
}
}
