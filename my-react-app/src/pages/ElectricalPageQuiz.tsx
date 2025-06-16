import { useState } from "react";
import QuizQuestion from "../components/QuizQuestion";
import questionsElectrical from "../dataQuiz/dataQuizElectrical";

const ElectricalPageQuiz = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questionsElectrical.length) {
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
          {score} баллов набрано из {questionsElectrical.length} - ({Math.round((score / questionsElectrical.length) * 100)}%)
        </h3>
        <button onClick={restartQuiz}>Начать заново</button>
      </div>
    );
  } else {
    quizContent = (
      <QuizQuestion
        question={questionsElectrical[currentQuestion].text}
        answers={questionsElectrical[currentQuestion].answers}
        currentQuestion={currentQuestion}
        totalQuestions={questionsElectrical.length}
        onAnswer={handleClick}
      />
    );
  }

  return (
    <div>
      <h2>Викторина по электротехнике</h2>
      <h3>Всего баллов: {score}</h3>
      {quizContent}
    </div>
  );
};

export default ElectricalPageQuiz;
