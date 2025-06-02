let taskAddButton = document.getElementById("taskAddButton");
let taskInput = document.getElementById("taskInput");
let pomodoroCount = 0;
let completedPomodoros = 0;
let pomodoroDisplay = document.querySelector(".stats-section div:nth-child(2) p");
let completedDisplay = document.querySelector(".stats-section div:first-child p");
let taskTable = document.getElementById("taskTable");
let modeDisplay = document.querySelector(".Timer-section p");
let isWorkMode = true;

let arr = [];

localStorage.removeItem("completedPomodoros");
completedDisplay.textContent = "0";

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
  
  const savedCount = localStorage.getItem("pomodoroCount");
  if (savedCount) {
    pomodoroCount = parseInt(savedCount);
    pomodoroDisplay.textContent = pomodoroCount;
  }

  const savedCompleted = localStorage.getItem("completedPomodoros");
  if (savedCompleted) {
    completedPomodoros = parseInt(savedCompleted);
    completedDisplay.textContent = completedPomodoros;
  }
});

function clearList() {
  document.getElementById("taskInput").value = "";
}


taskTable.addEventListener("click", (event) => {
  if (event.target.type === "checkbox") {
    const taskText = event.target.nextElementSibling;
    if (event.target.checked) {
      taskText.style.textDecoration = "line-through";
      taskText.style.opacity = "0.3";
      completedPomodoros++;
      completedDisplay.textContent = completedPomodoros;
      localStorage.setItem("completedPomodoros", completedPomodoros);
    } else {
      taskText.style.textDecoration = "none";
      taskText.style.opacity = "0.7";
      completedPomodoros--;
      completedDisplay.textContent = completedPomodoros;
      localStorage.setItem("completedPomodoros", completedPomodoros);
    }
  }
});

function showList(task) {
  const taskTable = document.getElementById("taskTable");

  // Create single container for task
  const Tasks = document.createElement("div");
  Tasks.className = "Tasks";
  Tasks.style.marginBottom = "1rem";


  Tasks.innerHTML = `
    <div style="display: flex; align-items: center;">
      <input type="checkbox" id="Check"; style="transform: scale(1.5); margin-right: 10px; cursor: pointer;"/>
      <p style="margin: 0; font-size: 20px; opacity: 0.7;">${task}</p>
    </div>
    <i class="fa-solid fa-trash delete" style="cursor: pointer;"></i>
  `;

  const deleteIcon = Tasks.querySelector(".delete");
  deleteIcon.addEventListener("click", () => {
    const checkbox = Tasks.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      completedPomodoros--;
      completedDisplay.textContent = completedPomodoros;
      localStorage.setItem("completedPomodoros", completedPomodoros);
    }
    
    Tasks.remove();
    const index = arr.indexOf(task);
    if (index > -1) {
      arr.splice(index, 1);
      localStorage.setItem("arr", JSON.stringify(arr));
      pomodoroCount--;
      pomodoroDisplay.textContent = pomodoroCount;
      localStorage.setItem("pomodoroCount", pomodoroCount);
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
  
  pomodoroCount++;
  pomodoroDisplay.textContent = pomodoroCount;
  localStorage.setItem("pomodoroCount", pomodoroCount);
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

        if (isWorkMode) {
          isWorkMode = false;
          modeDisplay.textContent = "Break Mode";
          totalTime = 5 * 60;
          updateDisplay();
          alert("Work session complete! Starting break...");
          startTimer(); 
        } else {
          isWorkMode = true;
          modeDisplay.textContent = "Work Mode";
          totalTime = 25 * 60;  
          updateDisplay();
          alert("Break complete! Ready for next work session?");
        }
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
 
  isWorkMode = true;
  modeDisplay.textContent = "Work Mode";
  totalTime = 25 * 60;  
  updateDisplay();
}

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

updateDisplay();
