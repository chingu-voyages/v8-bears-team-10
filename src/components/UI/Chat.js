import React from "react";
import styled from "styled-components";
const ChatContainer = styled.div`
  height: 100%;
  width: 70%;
  background-color: #c8c8c8;
  border-radius: 10px;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  height: 80%;
  padding: 10px;
  * {
    margin: 2px;
  }
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: row;
  padding: 0 10px 20px 10px;
`;
const ChatInput = styled.input`
  width: 90%;
  z-index: 4;
  border-radius: 10px;
`;

const SendButton = styled.button`
  height: 30px;
  border-radius: 10px;
  letter-spacing: 1.5px;
`;
function Chat() {
  return (
    <ChatContainer>
      <MessageContainer />
      <InputForm
        onSubmit={e => {
          e.stopPropagation();
          e.preventDefault();
          console.log("dummy dispatch");
        }}
      >
        <ChatInput />
        <SendButton>SEND</SendButton>
      </InputForm>
    </ChatContainer>
  );
}

export default Chat;
