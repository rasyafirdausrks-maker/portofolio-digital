document.addEventListener('DOMContentLoaded', () => {
    // 1. Jam
    setInterval(() => {
        document.getElementById('clock').textContent = new Date().toLocaleTimeString('id-ID', { hour12: false });
    }, 1000);

    // 2. Dark Mode
    document.getElementById('darkModeBtn').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // 3. Login & Register
    const uInput = document.getElementById('usernameInput');
    const status = document.getElementById('loginStatus');
    
    document.getElementById('registerBtn').addEventListener('click', () => {
        localStorage.setItem('registeredUser', uInput.value);
        alert("Akun didaftarkan!");
    });

    document.getElementById('loginBtn').addEventListener('click', () => {
        if(uInput.value === localStorage.getItem('registeredUser')) {
            status.textContent = "Selamat Datang, " + uInput.value;
        } else {
            alert("Username tidak terdaftar!");
        }
    });

    // 4. Profil (Nama & Foto)
    const nameInput = document.getElementById('nameInput');
    const profileName = document.getElementById('profileName');
    const profilePic = document.getElementById('profilePic');
    const profileUpload = document.getElementById('profileUpload');

    if(localStorage.getItem('savedName')) profileName.textContent = localStorage.getItem('savedName');
    if(localStorage.getItem('savedPhoto')) profilePic.src = localStorage.getItem('savedPhoto');

    document.getElementById('saveNameBtn').addEventListener('click', () => {
        localStorage.setItem('savedName', nameInput.value);
        profileName.textContent = nameInput.value;
    });

    profileUpload.addEventListener('change', (e) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
            profilePic.src = ev.target.result;
            localStorage.setItem('savedPhoto', ev.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    });
});
