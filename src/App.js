import React, { Component } from 'react';
import styled from 'styled-components';
// Component Imports
import Bar from './components/UI/Bar/Bar';
import Chat from './components/UI/Chat/Chat';
import ModalContainer from './components/UI/Modal/ModalContainer';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';

class App extends Component {
	render() {
		return (
			<Router>
				<Container className="App">
					<Route path="/" exact component={LandingPage} />

					<Route
						path="/game"
						render={props => (
							<>
								<GameView />
								<Bar />

								<ModalContainer />
								<Chat />
							</>
						)}
					/>
				</Container>
			</Router>
		);
	}
}

export default App;

const Container = styled.div`
	max-width: 1200px;
	background: #f7f7f7;
	height: calc(100vh);
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 0 auto;
`;

const GameView = styled.div`
	border: 1px solid gray;
	display: flex;
	flex: 1;
	margin: 10px 0;
`;
