import './App.css'
import QuestionsRetrieving from './components/QuestionsRetrieving.jsx'
import Selector from './components/Selector'
import quizQuestions from './components/questions.js'
import { useState } from 'react'
import './index.css'

function App() {
  const [questionId, setQuestionId] = useState(1) // container to store the current question and also to set the current question
  const [selectedAnswers, setSelectedAnswers] = useState({}) // for handling the selected question on the sider bar

  // { Prev & Next FUnctionality }


  // Handle prev functionality
  const handlePrev = () => {
    if (questionId > 1) {
      setQuestionId(questionId - 1)
    }
  }

  // Handle next functionality
  const handleNext = () => {
    if (questionId < quizQuestions.length - 1) {
      setQuestionId(questionId + 1)
    }
  }

  // this is the handler function used to handles the answers user chose from that  questions retrieving component which is handling the questions and answers
  function handleAnswer(qId, choiceIndex) {
    setSelectedAnswers(prev => ({ ...prev, [qId]: choiceIndex }))
  }

  // function that is managing the questions statuses like done with correct or incorrect or not attempted
  const currentStatus = {}
  for (let i = 0; i < quizQuestions.length; i++) {
    const q = quizQuestions[i]
    const picked = selectedAnswers[q.id]

    if (picked === undefined) {
      currentStatus[q.id] = "Not Attempted"
    } else if (picked === q.correctAnswerIndex) {
      currentStatus[q.id] = "Correct"
    } else {
      currentStatus[q.id] = "Wrong"
    }
  }

  return (
    <div style={{ display: "flex", gap: "40px", padding: "24px" }}>

      {/* Questions with answers*/}
      <div>
        <QuestionsRetrieving questionId={questionId} onAnswer={handleAnswer} /><br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button style={{ width: "90px", padding: "5px" }} onClick={handlePrev} disabled={questionId == 1}>Prev</button>
          <button style={{ width: "90px", padding: "5px", marginLeft: "10px" }} onClick={handleNext} disabled={questionId == quizQuestions.length - 1}>Next</button>
        </div>
      </div>

      {/* SideBar */}
      <div>
        <div className="header" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
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
  )
}

export default App