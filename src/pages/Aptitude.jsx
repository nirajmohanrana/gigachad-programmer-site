import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import aptitude from "../assets/aptitude.json";

import { TfiAngleDoubleDown, TfiAngleDoubleUp } from "react-icons/tfi";

function Aptitude() {
  const params = useParams();
  const { aptId } = params;
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const current = aptitude.questions.find(
      (question) => (question.question = aptId)
    );

    setCurrentQuestion(current);
  }, []);

  function handleAptiQuestion(question) {
    const unicodeString = question;
    return decodeURIComponent(unicodeString);
  }

  return (
    <>
      <div className="w-10/12 shadow-xl mx-auto my-5 border border-slate-900 rounded-lg overflow-hidden">
        <button
          className={`w-full flex items-center justify-between py-4 px-8 bg-gray-200 text-left shadow-xl ${
            isOpen ? "border-b border-slate-700" : ""
          }`}
          onClick={handleToggle}
        >
          <div className="w-3/4">
            <p className="text-lg font-medium">
              {handleAptiQuestion(currentQuestion?.question)}
            </p>

            <p className="font-semibold text-base my-1">Explanation:</p>
            <p className="font-mono text-sm bg-slate-700 w-fit px-4 py-1 text-white rounded-xl">
              {currentQuestion?.given}
            </p>
          </div>

          <span className="transform transition-all duration-300 text-lg hover:text-blue-700 self-end flex justify-center items-center gap-2 font-medium">
            Reveal {isOpen ? <TfiAngleDoubleUp /> : <TfiAngleDoubleDown />}
          </span>
        </button>
        <div
          className={`overflow-scroll transition-max-height duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="p-4 bg-white">
            <p className="font-semibold text-base my-1">Explanation of Code:</p>
            <p className="font-mono text-sm bg-slate-700 w-fit px-4 py-1 text-white rounded-xl">
              {currentQuestion?.answer}
            </p>

            <p className="font-semibold text-base my-1">C++:</p>
            <div className="font-mono text-sm bg-slate-700 w-fit px-4 py-1 text-white rounded-xl">
              <pre>{currentQuestion?.explanation}</pre>
            </div>

            <p className="font-semibold text-base my-1">Java:</p>
            <div className="font-mono text-sm bg-slate-700 w-fit px-4 py-1 text-white rounded-xl">
              <pre>{currentQuestion?.solution}</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aptitude;
