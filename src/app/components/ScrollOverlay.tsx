"use client";

import type React from "react";
import { useEffect, useState } from "react";

interface ScrollOverlayProps {
  children: React.ReactNode;
}

const ScrollOverlay: React.FC<ScrollOverlayProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    // 초기 브라우저 높이 설정
    setInnerHeight(window.innerHeight);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 서버에서는 0이라 opacity 1 고정 → 클라이언트에선 정상 작동
  const heroOpacity = innerHeight ? Math.max(0, 1 - scrollY / innerHeight) : 1;

  return (
    <div className="relative">
      <div
        className="fixed inset-0 z-0 transition-opacity duration-300"
        style={{ opacity: heroOpacity }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollOverlay;
