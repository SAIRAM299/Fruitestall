import React from 'react'
import "./HomeComp.css"
import homepic from "../../assets/homepic.png"
import hello from "../../assets/hello.png"
import GetStartComp from './GetStartComp'
import TextAnimationcomp from './TextAnimationcomp'

export default function HomeComp() {
  return (
  <>
  < div className='main'>
 <div className='home'>
  <TextAnimationcomp/>
  <br />  <br />
 <h1 className='ms-2 '> from  inside-out</h1>
  <GetStartComp/>
 </div>
 <div className='home-pic'> 
 <img src={homepic} alt="homepic"  />
 </div>
 </div>
 <div className='hello'>
  <div>
  <img src={hello} alt="hello" height={20}  width={20}/>
  <span >Hello!</span>
  </div>
  <p>  Lorem ipsum dolor sit amet consectetur <span className='disappear'> healthy and fit</span></p>
 </div>

 </>
  )
}
