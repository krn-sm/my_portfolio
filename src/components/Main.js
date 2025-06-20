import React from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
//import { Infinity } from "../components/AllSvgs";
import { YinYang } from "../components/AllSvgs";
import { useState } from "react";
import Intro from "./Intro";
import { motion } from "framer-motion";


const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;
const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 2;

  h2 {
    font-size: 1.8rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const PROJECTS = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  right: 0.5rem;
  text-decoration: none;
  z-index: 2;

  h2 {
    font-size: 1.8rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const RESUME = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 20%;
  transform: rotate(-90deg) translate(-50%, -50%);
  left: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 2;

  h2 {
    font-size: 1.8rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      left: 0.5rem;
    }
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 2;

  h2 {
    font-size: 1.8rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 2;

  h2 {
    font-size: 1.8rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 2.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  background-color: #000;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (

      <MainContainer>
        <DarkDiv click={click} />
        <Container>
          <PowerButton />
          <LogoComponent theme={click ? "dark" : "light"} />
          <SocialIcons theme={click ? "dark" : "light"} />

          <Center click={click}>
            <YinYang
              onClick={() => handleClick()}
              width={click ? 50 : 100}
              height={click ? 50 : 100}
              fill="currentColor"
            />
            <span>click here</span>
          </Center>

          <Contact to="/contact">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact
            </motion.h2>
          </Contact>
          <PROJECTS to="/projects">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Projects
            </motion.h2>
          </PROJECTS>
          <RESUME to="/resume" click={click}>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Resume
            </motion.h2>
          </RESUME>
          <BottomBar>
            <ABOUT to="/about" click={click}>
              <motion.h2
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion.h2>
            </ABOUT>
            <SKILLS to="/skills">
              <motion.h2
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                My Skills
              </motion.h2>
            </SKILLS>
          </BottomBar>
        </Container>
        {click ? <Intro click={click} /> : null}
      </MainContainer>
  );
};

export default Main;
