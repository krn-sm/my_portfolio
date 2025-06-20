import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.li)`
  background-color: ${(props) => props.theme.text};
  width: 16rem;
  height: 40vh;
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 12rem;
    height: 35vh;
    padding: 1rem 1.5rem;
    margin-right: 4rem;
  }

  @media (max-width: 480px) {
    width: 10rem;
    height: 30vh;
    padding: 0.8rem 1.2rem;
    margin-right: 3rem;
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

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: calc(0.7em + 0.3vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.6em + 0.3vw);
  }
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);

  @media (max-width: 768px) {
    font-size: calc(0.7em + 0.2vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.6em + 0.2vw);
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  @media (max-width: 768px) {
    font-size: calc(0.9em + 0.4vw);
    padding: 0.4rem calc(1.5rem + 1.5vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.8em + 0.3vw);
    padding: 0.3rem calc(1.2rem + 1vw);
  }
`;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Cards = (props) => {
  const { id, name, description, tags, demo } = props.data;
  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <Link to={{ pathname: `${demo}` }} target="_blank">
          Visit
        </Link>
      </Footer>
    </Box>
  );
};

export default Cards;
