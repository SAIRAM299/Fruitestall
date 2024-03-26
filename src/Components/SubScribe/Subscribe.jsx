import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import "./Subscribe.css";

export default function Subscribe() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMessage("Yay! you are in");

      setTimeout(() => {
        setInputValue("");
      }, 2000);
    }, 2000);
  };

  return (
    <div className="subscribe">
      <>
        <h1>Subscribe to our newsletter</h1>
        <p className="L-Para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </>
      {!message ? (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your email"
            size={45}
          />

          <button onClick={handleClick}>
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              <span>&#8594;</span>
            )}
          </button>
        </>
      ) : (
        <div className="success-message">
          <p>
            <AiFillCheckCircle />
            {message}
          </p>
        </div>
      )}
    </div>
  );
}




