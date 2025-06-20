import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top || "10%"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: calc(3rem + 3vw);
    top: 5%;
    left: 5%;
    right: auto;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    font-size: calc(2.5rem + 2vw);
    top: 10%;
    left: 4%;
  }
`;

const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default BigTitle;
