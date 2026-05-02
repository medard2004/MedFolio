// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.competence-card, .projet-card, .experience-item, .formation-card').forEach(el => {
    observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate language progress bars
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.language-progress');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
            });
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.extras-section').forEach(section => {
    progressObserver.observe(section);
});

// Animate stat numbers
const animateNumbers = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalNumber = target.textContent;
            const isPercentage = finalNumber.includes('%');
            const number = parseInt(finalNumber);
            const duration = 2000;
            const increment = number / (duration / 16);
            let current = 0;
            
            const updateNumber = () => {
                current += increment;
                if (current < number) {
                    target.textContent = Math.floor(current) + (isPercentage ? '%' : '+');
                    requestAnimationFrame(updateNumber);
                } else {
                    target.textContent = finalNumber;
                }
            };
            
            updateNumber();
            observer.unobserve(target);
        }
    });
};

const numberObserver = new IntersectionObserver(animateNumbers, { threshold: 0.5 });
document.querySelectorAll('.stat-number').forEach(el => numberObserver.observe(el));

// ============================================
// GALERIES DE PROJETS AVEC IMAGES PLACEHOLDER
// ============================================

// Projets Mobile (application Flutter développée par Médard Koudigue)
const mobileProjects = [
    { 
        image: 'https://picsum.photos/400/800?random=1', 
        title: 'Application Flutter',
        apk: 'app-release.apk',
        description: 'Application mobile Flutter — Télécharger l\'APK'
    }
];

// Projets Web (vrais projets développés par Médard Koudigue)
const webProjects = [
    { 
        image: 'https://api.microlink.io/?url=https://harmonie-signature.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
        title: 'Harmonie Signature', 
        link: 'https://harmonie-signature.vercel.app/' 
    },
    { 
        image: 'https://api.microlink.io/?url=https://la-route-des-vins-restaurant-v2.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
        title: 'La Route des Vins', 
        link: 'https://la-route-des-vins-restaurant-v2.vercel.app/' 
    },
    { 
        image: 'https://api.microlink.io/?url=https://wings-n-shake.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
        title: 'Wings N Shake', 
        link: 'https://wings-n-shake.vercel.app/' 
    },
    { 
        image: 'https://api.microlink.io/?url=https://ets-akif-fast-food.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
        title: 'ETS Akif Fast Food', 
        link: 'https://ets-akif-fast-food.vercel.app/' 
    },
    { 
        image: 'https://api.microlink.io/?url=https://la-huqqa.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
        title: 'La Huqqa', 
        link: 'https://la-huqqa.vercel.app/' 
    },
    { 
        image: 'https://api.microlink.io/?url=https://chirtir-chiken.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
        title: 'Chirtir Chicken', 
        link: 'https://chirtir-chiken.vercel.app/' 
    },
    { 
        image: 'https://api.microlink.io/?url=https://soin-clinic-mariam.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
        title: 'Soin Clinic Mariam', 
        link: 'https://soin-clinic-mariam.vercel.app/' 
    }
];

