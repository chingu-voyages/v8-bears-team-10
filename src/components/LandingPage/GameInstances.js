import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
// will need to get instances and data from server
const fakeInstances = [1, 2, 3];
class GameInstances extends Component {
	render() {
		return (
			<Container>
				{fakeInstances.map(instance => {
					return (
						<Instance key = {instance}>
							<h3>Game World {instance}</h3>
							<p># / 10 Players</p>
							<Link to = {`/game/${instance}`}>Join!</Link>
						</Instance>
					);
				})}
			</Container>
		);
	}
}

export default GameInstances;

const Container = styled.div`
	display: flex;
	padding: 10px;
	margin-top: 10px;
	border: 1px solid gray;
`;

const Instance = styled.div`
	border: 1px solid gray;
	padding: 5px 10px;
	margin: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
`;
