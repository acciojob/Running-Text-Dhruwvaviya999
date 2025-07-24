//your JS code here. If required.

const speed = document.getElementById("speed");
const p = document.getElementById("text");
speed.addEventListener("change", (e) => {
	let speedValue = parseInt(speed.value);
	let text = "We Love Programming!";
	
	if(isNaN(speedValue) || speedValue < 1 || speedValue > 10){
		return;
	}
	
	let delay = 500 / speedValue;
	p.textContent = "";
	let i = 0;
	let interval = setInterval(() => {
		p.textContent += text[i];
		i++;
		if(i === text.length){
			clearInterval(interval);
		}
	}, delay);

	speed.value = "";
})