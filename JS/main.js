let player = load();

new Vue({
    el: '#app',
    data: {
        player: player,
        currentTab: 'subpage1',
    },
    mounted() {
        // 每30秒自动保存
        this.saveInterval = setInterval(() => {
            save(this.player);
            console.log('游戏已自动保存');
        }, 30000);
    },
    beforeDestroy() {
        clearInterval(this.saveInterval);
    },
    methods: {
        switchTab(tab) {
            this.currentTab = tab;
        }
    }
});