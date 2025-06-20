import React, { useState, useRef } from "react";
import styled from "styled-components";

// Sample images – Replace with real image paths
import ach1_1 from "../data/Achievements/ach1 (1).jpg";
import ach1_2 from "../data/Achievements/ach1 (2).jpg";
import ach1_3 from "../data/Achievements/ach1 (3).jpg";
import ach2_1 from "../data/Achievements/ach2 (1).jpg";

const achievements = [
  {
    title: "3rd Position – IEEE GREEN REHAB CHALLENGE",
    description:
      "Secured third place in a highly competitive ideathon entitled AI systems for Environmental Restoration sponsored by IEEE Kerala Section held during Kerala State Council for Science, Technology and Environment (KSCSTE) TECHFEST 2024 jointly organized by KSCSTE, IIT Palakkad, and NSS College of Engineering. The event challenged participants to propose innovative solutions for sustainable technologies.",
    images: [ach1_1, ach1_2, ach1_3],
  },
  {
    title: "Finalist – IEEE MYOSA 2.0 2025",
    description:
      "Selected among the top 10 teams across India for the prestigious Development Phase of IEEE MYOSA 2.0 organized by the IEEE Sensors Council. The challenge focused on real-world applications of sensor technology. Our solution involved an intelligent sleep monitoring pad using multi-sensor integration and AI-powered analytics to improve sleep health, which demonstrated significant potential for healthcare impact and innovation.",
    images: [ach2_1],
  },
];

// Styled Components
const Section = styled.section`
  padding: 4rem 1.5rem;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const BackgroundContainer = styled.div`
  background-color: rgba(48, 36, 30, 0.82);
  border-radius: 16px;
  padding: 3rem 2rem;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.25);
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: ${(props) => props.theme.text};
  font-family: "Georgia", serif;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const AchievementBlock = styled.div`
  margin-bottom: 4rem;
`;

const AchievementHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  color: ${(props) => props.theme.body};
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: "Ubuntu", monospace;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
`;

const ImgThumb = styled.img`
  width: 480px;
  max-width: 90vw;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(255, 193, 140, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  flex-direction: column;
  padding: 1rem;
`;

const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 14px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
`;

const NavButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #111;
    color: #fff;
  }
`;

// Component Logic
const Achievements = () => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const openModal = (images, index) => {
    setModalData({ isOpen: true, images, currentIndex: index });
  };

  const closeModal = () => {
    setModalData((prev) => ({ ...prev, isOpen: false }));
  };

  const goLeft = () => {
    setModalData((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const goRight = () => {
    setModalData((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      distance > 0 ? goRight() : goLeft();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <Section>
      <BackgroundContainer>
        <Title>ACHIEVEMENTS</Title>

        {achievements.map((achv, index) => (
          <AchievementBlock key={index}>
            <AchievementHeading>{achv.title}</AchievementHeading>
            <Description>{achv.description}</Description>
            <Gallery>
              {achv.images.map((img, idx) => (
                <ImgThumb
                  key={idx}
                  src={img}
                  alt={`${achv.title} ${idx + 1}`}
                  onClick={() => {
                    if (window.innerWidth >= 768) {
                      openModal(achv.images, idx);
                    }
                  }}
                />
              ))}
            </Gallery>
          </AchievementBlock>
        ))}
      </BackgroundContainer>

      {modalData.isOpen && (
        <ModalOverlay
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <ModalImage
            src={modalData.images[modalData.currentIndex]}
            alt="Zoomed Achievement"
          />
          <Controls>
            <NavButton onClick={goLeft}>←</NavButton>
            <NavButton onClick={closeModal}>X</NavButton>
            <NavButton onClick={goRight}>→</NavButton>
          </Controls>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default Achievements;
