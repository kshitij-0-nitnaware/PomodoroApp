let taskAddButton = document.getElementById("taskAddButton");
let taskInput = document.getElementById("taskInput");

let arr = [];

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

window.addEventListener("load", () => {
  const savedTasks = localStorage.getItem("arr");
  if (savedTasks) {
    arr = JSON.parse(savedTasks);
    arr.forEach((task) => {
      showList(task);
    });
  }
});

function clearList() {
  document.getElementById("taskInput").value = "";
}

function showList(task) {
  const taskTable = document.getElementById("taskTable");

  // Create single container for task
  const Tasks = document.createElement("div");
  Tasks.className = "Tasks";
  Tasks.style.marginBottom = "1rem";

  // Create task content
  Tasks.innerHTML = `
    <div style="display: flex; align-items: center;">
      <input type="checkbox" id="Check"; style="transform: scale(1.5); margin-right: 10px; cursor: pointer;"/>
      <p style="margin: 0; font-size: 20px; opacity: 0.7;">${task}</p>
    </div>
    <i class="fa-solid fa-trash delete" style="cursor: pointer;"></i>
  `;

  const deleteIcon = Tasks.querySelector(".delete");
  deleteIcon.addEventListener("click", () => {
    Tasks.remove();
    const index = arr.indexOf(task);
    if (index > -1) {
      arr.splice(index, 1);
      localStorage.setItem("arr", JSON.stringify(arr));
    }
  });

  taskTable.addEventListener("click", (event) => {
    if (event.target.type === "checkbox") {
      const taskText = event.target.nextElementSibling;
      if (event.target.checked) {
        taskText.style.textDecoration = "line-through";
        taskText.style.opacity = "0.3";
      } else {
        taskText.style.textDecoration = "none";
        taskText.style.opacity = "0.7";
      }
    }
  });

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
