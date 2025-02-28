function loadGallery() {
    const params = new URLSearchParams(window.location.search);
    const folderPath = params.get('folder');
    const galleryContainer = document.getElementById('gallery-container');
    
    if (folderPath === 'img/Various') {
        const images = [
            { 
                filename: 'PICT0001.JPG',
                location: 'Pavia',
                date: 'TBD',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT0007.JPG',
                location: 'Pavia',
                date: 'TBD',
                camera: 'Nikon FG20 - 35 mm'
            }
        ];
        loadImages(images, folderPath);
    } 
    else if (folderPath === 'img/Ferragosto 2024') {
        const images = [
            { 
                filename: 'PICT0004.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT7IMP1.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT7IMP2.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT7IMP3.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT7IMP4.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT0010.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT0015.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT0018.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT0019.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT0020.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT7967.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT7968.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'PICT7970.JPG',
                location: 'Leporano',
                date: '15/08/2024',
                camera: 'Nikon FG20 - 35 mm'
            }
        ];
        loadImages(images, folderPath);
    }
    else if (folderPath === 'img/Como 2024') {
        const images = [
            { 
                filename: 'como1.jpg',
                location: 'Lago di Como - Abbadia Lariana',
                date: '21/09/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'como2.jpg',
                location: 'Lago di Como - Abbadia Lariana',
                date: '21/09/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'como3.jpg',
                location: 'Lago di Como - Abbadia Lariana',
                date: '21/09/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'como4.jpg',
                location: 'Lago di Como - Abbadia Lariana',
                date: '21/09/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'como5.jpg',
                location: 'Lago di Como - Abbadia Lariana',
                date: '21/09/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'como6.jpg',
                location: 'Lago di Como - Abbadia Lariana',
                date: '21/09/2024',
                camera: 'Nikon FG20 - 35 mm'
            }
        ];
        loadImages(images, folderPath);
    }
    else if (folderPath === 'img/Varsavia 2024') {
        const images = [
            { 
                filename: 'Varsavia1.jpg',
                location: 'Palazzo della Cultura e della Scienza',
                date: '31/10/2024 - 03/11/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'Varsavia2.jpg',
                location: 'Città Vecchia di Varsavia',
                date: '31/10/2024 - 03/11/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'Varsavia3.jpg',
                location: 'Varsavia',
                date: '31/10/2024 - 03/11/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'Varsavia4.jpg',
                location: 'Varsavia',
                date: '31/10/2024 - 03/11/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'Varsavia5.jpg',
                location: 'Varsavia',
                date: '31/10/2024 - 03/11/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'Varsavia6.jpg',
                location: 'Varsavia',
                date: '31/10/2024 - 03/11/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'Varsavia7.jpg',
                location: 'Varsavia',
                date: '31/10/2024 - 03/11/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'Varsavia8.jpg',
                location: 'Varsavia',
                date: '31/10/2024 - 03/11/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'Varsavia9.jpg',
                location: 'Varsavia',
                date: '31/10/2024 - 03/11/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'Varsavia10.jpg',
                location: 'Varsavia',
                date: '31/10/2024 - 03/11/2024',
                camera: 'Nikon FG20 - 35 mm'
            },
            { 
                filename: 'Varsavia11.jpg',
                location: 'Varsavia',
                date: '31/10/2024 - 03/11/2024',
                camera: 'Nikon FG20 - 35 mm'
            }
        ];
        loadImages(images, folderPath);
    }
    else {
        // Per le altre cartelle, creiamo oggetti immagine con metadati di default
        const images = [];
        for(let i = 1; i <= 6; i++) {
            images.push({
                filename: `image${i}.jpg`,
                location: 'Location not specified',
                date: 'Date not specified',
                camera: 'Camera not specified'
            });
        }
        loadImages(images, folderPath);
    }
}

// Funzione helper modificata per gestire i metadati
function loadImages(images, folderPath) {
    const galleryContainer = document.getElementById('gallery-container');
    
    images.forEach(imageData => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        
        const img = document.createElement('img');
        img.src = `${folderPath}/${imageData.filename}`;
        img.className = 'gallery-image';
        img.alt = imageData.filename;
        
        const metadata = document.createElement('div');
        metadata.className = 'image-metadata';
        metadata.innerHTML = `
            <p><strong>Luogo:</strong> ${imageData.location}</p>
            <p><strong>Data:</strong> ${imageData.date}</p>
            <p><strong>Camera:</strong> ${imageData.camera}</p>
        `;
        metadata.style.display = 'none';
        
        // Creiamo un div per il lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.style.display = 'none';
        
        const lightboxContent = document.createElement('div');
        lightboxContent.className = 'lightbox-content';
        
        const lightboxImage = document.createElement('img');
        lightboxImage.src = img.src;
        
        const lightboxMetadata = metadata.cloneNode(true);
        lightboxMetadata.style.display = 'block';
        
        const closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '×';
        
        lightboxContent.appendChild(closeButton);
        lightboxContent.appendChild(lightboxImage);
        lightboxContent.appendChild(lightboxMetadata);
        lightbox.appendChild(lightboxContent);
        document.body.appendChild(lightbox);
        
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
        
        closeButton.addEventListener('click', () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        imageContainer.appendChild(img);
        galleryContainer.appendChild(imageContainer);
    });
}

document.addEventListener('DOMContentLoaded', loadGallery); 