import React, { Component } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const modals = ["inventory", "journal", "player", "help"];
class ModalContainer extends Component {
  renderModals = () => {
    return modals.map((modal, index) => <Modal key={index} type={modal} />);
  };
  render() {
    return <Container>{this.renderModals()}</Container>;
  }
}

export default ModalContainer;

const Container = styled.div`
  margin: 10px 2% 0 2%;
  width: 96%;
  height: calc(100% - 40px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50% 50%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-areas:
    "journal inventory"
    "help player";
  position: absolute;
  box-sizing: border-box;
  z-index: 10;
`;
