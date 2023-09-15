import React from "react";
import "./EmailBox.css";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";
import { containerVariable } from "@/src/animation";

const EmailBox = () => {
  return (
    <motion.div
      initial={{
        width: ".5rem",
        borderRadius: "100%",
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
      className="emailbox"
    >
      <motion.div
        variants={containerVariable(0.6)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
      >
        <LuMail size={30} color={"grey"} />
      </motion.div>
      <motion.input
        variants={containerVariable(0.7)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        type="email"
        placeholder="Enter you Email"
      />

      <motion.div
        variants={containerVariable(0.9)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        className="funded-btn"
      >
        Get Funded
      </motion.div>
    </motion.div>
  );
};

export default EmailBox;
