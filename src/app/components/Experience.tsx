import type React from "react"
import type { Experience } from "@/types"

const ExperienceSection: React.FC = () => {
    const experiences: Experience[] = [
        {
            title: "시니어 풀스택 개발자",
            company: "테크 컴퍼니",
            period: "2022 - 현재",
            description: "React, Node.js를 활용한 웹 애플리케이션 개발 및 팀 리딩을 담당했습니다.",
        },
        {
            title: "프론트엔드 개발자",
            company: "스타트업 A",
            period: "2020 - 2022",
            description: "Vue.js와 React를 사용한 사용자 인터페이스 개발을 담당했습니다.",
        },
        {
            title: "주니어 개발자",
            company: "소프트웨어 회사",
            period: "2019 - 2020",
            description: "웹 개발 기초를 다지고 다양한 프로젝트에 참여했습니다.",
        },
    ]

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-600"></div>

                        {experiences.map((exp: Experience, index: number) => (
                            <div key={index} className="relative mb-12">
                                {/* Timeline dot */}
                                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <div className="mb-2">
                                            <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                                            <p className="text-blue-600 font-medium">{exp.company}</p>
                                            <p className="text-gray-500 text-sm">{exp.period}</p>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
