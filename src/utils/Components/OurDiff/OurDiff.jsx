import React from "react";
import "./OurDiff.css";
import { ourDiffFeatures } from "../../data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariable,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/animation";
const OurDiff = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          {/* Head */}
          <div className="od-head">
            <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              Our Difference
            </motion.span>
            <motion.span
              variants={titleVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              Fair Capital, hassle free
            </motion.span>
            <motion.span
              variants={desVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className="text"
            >
              Our mission is to leaving the playing field for early stage growth
              capital <br /> We provide Capital that is unbaised, flexiable and
              non dilutive with excuation support to accelerate value creation
            </motion.span>
          </div>
          {/* Feature */}
          <div className="od-features">
            {ourDiffFeatures.map((feature, i) => (
              <motion.div
                variants={containerVariable((i + 1) * 0.1)}
                initial="offscreen"
                whileInView={"onscreen"}
                className="od-feature"
                key={i}
              >
                <Image
                  src={feature.icon}
                  alt="feature"
                  width={128}
                  height={128}
                />
                <span className="sec-title">{feature.title}</span>
                <span className="text">{feature.des}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
