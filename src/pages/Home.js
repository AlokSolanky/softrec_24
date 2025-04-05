import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Home = () => {
  const fullText = "Student of Tiruchirappalli Regional Engineering College";
  const words = fullText.split(" ");
  const [animatedWords, setAnimatedWords] = useState([]);
  const navigate = useNavigate();

  // Initialize animation state
  useEffect(() => {
    const initialWords = words.map((word) => {
      return word.split("").map((char, index) => ({
        char,
        visible: false,
        x: Math.random() * 200 - 100, // Random between -100 and 100
        y: Math.random() * 100 - 50, // Random between -50 and 50
        rotation: Math.random() * 60 - 30,
        delay: index * 50,
      }));
    });
    setAnimatedWords(initialWords);

    // Animate in after short delay
    const timer = setTimeout(() => {
      setAnimatedWords((prev) =>
        prev.map((word) =>
          word.map((char) => ({
            ...char,
            visible: true,
            x: 0,
            y: 0,
            rotation: 0,
          }))
        )
      );
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate("/event");
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex justify-center items-center pt-[30px] text-3xl font-bold">
        WELCOME
      </div>
      <br />
      <div className="flex justify-center items-center mt-[-20px] text-1xl font-bold">
        TO
      </div>
      <div className="flex justify-center items-center">
        <img
          className="h-[100px] w-[100px] bg-gray-100"
          src="/icons/softrec_icon.png"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-6">
          {animatedWords.map((word, wordIndex) => (
            <div key={`word-${wordIndex}`} className="flex justify-center">
              {word.map((char, charIndex) => (
                <span
                  key={`char-${wordIndex}-${charIndex}`}
                  className={`inline-block text-4xl font-bold text-gray-800 ${
                    char.visible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transform: `translate(${char.x}px, ${char.y}px) rotate(${char.rotation}deg)`,
                    transition: `all 0.8s ease-out ${char.delay}ms`,
                  }}
                >
                  {char.char}
                </span>
              ))}
            </div>
          ))}
        </div>

        <button
          onClick={() => handleClick()}
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Visit Events and About Us Pages
        </button>
      </div>
    </div>
  );
};

// export default AnimatedTextAssembly;
