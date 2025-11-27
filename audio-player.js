document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const playBtn = document.querySelector('.play-btn');
    const timeDisplay = document.querySelector('.time');
    
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
        const percent = (audio.currentTime / audio.duration) * 100;
        timeDisplay.textContent = formatTime(audio.currentTime) + ' / ' + formatTime(audio.duration);
    });
    
    audio.addEventListener('ended', function() {
        playBtn.textContent = '▶';
        progress.style.width = '0%';
    });
    
    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return min + ':' + (sec < 10 ? '0' : '') + sec;
    }
});