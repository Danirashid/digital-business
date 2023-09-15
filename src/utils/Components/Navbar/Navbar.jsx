"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });
  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* Desktop Navbar */}
      <div className="container">
        <div className="n-container">
          {/* left gallery section */}
          <div className="n-left">
            <span>Digital Business</span>
          </div>
          {/* right text and subscribe */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>What We Do</span>
              </Link>
              <Link to="od-wrapper" spy={true} smooth={true}>
                <span>our difference</span>
              </Link>

              <Link to="hiw-wrapper" spy={true} smooth={true}>
                <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy={true} smooth={true}>
                <span>Who we invest in</span>
              </Link>
              <Link to="t-wrapper" spy={true} smooth={true} offset={100}>
                <span>Testimonials</span>
              </Link>
            </div>
            <div className="fund-btn">Get Funded</div>
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="mn-container">
        {/* logo */}
        <span>Digital Business</span>

        {/* hamburger menu */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* Mobile Menu */}
        <div
          className="mn-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwd-wrapper"
            spy={true}
            smooth={true}
          >
            <span>What We Do</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="od-wrapper"
            spy={true}
            smooth={true}
          >
            <span>our difference</span>
          </Link>

          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="hiw-wrapper"
            spy={true}
            smooth={true}
          >
            <span>How it works</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwi-wrapper"
            spy={true}
            smooth={true}
          >
            <span>Who we invest in</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="t-wrapper"
            spy={true}
            smooth={true}
            offset={100}
          >
            <span>Testimonials</span>
          </Link>
          <div className="m-funded">Get Funded</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
