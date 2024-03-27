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
    content: "#c1e1c1",
  },
  {
    id: 3,
    title: "Track intake",
    para: "easily and effortlessly",
    imageUrl: strawberry,
    background: "#fdd4d3",
    content: "#fdd4d3",
  },
  {
    id: 4,
    title: "Track intake",
    para: "easily and effortlessly",
    imageUrl: pear,
    background: "#dec4de",
    content: "#ffcccb",
  },
];

const ProductComp = () => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [showImages, setShowImages] = useState(
    Array(products.length).fill(false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 2000); // Switch product every 3 seconds

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
    }, 2000);
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImages(showImages.map((_, index) => index === activeProductIndex));
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, [activeProductIndex]);

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
              <h1 className={`heading ${showDescription ? "show" : ""}`}>
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
                key={products[activeProductIndex].id} // Use unique key for each image
                src={products[activeProductIndex].imageUrl}
                alt={`Product ${products[activeProductIndex].id}`}
                className={showImages[activeProductIndex] ? "show" : ""}
                style={{ maxWidth: "80%", maxHeight: "80%" }}
              />
            </div>

            <div
              className={`description ${showDescription ? "show" : ""}`}
              style={{ background: products[activeProductIndex].content }}
            >
              <h1
                key={products[activeProductIndex].id}
                className={`heading ${showDescription ? "show" : ""}`}
              >
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
