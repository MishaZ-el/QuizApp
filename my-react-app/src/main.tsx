import "normalize.css";
import style from "./index.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import QuizRoutes from "./QuizRoutes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QuizRoutes />
    </BrowserRouter>
  </StrictMode>
);
