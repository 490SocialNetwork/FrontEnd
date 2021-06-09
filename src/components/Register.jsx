import React, {Component} from 'react';
// import Header from "../elements/header";
// import Sidebar from "../elements/sidebar";
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';

export default class Register extends Component {

    state = {
        redirect: false,
        toDashboard: false,
        isLoading: false
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const token = localStorage.getItem('token');
        const url = 'http://localhost:8080/api/newuser';
        const name = document.getElementById('first_name').value;
        const lname = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        let bodyFormData = new FormData();
        bodyFormData.set('first_name', name);
        bodyFormData.set('last_name', lname);
        bodyFormData.set('email', email);
        bodyFormData.set('password_hash', password);
        var object = {};
        bodyFormData.forEach(function(value, key){
          object[key] = value;
        });
        var json = JSON.stringify(object);

        axios.post(url, json)
            .then(result => {
              console.log(result.status);
              console.log(result.data.status);
                if (result.status === 200) {
                  alert('Registration Successful');
                    this.setState({redirect: true, isLoading: false})
                }
                else{
                  alert('Registration failed');
                }
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <div id="wrapper">
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/'} >Home</Link>
                                </li>
                                <li className="breadcrumb-item active">Add</li>
                            </ol>
                        </div>
                        <div className="container-fluid">
                            <div className="card mx-auto">
                                <div className="card-header">Register</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="text" id="first_name" className="form-control" placeholder="Enter first name" required="required" autoFocus="autofocus" />
                                                        <label htmlFor="first_name">Enter first name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="text" id="last_name" className="form-control" placeholder="Enter last name" required="required" />
                                                        <label htmlFor="last_name">Enter last name</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="email" id="email" className="form-control" placeholder="Email address" required="required" />
                                                        <label htmlFor="email">Email address</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="password" id="password" className="form-control" placeholder="Enter Password" required="required"/>
                                                        <label htmlFor="password">Enter Password</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
      
                                        <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Register &nbsp;&nbsp;&nbsp;
                                            {isLoading ? (
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
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
                                    <span>Copyright © BasketBall News <div>{(new Date().getFullYear())}</div></span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}
