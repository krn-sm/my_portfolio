import React from "react";
import { Github, LinkedIN, Instagram, EMail } from "../components/AllSvgs";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Icons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 1rem;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    left: 1rem;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 480px) {
    left: 0.6rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};

  @media (max-width: 768px) {
    height: 6rem;
  }

  @media (max-width: 480px) {
    height: 4.5rem;
  }
`;

const SocialIcons = (props) => {
  const iconColor = props.theme === "dark" ? DarkTheme.text : DarkTheme.body;

  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          href="https://www.linkedin.com/in/kiran-s-m-here"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <LinkedIN fill={iconColor} />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          href="https://github.com/krn-sm"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <Github fill={iconColor} />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          href="https://www.instagram.com/_krn_sm_/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <Instagram fill={iconColor} />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          href="mailto:kiranmanikkath20@gmail.com"
          style={{ color: "inherit" }}
        >
          <EMail fill={iconColor} />
        </a>
      </motion.div>
      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
