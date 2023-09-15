import React from "react";
import "./Footer.css";
import EmailBox from "../Email box/EmailBox";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get Funded Today</span>

          <EmailBox />

          <hr />
          <div className="f-menu">
            <span>Home</span>
            <span>What we do</span>
            <span>how it works</span>
            <span>who we invest in</span>
            <span>testimonials</span>
          </div>
          <hr />
          <span className="text"> Made with by Danyal Rashid</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
