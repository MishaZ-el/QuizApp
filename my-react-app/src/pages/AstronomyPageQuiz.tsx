import { useState } from "react";
import QuizQuestion from "../components/QuizQuestion";
import questionsAstronomy from "../dataQuiz/dataQuizAstronomy";
import styles from "../pages/PageQuiz.module.scss";
import { Link } from "react-router-dom";

const AstronomyPageQuiz = () => {
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
      if (currentQuestion + 1 < questionsAstronomy.length) {
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
          {score} баллов набрано из {questionsAstronomy.length} - ({Math.round((score / questionsAstronomy.length) * 100)}%)
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
          question={questionsAstronomy[currentQuestion].text}
          answers={questionsAstronomy[currentQuestion].answers}
          currentQuestion={currentQuestion}
          totalQuestions={questionsAstronomy.length}
          onAnswer={handleClick}
        />
        {showModal && <div className={`${styles.modal} ${showModal === "Верно!" ? styles.correct : styles.incorrect}`}>{showModal}</div>}
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

export default AstronomyPageQuiz;
