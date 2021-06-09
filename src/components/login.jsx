import React, { Component } from "react";
// import Header from "../elements/header";
// import Sidebar from "../elements/sidebar";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import LoginView from "../pages/home/LoginView";

export default class Login extends Component {
  state = {
    redirect: false,
    toDashboard: false,
    isLoading: false,
    user: "",
    admin: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const token = localStorage.getItem("token");
    const url = "http://localhost:8080/api/user";
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let bodyFormData = new FormData();
    bodyFormData.set("email", email);
    bodyFormData.set("password_hash", password);
    var object = {};
    bodyFormData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);

    axios.get(url).then((result) => {
      console.log(result.data);
      let flag = false;
      for (let i = 0; i < result.data.length; i++) {
        console.log(result.data[i]);
        if (
          result.data[i].email == email &&
          result.data[i].password_hash == password
        ) {
          console.log("Success");
          this.setState({ toDashboard: true });
          this.setState({ page: result.data[i].first_name });
          this.setState({ admin: result.data[i].isAdmin });
          flag = true;
        }
      }
      if (flag === false) {
        alert("Incorrect Login, Try again");
      }
    });
    this.setState({ isLoading: false });
    return <Redirect to="/login" />;
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    const isLoading = this.state.isLoading;
    if (this.state.toDashboard === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {this.state.toDashboard && <Redirect to="/home" />}
        <div id="wrapper">
          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Login</li>
              </ol>
            </div>
            <div className="container-fluid">
              <div className="card mx-auto">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="email"
                              className="form-control"
                              placeholder="Enter email"
                              required="required"
                              autoFocus="autofocus"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              placeholder="Enter password"
                              required="required"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      disabled={this.state.isLoading ? true : false}
                    >
                      Login &nbsp;&nbsp;&nbsp;
                      {isLoading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      ) : (
                        <span></span>
                      )}
                    </button>
                  </form>
                  {this.renderRedirect()}
                </div>
              </div>
            </div>

            <footer className="sticky-footer">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>
                    Copyright © BasketBall News{" "}
                    <div>{new Date().getFullYear()}</div>
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
