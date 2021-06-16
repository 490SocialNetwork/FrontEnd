import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import createUser from "../api/createUser";
import authenticate from "../api/authenticate";

function LoginForm({}) {
  const [isCreate, setIsCreate] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCreate) {
      //const CreateRes = createUser();
      setError("Create Account Failed");
    } else {
      const loginRes = authenticate(username);
      setError("Invalid credentials");
    }
    setUsername("");
    setPassword("");
  };
  return (
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
      <Button
        variant="primary"
        type="submit"
        disabled={username.length < 3 && password < 3}
      >
        Submit
      </Button>
      <p className="mt-2 text-danger">{error}</p>
      <Button
        variant="primary"
        size="sm"
        onClick={() => setIsCreate((prev) => !prev)}
      >
        {isCreate ? "Login" : "Create account"}
      </Button>
    </Form>
  );
}

export default LoginForm;
