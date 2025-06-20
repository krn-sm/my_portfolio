import React, { useState, useRef } from "react";
import styled from "styled-components";

// Replace with real event image imports
import event1_1 from "../data/Events/event1 (1).jpg";
import event1_2 from "../data/Events/event1 (2).jpg";
import event1_3 from "../data/Events/event1 (3).jpg";
import event1_4 from "../data/Events/event1 (4).jpg";
import event2 from "../data/Events/event2.jpg";
import event3_1 from "../data/Events/event3 (1).jpg";
import event3_2 from "../data/Events/event3 (2).jpg";
import event4 from "../data/Events/event4.jpg";

const events = [
  {
    title: "Startup Bootcamp – APJAKTU & Kerala Startup Mission",
    description:
      "Selected for the Startup Bootcamp organized by APJ Abdul Kalam Technological University in collaboration with Kerala Startup Mission. The event guided participants through ideation, pitching, sustainable innovation, and business modeling. Our team was shortlisted among the best for our idea on “Sustainable Technologies for a Better Tomorrow.” The three-day program was filled with valuable insights, networking opportunities, and inspiring sessions.",
    images: [event1_1, event1_3, event1_4, event1_2],
  },
  {
    title: "Ethical Hacking – NIT Calicut",
    description:
      "Participated in an intensive workshop on Ethical Hacking conducted at NIT Calicut. Hands-on demonstrations provided valuable insights into real-world hacking scenarios and countermeasures.",
    images: [event2],
  },
  {
    title: "Microcontroller-Based Embedded System Design – IEEE",
    description:
      "Participated in the hands-on training session on microcontroller-based embedded system design (including IoT) conducted by IEEE IES SBC NSSCE. This two-day event offered practical exposure to microcontroller programming, sensor interfacing, circuit design, and IoT integration with expert sessions from NIT Calicut.",
    images: [event3_1, event3_2],
  },
  {
    title: "Digital Design – IETE NSSCE",
    description:
      "Attended a workshop on Digital Circuit Design organized by the Institution of Electronics and Telecommunication Engineers (IETE) at NSS College of Engineering. The session covered logic gates, sequential logic, flip-flops, and simulation tools — blending theory with hands-on circuit design.",
    images: [event4],
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

const EventBlock = styled.div`
  margin-bottom: 4rem;
`;

const EventHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const EventDesc = styled.p`
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
const Events = () => {
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
        <Title>EVENTS</Title>

        {events.map((event, index) => (
          <EventBlock key={index}>
            <EventHeading>{event.title}</EventHeading>
            <EventDesc>{event.description}</EventDesc>
            <Gallery>
              {event.images.map((img, idx) => (
                <ImgThumb
                  key={idx}
                  src={img}
                  alt={`${event.title} ${idx + 1}`}
                  onClick={() => openModal(event.images, idx)}
                />
              ))}
            </Gallery>
          </EventBlock>
        ))}
      </BackgroundContainer>

      {modalData.isOpen && (
        <ModalOverlay
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <ModalImage
            src={modalData.images[modalData.currentIndex]}
            alt="Zoomed Event"
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

export default Events;
