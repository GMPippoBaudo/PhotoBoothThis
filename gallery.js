function loadGallery() {
    const params = new URLSearchParams(window.location.search);
    const folderPath = params.get('folder');
    const galleryContainer = document.getElementById('gallery-container');
    
    // Definisci le immagini specifiche per ogni cartella
    if (folderPath === 'img/Various') {
        const images = ['PICT0001.JPG', 'PICT0007.JPG'];
        loadImages(images, folderPath);
    } 
    else if (folderPath === 'img/Ferragosto 2024') {
        const images = [
            'PICT0004.JPG',
            'PICT7IMP1.JPG', 
            'PICT7IMP2.JPG',
            'PICT7IMP3.JPG',
            'PICT7IMP4.JPG',
            'PICT0010.JPG', 
            'PICT0015.JPG', 
            'PICT0018.JPG', 
            'PICT0019.JPG', 
            'PICT0020.JPG', 
            'PICT7967.JPG', 
            'PICT7968.JPG', 
            'PICT7970.JPG'
        ];
        loadImages(images, folderPath);
    }
    else if (folderPath === 'img/Como 2024') {
        const images = [
            'como1.jpg',
            'como2.jpg',
            'como3.jpg',
            'como4.jpg',
            'como5.jpg',
            'como6.jpg'
        ];
        loadImages(images, folderPath);
    }
    else {
        // Per le altre cartelle, manteniamo la logica esistente
        for(let i = 1; i <= 6; i++) {
            const img = document.createElement('img');
            img.src = `${folderPath}/image${i}.jpg`;
            img.className = 'gallery-image';
            img.alt = `Immagine ${i}`;
            
            img.addEventListener('click', () => {
                window.open(img.src, '_blank');
            });
            
            galleryContainer.appendChild(img);
        }
    }
}

// Funzione helper per caricare le immagini
function loadImages(images, folderPath) {
    const galleryContainer = document.getElementById('gallery-container');
    
    images.forEach(imageName => {
        const img = document.createElement('img');
        img.src = `${folderPath}/${imageName}`;
        img.className = 'gallery-image';
        img.alt = imageName;
        
        img.addEventListener('click', () => {
            window.open(img.src, '_blank');
        });
        
        // Gestione errori di caricamento immagine
        img.onerror = () => {
            console.error(`Errore nel caricamento dell'immagine: ${imageName}`);
            img.src = 'placeholder.jpg'; // Opzionale: immagine di fallback
        };
        
        galleryContainer.appendChild(img);
    });
}

document.addEventListener('DOMContentLoaded', loadGallery); 