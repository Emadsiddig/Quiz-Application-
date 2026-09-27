import './App.css' 
import QuestionsRetrieving from './QuestionsRetrieving.jsx'

import React, { useState } from 'react'
import './index.css' 
import quizQuestions from './questions' 
import Selector from './components/Selector';

function App() {

  return (
    <>
       <QuestionsRetrieving />
       <Selector />
      
    </>
  )
}

export default App
