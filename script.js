document.addEventListener('DOMContentLoaded', () => {
    // 1. Fitur Jam
    const clock = document.getElementById('clock');
    setInterval(() => {
        clock.textContent = new Date().toLocaleTimeString('id-ID', { hour12: false });
    }, 1000);

    // 2. Fitur Dark Mode
    const btn = document.getElementById('darkModeBtn');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
});
