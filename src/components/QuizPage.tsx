import React, { useState } from 'react';
import { questions } from '../data/questions';
import { Question as QuestionType, Answer, FarmerType } from '../types';

interface QuizPageProps {
  onComplete: (scores: { [key in FarmerType]: number }) => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<{ [key in FarmerType]: number }>({
    flaminggo: 0,
    paus: 0,
    kepiting: 0,
    kembung: 0,
    kambing: 0
    // 'hi-tech': 0,
  });

  const handleAnswer = (answer: Answer) => {
    const newScores = { ...scores };
    Object.entries(answer.scores).forEach(([key, value]) => {
      newScores[key as FarmerType] += value;
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newScores);
    }
  };

  const question: QuestionType = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{question.text}</h2>
        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer)}
              className="w-full text-left bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              {answer.text}
            </button>
          ))}
        </div>
        <div className="mt-4 text-gray-600">
          Pertanyaan {currentQuestion + 1} dari {questions.length}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;