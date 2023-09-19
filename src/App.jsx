import { useEffect, useState } from "react";
import FooterSection from "./Components/FooterSection";
import Footer from "./Components/FooterSection";
import HeaderSection from "./Components/HeaderSection";
import QuizSection from "./Components/QuizSection";
import QuizSectionEnd from "./Components/QuizSectionEnd";
import QuizSectionStart from "./Components/QuizSectionStart";

const App = () => {
  const [startPage, setStartPage] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [endPage, setEndPage] = useState(false);
  const [trueCount, setTrueCount] = useState(0);
  const [falseCount, setFalseCount] = useState(0);
  const [falseAnswerResult, setFalseAnswerResult] = useState([]);

  useEffect(() => {
    getQuiz();
  }, []);

  const getQuiz = async () => {
    const response = await fetch("http://localhost:9000/quiz");
    const result = await response.json();
    setQuiz(result);
  };

  const showFinalResult = () => {
    setEndPage(true);
  };

  const resetApp = () => {
    setStartPage(true);
    setEndPage(false);
    setTrueCount(0);
    setFalseCount(0);
    setFalseAnswerResult([]);
  };

  return (
    <div className="w-full min-h-screen bg-gray-800">
      <div className="container">
        <HeaderSection />
        {endPage ? (
          <QuizSectionEnd
            quizCount={quiz.length}
            trueCount={trueCount}
            falseCount={falseCount}
            resetApp={resetApp}
            falseAnswerResult={falseAnswerResult}
          />
        ) : (
          <>
            {startPage ? (
              <QuizSectionStart
                quizCount={quiz.length}
                setStartPage={setStartPage}
              />
            ) : (
              <QuizSection
                quizes={quiz}
                resetApp={resetApp}
                showFinalResult={showFinalResult}
                setFalseAnswerResult={setFalseAnswerResult}
                setTrueCount={setTrueCount}
                setFalseCount={setFalseCount}
              />
            )}
          </>
        )}
      </div>
        <FooterSection/>
    </div>
  );
};

export default App;
