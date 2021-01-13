import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "./components/Modal";
import { GlobalStyle } from "./styles/globalStyles";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 1px solid red;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  outline: 0;
  font-size: 24px;
  background-color: #2c3e50;
  color: white;
  cursor: pointer;
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };
  return (
    <>
      <Wrapper>
        <Button onClick={openModal}>MODAL</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Wrapper>
    </>
  );
}

export default App;
