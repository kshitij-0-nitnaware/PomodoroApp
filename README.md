⏱ Pomodoro App (Basic Version)

This is a simple Pomodoro Timer web app built using HTML and styled with CSS. The focus is on creating a visually clean and user-friendly layout to manage tasks and track Pomodoro sessions.

🧱 Structure Overview

🗒️ Task Section
Header: Task List

-> Input Box to enter task name

-> Add Button with hover animation and primary color styling

Note: Currently static (no JavaScript logic)

⏲️ Timer Section
-> Displays "Work Mode" text

-> Static Timer: 25:00

-> Circular Control Buttons:

▶ Play

⏸ Pause

🔁 Reset

-> Stylish circular buttons using border-radius: 50%

-> Centered layout with vibrant red background and white text

-> Timer digits are large and clear using 75px font-size

📊 Stats Section
Displays 3 key stats in styled cards:

✅ Pomodoros Complete → 0

📅 Today’s Pomodoros → 0

🕒 Next Break → in 25:00

-> Each block has a clean background, shadow, and rounded edges

🎨 Styling and Fonts
External CSS file: Style.css

-> Responsive design using flex layout with wrapping and spacing

-> Used custom fonts from Google Fonts:

Poppins

Montserrat

Inter

-> Color Palette:

-> Blue for buttons

-> Red for Timer Section

-> Soft blue for Stats section blocks

-> Buttons and input boxes have smooth hover transitions

🧠 UI Enhancements
-> Circular Buttons for Play/Pause/Reset improve visual clarity and interaction

-> Monospace font support for timer digits (planned) to avoid layout shift

-> Padding and spacing optimized for readability

-> Consistent shadows and border-radius for a modern look

📜 Script Setup
JavaScript file app.js is linked at the end of <body> for best performance

-> Currently empty; will be used to:

-> Add timer countdown logic

-> Handle button interactions

-> Track Pomodoro count and stats

