import Header from "./Components/Header";
import QuizSection from "./Components/QuizSection";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-800">
      <div className="container">
        <Header />
        <QuizSection/>
      </div>
    </div>
  );
};

export default App;
