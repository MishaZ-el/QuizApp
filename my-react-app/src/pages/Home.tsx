import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import electrical from "../assets/electrical.jpeg";
import astronomy from "../assets/astronomy.jpeg";
import geography from "../assets/geography.jpeg";

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>
          Увлекательная наука в формате викторин! Проверьте свои знания и откройте для себя новые горизонты в мире науки с нашими интерактивными викторинами. От астрономии до электротехники — каждый
          найдет что-то интересное для себя.
        </h1>
        <img src={Logo} alt="Logo" />
      </header>

      <div>
        <Link to="/electricalQuiz">
          <div>
            <img src={electrical} alt="Электротехника" />
            <p>Викторина по электротехнике</p>
          </div>
        </Link>
        <Link to="/geographyQuiz">
          <div>
            <img src={geography} alt="География" />
            <p>Викторина по географии</p>
          </div>
        </Link>
        <Link to="/astronomyQuiz">
          <div>
            <img src={astronomy} alt="Астрономия" />
            <p>Викторина по астрономии</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
