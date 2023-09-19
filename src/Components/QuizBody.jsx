const QuizBody = ({ quiz, checkAnswer, selected }) => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <span className="w-6 h-2 inline-block bg-violet-800 rounded"></span>
        <p className="font-dana-bold text-white">
          کوئیز :<span className="mr-1">{quiz.title}</span>
        </p>
      </div>
      <div className="flex flex-col mt-5 gap-y-2">
        {quiz.options.map((option) => (
          <div
            key={option.key}
            onClick={() => checkAnswer(option.key, quiz)}
            className={`${
              selected === option.key
                ? "bg-green-500  hover:bg-green-600  border-green-800 "
                : "bg-gray-800  hover:bg-gray-900  border-gray-800"
            } py-6 rounded text-gray-300 px-8 cursor-pointerborder transition-all cursor-pointer border`}
          >
            <span>{option.body}</span>
          </div>
        ))}
      </div>
    </>
  );
};
export default QuizBody;
