import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginView from "./pages/LoginView";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import HomeView from "./pages/HomeView";
import Register from "./components/Register";
import Login from "./components/login";
import ChatView from "./pages/ChatView";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginView />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <HomeView />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/admin">
            <HomeView admin={true} />
          </Route>
          <Route path="/chat">
            <ChatView />
          </Route>
          <Route path="/createUser">
            <LoginView Admin />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
