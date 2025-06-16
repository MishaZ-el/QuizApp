import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ElectricalPageQuiz from "./pages/ElectricalPageQuiz";
import GeographyPageQuiz from "./pages/GeographyPageQuiz";
import AstronomyPageQuiz from "./pages/AstronomyPageQuiz";

const QuizRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/electricalQuiz" element={<ElectricalPageQuiz />} />
      <Route path="/geographyQuiz" element={<GeographyPageQuiz />} />
      <Route path="/astronomyQuiz" element={<AstronomyPageQuiz />} />
    </Routes>
  );
};

export default QuizRoutes;
