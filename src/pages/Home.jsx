import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import bg from "../images/bg.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero
        bg={bg}
        title="Get Started"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nibh dui. Maecenas quis diam purus. Sed sed lacus vel sapien dapibus sagittis. Sed massa magna, scelerisque vitae libero vel, imperdiet sodales libero. Nullam eget posuere dui. Mauris quis ornare eros. Aliquam erat volutpat. Nullam molestie ut leo quis ornare. Praesent nunc mauris, commodo vel tincidunt eget, sagittis sed sapien. Suspendisse at arcu nunc."
      />
    </motion.div>
  );
};

export default Home;
