import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import createUser from "../api/createUser";
import authenticate from "../api/authenticate";

function LoginForm({ isCreate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {    
    e.preventDefault();
    if (isCreate) {
      
      //const CreateRes = createUser();
      setError("Create Account Failed");
    } else {
      //const loginRes = authenticate();
      setError("Invalid credentials");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h1>{isCreate ? "Create Account" : "Login"}</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Admin"
          value={isAdmin}
          onChange={(e) => setIsAdmin(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={email.length < 3 && password < 3}
      >
        Submit
      </Button>
      <p className="mt-2 text-danger">{error}</p>
    </Form>
  );
}

export default LoginForm;
