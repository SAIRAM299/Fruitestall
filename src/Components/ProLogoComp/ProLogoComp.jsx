import React, { useState } from "react";
import hand from "../../assets/hand.png";
import puzzle from "../../assets/puzzle.png";
import mountain from "../../assets/mountain.png";
import climb from "../../assets/climb.png";
import pizzaimg from "../../assets/pizza1.png";
import stethsimg from "../../assets/Stethoscope.png";
import tomatoimg from "../../assets/tomato.png";
import girlimg from "../../assets/girl.png";
import line from "../../assets/Line.png";
import "./ProLogoComp.css";

const ProLogoComp = () => {
  const [steths, setsteths] = useState(false);
  const [girl, setgirl] = useState(false);
  const [tomato, settomato] = useState(false);
  const [pizza, setpizza] = useState(false);

  const showpizza = () => {
    setpizza(true);
  };
  const showtomato = () => {
    settomato(true);
  };

  const showsteth = () => {
    setsteths(true);
  };

  const showgirl = () => {
    setgirl(true);
  };

  const hidepizza = () => {
    setpizza(false);
  };
  const hidetomato = () => {
    settomato(false);
  };

  const hidesteth = () => {
    setsteths(false);
  };

  const hidegirl = () => {
    setgirl(false);
  };

  return (
    <div className="prologocomp-maincontainer">
      <div className="prologocomp-firstimg">
        {steths && <img src={stethsimg} className="prologocomp-image" />}
        {girl && <img src={girlimg} className="prologocomp-image" />}
      </div>

      <div className="prologocomp-font-box">
        <p className="prologocomp-head">
          <img src={line} />
          Lorem Ipsum Dollar
        </p>
        <ul className="prologocomp-list">
          <li
            className="prologocomp-listfont"
            onMouseEnter={showpizza}
            onMouseLeave={hidepizza}
          >
            <img className="hand prologocomp-icon" src={hand} />
            <h1 className="prologocomp-font">
              Lorem ipsum dolor sit amet consectetur. In.
            </h1>
          </li>
          <li
            className="prologocomp-listfont"
            onMouseEnter={showsteth}
            onMouseLeave={hidesteth}
          >
            <img className="puzzle prologocomp-icon" src={puzzle} />
            <h1 className="prologocomp-font">
              Lorem ipsum dolor sit amet consectetur. In.
            </h1>
          </li>
          <li
            className="prologocomp-listfont"
            onMouseEnter={showtomato}
            onMouseLeave={hidetomato}
          >
            <img className="mountain prologocomp-icon" src={mountain} />
            <h1 className="prologocomp-font">
              Lorem ipsum dolor sit amet consectetur. In.
            </h1>
          </li>
          <li
            className="prologocomp-listfont"
            onMouseEnter={showgirl}
            onMouseLeave={hidegirl}
          >
            <img className="climb prologocomp-icon" src={climb} />
            <h1 className="prologocomp-font">
              Lorem ipsum dolor sit amet consectetur. In.
            </h1>
          </li>
        </ul>
      </div>

      <div className="prologocomp-secondimg">
        {pizza && <img src={pizzaimg} className="prologocomp-image" />}
        {tomato && <img src={tomatoimg} className="prologocomp-image" />}
      </div>
    </div>
  );
};

export default ProLogoComp;
