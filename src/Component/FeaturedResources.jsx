import React from "react";
import styled from "styled-components";

// Styled components for styling
const Section = styled.section`
  padding: 2rem;
  background-color: #f7f9fc;
  color: #333;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #0d1355;
  margin-bottom: 1.5rem;
`;

const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ResourceCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const ResourceTitle = styled.h3`
  font-size: 1.5rem;
  color: #0d1355;
  margin-bottom: 0.5rem;
`;

const ResourceDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
  text-align: center;
`;

const ResourceButton = styled.a`
  background-color: #0d1355;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0b1049;
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
    link: "#",
  },
  {
    title: "Career Guide",
    description: "A comprehensive guide to navigate your career path.",
    link: "#",
  },
  {
    title: "STEM Job Board",
    description:
      "Explore job listings in Science, Technology, Engineering, and Math fields.",
    link: "#",
  },
  {
    title: "Interview Prep",
    description: "Practice questions and tips for mastering job interviews.",
    link: "#",
  },
  {
    title: "Networking Tips",
    description:
      "Learn how to expand your professional connections effectively.",
    link: "#",
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
      <Title>Featured Resources</Title>
      <ResourceContainer>
        {resources.map((resource, index) => (
          <ResourceCard key={index}>
            <ResourceTitle>{resource.title}</ResourceTitle>
            <ResourceDescription>{resource.description}</ResourceDescription>
            <ResourceButton
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resource
            </ResourceButton>
          </ResourceCard>
        ))}
      </ResourceContainer>

      <ResourceOfMonth>
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
      </ResourceOfMonth>
    </Section>
  );
};

export default FeaturedResources;
