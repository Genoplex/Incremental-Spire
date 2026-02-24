let player = load();

setInterval(() => {
    player.timePlayed = player.timePlayed.add(1);
    save(player);
}, 1000);

window.addEventListener('beforeunload', () => save(player));
