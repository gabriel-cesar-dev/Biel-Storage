const daods_driver_sos = [
    {
        nome : "AMD Drivers",
        icone : "Icones/AMD-Software.png",
        link : "https://drivers.amd.com/drivers/installer/25.20/whql/amd-software-adrenalin-edition-25.12.1-minimalsetup-251207_web.exe",
        tipo : "Direto",
    },
];

const container_driver_sos = document.getElementById("container5");

daods_driver_sos.forEach(p => 
    {
    container_driver_sos.innerHTML += `
        <div class="caixa">
            <img src="${p.icone}" width="100px">
            <a class="texto-caixa" style="margin-bottom: -20px">${p.nome}</a>
            <a href="${p.link}" class="texto-link" target="_blank">${p.tipo}</a>
        </div>
    `;
}
);