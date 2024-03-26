import React, { useState, useEffect } from 'react';
import "./carousel.css";
import Image1 from "../../assets/Image-1.png"
import Image2 from "../../assets/Image-2.png"
import Image3 from "../../assets/Image-3.png"
import Image4 from "../../assets/Image-4.png"
import Image5 from "../../assets/Image-5.png"
import Comma from "../../assets/Comma.png"


const ImageWithHoverTitle = ({ src, title, paragraph, onHover, defaultTitle }) => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div
      className="B-imagecontain"
      onMouseEnter={() => {
        setShowTitle(true);
        onHover(paragraph);
      }}
      onMouseLeave={() => setShowTitle(false)}
    >
      {showTitle ? <div className="Make-title-B">{title}</div> : <div className="Make-title-B">{defaultTitle}</div>}
      <img src={src} alt={title} />
    </div>
  );
};

const Carouselcomponent = () => {
  const [hoveredParagraph, setHoveredParagraph] = useState("Default paragraph text");
  const [defaultTitle, setDefaultTitle] = useState("");
  const [hoveredParagraphIndex, setHoveredParagraphIndex] = useState(0);

  const imagesData = [
    { src: Image1, title:<p>Kylie Wayne<br></br><span className='Make-Location-B'>Clinical Dietician</span></p>, paragraph: <p>Lorem ipsum dolor sit amet consectetur. Massa convallis montes lobortis nunc ut. Vulputate iaculis commodo quam commodo odio dolor urna et volutpat. In volutpat nascetur cursus dictumst habitant morbi. Sit felis ultrices leo pulvinar velit amet mauris. Gravida sed nisl ligula  odio dolor urna et volutpat. In volutpat nascetur cursus dictumst habitant morbi. Sit felis ultrices leo pulvinar velit amet mauris. Gravida sed nisl ligula </p> },
    { src: Image2, title: <p>John wick<br></br><span className='Make-Location-B'>Clinical Dietician</span> </p>, paragraph: <p>Lorem ipsum dolor sit amet consectetur. Massa convallis montes lobortis nunc ut. Vulputate iaculis commodo quam commodo odio dolor urna et volutpat. In volutpat nascetur cursus dictumst habitant morbi. Sit felis ultrices leo pulvinar velit amet mauris. Gravida sed nisl ligula  odio dolor urna et volutpat. In volutpat nascetur cursus dictumst habitant morbi. Sit felis ultrices leo pulvinar velit amet mauris. Gravida sed nisl ligula </p> },
    { src: Image3, title: <p>Alizza<br></br><span className='Make-Location-B'>Clinical Dietician</span></p>, paragraph: <p>Lorem ipsum dolor sit amet consectetur. Massa convallis montes lobortis nunc ut. Vulputate iaculis commodo quam commodo odio dolor urna et volutpat. In volutpat nascetur cursus dictumst habitant morbi. Sit felis ultrices leo pulvinar velit amet mauris. Gravida sed nisl ligula  odio dolor urna et volutpat. In volutpat nascetur cursus dictumst habitant morbi. Sit felis ultrices leo pulvinar velit amet mauris. Gravida sed nisl ligula </p> },
    { src: Image4, title: <p>Kenadi<br></br><span className='Make-Location-B'>Clinical Dietician</span></p>, paragraph: <p>Lorem ipsum dolor sit amet consectetur. Massa convallis montes lobortis nunc ut. Vulputate iaculis commodo quam commodo odio dolor urna et volutpat. In volutpat nascetur cursus dictumst habitant morbi. Sit felis ultrices leo pulvinar velit amet mauris. Gravida sed nisl ligula  odio dolor urna et volutpat. In volutpat nascetur cursus dictumst habitant morbi. Sit felis ultrices leo pulvinar velit amet mauris. Gravida sed nisl ligula </p> },
    { src: Image5, title: <p>Louies<br></br><span className='Make-Location-B'>Clinical Dietician</span></p>, paragraph: <p>Lorem ipsum dolor sit amet consectetur. Massa convallis montes lobortis nunc ut. Vulputate iaculis commodo quam commodo odio dolor urna et volutpat. In volutpat nascetur cursus dictumst habitant morbi. Sit felis ultrices leo pulvinar velit amet mauris. Gravida sed nisl ligula  odio dolor urna et volutpat. In volutpat nascetur cursus dictumst habitant morbi. Sit felis ultrices leo pulvinar velit amet mauris. Gravida sed nisl ligula </p> },
  ];

  useEffect(() => {
    setHoveredParagraph(imagesData[0].paragraph); 
  }, []);

  return (
    <div className="B-gallery">
      <div className='paragraph-comp'>
        <div className={`B-default-paragraph paragraph${hoveredParagraphIndex + 1}`}>
        <img src={Comma} className='dot'></img>
          <p className="Hoverd-Para-B"> {hoveredParagraph}</p>
        </div>
        
      </div>
      <div className='image-align-B'>
        {imagesData.map((data, index) => (
          <ImageWithHoverTitle
            key={index}
            src={data.src}
            title={data.title}
            paragraph={data.paragraph}
            onHover={() => {
              setHoveredParagraphIndex(index);
              setHoveredParagraph(data.paragraph);
            }}
            defaultTitle={defaultTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Carouselcomponent;
