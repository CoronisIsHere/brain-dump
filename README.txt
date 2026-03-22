README.txt  
Assignment 2 - Leah Mayer

------------------------------------------------------------
OVERVIEW
------------------------------------------------------------
This website is a multi-page personal “Info Dump” site that showcases interests, historical research on the Titanic and RMS Carpathia, and media content. The project builds directly on Assignment 1 (A1), where all original HTML structure and content were reused and expanded upon using JavaScript interactivity as required in this assignment.

All code from A1 was retained and enhanced according to the project specifications.

------------------------------------------------------------
FILE STRUCTURE
------------------------------------------------------------
/project-folder
│
├── page1.html      (Home page)
├── page2.html      (Carpathia / Titanic information + quiz + table)
├── page3.html      (Media page)
├── main.js         (JavaScript functionality)
├── images/         (all images used)
├── audio/          (audio files)
├── videos/         (video files)
├── Code Review.pdf
├── Design.pdf
└── README.txt

------------------------------------------------------------
RELATIVE PATHS USED
------------------------------------------------------------
- Navigation between pages:
  page1.html → page2.html → page3.html

- Script file:
  <script src="main.js" defer></script>

- Images:
  images/carpathia1.jpg
  images/carpathia2.jpg
  images/carpathia3.jpg

- Audio:
  audio/Drag Path - TOP.mp3

- Video:
  videos/Devils-Day.mp4

------------------------------------------------------------
FUNCTION DOCUMENTATION
------------------------------------------------------------

1. Navigation Highlighting (main.js)
Purpose:
Highlights the current page in the navigation menu.

Input:
- Current URL path (window.location.pathname)

Output:
- Changes style (color and boldness) of active link

Example:
If user is on page2.html, the “Carpathia” link is highlighted.

------------------------------------------------------------

2. setTheme(theme)
Purpose:
Changes the colour scheme of the website.

Input:
- theme (string): "light", "dark", or "ocean"

Output:
- Updates background and text colors of the page

Example:
setTheme("dark") → dark background with white text

------------------------------------------------------------

3. Table Hover Event Handler
Purpose:
Adds interactivity when the user hovers over table rows.

Input:
- Mouse hover (mouseover / mouseout events)

Output:
- Row changes color when hovered

Example:
Hovering over a row highlights it in green.

------------------------------------------------------------

4. sortTable()
Purpose:
Sorts the ship distance table from closest to farthest.

Input:
- User clicks “Sort Table” button

Output:
- Table rows reorder based on distance values
- Displays notification alert

Example:
5 miles → 7 miles → 58 miles

------------------------------------------------------------

5. Quiz System (quizData, loadQuiz, submitQuiz)

quizData:
Stores all quiz questions, options, and answers.

loadQuiz():
Purpose:
Displays quiz questions dynamically on page load.

Input:
- quizData array

Output:
- Generates radio button questions in the HTML

submitQuiz():
Purpose:
Calculates user score and displays result.

Input:
- User-selected answers

Output:
- Score out of 10
- Conditional feedback message

Example:
Score = 8 → “Great job! You know a lot!”

------------------------------------------------------------
CONDITIONAL LOGIC USED
------------------------------------------------------------
Conditionals are used in multiple areas:

1. Navigation highlighting (if current page matches)
2. Theme selection (if theme === "dark", etc.)
3. Quiz grading:
   - Perfect score
   - Good score
   - Average score
   - Needs improvement

These demonstrate decision-making based on user input.

------------------------------------------------------------
ASSETS LIST
------------------------------------------------------------
Images:
- carpathia1.jpg
- carpathia2.jpg
- carpathia3.jpg
- Caterpillar.png

Audio:
- Drag Path - TOP.mp3

Video:
- Devils-Day.mp4

External Media:
- YouTube embedded video

------------------------------------------------------------
REFERENCES (ACM FORMAT)
------------------------------------------------------------
[1] Encyclopaedia Britannica. Carpathia. 
Available: https://www.britannica.com/topic/Carpathia

[2] Wikipedia. RMS Carpathia. 
Available: https://en.wikipedia.org/wiki/RMS_Carpathia

[3] YouTube. Embedded video used in media page. 
Available: https://www.youtube.com/

------------------------------------------------------------
DEPENDENT CODE STRUCTURES
------------------------------------------------------------
- Navigation highlighting depends on HTML element IDs (homeLink, carpathiaLink, mediaLink)
- Quiz system depends on:
  quizData → loadQuiz() → submitQuiz()
- Table sorting depends on:
  HTML table structure (distanceTable)
- Theme changer depends on:
  button clicks calling setTheme()

------------------------------------------------------------
NOTES
------------------------------------------------------------
- The website is fully interconnected through navigation on all pages.
- JavaScript enhances user interaction without changing page structure.
- Live Server is recommended for proper media loading (YouTube embed).

------------------------------------------------------------
END OF README
------------------------------------------------------------
