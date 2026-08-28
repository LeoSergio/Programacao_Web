let cervejas = ["Guinness", "Desperados", "Becks", "Heineken", "Corona", "Stella Artois"];

// Função (callback) para transformar o texto em uma linha da tabela
function transformar(item) {
    return `<tr><td>${item}</td></tr>`;
}

// Carrega as cervejas usando map e transformando em table
function carregarDiv() {
    let div = document.getElementById("cervejas");
    
    // Transforma cada nome em uma string "<tr><td>Nome</td></tr>"
    let cervejasHtml = cervejas.map(transformar);
    
    // Renderiza a tabela passando os itens transformados
    div.innerHTML = `
        <table>
            <thead>
                <tr><th>Nome da Cerveja</th></tr>
            </thead>
            <tbody>
                ${cervejasHtml.join("\n")}
            </tbody>
        </table>
    `;
}

function ordenarCervejas() {
    // Array.sort() por default faz a ordenação alfabética (in-place)
    cervejas.sort();
    carregarDiv(); // Renderiza de volta
}

function embaralharCervejas() {
    // Usando Array.sort() com um valor aleatório para embaralhar a ordem do array
    cervejas.sort(() => Math.random() - 0.5);
    carregarDiv(); // Renderiza de volta
}

// Vincula os botões às funções
document.getElementById("botaoCarregar").addEventListener("click", carregarDiv);
document.getElementById("botaoOrdenar").addEventListener("click", ordenarCervejas);
document.getElementById("botaoEmbaralhar").addEventListener("click", embaralharCervejas);
