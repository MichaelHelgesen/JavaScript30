const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");


function getTime() {
	const now = new Date;
	const hour = now.getHours();
	const minute = now.getMinutes();
	const second = now.getSeconds();
	minuteHand.style.transform = `rotate(${minute * 6 + 90}deg)`
	secondHand.style.transform = `rotate(${second * 6 + 90}deg)`
	hourHand.style.transform  = `rotate(${hour * 30 + 90}deg)`
}


getTime()
setInterval(getTime, 1000);
