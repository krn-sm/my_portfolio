// src/components/ProgressBar.js
import React from "react";
import styled from "styled-components";

const BarContainer = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.div`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const Bar = styled.div`
  background: #ccc;
  border-radius: 20px;
  overflow: hidden;
  height: 10px;
`;

const Fill = styled.div`
  background: #00bcd4;
  height: 100%;
  width: ${(props) => props.percent}%;
  transition: width 0.4s ease;
`;

const ProgressBar = ({ label, percent }) => (
  <BarContainer>
    <Label>{label}</Label>
    <Bar>
      <Fill percent={percent} />
    </Bar>
  </BarContainer>
);

export default ProgressBar;
