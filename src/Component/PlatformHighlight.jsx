import React from "react";
import styled from "styled-components";
import Heading from "../FixedComponent/Heading";
import { PlayCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { Colors } from "../Colors/ColorComponent";

import VideoImg from "../Images/VideoInstruction.png";
import { Link } from "react-router-dom";
const PlatformHighlight = () => {
  return (
    <>
      <Container>
        <Heading>Platform Highlight</Heading>
        <Content>
          <Focus>
            <Head>Focus2Career</Head>
            <p>
              With Focus2Career (Focus2), explore and compare Majors with these
              career planning resources.
            </p>
            <QuickLink to="/login">
              <Button>Focus2 Login/Register</Button>
            </QuickLink>
          </Focus>
          <VideoInstructions
            href="https://www.youtube.com/watch?v=Ho_P-gUlikA"
            target="_blank"
          >
            <Head style={{ textAlign: "center", padding: "10px" }}>
              Watch Videos
            </Head>
            <img src={VideoImg} />
            <PlayIconWrapper>
              <WaterCircleEffect
                animate={{ scale: [0.6, 1, 0.7], opacity: [0.8, 0.4, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <PlayCircleOutlined
                style={{ fontSize: "48px", color: "#fff", zIndex: 1 }}
              />
            </PlayIconWrapper>
          </VideoInstructions>
          <Focus>
            <Head>HandShake</Head>
            <p>
              With Handshake, search for internships and jobs, connect with
              employers, and learn more about professional development and
              networking opportunities.
            </p>
            <QuickLink
              to="https://etsu.joinhandshake.com/login"
              target="_blank"
            >
              <Button>HandShake Login/Register</Button>
            </QuickLink>
          </Focus>
        </Content>
      </Container>
    </>
  );
};

export default PlatformHighlight;
const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem 3rem 2rem;
`;
const VideoInstructions = styled.a`
  position: relative;
  border-radius: 8px;
  text-decoration: none;

  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  /* max-width: 350px; */
  border-radius: 10px;
  border-top: 1px solid ${Colors.darkBlue};
  img {
    max-width: 100%;
  }

  /* &:hover img {
    transform: scale(1.05);
  } */
`;
const PlayIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
`;

const WaterCircleEffect = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #000538;
  pointer-events: none;
`;
const Focus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* max-width: 350px; */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: ${Colors.offWhite};
  border-top: 1px solid ${Colors.darkBlue};

  position: relative;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const QuickLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  color: ${Colors.lightblue};
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  p {
    font-weight: 300;
    text-align: center;
  }
  img {
    max-width: 100%;
  }
`;
const Head = styled.h3`
  margin: 0;
  color: black !important;
`;
const Button = styled.button`
  color: ${Colors.darkBlue} !important;
  font-weight: 500;
  font-size: 1rem;
  padding: 10px;

  /* background: ${Colors.darkBlue}; */
  border: 1px solid white;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-bottom: 10px;
  animation: glow 3s infinite ease-in-out;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;
  &:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
  }
`;
