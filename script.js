//your JS code here. If required.
const p = document.getElementById("text");
const speed = document.getElementById("speed");
let speedPerChar = 500 / parseInt(speed.value);
let text = "We Love Programming!";

speed.addEventListener("change", (e) => {
	p.textContent = "";
	if(!speed) return;
	let i = 0;
	let interval = setInterval(() => {
		p.textContent += text[i];
		i++;
		if(i === text.length){
			clearInterval(interval);
		}
	}, speedPerChar);
	speed.value = "";
})