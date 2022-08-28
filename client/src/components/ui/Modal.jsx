import React from "react";
import styled from "styled-components";
import ModalButton from "../ui/ModalButton";

const PostContainer = styled.div`
  background: white;
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const ModalContainer = styled.div`
  width: calc(100% - 32px);
  display: flex;
  justify-content: center;
  position: fixed;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

export default function Modal(props) {
  const { value, onClickClose, onClickModal } = props;

  return (
    <ModalContainer>
      <PostContainer>
        <ContentText>{value}</ContentText>
        <ButtonContainer>
          <ModalButton title="아니요" onClick={onClickClose} />
          <ModalButton title="예" onClick={onClickModal} />
        </ButtonContainer>
      </PostContainer>
    </ModalContainer>
  );
}
