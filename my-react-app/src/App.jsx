import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled, { keyframes } from "styled-components";
import "./App.css";

const glow = keyframes`
  0% {
    box-shadow: 0 0 20px #ff0000;
  }
  50% {
    box-shadow: 0 0 50px #ff0000;
  }
  100% {
    box-shadow: 0 0 20px #ff0000;
  }
`;

const LightningBorderDiv = styled.div`
  border: 4px solid transparent;
  animation: ${glow} 2s linear infinite;
  background-color: black;
`;

function App() {
  return (
    <LightningBorderDiv>
      This div has a border with an animated lightning glowing red effect!
    </LightningBorderDiv>
  );
}

export default App;
