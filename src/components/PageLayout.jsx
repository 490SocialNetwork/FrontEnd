import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { Redirect } from "react-router";

const PageLayout = (props) => {
  const [shownUsers, setShownUsers] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const [logout, setLogout] = useState(false);
  const handleSearch = (e) => {
    let val = e.target.value;
    setSearchBar(val);
    if (val.trim() === "") {
      setShownUsers([]);
      return;
    }
    const tempArr = props.users.filter((info) =>
      info.userid.includes(val.toLowerCase())
    );
    setShownUsers(tempArr);
  };
  return (
    <Layout>
      {logout && <Redirect to="/" />}

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>BasketBall News</Navbar.Brand>
          <h4 className="me-auto ">
            {localStorage.getItem("admin") === "true" ? "Admin" : "User"}
          </h4>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search Users"
              className="mr-2"
              aria-label="Search"
              value={searchBar}
              onChange={handleSearch}
            />
            <SearchDD>
              {shownUsers.map((info) => (
                <SearchOption>
                  <UserName>{`${info.first_name} ${info.last_name}`}</UserName>
                  <UserID>{info.userid}</UserID>
                </SearchOption>
              ))}
            </SearchDD>
            <Button
              size="lg"
              variant="outline-primary"
              onClick={() => setLogout(true)}
            >
              Logout
            </Button>
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
  form {
    position: relative;
  }
`;
const SearchDD = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 40px;
  background: white;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  > div:last-child {
    border: none;
  }
`;
const SearchOption = styled.div`
  width: 100%;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  flex-direction: column;
  cursor: pointer;
  border-bottom: 1px solid grey;
`;
const UserName = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
const UserID = styled.span`
  font-size: 16px;
`;
