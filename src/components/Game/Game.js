import React, { Component } from "react";
import styled from "styled-components";
// Component Imports
import Bar from "./../UI/Bar/Bar";
import Chat from "./../UI/Chat/Chat";
import ModalContainer from "./../UI/Modal/ModalContainer";
export default class Game extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <GameView>
          <ModalContainer />
        </GameView>
        <Bar />

        <Chat />
      </>
    );
  }
}

const GameView = styled.div`
  border: 1px solid gray;
  display: flex;
  flex: 1;
  position: relative;
`;
