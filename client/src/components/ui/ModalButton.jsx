import React from "react";
import { StyledModalButton } from "../../styles/styles";

export default function ModalButton(props) {
  const { title, onClick } = props;
  return (
    <StyledModalButton onClick={onClick}>{title || "button"}</StyledModalButton>
  );
}
