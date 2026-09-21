const cervejas = [
    { name: "Guinness",      alcohol: "4.2%", style: "Imperial Stout", ibu: "45" },
    { name: "Desperados",    alcohol: "5.9%", style: "Lager",          ibu: "15" },
    { name: "Becks",         alcohol: "5.0%", style: "Pilsen",         ibu: "20" },
    { name: "Heineken",      alcohol: "5.0%", style: "Lager",          ibu: "23" },
    { name: "Corona",        alcohol: "4.6%", style: "Cream Ale",      ibu: "18" },
    { name: "Stella Artois", alcohol: "5.2%", style: "Pilsen",         ibu: "30" },
];

const carregarDiv = (cervs) => {
    const div = document.getElementById("cervejasDiv");

    const rows = cervs.map(c =>
        `<tr>
            <td>${c.name}</td>
            <td>${c.alcohol}</td>
            <td>${c.style}</td>
            <td>${c.ibu}</td>
        </tr>`
    ).join("\n");

    div.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Álcool</th>
                    <th>Estilo</th>
                    <th>Amargor</th>
                </tr>
            </thead>
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
