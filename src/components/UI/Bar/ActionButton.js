import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from './../../../redux/actions/actions';

const ActionButton = props => {
	return <Button onClick={() => props.toggleModal(props.type)}>{props.type}</Button>;
};

export default connect(
	null,
	actions
)(ActionButton);
const Button = styled.div`
	border: 1px solid gray;
	border-radius: 3px;
	background: gray;
	color: white;
	padding: 8px 10px;
	cursor: pointer;
	margin: 2px 3px;
`;
