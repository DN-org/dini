import React, { useState, useEffect, ReactNode } from "react";
import { ScrollToTopButtonArrow, ScrollToTopButtonStyled } from "./ScrollToTopButton.styled";

interface ScrollToTopButtonProps {
  children: ReactNode;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <ScrollToTopButtonStyled 
        onClick={scrollToTop}
        style={{ display: isVisible ? "flex" : "none" }}
        title="Вернуться наверх"
      >
        <ScrollToTopButtonArrow />
      </ScrollToTopButtonStyled>
      {children}
    </div>
  );
};

export default ScrollToTopButton;
