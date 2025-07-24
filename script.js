const speedInput = document.getElementById("speed");
    const p = document.getElementById("text");

    speedInput.addEventListener("change", () => {
      const speedValue = parseInt(speedInput.value);
      const text = "We Love Programming!";

      if (isNaN(speedValue) || speedValue < 1 || speedValue > 10) {
        alert("Please enter a number between 1 and 10.");
        return;
      }

      const delay = 500 / speedValue;
      p.textContent = "";
      let i = 0;

      const interval = setInterval(() => {
        p.textContent += text[i];
        i++;
        if (i === text.length) {
          clearInterval(interval);
        }
      }, delay);

      speedInput.value = "";
    });