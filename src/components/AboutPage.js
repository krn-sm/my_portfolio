import React from "react";
import { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import pic from "../assets/Images/pic.jpg";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

// Container
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding-bottom: 2rem;
`;

// Rope animation
const RopeSwing = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
`;

// Cube holder
const CubeWrapper = styled.div`
  position: absolute;
  top: 10vh;
  right: 5vw;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${RopeSwing} 4s ease-in-out infinite;
  transform-origin: top center;
  z-index: 1;

  @media (max-width: 768px) {
    top: auto;
    bottom: 2rem;
    right: auto;
    left: 50%;
    transform: translateX(-50%) rotate(0deg);
    animation: none;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100px;
    
  }
`;

// Cube animation
const Cube = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 10s linear infinite;

  @keyframes spin {
    from {
      transform: rotateX(0deg) rotateY(0deg);
    }
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

// Cube faces
const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${pic});
  background-size: cover;
  background-position: center;
  filter: brightness(0.8) contrast(1.1) saturate(0.9);
  opacity: 0.9;

  ${({ face }) => {
    switch (face) {
      case "front":
        return "transform: rotateY(0deg) translateZ(100px);";
      case "back":
        return "transform: rotateY(180deg) translateZ(100px);";
      case "right":
        return "transform: rotateY(90deg) translateZ(100px);";
      case "left":
        return "transform: rotateY(-90deg) translateZ(100px);";
      case "top":
        return "transform: rotateX(90deg) translateZ(100px);";
      case "bottom":
        return "transform: rotateX(-90deg) translateZ(100px);";
      default:
        return "";
    }
  }}

  @media (max-width: 480px) {
    ${({ face }) => {
      switch (face) {
        case "front":
          return "transform: rotateY(0deg) translateZ(75px);";
        case "back":
          return "transform: rotateY(180deg) translateZ(75px);";
        case "right":
          return "transform: rotateY(90deg) translateZ(75px);";
        case "left":
          return "transform: rotateY(-90deg) translateZ(75px);";
        case "top":
          return "transform: rotateX(90deg) translateZ(75px);";
        case "bottom":
          return "transform: rotateX(-90deg) translateZ(75px);";
        default:
          return "";
      }
    }}
  }
`;

// Main text area
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  width: 50vw;
  height: 65vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(3px);
  position: absolute;
  top: 10rem;
  left: calc(5rem + 5vw);
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
    font-size: calc(0.5rem + 1vw);
  }

  @media (max-width: 480px) {
    width: 70vw;
    font-size: calc(0.4rem + 1vw);
    padding: 1rem;
    left: 2rem;
    top: 7.5rem;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />

        <CubeWrapper
          as={motion.div}
          initial={{ y: -300, opacity: 0 }}
          animate={{
            y: [-300, 0, -20, 0],
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
            times: [0, 0.6, 0.8, 1],
          }}
        >
          <div
            style={{ width: "2px", height: "50px", backgroundColor: "#ccc" }}
          />
          <Cube>
            <Face face="front" />
            <Face face="back" />
            <Face face="left" />
            <Face face="right" />
            <Face face="top" />
            <Face face="bottom" />
          </Cube>
        </CubeWrapper>

        <Main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          An Electronics and Communication Engineering student located in India
          with a passion that extends far beyond circuits and signals.
          <br />A curious developer who loves to blend design, code, and
          innovation. From building smart hardware projects with Raspberry Pi
          and ESP32 to crafting dynamic web applications, I’m constantly
          learning and creating.
          <br />I also enjoy designing visually engaging UI/UX, writing neat
          frontend code, and experimenting with embedded systems — finding the
          sweet spot where hardware meets software.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