// Créations Graphiques (vos images réelles)
const graphicProjects = [
    { image: 'images/airpodsmax.jpg', title: 'AirPods Max' },
    { image: 'images/burgerking.jpg', title: 'Burger King' },
    { image: 'images/chococrise.jpg', title: 'Choco Crise' },
    { image: 'images/medardCrime.jpg', title: 'Médard Crime' },
    { image: 'images/mercedesBenz.jpg', title: 'Mercedes Benz' },
    { image: 'images/parfums.jpg', title: 'Parfums' },
    { image: 'images/patisserie_desing.jpg', title: 'Pâtisserie Design' },
    { image: 'images/pennes.jpg', title: 'Pennes' },
    { image: 'images/parfumNature.jpg', title: 'Parfum Nature' },
    { image: 'images/shoesflyer.jpg', title: 'Shoes Flyer' },
    { image: 'images/burgerUltime.jpg', title: 'Burger Ultime' },
    { image: 'images/gateauauChocolat.jpg', title: 'Gâteau au Chocolat' },
    { image: 'images/flyhigh.jpg', title: 'Fly High' },
    { image: 'images/icecream.jpg', title: 'Ice Cream' },
    { image: 'images/newbalance.jpg', title: 'New Balance' },
    { image: 'images/shawarma.jpg', title: 'Shawarma' },
    { image: 'images/airpodspro.jpg', title: 'AirPods Pro' },
    { image: 'images/tricycles_affiche.jpg', title: 'Tricycles Affiche' },
    { image: 'images/10k.jpg', title: '10K' },
    { image: 'images/angelstyle.jpg', title: 'Angel Style' },
    { image: 'images/bannernaboufall.jpg', title: 'Banner Naboufall' },
    { image: 'images/apsonicramadan.jpg', title: 'Apsonic Ramadan' },
    { image: 'images/chez_jovi.jpg', title: 'Chez Jovi' },
    { image: 'images/LaCanALome1.jpg', title: 'La Can à Lomé' },
    { image: 'images/logograzbeauty.jpg', title: 'Logo Graz Beauty' },
    { image: 'images/logonedstark.jpg', title: 'Logo Ned Stark' },
    { image: 'images/logosaph&naya.jpg', title: 'Logo Saph & Naya' },
    { image: 'images/miniature.jpg', title: 'Miniature' },
    { image: 'images/miniature1.jpg', title: 'Miniature 1' },
    { image: 'images/missCare2.jpg', title: 'Miss Care 2' },
    { image: 'images/missCareMockup.jpg', title: 'Miss Care Mockup' },
    { image: 'images/missCareMockup1.jpg', title: 'Miss Care Mockup 1' },
    { image: 'images/crime2.jpg', title: 'Crime 2' },
    { image: 'images/lecorps.jpg', title: 'Le Corps' },
    { image: 'images/shootmuscle.jpg', title: 'Shoot Muscle' }
];

// Projets Vidéo (miniatures placeholder - remplacez par vos vraies vidéos)
const videoProjects = [
    { 
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 
        thumbnail: 'https://picsum.photos/600/400?random=20', 
        title: 'Publicité Produit' 
    },
    { 
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', 
        thumbnail: 'https://picsum.photos/600/400?random=21', 
        title: 'Motion Design' 
    },
    { 
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 
        thumbnail: 'https://picsum.photos/600/400?random=22', 
        title: 'Vidéo Promo' 
    },
    { 
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', 
        thumbnail: 'https://picsum.photos/600/400?random=23', 
        title: 'Court Métrage' 
    },
    { 
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', 
        thumbnail: 'https://picsum.photos/600/400?random=24', 
        title: 'Animation Logo' 
    },
    { 
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', 
        thumbnail: 'https://picsum.photos/600/400?random=25', 
        title: 'Teaser Event' 
    }
];

let currentGalleryItems = [];
let currentItemIndex = 0;
let currentGalleryType = ''; // 'mobile', 'web', 'graphic', 'video'

