import React, { useState } from 'react';
import { Collapse } from 'antd';
import GirlImage from "../../assets/Girl1.png";
import SmellImage from "../../assets/smell.jpg";
import SaladImage from "../../assets/Salad.jfif";
import BackgroundFruitImage from "../../assets/backgroundfruit.png";
import "./collapse.css";

const { Panel } = Collapse;

const Collapsecomponent = () => {
  const [selectedPanel, setSelectedPanel] = useState('1');

  const onChange = (key) => {
    setSelectedPanel(key[0]);
  };

  return (
    <div className='B-total-container'>
      <div className='B-collapse-container'>
        <Collapse accordion onChange={onChange} defaultActiveKey={['1']} >
          <Panel header="The Story" key="1">
            <p className='text-B-red'>
              Founded on the principles of dedication, support, and a shared commitment to health, we guide you towards your transformative path. Lorem ipsum dolor sit amet consectetur. Semper donec sem donec
            </p>
            <p className='text-B-red'>Habitasse facilisis mattis sem. Augue et leo cursus consectetur dolor viverra tempor morbi. Pellentesque vel ornare tristique iaculis iaculis. Nibh at magna malesuada gravida sed accumsan magna magna.</p>
          </Panel>
          <Panel header="The Mission" key="2">   
            <p className='text-B-red'>
              Founded on the principles of dedication, support, and a shared commitment to health, we guide you towards your transformative path. Lorem ipsum dolor sit amet consectetur. Semper donec sem donec
            </p>
            <p className='text-B-red'>Habitasse facilisis mattis sem. Augue et leo cursus consectetur dolor viverra tempor morbi. Pellentesque vel ornare tristique iaculis iaculis. Nibh at magna malesuada gravida sed accumsan magna magna.</p>
          </Panel>
          <Panel header="The Vision" key="3">
            <p className='text-B-red'>
              Founded on the principles of dedication, support, and a shared commitment to health, we guide you towards your transformative path. Lorem ipsum dolor sit amet consectetur. Semper donec sem donec
            </p>
            <p className='text-B-red'>Habitasse facilisis mattis sem. Augue et leo cursus consectetur dolor viverra tempor morbi. Pellentesque vel ornare tristique iaculis iaculis. Nibh at magna malesuada gravida sed accumsan magna magna.</p>
          </Panel>
        </Collapse>
      </div>
      <div className='B-images-contain'>
        <div className='B-Float-img' style={{ display: selectedPanel === '1' ? 'block' : 'none' }}>
          <img src={BackgroundFruitImage} alt="Girl" className="B-First-img" />
          <img src={GirlImage} alt="Background" className="B-Back-img" />
        </div>
        <div className='B-Float-img' style={{ display: selectedPanel === '2' ? 'block' : 'none' }}>
          <img src={BackgroundFruitImage} alt="Salad" className="B-First-img" />
          <img src={SaladImage} alt="Background" className="B-Back-img" />
        </div>
        <div className='B-Float-img' style={{ display: selectedPanel === '3' ? 'block' : 'none' }}>
          <img src={BackgroundFruitImage} alt="Smell" className="B-First-img" />
          <img src={SmellImage} alt="Background" className="B-Back-img" />
        </div>
      </div>

    </div>
  );
};

export default Collapsecomponent;
