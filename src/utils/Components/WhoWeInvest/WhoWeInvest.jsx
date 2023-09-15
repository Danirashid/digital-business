import React from "react";
import "./WhoWeInvest.css";
import { whoWeInvest } from "../../data";
import { motion } from "framer-motion";
import { containerVariable, tagVariants, titleVariants } from "@/src/animation";
const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          {/* Left Side */}
          <div className="wwi-left">
            <div className="head">
              <motion.span
                variants={tagVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="tag"
              >
                Who We Invest
              </motion.span>
              <motion.span
                variants={titleVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="title"
              >
                Digital Businesses
                <br /> With Early Traction
              </motion.span>
            </div>
            {/* features */}
            <div className="wwi-features">
              {whoWeInvest.map((feature, i) => (
                <motion.div
                  variants={containerVariable(i * 0.5 + 1)}
                  initial="offscreen"
                  whileInView={"onscreen"}
                  className="wwi-feature"
                  key={i}
                >
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* right Side */}
          <div className="wwi-right">
            <motion.img
              variants={containerVariable(0.5)}
              initial="offscreen"
              whileInView={"onscreen"}
              src="/persons.png"
              alt="person"
              width={600}
              height={556}
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
