"use client"

import type React from "react"

interface SocialLink {
    href: string
    icon: React.ReactNode
    label: string
}

const Hero: React.FC = () => {
    const socialLinks: SocialLink[] = [
        {
            href: "#",
            icon: <span className="text-gray-700 text-xl">🐙</span>,
            label: "GitHub",
        },
        {
            href: "#",
            icon: <span className="text-gray-700 text-xl">💼</span>,
            label: "LinkedIn",
        },
        {
            href: "#",
            icon: <span className="text-gray-700 text-xl">📧</span>,
            label: "Email",
        },
    ]

    return (
        <section className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                            안녕하세요, <span className="text-blue-600">김태희</span>입니다
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
                        <button
                            onClick={() => {
                                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
                            }}
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            프로젝트 보기
                        </button>
                        <button
                            onClick={() => {
                                const contactSection = document.getElementById("contact")
                                if (contactSection) {
                                    const offsetTop = contactSection.offsetTop + window.innerHeight
                                    window.scrollTo({ top: offsetTop, behavior: "smooth" })
                                }
                            }}
                            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                            연락하기
                        </button>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
