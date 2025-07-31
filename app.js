let listaAmigos = [];

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    campo = document.querySelector('input');
    campo.value = "";
}

function atualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if(nome.trim() == ''){
        exibirTextoNaTela('h2', 'Por favor, digite um nome válido');
        return;
    }
    if (listaAmigos.includes(nome)){
        exibirTextoNaTela('h2', 'Este amigo já foi adicionado');
        return;
    }
    listaAmigos.push(nome);
    limparCampo();
    exibirTextoNaTela('h2', `Amigo '${nome}' adicionado com sucesso!`);
    atualizarListaAmigos();
}

function sortearAmigo(){
    if(listaAmigos.length < 2){
        exibirTextoNaTela('h2', 'Adicione mais amigos para sortear');
        return;
    }
    let amigoSorteado = listaAmigos[parseInt(Math.random() * listaAmigos.length)];
    exibirTextoNaTela('h2', `O amigo sorteado foi: ${amigoSorteado}`);
}