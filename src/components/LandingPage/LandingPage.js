import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';
import GameInstances from './GameInstances';

class LandingPage extends Component {
	handleLogin = () => {
		this.props.handleLogin();
	};
	handleLogout = () => {
		console.log('lo');
		this.props.handleLogout();
	};
	renderPage = () => {
		if (this.props.isAuthenticated) {
			return (
				<>
					<h1>Game Name</h1>
					<h2>Welcome Back User</h2>
					<GameInstances />
					<br />
					<button onClick={this.handleLogout}>sign out</button>
				</>
			);
		} else {
			return (
				<>
					<h1>Game Name</h1>

					<ButtonContainer>
						<button onClick={this.handleLogin}>Sign In</button>
						<button>Register</button>
					</ButtonContainer>
				</>
			);
		}
	};

	render() {
		return <Container>{this.renderPage()}</Container>;
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.userState.isAuthenticated
});

export default connect(
	mapStateToProps,
	actions
)(LandingPage);

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: lightgray;
	justify-content: flex-start;
	flex: 1;
	align-items: center;
	padding-top: 100px;
`;

const ButtonContainer = styled.div``;
