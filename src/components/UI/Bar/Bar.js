import React, { Component } from 'react';
import styled from 'styled-components';
import ActionContainer from './ActionContainer';
class Bar extends Component {
	render() {
		return (
			<Container>
				<div>Health</div>
				<div>XP</div>
				<ActionContainer />
			</Container>
		);
	}
}

export default Bar;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid gray;
`;
