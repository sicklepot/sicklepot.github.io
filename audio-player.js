document.addEventListener('DOMContentLoaded', function() {
    // 获取所有音频播放器
    const players = document.querySelectorAll('.custom-audio-player');
    
    players.forEach(player => {
        const audio = player.querySelector('.audio-element');
        const playBtn = player.querySelector('.play-btn');
        const timeDisplay = player.querySelector('.time');
        
        // 为每个播放器单独设置事件监听
        playBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                playBtn.textContent = '❚❚';
            } else {
                audio.pause();
                playBtn.textContent = '▶';
            }
        });
        
        audio.addEventListener('timeupdate', function() {
            timeDisplay.textContent = formatTime(audio.currentTime) + ' / ' + formatTime(audio.duration);
        });
        
        audio.addEventListener('ended', function() {
            playBtn.textContent = '▶';
        });
    });
    
    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return min + ':' + (sec < 10 ? '0' : '') + sec;
    }
});