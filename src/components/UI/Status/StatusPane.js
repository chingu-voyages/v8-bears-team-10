import React from "react";
import styled from "styled-components";
import StatBars from "./StatBars";
const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
const PlayerName = styled.span`font-size: 24px;`;
function StatusPane() {
  return (
    <Container>
      <PlayerName>Name</PlayerName>
      <StatBars />
    </Container>
  );
}

export default StatusPane;
