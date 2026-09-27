# Quiz-Application

A responsive and interactive quiz application built with React.js. The application allows users to answer multiple-choice questions, navigate between questions using **Previous** and **Next** buttons, and receive immediate feedback showing whether their selected answer is correct or incorrect.

After answering a question, an **Explanation** section is displayed to help the user understand the answer.

The application also includes a question navigation sidebar that shows the user's progress through the quiz.

## Features

- Multiple-choice quiz questions
- Previous and Next question navigation
- Question number navigation
- Answer validation
- Correct answer indication
- Incorrect answer indication
- Explanation displayed after answering
- Quiz progress tracking
- Responsive and clean user interface

## Technologies Used

- **React.js** — Frontend library
- **JavaScript (ES6+)** — Application logic
- **HTML5** — Application structure
- **CSS3** — Styling and responsive layout
- **Vite** — Development and build tool

## Project Structure

```text
quiz-app/
├── src/
│   ├── components/
│        └──QuestionDisplay.jsx
│        └──Selector.jsx
│        └──QuestionsRetrieving.jsx
│        └──questions.js
│   ├── App.jsx
│   ├── App.css
│   ├── question.css
│   └── main.jsx
│
├── public/
├── package.json
└── README.md