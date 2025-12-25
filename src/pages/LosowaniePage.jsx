import { useState } from "react";

export default function LosowaniePage() {
  // przykładowy tekst, możesz go dynamicznie zmieniać później
  const [text, setText] = useState("Dowód do losowania że nie było ustawione");

  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 pt-10 flex flex-col items-center">

      {/* VIDEO */}
      <div className="w-full max-w-2xl">
        <video 
          src="/videos/Losowanie.mkv" 
          controls 
          className="w-full rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.6)]"
        />
      </div>

      {/* TEXT */}
      <div className="w-full max-w-2xl mt-6 px-4 py-3 bg-gradient-to-b from-transparent to-[#121212] text-center rounded-lg">
        <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
          {text}
        </p>
      </div>
        <p className="text-white text-base whitespace-pre-line leading-relaxed">
          Remik - Casual 
        </p>
        <p className="text-white text-base whitespace-pre-line leading-relaxed">
          Adrian - Leszy 
        </p>
        <p className="text-white text-base whitespace-pre-line leading-relaxed">
          Maciej - Kutas 
        </p>
        <p className="text-white text-base whitespace-pre-line leading-relaxed">
          Ola - Karate piwo 
        </p>
        <p className="text-white text-base whitespace-pre-line leading-relaxed">
          Igor - Trójbój 
        </p>
        <p className="text-white text-base whitespace-pre-line leading-relaxed">
          Dawid - Ice Tea 
        </p>
        <p className="text-white text-base whitespace-pre-line leading-relaxed">
          Cieślak - Krew z nosa 
        </p>
        <p className="text-white text-base whitespace-pre-line leading-relaxed">
          Kasia - Sigma Selfie 
        </p>
        <p className="text-white text-base whitespace-pre-line leading-relaxed">
          Patryk - Cygarian 
        </p>
        <p className="text-white text-base whitespace-pre-line leading-relaxed">
          Kuba - Podsiadło trynki 
        </p>
    </div>
  );
}
