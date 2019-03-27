import React, { Component } from 'react';
import styled from 'styled-components';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Game from './components/Game/Game';

class App extends Component {
	render() {
		return (
			<Router>
				<Container className="App">
					<Route path="/" exact component={LandingPage} />

					<Route
						path="/game/:id"
						component ={Game}
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
	margin: 10px auto 0 auto;
`;

