import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/actions";

const Modal = props => {
  const { type, activeModals, toggleModal } = props;
  return (
    <Container visible={activeModals[type]} type={type}>
      <Title onClick={() => toggleModal(type)}>{type}</Title>
      <Content>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
      </Content>
    </Container>
  );
};

const mapStateToProps = state => ({
  activeModals: state.gameState.activeModals
});

export default connect(mapStateToProps, actions)(Modal);

const Title = styled.div`
  padding: 5px 10px;
  border: 1px solid gray;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  background: #666;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
const Container = styled.div`
<<<<<<< HEAD
  display: ${props => (props.visible ? "block" : "none")};
  min-width: 100%;
  max-height: 100%;
  justify-self: center;
  grid-area: ${props => props.type};
  opacity: 0.75;
||||||| merged common ancestors
	display: ${props => (props.visible ? 'block' : 'none')};
	min-width: 100%;
	max-height: 100%;
	justify-self: center;
	grid-area: ${props => props.type};
	opacity: 0.75;
=======
	display: ${props => (props.visible ? 'flex' : 'none')};
	flex-direction: column;
	min-width: 100%;
	max-height: 100%;
	justify-self: center;
	grid-area: ${props => props.type};
	opacity: 0.75;
	position: relative;
>>>>>>> b68cfedb3450a5fc4aeaa13d7287d35723169c7f
`;

const Content = styled.div`
  border: 1px solid gray;
  border-radius: 3px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  max-height: 100%;
  border-top: none;
  justify-self: center;
  grid-area: ${props => props.type};
  background: #ebebeb;
  overflow-y: auto;
  padding: 0 5px;
`;
