let totalTime = 25 * 60;
let intervalId = null;

const display = document.querySelector(".Timer-section h1");
const Display = document.querySelector(".next-Break p");
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

function updateDisplay() {
  const minutes = Math.floor(totalTime / 60);
  const second = totalTime % 60;
  display.textContent = `${String(minutes).padStart(2, "0")}:${String(
    second
  ).padStart(2, "0")}`;
  Display.textContent = `${String(minutes).padStart(2, "0")}:${String(
    second
  ).padStart(2, "0")}`;
}

function setButtonState(button, isDisabled) {
  if (isDisabled) {
    button.classList.add("disabled-btn");
  } else {
    button.classList.remove("disabled-btn");
  }
}

function startTimer() {
  if (intervalId === null && totalTime > 0) {
    setButtonState(playButton, true);
    setButtonState(resetButton, true);

    intervalId = setInterval(() => {
      totalTime--;
      updateDisplay();

      if (totalTime <= 0) {
        clearInterval(intervalId);
        intervalId = null;

        setButtonState(playButton, false);
        setButtonState(resetButton, false);

        alert("Time's up!");
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;

  setButtonState(playButton, false);
  setButtonState(resetButton, false);
}

function resetTimer() {
  clearInterval(intervalId);
  intervalId = null;
  totalTime = 25 * 60;
  updateDisplay();
}

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

updateDisplay();
