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
            },
            { 
                filename: 'var3.JPG',
                location: 'Torino',
                date: '25/02/2024',
                camera: 'Shot on IPhone'
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
    else if (folderPath === 'img/Lugano 2024') {
        const images = [
            { 
                filename: 'Lug1.jpg',
                location: 'Lugano',
                date: '07/12/2024',
                camera: 'Sony α6000'
            },
            { 
                filename: 'Lug2.jpg',
                location: 'Piazza della Riforma',
                date: '07/12/2024',
                camera: 'Sony α6000'
            },
            { 
                filename: 'Lug3.jpg',
                location: 'Piazza della Riforma',
                date: '07/12/2024',
                camera: 'Sony α6000'
            },
            { 
                filename: 'Lug4.jpg',
                location: 'Lago di Lugano',
                date: '07/12/2024',
                camera: 'Sony α6000'
            }

        ];
        loadImages(images, folderPath);
    } 
    else if (folderPath === 'img/Taranto 2025') {
        const images = [
            { 
                filename: 'mod1.jpg',
                location: 'Taranto - Nave Amerigo Vespucci',
                date: '18/04/2025',
                camera: 'IPhone 13 Pro'
            },
            { 
                filename: 'mod2.jpg',
                location: 'Taranto - Castello Aragonese',
                date: '18/04/2025',
                camera: 'IPhone 13 Pro'
            },
        ];
        loadImages(images, folderPath);
    }
    else if (folderPath === 'img/Genova 2025') {
        const images = [
            { 
                filename: 'G2.jpg',
                location: 'Genova',
                date: '06/04/2025',
                camera: 'Sony α6000'
            },
            { 
                filename: 'G3.jpg',
                location: 'Genova',
                date: '06/04/2025',
                camera: 'Sony α6000'
            },
            { 
                filename: 'G1.jpg',
                location: 'Genova',
                date: '06/04/2025',
                camera: 'Sony α6000'
            },
            { 
                filename: 'G4.jpg',
                location: 'Genova',
                date: '06/04/2025',
                camera: 'Sony α6000'
            }

        ];
        loadImages(images, folderPath);
    }
    else if (folderPath === 'img/Val Troncea 2025') {
        const images = [
            { 
                filename: 'ValTroncea2025_1.png',
                location: 'Val Troncea',
                date: '15/02/2025',
                camera: 'Sony α6000'
            },
            { 
                filename: 'ValTroncea2025_2.png',
                location: 'Val Troncea',
                date: '15/02/2025',
                camera: 'Sony α6000'
            },
            { 
                filename: 'ValTroncea2025_3.png',
                location: 'Val Troncea',
                date: '15/02/2025',
                camera: 'Sony α6000'
            },
            { 
                filename: 'ValTroncea2025_4.png',
                location: 'Val Troncea',
                date: '15/02/2025',
                camera: 'Sony α6000'
            },
            { 
                filename: 'ValTroncea2025_5.png',
                location: 'Val Troncea',
                date: '15/02/2025',
                camera: 'Sony α6000'
            },
            { 
                filename: 'ValTroncea2025_6.png',
                location: 'Val Troncea',
                date: '15/02/2025',
                camera: 'Sony α6000'
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

function loadImages(images, folderPath) {
    const galleryContainer = document.getElementById('gallery-container');
    
    // Create the grid container directly without header
    const imageGrid = document.createElement('div');
    imageGrid.className = 'gallery-grid';
    
    // Clear any previous content and add only the grid
    galleryContainer.innerHTML = '';
    galleryContainer.appendChild(imageGrid);
    
    // Add the images to the grid
    images.forEach((imageData) => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        
        const img = document.createElement('img');
        img.src = `${folderPath}/${imageData.filename}`;
        img.className = 'gallery-image';
        img.alt = imageData.filename;
        
        imageContainer.appendChild(img);
        imageGrid.appendChild(imageContainer);
        
        // Click handler for the lightbox
        imageContainer.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            
            const content = document.createElement('div');
            content.className = 'lightbox-content';
            
            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            fullImg.className = 'lightbox-image';
            
            const metadata = document.createElement('div');
            metadata.className = 'image-metadata';
            metadata.innerHTML = `
                <p><strong>${imageData.location}</strong></p>
                <p style="color: #999;">${imageData.date} • ${imageData.camera}</p>
            `;
            
            const closeButton = document.createElement('button');
            closeButton.innerHTML = '×';
            closeButton.className = 'close-button';
            closeButton.onclick = () => lightbox.remove();
            
            content.appendChild(closeButton);
            content.appendChild(fullImg);
            content.appendChild(metadata);
            lightbox.appendChild(content);
            document.body.appendChild(lightbox);
            
            requestAnimationFrame(() => {
                lightbox.style.display = 'flex';
            });
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.remove();
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', loadGallery); 
