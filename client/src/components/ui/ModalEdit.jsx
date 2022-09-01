import React, { useState } from "react";
import TextInput from "./TextInput";
import styled from "styled-components";
import ModalButton from "./ModalButton";

const BackContainer = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  position: fixed;
  align-items: center;
`;
const ModalContainer = styled.div`
  background: white;
  padding: 16px 24px 8px;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
  width: 70%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: auto;
  margin-top: 16px;
`;

export default function ModalEdit(props) {
  const { open, onClickModal, onCloseModal } = props;
  const [content, setContent] = useState("");
  return (
    <BackContainer open={open}>
      {open && (
        <ModalContainer>
          <ModalButton title="X" onClick={onCloseModal} />
          <TextInput
            height={480}
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
          <ModalButton title="작성하기" onClick={onClickModal} />
        </ModalContainer>
      )}
    </BackContainer>
  );
}