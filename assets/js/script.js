// --- BAGIAN 1: SCRIPT LAMA ---

// Menu mobile
const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => menu.classList.toggle('open'));
}

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


// --- BAGIAN 2: LOGIKA HALAMAN DETAIL BERITA DINAMIS ---

// Data Berita (Berperan sebagai database)
const dataBerita = [
    {
        id: 1,
        judul: "Juara 3 FLS3N Jawa Barat Kategori Musik Tradisional",
        tanggal: "&#128204; 1 Agustus 2026",
        gambar: "assets/img/berita2.jpg",
        caption: "Penampilan tim Musik Tradisional SMKN 1 Kawali di ajang FLS3N tingkat Jawa Barat.",
        konten: `
            <p>Siswa-siswi jurusan Seni Pertunjukan &amp; Seni Karawitan (SP &amp; SK) SMKN 1 Kawali kembali menorehkan prestasi membanggakan. Pada ajang Festival dan Lomba Seni Siswa Nasional (FLS3N) tingkat Provinsi Jawa Barat yang diselenggarakan awal bulan ini, tim perwakilan sekolah berhasil menyabet gelar <strong>Juara 3</strong> pada kategori Musik Tradisional.</p>
            <p>Penampilan memukau ini merupakan hasil dari persiapan panjang dan latihan intensif yang dilakukan para siswa di bawah bimbingan guru produktif jurusan. Membawakan komposisi musik tradisional yang diaransemen secara apik dengan memadukan unsur karawitan klasik dan sentuhan dinamis, tim berhasil memukau dewan juri dan penonton.</p>
            <p>Kepala SMKN 1 Kawali menyampaikan apresiasi yang setinggi-tingginya kepada para siswa dan guru pembimbing. "Prestasi ini bukan hanya kebanggaan bagi sekolah, tetapi juga bukti nyata bahwa generasi muda kita masih sangat peduli dan mampu melestarikan kekayaan budaya Nusantara melalui seni pertunjukan," ungkap beliau.</p>
        `
    },
    {
        id: 2,
        judul: "Juara Harapan 1 FLS3N Kategori Vocal",
        tanggal: "&#128204; 1 Agustus 2026",
        gambar: "assets/img/berita1.jpg",
        caption: "Perwakilan kategori vocal dari SMKN 1 Kawali unjuk kebolehan.",
        konten: `
            <p>Selain kategori Musik Tradisional, pada ajang yang sama, perwakilan jurusan lainnya juga menorehkan prestasi sebagai <strong>Juara Harapan 1</strong> tingkat Jawa Barat dalam kategori Vocal.</p>
            <p>Pencapaian beruntun ini semakin mengukuhkan reputasi jurusan SP &amp; SK SMKN 1 Kawali sebagai salah satu lumbung bakat seni potensial di Jawa Barat.</p>
            <p>Ke depannya, para siswa diharapkan terus termotivasi untuk mengasah kemampuan dan terus berkarya, tidak hanya untuk kompetisi, namun juga untuk menjaga kelestarian seni tradisi Indonesia.</p>
        `
    },
    {
        id: 3,
        judul: "Pengisi Acara Event Daerah",
        tanggal: "&#128204; Baru-baru ini",
        gambar: "assets/img/galeri4.jpg",
        caption: "Siswa-siswi secara rutin melatih mental dan skill di berbagai panggung.",
        konten: `
            <p>Siswa-siswi secara rutin melatih mental dan skill dengan mengisi berbagai acara di beberapa event penting tingkat daerah.</p>
            <p>Pengalaman tampil di depan publik merupakan bagian penting dari kurikulum pendidikan vokasi di bidang seni. Hal ini tidak hanya memupuk rasa percaya diri, tetapi juga mempersiapkan mereka untuk terjun langsung ke industri pelestarian budaya setelah lulus nanti.</p>
        `
    }
];

// Eksekusi Logika Detail Berita
const judulElement = document.getElementById('judul-detail');

if (judulElement) {
    // Tangkap parameter 'id' dari URL (contoh: detailBerita.html?id=2)
    const urlParams = new URLSearchParams(window.location.search);
    const idBerita = parseInt(urlParams.get('id'));

    // Cari data yang sesuai di array dataBerita
    const beritaDitemukan = dataBerita.find(item => item.id === idBerita);

    // Ganti elemen HTML dengan data dari array
    if (beritaDitemukan) {
        judulElement.innerHTML = beritaDitemukan.judul;
        document.getElementById('tanggal-detail').innerHTML = beritaDitemukan.tanggal;
        
        const imgElement = document.getElementById('gambar-detail');
        imgElement.src = beritaDitemukan.gambar;
        imgElement.alt = beritaDitemukan.judul;
        
        document.getElementById('caption-detail').innerHTML = beritaDitemukan.caption;
        document.getElementById('konten-detail').innerHTML = beritaDitemukan.konten;
    } else {
        // Jika URL tidak memiliki ID yang valid
        judulElement.innerHTML = "Berita Tidak Ditemukan";
        document.getElementById('tanggal-detail').innerHTML = "";
        document.getElementById('konten-detail').innerHTML = "<p>Maaf, artikel yang Anda cari tidak tersedia atau URL tidak valid.</p>";
        document.getElementById('gambar-detail').style.display = 'none'; 
    }
}