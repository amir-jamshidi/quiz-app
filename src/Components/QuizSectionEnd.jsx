const QuizSectionEnd = ({
  quizCount,
  trueCount,
  falseCount,
  resetApp,
  falseAnswerResult,
}) => {
  return (
    <div className="mt-12 md:mx-24 bg-gray-900 rounded-2xl p-8">
      <div className="text-white border-b border-b-white/10 pb-5 flex items-center justify-center gap-x-2">
        <span className="w-5 h-2 inline-block bg-green-500 rounded"></span>
        <h1 className="font-morabba-bold text-center text-2xl ">
          نتیجه کوییز شما
        </h1>
        <span className="w-5 h-2 inline-block bg-green-500 rounded"></span>
      </div>
      <div className="mt-8 space-y-2">
        <p className="text-white font-dana-bold text-xl bg-violet-600 py-4 rounded px-8">
          تعداد کوئیز ها :
          <span className="bg-violet-800 px-2 rounded mr-1">{quizCount}</span>
        </p>
        <p className="text-white font-dana-bold text-xl bg-green-600 py-4 rounded px-8">
          پاسخ های صحیح :
          <span className="bg-green-800 px-2 rounded mr-1">{trueCount}</span>
          <span className="mr-1">{quizCount === trueCount && "💪"}</span>
        </p>
        <p className="text-white font-dana-bold text-xl bg-red-600 py-4 rounded px-8">
          پاسخ های غلط :
          <span className="bg-red-800 px-2 rounded mr-1">{falseCount}</span>
        </p>
      </div>
      {falseAnswerResult.length ? (
        <div className="space-y-3 mt-8">
          {falseAnswerResult.map((result) => {
            return (
            
                <div
                  key={result.uid}
                  className="flex gap-x-2 items-center px-2"
                >
                  <span className="w-4 h-4 inline-block bg-red-500 rounded-full"></span>
                  <p className="font-dana-bold text-white">
                    سوال :<span className="mr-1">{result.title}</span>
                    <span className="bg-green-500 px-3 rounded mx-1 text-sm font-dana-medium">
                      پاسخ صحیح : {result.options[result.answer - 1].body}
                    </span>
                  </p>
                </div>
             
            );
          })}
        </div>
      ) : null}

      <button
        onClick={resetApp}
        className="w-full text-green-500 font-morabba-bold bg-gray-900 hover:bg-gray-800 border border-gray-800 transition-all rounded mt-8 py-3"
      >
        دوبــــاره کوئــــیز میدم
      </button>
    </div>
  );
};

export default QuizSectionEnd;
