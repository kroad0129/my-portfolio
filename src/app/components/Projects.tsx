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
} from "lucide-react";
import type { Project } from "@/types";

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      title: "🍕 모두의냉장고",
      description: "대학생 간 나눔을 위한 실시간 채팅 기반 식품 공유 플랫폼",
      fullDescription:
        "대학생 간 나눔을 위한 실시간 채팅 기반 식품 공유 플랫폼입니다. 실시간 채팅과 위치 기반 서비스를 결합하여 음식물 낭비를 줄이고 대학생들 간의 나눔 문화를 촉진하는 공유 경제 플랫폼을 구축했습니다.",
      tech: ["Spring Boot", "Fultter", "Socket", "KakaoAPI", "MySQL"],
      image: "/images/project_everybox.jpg",
      github: "https://github.com/kroad0129/everybox",
      report:
        "https://drive.google.com/file/d/11Ug_jemhFSToKvMkZka12PqV0s8hwhfw/view",
    },
    {
      title: "💊 Hi_Buy",
      description: "건강기능식품 섭취 데이터기반 이커머스 플랫폼",
      fullDescription:
        "사용자의 건강 데이터를 분석하여 맞춤형 건강기능식품을 추천하는 서비스입니다. 개인의 건강 상태, 생활 패턴, 영양소 부족 정보를 종합적으로 분석하여 최적의 제품을 추천하고, 구매까지 연결하는 통합 플랫폼을 구축했습니다.",
      tech: ["Android Studio", "Kotlin"],
      image: "/images/project_hibuy.jpg",
      github: "https://github.com/kroad0129/Hi_Buy",
      report:
        "https://drive.google.com/file/d/1mj3pa3l0ZLi2JtsvjApWENonAHUMkJw8/view",
    },
    {
      title: "🏠 Fitbit IoT",
      description: "웨어러블 기반 홈IoT 모니터링",
      fullDescription:
        "Fitbit을 활용한 홈IoT 모니터링 플랫폼입니다. 웨어러블 디바이스와 IoT 센서를 연동하여 사용자의 생체 데이터와 환경 데이터를 실시간으로 수집하고 분석하여 스마트 홈 환경을 구축하는 프로젝트입니다.",
      tech: [
        "Raspberry Pi",
        "Python",
        "React",
        "AWS EC2 / S3 / IoT Core / Lamdba / API Gateway",
      ],
      image: "/images/project_homeiot.png",
      github: "https://github.com/kroad0129/fitbit-iot",
      report:
        "https://drive.google.com/file/d/17Tpvgf2jLOJygjyphp2wGA4ogzJaKNkI/view",
    },
    {
      title: "🏋️ Fitpass",
      description: "회원권 양도 서비스",
      fullDescription:
        "사용하지 않는 헬스장 회원권을 다른 사용자에게 양도할 수 있는 플랫폼을 개발했습니다. 위치 기반 매칭, 안전한 거래 시스템, 실시간 채팅 기능을 통해 사용자 간 원활한 회원권 거래를 지원합니다.",
      tech: ["Node.js", "Kotlin", "Firebase"],
      image: "/images/project_fitpass.jpg",
      github: "https://github.com/kroad0129/fitpass",
      report:
        "https://drive.google.com/file/d/1hvyuP48FZpvEu2LEdQj6cfpGpH-Fm1fs/view",
    },
    {
      title: "💄 LipService",
      description: "AI 퍼스널 컬러 맞춤형 제품 추천",
      fullDescription:
        "AI를 활용하여 퍼스널 컬러에 따른 사용자 맞춤형 제품 추천 서비스입니다. 컴퓨터 비전 기술을 활용해 사용자의 피부톤을 분석하고, 머신러닝 알고리즘을 통해 개인에게 가장 어울리는 화장품을 추천하는 개인화 시스템을 구축했습니다.",
      tech: ["Kotlin", "Python", "AI/ML", "OpenAI API"],
      image: "/images/project_lipservice.jpg",
      github: "https://github.com/kroad0129/lipservice",
      report:
        "https://drive.google.com/file/d/1mKYCahIGwqR_K4gZppTjKudkG1t0thay/view",
      thesis:
        "https://drive.google.com/file/d/1v3F8U3QipYXcZJI3fjsKR6ccu_6ovPxy/view",
    },
    {
      title: "⚖️ NoonKo",
      description: "법률 정보 검색 및 판례 유사도 분석",
      fullDescription:
        "자연어 처리 기술을 활용하여 법률 문서의 유사도를 분석하는 서비스입니다. 복잡한 법률 용어와 판례를 일반인도 쉽게 이해할 수 있도록 분석하고, 유사한 사례를 찾아 법률 정보에 대한 접근성을 높이는 플랫폼을 개발했습니다.",
      tech: ["React", "ETRI_BERT(NLP)"],
      image: "/images/project_noonko.jpg",
      github: "https://github.com/kroad0129/noonko",
      report:
        "https://drive.google.com/file/d/1fob5QRn9vgcNixoHTByyTvBq1PI0QcLs/view",
      thesis:
        "https://drive.google.com/file/d/1rgsw9NkbiUMw4mRant7kjX4OhxL8ZDOt/view",
    },
    {
      title: "✏️ 헬스케어 시장의 파괴적 혁신: 기술 기반 기업의 전략 분석",
      description:
        "4차 산업혁명 속 헬스케어 시장의 판도를 뒤흔든 파괴적 혁신과 그 전략적 특성을 분석한 연구",
      fullDescription:
        "본 에세이는 디지털 기술의 발전과 4차 산업혁명 흐름 속에서 헬스케어 시장에 등장한 파괴적 혁신 사례를 분석하고, 기존 의료체계 및 산업구조에 미친 영향을 고찰하였다. 특히 애플, 구글, 휴메인(Humane) 등 기술 중심 기업들이 헬스케어 시장에 진입하면서 전통 의료서비스와 경쟁 또는 보완 관계를 형성해가는 과정을 살펴보았다. 파괴적 혁신의 이론적 정의부터 시장 진입 전략, 사용자 중심 설계, 건강 데이터 활용, 규제 대응 전략에 이르기까지 종합적인 분석을 수행하였다. 이 논문은 헬스케어 산업의 미래 방향성과, 기술기반 기업들이 의료 생태계에서 차지할 위치를 전망하는 데 기여할 수 있다.",
      tech: ["디지털 헬스케어"],
      essay:
        "https://drive.google.com/file/d/1QpqRBVTUjsKypp1oIa8PwWg_Wy0qaBhW/view",
    },
    {
      title:
        "✏️ 코로나 이후 세대의 직장 만족도에 영향을 미치는 요인 분석 (🏆수상)",
      description:
        "코로나19 이후 청년층의 직무 만족도에 영향을 미치는 주요 요인을 분석한 실증 연구",
      fullDescription:
        "본 연구는 청년패널 13차, 14차 추가패널과 YP2021 데이터를 활용하여, 코로나19 팬데믹 이후 청년층의 직장 만족도에 영향을 미치는 요인을 실증적으로 분석하였다. 특히 직장-전공 일치도, 업무역량, 직업 선택 시 가치관(이타성, 안정성 등), 스펙(학점, 자격증 등)과 같은 요인이 만족도에 어떠한 영향을 주는지를 정량 분석하였다. 회귀분석 결과, 전공과 직무의 일치도, 창의적 문제 해결 능력, 계획적 생활습관 등이 직장 만족도에 유의미한 긍정적 영향을 미쳤으며, 이는 변화하는 취업시장 속에서 유연하게 적응할 수 있는 역량이 중요함을 시사한다. 본 연구는 팬데믹 이후 뉴노멀 시대의 고용 트렌드를 이해하고, 직무 만족을 높이기 위한 전략적 인사이트를 제공한다.",
      tech: ["STATA", "청년패널", "직무만족도"],
      essay:
        "https://drive.google.com/file/d/1nyYbUa_b_KnCrNzqA2RrJHwLwaiQ3lNj/view",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Sky Background - Skills에서 자연스럽게 연결 */}
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
        {/* Cloud Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold text-sky-800 mb-6 drop-shadow-sm">
              Projects
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-sky-600 max-w-2xl mx-auto leading-relaxed">
            구름 위에서 만들어낸 혁신적인 프로젝트들
          </p>
        </div>

        {/* Cloud Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Cloud Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 group-hover:border-sky-200 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Image Container */}
                {project.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
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
                      {expandedProject === index
                        ? project.fullDescription
                        : project.description}
                    </p>

                    <button
                      onClick={() => toggleExpand(index)}
                      className="flex items-center mt-2 text-sky-500 hover:text-sky-600 text-sm font-medium transition-colors duration-200 group/btn"
                    >
                      {expandedProject === index ? (
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
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="whitespace-nowrap text-sm group/btn flex items-center px-4 py-2 bg-white/70 hover:bg-white text-sky-600 hover:text-sky-700 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-sky-200 hover:border-sky-300 hover:shadow-md"
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
                        className="whitespace-nowrap text-sm group/btn flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
                        className="whitespace-nowrap text-sm group/btn flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
                        className="whitespace-nowrap text-sm group/btn flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        에세이
                      </a>
                    )}{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Cloud - 더 자연스럽게 통합 */}
        <div className="text-center mt-20 mb-8">
          <div className="inline-block p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 shadow-lg">
            <h3 className="text-2xl font-bold text-sky-800 mb-4">
              더 많은 프로젝트가 궁금하신가요?
            </h3>
            <p className="text-sky-600 mb-6">
              GitHub에서 전체 프로젝트를 확인해보세요!
            </p>
            <a
              href="https://github.com/kroad0129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-full font-semibold hover:from-sky-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub 방문하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
