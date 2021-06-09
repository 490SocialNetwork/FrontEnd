import React, { useEffect, useState } from "react";
import LoginForm from "../../components/LoginForm";
import styled from "styled-components";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const LoginView = () => {
  const [isCreate, setIsCreate] = useState(false);

  const handleLogin = (info) => {
    if (info === "LOGIN") setIsCreate(false);
    else if (info === "SIGNUP") setIsCreate(true);
  };

  return (
    <Layout>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>BasketBall News</Navbar.Brand>
          <Nav className="me-auto">
            <Button
              className="mr-4"
              variant="primary"
              type="submit"
              href="/register">
            
              Sign Up
            </Button>
            <Button
              variant="outline-secondary"
              type="submit"
              href="/login">
              Login
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <h1>Welcome</h1>
    </Layout>
  );
};

export default LoginView;

const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  form {
    width: 100%;
    max-width: 330px;
  }
  nav {
    width: 100%;
    margin-bottom: 75px;
  }
`;
