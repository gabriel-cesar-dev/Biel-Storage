const daods_emuladores = [
    {
        nome : "Mesen",
        icone : "Icones/Mesen.png",
        link : "https://github.com/SourMesen/Mesen2/releases/download/2.1.1/Mesen_2.1.1_Windows.zip",
        tipo : "Direto",
    },
    {
        nome : "DuckStation",
        icone : "Icones/DuckStation.png",
        link : "https://github.com/stenzek/duckstation/releases/download/latest/duckstation-windows-x64-release.zip",
        tipo : "Direto",
    },
    {
        nome : "PCSX2",
        icone : "Icones/PCSX2.png",
        link : "https://github.com/PCSX2/pcsx2/releases/download/v2.4.0/PCSX2-v2.4.0-windows-x64-installer.exe",
        tipo : "Direto",
    },
    {
        nome : "PPSSPP",
        icone : "Icones/PPSSPP.png",
        link : "https://www.ppsspp.org/files/1_19_3/PPSSPPSetup.exe",
        tipo : "Direto",
    },
    {
        nome : "MelonDS",
        icone : "Icones/MelonDS.png",
        link : "https://melonds.kuribo64.net/downloads/melonDS-1.1-windows-x86_64.zip",
        tipo : "Direto",
    },
    {
        nome : "Citra",
        icone : "Icones/Citra.png",
        link : "https://archive.org/download/citra-emu_202403/citra-windows-msvc-20240303-0ff3440_nightly.zip",
        tipo : "Direto",
    },
    {
        nome : "Dolphin",
        icone : "Icones/Dolphin.png",
        link : "https://dl.dolphin-emu.org/releases/2509/dolphin-2509-x64.7z",
        tipo : "Direto",
    },
];

const container_emuladores = document.getElementById("container3");

daods_emuladores.forEach(p => 
    {
    container_emuladores.innerHTML += `
        <div class="caixa">
            <img src="${p.icone}" width="100px">
            <a class="texto-caixa" style="margin-bottom: -20px">${p.nome}</a>
            <a href="${p.link}" class="texto-link" target="_blank">${p.tipo}</a>
        </div>
    `;
}
);