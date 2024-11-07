import React from "react";
import styled from "styled-components";
import { StarFilled, StarOutlined } from "@ant-design/icons";

import Heading from "../FixedComponent/Heading";
import { Colors } from "../Colors/ColorComponent";
import bg from "../Images/event.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  background: url(${bg}) no-repeat;
  background-size: cover;
  background-position: center center;

  /* background: ${Colors.offWhite}; */
  color: #000;
  overflow: hidden;
  padding: 4rem 1rem 7rem 1rem;
`;

const Headings = styled.h1`
  font-size: 3.2rem;
  font-weight: 100;
  padding: 60px 60px 0 60px;
  line-height: 0.9;
  font-weight: 100;
  color: #1f4ca7;
  margin: 0;
  @media screen and (max-width: 320px) {
    font-size: 2.5rem;
    font-weight: 500;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 2.8rem;
    font-weight: 500;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 3rem;
    font-weight: 500;
  }
`;

const SubHeading = styled.p`
  font-size: 0.8rem;
  color: #555;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 400;
  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 800px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 800px) {
    font-size: 1.2rem;
  }
`;

const EventCard = styled.div`
  background: white !important;
  min-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: left;
  margin: 0 5px;
  border-radius: 10px;
  scroll-snap-align: center;
  @media screen and (max-width: 320px) {
    min-width: 250px;
    padding: 8px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    min-width: 280px;
    padding: 8px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    min-width: 280px;
    padding: 8px;
  }
`;

const EventTitle = styled.h3`
  font-size: 1.8rem;
  color: #0d1355;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.4rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.4rem;
  }
`;

const EventDate = styled.p`
  font-size: 1rem;
  color: #6d6d6d;
  font-weight: 600;
`;

const EventTime = styled.p`
  font-size: 0.9rem;
  color: #8b8b8b;
`;

const EventVenue = styled.p`
  font-size: 1rem;
  color: #0d1355;
  font-weight: 600;
`;

const EventDescription = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 1rem 0;
  min-height: 105px;
`;

const RegisterButton = styled.a`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background: #0d1355;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  margin-top: 1rem;
  display: inline-block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #000538;
  }
`;

const SpeakerText = styled.p`
  font-size: 0.9rem;
  color: #8b8b8b;
  font-style: italic;
`;

const SlideDiv = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 20px;
  width: 100%;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const events = [
  {
    text: "Resume Writing Workshop",
    date: "November 15, 2024",
    time: "2:00 PM - 4:00 PM",
    venue: "Career Center, Room 102",
    topic: "Crafting a Professional Resume for the Modern Job Market",
    description:
      "Learn how to create a compelling resume that stands out to employers. This workshop covers format, keywords, and tailoring resumes for specific job applications.",
    register:
      "https://universitycareercenter.com/events/register/resume-workshop",
    speaker: "Jenny Lockmiller, Director",
    contact: "careerservices@university.edu",
  },
  {
    text: "LinkedIn Profile Building Seminar",
    date: "December 1, 2024",
    time: "10:00 AM - 12:00 PM",
    venue: "Virtual (Zoom)",
    topic: "Optimizing Your LinkedIn Profile for Networking and Job Search",
    description:
      "Maximize your LinkedIn profile to make a strong first impression with recruiters. The session includes tips on headline writing, keyword optimization, and networking techniques.",
    register:
      "https://universitycareercenter.com/events/register/linkedin-seminar",
    speaker: "Calvin Purvis, Assistant Director",
    contact: "careerservices@university.edu",
  },
  {
    text: "Mock Interview Session",
    date: "January 8, 2025",
    time: "9:00 AM - 5:00 PM",
    venue: "Career Center, Interview Rooms",
    topic:
      "Practice and Improve Your Interviewing Skills with Real-Time Feedback",
    description:
      "Schedule a 30-minute mock interview session to receive personalized feedback and guidance from career counselors and alumni recruiters.",
    register:
      "https://universitycareercenter.com/events/register/mock-interview",
    speaker: "Various Career Coaches and Alumni",
    contact: "careerservices@university.edu",
  },
  {
    text: "Internship and Job Opportunities",
    date: "February 20, 2025",
    time: "12:00 PM - 4:00 PM",
    venue: "University Gymnasium",
    topic: "Network with Employers and Explore Internship & Job Opportunities",
    description:
      "Meet representatives from top companies and learn about available internship and job opportunities. Dress professionally and bring multiple copies of your resume.",
    register: "https://universitycareercenter.com/events/register/career-fair",
    speaker: "Jenny Lockmiller, Director",
    contact: "careerservices@university.edu",
  },
  {
    text: "Personal Branding Workshop",
    date: "March 5, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Career Center, Workshop Room",
    topic: "Building Your Personal Brand for Career Success",
    description:
      "Discover strategies for developing a personal brand that aligns with your career goals and attracts potential employers. Learn how to use social media, networking, and public speaking to build a strong professional presence.",
    register:
      "https://universitycareercenter.com/events/register/personal-branding",
    speaker: "Elizabeth Haselsteiner",
    contact: "careerservices@university.edu",
  },
];

const UpcomingEvent = () => {
  return (
    <>
      <Container>
        <Heading>Upcoming Events</Heading>

        <SubHeading>Check out our coming events </SubHeading>

        <SlideDiv>
          {events.map((event, index) => (
            <EventCard key={index}>
              <EventTitle>{event.text}</EventTitle>
              <EventDate>{event.date}</EventDate>
              <EventTime>{event.time}</EventTime>
              <EventVenue>{event.venue}</EventVenue>
              <EventDescription>{event.description}</EventDescription>
              {event.speaker && (
                <SpeakerText>Speaker: {event.speaker}</SpeakerText>
              )}
              <RegisterButton href={event.register} target="_blank">
                Register
              </RegisterButton>
            </EventCard>
          ))}
        </SlideDiv>
      </Container>
    </>
  );
};

export default UpcomingEvent;
