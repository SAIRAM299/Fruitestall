import React, { useState } from 'react';
import { FaCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import GirlImage from "../../assets/Girl1.png";
import SmellImage from "../../assets/smell.jpg";
import SaladImage from "../../assets/Salad.jfif";
import BackgroundFruitImage from "../../assets/backgroundfruit.png";
import "./Accordiancomp.css"
const Accordiancomp = () => {

const [selectedPanel, setSelectedPanel] = useState('1');

const handlechange = (panel) => {
  setSelectedPanel(panel);
};
    return (
        <div className='Accordian-total-content'>
         <div className='Accordian-titles'  >   
            <h1 key="1" className='Accordian-heading' onClick={()=>handlechange("1")}>{ selectedPanel=="1" ? <FaCircle className='Accordian-dot'/>:<FaAngleDown className="Accordian-arrow"/>}The Story</h1>
            {selectedPanel=="1" &&
<p className='Accordian-details'>Founded on the principles of dedication, support, and a shared commitment to health, we guide you towards your transformative path. Lorem ipsum dolor sit amet consectetur. Semper donec sem donec<br/><br/> Habitasse facilisis mattis sem. Augue et leo cursus consectetur dolor viverra tempor morbi. Pellentesque vel ornare tristique iaculis iaculis. Nibh at magna malesuada gravida sed accumsan magna magna</p>
}    
            <h1 key="2" className='Accordian-heading' onClick={()=>handlechange("2")}>{ selectedPanel=="2" ? <FaCircle className='Accordian-dot'/>:<FaAngleDown className="Accordian-arrow"/>}The Mission</h1>
            {selectedPanel=="2" &&  
<p className='Accordian-details'>Founded on the principles of dedication, support, and a shared commitment to health, we guide you towards your transformative path. Lorem ipsum dolor sit amet consectetur. Semper donec sem donec<br/><br/> Habitasse facilisis mattis sem. Augue et leo cursus consectetur dolor viverra tempor morbi. Pellentesque vel ornare tristique iaculis iaculis. Nibh at magna malesuada gravida sed accumsan magna magna.</p>
}  
            <h1 key="3" className='Accordian-heading' onClick={()=>handlechange("3")}> { selectedPanel=="3" ? <FaCircle className='Accordian-dot'/>:<FaAngleDown className="Accordian-arrow"/>}The Vision</h1>
            {selectedPanel=="3" && 
<p className='Accordian-details'>Founded on the principles of dedication, support, and a shared commitment to health, we guide you towards your transformative path. Lorem ipsum dolor sit amet consectetur. Semper donec sem donec <br/> <br/>Habitasse facilisis mattis sem. Augue et leo cursus consectetur dolor viverra tempor morbi. Pellentesque vel ornare tristique iaculis iaculis. Nibh at magna malesuada gravida sed accumsan magna magna.</p>
}    
        </div>

        <div>
        <div className='Accordian-images' style={{ display: selectedPanel === '1' ? 'block' : 'none' }}>
          <img src={BackgroundFruitImage} alt="Girl" className="Back-image" />
          <img src={GirlImage} alt="Background" className="Front-image" />
        </div>
        <div className='Accordian-images' style={{ display: selectedPanel === '2' ? 'block' : 'none' }}>
          <img src={BackgroundFruitImage} alt="Salad" className="Back-image" />
          <img src={SaladImage} alt="Background" className="Front-image" />
        </div>
        <div className='Accordian-images' style={{ display: selectedPanel === '3' ? 'block' : 'none' }}>
          <img src={BackgroundFruitImage} alt="Smell" className="Back-image" />
          <img src={SmellImage} alt="Background" className="Front-image" />
        </div>
      </div>

        </div>
    );
}

export default Accordiancomp;
