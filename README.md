# ⏱ Pomodoro App (Basic + Timer + Task Functionality)

This is a simple **Pomodoro Timer Web App** built using **HTML**, styled with **CSS**, and powered by **Vanilla JavaScript**. It helps users manage tasks and track focused Pomodoro sessions efficiently.

---

## 🧱 Structure Overview

### 🗒️ Task Section

**Header**: Task List

-> Input Box to enter task name  
-> Add Button with hover animation and primary color styling  
-> ✅ **Dynamic Task Adding**: Tasks now get added dynamically via button click or pressing Enter  
-> ✅ **Each task includes**:
  -> A checkbox to mark task as complete
  -> A delete (trash) icon to remove the task
-> ✅ **Checkbox Functionality**:
  -> When checked → task text gets a `line-through` and opacity reduced
  -> When unchecked → text returns to normal
-> ✅ **Task Deletion**:
  -> Click the trash icon to remove the task from the DOM and localStorage
-> ✅ **Local Storage Support**:
  -> Tasks persist after page reload
  -> All tasks are stored in `localStorage` as an array of strings

### ⏲️ Timer Section

-> Displays "Work Mode" text
-> Dynamic Timer starts from `25:00`
-> Control Buttons:
  -> ▶ **Play**: Starts countdown
  -> ⏸ **Pause**: Pauses the countdown
  -> 🔁 **Reset**: Resets timer to 25:00
-> Stylish circular buttons using `border-radius: 50%`
-> Large, centered digits using `font-size: 75px`
-> Red background for focus and visibility

### 📊 Stats Section

-> ✅ **Pomodoros Complete** → 0 (Static for now)
-> ✅ **Today’s Pomodoros** → 0 (Static for now)
-> ✅ **Next Break** → Countdown in sync with main timer
-> Each stat shown in visually styled cards with shadow, border-radius, and soft colors

### 🎨 Styling and Fonts

-> External CSS file: `style.css`
-> Responsive layout using flexbox and wrapping
-> Google Fonts used:
  -> Poppins
  -> Montserrat
  -> Inter
-> Color Palette:
  -> Blue for action buttons
  -> Red for Timer section
  -> Light blue/gray for stat cards
-> Hover and transition effects on buttons and inputs

### 📜 JavaScript Functionality (`app.js`)

#### ✅ Timer Logic

-> `totalTime = 25 * 60` for 25-minute session
-> `startTimer()`:
  -> Begins countdown using `setInterval()`
  -> Disables Play and Reset buttons
  -> Shows alert when time is up
-> `pauseTimer()`:
  -> Pauses timer and re-enables controls
-> `resetTimer()`:
  -> Resets timer to full 25:00
-> `updateDisplay()`:
  -> Updates Timer and Next Break display in real-time
-> `setButtonState()`:
  -> Adds/removes disabled styling using classes

#### ✅ Task Functionality

-> `addTask()`:
  -> Adds task to UI and saves to localStorage
  -> Validates input to prevent empty tasks
-> `showList(task)`:
  -> Generates HTML for each task with checkbox and delete icon
  -> Adds event listeners for checkbox and delete
-> `taskTable.addEventListener("click", ...)`:
  -> Uses **event delegation** to handle checkbox interactions
-> `localStorage`:
  -> Stores and retrieves task array on load using `JSON.stringify` / `JSON.parse`

### 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Font Awesome** (for icons)
- **Google Fonts** (for typography)
- **Local Storage API**

### ✅ Future Improvements

- Add Pomodoro count tracker
- Add short/long break modes





