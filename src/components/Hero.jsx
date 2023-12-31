import React from "react";
import styled from "styled-components";


const Section = styled.section`
  background: url(${({ bg }) => bg && bg}) center;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: -60px;
`;

const Container = styled.div`
  color: #fff;
  padding: 2rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  border-radius: 10px;

  h1 {
    font-size: clamp(1.5rem, 8vw, 4rem);
    margin-bottom: 0.5rem;
    color: orange;
  }

  p {
    font-size: clamp(0.5rem, 6vw, 1.2rem);
    margin-bottom: 1rem;
  }

  button {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    padding: 0.8rem 2rem;
    color: #000;
    background: #ffb347;
    background: linear-gradient(to right, #ffcc33, #ffb347);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    &:hover{
      background:#fff;
    }
  }
`;

const Hero = ({ bg, title, desc }) => {
  return (
    <Section bg={bg}>
      <Container>
        <h1>{title}</h1>
        <p>{desc}</p>
        <button>Learn More</button>
      </Container>
    </Section>
  );
};

export default Hero;
