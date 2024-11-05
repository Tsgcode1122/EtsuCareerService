import React, { useState } from "react";
import styled from "styled-components";
import { color, motion } from "framer-motion";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Colors } from "../Colors/ColorComponent";
import Heading from "../FixedComponent/Heading";

const Faqs = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  const toggleFaq = (index) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  const faqs = [
    {
      question: "What services does the Career Center provide?",
      answer:
        "The Career Center offers resume reviews, career counseling, job search strategies, interview preparation, and access to career fairs and networking events.",
    },
    {
      question: "How can I book an appointment with a career advisor?",
      answer:
        "You can schedule an appointment through our online booking system on the Career Center’s website or by calling the office directly.",
    },
    {
      question: "Do I need an appointment to have my resume reviewed?",
      answer:
        "While appointments are recommended, the Career Center also offers drop-in hours for quick resume reviews. Check our website for drop-in availability.",
    },
    {
      question: "Can the Career Center help me find internships?",
      answer:
        "Yes! We offer internship resources, job boards, and connections with employers looking for interns. Advisors can also guide you in applying to internship programs.",
    },
    {
      question: "What are career fairs, and when are they held?",
      answer:
        "Career fairs are networking events where you can meet potential employers. We host fairs each semester, typically in the fall and spring. Check our events page for specific dates.",
    },
    {
      question: "How can I prepare for an interview?",
      answer:
        "The Career Center offers mock interview sessions where you can practice and receive feedback. We also provide tips and resources for answering common interview questions.",
    },
    {
      question: "Are there resources for alumni looking for jobs?",
      answer:
        "Yes, alumni can access many of our career services, including job listings, resume assistance, and career counseling, even after graduation.",
    },
    {
      question: "Can you help me decide on a career path?",
      answer:
        "Absolutely! Our career advisors provide guidance through assessments and conversations to help you discover career options that align with your interests and skills.",
    },
    {
      question: "How do I register for career workshops or events?",
      answer:
        "Registration for career workshops and events is available through our website's events calendar. Simply select an event and follow the registration instructions.",
    },
    {
      question: "Are there any fees for using Career Center services?",
      answer:
        "No, our services are free for students and alumni, including resume reviews, career counseling, and access to job boards.",
    },
  ];

  return (
    <>
      <FaqsContainer id="faqs">
        <Content>
          <Heading>Faqs</Heading>
          <SubHead>
            Explore common questions and answers about our career services,
            designed to guide you on your path to professional success.
          </SubHead>

          <Split>
            {faqs.map((faq, index) => (
              <FaqItem key={index}>
                <Question onClick={() => toggleFaq(index)}>
                  {faq.question}
                  <IconWrapper>
                    {selectedFaq === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </IconWrapper>
                </Question>
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: selectedFaq === index ? "auto" : 0,
                    opacity: selectedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </Answer>
              </FaqItem>
            ))}
          </Split>
        </Content>
      </FaqsContainer>
    </>
  );
  xw;
};

export default Faqs;

const FaqsContainer = styled.div`
  position: relative;
  background: white;

  background-position: 10% top;
  background-size: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 320px) {
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
  @media screen and (min-width: 800px) {
    padding: 0 1.5rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 8rem;
  }
`;

const Content = styled.div`
  padding: 2rem;

  @media screen and (max-width: 320px) {
    border-radius: 30px;
    padding: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1.5rem;
  }
  @media screen and (min-width: 800px) {
    text-align: center;
  }
`;

// const Heading = styled.h2`
//   font-size: 51px;

//   font-weight: 600;
//   font-family: "Playfair Display", serif;

//   margin: 0px;
//   @media screen and (max-width: 320px) {
//     font-size: 41px;
//   }
//   @media (min-width: 321px) and (max-width: 399px) {
//     font-size: 41px;
//   }
//   @media (min-width: 400px) and (max-width: 499px) {
//     font-size: 41px;
//   }
// `;
const SubHead = styled.h5`
  margin-top: 1rem;
  font-size: 16px;
  color: #6e6e6e;
  font-weight: 400;

  font-family: "Poppins", sans-serif;
  margin: 0px;
  @media screen and (min-width: 800px) {
    font-size: 17px;
    display: inline-flex;
    max-width: 400px;
    padding-bottom: 1rem;
  }
`;

const Split = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

const FaqItem = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid #bbbaba;
  @media screen and (min-width: 800px) {
    width: calc(50% - 1rem);
  }
`;

const Question = styled.div`
  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const Answer = styled(motion.div)`
  overflow: hidden;
  padding: 0 0rem;

  border-radius: 4px;
  color: #6e6e6e;
  p {
    margin: 0;
    padding: 1rem 0;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;
