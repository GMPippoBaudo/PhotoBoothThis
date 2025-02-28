// Struttura esempio delle cartelle (da modificare con le tue cartelle reali)
const folders = [
    { path: 'img/Various', displayName: 'Various 📷' },
    { path: 'img/Ferragosto 2024', displayName: 'Ferragosto 2024 - Leporano 🍖' },
    { path: 'img/Como 2024', displayName: 'Lago di Como 2024 - Abbadia Lariana 🦆' },
    { path: 'img/Varsavia 2024', displayName: 'Varsavia 2024 - Polonia 🇵🇱' },
    { path: 'img/Lugano 2024', displayName: 'Lugano 2024 - Svizzera 🇨🇭' },
    { path: 'img/Val Troncea 2025', displayName: 'Val Troncea 2025 - Pragelato 🏔️' }
    
];

// Mappa dei colori fissi per ogni cartella
const folderColors = {
    'img/Various': { background: 'hsl(210, 80%, 65%)', border: 'hsl(210, 80%, 45%)' },
    'img/Ferragosto 2024': { background: 'hsl(45, 80%, 65%)', border: 'hsl(45, 80%, 45%)' },
    'img/Como 2024': { background: 'hsl(180, 80%, 65%)', border: 'hsl(180, 80%, 45%)' },
    'img/Varsavia 2024': { background: 'hsl(120, 80%, 65%)', border: 'hsl(120, 80%, 45%)' },
    'img/Lugano 2024': { background: 'hsl(9, 83.30%, 44.50%)', border: 'hsl(13, 96.00%, 49.20%)' },
    'img/Val Troncea 2025': { background: 'hsl(280, 80%, 65%)', border: 'hsl(280, 80%, 45%)' }
    
};

function createFolderElement(folder) {
    const folderContainer = document.createElement('div');
    folderContainer.className = 'folder-container';
    
    const folderDiv = document.createElement('div');
    folderDiv.className = 'folder';
    
    // Usa i colori predefiniti dalla mappa
    const colors = folderColors[folder.path];
    folderDiv.style.backgroundColor = colors.background;
    folderDiv.style.borderColor = colors.border;
    
    const folderPath = document.createElement('div');
    folderPath.className = 'folder-path';
    folderPath.textContent = folder.displayName;
    
    folderDiv.addEventListener('click', () => {
        window.location.href = `gallery.html?folder=${encodeURIComponent(folder.path)}`;
    });
    
    folderContainer.appendChild(folderDiv);
    folderContainer.appendChild(folderPath);
    
    return folderContainer;
}

function initializeFolders() {
    const foldersContainer = document.getElementById('folders-container');
    
    folders.forEach(folder => {
        const folderElement = createFolderElement(folder);
        foldersContainer.appendChild(folderElement);
    });
}

// Inizializza l'applicazione quando il DOM è caricato
document.addEventListener('DOMContentLoaded', initializeFolders);
