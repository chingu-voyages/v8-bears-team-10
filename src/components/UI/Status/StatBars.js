import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  * : {
    padding: 5px;
  }
`;
const HealthBar = styled.div`
  background-color: #660000;
  display: flex;
  justify-content: center;
  height: 10px;
  width: 300px;
  border-radius: 5px;
`;
const ManaBar = styled.div`
  background-color: #274c77;
  display: flex;
  justify-content: center;
  height: 10px;
  width: 300px;
  border-radius: 5px;
`;
const StaminaBar = styled.div`
  background-color: #f0b323;
  display: flex;
  justify-content: center;
  height: 10px;
  width: 300px;
  border-radius: 5px;
`;
function StatBars() {
  return (
    <Container>
      <HealthBar> Health </HealthBar>
      <ManaBar> Mana </ManaBar>
      <StaminaBar> Stamina </StaminaBar>
    </Container>
  );
}

export default StatBars;
