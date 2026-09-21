// ─── Domínio: sorvetes ───────────────────────────────────────────────────────
const sorvetes = [
    "Chocolate",
    "Morango",
    "Baunilha",
    "Limão",
    "Creme",
    "Napolitano",
];

// Função (callback) arrow que transforma cada sabor em uma linha da tabela
const transformar = (item) => `<tr><td>${item}</td></tr>`;

// Recebe o vetor como parâmetro (cervs) — não usa a variável global diretamente
const carregarDiv = (cervs) => {
    const div = document.getElementById("sorvetes");

    // map é chamado sobre o parâmetro cervs, não sobre a variável sorvetes
    const itensHtml = cervs.map(transformar);

    div.innerHTML = `
        <table>
            <thead>
                <tr><th>Sabor de Sorvete</th></tr>
            </thead>
            <tbody>
                ${itensHtml.join("\n")}
            </tbody>
        </table>
    `;
};

// Ordena alfabeticamente e re-renderiza passando o array como argumento
const ordenarSorvetes = () => {
    sorvetes.sort();
    carregarDiv(sorvetes);
};

// Embaralha aleatoriamente e re-renderiza passando o array como argumento
const embaralharSorvetes = () => {
    sorvetes.sort(() => Math.random() - 0.5);
    carregarDiv(sorvetes);
};

// ─── Vincula os links às arrow functions ─────────────────────────────────────
document.getElementById("linkCarregar").addEventListener("click", (e) => {
    e.preventDefault();
    carregarDiv(sorvetes);
});

document.getElementById("linkOrdenar").addEventListener("click", (e) => {
    e.preventDefault();
    ordenarSorvetes();
});

document.getElementById("linkEmbaralhar").addEventListener("click", (e) => {
    e.preventDefault();
    embaralharSorvetes();
});
