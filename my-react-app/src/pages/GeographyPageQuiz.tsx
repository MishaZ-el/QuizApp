import { useState } from "react";
import QuizQuestion from "../components/QuizQuestion";
import questionsGeography from "../dataQuiz/dataQuizGeography";

const GeographyPageQuiz = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questionsGeography.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  let quizContent;

  if (showResults) {
    quizContent = (
      <div>
        <h2>Итоговый результат</h2>
        <h3>
          {score} баллов набрано из {questionsGeography.length} - ({Math.round((score / questionsGeography.length) * 100)}%)
        </h3>
        <button onClick={restartQuiz}>Начать заново</button>
      </div>
    );
  } else {
    quizContent = (
      <QuizQuestion
        question={questionsGeography[currentQuestion].text}
        answers={questionsGeography[currentQuestion].answers}
        currentQuestion={currentQuestion}
        totalQuestions={questionsGeography.length}
        onAnswer={handleClick}
      />
    );
  }

  return (
    <div>
      <h2>Викторина по географии</h2>
      <h3>Всего баллов: {score}</h3>
      {quizContent}
    </div>
  );
};

export default GeographyPageQuiz;
