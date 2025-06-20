import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import styled from "styled-components";
import { motion } from "framer-motion";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import BigTitle from "../subComponents/BigTitle";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
`;

const CardsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
  margin-top: 6rem;
  margin-bottom: 2rem;
`;

const Card = styled(motion.div)`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  width: 16rem;
  height: 40vh;
  padding: 1.5rem 2rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 32vh;
    padding: 0.9rem 1.3rem;
  }

  @media (max-width: 480px) {
    width: 8.5rem;
    height: 28vh;
    padding: 0.7rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);

  @media (max-width: 768px) {
    font-size: calc(0.9em + 0.4vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.8em + 0.3vw);
  }
`;

const Description = styled.p`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: calc(0.7em + 0.3vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.6em + 0.3vw);
  }
`;


const Form = styled(motion.form)`
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }

  input,
  textarea {
    padding: 0.6rem;
    border-radius: 8px;
    border: none;
    font-family: inherit;
    font-size: 0.9rem;
    resize: none;
  }

  button {
    background: rgb(0, 0, 0);
    color: white;
    padding: 0.6rem;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.9rem;
  }

  button:hover {
    background: #3366cc;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    max-width: 350px;
    gap: 0.8rem;

    input,
    textarea {
      padding: 0.5rem;
      font-size: 0.85rem;
    }

    button {
      padding: 0.5rem;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 200px;
    gap: 0.6rem;

    input,
    textarea {
      padding: 0.4rem;
      font-size: 0.8rem;
    }

    button {
      padding: 0.4rem;
      font-size: 0.8rem;
    }
  }
`;

const ContactPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <BigTitle text="CONTACT" top="10%" right="50%" />

        <CardsContainer
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Card variants={itemVariants}>
            <Title>📍 Address</Title>
            <Description>
              Shishiram, Kizhakkethara, Peruvemba, Palakkad, Kerala 678531
            </Description>
          </Card>
          <Card variants={itemVariants}>
            <Title>📞 Phone</Title>
            <Description>
              <a
                href="tel:+917736804506"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                +91-7736804506
              </a>
            </Description>
          </Card>
        </CardsContainer>

        <Form
          action="https://formsubmit.co/kiranmanikkath20@gmail.com"
          method="POST"
          variants={itemVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h3>Send Message</h3>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea rows="5" name="message" placeholder="Message" required />
          <button type="submit">SEND</button>
        </Form>
      </Box>
    </ThemeProvider>
  );
};

export default ContactPage;
