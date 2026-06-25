document.addEventListener('DOMContentLoaded', () => {
    // 1. Fitur Jam
    const clock = document.getElementById('clock');
    setInterval(() => {
        clock.textContent = new Date().toLocaleTimeString('id-ID', { hour12: false });
    }, 1000);

    // 2. Fitur Dark Mode
    const btn = document.getElementById('darkModeBtn');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // 3. Fitur Profil (Simpan Nama)
    const nameInput = document.getElementById('nameInput');
    const profileName = document.getElementById('profileName');
    const saveBtn = document.getElementById('saveNameBtn');

    if(localStorage.getItem('savedName')) profileName.textContent = localStorage.getItem('savedName');

    saveBtn.addEventListener('click', () => {
        localStorage.setItem('savedName', nameInput.value);
        profileName.textContent = nameInput.value;
    });

    // 4. Fitur Foto Profil
    const profileUpload = document.getElementById('profileUpload');
    const profilePic = document.getElementById('profilePic');

    profileUpload.addEventListener('change', (e) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
            profilePic.src = ev.target.result;
            localStorage.setItem('savedPhoto', ev.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    });

    if(localStorage.getItem('savedPhoto')) profilePic.src = localStorage.getItem('savedPhoto');
});
