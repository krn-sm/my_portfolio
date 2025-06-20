import React from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import styled from "styled-components";
import { Develope, Tools } from "./AllSvgs";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";


const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
  }
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 1.5rem;
  width: 28vw;
  height: 60vh;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  z-index: 2;
  line-height: 1.4;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 50vh;
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 65vw;
    height: 30vh;
    padding: 1rem;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(0.8em + 1vw);
  z-index: 2;

  ${Main}:hover & {
    fill: ${(props) => props.theme.body};
  }

  & > *:first-child {
    margin-right: 0.8rem;

    @media (max-width: 480px) {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 480px) {
    font-size: calc(0.75em + 1vw);
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  padding: 0.4rem 0;
  z-index: 2;
  font-size: calc(0.55em + 0.8vw);

  ul {
    margin-left: 1.5rem;
    padding-left: 0.5rem;
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  @media (max-width: 480px) {
    font-size: calc(0.5em + 0.9vw);
  }
`;

const popIn = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <PowerButton />
        <LogoComponent />
        <SocialIcons theme="light" />

        <Main variants={popIn} initial="hidden" animate="show">
          <Title>
            <Develope width={30} height={30} />
            &nbsp;Languages
          </Title>
          <Description>
            I have a strong foundation in various programming languages and
            frameworks. My skills include:
          </Description>
          <Description>
            <ul>
              <li>Python</li>
              <li>C/C++</li>
              <li>HTML and CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Verilog</li>
            </ul>
          </Description>
        </Main>

        <Main variants={popIn} initial="hidden" animate="show">
          <Title>
            <Tools width={30} height={30} />
            &nbsp;Tools & Software
          </Title>
          <Description>
            I am proficient in a variety of tools and software that enhance my
            development process. These include:
          </Description>
          <Description>
            <ul>
              <li>LTspice</li>
              <li>Proteus</li>
              <li>Figma</li>
              <li>Arduino IDE</li>
              <li>Git and GitHub</li>
              <li>Visual Studio Code</li>
            </ul>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="77%" left="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
