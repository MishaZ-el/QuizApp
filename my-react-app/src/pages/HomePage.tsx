import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import electrical from "../assets/electrical.png";
import astronomy from "../assets/astronomy.png";
import geography from "../assets/geography.png";
import style from "../pages/Home.module.scss";
import questionsAstronomy from "../dataQuiz/dataQuizAstronomy";
import questionsGeography from "../dataQuiz/dataQuizGeography";
import questionsElectrical from "../dataQuiz/dataQuizElectrical";

const HomePage = () => {
  return (
    <div className={style.container}>
      <header>
        <img className={style.Logo} src={Logo} alt="Logo" />
        <h1>
          Увлекательная наука в формате викторин! Проверьте свои знания и
          откройте для себя новые горизонты в мире науки с нашими интерактивными
          викторинами. От астрономии до электротехники — каждый найдет что-то
          интересное для себя.
        </h1>
      </header>

      <main>
        <Link
          to="/quiz"
          state={{
            quizData: questionsElectrical,
            quizTitle: "Викторина по электротехнике",
          }}
          className={style.card}
        >
          <img
            className={style.cardImage}
            src={electrical}
            alt="Электротехника"
          />
          <p>Викторина по электротехнике</p>
        </Link>
        <Link
          to="/quiz"
          state={{
            quizData: questionsGeography,
            quizTitle: "Викторина по географии",
          }}
          className={style.card}
        >
          <img className={style.cardImage} src={geography} alt="География" />
          <p>Викторина по географии</p>
        </Link>
        <Link
          to="/quiz"
          state={{
            quizData: questionsAstronomy,
            quizTitle: "Викторина по астрономии",
          }}
          className={style.card}
        >
          <img className={style.cardImage} src={astronomy} alt="Астрономия" />
          <p>Викторина по астрономии</p>
        </Link>
      </main>
    </div>
  );
};

export default HomePage;
