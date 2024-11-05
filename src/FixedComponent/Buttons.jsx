// Buttons.js
import styled from "styled-components";
import { motion } from "framer-motion";

// Primary Button
export const Button = styled.button`
  padding: 1rem 4rem;
  color: white !important;
  font-size: 1rem;
  background: linear-gradient(
    20deg,
    #000538,
    #0d1355,
    #000538,
    #0d1355,
    #0d1355
  );
  background-size: 200% 200%;
  border: 1px solid white;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 10px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;
  animation: glow 3s infinite ease-in-out;
  &:hover {
    background-color: #0d1355;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
  }
  @keyframes glow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

// Secondary Button with Motion
export const Button1 = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid white;
  border-radius: 15px;
  color: white;
  background: linear-gradient(90deg, transparent 90%, #0d1355 100%);
  background-size: 200% 100%;
  cursor: pointer;
  &:hover {
    color: white;
  }
  &:active,
  &:focus {
    background-position-x: 0%;
    color: white;
    outline: none;
  }
`;
