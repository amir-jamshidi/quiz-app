import { useEffect, useState } from "react";
import HeaderSection from "./Components/HeaderSection";
import QuizSection from "./Components/QuizSection";
import QuizSectionEnd from "./Components/QuizSectionEnd";
import QuizSectionStart from "./Components/QuizSectionStart";

const App = () => {
  const [startPage, setStartPage] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [endPage, setEndPage] = useState(false);

  useEffect(() => {
    getQuiz();
  }, []);

  const getQuiz = async () => {
    const response = await fetch("http://localhost:9000/quiz");
    const result = await response.json();
    setQuiz(result);
  };

  const showFinalResult = (trueCount, falseCount) => {
    console.log(trueCount, falseCount);
    setEndPage(true);
  };

  return (
    <div className="w-full min-h-screen bg-gray-800">
      <div className="container">
        <HeaderSection  />
        {endPage ? (
          <QuizSectionEnd />
        ) : (
          <>
            {startPage ? (
              <QuizSectionStart quizCount={quiz.length} setStartPage={setStartPage} />
            ) : (
              <QuizSection quizes={quiz} showFinalResult={showFinalResult} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
