document.addEventListener('DOMContentLoaded', () => {
    // Jam
    setInterval(() => document.getElementById('clock').textContent = new Date().toLocaleTimeString('id-ID', { hour12: false }), 1000);
    // Dark Mode
    document.getElementById('darkModeBtn').addEventListener('click', () => document.body.classList.toggle('dark-mode'));

    // Login/Register
    document.getElementById('registerBtn').addEventListener('click', () => { localStorage.setItem('regUser', document.getElementById('usernameInput').value); alert("Akun terdaftar!"); });
    document.getElementById('loginBtn').addEventListener('click', () => {
        if(document.getElementById('usernameInput').value === localStorage.getItem('regUser')) {
            document.getElementById('loginStatus').textContent = "Selamat Datang, " + localStorage.getItem('regUser');
        } else alert("Username salah!");
    });
    document.getElementById('logoutBtn').addEventListener('click', () => { document.getElementById('loginStatus').textContent = "Belum Login"; });

    // Profil
    document.getElementById('saveNameBtn').addEventListener('click', () => { document.getElementById('profileName').textContent = document.getElementById('nameInput').value; });

    // Fitur Tambahan & Catatan
    document.getElementById('fileUpload').addEventListener('change', (e) => {
        const li = document.createElement('li'); li.textContent = e.target.files[0].name;
        document.getElementById('fileList').appendChild(li);
    });
    document.getElementById('calendarDate').addEventListener('change', (e) => { document.getElementById('selectedDate').textContent = "Jadwal: " + e.target.value; });
    document.getElementById('addNoteBtn').addEventListener('click', () => {
        const ni = document.getElementById('noteInput');
        if(ni.value) { const li = document.createElement('li'); li.textContent = ni.value; document.getElementById('noteList').appendChild(li); ni.value = ""; }
    });

    // Back to Top
    document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
});
