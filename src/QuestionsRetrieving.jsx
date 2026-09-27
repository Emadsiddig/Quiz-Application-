import { useState } from 'react'
import quizQuestions from './questions.js' 
import './question.css'

export function QuestionsRetrieving({questionId}){
   //The questionId will be from the app, either set by nex and prev or set by the buttons of the questions

   // This line is reading the questions from the file and adding to all questins selectedIndex to track the selected one
   const [doneQuestions, setDoneQuestions] = useState(() => quizQuestions.map(q => ({ ...q, selectedIndex: null })))
   //This is the function of the question checker, which will triger on the click of the div which will be clicked
   //each div will pass it's index if it get's clicked
   function questionChecker(qId, choiceIndex) {

   //This line is finding the item which was clicked
      const currentQuestion = doneQuestions.find(item => item.id === qId);

      //whenever the selectedIndex has a value we won't do anything, it will imediately return
      if (currentQuestion && currentQuestion.selectedIndex !== null) return;

      //if it doesn't return by then, we will initialize the selectedIndex to a value 
      setDoneQuestions(prev => prev.map(item => {
         if (item.id === qId) {
            return { ...item, selectedIndex: choiceIndex }
         }
         return item
      }))
   }

   function questionfilter(currentId) {
      // filtering the question which is current and mapping over it to display it on the screen
      return doneQuestions.filter(item => currentId === item.id).map(question => {
         //This will have a value if the selected index is not null/ if no div is clicked
         const hasBeenAnswered = question.selectedIndex !== null;
         return (
            <div key={question.id} className="question-container">
               <h2>{question.question}</h2>
               
               <div className="radio-buttons">
               {/* Mapping over the choices and keeping track of their indices using i*/}
                  {question.choices.map((choice, i) => {
                     let statusClass = "";
                     // This will only run if either choices were clicked
                     if (hasBeenAnswered) {
                        if (question.correctAnswerIndex === i) {
                           statusClass = "green disabled"; 
                        } else if (question.selectedIndex === i) {
                           statusClass = "red disabled"; 
                        } else {
                           statusClass = "disabled";
                        }
                     }
                     //This will return every choice while having the onclick function which will pass question id and index
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