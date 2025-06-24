"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Cloud } from "lucide-react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "BE 개발과 IoT, 기술창업에 관심이 많은 풀스택 개발자입니다";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-white" />

      {/* Floating Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Background Clouds */}
        <div className="absolute top-10 left-10 w-96 h-32 bg-white/40 rounded-full blur-sm animate-float" />
        <div className="absolute top-32 right-20 w-80 h-28 bg-white/30 rounded-full blur-sm animate-float-delayed" />
        <div className="absolute top-64 left-1/3 w-64 h-24 bg-white/35 rounded-full blur-sm animate-float" />

        {/* Small Decorative Clouds */}
        <Cloud className="absolute top-20 right-1/4 w-12 h-12 text-white/60 animate-float" />
        <Cloud className="absolute top-80 left-1/4 w-8 h-8 text-white/50 animate-float-delayed" />
        <Cloud className="absolute top-40 right-10 w-10 h-10 text-white/40 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold text-sky-800 drop-shadow-sm">
                안녕하세요,
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  김태희
                </span>
                <span className="text-sky-800">입니다</span>
              </h1>
            </div>

            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-sky-700 max-w-4xl mx-auto font-medium">
                {displayText}
                <span className="animate-pulse text-sky-600">|</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
