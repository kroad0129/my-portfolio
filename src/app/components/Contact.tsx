"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import type { ContactInfo } from "@/types"

interface FormData {
    name: string
    email: string
    message: string
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    })

    const contactInfo: ContactInfo = {
        email: "your.email@example.com",
        phone: "010-0000-0000",
        location: "서울, 대한민국",
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        // 폼 제출 로직 구현
        console.log("Form submitted:", formData)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">연락처 정보</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                                    <span className="text-gray-700">{contactInfo.email}</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                                    <span className="text-gray-700">{contactInfo.phone}</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                                    <span className="text-gray-700">{contactInfo.location}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-600 leading-relaxed">
                                새로운 기회나 협업에 대해 언제든 연락주세요. 함께 멋진 프로젝트를 만들어보고 싶습니다!
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    이름
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder="이름을 입력하세요"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    이메일
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder="이메일을 입력하세요"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    메시지
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder="메시지를 입력하세요"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                            >
                                <Send className="w-4 h-4 mr-2" />
                                메시지 보내기
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
