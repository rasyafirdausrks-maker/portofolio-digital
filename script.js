document.addEventListener('DOMContentLoaded', () => {
    // Fitur Dasar
    setInterval(() => document.getElementById('clock').textContent = new Date().toLocaleTimeString('id-ID', { hour12: false }), 1000);
    document.getElementById('darkModeBtn').addEventListener('click', () => document.body.classList.toggle('dark-mode'));

    // Auth
    const uInput = document.getElementById('usernameInput');
    const status = document.getElementById('loginStatus');
    document.getElementById('registerBtn').addEventListener('click', () => { localStorage.setItem('regUser', uInput.value); alert("Akun terdaftar!"); });
    document.getElementById('loginBtn').addEventListener('click', () => {
        if(uInput.value === localStorage.getItem('regUser')) status.textContent = "Selamat Datang, " + uInput.value;
        else alert("Username salah!");
    });
    document.getElementById('logoutBtn').addEventListener('click', () => status.textContent = "Belum Login");

    // Profil
    document.getElementById('saveNameBtn').addEventListener('click', () => { document.getElementById('profileName').textContent = document.getElementById('nameInput').value; });

    // Tools, Notes & Contact
    document.getElementById('fileUpload').addEventListener('change', (e) => { const li = document.createElement('li'); li.textContent = e.target.files[0].name; document.getElementById('fileList').appendChild(li); });
    document.getElementById('calendarDate').addEventListener('change', (e) => { document.getElementById('selectedDate').textContent = "Jadwal: " + e.target.value; });
    document.getElementById('addNoteBtn').addEventListener('click', () => {
        const ni = document.getElementById('noteInput');
        if(ni.value) { const li = document.createElement('li'); li.textContent = ni.value; document.getElementById('noteList').appendChild(li); ni.value = ""; }
    });
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('contactStatus').textContent = "Pesan terkirim!";
        document.getElementById('contactForm').reset();
    });

    // Back to Top
    document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
});
