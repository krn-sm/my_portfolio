import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 4rem 2rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 6rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SkillCard = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;


  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    font-family: "Ubuntu",monospace;
    margin-bottom: 1.2rem;
  }
`;

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1rem;
  column-gap: 3rem;
  font-family: "Ubuntu", monospace;
`;

const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  font-family: "Ubuntu", monospace;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1.3rem;
    text-align: center;
  }
  @media (max-width: 480px) {
    width: 100px;
  }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const MySkillsPage = () => {
  const skillData = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: "/skills/c.png" },
        { name: "Python", icon: "/skills/python.png" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: "/skills/html.png" },
        { name: "CSS", icon: "/skills/css.png" },
        { name: "JavaScript", icon: "/skills/javascript.png" },
        { name: "React", icon: "/skills/react.png" },
      ],
    },
    {
      title: "Version Control System",
      skills: [
        { name: "Git", icon: "/skills/git.png" },
        { name: "GitHub", icon: "/skills/github.png" },
      ],
    },
    {
      title: "Simulation and Design",
      skills: [
        { name: "Proteus", icon: "/skills/proteus.png" },
        { name: "LTspice", icon: "/skills/ltspice.png" },
        { name: "Arduino IDE", icon: "/skills/arduino.png" },
        { name: "Figma", icon: "/skills/figma.png" },
        { name: "Verilog", icon: "/skills/verilog.png" },
      ],
    },
    {
      title: "Non-technical Skills",
      skills: [
        { name: "Communication", icon: "/skills/communication.png" },
        { name: "Problem Solving", icon: "/skills/problem solving.png" },
        { name: "Collaboration", icon: "/skills/collaboration.png" },
      ],
    },
  ];

  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <PowerButton />
        <LogoComponent />
        <SocialIcons theme="light" />
        <BigTitle text="SKILLS" top="5rem" left="5rem" />

        <Grid>
          {skillData.map((category, idx) => (
            <SkillCard
              key={idx}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={idx}
            >
              <h2>{category.title}</h2>
              <IconGrid>
                {category.skills.map((skill, i) => (
                  <SkillIcon key={i}>
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </SkillIcon>
                ))}
              </IconGrid>
            </SkillCard>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
