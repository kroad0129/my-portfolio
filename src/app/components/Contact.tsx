"use client";

import type React from "react";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Mountain, Trees } from "lucide-react";
import type { ContactInfo } from "@/types";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo: ContactInfo = {
    email: "kroad0129@naver.com",
    phone: "010-6740-0129",
    location: "서울, 대한민국",
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // 폼 제출 로직 구현
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Ground Background - Experience에서 지상으로 자연스럽게 연결 */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-green-50 to-green-100" />

      {/* Ground Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-green-300/30" />

      {/* Mountain Silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <Mountain className="absolute bottom-8 left-10 w-16 h-16 text-green-400/60" />
        <Mountain className="absolute bottom-12 right-20 w-12 h-12 text-green-500/50" />
        <Trees className="absolute bottom-4 left-1/4 w-10 h-10 text-green-600/40" />
        <Trees className="absolute bottom-6 right-1/3 w-8 h-8 text-green-500/50" />
      </div>

      {/* Last floating clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-24 bg-white/40 rounded-full blur-sm animate-float" />
        <div className="absolute top-40 right-10 w-72 h-20 bg-white/30 rounded-full blur-sm animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-sky-800 mb-4 drop-shadow-sm">
            Contact
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-green-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-sky-600 text-lg">
            하늘에서 지상으로, 함께 소통해요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-semibold text-sky-800 mb-6">
                연락처 정보
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-sky-50/50 rounded-2xl">
                  <Mail className="w-6 h-6 text-sky-600 mr-4" />
                  <span className="text-sky-700 font-medium">
                    {contactInfo.email}
                  </span>
                </div>
                <div className="flex items-center p-4 bg-sky-50/50 rounded-2xl">
                  <Phone className="w-6 h-6 text-sky-600 mr-4" />
                  <span className="text-sky-700 font-medium">
                    {contactInfo.phone}
                  </span>
                </div>
                <div className="flex items-center p-4 bg-sky-50/50 rounded-2xl">
                  <MapPin className="w-6 h-6 text-sky-600 mr-4" />
                  <span className="text-sky-700 font-medium">
                    {contactInfo.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h4 className="text-lg font-semibold text-sky-800 mb-4">
                소셜 미디어
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/kroad0129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">🐙</span>
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/taehee0_0129/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">📷</span>
                  Instagram
                </a>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50">
              <p className="text-sky-600 leading-relaxed">
                새로운 기회나 협업에 대해 언제든 연락주세요. 함께 멋진
                프로젝트를 만들어보고 싶습니다!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-sky-700 mb-2"
                >
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-sky-200 rounded-2xl focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white/70 backdrop-blur-sm"
                  placeholder="이름을 입력하세요"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-sky-700 mb-2"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-sky-200 rounded-2xl focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white/70 backdrop-blur-sm"
                  placeholder="이메일을 입력하세요"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-sky-700 mb-2"
                >
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-sky-200 rounded-2xl focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white/70 backdrop-blur-sm"
                  placeholder="메시지를 입력하세요"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-400 to-green-500 text-white py-3 px-6 rounded-2xl hover:from-sky-500 hover:to-green-600 transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-lg font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                메시지 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
