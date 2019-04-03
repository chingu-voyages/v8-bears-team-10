import React from "react";
import styled from "styled-components";
// Component Imports
import Chat from "./components/UI/Chat";
import ActionPane from "./components/UI/ActionPane";
import StatusPane from "./components/UI/Status/StatusPane";
import Environment from "./components/UI/Navigation/Environment";
import Navigation from "./components/UI/Navigation/Navigation";
const Root = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  background: #f7f7f7;
  height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Container = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: row;
`;

const View = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const GameView = styled.div`
  border: 1px solid gray;
  height: 100%;
  width: 70%;
  display: flex;
  flex: 1;
`;
const GameOutput = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  border: 1px solid black;
`;
const GameInfo = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Root className="App">
      <View>
        <GameView>
          <GameOutput />
          <GameInfo>
            <StatusPane />
            <Environment />
            <Navigation />
          </GameInfo>
        </GameView>
      </View>
      <Container>
        <Chat />
        <ActionPane />
      </Container>
    </Root>
  );
};

export default App;
