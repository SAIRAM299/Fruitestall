import React from 'react';
import './footer.css'; // Import your CSS file for styling
import LogoNav from "../../assets/Logonav.png"
import Linkedin from "../../assets/linkedin.png"
import Insta from "../../assets/Insta.png"
import Facebook from "../../assets/Facebook.png"
import twitter from "../../assets/Twitter.png"
import Policy from "../../assets/Policy.png"


const Test = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={LogoNav} alt="LogoNav" className="footerimg" />
      </div>
      <div className="footer-center">
        <a href="https://www.linkedin.com/"><img src={Linkedin} alt="LinkedIn" className="social-icon" /></a>
        <a href="https://www.instagram.com/"><img src={Insta} alt="Instagram" className="social-icon" /></a>
        <a href="https://www.facebook.com/"><img src={Facebook} alt="Facebook" className="Facebook-icon" /></a>
        <a href="https://twitter.com/"><img src={twitter} alt="Twitter" className="twitter" /></a>
      </div>
      <div className="footer-right">
        <p className="side-image-text"><img src={Policy} alt="Side Image" className="side-image" />Primal Care | Privacy Policy </p>
      </div>
    </footer>
  );
}

export default Test;
