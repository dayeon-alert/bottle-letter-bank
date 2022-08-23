import React from "react";
import { StyledTextarea } from "../../styles/styles";

function TextInput(props) {
  const { height, value, onChange } = props;
  return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;
