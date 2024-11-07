import React from "react";
import styled from "styled-components";
import Heading from "../FixedComponent/Heading";
import Img4 from "../Images/etsu.jpg";
import { Link } from "react-router-dom";
import { Colors } from "../Colors/ColorComponent";

const Section = styled.section`
  position: relative;
  /* height: 100vh; */
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox: Hide scrollbar */
  -ms-overflow-style: none; /* IE and Edge: Hide scrollbar */
  /* For WebKit-based browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none; /* Hides scrollbar */
  }
  background: url(${Img4}) no-repeat center center;
  background-size: cover;

  background-attachment: fixed;

  background-color: #f7f9fc;
  color: #333;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 320px) {
    font-size: 1.7rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.9rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2rem;
  }
`;

const Content = styled.div`
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ResourceCard = styled.div`
  /* background-color: white; */
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border: 0.01px solid white;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const ResourceTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const ResourceDescription = styled.p`
  font-size: 1rem;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
`;

const ResourceButton = styled(Link)`
  background-color: transparent;
  color: white;
  border: 0.000001px solid white;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    border-bottom: 3px solid white;
    transform: translateY(3px);
  }
`;

const ResourceOfMonth = styled.div`
  background: #0d1355;
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const resources = [
  {
    title: "Resume Template",
    description: "Create a standout resume with our customizable templates.",
    link: "work-in-progress",
  },

  {
    title: "Interview Prep",
    description: "Practice questions and tips for mastering job interviews.",
    link: "work-in-progress",
  },
  {
    title: "Networking Tips",
    description:
      "Learn how to expand your professional connections effectively.",
    link: "work-in-progress",
  },
];

// Featured Resource of the Month
const resourceOfMonth = {
  title: "LinkedIn Profile Optimization Guide",
  description:
    "Learn how to build a LinkedIn profile that stands out and attracts recruiters.",
  link: "#",
};

const FeaturedResources = () => {
  return (
    <Section>
      <Content>
        <Title>Featured Resources</Title>
        <ResourceContainer>
          {resources.map((resource, index) => (
            <ResourceCard key={index}>
              <ResourceTitle>{resource.title}</ResourceTitle>
              <ResourceDescription>{resource.description}</ResourceDescription>
              <ResourceButton to={resource.link}>View Resource</ResourceButton>
            </ResourceCard>
          ))}
        </ResourceContainer>

        {/* <ResourceOfMonth>
        <h3>Resource of the Month</h3>
        <ResourceTitle>{resourceOfMonth.title}</ResourceTitle>
        <p>{resourceOfMonth.description}</p>
        <ResourceButton
          href={resourceOfMonth.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resource
        </ResourceButton>
      </ResourceOfMonth> */}
      </Content>
    </Section>
  );
};

export default FeaturedResources;
