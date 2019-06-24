import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Context from "../context/context";

import "../css/login.css";

export default () => {

    const context = useContext(Context);
    const privateRoute = localStorage.getItem("privateRoute");


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(context);
        // context.setPrivateRoute(true);
        localStorage.setItem("privateRoute", true)
    }

    if (privateRoute) {
        return (
            <Redirect to="/homepage"></Redirect>
        );
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            <form className="form-signin" onSubmit={handleSubmit}>
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>

                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                <hr className="my-4" />
                                {/* <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                                <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}