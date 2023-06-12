import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="login">
      <Input
        name={props.fname}
        iType="text"
        iPlaceholder="FirstName"
        ipName={props.ipFname}
        ipSetName={props.ipSetName}
      />
      <Input
        name={props.lname}
        iType="text"
        iPlaceholder="LastName"
        ipName={props.ipLname}
        ipSetName={props.ipSetName}
      />
      <Input
        name={props.emailName}
        iType="email"
        iPlaceholder="Email"
        ipName={props.ipEmail}
        ipSetName={props.ipSetName}
      />
      <button type="button" className=" button btn btn-lg">
        Login
      </button>
    </form>
  );
}

export default Form;
