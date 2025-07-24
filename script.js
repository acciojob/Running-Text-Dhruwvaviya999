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
  output.textContent = text[0]; // ⬅️ Set 'W' immediately
  input.value = "";

  // ⬇️ Start from index 1 in the next tick
  setTimeout(() => {
    let i = 1;
    const interval = setInterval(() => {
      output.textContent += text[i];
      i++;
      if (i === text.length) {
        clearInterval(interval);
      }
    }, delay);
  }, 0); // ⬅️ Push to next event loop tick
}

input.addEventListener("change", renderText);
