"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Award,
  BookOpen,
  Trophy,
  Users,
  Calendar,
  ExternalLink,
  Cloud,
} from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "academic" | "award" | "certificate" | "activity";
  link?: string;
}

const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "academic" | "award" | "certificate" | "activity"
  >("all");
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

    const element = document.getElementById("experience");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experiences: ExperienceItem[] = [
    {
      title: "구름톤 유니브 4기 건국대학교 부대표",
      organization: "구름톤 유니브",
      period: "2025.02 - 현재",
      description:
        "구름톤 유니브 4기에서 건국대학교 부대표로 활동하며 대학 내 개발 문화 확산과 교육 프로그램 기획을 담당하고 있습니다.",
      type: "activity",
    },
    {
      title: "스마트ICT융합공학과 학술동아리 CONA 백엔드",
      organization: "건국대학교",
      period: "2023.02 - 2024.01",
      description:
        "학술동아리에서 백엔드 개발자로 활동하며 다양한 프로젝트의 서버 개발과 데이터베이스 설계를 담당했습니다.",
      type: "academic",
    },
    {
      title: "2023 고용패널조사 브리프 경진대회 장려상",
      organization: "기술경영학과",
      period: "2023",
      description:
        "코로나 이후 세대의 직장 만족도에 영향을 미치는 요인 분석 논문으로 장려상을 수상했습니다.",
      type: "award",
      link: "https://drive.google.com/file/d/1nyYbUa_b_KnCrNzqA2RrJHwLwaiQ3lNj/view?usp=drive_link",
    },
    {
      title: "행정관리사 3급",
      organization: "한국산업인력공단",
      period: "2023",
      description:
        "행정업무 전반에 대한 이해와 관리 능력을 인정받아 취득한 자격증입니다.",
      type: "certificate",
    },
    {
      title: "네트워크 관리사 2급",
      organization: "한국정보통신자격협회",
      period: "2023",
      description:
        "네트워크 구축, 관리, 보안에 대한 전문 지식을 바탕으로 취득한 자격증입니다.",
      type: "certificate",
    },
    {
      title: "컴퓨터활용능력 2급",
      organization: "대한상공회의소",
      period: "2022",
      description:
        "스프레드시트와 데이터베이스 활용 능력을 인정받아 취득한 자격증입니다.",
      type: "certificate",
    },
    {
      title: "워드프로세서",
      organization: "대한상공회의소",
      period: "2022",
      description: "문서 작성 및 편집 능력을 인정받아 취득한 자격증입니다.",
      type: "certificate",
    },
  ];

  const tabs = [
    { key: "all" as const, label: "전체", icon: Calendar },
    { key: "activity" as const, label: "활동", icon: Users },
    { key: "academic" as const, label: "학술", icon: BookOpen },
    { key: "award" as const, label: "수상", icon: Trophy },
    { key: "certificate" as const, label: "자격증", icon: Award },
  ];

  const filteredExperiences =
    activeTab === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === activeTab);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "academic":
        return "bg-sky-100 text-sky-800 border-sky-200";
      case "award":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "certificate":
        return "bg-green-100 text-green-800 border-green-200";
      case "activity":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "academic":
        return <BookOpen className="w-4 h-4" />;
      case "award":
        return <Trophy className="w-4 h-4" />;
      case "certificate":
        return <Award className="w-4 h-4" />;
      case "activity":
        return <Users className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Sky Background - Projects에서 자연스럽게 연결 */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-sky-50 to-sky-100" />

      {/* Floating Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-32 bg-white/50 rounded-full blur-sm animate-float" />
        <div className="absolute top-60 right-10 w-80 h-28 bg-white/40 rounded-full blur-sm animate-float-delayed" />
        <div className="absolute bottom-40 left-1/3 w-72 h-20 bg-white/45 rounded-full blur-sm animate-float" />

        <Cloud className="absolute top-32 right-1/4 w-16 h-16 text-white/60 animate-float" />
        <Cloud className="absolute bottom-32 left-1/4 w-12 h-12 text-white/50 animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-sky-800 mb-4 drop-shadow-sm">
            Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full mb-8"></div>

          {/* Tab Navigation - Cloud Style */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border ${
                    activeTab === tab.key
                      ? "bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-lg transform scale-105 border-white/50"
                      : "bg-white/70 text-sky-600 hover:bg-white/90 hover:text-sky-700 shadow-md border-white/40 hover:scale-105"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Experience Cards - Cloud Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((exp, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 p-6 border border-white/50 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                    exp.type
                  )}`}
                >
                  {getTypeIcon(exp.type)}
                  <span className="ml-1 capitalize">{exp.type}</span>
                </div>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-800 transition-colors p-1 rounded-full hover:bg-sky-50"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-sky-800 mb-2 leading-tight group-hover:text-sky-600 transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-sky-600 font-semibold text-sm">
                  {exp.organization}
                </p>
                <p className="text-sky-500 text-xs mt-1 bg-sky-50 px-2 py-1 rounded-full inline-block">
                  {exp.period}
                </p>
              </div>

              <p className="text-sky-600 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-block p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl">
              <div className="text-sky-400 text-lg mb-2">☁️</div>
              <div className="text-sky-600 text-lg">
                해당 카테고리에 경험이 없습니다.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
