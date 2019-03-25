import React from "react";
import styled from "styled-components";
const ActionContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Action = styled.button`
  height: 100px;
  width: 100px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

function ActionPane() {
  return (
    <ActionContainer>
      <Row>
        <Action> Inventory </Action>
        <Action> Help </Action>
      </Row>
      <Row>
        <Action> Journal </Action>
        <Action> Player </Action>
      </Row>
    </ActionContainer>
  );
}

export default ActionPane;
