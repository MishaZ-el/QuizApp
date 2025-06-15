import { useState } from "react";
import ElectricalQuiz from "../components/ElectricalQuiz";
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
        <h1>Итоговый результат</h1>
        <h2>
          {score} баллов набрано из {questionsElectrical.length} - ({Math.round((score / questionsElectrical.length) * 100)}%)
        </h2>
        <button onClick={restartQuiz}>Начать заново</button>
      </div>
    );
  } else {
    quizContent = (
      <ElectricalQuiz
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
      <h1>Викторина по электротехнике</h1>
      <h2>Всего баллов: {score}</h2>
      {quizContent}
    </div>
  );
};

export default ElectricalPageQuiz;
