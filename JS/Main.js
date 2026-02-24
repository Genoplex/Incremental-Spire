function safeBtoa(str) {
    return btoa(encodeURIComponent(str));
}
function safeAtob(base64) {
    return decodeURIComponent(atob(base64));
}

function loadPlayer() {
    const stored = localStorage.getItem('player');
    if (!stored) return { timePlayed: 0 };

    try {
        const jsonString = safeAtob(stored);
        const player = JSON.parse(jsonString);
        player.timePlayed = Number(player.timePlayed) || 0;
        return player;
    } catch {
        return { timePlayed: 0 };
    }
}

function savePlayer(player) {
    const jsonString = JSON.stringify(player);
    const encoded = safeBtoa(jsonString);
    localStorage.setItem('player', encoded);
}

let player = loadPlayer();

setInterval(() => {
    player.timePlayed += 1;
    savePlayer(player);
}, 1000);

window.addEventListener('beforeunload', () => savePlayer(player));