const cervejas = [
    { name: "Guinness",      alcohol: "4.2%", style: "Imperial Stout", ibu: "45" },
    { name: "Desperados",    alcohol: "5.9%", style: "Lager",          ibu: "15" },
    { name: "Becks",         alcohol: "5.0%", style: "Pilsen",         ibu: "20" },
    { name: "Heineken",      alcohol: "5.0%", style: "Lager",          ibu: "23" },
    { name: "Corona",        alcohol: "4.6%", style: "Cream Ale",      ibu: "18" },
    { name: "Stella Artois", alcohol: "5.2%", style: "Pilsen",         ibu: "30" },
];

// carregarDiv agora é totalmente genérica:
//   - elementId: id do elemento onde a tabela é inserida (default "cervejasDiv")
//   - headers:   nomes das colunas (default ["Nome", "Álcool", "Estilo", "Amargor"])
//   - props:     propriedades dos objetos a serem exibidas (default ["name","alcohol","style","ibu"])
const carregarDiv = (
    cervs,
    elementId = "cervejasDiv",
    headers   = ["Nome", "Álcool", "Estilo", "Amargor"],
    props     = ["name", "alcohol", "style", "ibu"]
) => {
    const div = document.getElementById(elementId);

    // Gera as células de cabeçalho dinamicamente a partir do parâmetro headers
    const headerRow = headers.map(h => `<th>${h}</th>`).join("");

    // Gera as linhas acessando cada propriedade listada em props
    const rows = cervs.map(item => {
        const cells = props.map(p => `<td>${item[p]}</td>`).join("");
        return `<tr>${cells}</tr>`;
    }).join("\n");

    div.innerHTML = `
        <table>
            <thead><tr>${headerRow}</tr></thead>
            <tbody>${rows}</tbody>
        </table>
    `;
};

const ordenarCervejas = () => {
    cervejas.sort((a, b) => a.name.localeCompare(b.name));
    carregarDiv(cervejas);
};

const embaralharCervejas = () => {
    cervejas.sort(() => Math.random() - 0.5);
    carregarDiv(cervejas);
};

document.getElementById("linkCarregar").addEventListener("click", (e) => {
    e.preventDefault();
    carregarDiv(cervejas);
});

document.getElementById("linkOrdenar").addEventListener("click", (e) => {
    e.preventDefault();
    ordenarCervejas();
});

document.getElementById("linkEmbaralhar").addEventListener("click", (e) => {
    e.preventDefault();
    embaralharCervejas();
});
