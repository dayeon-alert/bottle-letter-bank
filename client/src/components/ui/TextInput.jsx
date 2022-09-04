import React from "react";
import { StyledTextarea } from "../../styles/styles";

function TextInput(props) {
  const { height, value, onChange } = props;
  return <StyledTextarea value={value} onChange={onChange} height={height} />;
}

export default TextInput;
