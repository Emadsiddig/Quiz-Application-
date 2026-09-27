import "../index.css";

export default function QuestionDisplay({ question, selectedIndex, onSelect }) {
  return (
    <div>
      <h2>
        Q{question.id}. {question.question}
      </h2>

      <div>
        {question.choices.map(function (choice, idx) {
          const isPicked = selectedIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              style={{ background: isPicked ? "#dbeafe" : "#fff" }}
            >
              {choice}
            </button>
          );
        })}
      </div>
    </div>
  );
}