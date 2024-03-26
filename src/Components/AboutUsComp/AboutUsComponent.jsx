import React from 'react';
import "./aboutus.css"
import Operate1 from "../../assets/Operate1.png"
import Rightarrow from "../../assets/Rightarrow.png"
import Collapsecomponent from '../Collapsecomp/Collapsecomponent';
import Carouselcomponent from '../Carouselcomp/Carouselcomponent';
const AboutUsComponent = () => {
    return (
    <div className='Aboutus-total-page'>
      <div className="align-Text">
        <h1 className="Body-text">Body</h1>
        <h1 className="Mind-text">Mind</h1>
        <h1 className="Transform-text">transform</h1>
        <h1 className="Shine-text">shine</h1>
      </div>
      <div>
        <Collapsecomponent/>
      </div>
      <div>
      <div className="Operateclass-B">
          <img src={Operate1} className="B-Operatd-img" alt="operate" />
          <p className='We-operate'>We operate in<br></br><span className='USA-Operation'>United States</span></p>
      </div>
      </div>
      <div>
        <Carouselcomponent/>
      </div>
      <div className="Trans-form-class-b">
        <h1>
          Ready to <span className="span-trans">transform</span> yourself?
        </h1>
        <button className="Gets-button">
          Get Started{" "}
          <img src={Rightarrow} className="Right-arrow" alt="Rightarrow" />
        </button>
      </div>
        </div>
    );
}

export default AboutUsComponent;
