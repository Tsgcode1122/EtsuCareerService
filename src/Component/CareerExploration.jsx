// Import necessary libraries
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Heading from "../FixedComponent/Heading";
import Img4 from "../Images/neexx.png";
// Styled components for the section
const Section = styled.section`
  padding: 1rem 2rem 6rem 2rem;
  /* background-color: #f5f5f5; */
  text-align: center;
  @media screen and (min-width: 900px) {
    /* padding: 4rem 2rem 7rem 2rem; */
  }
  @media screen and (min-width: 1000px) {
    padding: 4rem 2rem 7rem 2rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 4rem 6rem 7rem 6rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const IndustryGrid = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  img {
    max-width: 100%;
    height: 20px;
  }
`;

const IndustryCard = styled(Link)`
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  color: #333;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 320px) {
    padding: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1.5rem;
  }
`;

const IndustryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #0d1355;
`;

const IndustryDescription = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: 300;
  @media screen and (min-width: 1000px) {
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
  }
`;

const industries = [
  {
    name: "STEM",
    path: "work-in-progress",
    description:
      "Explore careers in science, technology, engineering, and mathematics.",
  },
  {
    name: "Business",
    path: "work-in-progress",
    description:
      "Discover opportunities in finance, marketing, management, and more.",
  },
  {
    name: "Arts",
    path: "work-in-progress",
    description:
      "Pursue creative paths in visual arts, music, theater, and writing.",
  },
  {
    name: "Healthcare",
    path: "work-in-progress",
    description:
      "Find careers in medicine, nursing, therapy, and public health.",
  },
  {
    name: "Education",
    path: "work-in-progress",
    description:
      "Explore roles in teaching, administration, counseling, and research.",
  },
];

const CareerExploration = () => {
  return (
    <Section>
      <Heading>Industry Career Paths</Heading>
      <IndustryGrid>
        {industries.map((industry, index) => (
          <IndustryCard key={index} to={industry.path}>
            <IndustryTitle>{industry.name}</IndustryTitle>
            <IndustryDescription>{industry.description}</IndustryDescription>
            <img src={Img4} />
          </IndustryCard>
        ))}
      </IndustryGrid>
    </Section>
  );
};

export default CareerExploration;
