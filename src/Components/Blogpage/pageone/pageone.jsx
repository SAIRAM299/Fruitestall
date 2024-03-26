import React from 'react';
import "./pageone.css"
import blogimage from "../../../assets/blogimage.png"
import copyapp from "../../../assets/copy.png"
import twitterapp from "../../../assets/Twitter.png"
import linkinapp from "../../../assets/linkedin.png"
import fbapp from "../../../assets/Facebook.png"


const Pageone = () => {
    return (
        <div className='blog-body'>

          <div className='blog-heading'>
            <h1 className='blog-title'>Empowering your<span className='inline'>wellness </span> journey Exciting tips from health experts</h1>
          </div>

          <div className='blog-imagebox'>
<img className='blog-image' src={blogimage}/>

<div className='blog-linkinfo'>

<div className='introdo'>
<div className='writer'>
<p className='link-font'>Written by</p><h3 className='line-name'> Rhode Coldman</h3>
</div>

<div className='writer'>
<p className='link-font'>Published on</p><h3 className='line-name'> Jan 2,2024</h3>
</div>
</div>



<div className='linklist-c'>
<ul className='link-c'>
    <li className='copydo'><img className='copy-img' src={copyapp}/><h3 className='link-name'>copy link</h3></li>
    <li className='icon-cc'><img className='icon-c' src={twitterapp}/></li>
    <li className='icon-cc'><img className='icon-c' src={linkinapp}/></li>
    <li className='icon-cc'><img className='icon-c' src={fbapp}/></li>
</ul>
</div>


</div>



          </div>



        </div>
    );
}

export default Pageone;
