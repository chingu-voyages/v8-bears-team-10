import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 200px;
  color: white;
  font-weight: bold;
  height: fit-content;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
const HealthBar = styled.div`
  background-color: #660000;
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 80%;
  border-radius: 5px;
`;
const ManaBar = styled.div`
  background-color: #274c77;
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 80%;
  border-radius: 5px;
`;
const StaminaBar = styled.div`
  background-color: #f0b323;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 80%;
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
