import React from "react";
import Button from "../ui/Button";
import {
  ButtonContainer,
  ModalContainer,
  BackContainer,
} from "../../styles/styles";

export default function Modal(props) {
  const { modalValue, userInfoData, onClickModalTrue, onCloseModal } = props;
  let modalText = "";
  if (modalValue === "unlockPost") {
    modalText = `${userInfoData.coin_cnt}코인 중 1코인을 사용해 쪽지를 열어보겠습니까?`;
  } else if (modalValue === "unlockAllPost") {
    modalText = `지금 저금통을 열면 추가 보상을 얻을 수 없어요. 정말로 열어보시겠습니까?`;
  } else if (modalValue === "unlockAllPostComplete") {
    modalText = `저금통을 열어보시겠습니까?`;
  }
  return (
    <BackContainer>
      <ModalContainer>
        {modalText}
        <ButtonContainer>
          <Button title="예" onClick={onClickModalTrue} />
          <Button title="아니요" onClick={onCloseModal} />
        </ButtonContainer>
      </ModalContainer>
    </BackContainer>
  );
}
