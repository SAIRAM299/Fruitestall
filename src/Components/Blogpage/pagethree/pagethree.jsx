import React from 'react';
import "./pagethree.css"
import veg from "../../../assets/veg.png"

const Pagethree = () => {
    return (
        <div className='pagethree-body'>
            
            <div className='pagethree-contain'>
<h1 className='pagethree-heading'>Lorem ipsum dolor sit amet consectetur</h1>

<p className='pagethree-content'>Lorem ipsum dolor sit amet consectetur. Neque nunc facilisis est nibh. Purus ullamcorper massa non varius amet arcu at sed nec. Risus venenatis leo a turpis a magna. Ipsum nullam eget mattis commodo volutpat. Eget nisl massa sollicitudin a senectus sit in eget tortor. Adipiscing risus nulla orci est amet faucibus. Blandit sed at mauris massa ac dolor lorem.<br/><br/>

Et mi nunc amet vitae. Amet mauris phasellus massa augue faucibus eget. Adipiscing in a sed eget volutpat nec dignissim. Nunc commodo sed eleifend nibh. Elit iaculis eget vel pellentesque senectus faucibus.</p>
            </div>
            
            <div className='pagethree-image'>
<img className='pageimag' src={veg}/>
            </div>
        </div>
    );
}

export default Pagethree;
