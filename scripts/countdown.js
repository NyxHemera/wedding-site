const weddingDate = new Date(2018, 4, 26, 20);
const day = 24 * 60 * 60;
const hour = 60 * 60;
const minute = 60;
const second = 1;
let timeUntil;

let countdown = new Vue({
	el: '.countdown',
	data: {
		day: 0,
		hour: 0,
		minute: 0,
		second: 0
	}
});

setTimeUntil();

function setTimeUntil() {
	timeUntil = Math.floor((weddingDate - new Date()) / 1000);
	updateCountdown();
	setInterval(updateCountdown, 1000);
}

function updateCountdown() {
	timeUntil--;
	countdown.day = Math.floor(timeUntil / day);
	let timeAfterDays = timeUntil % day;
	countdown.hour = Math.floor(timeAfterDays / hour);
	let timeAfterHours = timeAfterDays % hour;
	countdown.minute = Math.floor(timeAfterHours / minute);
	countdown.second = timeAfterHours % minute;
}