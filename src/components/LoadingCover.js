// components/LoadingCover.js
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Overlay = styled(motion.div)`
  font-family: "Pacifico", cursive;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: black;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const overlayVariants = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
  },
};

const LoadingCover = () => {
  return (
    <Overlay
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8 }}
    >
      <motion.div>
        <h1 style={{ color: "white", fontSize: "3rem" }}>K.</h1>
      </motion.div>
    </Overlay>
  );
};

export default LoadingCover;
