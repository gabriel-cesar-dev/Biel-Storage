const daods_redes_lojas = [
   {
        nome : "WhatsApp",
        icone : "Icones/Whatsapp.png",
        link : "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=website_cta_psi",
        tipo : "Direto",
    },
    {
        nome : "Discord",
        icone : "Icones/Discord.png",
        link : "https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64",
        tipo : "Direto",
    },
    {
        nome : "Telegram",
        icone : "Icones/Telegram.png",
        link : "https://telegram.org/dl/desktop/win64",
        tipo : "Direto",
    },
    {
        nome : "Steam",
        icone : "Icones/Steam.png",
        link : "https://cdn.fastly.steamstatic.com/client/installer/SteamSetup.exe",
        tipo : "Direto",
    },
];

const container_redes_lojas = document.getElementById("container2");

daods_redes_lojas.forEach(p => 
    {
    container_redes_lojas.innerHTML += `
        <div class="caixa">
            <img src="${p.icone}" width="100px">
            <a class="texto-caixa" style="margin-bottom: -20px">${p.nome}</a>
            <a href="${p.link}" class="texto-link" target="_blank">${p.tipo}</a>
        </div>
    `;
}
);