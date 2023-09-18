import Hint from "./Hint";

const QuizSectionStart = ({ setStartPage, quizCount }) => {
  return (
    <div className="mt-12 mx-24 bg-gray-900 rounded-2xl p-8">
      <div className="flex w-full flex-col justify-center">
        <div className="border-b border-b-white/10 pb-6">
          <h3 className="font-morabba-medium text-white text-center text-2xl">
            برای شروع کوییز اماده ای ؟
          </h3>
        </div>
        <div className="my-6">
          <Hint title="سوالات به صورت رندوم برای شما بارگزاری میشن و از موضوعات مختلف هستن" />
          <Hint title=" اگه امادگیشو داری که خودتو به چالش بکشی و به سوالای ما پاسخ بدی میتونی روی دکمه شروع کلیک کنی" />
          <Hint title="شما باید به همه سوالات پاسخ بدین و اگه اشتباه پاسخ بدین امتیاز منفی داره پس سعی کنید که تمرکز داشته باشید" />
          <Hint
            title="تعداد سوالایی که برای شما در نظر گرفته شده برابر است با : "
            count={quizCount}
          />
        </div>
        <div>
          <button
            onClick={() => setStartPage(false)}
            className="w-full text-green-500 font-morabba-bold bg-gray-900 hover:bg-gray-800 border border-gray-800 transition-all rounded mt-3 py-3"
          >
            بــــــزن بـــــــــــــریم
          </button>
        </div>
      </div>
    </div>
  );
};
export default QuizSectionStart;
