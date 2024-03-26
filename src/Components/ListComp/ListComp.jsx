// import React, { useState } from "react";
// import "./ListComp.css";
// import { Route, Link, Routes } from "react-router-dom";

// import align from "../../assets/align-justify.png";

// import Pages from "../Pages/index";
// import Contactuscomp from "../ContactUscomp/Contactuscomp";
// import Aboutuscomp from "../AboutUs/Aboutuscomp";

// const ListComp = () => {
//   const [menuVisible, setMenuVisible] = useState(false);

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };

//   return (
//     <div className="toggle-icon">
//       <img
//         src={align}
//         alt="icon"
//         width={30}
//         height={30}
//         onClick={toggleMenu}
//         style={{ cursor: "pointer" }}
//       />

//       {menuVisible && (
//         <div className="menuOptions">
//           {/* <ul>
//               <li>Home</li>
//               <li>Blog</li>
//               <li>About Us</li>
//               <li>Contact Us</li>

//             </ul> */}

//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/blog">Blog</Link>
//             </li>
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//           <Routes>
//             <Route path="/" element={<Pages />} />
//             {/* <Route path="/blog" element={<Blog />} /> */}
//             <Route path="/about" element={<Aboutuscomp />} />
//             <Route path="/contact" element={<Contactuscomp />} />
//           </Routes>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListComp;


import React, { useState } from "react";
import "./ListComp.css";
import { Route, Link, Routes } from "react-router-dom";

import align from "../../assets/align-justify.png";

import Pages from "../Pages/index";

const ListComp = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
    <div className="toggle-icon">
      <img
        src={align}
        alt="icon"
        width={30}
        height={30}
        onClick={toggleMenu}
        style={{ cursor: "pointer" }}
      />

      {menuVisible && (
        <div className="menuOptions">
          <ul onClick={toggleMenu}>
            <li >
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        
        </div>
        
      )}
    </div>
    </>
  );
};

export default ListComp;

