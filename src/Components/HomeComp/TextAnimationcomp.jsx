import React, { useEffect, useState } from 'react';
import "./TextAnimationcomp.css";

const TextAnimationcomp = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const words = ['ranscend', ' hrive', 'ransform'];

  // Concatenate multiple instances of the words array
  const repeatedWords = [...words, ...words, ...words, ...words,...words, ...words,...words, ...words,...words, ...words,...words, ...words,...words, ...words,...words, ...words,];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex(prevIndex => (prevIndex + 1) % repeatedWords.length);
    }, 3000); // Change the interval duration if needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-animation-container">
      <span className="common">T</span>
      {repeatedWords.map((word, index) => (
        <span
          key={index}
          className={`text-animation ${
            animationIndex === index ? 'show' : ''
          } ${
            index % words.length === 0
              ? 'slide-right-to-left'
              : index % words.length === 1
              ? 'slide-left-to-right'
              : 'slide-top-to-bottom'
          }`}
          // style={{ animationDelay: `${index * 5}s` }}
          style={{ animationDelay: `${index * 3 + 2}s` }} // Adjust delay for each word

        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextAnimationcomp;