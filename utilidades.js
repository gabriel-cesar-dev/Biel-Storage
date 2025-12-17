const daods_utlidades = [
    {
        nome: "Google Chrome",
        icone: "Icones/Google-Chrome.png",
        link: "https://www.google.com/intl/pt-BR/chrome/",
        tipo: "Não Direto",
    },
    {
       nome: "Malware Bytes",
       icone: "Icones/Malware-Bytes.png",
       link: "https://www.malwarebytes.com/pt-br/",
       tipo: "Não Direto", 
    },
    {
       nome: "CPU-Z",
       icone: "Icones/CPU-Z.png",
       link: "https://download.cpuid.com/cpu-z/cpu-z_2.17-en.exe",
       tipo: "Direto", 
    },
    {
        nome: "VLC Media Player",
        icone: "Icones/VLC-Media-Player.png",
        link: "https://mirror.turbozoneinternet.net.br/videolan/vlc/3.0.21/win64/vlc-3.0.21-win64.exe",
        tipo: "Direto",
    },
    {
        nome: "MSI Afterburner",
        icone: "Icones/MSI-Afterburner.png",
        link: "https://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip?__token__=exp=1765886476~acl=/*~hmac=47075716a0d91ee734247f80bcf6b17926beed9621568b67c8dd0967124508b9",
        tipo: "Direto",
    },
     {
        nome: "BleachBit",
        icone: "Icones/BleachBit.png",
        link: "https://www.bleachbit.org/download/file/t?file=BleachBit-5.0.2-setup.exe",
        tipo: "Direto",
    },
     {
        nome: "DS4 Windows",
        icone: "Icones/DS4-Windows.png",
        link: "https://github.com/Ryochan7/DS4Windows/releases/download/v3.3.3/DS4Windows_3.3.3_x64.zip",
        tipo: "Direto",
    },
    {
        nome: "qBittorrent",
        icone: "Icones/qBittorrent.png",
        link: "https://sourceforge.net/projects/qbittorrent/files/latest/download",
        tipo: "Direto",
    },
    {
        nome: "Hamachi",
        icone: "Icones/Hamachi.png",
        link: "https://dqg9br5y8prsq.cloudfront.net/VwnT1BzztZwH.exe",
        tipo: "Direto",
    },
];

const container_utlidades = document.getElementById("container1");
const caxota_utlidades = document.getElementById("caxota");

daods_utlidades.forEach(p => 
    {
    container_utlidades.innerHTML += `
        <div class="caixa">
            <img src="${p.icone}" width="100px">
            <a class="texto-caixa" style="margin-bottom: -20px">${p.nome}</a>
            <a href="${p.link}" class="texto-link" target="_blank">${p.tipo}</a>
        </div>
    `;
}
);