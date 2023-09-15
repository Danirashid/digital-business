"use client";
import Navbar from "@/src/utils/Components/Navbar/Navbar";
import "./page.css";
import Hero from "@/src/utils/Components/Navbar/Hero/Hero";
import BrandingVideo from "@/src/utils/Components/BrandingVideo/BrandingVideo";
import WhatWeDo from "@/src/utils/Components/WhatWeDo/WhatWeDo";
import OurDiff from "@/src/utils/Components/OurDiff/OurDiff";
import { motion, useAnimation } from "framer-motion";
import HowItWork from "@/src/utils/Components/HowItWork/HowItWork";
import WhoWeInvest from "@/src/utils/Components/WhoWeInvest/WhoWeInvest";
import Testimonials from "@/src/utils/Components/Testimonials/Testimonials";
import Footer from "@/src/utils/Components/Footer/Footer";

const Home = () => {
  const control = useAnimation();
  return (
    <motion.div className="app" animate={control}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <motion.div
        onViewportEnter={() =>
          control.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          control.start({
            backgroundColor: "#fff",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
      </motion.div>
        <HowItWork />
        <motion.div
        onViewportEnter={() =>
          control.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          control.start({
            backgroundColor: "#fff",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <WhoWeInvest />
      </motion.div>
      <Testimonials />
      <Footer />
    </motion.div>
  );
};

export default Home;