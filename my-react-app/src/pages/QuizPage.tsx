import { useState } from "react";
import QuizQuestion from "../components/QuizQuestion";
import styles from "../pages/PageQuiz.module.scss";
import { Link, useLocation } from "react-router-dom";

interface QuizData {
  text: string;
  answers: {
    id: number;
    option: string;
    isCorrect: boolean;
  }[];
}

const QuizPage = () => {
  const location = useLocation();
  const { quizData } = location.state as {
    quizData: QuizData[];
    quizTitle: string;
  };

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState("");

  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      setShowModal("Верно!");
    } else {
      setShowModal("Неверно!");
    }

    setTimeout(() => {
      setShowModal("");
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  let quizContent;

  if (showResults) {
    quizContent = (
      <div className={styles.resultsContainer}>
        <h2>Итоговый результат</h2>
        <h3>
          {score} баллов набрано из {quizData.length} - (
          {Math.round((score / quizData.length) * 100)}%)
        </h3>
        <div className={styles.buttonPosition}>
          <button className={styles.quizButton} onClick={restartQuiz}>
            Начать заново
          </button>
          <Link to="/">
            <button className={styles.quizButton}>На главную</button>
          </Link>
        </div>
      </div>
    );
  } else {
    quizContent = (
      <div className={styles.quizContainer}>
        <QuizQuestion
          question={quizData[currentQuestion].text}
          answers={quizData[currentQuestion].answers}
          currentQuestion={currentQuestion}
          totalQuestions={quizData.length}
          onAnswer={handleClick}
        />
        {showModal && (
          <div
            className={`${styles.modal} ${
              showModal === "Верно!" ? styles.correct : styles.incorrect
            }`}
          >
            {showModal}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.pageQuizContainer}>
      <div className={styles.headerBlock}>
        <h2 className={styles.pageQuizHeader}>Викторина по астрономии</h2>
      </div>
      <main className={styles.quizMain}>
        {quizContent}
        <h3 className={styles.scoreText}>Всего баллов: {score}</h3>
      </main>
    </div>
  );
};

export default QuizPage;
