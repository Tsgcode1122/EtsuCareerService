import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Button } from "antd";
const WorkInProgress = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates to the previous page in the history stack
  };
  return (
    <Container>
      <Message>🚧 Work in Progress 🚧</Message>
      <Description>Working to bring you this feature. Stay tuned!</Description>
      <Button onClick={handleGoBack}>Go Back</Button>
    </Container>
  );
};
const Button = styled.button`
  padding: 0.5rem 2rem;
  color: white;
  font-size: 1rem;
  background-color: #0d1355;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #000538;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background-color: #f9f9f9;
  color: black;
  text-align: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Message = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;
const HomeButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: #ff6347;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e5533d;
  }
`;
export default WorkInProgress;
