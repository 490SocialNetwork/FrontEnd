import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import createUser from "../api/createUser";
import authenticate from "../api/authenticate";
import { Redirect } from "react-router";

function LoginForm({ Admin }) {
  const [isCreate, setIsCreate] = useState(Admin ? true : false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [validLogin, setValidLogin] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isCreate) {
      const tempObj = {
        userid: username,
        first_name: firstName,
        last_name: lastName,
        password_hash: password,
      };
      let CreateRes = await createUser(tempObj);
      console.log(CreateRes);
      if (CreateRes.message == "User created successfully") {
        handleSwitch();
      } else {
        setError("Create Account Failed");
      }
    } else {
      const loginRes = await authenticate(username);
      console.log(loginRes);
      if (loginRes.password_hash === password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("admin", loginRes.isAdmin);
        setValidLogin(true);
      } else {
        setError("Invalid credentials");
      }
    }
    setUsername("");
    setPassword("");
  };
  const handleSwitch = () => {
    setUsername("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setIsCreate((prev) => !prev);
  };
  return (
    <>
      {validLogin && <Redirect to="/home" />}
      <Form onSubmit={handleSubmit}>
        <h1>{isCreate ? "Create Account" : "Login"}</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {isCreate && (
          <>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </>
        )}
        <Button
          variant="primary"
          type="submit"
          disabled={username.length < 3 && password < 3}
        >
          Submit
        </Button>
        <p className="mt-2 text-danger">{error}</p>
        {!Admin && (
          <Button variant="primary" size="sm" onClick={handleSwitch}>
            {isCreate ? "Login" : "Create account"}
          </Button>
        )}
      </Form>
    </>
  );
}

export default LoginForm;
