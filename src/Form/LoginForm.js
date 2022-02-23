import React, { useState } from "react";
import profile from "../images/a.png";
import pass from "../images/pass.png";
import uname from "../images/email.jpg";
function LoginForm() {
  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmitted, setIsSubmited] = useState(false);
  const data = [
    {
      username: "admin1",
      password: "admin1",
    },
    {
      username: "admin2",
      password: "admin2",
    },
  ];
  const renderErrorMessage = (name) =>
    name === errorMessage.name && (
      <div className="error"> {errorMessage.message}</div>
    );
  const handleSubmit = (event) => {
    event.preventDefault();
    var { username, password } = document.forms[0];
    const user = data.find((user) => user.username === username.value);
    if (user) {
      if (user.password !== password.value) {
        //invalid password
        setErrorMessage({ name: "password", message: "invalid password" });
      } else {
        //submit form and redirect to dashboard
        setIsSubmited(true);
      }
    } else {
      //username not found
      setErrorMessage({ name: "username", message: "invalid username" });
    }
  };
  const renderForm = (
    <div className="form">
      <div className="image-container">
        <img src={profile} alt="profile" className="profile" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          {/* <label>Username </label> */}
          <img src={uname} alt="uname" className="uname" />
          <input type="text" name="username" required className="input" />
          {renderErrorMessage("username")}
        </div>
        <div className="input-container">
          {/* <label>Password </label> */}
          <img src={pass} alt="pass" className="uname" />
          <input type="password" name="password" required className="input" />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  return (
    <div className="login-form">
      <div className="title">
        <h1>Login Page</h1>
      </div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  );
}

export default LoginForm;
