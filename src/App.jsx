import React from "react";
import Form from "./Form";

function App() {
  // const [fname, setFname] = React.useState("");
  // const [lname, setLname] = React.useState("");

  // function changeFname(event) {
  //   setFname(event.target.value);
  // }

  // function changeLname(event) {
  //   setLname(event.target.value);
  // }

  const [fullName, setFullName] = React.useState({
    fname: "",
    lname: "",
    email: ""
  });

  function changeName(event) {
    // const inputName = event.target.name;
    // const inputVal = event.target.value;
    const { name, value } = event.target;

    setFullName((prevValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
          email: prevValue.email
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value,
          email: prevValue.email
        };
      } else if (name === "myEmail") {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: value
        };
      }
    });
  }

  var isLoggedIn = false;

  function renderConditionally() {
    if (isLoggedIn) {
      return <h1 className="greet">Hello User!</h1>;
    } else {
      return (
        <div>
          <h1 className="greet">
            Hello {fullName.fname} {fullName.lname}
          </h1>
          <p className="greet">{fullName.email}</p>
          <Form
            fname="fname"
            lname="lname"
            emailName="myEmail"
            ipFname={fullName.fname}
            ipLname={fullName.lname}
            ipEmail={fullName.email}
            ipSetName={changeName}
          />
        </div>
      );
    }
  }

  return <div className="full">{renderConditionally()}</div>;
}

export default App;
