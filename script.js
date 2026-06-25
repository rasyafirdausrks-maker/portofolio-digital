document.addEventListener('DOMContentLoaded', function() {
    // Fitur Jam
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        setInterval(function() {
            clockElement.textContent = new Date().toLocaleTimeString('id-ID', { hour12: false });
        }, 1000);
    }

    // Fitur Dark Mode
    const btn = document.getElementById('darkModeBtn');
    if (btn) {
        btn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }
});
