import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";

import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
`;

const ParticleComponent = ({ theme }) => {
  return (
    <Box>
      <Particles
        id="tsparticles"
        options={theme === "light" ? configLight : configDark}
      />
    </Box>
  );
};

export default ParticleComponent;