// ============================================
// FONCTIONS GALERIE MOBILE
// ============================================
function openMobileGallery(event) {
    event.preventDefault();
    currentGalleryType = 'mobile';
    currentGalleryItems = mobileProjects;
    
    const grid = document.getElementById('mobileGalleryGrid');
    grid.innerHTML = '';
    
    mobileProjects.forEach((project, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        // Si APK disponible, on propose le téléchargement au lieu du viewer
        if (project.apk) {
            item.onclick = () => {
                const a = document.createElement('a');
                a.href = project.apk;
                a.download = project.apk;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };
            item.style.cursor = 'pointer';
            item.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="gallery-item-overlay">
                    <div class="gallery-item-title">${project.title}</div>
                    <div style="margin-top: 0.8rem; background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.4);">
                        <i class="fas fa-download"></i> Télécharger l'APK
                    </div>
                </div>
            `;
        } else {
            item.onclick = () => openImageViewer(index);
            item.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="gallery-item-overlay">
                    <div class="gallery-item-title">${project.title}</div>
                </div>
            `;
        }
        
        grid.appendChild(item);
    });
    
    document.getElementById('mobileGalleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileGallery() {
    document.getElementById('mobileGalleryModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================
// FONCTIONS GALERIE WEB
// ============================================
function openWebGallery(event) {
    event.preventDefault();
    currentGalleryType = 'web';
    currentGalleryItems = webProjects;
    
    const grid = document.getElementById('webGalleryGrid');
    grid.innerHTML = '';
    
    webProjects.forEach((project, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        // Pour les projets web, on ouvre le lien au lieu du viewer
        item.onclick = () => {
            if (project.link) {
                window.open(project.link, '_blank');
            }
        };
        
        item.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="gallery-item-overlay">
                <div class="gallery-item-title">${project.title}</div>
                <div style="font-size: 0.85rem; margin-top: 0.5rem; opacity: 0.8;">
                    <i class="fas fa-external-link-alt"></i> Visiter le site
                </div>
            </div>
        `;
        
        grid.appendChild(item);
    });
    
    document.getElementById('webGalleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWebGallery() {
    document.getElementById('webGalleryModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================
// FONCTIONS GALERIE GRAPHIQUE
// ============================================
function openGraphicGallery(event) {
    event.preventDefault();
    currentGalleryType = 'graphic';
    currentGalleryItems = graphicProjects;
    
    const grid = document.getElementById('graphicGalleryGrid');
    grid.innerHTML = '';
    
    graphicProjects.forEach((project, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.onclick = () => openImageViewer(index);
        
        item.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="gallery-item-overlay">
                <div class="gallery-item-title">${project.title}</div>
            </div>
        `;
        
        grid.appendChild(item);
    });
    
    document.getElementById('graphicGalleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGraphicGallery() {
    document.getElementById('graphicGalleryModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================
// FONCTIONS GALERIE VIDÉO
// ============================================
function openVideoGallery(event) {
    event.preventDefault();
    currentGalleryType = 'video';
    currentGalleryItems = videoProjects;
    
    const grid = document.getElementById('videoGalleryGrid');
    grid.innerHTML = '';
    
    videoProjects.forEach((project, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.onclick = () => openVideoViewer(index);
        
        item.innerHTML = `
            <img src="${project.thumbnail}" alt="${project.title}">
            <div class="gallery-item-overlay">
                <div class="gallery-item-title">${project.title}</div>
                <div style="font-size: 2rem; margin-top: 0.5rem;">
                    <i class="fas fa-play-circle"></i>
                </div>
            </div>
        `;
        
        grid.appendChild(item);
    });
    
    document.getElementById('videoGalleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoGallery() {
    document.getElementById('videoGalleryModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================
// VIEWER D'IMAGES
// ============================================
function openImageViewer(index) {
    currentItemIndex = index;
    const viewer = document.getElementById('imageViewer');
    const img = document.getElementById('viewerImage');
    const video = document.getElementById('viewerVideo');
    
    // Cacher la vidéo, afficher l'image
    video.style.display = 'none';
    video.pause();
    img.style.display = 'block';
    
    const item = currentGalleryItems[index];
    img.src = item.image;
    
    viewer.classList.add('active');
}

function openVideoViewer(index) {
    currentItemIndex = index;
    const viewer = document.getElementById('imageViewer');
    const img = document.getElementById('viewerImage');
    const video = document.getElementById('viewerVideo');
    
    // Cacher l'image, afficher la vidéo
    img.style.display = 'none';
    video.style.display = 'block';
    
    const item = currentGalleryItems[index];
    video.src = item.video;
    video.load();
    
    viewer.classList.add('active');
}

function closeImageViewer() {
    const viewer = document.getElementById('imageViewer');
    const video = document.getElementById('viewerVideo');
    
    viewer.classList.remove('active');
    video.pause();
}

function nextImage() {
    currentItemIndex = (currentItemIndex + 1) % currentGalleryItems.length;
    
    if (currentGalleryType === 'video') {
        openVideoViewer(currentItemIndex);
    } else {
        openImageViewer(currentItemIndex);
    }
}

function prevImage() {
    currentItemIndex = (currentItemIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
    
    if (currentGalleryType === 'video') {
        openVideoViewer(currentItemIndex);
    } else {
        openImageViewer(currentItemIndex);
    }
}

// ============================================
// GESTION DES ÉVÉNEMENTS CLAVIER
// ============================================
document.addEventListener('keydown', (e) => {
    // Fermer avec Échap
    if (e.key === 'Escape') {
        if (typeof closeMobileGallery === 'function') closeMobileGallery();
        if (typeof closeWebGallery === 'function') closeWebGallery();
        if (typeof closeGraphicGallery === 'function') closeGraphicGallery();
        if (typeof closeVideoGallery === 'function') closeVideoGallery();
        if (typeof closeImageViewer === 'function') closeImageViewer();
        if (typeof closeWhatsAppModal === 'function') closeWhatsAppModal();
    }
    
    // Navigation avec flèches (seulement si le viewer est ouvert)
    const viewer = document.getElementById('imageViewer');
    if (viewer && viewer.classList.contains('active')) {
        if (e.key === 'ArrowRight') {
            nextImage();
        }
        if (e.key === 'ArrowLeft') {
            prevImage();
        }
    }
});

// ============================================
// FERMER EN CLIQUANT EN DEHORS
// ============================================
document.getElementById('mobileGalleryModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'mobileGalleryModal') {
        closeMobileGallery();
    }
});

document.getElementById('webGalleryModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'webGalleryModal') {
        closeWebGallery();
    }
});

document.getElementById('graphicGalleryModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'graphicGalleryModal') {
        closeGraphicGallery();
    }
});

document.getElementById('videoGalleryModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'videoGalleryModal') {
        closeVideoGallery();
    }
});

document.getElementById('imageViewer')?.addEventListener('click', (e) => {
    if (e.target.id === 'imageViewer') {
        closeImageViewer();
    }
});
/* ═══════════════════════════════════════════
   ANIMATIONS PRO
═══════════════════════════════════════════ */

// --- Scroll progress bar ---
const scrollBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollBar) scrollBar.style.width = pct + '%';
}, { passive: true });

