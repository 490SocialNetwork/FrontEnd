import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LoginView from "./pages/home/LoginView";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./pages/home/HomeView";
import Register from "./components/Register";
import Login from "./components/login";


ReactDOM.render(
  <React.StrictMode>
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
          <Register/>
        </Route>
        <Route path="/admin">
          <HomeView admin={true} />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
