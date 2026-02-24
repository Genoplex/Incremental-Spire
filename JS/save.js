function encoded(str) {
    return btoa(encodeURIComponent(str));
}
function decoded(base64) {
    return decodeURIComponent(atob(base64));
}

function load() {
    const storedSave = localStorage.getItem('player');
    if (!storedSave) return getDefaultPlayer();

    try {
        const saveJsonString = decoded(storedSave);
        const temporarySave = JSON.parse(saveJsonString);
        const defaultPlayer = getDefaultPlayer();
        const merged = { ...defaultPlayer, ...temporarySave }
        merged.timePlayed = new Decimal(merged.timePlayed || 0);
        return merged;
    } catch {
        return getDefaultPlayer();
    }
}

function save(player) {
    const saveJsonString = JSON.stringify(player);
    const temporarySave = encoded(saveJsonString);
    localStorage.setItem('player', temporarySave);
}