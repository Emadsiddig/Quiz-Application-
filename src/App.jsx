import './App.css'
import QuestionsRetrieving from './components/QuestionsRetrieving.jsx'
import Selector from './components/Selector'
import quizQuestions from './components/questions.js'
import { useState } from 'react'
import './index.css'

function App() {
  const [questionId, setQuestionId] = useState(1) // container to store the current question and also to set the current question
  const [selectedAnswers, setSelectedAnswers] = useState({}) // for handling the selected question on the sider bar
  const [showScore, setShowScore] = useState(false)

  // { Prev & Next FUnctionality }

  // Handle prev functionality
  const handlePrev = () => {
    if (questionId > 1) {
      setQuestionId(questionId - 1)
    }
  }

  // Handle next functionality
  const handleNext = () => {
    if (questionId < quizQuestions.length) {
      setQuestionId(questionId + 1)
    }
  }

  // this is the handler function used to handles the answers user chose from that  questions retrieving component which is handling the questions and answers
  function handleAnswer(qId, choiceIndex) {
    setSelectedAnswers(prev => ({ ...prev, [qId]: choiceIndex }))
  }

  // function that is managing the questions statuses like done with correct or incorrect or not attempted
  const currentStatus = {}
  let answeredCount = 0
  let correctCount = 0
  for (let i = 0; i < quizQuestions.length; i++) {
    const q = quizQuestions[i]
    const picked = selectedAnswers[q.id]

    if (picked === undefined) {
      currentStatus[q.id] = "Not Attempted"
    } else if (picked === q.correctAnswerIndex) {
      currentStatus[q.id] = "Correct"
      answeredCount = answeredCount + 1
      correctCount = correctCount + 1
    } else {
      currentStatus[q.id] = "Wrong"
      answeredCount = answeredCount + 1
    }
  }

  const quizCompleted = answeredCount === quizQuestions.length
  const currentQuestion = quizQuestions.find(q => q.id === questionId)
  const showExplanation = !showScore && selectedAnswers[questionId] !== undefined

  return (
    <div className="page">
      <h1 className="quiz-title">Problem solving Quiz</h1>
      <div className="container">

        {/* Questions with answers*/}
        <div className="question-buttons">
          {showScore ? (
            <div className="quiz-completed">
              <h2>Quiz is completed</h2>
              <p>Your score is {correctCount} out of {quizQuestions.length}.</p>
            </div>
          ) : (
            <>
              <QuestionsRetrieving questionId={questionId} onAnswer={handleAnswer} /><br />
              <div className="pre-next-div">
                <button onClick={handlePrev} disabled={questionId == 1}>Prev</button>
                {quizCompleted ? (
                  <button onClick={() => setShowScore(true)}>Score</button>
                ) : (
                  <button onClick={handleNext} disabled={questionId == quizQuestions.length}>Next</button>
                )}
              </div>
            </>
          )}
        </div>

        {/* SideBar */}
        <div className="side-bar">
          <div className="header">
            <h3> question {questionId}/{quizQuestions.length}</h3>
            <h3>Need Help ?</h3>
          </div>
          <Selector
            currentStatus={currentStatus}
            activeId={questionId}
            onSelectQuestion={setQuestionId}
          />
        </div>
      </div>

      {showExplanation && (
        <div className="explanation">
          <h3>Explanation</h3>
          <p>{currentQuestion.explanation}</p>
        </div>
      )}
    </div>
  )
}

export default App
