import React from "react";

function Input(props) {
  return (
    <input
      name={props.name}
      className="inputField"
      type={props.itype}
      placeholder={props.iPlaceholder}
      onChange={props.ipSetName}
      value={props.ipName}
    />
  );
}

export default Input;
