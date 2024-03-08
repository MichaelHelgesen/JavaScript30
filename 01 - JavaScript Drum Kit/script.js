var playSound = (function (keyCode, eventType) {
    var element = document.querySelector("div [data-key=\"".concat(keyCode, "\"]"));
    if (element) {
        element.classList.toggle("playing");
        var audioFile = document.querySelector("audio[data-key=\"".concat(keyCode, "\"]"));
        if (eventType == "keydown") {
            audioFile.pause();
            audioFile.currentTime = 0;
            audioFile.play();
        }
    }
});
window.addEventListener("keydown", function (event) {
    playSound(event.code, event.type);
});
window.addEventListener("keyup", function (event) {
    playSound(event.code, event.type);
});
