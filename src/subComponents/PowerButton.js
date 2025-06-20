// Home Button (Responsive)

import React from "react";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";
import { NavLink } from "react-router-dom";

const Power = styled(NavLink)`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  cursor: pointer;
  color: inherit;

  &:hover {
    background-color: rgb(165, 165, 160);
    box-shadow: 0 0 8px 6px rgba(100, 83, 83, 0.32);
  }

  @media (max-width: 768px) {
    top: 1rem;
    width: 2rem;
    height: 2rem;
    padding: 0.2rem;
  }
`;

const PowerButton = () => {
  return (
    <Power to="/">
      <PowerBtn width={20} height={20} fill="currentColor" />
    </Power>
  );
};

export default PowerButton;
