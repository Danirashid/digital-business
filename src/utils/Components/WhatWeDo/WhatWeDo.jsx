"use client";

import React from "react";
import "./WhatWeDo.css";
import Image from "next/image";
import { features } from "../../data";
import { motion } from "framer-motion";
import {
  containerVariable,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/animation";
const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* Head Section */}
          <div className="wwd-head">
            <motion.span
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              What we do
            </motion.span>
            <motion.span
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Empowering funders with non deluctive capital and execution
              expertise
            </motion.span>
            <motion.span
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={desVariants}
              className="des"
            >
              Here is How we can evaluate
            </motion.span>
          </div>
          {/* block section */}
          <div className="wwd-blocks">
            {/* first block */}
            <div className="block">
              <motion.span
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Blue Advances
              </motion.span>
              <motion.span
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={desVariants}
                className="text"
              >
                Fund recurring growth expenses e.g. customer aquistion,
                inventory
              </motion.span>

              {/* Blog Features */}
              <div className="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={containerVariable((i + 1) * 0.1)}
                    className="block-feature"
                    key={i}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Second block */}
            <div className="block">
              <motion.span
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Blue Seeds
              </motion.span>
              <motion.span
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={titleVariants}
                className="text"
              >
                Funds one-offs to scale e.g. product hiring.
              </motion.span>

              {/* Blog Features */}
              <div className="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={containerVariable((i + 1) * 0.1)}
                    className="block-feature"
                    key={i}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Support block */}
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={containerVariable(0.3)}
            className="wwd-support"
          >
            {/* Left Side */}
            <div>
              <span className="sec-title">Blue Growth Support</span>
              <span className="des">
                Data insights and full stack expertise to supercharge growth
              </span>
            </div>
            {/* right side */}
            <div>
              <span className="text">
                Actionable data insights by connecting revenue, marketing and
                social media platforms
              </span>
              <span className="text">
                On demand execution expertise at cost or revenue share across
                proposition design, engineering, marketing analytics,
                partnerships, brand, intellectual property, market expansion,
                talent management
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
