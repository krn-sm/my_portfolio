import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import BigTitle from "../subComponents/BigTitle";
import Achievements from "../subComponents/Achievements";
import Events from "../subComponents/Events";

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 5rem 4rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }
`;

const Card = styled.div`
  max-width: 500px;
  margin: 4rem auto 0 auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    margin-left: 1rem;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: "Georgia", serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LanguageItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const LanguageName = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  font-weight: 600;
  margin-bottom: 0.3rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 0.9rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  background-color: ${(props) => props.theme.text};
  transition: width 0.5s ease;
`;

const PrintButton = styled.button`
  display: block;
  margin: 3rem auto 0 auto;
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s ease;
  font-family: "Courier New", Courier, monospace;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
  }
`;

const ResumePage = () => {
  const languages = [
    { name: "English", level: "80%" },
    { name: "Hindi", level: "60%" },
    { name: "Malayalam", level: "100%" },
    { name: "Tamil", level: "90%" },
  ];

  return (
    <Container>
      <LogoComponent />
      <PowerButton />
      <SocialIcons />
      <BigTitle text="RESUME" top="5rem" left="5rem" />
      <Achievements />
      <Events />

      {/* Language Card */}
      <Card>
        <CardTitle>Languages</CardTitle>
        <LanguagesContainer>
          {languages.map((lang, index) => (
            <LanguageItem key={index}>
              <LanguageName>{lang.name}</LanguageName>
              <ProgressBar>
                <ProgressFill width={lang.level} />
              </ProgressBar>
            </LanguageItem>
          ))}
        </LanguagesContainer>
      </Card>

      <StyledLink href="/Kiran_S_M_Resume.pdf" download>
        <PrintButton>📄 Print Resume</PrintButton>
      </StyledLink>
    </Container>
  );
};

export default ResumePage;
