import quizQuestions from './questions.js' 
function RenderingPage({id,question,correctAnsweredIndex,explanation,choices}){
   return(
      <>
         
      </>
   )
}
export function QuestionsRetrieving(){
     return(
        <>
           {quizQuestions.map(question => {
            return(
               <RenderingPage key={question.id}
               id={question.id}
               question={question.question}
               choices={question.choices}
               correctAnsweredIndex={question.correctAnswerIndex}
               explanation={question.explanation}
               />
            );
           })}
        </>
     )
}

export default QuestionsRetrieving