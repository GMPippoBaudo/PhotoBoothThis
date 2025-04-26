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

const locations = [
    {
        name: 'Leporano',
        coordinates: { lat: 40.386890, lng: 17.300567 },
        folder: 'img/Ferragosto 2024',
        displayName: 'Leporano'
    },
    {
        name: 'Abbadia Lariana',
        coordinates: { lat: 45.902538, lng: 9.330740 },
        folder: 'img/Como 2024',
        displayName: 'Abbadia Lariana'
    },
    {
        name: 'Varsavia',
        coordinates: { lat: 52.2297, lng: 21.0122 },
        folder: 'img/Varsavia 2024',
        displayName: 'Varsavia'
    },
    {
        name: 'Lugano',
        coordinates: { lat: 46.0037, lng: 8.9511 },
        folder: 'img/Lugano 2024',
        displayName: 'Lugano'
    },
    {
        name: 'Val Troncea',
        coordinates: { lat: 44.9532, lng: 6.9522 },
        folder: 'img/Val Troncea 2025',
        displayName: 'Val Troncea'
    },
    {
        name: 'Taranto',
        coordinates: { lat: 40.4733, lng: 17.235 },
        folder: 'img/Taranto 2025',
        displayName: 'Taranto'
    }
];

function initMap() {
    const map = L.map('map', {
        worldCopyJump: true,
        maxBoundsViscosity: 1.0
    }).setView([45.0, 10.0], 5);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
        noWrap: false
    }).addTo(map);

    const coordinateDisplay = document.getElementById('coordinate-display');

    // Add mousemove event to the map
    map.on('mousemove', function(e) {
        const lat = e.latlng.lat.toFixed(4);
        const lng = e.latlng.lng.toFixed(4);
        
        // Find the closest location
        let closestLocation = null;
        let closestDistance = Infinity;
        
        locations.forEach(location => {
            const distance = map.distance(e.latlng, [location.coordinates.lat, location.coordinates.lng]);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestLocation = location;
            }
        });

        // Only show the closest location if within 100km
        const locationText = closestDistance < 100000 
            ? `<br>Nearest: ${closestLocation.displayName}` 
            : '';

        coordinateDisplay.innerHTML = `Coordinates: [${lat}, ${lng}]${locationText}`;
        coordinateDisplay.classList.add('visible');
    });

    // Hide coordinate display when mouse leaves the map
    map.on('mouseout', function() {
        coordinateDisplay.classList.remove('visible');
    });

    // Add markers for each location
    locations.forEach(location => {
        // Create custom icon for the marker
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: '<div class="marker-pulse"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        // Create marker with custom icon
        const marker = L.marker([location.coordinates.lat, location.coordinates.lng], {
            icon: customIcon
        }).addTo(map);

        // Add click handler
        marker.on('click', () => {
            window.location.href = `gallery.html?folder=${encodeURIComponent(location.folder)}`;
        });
    });

    map.zoomControl.setPosition('topright');

    // Better touch handling
    if ('ontouchstart' in window) {
        map.on('touchstart', function(e) {
            const touch = e.touches[0];
            const latlng = map.mouseEventToLatLng(touch);
            updateCoordinateDisplay(latlng);
        });

        map.on('touchmove', function(e) {
            const touch = e.touches[0];
            const latlng = map.mouseEventToLatLng(touch);
            updateCoordinateDisplay(latlng);
        });

        map.on('touchend', function() {
            const coordinateDisplay = document.getElementById('coordinate-display');
            coordinateDisplay.classList.remove('visible');
        });
    }
}

// Initialize the map when the DOM is loaded
document.addEventListener('DOMContentLoaded', initMap);

// Helper function to update coordinate display
function updateCoordinateDisplay(latlng) {
    const coordinateDisplay = document.getElementById('coordinate-display');
    const lat = latlng.lat.toFixed(4);
    const lng = latlng.lng.toFixed(4);
    
    // Find the closest location
    let closestLocation = null;
    let closestDistance = Infinity;
    
    locations.forEach(location => {
        const distance = map.distance(latlng, [location.coordinates.lat, location.coordinates.lng]);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestLocation = location;
        }
    });

    const locationText = closestDistance < 100000 
        ? `<br>Nearest: ${closestLocation.displayName}` 
        : '';

    coordinateDisplay.innerHTML = `Coordinates: [${lat}, ${lng}]${locationText}`;
    coordinateDisplay.classList.add('visible');
}

// Add this function to help with calibration
function toggleCalibrationMode() {
    const mapContainer = document.getElementById('map-container');
    let isCalibrationMode = false;

    document.addEventListener('keypress', (e) => {
        if (e.key === 'c') { // Press 'c' to toggle calibration mode
            isCalibrationMode = !isCalibrationMode;
            console.log('Calibration mode:', isCalibrationMode ? 'ON' : 'OFF');
        }
    });

    mapContainer.addEventListener('click', (e) => {
        if (!isCalibrationMode) return;

        // Get click position relative to the map container
        const rect = mapContainer.getBoundingClientRect();
        const scrollLeft = mapContainer.scrollLeft;
        const scrollTop = mapContainer.scrollTop;
        
        const x = ((e.clientX - rect.left + scrollLeft) / mapContainer.scrollWidth) * 100;
        const y = ((e.clientY - rect.top + scrollTop) / mapContainer.scrollHeight) * 100;
        
        console.log(`Clicked at position: x: ${x.toFixed(2)}%, y: ${y.toFixed(2)}%`);
    });
}
