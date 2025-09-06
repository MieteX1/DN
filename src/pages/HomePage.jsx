import React, { useState } from "react";
import Petal from "../components/Petal";

export default function HomePage() {
  const [progress] = useState(2);

  return (
    <div className="relative flex h-screen overflow-hidden kurwa">

      {/* Płatki - na mobile mniej */}
      <Petal className="top-[-50px] left-[20%] animate-petal-straight hidden md:block" />
      <Petal className="top-[-50px] left-[20%] animate-petal-diagonal hidden md:block" />
      <Petal className="top-[-50px] right-[25%] animate-petal-straight hidden md:block" />
      <Petal className="top-[-50px] right-[25%] animate-petal-lr hidden md:block" />
      <Petal className="top-[-50px] right-[10%] animate-petal-straight hidden md:block" />
      <Petal className="top-[-50px] left-[5%] animate-petal-lr1"/>
      <Petal className="top-[-50px] left-[45%] animate-petal-lr1" />
      <Petal className="top-[-50px] left-[85%] animate-petal-lr1" />
      <Petal className="top-[-50px] left-[-35%] animate-petal-lr1 md:hidden" />
      <Petal className="top-[-50px] left-[-75%] animate-petal-lr1 md:hidden" />

      {/* Lewa kolumna */}
      <div className="hidden md:block basis-1/3 h-full">
        <img
          src="/images/roseleft.png"
          alt="Left"
          className="h-full opacity-35"
        />
      </div>

      {/* Środkowa kolumna */}
      <div className="w-full md:basis-1/3 flex flex-col aboreto justify-center items-center mt-12 md:mt-56 p-6 md:p0">
        {/* Tekst */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl text-white text-center">
            <p>Something big is coming soon!</p>
            <br />
            <p>TBD ~this year</p>
            <br />
            <p>Stay tuned and watch your back.</p>
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col items-center mb-16 md:mb-36 space-y-4">
          <p className="text-white text-sm md:text-base">Progress Bar</p>
          <div className="w-48 md:w-72 border-[1px] h-3 md:h-4 overflow-hidden">
            <div
              className="bg-[#880808] h-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white text-sm md:text-base">{progress}%</p>
        </div>
      </div>

      {/* Prawa kolumna */}
      <div className="hidden md:block basis-1/3 h-full">
        <img
          src="/images/roseright.png"
          alt="Right"
          className="h-full opacity-35"
        />
      </div>
    </div>
  );
}
