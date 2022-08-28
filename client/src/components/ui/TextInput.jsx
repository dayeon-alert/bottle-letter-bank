import React from "react";
import { StyledTextarea } from "../../styles/styles";

function TextInput(props) {
  const { value, onChange } = props;
  return <StyledTextarea value={value} onChange={onChange} />;
}

export default TextInput;
