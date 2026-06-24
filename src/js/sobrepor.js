const abrir = document.querySelectorAll('.abrir-ingredientes');
const fechar = document.querySelectorAll('.fechar');

abrir.forEach(botao => {

    botao.addEventListener('click', () => {

        const card = botao.closest('.card');

        card.classList.add('ativo');

    });

});

fechar.forEach(botao => {

    botao.addEventListener('click', () => {

        const card = botao.closest('.card');

        card.classList.remove('ativo');

    });

});