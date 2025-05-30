let taskAddButton = document.getElementById("taskAddButton");

let arr = [];

function clearList() {
  document.getElementById("taskInput").value = "";
}

function showList(task) {
  const taskTable = document.getElementById("taskTable");

  const Tasks = document.createElement("div");
  Tasks.className = "Tasks";
  Tasks.style.display = "flex";
  Tasks.style.alignItems = "center";
  Tasks.style.justifyContent = "space-between";
  Tasks.style.margin = "10px 0";
  Tasks.style.marginBottom = "0.5rem";

  Tasks.innerHTML = `
    <div style="display: flex; align-items: center;">
      <input type="checkbox" style="transform: scale(1.5); margin-right: 10px;"/>
      <p style="margin: 0; font-size: 20px; opacity: 0.7;">${task}</p>
    </div>
    <i class="fa-solid fa-trash" style="cursor: pointer;"></i>
  `;

  taskTable.appendChild(Tasks);
}

function addTask() {
  const inputTask = document.getElementById("taskInput").value.trim();

  if (!inputTask) {
    alert("Please fill all the fields");
    return;
  }

  arr.push(inputTask);
  localStorage.setItem("arr", JSON.stringify(arr));
  showList(inputTask);
  clearList();
}

taskAddButton.addEventListener("click", addTask);

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
