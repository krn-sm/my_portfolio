import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  font-size: 2rem;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    left: 1rem;
    top: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    left: 0.8rem;
    top: 0.8rem;
  }
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>K.</Logo>;
};

export default LogoComponent;
