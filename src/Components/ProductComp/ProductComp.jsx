import React, { useState, useEffect, useLayoutEffect } from "react";
import avacado from "../../assets/avacado.png";
import pear from "../../assets/pear.png";
import cherry from "../../assets/cherry1.png";
import strawberry from "../../assets/strawberry.png";
import "./ProductComp.css";

const products = [
  {
    id: 1,
    title: "Lorem ipsum ",
    para: "dolor sit amet consectetur",
    imageUrl: avacado,
    background: "#BFDFF6",
    content: "#EEF8FF",
  },
  {
    id: 2,
    title: "Track intake",
    para: "easily and effortlessly",
    imageUrl: cherry,
    background: "#e7f6fe",
    content: "#ffcccb",
  },
  {
    id: 3,
    title: "Track intake",
    para: "easily and effortlessly",
    imageUrl: strawberry,
    background: "#fdd4d3",
    content: "#c1e1c1",
  },
  {
    id: 4,
    title: "Track intake",
    para: "easily and effortlessly",
    imageUrl: pear,
    background: "#dec4de",
    content: "#fdd4d3",
  },
];

const ProductComp = () => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 1000); // Switch product every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (index) => {
    setShowDescription(true);
    setTimeout(() => {
      if (index < 3) {
        index += 1;
        setActiveProductIndex(index);
      } else {
        setActiveProductIndex(0);
      }
    }, 1000);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 550);
    };

    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []);

  return (
    <div className="product-container">
      <div
        className="box"
        onClick={() => handleMouseEnter(activeProductIndex)}
        onMouseLeave={handleMouseLeave}
      >
        {isMobileView ? (
          <>
            {/* Description div first */}
            <div
              className={`description ${showDescription ? "show" : ""}`}
              style={{ background: products[activeProductIndex].content }}
            >
              <h1 >
                <div className="namebig">
                0{products[activeProductIndex].id}
                </div>
                <br />
                <span
                  style={{ color: products[activeProductIndex].background }}
                >
                  {products[activeProductIndex].title}
                </span>
                <p>{products[activeProductIndex].para}</p>
              </h1>
            </div>

            {/* Fruit div second */}
            <div
              className="fruit"
              style={{ background: products[activeProductIndex].background }}
            >
              <img
                src={products[activeProductIndex].imageUrl}
                alt={`Product ${products[activeProductIndex].id}`}
                style={{ maxWidth: "80%", maxHeight: "50%" }}
              />
            </div>
          </>
        ) : (
          <>
            <div
              className="fruit"
              style={{ background: products[activeProductIndex].background }}
            >
              <img
                src={products[activeProductIndex].imageUrl}
                alt={`Product ${products[activeProductIndex].id}`}
                style={{ maxWidth: "80%", maxHeight: "50%" }}
              />
            </div>

            <div
              className={`description ${showDescription ? "show" : ""}`}
              style={{ background: products[activeProductIndex].content }}
            >
              <h1>
                0{products[activeProductIndex].id}
                <br />
                <span
                  style={{ color: products[activeProductIndex].background }}
                >
                  {products[activeProductIndex].title}
                </span>
                <p>{products[activeProductIndex].para}</p>
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductComp;
