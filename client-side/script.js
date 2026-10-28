function validar(){
    var nome;
    var dataPublicacao;
    var autor;
    var editora;
    var numPag;
    var categoria;
    var quantidade;

    nome = document.getElementById('nome').innerHTML
    dataPublicacao = document.getElementById('data_publicacao')
    autor = document.getElementById('autor')
    editora = document.getElementById('editora')
    numPag = document.getElementById('num_paginas')
    categoria = document.getElementById('categoria')
    quantidade = document.getElementById('quantidade')

    if(nome == ""){
        alert('Preencha o campo Nome!')
        focus(nome)
    }
    
}