import React from 'react';
import styled from 'styled-components';
import ActionButton from './ActionButton';

const ActionContainer = () => {
	return (
		<Container>
			<ActionButton type="Inventory" />
			<ActionButton type="Player" />
			<ActionButton type="Journal" />
			<ActionButton type="Help" />
		</Container>
	);
};

export default ActionContainer;

const Container = styled.div`
	display: flex;
`;
