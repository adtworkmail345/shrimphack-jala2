import React, { useState } from 'react';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import { FarmerType, Result } from './types';
import { results } from './data/results';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'quiz' | 'result'>('home');
  const [quizResult, setQuizResult] = useState<Result | null>(null);

  const startQuiz = () => {
    setCurrentPage('quiz');
  };

  const handleQuizComplete = (scores: { [key in FarmerType]: number }) => {
    const maxScore = Math.max(...Object.values(scores));
    const winningTypes = Object.keys(scores).filter(
      (key) => scores[key as FarmerType] === maxScore
    ) as FarmerType[];

    let resultType: FarmerType;
    if (winningTypes.length > 1) {
      resultType = 'flaminggo';
    } else {
      resultType = winningTypes[0];
    }

    const result = results.find((r) => r.type === resultType)!;
    setQuizResult(result);
    setCurrentPage('result');
  };

  const restartQuiz = () => {
    setCurrentPage('home');
    setQuizResult(null);
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage onStartQuiz={startQuiz} />}
      {currentPage === 'quiz' && <QuizPage onComplete={handleQuizComplete} />}
      {currentPage === 'result' && quizResult && (
        <ResultPage result={quizResult} onRestart={restartQuiz} />
      )}
    </div>
  );
};

export default App;