import React from "react";
import { StyledButton } from "../../styles/styles";

export default function Button(props) {
  const { title, onClick } = props;
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}
