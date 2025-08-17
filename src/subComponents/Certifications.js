import React from "react";
import styled from "styled-components";

// Replace with your real certificate images
import cert1 from "../data/Certifications/cert (1).jpg";
import cert2 from "../data/Certifications/cert (2).jpg";
import cert3 from "../data/Certifications/cert (3).jpg";
import cert4 from "../data/Certifications/cert (4).jpg";

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

const CertBlock = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CertText = styled.div`
  flex: 1;
  min-width: 280px;
  color: ${(props) => props.theme.body};

  h2 {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${(props) => props.theme.text};
    margin-bottom: 1rem;
  }

  p {
    font-family: "Ubuntu", monospace;
    font-size: 1.2rem;
    line-height: 1.5;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const CertImg = styled.img`
  width: 400px;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(255, 193, 140, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;
  object-fit: cover;

  &:hover {
    transform: scale(1.03);
  }
`;

const Certifications = () => {
  return (
    <Section>
      <BackgroundContainer>
        <Title>CERTIFICATIONS</Title>

        {certifications.map((cert, index) => (
          <CertBlock key={index}>
            <CertText>
              <h2>{cert.title}</h2>
              <p>{cert.description}</p>
            </CertText>
            <CertImg
              src={cert.image}
              alt={`Certificate: ${cert.title}`}
              role="button"
              tabIndex={0}
            />
          </CertBlock>
        ))}
      </BackgroundContainer>
    </Section>
  );
};

export default Certifications;
