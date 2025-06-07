import type React from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/types"

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: "프로젝트 1",
            description:
                "React와 Node.js를 사용한 풀스택 웹 애플리케이션입니다. 사용자 인증, 데이터베이스 연동 등의 기능을 포함합니다.",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            image: "/placeholder.svg?height=200&width=300",
            github: "#",
            demo: "#",
        },
        {
            title: "프로젝트 2",
            description:
                "Next.js와 TypeScript를 활용한 모던 웹 애플리케이션입니다. 서버사이드 렌더링과 최적화된 성능을 제공합니다.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
            image: "/placeholder.svg?height=200&width=300",
            github: "#",
            demo: "#",
        },
        {
            title: "프로젝트 3",
            description:
                "Python Django를 사용한 백엔드 API 서버입니다. RESTful API 설계와 데이터베이스 최적화에 중점을 두었습니다.",
            tech: ["Python", "Django", "PostgreSQL", "Docker"],
            image: "/placeholder.svg?height=200&width=300",
            github: "#",
            demo: "#",
        },
    ]

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project: Project, index: number) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-48 w-full">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech: string, techIndex: number) => (
                                        <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="w-4 h-4 mr-1" />
                                        Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-1" />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
