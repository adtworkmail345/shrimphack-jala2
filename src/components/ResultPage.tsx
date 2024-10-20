import React from 'react';
import { Result } from '../types';
import { Download } from 'lucide-react';

interface ResultPageProps {
  result: Result;
  onRestart: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ result, onRestart }) => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      {/* Header */}
      {/* <header className="w-full absolute top-0">
        <img src="/image/footer.png" className="w-full" alt="Header" />
      </header> */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
      <img src={result.imageUrl} alt={result.title} className="w-50 h-50 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-blue-600 mb-2">{result.title}</h2>
        <p className="text-gray-600 mb-6">{result.description}</p>
        <button
          onClick={onRestart}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mb-4"
        >
          Mulai Lagi
        </button>
        <button className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          <Download className="mr-2" />
          Unduh & Bagikan
        </button>
      </div>
      <footer className="w-full absolute bottom-0">
        <img src="/image/footer.png" className="w-full" alt="Footer" />
      </footer>
    </div>
  );
};

export default ResultPage;