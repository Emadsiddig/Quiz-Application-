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
- Quiz title
- Final score when every question is answered
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
│   │   ├── QuestionsRetrieving.jsx
│   │   ├── Selector.jsx
│   │   └── questions.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── index.jsx
├── index.html
├── package.json
└── README.md
```

## Live demo

[https://guizapplication.netlify.app/](https://guizapplication.netlify.app/)

## Run locally

You need [Node.js](https://nodejs.org/) installed. It includes npm.

In this project folder, install the dependencies, then start the app:

```bash
npm install
npm run dev
```

Open the address printed in the terminal. It is usually [http://localhost:5173](http://localhost:5173).

Stop the server with `Ctrl+C` in that terminal.

To check the production build instead:

```bash
npm run build
npm run preview
```