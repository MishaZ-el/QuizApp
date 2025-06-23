import styles from "../components/QuizQuestion.module.scss";

interface question {
  id: number;
  option: string;
  isCorrect: boolean;
}

interface quizProps {
  question: string;
  answers: question[];
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizQuestion = ({
  question,
  answers,
  currentQuestion,
  totalQuestions,
  onAnswer,
}: quizProps) => {
  return (
    <div>
      <h2 className={styles.questionText}>
        Вопрос номер: {currentQuestion + 1} из {totalQuestions}
      </h2>
      <h3>{question}</h3>

      <ul>
        {answers.map((answer) => (
          <li
            key={answer.id}
            className={styles.answerOption}
            onClick={() => onAnswer(answer.isCorrect)}
          >
            {answer.option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;
