document.addEventListener('DOMContentLoaded', () => {
    // Fitur Dasar
    setInterval(() => document.getElementById('clock').textContent = new Date().toLocaleTimeString('id-ID', { hour12: false }), 1000);
    document.getElementById('darkModeBtn').addEventListener('click', () => document.body.classList.toggle('dark-mode'));

    // Auth
    const uInput = document.getElementById('usernameInput');
    const status = document.getElementById('loginStatus');
    document.getElementById('registerBtn').addEventListener('click', () => { localStorage.setItem('registeredUser', uInput.value); alert("Akun terdaftar!"); });
    document.getElementById('loginBtn').addEventListener('click', () => {
        if(uInput.value === localStorage.getItem('registeredUser')) { localStorage.setItem('loggedInUser', uInput.value); status.textContent = "Selamat Datang, " + uInput.value; }
        else alert("Username salah!");
    });
    document.getElementById('logoutBtn').addEventListener('click', () => { localStorage.removeItem('loggedInUser'); status.textContent = "Belum Login"; });

    // Profil
    const profilePic = document.getElementById('profilePic');
    document.getElementById('saveNameBtn').addEventListener('click', () => { const n = document.getElementById('nameInput').value; localStorage.setItem('savedName', n); document.getElementById('profileName').textContent = n; });
    document.getElementById('profileUpload').addEventListener('change', (e) => { const reader = new FileReader(); reader.onload = (ev) => { profilePic.src = ev.target.result; localStorage.setItem('savedPhoto', ev.target.result); }; reader.readAsDataURL(e.target.files[0]); });

    // Tools & Notes
    document.getElementById('fileUpload').addEventListener('change', (e) => { const li = document.createElement('li'); li.textContent = e.target.files[0].name; document.getElementById('fileList').appendChild(li); });
    document.getElementById('calendarDate').addEventListener('change', (e) => { document.getElementById('selectedDate').textContent = "Jadwal: " + e.target.value; });
    document.getElementById('addNoteBtn').addEventListener('click', () => { const ni = document.getElementById('noteInput'); if(ni.value) { const li = document.createElement('li'); li.textContent = ni.value; document.getElementById('noteList').appendChild(li); ni.value = ""; }});

    // Back to Top
    const btnTop = document.getElementById('backToTop');
    window.onscroll = () => btnTop.style.display = (window.scrollY > 200) ? "block" : "none";
    btnTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
});
