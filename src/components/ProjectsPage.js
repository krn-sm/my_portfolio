import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { Project } from "../data/ProjectData";
import Card from "../subComponents/Cards";
import { YinYang } from "./AllSvgs";
import { motion } from "framer-motion";
import BigTitle from "../subComponents/BigTitle";

// Main container
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
  transition: transform 0.1s ease-out;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 60px;
  height: 60px;

`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
}

const ProjectsPage = () => {
  const ref = useRef(null);
const yinyang = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const rotate = () => {
      const offset = window.pageYOffset;
      if (element) {
        element.style.transform = `translateX(${-offset}px)`;
      }
      yinyang.current.style.transform = `rotate(` + -window.pageYOffset + `deg)`;
    };

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <Main ref={ref} variants={container} initial='hidden' animate='show' >
          {Project.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang fill={DarkTheme.text} width={60} height={60} />
        </Rotate>
        <BigTitle text='PROJECTS' top='10%' right='20%' />
      </Box>
    </ThemeProvider>
  );
};

export default ProjectsPage;
