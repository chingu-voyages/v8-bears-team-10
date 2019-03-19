import React, { Component } from 'react'
import styled from 'styled-components'
export default class UnAuthenticatedUser extends Component {
  render() {
    return (
      <Container>
        <h1>
            Game Name
        </h1>

        <ButtonContainer>
            <button>
                Sign In
            </button>
            <button>
               Register
            </button>

        </ButtonContainer>
      </Container>
    )
  }
}


const Container = styled.div`
display: flex;
flex-direction: column;
background: lightgray;
justify-content:center;
flex: 1;
align-items: center;

`

const ButtonContainer = styled.div`


`