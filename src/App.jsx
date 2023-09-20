import { useEffect, useState } from "react";
import FooterSection from "./Components/FooterSection";
import HeaderSection from "./Components/HeaderSection";
import QuizSection from "./Components/QuizSection";
import QuizSectionEnd from "./Components/QuizSectionEnd";
import QuizSectionStart from "./Components/QuizSectionStart";

const App = () => {
  const [cateGorys, setCateGorys] = useState([]);
  const [startPage, setStartPage] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [filterQuiz , setFilterQuiz] = useState([]);
  const [endPage, setEndPage] = useState(false);
  const [trueCount, setTrueCount] = useState(0);
  const [falseCount, setFalseCount] = useState(0);
  const [falseAnswerResult, setFalseAnswerResult] = useState([]);

  useEffect(() => {
    getQuiz();
    getCateGorys();
  }, []);

  const getQuiz = async () => {
    const response = await fetch("http://localhost:9000/quiz");
    const result = await response.json();
    setQuiz(result);
  };

  const getCateGorys = async () => {
    const response = await fetch("http://localhost:9000/cateGory");
    const result = await response.json();
    setCateGorys(result);
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

  const setCateGoryQuiz = (starPageState , categoryID)=>{
    setStartPage(starPageState);
    setFilterQuiz([...quiz].filter(sQuiz=> sQuiz.cateGoryID === categoryID))
  }

  return (
    <div className="w-full min-h-screen bg-gray-800">
      <div className="container">
        <HeaderSection />
        {endPage ? (
          <QuizSectionEnd
            quizCount={filterQuiz.length}
            trueCount={trueCount}
            falseCount={falseCount}
            resetApp={resetApp}
            falseAnswerResult={falseAnswerResult}
          />
        ) : (
          <>
            {startPage ? (
              <QuizSectionStart
              setCateGoryQuiz={setCateGoryQuiz}
              categorys={cateGorys}
              />
            ) : (
              <QuizSection
                quizes={filterQuiz}
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
      <FooterSection />
    </div>
  );
};

export default App;
