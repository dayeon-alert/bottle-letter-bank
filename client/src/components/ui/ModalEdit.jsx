import React from "react";
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
  max-width: 70%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: auto;
  margin-top: 16px;
`;

export default function ModalEdit(props) {
  const { open, value, onClickModal, onCloseModal } = props;
  return (
    <BackContainer open={open}>
      {open && (
        <ModalContainer>
          {value}
          <ButtonContainer>
            <ModalButton title="아니요" onClick={onCloseModal} />
            <ModalButton title="예" onClick={onClickModal} />
          </ButtonContainer>
        </ModalContainer>
      )}
    </BackContainer>
  );
}