// --- Custom cursor ---
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let cx = 0, cy = 0, tx = 0, ty = 0;
window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
(function animCursor() {
    cx += (tx - cx) * 0.12;
    cy += (ty - cy) * 0.12;
    if (cursor) cursor.style.cssText += `left:${cx}px;top:${cy}px;`;
    if (cursorDot) cursorDot.style.cssText += `left:${tx}px;top:${ty}px;`;
    requestAnimationFrame(animCursor);
})();

// --- Floating particles ---
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const dur = Math.random() * 20 + 15;
        const delay = Math.random() * 15;
        p.style.cssText = `width:${size}px;height:${size}px;left:${left}%;bottom:-10px;animation-duration:${dur}s;animation-delay:${delay}s;`;
        container.appendChild(p);
    }
}
createParticles();

// --- Intersection Observer for section animations ---
const animEls = document.querySelectorAll('[data-animate]');
const animObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); animObserver.unobserve(e.target); } });
}, { threshold: 0.12 });
animEls.forEach(el => animObserver.observe(el));

// --- 3D Tilt on project cards ---
document.querySelectorAll('.projet-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.03)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// --- Animate numbers (compteurs) ---
function animateCount(el, target, duration = 1500) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
        start += step;
        if (start >= target) { el.textContent = target + '+'; clearInterval(timer); }
        else el.textContent = Math.floor(start) + '+';
    }, 16);
}

// --- Smooth reveal for hero name (typewriter) ---
const nameFirst = document.querySelector('.name-first');
const nameLast = document.querySelector('.name-last');
if (nameFirst && nameLast) {
    const textFirst = nameFirst.textContent.trim();
    const textLast = nameLast.textContent.trim();
    nameFirst.textContent = '';
    nameLast.textContent = '';
    
    let i = 0;
    const typeLast = () => {
        if (i < textLast.length) { nameLast.textContent += textLast[i++]; setTimeout(typeLast, 60); }
    };
    
    let j = 0;
    const typeFirst = () => {
        if (j < textFirst.length) { nameFirst.textContent += textFirst[j++]; setTimeout(typeFirst, 60); }
        else { setTimeout(typeLast, 60); }
    };
    setTimeout(typeFirst, 400);
}

// ============================================
// MODAL WHATSAPP FORM
// ============================================
function openWhatsAppModal(event) {
    if (event) event.preventDefault();
    document.getElementById('whatsappModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWhatsAppModal() {
    document.getElementById('whatsappModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function sendWhatsAppMessage(event) {
    event.preventDefault();
    const name = document.getElementById('waName').value;
    const project = document.getElementById('waProject').value;
    const message = document.getElementById('waMessage').value;
    
    // Numéro de téléphone WhatsApp
    const phoneNumber = "22897148251";
    
    // Créer le message
    const waText = `Bonjour Médard ! 👋\n\nJe m'appelle *${name}*.\n\nJe vous contacte pour un projet de type : *${project}*.\n\n*Description :*\n${message}`;
    
    // Encoder l'URL et ouvrir WhatsApp
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
    
    // Fermer le modal et réinitialiser le formulaire
    closeWhatsAppModal();
    document.getElementById('whatsappForm').reset();
}

// Fermer le modal WhatsApp en cliquant en dehors
document.getElementById('whatsappModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'whatsappModal') {
        closeWhatsAppModal();
    }
});
