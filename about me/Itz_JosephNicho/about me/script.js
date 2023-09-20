function updateWaktu() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('waktu').textContent = `WAKTU: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateWaktu, 1000);