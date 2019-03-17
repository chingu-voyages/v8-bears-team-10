import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const modals = ["inventory", "journal", "player", "help"];

const renderModals = () => {
  return modals.map(modal => <Modal type={modal} />);
};

const ModalContainer = () => {
  return <Container>{renderModals()}</Container>;
};

export default ModalContainer;

const Container = styled.div`
  margin: 10px 2% 0 2%;
  width: 96%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50% 50%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-areas: "journal inventory" "help player";
  position: absolute;
  box-sizing: border-box;
`;
