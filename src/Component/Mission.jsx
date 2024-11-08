import React from "react";
import styled from "styled-components";
import Heading from "../FixedComponent/Heading";
import missionImg from "../Images/mission.png";
import { Colors } from "../Colors/ColorComponent";

const Mission = () => {
  return (
    <Container>
      <Content>
        <div>
          <Head>
            <Heading>Our Mission</Heading>
          </Head>
          <Vision>
            <p>
              Our mission is to empower students, alumni, and stakeholders by
              educating them through flexible services and resources to enhance
              their quality of life. Our vision is to build a culture of career
              readiness that is essential to the ETSU experience and empower
              students to live the lives they design.{" "}
            </p>
          </Vision>
          {/* <>
            <Heading>Our Vision</Heading>
            <p>
              Our mission is to empower students, alumni, and stakeholders by
              educating them through flexible services and resources to enhance
              their quality of life. Our vision is to build a culture of career
              readiness that is essential to the ETSU experience and empower
              students to live the lives they design.{" "}
            </p>
          </> */}
        </div>
        <img src={missionImg} />
      </Content>
    </Container>
  );
};

export default Mission;
const Head = styled.div`
  text-align: center;
  @media screen and (min-width: 900px) {
    padding-bottom: 3rem;
  }
`;
const Container = styled.div`
  background: white;
  padding: 0 1rem;
  @media screen and (min-width: 900px) {
    padding-top: 2rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 2rem 4rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 2rem 6rem;
  }
`;
const Vision = styled.div`
  @media screen and (min-width: 900px) {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 30px 30px 10px 30px;
    border-radius: 20px;
  }
`;
const Content = styled.div`
  p {
    font-weight: 300;
    text-align: center;
    @media screen and (min-width: 900px) {
      font-size: 18px;
      line-height: 1.3;
      order: 2;
      background: ${Colors.offWhite};
      border: 1px solid #dedada;
      padding: 10px;
      border-radius: 20px;
      margin-top: -5rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 20px;
      line-height: 1.3;
      order: 2;
    }
  }
  img {
    max-width: 100%;
    @media screen and (min-width: 900px) {
      /* height: 200px;
      width: auto; */
      margin: 0;
      order: 1;
    }
  }
  @media screen and (min-width: 900px) {
    display: grid;

    /* grid-template-columns: 60% 40%; */
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));

    gap: 2rem;
    max-width: 1200px;
    align-items: center;
    margin: 0 auto;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 320px) {
  }
`;
