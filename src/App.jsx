import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Pages from "./Components/Pages/index";
import Contactuscomp from "./Components/ContactUspage/ContactUs";
import AboutUsComponent from "./Components/AboutUsComp/AboutUsComponent";
import ListComp from "./Components/ListComp/ListComp";
import Footercomp from "./Components/Footercomp/Footercomp"
import BlogPageAll from "./Components/Blogpage/index";
import Subpage from "./Components/Blogpage/Subpage";
import Navbar from "./Components/NavbarComp/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      {/* <Pages /> */}
      {/* <ListComp /> */}
<Navbar/>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/blog" element={<BlogPageAll/>} />
        <Route path="/about" element={<AboutUsComponent />} />
        <Route path="/contact" element={<Contactuscomp />} />

        <Route path="/blog/blog-subpage" element={<Subpage />} />

      </Routes>
      <Footercomp/>
    </BrowserRouter>
  );
}

export default App;
