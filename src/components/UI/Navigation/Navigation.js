import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 250px;
  width: 200px;
`;
const MovementButton = styled.button`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  height: 50px;
  width: 50px;
  text-align: center;
`;
function Navigation() {
  return (
    <Container>
      <MovementButton top="20px" left="95px">
        {" "}
        North{" "}
      </MovementButton>
      <MovementButton top="70px" left="145px">
        {" "}
        East{" "}
      </MovementButton>
      <MovementButton top="120px" left="95px">
        {" "}
        South{" "}
      </MovementButton>
      <MovementButton top="70px" left="45px">
        {" "}
        West{" "}
      </MovementButton>
    </Container>
  );
}

export default Navigation;
