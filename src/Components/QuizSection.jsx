import { useState } from "react";
import QuizBody from "./QuizBody";
const QuizSection = ({ quizes, showFinalResult }) => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selected, setSelected] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [trueCount, setTrueCount] = useState(0);
  const [falseCount, setFalseCount] = useState(0);

  const checkAnswer = (key, currentQuiz) => {
    setSelected(key);
    if (key === currentQuiz.answer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const nextQuiz = () => {
    if (answer) {
      setTrueCount((prev) => prev + 1);
    } else {
      setFalseCount((prev) => prev + 1);
    }

    setCurrentQuiz((prev) => prev + 1);
    setSelected(0);
  };

  const showResult = () => {
    if (answer) {
      showFinalResult(trueCount + 1, falseCount);
    } else {
      showFinalResult(trueCount, falseCount + 1);
    }
  };

  return (
    <div className="mt-12 mx-24 bg-gray-900 rounded-2xl p-8">
      <div className="gap-x-2 flex items-center justify-center border-b pb-5 border-b-white/10">
        <span className="w-5 h-2 inline-block bg-green-500 rounded"></span>
        <h1 className="font-morabba-bold text-2xl text-center text-white inline">
            سوال
            <span className="font-dana-bold mx-1">{currentQuiz+1}</span>
            از
            <span className="font-dana-bold mr-1">{quizes.length}</span>
        </h1>
        <span className="w-5 h-2 inline-block bg-green-500 rounded"></span>
      </div>
      {quizes && (
        <div className="mt-8">
          <QuizBody
            quiz={quizes[currentQuiz]}
            checkAnswer={checkAnswer}
            selected={selected}
          />
        </div>
      )}

      <div className="mt-6">
        {quizes.length === currentQuiz + 1 ? (
          <button
            disabled={selected === 0 ? true : false}
            onClick={showResult}
            className="w-full text-green-500 font-morabba-bold bg-gray-900 hover:bg-gray-800 border border-gray-800 transition-all rounded mt-3 py-3"
          >
            مشــــاهده نتیــــــــجه
          </button>
        ) : (
          <button
            disabled={selected === 0 ? true : false}
            onClick={nextQuiz}
            className="w-full text-green-500 font-morabba-bold bg-gray-900 hover:bg-gray-800 border border-gray-800 transition-all rounded mt-3 py-3"
          >
            بــــــریم بعـــــــــدی
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizSection;
