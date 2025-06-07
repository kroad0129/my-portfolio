import type React from "react"
import Image from "next/image"

interface PersonalInfo {
    label: string
    value: string
}

const About: React.FC = () => {
    const personalInfo: PersonalInfo[] = [
        { label: "이름", value: "김태희" },
        { label: "위치", value: "서울, 대한민국" },
        { label: "이메일", value: "your.email@example.com" },
        { label: "전화", value: "010-0000-0000" },
    ]

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900">안녕하세요! 저는 열정적인 개발자입니다.</h3>
                        <p className="text-gray-600 leading-relaxed">
                            웹 개발에 대한 열정을 가지고 있으며, 사용자 경험을 중시하는 개발자입니다. 새로운 기술을 배우는 것을
                            좋아하고, 문제 해결을 통해 성장하는 것을 즐깁니다.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            프론트엔드와 백엔드 모두에 관심이 많으며, 효율적이고 확장 가능한 솔루션을 만드��� 것을 목표로 합니다.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {personalInfo.map((info: PersonalInfo, index: number) => (
                                <div key={index}>
                                    <h4 className="font-semibold text-gray-900 mb-2">{info.label}</h4>
                                    <p className="text-gray-600">{info.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative w-80 h-80 bg-gray-200 rounded-lg overflow-hidden">
                            <Image
                                src="/placeholder.svg?height=320&width=320"
                                alt="프로필 이미지"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 320px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
