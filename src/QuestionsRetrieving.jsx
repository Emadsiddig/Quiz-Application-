import { useState } from 'react'
import quizQuestions from './questions.js' 


export function QuestionsRetrieving(){
   const [questionId,setQuestionId] = useState(1)

   function questionfilter(questionId){
      return quizQuestions.filter(item => questionId === item.id).map(question =>{
         return (
            <div key={question.id} className="question-container">
               <h2>{question.question}</h2>
               
               <div  className="radio-buttons">
                  {question.choices.map((choice,i) => {return(
                     <div key={crypto.randomUUID()} className="each-radio">
                        <label htmlFor={i}>
                           <input type='radio' name='question' id={i}/>
                           {choice}
                        </label>
                     </div>
                  )})}
               </div>
            </div> 
         )
      })
   }
   const filteredElement = questionfilter(questionId)
   return(
      <>
         {filteredElement}
      </>
   )
}

export default QuestionsRetrieving