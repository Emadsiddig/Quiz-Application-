import './App.css' 
import QuestionsRetrieving from './QuestionsRetrieving.jsx'

import React, { useState } from 'react'
import './index.css' 
import quizQuestions from './questions' 

function App() {
  const [questionId, setQuestionId] = useState(1)
  return (
    <>
       <QuestionsRetrieving questionId={questionId} setQuestionId={setQuestionId}/>
      
    </>
  )
}

export default App
