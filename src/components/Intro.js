import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Me from "../assets/Images/avatar-removebg-preview (1).png";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Engineer", "Web Developer", "Web Designer", "Programmer"];

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 65vh;
  display: flex;
  flex-direction: row;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-size: 100% 2px;
  background-repeat: no-repeat;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 85vw;
    height: auto;
    top: 55%;
    transform: translate(-50%, -55%);
    background: none;
    border-left: none;
    border-right: none;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: -3rem;

    .pic {
      position: relative;
      width: 100%;
      max-width: 200px;
    }
  }
`;
const TextContainer = styled(motion.div)`
  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 1);
    border-radius: 15px;
    padding: 1rem 1.2rem;
    max-width: 60%;
    margin: 0 auto;
    border-color: rgb(255, 255, 255);
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: left;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(1.5rem + 0.5vw);
    font-weight: 300;
    min-height: 2.5rem;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: calc(0.3em + 2vw);

    & > *:last-child {
      font-size: calc(1rem + 0.5vw);
    }
  }
`;

const Intro = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <TextContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Text>
            <h1>Hi...</h1>
            <h2>I am</h2>
            <h2>Kiran S M</h2>
            <AnimatePresence mode="wait">
              <motion.h1
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {roles[index]}
              </motion.h1>
            </AnimatePresence>
          </Text>
        </TextContainer>
      </SubBox>

      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Kiran's Avatar" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
