"use client";
import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Cloud,
  Code,
  Lightbulb,
  BookOpen,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image?: string;
  github?: string;
  report?: string;
  thesis?: string;
  essay?: string;
  demo?: string;
  category: "project" | "sideproject" | "research";
}

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("project");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: "모두의냉장고",
      description: "대학생 간 나눔을 위한 실시간 채팅 기반 식품 공유 플랫폼",
      fullDescription:
        "대학생 간 나눔을 위한 실시간 채팅 기반 식품 공유 플랫폼입니다. 실시간 채팅과 위치 기반 서비스를 결합하여 음식물 낭비를 줄이고 대학생들 간의 나눔 문화를 촉진하는 공유 경제 플랫폼을 구축했습니다.",
      tech: ["Spring Boot", "Flutter", "Socket", "KakaoAPI", "MySQL"],
      image: "/images/project_everybox.jpg",
      github: "https://github.com/kroad0129/everybox",
      report:
        "https://drive.google.com/file/d/11Ug_jemhFSToKvMkZka12PqV0s8hwhfw/view",
      category: "project",
    },
    {
      title: "KUSLS",
      description:
        "건국대학교 자유전공학부 학생을 위한, 진로를 잇는 연결 플랫폼",
      fullDescription:
        "진로를 고민하는 자유전공 학생들이 사람을 만나고, 정보를 얻고, 방향을 찾아가는 연결의 플랫폼 자유전공 학생들이 흩어진 조각들을 모아 나만의 진로를 그려나갈 수 있도록 함께합니다.",
      tech: ["Spring Boot", "Android Studio", "Docker"],
      image: "/images/project_kusls.png",
      github: "https://github.com/KUmmIT-team2/KUSLS-Back",
      report:
        "https://drive.google.com/file/d/1Yrm_88IR43MysQcCbFWh4n_yi3SwB7u8/view",
      category: "project",
    },
    {
      title: "Fitbit IoT",
      description: "웨어러블 기반 홈IoT 모니터링",
      fullDescription:
        "Fitbit을 활용한 홈IoT 모니터링 플랫폼입니다. 웨어러블 디바이스와 IoT 센서를 연동하여 사용자의 생체 데이터와 환경 데이터를 실시간으로 수집하고 분석하여 스마트 홈 환경을 구축하는 프로젝트입니다.",
      tech: [
        "Raspberry Pi",
        "Python",
        "React",
        "AWS EC2 / S3 / IoT Core / Lambda / API Gateway",
      ],
      image: "/images/project_iot.png",
      github: "https://github.com/kroad0129/fitbit-iot",
      report:
        "https://drive.google.com/file/d/17Tpvgf2jLOJygjyphp2wGA4ogzJaKNkI/view",
      category: "project",
    },
    {
      title: "Hi_Buy",
      description: "건강기능식품 섭취 데이터기반 이커머스 플랫폼",
      fullDescription:
        "사용자의 건강 데이터를 분석하여 맞춤형 건강기능식품을 추천하는 서비스입니다. 개인의 건강 상태, 생활 패턴, 영양소 부족 정보를 종합적으로 분석하여 최적의 제품을 추천하고, 구매까지 연결하는 통합 플랫폼을 구축했습니다.",
      tech: ["Android Studio", "Kotlin"],
      image: "/images/project_hibuy.jpg",
      github: "https://github.com/kroad0129/Hi_Buy",
      report:
        "https://drive.google.com/file/d/1mj3pa3l0ZLi2JtsvjApWENonAHUMkJw8/view",
      category: "project",
    },
    {
      title: "BoyFriendFinder",
      description: "남자친구가 안자고 게임 하는거 같다구요?",
      fullDescription:
        "리그오브레전드 게임 유저의 닉네임만 입력하면, 실시간으로 게임 접속 상태와 최근 전적을 간편하게 조회할 수 있는 웹 서비스입니다.",
      tech: ["Spring Boot", "Next.js", "Riot API"],
      image: "/images/project_bff.png",
      github: "https://github.com/kroad0129/bffinder",
      demo: "http://52.79.236.6:3000/",
      category: "sideproject",
    },
    {
      title: "나만의 포트폴리오",
      description: "나만의 포트폴리오 웹사이트 제작",
      fullDescription:
        "저만의 프로젝트와 경험을 한 곳에 정리하고 소개하기 위해 직접 포트폴리오 웹사이트를 제작했습니다.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      image: "/images/project_my.png",
      github: "https://github.com/kroad0129/my-portfolio",
      demo: "https://my-portfolio-sigma-lemon-67.vercel.app/",
      category: "sideproject",
    },
    {
      title: "롤 내전 자동 팀매칭",
      description: "친구들과 내전할때 팀 짜기 힘드신가요?",
      fullDescription:
        "입력된 포지션과 티어 정보를 바탕으로 리그오브레전드 팀을 자동으로 밸런스 있게 배정해주는 웹 서비스입니다.",
      tech: ["Spring Boot", "Next.js", "Riot API"],
      image: "/images/project_ltm.png",
      github: "https://github.com/kroad0129/lol-team-matcher",
      demo: "https://lol-team-matcher.vercel.app/",
      category: "sideproject",
    },
    {
      title: "헬스케어 시장의 파괴적 혁신: 기술 기반 기업의 전략 분석",
      description:
        "4차 산업혁명 속 헬스케어 시장의 판도를 뒤흔든 파괴적 혁신과 그 전략적 특성을 분석한 연구",
      fullDescription:
        "본 에세이는 디지털 기술의 발전과 4차 산업혁명 흐름 속에서 헬스케어 시장에 등장한 파괴적 혁신 사례를 분석하고, 기존 의료체계 및 산업구조에 미친 영향을 고찰하였다. 특히 애플, 구글, 휴메인(Humane) 등 기술 중심 기업들이 헬스케어 시장에 진입하면서 전통 의료서비스와 경쟁 또는 보완 관계를 형성해가는 과정을 살펴보았다.",
      tech: ["디지털 헬스케어"],
      essay:
        "https://drive.google.com/file/d/1QpqRBVTUjsKypp1oIa8PwWg_Wy0qaBhW/view",
      category: "research",
    },
    {
      title:
        "코로나 이후 세대의 직장 만족도에 영향을 미치는 요인 분석 (🏆수상)",
      description:
        "코로나19 이후 청년층의 직무 만족도에 영향을 미치는 주요 요인을 분석한 실증 연구",
      fullDescription:
        "본 연구는 청년패널 13차, 14차 추가패널과 YP2021 데이터를 활용하여, 코로나19 팬데믹 이후 청년층의 직장 만족도에 영향을 미치는 요인을 실증적으로 분석하였다. 특히 직장-전공 일치도, 업무역량, 직업 선택 시 가치관(이타성, 안정성 등), 스펙(학점, 자격증 등)과 같은 요인이 만족도에 어떠한 영향을 주는지를 정량 분석하였다.",
      tech: ["STATA", "청년패널", "직무만족도"],
      essay:
        "https://drive.google.com/file/d/1nyYbUa_b_KnCrNzqA2RrJHwLwaiQ3lNj/view",
      category: "research",
    },
  ];

  const categories = [
    {
      id: "project",
      title: "메인 프로젝트",
      description: "핵심 개발 프로젝트들",
      icon: Code,
      color: "from-sky-400 to-blue-500",
    },
    {
      id: "sideproject",
      title: "사이드 프로젝트",
      description: "개인적인 실험과 도전",
      icon: Lightbulb,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "research",
      title: "연구 & 논문",
      description: "학술적 연구와 분석",
      icon: BookOpen,
      color: "from-emerald-400 to-teal-500",
    },
  ];

  const toggleExpand = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getProjectsByCategory = (category: string) => {
    return projects.filter((project) => project.category === category);
  };

  const renderProjectCard = (
    project: Project,
    index: number,
    categoryIndex: number
  ) => {
    const projectId = `${project.category}-${index}`;

    return (
      <div
        key={projectId}
        className={`group relative transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        style={{ transitionDelay: `${categoryIndex * 200 + index * 150}ms` }}
      >
        {/* Cloud Card */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 group-hover:border-sky-200 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
          {/* Image Container */}
          {project.image && (
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-100/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-200/20 to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Floating Tech Badges */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/80 backdrop-blur-sm text-sky-700 text-xs rounded-full border border-sky-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Content */}
          <div className="p-6 relative">
            {/* Title */}
            <h3 className="text-xl font-bold text-sky-800 mb-3 group-hover:text-sky-600 transition-colors duration-300">
              {project.title}
            </h3>
            {/* Description with Expand/Collapse */}
            <div className="mb-4">
              <p className="text-sky-600 text-sm leading-relaxed">
                {expandedProject === projectId
                  ? project.fullDescription
                  : project.description}
              </p>
              <button
                onClick={() => toggleExpand(projectId)}
                className="flex items-center mt-2 text-sky-500 hover:text-sky-600 text-sm font-medium transition-colors duration-200 group/btn"
              >
                {expandedProject === projectId ? (
                  <>
                    <span>간단히 보기</span>
                    <ChevronUp className="ml-1 w-4 h-4 group-hover/btn:transform group-hover/btn:-translate-y-1 transition-transform duration-200" />
                  </>
                ) : (
                  <>
                    <span>자세히 보기</span>
                    <ChevronDown className="ml-1 w-4 h-4 group-hover/btn:transform group-hover/btn:translate-y-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </div>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-sky-50 text-sky-600 text-xs rounded-full border border-sky-200 hover:border-sky-300 hover:bg-sky-100 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              {project.github && (
                <a
                  href={project.github}
                  className="text-sm group/btn flex items-center px-4 py-2 bg-white/70 hover:bg-white text-sky-600 hover:text-sky-700 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-sky-200 hover:border-sky-300 hover:shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                  깃허브
                </a>
              )}
              {project.report && (
                <a
                  href={project.report}
                  className="text-sm group/btn flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                  보고서
                </a>
              )}
              {project.thesis && (
                <a
                  href={project.thesis}
                  className="text-sm group/btn flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                  논문
                </a>
              )}
              {project.essay && (
                <a
                  href={project.essay}
                  className="text-sm group/btn flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                  에세이
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="text-sm group/btn flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Sky Background */}
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
        {/* Main Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-sky-800 mb-6 drop-shadow-sm">
            Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-sky-600 max-w-2xl mx-auto leading-relaxed">
            구름 위에서 만들어낸 혁신적인 프로젝트들
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/60 backdrop-blur-sm rounded-2xl p-2 border border-white/40 shadow-lg">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              const categoryProjects = getProjectsByCategory(category.id);

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : "text-sky-600 hover:text-sky-800 hover:bg-white/50"
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">
                    {category.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Content */}
        {categories.map((category) => {
          if (activeCategory !== category.id) return null;

          const categoryProjects = getProjectsByCategory(category.id);
          const IconComponent = category.icon;

          return (
            <div key={category.id} className="animate-fadeIn">
              {/* Category Header */}
              <div className="text-center mb-8">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white shadow-lg inline-flex items-center justify-center mb-4`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-sky-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-sky-600 max-w-xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {categoryProjects.map((project, index) =>
                  renderProjectCard(project, index, 0)
                )}
              </div>
            </div>
          );
        })}

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg">
            <h3 className="text-xl font-bold text-sky-800 mb-3">
              더 많은 프로젝트가 궁금하신가요?
            </h3>
            <p className="text-sky-600 mb-4">
              GitHub에서 전체 프로젝트를 확인해보세요!
            </p>
            <a
              href="https://github.com/kroad0129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-full font-semibold hover:from-sky-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub 방문하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
