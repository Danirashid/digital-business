"use client";
import React from "react";
import "./Hero.css";
import EmailBox from "../../Email box/EmailBox";
import { HeroData } from "@/src/utils/data";
import { animate, delay, motion, transform } from "framer-motion";
const Hero = () => {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });

  const imageVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stifness: 30,
      },
    },
  });

  return (
    <div className="h-wrapper">
      <div className="container">
        {/* background arrow image */}
        <img
          src="hero/hero-arrow.png"
          alt="hero-arrow"
          className="hero-arrow"
        />

        <div className="h-container">
          {/* left side of Hero */}
          <div className="h-left">
            {/* first image row */}
            <div className="image-row">
              {HeroData.slice(0, 3).map((person, i) => (
                <div className="person-pill" key={i}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imageVariants(person.delay)}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
            {/* second image row */}
            <div className="image-row">
              {HeroData.slice(3, 6).map((person, i) => (
                <div className="person-pill" key={i}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imageVariants(person.delay)}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          {/* right side of Hero */}
          <div className="h-right">
            <div className="h-title">
              <span>Redefine how</span>
              <span>You Grow your</span>
              <span>Digital Business</span>
            </div>

            <div className="h-des">
              Revenue Based funding and execution support designed for early
              stage founders
            </div>
            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
