let divCervejas = document.getElementById("cervejas");
let botao = document.getElementById("botaoCarregar");

function toggleCervejas() {
    // 1. Aplica o fade out escondendo o conteúdo (opacidade para 0)
    divCervejas.style.opacity = 0;
    
    // 2. Aguarda o término da transição de CSS (300ms) antes de trocar o texto
    setTimeout(() => {
        // Verifica se a div está vazia (comportamento de ligar/desligar)
        if (divCervejas.innerHTML.trim() === "") {
            divCervejas.innerHTML = `<h2>Guinness</h2>`;
        } else {
            divCervejas.innerHTML = "";
        }
        
        // 3. Aplica o fade in, trazendo a nova visualização à tona
        divCervejas.style.opacity = 1;
    }, 300);
}

// Vincula a função de callback ao evento de clique do botão
botao.addEventListener("click", toggleCervejas);
