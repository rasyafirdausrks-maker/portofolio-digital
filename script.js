document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => document.getElementById('clock').textContent = new Date().toLocaleTimeString('id-ID', { hour12: false }), 1000);
    document.getElementById('darkModeBtn').addEventListener('click', () => document.body.classList.toggle('dark-mode'));

    const hour = new Date().getHours();
    const greeting = document.getElementById('greeting');
    if (hour < 12) greeting.textContent = "Selamat Pagi! Selamat datang di Portfolio Aca.";
    else if (hour < 18) greeting.textContent = "Selamat Siang! Mari kita lihat karya Aca.";
    else greeting.textContent = "Selamat Malam! Terima kasih sudah mampir.";

    document.getElementById('registerBtn').addEventListener('click', () => { localStorage.setItem('regUser', document.getElementById('usernameInput').value); alert("Akun terdaftar!"); });
    document.getElementById('loginBtn').addEventListener('click', () => {
        if(document.getElementById('usernameInput').value === localStorage.getItem('regUser')) document.getElementById('loginStatus').textContent = "Selamat Datang, " + document.getElementById('usernameInput').value;
        else alert("Username salah!");
    });
    document.getElementById('logoutBtn').addEventListener('click', () => document.getElementById('loginStatus').textContent = "Belum Login");
    document.getElementById('saveNameBtn').addEventListener('click', () => document.getElementById('profileName').textContent = document.getElementById('nameInput').value);
    document.getElementById('addNoteBtn').addEventListener('click', () => {
        const ni = document.getElementById('noteInput');
        if(ni.value) { const li = document.createElement('li'); li.textContent = ni.value; document.getElementById('noteList').appendChild(li); ni.value = ""; }
    });
    document.getElementById('contactForm').addEventListener('submit', (e) => { e.preventDefault(); document.getElementById('contactStatus').textContent = "Pesan terkirim!"; document.getElementById('contactForm').reset(); });
    document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
});

function generateQR() {
    const qrText = document.getElementById('qrText').value;
    const qrImage = document.getElementById('qrImage');
    if (qrText) qrImage.src = "https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=" + encodeURIComponent(qrText);
    else alert("Masukkan teks atau link terlebih dahulu!");
}
