import React, { useState } from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import "./Body.css";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [details, setdetails] = useState([
    {
      img: img1,
      status1: "MENTAL HEALTH",
      status2: "5 min read",
      info: "Empowering your wellness journey + Exciting tips from health experts ",
      day: "3 days ago",
    },
    {
      img: img2,
      status1: "WEIGHT LOSS",
      status2: "3 min read",
      info: "The Science Behind Weight Loss: Calories and Metabolism",
      day: "A week ago",
    },
    {
      img: img3,
      status1: "FOOD SCIENCE",
      status2: "6 min read",
      info: "Effective and Sustainable Diet Plans for Lasting Weight Loss",
      day: "Dec 27,2023",
    },
    {
      img: img4,
      status1: "PHYSICAL HEALTH",
      status2: "3 min read",
      info: "Incorporating Exercise into Your Routine for Maximum Fat Burn",
      day: "Dec 03,2023",
    },
    {
      img: img5,
      status1: "MENTAL HEALTH",
      status2: "16 min read",
      info: "Body Positivity and Self-Love on Your Weight Loss Journey",
      day: "Nov 13,2023",
    },
    {
      img: img6,
      status1: "WEIGHT LOSS",
      status2: "7 min read",
      info: "Breaking Down Common Myths About Weight Loss and Fitness ",
      day: "Oct 20,2023",
    },
    {
      img: img7,
      status1: "WEIGHT LOSS",
      status2: "3 min read",
      info: "How to Stay Motivated on Your Weight Loss Journey: Tips and Tricks",
      day: "Oct 03,2023",
    },
    {
      img: img8,
      status1: "MENTAL HEALTH",
      status2: "5 min read",
      info: "The Role of Sleep in Weight Loss and Overall Well-being ",
      day: "Sep 29,2023",
    },
  ]);

  const navigate = useNavigate()

  const handlenavigate = ()=>{
    navigate("./blog-subpage")
  }
  return (
    <div>
      <div className="listbody">
        {details.map((list, index) => (
          <div className="cards" key={index}>
            <div className="container-c">
              <img className="image-c" src={list.img} />

              <div className="infobox-c" onClick={handlenavigate}>

                <div className="statusbar-c">
                  <div className="status-c">
                    <h3 className="status1">{list.status1}</h3>
                  </div>
                  <h3 className="status2">{list.status2}</h3>
                </div>

                <div className="about-c">{list.info}</div>

                <div ><h3 className="day">{list.day}</h3></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
