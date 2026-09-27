import quizQuestions from "../questions";
import "./selector.css";

export default function Selector({ currentStatus = {}, activeId, onSelectQuestion }) {
  //getting status of the questions from the app.jsx
  function getStatusClass(id) {
    const status = currentStatus[id];
    if (status === "Correct") return "correct";
    if (status === "Wrong") return "wrong";
    return "not-attempted";
  }

  return (
    <div className="selector-container">
      {quizQuestions.map(function (q) {
        let className = "question-circle " + getStatusClass(q.id);
        if (q.id === activeId) {
          className += " active";
        }
        return (
          <button
            key={q.id}
            className={className}
            onClick={() => onSelectQuestion(q.id)}
          >
            {q.id}
          </button>
        );
      })}
    </div>
  );
}