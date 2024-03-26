import React from "react";
import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import four from "../../assets/four.png"
import five from "../../assets/five.png"
import six from "../../assets/six.png"
import seven from "../../assets/seven.png"
import eight from "../../assets/eight.png"
import "./BottomComp.css"

export default function BottomComp(){
    return(
        <div className="bottom">
<div className="first">
    <img src={one} alt="home1" />
    <img src={two} alt="home2"/><br />
    <img src={three} alt="home3" />
    <img src={four} alt="home4"/>
</div>
<div className="middle">
    <h1>Share is in the Love</h1>
    <button>Follow us on instagram </button>
</div>
<div className="last">
     <img src={five} alt="home5" />
    <img src={six} alt="home7" /><br />
    <img src={seven} alt="home6" />
    <img src={eight} alt="home8" />
</div>
        </div>
    )
}