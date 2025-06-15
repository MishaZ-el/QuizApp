import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ElectricalQuizPage from "./pages/ElectricalPageQuiz";

const QuizRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/electricalQuiz" element={<ElectricalQuizPage />} />
    </Routes>
  );
};

export default QuizRoutes;
