import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QuizProvidor } from "../../react-quiz/src/context/QuizContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvidor>
      <App />
    </QuizProvidor>
  </React.StrictMode>
);
