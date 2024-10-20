import React from 'react';
import { Fish, Anchor, Waves } from 'lucide-react';

interface HomePageProps {
  onStartQuiz: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen relative bg-blue-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
      KAMU PEMANGSA<br/> UDANG <br/> YANG MANA?
      </h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* <Fish className="w-16 h-16 text-blue-500" />
        <Anchor className="w-16 h-16 text-red-500" />
        <Fish className="w-16 h-16 text-green-500" /> */}
        <div className="col-span-3 flex justify-center space-x-4">
          <img src="/image/1.png" alt="Gambar 1" className="w-30 h-30"/>
          <img src="/image/2.png" alt="Gambar 2" className="w-30 h-30"/>
        </div>
        <img src="/image/3.png" className="w-30 h-30"/>
        <img src="/image/4.png" className="w-30 h-30"/>
        <img src="/image/5.png" className="w-30 h-30"/>
      </div>
      <button
        onClick={onStartQuiz}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        Ayo Cari Tahu!
      </button>
      {/* <Waves className="w-full h-24 text-blue-300 mt-8" /> */}
      {/* <img src="/image/footer.png" className="absolute bottom-0-inset-x-0"/> */}
      {/* Footer */}
      {/* versi mobile */}
      <footer className="w-full absolute bottom-0">
        <img src="/image/footer.png" className="w-full" alt="Footer" />
      </footer>

      {/* versi website */}
      {/* <footer className="w-full">
        <img src="/image/footer.png" className="w-full h-auto" alt="Footer" />
      </footer> */}
      </div>
  );
};

export default HomePage;