import React, { useState , useRef, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/Images/background.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import BigTitle from "../subComponents/BigTitle";

import event1 from "../data/Events/event1.jpg";
import event2 from "../data/Events/event2.jpg";
import event3 from "../data/Events/event3.jpg";
import cert1 from "../data/Certifications/cert1.jpg";
import cert2 from "../data/Certifications/cert2.jpg";
import cert3 from "../data/Certifications/cert3.jpg";
import cert4 from "../data/Certifications/cert4.jpg";

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 5rem 4rem;
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const SectionTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.text};
  text-align: center;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
`;

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  gap: 2rem;
  margin: 5rem;

  @media (max-width: 768px) {
    flex-direction: column !important;
    align-items: center;
  }
`;

const Text = styled.div`
  flex: 2;
  padding: 2rem;
  background-color: rgba(34, 31, 31, 0.78);
  border-radius: 14px;
  color: ${(props) => props.theme.body};
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: "Courier New", Courier, monospace;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 1.2rem;
    text-align: center;
  }

  h3 {
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${(props) => props.theme.text};
  }

  p {
    margin: 0;
  }
`;

const Image = styled.img`
  flex: 1;
  max-width: 360px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  margin: 1rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin-right: 0;
  }
`;

const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// Each image item
const CarouselImage = styled.img`
  flex-shrink: 0;
  width: 180px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  scroll-snap-align: start;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  flex-direction: column;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80%;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  margin-top: 1.5rem;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
  }
`;

/* Language Card Components */
const Card = styled.div`
  max-width: 500px;
  margin: 4rem auto 0 auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: "Georgia", serif;
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
`;

const ResumePage = () => {
  const events = [
    {
      title: "AI Bootcamp",
      description:
        "Conducted a hands-on AI bootcamp with live coding and model building.",
      images: [event1, event2, event3, event1, event3, event2,event1,event3,event2],
    },
    {
      title: "Embedded Systems Workshop",
      description:
        "Hands-on microcontroller session organized by IEEE and NSSCE.",
      images: [event1, event2, event3],
    },
    // Add more events here...
  ];

  const certifications = [
    {
      title: "Introduction to Programming in C – IIT Kanpur",
      description:
        "Completed a foundational programming course by IIT Kanpur through NPTEL. Gained hands-on experience in C programming concepts including loops, arrays, functions, pointers, and memory management, enabling the development of efficient and structured code.",
      image: cert1,
    },
    {
      title: "The Joy of Computing Using Python – IIT Madras",
      description:
        "Explored the joy of problem-solving using Python in this course offered by IIT Madras via NPTEL. Learned Python programming, logic building, and real-world problem modeling through creative applications including games, automation, and visualizations.",
      image: cert2,
    },
    {
      title: "Career Essentials in Generative AI – Microsoft & LinkedIn",
      description:
        "Acquired insights into AI principles, ethical considerations, and the capabilities of generative models, with practical applications in content creation and productivity.",
      image: cert3,
    },
    {
      title: "Communication Skills – TCS iON",
      description:
        "Completed a soft-skills certification from TCS iON focusing on professional communication. Developed verbal and written communication techniques, listening skills, email etiquette, and interpersonal effectiveness for workplace readiness.",
      image: cert4,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventRefs = useRef([]);

  useEffect(() => {
    const intervals = eventRefs.current.map((carousel) => {
      let scrollAmount = 0;
      return setInterval(() => {
        if (carousel) {
          scrollAmount += 200;
          if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = 0;
          }
          carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }, 3000);
    });

    return () => intervals.forEach((id) => clearInterval(id));
  }, []);
  

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const languages = [
    { name: "English", level: "80%" },
    { name: "Hindi", level: "60%" },
    { name: "Malayalam", level: "100%" },
    { name: "Tamil", level: "90%" },
  ];

  const handlePrintPDF = () => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = require("../data/Kiran_S_M_Resume.pdf"); // webpack handles this
    iframe.onload = () => {
      setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      }, 500);
    };
    document.body.appendChild(iframe);
  };

  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <BigTitle text="RESUME" top="5rem" left="5rem" />
        <SectionTitle>EVENTS</SectionTitle>

        {events.map((event, index) => (
          <SectionContainer
            key={index}
            style={{
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <Text>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </Text>

            <Carousel ref={(el) => (eventRefs.current[index] = el)}>
              {event.images.map((img, imgIdx) => (
                <CarouselImage
                  key={imgIdx}
                  src={img}
                  alt={`Event ${index + 1} - Image ${imgIdx + 1}`}
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </Carousel>
          </SectionContainer>
        ))}

        <SectionTitle>CERTIFICATIONS</SectionTitle>

        {certifications.map((cert, index) => (
          <SectionContainer
            key={index}
            style={{
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <Text>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </Text>
            <Image
              src={cert.image}
              alt={cert.title}
              onClick={() => handleImageClick(cert.image)}
            />
          </SectionContainer>
        ))}

        {isModalOpen && (
          <ModalOverlay>
            <ModalImage src={selectedImage} alt="Enlarged certificate" />
            <CloseButton onClick={closeModal}>X</CloseButton>
          </ModalOverlay>
        )}

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
        <PrintButton onClick={handlePrintPDF}>Print Resume</PrintButton>
      </Container>
    </MainContainer>
  );
};

export default ResumePage;
