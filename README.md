⏱ Pomodoro App (Basic + Timer Functionality)

This is a simple Pomodoro Timer web app built using HTML, styled with CSS, and made functional with JavaScript. It focuses on creating a visually clean and user-friendly layout to manage tasks and track Pomodoro sessions effectively.

🧱 Structure Overview

🗒️ Task Section

 Header: Task List

-> Input Box to enter task name

-> Add Button with hover animation and primary color styling

 Note: Currently static (no dynamic task addition logic implemented yet)

⏲️ Timer Section

-> Displays "Work Mode" text

-> Dynamic Timer: starts from 25:00

-> Circular Control Buttons:

▶ Play (starts the timer)

⏸ Pause (pauses the timer)

🔁 Reset (resets timer to 25:00)

-> Stylish circular buttons using border-radius: 50%

-> Centered layout with vibrant red background and white text

-> Timer digits are large and clear using 75px font-size

📊 Stats Section

-> Displays 3 key stats in styled cards:

✅ Pomodoros Complete → 0

📅 Today’s Pomodoros → 0

🕒 Next Break → in 25:00

-> Each block has a clean background, shadow, and rounded edges

🎨 Styling and Fonts

-> External CSS file: Style.css

-> Responsive design using flex layout with wrapping and spacing

-> Used custom fonts from Google Fonts:

Poppins

Montserrat

Inter

Color Palette:

-> Blue for buttons

-> Red for Timer Section

-> Soft blue for Stats section blocks

-> Buttons and input boxes have smooth hover transitions

📜 JavaScript Functionality (app.js)

✅ Timer Logic

-> totalTime = 25 \* 60: sets session to 25 minutes

startTimer():

-> Starts countdown with setInterval()

-> Disables Play and Reset buttons while running (via cursor + pointer-events)

-> Alerts when time is up and stops the timer

pauseTimer():

-> Pauses countdown and re-enables controls

resetTimer():

-> Resets timer to full 25:00

updateDisplay():

-> Dynamically updates timer and Next Break display

🧠 Button Interactions

-> Buttons styled dynamically:

-> cursor: not-allowed when disabled

-> opacity: 0.6 and pointer-events: none for visual feedback

-> Enabled again when paused

📝 Task Display (Static for Now)

-> Task HTML structure in place

-> Trash icon included with hover effect

-> Checkbox enlarged with CSS transform: scale(1.5)

Technologies Used

-> HTML5 + CSS3 + Vanilla JavaScript

-> Font Awesome for icons

-> Google Fonts for typography


