import React, { Component } from 'react';

import styled from 'styled-components';
const io = require('socket.io-client');
const socket = io('http://localhost:3001/');
class Chat extends Component {
	constructor(props) {
		super(props);
		this.onSend = this.onSend.bind(this);
		this.state = {
			messages: ['tes']
		};
		socket.on('message_received', message => {
			console.log('rec', message);
			const { messages } = this.state;
			messages.push(message);
			this.setState({
				messages
			});
		});
	}

	onSend(e) {
		var user = 'User';
		var messageText = document.getElementById('textToSend').value;
		if (messageText.length === 0) {
			return 0;
		}
		var fullMessage = user + ': ' + messageText;
		socket.emit('message_sent', { message: fullMessage, roomId: 1 });
	}

	renderMessages() {
		return this.state.messages.map(message => {
			return <p>{message}</p>;
		});
	}
	render() {
		return (
			<Container>
					<Input>
					<input id="textToSend" type="text" />
					<button className="button" onClick={this.onSend}>
						Send
					</button>
				</Input>
				{' '}
				<Title>Chat</Title>
				<Messages>{this.renderMessages()}</Messages>
			
			</Container>
		);
	}
}

export default Chat;

const Title = styled.div`
	font-size: 20px;
	border-bottom: 1px solid black;
	padding: 3px 8px;
`;

const Container = styled.div`
	position: absolute;
	bottom: 75px;
	left: 25px;
	width: 235px;
	height: 300px;
	border: 1px solid black;
	opacity: 0.6;
	background: #f0f0f0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 20;
`;

const Messages = styled.div`
	overflow-y: auto;
	flex: 1;
	padding: 5px;
	p {
		margin: 0.25rem 0;
	}
`;

const Input = styled.div`
	padding: 5px;

`;
