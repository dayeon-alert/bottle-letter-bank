import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { ModalContainer, BackContainer } from "../../styles/styles";
import axios from "axios";

export default function ModalEdit(props) {
  const { userInfoData, onClickModal, onCloseModal } = props;
  const [inputText, setInputText] = useState("");
  const onPostSubmit = () => {
    if (inputText.trim().length < 1) {
      alert("텍스트를 입력해주세요.");
      return;
    }
    let dataToSubmit = {
      param: {
        post_id: userInfoData.bank_idNum + "-" + Date.now(),
        bank_idNum: userInfoData.bank_idNum,
        user_id: userInfoData.user_id,
        content: inputText,
        lock_yn: "Y",
      },
    };
    axios.post("/api/post/write", dataToSubmit);
    onClickModal();
    onCloseModal();
  };

  return (
    <BackContainer>
      <ModalContainer edit={true}>
        <Button title="X" onClick={onCloseModal} />
        <TextInput
          height={120}
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
        <Button title="작성하기" onClick={onPostSubmit} />
      </ModalContainer>
    </BackContainer>
  );
}
