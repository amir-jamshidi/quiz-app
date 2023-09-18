import { useState } from "react";
const QuizBody = ({ quiz, checkAnswer , selected }) => {

  return (
    <>
      <p className="font-dana-bold text-white">{quiz.title}</p>
      <div className="flex flex-col mt-5 gap-y-2">
        {quiz.options.map((option) => (
          <div
            key={option.key}
            onClick={() => checkAnswer(option.key, quiz)}
            className={`${
              selected === option.key
                ? "bg-green-500  hover:bg-green-600 "
                : "bg-gray-800  hover:bg-gray-900 "
            } py-6 rounded text-gray-300 px-8 cursor-pointerborder border-gray-800 transition-all cursor-pointer`}
          >
            <span>{option.body}</span>
          </div>
        ))}
      </div>
    </>
  );
};
export default QuizBody;
