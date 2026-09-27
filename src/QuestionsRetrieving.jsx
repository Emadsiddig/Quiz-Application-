import { useState } from 'react'
import quizQuestions from './questions.js' 
import './question.css'

export function QuestionsRetrieving(){
   const [questionId, setQuestionId] = useState(1)
   const [doneQuestions, setDoneQuestions] = useState(() => quizQuestions.map(q => ({ ...q, selectedIndex: null })))
   function questionChecker(qId, choiceIndex) {
      const currentQuestion = doneQuestions.find(item => item.id === qId);
      if (currentQuestion && currentQuestion.selectedIndex !== null) return;
      setDoneQuestions(prev => prev.map(item => {
         if (item.id === qId) {
            return { ...item, selectedIndex: choiceIndex }
         }
         return item
      }))
   }

   function questionfilter(currentId) {
      return doneQuestions.filter(item => currentId === item.id).map(question => {
         const hasBeenAnswered = question.selectedIndex !== null;
         return (
            <div key={question.id} className="question-container">
               <h2>{question.question}</h2>
               
               <div className="radio-buttons">
                  {question.choices.map((choice, i) => {
                     let statusClass = "";

                     if (hasBeenAnswered) {
                        if (question.correctAnswerIndex === i) {
                           statusClass = "green disabled"; 
                        } else if (question.selectedIndex === i) {
                           statusClass = "red disabled"; 
                        } else {
                           statusClass = "disabled";
                        }
                     }
                     return (
                        <div key={i} onClick={() => questionChecker(question.id, i)} className={`each-radio ${statusClass}`}>
                           <div className="question">
                              {choice}
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div> 
            )
         })
   }

   const filteredElement = questionfilter(questionId)
   
   return (
      <>
         {filteredElement}
      </>
   )
}

export default QuestionsRetrieving