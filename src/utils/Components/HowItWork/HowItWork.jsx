import React from "react";
import "./HowItWork.css";
import Image from "next/image";
import { hitFeatures } from "../../data";
import { motion } from "framer-motion";
import { tagVariants, titleVariants } from "@/src/animation";
const HowItWork = () => {
  const featureVariants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        duration: 1.5,
        type: "spring",
      },
    },
  };
  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-wrapper">
          {/* haed */}
          <div className="hiw-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              How it Works
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Unlocking Potential Along The Growth Journey
            </motion.span>
          </div>
          <div className="hiw-features">
            {hitFeatures.map((feature, i) => (
              <motion.div
                variants={featureVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="hiw-feature"
                key={1}
              >
                {/* Left Side */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: "1",
                      delay: "0.7",
                    },
                  }}
                  className="details"
                >
                  <span className="des">0{i + 1}</span>
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
                {/* right Side */}
                <div className="icon">
                  <Image
                    src={feature.icon}
                    width={128}
                    height={128}
                    alt="icon"
                    style={{ translate: "50% 0rem" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
