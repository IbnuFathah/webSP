// Menu mobile
const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => menu.classList.toggle('open'));

// Lightbox galeri
const lb = document.getElementById('lightbox');
if (lb) {
    document.querySelectorAll('.galeri img').forEach(img => {
        img.addEventListener('click', () => {
            lb.querySelector('img').src = img.src;
            lb.classList.add('show');
        });
    });
    lb.addEventListener('click', () => lb.classList.remove('show'));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('show'); });
}

// Daftar guru
const btnGuru = document.getElementById('btnGuru');
if (btnGuru) {
    const list = document.getElementById('listGuru');
    btnGuru.addEventListener('click', () => {
        const buka = list.classList.toggle('show');
        btnGuru.textContent = buka ? 'Tutup Daftar Guru' : 'Lihat Daftar Guru';
    });
}
