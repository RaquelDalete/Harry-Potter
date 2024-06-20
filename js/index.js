// alert('ólá')

/*
Objetivo- quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

Passo 1- Pegar o elemento html dos botões

Passo 2- Identificar o clique do usuário no botão

Passo 3- Desmarcar o botão selecionado

Passo 4- Marcar o botão clicado como se tivesse selecionado

Passo 5- Esconder a imagem anterior

Passo 6- Fazer aparecer a imagem correspondente ao botão clicado
*/ 


//Passo 1- Pegar o elemento html dos botões
const botoesCarrossel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll('.imagem');

//Passo 2- Identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        console.log(indice);
        //Passo 3- Desmarcar o botão selecionado
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //Passo 4- Marcar o botão clicado como se tivesse selecionado
        botao.classList.add('selecionado');

        //Passo 5- Esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //Passo 6- Fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa')

    })
})



