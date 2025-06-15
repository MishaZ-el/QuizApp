interface question {
  id: number;
  option: string;
  isCorrect: boolean;
}

interface electricalQuizProps {
  question: string;
  answers: question[];
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

const ElectricalQuiz = ({ question, answers, currentQuestion, totalQuestions, onAnswer }: electricalQuizProps) => {
  return (
    <div>
      <h2>
        Вопрос номер: {currentQuestion + 1} из {totalQuestions}
      </h2>
      <h3>{question}</h3>

      <ul>
        {answers.map((answer) => (
          <li key={answer.id} onClick={() => onAnswer(answer.isCorrect)}>
            {answer.option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElectricalQuiz;
