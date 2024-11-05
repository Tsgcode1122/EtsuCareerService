// Heading.js
import styled from "styled-components";

const Title = styled.h3`
  font-size: 2.2rem;
  font-weight: bolder;
  padding: 0 !important;
  margin-bottom: 15px;
  color: #000538;
  text-align: center;
  line-height: 1;
  @media screen and (max-width: 320px) {
    font-size: 1.7rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.9rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 800px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 2.2rem;
  }
`;

const Heading = ({ children }) => {
  return (
    <Title>
      <span
        style={{
          display: "inline-block",
          background:
            "linear-gradient(90deg, transparent, transparent, transparent, #e7e7e7, #cad4eb)",
          paddingRight: "10px",
          borderRadius: "5px ",
        }}
      >
        {children}
      </span>
    </Title>
  );
};

export default Heading;
