const input = document.getElementById('speed');
function renderText() {
  const output = document.getElementById('text');
  const text = "We love Programming!";
  const speed = parseInt(input.value);

  if (isNaN(speed) || speed < 1 || speed > 10) {
	alert("Please enter a number between 1 and 10.");
	return;
  }

  const delay = 500 / speed;
  output.textContent = "W";

  let i = 1;
  const interval = setInterval(() => {
	output.textContent += text[i];
	i++;
	if (i === text.length) {
	  clearInterval(interval);
	}
  }, delay);

	input.value = "";
}

input.addEventListener("change", renderText);