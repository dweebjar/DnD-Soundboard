function playSounds(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', playSounds);