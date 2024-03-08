const playSound = ((keyCode: string, eventType: string): void => {
	const element = document.querySelector(`div [data-key="${keyCode}"]`);
	if(element){
		element.classList.toggle("playing");
		const audioFile = <HTMLAudioElement>document.querySelector(`audio[data-key="${keyCode}"]`);
		if (eventType == "keydown"){
			audioFile.pause();
			audioFile.currentTime = 0;
			audioFile.play()
		}
	}
})

window.addEventListener("keydown", (event) => {
	playSound(event.code, event.type);
});

window.addEventListener("keyup", (event) => {
	playSound(event.code, event.type);
});

