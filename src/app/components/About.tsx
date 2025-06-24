"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Cloud, Sparkles } from "lucide-react";

interface PersonalInfo {
  label: string;
  value: string;
  icon: string;
}

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const personalInfo: PersonalInfo[] = [
    { label: "이름", value: "김태희", icon: "👤" },
    { label: "대학교", value: "건국대학교", icon: "🏫" },
    { label: "전공", value: "스마트ICT융합공학과", icon: "💻" },
    { label: "부전공", value: "기술경영학", icon: "📊" },
    { label: "위치", value: "서울, 대한민국", icon: "📍" },
    { label: "이메일", value: "kroad0129@naver.com", icon: "📧" },
  ];

  const interests = [
    "Backend Development",
    "IoT Systems",
    "Tech Startup",
    "Cloud Computing",
    "AI/ML",
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Sky Background - Hero에서 자연스럽게 연결 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-sky-100" />

      {/* Floating Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-24 bg-white/50 rounded-full blur-sm animate-float" />
        <div className="absolute top-60 right-10 w-96 h-28 bg-white/40 rounded-full blur-sm animate-float-delayed" />
        <div className="absolute bottom-40 left-1/3 w-72 h-20 bg-white/45 rounded-full blur-sm animate-float" />

        <Cloud className="absolute top-32 right-1/4 w-16 h-16 text-white/60 animate-float" />
        <Sparkles className="absolute top-80 left-1/4 w-8 h-8 text-sky-300 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 relative z-10">
        {/* Cloud-style Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold text-sky-800 mb-4 drop-shadow-sm">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Main Cloud Card */}
            <div
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">👋</span>
                  </div>
                  <h3 className="text-3xl font-bold text-sky-800">
                    안녕하세요!
                  </h3>
                </div>

                <p className="text-lg text-sky-700 leading-relaxed mb-6">
                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                    BE 개발과 IoT, 기술창업
                  </strong>
                  에 관심이 많은 개발자입니다.
                </p>

                <div
                  className={`overflow-hidden transition-all duration-700 ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-4 pb-4">
                    <p className="text-sky-600 leading-relaxed">
                      건국대학교 스마트ICT융합공학과에서 전공하고 기술경영학을
                      부전공하며, 백엔드 개발과 IoT 분야에서 다양한 프로젝트를
                      진행해왔습니다.
                    </p>
                    <p className="text-sky-600 leading-relaxed">
                      현재 구름톤 유니브 4기 건국대학교 부대표로 활동하며,
                      다양한 기술 스택을 활용한 풀스택 개발 역량을 키워나가고
                      있습니다.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="group/btn flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {isExpanded ? (
                    <>
                      <span>간단히 보기</span>
                      <ChevronUp className="ml-2 w-5 h-5 group-hover/btn:transform group-hover/btn:-translate-y-1 transition-transform duration-200" />
                    </>
                  ) : (
                    <>
                      <span>더 알아보기</span>
                      <ChevronDown className="ml-2 w-5 h-5 group-hover/btn:transform group-hover/btn:translate-y-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Personal Info Cloud Grid - 메인 카드 바로 아래 */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.map((info: PersonalInfo, index: number) => (
                <div
                  key={index}
                  className={`group bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/40 hover:shadow-lg transition-all duration-500 hover:scale-105 transform ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-200">
                      {info.icon}
                    </span>
                    <h4 className="font-semibold text-sky-800 text-sm">
                      {info.label}
                    </h4>
                  </div>
                  <p className="text-sky-600 text-l font-medium ml-8">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Interests Cloud */}
            <div
              className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <h4 className="font-bold text-sky-800 mb-6 flex items-center text-lg">
                <span className="text-2xl mr-3">🎯</span>
                관심 분야
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="group px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white text-sm rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="group-hover:animate-pulse">
                      {interest}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Cloud */}
          <div
            className={`flex justify-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Cloud-like Glow */}
              <div className="absolute -inset-8 bg-white/30 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

              {/* Main Image Container */}
              <div className="relative w-80 h-80 bg-white/60 backdrop-blur-sm rounded-full overflow-hidden border-4 border-white/60 shadow-2xl group-hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/tibetan_fox.jpg"
                  alt="프로필 이미지"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-200/20 via-transparent to-white/20 group-hover:from-sky-200/30 group-hover:to-white/30 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
