document.addEventListener('DOMContentLoaded', () => {
    // 1. JAM
    const clock = document.getElementById('clock');
    setInterval(() => {
        clock.textContent = new Date().toLocaleTimeString('id-ID', { hour12: false });
    }, 1000);

    // 2. DARK MODE
    document.getElementById('darkModeBtn').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // 3. LOGIN, REGISTER & LOGOUT
    const uInput = document.getElementById('usernameInput');
    const status = document.getElementById('loginStatus');
    
    document.getElementById('registerBtn').addEventListener('click', () => {
        localStorage.setItem('registeredUser', uInput.value);
        alert("Akun didaftarkan!");
    });

    document.getElementById('loginBtn').addEventListener('click', () => {
        if(uInput.value && uInput.value === localStorage.getItem('registeredUser')) {
            localStorage.setItem('loggedInUser', uInput.value);
            status.textContent = "Selamat Datang, " + uInput.value;
        } else {
            alert("Username salah atau belum terdaftar!");
        }
    });

    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        status.textContent = "Belum Login";
        uInput.value = "";
        alert("Anda telah logout!");
    });

    // Check login state
    if(localStorage.getItem('loggedInUser')) {
        status.textContent = "Selamat Datang, " + localStorage.getItem('loggedInUser');
    }

    // 4. PROFIL (Nama & Foto)
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
