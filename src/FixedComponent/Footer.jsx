import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  WhatsAppOutlined,
  SendOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { Colors } from "../Colors/ColorComponent";
import logo from "../Images/east-tennessee-state-university__etsu.svg";
import map from "../Images/topomap.svg";
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <Container>
        <Content>
          <First>
            <h1>University Career Services - DP Culp Student Center</h1>
            <p>
              Carrier Center, Room 222A - 412 J.L. Seehorn Dr. | PO Box 70718
            </p>
            <p>
              Johnson City, TN 37614{" "}
              <a href="http://maps.google.com/?q=Carrier%20Center,%20Room%20222A%20-%20412%20J.L.%20Seehorn%20Dr.+Johnson%20City+TN">
                ( Get Directions)
              </a>{" "}
            </p>
            <p>Phone: 423-439-4450</p>
            <h3>DIVISION OF STUDENT LIFE AND ENROLLMENT</h3>
          </First>
          <div>
            <Link to="/">
              <Logo src={logo} alt="Logo" />
            </Link>
          </div>
          <Bigger>
            <Big>
              <div>
                <SubHead>Quick Links</SubHead>
                <Split>
                  <Split1>
                    <Link to="/">Home</Link>
                    <Link to="/work-in-progress">Sample Resumes</Link>
                    <Link to="work-in-progress">Contact</Link>
                    <Link to="/work-in-progress">Bucky's Career Closet</Link>
                    <Link to="/work-in-progress">Online Resources</Link>
                    <Link to="/work-in-progress">Experimental Learning</Link>
                  </Split1>
                  <Split2>
                    <Link to="/work-in-progress">
                      Resume | Employment Services
                    </Link>
                    <Link to="/work-in-progress">Career Fairs</Link>
                    <Link to="/work-in-progressn">Post a Job | Handshake</Link>

                    <Link to="/work-in-progress">Employer Service</Link>
                    <Link to="/work-in-progress">Faculty & Staff</Link>
                    <Link to="/work-in-progress">Families</Link>
                  </Split2>
                </Split>
              </div>
              <Socials>
                <SubHead>Contact us</SubHead>

                <Mail>
                  <ContactText href="mailto:careers@etsu.edu">
                    <FaEnvelope />
                    careers@etsu.edu
                  </ContactText>
                  <ContactText href="tel:423-439-4450">
                    <FaPhone />
                    423-439-4450
                  </ContactText>
                </Mail>
              </Socials>
            </Big>
          </Bigger>
          <End>© 2024 University Career Service - All rights reserved</End>
        </Content>
      </Container>
    </>
  );
};

export default Footer;

const First = styled.div`
  padding-top: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  h1 {
    color: ${Colors.yellow};
    text-align: center;
    text-decoration: underline;
    text-decoration-color: #364679;
    text-decoration-thickness: 0.5px;
    text-underline-offset: 4px;
    margin: 0;
    @media screen and (max-width: 320px) {
      font-size: 1.4rem;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 1.6rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 1.6rem;
    }
  }
  p {
    margin: 0;
    font-weight: 300;
    font-size: 16px;
    @media screen and (min-width: 1000px) {
      font-size: 18px;
      font-weight: 300;
      line-height: 15px;
    }
    a {
      color: white;
    }
  }
  h3 {
    font-weight: 300;
  }
`;
const Mail = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin-top: 0rem;
  margin-bottom: 1rem;
`;

const ContactText = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;

  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    font-size: 1rem;
  }
`;
const SubHead = styled.h3`
  color: #e6e6e6;
  font-weight: 600;
  margin: 0;
  padding: 30px 0 20px 0;
  @media screen and (min-width: 1000px) {
    padding: 0px 0 20px 0;
  }
`;
const Intro = styled.p`
  color: #b3b3b3;
  font-weight: 200;
`;
const Logo = styled.img`
  max-width: 100%;
  height: 10rem;
  @media screen and (min-width: 600px) {
    height: 8rem;
  }
`;
const Split = styled.div`
  display: flex;
  color: #b3b3b3;
  gap: 100px;
  a {
    text-decoration: none;
    color: #b3b3b3 !important;
    font-size: 14px;
    cursor: pointer;
    @media screen and (min-width: 1000px) {
      font-size: 18px;
      font-weight: 300;
      line-height: 20px;
    }
    &:hover {
      color: #ffffff !important;
      transform: translateX(5px);
    }
  }
  @media screen and (max-width: 320px) {
    gap: 30px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    gap: 40px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    gap: 50px;
  }
  /* @media screen and (min-width: 1000px) {
    gap: 20px;
  } */
`;
const Split1 = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  a {
    /* @media screen and (min-width: 1000px) {
      min-width: 100px;
    } */

    text-decoration: none;
    color: white;
    @media screen and (min-width: 1000px) {
      font-size: 18px;
      font-weight: 300;
      line-height: 20px;
    }
    @media screen and (max-width: 320px) {
      min-width: 100px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      min-width: 120px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      min-width: 120px;
    }
  }
`;
const Split2 = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  a {
    /* @media screen and (min-width: 1000px) {
      min-width: 200px;
    } */

    text-decoration: none;
    color: white;
  }
`;

const Socials = styled.div``;
// const ContactText = styled.a`
//   text-decoration: none;
//   color: white;
//   &:hover {
//     color: #ffffff !important;
//     transform: scale(1.2);
//   }
// `;
const End = styled.div`
  text-align: center;
  padding: 10px 0;

  border-top: 0.3px solid #bababa;
`;
const Contact = styled.div`
  display: flex;
  padding: 40px 0;
  gap: 30px;
  flex-wrap: wrap;
  /* border-bottom: 0.3px solid #bababa; */
`;
const Container = styled.div`
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: ${Colors.darkBlue};
`;
const Big = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    gap: 100px;
    padding: 0 0 2rem 0;
  }
  /* @media screen and (min-width: 1000px) {
    gap: 10px;
  } */
`;
const Bigger = styled.div`
  /* @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  } */
`;
const Content = styled.div`
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-image: url(${map}); */
  /* background-size: cover; */
  background-position: center;
  @media screen and (min-width: 800px) {
    padding: 2rem 4rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 2rem 6rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 2rem 9rem;
  }
`;
