import React, { useState } from "react";
import "./contact.css";
import contmail from "../../assets/contmail.png";
import contfacebook from "../../assets/contfacebook.png";
import continsta from "../../assets/continsta.png";
import contwitter from "../../assets/conttwitter.png";

const Contactuscomp = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log("Email:", email);
    console.log("Message:", message);

    setEmail("");
    setMessage("");
  };

  return (
    <div className="Total-page-B">
      <div className="Total-contpg">
        <div className="left-B-column">
          <h2 className="have-question">
            Have Questions? Ask <br></br>us anything you want and 
            we’ll answer
          </h2>
          <p className="Send-mail">Send a mail instead?</p>
          <a className="Hello-primalcare">hello@primalcare.com</a>
        </div>
        <div className="Rightb-column">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="input input-class"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
            className="input-class "
          ></textarea>
          <div className="Class-message">
            <button className="Btn-Send-message" onClick={handleSendMessage}>
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="B-Bottom-media">
        <div className="B-mediaAlign">
          <p>
            <img src={contmail} className="social-contimg0"></img>Join our
            newsletter
          </p>
        </div>
        <div>
          <img src={contfacebook} className="social-contimg1"></img>
          <img src={continsta} className="social-contimg2"></img>
          <img src={contwitter} className="social-contimg3"></img>
        </div>
      </div>
    </div>
  );
};

export default Contactuscomp;
