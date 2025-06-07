import type React from "react"
import { Github, Linkedin, Mail } from "lucide-react"

interface SocialLink {
    href: string
    icon: React.ReactNode
    label: string
}

const Hero: React.FC = () => {
    const socialLinks: SocialLink[] = [
        {
            href: "#",
            icon: <Github className="w-6 h-6 text-gray-700" />,
            label: "GitHub",
        },
        {
            href: "#",
            icon: <Linkedin className="w-6 h-6 text-gray-700" />,
            label: "LinkedIn",
        },
        {
            href: "#",
            icon: <Mail className="w-6 h-6 text-gray-700" />,
            label: "Email",
        },
    ]

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                            안녕하세요, <span className="text-blue-600">개발자</span>입니다
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                            창의적이고 혁신적인 웹 솔루션을 만드는 풀스택 개발자입니다
                        </p>
                    </div>

                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((link: SocialLink, index: number) => (
                            <a
                                key={index}
                                href={link.href}
                                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            프로젝트 보기
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                            연락하기
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
