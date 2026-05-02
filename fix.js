const fs = require('fs');
const content = fs.readFileSync('main.js', 'utf8');
let index = content.indexOf('// ============================================\r\n// VIEWER D\'IMAGES');
if (index === -1) index = content.indexOf('// ============================================\n// VIEWER D\'IMAGES');

if (index !== -1) {
    const newContent = content.substring(0, index);
    const rest = `// ============================================
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
    if (cursor) cursor.style.cssText += \`left:\${cx}px;top:\${cy}px;\`;
    if (cursorDot) cursorDot.style.cssText += \`left:\${tx}px;top:\${ty}px;\`;
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
        p.style.cssText = \`width:\${size}px;height:\${size}px;left:\${left}%;bottom:-10px;animation-duration:\${dur}s;animation-delay:\${delay}s;\`;
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
        card.style.transform = \`perspective(800px) rotateY(\${x * 12}deg) rotateX(\${-y * 12}deg) scale(1.03)\`;
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
    const waText = \`Bonjour Médard ! 👋\\n\\nJe m'appelle *\${name}*.\\n\\nJe vous contacte pour un projet de type : *\${project}*.\\n\\n*Description :*\\n\${message}\`;
    
    // Encoder l'URL et ouvrir WhatsApp
    const waUrl = \`https://wa.me/\${phoneNumber}?text=\${encodeURIComponent(waText)}\`;
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
`;
    fs.writeFileSync('main.js', newContent + rest);
    console.log('Fixed main.js');
} else {
    console.log('Anchor not found');
}
