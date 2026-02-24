function Btoa(str) {
    return btoa(encodeURIComponent(str));
}
function Atob(base64) {
    return decodeURIComponent(atob(base64));
}

function load() {
    const storedSave = localStorage.getItem('player');
    if (!storedSave) return getDefaultPlayer();

    try {
        const jsonString = Atob(storedSave);
        const temporaryPlayer = JSON.parse(jsonString);
        temporaryPlayer.timePlayed = new Decimal(temporaryPlayer.timePlayed || 0);
        return temporaryPlayer;
    } catch {
        return getDefaultPlayer();
    }
}

function save(player) {
    const jsonString = JSON.stringify(player);
    const encoded = Btoa(jsonString);
    localStorage.setItem('player', encoded);
}