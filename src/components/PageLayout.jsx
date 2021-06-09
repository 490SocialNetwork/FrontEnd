import React from "react";
import styled from "styled-components";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
const PageLayout = (props) => {
  return (
    <Layout>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>BasketBall News</Navbar.Brand>
          <h4 className="me-auto ">{props.admin ? "Admin" : "User"}</h4>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search Users"
              className="mr-2"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
      {props.children}
    </Layout>
  );
};

export default PageLayout;

const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  nav {
    width: 100%;
    margin-bottom: 75px;
  }
`;
