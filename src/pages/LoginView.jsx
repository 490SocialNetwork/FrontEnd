import React, { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Redirect } from "react-router";

const LoginView = ({ Admin }) => {
  const [viewLogin, setViewLogin] = useState(false);
  const [viewHome, setViewHome] = useState(false);
  return (
    <Layout>
      {viewLogin && <Redirect to="/" />}
      {viewHome && <Redirect to="/home" />}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>BasketBall News</Navbar.Brand>
          <Nav className="me-auto"></Nav>
          {Admin && (
            <>
              <Button
                onClick={() => setViewHome(true)}
                size="lg"
                variant="primary"
              >
                Home
              </Button>
              <Button
                onClick={() => setViewLogin(true)}
                size="lg"
                variant="outline-secondary"
              >
                Log Out
              </Button>
            </>
          )}
        </Container>
      </Navbar>
      <LoginForm Admin={Admin} />
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
