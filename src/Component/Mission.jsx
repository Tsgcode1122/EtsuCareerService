import React from "react";
import styled from "styled-components";
import Heading from "../FixedComponent/Heading";
import missionImg from "../Images/mission.png";
const Mission = () => {
  return (
    <Container>
      <Heading>Our Mission</Heading>
      <Content>
        <p>
          Our mission is to empower students, alumni, and stakeholders by
          educating them through flexible services and resources to enhance
          their quality of life. Our vision is to build a culture of career
          readiness that is essential to the ETSU experience and empower
          students to live the lives they design.{" "}
        </p>
        <img src={missionImg} />
      </Content>
    </Container>
  );
};

export default Mission;
const Container = styled.div`
  background: white;
  padding: 0 1rem;
`;
const Content = styled.div`
  p {
    font-weight: 300;
    text-align: center;
  }
  img {
    max-width: 100%;
  }
`;
