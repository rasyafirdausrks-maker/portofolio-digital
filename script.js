document.addEventListener('DOMContentLoaded', () => {
    // Jam
    setInterval(() => document.getElementById('clock').textContent = new Date().toLocaleTimeString('id-ID', { hour12: false }), 1000);

    // Dark Mode
    document.getElementById('darkModeBtn').addEventListener('click', () => document.body.classList.toggle('dark-mode'));

    // Auth
    const uInput = document.getElementById('usernameInput');
    const status = document.getElementById('loginStatus');
    document.getElementById('registerBtn').addEventListener('click', () => {
        localStorage.setItem('registeredUser', uInput.value);
        alert("Akun terdaftar!");
    });
    document.getElementById('loginBtn').addEventListener('click', () => {
        if(uInput.value === localStorage.getItem('registeredUser')) {
            localStorage.setItem('loggedInUser', uInput.value);
            status.textContent = "Selamat Datang, " + uInput.value;
        } else alert("Username salah!");
    });
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        status.textContent = "Belum Login";
        alert("Logout berhasil!");
    });

    // Profil & Foto
    const profilePic = document.getElementById('profilePic');
    if(localStorage.getItem('savedName')) document.getElementById('profileName').textContent = localStorage.getItem('savedName');
    if(localStorage.getItem('savedPhoto')) profilePic.src = localStorage.getItem('savedPhoto');
    document.getElementById('saveNameBtn').addEventListener('click', () => {
        const name = document.getElementById('nameInput').value;
        localStorage.setItem('savedName', name);
        document.getElementById('profileName').textContent = name;
    });
    document.getElementById('profileUpload').addEventListener('change', (e) => {
        const reader = new FileReader();
        reader.onload = (ev) => { profilePic.src = ev.target.result; localStorage.setItem('savedPhoto', ev.target.result); };
        reader.readAsDataURL(e.target.files[0]);
    });

    // Tools
    document.getElementById('fileUpload').addEventListener('change', (e) => {
        const li = document.createElement('li');
        li.textContent = e.target.files[0].name;
        document.getElementById('fileList').appendChild(li);
    });
    document.getElementById('calendarDate').addEventListener('change', (e) => {
        document.getElementById('selectedDate').textContent = "Jadwal: " + e.target.value;
    });

    // Back to Top
    const btnTop = document.getElementById('backToTop');
    window.onscroll = () => btnTop.style.display = (window.scrollY > 200) ? "block" : "none";
    btnTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
});
