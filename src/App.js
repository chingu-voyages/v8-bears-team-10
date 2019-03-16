import React, { Component } from 'react';
import styled from 'styled-components';
// Component Imports
import Bar from './components/UI/Bar/Bar';
import ModalContainer from './components/UI/Modal/ModalContainer';

class App extends Component {
	render() {
		return (
			<Container className="App">
				<GameView />
				<Bar />

				<ModalContainer />
			</Container>
		);
	}
}

export default App;

const Container = styled.div`
	max-width: 1200px;
	margin: 10px auto;
	background: #f7f7f7;
	height: calc(100vh - 20px);
	display: flex;
	flex-direction: column;
	position: relative;
`;

const GameView = styled.div`
	border: 1px solid gray;
	display: flex;
	flex: 1;
`;
