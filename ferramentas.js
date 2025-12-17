const daods_ferramentas = [
    {
        nome : "Apache NetBeans",
        icone : "Icones/Apache-Netbeans.png",
        link : "https://github.com/codelerity/netbeans-packages/releases/download/v28-build1/Apache-NetBeans-28.exe",
        tipo : "Direto",
    },
    {
        nome : "Visual Studio Code",
        icone : "Icones/Visual-Studio-Code.png",
        link : "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user",
        tipo : "Direto",
    },
    {
        nome : "Visual Studio",
        icone : "Icones/Visual-Studio.png",
        link : "https://visualstudio.microsoft.com/pt-br/thank-you-downloading-visual-studio/?sku=Community&channel=Stable&version=VS18&source=VSLandingPage&cid=2500&passive=false",
        tipo : "Direto",
    },
    {
        nome : "Adobe Photoshop 2020",
        icone : "Icones/Adobe-Photoshop.png",
        link : "magnet:?xt=urn:btih:888EC8F53F80656B42997C3E7E19F598991DCFFB&dn=Adobe%20Photoshop%202020%20v21.2.2.289%20(x64)%20Pre-Cracked%20-%20Team%20Rjaa&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.bittor.pw%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337",
        tipo : "Direto - Torrent",
    },
    {
        nome : "Adobe Premiere Pro 2022",
        icone : "Icones/Adobe-Premerie.png",
        link : "magnet:?xt=urn:btih:3962713BEFF78D14FE50C951E9C545D9C40F180F&dn=Adobe%20Premiere%20Pro%202022%20v22.2.0.128%20(x64)%20%5B2022%2C%20MULTILANG%20%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.bittor.pw%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337",
        tipo : "Direto - Torrent",
    },
    {
        nome : "LibreOffice",
        icone : "Icones/Libre-Office.png",
        link : "https://download.documentfoundation.org/libreoffice/stable/25.8.3/win/x86_64/LibreOffice_25.8.3_Win_x86-64.msi",
        tipo : "Direto",
    },
    {
        nome : "Virtual Box",
        icone : "Icones/Virtual-Box.png",
        link : "https://download.virtualbox.org/virtualbox/7.2.4/VirtualBox-7.2.4-170995-Win.exe",
        tipo : "Direto",
    },
];

const container_ferramentas = document.getElementById("container4");

daods_ferramentas.forEach(p => 
    {
    container_ferramentas.innerHTML += `
        <div class="caixa">
            <img src="${p.icone}" width="100px">
            <a class="texto-caixa" style="margin-bottom: -20px">${p.nome}</a>
            <a href="${p.link}" class="texto-link" target="_blank">${p.tipo}</a>
        </div>
    `;
}
);