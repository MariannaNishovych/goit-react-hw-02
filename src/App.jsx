import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  const [feedback, setFeedback] = useState(
    JSON.parse(window.localStorage.getItem("feedback")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
};

export default App;
