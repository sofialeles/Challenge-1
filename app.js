//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
//Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

//Função para Adicionar Entrada
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();

    //Validar Entrada =! null
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome.");
        return;
    }

    //Validar Entrada duplicada
    if (amigos.includes(nomeAmigo)){
        alert(`O nome ${nomeAmigo} já está na lista.`);
        return;
    }

    //Adicionar Entrada Válida à lista
    amigos.push(nomeAmigo);

    //Limpar Campo de Inserção de Entrada para inclusão de novas entradas
    inputAmigo.value = "";

    //Atualizar Lista HTML
    atualizarListaHTML();

}

//Função para atualizar Lista de Amigos
function atualizarListaHTML(){
    let listaAmigos = document.getElementById('listaAmigos');

    //Limpar conteúdo lista atual
    listaAmigos.innerHTML = "";

    for(let i=0; i<amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

}

//Função para sortear amigo secreto
function sortearAmigo(){

    //Validar disponibilidade de amigos
    if(amigos.length == 0){
        alert("A lista de amigos está vazia. É necessário, pelo menos, 1 indivíduo para o sorteio.");
        return;
    }

    //Gerar Índice Aleatório
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);

    //Obter Número Sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //Mostrar resultado em HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;

}
