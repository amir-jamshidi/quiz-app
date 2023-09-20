import { useState } from "react";
const QuizSectionStart = ({ setCateGoryQuiz, categorys }) => {
  const [selected, setSelected] = useState(0);

  const setSelectedGateGory = (cateID) => {
    setSelected(cateID);
  };

  return (
    <div className="mt-12 md:mx-24 bg-gray-900 rounded-2xl p-8">
      <div className="flex w-full flex-col justify-center">
        <div className="border-b border-b-white/10 pb-6">
          <h3 className="font-morabba-medium text-white text-center text-2xl">
            دسته بندی مورد علاقت رو انتخاب کن
          </h3>
        </div>
        <div className="my-6">
          <div className="grid md:grid-cols-2 gap-2">
            {categorys.map((category) => {
              return (
                <div
                  onClick={() => setSelectedGateGory(category.cateID)}
                  className={`${
                    selected == category.cateID
                      ? "bg-violet-500  hover:bg-violet-600  border-violet-800"
                      : "bg-gray-800  hover:bg-gray-900  border-gray-800"
                  } py-6 rounded  px-8 cursor-pointerborder transition-all cursor-pointer border`}
                  key={category.uid}
                >
                  <h5 className="font-morabba-bold text-white text-center">
                    {category.name}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <button
            disabled={selected === 0 ? true : false}
            onClick={() => setCateGoryQuiz(false, selected)}
            className={` w-full text-green-500 font-morabba-bold bg-gray-900 hover:bg-gray-800 border border-gray-800 transition-all rounded mt-3 py-3`}
          >
            بــــــزن بـــــــــــــریم
          </button>
        </div>
      </div>
    </div>
  );
};
export default QuizSectionStart;
