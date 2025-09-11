function alterarStatus(n){
    let jogoSelecionado = document.getElementById(`game-${n}`);
    let imagemJogo = jogoSelecionado.querySelector(".dashboard__item__img");
    let botaoJogo = jogoSelecionado.querySelector(".dashboard__item__button");

    if(imagemJogo.classList.contains("dashboard__item__img--rented")){
        imagemJogo.classList.remove("dashboard__item__img--rented");
        botaoJogo.classList.remove("dashboard__item__button--return");
        botaoJogo.textContent = "Alugar";
    } else {
        imagemJogo.classList.add("dashboard__item__img--rented");
        botaoJogo.classList.add("dashboard__item__button--return");
        botaoJogo.textContent = "Devolver";
    }
}


