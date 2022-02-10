import React from "react";
import styled from "styled-components";

export default function home() {
  return (
    <WelcomeWrapper>
      <h1>Welcome </h1>
    </WelcomeWrapper>
  );
}
const WelcomeWrapper = styled.div`
  text-align: center;
  display: flex;
`;
