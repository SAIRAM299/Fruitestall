import React from "react";
import pine from "../../assets/pine.png";
import avacado from "../../assets/avacado.png";
import pear from "../../assets/pear.png";
import cherry from "../../assets/cherry1.png";
import strawberry from "../../assets/strawberry.png";
import "./ContentComp.css";

export default function ContentComp() {
  const products = [
    {
      id: 1,
      title: "Scientifically proven ",
      imageUrl: pine,
      background: "#FFF0A1",
    },
    {
      id: 2,
      title: "Evidence based ",
      imageUrl: cherry,
      background: "#e7f6fe",
    },
    {
      id: 3,
      title: "Result oriented",
      imageUrl: strawberry,
      background: "#fdd4d3",
    },
    {
      id: 4,
      title: "Lorem dolor",
      imageUrl: pear,
      background: "#dec4de",
    },
  ];
  return (
    <div className="contentcheck">
      <div className="content-we">
        <h1>We are</h1>
      </div>
      
         <div className="Prod-image">
        {products.map((e, i) => (
          <img
            src={e.imageUrl}
            alt="img"
            style={{ background: e.background }}
          />
        ))}
      </div>
      <div className="content-base">
        <ul className="list">
          {products.map((e, i) => (
            <li>{e.title}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}
