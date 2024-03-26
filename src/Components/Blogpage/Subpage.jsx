import React from 'react'
import Pageone from "./pageone/pageone.jsx";
import Pagetwo from "./pagetwo/pagetwo.jsx";
import Pagethree from "./pagethree/pagethree.jsx";
import Pagefour from "./pagefour/pagefour.jsx";
import Pagefive from "./pagefive/pagefive.jsx";
import "./Subpage.css"
export default function Subpage() {
  return (
    <div className='Subpage-c'>
            <Pageone />
      <Pagetwo />
      <Pagethree />
      <Pagefour />
      <Pagefive />
    </div>
  )
}
