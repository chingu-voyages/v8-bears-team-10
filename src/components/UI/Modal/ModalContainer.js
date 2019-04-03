<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
||||||| merged common ancestors
import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
=======
import React, { Component } from "react";
import styled from "styled-components";
import Modal from "./Modal";
>>>>>>> b68cfedb3450a5fc4aeaa13d7287d35723169c7f

<<<<<<< HEAD
const modals = ["inventory", "journal", "player", "help"];

const renderModals = () => {
  return modals.map((modal, index) => <Modal key={index} type={modal} />);
};

const ModalContainer = () => {
  return <Container>{renderModals()}</Container>;
};
||||||| merged common ancestors
const modals = ['inventory', 'journal', 'player', 'help'];
class ModalContainer extends Component {
	renderModals = () => {
		return modals.map(modal => <Modal type={modal} />);
	};
	render() {
		return <Container>{this.renderModals()}</Container>;
	}
}
=======
const modals = ["inventory", "journal", "player", "help"];
class ModalContainer extends Component {
  renderModals = () => {
    return modals.map((modal, index) => <Modal key={index} type={modal} />);
  };
  render() {
    return <Container>{this.renderModals()}</Container>;
  }
}
>>>>>>> b68cfedb3450a5fc4aeaa13d7287d35723169c7f

export default ModalContainer;

const Container = styled.div`
<<<<<<< HEAD
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
||||||| merged common ancestors
	margin: 10px 2% 0 2%;
	width: 96%;
	height: 90%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 50% 50%;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	grid-template-areas:
		'journal inventory'
		'help player';
	position: absolute;
	box-sizing: border-box;
=======
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
>>>>>>> b68cfedb3450a5fc4aeaa13d7287d35723169c7f
`;
