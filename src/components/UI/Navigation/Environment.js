import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100%;
  border: 1px solid black;
`;
// renders a list of interactable objects available in the players current room
function Environment(props) {
  return <Container />;
}

export default Environment;
